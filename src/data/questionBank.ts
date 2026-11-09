import { Question, SubjectId, SubjectMeta, GradeLevel, CurriculumId, CurriculumMeta } from '../types/quiz';
import { matematikaQuestions } from './questions/matematika';
import { indonesiaQuestions } from './questions/indonesia';
import { ipasQuestions } from './questions/ipas';
import { pancasilaQuestions } from './questions/pancasila';
import { inggrisQuestions } from './questions/inggris';
import { codingQuestions } from './questions/coding';
import { sbdpQuestions } from './questions/sbdp';
import { pjokQuestions } from './questions/pjok';
import { sundaQuestions } from './questions/sunda';
import { jawaQuestions } from './questions/jawa';

// Cambridge Primary Questions
import { cambridgeMathQuestions } from './questions/cambridgeMath';
import { cambridgeEnglishQuestions } from './questions/cambridgeEnglish';
import { cambridgeScienceQuestions } from './questions/cambridgeScience';
import { cambridgeGlobalPerspectivesQuestions } from './questions/cambridgeGlobalPerspectives';
import { cambridgeComputingQuestions } from './questions/cambridgeComputing';
import { cambridgeArtQuestions } from './questions/cambridgeArt';
import { cambridgeMusicQuestions } from './questions/cambridgeMusic';
import { cambridgePEQuestions } from './questions/cambridgePE';
import { cambridgeForeignLangQuestions } from './questions/cambridgeForeignLang';

// Singapore Primary Questions
import { singaporeEnglishQuestions } from './questions/singaporeEnglish';
import { singaporeMathQuestions } from './questions/singaporeMath';
import { singaporeScienceQuestions } from './questions/singaporeScience';
import { singaporeMotherTongueQuestions } from './questions/singaporeMotherTongue';
import { singaporeSocialStudiesQuestions } from './questions/singaporeSocialStudies';
import { singaporeCCEQuestions } from './questions/singaporeCCE';
import { singaporeArtQuestions } from './questions/singaporeArt';
import { singaporeMusicQuestions } from './questions/singaporeMusic';
import { singaporePEQuestions } from './questions/singaporePE';
import { singaporeComputingQuestions } from './questions/singaporeComputing';
import { allNewQuestions } from './questions/new_materi';
import { cambridgeSupplementary100 } from './questions/cambridgeSupplementary100';
import { singaporeSupplementary100 } from './questions/singaporeSupplementary100';
import { merdekaSupplementary100 } from './questions/merdekaSupplementary100';
import { freshHundredQuestions } from './questions/freshHundredQuestions';
import { innovativeCenturyBatch2 } from './questions/innovativeCenturyBatch2';
import { innovativeCenturyBatch3 } from './questions/innovativeCenturyBatch3';
import { innovativeCenturyBatch4 } from './questions/innovativeCenturyBatch4';
import { gradeSpecificCenturyBatch5 } from './questions/gradeSpecificCenturyBatch5';
import { generateSubjectQuestions } from './subjectQuestionExpansionEngine';

import { INNOVATIVE_QUESTIONS } from './innovativeQuestions';

// Normalize Merdeka
const normalizedPknQuestions: Question[] = pancasilaQuestions.map((q) => ({
  ...q,
  subject: 'pkn' as SubjectId,
  curriculum: 'merdeka' as CurriculumId,
}));

const tagMerdeka = (qs: Question[]): Question[] =>
  qs.map((q) => ({ ...q, curriculum: 'merdeka' as CurriculumId }));

// Aliased mapping for Cambridge legacy keys
const mapCambridge = (qs: Question[], targetSubj: SubjectId): Question[] =>
  qs.map((q) => ({ ...q, subject: targetSubj, curriculum: 'cambridge' as CurriculumId }));

// Aliased mapping for Singapore legacy keys
const mapSingapore = (qs: Question[], targetSubj: SubjectId): Question[] =>
  qs.map((q) => ({ ...q, subject: targetSubj, curriculum: 'singapore' as CurriculumId }));

// Convert all innovative questions into first-class clean text Question objects
const innovativeQuestionsList: Question[] = [];
for (let g = 1; g <= 6; g++) {
  const gObj = INNOVATIVE_QUESTIONS[g as 1 | 2 | 3 | 4 | 5 | 6];
  if (!gObj) continue;
  for (const s in gObj) {
    const list = gObj[s as SubjectId];
    if (!list) continue;
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      innovativeQuestionsList.push({
        id: `inv-${s}-g${g}-${i + 1}`,
        subject: s as SubjectId,
        curriculum: 'merdeka',
        grade: g as GradeLevel,
        phase: g <= 2 ? 'Fase A' : g <= 4 ? 'Fase B' : 'Fase C',
        topic: item.topic,
        question: item.question,
        options: [...item.options],
        correctIndex: item.correctIndex,
        explanation: item.explanation,
        hint: item.hint,
        difficulty: item.difficulty,
        hasImage: false,
      });
    }
  }
}

// Raw collection from all sources
const rawBank: Question[] = [
  // Innovative text questions first so their rich metadata is preserved
  ...innovativeQuestionsList,

  // Kurikulum Merdeka
  ...tagMerdeka(matematikaQuestions),
  ...tagMerdeka(indonesiaQuestions),
  ...tagMerdeka(ipasQuestions),
  ...normalizedPknQuestions,
  ...tagMerdeka(codingQuestions),
  ...tagMerdeka(inggrisQuestions),
  ...tagMerdeka(sbdpQuestions),
  ...tagMerdeka(pjokQuestions),
  ...tagMerdeka(sundaQuestions),
  ...tagMerdeka(jawaQuestions),

  // Cambridge Primary (9 Subjects)
  ...mapCambridge(cambridgeEnglishQuestions, 'cam_english'),
  ...mapCambridge(cambridgeMathQuestions, 'cam_math'),
  ...mapCambridge(cambridgeScienceQuestions, 'cam_science'),
  ...cambridgeGlobalPerspectivesQuestions,
  ...mapCambridge(cambridgeComputingQuestions, 'cam_computing'),
  ...cambridgeArtQuestions,
  ...cambridgeMusicQuestions,
  ...cambridgePEQuestions,
  ...cambridgeForeignLangQuestions,

  // Singapore Primary (10 Subjects)
  ...mapSingapore(singaporeEnglishQuestions, 'sg_english'),
  ...mapSingapore(singaporeMathQuestions, 'sg_math'),
  ...mapSingapore(singaporeScienceQuestions, 'sg_science'),
  ...singaporeMotherTongueQuestions,
  ...singaporeSocialStudiesQuestions,
  ...singaporeCCEQuestions,
  ...singaporeArtQuestions,
  ...singaporeMusicQuestions,
  ...singaporePEQuestions,
  ...singaporeComputingQuestions,

  // Materi Kurikulum Tambahan
  ...allNewQuestions,

  // Bank Soal Suplemen 100+ Soal Unik Per Mapel
  ...cambridgeSupplementary100,
  ...singaporeSupplementary100,
  ...merdekaSupplementary100,

  // 100 Soal Baru Inovatif Multi-Kurikulum & Multi-Kelas (Batch 1)
  ...freshHundredQuestions,

  // 100 Soal Baru Inovatif Multi-Kurikulum & Multi-Kelas (Batch 2)
  ...innovativeCenturyBatch2,

  // 100 Soal Baru Inovatif Multi-Kurikulum & Multi-Kelas (Batch 3)
  ...innovativeCenturyBatch3,

  // 100 Soal Baru Inovatif Multi-Kurikulum & Multi-Kelas (Batch 4)
  ...innovativeCenturyBatch4,

  // 102 Soal Baru Inovatif Khusus Per Jenjang Kelas (Batch 5 - Zero Clones)
  ...gradeSpecificCenturyBatch5,
];

// Helper to normalize question stem (strips digits and punctuation) to filter out templated clones
function normalizeStem(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/[0-9]+/g, '#')
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"“”']/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Strict Global Deduplication Engine: ensures 100% unique questions with ZERO repeating duplicates across the entire app
function buildDeduplicatedBank(qs: Question[]): Question[] {
  const seenExact = new Set<string>();
  const seenStems = new Set<string>();
  const result: Question[] = [];

  for (const q of qs) {
    if (!q || !q.question) continue;
    const exact = q.question.toLowerCase().replace(/[\r\n\t]+/g, ' ').replace(/\s+/g, ' ').trim();
    const stem = normalizeStem(q.question);

    // Global uniqueness check: NO duplicate question text anywhere in the app
    if (seenExact.has(exact)) continue;

    // Reject templated clones where only digits changed
    if (stem.length > 20 && seenStems.has(stem)) continue;

    seenExact.add(exact);
    seenStems.add(stem);
    result.push(q);
  }

  return result;
}

function simpleSeedHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }
  return hash;
}

function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Balances multiple-choice options evenly across A (0), B (1), C (2), and D (3) (~25% each)
 * so correct answers are never clumped at Option A (index 0).
 * Preserves the exact correct answer text and explanation with 100% fidelity.
 */
function balanceAnswerDistribution(questions: Question[]): Question[] {
  const groups: Record<string, Question[]> = {};
  for (const q of questions) {
    const key = `${q.curriculum || 'merdeka'}_${q.subject}_g${q.grade}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(q);
  }

  const result: Question[] = [];

  for (const [key, group] of Object.entries(groups)) {
    const rng = mulberry32(simpleSeedHash(key + '_pintaria_balanced_2026'));
    const targetIndices: number[] = [];
    for (let i = 0; i < group.length; i++) {
      targetIndices.push(i % 4);
    }
    // Deterministic Fisher-Yates shuffle
    for (let i = targetIndices.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [targetIndices[i], targetIndices[j]] = [targetIndices[j], targetIndices[i]];
    }

    for (let i = 0; i < group.length; i++) {
      const q = group[i];
      if (!q.options || q.options.length !== 4 || typeof q.correctIndex !== 'number') {
        result.push(q);
        continue;
      }

      const originalCorrectText = q.options[q.correctIndex];
      const distractors = q.options.filter((_, idx) => idx !== q.correctIndex);
      const targetIdx = targetIndices[i];

      const newOptions: string[] = [];
      let dIdx = 0;
      for (let pos = 0; pos < 4; pos++) {
        if (pos === targetIdx) {
          newOptions.push(originalCorrectText);
        } else {
          newOptions.push(distractors[dIdx++]);
        }
      }

      result.push({
        ...q,
        options: newOptions,
        correctIndex: targetIdx,
      });
    }
  }

  return result;
}

export const allQuestions: Question[] = balanceAnswerDistribution(buildDeduplicatedBank(rawBank));

export const CURRICULUM_METAS: Record<CurriculumId, CurriculumMeta> = {
  merdeka: {
    id: 'merdeka',
    name: 'Kurikulum Merdeka',
    badge: 'Nasional SD',
    flag: '🇮🇩',
    gradeNaming: 'Kelas 1 – 6 SD',
    description: 'Standar resmi Kemendikbudristek dengan 10 mata pelajaran terstruktur, mencakup IPAS, Pancasila, Coding, serta Mulok Bahasa Sunda & Bahasa Jawa.',
    subjectCount: 10,
    standard: 'Kemendikbudristek RI',
  },
  cambridge: {
    id: 'cambridge',
    name: 'Cambridge Primary',
    badge: 'Cambridge Assessment',
    flag: '🇬🇧',
    gradeNaming: 'Stage 1 – 6 (Primary 1–6)',
    description: 'Cambridge Primary lengkap dengan 9 mata pelajaran: English, Mathematics, Science, Global Perspectives, Computing, Art & Design, Music, PE, dan Foreign Language.',
    subjectCount: 9,
    standard: 'Cambridge Assessment International Education',
  },
  singapore: {
    id: 'singapore',
    name: 'Singapore Primary',
    badge: 'MOE Singapore',
    flag: '🇸🇬',
    gradeNaming: 'Primary 1 – 6 (P1–P6)',
    description: 'Kurikulum Singapore MOE lengkap dengan 10 mata pelajaran: English, Mathematics (Bar Model CPA), Science, Mother Tongue, Social Studies, CCE, Art, Music, PE, dan Digital Literacy.',
    subjectCount: 10,
    standard: 'Singapore Ministry of Education (MOE)',
  },
};

// 1. Kurikulum Merdeka Subjects (10 Mapel)
export const SUBJECT_METAS: SubjectMeta[] = [
  {
    id: 'matematika',
    name: 'Matematika',
    shortName: 'MTK',
    icon: '📐',
    color: '#0284c7',
    bgLight: 'bg-sky-50',
    borderLight: 'border-sky-200',
    description: 'Berhitung, bilangan cacah, pecahan, geometri & logika hitung.',
    curriculum: 'merdeka',
  },
  {
    id: 'indonesia',
    name: 'Bahasa Indonesia',
    shortName: 'B. Indo',
    icon: '📖',
    color: '#ea580c',
    bgLight: 'bg-orange-50',
    borderLight: 'border-orange-200',
    description: 'Membaca, suku kata, ide pokok, fabel, tata bahasa & pantun.',
    curriculum: 'merdeka',
  },
  {
    id: 'ipas',
    name: 'IPAS (Sains & Sosial)',
    shortName: 'IPAS',
    icon: '🔬',
    color: '#16a34a',
    bgLight: 'bg-emerald-50',
    borderLight: 'border-emerald-200',
    description: 'Panca indra, tumbuhan, wujud zat, ekosistem, energi & peta daerah.',
    curriculum: 'merdeka',
  },
  {
    id: 'pkn',
    name: 'Pendidikan Pancasila (PKn)',
    shortName: 'PKn',
    icon: '🇮🇩',
    color: '#dc2626',
    bgLight: 'bg-rose-50',
    borderLight: 'border-rose-200',
    description: 'Simbol Garuda, musyawarah, norma aturan, hak & gotong royong.',
    curriculum: 'merdeka',
  },
  {
    id: 'coding',
    name: 'Coding & Informatika',
    shortName: 'Coding',
    icon: '💻',
    color: '#2563eb',
    bgLight: 'bg-blue-50',
    borderLight: 'border-blue-200',
    description: 'Algoritma, pola, logika debugging, Scratch, AI dasar & etika digital.',
    curriculum: 'merdeka',
  },
  {
    id: 'inggris',
    name: 'Bahasa Inggris',
    shortName: 'B. Inggris',
    icon: '🌍',
    color: '#7c3aed',
    bgLight: 'bg-purple-50',
    borderLight: 'border-purple-200',
    description: 'My Next Words: kosakata harian, angka, warna & percakapan ramah.',
    curriculum: 'merdeka',
  },
  {
    id: 'sbdp',
    name: 'Seni Budaya & Prakarya (SBdP)',
    shortName: 'SBdP',
    icon: '🎨',
    color: '#db2777',
    bgLight: 'bg-pink-50',
    borderLight: 'border-pink-200',
    description: 'Warna, musik & tangga nada, tari daerah, kerajinan anyaman & kolase.',
    curriculum: 'merdeka',
  },
  {
    id: 'pjok',
    name: 'PJOK (Olahraga & Kesehatan)',
    shortName: 'PJOK',
    icon: '⚽',
    color: '#059669',
    bgLight: 'bg-teal-50',
    borderLight: 'border-teal-200',
    description: 'Gerak lokomotor, permainan bola, senam lantai, renang & gizi sehat.',
    curriculum: 'merdeka',
  },
  {
    id: 'sunda',
    name: 'Bahasa Sunda (Mulok)',
    shortName: 'B. Sunda',
    icon: '🍃',
    color: '#0d9488',
    bgLight: 'bg-teal-50',
    borderLight: 'border-teal-200',
    description: 'Muatan lokal Sunda: Undak usuk basa lemes/loma, babasan, kawih, sisindiran & aksara Sunda.',
    curriculum: 'merdeka',
  },
  {
    id: 'jawa',
    name: 'Bahasa Jawa (Mulok)',
    shortName: 'B. Jawa',
    icon: '📜',
    color: '#b45309',
    bgLight: 'bg-amber-50',
    borderLight: 'border-amber-200',
    description: 'Muatan lokal Jawa: Unggah-ungguh basa krama/ngoko, tembang dolanan/macapat, wayang & aksara Jawa.',
    curriculum: 'merdeka',
  },
];

// 2. Cambridge Primary Subjects (9 Subjects Sesuai Permintaan User)
export const CAMBRIDGE_SUBJECT_METAS: SubjectMeta[] = [
  {
    id: 'cam_english',
    name: 'Cambridge English',
    shortName: 'English',
    icon: '📚',
    color: '#047857',
    bgLight: 'bg-emerald-50',
    borderLight: 'border-emerald-200',
    description: 'Phonics, reading comprehension, grammar, creative writing, and text analysis.',
    curriculum: 'cambridge',
  },
  {
    id: 'cam_math',
    name: 'Cambridge Mathematics',
    shortName: 'Math',
    icon: '📐',
    color: '#1d4ed8',
    bgLight: 'bg-blue-50',
    borderLight: 'border-blue-200',
    description: 'Number operations, geometry, measures, fractions, statistics, and mathematical reasoning.',
    curriculum: 'cambridge',
  },
  {
    id: 'cam_science',
    name: 'Cambridge Science',
    shortName: 'Science',
    icon: '🔬',
    color: '#b45309',
    bgLight: 'bg-amber-50',
    borderLight: 'border-amber-200',
    description: 'Biology, chemistry, physics, Earth & space exploration, and scientific inquiry.',
    curriculum: 'cambridge',
  },
  {
    id: 'cam_global_perspectives',
    name: 'Global Perspectives',
    shortName: 'Global Persp.',
    icon: '🌐',
    color: '#0891b2',
    bgLight: 'bg-cyan-50',
    borderLight: 'border-cyan-200',
    description: 'Inquiry, critical thinking, research, sustainability, and evaluating global issues.',
    curriculum: 'cambridge',
  },
  {
    id: 'cam_computing',
    name: 'Computing',
    shortName: 'Computing',
    icon: '💻',
    color: '#7c3aed',
    bgLight: 'bg-purple-50',
    borderLight: 'border-purple-200',
    description: 'Algorithms, Scratch programming, digital safety, hardware, and computational thinking.',
    curriculum: 'cambridge',
  },
  {
    id: 'cam_art',
    name: 'Art & Design',
    shortName: 'Art & Design',
    icon: '🎨',
    color: '#db2777',
    bgLight: 'bg-pink-50',
    borderLight: 'border-pink-200',
    description: 'Colour theory, line and tone, sculptures, printmaking, and famous world art history.',
    curriculum: 'cambridge',
  },
  {
    id: 'cam_music',
    name: 'Music',
    shortName: 'Music',
    icon: '🎵',
    color: '#e11d48',
    bgLight: 'bg-rose-50',
    borderLight: 'border-rose-200',
    description: 'Beat and rhythm, melody, dynamics, orchestral instruments, and musical appreciation.',
    curriculum: 'cambridge',
  },
  {
    id: 'cam_pe',
    name: 'Physical Education',
    shortName: 'PE',
    icon: '🏃',
    color: '#15803d',
    bgLight: 'bg-green-50',
    borderLight: 'border-green-200',
    description: 'Fundamental movement skills, sportsmanship, invasion tactics, and healthy living.',
    curriculum: 'cambridge',
  },
  {
    id: 'cam_foreign_lang',
    name: 'Foreign Language',
    shortName: 'Foreign Lang',
    icon: '🗣️',
    color: '#9333ea',
    bgLight: 'bg-purple-50',
    borderLight: 'border-purple-200',
    description: 'Conversational greetings, vocabulary, numbers, and basic grammar in French/Spanish/Mandarin.',
    curriculum: 'cambridge',
  },
];

// 3. Singapore Primary Subjects (10 Subjects Sesuai Permintaan User)
export const SINGAPORE_SUBJECT_METAS: SubjectMeta[] = [
  {
    id: 'sg_english',
    name: 'English Language',
    shortName: 'English Lang',
    icon: '✒️',
    color: '#4338ca',
    bgLight: 'bg-indigo-50',
    borderLight: 'border-indigo-200',
    description: 'Synthesis & transformation, grammar cloze, contextual vocabulary, and comprehension inference.',
    curriculum: 'singapore',
  },
  {
    id: 'sg_math',
    name: 'Mathematics',
    shortName: 'Math (CPA)',
    icon: '📊',
    color: '#be123c',
    bgLight: 'bg-rose-50',
    borderLight: 'border-rose-200',
    description: 'Bar Model Method, CPA approach, word problem heuristics, ratios, percentages, and algebra.',
    curriculum: 'singapore',
  },
  {
    id: 'sg_science',
    name: 'Science',
    shortName: 'Science',
    icon: '🧪',
    color: '#0f766e',
    bgLight: 'bg-teal-50',
    borderLight: 'border-teal-200',
    description: 'Inquiry-based themes: Diversity, Cycles, Systems, Energy, and Interactions.',
    curriculum: 'singapore',
  },
  {
    id: 'sg_mother_tongue',
    name: 'Mother Tongue Language',
    shortName: 'Mother Tongue',
    icon: '🏮',
    color: '#b91c1c',
    bgLight: 'bg-red-50',
    borderLight: 'border-red-200',
    description: 'Bilingual appreciation, Chinese idioms (成语), Malay proverbs (Peribahasa), and Tamil values.',
    curriculum: 'singapore',
  },
  {
    id: 'sg_social_studies',
    name: 'Social Studies',
    shortName: 'Social Studies',
    icon: '🦁',
    color: '#c2410c',
    bgLight: 'bg-orange-50',
    borderLight: 'border-orange-200',
    description: 'Singapore heritage, Sang Nila Utama, pioneers, Total Defence, and multicultural harmony.',
    curriculum: 'singapore',
  },
  {
    id: 'sg_cce',
    name: 'Character & Citizenship Education',
    shortName: 'CCE (Values)',
    icon: '🤝',
    color: '#059669',
    bgLight: 'bg-emerald-50',
    borderLight: 'border-emerald-200',
    description: 'Core values (R3ICH: Respect, Responsibility, Resilience, Integrity, Care, Harmony) & Cyber Wellness.',
    curriculum: 'singapore',
  },
  {
    id: 'sg_art',
    name: 'Art',
    shortName: 'Art',
    icon: '🖌️',
    color: '#d97706',
    bgLight: 'bg-amber-50',
    borderLight: 'border-amber-200',
    description: 'Elements of art, Nanyang style (Georgette Chen), Batik patterns, and Peranakan motifs.',
    curriculum: 'singapore',
  },
  {
    id: 'sg_music',
    name: 'Music',
    shortName: 'Music',
    icon: '🎶',
    color: '#8b5cf6',
    bgLight: 'bg-violet-50',
    borderLight: 'border-violet-200',
    description: 'National songs ("Home"), Kompang rhythms, Erhu melodies, solfege, and ethnic traditions.',
    curriculum: 'singapore',
  },
  {
    id: 'sg_pe',
    name: 'Physical Education',
    shortName: 'PE & Fitness',
    icon: '🏃‍♂️',
    color: '#10b981',
    bgLight: 'bg-emerald-50',
    borderLight: 'border-emerald-200',
    description: 'Movement fundamentals, NAPFA fitness standards, games strategies, and My Healthy Plate.',
    curriculum: 'singapore',
  },
  {
    id: 'sg_computing',
    name: 'Computer / Digital Literacy',
    shortName: 'Digital Lit.',
    icon: '💻',
    color: '#2563eb',
    bgLight: 'bg-blue-50',
    borderLight: 'border-blue-200',
    description: 'Baseline ICT skills, cybersecurity, password protection, Scratch coding, and cyber etiquette.',
    curriculum: 'singapore',
  },
];

export const ALL_SUBJECT_METAS: SubjectMeta[] = [
  ...SUBJECT_METAS,
  ...CAMBRIDGE_SUBJECT_METAS,
  ...SINGAPORE_SUBJECT_METAS,
];

export function getSubjectsByCurriculum(curriculum: CurriculumId = 'merdeka'): SubjectMeta[] {
  if (curriculum === 'cambridge') return CAMBRIDGE_SUBJECT_METAS;
  if (curriculum === 'singapore') return SINGAPORE_SUBJECT_METAS;
  return SUBJECT_METAS;
}

export function normalizeSubjectId(subject: SubjectId): SubjectId {
  if (subject === 'pancasila') return 'pkn';
  if (subject === 'daerah') return 'sunda';
  // Cambridge aliases
  if (subject === 'cambridge_math') return 'cam_math';
  if (subject === 'cambridge_english') return 'cam_english';
  if (subject === 'cambridge_science') return 'cam_science';
  if (subject === 'cambridge_computing') return 'cam_computing';
  // Singapore aliases
  if (subject === 'singapore_math') return 'sg_math';
  if (subject === 'singapore_science') return 'sg_science';
  if (subject === 'singapore_english') return 'sg_english';
  return subject;
}

export function inferCurriculumFromSubject(subject: SubjectId): CurriculumId {
  const norm = normalizeSubjectId(subject);
  if (norm.startsWith('cam_') || norm.startsWith('cambridge_')) return 'cambridge';
  if (norm.startsWith('sg_') || norm.startsWith('singapore_')) return 'singapore';
  return 'merdeka';
}

export function getQuestionsBySubject(subject: SubjectId): Question[] {
  const target = normalizeSubjectId(subject);
  return allQuestions.filter((q) => normalizeSubjectId(q.subject) === target);
}

export function getQuestionsByGradeAndSubject(
  grade: number,
  subject: SubjectId,
  curriculum?: CurriculumId
): Question[] {
  const target = normalizeSubjectId(subject);
  const curr = curriculum || inferCurriculumFromSubject(target);
  const safeGrade = (grade >= 1 && grade <= 6 ? grade : 1) as GradeLevel;

  let phaseName = '';
  if (curr === 'cambridge') {
    phaseName = `Stage ${safeGrade}`;
  } else if (curr === 'singapore') {
    phaseName = `Primary ${safeGrade}`;
  } else {
    phaseName =
      safeGrade <= 2
        ? `Fase A (Kelas ${safeGrade})`
        : safeGrade <= 4
        ? `Fase B (Kelas ${safeGrade})`
        : `Fase C (Kelas ${safeGrade})`;
  }

  // Strictly return questions matching this curriculum, target subject, and EXACT grade only.
  // Never mix questions from other grades!
  const exactGradeQuestions = allQuestions.filter(
    (q) =>
      normalizeSubjectId(q.subject) === target &&
      (q.curriculum ? q.curriculum === curr : curr === 'merdeka') &&
      q.grade === safeGrade
  );

  const seenIds = new Set<string>();
  const seenTexts = new Set<string>();
  const result: Question[] = [];

  for (const q of exactGradeQuestions) {
    const norm = q.question.toLowerCase().replace(/[\r\n\t]+/g, ' ').replace(/\s+/g, ' ').trim();
    if (seenIds.has(q.id) || seenTexts.has(norm)) continue;
    seenIds.add(q.id);
    seenTexts.add(norm);
    result.push({
      ...q,
      curriculum: curr,
      grade: safeGrade,
      phase: q.phase || phaseName,
      regionalLanguage:
        target === 'sunda' ? 'sunda' : target === 'jawa' ? 'jawa' : q.regionalLanguage,
    });
  }

  // Ensure at least 100 unique questions per subject per grade
  if (result.length < 100) {
    const needed = 100 - result.length;
    const generated = generateSubjectQuestions(curr, target, safeGrade, needed);
    for (const gq of generated) {
      result.push(gq);
    }
  }

  return result;
}

export function getQuestionsByGrade(grade: number, curriculum: CurriculumId = 'merdeka'): Question[] {
  const safeGrade = (grade >= 1 && grade <= 6 ? grade : 1) as GradeLevel;
  const curr = curriculum || 'merdeka';
  const subjects = getSubjectsByCurriculum(curr);

  const results: Question[] = [];
  for (const s of subjects) {
    const list = getQuestionsByGradeAndSubject(safeGrade, s.id, curr);
    results.push(...list);
  }
  return results;
}

export function getSubjectMeta(subject: SubjectId): SubjectMeta {
  const target = normalizeSubjectId(subject);
  return ALL_SUBJECT_METAS.find((s) => normalizeSubjectId(s.id) === target) || ALL_SUBJECT_METAS[0];
}

export function filterQuestions(options: {
  curriculum?: CurriculumId | 'all';
  subject?: SubjectId | 'all';
  grade?: number | 'all';
  strand?: string | 'all';
  topic?: string | 'all';
  searchQuery?: string;
  difficulty?: string;
  hasImageOnly?: boolean;
  regionalLanguage?: string;
}): Question[] {
  const targetSubject =
    options.subject && options.subject !== 'all'
      ? normalizeSubjectId(options.subject)
      : undefined;

  const targetCurriculum = options.curriculum || 'all';

  // If a specific subject AND grade are selected, pull the comprehensive >= 100 question module pool
  let baseList: Question[] = [];
  if (targetSubject && options.grade && options.grade !== 'all') {
    baseList = getQuestionsByGradeAndSubject(
      options.grade,
      targetSubject,
      targetCurriculum === 'all' ? undefined : targetCurriculum
    );
  } else if (options.grade && options.grade !== 'all') {
    baseList = getQuestionsByGrade(
      options.grade,
      targetCurriculum === 'all' ? 'merdeka' : targetCurriculum
    );
  } else {
    // Otherwise filter globally from deduplicated allQuestions
    baseList = allQuestions.filter((q) => {
      if (
        targetCurriculum !== 'all' &&
        (q.curriculum ? q.curriculum !== targetCurriculum : targetCurriculum !== 'merdeka')
      ) {
        return false;
      }
      if (targetSubject && normalizeSubjectId(q.subject) !== targetSubject) {
        return false;
      }
      if (options.grade && options.grade !== 'all' && q.grade !== options.grade) {
        return false;
      }
      return true;
    });
  }

  // Deduplicate baseList by unique question text to guarantee zero duplicates
  const seenTexts = new Set<string>();
  const uniquePool: Question[] = [];
  for (const q of baseList) {
    const norm = q.question.toLowerCase().replace(/[\r\n\t]+/g, ' ').replace(/\s+/g, ' ').trim();
    if (seenTexts.has(norm)) continue;
    seenTexts.add(norm);
    uniquePool.push(q);
  }

  return uniquePool.filter((q) => {
    if (targetSubject && normalizeSubjectId(q.subject) !== targetSubject) {
      return false;
    }
    if (options.grade && options.grade !== 'all' && q.grade !== options.grade) {
      return false;
    }
    if (options.strand && options.strand !== 'all') {
      const qStrand = (q.syllabusStrand || '').toLowerCase().trim();
      const targetStrand = options.strand.toLowerCase().trim();
      if (!qStrand.includes(targetStrand) && !targetStrand.includes(qStrand)) {
        return false;
      }
    }
    if (options.topic && options.topic !== 'all') {
      const qTopic = (q.topic || '').toLowerCase().trim();
      const targetTopic = options.topic.toLowerCase().trim();
      if (!qTopic.includes(targetTopic) && !targetTopic.includes(qTopic)) {
        return false;
      }
    }
    if (options.difficulty && options.difficulty !== 'all' && q.difficulty !== options.difficulty) {
      return false;
    }
    if (options.hasImageOnly && !(q.id.startsWith('inv-') || q.hasImage)) {
      return false;
    }
    if (options.regionalLanguage && options.regionalLanguage !== 'all') {
      if (q.regionalLanguage !== options.regionalLanguage) {
        return false;
      }
    }
    if (options.searchQuery && options.searchQuery.trim() !== '') {
      const query = options.searchQuery.toLowerCase();
      const inQuestion = q.question.toLowerCase().includes(query);
      const inTopic = q.topic.toLowerCase().includes(query);
      const inOptions = q.options.some((opt) => opt.toLowerCase().includes(query));
      if (!inQuestion && !inTopic && !inOptions) {
        return false;
      }
    }
    return true;
  });
}

/**
 * Returns questions strictly matching a curriculum syllabus module, strand, or topic (topic-locked)
 */
export function getQuestionsForSyllabus(
  curriculum: CurriculumId,
  subjectId: SubjectId,
  grade: GradeLevel,
  strandName?: string,
  topicName?: string
): Question[] {
  const normSubj = normalizeSubjectId(subjectId);
  const basePool = getQuestionsByGradeAndSubject(grade, normSubj, curriculum);

  if (!strandName && !topicName) {
    return basePool;
  }

  // 1. If topicName is specified, strictly lock to topic
  if (topicName && topicName !== 'all') {
    const t1 = topicName.toLowerCase().trim();
    // Exact topic match
    const exactTopic = basePool.filter((q) => (q.topic || '').toLowerCase().trim() === t1);
    if (exactTopic.length > 0) {
      return exactTopic;
    }

    // Inclusion match
    const fuzzyTopic = basePool.filter((q) => {
      const t2 = (q.topic || '').toLowerCase().trim();
      return t2 && (t1.includes(t2) || t2.includes(t1));
    });
    if (fuzzyTopic.length > 0) {
      return fuzzyTopic;
    }
  }

  // 2. If strandName is specified
  if (strandName && strandName !== 'all') {
    const s1 = strandName.toLowerCase().trim();
    const exactStrand = basePool.filter((q) => (q.syllabusStrand || '').toLowerCase().trim() === s1);
    if (exactStrand.length > 0) {
      return exactStrand;
    }

    return basePool.filter((q) => {
      const s2 = (q.syllabusStrand || '').toLowerCase().trim();
      if (s2 && (s1.includes(s2) || s2.includes(s1))) {
        return true;
      }
      const strandWords = s1.split(/[\s,&/]+/).filter((w) => w.length > 3);
      return strandWords.some((w) => s2.includes(w) || (q.topic || '').toLowerCase().includes(w));
    });
  }

  return basePool;
}

