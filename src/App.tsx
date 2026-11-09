import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { GradeSelectionHome } from './components/GradeSelectionHome';
import { GradeModuleView } from './components/GradeModuleView';
import { QuizView } from './components/QuizView';
import { QuestionBankView } from './components/QuestionBankView';
import { PrintWorksheetView } from './components/PrintWorksheetView';
import { CheatSheetView } from './components/CheatSheetView';
import { SyllabusView } from './components/SyllabusView';
import { SubjectId, GradeLevel, CurriculumId } from './types/quiz';
import { CURRICULUM_METAS } from './data/questionBank';
import { sounds } from './utils/soundEffects';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');

  // Multi-Curriculum State: 'merdeka' | 'cambridge' | 'singapore'
  const [selectedCurriculum, setSelectedCurriculum] = useState<CurriculumId>(() => {
    try {
      const saved = localStorage.getItem('pintaria_curriculum');
      if (saved === 'merdeka' || saved === 'cambridge' || saved === 'singapore') {
        return saved;
      }
      return 'merdeka';
    } catch {
      return 'merdeka';
    }
  });

  const handleSelectCurriculum = (curr: CurriculumId) => {
    sounds.playPop();
    setSelectedCurriculum(curr);
    try {
      localStorage.setItem('pintaria_curriculum', curr);
    } catch {
      // Ignore
    }
  };

  // Parse URL parameters to check if user is on locked single-class mode (?kelas=1..6)
  // or on full-class package mode (?kelas=all or root /)
  const getInitialMode = (): { isLocked: boolean; grade: GradeLevel | null } => {
    if (typeof window === 'undefined') return { isLocked: false, grade: null };
    try {
      const params = new URLSearchParams(window.location.search);
      let val = params.get('kelas') || params.get('grade');
      if (!val) {
        const path = window.location.pathname.toLowerCase();
        const hash = window.location.hash.toLowerCase();
        const m = path.match(/\/kelas([1-6])/) || hash.match(/\/kelas([1-6])/);
        if (m) {
          val = m[1];
        }
      }
      if (val) {
        if (val.toLowerCase() === 'all' || val.toLowerCase() === 'semua' || val.toLowerCase() === 'full') {
          return { isLocked: false, grade: null };
        }
        const num = parseInt(val, 10);
        if (num >= 1 && num <= 6) {
          return { isLocked: true, grade: num as GradeLevel };
        }
      }
    } catch {
      // Ignore
    }
    return { isLocked: false, grade: null };
  };

  const initialConfig = getInitialMode();
  const [isSingleClassLock, setIsSingleClassLock] = useState<boolean>(initialConfig.isLocked);
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel | null>(() => {
    if (initialConfig.grade) return initialConfig.grade;
    try {
      const saved = localStorage.getItem('pintaria_grade');
      if (saved) {
        const num = parseInt(saved, 10);
        if (num >= 1 && num <= 6) return num as GradeLevel;
      }
    } catch {
      // Ignore
    }
    return null;
  });

  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Cross-component transition state
  const [quizInitialSubject, setQuizInitialSubject] = useState<SubjectId | 'all'>('all');
  const [quizInitialStrand, setQuizInitialStrand] = useState<string | undefined>(undefined);
  const [quizInitialTopic, setQuizInitialTopic] = useState<string | undefined>(undefined);
  const [bankInitialSubject, setBankInitialSubject] = useState<SubjectId | 'all'>('all');
  const [bankInitialStrand, setBankInitialStrand] = useState<string | undefined>(undefined);
  const [printInitialSubject, setPrintInitialSubject] = useState<SubjectId>('matematika');

  // Stars reward
  const [starsCount, setStarsCount] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('pintaria_stars');
      return saved ? Number(saved) : 10;
    } catch {
      return 10;
    }
  });

  // Listen for browser navigation (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const config = getInitialMode();
      setIsSingleClassLock(config.isLocked);
      if (config.grade) {
        setSelectedGrade(config.grade);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('pintaria_stars', String(starsCount));
    } catch {
      // Ignore
    }
  }, [starsCount]);

  // When a user picks a grade from any grid (Full bundling mode only)
  const handleSelectGradeFromKotak = (grade: GradeLevel) => {
    if (isSingleClassLock) return;
    sounds.playPop();
    setSelectedGrade(grade);
    try {
      localStorage.setItem('pintaria_grade', String(grade));
    } catch {
      // Ignore
    }
    setCurrentTab('home');
  };

  // Switch active grade without returning to the 6-box home screen (Full bundling mode only)
  const handleSelectGrade = (grade: GradeLevel) => {
    if (isSingleClassLock) return;
    sounds.playPop();
    setSelectedGrade(grade);
    try {
      localStorage.setItem('pintaria_grade', String(grade));
    } catch {
      // Ignore
    }
  };

  // Return to Kotak-Kotak selection screen (menu awal yang pilih kelas - Full bundling mode only)
  const handleReturnToGradeSelection = () => {
    if (isSingleClassLock) return;
    sounds.playPop();
    setSelectedGrade(null);
    try {
      localStorage.removeItem('pintaria_grade');
    } catch {
      // Ignore
    }
    setCurrentTab('home');
  };

  // Launch quiz from grade module or syllabus
  const handleStartQuizFromModule = (
    grade: GradeLevel,
    subject: SubjectId | 'all',
    strand?: string,
    topic?: string
  ) => {
    sounds.playPop();
    setSelectedGrade(grade);
    setQuizInitialSubject(subject);
    setQuizInitialStrand(strand);
    setQuizInitialTopic(topic);
    setCurrentTab('quiz');
  };

  // Launch question bank from grade module or syllabus
  const handleOpenBankFromModule = (
    grade: GradeLevel,
    subject: SubjectId | 'all',
    strand?: string
  ) => {
    sounds.playPop();
    setSelectedGrade(grade);
    setBankInitialSubject(subject);
    setBankInitialStrand(strand);
    setCurrentTab('bank');
  };

  // Launch print worksheet from grade module
  const handleOpenPrintFromModule = (grade: GradeLevel, subject: SubjectId) => {
    sounds.playPop();
    setSelectedGrade(grade);
    setPrintInitialSubject(subject);
    setCurrentTab('print');
  };

  // Return to class module
  const handleReturnToClassModule = () => {
    sounds.playPop();
    setCurrentTab('home');
  };

  // Active grade to use in Quiz/Bank/Print if user hasn't selected one yet (default to 1)
  const effectiveGrade: GradeLevel = selectedGrade || 1;
  const activeCurriculumMeta = CURRICULUM_METAS[selectedCurriculum] || CURRICULUM_METAS.merdeka;

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 flex flex-col font-sans selection:bg-amber-200 w-full max-w-full overflow-x-hidden">
      {/* Top Bar Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        starsCount={starsCount}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        activeGrade={selectedGrade}
        isSingleClassLock={isSingleClassLock}
        onReturnToGradeSelection={handleReturnToGradeSelection}
        onSelectGrade={handleSelectGrade}
        currentCurriculum={selectedCurriculum}
        onSelectCurriculum={handleSelectCurriculum}
      />

      {/* Access Package Notice Banner */}
      {isSingleClassLock ? (
        <div className="bg-amber-100 border-b border-amber-300/80 text-amber-950 py-1.5 px-3 sm:px-6 text-center text-xs font-bold flex items-center justify-center gap-2 shadow-2xs">
          <span>🔒</span>
          <span>Akses Paket Khusus: {selectedCurriculum === 'cambridge' ? `Stage ${effectiveGrade}` : selectedCurriculum === 'singapore' ? `Primary ${effectiveGrade}` : `Kelas ${effectiveGrade} SD`}</span>
          <span className="hidden sm:inline text-amber-800 text-[11px] font-normal">
            · Seluruh modul materi, latihan soal, kuis, dan LKPD aktif khusus untuk jenjang ini.
          </span>
        </div>
      ) : (
        <div className="bg-amber-500/10 border-b border-amber-200 text-amber-950 py-1.5 px-3 sm:px-6 text-center text-[11px] sm:text-xs font-bold flex items-center justify-center gap-2 shadow-2xs">
          <span>⭐</span>
          <span>Akses Paket: Full Bundling (Kelas 1 - 6 SD)</span>
          <span className="hidden sm:inline text-slate-500 font-normal">
            · Bebas memilih dan beralih ke semua jenjang kelas kapan saja.
          </span>
        </div>
      )}

      {/* Main View Area */}
      <main className="flex-1 pb-20 md:pb-8 w-full max-w-full overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 pt-3 sm:pt-6 w-full max-w-full">
          {/* HOME TAB */}
          {currentTab === 'home' && (
            <>
              {selectedGrade ? (
                <GradeModuleView
                  grade={selectedGrade}
                  currentCurriculum={selectedCurriculum}
                  isSingleClassLock={isSingleClassLock}
                  onBackToGradeSelection={!isSingleClassLock ? handleReturnToGradeSelection : undefined}
                  onSelectGrade={handleSelectGrade}
                  onStartQuiz={handleStartQuizFromModule}
                  onOpenBank={handleOpenBankFromModule}
                  onOpenPrint={handleOpenPrintFromModule}
                  onOpenSyllabus={() => setCurrentTab('silabus')}
                />
              ) : (
                <GradeSelectionHome
                  onSelectGrade={handleSelectGradeFromKotak}
                  currentCurriculum={selectedCurriculum}
                  onSelectCurriculum={handleSelectCurriculum}
                />
              )}
            </>
          )}

          {/* QUIZ TAB */}
          {currentTab === 'quiz' && (
            <QuizView
              initialGrade={effectiveGrade}
              initialSubject={quizInitialSubject}
              initialStrand={quizInitialStrand}
              initialTopic={quizInitialTopic}
              onBackToClassModule={handleReturnToClassModule}
              currentCurriculum={selectedCurriculum}
              isSingleClassLock={isSingleClassLock}
            />
          )}

          {/* QUESTION BANK TAB */}
          {currentTab === 'bank' && (
            <QuestionBankView
              initialSubject={bankInitialSubject}
              initialGrade={effectiveGrade}
              initialStrand={bankInitialStrand}
              onBackToClassModule={handleReturnToClassModule}
              currentCurriculum={selectedCurriculum}
              isSingleClassLock={isSingleClassLock}
            />
          )}

          {/* PRINT WORKSHEET TAB */}
          {currentTab === 'print' && (
            <PrintWorksheetView
              initialSubject={printInitialSubject}
              initialGrade={effectiveGrade}
              onBackToClassModule={handleReturnToClassModule}
              currentCurriculum={selectedCurriculum}
              isSingleClassLock={isSingleClassLock}
            />
          )}

          {/* CHEATSHEET & FORMULAS TAB */}
          {currentTab === 'cheatsheet' && <CheatSheetView />}

          {/* CURRICULUM SYLLABUS TAB */}
          {currentTab === 'silabus' && (
            <SyllabusView
              currentCurriculum={selectedCurriculum}
              onSelectCurriculum={handleSelectCurriculum}
              onStartQuiz={handleStartQuizFromModule}
              onOpenBank={handleOpenBankFromModule}
              onOpenPrint={handleOpenPrintFromModule}
              isSingleClassLock={isSingleClassLock}
              lockedGrade={effectiveGrade}
            />
          )}
        </div>
      </main>

      {/* Clean Cheerful Footer */}
      <footer className="border-t border-amber-200/60 bg-white/80 py-4 text-center text-xs text-slate-500 print:hidden mb-12 md:mb-0">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-amber-500 font-bold">⭐ Pintaria SD</span>
            <span>
              · {activeCurriculumMeta.name} {activeCurriculumMeta.flag}{' '}
              {isSingleClassLock ? `(Akses Paket: Kelas ${effectiveGrade} SD)` : '(Paket Lengkap: Kelas 1-6 SD)'}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-slate-400 flex-wrap justify-center text-[11px] sm:text-xs">
            <span>{activeCurriculumMeta.standard}</span>
            <span>·</span>
            <span>4.000+ Butir Soal Terverifikasi</span>
            <span>·</span>
            <span>LKPD Siap Cetak A4</span>
          </div>
        </div>
      </footer>

      {/* Mandatory Watermark Notice across all pages */}
      <div className="bg-[#FFFDF7] border-t border-amber-200/80 py-2.5 px-4 text-center text-[11px] sm:text-xs font-semibold text-amber-950/85 tracking-wide print:hidden">
        © PINTARIA. Seluruh hak dilindungi. Dilarang memperjualbelikan, menggandakan, membagikan, atau mendistribusikan produk ini tanpa izin
      </div>
    </div>
  );
}
