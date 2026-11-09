// scripts/question_generator_engine.cjs
/**
 * Pedagogical Question Generator Engine
 * Generates 100 curriculum-accurate, non-duplicate questions per module
 * with 35 Mudah, 45 Sedang (incl. story problems), and 20 Tantangan (HOTS).
 */

const {
  generateMathQuestion,
  generateLanguageQuestion,
  generateScienceQuestion,
  generateCivicsSocialQuestion,
  generateComputingQuestion,
  generateArtsMusicQuestion,
  generatePEQuestion,
  generateSundaQuestion,
  generateJawaQuestion,
  generateForeignMotherTongueQuestion
} = require('./question_domains.cjs');

function generate100Questions(mod, curriculum) {
  const { subject, grade, phase, syllabusStrand, topic, description, language, domain } = mod;
  const questions = [];

  const prefix = curriculum.substring(0, 3);
  const subjPrefix = subject.replace('cam_', '').replace('sg_', '');

  for (let i = 1; i <= 100; i++) {
    const qNum = i;
    const pad = String(i).padStart(3, '0');
    const id = `${prefix}_${subjPrefix}_g${grade}_q${pad}`;

    let difficulty = 'Mudah';
    if (i > 35 && i <= 80) difficulty = 'Sedang';
    if (i > 80) difficulty = 'Tantangan';

    const qData = buildQuestionByDomain(domain, qNum, difficulty, language, grade, topic);

    // Balance correctIndex across 0, 1, 2, 3
    const targetCorrectIndex = (qNum * 7 + grade * 3) % 4;
    const options = [...qData.wrongOptions];
    options.splice(targetCorrectIndex, 0, qData.correctOption);

    questions.push({
      id,
      subject,
      curriculum,
      grade,
      phase,
      syllabusStrand,
      topic,
      question: qData.question,
      options,
      correctIndex: targetCorrectIndex,
      explanation: qData.explanation,
      hint: qData.hint,
      difficulty,
    });
  }

  return questions;
}

function buildQuestionByDomain(domain, qNum, difficulty, lang, grade, topic) {
  if (domain.startsWith('math_') || domain.startsWith('cam_math_') || domain.startsWith('sg_math_')) {
    return generateMathQuestion(domain, qNum, difficulty, lang, grade, topic);
  } else if (domain.startsWith('indo_') || domain.startsWith('cam_eng_') || domain.startsWith('sg_eng_') || domain.startsWith('eng_')) {
    return generateLanguageQuestion(domain, qNum, difficulty, lang, grade, topic);
  } else if (domain.startsWith('ipas_') || domain.startsWith('cam_sci_') || domain.startsWith('sg_sci_')) {
    return generateScienceQuestion(domain, qNum, difficulty, lang, grade, topic);
  } else if (domain.startsWith('pkn_') || domain.startsWith('cam_gp_') || domain.startsWith('sg_ss_') || domain.startsWith('sg_cce_')) {
    return generateCivicsSocialQuestion(domain, qNum, difficulty, lang, grade, topic);
  } else if (domain.startsWith('coding_') || domain.startsWith('cam_comp_') || domain.startsWith('sg_comp_')) {
    return generateComputingQuestion(domain, qNum, difficulty, lang, grade, topic);
  } else if (domain.startsWith('sbdp_') || domain.startsWith('cam_art_') || domain.startsWith('cam_mus_') || domain.startsWith('sg_art_') || domain.startsWith('sg_mus_')) {
    return generateArtsMusicQuestion(domain, qNum, difficulty, lang, grade, topic);
  } else if (domain.startsWith('pjok_') || domain.startsWith('cam_pe_') || domain.startsWith('sg_pe_')) {
    return generatePEQuestion(domain, qNum, difficulty, lang, grade, topic);
  } else if (domain.startsWith('sunda_')) {
    return generateSundaQuestion(domain, qNum, difficulty, grade, topic);
  } else if (domain.startsWith('jawa_')) {
    return generateJawaQuestion(domain, qNum, difficulty, grade, topic);
  } else if (domain.startsWith('cam_fl_') || domain.startsWith('sg_mt_')) {
    return generateForeignMotherTongueQuestion(domain, qNum, difficulty, lang, grade, topic);
  }

  return {
    question: `Soal Latihan No. ${qNum} mengenai ${topic}: manakah pilihan yang tepat?`,
    correctOption: `Penerapan konsep ${topic} yang sesuai kaidah resmi`,
    wrongOptions: [
      `Penerapan tanpa dasar acuan yang jelas`,
      `Mengabaikan prinsip utama materi`,
      `Pendapat acak tanpa pembuktian`
    ],
    explanation: `Materi ${topic} menekankan pemahaman konsep yang terstruktur dan teruji.`,
    hint: `Perhatikan definisi inti dari ${topic}.`
  };
}

module.exports = { generate100Questions };
