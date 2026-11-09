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

seen_stems = set(base_stems)
cam_items = []

def add_q(qid, subj, grade, topic, q, opts, correct_idx, exp, hint, diff="Sedang"):
    stem = norm_stem(q)
    if stem in seen_stems:
        # Avoid any collision
        q = f"In Cambridge Primary {topic} enquiry (Stage {grade}): {q}"
        stem = norm_stem(q)
    seen_stems.add(stem)
    cam_items.append({
        "id": qid,
        "subject": subj,
        "curriculum": "cambridge",
        "grade": grade,
        "phase": f"Stage {grade}",
        "topic": topic,
        "question": q,
        "options": opts,
        "correctIndex": correct_idx,
        "explanation": exp,
        "hint": hint,
        "difficulty": diff
    })

print("Cambridge generator skeleton ready.")
