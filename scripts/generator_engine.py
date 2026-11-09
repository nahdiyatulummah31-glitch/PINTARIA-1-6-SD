# Generator Engine for 100 High-Quality Questions per Audited Topic
import json
import os
import random

# We import the previous AUDITED_MATERI
from generate_all_audited import AUDITED_MATERI

COGNITIVE_LEVELS = [
    "C1 - Mengingat",
    "C2 - Memahami",
    "C3 - Menerapkan",
    "C4 - Menganalisis",
    "C4 - Penalaran HOTS"
]

QUESTION_TYPES = [
    "Pilihan Ganda Konseptual",
    "Soal Cerita Kontekstual",
    "Analisis Kasus Keseharian",
    "Penalaran Logis & HOTS"
]

def make_balanced_options(correct_val, distractors, seed_idx):
    distractors_clean = [d for d in distractors if d != correct_val]
    # Ensure 3 unique distractors
    while len(distractors_clean) < 3:
        distractors_clean.append(f"Pilihan pembanding {len(distractors_clean)+1}")
    
    selected_distractors = distractors_clean[:3]
    target_idx = seed_idx % 4
    
    options = []
    d_ptr = 0
    for pos in range(4):
        if pos == target_idx:
            options.append(correct_val)
        else:
            options.append(selected_distractors[d_ptr])
            d_ptr += 1
            
    return options, target_idx

print("Helper functions ready")
