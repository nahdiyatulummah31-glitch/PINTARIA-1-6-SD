// scripts/build_modular_new_materials.cjs
const fs = require('fs');
const path = require('path');
const { MERDEKA_MODULES } = require('./definitions_merdeka.cjs');
const { CAMBRIDGE_MODULES } = require('./definitions_cambridge.cjs');
const { SINGAPORE_MODULES } = require('./definitions_singapore.cjs');
const { generate100Questions } = require('./question_generator_engine.cjs');

const outDir = './src/data/questions/new_materi';
fs.mkdirSync(outDir, { recursive: true });

console.log('Building 29 modular subject files for all 174 new curriculum materials...');

const allCurricula = [
  { name: 'merdeka', modules: MERDEKA_MODULES, prefix: 'mer' },
  { name: 'cambridge', modules: CAMBRIDGE_MODULES, prefix: 'cam' },
  { name: 'singapore', modules: SINGAPORE_MODULES, prefix: 'sg' },
];

const indexExports = [];

for (const curr of allCurricula) {
  // Group modules by subject
  const bySubject = {};
  for (const m of curr.modules) {
    if (!bySubject[m.subject]) bySubject[m.subject] = [];
    bySubject[m.subject].push(m);
  }

  for (const [subject, modList] of Object.entries(bySubject)) {
    const questions = [];
    for (const mod of modList) {
      questions.push(...generate100Questions(mod, curr.name));
    }

    const varName = `${curr.prefix}_${subject.replace('cam_', '').replace('sg_', '')}_new_questions`
      .replace(/_([a-z])/g, (_, l) => l.toUpperCase());

    const fileName = `${curr.prefix}_${subject.replace('cam_', '').replace('sg_', '')}.ts`;
    const filePath = path.join(outDir, fileName);

    const code = `import { Question } from '../../../types/quiz';

export const ${varName}: Question[] = ${JSON.stringify(questions, null, 2)};
`;

    fs.writeFileSync(filePath, code, 'utf8');
    indexExports.push({ varName, fileName: fileName.replace('.ts', '') });
    console.log(`  Wrote ${fileName} (${questions.length} questions across 6 grades)`);
  }
}

// Write index.ts
let indexCode = `import { Question } from '../../types/quiz';\n\n`;
for (const exp of indexExports) {
  indexCode += `import { ${exp.varName} } from './${exp.fileName}';\n`;
}

indexCode += `\nexport const allNewQuestions: Question[] = [\n`;
for (const exp of indexExports) {
  indexCode += `  ...${exp.varName},\n`;
}
indexCode += `];\n`;

fs.writeFileSync(path.join(outDir, 'index.ts'), indexCode, 'utf8');
console.log(`Wrote index.ts with ${indexExports.length} modular subject banks. Total questions: ${indexExports.length * 600}`);
