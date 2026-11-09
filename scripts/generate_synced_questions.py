import json
import os

os.makedirs('src/data/questions', exist_ok=True)

def write_ts(filename, var_name, questions):
    filepath = os.path.join('src/data/questions', filename)
    ts = "import { Question } from '../../types/quiz';\n\n"
    ts += f"export const {var_name}: Question[] = "
    ts += json.dumps(questions, indent=2, ensure_ascii=False)
    ts += ";\n"
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(ts)
    print(f"Generated {len(questions)} questions in {filepath}")

def q(qid, subject, curr, grade, strand, topic, question, options, correct_idx, exp, hint, diff='Sedang'):
    phase = f"Stage {grade}" if curr == 'cambridge' else f"Primary {grade}" if curr == 'singapore' else f"Kelas {grade}"
    return {
        "id": qid,
        "subject": subject,
        "curriculum": curr,
        "grade": grade,
        "phase": phase,
        "syllabusStrand": strand,
        "topic": topic,
        "question": question,
        "options": options,
        "correctIndex": correct_idx,
        "explanation": exp,
        "hint": hint,
        "difficulty": diff
    }

# =========================================================================
# CAMBRIDGE ENGLISH (Stage 1 to 6)
# =========================================================================
cam_eng = []

# Stage 1
cam_eng.extend([
    q("cam_eng-g1-01", "cam_english", "cambridge", 1, "Reading", "Phonics & Letter sounds",
      "Which sound does the word 'Sun' begin with?",
      ["/s/", "/m/", "/p/", "/t/"], 0,
      "'Sun' begins with the letter S, making the /s/ initial sound.", "Listen to the very first sound of Sun.", "Mudah"),
    q("cam_eng-g1-02", "cam_english", "cambridge", 1, "Reading", "Blending & Segmenting",
      "Blend the sounds together: /c/ - /a/ - /t/. What word does it make?",
      ["Cat", "Cot", "Cup", "Cut"], 0,
      "/c/ + /a/ + /t/ blends into 'cat'.", "Say the sounds faster together: c-a-t.", "Mudah"),
    q("cam_eng-g1-03", "cam_english", "cambridge", 1, "Reading", "Sight words & High-frequency words",
      "Complete the sentence with the correct sight word: 'She ______ a red balloon.'",
      ["has", "are", "were", "be"], 0,
      "The singular pronoun 'she' takes the present verb 'has'.", "Singular third-person subject.", "Mudah"),
    q("cam_eng-g1-04", "cam_english", "cambridge", 1, "Writing", "Capital letters & Full stops",
      "Which sentence has the correct capital letter and full stop?",
      ["The dog is barking.", "the dog is barking.", "The dog is barking", "the dog is barking"], 0,
      "Every complete sentence begins with a capital letter and ends with a full stop.", "Check both the start and end of the sentence.", "Mudah"),
    q("cam_eng-g1-05", "cam_english", "cambridge", 1, "Writing", "Spelling & Simple sentences",
      "Which word is spelled correctly for the animal with big ears that hops?",
      ["Rabbit", "Rabit", "Rabbitt", "Rabbet"], 0,
      "The correct standard spelling is 'rabbit' with double 'b'.", "Think of two letter b's in the middle.", "Mudah"),
    q("cam_eng-g1-06", "cam_english", "cambridge", 1, "Grammar & Vocabulary", "Nouns",
      "Which of these words is a NOUN (naming word)?",
      ["Apple", "Quickly", "Run", "Yellow"], 0,
      "'Apple' is a noun because it names a fruit/thing.", "A noun is a person, animal, place, or thing.", "Mudah"),
    q("cam_eng-g1-07", "cam_english", "cambridge", 1, "Grammar & Vocabulary", "Singular and plural",
      "What is the plural of 'cat' when there are three of them?",
      ["Cats", "Cates", "Caties", "Catos"], 0,
      "Most regular nouns form their plural by adding -s: 'cats'.", "Add 's' at the end of cat.", "Mudah"),
    q("cam_eng-g1-08", "cam_english", "cambridge", 1, "Speaking & Listening", "Greetings & Introductions",
      "What is the best polite way to greet a teacher in the morning?",
      ["Good morning, teacher!", "Hey you!", "Bye bye!", "Give me that."], 0,
      "'Good morning, teacher!' is a courteous and respectful morning greeting.", "Polite morning greeting.", "Mudah"),
    q("cam_eng-g1-09", "cam_english", "cambridge", 1, "Reading", "Characters & Setting",
      "In the story of 'Goldilocks and the Three Bears', where is the SETTING?",
      ["A cottage in the forest", "At the airport", "Under the sea", "In a spaceship"], 0,
      "The setting is the place and time: the cottage in the forest.", "Where did the three bears live?", "Mudah"),
    q("cam_eng-g1-10", "cam_english", "cambridge", 1, "Writing", "Labels & Simple instructions",
      "What should you write under a drawing of a smiling flower?",
      ["Flower", "Swimming pool", "Truck", "Airplane"], 0,
      "A label accurately names what is shown in the picture.", "Name what is drawn in the picture.", "Mudah"),
    q("cam_eng-g1-11", "cam_english", "cambridge", 1, "Grammar & Vocabulary", "Adjectives",
      "Which word is an ADJECTIVE (describing word) in: 'The shiny star twinkles'?",
      ["shiny", "star", "twinkles", "the"], 0,
      "'Shiny' describes how the star looks.", "Which word describes the star?", "Mudah"),
    q("cam_eng-g1-12", "cam_english", "cambridge", 1, "Speaking & Listening", "Following instructions",
      "If the teacher says 'Please open your book to page 5', what should you do?",
      ["Turn pages until reaching number 5", "Close the book and put it in your bag", "Sing a song", "Leave the classroom"], 0,
      "Following instructions means listening attentively and performing the exact action requested.", "Locate page 5.", "Mudah")
])

# Stage 2
cam_eng.extend([
    q("cam_eng-g2-01", "cam_english", "cambridge", 2, "Reading", "Fiction & Character",
      "Why did the little bear feel sad when he saw his broken chair?",
      ["His favorite chair was smashed and he could not sit in it", "He wanted to go to sleep", "He wanted honey", "He lost his shoes"], 0,
      "The broken chair made baby bear sad because his favorite item was ruined.", "Look at character emotion and cause.", "Mudah"),
    q("cam_eng-g2-02", "cam_english", "cambridge", 2, "Reading", "Non-fiction & Supporting details",
      "In a non-fiction text about penguins, which feature helps penguins stay warm?",
      ["A dense layer of feathers and thick blubber (fat)", "Eating ice cubes", "Flying to warm clouds", "Sleeping underwater"], 0,
      "Penguins survive Antarctic cold through insulating blubber and tightly packed feathers.", "Think of what keeps sea animals warm in polar regions.", "Mudah"),
    q("cam_eng-g2-03", "cam_english", "cambridge", 2, "Writing", "Narrative writing",
      "What is the first part of a story that introduces the characters and setting called?",
      ["Orientation (Beginning)", "Complication (Problem)", "Resolution (Ending)", "Index"], 0,
      "The orientation introduces the 'who', 'where', and 'when' of the narrative.", "The start that introduces characters and setting.", "Mudah"),
    q("cam_eng-g2-04", "cam_english", "cambridge", 2, "Writing", "Instructions & Imperative verbs",
      "Which sentence uses a command (bossy/imperative) verb suitable for recipe instructions?",
      ["Mix the flour and butter in a large bowl.", "I love delicious butter.", "Flour is white and powdery.", "Would you like some cookies?"], 0,
      "'Mix' is an imperative (bossy) verb directing action directly.", "Command verbs start with an action word.", "Mudah"),
    q("cam_eng-g2-05", "cam_english", "cambridge", 2, "Grammar & Vocabulary", "Common & Proper nouns",
      "Which word in the sentence needs a CAPITAL letter because it is a PROPER noun? 'We visited london during the holidays.'",
      ["london (London)", "holidays", "visited", "during"], 0,
      "London is the specific name of a city and must always be capitalized.", "Name of a specific capital city.", "Mudah"),
    q("cam_eng-g2-06", "cam_english", "cambridge", 2, "Grammar & Vocabulary", "Adverbs",
      "Which word in this sentence is an ADVERB telling HOW the turtle moved? 'The turtle walked slowly across the sand.'",
      ["slowly", "turtle", "walked", "sand"], 0,
      "'Slowly' is an adverb of manner describing how the action was performed.", "Words ending in -ly often tell how an action happens.", "Mudah"),
    q("cam_eng-g2-07", "cam_english", "cambridge", 2, "Grammar & Vocabulary", "Conjunctions",
      "Combine these two thoughts: 'I wanted to play outside. It started to rain.'",
      ["I wanted to play outside, but it started to rain.", "I wanted to play outside so it started to rain.", "I wanted to play outside because it started to rain.", "I wanted to play outside and it started to rain."], 0,
      "'But' expresses contrast between the desire to play and the rain stopping it.", "Use a connecting word showing contrast.", "Mudah"),
    q("cam_eng-g2-08", "cam_english", "cambridge", 2, "Speaking & Listening", "Giving opinions & Reasons",
      "Which statement expresses an opinion with a clear supporting reason?",
      ["I prefer storybooks because they take me on exciting adventures.", "This is a book.", "Read that page now.", "Books are made of paper."], 0,
      "Expresses preference ('I prefer...') and explains why ('because...').", "Look for 'because' explaining a feeling or choice.", "Mudah"),
    q("cam_eng-g2-09", "cam_english", "cambridge", 2, "Reading", "Poetry & Rhyming words",
      "Which word rhymes with 'star' and has a matching sound?",
      ["Car", "Sun", "Sky", "Moon"], 0,
      "'Star' and 'car' share the same ending sound /-ar/.", "Words that end with the exact same phonetic sound.", "Mudah"),
    q("cam_eng-g2-10", "cam_english", "cambridge", 2, "Writing", "Editing basic writing",
      "Which error is present in: 'Yesterday she go to the supermarket.'?",
      ["The past tense verb should be 'went', not 'go'", "There is no full stop", "Supermarket is misspelled", "Yesterday cannot be used"], 0,
      "'Yesterday' indicates past time, so the irregular past tense 'went' is required.", "Check the tense of the verb with 'Yesterday'.", "Sedang")
])

# Stage 3
cam_eng.extend([
    q("cam_eng-g3-01", "cam_english", "cambridge", 3, "Reading", "Inference & Prediction",
      "The dark clouds gathered, the wind howled, and birds flew to their nests. What can you INFER will happen next?",
      ["A heavy thunderstorm is about to break out", "The sun will shine brightly all day", "A snowfall in summer", "It will be completely dry"], 0,
      "Gathering dark clouds and howling wind are classic textual clues inferring an approaching storm.", "Read the clues: dark clouds and strong wind.", "Mudah"),
    q("cam_eng-g3-02", "cam_english", "cambridge", 3, "Reading", "Main idea & Comparing texts",
      "What is the MAIN IDEA of a paragraph explaining honeybees collecting nectar and pollinating flowers?",
      ["Honeybees play a vital role in plant reproduction while gathering food", "Bees make a buzzing noise", "Honey is sweet and sticky", "Flowers have colorful petals"], 0,
      "The paragraph centers on how bees gather nectar and help plants reproduce through pollination.", "Summarize the primary point of the paragraph.", "Sedang"),
    q("cam_eng-g3-03", "cam_english", "cambridge", 3, "Writing", "Informative writing & Reports",
      "Which feature is typical of an informative report about rainforest animals?",
      ["Subheadings, factual language, and diagrams with captions", "Fictional dragons and magic wands", "Rhyming couplets at each line", "Dialogue with talking animals"], 0,
      "Informative reports utilize subheadings, factual vocabulary, and captioned illustrations.", "Factual texts organize ideas with subheadings and diagrams.", "Sedang"),
    q("cam_eng-g3-04", "cam_english", "cambridge", 3, "Writing", "Letters & Diary writing",
      "In an informal letter to a friend, what is the customary salutation?",
      ["Dear Oliver,", "To Whom It May Concern:", "Dear Sir/Madam,", "Notice to all occupants:"], 0,
      "'Dear [Name],' is standard and friendly for personal letters.", "Friendly personal greeting.", "Mudah"),
    q("cam_eng-g3-05", "cam_english", "cambridge", 3, "Grammar", "Direct speech & Punctuation",
      "Which sentence correctly punctuates direct speech?",
      ["\"Look at that shooting star!\" whispered Maya.", "\"Look at that shooting star! whispered Maya.\"", "Look at that shooting star! whispered Maya.", "\"Look at that shooting star\"! whispered Maya."], 0,
      "Spoken words are enclosed within inverted commas, with punctuation placed inside the quotation marks.", "Punctuation mark stays inside the inverted commas.", "Sedang"),
    q("cam_eng-g3-06", "cam_english", "cambridge", 3, "Grammar", "Prepositions & Sentence types",
      "Identify the PREPOSITION in: 'The squirrel hid its acorn underneath the mossy log.'",
      ["underneath", "squirrel", "mossy", "acorn"], 0,
      "'Underneath' expresses the spatial relationship (position) of the acorn relative to the log.", "A word showing position or direction.", "Mudah"),
    q("cam_eng-g3-07", "cam_english", "cambridge", 3, "Grammar", "Tenses",
      "Convert the sentence to PAST CONTINUOUS tense: 'She reads a story.'",
      ["She was reading a story.", "She will read a story.", "She had read a story.", "She has read a story."], 0,
      "Past continuous is formed with was/were + verb-ing: 'was reading'.", "was/were + verb-ing.", "Sedang"),
    q("cam_eng-g3-08", "cam_english", "cambridge", 3, "Speaking & Listening", "Presentation & Giving reasons",
      "When presenting a book recommendation to the class, how should the speaker engage the audience?",
      ["Speak clearly, maintain eye contact, and explain why the book was memorable", "Read looking down at shoes and mumble softly", "Shout angrily at classmates", "Talk about an unrelated video game"], 0,
      "Effective presentation involves eye contact, audible projection, and persuasive personal reasons.", "Good posture, eye contact, and clear reasons.", "Mudah")
])

# Stage 4
cam_eng.extend([
    q("cam_eng-g4-01", "cam_english", "cambridge", 4, "Reading", "Author's purpose & Viewpoint",
      "Why did the author write an article titled 'Save Our Coral Reefs: Actions You Can Take Today'?",
      ["To persuade readers to protect marine biodiversity and take conservation actions", "To entertain readers with jokes about sharks", "To explain how to build an aquarium tank at home", "To sell scuba diving tickets"], 0,
      "The title and focus show a clear persuasive purpose urging environmental protection.", "Persuading readers to take conservation action.", "Sedang"),
    q("cam_eng-g4-02", "cam_english", "cambridge", 4, "Reading", "Summarising & Key evidence",
      "When summarising a multi-paragraph article, what should you include?",
      ["The central theme and main supporting points in concise words", "Every single dialogue and minor anecdote", "Personal insults about the characters", "A copy of all paragraphs word for word"], 0,
      "A summary condenses main ideas and essential evidence concisely without irrelevant details.", "Brief overview of main ideas only.", "Sedang"),
    q("cam_eng-g4-03", "cam_english", "cambridge", 4, "Writing", "Persuasive writing & Rhetorical techniques",
      "Which sentence uses a rhetorical question to make readers reflect?",
      ["Can we truly stand by while our ancient forests disappear forever?", "Forests have many trees.", "Go to the forest tomorrow.", "The forest covers fifty square kilometers."], 0,
      "A rhetorical question prompts thoughtful contemplation rather than expecting a direct spoken answer.", "A question asked to make a point rather than seek an answer.", "Sedang"),
    q("cam_eng-g4-04", "cam_english", "cambridge", 4, "Writing", "Paragraph development & Topic sentences",
      "What is the role of a TOPIC SENTENCE in a well-structured paragraph?",
      ["It states the main focus or controlling idea of the entire paragraph", "It lists the bibliography and copyright year", "It must always be written in rhyming verse", "It tells a completely unrelated joke"], 0,
      "A topic sentence introduces the primary focus that subsequent supporting sentences will develop.", "The sentence that states the main point of the paragraph.", "Sedang"),
    q("cam_eng-g4-05", "cam_english", "cambridge", 4, "Grammar", "Subject-verb agreement",
      "Choose the sentence with correct SUBJECT-VERB AGREEMENT:",
      ["The choir of young singers performs beautifully every Sunday.", "The choir of young singers perform beautifully every Sunday.", "The choir of young singers were performing wrong.", "The choir of young singers are perform."], 0,
      "The collective singular noun 'choir' requires the singular verb 'performs'.", "Identify the true singular subject 'choir'.", "Sedang"),
    q("cam_eng-g4-06", "cam_english", "cambridge", 4, "Grammar", "Clauses & Complex sentences",
      "Which clause is a DEPENDENT (subordinate) clause in: 'Although it was freezing cold, we continued our hike.'?",
      ["Although it was freezing cold", "we continued our hike", "our hike continued", "it was cold"], 0,
      "'Although it was freezing cold' begins with a subordinating conjunction and cannot stand alone as a sentence.", "Starts with subordinating conjunction 'Although'.", "Sedang")
])

# Stage 5
cam_eng.extend([
    q("cam_eng-g5-01", "cam_english", "cambridge", 5, "Reading", "Tone, Viewpoint & Evaluating information",
      "If a writer uses words like 'alarming', 'catastrophic', and 'unforgivable neglect', what is the author's TONE?",
      ["Urgent, critical, and impassioned", "Humorous and playful", "Indifferent and bored", "Gentle and welcoming"], 0,
      "Word choice like 'catastrophic' and 'unforgivable' expresses severe criticism and urgency.", "Look at emotional intensity of chosen words.", "Sedang"),
    q("cam_eng-g5-02", "cam_english", "cambridge", 5, "Reading", "Comparing texts & Perspective",
      "Text A praises city bicycles for reducing pollution. Text B warns about cyclist safety on narrow roads. What do they show?",
      ["Different perspectives on cycling infrastructure in urban areas", "That both authors hate bicycles", "That bicycles are illegal in all cities", "That bicycles are only for children"], 0,
      "Comparative analysis evaluates how different authors present distinct aspects of the same topic.", "Different viewpoints on urban cycling.", "Sedang"),
    q("cam_eng-g5-03", "cam_english", "cambridge", 5, "Writing", "Articles & Speeches",
      "Which technique is most effective when opening an inspirational speech at school assembly?",
      ["A compelling hook: a powerful quote, surprising fact, or engaging story", "Reading the school rules word by word in a flat voice", "Apologizing repeatedly for being nervous", "Staring silently for five minutes"], 0,
      "An effective speech begins with a captivating hook to capture audience attention immediately.", "A strong hook engages listeners right away.", "Sedang"),
    q("cam_eng-g5-04", "cam_english", "cambridge", 5, "Writing", "Paragraph cohesion & Transitions",
      "Which transitional phrase shows CONSEQUENCE or RESULT between ideas?",
      ["Consequently,", "On the other hand,", "Similarly,", "Initially,"], 0,
      "'Consequently' indicates that the following statement is the result of the preceding one.", "Shows that idea B is the result of idea A.", "Sedang"),
    q("cam_eng-g5-05", "cam_english", "cambridge", 5, "Grammar & Language", "Modal verbs",
      "Which modal verb expresses strict OBLIGATION or NECESSITY?",
      ["Must", "Might", "Could", "May"], 0,
      "'Must' denotes mandatory obligation, whereas 'might' and 'could' express mere possibility.", "Modal showing essential requirement.", "Sedang"),
    q("cam_eng-g5-06", "cam_english", "cambridge", 5, "Grammar & Language", "Figurative language & Metaphors",
      "Identify the METAPHOR in the following sentence:",
      ["The classroom was a bustling beehive of creative activity.", "The girl was as fast as a cheetah.", "The wind whispered softly in the trees.", "Tick-tock went the antique clock."], 0,
      "Describing the classroom directly as a 'bustling beehive' is a metaphor (comparing without using 'like' or 'as').", "Directly equates two things without 'like' or 'as'.", "Sedang")
])

# Stage 6
cam_eng.extend([
    q("cam_eng-g6-01", "cam_english", "cambridge", 6, "Reading", "Bias, Viewpoint & Evaluating evidence",
      "How can a discerning reader detect BIAS in a newspaper editorial?",
      ["By identifying one-sided emotional language and omission of counter-arguments", "By checking if the article is printed in black ink", "By counting how many commas are in the text", "By checking if the font is Times New Roman"], 0,
      "Bias reveals itself through subjective framing, emotive diction, and purposeful neglect of opposing facts.", "Look for one-sided assertions and omitted perspectives.", "Tantangan"),
    q("cam_eng-g6-02", "cam_english", "cambridge", 6, "Reading", "Inference & Implicit meaning",
      "'The director glanced at the empty auditorium, folded the script, and quietly switched off the stage lights.' What is implied?",
      ["The production had failed to attract an audience and was canceled", "The show was an international box-office hit", "The audience was hiding under the seats", "A celebration party was starting on stage"], 0,
      "The subtle combination of empty seats, folded script, and turned-off lights symbolizes quiet defeat and cancellation.", "Read between the lines: folded script and extinguished lights.", "Tantangan"),
    q("cam_eng-g6-03", "cam_english", "cambridge", 6, "Writing", "Argumentative writing & Counter-arguments",
      "Why does a strong argumentative essay address and refute a COUNTER-ARGUMENT?",
      ["To demonstrate comprehensive understanding and prove why the opposing claim is flawed", "To confuse the reader and change the topic", "To agree completely with opponents and surrender", "To make the essay twice as long without thinking"], 0,
      "Acknowledging and disproving counter-arguments strengthens credibility and bolsters the primary thesis.", "Refuting opposing views validates the writer's thesis.", "Tantangan"),
    q("cam_eng-g6-04", "cam_english", "cambridge", 6, "Writing", "Cohesion & Advanced style",
      "Which stylistic device is demonstrated in: 'He came, he saw, he conquered'?",
      ["Tricolon (rule of three) with parallel structure", "Onomatopoeia", "Personification", "Hyperbole"], 0,
      "A tricolon uses three parallel clauses to create rhythmic emphasis and rhetorical impact.", "Three parallel rhythmic units.", "Tantangan"),
    q("cam_eng-g6-05", "cam_english", "cambridge", 6, "Grammar & Language", "Active & Passive voice",
      "Identify the sentence written in PASSIVE voice:",
      ["The ancient temple was restored by expert archaeologists.", "Expert archaeologists restored the ancient temple.", "Archaeologists carefully mapped the excavation site.", "The museum displays rare artifacts."], 0,
      "In passive voice, the target of action ('the ancient temple') becomes the grammatical subject with 'was restored by...'.", "Subject receives the action ('was restored by').", "Sedang"),
    q("cam_eng-g6-06", "cam_english", "cambridge", 6, "Grammar & Language", "Direct & Indirect speech",
      "Convert to INDIRECT SPEECH: Liam said, \"I will finish my science project tomorrow.\"",
      ["Liam said that he would finish his science project the following day.", "Liam said that I will finish my science project tomorrow.", "Liam said that he will finish his science project yesterday.", "Liam said that he finished his project."], 0,
      "Tense shifts from 'will' to 'would', personal pronoun shifts to 'he', and 'tomorrow' becomes 'the following day'.", "Backshift 'will' to 'would' and change 'tomorrow'.", "Tantangan")
])

write_ts('cambridgeEnglish.ts', 'cambridgeEnglishQuestions', cam_eng)

# =========================================================================
# CAMBRIDGE MATHEMATICS (Stage 1 to 6)
# =========================================================================
cam_math = []

# Stage 1
cam_math.extend([
    q("cam_mat-g1-01", "cam_math", "cambridge", 1, "Number", "Counting & Place value",
      "Which number comes directly after 19 when counting forward?",
      ["20", "18", "21", "29"], 0,
      "When counting in sequence: 18, 19, 20.", "Add 1 to 19.", "Mudah"),
    q("cam_mat-g1-02", "cam_math", "cambridge", 1, "Number", "Number bonds & Addition",
      "What is the number bond to make 10: 7 + _____ = 10?",
      ["3", "4", "2", "5"], 0,
      "7 + 3 = 10. They are number bonds to 10.", "Count on from 7 to reach 10: 8, 9, 10.", "Mudah"),
    q("cam_mat-g1-03", "cam_math", "cambridge", 1, "Number", "Doubles & Halves",
      "What is DOUBLE 6?",
      ["12", "10", "14", "16"], 0,
      "Double 6 means 6 + 6 = 12.", "Add 6 to itself.", "Mudah"),
    q("cam_mat-g1-04", "cam_math", "cambridge", 1, "Geometry and Measure", "2D shapes",
      "How many straight sides and corners does a TRIANGLE have?",
      ["3 sides and 3 corners", "4 sides and 4 corners", "5 sides and 5 corners", "0 sides and 0 corners"], 0,
      "Triangles are 3-sided 2D polygons with 3 vertices (corners).", "Tri means three.", "Mudah"),
    q("cam_mat-g1-05", "cam_math", "cambridge", 1, "Geometry and Measure", "Length & Height",
      "Which tool is best used to measure the length of a pencil in centimeters?",
      ["A 30 cm ruler", "A kitchen weighing scale", "A thermometer", "A measuring jug"], 0,
      "A ruler is calibrated in centimeters to measure length.", "Use a ruler for length.", "Mudah"),
    q("cam_mat-g1-06", "cam_math", "cambridge", 1, "Statistics and Probability", "Sorting & Classification",
      "Sarah sorts shapes into circles, squares, and triangles. What is this sorting rule based on?",
      ["Shape (geometry)", "Color only", "Weight only", "Smell"], 0,
      "Grouping circles, squares, and triangles classifies objects by geometric shape.", "Sorting by shape type.", "Mudah"),
    q("cam_mat-g1-07", "cam_math", "cambridge", 1, "Thinking and Working Mathematically", "Patterns & Reasoning",
      "Complete the repeating pattern: Red, Blue, Blue, Red, Blue, Blue, Red, ______?",
      ["Blue", "Red", "Green", "Yellow"], 0,
      "The pattern rule repeats: [Red, Blue, Blue]. After Red comes Blue.", "Look at what follows every Red in the sequence.", "Mudah")
])

# Stage 2
cam_math.extend([
    q("cam_mat-g2-01", "cam_math", "cambridge", 2, "Number", "Place value & Partitioning",
      "In the two-digit number 74, what is the value of the digit 7?",
      ["70 (7 tens)", "7 (7 ones)", "700", "74"], 0,
      "7 is in the tens column: 7 tens = 70.", "Check the tens place column.", "Mudah"),
    q("cam_mat-g2-02", "cam_math", "cambridge", 2, "Number", "Multiplication & Division",
      "There are 5 bags. Each bag contains 4 apples. How many apples are there altogether?",
      ["20 apples", "15 apples", "25 apples", "9 apples"], 0,
      "5 groups of 4 = 5 × 4 = 20 apples.", "Multiply 5 by 4.", "Mudah"),
    q("cam_mat-g2-03", "cam_math", "cambridge", 2, "Number", "Fractions",
      "What fraction represents ONE HALF of 16?",
      ["8", "4", "10", "12"], 0,
      "Half of 16 is 16 ÷ 2 = 8.", "Divide 16 into 2 equal parts.", "Mudah"),
    q("cam_mat-g2-04", "cam_math", "cambridge", 2, "Geometry and Measure", "3D shapes & Symmetry",
      "Which 3D shape has 6 identical square faces, 12 edges, and 8 vertices?",
      ["Cube", "Cylinder", "Cone", "Sphere"], 0,
      "A cube is composed of 6 equal square faces.", "Think of a playing die.", "Mudah"),
    q("cam_mat-g2-05", "cam_math", "cambridge", 2, "Geometry and Measure", "Time & Clocks",
      "The minute hand points to 6 and the hour hand is halfway between 3 and 4. What time is it?",
      ["Half past 3 (3:30)", "3 o'clock (3:00)", "Quarter to 4 (3:45)", "4 o'clock (4:00)"], 0,
      "Minute hand at 6 indicates 30 minutes past the hour (half past 3).", "Minute hand at 6 means 30 minutes.", "Mudah"),
    q("cam_mat-g2-06", "cam_math", "cambridge", 2, "Statistics and Probability", "Pictograms & Charts",
      "In a pictogram where 1 star symbol represents 2 books read, how many books do 4 stars represent?",
      ["8 books", "4 books", "6 books", "10 books"], 0,
      "4 symbols × 2 books per symbol = 8 books.", "Multiply number of symbols by key value.", "Mudah"),
    q("cam_mat-g2-07", "cam_math", "cambridge", 2, "Thinking and Working Mathematically", "Problem solving & Generalising",
      "What happens to any whole number when you add 0 to it?",
      ["The number remains completely unchanged", "The number doubles", "The number becomes zero", "The number increases by 10"], 0,
      "Zero is the additive identity: n + 0 = n.", "Adding nothing leaves the quantity the same.", "Mudah")
])

# Stage 3
cam_math.extend([
    q("cam_mat-g3-01", "cam_math", "cambridge", 3, "Number", "Whole numbers & Rounding",
      "Round 368 to the nearest 10:",
      ["370", "360", "400", "350"], 0,
      "Look at the units digit (8). Since 8 ≥ 5, round tens up from 60 to 70.", "Check the ones digit 8.", "Mudah"),
    q("cam_mat-g3-02", "cam_math", "cambridge", 3, "Number", "Fractions & Equivalent fractions",
      "Which fraction is equivalent to 1/2?",
      ["4/8", "2/6", "3/9", "4/12"], 0,
      "Multiplying numerator and denominator of 1/2 by 4 gives 4/8.", "Multiply top and bottom by 4.", "Mudah"),
    q("cam_mat-g3-03", "cam_math", "cambridge", 3, "Number", "Multiplication tables",
      "Calculate: 8 × 7 = ______",
      ["56", "54", "48", "63"], 0,
      "8 multiplied by 7 equals 56.", "Multiplication table fact: 7 x 8.", "Mudah"),
    q("cam_mat-g3-04", "cam_math", "cambridge", 3, "Geometry and Measure", "Perimeter & Angles",
      "A rectangle has a length of 8 cm and a width of 5 cm. What is its PERIMETER?",
      ["26 cm", "40 cm", "13 cm", "20 cm"], 0,
      "Perimeter = 2 × (length + width) = 2 × (8 + 5) = 2 × 13 = 26 cm.", "Add all 4 outer sides: 8 + 5 + 8 + 5.", "Sedang"),
    q("cam_mat-g3-05", "cam_math", "cambridge", 3, "Geometry and Measure", "Mass & Capacity",
      "How many grams (g) are in 2.5 kilograms (kg)?",
      ["2,500 g", "250 g", "25,000 g", "205 g"], 0,
      "1 kg = 1,000 g, so 2.5 × 1,000 = 2,500 g.", "Multiply by 1,000.", "Mudah"),
    q("cam_mat-g3-06", "cam_math", "cambridge", 3, "Statistics and Probability", "Bar charts & Data interpretation",
      "On a bar chart with a scale counting in 5s, the bar for 'Apples' reaches halfway between 20 and 25. How many apples are there?",
      ["22.5 (or about 22-23)", "30", "15", "50"], 0,
      "Halfway between 20 and 25 is 22.5.", "Find the midpoint between 20 and 25.", "Sedang"),
    q("cam_mat-g3-07", "cam_math", "cambridge", 3, "Thinking and Working Mathematically", "Mathematical reasoning",
      "Is the sum of any two ODD numbers always EVEN or ODD? (e.g., 3 + 5 = 8, 7 + 9 = 16)",
      ["Always EVEN", "Always ODD", "Sometimes even, sometimes odd", "Always prime"], 0,
      "Two odd numbers (2a+1 + 2b+1 = 2(a+b+1)) always sum to an even number.", "Try testing a few pairs: 1+3=4, 5+7=12.", "Sedang")
])

# Stage 4
cam_math.extend([
    q("cam_mat-g4-01", "cam_math", "cambridge", 4, "Number", "Decimals & Place value",
      "What is the value of the digit 4 in the decimal number 15.42?",
      ["4 tenths (0.4)", "4 hundredths (0.04)", "4 ones (4)", "4 tens (40)"], 0,
      "The first digit after the decimal point represents tenths: 4/10 = 0.4.", "First position to the right of the decimal point.", "Mudah"),
    q("cam_mat-g4-02", "cam_math", "cambridge", 4, "Number", "Fractions to Decimals",
      "Convert the fraction 3/4 into a decimal:",
      ["0.75", "0.34", "0.43", "0.25"], 0,
      "3 ÷ 4 = 0.75.", "Think of 75 cents out of a dollar.", "Mudah"),
    q("cam_mat-g4-03", "cam_math", "cambridge", 4, "Geometry and Measure", "Area of rectangles",
      "A rectangular playground measures 12 m long and 7 m wide. What is its AREA?",
      ["84 m²", "38 m²", "96 m²", "42 m²"], 0,
      "Area of a rectangle = length × width = 12 × 7 = 84 m².", "Multiply length by width.", "Sedang"),
    q("cam_mat-g4-04", "cam_math", "cambridge", 4, "Geometry and Measure", "Angles & Classification",
      "What type of angle measures exactly 90 degrees?",
      ["A right angle", "An acute angle", "An obtuse angle", "A reflex angle"], 0,
      "A 90-degree angle is a right angle (forms a square corner).", "Square corner angle.", "Mudah"),
    q("cam_mat-g4-05", "cam_math", "cambridge", 4, "Geometry and Measure", "Transformations & Symmetry",
      "When a shape is REFLECTED across a mirror line, what changes?",
      ["Its orientation (facing direction), but size and shape stay the same", "Its size doubles", "It turns into a circle", "It gains more sides"], 0,
      "Reflection produces a congruent mirror image with reversed orientation.", "A mirror flip preserves shape and size.", "Sedang"),
    q("cam_mat-g4-06", "cam_math", "cambridge", 4, "Statistics and Probability", "Line graphs & Probability",
      "A line graph shows temperature rising from 18°C at 6 AM to 28°C at 12 noon. What trend does this show?",
      ["Temperature increases steadily during the morning", "Temperature drops rapidly", "Temperature remains completely frozen", "No pattern exists"], 0,
      "The upward slope indicates steady warming as morning progresses.", "Follow the slope going upwards.", "Mudah"),
    q("cam_mat-g4-07", "cam_math", "cambridge", 4, "Thinking and Working Mathematically", "Pattern finding & Verification",
      "Look at the sequence: 4, 9, 14, 19, 24... What is the rule?",
      ["Add 5 each time", "Multiply by 2", "Subtract 3", "Add 4 then add 1"], 0,
      "The common difference is +5 (9-4=5, 14-9=5).", "Find the constant difference between terms.", "Mudah")
])

# Stage 5
cam_math.extend([
    q("cam_mat-g5-01", "cam_math", "cambridge", 5, "Number", "Percentages & Decimals",
      "What is 25% of $160?",
      ["$40", "$30", "$25", "$50"], 0,
      "25% is equal to 1/4. $160 ÷ 4 = $40.", "Find one quarter of 160.", "Sedang"),
    q("cam_mat-g5-02", "cam_math", "cambridge", 5, "Number", "Ratio & Proportion",
      "The ratio of boys to girls in a club is 2 : 3. If there are 12 boys, how many girls are there?",
      ["18 girls", "15 girls", "20 girls", "24 girls"], 0,
      "2 parts = 12, so 1 part = 6. 3 parts = 3 × 6 = 18 girls.", "Find the value of 1 ratio part first.", "Sedang"),
    q("cam_mat-g5-03", "cam_math", "cambridge", 5, "Number", "Powers & Square numbers",
      "What is the value of 7 squared (7²)?",
      ["49", "14", "42", "56"], 0,
      "7² = 7 × 7 = 49.", "Multiply 7 by 7.", "Mudah"),
    q("cam_mat-g5-04", "cam_math", "cambridge", 5, "Geometry and Measure", "Volume of cuboids",
      "Calculate the VOLUME of a rectangular box with length 6 cm, width 4 cm, and height 3 cm:",
      ["72 cm³", "13 cm³", "24 cm³", "48 cm³"], 0,
      "Volume = length × width × height = 6 × 4 × 3 = 72 cm³.", "Multiply all three dimensions: l × w × h.", "Sedang"),
    q("cam_mat-g5-05", "cam_math", "cambridge", 5, "Geometry and Measure", "Coordinates & Grid",
      "In the coordinate point (4, 7), which coordinate gives the horizontal distance from the origin?",
      ["4 (the x-coordinate)", "7 (the y-coordinate)", "11", "0"], 0,
      "Coordinates are written (x, y); x gives horizontal distance along the x-axis.", "Remember: x comes before y (along the corridor, then up the stairs).", "Mudah"),
    q("cam_mat-g5-06", "cam_math", "cambridge", 5, "Statistics and Probability", "Mode, Median, Mean",
      "Find the MEAN (average) of these test scores: 6, 8, 10, 12, 14:",
      ["10", "8", "12", "50"], 0,
      "Sum = 6 + 8 + 10 + 12 + 14 = 50. Mean = 50 ÷ 5 = 10.", "Add all scores together, then divide by 5.", "Sedang"),
    q("cam_mat-g5-07", "cam_math", "cambridge", 5, "Thinking and Working Mathematically", "Generalising & Justifying",
      "Why must the interior angles of ANY triangle always add up to 180°?",
      ["It is a fundamental geometric property of Euclidean plane geometry", "Because triangles have 4 sides", "Only equilateral triangles do this", "Because 180 is divisible by 3"], 0,
      "In plane geometry, parallel line properties prove the interior angles sum to a straight line (180°).", "Angles in any triangle sum to a straight angle (180°).", "Sedang")
])

# Stage 6
cam_math.extend([
    q("cam_mat-g6-01", "cam_math", "cambridge", 6, "Number", "Integers & Negative numbers",
      "The temperature was -5°C at dawn and rose by 8°C by midday. What was the midday temperature?",
      ["+3°C", "-3°C", "+13°C", "-13°C"], 0,
      "-5 + 8 = +3°C.", "Count forward 8 units from -5 on the number line.", "Sedang"),
    q("cam_mat-g6-02", "cam_math", "cambridge", 6, "Number", "Order of operations (BIDMAS / BODMAS)",
      "Evaluate: 18 - 3 × 4 + 2 =",
      ["8", "62", "20", "14"], 0,
      "Multiplication first: 3 × 4 = 12. Then left to right: 18 - 12 + 2 = 6 + 2 = 8.", "Multiply before adding or subtracting.", "Sedang"),
    q("cam_mat-g6-03", "cam_math", "cambridge", 6, "Number", "Algebra & Unknowns",
      "Solve for x: 3x + 7 = 25",
      ["x = 6", "x = 8", "x = 5", "x = 7"], 0,
      "3x = 25 - 7 = 18. x = 18 ÷ 3 = 6.", "Subtract 7 from both sides, then divide by 3.", "Sedang"),
    q("cam_mat-g6-04", "cam_math", "cambridge", 6, "Geometry and Measure", "Area of triangles",
      "What is the area of a triangle with base 10 cm and perpendicular height 6 cm?",
      ["30 cm²", "60 cm²", "16 cm²", "25 cm²"], 0,
      "Area of triangle = 1/2 × base × height = 1/2 × 10 × 6 = 30 cm².", "Half of base times height.", "Sedang"),
    q("cam_mat-g6-05", "cam_math", "cambridge", 6, "Geometry and Measure", "Properties of circles",
      "What is the mathematical term for the distance all the way around the outside of a circle?",
      ["Circumference", "Diameter", "Radius", "Chord"], 0,
      "The perimeter of a circle is called its circumference.", "Perimeter of a circle.", "Mudah"),
    q("cam_mat-g6-06", "cam_math", "cambridge", 6, "Statistics and Probability", "Probability scale",
      "A standard fair 6-sided die is rolled. What is the probability of rolling a number greater than 4 (i.e. 5 or 6)?",
      ["2/6 (or 1/3)", "1/6", "4/6", "1/2"], 0,
      "There are 2 favorable outcomes (5, 6) out of 6 possible sides: 2/6 = 1/3.", "Count the outcomes: 5 and 6.", "Sedang"),
    q("cam_mat-g6-07", "cam_math", "cambridge", 6, "Thinking and Working Mathematically", "Critiquing arguments & Justification",
      "Alex claims: 'If you double the sides of a square, its area also doubles.' Is Alex correct?",
      ["No, because doubling linear dimensions quadruples (×4) the area", "Yes, area always scales linearly with length", "No, area triples (×3)", "Yes, because squares have 4 sides"], 0,
      "If side length s becomes 2s, area becomes (2s)² = 4s², which is 4 times larger, not 2 times.", "Area scales by the square of linear scale factor.", "Tantangan")
])

write_ts('cambridgeMath.ts', 'cambridgeMathQuestions', cam_math)

# =========================================================================
# CAMBRIDGE SCIENCE (Stage 1 to 6)
# =========================================================================
cam_sci = []

# Stage 1
cam_sci.extend([
    q("cam_sci-g1-01", "cam_science", "cambridge", 1, "Biology", "Living things & Habitats",
      "Which of these is a LIVING thing that needs water, food, and air?",
      ["A green plant", "A plastic toy car", "A rock", "A metal spoon"], 0,
      "Plants are living organisms that grow, breathe, and reproduce.", "Living things grow and need nourishment.", "Mudah"),
    q("cam_sci-g1-02", "cam_science", "cambridge", 1, "Biology", "Human body & Senses",
      "Which sense organ do humans use to hear sounds like bird songs?",
      ["Ears", "Eyes", "Nose", "Tongue"], 0,
      "The ears detect sound waves and transmit auditory signals to the brain.", "Organ for hearing.", "Mudah"),
    q("cam_sci-g1-03", "cam_science", "cambridge", 1, "Chemistry", "Materials & Properties",
      "Why is transparent glass used to make window panes instead of solid wood?",
      ["Glass is transparent, allowing sunlight to pass through", "Glass is softer than wood", "Glass bends easily like rubber", "Glass is cheaper than paper"], 0,
      "Transparency allows light transmission so people can see through windows.", "Transparency lets light through.", "Mudah"),
    q("cam_sci-g1-04", "cam_science", "cambridge", 1, "Physics", "Forces & Movement",
      "What force do you apply when you push a swing forward?",
      ["A pushing force", "A magnetic attraction", "A freezing force", "Electrical current"], 0,
      "Pushing is a direct force moving an object away from you.", "Direct push moving object away.", "Mudah"),
    q("cam_sci-g1-05", "cam_science", "cambridge", 1, "Earth and Space", "Day and night & Weather",
      "Why is it light during the daytime and dark during nighttime?",
      ["The Earth rotates on its axis, so our side faces toward the Sun in daytime", "The Sun turns off its light at night", "Clouds cover the Sun every night", "The Moon eats the sunlight"], 0,
      "Earth's rotation turns different parts toward and away from sunlight.", "Earth's rotation brings day and night.", "Mudah"),
    q("cam_sci-g1-06", "cam_science", "cambridge", 1, "Thinking and Working Scientifically", "Observation & Questions",
      "What should a young scientist use when observing tiny insect legs closely?",
      ["A magnifying hand lens", "A measuring tape", "A balance scale", "A stopwatch"], 0,
      "A magnifying lens enlarges tiny details for closer visual examination.", "A tool that enlarges small things.", "Mudah")
])

# Stage 2
cam_sci.extend([
    q("cam_sci-g2-01", "cam_science", "cambridge", 2, "Biology", "Plants & Life cycles",
      "What do plant seeds need in order to GERMINATE (sprout) successfully?",
      ["Water, warmth, and oxygen", "Only darkness and ice", "Sugar and chocolate", "Rocks and paint"], 0,
      "Germination requires water to swell the seed, warmth for enzymatic activity, and oxygen.", "Water, warmth, and oxygen for sprouting.", "Mudah"),
    q("cam_sci-g2-02", "cam_science", "cambridge", 2, "Chemistry", "Properties of materials & Solids and liquids",
      "Which property distinguishes a SOLID (like an ice cube) from a LIQUID (like liquid water)?",
      ["A solid maintains a fixed definite shape; a liquid flows and takes the shape of its container", "Solids are always invisible", "Liquids cannot be frozen", "Solids have no weight"], 0,
      "Solids have definite shape and volume; liquids flow to adapt to vessel shape.", "Solids keep their shape, liquids flow.", "Mudah"),
    q("cam_sci-g2-03", "cam_science", "cambridge", 2, "Physics", "Sound & Vibrations",
      "How is musical sound produced when you pluck a guitar string?",
      ["The plucked string vibrates back and forth rapidly, creating sound waves in air", "Electricity jumps into the air", "Color changes on the string", "Air disappears from the guitar"], 0,
      "All sounds originate from vibrating objects transferring kinetic energy to surrounding air molecules.", "Sound is produced by vibrations.", "Mudah"),
    q("cam_sci-g2-04", "cam_science", "cambridge", 2, "Physics", "Electricity & Simple circuits",
      "In a simple circuit with a battery and bulb, what must be true for the bulb to glow?",
      ["The circuit must be complete (closed) without any breaks", "The switch must be open", "The battery must be empty", "The wires must be cut"], 0,
      "Electric current requires an uninterrupted closed path to circulate through the bulb filament.", "A complete unbroken closed loop.", "Mudah"),
    q("cam_sci-g2-05", "cam_science", "cambridge", 2, "Earth and Space", "Seasons & Environment",
      "Why do deciduous trees shed their green leaves in autumn in temperate zones?",
      ["To conserve water and energy during cold, dark winter months", "Because the wind blows them off by accident", "To feed birds on the ground", "Because leaves are too heavy"], 0,
      "Leaf abscission minimizes moisture loss when ground water freezes.", "Conserving water and energy during winter.", "Sedang"),
    q("cam_sci-g2-06", "cam_science", "cambridge", 2, "Thinking and Working Scientifically", "Classification & Data",
      "Which group contains ONLY materials that are waterproof?",
      ["Plastic sheet, rubber boot, glass bottle", "Paper tissue, cotton cloth, wool sock", "Cardboard box, paper bag, sugar", "Sponge, towel, flour"], 0,
      "Plastic, rubber, and glass do not absorb water and are impermeable.", "Select materials that repel water completely.", "Mudah")
])

# Stage 3
cam_sci.extend([
    q("cam_sci-g3-01", "cam_science", "cambridge", 3, "Biology", "Human organs & Skeleton",
      "What is the primary function of the human ribcage?",
      ["To protect the vital heart and lungs from injury", "To pump oxygenated blood", "To digest carbohydrates", "To think and remember"], 0,
      "The bony ribcage forms a protective cage around delicate thoracic organs (heart and lungs).", "Protects the heart and lungs.", "Mudah"),
    q("cam_sci-g3-02", "cam_science", "cambridge", 3, "Biology", "Habitats & Food chains",
      "In a pond food chain: Pondweed ➔ Tadpole ➔ Fish ➔ Heron, which organism is the PRODUCER?",
      ["Pondweed", "Tadpole", "Fish", "Heron"], 0,
      "Pondweed is a green plant that produces chemical energy via photosynthesis.", "The green plant that makes its own food.", "Mudah"),
    q("cam_sci-g3-03", "cam_science", "cambridge", 3, "Chemistry", "States of matter & Changes of state",
      "What is the term for the phase change when liquid water turns into water vapor gas upon boiling?",
      ["Evaporation (Vaporisation)", "Freezing", "Condensation", "Melting"], 0,
      "Evaporation/boiling converts liquid water into gaseous vapor through heat absorption.", "Liquid turning into gas.", "Mudah"),
    q("cam_sci-g3-04", "cam_science", "cambridge", 3, "Physics", "Forces & Friction",
      "Why is it harder to push a heavy wooden box across a rough carpet than across a smooth tiled floor?",
      ["The rough carpet produces greater friction against the bottom of the box", "Carpet has less gravity", "Tiled floor has no air", "The box weighs more on carpet"], 0,
      "Microscopic roughness between surfaces increases frictional resistance opposing motion.", "Rough textures create higher friction.", "Sedang"),
    q("cam_sci-g3-05", "cam_science", "cambridge", 3, "Physics", "Light & Shadows",
      "What happens to the size of a shadow when an opaque toy is moved CLOSER to the torchlight?",
      ["The shadow on the wall becomes larger", "The shadow becomes smaller", "The shadow turns invisible", "The shadow changes into a rainbow"], 0,
      "Moving the object closer to the source intercepts a wider angle of light rays, casting a larger shadow.", "Blocks more light spread, making shadow bigger.", "Sedang"),
    q("cam_sci-g3-06", "cam_science", "cambridge", 3, "Earth and Space", "Sun, Moon, and Earth",
      "How long does it take for Earth to complete ONE full orbit around the Sun?",
      ["Approximately 365.25 days (1 year)", "24 hours", "28 days (1 month)", "10 years"], 0,
      "Earth orbits the Sun once every year (365 and 1/4 days).", "One full year.", "Mudah")
])

# Stage 4
cam_sci.extend([
    q("cam_sci-g4-01", "cam_science", "cambridge", 4, "Biology", "Human digestive system",
      "Where does chemical digestion of food begin in the human body?",
      ["In the mouth (saliva contains digestive enzymes)", "In the stomach", "In the large intestine", "In the kidneys"], 0,
      "Salivary amylase in the mouth starts breaking down starch into maltose during mastication.", "Saliva starts digesting food in the mouth.", "Sedang"),
    q("cam_sci-g4-02", "cam_science", "cambridge", 4, "Biology", "Ecosystems & Food webs",
      "What might happen in a forest food web if all apex predators (like owls) were removed?",
      ["Herbivore prey populations (like mice) would overpopulate and strip vegetation", "Vegetation would grow five times taller immediately", "Rainfall would stop completely", "The forest would turn into an ocean"], 0,
      "Apex predators regulate prey abundance; their removal causes trophic cascades and habitat degradation.", "Prey numbers explode and consume too much plant food.", "Sedang"),
    q("cam_sci-g4-03", "cam_science", "cambridge", 4, "Chemistry", "Solubility & Solutions",
      "When salt is stirred thoroughly into warm water until it is no longer visible, what has formed?",
      ["A transparent solution (homogeneous mixture)", "A chemical explosion", "A solid precipitate", "Pure distilled water"], 0,
      "Salt dissolves as a solute in water (solvent) to form a clear saline solution.", "Solute dissolved in solvent forms a solution.", "Mudah"),
    q("cam_sci-g4-04", "cam_science", "cambridge", 4, "Physics", "Electricity & Conductors/Insulators",
      "Which material is an excellent ELECTRICAL CONDUCTOR commonly used in home wiring?",
      ["Copper metal", "Plastic rubber", "Dry wood", "Glass"], 0,
      "Copper possesses low electrical resistance and allows free electrons to flow easily.", "Metals like copper conduct electricity.", "Mudah"),
    q("cam_sci-g4-05", "cam_science", "cambridge", 4, "Physics", "Magnets & Magnetic poles",
      "What occurs when you bring the NORTH pole of one bar magnet near the NORTH pole of another magnet?",
      ["They repel (push each other away)", "They attract strongly and stick", "They heat up and melt", "They lose all magnetic power"], 0,
      "Like magnetic poles (N-N or S-S) repel; unlike poles (N-S) attract.", "Like poles repel.", "Mudah"),
    q("cam_sci-g4-06", "cam_science", "cambridge", 4, "Earth and Space", "Volcanoes, Earthquakes & Rocks",
      "Which rock type forms directly from the cooling and solidification of molten lava or magma?",
      ["Igneous rock", "Sedimentary rock", "Metamorphic rock", "Fossil rock"], 0,
      "Igneous rocks (e.g., basalt, granite) crystallize from molten rock.", "Formed from molten lava/magma.", "Sedang")
])

# Stage 5
cam_sci.extend([
    q("cam_sci-g5-01", "cam_science", "cambridge", 5, "Biology", "Plant reproduction & Pollination",
      "Why are flowers of insect-pollinated plants brightly colored and scented?",
      ["To attract bees and butterflies to transfer pollen grains between flowers", "To scare away birds", "To absorb moonlight at night", "To change temperature"], 0,
      "Vivid petals and sweet nectar serve as evolutionary signals guiding pollinator insects.", "Attracts insects for pollen transfer.", "Mudah"),
    q("cam_sci-g5-02", "cam_science", "cambridge", 5, "Biology", "Human circulatory system",
      "Which blood vessels carry oxygen-rich blood AWAY from the heart to the rest of the body?",
      ["Arteries (e.g., the Aorta)", "Veins", "Capillaries only", "Lymph ducts"], 0,
      "Arteries carry oxygenated blood under high pressure away from the ventricles.", "Arteries carry blood Away from the heart.", "Sedang"),
    q("cam_sci-g5-03", "cam_science", "cambridge", 5, "Chemistry", "Evaporation & Condensation",
      "Why do tiny water droplets appear on the outside of a cold glass of lemonade on a humid afternoon?",
      ["Warm water vapor in the ambient air touches the cold glass, loses heat, and condenses into liquid droplets", "The lemonade leaks through the solid glass wall", "Glass generates water automatically", "The ice pushes water outward"], 0,
      "Atmospheric moisture cools upon contact with cold surface boundaries and condenses.", "Warm gas cools against cold surface and turns to liquid.", "Sedang"),
    q("cam_sci-g5-04", "cam_science", "cambridge", 5, "Physics", "Light reflection & Refraction",
      "When a straight drinking straw is placed in a clear glass of water, it appears bent at the water surface. Why?",
      ["Light changes speed and bends as it travels from water into air (Refraction)", "The straw is physically snapped by water pressure", "Water dissolves plastic instantly", "Our eyes stop working underwater"], 0,
      "Refraction occurs because light travels slower in optical denser media (water) than in air.", "Bending of light waves at boundary is refraction.", "Sedang"),
    q("cam_sci-g5-05", "cam_science", "cambridge", 5, "Physics", "Gravity & Mass vs Weight",
      "If an astronaut travels from Earth to the Moon, what happens to their MASS and WEIGHT?",
      ["Their mass remains identical, but their weight decreases due to weaker lunar gravity", "Both mass and weight become zero", "Their mass decreases while weight stays identical", "Their mass doubles"], 0,
      "Mass is the amount of matter (constant); weight depends on local gravitational acceleration (g_moon ≈ 1/6 g_earth).", "Mass never changes; weight depends on gravity.", "Sedang"),
    q("cam_sci-g5-06", "cam_science", "cambridge", 5, "Earth and Space", "Solar system & Planetary orbits",
      "Which planet in our solar system is known as the 'Red Planet' due to iron oxide on its surface?",
      ["Mars", "Venus", "Jupiter", "Saturn"], 0,
      "Mars exhibits a reddish hue caused by widespread ferric oxide (rust) covering its crust.", "The fourth planet from the Sun.", "Mudah")
])

# Stage 6
cam_sci.extend([
    q("cam_sci-g6-01", "cam_science", "cambridge", 6, "Biology", "Adaptations & Evolution",
      "How do the thick, waxy needles and cone shape of pine trees help them survive in snowy mountain climates?",
      ["Waxy needles prevent moisture loss and the conical shape lets heavy snow slide off branches", "Needles attract polar bears", "The cone shape absorbs rain from clouds directly", "Waxy coating turns snow into hot water"], 0,
      "Xerophytic needle leaves limit transpiration while sloping branches shed snow to avoid limb breakage.", "Sheds snow and minimizes water loss.", "Sedang"),
    q("cam_sci-g6-02", "cam_science", "cambridge", 6, "Biology", "Cell structure & Microorganisms",
      "Which cellular organelle is present in green plant cells but ABSENT in animal cells?",
      ["Chloroplasts (and rigid cell wall)", "Nucleus", "Cell membrane", "Cytoplasm"], 0,
      "Plant cells contain chloroplasts (for photosynthesis) and cellulose cell walls which animal cells lack.", "Site of photosynthesis with chlorophyll.", "Sedang"),
    q("cam_sci-g6-03", "cam_science", "cambridge", 6, "Chemistry", "Reversible vs Irreversible chemical changes",
      "Which of the following represents an IRREVERSIBLE chemical change?",
      ["Burning a piece of dry wood into ash and smoke", "Melting an ice cube into water", "Dissolving table sugar in a cup of tea", "Freezing liquid orange juice into an ice pop"], 0,
      "Combustion reorganizes chemical bonds forming new substances (CO2, ash) that cannot be reversed by physical cooling.", "Forms new substances that cannot be un-burnt.", "Sedang"),
    q("cam_sci-g6-04", "cam_science", "cambridge", 6, "Physics", "Electrical circuits & Voltage",
      "In a series circuit with two light bulbs, what happens if a third identical bulb is added in series?",
      ["All three bulbs will shine dimmer because voltage is divided among more loads", "All bulbs explode instantly", "The bulbs will shine three times brighter", "The battery charges itself"], 0,
      "Adding series resistance decreases total circuit current (I = V/R), causing each incandescent filament to receive less electrical power.", "More resistance in series dims the bulbs.", "Sedang"),
    q("cam_sci-g6-05", "cam_science", "cambridge", 6, "Physics", "Energy transformation",
      "What energy transformation occurs when an electric fan is plugged in and turned on?",
      ["Electrical energy is transformed into kinetic (mechanical) energy and sound/thermal energy", "Sound energy turns into chemical energy", "Nuclear energy turns into solar energy", "Gravitational energy turns into light"], 0,
      "The electric motor converts electrical energy into rotational kinetic motion of blades.", "Electricity powers rotating blades (motion).", "Sedang"),
    q("cam_sci-g6-06", "cam_science", "cambridge", 6, "Earth and Space", "Renewable energy & Climate",
      "Why are solar panels and wind turbines classified as RENEWABLE energy resources?",
      ["They utilize naturally replenishing energy sources that will not be depleted over human timescales", "They produce coal and petroleum underground", "They are made entirely of diamonds", "They work without any sunlight or wind"], 0,
      "Sunlight and wind replenish naturally without exhaustion, unlike finite fossil fuels.", "Natural sources that do not run out.", "Mudah")
])

write_ts('cambridgeScience.ts', 'cambridgeScienceQuestions', cam_sci)

print("Cambridge files written successfully!")
