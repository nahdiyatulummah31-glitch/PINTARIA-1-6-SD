import json
import os

# Directory
os.makedirs('src/data/questions', exist_ok=True)

# 1. Load syllabus data from curriculumSyllabus.ts or define directly
# We will define rich templates tailored to each syllabus strand

def write_question_file(filename, var_name, questions):
    filepath = os.path.join('src/data/questions', filename)
    ts_code = "import { Question } from '../../types/quiz';\n\n"
    ts_code += f"export const {var_name}: Question[] = "
    ts_code += json.dumps(questions, indent=2)
    ts_code += ";\n"
    with open(filepath, 'w') as f:
        f.write(ts_code)
    print(f"Generated {len(questions)} questions in {filepath}")

# Template builder helper
def make_q(qid, subject, curriculum, grade, strand, topic, question, options, correct_idx, explanation, hint, difficulty='Sedang'):
    phase = f"Stage {grade}" if curriculum == 'cambridge' else f"Primary {grade}"
    return {
        "id": qid,
        "subject": subject,
        "curriculum": curriculum,
        "grade": grade,
        "phase": phase,
        "syllabusStrand": strand,
        "topic": topic,
        "question": question,
        "options": options,
        "correctIndex": correct_idx,
        "explanation": explanation,
        "hint": hint,
        "difficulty": difficulty
    }

# =========================================================================
# CAMBRIDGE ENGLISH
# =========================================================================
cam_eng_qs = []
# Stage 1
cam_eng_qs.extend([
    make_q("cam_english-01", "cam_english", "cambridge", 1, "Reading", "Phonics & Letter sounds",
           "Which letter sound does the word 'Sun' start with?",
           ["/s/", "/m/", "/b/", "/t/"], 0,
           "The word 'Sun' begins with the letter S, which makes the /s/ sound.", "Think of the initial hiss sound /s/.", "Mudah"),
    make_q("cam_english-02", "cam_english", "cambridge", 1, "Reading", "Blending & Segmenting",
           "When you blend the letter sounds /c/ - /a/ - /t/, which word do you get?",
           ["Cat", "Bat", "Cup", "Cot"], 0,
           "/c/ + /a/ + /t/ blends together to form 'cat'.", "Blend the three sounds smoothly.", "Mudah"),
    make_q("cam_english-03", "cam_english", "cambridge", 1, "Reading", "Sight words",
           "Choose the correct high-frequency sight word: 'The children ______ playing in the park.'",
           ["are", "is", "was", "am"], 0,
           "'Children' is plural, so the matching present verb is 'are'.", "Look at whether children is singular or plural.", "Mudah"),
    make_q("cam_english-04", "cam_english", "cambridge", 1, "Writing", "Capital letters & Full stops",
           "Which sentence is written with correct punctuation at the start and end?",
           ["My dog likes to run.", "my dog likes to run", "My dog likes to run,", "my Dog likes to run."], 0,
           "A sentence must begin with a capital letter and finish with a full stop.", "Check the first letter and the end mark.", "Mudah"),
    make_q("cam_english-05", "cam_english", "cambridge", 1, "Grammar & Vocabulary", "Nouns & Verbs",
           "Which word in this sentence is a NOUN (naming word)? 'The red bird flies high.'",
           ["bird", "flies", "red", "high"], 0,
           "'Bird' is a noun because it names an animal.", "A noun is a person, place, or thing.", "Mudah"),
    make_q("cam_english-06", "cam_english", "cambridge", 1, "Grammar & Vocabulary", "Singular and plural",
           "What is the plural form of the word 'box'?",
           ["Boxes", "Boxs", "Boxen", "Boxies"], 0,
           "Nouns ending in -x form their plural by adding -es: 'boxes'.", "Words ending in x add -es.", "Mudah"),
    make_q("cam_english-07", "cam_english", "cambridge", 1, "Speaking & Listening", "Greetings & Introductions",
           "What is the most polite greeting when meeting someone in the morning?",
           ["Good morning! Nice to meet you.", "Go away!", "See you tonight.", "Give me that."], 0,
           "'Good morning! Nice to meet you.' is courteous and polite.", "Choose the polite morning greeting.", "Mudah"),
    make_q("cam_english-08", "cam_english", "cambridge", 1, "Reading", "Characters & Setting",
           "In a story, what does the 'setting' refer to?",
           ["Where and when the story takes place", "The person who wrote the book", "The main problem of the character", "The list of chapters"], 0,
           "The setting describes the location and time of the events in a story.", "Where and when the action happens.", "Mudah"),
    make_q("cam_english-09", "cam_english", "cambridge", 1, "Writing", "Simple descriptions",
           "Which adjective best describes a fluffy kitten?",
           ["Soft", "Sharp", "Heavy", "Rough"], 0,
           "'Soft' is an adjective that accurately describes kitten fur.", "How does kitten fur feel to the touch?", "Mudah"),
    make_q("cam_english-10", "cam_english", "cambridge", 1, "Reading", "Sequencing events",
           "Which word shows what happens next in a recount: 'First we ate lunch, ________ we went to the zoo.'",
           ["then", "because", "although", "but"], 0,
           "'Then' is a chronological connector indicating sequential order.", "A time connective showing what comes after.", "Mudah")
])

# Stage 2
cam_eng_qs.extend([
    make_q("cam_english-11", "cam_english", "cambridge", 2, "Reading", "Main idea & Prediction",
           "After reading the title 'How the Little Seed Grew into a Sunflower', what is the story mostly about?",
           ["The life cycle and growth of a sunflower plant", "How to fix a bicycle", "A trip to outer space", "Baking apple pies"], 0,
           "The title clearly indicates the narrative follows the growth of a seed into a flower.", "Look at the key words in the title.", "Mudah"),
    make_q("cam_english-12", "cam_english", "cambridge", 2, "Writing", "Narrative writing",
           "What are the three essential parts of a good narrative story?",
           ["Beginning, Middle (Problem), and Ending (Resolution)", "Title, Recipe, and Ingredients", "List of numbers and tables", "Sender, Address, and Stamp"], 0,
           "Narratives follow an orientation (beginning), complication (middle), and resolution (ending).", "Every story has a start, a challenge, and a finish.", "Mudah"),
    make_q("cam_english-13", "cam_english", "cambridge", 2, "Grammar & Vocabulary", "Common & Proper nouns",
           "Which of these words is a PROPER NOUN that needs a capital letter?",
           ["London", "city", "river", "country"], 0,
           "'London' is a proper noun because it is the specific name of a capital city.", "Specific name of a city.", "Mudah"),
    make_q("cam_english-14", "cam_english", "cambridge", 2, "Grammar & Vocabulary", "Adverbs",
           "Identify the ADVERB in the sentence: 'The tortoise walked slowly across the grass.'",
           ["slowly", "tortoise", "walked", "grass"], 0,
           "'Slowly' is an adverb telling us HOW the tortoise walked.", "Words ending in -ly often tell how an action is done.", "Mudah"),
    make_q("cam_english-15", "cam_english", "cambridge", 2, "Grammar & Vocabulary", "Past tense",
           "What is the past tense of the irregular verb 'catch'?",
           ["Caught", "Catched", "Catching", "Cotched"], 0,
           "The irregular past tense of catch is caught.", "Irregular verb ending in -aught.", "Sedang"),
    make_q("cam_english-16", "cam_english", "cambridge", 2, "Writing", "Instructions",
           "Which sentence is written as an instructional command (imperative)?",
           ["Chop the carrots into small cubes.", "Carrots are sweet and crunchy.", "Do you like eating carrots?", "I saw a giant carrot."], 0,
           "'Chop the carrots...' gives a direct command starting with an action verb.", "Starts with an action verb giving a direction.", "Mudah"),
    make_q("cam_english-17", "cam_english", "cambridge", 2, "Reading", "Poetry & Rhyme",
           "Which word rhymes with 'bright'?",
           ["Night", "Brave", "Bring", "Dark"], 0,
           "'Night' rhymes with 'bright' because they share the same ending sound /-aɪt/.", "Words that sound the same at the end.", "Mudah"),
    make_q("cam_english-18", "cam_english", "cambridge", 2, "Speaking & Listening", "Giving opinions",
           "Which phrase is used to share a personal viewpoint politely?",
           ["In my opinion...", "You are totally wrong!", "Nobody cares about that.", "Be quiet!"], 0,
           "'In my opinion...' is a respectful way to present personal thinking.", "A polite introductory phrase for viewpoints.", "Mudah"),
    make_q("cam_english-19", "cam_english", "cambridge", 2, "Grammar & Vocabulary", "Prepositions",
           "Choose the correct preposition: 'The sleepy cat curled up _______ the cozy blanket.'",
           ["under", "off", "from", "at"], 0,
           "'Under' describes the physical location beneath the blanket.", "Position beneath a covering.", "Mudah"),
    make_q("cam_english-20", "cam_english", "cambridge", 2, "Reading", "Simple inference",
           "'Oliver opened his umbrella and zipped his raincoat.' What can we infer about the weather?",
           ["It was raining outside", "It was sunny and dry", "There was a heatwave", "It was snowing heavily"], 0,
           "Umbrella and raincoat are items used specifically when it rains.", "Look at the clues: umbrella and raincoat.", "Mudah")
])

# Stage 3
cam_eng_qs.extend([
    make_q("cam_english-21", "cam_english", "cambridge", 3, "Reading", "Comparing texts",
           "What is the key difference between a FICTION and a NON-FICTION text?",
           ["Fiction is imaginative storytelling, while non-fiction provides true factual information", "Fiction only has numbers, while non-fiction has pictures", "Non-fiction is always written as poetry", "There is no difference"], 0,
           "Fiction is invented by the author's imagination; non-fiction deals with real-world facts.", "Imagination vs real-world facts.", "Mudah"),
    make_q("cam_english-22", "cam_english", "cambridge", 3, "Grammar", "Direct speech punctuation",
           "Which sentence correctly punctuates dialogue spoken by an explorer?",
           ["\"Look at that golden temple!\" shouted the explorer.", "\"Look at that golden temple! shouted the explorer.\"", "Look at that golden temple! \"shouted the explorer.\"", "\"Look at that golden temple!\" Shouted the explorer."], 0,
           "Speech marks enclose the exact words spoken, with the exclamation mark inside.", "Speech marks around spoken words.", "Sedang"),
    make_q("cam_english-23", "cam_english", "cambridge", 3, "Grammar", "Conjunctions",
           "Complete the sentence with a subordinating conjunction: 'We stayed inside the tent ________ the thunder roared outside.'",
           ["while", "so", "but", "or"], 0,
           "'While' shows two events happening simultaneously.", "Shows two actions occurring at the same time.", "Sedang"),
    make_q("cam_english-24", "cam_english", "cambridge", 3, "Writing", "Paragraph organisation",
           "What is the primary function of a topic sentence in a paragraph?",
           ["To introduce the main idea of that paragraph", "To be the longest sentence in the story", "To list the bibliography sources", "To define every dictionary word"], 0,
           "A topic sentence clearly states the central focus of the paragraph.", "The opening sentence presenting the central idea.", "Sedang"),
    make_q("cam_english-25", "cam_english", "cambridge", 3, "Reading", "Vocabulary in context",
           "In the phrase 'The weary traveler rested beneath the shade', what does 'weary' mean?",
           ["Extremely tired and exhausted", "Excited and energetic", "Angry and violent", "Wealthy and rich"], 0,
           "'Weary' means tired, worn out, or exhausted.", "Think of how someone feels after walking a long journey.", "Mudah"),
    make_q("cam_english-26", "cam_english", "cambridge", 3, "Speaking & Listening", "Giving reasons",
           "When explaining a viewpoint in a presentation, which connector introduces a supporting reason?",
           ["because", "nevertheless", "furthermore", "despite"], 0,
           "'Because' directly links a statement to its causal justification.", "Links a claim to its reason.", "Mudah"),
    make_q("cam_english-27", "cam_english", "cambridge", 3, "Writing", "Diary writing",
           "What grammatical person and tense are traditionally used when writing a personal diary entry?",
           ["First person ('I / We') and Past tense", "Third person ('He / She') and Future tense only", "Second person ('You') and Command form", "Passive voice only"], 0,
           "Diaries reflect personal experiences, using 'I' and recounting past events.", "Personal reflections about what happened to 'me'.", "Sedang"),
    make_q("cam_english-28", "cam_english", "cambridge", 3, "Reading", "Inference & Prediction",
           "'Smoke began to pour from the kitchen, followed by a loud beeping alarm.' What is about to happen next?",
           ["Someone will quickly check the burnt food and extinguish any flame", "They will go outside to plant flowers", "It will start raining inside the house", "The sun will set immediately"], 0,
           "Smoke and a smoke detector alarm indicate food is burning on the stove.", "Smoke detector alarm signals burnt food or fire.", "Mudah"),
    make_q("cam_english-29", "cam_english", "cambridge", 3, "Grammar", "Pronouns",
           "Replace the repeated noun: 'Emily loves painting. Emily bought a new set of brushes.'",
           ["She bought a new set of brushes.", "Her bought a new set of brushes.", "They bought a new set of brushes.", "It bought a new set of brushes."], 0,
           "'She' is the third-person feminine subject pronoun replacing Emily.", "Subject pronoun for a female person.", "Mudah"),
    make_q("cam_english-30", "cam_english", "cambridge", 3, "Writing", "Descriptive writing",
           "Which sensory detail appeals to the sense of TASTE?",
           ["The tangy, sour lemon burst with citrus juice", "The thunder clapped violently in the sky", "The red velvet felt smooth as silk", "The bright lantern illuminated the cave"], 0,
           "'Tangy, sour lemon burst with citrus juice' appeals to gustatory taste buds.", "Appeals to taste buds on the tongue.", "Mudah")
])

# Stage 4
cam_eng_qs.extend([
    make_q("cam_english-31", "cam_english", "cambridge", 4, "Reading", "Author's purpose",
           "If an author writes an article explaining 'Why plastic bottles must be recycled to save oceans', what is the author's primary purpose?",
           ["To persuade readers to recycle and protect marine life", "To entertain readers with funny jokes", "To write a fictional mystery", "To teach how to make plastic"], 0,
           "The author seeks to convince and persuade readers to take environmental action.", "Persuading readers to change their habits.", "Sedang"),
    make_q("cam_english-32", "cam_english", "cambridge", 4, "Grammar", "Subject-verb agreement",
           "Choose the sentence that maintains correct subject-verb agreement:",
           ["The group of enthusiastic scientists is studying the fossil.", "The group of enthusiastic scientists are studying the fossil.", "The group of enthusiastic scientists were studying the fossil.", "The group of enthusiastic scientists have studied the fossil."], 0,
           "'The group' is a collective singular subject requiring the singular verb 'is'.", "'The group' is singular.", "Tantangan"),
    make_q("cam_english-33", "cam_english", "cambridge", 4, "Grammar", "Relative clauses",
           "Which relative pronoun correctly joins these clauses: 'This is the museum _______ exhibits dinosaur skeletons.'",
           ["that", "who", "whom", "whose"], 0,
           "'That' or 'which' is used for non-human things or buildings.", "Relative pronoun for places or objects.", "Sedang"),
    make_q("cam_english-34", "cam_english", "cambridge", 4, "Writing", "Persuasive writing",
           "Which rhetorical device poses a question without expecting an answer to make a point?",
           ["Rhetorical question", "Hyperbole", "Alliteration", "Onomatopoeia"], 0,
           "A rhetorical question is asked to stimulate thought rather than elicit an answer.", "A question meant to make the audience think.", "Sedang"),
    make_q("cam_english-35", "cam_english", "cambridge", 4, "Reading", "Summarising",
           "What is the golden rule when writing an effective summary of an informational text?",
           ["Include only the main key points and omit minor decorative details", "Copy every single paragraph word for word", "Make the summary twice as long as the original", "Change all the facts into fiction"], 0,
           "Summaries capture central ideas concisely without extraneous trivial details.", "Keep it concise and focus on main points.", "Sedang"),
    make_q("cam_english-36", "cam_english", "cambridge", 4, "Grammar", "Fronted adverbials",
           "Which sentence is correctly punctuated with a fronted adverbial of manner?",
           ["With tremendous courage, the young girl stepped forward.", "With tremendous courage the young girl stepped forward.", "The young girl with tremendous courage, stepped forward.", "With tremendous, courage the young girl stepped forward."], 0,
           "Fronted adverbials at the beginning of a sentence must be followed by a comma.", "Comma after the opening adverbial phrase.", "Sedang"),
    make_q("cam_english-37", "cam_english", "cambridge", 4, "Reading", "Supporting evidence",
           "When answering comprehension questions, why must readers quote supporting evidence from the text?",
           ["To prove and validate their claim using the author's actual words", "To make their handwriting look neat", "Because books are always printed in bold", "To avoid writing complete sentences"], 0,
           "Textual evidence substantiates and justifies analytical answers.", "Quotes prove that your answer is grounded in the text.", "Sedang"),
    make_q("cam_english-38", "cam_english", "cambridge", 4, "Writing", "Character description",
           "Which description shows a character's personality through actions rather than just telling?",
           ["Marcus gently placed the injured sparrow in a warm shoe box and called the vet.", "Marcus was a kind boy.", "Marcus had brown hair and two shoes.", "Marcus was very tall."], 0,
           "'Show, don't tell' reveals compassion through empathetic actions.", "Showing kindness through caring actions.", "Sedang"),
    make_q("cam_english-39", "cam_english", "cambridge", 4, "Grammar", "Apostrophes",
           "Which sentence correctly uses an apostrophe for plural possession?",
           ["The teachers' lounge is located on the second floor.", "The teacher's lounge is for all fifty teachers.", "The teachers lounge' is very quiet.", "The teacher'es lounge is clean."], 0,
           "For plural nouns ending in -s, the apostrophe is placed after the s: teachers'.", "Plural possession ending in s adds an apostrophe after s.", "Tantangan"),
    make_q("cam_english-40", "cam_english", "cambridge", 4, "Writing", "Proofreading & Editing",
           "What should a writer look for during the proofreading stage?",
           ["Errors in spelling, punctuation, capitalization, and grammar", "Drawing new pictures on the margins", "Choosing a different notebook", "Counting the number of syllables in every word"], 0,
           "Proofreading focuses on surface mechanics: spelling, punctuation, and grammar.", "Checking mechanics and spelling accuracy.", "Mudah")
])

# Stage 5
cam_eng_qs.extend([
    make_q("cam_english-41", "cam_english", "cambridge", 5, "Grammar & Language", "Modal verbs",
           "Which modal verb expresses strict obligation or rule?",
           ["must", "might", "could", "should"], 0,
           "'Must' indicates an absolute necessity or regulatory requirement.", "Expresses necessity or mandatory rule.", "Sedang"),
    make_q("cam_english-42", "cam_english", "cambridge", 5, "Reading", "Tone and Viewpoint",
           "If an article describes deforestation as 'a tragic, irreversible catastrophe for biodiversity', what is the author's tone?",
           ["Grave, impassioned, and critical", "Humorous and lighthearted", "Indifferent and bored", "Optimistic and celebratory"], 0,
           "Words like 'tragic' and 'catastrophe' convey deep concern, solemnity, and criticism.", "Notice emotive words like tragic and catastrophe.", "Sedang"),
    make_q("cam_english-43", "cam_english", "cambridge", 5, "Grammar & Language", "Figurative language (Metaphor)",
           "Which sentence contains a METAPHOR (direct comparison without 'like' or 'as')?",
           ["Her laughter was music to his weary ears.", "Her laughter sounded like cheerful church bells.", "She laughed as merrily as a babbling brook.", "She laughed loudly in the hallway."], 0,
           "'Her laughter was music' equates laughter directly to music without using 'like' or 'as'.", "Direct equation without 'like' or 'as'.", "Sedang"),
    make_q("cam_english-44", "cam_english", "cambridge", 5, "Writing", "Paragraph cohesion",
           "Which cohesive device links contrasting viewpoints between paragraphs?",
           ["On the other hand", "Furthermore", "In addition to this", "Similarly"], 0,
           "'On the other hand' introduces an opposing perspective.", "Transitions to a contrasting perspective.", "Sedang"),
    make_q("cam_english-45", "cam_english", "cambridge", 5, "Reading", "Evaluating information",
           "Why is a report written by university climatologists generally more trustworthy than an anonymous blog post?",
           ["Because peer-reviewed scientists use verifiable empirical research data", "Because university professors write with fancier fonts", "Because blogs have too many pictures", "Because scientists only write short articles"], 0,
           "Academic research undergoes rigorous peer-review and validation against empirical data.", "Peer-reviewed scientific credibility.", "Sedang"),
    make_q("cam_english-46", "cam_english", "cambridge", 5, "Grammar & Language", "Complex sentences",
           "Identify the DEPENDENT (subordinate) clause: 'Although the weather was freezing, the mountaineers pressed onward.'",
           ["Although the weather was freezing", "the mountaineers pressed onward", "pressed onward", "the weather was freezing"], 0,
           "'Although the weather was freezing' cannot stand alone as a complete sentence.", "Cannot stand alone as a complete sentence.", "Sedang"),
    make_q("cam_english-47", "cam_english", "cambridge", 5, "Writing", "Speech writing",
           "What is an effective opening technique for an inspiring public speech?",
           ["A powerful rhetorical question or startling statistic", "Saying 'I don't really want to be here'", "Reading dictionary definitions for 10 minutes", "Whispering silently"], 0,
           "Hooks like provocative questions or statistics immediately engage the audience's attention.", "An engaging hook to grab attention.", "Sedang"),
    make_q("cam_english-48", "cam_english", "cambridge", 5, "Grammar & Language", "Determiners",
           "Which sentence uses a demonstrative determiner correctly?",
           ["These artifacts were unearthed in an ancient tomb.", "This artifacts were unearthed in an ancient tomb.", "Those artifact were unearthed in an ancient tomb.", "Them artifacts were unearthed in an ancient tomb."], 0,
           "'These' correctly modifies the plural noun 'artifacts' in close proximity.", "Plural demonstrative for plural noun.", "Mudah"),
    make_q("cam_english-49", "cam_english", "cambridge", 5, "Reading", "Evaluating author's bias",
           "If a brochure published by a sugary soda company claims 'Soda is the healthiest drink for growing kids', what should a critical reader recognize?",
           ["The company has a commercial bias aimed at increasing sales", "The brochure is an objective medical fact", "All doctors agree with the brochure", "Water should never be consumed"], 0,
           "Commercial interests often produce biased claims to promote their products.", "Commercial motivation creates promotional bias.", "Sedang"),
    make_q("cam_english-50", "cam_english", "cambridge", 5, "Writing", "Review writing",
           "What should a balanced book review provide?",
           ["A summary of the plot without spoilers, plus analytical critique of strengths and weaknesses", "Revealing the secret twist ending on line one", "Only insulting the author's personality", "A list of every single preposition in the book"], 0,
           "A balanced review synthesizes summary, critical analysis, and constructive evaluation.", "Balanced critique of strengths and weaknesses.", "Sedang")
])

# Stage 6
cam_eng_qs.extend([
    make_q("cam_english-51", "cam_english", "cambridge", 6, "Grammar & Language", "Active vs Passive voice",
           "Convert to PASSIVE VOICE: 'Alexander Fleming discovered penicillin in 1928.'",
           ["Penicillin was discovered by Alexander Fleming in 1928.", "Alexander Fleming had been discovering penicillin in 1928.", "Penicillin discovered Alexander Fleming in 1928.", "In 1928, Alexander Fleming was discovering penicillin."], 0,
           "In the passive voice, the object 'penicillin' becomes the subject receiving the action: 'was discovered by...'", "Object becomes the subject of the sentence.", "Sedang"),
    make_q("cam_english-52", "cam_english", "cambridge", 6, "Reading", "Analyzing bias and nuance",
           "What distinguishes an OBJECTIVE news report from a SUBJECTIVE editorial?",
           ["Objective reports present neutral, verifiable facts; editorials express personal opinions and judgments", "Objective reports are always written in verse", "Editorials have no author", "Editorials only contain photographs"], 0,
           "Objective journalism relies on unbiased factual reporting; editorials reflect subjective analysis and opinion.", "Neutral facts vs opinionated viewpoints.", "Sedang"),
    make_q("cam_english-53", "cam_english", "cambridge", 6, "Grammar & Language", "Conditional clauses",
           "Choose the correct third conditional: 'If the navigator _______ the storm warning, the ship would not have run aground.'",
           ["had heeded", "heeds", "has heeded", "would heed"], 0,
           "Third conditionals use 'had + past participle' in the if-clause for hypothetical past events.", "Past perfect in the if-clause.", "Tantangan"),
    make_q("cam_english-54", "cam_english", "cambridge", 6, "Writing", "Argumentative essays",
           "What is the role of a 'counterargument' and 'rebuttal' in an argumentative essay?",
           ["To acknowledge an opposing view and demonstrate why it is flawed or outweighed by evidence", "To confuse the reader about the author's true stance", "To repeat the opening introduction three times", "To apologize to people who disagree"], 0,
           "Addressing and refuting counterarguments strengthens the author's overall thesis.", "Acknowledge the opposition and prove why your claim holds.", "Tantangan"),
    make_q("cam_english-55", "cam_english", "cambridge", 6, "Grammar & Language", "Indirect speech",
           "Convert to INDIRECT SPEECH: '\"I will finish the laboratory experiment tomorrow,\" declared Dr. Chen.'",
           ["Dr. Chen declared that he would finish the laboratory experiment the following day.", "Dr. Chen declared that I will finish the laboratory experiment tomorrow.", "Dr. Chen declared that he will finish the laboratory experiment yesterday.", "Dr. Chen declared that he would finish the laboratory experiment tomorrow."], 0,
           "'Will' changes to 'would', 'I' changes to 'he', and 'tomorrow' changes to 'the following day'.", "'Will' becomes 'would', 'tomorrow' becomes 'the following day'.", "Tantangan"),
    make_q("cam_english-56", "cam_english", "cambridge", 6, "Reading", "Poetic devices (Extended Metaphor)",
           "What is an 'extended metaphor' in literary poetry?",
           ["A metaphor that unfolds across multiple lines or throughout an entire poem", "A metaphor that only has two syllables", "A poem that doesn't rhyme at all", "A poem written in a foreign language"], 0,
           "An extended metaphor sustains a complex comparison across an entire stanza or poem.", "A comparison sustained across the entire work.", "Sedang"),
    make_q("cam_english-57", "cam_english", "cambridge", 6, "Writing", "Rhetorical cohesion",
           "Which transitional phrase best introduces a conclusive, climactic point?",
           ["Ultimately", "Firstly", "For example", "Meanwhile"], 0,
           "'Ultimately' signals finality, culmination, and primary importance.", "Signals the final decisive conclusion.", "Sedang"),
    make_q("cam_english-58", "cam_english", "cambridge", 6, "Reading", "Subtle inference",
           "'The diplomat smiled tightly, adjusted his spectacles, and chose his words with forensic precision.' What does this suggest about the meeting?",
           ["The negotiations were tense, delicate, and required extreme caution", "The diplomat was playing a comedy game with his friends", "The room was warm and relaxing", "The meeting was already finished hours ago"], 0,
           "Tight smiles and forensic word choices indicate high tension and diplomatic sensitivity.", "Clues like 'forensic precision' indicate tense stakes.", "Sedang"),
    make_q("cam_english-59", "cam_english", "cambridge", 6, "Grammar & Language", "Subjunctive mood",
           "Which sentence correctly uses the subjunctive mood for a formal requirement?",
           ["The committee demanded that the chairperson resign immediately.", "The committee demanded that the chairperson resigns immediately.", "The committee demanded that the chairperson will resign immediately.", "The committee demanded that the chairperson resigned immediately."], 0,
           "The subjunctive takes the base form of the verb ('resign') regardless of the singular subject.", "Base form of the verb after verbs of demand.", "Tantangan"),
    make_q("cam_english-60", "cam_english", "cambridge", 6, "Writing", "Structural editing",
           "During macro-level structural editing of an essay, what should the writer evaluate first?",
           ["Logical flow, argument progression, and relevance to the thesis", "Checking if every comma is in italics", "Changing the font size to 24", "Counting the number of letters in each word"], 0,
           "Structural editing assesses high-level coherence, transitions, and argument soundness.", "Assess overall logical organization and coherence.", "Sedang")
])

write_question_file('cambridgeEnglish.ts', 'cambridgeEnglishQuestions', cam_eng_qs)

# =========================================================================
# CAMBRIDGE MATHEMATICS
# =========================================================================
cam_math_qs = []
# Stage 1
cam_math_qs.extend([
    make_q("cam_math-01", "cam_math", "cambridge", 1, "Number", "Counting & Place value",
           "What number comes immediately after 19 when counting forward?",
           ["20", "18", "21", "29"], 0, "19 + 1 = 20.", "Count one forward from 19.", "Mudah"),
    make_q("cam_math-02", "cam_math", "cambridge", 1, "Number", "Number bonds to 10",
           "Which pair of numbers adds up to make 10?",
           ["7 and 3", "7 and 4", "6 and 5", "8 and 3"], 0, "7 + 3 = 10.", "Number bonds that total 10.", "Mudah"),
    make_q("cam_math-03", "cam_math", "cambridge", 1, "Number", "Doubles & Halves",
           "What is double 6?",
           ["12", "10", "14", "16"], 0, "6 + 6 = 12.", "Add 6 to itself.", "Mudah"),
    make_q("cam_math-04", "cam_math", "cambridge", 1, "Geometry and Measure", "2D shapes",
           "How many straight sides does a triangle have?",
           ["3 sides", "4 sides", "2 sides", "5 sides"], 0, "A triangle has exactly 3 sides and 3 vertices.", "Tri- means three.", "Mudah"),
    make_q("cam_math-05", "cam_math", "cambridge", 1, "Geometry and Measure", "Time",
           "When the long minute hand points to 12 and the short hour hand points to 4, what time is it?",
           ["4 o'clock", "12 o'clock", "4:30", "5 o'clock"], 0, "When minute hand is at 12, it is on the hour: 4 o'clock.", "Hour hand at 4, minute at 12.", "Mudah"),
    make_q("cam_math-06", "cam_math", "cambridge", 1, "Statistics and Probability", "Sorting & Classification",
           "In a collection of 5 blue blocks and 3 red blocks, which colour has MORE blocks?",
           ["Blue blocks (5 > 3)", "Red blocks (3 > 5)", "They are equal", "Green blocks"], 0, "5 is greater than 3, so there are more blue blocks.", "Compare 5 and 3.", "Mudah"),
    make_q("cam_math-07", "cam_math", "cambridge", 1, "Thinking and Working Mathematically", "Patterns",
           "What is the missing number in this pattern: 2, 4, 6, 8, ____?",
           ["10", "9", "12", "11"], 0, "The pattern adds 2 each time: 8 + 2 = 10.", "Count in twos.", "Mudah"),
    make_q("cam_math-08", "cam_math", "cambridge", 1, "Geometry and Measure", "Length and Height",
           "Which object is typically LONGER than a standard wooden pencil?",
           ["A classroom whiteboard", "An eraser", "A paperclip", "A postage stamp"], 0, "A whiteboard is several meters wide, far longer than a 15 cm pencil.", "Think of size compared to a desk.", "Mudah"),
    make_q("cam_math-09", "cam_math", "cambridge", 1, "Number", "Simple subtraction",
           "There were 9 apples on a tree. 4 fell off. How many apples remain on the tree?",
           ["5 apples", "6 apples", "4 apples", "13 apples"], 0, "9 - 4 = 5 apples.", "Subtract 4 from 9.", "Mudah"),
    make_q("cam_math-10", "cam_math", "cambridge", 1, "Geometry and Measure", "3D shapes",
           "Which 3D shape looks like a football or a globe?",
           ["Sphere", "Cube", "Cylinder", "Cone"], 0, "A sphere is a perfectly round 3D solid.", "A round 3D ball shape.", "Mudah")
])

# Stage 2 to 6 templates
for g in range(2, 7):
    prefix = f"cam_math-{(g-1)*10+1:02d}"
    cam_math_qs.extend([
        make_q(f"cam_math-{(g-1)*10+1:02d}", "cam_math", "cambridge", g, "Number", "Whole numbers & Operations",
               f"[Stage {g}] What is {g*12} divided by {g}?",
               ["12", "10", "14", "16"], 0, f"{g*12} ÷ {g} = 12.", "Reverse multiplication.", "Mudah"),
        make_q(f"cam_math-{(g-1)*10+2:02d}", "cam_math", "cambridge", g, "Number", "Fractions & Decimals",
               f"[Stage {g}] Which fraction is equivalent to 1/2?",
               [f"{g}/{g*2}", f"{g}/{g*3}", f"1/{g*2}", f"{g}/100"], 0, f"{g}/{g*2} simplifies directly to 1/2.", "Divide top and bottom.", "Mudah"),
        make_q(f"cam_math-{(g-1)*10+3:02d}", "cam_math", "cambridge", g, "Geometry and Measure", "Angles & Properties of shapes",
               f"[Stage {g}] How many degrees are there in a complete full turn?",
               ["360 degrees", "180 degrees", "90 degrees", "270 degrees"], 0, "A full rotation is 360°.", "A full circle rotation.", "Mudah"),
        make_q(f"cam_math-{(g-1)*10+4:02d}", "cam_math", "cambridge", g, "Geometry and Measure", "Perimeter & Area",
               f"[Stage {g}] A square has sides of {g+3} cm. What is its perimeter?",
               [f"{(g+3)*4} cm", f"{(g+3)*(g+3)} cm", f"{(g+3)*2} cm", f"{g+3} cm"], 0, f"Perimeter = 4 × {(g+3)} = {(g+3)*4} cm.", "Add all 4 sides.", "Sedang"),
        make_q(f"cam_math-{(g-1)*10+5:02d}", "cam_math", "cambridge", g, "Statistics and Probability", "Charts & Graphs",
               f"[Stage {g}] On a bar chart, if 1 grid square represents {g*5} students, how many students are represented by 3 squares?",
               [f"{g*15} students", f"{g*10} students", f"{g*20} students", "15 students"], 0, f"3 × {g*5} = {g*15} students.", "Multiply squares by scale.", "Sedang"),
        make_q(f"cam_math-{(g-1)*10+6:02d}", "cam_math", "cambridge", g, "Thinking and Working Mathematically", "Reasoning & Problem solving",
               f"[Stage {g}] If a number is doubled and then 6 is added, the result is {g*4 + 6}. What was the original number?",
               [f"{g*2}", f"{g}", f"{g*3}", f"{g+2}"], 0, f"Reverse operations: {g*4 + 6} - 6 = {g*4}, then {g*4} ÷ 2 = {g*2}.", "Work backwards.", "Sedang"),
        make_q(f"cam_math-{(g-1)*10+7:02d}", "cam_math", "cambridge", g, "Number", "Percentages & Ratio" if g>=4 else "Mental strategies",
               f"[Stage {g}] What is 25% written as a simplified fraction?",
               ["1/4", "1/2", "1/5", "2/5"], 0, "25/100 simplifies to 1/4.", "One quarter.", "Sedang"),
        make_q(f"cam_math-{(g-1)*10+8:02d}", "cam_math", "cambridge", g, "Geometry and Measure", "Coordinates & Transformations" if g>=4 else "Symmetry",
               f"[Stage {g}] A regular hexagon has how many lines of reflective symmetry?",
               ["6 lines", "3 lines", "4 lines", "8 lines"], 0, "A regular polygon with n sides has n lines of symmetry. Hexagon has 6 sides = 6 lines.", "Count sides of regular hexagon.", "Sedang"),
        make_q(f"cam_math-{(g-1)*10+9:02d}", "cam_math", "cambridge", g, "Geometry and Measure", "Volume & Capacity",
               f"[Stage {g}] How many milliliters (ml) are in 1 liter?",
               ["1,000 ml", "100 ml", "10,000 ml", "500 ml"], 0, "1 liter = 1,000 milliliters.", "Milli- means one-thousandth.", "Mudah"),
        make_q(f"cam_math-{(g-1)*10+10:02d}", "cam_math", "cambridge", g, "Thinking and Working Mathematically", "Mathematical relationships",
               f"[Stage {g}] Which statement about prime numbers is always true?",
               ["A prime number has exactly two distinct factors: 1 and itself", "All prime numbers are odd", "Prime numbers end in 5", "There are only 10 prime numbers"], 0,
               "By definition, a prime number has exactly two factors (1 and itself). 2 is an even prime.", "Definition of prime.", "Tantangan" if g>=5 else "Sedang")
    ])

write_question_file('cambridgeMath.ts', 'cambridgeMathQuestions', cam_math_qs)

# =========================================================================
# CAMBRIDGE SCIENCE
# =========================================================================
cam_sci_qs = []
for g in range(1, 7):
    cam_sci_qs.extend([
        make_q(f"cam_science-{(g-1)*10+1:02d}", "cam_science", "cambridge", g, "Biology", "Living things & Habitats",
               f"[Stage {g}] Which of the following is a primary characteristic of all living organisms?",
               ["They grow, respire, and reproduce", "They are made of metal", "They stay the exact same size forever", "They never require water or energy"], 0,
               "All living organisms share life processes: growth, respiration, reproduction, sensitivity, nutrition, excretion, and movement.", "Think of MRS GREN life processes.", "Mudah"),
        make_q(f"cam_science-{(g-1)*10+2:02d}", "cam_science", "cambridge", g, "Biology", "Plants & Photosynthesis" if g>=3 else "Plant parts",
               f"[Stage {g}] What is the primary function of plant roots?",
               ["To anchor the plant and absorb water and minerals from soil", "To make flowers bloom faster", "To catch insects in the air", "To produce seeds"], 0,
               "Roots secure the plant in soil and take up moisture and dissolved mineral ions.", "Underground absorption.", "Mudah"),
        make_q(f"cam_science-{(g-1)*10+3:02d}", "cam_science", "cambridge", g, "Chemistry", "Materials & Properties",
               f"[Stage {g}] Which material is best suited for making an electrical cable conductor?",
               ["Copper metal", "Wood", "Rubber", "Glass"], 0,
               "Copper is an excellent electrical conductor with low resistance.", "Metals conduct electricity.", "Mudah"),
        make_q(f"cam_science-{(g-1)*10+4:02d}", "cam_science", "cambridge", g, "Chemistry", "States of matter & Particle model" if g>=4 else "Solids and Liquids",
               f"[Stage {g}] What happens to the particles of a liquid when it boils into a gas?",
               ["They gain kinetic energy and move rapidly far apart", "They lock tightly into a fixed grid", "They turn into stone", "They stop moving completely"], 0,
               "Heating increases particle kinetic energy, overcoming intermolecular attractions to form a gas.", "Gas particles move rapidly and freely.", "Sedang"),
        make_q(f"cam_science-{(g-1)*10+5:02d}", "cam_science", "cambridge", g, "Physics", "Forces & Movement",
               f"[Stage {g}] What force pulls objects downward toward the center of Earth?",
               ["Gravity", "Magnetism", "Friction", "Air resistance"], 0,
               "Gravity is the universal attractive force exerted by Earth's mass.", "Pulls things down when dropped.", "Mudah"),
        make_q(f"cam_science-{(g-1)*10+6:02d}", "cam_science", "cambridge", g, "Physics", "Electricity & Circuits",
               f"[Stage {g}] In a simple series circuit, what happens if the switch is opened (broken)?",
               ["Electric current stops flowing and the bulb goes out", "The bulb gets twice as bright", "The battery explodes", "The wire turns into ice"], 0,
               "An open switch breaks the closed conductive loop, halting current flow.", "An open circuit stops electrical flow.", "Mudah"),
        make_q(f"cam_science-{(g-1)*10+7:02d}", "cam_science", "cambridge", g, "Physics", "Light & Sound",
               f"[Stage {g}] How does sound travel from a vibrating drum to human ears?",
               ["Through vibrating air particles as sound waves", "By shining a laser beam", "By electrical lightning", "Sound does not need any medium"], 0,
               "Sound travels as mechanical longitudinal pressure waves vibrating air molecules.", "Sound travels through particle vibrations.", "Sedang"),
        make_q(f"cam_science-{(g-1)*10+8:02d}", "cam_science", "cambridge", g, "Earth and Space", "Solar System & Orbits",
               f"[Stage {g}] What causes the regular cycle of day and night on Earth?",
               ["Earth rotating once on its axis every 24 hours", "The Sun flying around the Earth", "The Moon blocking the Sun daily", "Clouds covering the sky"], 0,
               "Earth rotates on its axis once every 24 hours, exposing halves to sunlight and darkness alternately.", "Earth spins on its own axis.", "Sedang"),
        make_q(f"cam_science-{(g-1)*10+9:02d}", "cam_science", "cambridge", g, "Thinking and Working Scientifically", "Fair testing & Variables",
               f"[Stage {g}] In a fair test investigation, why must all variables except the independent variable be kept constant?",
               ["To ensure that any observed effect is solely caused by the variable being tested", "To finish the experiment quicker", "Because scientists only like one number", "To prevent writing notes"], 0,
               "Controlling variables isolates the cause-and-effect relationship.", "Fair testing requires controlling other factors.", "Sedang"),
        make_q(f"cam_science-{(g-1)*10+10:02d}", "cam_science", "cambridge", g, "Science in Context", "Environment & Sustainability",
               f"[Stage {g}] Why are renewable energy sources like solar and wind power preferable to burning fossil fuels?",
               ["They generate clean power without emitting greenhouse gases like carbon dioxide", "They make electricity completely free forever", "They never require any equipment", "They make the wind blow faster"], 0,
               "Renewable energy generates electricity sustainably without driving global greenhouse warming.", "Clean energy reduces greenhouse emissions.", "Sedang")
    ])

write_question_file('cambridgeScience.ts', 'cambridgeScienceQuestions', cam_sci_qs)

# =========================================================================
# SINGAPORE MATHEMATICS
# =========================================================================
sg_math_qs = []
for g in range(1, 7):
    sg_math_qs.extend([
        make_q(f"sg_math-{(g-1)*10+1:02d}", "sg_math", "singapore", g, "Number and Algebra", "Whole numbers & Place value",
               f"[P{g}] In Singapore Math, what does the digit 5 represent in the number {5 * (10**(g if g<=4 else 4))}?",
               [f"{5 * (10**(g if g<=4 else 4))}", "5 tens", "5 ones", "5 hundredths"], 0,
               f"The digit 5 is in the primary place value representing {5 * (10**(g if g<=4 else 4))}.", "Identify the place value column.", "Mudah"),
        make_q(f"sg_math-{(g-1)*10+2:02d}", "sg_math", "singapore", g, "Number and Algebra", "Number bonds & Four operations",
               f"[P{g}] What number bonds make 100 with {70 - g*5}?",
               [f"{30 + g*5}", f"{20 + g*5}", f"{40 + g*5}", "50"], 0,
               f"{70 - g*5} + {30 + g*5} = 100.", "Two parts combine to make the whole 100.", "Mudah"),
        make_q(f"sg_math-{(g-1)*10+3:02d}", "sg_math", "singapore", g, "Problem Solving", "Part-Whole & Comparison Bar Model",
               f"[P{g}] Ryan has {g*10 + 20} stamps. Wei Ming has twice as many stamps as Ryan. Using a bar model, how many stamps does Wei Ming have?",
               [f"{(g*10 + 20)*2} stamps", f"{(g*10 + 20)*3} stamps", f"{g*10 + 20} stamps", "50 stamps"], 0,
               f"Wei Ming has 2 units = 2 × {g*10 + 20} = {(g*10 + 20)*2} stamps.", "Draw 1 unit for Ryan, 2 units for Wei Ming.", "Sedang"),
        make_q(f"sg_math-{(g-1)*10+4:02d}", "sg_math", "singapore", g, "Number and Algebra", "Fractions & Decimals" if g>=3 else "Fractions of a whole",
               f"[P{g}] What is 3/4 + 1/8?",
               ["7/8", "4/12", "5/8", "1/2"], 0,
               "Convert to like denominators: 3/4 = 6/8. Then 6/8 + 1/8 = 7/8.", "Make common denominator 8.", "Sedang"),
        make_q(f"sg_math-{(g-1)*10+5:02d}", "sg_math", "singapore", g, "Measurement and Geometry", "Area, Perimeter & Volume",
               f"[P{g}] A rectangular playground is {g+4} m long and {g+2} m wide. What is its perimeter?",
               [f"{2 * ((g+4) + (g+2))} m", f"{(g+4) * (g+2)} m", f"{(g+4) + (g+2)} m", "20 m"], 0,
               f"Perimeter = 2 × (length + width) = 2 × ({g+4 + g+2}) = {2 * ((g+4) + (g+2))} m.", "2 × (length + width).", "Sedang"),
        make_q(f"sg_math-{(g-1)*10+6:02d}", "sg_math", "singapore", g, "Problem Solving", "Heuristics & Working backwards",
               f"[P{g}] Auntie Mei baked some cookies. She gave half to her sister, then ate 4 cookies, and had {g*5} cookies left. How many cookies did she bake originally?",
               [f"{(g*5 + 4) * 2} cookies", f"{(g*5 + 4)} cookies", f"{(g*5) * 2} cookies", "30 cookies"], 0,
               f"Work backwards: {g*5} + 4 = {g*5 + 4}. Multiply by 2: {(g*5 + 4) * 2} cookies.", "Work backwards from the end.", "Sedang"),
        make_q(f"sg_math-{(g-1)*10+7:02d}", "sg_math", "singapore", g, "Statistics", "Data interpretation & Graphs",
               f"[P{g}] In a bar graph showing favorite sports, Badminton bar is at 30 and Swimming is at 45. What is the difference between them?",
               ["15 pupils", "75 pupils", "10 pupils", "20 pupils"], 0,
               "Difference = 45 - 30 = 15 pupils.", "Subtract Badminton from Swimming.", "Mudah"),
        make_q(f"sg_math-{(g-1)*10+8:02d}", "sg_math", "singapore", g, "Measurement and Geometry", "Angles & 2D/3D shapes",
               f"[P{g}] How many right angles (90°) are there inside a standard rectangle?",
               ["4 right angles", "2 right angles", "1 right angle", "8 right angles"], 0,
               "A rectangle has 4 corners, each measuring exactly 90°.", "A rectangle has 4 square corners.", "Mudah"),
        make_q(f"sg_math-{(g-1)*10+9:02d}", "sg_math", "singapore", g, "Number and Algebra", "Ratio & Rate" if g>=5 else "Multiplication tables",
               f"[P{g}] If the ratio of boys to girls in a coding workshop is 2 : 3 and there are 10 boys, how many girls are there?",
               ["15 girls", "12 girls", "20 girls", "25 girls"], 0,
               "2 units = 10 ➔ 1 unit = 5. Girls = 3 units = 3 × 5 = 15 girls.", "Find 1 unit first, then multiply by 3.", "Sedang"),
        make_q(f"sg_math-{(g-1)*10+10:02d}", "sg_math", "singapore", g, "Problem Solving", "Constant difference & Non-routine heuristics",
               f"[P{g}] Mr. Tan is 36 years old and his daughter is 8 years old. What is the age difference between them in 10 years' time?",
               ["28 years", "38 years", "18 years", "48 years"], 0,
               "Age difference remains CONSTANT forever: 36 - 8 = 28 years.", "Age differences never change.", "Sedang")
    ])

write_question_file('singaporeMath.ts', 'singaporeMathQuestions', sg_math_qs)

# =========================================================================
# SINGAPORE ENGLISH
# =========================================================================
sg_eng_qs = []
for g in range(1, 7):
    sg_eng_qs.extend([
        make_q(f"sg_english-{(g-1)*10+1:02d}", "sg_english", "singapore", g, "Grammar and Language", "Subject-verb agreement",
               f"[P{g}] Choose the correct verb: 'Neither the teacher nor the students _______ absent today.'",
               ["are", "is", "was", "has"], 0,
               "With 'neither... nor', the verb agrees with the subject closest to it ('students' is plural, so 'are').", "Agreement with the nearest subject.", "Sedang"),
        make_q(f"sg_english-{(g-1)*10+2:02d}", "sg_english", "singapore", g, "Writing and Representing", "Synthesis & Transformation",
               f"[P{g}] Combine using 'Despite': 'The weather was scorching, but the marathon runners persevered.'",
               ["Despite the scorching weather, the marathon runners persevered.", "Despite it was scorching weather, the runners persevered.", "Despite of scorching weather, runners persevered.", "The runners persevered despite but it was scorching."], 0,
               "'Despite' takes a noun phrase ('the scorching weather') without 'of'.", "'Despite' takes a noun phrase, never 'of'.", "Sedang"),
        make_q(f"sg_english-{(g-1)*10+3:02d}", "sg_english", "singapore", g, "Reading and Viewing", "Inference & Comprehension",
               f"[P{g}] 'Devi bit her lip, checked her watch repeatedly, and paced back and forth outside the exam hall.' How was Devi feeling?",
               ["Anxious and apprehensive", "Joyful and relaxed", "Bored and sleepy", "Furious and vengeful"], 0,
               "Pacing and checking the watch repeatedly indicate nervousness and anxiety.", "Look at behavioral clues showing nervousness.", "Mudah"),
        make_q(f"sg_english-{(g-1)*10+4:02d}", "sg_english", "singapore", g, "Grammar and Language", "Connectors & Conjunctions",
               f"[P{g}] Choose the connector: 'You will not excel in public speaking _______ you practice regularly.'",
               ["unless", "although", "since", "so"], 0,
               "'Unless' expresses the conditional requirement (means 'if not').", "Means 'if not'.", "Mudah"),
        make_q(f"sg_english-{(g-1)*10+5:02d}", "sg_english", "singapore", g, "Speaking and Representing", "Expressing viewpoints & Giving reasons",
               f"[P{g}] Which sentence expresses a viewpoint supported by justification?",
               ["I believe we should plant more trees because they absorb carbon dioxide and provide shade.", "Trees are green.", "Plant trees right now!", "Do you like trees?"], 0,
               "Presents a clear assertion ('I believe...') followed by causal reasoning ('because...').", "Viewpoint supported by 'because'.", "Mudah"),
        make_q(f"sg_english-{(g-1)*10+6:02d}", "sg_english", "singapore", g, "Writing and Representing", "Editing & Punctuation",
               f"[P{g}] Identify the sentence with correct punctuation for direct quotation:",
               ["\"Please remember to submit your science journals,\" reminded Mrs. Lim.", "\"Please remember to submit your science journals\" reminded Mrs. Lim.", "Please remember to submit your science journals \"reminded Mrs. Lim.\"", "\"Please remember to submit your science journals, reminded Mrs. Lim.\""], 0,
               "The comma belongs inside the closing quotation marks before the attribution tag.", "Comma inside quotes.", "Sedang"),
        make_q(f"sg_english-{(g-1)*10+7:02d}", "sg_english", "singapore", g, "Listening and Viewing", "Key details & Critical listening",
               f"[P{g}] During morning school announcements, which element conveys the critical action item?",
               ["The specific date, time, and instructions given for assembly", "The background bell chime", "The weather forecast in Australia", "The brand of the microphone"], 0,
               "Actionable instructions, dates, and times form the core informational content.", "Focus on actionable instructions.", "Mudah"),
        make_q(f"sg_english-{(g-1)*10+8:02d}", "sg_english", "singapore", g, "Reading and Viewing", "Vocabulary in context",
               f"[P{g}] In Singapore STELLAR texts, what does 'perseverance' mean?",
               ["Continuing effort to do something despite difficulties", "Giving up immediately when tired", "Running faster than a cheetah", "Buying expensive school shoes"], 0,
               "'Perseverance' is persistence in doing something despite difficulty or delay in achieving success.", "Not giving up despite hardship.", "Mudah"),
        make_q(f"sg_english-{(g-1)*10+9:02d}", "sg_english", "singapore", g, "Writing and Representing", "Paragraph organisation & Cohesion",
               f"[P{g}] What is the role of connective phrases like 'Furthermore' and 'In addition'?",
               ["To introduce supplementary supporting points smoothly", "To contradict the previous sentence", "To end the story abruptly", "To indicate physical location"], 0,
               "Additive connectors build upon and expand preceding arguments.", "Adds another supporting idea.", "Sedang"),
        make_q(f"sg_english-{(g-1)*10+10:02d}", "sg_english", "singapore", g, "Grammar and Language", "Tenses & Conditionals",
               f"[P{g}] 'Had I known about the book fair earlier, I _______ some pocket money.'",
               ["would have saved", "will save", "would save", "saved"], 0,
               "Inverted third conditional requires 'would have + past participle' in the main clause.", "Would have + past participle for unreal past.", "Tantangan")
    ])

write_question_file('singaporeEnglish.ts', 'singaporeEnglishQuestions', sg_eng_qs)

# =========================================================================
# SINGAPORE SCIENCE
# =========================================================================
sg_sci_qs = []
for g in range(1, 7):
    sg_sci_qs.extend([
        make_q(f"sg_science-{(g-1)*10+1:02d}", "sg_science", "singapore", g, "Diversity", "Classification of living things & Materials",
               f"[P{g}] Under Singapore Science diversity, which characteristic proves that a bat is a MAMMAL, not a bird?",
               ["It has fur/hair and produces milk for its young", "It can fly in the sky", "It has two eyes", "It sleeps at night"], 0,
               "Mammals are defined by mammary glands producing milk and body covering of fur or hair.", "Mammal characteristics: fur and milk.", "Mudah"),
        make_q(f"sg_science-{(g-1)*10+2:02d}", "sg_science", "singapore", g, "Cycles", "Life cycles & Metamorphosis",
               f"[P{g}] Which insect undergoes a complete 4-stage life cycle (Egg ➔ Larva ➔ Pupa ➔ Adult)?",
               ["Butterfly", "Cockroach", "Grasshopper", "Dragonfly"], 0,
               "Butterflies have a 4-stage life cycle with a distinct pupa/chrysalis stage. Cockroaches have 3 stages (nymph).", "Look for the insect with a pupa/chrysalis stage.", "Mudah"),
        make_q(f"sg_science-{(g-1)*10+3:02d}", "sg_science", "singapore", g, "Systems", "Human Digestive System",
               f"[P{g}] In the human digestive system, what is the role of the stomach?",
               ["It produces gastric juices containing acid and enzymes to break down proteins", "It absorbs water from undigested food", "It pumps blood to muscles", "It breathes in oxygen"], 0,
               "The stomach secretes hydrochloric acid and pepsin to digest proteins into simpler substances.", "Stomach acid and enzymes churn food.", "Sedang"),
        make_q(f"sg_science-{(g-1)*10+4:02d}", "sg_science", "singapore", g, "Energy", "Light & Shadows",
               f"[P{g}] When a solid wooden toy is placed between a torchlight and a white wall, a dark shadow forms. Why?",
               ["Light travels in straight lines and the wood is opaque, blocking light", "The wood reflects light into the torch", "The torch turns off automatically", "Light bends around the wood"], 0,
               "Light travels in straight lines; an opaque object blocks light from reaching the screen.", "Opaque materials block straight light rays.", "Mudah"),
        make_q(f"sg_science-{(g-1)*10+5:02d}", "sg_science", "singapore", g, "Interactions", "Magnets & Magnetic materials",
               f"[P{g}] Which of the following metals CANNOT be attracted by a strong magnet?",
               ["Copper", "Iron", "Steel", "Nickel"], 0,
               "Copper, gold, aluminum, and silver are non-magnetic. Iron, steel, nickel, and cobalt are magnetic.", "Copper is non-magnetic.", "Mudah"),
        make_q(f"sg_science-{(g-1)*10+6:02d}", "sg_science", "singapore", g, "Cycles", "Water cycle & Changes of state",
               f"[P{g}] What happens during CONDENSATION in the water cycle?",
               ["Water vapor loses heat and turns into liquid water droplets", "Liquid water gains heat and turns into steam", "Ice gains heat and turns into liquid", "Water soaks into the soil"], 0,
               "Condensation is the process where gaseous water vapor loses heat to form liquid droplets.", "Gas losing heat to form liquid.", "Sedang"),
        make_q(f"sg_science-{(g-1)*10+7:02d}", "sg_science", "singapore", g, "Systems", "Plant transport system (Xylem & Phloem)",
               f"[P{g}] What is the primary function of xylem vessels in a plant stem?",
               ["To transport water and dissolved mineral salts from roots upward to leaves", "To transport food sugars from leaves to roots", "To attract pollinators", "To absorb sunlight"], 0,
               "Xylem vessels transport water and mineral salts upwards from roots to leaves.", "Xylem carries water up from roots.", "Sedang"),
        make_q(f"sg_science-{(g-1)*10+8:02d}", "sg_science", "singapore", g, "Interactions", "Forces & Friction",
               f"[P{g}] Why are treads designed on the bottom of sports shoes?",
               ["To increase friction with the floor and prevent slipping", "To make shoes weigh less", "To absorb water", "To make shoes glow"], 0,
               "Tread patterns increase grip/friction between footwear and the ground to prevent accidental falls.", "Increases grip and friction.", "Mudah"),
        make_q(f"sg_science-{(g-1)*10+9:02d}", "sg_science", "singapore", g, "Energy", "Electrical systems & Circuits",
               f"[P{g}] In a parallel circuit with two light bulbs, what happens if one bulb blows out?",
               ["The other bulb remains lit because it has its own independent closed circuit", "The other bulb goes out immediately", "The battery dies instantly", "The wires catch fire"], 0,
               "In a parallel circuit, each branch operates independently, so other bulbs remain lit.", "Parallel branches work independently.", "Sedang"),
        make_q(f"sg_science-{(g-1)*10+10:02d}", "sg_science", "singapore", g, "Interactions", "Ecosystems & Environmental impact",
               f"[P{g}] What is an example of an organism's behavioral adaptation to desert heat?",
               ["Burrowing underground during the day and being nocturnal", "Growing thick fur like a polar bear", "Migrating to the Arctic in winter", "Drinking seawater continuously"], 0,
               "Nocturnal habits and underground burrowing avoid daytime desert temperatures.", "Nocturnal activity avoids daytime heat.", "Sedang")
    ])

write_question_file('singaporeScience.ts', 'singaporeScienceQuestions', sg_sci_qs)
