import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, LayoutGrid, Globe, ChevronDown } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import { GradeLevel, CurriculumId } from '../types/quiz';
import { CURRICULUM_METAS } from '../data/questionBank';

export type NavTab = 'home' | 'quiz' | 'bank' | 'print' | 'cheatsheet' | 'silabus';

interface NavbarProps {
  currentTab: NavTab;
  setCurrentTab: (tab: NavTab) => void;
  starsCount: number;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  activeGrade: GradeLevel | null;
  isSingleClassLock: boolean;
  onReturnToGradeSelection?: () => void;
  onSelectGrade?: (grade: GradeLevel) => void;
  currentCurriculum: CurriculumId;
  onSelectCurriculum: (curriculum: CurriculumId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  starsCount,
  soundEnabled,
  setSoundEnabled,
  activeGrade,
  isSingleClassLock,
  onReturnToGradeSelection,
  onSelectGrade,
  currentCurriculum,
  onSelectCurriculum,
}) => {
  const [curriculumMenuOpen, setCurriculumMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setCurriculumMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sounds.enabled = next;
    if (next) sounds.playPop();
  };

  const navItems: { id: NavTab; label: string; shortLabel: string; icon: string }[] = [
    { id: 'home', label: 'Modul Belajar', shortLabel: 'Modul', icon: '📖' },
    { id: 'quiz', label: 'Kuis Interaktif', shortLabel: 'Kuis', icon: '🎮' },
    { id: 'bank', label: 'Bank Soal', shortLabel: 'Bank', icon: '📚' },
    { id: 'print', label: 'Cetak LKPD', shortLabel: 'Cetak', icon: '🖨️' },
    { id: 'cheatsheet', label: 'Rumus & Kamus', shortLabel: 'Rumus', icon: '📐' },
    { id: 'silabus', label: 'Silabus Resmi', shortLabel: 'Silabus', icon: '📋' },
  ];

  const gradeEmoji =
    activeGrade === 1 ? '🌱' :
    activeGrade === 2 ? '🌿' :
    activeGrade === 3 ? '🌻' :
    activeGrade === 4 ? '🌲' :
    activeGrade === 5 ? '🚀' :
    activeGrade === 6 ? '🎓' : '🎒';

  const activeCurriculumMeta = CURRICULUM_METAS[currentCurriculum] || CURRICULUM_METAS.merdeka;

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-amber-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-3 sm:px-6 gap-2">
          {/* Zone 1: Wordmark with mascot logo and grade / curriculum badge */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => {
                sounds.playPop();
                if (onReturnToGradeSelection && !isSingleClassLock) {
                  onReturnToGradeSelection();
                } else {
                  setCurrentTab('home');
                }
              }}
              className="flex items-center gap-2 text-left focus-visible:outline-none cursor-pointer shrink-0"
              title="Kembali ke Menu Awal Pintaria SD"
            >
              <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl sm:rounded-2xl bg-amber-400 text-base sm:text-lg shadow-sm shrink-0">
                ⭐
              </span>
              <div className="shrink-0">
                <span className="font-display text-base sm:text-xl font-black tracking-tight text-slate-900 hover:text-amber-600 transition-colors block leading-tight">
                  Pintaria SD
                </span>
                <span className="text-[10px] text-amber-700 font-bold tracking-wider hidden lg:block">
                  MULTI-KURIKULUM
                </span>
              </div>
            </button>

            {/* Curriculum Selector Dropdown */}
            <div className="relative shrink-0" ref={menuRef}>
              <button
                onClick={() => {
                  sounds.playPop();
                  setCurriculumMenuOpen(!curriculumMenuOpen);
                }}
                className="flex items-center gap-1.5 rounded-lg sm:rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-bold text-slate-800 shadow-2xs transition-all cursor-pointer whitespace-nowrap"
                title="Pilih Kurikulum"
              >
                <span>{activeCurriculumMeta.flag}</span>
                <span className="hidden sm:inline font-extrabold">{activeCurriculumMeta.name}</span>
                <span className="sm:hidden font-extrabold">
                  {currentCurriculum === 'merdeka' ? 'Merdeka' : currentCurriculum === 'cambridge' ? 'Cambridge' : 'Singapore'}
                </span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </button>

              {curriculumMenuOpen && (
                <div className="absolute left-0 mt-1.5 w-64 rounded-2xl bg-white border-2 border-slate-200 shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <div className="px-3 py-1.5 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Pilih Standar Kurikulum
                  </div>
                  {(['merdeka', 'cambridge', 'singapore'] as CurriculumId[]).map((cId) => {
                    const meta = CURRICULUM_METAS[cId];
                    const isSelected = currentCurriculum === cId;
                    return (
                      <button
                        key={cId}
                        onClick={() => {
                          sounds.playPop();
                          onSelectCurriculum(cId);
                          setCurriculumMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 flex items-center justify-between transition-colors cursor-pointer ${
                          isSelected ? 'bg-amber-50 text-amber-950 font-bold' : 'hover:bg-slate-50 text-slate-700 font-medium'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-base">{meta.flag}</span>
                          <div>
                            <div className="text-xs font-bold leading-tight">{meta.name}</div>
                            <div className="text-[10px] text-slate-400 leading-tight">{meta.gradeNaming}</div>
                          </div>
                        </div>
                        {isSelected && <span className="text-amber-600 text-xs font-black">✓</span>}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Active Grade Badge / Button to Menu Awal */}
            {activeGrade ? (
              isSingleClassLock ? (
                <div
                  className="flex items-center gap-1.5 rounded-lg sm:rounded-xl bg-amber-50 border border-amber-300 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-black text-amber-950 shadow-2xs whitespace-nowrap shrink-0"
                  title={`Paket Akses Terkunci: Kelas ${activeGrade}`}
                >
                  <span className="text-[10px]">🔒</span>
                  <span>{gradeEmoji}</span>
                  <span className="hidden sm:inline">
                    {currentCurriculum === 'cambridge' ? 'Stage ' : currentCurriculum === 'singapore' ? 'Primary ' : 'Kelas '}
                  </span>
                  <span>{activeGrade}</span>
                  {currentCurriculum === 'merdeka' && <span className="hidden sm:inline"> SD</span>}
                </div>
              ) : (
                <button
                  onClick={() => {
                    sounds.playPop();
                    if (onReturnToGradeSelection) {
                      onReturnToGradeSelection();
                    }
                  }}
                  className="flex items-center gap-1.5 rounded-lg sm:rounded-xl bg-amber-100 hover:bg-amber-200 border border-amber-300 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-black text-amber-950 shadow-2xs transition-all cursor-pointer whitespace-nowrap shrink-0"
                  title="Klik untuk kembali ke menu awal pilihan kelas"
                >
                  <span>{gradeEmoji}</span>
                  <span className="hidden sm:inline">
                    {currentCurriculum === 'cambridge' ? 'Stage ' : currentCurriculum === 'singapore' ? 'Primary ' : 'Kelas '}
                  </span>
                  <span>{activeGrade}</span>
                  {currentCurriculum === 'merdeka' && <span className="hidden sm:inline"> SD</span>}
                  <span className="text-[10px] text-amber-800 font-bold ml-0.5 hidden sm:inline opacity-75">
                    (Menu Awal)
                  </span>
                </button>
              )
            ) : (
              <div className="flex items-center gap-1 rounded-lg sm:rounded-xl bg-amber-100/90 border border-amber-300 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-black text-amber-950 shadow-2xs whitespace-nowrap shrink-0">
                <span>🎒</span>
                <span>Menu Awal Kelas</span>
              </div>
            )}
          </div>

          {/* Zone 2: Navigation Links for Tablets (iPad) and Desktop (from md: 768px up) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 font-semibold shrink-0">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    sounds.playPop();
                    setCurrentTab(item.id);
                  }}
                  className={`whitespace-nowrap rounded-xl px-2.5 lg:px-3 py-1.5 text-xs font-bold transition-all cursor-pointer flex items-center gap-1 lg:gap-1.5 shrink-0 ${
                    isActive
                      ? 'bg-amber-400 text-slate-900 shadow-[0_2px_0_#d97706]'
                      : 'text-slate-600 hover:bg-amber-50 hover:text-slate-900'
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span className="md:inline lg:hidden">{item.shortLabel}</span>
                  <span className="hidden lg:inline">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions (Stars + Sound) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Stars / Points Pill */}
            <div
              className="flex items-center gap-1 rounded-xl sm:rounded-2xl border border-amber-300 bg-amber-50 px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold text-amber-900 shadow-2xs shrink-0"
              title="Bintang Kuis Kamu"
            >
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-500 text-amber-500 shrink-0" />
              <span className="font-display font-black">{starsCount}</span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl sm:rounded-2xl border transition-all cursor-pointer shrink-0 ${
                soundEnabled
                  ? 'border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100'
                  : 'border-slate-200 bg-slate-100 text-slate-400'
              }`}
              title={soundEnabled ? 'Matikan Suara' : 'Nyalakan Suara'}
              aria-label="Toggle Sound"
            >
              {soundEnabled ? (
                <Volume2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              ) : (
                <VolumeX className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Fixed Bottom Navigation Bar ONLY for Mobile Phones (< 768px, md:hidden) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-amber-200/90 bg-white/98 backdrop-blur-lg px-2 py-1.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] print:hidden">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  sounds.playPop();
                  setCurrentTab(item.id);
                }}
                className={`flex flex-col items-center justify-center gap-0.5 py-1 px-1 rounded-xl transition-all cursor-pointer flex-1 min-w-0 ${
                  isActive
                    ? 'bg-amber-100 text-amber-950 font-black shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 font-semibold'
                }`}
              >
                <span className="text-base leading-none">{item.icon}</span>
                <span className="text-[10px] leading-tight tracking-tight truncate max-w-full">
                  {item.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
