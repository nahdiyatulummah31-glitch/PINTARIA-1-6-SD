const fs = require('fs');

const dir = './src/data/questions';
const files = fs.readdirSync(dir);
const existingTopicsBySubject = {};

for (const file of files) {
  const content = fs.readFileSync(dir + '/' + file, 'utf8');
  const qMatches = content.split(/\{\s*[\"']?id[\"']?\s*:/);
  for (let i = 1; i < qMatches.length; i++) {
    const chunk = qMatches[i];
    const subjectMatch = chunk.match(/[\"']?subject[\"']?\s*:\s*['\"]([^'\"]+)['\"]/);
    const gradeMatch = chunk.match(/[\"']?grade[\"']?\s*:\s*(\d)/);
    const topicMatch = chunk.match(/[\"']?topic[\"']?\s*:\s*['\"]([^'\"]+)['\"]/);
    const subject = subjectMatch ? subjectMatch[1] : file.replace('.ts', '');
    const grade = gradeMatch ? gradeMatch[1] : '0';
    const topic = topicMatch ? topicMatch[1] : '';

    const key = `${subject}_G${grade}`;
    if (!existingTopicsBySubject[key]) existingTopicsBySubject[key] = new Set();
    if (topic) existingTopicsBySubject[key].add(topic.trim());
  }
}

fs.writeFileSync('./scripts/existing_topics.json', JSON.stringify(
  Object.fromEntries(
    Object.entries(existingTopicsBySubject).map(([k, v]) => [k, Array.from(v)])
  ),
  null,
  2
));

console.log('Saved existing topics map for', Object.keys(existingTopicsBySubject).length, 'subject-grades.');
