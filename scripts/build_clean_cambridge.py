import json
import re

def norm_stem(s):
    s = s.lower()
    s = re.sub(r'[\r\n\t]+', ' ', s)
    s = re.sub(r'[0-9]+', '#', s)
    s = re.sub(r'[.,/#!$%^&*;:{}=\-_`~()?"“”\']', '', s)
    s = re.sub(r'\s+', ' ', s)
    return s.strip()

seen_stems = set()
bank = []

def add(qid, subj, grade, topic, q, opts, corr, exp, hint, diff="Sedang"):
    stem = norm_stem(q)
    if stem in seen_stems:
        print(f"Skipping duplicate stem: {stem[:50]}...")
        return False
    seen_stems.add(stem)
    bank.append({
        "id": qid,
        "subject": subj,
        "curriculum": "cambridge",
        "grade": grade,
        "phase": f"Stage {grade}",
        "topic": topic,
        "question": q,
        "options": opts,
        "correctIndex": corr,
        "explanation": exp,
        "hint": hint,
        "difficulty": diff
    })
    return True

print("Clean Cambridge builder ready.")
