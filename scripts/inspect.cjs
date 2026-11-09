const fs = require('fs');

const content = fs.readFileSync('./src/data/curriculumSyllabus.ts', 'utf8');
const regex = /curriculum:\s*'([^']+)',\s*subjectId:\s*'([^']+)',\s*subjectName:\s*'([^']+)',\s*grade:\s*(\d+)/g;
let match;
const syllabusMap = {};

while ((match = regex.exec(content)) !== null) {
  const [_, curr, subj, name, grade] = match;
  const key = `${curr}:${subj}`;
  if (!syllabusMap[key]) syllabusMap[key] = { name, grades: [] };
  syllabusMap[key].grades.push(parseInt(grade));
}

console.log('Syllabus breakdown:');
for (const [k, v] of Object.entries(syllabusMap)) {
  console.log(`  ${k} (${v.name}): Grades ${v.grades.join(', ')}`);
}
