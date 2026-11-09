const fs = require('fs');

const content = fs.readFileSync('./src/data/questionBank.ts', 'utf8');

// Find all subject lists
const merdekaMatch = content.match(/export const SUBJECT_METAS: SubjectMeta\[\] = \[([\s\S]*?)\];/);
const cambridgeMatch = content.match(/export const CAMBRIDGE_SUBJECT_METAS: SubjectMeta\[\] = \[([\s\S]*?)\];/);
const singaporeMatch = content.match(/export const SINGAPORE_SUBJECT_METAS: SubjectMeta\[\] = \[([\s\S]*?)\];/);

function extractIds(block) {
  if (!block) return [];
  const ids = [];
  const regex = /id:\s*'([^']+)'/g;
  let m;
  while ((m = regex.exec(block[1])) !== null) {
    ids.push(m[1]);
  }
  return ids;
}

console.log('Merdeka subjects:', extractIds(merdekaMatch));
console.log('Cambridge subjects:', extractIds(cambridgeMatch));
console.log('Singapore subjects:', extractIds(singaporeMatch));
