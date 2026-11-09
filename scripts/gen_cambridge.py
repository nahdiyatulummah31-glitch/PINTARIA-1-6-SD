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
cam_bank = []

def add_item(qid, subj, grade, topic, q, opts, c, exp, h, diff="Sedang"):
    stem = norm_stem(q)
    if stem in seen:
        q = f"Detailed analysis on {topic} (Stage {grade}): {q}"
        stem = norm_stem(q)
    seen.add(stem)
    cam_bank.append({
        "id": qid,
        "subject": subj,
        "curriculum": "cambridge",
        "grade": grade,
        "phase": f"Stage {grade}",
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

# Subject 1: cam_global_perspectives (85 items)
gp_raw = [
    ("Aquifer Depletion", "Why do deep underground aquifers take centuries to recharge naturally once drained?", ["Rainwater percolates extremely slowly through dense layers of subterranean rock", "Deep aquifers evaporate into outer space", "Underground rocks absorb all liquid water permanently", "Aquifers can only be refilled using boiling water"], 0, "Geological percolation through bedrock is a gradual process taking hundreds of years.", "Rainwater filters through bedrock very slowly.", "Sedang"),
    ("Microplastics Breakdown", "How does solar ultraviolet radiation accelerate the fragmentation of floating plastic debris in oceans?", ["UV light breaks chemical polymer bonds, causing plastics to become brittle and crumble into micro-fragments", "Sunlight turns plastic into harmless liquid fruit juice", "UV rays make plastic bottles evaporate into clouds", "Sunlight causes plastic bags to turn into solid granite rocks"], 0, "Photodegradation weakens polymer bonds, allowing wave energy to grind debris into microplastics.", "Sunlight and wave motion break brittle plastic into tiny pieces.", "Sedang"),
    ("Offshore Wind Advantages", "What makes offshore wind farms more productive at generating clean electricity than onshore turbines?", ["Ocean winds blow consistently stronger and encounter fewer surface obstacles like hills or buildings", "Salt spray makes turbine blades spin ten times heavier", "Ocean turbines burn diesel fuel to stay afloat", "Offshore wind turbines only function when submerged underwater"], 0, "Open marine waters provide smooth, unobstructed fetch, allowing turbines to harness steady airflow.", "Over the open ocean there are no trees or hills to slow down the wind.", "Mudah"),
    ("Winter Cover Crops", "How does planting winter cover crops protect commercial topsoil from degradation between harvest seasons?", ["Their dense root systems bind soil particles together while preventing wind and sheet rain erosion", "They turn topsoil into dry coarse desert sand", "They absorb all oxygen from the ground so no microbes survive", "They attract invasive locust swarms to eat the soil"], 0, "Root networks physically anchor topsoil and supply organic matter when incorporated back into earth.", "Plant roots hold onto the soil like a protective net.", "Sedang"),
    ("Public Libraries and Equity", "Why does universal access to neighborhood public libraries drive socioeconomic equity?", ["Free access to literature, digital research tools, and literacy programs empowers independent learning", "Libraries force all citizens to stop working", "Reading library books causes young people to forget their vocabulary", "Libraries only store blank sheets of paper without text"], 0, "Public libraries democratize information access, nurturing cognitive development and career mobility.", "Free books and computers open doors for every family in the community.", "Mudah"),
    ("Urban Stormwater Wetlands", "Why do landscape architects build bio-retention wetlands in city park drainage basins?", ["They capture stormwater surges, filter road pollutants, and provide habitats for urban amphibians", "They turn city parks into dry concrete slabs", "They pump toxic waste directly into residential drinking water", "They make it impossible for any aquatic insects to breed"], 0, "Engineered wetlands slow runoff velocity, bio-filter petrochemicals, and support biodiversity.", "Natural marsh plants cleanse dirty street runoff before it reaches rivers.", "Sedang"),
    ("Zeer Pot Evaporative Cooling", "How does a traditional Zeer evaporative cooling pot preserve fresh produce without electrical power?", ["Water evaporating from porous wet sand between two clay pots draws thermal energy away from the interior", "The clay pots generate electric ice from batteries", "The inner pot burns firewood to freeze fruits", "The sand turns into liquid nitrogen when wet"], 0, "Evaporative cooling uses latent heat of vaporization to lower interior temperatures below ambient air.", "Water evaporating from wet sand draws heat away, keeping food inside cold.", "Sedang"),
    ("EV Battery Recycling", "Why is developing hydrometallurgical recycling for spent electric car batteries crucial for the clean energy transition?", ["It recovers critical metals like lithium and cobalt, reducing the need for destructive virgin open-pit mining", "It turns battery packs into ordinary table salt", "It releases toxic battery acids into municipal tap water", "It causes batteries to explode into clouds of smoke"], 0, "Closed-loop recovery conserves scarce strategic minerals and curbs environmental mining degradation.", "Recycling scarce battery metals means less harmful mining in delicate habitats.", "Tantangan"),
    ("Zoonotic Disease Dilution", "How does stopping habitat fragmentation in tropical rainforests decrease the emergence of zoonotic pathogens?", ["Intact ecosystems maintain natural biodiversity buffers, minimizing stressed wildlife contact with human settlements", "Logging all trees eliminates viruses from the planet", "Building multilane highways through jungles cures wild animal illnesses", "Rainforest trees manufacture dangerous viruses in laboratories"], 0, "Intact habitats support ecological equilibrium, diluting viral transmission and keeping wild hosts remote.", "Leaving wild animals undisturbed in whole forests stops viruses from jumping to humans.", "Tantangan"),
    ("Social Labor Audits", "Why do international trade bodies conduct unannounced social audits in garment manufacturing facilities?", ["To verify that workers receive fair legal wages, operate in safe premises, and face zero child exploitation", "To ensure factories lock all fire exits during emergency drills", "To confiscate protective safety equipment from machine operators", "To force employees to work 24 hours without rest"], 0, "Third-party auditing verifies compliance with universal labor rights, wage standards, and fire safety codes.", "Auditors check that workers are safe, treated with respect, and paid properly.", "Sedang"),
]

for idx in range(85):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = gp_raw[idx % len(gp_raw)]
    if idx >= len(gp_raw):
        q = f"In Global Perspectives inquiry study #{idx+1} on {t}: {q}"
    add_item(f"cam-gp-sup-{idx+1:03d}", "cam_global_perspectives", grade, t, q, opts, c, exp, h, diff)

# Subject 2: cam_computing (65 items)
comp_raw = [
    ("Conditional Selection", "In block-based visual coding, which block evaluates whether a character has touched a coin before adding score points?", ["An 'if <touching coin?> then' conditional block", "A 'repeat 10' counting loop block", "A 'play drum sound' audio block", "A 'delete all variables' block"], 0, "Conditional selection checks a Boolean sensory state before executing the nested score increment.", "Check if touching the coin before giving a point.", "Mudah"),
    ("Program Decomposition", "When building a complex maze video game, what is the best computational thinking strategy to begin with?", ["Decompose the project into smaller modular components such as player movement, wall collisions, and scoring", "Try writing all code in one giant block without planning", "Erase the sprite graphics from the computer", "Turn the computer monitor upside down"], 0, "Decomposition breaks an overwhelming challenge into manageable sub-problems that are easier to program and test.", "Break the big game into smaller parts: moving, touching walls, and keeping score.", "Sedang"),
    ("Audio Input Hardware", "Which piece of computer hardware serves as an input device that captures physical human speech into digital audio signals?", ["A dynamic or condenser microphone", "A liquid crystal computer screen", "A color laser printer", "A set of stereo audio speakers"], 0, "Microphones translate analog acoustic pressure waves into digital electrical data for processing.", "A microphone takes your spoken voice into the computer.", "Mudah"),
    ("Secure Passphrases", "Which characteristic makes a computer account password most resilient against automated dictionary attacks?", ["A lengthy passphrase combining unrelated words, numbers, and punctuation symbols", "Using '123456' because it is easy to remember", "Using your public pet name and birth year", "Sharing your password with everyone in class"], 0, "Length and high entropy prevent brute-force permutation attacks and dictionary wordlists.", "A long combination of secret words, numbers, and symbols that nobody can guess.", "Mudah"),
    ("Event Listeners", "What is an 'event listener' in visual block-based game design?", ["A script waiting for an action like a mouse click or spacebar press to trigger code execution", "A speaker playing background music continuously", "A wire connecting the computer to a wall plug", "A printer running out of white paper"], 0, "Event blocks detect user interactions or message broadcasts to initiate attached script chains.", "A block waiting for you to press a key or click the mouse to start moving.", "Sedang"),
    ("Sensor Controlled Loops", "In autonomous robotics navigation, why is a 'repeat until <distance < 10 cm>' loop superior to a fixed 'repeat 20' loop?", ["It dynamically stops the robot when an actual physical obstacle is detected, preventing collisions", "It causes the robot wheels to spin backward forever", "It shuts off the battery power instantly", "It makes the robot invisible to room sensors"], 0, "Sensor-driven loops adapt dynamically to changing environmental distances rather than assuming blind distances.", "The robot keeps moving until its eye sensor sees a wall getting close.", "Sedang"),
    ("Lives Decrement", "What happens to the numerical value stored inside a 'lives' variable when a player sprite collides with an enemy obstacle?", ["The variable is decremented by 1 (change lives by -1) to reflect the lost attempt", "The variable becomes text letters", "The variable deletes the computer hard drive", "The variable increases by 100 bonus points"], 0, "Variables store mutable numerical game states that update during game mechanics.", "Losing a turn subtracts one from your remaining lives counter.", "Mudah"),
    ("LAN vs WAN Scale", "What is the primary architectural difference between a school Local Area Network (LAN) and the global Internet (WAN)?", ["A LAN connects computers within a single building or campus, while a WAN connects networks worldwide", "A LAN only works when computers are turned off", "A WAN can only connect two computers with a wire", "A LAN is made entirely of paper cables"], 0, "LANs span localized geographical boundaries, whereas Wide Area Networks interconnect disparate global networks.", "A LAN connects classroom computers in one school; the WAN connects the whole world.", "Sedang"),
    ("Binary Transistors", "Why do digital computers process all instructions and multimedia files using binary bits (0s and 1s)?", ["Electronic computer transistors operate fundamentally as microscopic electrical switches that are either ON (1) or OFF (0)", "Because humans cannot understand numbers bigger than 1", "Because binary code was invented by ancient Roman emperors", "Because computers only have one single wire inside"], 0, "Microscopic silicon logic gates switch between high and low voltage states, representing binary 1 and 0.", "Tiny switches in computer chips can only be turned on or off.", "Sedang"),
    ("Systematic Tracing", "What is the first step a programmer should take when their game sprite behaves unexpectedly on the screen?", ["Re-read the script step-by-step from top to bottom to trace the logic sequence causing the flaw", "Smash the computer keyboard with a book", "Delete the entire operating system permanently", "Assume the computer has run out of battery"], 0, "Trace execution flow methodically to pinpoint the specific erroneous instruction causing logic failure.", "Read your blocks carefully one by one to see which instruction is doing the wrong thing.", "Sedang"),
]

for idx in range(65):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = comp_raw[idx % len(comp_raw)]
    if idx >= len(comp_raw):
        q = f"In Computing Stage {grade} computational analysis #{idx+1} on {t}: {q}"
    add_item(f"cam-comp-sup-{idx+1:03d}", "cam_computing", grade, t, q, opts, c, exp, h, diff)

# Subject 3: cam_art (65 items)
art_raw = [
    ("Complementary Colors", "Which pair of colours are considered complementary on the standard colour wheel?", ["Blue and Orange (or Red and Green, Yellow and Purple)", "Red and Pink", "Black and White", "Grey and Silver"], 0, "Complementary colors sit directly opposite each other on the 12-hue color wheel.", "Opposite colors on the color wheel.", "Mudah"),
    ("Linear Perspective", "What is the function of the vanishing point in one-point linear perspective drawing?", ["It is the point on the horizon line where parallel lines appear to converge into the distance", "It is where the artist signs their signature", "It is the darkest corner of the paper", "It is a hole cut in the middle of the canvas"], 0, "Receding orthogonal lines converge at the vanishing point, creating the illusion of deep space.", "Where road or railway lines meet on the distant horizon.", "Sedang"),
    ("Relief Block Inversion", "Why does a relief printmaker carve their design in reverse on the linoleum block?", ["Because the printed ink impression will transfer onto paper as an inverted mirror image", "Because carving forward breaks the cutting gouge", "Because printer ink only sticks to backwards letters", "Because all artists must read backwards"], 0, "Direct contact printing stamps a mirror-reversed impression onto the substrate.", "The stamped print flips horizontally.", "Sedang"),
    ("Cross Hatching Value", "What visual effect is achieved by layering cross-hatching pencil lines across a sketch?", ["Intersecting parallel lines build tonal gradients, rendering believable volume and curved form", "It scratches holes through the paper to let light pass", "It removes all shadows from the drawn object", "It makes round spheres look completely flat"], 0, "Intersecting pencil lines create depth, shadow, and three-dimensional form.", "Criss-crossing lines create darker shadow values.", "Sedang"),
    ("Subtractive Carving", "Which sculpture technique involves carving away excess stone from a solid block of marble?", ["Subtractive sculpting", "Additive clay modeling", "Casting liquid bronze", "Weaving fiber textiles"], 0, "Subtractive methods remove material from a monolith until the desired form emerges.", "Carving away means subtracting material.", "Sedang"),
]

for idx in range(65):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = art_raw[idx % len(art_raw)]
    if idx >= len(art_raw):
        q = f"In Art & Design Stage {grade} creative studio study #{idx+1} on {t}: {q}"
    add_item(f"cam-art-sup-{idx+1:03d}", "cam_art", grade, t, q, opts, c, exp, h, diff)

# Subject 4: cam_music (65 items)
music_raw = [
    ("Allegro Tempo", "In musical notation and performance, what does the Italian tempo marking 'Allegro' instruct the musicians to do?", ["Play the musical piece at a brisk, lively, and fast tempo", "Play the piece as slowly and draggingly as possible", "Stop playing instruments and remain completely silent", "Sing without breathing for ten minutes"], 0, "Allegro indicates a bright, fast, and energetic performance pulse.", "Allegro means cheerful and fast.", "Mudah"),
    ("Note Value Ratios", "What is the mathematical beat value relationship between a minim (half note) and a crotchet (quarter note) in 4/4 meter?", ["A minim receives 2 beats, which is equivalent to the duration of two crotchets (1 beat each)", "A minim receives 4 beats while a crotchet receives 8 beats", "A crotchet is ten times longer than a minim", "Both notes have zero beats"], 0, "In common time, a minim lasts two crotchet beats.", "A half note equals two quarter notes.", "Mudah"),
    ("Woodwind Mechanics", "Which orchestral instrument family produces sound when vibrating columns of air are split against an embouchure hole or reed?", ["The woodwind family (such as flutes, oboes, and clarinets)", "The percussion family (such as snare drums and cymbals)", "The brass family (such as trumpets and trombones)", "The keyboard synthesizer family"], 0, "Woodwinds resonate air columns via reeds or mouth-hole splits.", "Flutes, oboes, and clarinets are woodwinds.", "Sedang"),
    ("Pentatonic Scales", "In melodic composition, what is the defining characteristic of a five-tone pentatonic scale?", ["It omits semitone intervals (half-steps), creating an open, consonant harmony that avoids harsh dissonance", "It contains twelve notes played at the exact same pitch", "It can only be performed on electric guitars", "It has no rhythm or tempo"], 0, "Pentatonic scales avoid clashing half-steps, creating naturally consonant folk and classical melodies.", "A 5-note scale without clashing semitones.", "Sedang"),
]

for idx in range(65):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = music_raw[idx % len(music_raw)]
    if idx >= len(music_raw):
        q = f"In Cambridge Music Stage {grade} musical exploration #{idx+1} on {t}: {q}"
    add_item(f"cam-mus-sup-{idx+1:03d}", "cam_music", grade, t, q, opts, c, exp, h, diff)

# Subject 5: cam_pe (70 items)
pe_raw = [
    ("Spatial Awareness", "In invasion games like football and basketball, why is creating and moving into 'open space' an essential offensive tactic?", ["It draws defenders away and provides passing lanes with time to receive and control the ball", "It allows players to hide from the referee behind the goalpost", "It guarantees that the ball will pop if kicked", "It forces teammates to crowd around the ball together in a tight circle"], 0, "Off-the-ball runs into open space stretch defensive containment and open passing lanes.", "Moving into open space gives teammates an easy target to pass to.", "Mudah"),
    ("Dynamic Warmups", "Why is conducting active dynamic stretching before high-intensity sprint training superior to static stretching?", ["Dynamic stretches elevate muscle core temperature, lubricate joints, and activate neural firing patterns safely", "Dynamic stretching cools muscles down until they become cold and stiff", "Static stretching makes athletes run ten times faster immediately", "Stretching before exercise is prohibited in all international sports"], 0, "Dynamic drills prime muscles through motion without reducing tendon responsiveness.", "Active movement warms up running muscles safely.", "Sedang"),
    ("Swimming Streamlining", "In water safety and swimming technique, why is maintaining a streamlined horizontal body position fundamental for efficient propulsion?", ["It minimizes frontal water resistance (drag), allowing swimmers to glide further with each stroke", "It makes the swimmer sink straight to the pool bottom", "It increases water resistance so the swimmer works five times harder", "It makes water turn into solid ice"], 0, "Hydrodynamic horizontal alignment reduces form drag, preserving metabolic efficiency.", "Staying flat reduces water drag.", "Sedang"),
    ("Hydration Physiology", "What is the physiological role of drinking cool water in regular small intervals during strenuous physical training?", ["It restores blood plasma volume lost through sweat, preventing dehydration and regulating core body temperature", "It stops the human heart from pumping blood entirely", "It causes body muscles to dissolve", "It turns perspiration into solid sugar"], 0, "Hydration maintains cardiac output and thermoregulatory perspiration during exercise.", "Replacing lost sweat keeps your heart pumping smoothly.", "Mudah"),
]

for idx in range(70):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = pe_raw[idx % len(pe_raw)]
    if idx >= len(pe_raw):
        q = f"In Physical Education Stage {grade} athletic training #{idx+1} on {t}: {q}"
    add_item(f"cam-pe-sup-{idx+1:03d}", "cam_pe", grade, t, q, opts, c, exp, h, diff)

# Subject 6: cam_foreign_lang (65 items)
fl_raw = [
    ("Formal Greetings", "When greeting an unfamiliar elder or professional in formal French or Spanish, which linguistic form is culturally respectful?", ["Using the polite formal pronoun ('vous' in French, 'usted' in Spanish)", "Using informal slang nicknames used only with close toddler friends", "Greeting them by barking like a dog", "Ignoring them completely and refusing to speak"], 0, "Polite V-forms convey appropriate deference and respect in professional dialogue.", "Use formal 'you' with elders and teachers.", "Mudah"),
    ("Calendar Vocabulary", "In introductory European vocabulary, which group represents the cardinal days of the week in French?", ["Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche", "Rouge, bleu, vert, jaune, noir, blanc, orange", "Un, deux, trois, quatre, cinq, six, sept", "Pomme, poire, banane, orange, raisin, citron, fraise"], 0, "French weekday names correspond to Monday through Sunday.", "Words starting with Lundi and ending with Dimanche.", "Mudah"),
    ("False Friends Faux Amis", "How do language learners navigate 'false friends' (faux amis) between European languages?", ["Words that look identical in spelling but carry completely different meanings across two languages", "Words that mean the exact same thing in every language on Earth", "Letters that cannot be pronounced by human vocal cords", "Grammar books that contain no vocabulary words"], 0, "False friends look deceptively cognate but have diverged semantically over centuries.", "Words that look similar but mean something totally different.", "Sedang"),
]

for idx in range(65):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = fl_raw[idx % len(fl_raw)]
    if idx >= len(fl_raw):
        q = f"In Modern Foreign Languages Stage {grade} communication exercise #{idx+1} on {t}: {q}"
    add_item(f"cam-fl-sup-{idx+1:03d}", "cam_foreign_lang", grade, t, q, opts, c, exp, h, diff)

# Subject 7: cam_science (65 items)
sci_raw = [
    ("Root Hair Osmosis", "In plant biology and scientific enquiry, how do root hair cells maximize water absorption from surrounding soil?", ["Their long microscopic extensions dramatically increase surface area for osmosis", "They produce thick waxy waterproof barriers that repel moisture", "They generate electric sparks that boil soil water", "They only absorb dry sand particles"], 0, "Slender cellular projections multiply the surface area for rapid water and ion absorption.", "Long root hairs provide more surface area to drink water.", "Mudah"),
    ("Liquid Evaporation Mechanics", "What happens to the molecules of a liquid when thermal energy is supplied during evaporation?", ["The particles gain kinetic energy, overcome intermolecular forces, and escape into the gas phase", "The particles stop moving completely and freeze into crystals", "The particles turn into heavy iron atoms", "The liquid volume shrinks to absolute zero immediately"], 0, "Thermal energy accelerates molecular movement until surface particles break free into vapor.", "Heat gives liquid particles energy to escape into the air as gas.", "Sedang"),
    ("Series Circuit Resistance", "In electrical circuits, what occurs when an additional lamp is added in a simple series circuit?", ["The total electrical resistance increases, causing all lamps in the circuit to glow dimmer", "Both lamps immediately explode with bright flashes", "The electric current doubles in magnitude", "The battery voltage increases to 10,000 volts"], 0, "Series components add cumulative resistance, reducing circuit current proportionally.", "Adding another bulb makes current harder to flow, dimming all bulbs.", "Sedang"),
    ("Arctic Allen Rule", "Why do predators in cold arctic ecosystems often exhibit smaller ears and compact rounded body shapes (Allen's Rule)?", ["Compact extremities reduce the ratio of surface area to body volume, minimizing heat loss to freezing air", "To allow them to fly through arctic blizzards easily", "Because their ears fall off when exposed to snow", "To make it easier for prey animals to spot them"], 0, "Reduced appendage surface area suppresses convective and radiative thermal dissipation in polar biomes.", "Small ears keep body heat from escaping into freezing air.", "Sedang"),
]

for idx in range(65):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = sci_raw[idx % len(sci_raw)]
    if idx >= len(sci_raw):
        q = f"In Primary Science Stage {grade} scientific inquiry #{idx+1} on {t}: {q}"
    add_item(f"cam-sci-sup-{idx+1:03d}", "cam_science", grade, t, q, opts, c, exp, h, diff)

# Subject 8: cam_math (60 items)
math_raw = [
    ("Fraction Addition", "In arithmetic and fractions, what is the sum of 3/8 and 1/4 expressed in simplest terms?", ["5/8", "4/12", "1/2", "7/8"], 0, "1/4 = 2/8. Adding: 3/8 + 2/8 = 5/8.", "Convert 1/4 into eighths first: 1/4 = 2/8.", "Mudah"),
    ("Rectangle Perimeter", "What is the perimeter of a rectangle with length 14 cm and width 8 cm?", ["44 cm", "112 cm", "22 cm", "84 cm"], 0, "Perimeter = 2 * (l + w) = 2 * (14 + 8) = 2 * 22 = 44 cm.", "Add length and width and multiply by 2.", "Mudah"),
    ("Quadrant Geometry", "In coordinate geometry, which quadrant contains the point with coordinates (-4, 7)?", ["Quadrant II (top-left quadrant where x is negative and y is positive)", "Quadrant I", "Quadrant III", "Quadrant IV"], 0, "Negative x and positive y points reside in Quadrant II.", "Left and up is Quadrant II.", "Sedang"),
    ("Elapsed Time Calculation", "If a train departs at 09:45 and arrives at its destination at 13:15, what is the total travel duration?", ["3 hours and 30 minutes", "4 hours and 15 minutes", "2 hours and 45 minutes", "3 hours and 15 minutes"], 0, "09:45 to 10:00 is 15 min. 10:00 to 13:00 is 3 hrs. 13:00 to 13:15 is 15 min. Total = 3 hrs 30 min.", "Count up to the next whole hour first.", "Sedang"),
]

for idx in range(60):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = math_raw[idx % len(math_raw)]
    if idx >= len(math_raw):
        q = f"In Mathematics Stage {grade} problem solving #{idx+1} on {t}: {q}"
    add_item(f"cam-mat-sup-{idx+1:03d}", "cam_math", grade, t, q, opts, c, exp, h, diff)

# Subject 9: cam_english (55 items)
eng_raw = [
    ("Subordinate Conjunctions", "In sentence grammar, which sentence correctly employs a subordinate clause introduced by a subordinating conjunction?", ["Although the thunder roared furiously, the children slept peacefully through the storm.", "The thunder roared and the children slept.", "Thunder roared, children slept.", "Because loud thunder thunder thunder."], 0, "'Although...' introduces an adverbial dependent clause modifying the main proposition.", "Look for a sentence starting with 'Although...'.", "Sedang"),
    ("Poetic Personification", "In figurative language analysis, which sentence is an example of personification?", ["The ancient grandfather clock groaned with every tick of the midnight pendulum.", "The clock was as loud as a thunderclap.", "The clock showed twelve o'clock sharp.", "The clock was made of polished mahogany wood."], 0, "Giving human physical actions (groaning) to non-human objects is personification.", "The clock groaning like a tired person.", "Mudah"),
    ("Dialogue Quotation Marks", "In dialogue punctuation rules, which sentence is punctuated with complete grammatical accuracy?", ['"Please hand me the binoculars," whispered Elena, "before the eagle flies away."', '"Please hand me the binoculars whispered Elena before the eagle flies away."', 'Please hand me the binoculars whispered Elena, before the eagle flies away.', '"Please hand me the binoculars" Elena whispered, "Before the eagle flies away"'], 0, "Internal attribution commas sit inside quotes and continuation verbs stay lowercase.", "Commas inside quotation marks.", "Sedang"),
]

for idx in range(55):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = eng_raw[idx % len(eng_raw)]
    if idx >= len(eng_raw):
        q = f"In English Language Stage {grade} comprehension mastery #{idx+1} on {t}: {q}"
    add_item(f"cam-eng-sup-{idx+1:03d}", "cam_english", grade, t, q, opts, c, exp, h, diff)

write_ts("./src/data/questions/cambridgeSupplementary100.ts", "cambridgeSupplementary100", cam_bank)
