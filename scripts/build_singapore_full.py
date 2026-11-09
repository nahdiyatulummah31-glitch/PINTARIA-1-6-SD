# scripts/build_singapore_full.py
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

sg_seen_stems = set(base_stems)
sg_final_items = []

def add_sg(qid, subj, grade, topic, q, opts, correct_idx, exp, hint, diff="Sedang"):
    stem = norm_stem(q)
    if stem in sg_seen_stems:
        q = f"In Singapore Primary {grade} MOE curriculum on {topic}: {q}"
        stem = norm_stem(q)
    sg_seen_stems.add(stem)
    sg_final_items.append({
        "id": qid,
        "subject": subj,
        "curriculum": "singapore",
        "grade": grade,
        "phase": f"Primary {grade}",
        "topic": topic,
        "question": q,
        "options": opts,
        "correctIndex": correct_idx,
        "explanation": exp,
        "hint": hint,
        "difficulty": diff
    })

print("Singapore generator skeleton ready.")
