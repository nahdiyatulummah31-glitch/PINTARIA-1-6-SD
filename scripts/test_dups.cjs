const fs = require('fs');

const existing = JSON.parse(fs.readFileSync('./scripts/existing_topics.json', 'utf8'));

// Test a list of planned topics
const planned = [
  // Sample test
  { key: 'matematika_G1', topic: 'Pengukuran Panjang & Berat dengan Satuan Tidak Baku' },
  { key: 'matematika_G2', topic: 'Mengenal Nilai Mata Uang Rupiah & Kesetaraan Nilai Uang' },
];

for (const p of planned) {
  const ex = existing[p.key] || [];
  const dup = ex.some(t => t.toLowerCase() === p.topic.toLowerCase());
  console.log(p.key, p.topic, 'Duplicate?', dup);
}
