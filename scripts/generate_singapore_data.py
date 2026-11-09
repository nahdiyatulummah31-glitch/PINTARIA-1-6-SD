import json

def get_singapore_items():
    items = []

    # 1. sg_math (65 items) - CPA Bar model, fractions, ratio, speed, decimals
    for i in range(1, 66):
        grade = ((i - 1) % 6) + 1
        topic = f"Singapore Math P{grade} Bar Model Heuristic {i}"
        if i % 4 == 1:
            q = f"In Singapore Math P{grade} CPA Model Method, Alan and Ben had $180 altogether. Alan had twice as much money as Ben. How much money did Alan have?"
            opts = ["$120", "$60", "$90", "$140"]
            exp = "Using the Comparison Bar Model: Ben has 1 unit, Alan has 2 units. Total = 3 units = $180. 1 unit = $60. Alan has 2 units = 2 x $60 = $120."
            hint = "Draw 1 bar for Ben and 2 equal bars for Alan. Total 3 bars equal $180."
        elif i % 4 == 2:
            q = f"In P{grade} Fractions and Decimals, what is the value of 3/5 expressed as a percentage and as a decimal?"
            opts = ["60% and 0.60", "35% and 0.35", "50% and 0.50", "75% and 0.75"]
            exp = "3/5 = (3 * 20)/(5 * 20) = 60/100 = 60% = 0.60."
            hint = "Multiply numerator and denominator by 20 to make the denominator 100."
        elif i % 4 == 3:
            q = f"A rectangular water container measures 25 cm long, 20 cm wide, and 12 cm high. What is its capacity in litres (P{grade})?"
            opts = ["6 litres", "60 litres", "3 litres", "12 litres"]
            exp = "Volume = length x width x height = 25 x 20 x 12 = 6,000 cm³. Since 1,000 cm³ = 1 litre, 6,000 / 1,000 = 6 litres."
            hint = "Multiply 25 x 20 x 12 to find volume in cm³, then divide by 1,000 to convert to litres."
        else:
            q = f"In P{grade} Ratio and Rate, the ratio of boys to girls in a robotics club is 3 : 5. If there are 30 girls, how many boys are in the club?"
            opts = ["18 boys", "15 boys", "24 boys", "20 boys"]
            exp = "5 units correspond to 30 girls. 1 unit = 30 / 5 = 6. Boys = 3 units = 3 x 6 = 18 boys."
            hint = "Find what 1 unit equals: 30 girls divided by 5 units = 6. Then multiply 3 units by 6."

        items.append({
            "id": f"sin-mat-sup-{i:03d}",
            "subject": "sg_math",
            "curriculum": "singapore",
            "grade": grade,
            "phase": f"Primary {grade}",
            "topic": topic,
            "question": q,
            "options": opts,
            "correctIndex": 0,
            "explanation": exp,
            "hint": hint,
            "difficulty": "Sedang" if grade in [3, 4] else "Mudah" if grade <= 2 else "Tantangan"
        })

    # 2. sg_science (75 items) - Diversity, Systems, Cycles, Energy, Interactions
    for i in range(1, 76):
        grade = ((i - 1) % 6) + 1
        topic = f"Singapore Science P{grade} Inquiry Theme {i}"
        if i % 4 == 1:
            q = f"In the Plant Transport System (P{grade}), what is the primary physiological function of the xylem vessels?"
            opts = ["To transport water and dissolved mineral salts upward from roots to leaves", "To transport manufactured food sugars from leaves down to storage roots", "To absorb sunlight for photosynthesis directly from air", "To produce flowers and seeds for reproduction"]
            exp = "Xylem tubes conduct water and minerals upward from the roots; phloem transports synthesized sugars bidirectionally."
            hint = "Xylem carries water up from the roots, like internal water pipes."
        elif i % 4 == 2:
            q = f"In Energy Conversion investigations (P{grade}), what transformation occurs when a flashlight bulb is switched on?"
            opts = ["Chemical potential energy in battery -> Electrical energy -> Light and Heat energy", "Light energy -> Kinetic energy -> Gravitational energy", "Sound energy -> Chemical potential energy -> Nuclear energy", "Heat energy -> Chemical potential energy -> Magnetic energy"]
            exp = "Battery chemical storage converts to electric current flowing through the filament, producing photons (light) and thermal dissipation (heat)."
            hint = "Chemicals in the battery create electrical current, which turns into bright light and warmth."
        elif i % 4 == 3:
            q = f"In Life Cycles (P{grade}), which organism undergoes a complete four-stage life cycle (Egg -> Larva -> Pupa -> Adult)?"
            opts = ["The mosquito (and butterfly)", "The grasshopper (nymph stages only)", "The cockroach", "The chicken"]
            exp = "Holometabolous insects like mosquitoes and butterflies develop through four distinct morphological stages."
            hint = "Egg, larva (wriggler/caterpillar), pupa (cocoon), and adult."
        else:
            q = f"In Interactions and Adaptations (P{grade}), how does a cactus's needle-like spines help it thrive in arid desert habitats?"
            opts = ["Spines minimize water loss through transpiration and defend stored stem water from herbivores", "Spines absorb rainwater directly from cloud fog", "Spines perform photosynthesis during cold nights", "Spines keep the desert soil freezing cold"]
            exp = "Reduced leaf surface area curbs stomatal transpiration while offering mechanical protection for water-storing succulent stems."
            hint = "Tiny needles lose much less water to hot dry air than broad green leaves."

        items.append({
            "id": f"sin-sci-sup-{i:03d}",
            "subject": "sg_science",
            "curriculum": "singapore",
            "grade": grade,
            "phase": f"Primary {grade}",
            "topic": topic,
            "question": q,
            "options": opts,
            "correctIndex": 0,
            "explanation": exp,
            "hint": hint,
            "difficulty": "Sedang" if grade in [3, 4] else "Mudah" if grade <= 2 else "Tantangan"
        })

    # 3. sg_english (62 items) - Synthesis, editing, vocabulary, comprehension
    for i in range(1, 63):
        grade = ((i - 1) % 6) + 1
        topic = f"Singapore English P{grade} Grammar & Synthesis {i}"
        if i % 4 == 1:
            q = f"In Sentence Synthesis & Transformation (P{grade}), combine: 'Mei Ling was feeling exhausted. She persevered to complete the marathon.' using 'Despite...'."
            opts = ["Despite feeling exhausted, Mei Ling persevered to complete the marathon.", "Despite she was exhausted, but Mei Ling completed the marathon.", "Mei Ling persevered despite because she was exhausted.", "Despite of feeling exhausted, Mei Ling ran fast."]
            exp = "'Despite' takes a gerund or noun phrase without 'of' and without using a redundant coordinating conjunction like 'but'."
            hint = "Use 'Despite' followed by the verb in '-ing' form (gerund): 'Despite feeling exhausted...'."
        elif i % 4 == 2:
            q = f"In Vocabulary in Context (P{grade}), what does the word 'meticulous' mean in: 'The engineer conducted a meticulous inspection of the bridge cables'?"
            opts = ["Showing great attention to detail, very careful, and thorough", "Careless, hurried, and negligent", "Extremely loud and disruptive", "Completely unconcerned and bored"]
            exp = "'Meticulous' describes rigorous, precise, and painstaking attention to minute details."
            hint = "Think about an inspector checking every single tiny detail carefully."
        elif i % 4 == 3:
            q = f"In Subject-Verb Agreement rules (P{grade}), which sentence is grammatically correct?"
            opts = ["Neither of the two candidates has submitted the required registration dossier.", "Neither of the two candidates have submitted their papers.", "Both candidate is ready to begin the contest.", "Every students in the room are studying quietly."]
            exp = "'Neither of' takes a singular verb ('has') when referring to individual entities in formal English."
            hint = "'Neither' refers to 'not one nor the other', taking the singular verb 'has'."
        else:
            q = f"In Idiomatic Expressions (P{grade}), what does it mean to 'leave no stone unturned'?"
            opts = ["To do everything possible in order to find something or solve a problem thoroughly", "To throw rocks into a river while hiking", "To stop looking for answers immediately", "To build a tall brick wall in a garden"]
            exp = "The idiom means searching comprehensively and exhausting every possible avenue of effort."
            hint = "Searching everywhere and trying every possibility."

        items.append({
            "id": f"sin-eng-sup-{i:03d}",
            "subject": "sg_english",
            "curriculum": "singapore",
            "grade": grade,
            "phase": f"Primary {grade}",
            "topic": topic,
            "question": q,
            "options": opts,
            "correctIndex": 0,
            "explanation": exp,
            "hint": hint,
            "difficulty": "Sedang" if grade in [3, 4] else "Mudah" if grade <= 2 else "Tantangan"
        })

    # 4. sg_cce (68 items) - Character & Citizenship Education (Resilience, Harmony, Care, Integrity)
    for i in range(1, 69):
        grade = ((i - 1) % 6) + 1
        topic = f"Singapore CCE P{grade} Value Reflection {i}"
        if i % 4 == 1:
            q = f"In Singapore Character and Citizenship Education (P{grade}), why is celebrating Racial Harmony Day on 21 July significant for every citizen?"
            opts = ["It reminds us to actively appreciate multicultural diversity and never take peace and unity for granted", "It is a day where everyone must stay home and avoid speaking to neighbors", "It commemorates a sports championship victory from 1965", "It requires all schools to cancel lessons permanently"]
            exp = "Racial Harmony Day commemorates lessons from the 1964 riots, fostering intercultural empathy and social cohesion."
            hint = "Remembering that racial and religious harmony requires mutual respect and constant care."
        elif i % 4 == 2:
            q = f"When applying the core value of 'Integrity' (P{grade}), what should a student do upon discovering a lost wallet containing $50 in the school canteen?"
            opts = ["Hand the wallet immediately to the school General Office or a teacher on duty", "Keep the cash quietly and hide the wallet inside their bag", "Spend the money immediately on snacks with classmates", "Throw the wallet into the waste bin so nobody finds it"]
            exp = "Integrity is doing the right moral action even when nobody is watching."
            hint = "Honesty and doing the right thing: surrender lost property to the General Office."
        elif i % 4 == 3:
            q = f"In Cyber Wellness education (P{grade}), what is the safest response if a stranger in an online multiplayer game asks for your home address and telephone number?"
            opts = ["Refuse to disclose any personal details, block the user, and report the interaction to a parent or teacher", "Give them your exact home address and family phone numbers immediately", "Invite the stranger to meet you alone in an unlit park after dark", "Share your school timetable and classroom room number"]
            exp = "Protecting personal identifiable information (PII) prevents grooming, identity exploitation, and online harassment."
            hint = "Never share private details online; tell an adult and block the stranger."
        else:
            q = f"How does demonstrating the core value of 'Care and Empathy' strengthen class harmony (P{grade})?"
            opts = ["By actively listening to peers who are troubled, showing kindness, and offering practical support", "By laughing at classmates when they make a mistake during a presentation", "By excluding quiet students from team activities at recess", "By spreading unverified gossip about friends across chat groups"]
            exp = "Empathy bridges social divides and builds a safe, supportive, and inclusive school community."
            hint = "Listening with kindness and helping classmates who need encouragement."

        items.append({
            "id": f"sin-cce-sup-{i:03d}",
            "subject": "sg_cce",
            "curriculum": "singapore",
            "grade": grade,
            "phase": f"Primary {grade}",
            "topic": topic,
            "question": q,
            "options": opts,
            "correctIndex": 0,
            "explanation": exp,
            "hint": hint,
            "difficulty": "Sedang" if grade in [3, 4] else "Mudah" if grade <= 2 else "Tantangan"
        })

    # 5. sg_social_studies (68 items) - Singapore history, Pioneers, Total Defence, NEWater
    for i in range(1, 69):
        grade = ((i - 1) % 6) + 1
        topic = f"Singapore Social Studies P{grade} Inquiry {i}"
        if i % 4 == 1:
            q = f"In Singapore's Water Story (P{grade}), what makes NEWater ultra-clean and resilient as a National Tap?"
            opts = ["Advanced dual-membrane microfiltration, reverse osmosis, and ultraviolet disinfection technologies", "Boiling seawater with open charcoal fires on beaches", "Collecting rainwater in rusty metal barrels without treatment", "Importing all water in disposable plastic bottles from overseas"]
            exp = "NEWater exceeds WHO standards by using multi-barrier membrane purification and high-intensity UV irradiation."
            hint = "Advanced membrane microfiltration and UV light make reclaimed water crystal pure."
        elif i % 4 == 2:
            q = f"Under Singapore's Total Defence framework (P{grade}), which pillar focuses on maintaining strong social cohesion and multicultural trust?"
            opts = ["Social Defence", "Military Defence", "Digital Defence", "Economic Defence"]
            exp = "Social Defence builds mutual trust and harmonious bonds across racial and religious groups in Singapore."
            hint = "Pillar focused on people of different backgrounds living together in harmony."
        elif i % 4 == 3:
            q = f"Why did Sir Stamford Raffles select Singapore as a British trading post in 1819 (P{grade})?"
            opts = ["Its strategic deep-water harbor along the Straits of Malacca shipping crossroads and natural freshwater supply", "Because it had zero maritime access to any ocean routes", "To build giant diamond mining facilities in the hills", "Because no trading ships had ever sailed through Southeast Asia"]
            exp = "Singapore occupied an ideal geographic nexus linking trade routes between India, China, and the Malay Archipelago."
            hint = "Strategic location along busy spice trade routes between the Indian Ocean and South China Sea."
        else:
            q = f"What was the significance of 9 August 1965 in Singapore's national history (P{grade})?"
            opts = ["Singapore separated from Malaysia and became an independent sovereign democratic republic", "Singapore was founded by Sang Nila Utama on that exact date", "The first MRT train line began passenger service", "Singapore hosted the Summer Olympic Games"]
            exp = "On 9 August 1965, Singapore proclaimed its sovereignty as an independent republic under Prime Minister Lee Kuan Yew."
            hint = "Singapore's National Day celebrating full independence as a nation."

        items.append({
            "id": f"sin-ss-sup-{i:03d}",
            "subject": "sg_social_studies",
            "curriculum": "singapore",
            "grade": grade,
            "phase": f"Primary {grade}",
            "topic": topic,
            "question": q,
            "options": opts,
            "correctIndex": 0,
            "explanation": exp,
            "hint": hint,
            "difficulty": "Sedang" if grade in [3, 4] else "Mudah" if grade <= 2 else "Tantangan"
        })

    # 6. sg_mother_tongue (68 items) - Cultural values, filial piety, heritage proverbs
    for i in range(1, 69):
        grade = ((i - 1) % 6) + 1
        topic = f"Mother Tongue & Heritage Values P{grade} Item {i}"
        if i % 4 == 1:
            q = f"In Asian cultural traditions taught in Singapore Mother Tongue curricula (P{grade}), what core virtue does 'Filial Piety' embody?"
            opts = ["Respecting, caring for, and honoring parents and elders with sincere devotion throughout life", "Disobeying family elders and ignoring household responsibilities", "Demanding that grandparents complete all school homework", "Refusing to communicate with family members during festive reunions"]
            exp = "Filial piety is foundational across Chinese (孝), Malay, and Indian family systems, emphasizing gratitude to parents."
            hint = "Honoring, respecting, and caring for parents and grandparents."
        elif i % 4 == 2:
            q = f"During the Mid-Autumn Festival celebrated in Singapore (P{grade}), what do traditional round mooncakes and lanterns symbolize?"
            opts = ["Family completeness, reunion, and gratitude under the full harvest moon", "The start of winter snow blizzards in the tropics", "A signal for ships to stay away from Singapore harbor", "A celebration of modern high-speed expressways"]
            exp = "The round shape of mooncakes and the full moon signifies harmony, unity, and family togetherness."
        elif i % 4 == 3:
            q = f"In Malay cultural etiquette (Budi Bahasa) (P{grade}), what gesture demonstrates profound respect when greeting elders (Salam)?"
            opts = ["Taking the elder's hand gently between both hands and bringing it toward one's forehead or chest with reverence", "Shouting loudly across the living room without greeting", "Turning one's back and running away into the street", "Waving dismissively with one finger"]
            exp = "The traditional Salam conveys humility, filial affection, and sincere goodwill between generations."
            hint = "Gently taking the elder's hand to your chest or forehead with respect."
        else:
            q = f"During Deepavali (the Festival of Lights) celebrated by the Indian community in Singapore (P{grade}), what do lighted oil lamps (diyas) signify?"
            opts = ["The triumph of light over darkness, wisdom over ignorance, and righteousness over evil", "The arrival of monsoon flood tides in residential estates", "A warning to turn off all electricity across the island", "A competition to see who can make the loudest noise"]
            exp = "Diyas illuminate homes to welcome prosperity, symbolizing moral enlightenment and spiritual triumph."
            hint = "Victory of light and goodness over darkness and ignorance."

        items.append({
            "id": f"sin-mt-sup-{i:03d}",
            "subject": "sg_mother_tongue",
            "curriculum": "singapore",
            "grade": grade,
            "phase": f"Primary {grade}",
            "topic": topic,
            "question": q,
            "options": opts,
            "correctIndex": 0,
            "explanation": exp,
            "hint": hint,
            "difficulty": "Sedang" if grade in [3, 4] else "Mudah" if grade <= 2 else "Tantangan"
        })

    # 7. sg_art (68 items) - Singapore pioneer artists, heritage architecture, batik
    for i in range(1, 69):
        grade = ((i - 1) % 6) + 1
        topic = f"Singapore Art Education P{grade} Appreciation {i}"
        if i % 4 == 1:
            q = f"In Singapore Art History (P{grade}), pioneer artist Georgette Chen is celebrated internationally for her exquisite paintings depicting:"
            opts = ["Vibrant still-life paintings of tropical Southeast Asian fruits (rambutans, mangosteens) and warm portraits", "Abstract black and white metal sculptures of skyscrapers", "Cartoon comic strips printed in daily newspapers", "Photographs taken with underwater digital cameras"]
            exp = "Georgette Chen's Nanyang style masterfully merged Parisian post-impressionism with tropical Southeast Asian subjects."
            hint = "Colorful still-life oil paintings of tropical local fruits like rambutans and mangosteens."
        elif i % 4 == 2:
            q = f"In traditional Peranakan architecture found in Katong and Joo Chiat (P{grade}), what decorative feature adorns exterior shophouse walls?"
            opts = ["Glazed ceramic relief majolica tiles featuring colorful floral and auspicious geometric motifs", "Walls made entirely of plain grey unpainted cinderblocks", "Walls covered in rough industrial sandpaper", "Exterior walls with zero windows or decorations"]
            exp = "Peranakan heritage shophouses are iconic for their ornate imported ceramic tiles, carved timber louvers, and pastel facades."
            hint = "Colorful glazed ceramic tiles with lovely floral patterns on shophouse walls."
        elif i % 4 == 3:
            q = f"In traditional Malay and Southeast Asian textile art (P{grade}), how does the wax-resist Batik process create intricate patterns?"
            opts = ["Melted wax is drawn using a canting tool to block dye from penetrating specific fabric sections", "Fabric is spray-painted with aerosol cans in minutes", "Patterns are stamped with hot melted chocolate that washes away", "Cloth is cut into tiny confetti shreds and glued together"]
            exp = "Hot wax seals fabric pores; when submerged in cold dye baths, only unwaxed fibers absorb the pigment."
            hint = "Melted wax protects the cloth so the colored dye cannot soak into the waxed lines."
        else:
            q = f"In 3D sculpture and spatial art (P{grade}), how did Singapore sculptor Chong Fah Cheong capture joyful childhood memory in 'First Generation' along the Singapore River?"
            opts = ["Five bronze statues of lively boys joyfully leaping naked into the clean river waters", "A solid stone cube with no human figures", "A giant steel flagpole without any flags", "A model of an airplane resting on concrete"]
            exp = "'First Generation' immortalizes Singapore's river heritage and carefree youth diving into the historic waterway."
            hint = "Bronze statues of boys jumping and diving into the Singapore River."

        items.append({
            "id": f"sin-art-sup-{i:03d}",
            "subject": "sg_art",
            "curriculum": "singapore",
            "grade": grade,
            "phase": f"Primary {grade}",
            "topic": topic,
            "question": q,
            "options": opts,
            "correctIndex": 0,
            "explanation": exp,
            "hint": hint,
            "difficulty": "Sedang" if grade in [3, 4] else "Mudah" if grade <= 2 else "Tantangan"
        })

    # 8. sg_music (68 items) - National songs, Gamelan, Chinese orchestra, Carnatic
    for i in range(1, 69):
        grade = ((i - 1) % 6) + 1
        topic = f"Singapore Music P{grade} Harmony {i}"
        if i % 4 == 1:
            q = f"In Singapore National and Community Music (P{grade}), who composed the iconic national song 'Home' (1998) beloved across generations?"
            opts = ["Dick Lee", "Zubir Said", "Jeremy Monteiro", "Stefanie Sun"]
            exp = "'Home' was composed by Dick Lee and performed by Kit Chan, becoming an enduring emblem of national identity."
            hint = "Renowned Singaporean songwriter and cultural medallion recipient Dick Lee."
        elif i % 4 == 2:
            q = f"In traditional Malay musical ensembles (P{grade}), what percussion performance art features interlocking syncopated handclaps and rhythmic choral singing?"
            opts = ["Dikir Barat", "Heavy metal rock guitar", "Solo operatic aria singing", "Marching brass band bagpipes"]
            exp = "Dikir Barat combines vibrant choral singing, Tok Juara leadership, and synchronized seated hand movements."
            hint = "Traditional seated choral singing with lively clapping and rhythmic body movements."
        elif i % 4 == 3:
            q = f"In a Chinese traditional orchestra (Huayue Tuan) (P{grade}), which bowed string instrument functions as the lead melodic voice analogous to the violin?"
            opts = ["The Erhu (two-stringed bowed spike fiddle)", "The Pipa (four-stringed plucked lute)", "The Guzheng (plucked zither)", "The Dizi (bamboo transverse flute)"]
            exp = "The Erhu's expressive snakeskin soundbox and horsehair bow produce rich expressive singing lines in Chinese ensembles."
            hint = "The famous two-stringed bowed instrument of the Chinese orchestra."
        else:
            q = f"In the traditional Gamelan orchestra shared across the region (P{grade}), what instrument sets the overarching rhythmic cycle and tempo markers?"
            opts = ["The large bronze hanging Gong Ageng", "The electric bass guitar", "The plastic triangle bell", "The wooden classroom xylophone"]
            exp = "The deep resonance of the Gong Ageng marks the colossal structural colotomic cycle in traditional Gamelan pieces."
            hint = "The largest bronze hanging gong whose deep boom marks the end of each big musical cycle."

        items.append({
            "id": f"sin-mus-sup-{i:03d}",
            "subject": "sg_music",
            "curriculum": "singapore",
            "grade": grade,
            "phase": f"Primary {grade}",
            "topic": topic,
            "question": q,
            "options": opts,
            "correctIndex": 0,
            "explanation": exp,
            "hint": hint,
            "difficulty": "Sedang" if grade in [3, 4] else "Mudah" if grade <= 2 else "Tantangan"
        })

    # 9. sg_pe (75 items) - NAPFA, My Healthy Plate, game concepts, fitness
    for i in range(1, 76):
        grade = ((i - 1) % 6) + 1
        topic = f"Singapore Physical Education P{grade} Fitness & Game Concept {i}"
        if i % 4 == 1:
            q = f"In the Health Promotion Board's 'My Healthy Plate' guidelines (P{grade}), what proportion of your plate should be filled with fruits and vegetables at each meal?"
            opts = ["Half of the plate (1/2 filled with colorful fruits and vegetables)", "One tiny tablespoon only", "Zero vegetables at every meal", "Ten percent of the plate"]
            exp = "My Healthy Plate recommends: 1/2 fruits and vegetables, 1/4 whole-grains, and 1/4 good meat and protein."
            hint = "Fill half your plate with delicious fresh fruits and vegetables."
        elif i % 4 == 2:
            q = f"In the NAPFA (National Physical Fitness Award) test protocol (P{grade}), what fitness component is evaluated by the Sit-and-Reach test?"
            opts = ["Flexibility of the lower back and hamstring muscle groups", "Maximum throwing strength of the shoulders", "Explosive jumping power of the calves", "Cardiovascular running endurance over long distances"]
            exp = "Sit-and-Reach measures trunk flexion and posterior chain flexibility, which helps prevent lower back strain."
            hint = "Reaching forward past your toes tests how flexible your hamstrings and back are."
        elif i % 4 == 3:
            q = f"In Net-Barrier games like Badminton and Volleyball (P{grade}), why is returning to the 'base position' (center court) after hitting a shot essential?"
            opts = ["It places you equidistant from all court corners, allowing you to react quickly to the opponent's next return", "It lets you rest against the umpire chair and drink water", "It ensures you are standing directly out of bounds", "It makes it impossible to see the shuttlecock"]
            exp = "Recovering to central base position maximizes defensive coverage and reduces reaction time across the court."
            hint = "Standing in the middle of your court helps you reach shots on the left, right, front, or back."
        else:
            q = f"Why is applying Sun Protection (sunscreen, broad-brimmed hats, hydration) mandatory during outdoor PE lessons in Singapore's tropical climate (P{grade})?"
            opts = ["To prevent painful sunburn, harmful UV radiation damage, and reduce the risk of heat exhaustion", "To make running five times more difficult for students", "Because sunscreen makes students run ten times faster", "To turn sweat into cold ice cubes on skin"]
            exp = "Singapore experiences extreme UV indices year-round; sun protection shields cellular DNA and avoids thermal illness."
            hint = "Sunscreen and hats protect young skin from harsh tropical sunburn and heat stress."

        items.append({
            "id": f"sin-pe-sup-{i:03d}",
            "subject": "sg_pe",
            "curriculum": "singapore",
            "grade": grade,
            "phase": f"Primary {grade}",
            "topic": topic,
            "question": q,
            "options": opts,
            "correctIndex": 0,
            "explanation": exp,
            "hint": hint,
            "difficulty": "Sedang" if grade in [3, 4] else "Mudah" if grade <= 2 else "Tantangan"
        })

    # 10. sg_computing (68 items) - Digital Literacy, Cyber wellness, Scratch, computational thinking
    for i in range(1, 69):
        grade = ((i - 1) % 6) + 1
        topic = f"Singapore Digital Literacy P{grade} Mastery {i}"
        if i % 4 == 1:
            q = f"In Baseline ICT Skills (P{grade}), how does proper keyboard ergonomics (sitting upright, feet flat, elbows at 90 degrees) protect young students?"
            opts = ["It prevents repetitive strain injuries, eye fatigue, and promotes healthy spinal alignment during computer work", "It makes the computer processor operate twenty times faster", "It causes computer screens to turn off automatically", "It prevents computers from connecting to the school Wi-Fi network"]
            exp = "Ergonomic posture minimizes musculoskeletal strain on developing spines and wrists during digital learning."
            hint = "Sitting upright with straight wrists keeps your neck and back healthy while typing."
        elif i % 4 == 2:
            q = f"In Scratch Block Programming (P{grade}), what happens when an instruction block is placed inside a 'forever' loop block?"
            opts = ["The enclosed sequence of commands repeats continuously without stopping until the program is paused or stopped", "The sprite vanishes from the stage permanently after one millisecond", "The computer restarts the operating system immediately", "The script runs once and then deletes itself"]
            exp = "An infinite loop executes repeatedly during program runtime unless interrupted by a break event."
            hint = "The instructions inside keep repeating again and again without stopping."
        elif i % 4 == 3:
            q = f"In Digital Footprint awareness (P{grade}), why must students recognize that online comments and photos are semi-permanent?"
            opts = ["Digital records can be copied, screenshotted, and archived, lingering even after the original post is deleted", "Everything posted on the internet disappears completely after five minutes", "Nobody on the internet can ever read what you post", "Deleting an app removes all internet data worldwide"]
            exp = "Digital footprints persist across servers and screenshots, emphasizing the necessity of responsible netiquette."
            hint = "Once you post something online, other people can screenshot and save it forever."
        else:
            q = f"In Phishing Awareness (P{grade}), which email characteristic strongly warns that a message is a malicious scam?"
            opts = ["Urgent threatening language demanding your account password with an unverified strange web link", "An official message from your school teacher on your school learning portal", "A reminder about homework from your class group", "An email that contains no links and no attachments"]
            exp = "Phishing relies on fabricated urgency and spoofed URLs to trick victims into divulging sensitive credentials."
            hint = "Suspicious strange links asking urgently for your secret passwords."

        items.append({
            "id": f"sin-comp-sup-{i:03d}",
            "subject": "sg_computing",
            "curriculum": "singapore",
            "grade": grade,
            "phase": f"Primary {grade}",
            "topic": topic,
            "question": q,
            "options": opts,
            "correctIndex": 0,
            "explanation": exp,
            "hint": hint,
            "difficulty": "Sedang" if grade in [3, 4] else "Mudah" if grade <= 2 else "Tantangan"
        })

    return items

def write_ts_file(filepath, var_name, items):
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
    print(f"Generated {filepath} with {len(items)} questions.")

sg_items = get_singapore_items()
write_ts_file("./src/data/questions/singaporeSupplementary100.ts", "singaporeSupplementary100", sg_items)
