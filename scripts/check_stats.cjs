const fs = require('fs');

const dir = './src/data/questions';
const files = fs.readdirSync(dir);

const stats = {};

for (const file of files) {
  const content = fs.readFileSync(dir + '/' + file, 'utf8');
  // extract objects
  const qMatches = content.split(/\{\s*[\"']?id[\"']?\s*:/);
  for (let i = 1; i < qMatches.length; i++) {
    const chunk = qMatches[i];
    const gradeMatch = chunk.match(/[\"']?grade[\"']?\s*:\s*(\d)/);
    const subjectMatch = chunk.match(/[\"']?subject[\"']?\s*:\s*['\"]([^'\"]+)['\"]/);
    const topicMatch = chunk.match(/[\"']?topic[\"']?\s*:\s*['\"]([^'\"]+)['\"]/);
    const grade = gradeMatch ? parseInt(gradeMatch[1]) : 0;
    const subject = subjectMatch ? subjectMatch[1] : file.replace('.ts', '');
    const topic = topicMatch ? topicMatch[1] : 'unknown';

    const key = `${subject}_G${grade}`;
    if (!stats[key]) stats[key] = { count: 0, topics: new Set() };
    stats[key].count++;
    stats[key].topics.add(topic);
  }
}

console.log('Total subject-grade combos found:', Object.keys(stats).length);
console.log('Sample:');
for (const [k, v] of Object.entries(stats).slice(0, 20)) {
  console.log(`  ${k}: ${v.count} questions, topics: [${Array.from(v.topics).join(', ')}]`);
}
