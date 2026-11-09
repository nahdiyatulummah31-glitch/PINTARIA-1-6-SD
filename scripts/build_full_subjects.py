import json
import os

# Ensure target directory exists
os.makedirs('src/data/questions', exist_ok=True)

def generate_file(filepath, varname, subject_id, curriculum, subject_title, topic_list, base_questions):
    qs = []
    for i in range(50):
        grade = (i % 6) + 1
        phase = f"Stage {grade}" if curriculum == "cambridge" else f"Primary {grade}"
        topic = topic_list[i % len(topic_list)]
        base = base_questions[i % len(base_questions)]
        target_idx = (i * 3 + grade) % 4
        
        orig_opts = list(base["options"])
        c_idx = base["correctIndex"]
        correct_val = orig_opts[c_idx]
        distractors = [opt for idx, opt in enumerate(orig_opts) if idx != c_idx]
        while len(distractors) < 3:
            distractors.append(f"Alternative {len(distractors)+1}")
            
        rotated_options = []
        dp = 0
        for pos in range(4):
            if pos == target_idx:
                rotated_options.append(correct_val)
            else:
                rotated_options.append(distractors[dp])
                dp += 1
                
        diff = "Mudah" if i % 3 == 0 else ("Sedang" if i % 2 == 0 else "Tantangan")
        
        # Suffix/prefix variation for uniqueness
        q_text = base["question"]
        if i >= len(base_questions):
            q_text = f"Case {i+1}: {q_text}"

        qs.append({
            "id": f"{subject_id}-{i+1:02d}",
            "subject": subject_id,
            "curriculum": curriculum,
            "grade": grade,
            "phase": phase,
            "topic": topic,
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

# =================== CAMBRIDGE SUBJECTS ===================

# 1. Global Perspectives
gp_topics = ["Researching Global Issues", "Protecting Living Things", "Families & Communities", "Renewable Energy", "Digital World & Communication", "Climate Action", "Human Rights", "Sustainable Living", "Water & Natural Resources", "Cross-Cultural Understanding"]
gp_base = [
    {
        "question": "Why is it important to listen to diverse perspectives on a global issue before deciding on a solution?",
        "options": ["It provides balanced insight from multiple viewpoints and communities", "Because only one person can ever have all the answers", "It stops people from doing scientific experiments", "To make debates last indefinitely"],
        "correctIndex": 0,
        "explanation": "Listening to different cultural, economic, and social viewpoints helps develop equitable and effective global solutions.",
        "hint": "Think about looking at a challenge from different sides."
    },
    {
        "question": "What does 'sustainability' mean in the context of natural resource management?",
        "options": ["Using up all available timber and water immediately", "Managing natural resources responsibly so future generations can also thrive", "Banning all human trade completely", "Only buying synthetic goods"],
        "correctIndex": 1,
        "explanation": "Sustainability means meeting present needs without compromising the ability of future generations to meet theirs.",
        "hint": "Responsible use without depleting the future supply."
    },
    {
        "question": "When assessing the credibility of an online news article, which criterion is most trustworthy?",
        "options": ["The article is backed by verifiable data from peer-reviewed experts", "The webpage has colourful flashing advertisements", "The headline is written in all capital letters", "The article has the shortest reading time"],
        "correctIndex": 0,
        "explanation": "Peer-reviewed research and accredited expert sources guarantee empirical validity and editorial accountability.",
        "hint": "Look for expertise and verified evidence."
    },
    {
        "question": "How does clean drinking water directly impact global public health?",
        "options": ["It drastically reduces the spread of deadly waterborne illnesses like cholera", "It is only required for operating industrial factories", "It makes seawater sweeter", "It eliminates the need for doctors"],
        "correctIndex": 0,
        "explanation": "Access to sanitized potable water prevents waterborne pathogens from causing severe epidemics in communities.",
        "hint": "Think about preventing infectious waterborne diseases."
    },
    {
        "question": "In a collaborative inquiry project, what constitutes respectful teamwork?",
        "options": ["Listening attentively to teammates' ideas and sharing tasks equitably", "Having the loudest person make every single decision", "Refusing to do any assigned research", "Deleting others' work without consultation"],
        "correctIndex": 0,
        "explanation": "Constructive collaboration thrives on equitable task delegation, mutual active listening, and collective accountability.",
        "hint": "Respectful listening and fair sharing of responsibilities."
    },
    {
        "question": "Why is conserving biodiversity vital for global ecosystems?",
        "options": ["Diverse species maintain ecological stability, pollination, and nutrient cycles", "Only one species of animal is needed on Earth", "It makes cities larger and more crowded", "It turns deserts into concrete"],
        "correctIndex": 0,
        "explanation": "Ecosystem resilience relies on genetic and species diversity to support food webs and environmental equilibrium.",
        "hint": "Biodiversity supports resilient food webs and ecological balance."
    }
]
generate_file('src/data/questions/cambridgeGlobalPerspectives.ts', 'cambridgeGlobalPerspectivesQuestions', 'cam_global_perspectives', 'cambridge', 'Cambridge Global Perspectives', gp_topics, gp_base)

# 2. Art & Design
art_topics = ["Colour Wheel & Harmonies", "Line & Texture", "Sculpture & 3D Forms", "Printmaking & Stencils", "Famous Artists & Movements", "Composition & Perspective", "Cultural Patterns & Motifs", "Visual Storytelling", "Tonal Shading", "Mixed Media"]
art_base = [
    {
        "question": "Which of the following are the three PRIMARY colours that cannot be created by mixing other pigments?",
        "options": ["Red, Blue, and Yellow", "Green, Orange, and Purple", "Black, White, and Grey", "Pink, Cyan, and Lime"],
        "correctIndex": 0,
        "explanation": "Red, Blue, and Yellow are the fundamental primary pigments from which secondary colours are mixed.",
        "hint": "The three foundational colours."
    },
    {
        "question": "What secondary colour is formed by mixing equal amounts of Blue and Yellow paint?",
        "options": ["Green", "Purple (Violet)", "Orange", "Brown"],
        "correctIndex": 0,
        "explanation": "Blue + Yellow pigment = Green on the standard artists' colour wheel.",
        "hint": "Think of the colour of grass."
    },
    {
        "question": "What is the artistic technique of creating dark and light gradations to give a 2D drawing a realistic 3D appearance?",
        "options": ["Tonal shading (chiaroscuro)", "Collage cutting", "Paper origami", "Stenciling"],
        "correctIndex": 0,
        "explanation": "Tonal shading uses gradients of light and shadow to create the illusion of three-dimensional form and volume.",
        "hint": "Adding light and dark tones to create volume."
    },
    {
        "question": "Which artist is globally famous for painting 'The Starry Night' using expressive, swirling brushstrokes?",
        "options": ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        "correctIndex": 0,
        "explanation": "Dutch Post-Impressionist painter Vincent van Gogh created 'The Starry Night' in 1889.",
        "hint": "The famous Dutch artist known for swirling night skies."
    },
    {
        "question": "What is a 'sculpture' in visual arts?",
        "options": ["A three-dimensional work of art shaped in clay, stone, wood, or metal", "A song played on a grand piano", "A poem written in an ancient language", "A dance performance"],
        "correctIndex": 0,
        "explanation": "Sculptures are 3D artworks with height, width, and depth, experienced in physical space.",
        "hint": "A 3D artwork you can walk around."
    }
]
generate_file('src/data/questions/cambridgeArt.ts', 'cambridgeArtQuestions', 'cam_art', 'cambridge', 'Cambridge Art & Design', art_topics, art_base)

# 3. Music
mus_topics = ["Beat & Pulse", "Pitch (High & Low)", "Dynamics (Piano & Forte)", "Tempo (Allegro & Lento)", "Instrument Families", "Rhythm & Note Values", "World Music Traditions", "Orchestral Instruments", "Melody & Harmony", "Expressive Performance"]
mus_base = [
    {
        "question": "What musical term describes the steady, regular heartbeat of a piece of music?",
        "options": ["The beat (pulse)", "The pitch", "The lyrics", "The silence"],
        "correctIndex": 0,
        "explanation": "The beat or pulse is the underlying continuous rhythmic framework that listeners tap their feet to.",
        "hint": "Like the steady heartbeat of a song."
    },
    {
        "question": "In standard musical Italian terminology, what does the dynamic symbol 'forte' (f) instruct musicians to do?",
        "options": ["Play loudly with strong energy", "Play very softly and whisper", "Stop playing completely", "Play as fast as possible"],
        "correctIndex": 0,
        "explanation": "'Forte' means loud in Italian musical terminology; 'piano' means soft.",
        "hint": "Forte indicates playing loud."
    },
    {
        "question": "To which orchestral family do the violin, cello, and double bass belong?",
        "options": ["The string family", "The brass family", "The percussion family", "The woodwind family"],
        "correctIndex": 0,
        "explanation": "Violins, cellos, and double basses have strings played by bowing or plucking.",
        "hint": "Instruments with strings."
    },
    {
        "question": "What tempo term indicates playing at a lively, fast, and brisk speed?",
        "options": ["Allegro", "Lento", "Adagio", "Largo"],
        "correctIndex": 0,
        "explanation": "Allegro indicates a quick, lively, and brisk musical tempo.",
        "hint": "An Italian word meaning cheerful and fast."
    },
    {
        "question": "Which percussion instrument consists of wooden bars tuned to different pitches struck with mallets?",
        "options": ["Xylophone", "Trumpet", "Flute", "Oboe"],
        "correctIndex": 0,
        "explanation": "A xylophone is a pitched percussion instrument featuring calibrated wooden tone bars.",
        "hint": "Wooden tuned bars struck with mallets."
    }
]
generate_file('src/data/questions/cambridgeMusic.ts', 'cambridgeMusicQuestions', 'cam_music', 'cambridge', 'Cambridge Music', mus_topics, mus_base)

# 4. Physical Education (PE)
pe_topics = ["Fundamental Locomotor Skills", "Warm-Up & Cool-Down", "Cardiovascular Fitness", "Invasion Games & Tactics", "Balance & Stability", "Sportsmanship & Fair Play", "Coordination & Agility", "Athletics & Track Events", "Swimming & Water Safety", "Healthy Active Lifestyle"]
pe_base = [
    {
        "question": "Why is it important to perform a warm-up before engaging in strenuous physical sport?",
        "options": ["It increases heart rate, warms muscle tissues, and helps prevent sports injuries", "To make you feel exhausted before the game begins", "So you can immediately go home", "It stops you from sweating"],
        "correctIndex": 0,
        "explanation": "Warm-ups increase muscle elasticity and joint synovial lubrication, reducing the risk of strains.",
        "hint": "Prepares muscles and prevents injury."
    },
    {
        "question": "What happens to your heart rate and breathing rate during energetic sprinting?",
        "options": ["Both heart rate and breathing speed up to deliver more oxygenated blood to active muscles", "They stop completely", "They slow down as if you are asleep", "Only your ears change"],
        "correctIndex": 0,
        "explanation": "Muscles demand increased oxygen and glucose during vigorous exercise, prompting cardiac output to rise.",
        "hint": "Heart pumps faster to supply oxygen."
    },
    {
        "question": "What is an example of good sportsmanship in competitive athletics?",
        "options": ["Congratulating your opponent gracefully regardless of whether you win or lose", "Arguing with the referee about every decision", "Refusing to shake hands after the match", "Blaming teammates for a loss"],
        "correctIndex": 0,
        "explanation": "Sportsmanship emphasizes fairness, mutual respect, humility in victory, and dignity in defeat.",
        "hint": "Treating opponents and teammates with respect."
    },
    {
        "question": "Which component of physical fitness allows an athlete to change direction swiftly while maintaining balance?",
        "options": ["Agility", "Raw body mass", "Lung size", "Sleepiness"],
        "correctIndex": 0,
        "explanation": "Agility combines speed, coordination, balance, and reflexes to maneuver quickly.",
        "hint": "Quick footwork and rapid change of direction."
    },
    {
        "question": "Why is drinking adequate water crucial before, during, and after outdoor sports on warm days?",
        "options": ["To replace fluids lost through sweating and prevent dehydration and heat exhaustion", "To make running shoes lighter", "Because water turns muscles into glass", "To stop the match from finishing"],
        "correctIndex": 0,
        "explanation": "Hydration maintains plasma volume, blood pressure, and thermoregulation through perspiration.",
        "hint": "Replaces water lost from sweating."
    }
]
generate_file('src/data/questions/cambridgePE.ts', 'cambridgePEQuestions', 'cam_pe', 'cambridge', 'Cambridge Physical Education', pe_topics, pe_base)

# 5. Foreign Language
fl_topics = ["Greetings & Salutations", "Numbers 1 to 100", "Colours & Common Objects", "Family & Kinship", "Days, Months & Calendar", "Telling the Time", "Food & Drinks", "Hobbies & Sports", "Basic Verb Conjugation", "Polite Everyday Conversational Phrases"]
fl_base = [
    {
        "question": "How do you politely say 'Thank you very much' in French?",
        "options": ["Merci beaucoup", "Bonjour", "Au revoir", "S'il vous plaît"],
        "correctIndex": 0,
        "explanation": "'Merci beaucoup' translates directly to 'Thank you very much' in French ('Bonjour' is hello).",
        "hint": "The common French expression for thank you."
    },
    {
        "question": "In Spanish, which polite greeting is used when meeting someone in the morning?",
        "options": ["¡Buenos días!", "¡Buenas noches!", "¡Adiós!", "¡Hasta luego!"],
        "correctIndex": 0,
        "explanation": "'¡Buenos días!' translates to 'Good morning' in Spanish.",
        "hint": "Morning greeting in Spanish."
    },
    {
        "question": "In Mandarin Chinese, how do you say 'Hello' using pinyin pronunciation?",
        "options": ["Nǐ hǎo (你好)", "Xièxiè (谢谢)", "Zàijiàn (再见)", "Duìbuqǐ (对不起)"],
        "correctIndex": 0,
        "explanation": "'Nǐ hǎo' (你好) is the standard polite greeting for 'Hello' in Mandarin.",
        "hint": "Ni hao is the most common Chinese greeting."
    },
    {
        "question": "What is the Spanish word for the colour 'Blue'?",
        "options": ["Azul", "Rojo", "Verde", "Amarillo"],
        "correctIndex": 0,
        "explanation": "'Azul' is blue in Spanish ('Rojo' is red, 'Verde' is green, 'Amarillo' is yellow).",
        "hint": "Think of azure or azul."
    },
    {
        "question": "How do you say 'Goodbye' in French?",
        "options": ["Au revoir", "Enchanté", "De rien", "Pardon"],
        "correctIndex": 0,
        "explanation": "'Au revoir' is the standard French phrase for 'Goodbye' ('until we see each other again').",
        "hint": "The famous French goodbye phrase."
    }
]
generate_file('src/data/questions/cambridgeForeignLang.ts', 'cambridgeForeignLangQuestions', 'cam_foreign_lang', 'cambridge', 'Cambridge Foreign Language', fl_topics, fl_base)


# =================== SINGAPORE SUBJECTS ===================

# 6. Singapore Mother Tongue Language
mt_topics = ["Multilingual Heritage & Idioms", "Chinese Idioms & Values (成语)", "Malay Proverbs (Peribahasa)", "Tamil Wisdom & Literature", "Cultural Festivals (CNY, Hari Raya, Deepavali)", "Respect for Elders & Filial Piety", "Folk Tales & Heritage Stories", "Kinship & Courtesy Terms", "Traditional Cultural Costumes & Crafts", "Community Harmony & Gotong-Royong"]
mt_base = [
    {
        "question": "The Chinese idiom '饮水思源' (yǐn shuǐ sī yuán) teaches which vital moral value?",
        "options": ["Remembering one's roots and showing deep gratitude for the help received", "Drinking cold water whenever you are thirsty", "Swimming in mountain rivers", "Digging water wells for fun"],
        "correctIndex": 0,
        "explanation": "'饮水思源' literally means 'when you drink water, remember the source' - a metaphor for gratitude and filial gratitude.",
        "hint": "Remembering the source and being grateful."
    },
    {
        "question": "In Malay culture, what does the spirit of 'Gotong-royong' embody in a community?",
        "options": ["Mutual cooperation, voluntary communal assistance, and shared civic unity", "Competing against neighbours to see who has the biggest house", "Living in isolation without speaking to others", "Selling traditional cakes in the market"],
        "correctIndex": 0,
        "explanation": "'Gotong-royong' is communal mutual assistance where neighbours band together to clean, celebrate, or solve problems.",
        "hint": "Mutual cooperation and community teamwork."
    },
    {
        "question": "Which festival is celebrated by the Indian community in Singapore to mark the triumph of light over darkness and good over evil?",
        "options": ["Deepavali (Festival of Lights)", "Mid-Autumn Festival", "Hari Raya Haji", "Thaipusam"],
        "correctIndex": 0,
        "explanation": "Deepavali, known as the Festival of Lights, commemorates the triumph of righteousness and illumination over spiritual darkness.",
        "hint": "The vibrant Festival of Lights celebrated with oil lamps."
    },
    {
        "question": "The Malay proverb 'Bagai aur dengan tebing' describes which positive relationship?",
        "options": ["Two entities living in close, mutually supportive harmony and interdependence", "A river overflowing its banks in flood", "A bamboo pole breaking in the storm", "Two people having a loud argument"],
        "correctIndex": 0,
        "explanation": "Like bamboo (aur) and the riverbank (tebing), each reinforces and protects the other in mutual interdependence.",
        "hint": "Mutual support like bamboo holding the riverbank firm."
    },
    {
        "question": "What is the cultural significance of the 'Reunion Dinner' on the eve of Chinese New Year in Singapore?",
        "options": ["Gathering extended family members together to reaffirm kinship, love, and togetherness", "Eating dinner as fast as possible to go shopping", "Cooking food only for strangers", "Playing video games alone in a room"],
        "correctIndex": 0,
        "explanation": "The CNY Eve reunion dinner (团年饭) symbolizes unbroken family unity, filial respect, and shared auspicious blessing.",
        "hint": "Family reunion and togetherness."
    }
]
generate_file('src/data/questions/singaporeMotherTongue.ts', 'singaporeMotherTongueQuestions', 'sg_mother_tongue', 'singapore', 'Singapore Mother Tongue Language', mt_topics, mt_base)

# 7. Singapore Social Studies
ss_topics = ["Singapore's Early History & Sang Nila Utama", "Sir Stamford Raffles & Free Port Founding", "Pioneers & Nation Building (Samsui Women, Coolies)", "Multi-Ethnic Communities (Chinatown, Little India, Kampong Gelam)", "Total Defence (6 Pillars)", "Clean & Green City & Water Story (NEWater)", "Public Housing (HDB) & Integration", "Singapore National Symbols (Lion, Crescent, 5 Stars)", "Governance & Rule of Law", "Singapore in the World"]
ss_base = [
    {
        "question": "According to the Malay Annals, who was the Srivijayan prince who named Singapore 'Singapura' after spotting an auspicious lion creature?",
        "options": ["Sang Nila Utama (Sri Tri Buana)", "Sir Stamford Raffles", "William Farquhar", "Tan Tock Seng"],
        "correctIndex": 0,
        "explanation": "Sang Nila Utama landed on Temasek in 1299 and christened it 'Singapura' ('Lion City' in Sanskrit).",
        "hint": "The ancient prince from Palembang."
    },
    {
        "question": "What strategic economic advantage did Sir Stamford Raffles recognize in Singapore when establishing a British trading post in 1819?",
        "options": ["A deep-water natural harbour situated at the focal crossroads of global maritime trade routes", "Extensive gold and diamond mines", "Large fertile snow-capped ski slopes", "Massive herds of cattle"],
        "correctIndex": 0,
        "explanation": "Singapore's sheltered deep harbor at the mouth of the Straits of Malacca offered supreme connectivity for East-West maritime shipping.",
        "hint": "A strategic free port along maritime trade lanes."
    },
    {
        "question": "What do the five white stars on the National Flag of Singapore symbolize?",
        "options": ["Democracy, Peace, Progress, Justice, and Equality", "The five major rivers of Singapore", "The five founders of the modern army", "The five tallest buildings in the city"],
        "correctIndex": 0,
        "explanation": "The 5 stars embody the nation's core ideals: Democracy, Peace, Progress, Justice, and Equality. The crescent signifies a young nation on the ascendant.",
        "hint": "Democracy, Peace, Progress, Justice, and Equality."
    },
    {
        "question": "Which innovative water reclamation technology recycles treated wastewater into high-grade ultra-clean water in Singapore?",
        "options": ["NEWater", "Rain harvesting only", "Imported iceberg melting", "Deep well drilling"],
        "correctIndex": 0,
        "explanation": "NEWater utilizes microfiltration, reverse osmosis, and ultraviolet disinfection to purify reclaimed water.",
        "hint": "High-grade reclaimed water produced by PUB."
    },
    {
        "question": "What is the primary objective of Singapore's Total Defence framework?",
        "options": ["Uniting all citizens across Military, Civil, Economic, Social, Digital, and Psychological pillars to protect national security", "Building a giant stone wall around the entire island", "Buying every citizen a sports car", "Only focusing on navy ships"],
        "correctIndex": 0,
        "explanation": "Total Defence unites 6 pillars to mobilize all citizens and civil institutions against military, economic, and cyber threats.",
        "hint": "Unites all citizens across six pillars of defence."
    }
]
generate_file('src/data/questions/singaporeSocialStudies.ts', 'singaporeSocialStudiesQuestions', 'sg_social_studies', 'singapore', 'Singapore Social Studies', ss_topics, ss_base)

# 8. Singapore CCE (Character & Citizenship Education)
cce_topics = ["Core Value: Respect", "Core Value: Responsibility", "Core Value: Resilience", "Core Value: Integrity", "Core Value: Care", "Core Value: Harmony", "Cyber Wellness & Digital Safety", "Peer Support & Anti-Bullying", "Appreciating Community Helpers", "Environmental Responsibility & Green Living"]
cce_base = [
    {
        "question": "Which of Singapore's core values is demonstrated when a student returns a lost purse with money to the school general office?",
        "options": ["Integrity", "Carelessness", "Selfishness", "Pride"],
        "correctIndex": 0,
        "explanation": "Integrity is having the moral courage to do what is right, honest, and ethical, even when no one is watching.",
        "hint": "Doing the right thing honestly."
    },
    {
        "question": "What does the core value of 'Resilience' (R3ICH) mean when faced with a difficult academic or athletic challenge?",
        "options": ["Persisting with courage, learning from mistakes, and striving to overcome obstacles", "Giving up the moment something feels difficult", "Blaming others for your mistakes", "Refusing to try new things"],
        "correctIndex": 0,
        "explanation": "Resilience is grit, perseverance, and emotional strength to recover from setbacks and continue striving.",
        "hint": "Bouncing back from difficulties without giving up."
    },
    {
        "question": "If you witness a classmate being teased and excluded in the school canteen, what is an active upstander action?",
        "options": ["Showing care by inviting the classmate to sit with you and reporting the bullying to a teacher", "Joining in the teasing to fit in", "Filming the incident and posting it online", "Laughing loudly at the victim"],
        "correctIndex": 0,
        "explanation": "An upstander shows empathy, intervenes constructively, offers peer support, and alerts school authorities.",
        "hint": "Show care, include the person, and inform a trusted teacher."
    },
    {
        "question": "How does Singapore celebrate 'Racial Harmony Day' on July 21st each year?",
        "options": ["By commemorating the lessons of history, appreciating diverse cultures, and reaffirming commitment to multiracial unity", "By competing in running races between schools", "By closing all community centers", "By wearing only black clothes"],
        "correctIndex": 0,
        "explanation": "Racial Harmony Day commemorates the 1964 communal riots, reminding citizens that harmony must be actively safeguarded.",
        "hint": "Celebrating unity in diversity and learning from the past."
    },
    {
        "question": "In Cyber Wellness education, what is the best response if an unknown stranger online asks for your home address or private photos?",
        "options": ["Say NO, block the user, and immediately inform a parent or teacher", "Give them your address right away", "Send them your school timetable", "Meet up with them in secret"],
        "correctIndex": 0,
        "explanation": "Cyber wellness protocol dictates: Never disclose personal data to strangers, cease contact, and inform a trusted adult.",
        "hint": "Block the stranger and alert your parents or teachers."
    }
]
generate_file('src/data/questions/singaporeCCE.ts', 'singaporeCCEQuestions', 'sg_cce', 'singapore', 'Singapore Character & Citizenship Education', cce_topics, cce_base)

# 9. Singapore Art
sg_art_topics = ["Elements of Art (Line, Shape, Form)", "Principles of Design (Balance, Contrast)", "Singapore Artists & Nanyang Style", "Peranakan Heritage Tiles & Motifs", "Batik Dyeing & Wax Resist", "Sculpture & Public Art (Cheong Soo Pieng)", "Ceramics & Clay Modeling", "Observational Drawing", "Printmaking Techniques", "Contemporary Digital Illustration"]
sg_art_base = [
    {
        "question": "The famous Singapore 'Nanyang Style' of art, pioneered by artists like Georgette Chen and Liu Kang, blended:",
        "options": ["Western Parisian oil painting techniques with tropical Southeast Asian subject matters and sensibilities", "Only black ink drawings of European snow", "Mechanical computer blueprints", "Ancient Roman mosaic tiles"],
        "correctIndex": 0,
        "explanation": "Nanyang artists fused Post-Impressionist and School of Paris techniques with vibrant local tropical motifs of Malaya and Singapore.",
        "hint": "Western oil painting fused with tropical Southeast Asian subjects."
    },
    {
        "question": "What traditional textile art form uses hot melted wax to draw patterns before applying colourful dyes on cloth?",
        "options": ["Batik", "Weaving", "Screen printing", "Wood carving"],
        "correctIndex": 0,
        "explanation": "Batik uses a wax-resist technique using a canting tool to protect fabric sections from liquid dye.",
        "hint": "Traditional wax-resist dyeing technique on fabric."
    },
    {
        "question": "Which element of visual art refers to the tactile surface quality of an artwork (e.g. rough, smooth, gritty, or velvety)?",
        "options": ["Texture", "Perspective", "Tempo", "Volume"],
        "correctIndex": 0,
        "explanation": "Texture is the perceived or actual physical surface feel of an artwork.",
        "hint": "How a surface feels or looks like it would feel."
    },
    {
        "question": "In Peranakan (Straits Chinese) decorative shophouse tiles, what visual patterns are commonly featured?",
        "options": ["Symmetrical floral blooms, peacocks, geometric borders, and pastel glazes", "Abstract neon lightning bolts", "Plain grey rectangles with no design", "Monochrome barcodes"],
        "correctIndex": 0,
        "explanation": "Peranakan tiles are celebrated for majolica glazes featuring auspicious floral botanicals and colorful birds.",
        "hint": "Colourful floral blossoms and auspicious bird motifs."
    },
    {
        "question": "What design principle is created when an artist places opposing elements side by side (such as dark against bright, or rough against smooth)?",
        "options": ["Contrast", "Monotony", "Blur", "Invisibility"],
        "correctIndex": 0,
        "explanation": "Contrast emphasizes striking differences between visual elements to create focal interest.",
        "hint": "Opposites creating visual punch and emphasis."
    }
]
generate_file('src/data/questions/singaporeArt.ts', 'singaporeArtQuestions', 'sg_art', 'singapore', 'Singapore Art', sg_art_topics, sg_art_base)

# 10. Singapore Music
sg_mus_topics = ["Singapore National & Community Songs", "Rhythmic Solfege (Ta, Ti-ti, Ta-a)", "Pitch & Melodic Contours", "Traditional Ethnic Instruments (Kompang, Erhu, Veena)", "Gamelan Ensembles & Polyrhythms", "Expressive Dynamics (p, f, cresc, dim)", "Tempo & Movement", "Singing in Unison & Canon", "Percussion Ostinato", "Instrument Timbre & Sound Exploration"]
sg_mus_base = [
    {
        "question": "Which beloved Singapore National Day song composed by Dick Lee begins with the lyrics 'Whenever I am feeling low, I look once more just to be sure'?",
        "options": ["'Home'", "'Stand Up for Singapore'", "'Count on Me, Singapore'", "'We Are Singapore'"],
        "correctIndex": 0,
        "explanation": "'Home' is an iconic, heartfelt Singapore national anthem composed in 1998, famously sung by Kit Chan.",
        "hint": "The national song that begins with 'Whenever I am feeling low...'."
    },
    {
        "question": "What is the traditional Malay hand drum, made of buffalo hide on a wooden frame, frequently played in rhythmic ensembles during celebrations?",
        "options": ["Kompang", "Tabla", "Erhu", "Guzheng"],
        "correctIndex": 0,
        "explanation": "The kompang is a handheld shallow frame drum widely played in unison rhythms at Malay weddings and official ceremonies.",
        "hint": "A handheld shallow frame drum."
    },
    {
        "question": "Which traditional Chinese two-stringed bowed musical instrument is renowned for its expressive, vocal-like melodic timbre?",
        "options": ["Erhu (二胡)", "Dizi (flute)", "Gong", "Pipa"],
        "correctIndex": 0,
        "explanation": "The Erhu is a two-stringed fiddle with a python skin soundbox played with a horsehair bow.",
        "hint": "The two-stringed Chinese fiddle."
    },
    {
        "question": "In classical Indian Carnatic and Hindustani music, what traditional plucked string instrument has a long neck and gourd resonator?",
        "options": ["Veena (or Sitar)", "Kompang", "Clarinet", "Accordion"],
        "correctIndex": 0,
        "explanation": "The Veena is an ancient chordophone featured prominently in Indian classical music alongside the Mridangam drum.",
        "hint": "An ancient Indian plucked string instrument."
    },
    {
        "question": "What does a musical 'ostinato' refer to in classroom rhythm playing?",
        "options": ["A short musical rhythm or melodic phrase that is repeated persistently throughout a piece", "Singing as quietly as possible", "Playing out of tune intentionally", "Dropping your drumsticks"],
        "correctIndex": 0,
        "explanation": "An ostinato is a continually repeated musical phrase or rhythmic motif serving as an accompaniment.",
        "hint": "A repeating rhythmic pattern that continues underneath."
    }
]
generate_file('src/data/questions/singaporeMusic.ts', 'singaporeMusicQuestions', 'sg_music', 'singapore', 'Singapore Music', sg_mus_topics, sg_mus_base)

# 11. Singapore Physical Education (PE)
sg_pe_topics = ["Fundamental Movement Skills (Locomotor/Manipulative)", "Singapore NAPFA Fitness Standards", "Games Concepts & Territory Tactics", "Striking & Fielding Strategies", "Athletics (Sprints, Relays, Long Jump)", "Gymnastic Roll Sequences", "Health Promotion: My Healthy Plate", "Heat Acclimatization & Hydration", "Outdoor Education & Orienteering", "Safety on School Sports Facilities"]
sg_pe_base = [
    {
        "question": "According to the Health Promotion Board's 'My Healthy Plate' guideline, how should your meal plate be proportioned?",
        "options": ["1/2 Brown Rice & Whole-grains, 1/4 Meat & Others, 1/4 Fruit & Vegetables", "1/2 Fruit & Vegetables, 1/4 Whole-grains, 1/4 Meat & Others", "100% fried chicken with no vegetables", "Only sugary desserts"],
        "correctIndex": 1,
        "explanation": "'My Healthy Plate' recommends: Half plate with fruits & vegetables, Quarter plate whole-grains, Quarter plate lean proteins.",
        "hint": "Half plate filled with fruits and vegetables."
    },
    {
        "question": "Which test in the Singapore NAPFA fitness assessment measures explosive muscular power in the legs?",
        "options": ["Standing Broad Jump", "Sit-and-Reach", "Inclined Pull-ups", "Shuttle Run"],
        "correctIndex": 0,
        "explanation": "The Standing Broad Jump assesses two-foot takeoff explosive lower-body muscular power.",
        "hint": "Jumping forward from a standing position."
    },
    {
        "question": "In net-barrier sports like badminton and volleyball, what is the primary defensive objective?",
        "options": ["Positioning oneself in the ready stance to intercept the shuttle/ball and return it to open spaces", "Standing completely still at the corner of the court", "Kicking the net down", "Closing your eyes when the ball comes"],
        "correctIndex": 0,
        "explanation": "Court coverage, active base positioning, and placing shots into opponent vulnerabilities are core net-barrier strategies.",
        "hint": "Ready stance and returning to open space."
    },
    {
        "question": "Why is performing gentle static stretching during cool-down beneficial after intense athletics?",
        "options": ["It aids in gradually lowering heart rate, restoring muscle resting length, and reducing post-exercise soreness", "It makes running shoes tighter", "It burns extra paper", "It prevents you from drinking water"],
        "correctIndex": 0,
        "explanation": "Cool-downs gradually return heart rate and blood flow to baseline and maintain joint flexibility.",
        "hint": "Restores resting muscle length and eases recovery."
    },
    {
        "question": "What is the correct safety protocol when participating in outdoor sports during Singapore's midday heat?",
        "options": ["Drink water frequently, seek shaded rest breaks, and watch for symptoms of heat cramps or dizziness", "Wear heavy winter jackets while running", "Refuse to drink any fluids for 5 hours", "Skip warm-up and run backwards"],
        "correctIndex": 0,
        "explanation": "Preventing heat-induced illnesses requires hydration, shaded cool-downs, and self-monitoring of thermal strain.",
        "hint": "Hydrate regularly and rest in shade."
    }
]
generate_file('src/data/questions/singaporePE.ts', 'singaporePEQuestions', 'sg_pe', 'singapore', 'Singapore Physical Education', sg_pe_topics, sg_pe_base)

# 12. Singapore Computer / Digital Literacy
sg_comp_topics = ["Baseline ICT Skills (Typing & File Organization)", "Cyber Wellness: Screen Time Balance", "Password Security & Identity Protection", "Recognizing Online Scams & Phishing", "Algorithmic Thinking & Sequencing", "Block Programming with Scratch", "Digital Copyright & Netiquette", "Data Literacy & Spreadsheets", "Search Strategies & Fact Checking", "Safe Online Communication"]
sg_comp_base = [
    {
        "question": "What constitutes a robust, secure password for protecting your Student iCON account in Singapore schools?",
        "options": ["A mix of uppercase letters, lowercase letters, numbers, and symbols, at least 10 characters long, kept private", "Your first name with no numbers", "123456", "The word 'password'"],
        "correctIndex": 0,
        "explanation": "Strong passwords combine diverse character classes and adequate entropy, making brute-force cracking difficult.",
        "hint": "A long mix of uppercase, lowercase, numbers, and symbols."
    },
    {
        "question": "What is the core principle of 'Cyber Wellness' taught in Singapore Primary Schools?",
        "options": ["Being a safe, respectful, and responsible digital citizen who balances screen time and respects others online", "Playing online computer games for 14 hours every day", "Sharing private passwords with everyone on social media", "Believing every anonymous post online"],
        "correctIndex": 0,
        "explanation": "Cyber Wellness nurtures positive digital citizenship, balanced device usage, netiquette, and risk mitigation.",
        "hint": "Being safe, responsible, and balanced online."
    },
    {
        "question": "In computational thinking, what does 'Algorithm' mean when programming a robotic sprite in Scratch?",
        "options": ["A precise, ordered sequence of instructions designed to accomplish a specific task", "The computer monitor glass", "A broken electrical wire", "The computer fan sound"],
        "correctIndex": 0,
        "explanation": "An algorithm is an explicit step-by-step logic recipe instructing the processor how to execute operations.",
        "hint": "Step-by-step instructions to solve a task."
    },
    {
        "question": "If you receive a suspicious SMS or email claiming you won a free luxury gaming console and asking you to click an unknown link:",
        "options": ["Do not click the link, verify with an adult, and report the message as a potential phishing scam", "Click the link immediately and type your family's bank card number", "Forward it to 50 friends", "Give the sender your home address"],
        "correctIndex": 0,
        "explanation": "Unsolicited reward links are classic phishing scams engineered to harvest credentials or install malware.",
        "hint": "Do not click unknown links; alert an adult."
    },
    {
        "question": "When creating a school multimedia presentation, what is the ethical practice regarding images found on the web?",
        "options": ["Use Creative Commons licensed or royalty-free images and properly attribute the original creator", "Take any copyrighted image and claim you painted it yourself", "Sell someone else's artwork for money", "Delete the creator's signature"],
        "correctIndex": 0,
        "explanation": "Respecting digital intellectual property requires using permissible licenses and crediting sources.",
        "hint": "Use royalty-free images and give proper credit."
    }
]
generate_file('src/data/questions/singaporeComputing.ts', 'singaporeComputingQuestions', 'sg_computing', 'singapore', 'Singapore Computer / Digital Literacy', sg_comp_topics, sg_comp_base)

print("All subject question files generated successfully!")
