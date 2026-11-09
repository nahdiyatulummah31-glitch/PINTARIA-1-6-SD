import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  BookOpen,
  Search,
  CheckCircle2,
  Play,
  Printer,
  Compass,
  Layers,
  ArrowRight,
  Filter,
  Sparkles,
  BookMarked,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Award,
  PenTool,
  HelpCircle,
  X,
  Check,
  Zap,
} from 'lucide-react';
import {
  CURRICULUM_SYLLABUS,
  SubjectSyllabus,
  getAllSyllabiByCurriculum,
} from '../data/curriculumSyllabus';
import { CurriculumId, GradeLevel, SubjectId, Question } from '../types/quiz';
import {
  CURRICULUM_METAS,
  getQuestionsForSyllabus,
  getQuestionsByGradeAndSubject,
} from '../data/questionBank';
import { sounds } from '../utils/soundEffects';
import { speechReader } from '../utils/speechReader';
import { ScratchpadModal } from './ScratchpadModal';
import { ReadAloudButton } from './ReadAloudButton';

interface SyllabusViewProps {
  currentCurriculum: CurriculumId;
  onSelectCurriculum: (c: CurriculumId) => void;
  onStartQuiz: (grade: GradeLevel, subjectId: SubjectId | 'all', strand?: string, topic?: string) => void;
  onOpenBank: (grade: GradeLevel, subjectId: SubjectId | 'all', strand?: string) => void;
  onOpenPrint: (grade: GradeLevel, subjectId: SubjectId) => void;
  isSingleClassLock?: boolean;
  lockedGrade?: GradeLevel;
}

export const SyllabusView: React.FC<SyllabusViewProps> = ({
  currentCurriculum,
  onSelectCurriculum,
  onStartQuiz,
  onOpenBank,
  onOpenPrint,
  isSingleClassLock = false,
  lockedGrade,
}) => {
  const initialGradeState = isSingleClassLock && lockedGrade ? lockedGrade : 'all';
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel | 'all'>(initialGradeState);
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected topic for highlighting or focused practice
  const [selectedTopicState, setSelectedTopicState] = useState<{
    curriculum: CurriculumId;
    subjectId: SubjectId;
    grade: GradeLevel;
    strandName: string;
    topicName: string;
  } | null>(null);

  // Expanded strand question previews: key = `${curriculum}-${subjectId}-${grade}-${strandName}`
  const [expandedStrands, setExpandedStrands] = useState<Record<string, boolean>>({});

  // In-place Quick Drill Modal State
  const [drillModalOpen, setDrillModalOpen] = useState<boolean>(false);
  const [drillTitle, setDrillTitle] = useState<string>('');
  const [drillSubtitle, setDrillSubtitle] = useState<string>('');
  const [drillQuestions, setDrillQuestions] = useState<Question[]>([]);
  const [drillCurrentIdx, setDrillCurrentIdx] = useState<number>(0);
  const [drillAnswers, setDrillAnswers] = useState<Record<number, number>>({});
  const [drillFinished, setDrillFinished] = useState<boolean>(false);
  const [isScratchpadOpen, setIsScratchpadOpen] = useState<boolean>(false);

  const activeCurriculum = currentCurriculum;

  const curriculumMeta = CURRICULUM_METAS[activeCurriculum];

  // Syllabi for active curriculum
  const curriculumSyllabi = useMemo(() => {
    return getAllSyllabiByCurriculum(activeCurriculum);
  }, [activeCurriculum]);

  // Unique subjects available in syllabus
  const availableSubjects = useMemo(() => {
    const map = new Map<string, string>();
    curriculumSyllabi.forEach((s) => {
      map.set(s.subjectId, s.subjectName);
    });
    return Array.from(map.entries()).map(([id, name]) => ({ id, name }));
  }, [curriculumSyllabi]);

  // Filtered list
  const filteredSyllabi = useMemo(() => {
    return curriculumSyllabi
      .filter((s) => {
        if (selectedGrade !== 'all' && s.grade !== selectedGrade) return false;
        if (selectedSubjectFilter !== 'all' && s.subjectId !== selectedSubjectFilter) return false;
        return true;
      })
      .map((s) => {
        if (!searchQuery.trim()) return s;
        const q = searchQuery.toLowerCase();
        const matchesSubject = s.subjectName.toLowerCase().includes(q);
        const filteredStrands = s.strands
          .map((strand) => ({
            ...strand,
            topics: strand.topics.filter(
              (t) =>
                t.toLowerCase().includes(q) ||
                strand.name.toLowerCase().includes(q) ||
                matchesSubject
            ),
          }))
          .filter((strand) => strand.topics.length > 0);

        return {
          ...s,
          strands: filteredStrands,
        };
      })
      .filter((s) => s.strands.length > 0);
  }, [curriculumSyllabi, selectedGrade, selectedSubjectFilter, searchQuery]);

  const totalTopicsCount = useMemo(() => {
    return filteredSyllabi.reduce(
      (acc, s) => acc + s.strands.reduce((sAcc, strand) => sAcc + strand.topics.length, 0),
      0
    );
  }, [filteredSyllabi]);

  const toggleStrandPreview = (key: string) => {
    sounds.playPop();
    setExpandedStrands((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Launch interactive drill modal in-place
  const startDrillModal = (
    title: string,
    subtitle: string,
    curriculum: CurriculumId,
    subjectId: SubjectId,
    grade: GradeLevel,
    strandName?: string,
    topicName?: string
  ) => {
    sounds.playPop();
    const qs = getQuestionsForSyllabus(curriculum, subjectId, grade, strandName, topicName);
    if (qs.length === 0) {
      // Fallback to all grade subject questions
      const fallback = getQuestionsByGradeAndSubject(grade, subjectId, curriculum);
      setDrillQuestions(fallback.slice(0, 10));
    } else {
      setDrillQuestions(qs.slice(0, 10));
    }

    setDrillTitle(title);
    setDrillSubtitle(subtitle);
    setDrillCurrentIdx(0);
    setDrillAnswers({});
    setDrillFinished(false);
    setDrillModalOpen(true);
  };

  const handleDrillSelectOption = (optIdx: number) => {
    if (drillAnswers[drillCurrentIdx] !== undefined) return;
    const currentQ = drillQuestions[drillCurrentIdx];
    const isCorrect = optIdx === currentQ.correctIndex;
    if (isCorrect) {
      sounds.playCorrect();
    } else {
      sounds.playIncorrect();
    }
    setDrillAnswers((prev) => ({ ...prev, [drillCurrentIdx]: optIdx }));
  };

  const handleDrillNext = () => {
    sounds.playPop();
    speechReader.stop();
    if (drillCurrentIdx + 1 < drillQuestions.length) {
      setDrillCurrentIdx((prev) => prev + 1);
    } else {
      setDrillFinished(true);
      sounds.playFanfare();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-3 sm:px-6 py-4 sm:py-8 space-y-6 pb-20">
      {/* Header Banner */}
      <div className="rounded-3xl border-2 border-amber-200 bg-white p-4 sm:p-7 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="rounded-xl bg-amber-500 text-white px-2.5 py-0.5 font-display text-[11px] sm:text-xs font-black shadow-2xs">
                📋 Silabus & Latihan Soal Terpadu
              </span>
              <span className="text-xs text-slate-300">·</span>
              <span className="text-[11px] sm:text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200">
                ✓ Tersinkronisasi Otomatis dengan Bank Soal
              </span>
            </div>
            <h1 className="font-display text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span>{curriculumMeta.flag}</span>
              <span>Peta Capaian Kurikulum {curriculumMeta.name}</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Panduan lengkap capaian pembelajaran, untaian materi (*strands*), dan sub-topik resmi per jenjang (Primary 1–6). Setiap modul, untaian, dan topik terhubung langsung dengan butir soal latihan interaktif!
            </p>
          </div>

          {/* Curriculum Switcher Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start md:self-auto shrink-0">
            <button
              onClick={() => {
                sounds.playPop();
                onSelectCurriculum('merdeka');
              }}
              className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeCurriculum === 'merdeka'
                  ? 'bg-amber-500 text-white shadow-2xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <span>🇮🇩</span>
              <span>Kurikulum Merdeka</span>
            </button>
            <button
              onClick={() => {
                sounds.playPop();
                onSelectCurriculum('cambridge');
              }}
              className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeCurriculum === 'cambridge'
                  ? 'bg-amber-500 text-white shadow-2xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <span>🇬🇧</span>
              <span>Cambridge Primary</span>
            </button>
            <button
              onClick={() => {
                sounds.playPop();
                onSelectCurriculum('singapore');
              }}
              className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeCurriculum === 'singapore'
                  ? 'bg-amber-500 text-white shadow-2xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <span>🇸🇬</span>
              <span>Singapore Primary</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 pt-4 border-t border-slate-100">
          {/* Grade Selector */}
          <div>
            <label className="text-[11px] font-bold text-slate-500 block mb-1">
              Pilih Jenjang ({activeCurriculum === 'cambridge' ? 'Stage' : activeCurriculum === 'singapore' ? 'Primary' : 'Kelas'}):
            </label>
            {isSingleClassLock && lockedGrade ? (
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-amber-300 bg-amber-50 text-xs font-bold text-amber-950"
                title="Akses terkunci sesuai paket pembelian"
              >
                <span>🔒 Kelas {lockedGrade} SD (Paket Terkunci)</span>
              </div>
            ) : (
              <div className="flex flex-wrap gap-1">
                <button
                  onClick={() => {
                    sounds.playPop();
                    setSelectedGrade('all');
                  }}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg border transition-all ${
                    selectedGrade === 'all'
                      ? 'bg-amber-500 text-white border-amber-600 shadow-2xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Semua
                </button>
                {([1, 2, 3, 4, 5, 6] as GradeLevel[]).map((g) => (
                  <button
                    key={g}
                    onClick={() => {
                      sounds.playPop();
                      setSelectedGrade(g);
                    }}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg border transition-all ${
                      selectedGrade === g
                        ? 'bg-amber-500 text-white border-amber-600 shadow-2xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {activeCurriculum === 'cambridge' ? `Stage ${g}` : `P${g}`}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Subject Filter */}
          <div>
            <label className="text-[11px] font-bold text-slate-500 block mb-1">
              Mata Pelajaran:
            </label>
            <select
              value={selectedSubjectFilter}
              onChange={(e) => setSelectedSubjectFilter(e.target.value)}
              className="w-full px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="all">Semua Mata Pelajaran</option>
              {availableSubjects.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Real-time Topic Search */}
          <div>
            <label className="text-[11px] font-bold text-slate-500 block mb-1">
              Cari Topik Spesifik:
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-2 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Misal: Phonics, Bar Model, Digestive..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1.5 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Counter Badge */}
        <div className="mt-3.5 flex items-center justify-between text-xs text-slate-500 flex-wrap gap-2">
          <span>
            Menampilkan <strong>{filteredSyllabi.length}</strong> modul silabus (Total{' '}
            <strong>{totalTopicsCount}</strong> butir topik materi terdaftar).
          </span>
          <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
            💡 Tips: Klik nama topik atau tombol "🎯 Latihan" untuk langsung berlatih soal silabus!
          </span>
        </div>
      </div>

      {/* Floating Selected Topic Banner */}
      {selectedTopicState && (
        <div className="sticky top-16 z-30 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-500 text-white p-3.5 shadow-lg border border-amber-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20 text-lg shrink-0">
              🎯
            </span>
            <div className="min-w-0">
              <div className="text-[11px] text-amber-100 font-medium">
                Topik Silabus Terpilih ({selectedTopicState.strandName}):
              </div>
              <div className="text-sm font-black truncate">{selectedTopicState.topicName}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <button
              onClick={() => {
                startDrillModal(
                  `Latihan: ${selectedTopicState.topicName}`,
                  `${selectedTopicState.strandName} • ${selectedTopicState.curriculum === 'cambridge' ? 'Stage' : 'Primary'} ${selectedTopicState.grade}`,
                  selectedTopicState.curriculum,
                  selectedTopicState.subjectId,
                  selectedTopicState.grade,
                  selectedTopicState.strandName,
                  selectedTopicState.topicName
                );
              }}
              className="px-3.5 py-1.5 rounded-xl bg-white text-amber-900 font-black text-xs shadow-2xs hover:bg-amber-50 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              <span>Latihan Kilat Topik Ini</span>
            </button>
            <button
              onClick={() => {
                onStartQuiz(
                  selectedTopicState.grade,
                  selectedTopicState.subjectId,
                  selectedTopicState.strandName,
                  selectedTopicState.topicName
                );
              }}
              className="px-3 py-1.5 rounded-xl bg-amber-700/60 hover:bg-amber-800 text-white font-bold text-xs transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Play className="w-3 h-3" />
              <span>Buka di Kuis</span>
            </button>
            <button
              onClick={() => setSelectedTopicState(null)}
              className="p-1 rounded-lg hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
              title="Tutup pilihan"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Syllabi List Cards */}
      <div className="space-y-6">
        {filteredSyllabi.length === 0 ? (
          <div className="rounded-3xl border-2 border-slate-200 bg-white p-12 text-center text-slate-500">
            <p className="text-base font-bold text-slate-800">
              Tidak ada silabus yang cocok dengan kriteria pencarian "{searchQuery}".
            </p>
            <p className="text-xs text-slate-400 mt-1">Coba bersihkan kata kunci pencarian atau ubah pilihan jenjang.</p>
          </div>
        ) : (
          filteredSyllabi.map((syllabus) => {
            const subjectTopicsTotal = syllabus.strands.reduce(
              (acc, curr) => acc + curr.topics.length,
              0
            );

            // Fetch questions linked to this syllabus module
            const syllabusAllQuestions = getQuestionsForSyllabus(
              syllabus.curriculum,
              syllabus.subjectId,
              syllabus.grade
            );

            return (
              <div
                key={`${syllabus.curriculum}-${syllabus.subjectId}-${syllabus.grade}`}
                className="rounded-3xl border-2 border-slate-200 bg-white shadow-xs overflow-hidden hover:border-amber-300 transition-all"
              >
                {/* Module Syllabus Card Header */}
                <div className="p-4 sm:p-5 bg-gradient-to-r from-amber-500/10 via-amber-100/30 to-white border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-base">
                        {syllabus.curriculum === 'cambridge' ? '🇬🇧' : '🇸🇬'}
                      </span>
                      <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                        {syllabus.gradeLabel}
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        • {syllabus.strands.length} Untaian Materi • {subjectTopicsTotal} Topik
                      </span>
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>{syllabusAllQuestions.length} Latihan Soal Terhubung</span>
                      </span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-black font-display text-slate-900">
                      {syllabus.subjectName}
                    </h2>
                    <p className="text-xs text-slate-600 mt-0.5 max-w-2xl leading-relaxed">
                      {syllabus.description}
                    </p>
                  </div>

                  {/* Actions for this syllabus */}
                  <div className="flex items-center gap-2 shrink-0 flex-wrap">
                    <button
                      onClick={() => {
                        sounds.playPop();
                        onOpenPrint(syllabus.grade, syllabus.subjectId);
                      }}
                      className="px-2.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors flex items-center gap-1 cursor-pointer"
                      title="Cetak LKPD Soal Silabus Ini"
                    >
                      <Printer className="w-3.5 h-3.5 text-slate-500" />
                      <span className="hidden sm:inline">Cetak LKPD</span>
                    </button>
                    <button
                      onClick={() => {
                        sounds.playPop();
                        onOpenBank(syllabus.grade, syllabus.subjectId);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                      <span>Bank Soal</span>
                    </button>
                    <button
                      onClick={() => {
                        startDrillModal(
                          `Latihan Silabus: ${syllabus.subjectName}`,
                          `${syllabus.gradeLabel} • Semua Untaian Materi (${syllabusAllQuestions.length} Soal)`,
                          syllabus.curriculum,
                          syllabus.subjectId,
                          syllabus.grade
                        );
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-xs shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Latihan Kuis Silabus</span>
                    </button>
                  </div>
                </div>

                {/* Strands and Topics Grid */}
                <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {syllabus.strands.map((strand, stIdx) => {
                    const strandKey = `${syllabus.curriculum}-${syllabus.subjectId}-${syllabus.grade}-${strand.name}`;
                    const isExpanded = Boolean(expandedStrands[strandKey]);

                    // Questions linked to this strand
                    const strandQuestions = getQuestionsForSyllabus(
                      syllabus.curriculum,
                      syllabus.subjectId,
                      syllabus.grade,
                      strand.name
                    );

                    return (
                      <div
                        key={stIdx}
                        className="rounded-2xl border border-slate-200 bg-slate-50/50 p-3.5 sm:p-4 hover:border-amber-300 transition-colors flex flex-col justify-between"
                      >
                        <div>
                          {/* Strand Header with Question Count & Actions */}
                          <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-200/80 gap-2 flex-wrap">
                            <h3 className="font-display text-sm font-extrabold text-slate-900 flex items-center gap-2 min-w-0">
                              <BookMarked className="w-4 h-4 text-amber-600 shrink-0" />
                              <span className="truncate">{strand.name}</span>
                            </h3>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                                {strandQuestions.length} Soal
                              </span>
                              <button
                                onClick={() => {
                                  startDrillModal(
                                    `Latihan Untaian: ${strand.name}`,
                                    `${syllabus.subjectName} • ${syllabus.gradeLabel}`,
                                    syllabus.curriculum,
                                    syllabus.subjectId,
                                    syllabus.grade,
                                    strand.name
                                  );
                                }}
                                className="px-2 py-0.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-[11px] font-bold shadow-2xs flex items-center gap-1 cursor-pointer transition-colors"
                                title="Mulai latihan soal untaian materi ini"
                              >
                                <Zap className="w-3 h-3" />
                                <span>Latih</span>
                              </button>
                            </div>
                          </div>

                          {/* Topic Pills */}
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {strand.topics.map((topic, tIdx) => {
                              const isMatch =
                                searchQuery.trim().length > 1 &&
                                topic.toLowerCase().includes(searchQuery.toLowerCase());

                              const isCurrentSelected =
                                selectedTopicState?.curriculum === syllabus.curriculum &&
                                selectedTopicState?.subjectId === syllabus.subjectId &&
                                selectedTopicState?.grade === syllabus.grade &&
                                selectedTopicState?.topicName === topic;

                              return (
                                <button
                                  key={tIdx}
                                  onClick={() => {
                                    sounds.playPop();
                                    setSelectedTopicState({
                                      curriculum: syllabus.curriculum,
                                      subjectId: syllabus.subjectId,
                                      grade: syllabus.grade,
                                      strandName: strand.name,
                                      topicName: topic,
                                    });
                                  }}
                                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-semibold border transition-all text-left cursor-pointer ${
                                    isCurrentSelected
                                      ? 'bg-amber-500 text-white border-amber-600 font-bold scale-105 shadow-xs ring-2 ring-amber-300'
                                      : isMatch
                                      ? 'bg-amber-400 text-slate-950 border-amber-500 font-bold scale-105 shadow-xs'
                                      : 'bg-white text-slate-700 border-slate-200 hover:border-amber-400 hover:bg-amber-50/70'
                                  }`}
                                  title={`Klik untuk memilih topik ${topic} & latihan soal`}
                                >
                                  <CheckCircle2
                                    className={`w-3 h-3 shrink-0 ${
                                      isCurrentSelected ? 'text-white' : 'text-amber-600'
                                    }`}
                                  />
                                  <span>{topic}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Collapsible Question Preview Toggle */}
                        <div className="pt-2 border-t border-slate-200/60 mt-1">
                          <button
                            onClick={() => toggleStrandPreview(strandKey)}
                            className="w-full flex items-center justify-between text-[11px] font-bold text-slate-600 hover:text-amber-800 transition-colors py-1 cursor-pointer"
                          >
                            <span className="flex items-center gap-1.5">
                              {isExpanded ? (
                                <EyeOff className="w-3.5 h-3.5 text-amber-600" />
                              ) : (
                                <Eye className="w-3.5 h-3.5 text-amber-600" />
                              )}
                              <span>
                                {isExpanded
                                  ? 'Sembunyikan Butir Soal Silabus'
                                  : `Intip & Bahas Butir Soal (${strandQuestions.length} Soal)`}
                              </span>
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5" />
                            )}
                          </button>

                          {/* Expanded Questions Accordion */}
                          {isExpanded && (
                            <div className="mt-2.5 space-y-3 pt-2 border-t border-slate-200/70 animate-fadeIn">
                              {strandQuestions.length === 0 ? (
                                <p className="text-xs text-slate-400 italic">
                                  Soal sedang disinkronkan untuk topik ini.
                                </p>
                              ) : (
                                strandQuestions.slice(0, 4).map((qItem, qIdx) => (
                                  <div
                                    key={qItem.id || qIdx}
                                    className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs space-y-2"
                                  >
                                    <div className="flex items-center justify-between gap-1 flex-wrap">
                                      <span className="font-extrabold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                                        Soal #{qIdx + 1} • {qItem.topic}
                                      </span>
                                      <div className="flex items-center gap-1.5 ml-auto">
                                        <ReadAloudButton
                                          text={qItem.question}
                                          options={qItem.options}
                                          curriculum={qItem.curriculum || currentCurriculum}
                                          subject={qItem.subject}
                                          size="sm"
                                          variant="ghost"
                                          showBadge={true}
                                          title="Dengarkan soal & pilihan"
                                        />
                                        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                                          {qItem.difficulty}
                                        </span>
                                      </div>
                                    </div>

                                    <p className="font-bold text-slate-900 leading-snug">
                                      {qItem.question}
                                    </p>

                                    {/* Options Preview */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                      {qItem.options.map((opt, oIdx) => {
                                        const isCorrect = oIdx === qItem.correctIndex;
                                        return (
                                          <div
                                            key={oIdx}
                                            className={`p-1.5 rounded-lg border text-[11px] flex items-center gap-1.5 ${
                                              isCorrect
                                                ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                                                : 'bg-slate-50/70 border-slate-200 text-slate-600'
                                            }`}
                                          >
                                            <span
                                              className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${
                                                isCorrect
                                                  ? 'bg-emerald-600 text-white'
                                                  : 'bg-slate-200 text-slate-700'
                                              }`}
                                            >
                                              {String.fromCharCode(65 + oIdx)}
                                            </span>
                                            <span className="truncate">{opt}</span>
                                            {isCorrect && (
                                              <span className="ml-auto text-[10px] text-emerald-700 font-bold shrink-0">
                                                ✓ Kunci
                                              </span>
                                            )}
                                          </div>
                                        );
                                      })}
                                    </div>

                                    {/* Explanation & Hint */}
                                    <div className="bg-amber-50/70 rounded-lg p-2 border border-amber-200/50 text-[11px] text-slate-700 leading-relaxed">
                                      <span className="font-bold text-amber-900 block mb-0.5">
                                        💡 Pembahasan Silabus:
                                      </span>
                                      {qItem.explanation}
                                    </div>
                                  </div>
                                ))
                              )}

                              {strandQuestions.length > 4 && (
                                <div className="text-center pt-1">
                                  <button
                                    onClick={() => {
                                      startDrillModal(
                                        `Latihan Lengkap: ${strand.name}`,
                                        `${syllabus.subjectName} • ${syllabus.gradeLabel} (${strandQuestions.length} Soal)`,
                                        syllabus.curriculum,
                                        syllabus.subjectId,
                                        syllabus.grade,
                                        strand.name
                                      );
                                    }}
                                    className="text-xs font-bold text-amber-700 hover:text-amber-800 underline cursor-pointer"
                                  >
                                    Lihat dan latih semua {strandQuestions.length} butir soal untaian ini ➔
                                  </button>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Interactive Quick Drill Modal */}
      {drillModalOpen && drillQuestions.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-4 animate-fadeIn">
          <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl border-2 border-amber-300 flex flex-col max-h-[92vh] overflow-hidden animate-scaleIn">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white flex items-center justify-between shrink-0">
              <div className="min-w-0">
                <div className="text-[11px] font-bold text-amber-100 flex items-center gap-1.5">
                  <span>⚡ Latihan Interaktif Silabus</span>
                  <span>·</span>
                  <span>{drillSubtitle}</span>
                </div>
                <h3 className="font-display text-base sm:text-lg font-black truncate">
                  {drillTitle}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => setIsScratchpadOpen(true)}
                  className="px-2.5 py-1 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                  title="Buka kanvas oret-oretan"
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Coretan</span>
                </button>
                <button
                  onClick={() => {
                    sounds.playPop();
                    setDrillModalOpen(false);
                  }}
                  className="p-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1">
              {!drillFinished ? (
                (() => {
                  const currentQ = drillQuestions[drillCurrentIdx];
                  const userAnswer = drillAnswers[drillCurrentIdx];
                  const hasAnswered = userAnswer !== undefined;
                  const progressPct = Math.round(
                    ((drillCurrentIdx + 1) / drillQuestions.length) * 100
                  );

                  return (
                    <div className="space-y-4">
                      {/* Progress Bar & Badges */}
                      <div>
                        <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1.5">
                          <span>
                            Soal <strong>{drillCurrentIdx + 1}</strong> dari{' '}
                            <strong>{drillQuestions.length}</strong>
                          </span>
                          <span className="text-amber-600">{progressPct}% Selesai</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-amber-500 rounded-full transition-all duration-300"
                            style={{ width: `${progressPct}%` }}
                          />
                        </div>
                      </div>

                      {/* Question Box */}
                      <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                            {currentQ.syllabusStrand || 'Silabus'}
                          </span>
                          <span className="text-[10px] font-bold text-slate-500">
                            • Topik: {currentQ.topic}
                          </span>
                          <div className="ml-auto flex items-center gap-1.5">
                            <ReadAloudButton
                              text={currentQ.question}
                              options={currentQ.options}
                              curriculum={currentQ.curriculum || currentCurriculum}
                              subject={currentQ.subject}
                              size="sm"
                              variant="secondary"
                              label="Suara"
                              showBadge={true}
                              title="Dengarkan soal & pilihan latihan silabus"
                            />
                            <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-white text-slate-600 border border-slate-200">
                              {currentQ.difficulty}
                            </span>
                          </div>
                        </div>

                        <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                          {currentQ.question}
                        </p>
                      </div>

                      {/* Options */}
                      <div className="space-y-2">
                        {currentQ.options.map((option, optIdx) => {
                          const isSelected = userAnswer === optIdx;
                          const isCorrect = optIdx === currentQ.correctIndex;

                          let optionStyle =
                            'border-slate-200 bg-white hover:border-amber-300 hover:bg-amber-50/50 text-slate-800';

                          if (hasAnswered) {
                            if (isCorrect) {
                              optionStyle =
                                'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-300';
                            } else if (isSelected) {
                              optionStyle =
                                'border-rose-400 bg-rose-50 text-rose-950 ring-2 ring-rose-200';
                            } else {
                              optionStyle = 'border-slate-200 bg-slate-50/50 text-slate-400 opacity-60';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={hasAnswered}
                              onClick={() => handleDrillSelectOption(optIdx)}
                              className={`w-full p-3 sm:p-3.5 rounded-2xl border-2 text-left transition-all flex items-center gap-3 cursor-pointer ${optionStyle}`}
                            >
                              <span
                                className={`w-7 h-7 rounded-xl flex items-center justify-center font-display font-black text-xs shrink-0 ${
                                  hasAnswered && isCorrect
                                    ? 'bg-emerald-600 text-white'
                                    : hasAnswered && isSelected
                                    ? 'bg-rose-600 text-white'
                                    : 'bg-slate-100 text-slate-700'
                                }`}
                              >
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span className="text-xs sm:text-sm font-medium flex-1">
                                {option}
                              </span>
                              {hasAnswered && isCorrect && (
                                <span className="text-xs font-bold text-emerald-700 shrink-0">
                                  ✓ Benar
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation Callout once answered */}
                      {hasAnswered && (
                        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 animate-fadeIn space-y-1">
                          <span className="font-bold text-amber-900 block">
                            {userAnswer === currentQ.correctIndex
                              ? '🎉 Luar Biasa, Jawaban Tepat!'
                              : '🌱 Pembahasan Silabus:'}
                          </span>
                          <p className="leading-relaxed">{currentQ.explanation}</p>
                          {currentQ.hint && (
                            <p className="text-[11px] text-amber-700/80 italic mt-1">
                              💡 Catatan Guru: {currentQ.hint}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })()
              ) : (
                /* Drill Finished Results Screen */
                (() => {
                  let correctCount = 0;
                  drillQuestions.forEach((q, idx) => {
                    if (drillAnswers[idx] === q.correctIndex) {
                      correctCount++;
                    }
                  });
                  const score = Math.round((correctCount / drillQuestions.length) * 100);

                  return (
                    <div className="text-center py-4 space-y-4 animate-scaleIn">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-100 text-3xl shadow-inner border border-amber-300">
                        {score >= 80 ? '🏆' : score >= 60 ? '⭐' : '🌱'}
                      </div>

                      <div>
                        <h4 className="font-display text-xl font-black text-slate-900">
                          {score >= 80
                            ? 'Luar Biasa! Capaian Silabus Sangat Bagus!'
                            : score >= 60
                            ? 'Bagus Sekali! Terus Tingkatkan Pemahaman!'
                            : 'Tetap Semangat! Pelajari Ulang Topik Ini!'}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1">
                          Kamu telah menyelesaikan seluruh soal latihan silabus untuk topik ini.
                        </p>
                      </div>

                      {/* Score Board */}
                      <div className="inline-flex items-center gap-6 rounded-2xl bg-slate-50 border border-slate-200 px-6 py-3">
                        <div>
                          <div className="text-[10px] font-bold text-slate-400">NILAI CAPAIAN</div>
                          <div className="text-2xl font-black text-amber-600 font-display">
                            {score}
                          </div>
                        </div>
                        <div className="h-8 w-px bg-slate-200" />
                        <div>
                          <div className="text-[10px] font-bold text-slate-400">BENAR</div>
                          <div className="text-xl font-extrabold text-emerald-600">
                            {correctCount} / {drillQuestions.length}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-2 pt-2">
                        <button
                          onClick={() => {
                            sounds.playPop();
                            setDrillCurrentIdx(0);
                            setDrillAnswers({});
                            setDrillFinished(false);
                          }}
                          className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Ulangi Latihan</span>
                        </button>
                        <button
                          onClick={() => {
                            sounds.playPop();
                            setDrillModalOpen(false);
                          }}
                          className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-xs shadow-2xs transition-all cursor-pointer"
                        >
                          Selesai & Tutup
                        </button>
                      </div>
                    </div>
                  );
                })()
              )}
            </div>

            {/* Modal Footer (Controls) */}
            {!drillFinished && (
              <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
                <button
                  onClick={() => {
                    sounds.playPop();
                    setDrillModalOpen(false);
                  }}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Tutup
                </button>

                <button
                  disabled={drillAnswers[drillCurrentIdx] === undefined}
                  onClick={handleDrillNext}
                  className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    drillAnswers[drillCurrentIdx] !== undefined
                      ? 'bg-amber-500 hover:bg-amber-400 text-white shadow-2xs cursor-pointer'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <span>
                    {drillCurrentIdx + 1 === drillQuestions.length
                      ? 'Lihat Skor Capaian'
                      : 'Soal Berikutnya'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Scratchpad */}
      <ScratchpadModal isOpen={isScratchpadOpen} onClose={() => setIsScratchpadOpen(false)} />
    </div>
  );
};
