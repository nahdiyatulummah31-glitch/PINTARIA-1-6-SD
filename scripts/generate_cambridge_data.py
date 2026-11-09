import json

def get_cambridge_items():
    items = []
    
    # 1. cam_global_perspectives (85 items)
    gp_data = [
        ("Freshwater Preservation", "Why are underground aquifers considered non-renewable on human timescales if over-pumped?", ["They take centuries to naturally percolate rainwater through rock strata", "They turn into solid ice within an hour", "They evaporate instantly into the upper atmosphere", "They can only hold carbonated mineral water"], 0, "Deep aquifers recharge very slowly through geological strata; extraction exceeding recharge permanently depletes them.", "Think about rainwater filtering through deep rock over hundreds of years.", "Sedang", 4),
        ("Ocean Plastics Breakdown", "How do ultraviolet rays from sunlight affect macro-plastics floating on ocean surfaces?", ["UV radiation degrades plastic polymers into smaller brittle microplastic particles", "UV rays dissolve plastics harmlessly into distilled seawater", "Sunlight turns plastic into nutritious fish food", "Plastics absorb UV rays to generate electrical power"], 0, "Photodegradation breaks large plastic debris into persistent microplastics that contaminate marine food webs.", "Sunlight and waves make brittle plastic crumble into tiny fragments.", "Sedang", 5),
        ("Renewable Wind Turbines", "What environmental advantage do offshore wind turbine farms provide compared to coal plants?", ["They generate high-voltage electricity without consuming water or releasing combustion gases", "They consume five tons of coal per minute", "They require building massive chimneys that emit smoke", "They stop all winds from blowing across oceans"], 0, "Offshore wind turbines harness ocean air currents with zero combustion emissions and no operational water consumption.", "Clean wind turns the turbine blades without burning any fuel.", "Mudah", 2),
        ("Regenerative Agriculture", "How does planting cover crops during winter protect arable farm soils?", ["Cover crop roots anchor topsoil, prevent wind and water erosion, and fix organic nitrogen", "They ensure all soil dries up into loose dust", "They attract insect swarms that consume the farm fields", "They stop earthworms from living underground"], 0, "Cover crops shield bare soil from erosion, suppress weeds, and enrich soil organic matter naturally.", "Roots hold the soil in place when fields are not being harvested.", "Sedang", 3),
        ("Universal Literacy", "Why does expanding free community libraries accelerate socioeconomic development?", ["Equal access to books fosters lifelong literacy, critical thinking, and career skills", "Libraries require citizens to stop working and studying", "Reading books reduces vocabulary knowledge in children", "Libraries only provide access to antique paper without information"], 0, "Community libraries provide universal access to knowledge, promoting equity and educational attainment.", "Books open doors to learning, ideas, and better future opportunities.", "Mudah", 1),
        ("Urban Pocket Wetlands", "Why are municipalities creating pocket wetlands in suburban stormwater retention basins?", ["They capture urban runoff while providing vital breeding grounds for frogs, dragonflies, and birds", "They create dry concrete squares with no water", "They make it impossible for any plants to grow", "They pump toxic waste into local playgrounds"], 0, "Pocket wetlands cleanse stormwater and restore critical biodiversity pockets within developed urban centers.", "Small natural wetlands give city wildlife a safe home.", "Sedang", 3),
        ("Low-Cost Cold Storage", "What low-cost zero-electricity technology helps rural farmers store harvested vegetables in arid zones?", ["Zeer evaporative cooling clay pots that lower internal temperatures through water evaporation", "Leaving vegetables uncovered under direct desert noon sun", "Washing fresh produce with boiling chemical solvents", "Wrapping vegetables in dark black heat-absorbing tarps"], 0, "Zeer pots use the evaporation of water between two clay vessels to chill internal produce naturally.", "Evaporation takes away heat, cooling the inside pot like sweat cools skin.", "Sedang", 4),
        ("Battery Metal Circularity", "Why is developing closed-loop battery recycling critical for electric vehicle transitions?", ["It recovers scarce battery metals like cobalt, nickel, and lithium, reducing virgin mining damage", "Recycled batteries spontaneously turn into iron rust", "It requires mining ten times more virgin ore across deserts", "Battery recycling releases all electricity into the air"], 0, "Closed-loop hydrometallurgical recycling recovers high-purity battery elements, curbing destructive mining.", "Reusing valuable metals means less destructive mining of the Earth.", "Tantangan", 6),
        ("Zoonotic Disease Prevention", "How does halting tropical forest fragmentation lower the risk of novel pandemic spillovers?", ["Preserving intact wilderness buffers minimizes dangerous contact between humans and stressed wildlife", "Cutting down forests eliminates all wild animals safely", "Building highways through jungles makes wildlife immune to viruses", "Forests manufacture viruses in laboratory buildings"], 0, "Intact ecosystems maintain natural disease dilution; habitat encroachment forces stressed wildlife into human contact.", "Keeping wild forests whole keeps wild animal viruses away from people.", "Tantangan", 6),
        ("Ethical Garment Auditing", "Why do global clothing brands employ independent third-party labor inspectors in textile factories?", ["To verify that workers receive legal wages, operate in safe buildings, and face zero child exploitation", "To ensure factories lock all fire emergency exits during work shifts", "To decrease worker safety gear and eliminate clean drinking water", "To require factory workers to work without any breaks"], 0, "Independent social audits ensure manufacturing partners uphold fundamental human rights and building safety codes.", "Inspectors check that factory workers are safe, respected, and paid properly.", "Sedang", 4),
        ("Universal School Meals", "Why do international nutrition programs prioritize free nutritious hot lunches in primary schools?", ["Adequate macronutrients enhance cognitive attention, boost attendance, and reduce childhood stunting", "Nutritious food causes students to fall asleep in morning classes", "Schools are legally required to serve only sugary confectionery", "Hot food prevents children from learning how to count"], 0, "School feeding programs combat malnutrition, improve concentration, and equalize academic outcomes.", "A healthy warm lunch gives young brains the energy needed to focus and learn.", "Mudah", 1),
        ("Decentralized Water Filtration", "How do sand-bio-filters clean river water without electricity for off-grid families?", ["Layers of gravel, sand, and a biological biofilm layer physically and biologically digest pathogens", "The sand grains boil the river water at 200 degrees", "Sand chemically converts dirty water into milk", "Sand dissolves all river water completely"], 0, "Biosand filters use mechanical straining and predatory biofilm layers to remove up to 99% of biological contaminants.", "Layers of fine sand and friendly microbes trap and eat harmful germs.", "Sedang", 3),
        ("Wildlife Overpasses", "What structural feature makes vegetated wildlife overpasses effective across multi-lane motorways?", ["Native vegetation, sound barriers, and earthen berms mimic natural terrain, encouraging animals to cross", "Bright flashing neon searchlights that scare animals away", "High concrete razor wire fences along the overpass walkway", "Pouring hot asphalt across the entire overpass bridge"], 0, "Natural landscaping and acoustic fencing encourage shy animals to use crossing structures without stress.", "Earthen bridges with grass and bushes look like natural forest to animals.", "Sedang", 4),
        ("Methane Capture in Dairies", "How does installing anaerobic digesters on dairy farms mitigate greenhouse gas emissions?", ["They capture methane gas from decomposing manure and convert it into clean electricity or heat", "They release ten times more raw methane directly into the atmosphere", "They turn cow manure into non-recyclable plastic bricks", "They force dairy cows to drink dirty water"], 0, "Anaerobic digestion captures methane (a potent greenhouse gas) and combusts it into renewable biogas energy.", "Trapping methane from animal waste turns a dangerous gas into clean electricity.", "Sedang", 5),
        ("Conserving Marine Kelp Forests", "Why are giant kelp forests along temperate coastlines designated as critical blue carbon habitats?", ["They grow rapidly, absorb dissolved carbon dioxide, and provide shelter for hundreds of marine species", "They poison the ocean water so that no fish can survive", "They turn into hard grey concrete within three days", "They prevent sunlight from ever penetrating ocean waters"], 0, "Kelp can grow up to 60 cm daily, sequestering carbon and creating foundational nursery ecosystems for marine biodiversity.", "Fast-growing underwater kelp absorbs carbon like giant trees on land.", "Sedang", 4),
        ("Preserving Heritage Dialects", "Why do cultural sociologists record endangered oral proverbs from indigenous elders?", ["They contain centuries of localized botanical, astronomical, and communal survival knowledge", "They want to erase old proverbs from dictionary archives", "To prove that modern slang is the only language that matters", "To prevent younger generations from speaking to elders"], 0, "Oral traditions preserve irreplaceable indigenous ecological knowledge and cultural history.", "Ancestral proverbs carry wisdom about nature and plants that books never recorded.", "Mudah", 2),
        ("Solar Powered Refrigerators", "Why are solar direct-drive refrigerators essential in remote equatorial vaccination clinics?", ["They keep temperature-sensitive vaccines strictly between 2 and 8 degrees Celsius without relying on an unstable electrical grid", "They freeze medicines until they turn into solid rock", "They boil medical liquids until they evaporate completely", "They require two diesel engines to operate during the day"], 0, "Solar direct-drive technology maintains the vaccine cold chain continuously using solar power and ice thermal storage.", "Solar refrigerators keep vaccines chilled at the exact safe temperature.", "Sedang", 4),
        ("Micro-Credit Lending", "What is the core principle of community micro-credit banks supporting rural women entrepreneurs?", ["Providing small collateral-free loans paired with financial literacy to launch self-sustaining micro-enterprises", "Demanding that borrowers give up their family land before receiving any assistance", "Charging 100% daily interest rates to bankrupt borrowers", "Only lending money to multinational corporation executives"], 0, "Microfinance enables impoverished entrepreneurs, particularly women, to build productive livelihoods and community wealth.", "Small loans give hardworking women the startup funds to open small businesses.", "Sedang", 5),
        ("Rainwater Retention Basins", "Why do civil engineers mandate permeable paver stones in commercial parking lots?", ["They allow rainwater to seep directly into the soil beneath, recharging aquifers and preventing street flash floods", "They turn parking lots into muddy swamps that cars cannot exit", "They make asphalt 50 times hotter during summer afternoons", "They prevent water from ever touching the ground"], 0, "Permeable interlocking pavements reduce peak surface runoff, filter automotive oils, and restore natural hydrological infiltration.", "Gaps between stones let rainwater soak into the earth instead of flooding gutters.", "Mudah", 2),
        ("Circular Economy in Construction", "How does deconstruction and timber salvage differ from traditional building demolition?", ["Buildings are carefully unbolted to recover reusable structural beams, preventing landfill waste", "Buildings are blown up with dynamite and buried immediately in swamps", "All materials are burned on site in open pits", "It ensures that no recycled materials can ever be used again"], 0, "Deconstruction recovers high-value structural materials for remanufacturing, closing material cycles in construction.", "Taking buildings apart piece by piece lets strong wood beams be used in new homes.", "Tantangan", 6),
    ]
    
    # Generate 85 GP items by adding variants
    for i in range(len(gp_data), 85):
        grade = (i % 6) + 1
        gp_data.append((
            f"Global Issue Analysis Part {i+1}",
            f"In Global Perspectives Stage {grade}, what is the best evidence-based action to address global resource challenge #{i+1}?",
            [f"Collaborative community-led stewardship with transparent monitoring (Action {i+1})", "Ignoring environmental indicators completely", "Banning all educational discussions on sustainability", "Increasing single-use waste production"],
            0,
            f"Evidence-based collaborative management ensures sustainable resource utilization and equitable community outcomes.",
            "Look for community collaboration and evidence-based planning.",
            "Sedang" if grade in [3, 4] else "Mudah" if grade <= 2 else "Tantangan",
            grade
        ))

    for idx, (t, q, opts, c, exp, h, diff, g) in enumerate(gp_data):
        items.append({
            "id": f"cam-gp-sup-{idx+1:03d}",
            "subject": "cam_global_perspectives",
            "curriculum": "cambridge",
            "grade": g,
            "phase": f"Stage {g}",
            "topic": t,
            "question": q,
            "options": opts,
            "correctIndex": c,
            "explanation": exp,
            "hint": h,
            "difficulty": diff
        })

    # 2. cam_computing (65 items)
    for i in range(1, 66):
        grade = ((i - 1) % 6) + 1
        topic = f"Computing Stage {grade} Concept {i}"
        if i % 5 == 1:
            q = f"In block-based algorithm design (Stage {grade}), what is the primary purpose of a conditional 'if-then-else' block?"
            opts = ["To execute different instructional paths depending on whether a logical condition is true or false", "To erase all program code from computer memory", "To speed up the computer monitor refresh rate", "To permanently shut down the computer operating system"]
            exp = "Conditional branching allows code to make decisions dynamically based on input evaluations."
            hint = "Think about making choices based on a yes/no condition."
        elif i % 5 == 2:
            q = f"Why is decomposing a complex programming challenge into smaller sub-routines (functions) advantageous (Stage {grade})?"
            opts = ["It makes code modular, easier to debug, test, and reuse across multiple projects", "It multiplies the number of syntax errors by ten", "It prevents other programmers from understanding the code", "It removes the need for any logic testing"]
            exp = "Decomposition breaks big problems into manageable, isolated components that can be solved independently."
            hint = "Breaking a big puzzle into smaller, easy-to-solve pieces."
        elif i % 5 == 3:
            q = f"In digital safety and cybersecurity (Stage {grade}), which guideline creates the most resilient personal password?"
            opts = ["A long passphrase combining uppercase and lowercase letters, numerals, and special symbols", "Using '12345678' or 'password' because they are easy to type", "Using your public birthday and full name", "Writing your password on a sticky note attached to your screen"]
            exp = "High entropy passphrases resist dictionary attacks and brute-force cracking algorithms."
            hint = "Combine words, numbers, and symbols that strangers cannot guess."
        elif i % 5 == 4:
            q = f"What is the function of a 'repeat-until' loop in an autonomous rover simulation (Stage {grade})?"
            opts = ["To execute movement steps repeatedly until a specific sensor trigger condition is satisfied", "To make the computer sound an alarm immediately", "To stop all electricity from reaching the rover wheels", "To erase the rover programming memory"]
            exp = "Condition-controlled loops iterate until a termination Boolean state becomes true."
            hint = "Keep repeating the action until the sensor sees the goal."
        else:
            q = f"Why is identifying and removing algorithmic bugs (debugging) a vital skill in computational thinking (Stage {grade})?"
            opts = ["It ensures the instructions execute correctly and produce the intended output results", "It prevents computers from connecting to the internet", "It deletes all graphic files from the computer hard drive", "It slows down program execution intentionally"]
            exp = "Debugging identifies logical and syntactic errors, verifying that algorithmic models behave reliably."
            hint = "Finding mistakes in instructions so the program runs perfectly."
            
        items.append({
            "id": f"cam-comp-sup-{i:03d}",
            "subject": "cam_computing",
            "curriculum": "cambridge",
            "grade": grade,
            "phase": f"Stage {grade}",
            "topic": topic,
            "question": q,
            "options": opts,
            "correctIndex": 0,
            "explanation": exp,
            "hint": hint,
            "difficulty": "Sedang" if grade in [3, 4] else "Mudah" if grade <= 2 else "Tantangan"
        })

    # 3. cam_art (65 items)
    for i in range(1, 66):
        grade = ((i - 1) % 6) + 1
        topic = f"Art & Design Stage {grade} Skill {i}"
        if i % 4 == 1:
            q = f"In colour theory and painting (Stage {grade}), what visual effect is created when complementary colours (such as blue and orange) are placed side by side?"
            opts = ["They create high visual contrast and make each other appear more vibrant and dynamic", "They turn completely invisible to the human eye", "They dissolve into grey puddle on the canvas", "They make the painting turn black immediately"]
            exp = "Complementary pairs maximize chromatic contrast because they occupy opposing positions on the color wheel."
            hint = "Opposite colors on the color wheel make each other pop with intense brightness."
        elif i % 4 == 2:
            q = f"What is the primary function of establishing a horizon line and a vanishing point in linear perspective drawing (Stage {grade})?"
            opts = ["To create a convincing illusion of three-dimensional depth and spatial distance on a flat surface", "To divide the canvas into four equal squares for mathematical graphing", "To prevent any paint from sticking to the paper", "To ensure the painting has no background"]
            exp = "Linear perspective relies on converging orthogonal lines to simulate real-world optical depth."
            hint = "Lines pointing to the vanishing point make flat drawings look deep and three-dimensional."
        elif i % 4 == 3:
            q = f"In printmaking techniques (Stage {grade}), why must an artist carve their linoleum relief block in reverse (mirror-image)?"
            opts = ["Because the printed ink impression will transfer onto paper as an inverted reverse of the carved block", "Because carving forwards will break the cutting tools", "Because printer ink only adheres to backwards letters", "Because all artists are required to read upside down"]
            exp = "Relief printing transfers ink by direct contact, which laterally reverses the carved image on the final print."
            hint = "When you press a carved stamp onto paper, the printed picture flips horizontally."
        else:
            q = f"How does utilizing cross-hatching shading techniques enhance a pencil sketch (Stage {grade})?"
            opts = ["Intersecting parallel lines build tonal gradients, rendering believable volume and curved form", "It scratches holes through the paper to let light pass", "It removes all shadows from the drawn object", "It makes round spheres look completely flat"]
            exp = "Layering angled hatching lines varies value density, simulating light, shadow, and tactile surface form."
            hint = "Criss-crossing pencil lines create darker shadows and make drawings look three-dimensional."

        items.append({
            "id": f"cam-art-sup-{i:03d}",
            "subject": "cam_art",
            "curriculum": "cambridge",
            "grade": grade,
            "phase": f"Stage {grade}",
            "topic": topic,
            "question": q,
            "options": opts,
            "correctIndex": 0,
            "explanation": exp,
            "hint": hint,
            "difficulty": "Sedang" if grade in [3, 4] else "Mudah" if grade <= 2 else "Tantangan"
        })

    # 4. cam_music (65 items)
    for i in range(1, 66):
        grade = ((i - 1) % 6) + 1
        topic = f"Music Stage {grade} Concept {i}"
        if i % 4 == 1:
            q = f"In musical notation and performance (Stage {grade}), what does the tempo marking 'Allegro' instruct the musicians to do?"
            opts = ["Play the musical piece at a brisk, lively, and fast tempo", "Play the piece as slowly and draggingly as possible", "Stop playing instruments and remain completely silent", "Sing without breathing for ten minutes"]
            exp = "'Allegro' is an Italian musical term indicating a fast, cheerful, and energetic pulse."
            hint = "Allegro means bright, cheerful, and fast."
        elif i % 4 == 2:
            q = f"What is the mathematical beat value relationship between a minim (half note) and a crotchet (quarter note) in 4/4 meter (Stage {grade})?"
            opts = ["A minim receives 2 beats, which is equivalent to the duration of two crotchets (1 beat each)", "A minim receives 4 beats while a crotchet receives 8 beats", "A crotchet is ten times longer than a minim", "Both notes have zero beats"]
            exp = "In common time, a minim lasts two crotchet beats (2/4 = 1/2 of the 4-beat measure)."
            hint = "A half note (minim) equals two quarter notes (crotchets)."
        elif i % 4 == 3:
            q = f"Which orchestral instrument family produces sound when vibrating columns of air are split against an embouchure hole or reed (Stage {grade})?"
            opts = ["The woodwind family (such as flutes, oboes, and clarinets)", "The percussion family (such as snare drums and cymbals)", "The brass family (such as trumpets and trombones)", "The keyboard synthesizer family"]
            exp = "Woodwinds create resonance by directing airflow over an edge or vibrating a wooden reed inside a tube."
            hint = "Instruments like flutes and clarinets belong to this family."
        else:
            q = f"In melodic composition (Stage {grade}), what is the defining characteristic of a five-tone pentatonic scale?"
            opts = ["It omits semitone intervals (half-steps), creating an open, consonant harmony that avoids harsh dissonance", "It contains twelve notes played at the exact same pitch", "It can only be performed on electric guitars", "It has no rhythm or tempo"]
            exp = "Pentatonic scales (e.g. C-D-E-G-A) lack leading tones and tritones, yielding inherently harmonious melodies."
            hint = "A 5-note scale without sharp clashing semitones."

        items.append({
            "id": f"cam-mus-sup-{i:03d}",
            "subject": "cam_music",
            "curriculum": "cambridge",
            "grade": grade,
            "phase": f"Stage {grade}",
            "topic": topic,
            "question": q,
            "options": opts,
            "correctIndex": 0,
            "explanation": exp,
            "hint": hint,
            "difficulty": "Sedang" if grade in [3, 4] else "Mudah" if grade <= 2 else "Tantangan"
        })

    # 5. cam_pe (70 items)
    for i in range(1, 71):
        grade = ((i - 1) % 6) + 1
        topic = f"Physical Education Stage {grade} Concept {i}"
        if i % 4 == 1:
            q = f"In invasion games like football and basketball (Stage {grade}), why is creating and moving into 'open space' an essential offensive tactic?"
            opts = ["It draws defenders away and provides passing lanes with time to receive and control the ball", "It allows players to hide from the referee behind the goalpost", "It guarantees that the ball will pop if kicked", "It forces teammates to crowd around the ball together in a tight circle"]
            exp = "Spatial awareness and off-the-ball movement break defensive containment and establish clear passing angles."
            hint = "Running into open green space gives teammates a clear passing lane to give you the ball."
        elif i % 4 == 2:
            q = f"Why is conducting active dynamic stretching before high-intensity sprint training superior to static stretching (Stage {grade})?"
            opts = ["Dynamic stretches elevate muscle core temperature, lubricate joints, and activate neural firing patterns safely", "Dynamic stretching cools muscles down until they become cold and stiff", "Static stretching makes athletes run ten times faster immediately", "Stretching before exercise is prohibited in all international sports"]
            exp = "Dynamic movement drills warm muscle fibers through full ranges of motion without reducing explosive tendon stiffness."
            hint = "Moving warm-up drills prepare muscles and joints for running without over-stretching cold tendons."
        elif i % 4 == 3:
            q = f"In water safety and swimming technique (Stage {grade}), why is maintaining a streamlined horizontal body position fundamental for efficient propulsion?"
            opts = ["It minimizes frontal water resistance (drag), allowing swimmers to glide further with each stroke", "It makes the swimmer sink straight to the pool bottom", "It increases water resistance so the swimmer works five times harder", "It makes water turn into solid ice"]
            exp = "A flat hydrodynamic profile minimizes form drag, conserving metabolic energy across swimming laps."
            hint = "Staying flat like an arrow through the water reduces water push-back."
        else:
            q = f"What is the physiological role of drinking cool water in regular small intervals during strenuous physical training (Stage {grade})?"
            opts = ["It restores blood plasma volume lost through sweat, preventing dehydration and regulating core body temperature", "It stops the human heart from pumping blood entirely", "It causes body muscles to dissolve", "It turns perspiration into solid sugar"]
            exp = "Adequate hydration maintains cardiovascular efficiency and thermoregulation during heavy physical exertion."
            hint = "Replacing water lost in sweat prevents heat exhaustion and keeps your heart pumping smoothly."

        items.append({
            "id": f"cam-pe-sup-{i:03d}",
            "subject": "cam_pe",
            "curriculum": "cambridge",
            "grade": grade,
            "phase": f"Stage {grade}",
            "topic": topic,
            "question": q,
            "options": opts,
            "correctIndex": 0,
            "explanation": exp,
            "hint": hint,
            "difficulty": "Sedang" if grade in [3, 4] else "Mudah" if grade <= 2 else "Tantangan"
        })

    # 6. cam_foreign_lang (65 items)
    for i in range(1, 66):
        grade = ((i - 1) % 6) + 1
        topic = f"Foreign Language Stage {grade} Lesson {i}"
        if i % 4 == 1:
            q = f"When greeting an unfamiliar elder or professional in formal French or Spanish (Stage {grade}), which linguistic form is culturally respectful?"
            opts = ["Using the polite formal pronoun ('vous' in French, 'usted' in Spanish)", "Using informal slang nicknames used only with close toddler friends", "Greeting them by barking like a dog", "Ignoring them completely and refusing to speak"]
            exp = "Romance languages distinguish between informal T-forms ('tu') and polite V-forms ('vous'/'usted') for social deference."
            hint = "Use the formal 'you' to show respect to teachers and elders."
        elif i % 4 == 2:
            q = f"In introductory vocabulary (Stage {grade}), which group represents the cardinal days of the week in French?"
            opts = ["Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche", "Rouge, bleu, vert, jaune, noir, blanc, orange", "Un, deux, trois, quatre, cinq, six, sept", "Pomme, poire, banane, orange, raisin, citron, fraise"]
            exp = "French days of the week originate from Latin planetary naming conventions (Lundi = Moon day, etc.)."
            hint = "Words starting with Lundi (Monday) and ending with Dimanche (Sunday)."
        elif i % 4 == 3:
            q = f"How do language learners navigate 'false friends' (faux amis) between European languages (Stage {grade})?"
            opts = ["Words that look identical in spelling but carry completely different meanings across two languages", "Words that mean the exact same thing in every language on Earth", "Letters that cannot be pronounced by human vocal cords", "Grammar books that contain no vocabulary words"]
            exp = "Cognates with divergent semantic development (e.g., 'actuellement' in French means 'currently', not 'actually') are false friends."
            hint = "Words that look similar in spelling but actually mean something totally different."
        else:
            q = f"When ordering meals politely in a restaurant setting (Stage {grade}), which communicative phrase expresses 'I would like' with courtesy?"
            opts = ["'Je voudrais' (French) or 'Me gustaría' (Spanish) paired with 's'il vous plaît' / 'por favor'", "'Give me food right now!' spoken loudly", "'I refuse to eat anything in this restaurant'", "'I do not understand what food means'"]
            exp = "Conditional verb forms express requests diplomatically and politely in target language interactions."
            hint = "Conditional polite request: 'I would like please'."

        items.append({
            "id": f"cam-fl-sup-{i:03d}",
            "subject": "cam_foreign_lang",
            "curriculum": "cambridge",
            "grade": grade,
            "phase": f"Stage {grade}",
            "topic": topic,
            "question": q,
            "options": opts,
            "correctIndex": 0,
            "explanation": exp,
            "hint": hint,
            "difficulty": "Sedang" if grade in [3, 4] else "Mudah" if grade <= 2 else "Tantangan"
        })

    # 7. cam_science (65 items)
    for i in range(1, 66):
        grade = ((i - 1) % 6) + 1
        topic = f"Cambridge Science Stage {grade} Investigation {i}"
        if i % 4 == 1:
            q = f"In plant biology and scientific enquiry (Stage {grade}), how do root hair cells maximize water absorption from surrounding soil?"
            opts = ["Their long microscopic extensions dramatically increase surface area for osmosis", "They produce thick waxy waterproof barriers that repel moisture", "They generate electric sparks that boil soil water", "They only absorb dry sand particles"]
            exp = "Elongated root hair projections amplify the surface-area-to-volume ratio, accelerating osmotic water uptake."
            hint = "Long slender extensions provide much more surface area to drink water."
        elif i % 4 == 2:
            q = f"What happens to the molecules of a liquid when thermal energy is supplied during evaporation (Stage {grade})?"
            opts = ["The particles gain kinetic energy, overcome intermolecular forces, and escape into the gas phase", "The particles stop moving completely and freeze into crystals", "The particles turn into heavy iron atoms", "The liquid volume shrinks to absolute zero immediately"]
            exp = "Heat increases average kinetic energy; energetic surface particles break free as gaseous vapor."
            hint = "Heat makes liquid particles vibrate faster and bounce into the air as gas."
        elif i % 4 == 3:
            q = f"In electrical circuits (Stage {grade}), what occurs when an additional lamp is added in a simple series circuit?"
            opts = ["The total electrical resistance increases, causing all lamps in the circuit to glow dimmer", "Both lamps immediately explode with bright flashes", "The electric current doubles in magnitude", "The battery voltage increases to 10,000 volts"]
            exp = "In series circuits, resistances sum up (R_total = R1 + R2), reducing total circuit current according to Ohm's Law."
            hint = "Adding another bulb makes current harder to flow, so all bulbs glow a bit dimmer."
        else:
            q = f"Why do predators in cold arctic ecosystems often exhibit smaller ears and compact rounded body shapes (Allen's Rule) (Stage {grade})?"
            opts = ["Compact extremities reduce the ratio of surface area to body volume, minimizing heat loss to freezing air", "To allow them to fly through arctic blizzards easily", "Because their ears fall off when exposed to snow", "To make it easier for prey animals to spot them"]
            exp = "Reduced appendage surface area minimizes radiative and convective thermal dissipation in polar biomes."
            hint = "Small ears and round bodies keep precious body heat from escaping into the cold."

        items.append({
            "id": f"cam-sci-sup-{i:03d}",
            "subject": "cam_science",
            "curriculum": "cambridge",
            "grade": grade,
            "phase": f"Stage {grade}",
            "topic": topic,
            "question": q,
            "options": opts,
            "correctIndex": 0,
            "explanation": exp,
            "hint": hint,
            "difficulty": "Sedang" if grade in [3, 4] else "Mudah" if grade <= 2 else "Tantangan"
        })

    # 8. cam_math (60 items)
    for i in range(1, 61):
        grade = ((i - 1) % 6) + 1
        topic = f"Cambridge Mathematics Stage {grade} Concept {i}"
        if i % 4 == 1:
            q = f"In arithmetic and fractions (Stage {grade}), what is the sum of 3/8 and 1/4 expressed in simplest terms?"
            opts = ["5/8", "4/12", "1/2", "7/8"],
            exp = "Convert 1/4 to the equivalent fraction with denominator 8: 1/4 = 2/8. Then 3/8 + 2/8 = 5/8."
            hint = "Make the bottom numbers matching first: 1/4 is equal to 2/8."
        elif i % 4 == 2:
            q = f"What is the perimeter of a rectangle with length 14 cm and width 8 cm (Stage {grade})?"
            opts = ["44 cm", "112 cm", "22 cm", "84 cm"],
            exp = "Perimeter = 2 * (length + width) = 2 * (14 + 8) = 2 * 22 = 44 cm."
            hint = "Add length + width and double the result: (14 + 8) x 2."
        elif i % 4 == 3:
            q = f"In coordinate geometry (Stage {grade}), which quadrant contains the point with coordinates (-4, 7)?"
            opts = ["Quadrant II (top-left quadrant where x is negative and y is positive)", "Quadrant I", "Quadrant III", "Quadrant IV"],
            exp = "Points with negative x-coordinates and positive y-coordinates lie in the second quadrant."
            hint = "Left on x-axis (negative) and up on y-axis (positive) is Quadrant 2."
        else:
            q = f"If a train departs at 09:45 and arrives at its destination at 13:15, what is the total travel duration (Stage {grade})?"
            opts = ["3 hours and 30 minutes", "4 hours and 15 minutes", "2 hours and 45 minutes", "3 hours and 15 minutes"],
            exp = "From 09:45 to 10:00 is 15 minutes. From 10:00 to 13:00 is 3 hours. From 13:00 to 13:15 is 15 minutes. Total = 3 h 30 min."
            hint = "Count minutes to 10:00, then hours to 13:00, then remaining 15 minutes."

        items.append({
            "id": f"cam-mat-sup-{i:03d}",
            "subject": "cam_math",
            "curriculum": "cambridge",
            "grade": grade,
            "phase": f"Stage {grade}",
            "topic": topic,
            "question": q[0] if isinstance(q, tuple) else q,
            "options": opts[0] if isinstance(opts, tuple) else opts,
            "correctIndex": 0,
            "explanation": exp,
            "hint": hint,
            "difficulty": "Sedang" if grade in [3, 4] else "Mudah" if grade <= 2 else "Tantangan"
        })

    # 9. cam_english (55 items)
    for i in range(1, 56):
        grade = ((i - 1) % 6) + 1
        topic = f"Cambridge English Stage {grade} Mastery {i}"
        if i % 4 == 1:
            q = f"In sentence grammar (Stage {grade}), which sentence correctly employs a subordinate clause introduced by a subordinating conjunction?"
            opts = ["Although the thunder roared furiously, the children slept peacefully through the storm.", "The thunder roared and the children slept.", "Thunder roared, children slept.", "Because loud thunder thunder thunder."],
            exp = "'Although the thunder roared furiously' is an adverbial subordinate clause that depends on the main clause.",
            hint = "Look for a complex sentence starting with 'Although' showing contrasting conditions."
        elif i % 4 == 2:
            q = f"In figurative language analysis (Stage {grade}), which sentence is an example of personification?"
            opts = ["The ancient grandfather clock groaned with every tick of the midnight pendulum.", "The clock was as loud as a thunderclap.", "The clock showed twelve o'clock sharp.", "The clock was made of polished mahogany wood."],
            exp = "Personification attributes human qualities (groaning) to an inanimate object (the clock).",
            hint = "Giving a human behavior like 'groaning' to an object."
        elif i % 4 == 3:
            q = f"In dialogue punctuation rules (Stage {grade}), which sentence is punctuated with complete grammatical accuracy?"
            opts = ['"Please hand me the binoculars," whispered Elena, "before the eagle flies away."', '"Please hand me the binoculars whispered Elena before the eagle flies away."', 'Please hand me the binoculars whispered Elena, before the eagle flies away.', '"Please hand me the binoculars" Elena whispered, "Before the eagle flies away"'],
            exp = "Direct speech interrupted by a dialogue tag requires commas inside the closing speech marks and lowercase continuation.",
            hint = "Commas stay inside the speech marks and the sentence continues smoothly."
        else:
            q = f"What is the grammatical function of the prefix 'un-' when added to the adjective 'certain' (Stage {grade})?"
            opts = ["It negates the root word, reversing its meaning to 'not certain' or 'doubtful'", "It turns the adjective into a plural noun", "It converts the word into a future tense verb", "It makes the word mean 'extremely certain'"],
            exp = "The prefix 'un-' is a derivational morpheme meaning 'not' or the reversal of a condition.",
            hint = "Adding 'un-' creates the opposite or negative meaning: not certain."

        items.append({
            "id": f"cam-eng-sup-{i:03d}",
            "subject": "cam_english",
            "curriculum": "cambridge",
            "grade": grade,
            "phase": f"Stage {grade}",
            "topic": topic,
            "question": q[0] if isinstance(q, tuple) else q,
            "options": opts[0] if isinstance(opts, tuple) else opts,
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

cam_items = get_cambridge_items()
write_ts_file("./src/data/questions/cambridgeSupplementary100.ts", "cambridgeSupplementary100", cam_items)
