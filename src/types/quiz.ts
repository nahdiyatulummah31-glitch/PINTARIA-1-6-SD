export type CurriculumId = 'merdeka' | 'cambridge' | 'singapore';

export type SubjectId =
  // Kurikulum Merdeka (10 Mapel)
  | 'matematika'
  | 'indonesia'
  | 'ipas'
  | 'pkn'
  | 'pancasila' // alias for pkn
  | 'coding'
  | 'inggris'
  | 'sbdp'
  | 'pjok'
  | 'sunda' // Muatan Lokal Bahasa Sunda
  | 'jawa' // Muatan Lokal Bahasa Jawa
  | 'daerah'
  // Cambridge Primary Curriculum (9 Subjects)
  | 'cam_english'
  | 'cam_math'
  | 'cam_science'
  | 'cam_global_perspectives'
  | 'cam_computing'
  | 'cam_art'
  | 'cam_music'
  | 'cam_pe'
  | 'cam_foreign_lang'
  // Cambridge aliases for backwards compatibility
  | 'cambridge_math'
  | 'cambridge_english'
  | 'cambridge_science'
  | 'cambridge_computing'
  // Singapore Primary Curriculum (10 Subjects)
  | 'sg_english'
  | 'sg_math'
  | 'sg_science'
  | 'sg_mother_tongue'
  | 'sg_social_studies'
  | 'sg_cce'
  | 'sg_art'
  | 'sg_music'
  | 'sg_pe'
  | 'sg_computing'
  // Singapore aliases for backwards compatibility
  | 'singapore_math'
  | 'singapore_science'
  | 'singapore_english';

export type GradeLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type DifficultyLevel = 'Mudah' | 'Sedang' | 'Tantangan';

export type RegionalLanguage = 'sunda' | 'jawa' | 'bali' | 'madura' | 'nusantara';

export interface Question {
  id: string;
  subject: SubjectId;
  curriculum?: CurriculumId;
  grade: GradeLevel;
  topic: string;
  phase: string;
  syllabusStrand?: string;
  materiId?: string;
  competency?: string;
  indicator?: string;
  cognitiveLevel?: string;
  questionType?: string;
  source?: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hint: string;
  difficulty: DifficultyLevel;
  hasImage?: boolean;
  imageKey?: string;
  imageCaption?: string;
  imageSvg?: string;
  imageUrl?: string;
  regionalLanguage?: RegionalLanguage;
}

export interface SubjectMeta {
  id: SubjectId;
  name: string;
  shortName: string;
  icon: string;
  color: string;
  bgLight: string;
  borderLight: string;
  description: string;
  curriculum?: CurriculumId;
}

export interface CurriculumMeta {
  id: CurriculumId;
  name: string;
  badge: string;
  flag: string;
  gradeNaming: string;
  description: string;
  subjectCount: number;
  standard: string;
}
