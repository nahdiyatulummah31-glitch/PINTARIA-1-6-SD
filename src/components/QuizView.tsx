import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Award,
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  PenTool,
  ArrowRight,
  ArrowLeft,
  LogOut,
} from 'lucide-react';
import { Question, SubjectId, GradeLevel, CurriculumId } from '../types/quiz';
import { CURRICULUM_METAS, getSubjectsByCurriculum, filterQuestions, getQuestionsByGradeAndSubject } from '../data/questionBank';
import { sounds } from '../utils/soundEffects';
import { speechReader } from '../utils/speechReader';
import { ScratchpadModal } from './ScratchpadModal';
import { QuestionIllustration } from './QuestionIllustration';
import { ReadAloudButton } from './ReadAloudButton';

interface QuizViewProps {
  initialSubject?: SubjectId | 'all';
  initialGrade?: GradeLevel | 'all';
  initialStrand?: string;
  initialTopic?: string;
  onBackToClassModule?: () => void;
  currentCurriculum?: CurriculumId;
  isSingleClassLock?: boolean;
}

export const QuizView: React.FC<QuizViewProps> = ({
  initialSubject = 'all',
  initialGrade = 1,
  initialStrand,
  initialTopic,
  onBackToClassModule,
  currentCurriculum = 'merdeka',
  isSingleClassLock = false,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | 'all'>(initialSubject);
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(
    (initialGrade && initialGrade !== 'all' ? initialGrade : 1) as GradeLevel
  );
  const [selectedStrand, setSelectedStrand] = useState<string | undefined>(initialStrand);
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>(initialTopic);
  const [quizLength, setQuizLength] = useState<number>(10);
  const [isInstantFeedback, setIsInstantFeedback] = useState<boolean>(true);

  useEffect(() => {
    if (initialSubject) setSelectedSubject(initialSubject);
  }, [initialSubject]);

  useEffect(() => {
    if (initialGrade && initialGrade !== 'all') {
      setSelectedGrade(initialGrade as GradeLevel);
    }
  }, [initialGrade]);

  useEffect(() => {
    setSelectedStrand(initialStrand);
  }, [initialStrand]);

  useEffect(() => {
    setSelectedTopic(initialTopic);
  }, [initialTopic]);

  useEffect(() => {
    if (selectedSubject !== 'all') {
      const validSubjs = getSubjectsByCurriculum(currentCurriculum);
      if (!validSubjs.some((s) => s.id === selectedSubject)) {
        setSelectedSubject('all');
      }
    }
  }, [currentCurriculum]);

  // Real-time pool of questions available for currently chosen filters
  const availablePool = useMemo(() => {
    return filterQuestions({
      curriculum: currentCurriculum,
      subject: selectedSubject,
      grade: selectedGrade,
      strand: selectedStrand,
      topic: selectedTopic,
    });
  }, [currentCurriculum, selectedSubject, selectedGrade, selectedStrand, selectedTopic]);

  const totalAvailable = availablePool.length;

  // Auto-adjust quizLength if subject/grade changes and current quizLength exceeds totalAvailable
  useEffect(() => {
    if (totalAvailable > 0 && quizLength > totalAvailable) {
      setQuizLength(totalAvailable);
    }
  }, [totalAvailable]);

  // Dynamic selectable lengths based on totalAvailable
  const lengthOptions = useMemo(() => {
    if (totalAvailable <= 0) return [5];
    const candidateSteps = [5, 10, 15, 20, 25, 30, 40, 50, 75, 100, 150, 200, 250, 300, 400, 500];
    const steps = candidateSteps.filter((s) => s < totalAvailable);
    let chosenSteps = steps;
    if (steps.length > 7) {
      chosenSteps = steps.filter((s, idx) => idx % 2 === 0 || s === 10 || s === 20 || s === 50 || s === 100);
    }
    return [...chosenSteps, totalAvailable];
  }, [totalAvailable]);

  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showHint, setShowHint] = useState<boolean>(false);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [isScratchpadOpen, setIsScratchpadOpen] = useState<boolean>(false);
  const [showExitConfirm, setShowExitConfirm] = useState<boolean>(false);

  const startQuiz = () => {
    sounds.playPop();
    const pool = availablePool;

    if (pool.length === 0) {
      alert('Belum ada soal untuk pilihan ini. Coba pilih mapel atau hapus filter silabus.');
      return;
    }

    const effectiveLength = Math.min(Math.max(1, quizLength), pool.length);

    let combined: Question[] = [];
    if (effectiveLength >= pool.length) {
      combined = [...pool];
    } else {
      combined = [...pool].sort(() => Math.random() - 0.5).slice(0, effectiveLength);
    }

    setQuestions(combined);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowHint(false);
    setQuizFinished(false);
    setQuizStarted(true);
  };

  // Cleanup speech reader on unmount
  useEffect(() => {
    return () => {
      speechReader.stop();
    };
  }, []);

  const handleSelectOption = (optionIndex: number) => {
    if (selectedAnswers[currentIndex] !== undefined && isInstantFeedback) return;

    sounds.playPop();
    const updated = { ...selectedAnswers, [currentIndex]: optionIndex };
    setSelectedAnswers(updated);

    const isCorrect = optionIndex === questions[currentIndex].correctIndex;
    if (isInstantFeedback) {
      if (isCorrect) {
        sounds.playCorrect();
      } else {
        sounds.playIncorrect();
      }
    }
  };

  const handleNext = () => {
    sounds.playPop();
    speechReader.stop();
    setShowHint(false);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    speechReader.stop();
    setQuizFinished(true);
    sounds.playFanfare();
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
    });
  };

  // Render Finished Summary
  if (quizFinished) {
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    const score = Math.round((correctCount / questions.length) * 100);

    return (
      <div className="mx-auto max-w-3xl px-4 py-8 animate-fadeIn">
        <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-8 text-center shadow-xs">
          <div className="text-5xl mb-3">
            {score === 100 ? '🏆' : score >= 80 ? '🌟' : score >= 60 ? '👏' : '💪'}
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            {score === 100
              ? 'Hebat! Nilai Sempurna!'
              : score >= 80
              ? 'Bagus Sekali!'
              : score >= 60
              ? 'Sudah Bagus, Terus Berlatih!'
              : 'Semangat! Ayo Coba Lagi!'}
          </h2>

          <div className="my-5 inline-flex flex-col items-center justify-center rounded-2xl bg-amber-50 border border-amber-200 px-8 py-4">
            <span className="font-display text-5xl font-black text-amber-600 tabular-nums">
              {score}
            </span>
            <span className="text-xs font-bold text-slate-500 mt-1">
              Benar {correctCount} dari {questions.length} soal
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <button
              onClick={startQuiz}
              className="flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 font-display text-xs font-bold text-white shadow-[0_3px_0_#b45309] hover:bg-amber-400 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Ulangi Kuis</span>
            </button>
            <button
              onClick={() => setQuizStarted(false)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 font-display text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
            >
              Ganti Mapel / Pengaturan
            </button>
          </div>

          {/* Detailed Question Review */}
          <div className="text-left border-t border-slate-100 pt-6">
            <h3 className="font-display text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-500" />
              <span>Pembahasan Soal</span>
            </h3>

            <div className="space-y-3">
              {questions.map((q, idx) => {
                const userAns = selectedAnswers[idx];
                const isCorrect = userAns === q.correctIndex;
                return (
                  <div
                    key={q.id}
                    className={`rounded-2xl border p-4 transition-all ${
                      isCorrect ? 'border-emerald-200 bg-emerald-50/40' : 'border-rose-200 bg-rose-50/40'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white font-bold text-xs shadow-2xs text-slate-700">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-bold text-slate-600">
                          Kelas {q.grade} · {q.topic}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ReadAloudButton
                          text={q.question}
                          options={q.options}
                          curriculum={q.curriculum || currentCurriculum}
                          subject={q.subject}
                          size="sm"
                          variant="ghost"
                          title="Dengarkan soal & pilihan"
                        />
                        {isCorrect ? (
                          <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                            <CheckCircle2 className="h-3.5 w-3.5" /> Benar
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md">
                            <XCircle className="h-3.5 w-3.5" /> Salah
                          </span>
                        )}
                      </div>
                    </div>

                    {(q.imageKey || q.imageUrl) && (
                      <QuestionIllustration
                        imageKey={q.imageKey}
                        imageCaption={q.imageCaption}
                        imageUrl={q.imageUrl}
                        className="my-2.5"
                      />
                    )}

                    <p className="font-bold text-slate-800 text-sm mb-3">{q.question}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                      {q.options.map((opt, optIdx) => {
                        const isUserPick = userAns === optIdx;
                        const isRealCorrect = optIdx === q.correctIndex;
                        let optionStyle = 'border-slate-200 bg-white text-slate-700';

                        if (isRealCorrect) {
                          optionStyle = 'border-emerald-400 bg-emerald-100/70 text-emerald-900 font-bold';
                        } else if (isUserPick && !isCorrect) {
                          optionStyle = 'border-rose-300 bg-rose-100/70 text-rose-900 line-through';
                        }

                        return (
                          <div key={optIdx} className={`rounded-xl border px-3 py-2 ${optionStyle}`}>
                            <span className="font-bold mr-1.5">{String.fromCharCode(65 + optIdx)}.</span>
                            {opt}
                          </div>
                        );
                      })}
                    </div>

                    <div className="rounded-xl bg-amber-50/80 border border-amber-200/60 p-3 text-xs text-amber-950">
                      <span className="font-bold text-amber-800 block mb-0.5">💡 Kunci & Penjelasan:</span>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Active in-progress question view
  if (quizStarted && questions.length > 0) {
    const currentQ = questions[currentIndex];
    const userSelected = selectedAnswers[currentIndex];
    const hasAnswered = userSelected !== undefined;
    const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

    return (
      <div className="mx-auto w-full max-w-4xl px-2 sm:px-4 md:px-6 py-2.5 sm:py-6">
        {/* Progress & Top Bar (Ultra-Compact on Mobile) */}
        <div className="mb-2.5 sm:mb-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap min-w-0">
            <span className="text-[11px] sm:text-xs font-bold text-slate-500 whitespace-nowrap">
              Soal <strong className="text-amber-600 tabular-nums">{currentIndex + 1}</strong>/
              <strong className="tabular-nums">{questions.length}</strong>
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-[11px] sm:text-xs font-bold text-slate-700 truncate max-w-[140px] sm:max-w-none">
              Kls {currentQ.grade} · {currentQ.topic}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setIsScratchpadOpen(true)}
              className="flex items-center gap-1 rounded-lg sm:rounded-xl border border-amber-300 bg-amber-50 px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold text-amber-800 hover:bg-amber-100 transition-all cursor-pointer"
            >
              <PenTool className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span className="hidden sm:inline">Oret-oretan</span>
              <span className="sm:hidden">Coret</span>
            </button>
            <button
              onClick={() => {
                sounds.playPop();
                setShowExitConfirm(true);
              }}
              className="flex items-center gap-1 rounded-lg sm:rounded-xl border border-rose-200 bg-rose-50 px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold text-rose-700 hover:bg-rose-100 transition-all cursor-pointer"
              title="Keluar dari Kuis"
            >
              <LogOut className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>Keluar</span>
            </button>
          </div>
        </div>

        {/* In-app Exit Confirmation Modal */}
        {showExitConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-fadeIn">
            <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-xl border-2 border-slate-200 text-center animate-scaleIn">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-2xl border border-amber-300">
                🚪
              </div>
              <h3 className="font-display text-lg font-black text-slate-900 mb-1">
                Keluar dari Kuis?
              </h3>
              <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                Kemajuan kuis yang sedang berjalan akan dihentikan. Kamu yakin ingin keluar dari kuis?
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    sounds.playPop();
                    setShowExitConfirm(false);
                  }}
                  className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer"
                >
                  Lanjut Kuis
                </button>
                <button
                  onClick={() => {
                    sounds.playPop();
                    setShowExitConfirm(false);
                    setQuizStarted(false);
                    setQuizFinished(false);
                    if (onBackToClassModule) {
                      onBackToClassModule();
                    }
                  }}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs shadow-[0_2px_0_#9f1239] transition-all cursor-pointer"
                >
                  Ya, Keluar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Progress bar */}
        <div className="mb-3 sm:mb-6 h-2 sm:h-2.5 w-full overflow-hidden rounded-full bg-slate-100 border border-slate-200">
          <div
            className="h-full rounded-full bg-amber-400 transition-all duration-200"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Main Question Card */}
        <div className="rounded-2xl sm:rounded-3xl border-2 border-slate-200 bg-white p-3.5 sm:p-7 md:p-8 shadow-sm">
          <div className="mb-3.5 sm:mb-6">
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                {currentQ.phase}
              </span>
              <div className="flex items-center gap-2">
                <ReadAloudButton
                  text={currentQ.question}
                  options={currentQ.options}
                  curriculum={currentQ.curriculum || currentCurriculum}
                  subject={currentQ.subject}
                  size="sm"
                  variant="secondary"
                  label="Baca Soal"
                  title="Dengarkan soal & pilihan jawaban dengan suara"
                  showBadge={true}
                />
                <button
                  onClick={() => {
                    setShowHint(!showHint);
                    sounds.playPop();
                  }}
                  className="flex items-center gap-1 text-amber-600 hover:text-amber-800 font-bold text-[11px] sm:text-xs cursor-pointer"
                >
                  <HelpCircle className="h-3.5 w-3.5" />
                  <span>{showHint ? 'Tutup Petunjuk' : 'Minta Petunjuk'}</span>
                </button>
              </div>
            </div>

            {showHint && (
              <div className="mb-3 rounded-xl bg-amber-50 border border-amber-200 p-2.5 sm:p-3 text-xs text-amber-900 animate-fadeIn">
                <strong>Petunjuk:</strong> {currentQ.hint}
              </div>
            )}

            {/* Illustrated Question Graphic */}
            {(currentQ.imageKey || currentQ.imageUrl) && (
              <QuestionIllustration
                imageKey={currentQ.imageKey}
                imageCaption={currentQ.imageCaption}
                imageUrl={currentQ.imageUrl}
              />
            )}

            <p className="font-display text-sm sm:text-lg md:text-xl font-bold text-slate-900 leading-snug sm:leading-relaxed mt-1.5 sm:mt-2 break-words">
              {currentQ.question}
            </p>
          </div>

          {/* Option list */}
          <div className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-6">
            {currentQ.options.map((option, idx) => {
              const isSelected = userSelected === idx;
              const isCorrectAnswer = idx === currentQ.correctIndex;

              let btnStyle = 'border-2 border-slate-200 bg-white text-slate-700 hover:border-amber-400 hover:bg-amber-50/50';

              if (hasAnswered && isInstantFeedback) {
                if (isCorrectAnswer) {
                  btnStyle = 'border-2 border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                } else if (isSelected && !isCorrectAnswer) {
                  btnStyle = 'border-2 border-rose-400 bg-rose-50 text-rose-950';
                } else {
                  btnStyle = 'border-2 border-slate-100 bg-slate-50 text-slate-400 opacity-60';
                }
              } else if (isSelected) {
                btnStyle = 'border-2 border-amber-500 bg-amber-50 text-amber-900 font-bold';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasAnswered && isInstantFeedback}
                  className={`w-full rounded-xl sm:rounded-2xl p-3 sm:p-4 text-left font-display text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 sm:gap-3.5 ${btnStyle}`}
                >
                  <span className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1 break-words leading-snug">{option}</span>
                  {hasAnswered && isInstantFeedback && isCorrectAnswer && (
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 shrink-0" />
                  )}
                  {hasAnswered && isInstantFeedback && isSelected && !isCorrectAnswer && (
                    <XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Instant feedback explanation callout */}
          {hasAnswered && isInstantFeedback && (
            <div className="mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-amber-50 border border-amber-200/80 p-3 sm:p-4 text-xs text-amber-950 animate-fadeIn break-words">
              <span className="font-bold block mb-1">
                {userSelected === currentQ.correctIndex ? '🎉 Jawaban Benar!' : '🌱 Penjelasan:'}
              </span>
              <p className="leading-relaxed">{currentQ.explanation}</p>
            </div>
          )}

          {/* Next button */}
          <div className="flex items-center justify-end">
            <button
              onClick={handleNext}
              disabled={!hasAnswered}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 font-display text-xs sm:text-sm font-bold text-white shadow-[0_3px_0_#b45309] transition-all active:translate-y-0.5 active:shadow-none ${
                hasAnswered
                  ? 'bg-amber-500 hover:bg-amber-400 cursor-pointer'
                  : 'bg-slate-300 shadow-none cursor-not-allowed text-slate-500'
              }`}
            >
              <span>{currentIndex + 1 === questions.length ? 'Lihat Hasil Nilai' : 'Soal Berikutnya'}</span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>
          </div>
        </div>

        <ScratchpadModal isOpen={isScratchpadOpen} onClose={() => setIsScratchpadOpen(false)} />
      </div>
    );
  }

  // Initial Quiz Setup Screen
  return (
    <div className="mx-auto w-full max-w-4xl px-3 sm:px-6 py-4 sm:py-6 animate-fadeIn">
      <div className="rounded-2xl sm:rounded-3xl border-2 border-slate-200 bg-white p-3.5 sm:p-7 md:p-8 shadow-xs space-y-4 sm:space-y-6">
        <div>
          <h1 className="text-lg sm:text-2xl font-extrabold text-slate-900 font-display">
            Pengaturan Kuis
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Pilih mata pelajaran dan jumlah butir soal latihan.
          </p>
        </div>

        {/* Syllabus Strand Filter Active Notice */}
        {selectedStrand && (
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-amber-100/70 border-2 border-amber-300 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500 text-white font-bold text-sm shadow-xs">
                🎯
              </span>
              <div>
                <div className="font-extrabold text-amber-950">
                  Fokus Silabus: {selectedStrand}
                </div>
                {selectedTopic && (
                  <div className="text-[11px] text-amber-800">
                    Sub-topik: <strong className="font-bold">{selectedTopic}</strong>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={() => {
                setSelectedStrand(undefined);
                setSelectedTopic(undefined);
              }}
              className="px-2.5 py-1.5 rounded-xl bg-white border border-amber-300 text-amber-900 font-bold hover:bg-amber-50 transition-colors text-[11px] cursor-pointer shadow-2xs"
            >
              Hapus Filter Silabus
            </button>
          </div>
        )}

        {/* Step 1: Pilih Jenjang / Kelas Khusus */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-xs font-bold text-slate-700">
              Jenjang / Kelas Soal:
            </label>
            {isSingleClassLock && (
              <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                🔒 Terkunci Sesuai Akses Paket
              </span>
            )}
          </div>
          {isSingleClassLock ? (
            <div className="p-3 bg-amber-50/80 rounded-2xl border-2 border-amber-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">
                  {selectedGrade === 1 ? '🌱' : selectedGrade === 2 ? '🌿' : selectedGrade === 3 ? '🌻' : selectedGrade === 4 ? '🌲' : selectedGrade === 5 ? '🚀' : '🎓'}
                </span>
                <div>
                  <div className="text-sm font-black text-slate-900">
                    {currentCurriculum === 'cambridge'
                      ? `Stage ${selectedGrade}`
                      : currentCurriculum === 'singapore'
                      ? `Primary ${selectedGrade}`
                      : `Kelas ${selectedGrade} SD`}
                  </div>
                  <div className="text-[11px] text-amber-900 font-medium">
                    Akses paket Anda aktif untuk jenjang ini. Seluruh latihan soal diambil khusus dari Kelas {selectedGrade}.
                  </div>
                </div>
              </div>
              <span className="text-xs font-extrabold text-amber-950 bg-amber-200/80 px-2.5 py-1 rounded-xl shadow-2xs">
                Akses Aktif ✓
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 sm:gap-2">
              {([1, 2, 3, 4, 5, 6] as GradeLevel[]).map((g) => {
                const isCurrent = selectedGrade === g;
                const emoji =
                  g === 1 ? '🌱' :
                  g === 2 ? '🌿' :
                  g === 3 ? '🌻' :
                  g === 4 ? '🌲' :
                  g === 5 ? '🚀' : '🎓';
                const label =
                  currentCurriculum === 'cambridge'
                    ? `Stage ${g}`
                    : currentCurriculum === 'singapore'
                    ? `P${g}`
                    : `Kelas ${g} SD`;

                return (
                  <button
                    key={g}
                    onClick={() => {
                      sounds.playPop();
                      setSelectedGrade(g);
                    }}
                    className={`py-2 px-2 rounded-xl text-xs font-black transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer border ${
                      isCurrent
                        ? 'bg-amber-400 text-slate-900 border-amber-500 shadow-2xs scale-[1.02]'
                        : 'bg-slate-50 hover:bg-amber-50/70 text-slate-700 border-slate-200'
                    }`}
                  >
                    <span className="text-sm">{emoji}</span>
                    <span className="truncate">{label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Step 2: Subject */}
        <div>
          <label className="text-xs font-bold text-slate-700 block mb-2">
            Pilih Mata Pelajaran (Khusus Kelas {selectedGrade}):
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-2.5">
            <button
              onClick={() => setSelectedSubject('all')}
              className={`rounded-xl sm:rounded-2xl border-2 p-2 sm:p-3 text-left transition-all flex items-center gap-2 ${
                selectedSubject === 'all'
                  ? 'border-amber-500 bg-amber-50 font-bold shadow-2xs'
                  : 'border-slate-200 bg-white hover:border-amber-300 text-slate-700'
              }`}
            >
              <span className="text-xl sm:text-2xl">🎲</span>
              <div className="min-w-0">
                <span className="text-xs font-extrabold block truncate">Semua Mapel</span>
                <span className="text-[10px] text-slate-500 hidden sm:block">Campur Mapel Kelas {selectedGrade}</span>
              </div>
            </button>

            {getSubjectsByCurriculum(currentCurriculum).map((subj) => {
              const isSelected = selectedSubject === subj.id;
              const qCount = getQuestionsByGradeAndSubject(selectedGrade, subj.id, currentCurriculum).length;
              return (
                <button
                  key={subj.id}
                  onClick={() => setSelectedSubject(subj.id)}
                  className={`rounded-xl sm:rounded-2xl border-2 p-2 sm:p-3 text-left transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'border-amber-500 bg-amber-50 font-bold shadow-2xs'
                      : 'border-slate-200 bg-white hover:border-amber-300 text-slate-700'
                  }`}
                >
                  <span className="text-xl sm:text-2xl">{subj.icon}</span>
                  <div className="min-w-0">
                    <span className="text-xs font-extrabold block truncate">{subj.shortName || subj.name}</span>
                    <span className="text-[10px] text-slate-500">{qCount} Soal</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Question Length */}
        <div>
          <div className="flex flex-wrap items-center justify-between mb-2 gap-1">
            <label className="text-xs font-bold text-slate-700">
              Jumlah Soal Latihan:
            </label>
            <span className="text-[11px] font-semibold text-slate-500">
              Tersedia total: <strong className="text-amber-800 font-extrabold">{totalAvailable} butir soal</strong> (100% tanpa pengulangan)
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {lengthOptions.map((num) => {
              const isAll = num === totalAvailable;
              return (
                <button
                  key={num}
                  type="button"
                  onClick={() => setQuizLength(num)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-bold border transition-all ${
                    quizLength === num
                      ? 'bg-amber-400 text-slate-900 border-amber-500 shadow-2xs font-extrabold ring-2 ring-amber-300'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-amber-50'
                  }`}
                >
                  {isAll
                    ? `🌟 Semua Soal Lengkap (${num} Soal)`
                    : `${num} Soal`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Feedback Mode */}
        <div>
          <label className="text-xs font-bold text-slate-700 block mb-2">
            Mode Pengerjaan:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => setIsInstantFeedback(true)}
              className={`p-3 rounded-2xl border-2 text-left transition-all ${
                isInstantFeedback
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <span className="font-extrabold text-slate-900 block mb-0.5">
                💡 Umpan Balik Langsung
              </span>
              <span className="text-[11px] text-slate-500">
                Langsung tahu benar/salah & penjelasan tiap selesai memilih.
              </span>
            </button>

            <button
              onClick={() => setIsInstantFeedback(false)}
              className={`p-3 rounded-2xl border-2 text-left transition-all ${
                !isInstantFeedback
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <span className="font-extrabold text-slate-900 block mb-0.5">
                ⏱️ Simulasi Ujian
              </span>
              <span className="text-[11px] text-slate-500">
                Tanpa petunjuk langsung, evaluasi total muncul di akhir kuis.
              </span>
            </button>
          </div>
        </div>

        {/* Start Button */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={startQuiz}
            className="w-full sm:w-auto rounded-xl bg-amber-500 hover:bg-amber-400 px-6 py-3 font-display text-sm font-bold text-white shadow-[0_3px_0_#b45309] active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2"
          >
            <span>Mulai Kuis</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
