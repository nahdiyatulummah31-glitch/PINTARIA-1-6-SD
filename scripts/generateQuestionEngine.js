const fs = require('fs');
const path = require('path');

// Load definitions
const { AUDITED_DEFINITIONS } = require('./audited_definitions');

function generateQuestionsForTopic(def) {
  const questions = [];
  const cognitiveLevels = ['C1 - Mengingat', 'C2 - Memahami', 'C3 - Menerapkan', 'C4 - Menganalisis', 'C4 - HOTS / Evaluasi'];
  const questionTypes = ['Pilihan Ganda', 'Soal Cerita', 'Analisis Kasus', 'Penalaran Kontekstual'];
  const difficulties = ['Mudah', 'Sedang', 'Tantangan'];

  for (let i = 1; i <= 100; i++) {
    const qNumStr = String(i).padStart(3, '0');
    const id = `${def.materiId}_q${qNumStr}`;
    const indicator = def.indicators[(i - 1) % def.indicators.length];
    const cognitiveLevel = cognitiveLevels[(i - 1) % cognitiveLevels.length];
    const questionType = questionTypes[(i - 1) % questionTypes.length];
    const difficulty = i <= 35 ? 'Mudah' : i <= 75 ? 'Sedang' : 'Tantangan';

    // Call topic-specific generator
    const item = def.generateItem(i, difficulty, cognitiveLevel, questionType, indicator);

    // Balanced 4 options
    const targetIdx = (i + def.grade) % 4;
    const balancedOptions = [];
    let dp = 0;
    for (let pos = 0; pos < 4; pos++) {
      if (pos === targetIdx) {
        balancedOptions.push(item.correctOption);
      } else {
        balancedOptions.push(item.distractors[dp++] || `Pilihan ${pos + 1}`);
      }
    }

    questions.push({
      id,
      curriculum: 'merdeka',
      grade: def.grade,
      phase: def.phase,
      subject: def.subject,
      materiId: def.materiId,
      syllabusStrand: def.syllabusStrand,
      topic: def.topic,
      competency: def.competency,
      indicator,
      cognitiveLevel,
      questionType,
      source: def.source,
      question: item.question,
      options: balancedOptions,
      correctIndex: targetIdx,
      explanation: item.explanation,
      hint: item.hint,
      difficulty
    });
  }

  return questions;
}

module.exports = { generateQuestionsForTopic };
