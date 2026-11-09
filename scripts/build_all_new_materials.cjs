// scripts/build_all_new_materials.cjs
const fs = require('fs');
const path = require('path');
const { MERDEKA_MODULES } = require('./definitions_merdeka.cjs');
const { CAMBRIDGE_MODULES } = require('./definitions_cambridge.cjs');
const { SINGAPORE_MODULES } = require('./definitions_singapore.cjs');
const { generate100Questions } = require('./question_generator_engine.cjs');

console.log('Generating 17,400 new questions across 174 new curriculum materials...');

// 1. Generate Merdeka Questions
console.log('Generating Kurikulum Merdeka (60 modules x 100 questions = 6,000 questions)...');
const merdekaQuestions = [];
for (const mod of MERDEKA_MODULES) {
  const qs = generate100Questions(mod, 'merdeka');
  merdekaQuestions.push(...qs);
}

const merdekaFileContent = `import { Question } from '../../types/quiz';

export const newMateriMerdekaQuestions: Question[] = ${JSON.stringify(merdekaQuestions, null, 2)};
`;
fs.writeFileSync('./src/data/questions/newMateriMerdeka.ts', merdekaFileContent, 'utf8');
console.log('Written src/data/questions/newMateriMerdeka.ts (', merdekaQuestions.length, 'questions)');

// 2. Generate Cambridge Questions
console.log('Generating Cambridge Primary (54 modules x 100 questions = 5,400 questions)...');
const cambridgeQuestions = [];
for (const mod of CAMBRIDGE_MODULES) {
  const qs = generate100Questions(mod, 'cambridge');
  cambridgeQuestions.push(...qs);
}

const cambridgeFileContent = `import { Question } from '../../types/quiz';

export const newMateriCambridgeQuestions: Question[] = ${JSON.stringify(cambridgeQuestions, null, 2)};
`;
fs.writeFileSync('./src/data/questions/newMateriCambridge.ts', cambridgeFileContent, 'utf8');
console.log('Written src/data/questions/newMateriCambridge.ts (', cambridgeQuestions.length, 'questions)');

// 3. Generate Singapore Questions
console.log('Generating Singapore Primary (60 modules x 100 questions = 6,000 questions)...');
const singaporeQuestions = [];
for (const mod of SINGAPORE_MODULES) {
  const qs = generate100Questions(mod, 'singapore');
  singaporeQuestions.push(...qs);
}

const singaporeFileContent = `import { Question } from '../../types/quiz';

export const newMateriSingaporeQuestions: Question[] = ${JSON.stringify(singaporeQuestions, null, 2)};
`;
fs.writeFileSync('./src/data/questions/newMateriSingapore.ts', singaporeFileContent, 'utf8');
console.log('Written src/data/questions/newMateriSingapore.ts (', singaporeQuestions.length, 'questions)');

console.log('Total new questions successfully written: ', merdekaQuestions.length + cambridgeQuestions.length + singaporeQuestions.length);
