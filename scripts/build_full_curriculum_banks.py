import json
import os

def make_q(qid, subj, curr, grade, phase, topic, question, options, correctIndex, explanation, hint, difficulty):
    return {
        "id": qid,
        "subject": subj,
        "curriculum": curr,
        "grade": grade,
        "phase": phase,
        "topic": topic,
        "question": question,
        "options": options,
        "correctIndex": correctIndex,
        "explanation": explanation,
        "hint": hint,
        "difficulty": difficulty
    }

def write_ts(filepath, var_name, items):
    out = ["import { Question } from '../../../types/quiz';\n\n", f"export const {var_name}: Question[] = [\n"]
    for q in items:
        out.append("  {\n")
        out.append(f"    id: {json.dumps(q['id'])},\n")
        out.append(f"    subject: {json.dumps(q['subject'])} as any,\n")
        out.append(f"    curriculum: {json.dumps(q['curriculum'])} as any,\n")
        out.append(f"    grade: {q['grade']} as any,\n")
        out.append(f"    phase: {json.dumps(q['phase'])},\n")
        out.append(f"    topic: {json.dumps(q['topic'])},\n")
        out.append(f"    question: {json.dumps(q['question'])},\n")
        out.append(f"    options: {json.dumps(q['options'])},\n")
        out.append(f"    correctIndex: {q['correctIndex']},\n")
        out.append(f"    explanation: {json.dumps(q['explanation'])},\n")
        out.append(f"    hint: {json.dumps(q['hint'])},\n")
        out.append(f"    difficulty: {json.dumps(q['difficulty'])},\n")
        out.append("  },\n")
    out.append("];\n")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write("".join(out))
    print(f"Created {filepath}: {len(items)} questions")

print("Framework initialized.")
