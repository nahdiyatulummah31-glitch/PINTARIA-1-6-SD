import React, { useMemo } from 'react';
import { GradeLevel, CurriculumId } from '../types/quiz';
import { sounds } from '../utils/soundEffects';
import { Sparkles, ArrowRight, BookOpen, Brain, Printer, CheckCircle } from 'lucide-react';
import { getQuestionsByGrade, CURRICULUM_METAS, getSubjectsByCurriculum } from '../data/questionBank';

interface GradeSelectionHomeProps {
  onSelectGrade: (grade: GradeLevel) => void;
  currentCurriculum: CurriculumId;
  onSelectCurriculum: (curriculum: CurriculumId) => void;
}

export const GradeSelectionHome: React.FC<GradeSelectionHomeProps> = ({
  onSelectGrade,
  currentCurriculum,
  onSelectCurriculum,
}) => {
  const activeCurriculum = CURRICULUM_METAS[currentCurriculum] || CURRICULUM_METAS.merdeka;
  const subjects = getSubjectsByCurriculum(currentCurriculum);

  const totalCurriculumQuestions = useMemo(() => {
    let sum = 0;
    for (let g = 1; g <= 6; g++) {
      sum += getQuestionsByGrade(g, currentCurriculum).length;
    }
    return sum;
  }, [currentCurriculum]);

  const getGradeCardDetails = (grade: GradeLevel) => {
    if (currentCurriculum === 'cambridge') {
      const titles = [
        'Stage 1 (Primary 1)',
        'Stage 2 (Primary 2)',
        'Stage 3 (Primary 3)',
        'Stage 4 (Primary 4)',
        'Stage 5 (Primary 5)',
        'Stage 6 (Primary 6)',
      ];
      const descs = [
        'Numbers to 20, 2D shapes, phonics, everyday materials, pushes & pulls, and digital devices.',
        'Addition with regrouping, 3D shapes, regular past tense, animal habitats, and directional robotics.',
        'Fact families, equivalent fractions, fronted adverbs, human skeleton, and Scratch block coding.',
        'Decimals, rectilinear area, figurative similes, water cycle, thermal insulators, and conditionals.',
        'Percentages, prime numbers, relative clauses, reversible changes, solar system, and binary logic.',
        'Ratios, simple algebra, complex sentences, circulatory system, and computational thinking.',
      ];
      return {
        title: titles[grade - 1],
        sub: `Cambridge Stage ${grade}`,
        age: `Age ${grade + 5} – ${grade + 6} Years`,
        desc: descs[grade - 1],
      };
    }

    if (currentCurriculum === 'singapore') {
      const titles = [
        'Primary 1 (P1)',
        'Primary 2 (P2)',
        'Primary 3 (P3)',
        'Primary 4 (P4)',
        'Primary 5 (P5)',
        'Primary 6 (P6)',
      ];
      const descs = [
        'Number bonds to 10, part-whole models, living things, everyday materials, and grammar foundations.',
        'Multiplication tables, 2-step bar models, butterfly cycles, human digestion, and past tense verbs.',
        'Comparison models with difference, HCF, 3-stage life cycles, magnets, and reported speech.',
        'Decimals, assumption method, water cycle, human heart, electromagnetism, and phrasal verbs.',
        'Ratios, percentage discount & GST, plant reproduction, parallel circuits, and despite/unless synthesis.',
        'Speed distance time, circles, constant difference heuristics, ecosystems, and PSLE transformation.',
      ];
      return {
        title: titles[grade - 1],
        sub: `Singapore P${grade}`,
        age: `Age ${grade + 5} – ${grade + 6} Years`,
        desc: descs[grade - 1],
      };
    }

    // Default: Kurikulum Merdeka
    const descs = [
      'Mengenal huruf, angka dasar, fonik, lingkungan sekitar, dan logika coding sederhana.',
      'Penjumlahan bersusun, membaca lancar, siklus makhluk hidup, dan pola algoritma awal.',
      'Perkalian & pembagian dasar, teks narasi, wujud zat, norma masyarakat, dan debugging.',
      'Pecahan, energi & perubahannya, kearifan lokal, ide pokok paragraf, serta konsep perulangan.',
      'Operasi pecahan campuran, sistem organ tubuh, teks eksplanasi, hak & kewajiban, serta logika percabangan.',
      'Rasio & desimal, tata surya & listrik, pidato persuasif, nilai-nilai Pancasila, dan etika kecerdasan buatan.',
    ];
    const phases = ['Fase A', 'Fase A', 'Fase B', 'Fase B', 'Fase C', 'Fase C'];
    return {
      title: `Kelas ${grade} SD`,
      sub: phases[grade - 1],
      age: `Usia ${grade + 5} – ${grade + 6} Tahun`,
      desc: descs[grade - 1],
    };
  };

  const gradeCards: {
    grade: GradeLevel;
    emoji: string;
    bgGradient: string;
    borderColor: string;
    accentColor: string;
    badgeBg: string;
    badgeText: string;
    buttonColor: string;
  }[] = [
    {
      grade: 1,
      emoji: '🌱',
      bgGradient: 'from-emerald-50/80 to-white',
      borderColor: 'border-emerald-300 hover:border-emerald-500',
      accentColor: 'text-emerald-700',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-900',
      buttonColor: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_3px_0_#047857]',
    },
    {
      grade: 2,
      emoji: '🌿',
      bgGradient: 'from-teal-50/80 to-white',
      borderColor: 'border-teal-300 hover:border-teal-500',
      accentColor: 'text-teal-700',
      badgeBg: 'bg-teal-100',
      badgeText: 'text-teal-900',
      buttonColor: 'bg-teal-500 hover:bg-teal-600 text-white shadow-[0_3px_0_#0f766e]',
    },
    {
      grade: 3,
      emoji: '🌻',
      bgGradient: 'from-amber-50/80 to-white',
      borderColor: 'border-amber-300 hover:border-amber-500',
      accentColor: 'text-amber-800',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-950',
      buttonColor: 'bg-amber-500 hover:bg-amber-600 text-white shadow-[0_3px_0_#b45309]',
    },
    {
      grade: 4,
      emoji: '🌲',
      bgGradient: 'from-blue-50/80 to-white',
      borderColor: 'border-blue-300 hover:border-blue-500',
      accentColor: 'text-blue-800',
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-950',
      buttonColor: 'bg-blue-600 hover:bg-blue-700 text-white shadow-[0_3px_0_#1d4ed8]',
    },
    {
      grade: 5,
      emoji: '🚀',
      bgGradient: 'from-purple-50/80 to-white',
      borderColor: 'border-purple-300 hover:border-purple-500',
      accentColor: 'text-purple-800',
      badgeBg: 'bg-purple-100',
      badgeText: 'text-purple-950',
      buttonColor: 'bg-purple-600 hover:bg-purple-700 text-white shadow-[0_3px_0_#6d28d9]',
    },
    {
      grade: 6,
      emoji: '🎓',
      bgGradient: 'from-rose-50/80 to-white',
      borderColor: 'border-rose-300 hover:border-rose-500',
      accentColor: 'text-rose-800',
      badgeBg: 'bg-rose-100',
      badgeText: 'text-rose-950',
      buttonColor: 'bg-rose-600 hover:bg-rose-700 text-white shadow-[0_3px_0_#be123c]',
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 pb-12">
      {/* Curriculum Switcher Segmented Control */}
      <div className="bg-white rounded-3xl p-3 sm:p-4 border-2 border-amber-200/80 shadow-xs">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 self-start sm:self-center">
            <span className="text-xl">🌐</span>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-slate-800 block">
                Pilih Standar Kurikulum
              </span>
              <span className="text-[11px] text-slate-500">
                Pilih kurikulum yang digunakan di sekolah anak Anda
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl w-full sm:w-auto">
            {(['merdeka', 'cambridge', 'singapore'] as CurriculumId[]).map((cId) => {
              const meta = CURRICULUM_METAS[cId];
              const isSelected = currentCurriculum === cId;
              return (
                <button
                  key={cId}
                  onClick={() => {
                    sounds.playPop();
                    onSelectCurriculum(cId);
                  }}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <span className="text-sm">{meta.flag}</span>
                  <span>{meta.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-amber-400 to-yellow-400 p-6 sm:p-8 text-amber-950 shadow-md">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/90 border border-amber-300/80 px-3 py-1 text-xs font-black tracking-wide text-amber-950 shadow-2xs mb-3">
            <span>{activeCurriculum.flag}</span>
            <span>{activeCurriculum.name}</span>
            <span>•</span>
            <span>{activeCurriculum.standard}</span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
            Pilih Jenjang {activeCurriculum.gradeNaming}
          </h1>
          <p className="mt-2 text-xs sm:text-sm font-semibold text-amber-950/90 leading-relaxed max-w-2xl">
            {activeCurriculum.description} Tersedia {subjects.length} mata pelajaran terstruktur dengan ribuan latihan soal terverifikasi, kuis interaktif, dan lembar kerja cetak siap pakai.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 pt-2 border-t border-amber-600/20 text-[11px] font-bold">
            <span className="bg-white/80 rounded-lg px-2.5 py-1 shadow-2xs">
              ✓ {subjects.length} Mata Pelajaran ({totalCurriculumQuestions.toLocaleString('id-ID')} Butir Soal Terverifikasi)
            </span>
            <span className="bg-white/80 rounded-lg px-2.5 py-1 shadow-2xs text-emerald-950">
              ✓ 100% Unik & Bebas Soal Berulang
            </span>
            <span className="bg-white/80 rounded-lg px-2.5 py-1 shadow-2xs">
              ✓ Lembar Kerja LKPD Siap Cetak A4
            </span>
            <span className="bg-white/80 rounded-lg px-2.5 py-1 shadow-2xs">
              ✓ Kuis Interaktif & Bank Soal Lengkap
            </span>
          </div>
        </div>
      </div>

      {/* 6-Grade Cards Grid (Kotak-Kotak 1-6) */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 font-display">
              Modul Per Jenjang ({activeCurriculum.gradeNaming})
            </h2>
            <p className="text-xs text-slate-500">
              Pilih kelas untuk membuka paket modul lengkap latihan soal dan LKPD
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {gradeCards.map((card) => {
            const details = getGradeCardDetails(card.grade);
            const totalQuestions = getQuestionsByGrade(card.grade, currentCurriculum).length;

            return (
              <div
                key={card.grade}
                onClick={() => {
                  sounds.playPop();
                  onSelectGrade(card.grade);
                }}
                className={`relative flex flex-col justify-between rounded-3xl border-2 ${card.borderColor} bg-gradient-to-b ${card.bgGradient} p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-200 group cursor-pointer`}
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl sm:text-4xl p-2 rounded-2xl bg-white shadow-2xs border border-slate-100">
                        {card.emoji}
                      </span>
                      <div>
                        <span className={`text-[11px] font-black px-2 py-0.5 rounded-full ${card.badgeBg} ${card.badgeText}`}>
                          {details.sub}
                        </span>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                          {details.age}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-black px-2.5 py-1 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xs">
                      {totalQuestions} Soal
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 font-display mb-1 group-hover:text-amber-600 transition-colors">
                    {details.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {details.desc}
                  </p>

                  {/* Subject Badges Preview */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {subjects.slice(0, 5).map((s) => (
                      <span
                        key={s.id}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/90 border border-slate-200 text-slate-700"
                      >
                        {s.shortName}
                      </span>
                    ))}
                    {subjects.length > 5 && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-white/90 border border-slate-200 text-slate-500">
                        +{subjects.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Open Grade Button */}
                <button
                  onClick={() => {
                    sounds.playPop();
                    onSelectGrade(card.grade);
                  }}
                  className={`w-full py-2.5 sm:py-3 px-4 rounded-2xl font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${card.buttonColor} active:translate-y-0.5 active:shadow-none`}
                >
                  <span>Buka Modul {details.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
