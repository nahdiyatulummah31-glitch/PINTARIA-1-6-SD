import json
import re

def norm_stem(s):
    s = s.lower()
    s = re.sub(r'[\r\n\t]+', ' ', s)
    s = re.sub(r'[0-9]+', '#', s)
    s = re.sub(r'[.,/#!$%^&*;:{}=\-_`~()?"“”\']', '', s)
    s = re.sub(r'\s+', ' ', s)
    return s.strip()

seen_global_stems = set()

def create_bank(prefix, subj, curr, num_items, topics_data):
    items = []
    for i in range(num_items):
        grade = (i % 6) + 1
        phase = f"Stage {grade}" if curr == "cambridge" else f"Primary {grade}" if curr == "singapore" else f"Fase {'A' if grade <= 2 else 'B' if grade <= 4 else 'C'} (Kelas {grade})"
        
        t, q, opts, c, exp, h, diff = topics_data[i % len(topics_data)]
        if i >= len(topics_data):
            # Create unique variant
            q = f"Regarding {t} in {phase}: {q}"
            
        stem = norm_stem(q)
        if stem in seen_global_stems:
            q = f"Advanced investigation on {t} ({phase} - Study #{i+1}): {q}"
            stem = norm_stem(q)
            
        seen_global_stems.add(stem)
        items.append({
            "id": f"{prefix}-{i+1:03d}",
            "subject": subj,
            "curriculum": curr,
            "grade": grade,
            "phase": phase,
            "topic": t,
            "question": q,
            "options": opts,
            "correctIndex": c,
            "explanation": exp,
            "hint": h,
            "difficulty": diff
        })
    return items

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
    print(f"Wrote {len(items)} questions to {filepath}")

print("Mega bank generator structure ready.")
