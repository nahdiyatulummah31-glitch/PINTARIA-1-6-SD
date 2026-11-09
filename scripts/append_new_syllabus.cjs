// scripts/append_new_syllabus.cjs
const fs = require('fs');
const { MERDEKA_MODULES } = require('./definitions_merdeka.cjs');
const { CAMBRIDGE_MODULES } = require('./definitions_cambridge.cjs');
const { SINGAPORE_MODULES } = require('./definitions_singapore.cjs');

console.log('Generating supplementary syllabus entries for all new curriculum materials...');

const allModules = [
  ...MERDEKA_MODULES.map(m => ({ ...m, curriculum: 'merdeka' })),
  ...CAMBRIDGE_MODULES.map(m => ({ ...m, curriculum: 'cambridge' })),
  ...SINGAPORE_MODULES.map(m => ({ ...m, curriculum: 'singapore' }))
];

const newSyllabusEntries = [];

// Group by curriculum, subject, grade
const grouped = {};
for (const m of allModules) {
  const key = `${m.curriculum}:${m.subject}:${m.grade}`;
  if (!grouped[key]) {
    let subjectName = m.subject;
    if (m.curriculum === 'merdeka') {
      const names = {
        matematika: 'Matematika SD',
        indonesia: 'Bahasa Indonesia SD',
        ipas: 'IPAS (Sains & Sosial) SD',
        pkn: 'Pendidikan Pancasila (PKn) SD',
        coding: 'Coding & Informatika SD',
        inggris: 'Bahasa Inggris SD',
        sbdp: 'Seni Budaya & Prakarya SD',
        pjok: 'PJOK SD',
        sunda: 'Bahasa Sunda (Mulok) SD',
        jawa: 'Bahasa Jawa (Mulok) SD'
      };
      subjectName = names[m.subject] || m.subject;
    } else if (m.curriculum === 'cambridge') {
      subjectName = 'Cambridge Primary ' + m.subject.replace('cam_', '').toUpperCase();
    } else {
      subjectName = 'Singapore Primary ' + m.subject.replace('sg_', '').toUpperCase();
    }

    grouped[key] = {
      curriculum: m.curriculum,
      subjectId: m.subject,
      subjectName,
      grade: m.grade,
      gradeLabel: `${m.curriculum === 'merdeka' ? 'Kelas' : m.curriculum === 'cambridge' ? 'Stage' : 'Primary'} ${m.grade}`,
      description: m.description,
      strands: []
    };
  }

  grouped[key].strands.push({
    name: m.syllabusStrand,
    topics: [m.topic]
  });
}

const generatedEntries = Object.values(grouped);

const content = `import { SubjectSyllabus } from '../curriculumSyllabus';

export const NEW_SUPPLEMENTARY_SYLLABUS: SubjectSyllabus[] = ${JSON.stringify(generatedEntries, null, 2)};
`;

fs.writeFileSync('./src/data/newSupplementarySyllabus.ts', content, 'utf8');
console.log('Written src/data/newSupplementarySyllabus.ts with', generatedEntries.length, 'syllabus entries.');
