import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import {
  speechReader,
  resolveCurriculumLanguage,
  formatQuestionNarration,
  SpeechLanguage,
} from '../utils/speechReader';
import { sounds } from '../utils/soundEffects';
import { CurriculumId, SubjectId } from '../types/quiz';

interface ReadAloudButtonProps {
  text: string;
  options?: string[];
  includeOptions?: boolean;
  curriculum?: CurriculumId | string;
  subject?: SubjectId | string;
  lang?: SpeechLanguage;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  title?: string;
  showBadge?: boolean;
}

export const ReadAloudButton: React.FC<ReadAloudButtonProps> = ({
  text,
  options,
  includeOptions = true,
  curriculum,
  subject,
  lang,
  label,
  size = 'md',
  variant = 'secondary',
  className = '',
  title,
  showBadge = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Automatically determine if speech should be in English (Cambridge/Singapore) or Indonesian (Merdeka)
  const effectiveLang: SpeechLanguage = lang || resolveCurriculumLanguage(curriculum, subject);
  const isEnglish = effectiveLang === 'en';

  // Build target narration with appropriate language phrasing (Option vs Pilihan)
  const fullNarration = formatQuestionNarration(text, options, includeOptions, effectiveLang);

  useEffect(() => {
    const unsubscribe = speechReader.subscribe((speaking, currentText) => {
      setIsPlaying(speaking && currentText === fullNarration);
    });
    return () => unsubscribe();
  }, [fullNarration]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playPop();
    speechReader.toggle(fullNarration, { lang: effectiveLang });
  };

  // Determine button text
  const getButtonText = () => {
    if (isPlaying) {
      if (label !== undefined) return isEnglish ? 'Stop' : 'Hentikan';
      return isEnglish ? 'Stop' : 'Stop Suara';
    }
    if (label) {
      if (isEnglish) {
        if (label === 'Baca Soal') return 'Listen';
        if (label === 'Suara') return 'Audio';
      }
      return label;
    }
    return null;
  };

  const defaultTitle = isEnglish
    ? 'Listen to question & options'
    : 'Dengarkan soal & pilihan jawaban';

  // Sizing
  const sizeClasses = {
    sm: 'p-1.5 text-xs gap-1 rounded-lg',
    md: 'px-2.5 py-1.5 text-xs gap-1.5 rounded-xl',
    lg: 'px-3.5 py-2 text-sm gap-2 rounded-2xl',
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  // Variants
  const variantClasses = {
    primary: isPlaying
      ? 'bg-rose-500 text-white shadow-sm ring-2 ring-rose-300 animate-pulse'
      : isEnglish
      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-2xs'
      : 'bg-amber-500 hover:bg-amber-600 text-white shadow-2xs',
    secondary: isPlaying
      ? 'bg-rose-100 text-rose-900 border border-rose-300 ring-2 ring-rose-200 animate-pulse'
      : isEnglish
      ? 'bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200/90'
      : 'bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200/80',
    ghost: isPlaying
      ? 'text-rose-600 bg-rose-50 ring-1 ring-rose-200 animate-pulse'
      : isEnglish
      ? 'text-slate-500 hover:text-blue-600 hover:bg-blue-50'
      : 'text-slate-500 hover:text-amber-600 hover:bg-amber-50',
  };

  const buttonText = getButtonText();

  return (
    <button
      type="button"
      onClick={handleToggle}
      title={isPlaying ? (isEnglish ? 'Stop narration' : 'Hentikan suara') : title || defaultTitle}
      aria-label={isPlaying ? 'Stop narration' : title || defaultTitle}
      className={`inline-flex items-center font-bold font-display cursor-pointer transition-all select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {isPlaying ? (
        <>
          <VolumeX className={`${iconSizes[size]} text-rose-500 shrink-0`} />
          {buttonText && <span className="text-[11px] font-semibold">{buttonText}</span>}
        </>
      ) : (
        <>
          <Volume2 className={`${iconSizes[size]} shrink-0`} />
          {buttonText && <span>{buttonText}</span>}
          {showBadge && (
            <span
              className={`text-[9px] font-black uppercase px-1 py-0.2 rounded leading-tight ${
                isEnglish
                  ? 'bg-blue-100 text-blue-700 border border-blue-200'
                  : 'bg-amber-100 text-amber-700 border border-amber-200'
              }`}
            >
              {isEnglish ? 'EN' : 'ID'}
            </span>
          )}
        </>
      )}
    </button>
  );
};
