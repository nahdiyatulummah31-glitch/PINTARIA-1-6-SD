import re

with open('src/data/curriculumSyllabus.ts') as f:
    text = f.read()

# Parse subjects and their strands
pattern = r'curriculum:\s*\'([^\']+)\',\s*subjectId:\s*\'([^\']+)\',.*?grade:\s*(\d+).*?strands:\s*\[(.*?)\]\s*\},'
matches = re.findall(pattern, text, re.DOTALL)
print(f"Parsed {len(matches)} curriculum modules")
for curr, subj, grade, strands_raw in matches[:6]:
    s_names = re.findall(r'name:\s*\'([^\']+)\'', strands_raw)
    print(f"[{curr}] {subj} Grade {grade}: {s_names}")
