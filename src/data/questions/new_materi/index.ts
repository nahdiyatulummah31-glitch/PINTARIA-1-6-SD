import { Question } from '../../../types/quiz';

import { merMatematikaNewQuestions } from './mer_matematika';
import { merIndonesiaNewQuestions } from './mer_indonesia';
import { merIpasNewQuestions } from './mer_ipas';
import { merPknNewQuestions } from './mer_pkn';
import { merCodingNewQuestions } from './mer_coding';
import { merInggrisNewQuestions } from './mer_inggris';
import { merSbdpNewQuestions } from './mer_sbdp';
import { merPjokNewQuestions } from './mer_pjok';
import { merSundaNewQuestions } from './mer_sunda';
import { merJawaNewQuestions } from './mer_jawa';
import { camEnglishNewQuestions } from './cam_english';
import { camMathNewQuestions } from './cam_math';
import { camScienceNewQuestions } from './cam_science';
import { camGlobalPerspectivesNewQuestions } from './cam_global_perspectives';
import { camComputingNewQuestions } from './cam_computing';
import { camArtNewQuestions } from './cam_art';
import { camMusicNewQuestions } from './cam_music';
import { camPeNewQuestions } from './cam_pe';
import { camForeignLangNewQuestions } from './cam_foreign_lang';
import { sgEnglishNewQuestions } from './sg_english';
import { sgMathNewQuestions } from './sg_math';
import { sgScienceNewQuestions } from './sg_science';
import { sgMotherTongueNewQuestions } from './sg_mother_tongue';
import { sgSocialStudiesNewQuestions } from './sg_social_studies';
import { sgCceNewQuestions } from './sg_cce';
import { sgArtNewQuestions } from './sg_art';
import { sgMusicNewQuestions } from './sg_music';
import { sgPeNewQuestions } from './sg_pe';
import { sgComputingNewQuestions } from './sg_computing';
import { merAuditedNewQuestions } from './mer_audited_questions';

export const allNewQuestions: Question[] = [
  ...merMatematikaNewQuestions,
  ...merIndonesiaNewQuestions,
  ...merIpasNewQuestions,
  ...merPknNewQuestions,
  ...merCodingNewQuestions,
  ...merInggrisNewQuestions,
  ...merSbdpNewQuestions,
  ...merPjokNewQuestions,
  ...merSundaNewQuestions,
  ...merJawaNewQuestions,
  ...merAuditedNewQuestions,
  ...camEnglishNewQuestions,
  ...camMathNewQuestions,
  ...camScienceNewQuestions,
  ...camGlobalPerspectivesNewQuestions,
  ...camComputingNewQuestions,
  ...camArtNewQuestions,
  ...camMusicNewQuestions,
  ...camPeNewQuestions,
  ...camForeignLangNewQuestions,
  ...sgEnglishNewQuestions,
  ...sgMathNewQuestions,
  ...sgScienceNewQuestions,
  ...sgMotherTongueNewQuestions,
  ...sgSocialStudiesNewQuestions,
  ...sgCceNewQuestions,
  ...sgArtNewQuestions,
  ...sgMusicNewQuestions,
  ...sgPeNewQuestions,
  ...sgComputingNewQuestions,
];
