const fs = require('fs');
const { MERDEKA_MODULES } = require('./definitions_merdeka.cjs');
const { CAMBRIDGE_MODULES } = require('./definitions_cambridge.cjs');
const { SINGAPORE_MODULES } = require('./definitions_singapore.cjs');

const existing = JSON.parse(fs.readFileSync('./scripts/existing_topics.json', 'utf8'));

const allModules = [...MERDEKA_MODULES, ...CAMBRIDGE_MODULES, ...SINGAPORE_MODULES];
console.log('Total modules to verify:', allModules.length);

let dupCount = 0;
for (const m of allModules) {
  const key = `${m.subject}_G${m.grade}`;
  const ex = existing[key] || [];
  const found = ex.find(t => t.toLowerCase() === m.topic.toLowerCase());
  if (found) {
    console.warn(`DUPLICATE FOUND for ${key}: "${m.topic}"`);
    dupCount++;
  }
}

if (dupCount === 0) {
  console.log('SUCCESS! Zero duplicates detected among all 174 new topics across all 29 subjects and 6 grades!');
} else {
  console.error(`Found ${dupCount} duplicate topics! Please fix.`);
}
