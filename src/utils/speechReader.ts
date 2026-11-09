// Speech Synthesis service for educational quiz app
// Supports Indonesian (id-ID) for Kurikulum Merdeka
// and English (en-US / en-GB) for Cambridge Primary and Singapore Primary curricula.

import { CurriculumId, SubjectId } from '../types/quiz';

export type SpeechLanguage = 'id' | 'en';

export interface SpeechOptions {
  rate?: number;
  pitch?: number;
  lang?: SpeechLanguage | string;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: unknown) => void;
}

/**
 * Resolves curriculum and subject to the appropriate narration language.
 * Indonesian curriculum -> 'id'
 * Cambridge & Singapore curricula -> 'en'
 */
export function resolveCurriculumLanguage(
  curriculum?: CurriculumId | string,
  subject?: SubjectId | string
): SpeechLanguage {
  if (curriculum === 'cambridge' || curriculum === 'singapore') {
    return 'en';
  }
  if (subject) {
    const s = subject.toLowerCase();
    if (
      s.startsWith('cam_') ||
      s.startsWith('cambridge') ||
      s.startsWith('sg_') ||
      s.startsWith('singapore')
    ) {
      return 'en';
    }
  }
  return 'id';
}

/**
 * Formats a question text and options into a natural narration string.
 * Uses 'Pilihan A, Pilihan B...' for Indonesian,
 * and 'Option A, Option B...' for English (Cambridge / Singapore).
 */
export function formatQuestionNarration(
  questionText: string,
  options?: string[],
  includeOptions: boolean = true,
  lang: SpeechLanguage = 'id'
): string {
  let narration = (questionText || '').trim();
  if (includeOptions && options && options.length > 0) {
    const prefix = lang === 'en' ? 'Option' : 'Pilihan';
    const optionsText = options
      .map((opt, idx) => `${prefix} ${String.fromCharCode(65 + idx)}: ${opt}`)
      .join('. ');
    narration += '. ' + optionsText;
  }
  return narration;
}

class SpeechReader {
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private currentText: string | null = null;
  private isSpeakingState: boolean = false;
  private cachedVoices: SpeechSynthesisVoice[] = [];
  private listeners: Set<(speaking: boolean, text: string | null) => void> = new Set();
  public enabled: boolean = true;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.refreshVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        this.refreshVoices();
      };
    }
  }

  private refreshVoices() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      this.cachedVoices = window.speechSynthesis.getVoices() || [];
    } catch {
      this.cachedVoices = [];
    }
  }

  /**
   * Find best voice matching the target language ('id' or 'en')
   */
  public getVoiceForLanguage(lang: SpeechLanguage): SpeechSynthesisVoice | null {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
    if (!this.cachedVoices || this.cachedVoices.length === 0) {
      this.refreshVoices();
    }
    const voices = this.cachedVoices;
    if (!voices || voices.length === 0) return null;

    if (lang === 'en') {
      // Priority 1: High quality English voices (en-US or en-GB)
      const exactUs = voices.find(
        (v) => v.lang.toLowerCase().replace('_', '-') === 'en-us'
      );
      if (exactUs) return exactUs;

      const exactGb = voices.find(
        (v) => v.lang.toLowerCase().replace('_', '-') === 'en-gb'
      );
      if (exactGb) return exactGb;

      const anyEn = voices.find((v) => v.lang.toLowerCase().startsWith('en'));
      if (anyEn) return anyEn;

      return null;
    }

    // Indonesian ('id')
    const exactId = voices.find(
      (v) =>
        v.lang.toLowerCase().replace('_', '-') === 'id-id' ||
        v.lang.toLowerCase().startsWith('id') ||
        v.name.toLowerCase().includes('indonesia')
    );
    if (exactId) return exactId;

    return null;
  }

  public subscribe(listener: (speaking: boolean, text: string | null) => void) {
    this.listeners.add(listener);
    listener(this.isSpeakingState, this.currentText);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => {
      try {
        listener(this.isSpeakingState, this.currentText);
      } catch {
        // ignore
      }
    });
  }

  public isSpeaking(): boolean {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return false;
    return this.isSpeakingState && window.speechSynthesis.speaking;
  }

  public isCurrent(text: string): boolean {
    return this.isSpeaking() && this.currentText === text;
  }

  public stop() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
    } catch {
      // ignore
    }
    this.isSpeakingState = false;
    this.currentText = null;
    this.currentUtterance = null;
    this.notify();
  }

  /**
   * Speak a text string clearly with friendly tone in the designated language
   */
  public speak(text: string, options: SpeechOptions = {}) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      options.onError?.(new Error('SpeechSynthesis not supported'));
      return;
    }

    // Always stop any ongoing speech first
    this.stop();

    if (!text || text.trim() === '') return;

    // Clean up markdown / symbols if any for cleaner narration
    const cleanText = text
      .replace(/[*_#`~]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    try {
      const isEnglish =
        options.lang === 'en' ||
        (typeof options.lang === 'string' && options.lang.toLowerCase().startsWith('en'));

      const targetLang: SpeechLanguage = isEnglish ? 'en' : 'id';
      const targetLangCode = isEnglish ? 'en-US' : 'id-ID';

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = targetLangCode;

      const voice = this.getVoiceForLanguage(targetLang);
      if (voice) {
        utterance.voice = voice;
      }

      // Slightly relaxed rate for children's comprehension
      // 0.92 is clear, friendly, and natural
      utterance.rate = options.rate ?? (isEnglish ? 0.92 : 0.93);
      utterance.pitch = options.pitch ?? (isEnglish ? 1.02 : 1.05);

      utterance.onstart = () => {
        this.isSpeakingState = true;
        this.currentText = text;
        this.notify();
        options.onStart?.();
      };

      utterance.onend = () => {
        this.isSpeakingState = false;
        this.currentText = null;
        this.currentUtterance = null;
        this.notify();
        options.onEnd?.();
      };

      utterance.onerror = (e) => {
        this.isSpeakingState = false;
        this.currentText = null;
        this.currentUtterance = null;
        this.notify();
        options.onError?.(e);
      };

      this.currentUtterance = utterance;
      this.currentText = text;
      this.isSpeakingState = true;
      this.notify();

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      this.isSpeakingState = false;
      this.currentText = null;
      this.notify();
      options.onError?.(err);
    }
  }

  /**
   * Reads a full question including options sequentially
   */
  public speakFullQuestion(
    questionText: string,
    options?: string[],
    includeOptions: boolean = true,
    lang: SpeechLanguage = 'id'
  ) {
    const fullNarration = formatQuestionNarration(questionText, options, includeOptions, lang);
    this.speak(fullNarration, { lang });
  }

  /**
   * Toggle speech: if already speaking this text, stop it; otherwise speak it.
   */
  public toggle(text: string, options?: SpeechOptions) {
    if (this.isCurrent(text)) {
      this.stop();
    } else {
      this.speak(text, options);
    }
  }

  public toggleFullQuestion(
    questionText: string,
    options?: string[],
    includeOptions: boolean = true,
    lang: SpeechLanguage = 'id'
  ) {
    const fullNarration = formatQuestionNarration(questionText, options, includeOptions, lang);
    if (this.isCurrent(fullNarration)) {
      this.stop();
    } else {
      this.speak(fullNarration, { lang });
    }
  }
}

export const speechReader = new SpeechReader();
