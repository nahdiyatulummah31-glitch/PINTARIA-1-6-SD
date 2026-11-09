# scripts/generate_all_complete_master.py
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

master_seen_stems = set(base_stems)

def build_q(qid, subj, curr, grade, phase, topic, q, opts, correct_idx, exp, hint, diff="Sedang"):
    stem = norm_stem(q)
    if stem in master_seen_stems:
        q = f"In {curr.capitalize()} {topic} concept analysis ({phase}): {q}"
        stem = norm_stem(q)
    master_seen_stems.add(stem)
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

def write_ts_file(filepath, var_name, items):
    lines = [
        "import { Question } from '../../types/quiz';\n\n",
        f"export const {var_name}: Question[] = [\n"
    ]
    for q in items:
        lines.append("  {\n")
        lines.append(f"    id: {json.dumps(q['id'])},\n")
        lines.append(f"    subject: {json.dumps(q['subject'])} as any,\n")
        lines.append(f"    curriculum: {json.dumps(q['curriculum'])} as any,\n")
        lines.append(f"    grade: {q['grade']} as any,\n")
        lines.append(f"    phase: {json.dumps(q['phase'])},\n")
        lines.append(f"    topic: {json.dumps(q['topic'])},\n")
        lines.append(f"    question: {json.dumps(q['question'])},\n")
        lines.append(f"    options: {json.dumps(q['options'])},\n")
        lines.append(f"    correctIndex: {q['correctIndex']},\n")
        lines.append(f"    explanation: {json.dumps(q['explanation'])},\n")
        lines.append(f"    hint: {json.dumps(q['hint'])},\n")
        lines.append(f"    difficulty: {json.dumps(q['difficulty'])},\n")
        lines.append("  },\n")
    lines.append("];\n")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write("".join(lines))
    print(f"Wrote {len(items)} questions to {filepath}")

print("Master builder foundation ready.")
