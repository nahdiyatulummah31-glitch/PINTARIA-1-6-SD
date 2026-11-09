import json
import os
import random
import sys

sys.path.append(os.path.dirname(__file__))
from generate_all_audited import AUDITED_MATERI
from generator_engine import make_balanced_options, COGNITIVE_LEVELS, QUESTION_TYPES

# Import previous QA generators
from build_full_audited_bank import generate_domain_qa

def build_all():
    print(f"Generating questions for {len(AUDITED_MATERI)} audited topics...")
    all_audited_questions = []
    
    for idx_t, topic_def in enumerate(AUDITED_MATERI):
        m_id = topic_def["materiId"]
        grade = topic_def["grade"]
        phase = topic_def["phase"]
        subject = topic_def["subjectId"]
        strand = topic_def["strand"]
        topic = topic_def["topic"]
        competency = topic_def["competency"]
        source = topic_def["source"]
        domain = topic_def["domain"]
        
        for i in range(1, 101):
            q_num_str = f"{i:03d}"
            q_id = f"{m_id}_q{q_num_str}"
            diff = "Mudah" if i <= 35 else ("Sedang" if i <= 75 else "Tantangan")
            cog_level = COGNITIVE_LEVELS[(i - 1) % len(COGNITIVE_LEVELS)]
            q_type = QUESTION_TYPES[(i - 1) % len(QUESTION_TYPES)]
            indicator = f"Menganalisis konsep esensial pada materi {topic} (Indikator ke-{(i-1)%8 + 1})"
            seed = i * 19 + grade * 37 + idx_t * 53
            
            q_text, correct_ans, distractors, explanation, hint = generate_domain_qa(domain, topic, grade, i, seed)
            options, correct_idx = make_balanced_options(correct_ans, distractors, seed)
            
            q_obj = {
                "id": q_id,
                "curriculum": "merdeka",
                "grade": grade,
                "phase": phase,
                "subject": subject,
                "materiId": m_id,
                "syllabusStrand": strand,
                "topic": topic,
                "competency": competency,
                "indicator": indicator,
                "cognitiveLevel": cog_level,
                "questionType": q_type,
                "source": source,
                "question": q_text,
                "options": options,
                "correctIndex": correct_idx,
                "explanation": explanation,
                "hint": hint,
                "difficulty": diff
            }
            all_audited_questions.append(q_obj)
            
        print(f"[{idx_t+1}/{len(AUDITED_MATERI)}] Finished: {topic} (100 questions)")
        
    print(f"Total audited questions generated: {len(all_audited_questions)}")
    
    # Write mer_audited_questions.ts
    out_q_path = os.path.join(os.path.dirname(__file__), "..", "src", "data", "questions", "new_materi", "mer_audited_questions.ts")
    with open(out_q_path, "w", encoding="utf-8") as f:
        f.write("import { Question } from '../../../types/quiz';\n\n")
        f.write("export const merAuditedNewQuestions: Question[] = ")
        f.write(json.dumps(all_audited_questions, ensure_ascii=False, indent=2))
        f.write(";\n")
        
    print(f"Successfully wrote {out_q_path}")
    
    # Write auditedSupplementarySyllabus.ts
    syllabus_items = []
    for topic_def in AUDITED_MATERI:
        syllabus_items.append({
            "curriculum": "merdeka",
            "subjectId": topic_def["subjectId"],
            "subjectName": topic_def["subjectName"],
            "grade": topic_def["grade"],
            "gradeLabel": topic_def["gradeLabel"],
            "description": topic_def["description"],
            "strands": [
                {
                    "name": topic_def["strand"],
                    "topics": [topic_def["topic"]]
                }
            ]
        })
        
    out_syl_path = os.path.join(os.path.dirname(__file__), "..", "src", "data", "auditedSupplementarySyllabus.ts")
    with open(out_syl_path, "w", encoding="utf-8") as f:
        f.write("import { SubjectSyllabus } from './curriculumSyllabus';\n\n")
        f.write("export const AUDITED_SUPPLEMENTARY_SYLLABUS: SubjectSyllabus[] = ")
        f.write(json.dumps(syllabus_items, ensure_ascii=False, indent=2))
        f.write(";\n")
        
    print(f"Successfully wrote {out_syl_path}")

if __name__ == "__main__":
    build_all()
