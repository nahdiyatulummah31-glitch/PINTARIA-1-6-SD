import React, { useState } from 'react';
import { X, Search, CheckCircle2, Play, BookOpen, Layers, Sparkles, BookMarked } from 'lucide-react';
import { SubjectSyllabus } from '../data/curriculumSyllabus';
import { sounds } from '../utils/soundEffects';

interface SyllabusModalProps {
  syllabus: SubjectSyllabus | null;
  isOpen: boolean;
  onClose: () => void;
  onStartQuiz?: (grade: any, subjectId: any) => void;
  onOpenBank?: (grade: any, subjectId: any) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  syllabus,
  isOpen,
  onClose,
  onStartQuiz,
  onOpenBank,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen || !syllabus) return null;

  const totalTopics = syllabus.strands.reduce((acc, curr) => acc + curr.topics.length, 0);

  const filteredStrands = syllabus.strands
    .map((strand) => {
      const filteredTopics = strand.topics.filter((topic) =>
        topic.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...strand,
        topics: filteredTopics,
      };
    })
    .filter((strand) => strand.topics.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border-2 border-amber-200 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 p-4 sm:p-5 text-amber-950 flex items-start justify-between gap-3 shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/80 text-[11px] font-black text-amber-900 shadow-2xs mb-1">
              <span>{syllabus.curriculum === 'cambridge' ? '🇬🇧' : '🇸🇬'}</span>
              <span>{syllabus.gradeLabel}</span>
              <span>•</span>
              <span>{totalTopics} Capaian Materi</span>
            </div>
            <h2 className="text-lg sm:text-xl font-black font-display text-slate-900">
              {syllabus.subjectName}
            </h2>
            <p className="text-xs font-medium text-amber-950/80 mt-0.5 max-w-lg leading-snug">
              {syllabus.description}
            </p>
          </div>

          <button
            onClick={() => {
              sounds.playPop();
              onClose();
            }}
            className="p-1.5 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-3 sm:p-4 bg-slate-50 border-b border-slate-200 shrink-0">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari topik pembelajaran (misal: Phonics, Fractions, Digestive...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredStrands.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-xs">
              Tidak ada topik yang cocok dengan "{searchQuery}".
            </div>
          ) : (
            filteredStrands.map((strand, sIdx) => (
              <div
                key={sIdx}
                className="rounded-2xl border border-amber-200/80 bg-white p-3.5 sm:p-4 shadow-2xs"
              >
                <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-amber-100">
                  <h3 className="font-display text-sm font-black text-slate-900 flex items-center gap-2">
                    <BookMarked className="w-4 h-4 text-amber-600" />
                    <span>{strand.name}</span>
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                    {strand.topics.length} Topik
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {strand.topics.map((topic, tIdx) => (
                    <div
                      key={tIdx}
                      className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50/70 hover:bg-amber-50/60 border border-slate-100 transition-colors text-xs text-slate-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="font-medium leading-tight">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center justify-between gap-2 shrink-0">
          <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
            Standar Kurikulum Resmi Terpadu Pintaria SD
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {onOpenBank && (
              <button
                onClick={() => {
                  sounds.playPop();
                  onOpenBank(syllabus.grade, syllabus.subjectId);
                  onClose();
                }}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center gap-1 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Bank Soal</span>
              </button>
            )}

            {onStartQuiz && (
              <button
                onClick={() => {
                  sounds.playPop();
                  onStartQuiz(syllabus.grade, syllabus.subjectId);
                  onClose();
                }}
                className="px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-xs shadow-[0_2px_0_#b45309] active:translate-y-0.5 active:shadow-none transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Mulai Latihan Kuis</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
