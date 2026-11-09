import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Bookmark,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Copy,
  Check,
  ArrowLeft,
  Filter,
} from 'lucide-react';
import { Question, SubjectId, GradeLevel, CurriculumId } from '../types/quiz';
import {
  CURRICULUM_METAS,
  ALL_SUBJECT_METAS,
  getSubjectsByCurriculum,
  filterQuestions,
} from '../data/questionBank';
import { sounds } from '../utils/soundEffects';
import { speechReader } from '../utils/speechReader';
import { QuestionIllustration } from './QuestionIllustration';
import { ReadAloudButton } from './ReadAloudButton';

interface QuestionBankViewProps {
  initialSubject?: SubjectId | 'all';
  initialGrade?: number | 'all';
  initialStrand?: string;
  onBackToClassModule?: () => void;
  currentCurriculum?: CurriculumId;
  isSingleClassLock?: boolean;
}

export const QuestionBankView: React.FC<QuestionBankViewProps> = ({
  initialSubject = 'all',
  initialGrade = 'all',
  initialStrand,
  onBackToClassModule,
  currentCurriculum = 'merdeka',
  isSingleClassLock = false,
}) => {
  const lockedGradeValue = isSingleClassLock ? (initialGrade !== 'all' ? initialGrade : 1) : initialGrade;
  const [selectedCurriculum, setSelectedCurriculum] = useState<CurriculumId | 'all'>(currentCurriculum);
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | 'all'>(initialSubject);
  const [selectedGrade, setSelectedGrade] = useState<number | 'all'>(lockedGradeValue);
  const [selectedStrand, setSelectedStrand] = useState<string>(initialStrand || 'all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showImageOnly, setShowImageOnly] = useState<boolean>(false);
  const [selectedRegionalLang, setSelectedRegionalLang] = useState<string>('all');
  const [bookmarkedIds, setBookmarkedIds] = useState<Record<string, boolean>>({});
  const [expandedAnswers, setExpandedAnswers] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (initialStrand) setSelectedStrand(initialStrand);
  }, [initialStrand]);

  useEffect(() => {
    if (initialSubject) setSelectedSubject(initialSubject);
  }, [initialSubject]);

  useEffect(() => {
    return () => {
      speechReader.stop();
    };
  }, []);

  useEffect(() => {
    if (initialGrade) setSelectedGrade(initialGrade);
  }, [initialGrade]);

  useEffect(() => {
    if (currentCurriculum) setSelectedCurriculum(currentCurriculum);
  }, [currentCurriculum]);

  // Available subjects based on selected curriculum
  const availableSubjects = useMemo(() => {
    if (selectedCurriculum === 'all') return ALL_SUBJECT_METAS;
    return getSubjectsByCurriculum(selectedCurriculum);
  }, [selectedCurriculum]);

  // Available strands based on current selection
  const availableStrands = useMemo(() => {
    const pool = filterQuestions({
      curriculum: selectedCurriculum,
      subject: selectedSubject,
      grade: selectedGrade,
    });
    const strands = new Set<string>();
    pool.forEach((q) => {
      if (q.syllabusStrand) strands.add(q.syllabusStrand);
    });
    return Array.from(strands);
  }, [selectedCurriculum, selectedSubject, selectedGrade]);

  // Filter logic using filterQuestions
  const filtered = useMemo(() => {
    return filterQuestions({
      curriculum: selectedCurriculum,
      subject: selectedSubject,
      grade: selectedGrade,
      strand: selectedStrand,
      difficulty: selectedDifficulty,
      searchQuery,
      hasImageOnly: showImageOnly,
      regionalLanguage: selectedSubject === 'daerah' ? selectedRegionalLang : 'all',
    });
  }, [selectedCurriculum, selectedSubject, selectedGrade, selectedStrand, selectedDifficulty, searchQuery, showImageOnly, selectedRegionalLang]);

  const toggleBookmark = (id: string) => {
    sounds.playPop();
    setBookmarkedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleExpand = (id: string) => {
    sounds.playPop();
    setExpandedAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const copyQuestion = (q: Question) => {
    sounds.playPop();
    const formatted =
      `[${q.curriculum ? q.curriculum.toUpperCase() : 'SD'} - Kelas ${q.grade} - ${q.topic}]\n` +
      (q.competency ? `CP/Kompetensi: ${q.competency}\n` : '') +
      (q.indicator ? `Indikator: ${q.indicator}\n` : '') +
      (q.cognitiveLevel ? `Level Kognitif: ${q.cognitiveLevel} | Tipe: ${q.questionType || 'Pilihan Ganda'}\n` : '') +
      `Pertanyaan: ${q.question}\n` +
      q.options.map((opt, i) => `${String.fromCharCode(65 + i)}. ${opt}`).join('\n') +
      `\nKunci: ${String.fromCharCode(65 + q.correctIndex)}. ${q.options[q.correctIndex]}\n` +
      `Pembahasan: ${q.explanation}\n` +
      (q.source ? `Sumber: ${q.source}` : '');
    navigator.clipboard.writeText(formatted);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const getSubjectMeta = (id: SubjectId) => {
    return ALL_SUBJECT_METAS.find((s) => s.id === id) || ALL_SUBJECT_METAS[0];
  };

  return (
    <div className="mx-auto max-w-5xl px-3 sm:px-6 py-3 sm:py-6 animate-fadeIn pb-16">
      {/* Header and Quick Stats */}
      <div className="mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl border-2 border-slate-200 bg-white p-3.5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-3.5 sm:mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg sm:text-xl">📚</span>
              <h1 className="font-display text-lg sm:text-2xl font-extrabold text-slate-900">
                Bank Soal Lengkap SD Multi-Kurikulum
              </h1>
            </div>
            <p className="text-xs text-slate-500">
              Koleksi butir soal autentik Kurikulum Merdeka, Cambridge Primary, & Singapore Primary dengan kunci & pembahasan lengkap.
            </p>
          </div>

          <div className="flex items-center self-start sm:self-auto gap-2 bg-amber-50 border border-amber-200 px-3 py-1 rounded-xl sm:rounded-2xl">
            <span className="text-xs sm:text-sm font-bold text-amber-800">
              Menampilkan {filtered.length} Soal
            </span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="space-y-3 pt-3 border-t border-slate-100">
          {/* Curriculum Filter Row */}
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-1.5">
              Pilih Kurikulum:
            </span>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => {
                  sounds.playPop();
                  setSelectedCurriculum('all');
                  setSelectedSubject('all');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                  selectedCurriculum === 'all'
                    ? 'bg-amber-500 text-white border-amber-600 shadow-2xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                🌐 Semua Kurikulum
              </button>
              {(['merdeka', 'cambridge', 'singapore'] as CurriculumId[]).map((cId) => {
                const meta = CURRICULUM_METAS[cId];
                const isSelected = selectedCurriculum === cId;
                return (
                  <button
                    key={cId}
                    onClick={() => {
                      sounds.playPop();
                      setSelectedCurriculum(cId);
                      setSelectedSubject('all');
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-amber-500 text-white border-amber-600 shadow-2xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>{meta.flag}</span>
                    <span>{meta.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subject Filter */}
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-1.5">
              Pilih Mata Pelajaran:
            </span>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => {
                  sounds.playPop();
                  setSelectedSubject('all');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                  selectedSubject === 'all'
                    ? 'bg-sky-500 text-white border-sky-600 shadow-2xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Semua Mapel
              </button>
              {availableSubjects.map((s) => {
                const isSelected = selectedSubject === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      sounds.playPop();
                      setSelectedSubject(s.id);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-sky-500 text-white border-sky-600 shadow-2xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>{s.icon}</span>
                    <span>{s.shortName || s.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Syllabus Strand Filter (if available) */}
          {availableStrands.length > 0 && (
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-1.5">
                Untaian Silabus (Strand):
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => {
                    sounds.playPop();
                    setSelectedStrand('all');
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                    selectedStrand === 'all'
                      ? 'bg-amber-500 text-white border-amber-600 shadow-2xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Semua Untaian
                </button>
                {availableStrands.map((strand) => (
                  <button
                    key={strand}
                    onClick={() => {
                      sounds.playPop();
                      setSelectedStrand(strand);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1 cursor-pointer ${
                      selectedStrand === strand
                        ? 'bg-amber-500 text-white border-amber-600 shadow-2xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-amber-300 hover:bg-amber-50/50'
                    }`}
                  >
                    <span>🏷️</span>
                    <span>{strand}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Grade, Search box, Difficulty Filter & Illustrated Questions Toggle */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 pt-2">
            <div className="sm:col-span-3">
              {isSingleClassLock ? (
                <div
                  className="w-full px-3 py-2 rounded-xl border border-amber-300 bg-amber-50 text-xs text-amber-950 font-bold flex items-center justify-between"
                  title="Akses terkunci sesuai paket pembelian"
                >
                  <span>🔒 Kelas {lockedGradeValue} SD (Paket Terkunci)</span>
                </div>
              ) : (
                <select
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-700 focus:bg-white focus:border-amber-400 focus:outline-hidden font-bold"
                >
                  <option value="all">Semua Kelas</option>
                  <option value="1">Kelas / Stage 1</option>
                  <option value="2">Kelas / Stage 2</option>
                  <option value="3">Kelas / Stage 3</option>
                  <option value="4">Kelas / Stage 4</option>
                  <option value="5">Kelas / Stage 5</option>
                  <option value="6">Kelas / Stage 6</option>
                </select>
              )}
            </div>
            <div className="sm:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari topik atau kata kunci soal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:bg-white focus:border-amber-400 focus:outline-hidden"
              />
            </div>
            <div className="sm:col-span-2">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-700 focus:bg-white focus:border-amber-400 focus:outline-hidden font-medium"
              >
                <option value="all">Semua Kesulitan</option>
                <option value="Mudah">Mudah</option>
                <option value="Sedang">Sedang</option>
                <option value="Tantangan">Tantangan</option>
              </select>
            </div>
            <div className="sm:col-span-3">
              <button
                onClick={() => {
                  sounds.playPop();
                  setShowImageOnly(!showImageOnly);
                }}
                className={`w-full px-3 py-2 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs ${
                  showImageOnly
                    ? 'bg-amber-400 border-amber-500 text-amber-950 font-black'
                    : 'bg-white border-amber-300 text-amber-900 hover:bg-amber-50'
                }`}
                title="Tampilkan soal-soal edisi baru inovatif"
              >
                <span>✨</span>
                <span>{showImageOnly ? 'Semua Soal' : 'Soal Inovatif Baru'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Questions List */}
      {filtered.length === 0 ? (
        <div className="rounded-3xl border-2 border-dashed border-slate-200 bg-white p-12 text-center">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-2" />
          <h3 className="font-extrabold text-slate-800 text-base">Tidak ada soal ditemukan</h3>
          <p className="text-xs text-slate-500 mt-1">Coba ubah pilihan kurikulum, kelas, atau kata kunci pencarian.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((q, idx) => {
            const isBookmarked = !!bookmarkedIds[q.id];
            const isExpanded = !!expandedAnswers[q.id];
            const isCopied = copiedId === q.id;
            const meta = getSubjectMeta(q.subject);
            const curr = q.curriculum || 'merdeka';
            const currFlag = curr === 'cambridge' ? '🇬🇧' : curr === 'singapore' ? '🇸🇬' : '🇮🇩';

            return (
              <div
                key={q.id}
                className="rounded-3xl border-2 border-slate-200 bg-white p-5 shadow-2xs hover:border-slate-300 transition-all"
              >
                {/* Card Top Metadata */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-100 text-slate-700 font-extrabold text-xs">
                      {idx + 1}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {currFlag} {curr.toUpperCase()} · Kls {q.grade}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-sky-50 text-sky-800 border border-sky-100 flex items-center gap-1">
                      <span>{meta.icon}</span>
                      <span>{meta.shortName || meta.name}</span>
                    </span>
                    {q.syllabusStrand && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                        📋 {q.syllabusStrand}
                      </span>
                    )}
                    <span className="text-[11px] text-slate-500 font-semibold hidden sm:inline">
                      • {q.topic}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    {/* Read Aloud Button */}
                    <ReadAloudButton
                      text={q.question}
                      options={q.options}
                      curriculum={q.curriculum || (selectedCurriculum !== 'all' ? selectedCurriculum : currentCurriculum)}
                      subject={q.subject}
                      size="sm"
                      variant="ghost"
                      showBadge={true}
                      title="Dengarkan soal & pilihan jawaban"
                    />

                    {/* Copy Button */}
                    <button
                      onClick={() => copyQuestion(q)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                      title="Salin soal ke clipboard"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>

                    {/* Bookmark Button */}
                    <button
                      onClick={() => toggleBookmark(q.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isBookmarked ? 'text-amber-500 bg-amber-50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                      }`}
                      title="Simpan soal"
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Question Illustration if any */}
                {(q.imageKey || q.imageUrl) && (
                  <QuestionIllustration
                    imageKey={q.imageKey}
                    imageCaption={q.imageCaption}
                    imageUrl={q.imageUrl}
                    className="mb-3.5"
                  />
                )}

                {/* Question Body */}
                <p className="font-display font-bold text-slate-900 text-sm sm:text-base leading-snug mb-3">
                  {q.question}
                </p>

                {/* Options List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                  {q.options.map((opt, optIdx) => {
                    const isCorrect = isExpanded && optIdx === q.correctIndex;
                    return (
                      <div
                        key={optIdx}
                        className={`p-2.5 rounded-xl border text-xs flex items-start gap-2 transition-all ${
                          isCorrect
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                            : 'bg-slate-50/60 border-slate-100 text-slate-700'
                        }`}
                      >
                        <span className="font-bold text-slate-400 shrink-0">
                          {String.fromCharCode(65 + optIdx)}.
                        </span>
                        <span className="leading-tight">{opt}</span>
                        {isCorrect && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 ml-auto" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Toggle Answer and Explanation */}
                <div>
                  <button
                    onClick={() => toggleExpand(q.id)}
                    className="text-xs font-bold text-amber-600 hover:text-amber-800 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>{isExpanded ? 'Sembunyikan Pembahasan' : 'Lihat Kunci & Pembahasan'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-2.5 p-3 rounded-2xl bg-amber-50/80 border border-amber-200/60 text-xs text-amber-950 space-y-2 animate-fadeIn">
                      <p className="font-bold text-amber-900">
                        Kunci Jawaban: {String.fromCharCode(65 + q.correctIndex)}. {q.options[q.correctIndex]}
                      </p>
                      <p className="leading-relaxed text-amber-950/90">{q.explanation}</p>
                      {(q.cognitiveLevel || q.questionType || q.materiId) && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-1.5 border-t border-amber-200/40 text-[11px]">
                          {q.cognitiveLevel && (
                            <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 font-bold">
                              🧠 {q.cognitiveLevel}
                            </span>
                          )}
                          {q.questionType && (
                            <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-900 font-bold">
                              📝 {q.questionType}
                            </span>
                          )}
                          {q.materiId && (
                            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono text-[10px]">
                              ID: {q.materiId}
                            </span>
                          )}
                        </div>
                      )}
                      {(q.indicator || q.competency || q.source) && (
                        <div className="pt-1.5 border-t border-amber-200/40 space-y-1 text-[11px] text-amber-900/90">
                          {q.indicator && (
                            <p><strong className="text-amber-950">Indikator:</strong> {q.indicator}</p>
                          )}
                          {q.competency && (
                            <p><strong className="text-amber-950">CP/Kompetensi:</strong> {q.competency}</p>
                          )}
                          {q.source && (
                            <p className="text-[10px] text-slate-600 italic"><strong className="text-slate-800 not-italic">Sumber:</strong> {q.source}</p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
