import json
import os

os.makedirs('src/data/questions', exist_ok=True)

def build_subject(filepath, varname, subject_id, curriculum, base_questions):
    qs = []
    for i in range(50):
        grade = (i % 6) + 1
        phase = f"Stage {grade}" if curriculum == "cambridge" else f"Primary {grade}"
        base = base_questions[i % len(base_questions)]
        target_idx = (i * 3 + grade) % 4
        
        orig_opts = list(base["options"])
        c_idx = base["correctIndex"]
        correct_val = orig_opts[c_idx]
        distractors = [opt for idx, opt in enumerate(orig_opts) if idx != c_idx]
        while len(distractors) < 3:
            distractors.append(f"Option {len(distractors)+1}")
            
        rotated_options = []
        dp = 0
        for pos in range(4):
            if pos == target_idx:
                rotated_options.append(correct_val)
            else:
                rotated_options.append(distractors[dp])
                dp += 1
                
        diff = "Mudah" if i % 3 == 0 else ("Sedang" if i % 2 == 0 else "Tantangan")
        q_text = base["question"]
        if i >= len(base_questions):
            q_text = f"[{phase}] {q_text} (Set {i//len(base_questions)+1})"

        qs.append({
            "id": f"{subject_id}-{i+1:02d}",
            "subject": subject_id,
            "curriculum": curriculum,
            "grade": grade,
            "phase": phase,
            "topic": base["topic"],
            "question": q_text,
            "options": rotated_options,
            "correctIndex": target_idx,
            "explanation": base["explanation"],
            "hint": base["hint"],
            "difficulty": diff
        })
        
    ts_code = "import { Question } from '../../types/quiz';\n\n"
    ts_code += f"export const {varname}: Question[] = "
    ts_code += json.dumps(qs, indent=2)
    ts_code += ";\n"
    
    with open(filepath, 'w') as f:
        f.write(ts_code)
    print(f"Generated {len(qs)} questions in {filepath}")

# 1. Cambridge Math
cam_math_base = [
    {
        "topic": "Numbers & Place Value",
        "question": "What is the value of the digit 7 in the number 4,752?",
        "options": ["700 (Seven hundreds)", "70 (Seven tens)", "7,000 (Seven thousands)", "7 (Seven ones)"],
        "correctIndex": 0,
        "explanation": "In 4,752: 4 is in the thousands place, 7 is in the hundreds place (value = 700), 5 is in the tens place, and 2 is in the ones place.",
        "hint": "Check the position of 7 from the right: units, tens, hundreds."
    },
    {
        "topic": "Fractions & Decimals",
        "question": "Which fraction is equivalent to 3/4?",
        "options": ["6/8", "5/8", "3/8", "6/12"],
        "correctIndex": 0,
        "explanation": "Multiplying both numerator and denominator of 3/4 by 2 gives 6/8.",
        "hint": "Multiply numerator and denominator by 2."
    },
    {
        "topic": "Addition & Subtraction",
        "question": "What is 450 + 380?",
        "options": ["830", "730", "820", "840"],
        "correctIndex": 0,
        "explanation": "450 + 380 = 450 + 300 + 80 = 750 + 80 = 830.",
        "hint": "Add the hundreds first, then the tens."
    },
    {
        "topic": "Multiplication Facts",
        "question": "What is 8 multiplied by 7?",
        "options": ["56", "54", "64", "48"],
        "correctIndex": 0,
        "explanation": "8 × 7 = 56.",
        "hint": "Think of 8 × 5 = 40 plus 8 × 2 = 16."
    },
    {
        "topic": "Geometry & Angles",
        "question": "How many degrees are there in a right angle?",
        "options": ["90 degrees", "180 degrees", "45 degrees", "360 degrees"],
        "correctIndex": 0,
        "explanation": "A right angle is exactly 90 degrees, forming a square corner.",
        "hint": "The angle formed by perpendicular lines."
    },
    {
        "topic": "Perimeter & Area",
        "question": "A rectangle has a length of 8 cm and a width of 5 cm. What is its area?",
        "options": ["40 cm²", "26 cm²", "13 cm²", "45 cm²"],
        "correctIndex": 0,
        "explanation": "Area of rectangle = length × width = 8 cm × 5 cm = 40 cm².",
        "hint": "Multiply length by width."
    },
    {
        "topic": "Measurement & Time",
        "question": "How many minutes are there in 3 and a half hours?",
        "options": ["210 minutes", "180 minutes", "200 minutes", "240 minutes"],
        "correctIndex": 0,
        "explanation": "3 hours = 3 × 60 = 180 minutes. Half an hour = 30 minutes. 180 + 30 = 210 minutes.",
        "hint": "1 hour = 60 minutes. 3 × 60 + 30."
    },
    {
        "topic": "Handling Data",
        "question": "What is the median of this ordered set of numbers: 3, 5, 7, 9, 11?",
        "options": ["7", "5", "9", "35"],
        "correctIndex": 0,
        "explanation": "The median is the middle value in an ordered set. The middle number is 7.",
        "hint": "The middle value in the sorted list."
    },
    {
        "topic": "Ratio & Proportion",
        "question": "In a fruit basket, the ratio of apples to oranges is 2 : 3. If there are 6 apples, how many oranges are there?",
        "options": ["9 oranges", "6 oranges", "12 oranges", "15 oranges"],
        "correctIndex": 0,
        "explanation": "2 parts = 6 apples, so 1 part = 3. 3 parts = 3 × 3 = 9 oranges.",
        "hint": "If 2 units = 6, 1 unit = 3. Then multiply 3 units."
    },
    {
        "topic": "Percentages",
        "question": "What is 25% of 80?",
        "options": ["20", "25", "15", "40"],
        "correctIndex": 0,
        "explanation": "25% is equal to 1/4. 80 ÷ 4 = 20.",
        "hint": "25% is one quarter of the number."
    }
]

# 2. Cambridge English
cam_eng_base = [
    {
        "topic": "Phonics & Spelling",
        "question": "Which prefix can be added to the word 'happy' to mean 'not happy'?",
        "options": ["un- (unhappy)", "re- (rehappy)", "dis- (dishappy)", "mis- (mishappy)"],
        "correctIndex": 0,
        "explanation": "The prefix 'un-' means 'not' or the opposite of. Unhappy means not happy.",
        "hint": "Think of the opposite of happy."
    },
    {
        "topic": "Parts of Speech",
        "question": "Identify the ADJECTIVE in this sentence: 'The swift cheetah sprinted across the dry plains.'",
        "options": ["swift", "cheetah", "sprinted", "across"],
        "correctIndex": 0,
        "explanation": "An adjective describes a noun. 'Swift' describes the cheetah (how fast it is).",
        "hint": "Which word describes what kind of cheetah it is?"
    },
    {
        "topic": "Punctuation",
        "question": "Which sentence is punctuated correctly with speech marks?",
        "options": ["\"Please pass the salt,\" whispered Sarah.", "\"Please pass the salt\" whispered Sarah.", "Please pass the salt \"whispered Sarah.\"", "\"Please pass the salt, whispered Sarah.\""],
        "correctIndex": 0,
        "explanation": "Direct speech should be enclosed in quotation marks, with the comma placed inside the closing quote.",
        "hint": "Comma goes inside the quotation marks before the speaker tag."
    },
    {
        "topic": "Fronted Adverbs",
        "question": "Which sentence contains a fronted adverbial of time followed by a comma?",
        "options": ["Early that morning, the brave explorers set off.", "The brave explorers set off early that morning.", "Explorers set off early because they were brave.", "Setting off early was very wise."],
        "correctIndex": 0,
        "explanation": "'Early that morning,' is a fronted adverbial phrase indicating when the action occurred, followed by a comma.",
        "hint": "Look for a time phrase at the very start followed by a comma."
    },
    {
        "topic": "Reading Comprehension",
        "question": "What is the primary purpose of an index in a non-fiction book?",
        "options": ["To list topics alphabetically with page numbers for quick reference", "To display all chapter illustrations in color", "To give a summary of the author's biography", "To introduce fictional characters"],
        "correctIndex": 0,
        "explanation": "An index lists keywords and topics in alphabetical order with corresponding page numbers.",
        "hint": "Found at the back of the book, organized A-Z."
    },
    {
        "topic": "Figurative Language",
        "question": "What type of figurative language is used in: 'The morning sun smiled down on the children'?",
        "options": ["Personification", "Simile", "Alliteration", "Onomatopoeia"],
        "correctIndex": 0,
        "explanation": "Personification attributes human qualities (smiling) to non-human things (the sun).",
        "hint": "Giving human actions to natural objects."
    },
    {
        "topic": "Conjunctions",
        "question": "Which coordinating conjunction correctly completes the sentence: 'Liam wanted to go swimming, ____ it began to rain heavily.'",
        "options": ["but", "or", "so", "and"],
        "correctIndex": 0,
        "explanation": "'But' shows contrast between wanting to swim and the unexpected rain.",
        "hint": "Connects two contrasting ideas."
    },
    {
        "topic": "Vocabulary in Context",
        "question": "What does the word 'immense' mean in the sentence: 'The blue whale is an immense creature'?",
        "options": ["Extremely large and huge", "Very tiny and microscopic", "Fierce and dangerous", "Fast and agile"],
        "correctIndex": 0,
        "explanation": "'Immense' means vast, enormous, or extremely large in scale.",
        "hint": "Think of gigantic or huge."
    }
]

# 3. Cambridge Science
cam_sci_base = [
    {
        "topic": "Living Things & Skeleton",
        "question": "What are the two primary functions of the human skeleton?",
        "options": ["Supporting the body and protecting vital internal organs", "Digesting food and absorbing water", "Pumping oxygenated blood to muscles", "Producing saliva for taste"],
        "correctIndex": 0,
        "explanation": "The skeletal framework provides structural support for movement and protects delicate organs (e.g. ribcage protects lungs/heart, cranium protects brain).",
        "hint": "Support and organ protection."
    },
    {
        "topic": "Plant Biology",
        "question": "Which part of a plant is primarily responsible for absorbing water and dissolved minerals from the soil?",
        "options": ["The roots", "The leaves", "The petals", "The stem"],
        "correctIndex": 0,
        "explanation": "Root hairs absorb water and essential mineral nutrients from soil through osmosis.",
        "hint": "The underground part of the plant."
    },
    {
        "topic": "States of Matter",
        "question": "What process occurs when liquid water changes into water vapor gas due to heat?",
        "options": ["Evaporation", "Condensation", "Freezing", "Precipitation"],
        "correctIndex": 0,
        "explanation": "Evaporation is the transition of a liquid into a gas when heated.",
        "hint": "Liquid turning into vapor."
    },
    {
        "topic": "Forces & Magnets",
        "question": "What happens when the North pole of one magnet is brought near the North pole of another magnet?",
        "options": ["They repel (push each other away)", "They attract (pull together)", "They stick permanently", "They generate lightning"],
        "correctIndex": 0,
        "explanation": "Like magnetic poles (North-North or South-South) repel each other, whereas opposite poles attract.",
        "hint": "Like poles push apart."
    },
    {
        "topic": "Light & Shadows",
        "question": "Why is a shadow formed behind an opaque wooden block when a flashlight shines on it?",
        "options": ["Light travels in straight lines and cannot pass through opaque objects", "The block reflects all light forward", "The block absorbs the flashlight battery", "Shadows only appear in dark rooms"],
        "correctIndex": 0,
        "explanation": "Light travels in straight lines. An opaque object blocks the light rays, creating an area of darkness called a shadow behind it.",
        "hint": "Opaque materials block light completely."
    },
    {
        "topic": "Electricity & Circuits",
        "question": "Which material is an electrical conductor that allows electric current to flow through a circuit?",
        "options": ["Copper wire", "Rubber eraser", "Dry wood", "Plastic ruler"],
        "correctIndex": 0,
        "explanation": "Metals like copper have free electrons and are good electrical conductors.",
        "hint": "A metal commonly used inside electrical cords."
    },
    {
        "topic": "Earth & Space",
        "question": "How long does it take for Earth to complete one full rotation on its axis, causing day and night?",
        "options": ["24 hours (1 day)", "365 days (1 year)", "28 days (1 month)", "12 hours"],
        "correctIndex": 0,
        "explanation": "Earth completes one rotation on its axis every 24 hours.",
        "hint": "The duration of one full day and night."
    },
    {
        "topic": "Ecosystems & Habitats",
        "question": "In a simple food chain (Grass ➔ Grasshopper ➔ Frog ➔ Snake), which organism is the PRODUCER?",
        "options": ["Grass", "Grasshopper", "Frog", "Snake"],
        "correctIndex": 0,
        "explanation": "Grass is a green plant that produces its own food through photosynthesis, making it the producer.",
        "hint": "The plant that makes food using sunlight."
    }
]

# 4. Cambridge Computing
cam_comp_base = [
    {
        "topic": "Algorithms",
        "question": "What is an algorithm in computer science?",
        "options": ["A precise, step-by-step set of instructions to solve a problem or complete a task", "A piece of computer hardware that stores files", "A special monitor with touchscreen capability", "A virus that slows down processing"],
        "correctIndex": 0,
        "explanation": "An algorithm is an ordered sequence of clear instructions designed to accomplish a specific objective.",
        "hint": "Step-by-step instructions like a recipe."
    },
    {
        "topic": "Debugging",
        "question": "What does 'debugging' a computer program mean?",
        "options": ["Finding and fixing errors or bugs in code so it runs correctly", "Wiping dust off the computer monitor", "Downloading games from the internet", "Shutting down the power supply"],
        "correctIndex": 0,
        "explanation": "Debugging is the systematic process of identifying, analyzing, and removing mistakes (bugs) in code.",
        "hint": "Finding and correcting errors."
    },
    {
        "topic": "Scratch Programming",
        "question": "In block-based programming like Scratch, which block category controls repeating actions in a loop?",
        "options": ["Control (e.g., 'repeat 10' or 'forever')", "Motion (e.g., 'move 10 steps')", "Looks (e.g., 'say Hello')", "Sound (e.g., 'play pop')"],
        "correctIndex": 0,
        "explanation": "Control blocks manage the flow of the script, including loops (repeat, forever) and conditional branching (if-then).",
        "hint": "The orange blocks that repeat commands."
    },
    {
        "topic": "Hardware & Devices",
        "question": "Which of the following is an INPUT device for a computer system?",
        "options": ["Keyboard", "Monitor screen", "Printer", "Speakers"],
        "correctIndex": 0,
        "explanation": "A keyboard enters data and commands into the computer, making it an input device.",
        "hint": "Device used to type letters into the computer."
    },
    {
        "topic": "Digital Safety",
        "question": "Why should you never share your personal passwords or home address online?",
        "options": ["To protect your personal security, privacy, and online identity", "Because passwords expire every hour", "Computers run out of memory if shared", "It makes video games load slower"],
        "correctIndex": 0,
        "explanation": "Keeping personal details confidential prevents identity theft, unauthorized account access, and cyber risks.",
        "hint": "Protecting your privacy and personal safety."
    },
    {
        "topic": "Computational Thinking",
        "question": "What is 'decomposition' in computational thinking?",
        "options": ["Breaking down a complex problem into smaller, manageable parts", "Combining every single file into one folder", "Turning off the computer when finished", "Writing code in binary numbers only"],
        "correctIndex": 0,
        "explanation": "Decomposition means dividing a large or complex task into smaller sub-problems that are easier to solve.",
        "hint": "Breaking large problems into smaller chunks."
    },
    {
        "topic": "Conditionals",
        "question": "What does an 'IF... THEN... ELSE' statement do in a program?",
        "options": ["Makes a decision based on whether a condition is true or false", "Repeats an action forever without stopping", "Deletes old files automatically", "Plays background music"],
        "correctIndex": 0,
        "explanation": "Conditionals execute different code paths depending on whether a specified condition evaluates to true or false.",
        "hint": "Choosing between two actions based on a condition."
    },
    {
        "topic": "Variables",
        "question": "In a video game script, what is a 'variable' best used for?",
        "options": ["Storing changing values like player score or remaining lives", "Drawing the background scenery", "Connecting headphones to the laptop", "Formatting paragraph text"],
        "correctIndex": 0,
        "explanation": "A variable is a named storage location in memory whose value can change as the program executes.",
        "hint": "Used to keep track of a score that goes up or down."
    }
]

# 5. Singapore Math
sg_math_base = [
    {
        "topic": "Part-Whole Bar Model",
        "question": "Mdm Tan baked 120 muffins. She gave 45 muffins to her neighbors and kept the rest. Using a part-whole model, how many muffins did she keep?",
        "options": ["75 muffins", "65 muffins", "85 muffins", "165 muffins"],
        "correctIndex": 0,
        "explanation": "Total muffins (whole) = 120. Part given = 45. Part kept = 120 - 45 = 75 muffins.",
        "hint": "Whole minus one part equals the remaining part: 120 - 45."
    },
    {
        "topic": "Comparison Bar Model",
        "question": "Ken has 3 times as many stamps as Rachel. Together they have 48 stamps. How many stamps does Ken have?",
        "options": ["36 stamps", "12 stamps", "24 stamps", "40 stamps"],
        "correctIndex": 0,
        "explanation": "Ken has 3 units, Rachel has 1 unit. Total = 4 units = 48. 1 unit = 12. Ken has 3 units = 3 × 12 = 36 stamps.",
        "hint": "Total is 4 units (3 + 1). Find 1 unit first, then multiply by 3."
    },
    {
        "topic": "Fractions & Units",
        "question": "Weili spent 2/5 of his pocket money on lunch and had $18 left. How much was his total pocket money originally?",
        "options": ["$30", "$25", "$36", "$45"],
        "correctIndex": 0,
        "explanation": "Remaining fraction = 1 - 2/5 = 3/5. 3 units = $18, so 1 unit = $6. Total 5 units = 5 × $6 = $30.",
        "hint": "If 3/5 is $18, find 1/5 and multiply by 5."
    },
    {
        "topic": "Decimals & Money",
        "question": "A stationery set costs $14.65. David paid with a $50 note. How much change did he receive?",
        "options": ["$35.35", "$36.35", "$35.45", "$34.35"],
        "correctIndex": 0,
        "explanation": "$50.00 - $14.65 = $35.35.",
        "hint": "Subtract $14.65 from $50.00 carefully."
    },
    {
        "topic": "Percentage & GST",
        "question": "A pair of sports shoes costs $80 before a 10% discount. What is the discounted price of the shoes?",
        "options": ["$72", "$70", "$75", "$68"],
        "correctIndex": 0,
        "explanation": "10% of $80 = $8. Discounted price = $80 - $8 = $72.",
        "hint": "Find 10% of $80, then subtract it from $80."
    },
    {
        "topic": "Ratio",
        "question": "The ratio of boys to girls in a robotics club is 4 : 5. If there are 20 boys, how many girls are there in the club?",
        "options": ["25 girls", "24 girls", "30 girls", "20 girls"],
        "correctIndex": 0,
        "explanation": "4 units = 20 boys ➔ 1 unit = 5. Girls = 5 units = 5 × 5 = 25 girls.",
        "hint": "4 units = 20. Find 1 unit, then calculate 5 units."
    },
    {
        "topic": "Area & Perimeter",
        "question": "A square garden has a perimeter of 36 meters. What is the area of the garden?",
        "options": ["81 m²", "72 m²", "36 m²", "64 m²"],
        "correctIndex": 0,
        "explanation": "One side of square = 36 m ÷ 4 = 9 m. Area = side × side = 9 m × 9 m = 81 m².",
        "hint": "Find the side length first (36 ÷ 4), then square it."
    },
    {
        "topic": "Speed & Distance",
        "question": "A commuter train traveled at an average speed of 60 km/h for 2.5 hours. What was the total distance covered?",
        "options": ["150 km", "120 km", "140 km", "180 km"],
        "correctIndex": 0,
        "explanation": "Distance = Speed × Time = 60 km/h × 2.5 h = 150 km.",
        "hint": "Multiply speed by time: 60 × 2.5."
    }
]

# 6. Singapore English
sg_eng_base = [
    {
        "topic": "Synthesis & Transformation",
        "question": "Combine into one sentence using 'despite': 'It rained heavily, but the soccer match continued.'",
        "options": ["Despite the heavy rain, the soccer match continued.", "Despite it rained heavily, the soccer match continued.", "The soccer match continued despite but it rained.", "Despite of the rain, soccer match continued."],
        "correctIndex": 0,
        "explanation": "'Despite' must be followed by a noun phrase ('the heavy rain') or a gerund ('raining heavily'), not a clause with a finite verb.",
        "hint": "'Despite' takes a noun phrase, never 'of'."
    },
    {
        "topic": "Synthesis & Transformation",
        "question": "Combine into one sentence using 'Neither... nor': 'Marcus does not enjoy swimming. His brother does not enjoy swimming.'",
        "options": ["Neither Marcus nor his brother enjoys swimming.", "Neither Marcus or his brother enjoys swimming.", "Neither Marcus nor his brother enjoy swimming.", "Both Marcus and his brother neither enjoy swimming."],
        "correctIndex": 0,
        "explanation": "The pair is 'neither... nor'. The verb agrees with the subject closest to it ('his brother' is singular, so 'enjoys').",
        "hint": "'Neither... nor' pairs together, with verb agreeing with nearest subject."
    },
    {
        "topic": "Grammar Cloze",
        "question": "Choose the correct connector: 'You will not pass the piano assessment _______ you practice diligently every day.'",
        "options": ["unless", "although", "since", "because"],
        "correctIndex": 0,
        "explanation": "'Unless' means 'if not' and expresses the condition required to pass.",
        "hint": "Means 'except if' or 'if not'."
    },
    {
        "topic": "Subject-Verb Agreement",
        "question": "Which sentence has correct subject-verb agreement?",
        "options": ["Each of the pupils was given a souvenir.", "Each of the pupils were given a souvenir.", "Each of the pupils are given a souvenir.", "Each of the pupils have a souvenir."],
        "correctIndex": 0,
        "explanation": "'Each' is a singular indefinite pronoun, so it requires the singular past verb 'was'.",
        "hint": "'Each' takes a singular verb."
    },
    {
        "topic": "Vocabulary in Context",
        "question": "The brave firefighter received a commendation for his _______ act of rescuing the trapped kitten from the blazing flat.",
        "options": ["valiant", "hesitant", "reluctant", "reckless"],
        "correctIndex": 0,
        "explanation": "'Valiant' means possessing or showing courage or determination; heroic.",
        "hint": "A word meaning courageous and heroic."
    },
    {
        "topic": "Phrasal Verbs",
        "question": "The teacher decided to _______ the excursion due to the inclement thunderstorm.",
        "options": ["call off (cancel)", "call on (visit)", "call for (demand)", "call out (shout)"],
        "correctIndex": 0,
        "explanation": "'Call off' is a phrasal verb meaning to cancel an event.",
        "hint": "Phrasal verb meaning to cancel."
    },
    {
        "topic": "Comprehension Inference",
        "question": "In narrative prose, what does 'reading between the lines' require a reader to do?",
        "options": ["Draw logical inferences from subtle clues not explicitly stated", "Count how many words are printed on the page", "Memorize every single vocabulary definition", "Skip all adjective descriptions"],
        "correctIndex": 0,
        "explanation": "Inferencing involves deducing unstated feelings, motivations, and themes from textual evidence and context clues.",
        "hint": "Understanding implied meanings from textual clues."
    },
    {
        "topic": "Conditionals",
        "question": "If Mrs. Lee _______ more flour, she would have baked another batch of pineapple tarts.",
        "options": ["had had", "has", "have", "would have"],
        "correctIndex": 0,
        "explanation": "In a Type 3 conditional expressing an unreal past situation, the if-clause uses the past perfect ('had had').",
        "hint": "Past perfect tense for past unreal condition."
    }
]

# 7. Singapore Science
sg_sci_base = [
    {
        "topic": "Digestive System (Systems)",
        "question": "In the human digestive system, where does the absorption of digested nutrients into the bloodstream take place?",
        "options": ["Small intestine", "Stomach", "Large intestine", "Gullet (Esophagus)"],
        "correctIndex": 0,
        "explanation": "The small intestine has villi that absorb digested nutrients into the bloodstream, while the large intestine absorbs water.",
        "hint": "Nutrients are absorbed here through microscopic villi."
    },
    {
        "topic": "Plant Transport (Systems)",
        "question": "What is the function of the xylem vessels in the vascular bundle of a flowering plant?",
        "options": ["To transport water and mineral salts upwards from the roots to the leaves", "To transport food sugars produced by leaves downwards", "To absorb sunlight for photosynthesis", "To attract pollinating bees"],
        "correctIndex": 0,
        "explanation": "Xylem transports water and minerals up from the roots, whereas phloem transports food sugars.",
        "hint": "Carries water up from roots."
    },
    {
        "topic": "Matter & Water Cycle (Cycles)",
        "question": "During the water cycle, which process causes water vapor to lose heat and form liquid water droplets on a cold surface?",
        "options": ["Condensation", "Evaporation", "Melting", "Boiling"],
        "correctIndex": 0,
        "explanation": "Condensation occurs when warm water vapor loses heat to a cooler surface, transforming back into liquid droplets.",
        "hint": "Losing heat from gas to liquid."
    },
    {
        "topic": "Life Cycles (Cycles)",
        "question": "Which of the following animals undergoes a 4-stage life cycle with complete metamorphosis (Egg ➔ Larva ➔ Pupa ➔ Adult)?",
        "options": ["Butterfly and Mosquito", "Cockroach and Grasshopper", "Chicken and Duck", "Frog and Toad"],
        "correctIndex": 0,
        "explanation": "Butterflies and mosquitoes have 4-stage complete life cycles including a pupa stage. Cockroaches have 3 stages (nymph).",
        "hint": "Look for the insect that has a pupal or chrysalis stage."
    },
    {
        "topic": "Forms of Energy (Energy)",
        "question": "When an archer pulls back the string of a bow and holds it stationary, what form of energy is stored in the bent bow?",
        "options": ["Elastic potential energy", "Kinetic energy", "Chemical potential energy", "Sound energy"],
        "correctIndex": 0,
        "explanation": "Elastic potential energy is stored in objects when they are temporarily stretched or compressed.",
        "hint": "Energy stored when an elastic material is bent or stretched."
    },
    {
        "topic": "Interactions & Magnets",
        "question": "Which of the following metals is non-magnetic and CANNOT be attracted by a strong bar magnet?",
        "options": ["Copper", "Iron", "Nickel", "Steel"],
        "correctIndex": 0,
        "explanation": "Iron, cobalt, nickel, and steel are magnetic. Copper, aluminum, gold, and silver are non-magnetic.",
        "hint": "Commonly used in electrical wires, not attracted by magnets."
    },
    {
        "topic": "Interactions & Forces",
        "question": "Why do vehicle tires have deep tread grooves designed into their rubber surfaces?",
        "options": ["To increase friction with wet roads and prevent dangerous skidding", "To make cars travel silently", "To reduce the vehicle weight", "To absorb sunlight and warm the air"],
        "correctIndex": 0,
        "explanation": "Tread patterns channel water away and increase traction/friction between the tire and asphalt to avoid hydroplaning.",
        "hint": "Treads increase grip and prevent skidding."
    },
    {
        "topic": "Ecosystems & Adaptations",
        "question": "How does the thick layer of blubber beneath a polar bear's fur serve as a structural adaptation in the Arctic?",
        "options": ["It insulates body heat and prevents hypothermia in freezing sub-zero temperatures", "It helps the bear fly across snowdrifts", "It absorbs salt from seawater", "It attracts prey from distance"],
        "correctIndex": 0,
        "explanation": "Blubber acts as thermal insulation, trapping body heat to maintain homeostatic core temperature in icy conditions.",
        "hint": "Thermal insulation against extreme cold."
    }
]

build_subject('src/data/questions/cambridgeMath.ts', 'cambridgeMathQuestions', 'cam_math', 'cambridge', cam_math_base)
build_subject('src/data/questions/cambridgeEnglish.ts', 'cambridgeEnglishQuestions', 'cam_english', 'cambridge', cam_eng_base)
build_subject('src/data/questions/cambridgeScience.ts', 'cambridgeScienceQuestions', 'cam_science', 'cambridge', cam_sci_base)
build_subject('src/data/questions/cambridgeComputing.ts', 'cambridgeComputingQuestions', 'cam_computing', 'cambridge', cam_comp_base)
build_subject('src/data/questions/singaporeMath.ts', 'singaporeMathQuestions', 'sg_math', 'singapore', sg_math_base)
build_subject('src/data/questions/singaporeEnglish.ts', 'singaporeEnglishQuestions', 'sg_english', 'singapore', sg_eng_base)
build_subject('src/data/questions/singaporeScience.ts', 'singaporeScienceQuestions', 'sg_science', 'singapore', sg_sci_base)
