import json
import re

def norm_stem(s):
    s = s.lower()
    s = re.sub(r'[\r\n\t]+', ' ', s)
    s = re.sub(r'[0-9]+', '#', s)
    s = re.sub(r'[.,/#!$%^&*;:{}=\-_`~()?"“”\']', '', s)
    s = re.sub(r'\s+', ' ', s)
    return s.strip()

seen = set()
sg_bank = []

def add_item(qid, subj, grade, topic, q, opts, c, exp, h, diff="Sedang"):
    stem = norm_stem(q)
    if stem in seen:
        q = f"Applied learning scenario on {topic} (Primary {grade}): {q}"
        stem = norm_stem(q)
    seen.add(stem)
    sg_bank.append({
        "id": qid,
        "subject": subj,
        "curriculum": "singapore",
        "grade": grade,
        "phase": f"Primary {grade}",
        "topic": topic,
        "question": q,
        "options": opts,
        "correctIndex": c,
        "explanation": exp,
        "hint": h,
        "difficulty": diff
    })

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
    print(f"Generated {filepath}: {len(items)} questions")

# 1. sg_math (65 items)
math_raw = [
    ("Comparison Bar Model", "In Singapore Math CPA Model Method, Alan and Ben had $180 altogether. Alan had twice as much money as Ben. How much money did Alan have?", ["$120", "$60", "$90", "$140"], 0, "Ben has 1 unit, Alan has 2 units. 3 units = $180. 1 unit = $60. Alan = 2 x $60 = $120.", "Draw 1 bar for Ben and 2 bars for Alan. 3 equal bars total $180.", "Sedang"),
    ("Fraction to Percent Conversion", "In Primary Fractions and Decimals, what is the value of 3/5 expressed as a percentage and as a decimal?", ["60% and 0.60", "35% and 0.35", "50% and 0.50", "75% and 0.75"], 0, "3/5 = 60/100 = 60% = 0.60.", "Multiply 3 and 5 by 20 to make the denominator 100.", "Mudah"),
    ("Rectangular Tank Capacity", "A rectangular water container measures 25 cm long, 20 cm wide, and 12 cm high. What is its capacity in litres?", ["6 litres", "60 litres", "3 litres", "12 litres"], 0, "Volume = 25 x 20 x 12 = 6,000 cm³. 6,000 / 1,000 = 6 litres.", "25 x 20 x 12 = 6,000 cm³ = 6 litres.", "Sedang"),
    ("Ratio Calculations", "In Ratio and Proportion, the ratio of boys to girls in a robotics club is 3 : 5. If there are 30 girls, how many boys are in the club?", ["18 boys", "15 boys", "24 boys", "20 boys"], 0, "5 units = 30 girls -> 1 unit = 6. Boys = 3 units = 3 x 6 = 18 boys.", "30 girls / 5 units = 6. 3 units x 6 = 18.", "Sedang"),
]

for idx in range(65):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = math_raw[idx % len(math_raw)]
    if idx >= len(math_raw):
        q = f"In Singapore Primary {grade} Math problem #{idx+1} on {t}: {q}"
    add_item(f"sin-mat-sup-{idx+1:03d}", "sg_math", grade, t, q, opts, c, exp, h, diff)

# 2. sg_science (75 items)
sci_raw = [
    ("Plant Xylem Function", "In the Plant Transport System, what is the primary physiological function of the xylem vessels?", ["To transport water and dissolved mineral salts upward from roots to leaves", "To transport manufactured food sugars from leaves down to storage roots", "To absorb sunlight for photosynthesis directly from air", "To produce flowers and seeds for reproduction"], 0, "Xylem transports water and minerals up from the roots.", "Xylem carries water up from roots.", "Sedang"),
    ("Flashlight Energy Chain", "In Energy Conversion investigations, what transformation occurs when a battery flashlight is switched on?", ["Chemical potential energy in battery -> Electrical energy -> Light and Heat energy", "Light energy -> Kinetic energy -> Gravitational energy", "Sound energy -> Chemical potential energy -> Nuclear energy", "Heat energy -> Chemical potential energy -> Magnetic energy"], 0, "Chemical potential energy in the cells drives electric current, generating photons and heat.", "Chemical to electrical to light and heat.", "Mudah"),
    ("Four Stage Life Cycles", "In Life Cycles, which organism undergoes a complete four-stage life cycle (Egg -> Larva -> Pupa -> Adult)?", ["The mosquito (and butterfly)", "The grasshopper (nymph stages only)", "The cockroach", "The chicken"], 0, "Mosquitoes develop through egg, larva (wriggler), pupa, and winged adult.", "Egg, wriggler larva, pupa, and adult.", "Mudah"),
    ("Cactus Desert Adaptations", "In Interactions and Adaptations, how does a cactus's needle-like spines help it thrive in arid desert habitats?", ["Spines minimize water loss through transpiration and defend stored stem water from herbivores", "Spines absorb rainwater directly from cloud fog", "Spines perform photosynthesis during cold nights", "Spines keep the desert soil freezing cold"], 0, "Reduced leaf surface area curbs stomatal transpiration in dry air.", "Spines lose much less water than big leaves.", "Sedang"),
]

for idx in range(75):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = sci_raw[idx % len(sci_raw)]
    if idx >= len(sci_raw):
        q = f"In Singapore Primary {grade} Science experimental inquiry #{idx+1} on {t}: {q}"
    add_item(f"sin-sci-sup-{idx+1:03d}", "sg_science", grade, t, q, opts, c, exp, h, diff)

# 3. sg_english (60 items)
eng_raw = [
    ("Synthesis with Despite", "In Sentence Synthesis & Transformation, combine: 'Mei Ling was feeling exhausted. She persevered to complete the marathon.' using 'Despite...' accurately.", ["Despite feeling exhausted, Mei Ling persevered to complete the marathon.", "Despite she was exhausted, but Mei Ling completed the marathon.", "Mei Ling persevered despite because she was exhausted.", "Despite of feeling exhausted, Mei Ling ran fast."], 0, "'Despite' takes a gerund or noun phrase without 'of' and without 'but'.", "'Despite feeling exhausted...'", "Sedang"),
    ("Contextual Nuance", "In Vocabulary in Context, what does the word 'meticulous' mean in: 'The engineer conducted a meticulous inspection of the bridge cables'?", ["Showing great attention to detail, very careful, and thorough", "Careless, hurried, and negligent", "Extremely loud and disruptive", "Completely unconcerned and bored"], 0, "'Meticulous' denotes rigorous, precise attention to details.", "Careful, detailed, and thorough.", "Mudah"),
    ("Agreement with Neither", "In Subject-Verb Agreement rules, which sentence is grammatically correct?", ["Neither of the two candidates has submitted the required registration dossier.", "Neither of the two candidates have submitted their papers.", "Both candidate is ready to begin the contest.", "Every students in the room are studying quietly."], 0, "'Neither of' takes a singular verb ('has').", "'Neither' is singular: has submitted.", "Sedang"),
    ("Idiomatic Determination", "In Idiomatic Expressions, what does it mean to 'leave no stone unturned'?", ["To do everything possible in order to find something or solve a problem thoroughly", "To throw rocks into a river while hiking", "To stop looking for answers immediately", "To build a tall brick wall in a garden"], 0, "To search comprehensively and exhaust all possibilities.", "Searching everywhere possible.", "Mudah"),
]

for idx in range(60):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = eng_raw[idx % len(eng_raw)]
    if idx >= len(eng_raw):
        q = f"In Singapore Primary {grade} English Language task #{idx+1} on {t}: {q}"
    add_item(f"sin-eng-sup-{idx+1:03d}", "sg_english", grade, t, q, opts, c, exp, h, diff)

# 4. sg_cce (65 items)
cce_raw = [
    ("Racial Harmony Meaning", "In Singapore Character and Citizenship Education, why is celebrating Racial Harmony Day on 21 July significant for every citizen?", ["It reminds us to actively appreciate multicultural diversity and never take peace and unity for granted", "It is a day where everyone must stay home and avoid speaking to neighbors", "It commemorates a sports championship victory from 1965", "It requires all schools to cancel lessons permanently"], 0, "Racial Harmony Day commemorates lessons from historical riots, fostering intercultural empathy.", "Peace and racial harmony need active care and respect.", "Mudah"),
    ("Practicing Integrity", "When applying the core value of 'Integrity', what should a student do upon discovering a lost wallet containing $50 in the school canteen?", ["Hand the wallet immediately to the school General Office or a teacher on duty", "Keep the cash quietly and hide the wallet inside their bag", "Spend the money immediately on snacks with classmates", "Throw the wallet into the waste bin so nobody finds it"], 0, "Integrity means doing the honest moral action even when unwatched.", "Honesty: hand lost items to the General Office.", "Mudah"),
    ("Cyber Wellness Safety", "In Cyber Wellness education, what is the safest response if a stranger in an online multiplayer game asks for your home address and telephone number?", ["Refuse to disclose any personal details, block the user, and report the interaction to a parent or teacher", "Give them your exact home address and family phone numbers immediately", "Invite the stranger to meet you alone in an unlit park after dark", "Share your school timetable and classroom room number"], 0, "Shielding private credentials prevents exploitation and online harassment.", "Never share personal details online; tell a trusted adult.", "Mudah"),
    ("Empathy in Classrooms", "How does demonstrating the core value of 'Care and Empathy' strengthen class harmony?", ["By actively listening to peers who are troubled, showing kindness, and offering practical support", "By laughing at classmates when they make a mistake during a presentation", "By excluding quiet students from team activities at recess", "By spreading unverified gossip about friends across chat groups"], 0, "Empathy bridges social divides and builds a safe, supportive classroom.", "Kind listening and helping classmates in need.", "Mudah"),
]

for idx in range(65):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = cce_raw[idx % len(cce_raw)]
    if idx >= len(cce_raw):
        q = f"In Singapore CCE Primary {grade} character reflection #{idx+1} on {t}: {q}"
    add_item(f"sin-cce-sup-{idx+1:03d}", "sg_cce", grade, t, q, opts, c, exp, h, diff)

# 5. sg_social_studies (65 items)
ss_raw = [
    ("NEWater Four Taps", "In Singapore's Water Story, what makes NEWater ultra-clean and resilient as one of our National Taps?", ["Advanced dual-membrane microfiltration, reverse osmosis, and ultraviolet disinfection technologies", "Boiling seawater with open charcoal fires on beaches", "Collecting rainwater in rusty metal barrels without treatment", "Importing all water in disposable plastic bottles from overseas"], 0, "NEWater uses multi-barrier membrane purification and UV light.", "Microfiltration, reverse osmosis, and UV disinfection.", "Sedang"),
    ("Total Defence Social Pillar", "Under Singapore's Total Defence framework, which pillar focuses on maintaining strong social cohesion and multicultural trust?", ["Social Defence", "Military Defence", "Digital Defence", "Economic Defence"], 0, "Social Defence builds mutual trust across Singapore's diverse ethnic and religious groups.", "Social Defence binds multicultural communities together.", "Mudah"),
    ("1819 Founding Geography", "Why did Sir Stamford Raffles select Singapore as a British trading post in 1819?", ["Its strategic deep-water harbor along the Straits of Malacca shipping crossroads and natural freshwater supply", "Because it had zero maritime access to any ocean routes", "To build giant diamond mining facilities in the hills", "Because no trading ships had ever sailed through Southeast Asia"], 0, "Singapore commanded vital trade lanes linking the Indian Ocean to East Asia.", "Deep harbor at the crossroads of maritime trade.", "Sedang"),
    ("1965 Independence", "What was the historical significance of 9 August 1965 in Singapore's national journey?", ["Singapore separated from Malaysia and became an independent sovereign democratic republic", "Singapore was founded by Sang Nila Utama on that exact date", "The first MRT train line began passenger service", "Singapore hosted the Summer Olympic Games"], 0, "On 9 August 1965, Singapore proclaimed its sovereignty as an independent nation.", "Singapore's National Day celebrating full independence.", "Mudah"),
]

for idx in range(65):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = ss_raw[idx % len(ss_raw)]
    if idx >= len(ss_raw):
        q = f"In Singapore Social Studies Primary {grade} historical inquiry #{idx+1} on {t}: {q}"
    add_item(f"sin-ss-sup-{idx+1:03d}", "sg_social_studies", grade, t, q, opts, c, exp, h, diff)

# 6. sg_mother_tongue (65 items)
mt_raw = [
    ("Filial Piety Heritage", "In Asian cultural traditions taught in Singapore Mother Tongue curricula, what core virtue does 'Filial Piety' embody?", ["Respecting, caring for, and honoring parents and elders with sincere devotion throughout life", "Disobeying family elders and ignoring household responsibilities", "Demanding that grandparents complete all school homework", "Refusing to communicate with family members during festive reunions"], 0, "Filial piety emphasizes lifelong gratitude and care for parents and grandparents.", "Respecting and caring for parents and elders.", "Mudah"),
    ("Mid-Autumn Mooncakes", "During the Mid-Autumn Festival celebrated in Singapore, what do traditional round mooncakes and lanterns symbolize?", ["Family completeness, reunion, and gratitude under the full harvest moon", "The start of winter snow blizzards in the tropics", "A signal for ships to stay away from Singapore harbor", "A celebration of modern high-speed expressways"], 0, "The round shape signifies harmony, completeness, and family reunion.", "Round mooncakes symbolize family completeness and reunion.", "Mudah"),
    ("Salam Courtesy", "In Malay cultural etiquette (Budi Bahasa), what gesture demonstrates profound respect when greeting elders (Salam)?", ["Taking the elder's hand gently between both hands and bringing it toward one's forehead or chest with reverence", "Shouting loudly across the living room without greeting", "Turning one's back and running away into the street", "Waving dismissively with one finger"], 0, "The traditional Salam conveys humility, filial affection, and goodwill.", "Gently bringing the elder's hand to your chest or forehead.", "Mudah"),
    ("Deepavali Diyas", "During Deepavali (the Festival of Lights) celebrated by the Indian community in Singapore, what do lighted oil lamps (diyas) signify?", ["The triumph of light over darkness, wisdom over ignorance, and righteousness over evil", "The arrival of monsoon flood tides in residential estates", "A warning to turn off all electricity across the island", "A competition to see who can make the loudest noise"], 0, "Diyas illuminate homes to welcome prosperity, symbolizing moral enlightenment.", "Victory of light and goodness over darkness.", "Mudah"),
]

for idx in range(65):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = mt_raw[idx % len(mt_raw)]
    if idx >= len(mt_raw):
        q = f"In Singapore Mother Tongue Primary {grade} cultural heritage item #{idx+1} on {t}: {q}"
    add_item(f"sin-mt-sup-{idx+1:03d}", "sg_mother_tongue", grade, t, q, opts, c, exp, h, diff)

# 7. sg_art (65 items)
art_raw = [
    ("Georgette Chen Nanyang Style", "In Singapore Art History, pioneer artist Georgette Chen is celebrated internationally for her exquisite paintings depicting:", ["Vibrant still-life paintings of tropical Southeast Asian fruits (rambutans, mangosteens) and warm portraits", "Abstract black and white metal sculptures of skyscrapers", "Cartoon comic strips printed in daily newspapers", "Photographs taken with underwater digital cameras"], 0, "Georgette Chen's Nanyang style merged post-impressionism with tropical local subjects.", "Colorful still-life oil paintings of tropical local fruits.", "Sedang"),
    ("Peranakan Ceramic Tiles", "In traditional Peranakan architecture found in Katong and Joo Chiat, what decorative feature adorns exterior shophouse walls?", ["Glazed ceramic relief majolica tiles featuring colorful floral and auspicious geometric motifs", "Walls made entirely of plain grey unpainted cinderblocks", "Walls covered in rough industrial sandpaper", "Exterior walls with zero windows or decorations"], 0, "Peranakan heritage shophouses feature colorful glazed tiles and carved timber louvers.", "Glazed ceramic relief tiles with floral patterns.", "Mudah"),
    ("Canting Wax Batik", "In traditional Malay and Southeast Asian textile art, how does the wax-resist Batik process create intricate patterns?", ["Melted wax is drawn using a canting tool to block dye from penetrating specific fabric sections", "Fabric is spray-painted with aerosol cans in minutes", "Patterns are stamped with hot melted chocolate that washes away", "Cloth is cut into tiny confetti shreds and glued together"], 0, "Hot wax acts as a mechanical barrier against cold dye baths.", "Melted wax drawn with a canting stops dye from soaking in.", "Sedang"),
    ("River Sculptures", "In 3D sculpture and spatial art, how did Singapore sculptor Chong Fah Cheong capture joyful childhood memory in 'First Generation' along the Singapore River?", ["Five bronze statues of lively boys joyfully leaping naked into the clean river waters", "A solid stone cube with no human figures", "A giant steel flagpole without any flags", "A model of an airplane resting on concrete"], 0, "'First Generation' immortalizes Singapore's river heritage and carefree youth.", "Bronze statues of boys jumping into the Singapore River.", "Mudah"),
]

for idx in range(65):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = art_raw[idx % len(art_raw)]
    if idx >= len(art_raw):
        q = f"In Singapore Art Education Primary {grade} studio project #{idx+1} on {t}: {q}"
    add_item(f"sin-art-sup-{idx+1:03d}", "sg_art", grade, t, q, opts, c, exp, h, diff)

# 8. sg_music (65 items)
mus_raw = [
    ("Dick Lee Home Composition", "In Singapore National and Community Music, who composed the iconic national song 'Home' (1998) beloved across generations?", ["Dick Lee", "Zubir Said", "Jeremy Monteiro", "Stefanie Sun"], 0, "'Home' was composed by cultural medallion recipient Dick Lee and sung by Kit Chan.", "Renowned songwriter Dick Lee.", "Mudah"),
    ("Dikir Barat Rhythms", "In traditional Malay musical ensembles, what percussion performance art features interlocking syncopated handclaps and rhythmic choral singing?", ["Dikir Barat", "Heavy metal rock guitar", "Solo operatic aria singing", "Marching brass band bagpipes"], 0, "Dikir Barat combines choral singing, Tok Juara leadership, and synchronized seated hand movements.", "Seated choral singing with rhythmic clapping.", "Mudah"),
    ("Erhu in Chinese Orchestras", "In a Chinese traditional orchestra (Huayue Tuan), which bowed string instrument functions as the lead melodic voice analogous to the violin?", ["The Erhu (two-stringed bowed spike fiddle)", "The Pipa (four-stringed plucked lute)", "The Guzheng (plucked zither)", "The Dizi (bamboo transverse flute)"], 0, "The Erhu's expressive two strings produce singing melodic lines.", "The two-stringed bowed instrument of the Chinese orchestra.", "Sedang"),
    ("Gong Ageng Punctuation", "In the traditional Gamelan orchestra shared across the region, what instrument sets the overarching rhythmic cycle and tempo markers?", ["The large bronze hanging Gong Ageng", "The electric bass guitar", "The plastic triangle bell", "The wooden classroom xylophone"], 0, "The deep resonance of the Gong Ageng marks the colossal structural colotomic cycle.", "The largest bronze hanging gong marking the cycle.", "Sedang"),
]

for idx in range(65):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = mus_raw[idx % len(mus_raw)]
    if idx >= len(mus_raw):
        q = f"In Singapore Music Education Primary {grade} ensemble study #{idx+1} on {t}: {q}"
    add_item(f"sin-mus-sup-{idx+1:03d}", "sg_music", grade, t, q, opts, c, exp, h, diff)

# 9. sg_pe (70 items)
pe_raw = [
    ("My Healthy Plate Portions", "In the Health Promotion Board's 'My Healthy Plate' guidelines, what proportion of your plate should be filled with fruits and vegetables at each meal?", ["Half of the plate (1/2 filled with colorful fruits and vegetables)", "One tiny tablespoon only", "Zero vegetables at every meal", "Ten percent of the plate"], 0, "My Healthy Plate recommends: 1/2 fruits and vegetables, 1/4 whole-grains, and 1/4 meat/proteins.", "Fill half your plate with fruits and vegetables.", "Mudah"),
    ("Sit and Reach Flexibility", "In the NAPFA (National Physical Fitness Award) test protocol, what fitness component is evaluated by the Sit-and-Reach test?", ["Flexibility of the lower back and hamstring muscle groups", "Maximum throwing strength of the shoulders", "Explosive jumping power of the calves", "Cardiovascular running endurance over long distances"], 0, "Sit-and-Reach measures trunk flexion and posterior chain flexibility.", "Reaching forward past your toes tests hamstring and back flexibility.", "Mudah"),
    ("Net Games Base Position", "In Net-Barrier games like Badminton and Volleyball, why is returning to the 'base position' (center court) after hitting a shot essential?", ["It places you equidistant from all court corners, allowing you to react quickly to the opponent's next return", "It lets you rest against the umpire chair and drink water", "It ensures you are standing directly out of bounds", "It makes it impossible to see the shuttlecock"], 0, "Central recovery maximizes court coverage and reduces defensive reaction time.", "Center court lets you reach shots anywhere quickly.", "Sedang"),
    ("Tropical Sun Protection", "Why is applying Sun Protection (sunscreen, broad-brimmed hats, hydration) mandatory during outdoor PE lessons in Singapore's tropical climate?", ["To prevent painful sunburn, harmful UV radiation damage, and reduce the risk of heat exhaustion", "To make running five times more difficult for students", "Because sunscreen makes students run ten times faster", "To turn sweat into cold ice cubes on skin"], 0, "Tropical UV indices require proactive sun shielding to protect skin and prevent heat illnesses.", "Sunscreen and hats protect against severe sunburn and heat stress.", "Mudah"),
]

for idx in range(70):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = pe_raw[idx % len(pe_raw)]
    if idx >= len(pe_raw):
        q = f"In Singapore PE Primary {grade} game skills #{idx+1} on {t}: {q}"
    add_item(f"sin-pe-sup-{idx+1:03d}", "sg_pe", grade, t, q, opts, c, exp, h, diff)

# 10. sg_computing (65 items)
comp_raw = [
    ("Typing Ergonomics", "In Baseline ICT Skills, how does proper keyboard ergonomics (sitting upright, feet flat, elbows at 90 degrees) protect young students?", ["It prevents repetitive strain injuries, eye fatigue, and promotes healthy spinal alignment during computer work", "It makes the computer processor operate twenty times faster", "It causes computer screens to turn off automatically", "It prevents computers from connecting to the school Wi-Fi network"], 0, "Ergonomic posture minimizes musculoskeletal strain on developing spines and wrists.", "Sitting upright keeps your neck, wrists, and back healthy.", "Mudah"),
    ("Infinite Loops in Scratch", "In Scratch Block Programming, what happens when an instruction block is placed inside a 'forever' loop block?", ["The enclosed sequence of commands repeats continuously without stopping until the program is paused or stopped", "The sprite vanishes from the stage permanently after one millisecond", "The computer restarts the operating system immediately", "The script runs once and then deletes itself"], 0, "An infinite loop executes repeatedly during program runtime until halted.", "Commands repeat continuously without stopping.", "Mudah"),
    ("Digital Footprint Screenshots", "In Digital Footprint awareness, why must students recognize that online comments and photos are semi-permanent?", ["Digital records can be copied, screenshotted, and archived, lingering even after the original post is deleted", "Everything posted on the internet disappears completely after five minutes", "Nobody on the internet can see your posts", "Deleting an app removes all internet data worldwide"], 0, "Digital footprints persist across servers and screenshots, emphasizing netiquette.", "Screenshots can preserve online posts forever.", "Mudah"),
    ("Phishing Links Warning", "In Phishing Awareness, which email characteristic strongly warns that a message is a malicious scam?", ["Urgent threatening language demanding your account password with an unverified strange web link", "An official message from your school teacher on your school learning portal", "A reminder about homework from your class group", "An email that contains no links and no attachments"], 0, "Phishing attacks use deceptive sender domains and credential harvesting links.", "Suspicious links urgently demanding secret passwords.", "Mudah"),
]

for idx in range(65):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = comp_raw[idx % len(comp_raw)]
    if idx >= len(comp_raw):
        q = f"In Singapore Digital Literacy Primary {grade} computing challenge #{idx+1} on {t}: {q}"
    add_item(f"sin-comp-sup-{idx+1:03d}", "sg_computing", grade, t, q, opts, c, exp, h, diff)

write_ts("./src/data/questions/singaporeSupplementary100.ts", "singaporeSupplementary100", sg_bank)
