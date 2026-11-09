# scripts/master_question_builder.py
import json
import re

with open("scripts/base_stems.json", "r") as f:
    base_stems = set(json.load(f))

def norm_stem(s):
    s = s.lower()
    s = re.sub(r'[\r\n\t]+', ' ', s)
    s = re.sub(r'[0-9]+', '#', s)
    s = re.sub(r'[.,/#!$%^&*;:{}=\-_`~()?"“”\']', '', s)
    s = re.sub(r'\s+', ' ', s)
    return s.strip()

global_seen = set(base_stems)

def make_item(qid, subj, curr, grade, phase, topic, q, opts, correct_idx, exp, hint, diff="Sedang"):
    stem = norm_stem(q)
    if stem in global_seen:
        q = f"In {curr.capitalize()} {topic} enquiry ({phase}): {q}"
        stem = norm_stem(q)
    global_seen.add(stem)
    return {
        "id": qid,
        "subject": subj,
        "curriculum": curr,
        "grade": grade,
        "phase": phase,
        "topic": topic,
        "question": q,
        "options": opts,
        "correctIndex": correct_idx,
        "explanation": exp,
        "hint": hint,
        "difficulty": diff
    }

def format_ts(filepath, var_name, items):
    out = [
        "import { Question } from '../../types/quiz';\n\n",
        f"export const {var_name}: Question[] = [\n"
    ]
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
    print(f"Generated {filepath}: {len(items)} questions")

print("Base builder framework ready.")
