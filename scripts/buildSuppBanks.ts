import fs from 'fs';
import path from 'path';

interface GeneratedQ {
  id: string;
  subject: string;
  curriculum: string;
  grade: number;
  phase: string;
  topic: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  hint: string;
  difficulty: 'Mudah' | 'Sedang' | 'Tantangan';
}

// Helper to format as TS code
function toTsArray(qs: GeneratedQ[], varName: string): string {
  const body = qs.map(q => {
    return `  {
    id: ${JSON.stringify(q.id)},
    subject: ${JSON.stringify(q.subject)} as any,
    curriculum: ${JSON.stringify(q.curriculum)} as any,
    grade: ${q.grade} as any,
    phase: ${JSON.stringify(q.phase)},
    topic: ${JSON.stringify(q.topic)},
    question: ${JSON.stringify(q.question)},
    options: ${JSON.stringify(q.options)},
    correctIndex: ${q.correctIndex},
    explanation: ${JSON.stringify(q.explanation)},
    hint: ${JSON.stringify(q.hint)},
    difficulty: ${JSON.stringify(q.difficulty)},
  }`;
  }).join(',\n');

  return `import { Question } from '../../../types/quiz';\n\nexport const ${varName}: Question[] = [\n${body}\n];\n`;
}

console.log('Builder utility ready.');
