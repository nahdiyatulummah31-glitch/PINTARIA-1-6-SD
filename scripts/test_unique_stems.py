import re

def normalize_stem(text):
    text = text.lower()
    text = re.sub(r'[\r\n\t]+', ' ', text)
    text = re.sub(r'[0-9]+', '#', text)
    text = re.sub(r'[.,/#!$%^&*;:{}=\-_`~()?"“”\']', '', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

questions = [
    "Which pair of colours are considered complementary on the standard colour wheel?",
    "What is the function of the vanishing point in one-point linear perspective drawing?",
    "Why does a relief printmaker carve their design in reverse on the linoleum block?",
    "What visual effect is achieved by layering cross-hatching pencil lines across a sketch?",
    "Which sculpture technique involves carving away excess stone from a solid marble block?",
    "In ceramic pottery, why must trapped air bubbles be wedged out of clay before kiln firing?",
    "What is an armature used for when sculpting with wire and wet plaster?",
    "Which art movement focuses on expressing emotional states rather than photorealistic depictions?",
    "In watercolor painting, what is the wet-on-wet technique primarily used for creating?",
    "What does the term monochromatic describe when analyzing an artist's palette?"
]

seen = set()
for q in questions:
    stem = normalize_stem(q)
    assert stem not in seen, f"Duplicate stem: {stem}"
    seen.add(stem)

print(f"All {len(questions)} test questions have 100% unique stems!")
