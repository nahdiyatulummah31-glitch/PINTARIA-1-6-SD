import React, { useState } from 'react';
import { Play, BookOpen, Printer, ArrowLeft, BookMarked, Sparkles } from 'lucide-react';
import { GradeLevel, SubjectId, CurriculumId } from '../types/quiz';
import {
  CURRICULUM_METAS,
  getSubjectsByCurriculum,
  getQuestionsByGrade,
  getQuestionsByGradeAndSubject,
} from '../data/questionBank';
import { getSyllabus, SubjectSyllabus } from '../data/curriculumSyllabus';
import { SyllabusModal } from './SyllabusModal';
import { sounds } from '../utils/soundEffects';

interface GradeModuleViewProps {
  grade: GradeLevel;
  currentCurriculum: CurriculumId;
  isSingleClassLock?: boolean;
  onSelectGrade?: (grade: GradeLevel) => void;
  onBackToGradeSelection?: () => void;
  onStartQuiz: (grade: GradeLevel, subject: SubjectId | 'all') => void;
  onOpenBank: (grade: GradeLevel, subject: SubjectId | 'all') => void;
  onOpenPrint: (grade: GradeLevel, subject: SubjectId) => void;
  onOpenSyllabus?: () => void;
}

export const GradeModuleView: React.FC<GradeModuleViewProps> = ({
  grade,
  currentCurriculum,
  isSingleClassLock = false,
  onSelectGrade,
  onBackToGradeSelection,
  onStartQuiz,
  onOpenBank,
  onOpenPrint,
  onOpenSyllabus,
}) => {
  const [selectedSyllabusModal, setSelectedSyllabusModal] = useState<SubjectSyllabus | null>(null);

  const curriculumMeta = CURRICULUM_METAS[currentCurriculum] || CURRICULUM_METAS.merdeka;
  const subjects = getSubjectsByCurriculum(currentCurriculum);

  let phaseLabel = '';
  let gradeHeading = '';

  if (currentCurriculum === 'cambridge') {
    gradeHeading = `Cambridge Stage ${grade} (Primary ${grade})`;
    phaseLabel = `Stage ${grade} · Cambridge Primary`;
  } else if (currentCurriculum === 'singapore') {
    gradeHeading = `Singapore Primary ${grade} (P${grade})`;
    phaseLabel = `Primary ${grade} · MOE Syllabus`;
  } else {
    gradeHeading = `Modul Belajar Kelas ${grade} SD`;
    phaseLabel =
      grade <= 2
        ? 'Fase A (Kelas 1-2)'
        : grade <= 4
        ? 'Fase B (Kelas 3-4)'
        : 'Fase C (Kelas 5-6)';
  }

  const totalGradeQuestions = getQuestionsByGrade(grade, currentCurriculum).length;

  return (
    <div className="space-y-4 sm:space-y-6 pb-12">
      {/* Tombol ke Menu Awal Pilih Kelas */}
      {onBackToGradeSelection && (
        <button
          onClick={() => {
            sounds.playPop();
            onBackToGradeSelection();
          }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-amber-400 text-slate-700 hover:text-amber-950 hover:bg-amber-50/60 text-xs font-bold shadow-2xs transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-amber-600" />
          <span>← Kembali ke Menu Awal (Pilihan Semua Kelas)</span>
        </button>
      )}

      {/* Grade Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3.5 sm:gap-4 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-amber-200 shadow-xs">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xl">{curriculumMeta.flag}</span>
            <h1 className="text-lg sm:text-2xl font-extrabold text-slate-900 font-display flex items-center gap-1.5 sm:gap-2">
              <span>{grade === 1 ? '🌱' : grade === 2 ? '🌿' : grade === 3 ? '🌻' : grade === 4 ? '🌲' : grade === 5 ? '🚀' : '🎓'}</span>
              <span>{gradeHeading}</span>
            </h1>
            <span className="text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
              {phaseLabel}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {curriculumMeta.name} • {subjects.length} mata pelajaran • Total {totalGradeQuestions} butir latihan soal terverifikasi (100% tanpa pengulangan).
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto shrink-0">
          {onOpenSyllabus && (
            <button
              onClick={() => {
                sounds.playPop();
                onOpenSyllabus();
              }}
              className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <BookMarked className="w-3.5 h-3.5 text-amber-700" />
              <span>Peta Silabus Resmi</span>
            </button>
          )}

          <button
            onClick={() => onStartQuiz(grade, 'all')}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-xs shadow-[0_3px_0_#b45309] active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
            title={`Kuis campuran mata pelajaran khusus ${gradeHeading}`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Kuis Campur Mapel (Khusus {currentCurriculum === 'cambridge' ? `Stage ${grade}` : currentCurriculum === 'singapore' ? `P${grade}` : `Kelas ${grade}`})</span>
          </button>
          <button
            onClick={() => onOpenBank(grade, 'all')}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
            title={`Lihat seluruh soal khusus ${gradeHeading}`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Bank Soal (Kelas {grade})</span>
          </button>
        </div>
      </div>

      {/* Grid of Subjects for this Grade */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          subjects.length <= 4
            ? 'lg:grid-cols-2 xl:grid-cols-4'
            : 'lg:grid-cols-3 xl:grid-cols-5'
        } gap-3 sm:gap-4`}
      >
        {subjects.map((m) => {
          const qCount = getQuestionsByGradeAndSubject(grade, m.id, currentCurriculum).length;
          const syllabusData = getSyllabus(currentCurriculum, m.id, grade);

          return (
            <div
              key={m.id}
              className="bg-white rounded-2xl sm:rounded-3xl border-2 border-slate-200 hover:border-amber-400 p-4 sm:p-5 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <span className="text-2xl sm:text-3xl p-1.5 sm:p-2 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100">
                    {m.icon}
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                    {qCount} Soal
                  </span>
                </div>

                <h3 className="font-extrabold text-slate-900 text-base font-display mb-1">
                  {m.name}
                </h3>
                <p className="text-xs text-slate-500 mb-2.5 line-clamp-2">{m.description}</p>

                {/* Syllabus Strands Preview Tag if exists */}
                {syllabusData && (
                  <div className="mb-3.5 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-amber-800 block mb-1">
                      Untaian Silabus ({syllabusData.strands.length} Bagian):
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {syllabusData.strands.slice(0, 3).map((st, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-50/80 border border-amber-200/80 text-amber-900"
                        >
                          {st.name}
                        </span>
                      ))}
                      {syllabusData.strands.length > 3 && (
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-500">
                          +{syllabusData.strands.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-1.5 pt-2.5 sm:pt-3 border-t border-slate-100">
                {syllabusData && (
                  <button
                    onClick={() => {
                      sounds.playPop();
                      setSelectedSyllabusModal(syllabusData);
                    }}
                    className="w-full py-1.5 px-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 font-bold text-[11px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <BookMarked className="w-3.5 h-3.5 text-amber-700" />
                    <span>Lihat Silabus Lengkap</span>
                  </button>
                )}

                <button
                  onClick={() => onStartQuiz(grade, m.id)}
                  className="w-full py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Mulai Kuis ({qCount} Soal)</span>
                </button>

                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => onOpenBank(grade, m.id)}
                    className="py-1.5 px-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-[11px] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <BookOpen className="w-3 h-3 text-slate-400" />
                    <span>Bank Soal</span>
                  </button>

                  <button
                    onClick={() => onOpenPrint(grade, m.id)}
                    className="py-1.5 px-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-[11px] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Printer className="w-3 h-3 text-slate-400" />
                    <span>Cetak LKPD</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Syllabus Modal */}
      <SyllabusModal
        syllabus={selectedSyllabusModal}
        isOpen={Boolean(selectedSyllabusModal)}
        onClose={() => setSelectedSyllabusModal(null)}
        onStartQuiz={onStartQuiz}
        onOpenBank={onOpenBank}
      />
    </div>
  );
};
