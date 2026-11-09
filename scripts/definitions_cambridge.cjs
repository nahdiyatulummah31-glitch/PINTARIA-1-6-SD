// Definitions for 54 Cambridge Primary New Materials (9 subjects x 6 stages)
const CAMBRIDGE_MODULES = [
  // 1. Cambridge English (cam_english)
  {
    subject: 'cam_english',
    grade: 1,
    phase: 'Stage 1',
    syllabusStrand: 'Grammar & Punctuation',
    topic: 'Punctuation & Simple Connectives (and, but, because)',
    description: 'Using capital letters for names and I, ending sentences with full stops, question marks, and joining clauses with and, but, because.',
    language: 'en',
    domain: 'cam_eng_punctuation_connectives'
  },
  {
    subject: 'cam_english',
    grade: 2,
    phase: 'Stage 2',
    syllabusStrand: 'Vocabulary & Style',
    topic: 'Descriptive Adjectives, Expanded Noun Phrases & Word Choice',
    description: 'Creating vibrant settings and character descriptions using precise sensory adjectives and expanded noun phrases.',
    language: 'en',
    domain: 'cam_eng_adjectives_nounphrases'
  },
  {
    subject: 'cam_english',
    grade: 3,
    phase: 'Stage 3',
    syllabusStrand: 'Narrative Writing',
    topic: 'Past Simple Tense Regular & Irregular Verbs in Storytelling',
    description: 'Mastering consistent past simple tense in narratives, converting irregular verbs (went, saw, caught, bought) accurately.',
    language: 'en',
    domain: 'cam_eng_past_tense_verbs'
  },
  {
    subject: 'cam_english',
    grade: 4,
    phase: 'Stage 4',
    syllabusStrand: 'Morphology & Spelling',
    topic: 'Prefixes, Suffixes and Root Words (Morphology & Vocabulary)',
    description: 'Exploring un-, dis-, mis-, re-, pre- prefixes and -ful, -less, -tion, -ly suffixes to deduce meanings of unfamiliar words.',
    language: 'en',
    domain: 'cam_eng_prefixes_suffixes'
  },
  {
    subject: 'cam_english',
    grade: 5,
    phase: 'Stage 5',
    syllabusStrand: 'Dialogue & Punctuation',
    topic: 'Direct and Indirect Speech Punctuation in Narrative Dialogue',
    description: 'Using inverted commas, commas before speech, capital letters, and reporting clauses (whispered, exclaimed, insisted).',
    language: 'en',
    domain: 'cam_eng_speech_punctuation'
  },
  {
    subject: 'cam_english',
    grade: 6,
    phase: 'Stage 6',
    syllabusStrand: 'Non-Fiction & Persuasion',
    topic: 'Formal Letters, Persuasive Arguments & Rhetorical Devices',
    description: 'Structuring formal correspondence, persuasive essays, using rhetorical questions, emotive language, and counter-arguments.',
    language: 'en',
    domain: 'cam_eng_persuasive_formal'
  },

  // 2. Cambridge Math (cam_math)
  {
    subject: 'cam_math',
    grade: 1,
    phase: 'Stage 1',
    syllabusStrand: 'Geometry & Spatial Thinking',
    topic: '2D and 3D Shape Properties and Spatial Vocabulary',
    description: 'Identifying sides and vertices of circles, triangles, rectangles, squares, and faces, edges of cubes, spheres, cylinders.',
    language: 'en',
    domain: 'cam_math_shapes_spatial'
  },
  {
    subject: 'cam_math',
    grade: 2,
    phase: 'Stage 2',
    syllabusStrand: 'Fractions',
    topic: 'Fraction Foundations: Halves, Quarters and Equal Parts',
    description: 'Finding one half (1/2) and one quarter (1/4) of shapes and small discrete sets of objects, understanding equal shares.',
    language: 'en',
    domain: 'cam_math_fractions_basic'
  },
  {
    subject: 'cam_math',
    grade: 3,
    phase: 'Stage 3',
    syllabusStrand: 'Measurement & Time',
    topic: 'Telling the Time to Five Minutes (Analogue & Digital Clocks)',
    description: 'Reading clock faces to five-minute intervals past and to the hour, calculating elapsed duration in hours and minutes.',
    language: 'en',
    domain: 'cam_math_time_clocks'
  },
  {
    subject: 'cam_math',
    grade: 4,
    phase: 'Stage 4',
    syllabusStrand: 'Measurement & Geometry',
    topic: 'Perimeter and Area of Rectangles and Composite Shapes',
    description: 'Calculating boundary perimeter (P = 2l + 2w) and counting square units / multiplying dimensions for rectangular area.',
    language: 'en',
    domain: 'cam_math_perimeter_area'
  },
  {
    subject: 'cam_math',
    grade: 5,
    phase: 'Stage 5',
    syllabusStrand: 'Fractions & Decimals',
    topic: 'Decimals, Tenths, Hundredths and Rounding to Whole Numbers',
    description: 'Converting tenths and hundredths to decimals (e.g. 3/10 = 0.3), ordering decimals, and rounding to nearest whole unit.',
    language: 'en',
    domain: 'cam_math_decimals_fractions'
  },
  {
    subject: 'cam_math',
    grade: 6,
    phase: 'Stage 6',
    syllabusStrand: 'Proportional Reasoning',
    topic: 'Percentages, Ratio Proportions and Real-World Rate Problems',
    description: 'Finding percentages of quantities (10%, 25%, 50%), simplifying ratios (3:6 = 1:2), and solving unit rate word problems.',
    language: 'en',
    domain: 'cam_math_percentages_ratios'
  },

  // 3. Cambridge Science (cam_science)
  {
    subject: 'cam_science',
    grade: 1,
    phase: 'Stage 1',
    syllabusStrand: 'Chemistry & Materials',
    topic: 'Grouping Common Materials by Properties (Wood, Plastic, Metal, Glass)',
    description: 'Distinguishing object from material, describing properties: hard, soft, rough, smooth, transparent, waterproof.',
    language: 'en',
    domain: 'cam_sci_materials_properties'
  },
  {
    subject: 'cam_science',
    grade: 2,
    phase: 'Stage 2',
    syllabusStrand: 'Physics & Light',
    topic: 'Light Sources, Shadows and Darkness',
    description: 'Identifying natural and artificial light sources, the Sun as a primary source, how shadows form when light is blocked.',
    language: 'en',
    domain: 'cam_sci_light_shadows'
  },
  {
    subject: 'cam_science',
    grade: 3,
    phase: 'Stage 3',
    syllabusStrand: 'Biology & Plants',
    topic: 'Plant Organs, Photosynthesis Roots and Flower Reproduction',
    description: 'Functions of roots (absorption, anchorage), stems (transport), leaves (light capture), flowers (pollination, seeds).',
    language: 'en',
    domain: 'cam_sci_plant_biology'
  },
  {
    subject: 'cam_science',
    grade: 4,
    phase: 'Stage 4',
    syllabusStrand: 'Physics & Electricity',
    topic: 'Electrical Circuits, Cells, Switches and Conductors',
    description: 'Constructing complete circuits with cells, bulbs, buzzers, switches; testing electrical conductors and insulators.',
    language: 'en',
    domain: 'cam_sci_electricity_circuits'
  },
  {
    subject: 'cam_science',
    grade: 5,
    phase: 'Stage 5',
    syllabusStrand: 'Chemistry & Matter',
    topic: 'States of Matter: Evaporation, Condensation and The Water Cycle',
    description: 'Particle model of solids, liquids, gases; changes of state (melting, boiling, freezing, evaporating, condensing); water cycle.',
    language: 'en',
    domain: 'cam_sci_states_water_cycle'
  },
  {
    subject: 'cam_science',
    grade: 6,
    phase: 'Stage 6',
    syllabusStrand: 'Human Biology',
    topic: 'The Human Circulatory System, Heart Rate and Healthy Living',
    description: 'Structure and function of heart, blood vessels (arteries, veins, capillaries), oxygen transport, effects of exercise on pulse.',
    language: 'en',
    domain: 'cam_sci_circulatory_system'
  },

  // 4. Global Perspectives (cam_global_perspectives)
  {
    subject: 'cam_global_perspectives',
    grade: 1,
    phase: 'Stage 1',
    syllabusStrand: 'Culture & Community',
    topic: 'Family Traditions and Celebrations Around the World',
    description: 'Comparing how families celebrate special days, sharing stories of culture, and respecting diverse backgrounds.',
    language: 'en',
    domain: 'cam_gp_traditions_families'
  },
  {
    subject: 'cam_global_perspectives',
    grade: 2,
    phase: 'Stage 2',
    syllabusStrand: 'Environment & Waste',
    topic: 'Caring for Local Environments and Reducing Plastic Waste',
    description: 'Investigating single-use plastics, litter in school grounds, recycling bins, and taking responsibility for local habitats.',
    language: 'en',
    domain: 'cam_gp_plastic_waste'
  },
  {
    subject: 'cam_global_perspectives',
    grade: 3,
    phase: 'Stage 3',
    syllabusStrand: 'Global Resources',
    topic: 'Water Conservation and Access to Clean Water Globally',
    description: 'Learning why freshwater is scarce, daily household water footprints, and solutions to ensure safe water for all communities.',
    language: 'en',
    domain: 'cam_gp_water_conservation'
  },
  {
    subject: 'cam_global_perspectives',
    grade: 4,
    phase: 'Stage 4',
    syllabusStrand: 'Community Perspectives',
    topic: 'Understanding Different Perspectives in Local Community Issues',
    description: 'Analyzing community challenges (traffic, park usage, animal shelters) through eyes of children, business owners, and elders.',
    language: 'en',
    domain: 'cam_gp_community_perspectives'
  },
  {
    subject: 'cam_global_perspectives',
    grade: 5,
    phase: 'Stage 5',
    syllabusStrand: 'Energy & Climate',
    topic: 'Renewable Energy Sources (Solar, Wind, Hydro) and Climate Action',
    description: 'Examining fossil fuels versus clean renewables, carbon footprints, energy efficiency, and international climate goals.',
    language: 'en',
    domain: 'cam_gp_renewable_energy'
  },
  {
    subject: 'cam_global_perspectives',
    grade: 6,
    phase: 'Stage 6',
    syllabusStrand: 'Research & Critical Thinking',
    topic: 'Evaluating Information Sources: Fact, Opinion and Balanced Arguments',
    description: 'Identifying bias, author credibility, cross-referencing claims online, formulating balanced evidence-based viewpoints.',
    language: 'en',
    domain: 'cam_gp_evaluating_sources'
  },

  // 5. Cambridge Computing (cam_computing)
  {
    subject: 'cam_computing',
    grade: 1,
    phase: 'Stage 1',
    syllabusStrand: 'Algorithms',
    topic: 'Giving Clear Step-by-Step Instructions to Robotic Toys',
    description: 'Programming floor robots (forward, backward, quarter turn), predicting routes, ordering picture sequence instructions.',
    language: 'en',
    domain: 'cam_comp_robot_instructions'
  },
  {
    subject: 'cam_computing',
    grade: 2,
    phase: 'Stage 2',
    syllabusStrand: 'Digital Literacy',
    topic: 'Organising Digital Files, Folders and Mouse Keyboard Skills',
    description: 'Creating folders, naming files sensibly, keyboard shortcut basics, using word processors to type stories.',
    language: 'en',
    domain: 'cam_comp_digital_files'
  },
  {
    subject: 'cam_computing',
    grade: 3,
    phase: 'Stage 3',
    syllabusStrand: 'Programming',
    topic: 'Sequencing and Loops (Repeat Blocks) in Visual Programming',
    description: 'Writing Scratch scripts using repeat 4 or repeat 10 loops to draw geometric shapes and animate dancing characters.',
    language: 'en',
    domain: 'cam_comp_loops_visual'
  },
  {
    subject: 'cam_computing',
    grade: 4,
    phase: 'Stage 4',
    syllabusStrand: 'Data Handling',
    topic: 'Collecting and Presenting Data Using Digital Spreadsheets',
    description: 'Entering data into columns and rows, formatting cells, generating bar charts, and writing simple sum formulas.',
    language: 'en',
    domain: 'cam_comp_spreadsheets_data'
  },
  {
    subject: 'cam_computing',
    grade: 5,
    phase: 'Stage 5',
    syllabusStrand: 'Algorithms & Logic',
    topic: 'Conditional Selection (If-Then-Else) in Interactive Games',
    description: 'Applying if touching color then, score point, else lose life in game programming; designing flowchart branches.',
    language: 'en',
    domain: 'cam_comp_conditionals_games'
  },
  {
    subject: 'cam_computing',
    grade: 6,
    phase: 'Stage 6',
    syllabusStrand: 'Cyber Safety & Networks',
    topic: 'Online Privacy, Safe Searching and Digital Footprint Awareness',
    description: 'Understanding IP addresses, web browsers vs search engines, privacy settings, phishing emails, permanent digital footprints.',
    language: 'en',
    domain: 'cam_comp_cyber_footprint'
  },

  // 6. Art & Design (cam_art)
  {
    subject: 'cam_art',
    grade: 1,
    phase: 'Stage 1',
    syllabusStrand: 'Colour & Painting',
    topic: 'Primary and Secondary Colours in Painting and Colour Mixing',
    description: 'Mixing red and yellow for orange, yellow and blue for green, red and blue for purple; expressive brush strokes.',
    language: 'en',
    domain: 'cam_art_color_mixing'
  },
  {
    subject: 'cam_art',
    grade: 2,
    phase: 'Stage 2',
    syllabusStrand: 'Printmaking & Pattern',
    topic: 'Patterns in Nature and Creating Symmetrical Leaf Prints',
    description: 'Observing natural patterns (veins, shells, bark), relief printing with stamps, creating alternating geometric borders.',
    language: 'en',
    domain: 'cam_art_nature_patterns'
  },
  {
    subject: 'cam_art',
    grade: 3,
    phase: 'Stage 3',
    syllabusStrand: 'Drawing & Portraiture',
    topic: 'Drawing Facial Proportions and Self-Portraits with Shading',
    description: 'Eye line halfway down the head, nose placement, cross-hatching and blending graphite pencils to create realistic skin tones.',
    language: 'en',
    domain: 'cam_art_portrait_proportions'
  },
  {
    subject: 'cam_art',
    grade: 4,
    phase: 'Stage 4',
    syllabusStrand: 'Sculpture & 3D Media',
    topic: 'Traditional Clay Pottery and Pinch Pot Techniques',
    description: 'Coiling, pinching, scoring and slipping clay joints to construct sturdy vessels; firing and glazing principles.',
    language: 'en',
    domain: 'cam_art_clay_pottery'
  },
  {
    subject: 'cam_art',
    grade: 5,
    phase: 'Stage 5',
    syllabusStrand: 'Spatial Art & Perspective',
    topic: 'Perspective Drawing: One-Point Horizon and Vanishing Lines',
    description: 'Drawing street scenes or railway tracks using horizon line and vanishing point, making objects smaller in the distance.',
    language: 'en',
    domain: 'cam_art_perspective_vanishing'
  },
  {
    subject: 'cam_art',
    grade: 6,
    phase: 'Stage 6',
    syllabusStrand: 'Graphic Design & Communication',
    topic: 'Contemporary Graphic Design, Typography and Poster Composition',
    description: 'Font styles (serif, sans-serif), visual hierarchy, contrasting colors, layout balance to convey strong messages.',
    language: 'en',
    domain: 'cam_art_graphic_typography'
  },

  // 7. Cambridge Music (cam_music)
  {
    subject: 'cam_music',
    grade: 1,
    phase: 'Stage 1',
    syllabusStrand: 'Pitch & Singing',
    topic: 'Exploring High and Low Pitch with Voices and Tuned Percussion',
    description: 'Contrasting squeaky mouse vs roaring lion pitch, glockenspiel bars, ascending and descending pitch contours.',
    language: 'en',
    domain: 'cam_mus_high_low_pitch'
  },
  {
    subject: 'cam_music',
    grade: 2,
    phase: 'Stage 2',
    syllabusStrand: 'Beat & Rhythm',
    topic: 'Steady Beat vs Rhythmic Patterns Using Untuned Instruments',
    description: 'Clapping heartbeats (pulse) while saying nursery rhymes, tapping tambourines and woodblocks on the off-beat.',
    language: 'en',
    domain: 'cam_mus_beat_rhythm'
  },
  {
    subject: 'cam_music',
    grade: 3,
    phase: 'Stage 3',
    syllabusStrand: 'Dynamics & Expression',
    topic: 'Recognising Musical Dynamics (Forte, Piano, Crescendo)',
    description: 'Italian musical terms: p (piano - soft), f (forte - loud), mp, mf, crescendo (gradually louder), decrescendo.',
    language: 'en',
    domain: 'cam_mus_dynamics_italian'
  },
  {
    subject: 'cam_music',
    grade: 4,
    phase: 'Stage 4',
    syllabusStrand: 'Instrument Families',
    topic: 'Instrument Families of the Orchestra (Strings, Woodwind, Brass, Percussion)',
    description: 'Violin, flute, trumpet, timpani; how sound is produced (vibrating strings, air columns, buzzing lips, striking).',
    language: 'en',
    domain: 'cam_mus_orchestra_families'
  },
  {
    subject: 'cam_music',
    grade: 5,
    phase: 'Stage 5',
    syllabusStrand: 'Music Notation',
    topic: 'Reading Basic Musical Notation on a Treble Clef Stave',
    description: 'Five lines and four spaces of stave, note names (Every Good Boy Deserves Football; FACE), semibreve, minim, crotchet.',
    language: 'en',
    domain: 'cam_mus_treble_clef_notes'
  },
  {
    subject: 'cam_music',
    grade: 6,
    phase: 'Stage 6',
    syllabusStrand: 'Composition & Scales',
    topic: 'Composing Short Melodies Using Pentatonic Scales and Ostinato',
    description: '5-note pentatonic scale (C, D, E, G, A), creating repeating rhythmic patterns (ostinato), question-and-answer phrases.',
    language: 'en',
    domain: 'cam_mus_pentatonic_composition'
  },

  // 8. Physical Education (cam_pe)
  {
    subject: 'cam_pe',
    grade: 1,
    phase: 'Stage 1',
    syllabusStrand: 'Locomotor & Spatial',
    topic: 'Spatial Awareness, Travelling in Different Directions and Speeds',
    description: 'Dodging, changing pace, travelling forwards, backwards, sideways safely in open gym space without collisions.',
    language: 'en',
    domain: 'cam_pe_spatial_awareness'
  },
  {
    subject: 'cam_pe',
    grade: 2,
    phase: 'Stage 2',
    syllabusStrand: 'Gymnastic Balance',
    topic: 'Static and Dynamic Balance on Low Gymnastic Equipment',
    description: 'Holding balances on 1, 2, or 3 points of contact for 5 seconds; walking along balance beams with steady core control.',
    language: 'en',
    domain: 'cam_pe_gymnastic_balance'
  },
  {
    subject: 'cam_pe',
    grade: 3,
    phase: 'Stage 3',
    syllabusStrand: 'Throwing & Catching',
    topic: 'Underarm and Overarm Throwing Techniques for Distance and Target',
    description: 'Stepping forward with opposite foot, releasing at eye level, following through, catching with two-hand cup.',
    language: 'en',
    domain: 'cam_pe_throwing_catching'
  },
  {
    subject: 'cam_pe',
    grade: 4,
    phase: 'Stage 4',
    syllabusStrand: 'Invasion Games',
    topic: 'Defending and Attacking Principles in Mini Team Invasion Games',
    description: 'Marking an opponent, creating passing lanes, moving into empty space, communicating with teammates in football/tag rugby.',
    language: 'en',
    domain: 'cam_pe_invasion_tactics'
  },
  {
    subject: 'cam_pe',
    grade: 5,
    phase: 'Stage 5',
    syllabusStrand: 'Athletics & Track',
    topic: 'Athletic Sprinting Starts, Pacing and Relay Baton Passing',
    description: 'On your marks, set, go stance, pumping arms, pacing in 400m vs 60m sprint, blind and visual baton exchange in relay box.',
    language: 'en',
    domain: 'cam_pe_athletics_relays'
  },
  {
    subject: 'cam_pe',
    grade: 6,
    phase: 'Stage 6',
    syllabusStrand: 'Health & Fair Play',
    topic: 'Fair Play, Team Strategies and Monitoring Heart Rate During Exercise',
    description: 'Respecting referee decisions, warm-up and cool-down routines, target heart rate zones (aerobic vs anaerobic).',
    language: 'en',
    domain: 'cam_pe_health_fairplay'
  },

  // 9. Foreign Language (cam_foreign_lang)
  {
    subject: 'cam_foreign_lang',
    grade: 1,
    phase: 'Stage 1',
    syllabusStrand: 'Greetings & Basics',
    topic: 'Saying Hello, Goodbye and Introducing Oneself in Global Languages',
    description: 'Bonjour, Hola, Ni Hao; asking how are you, replying I am well, stating one’s name politely in French/Spanish/Mandarin.',
    language: 'en',
    domain: 'cam_fl_greetings_intro'
  },
  {
    subject: 'cam_foreign_lang',
    grade: 2,
    phase: 'Stage 2',
    syllabusStrand: 'Classroom Vocabulary',
    topic: 'Naming Classroom Objects and Asking for Permission Politely',
    description: 'Book, pen, ruler, table, chair, door; polite expressions: s\'il vous plait, por favor, qing, thank you.',
    language: 'en',
    domain: 'cam_fl_classroom_polite'
  },
  {
    subject: 'cam_foreign_lang',
    grade: 3,
    phase: 'Stage 3',
    syllabusStrand: 'Calendar & Dates',
    topic: 'Days of the Week, Months and Stating One’s Birthday',
    description: 'Lundi, Mardi / Lunes, Martes / Xingqi; twelve months, counting ordinal numbers up to 31 for calendar dates.',
    language: 'en',
    domain: 'cam_fl_days_months_birthday'
  },
  {
    subject: 'cam_foreign_lang',
    grade: 4,
    phase: 'Stage 4',
    syllabusStrand: 'Food & Dining',
    topic: 'Ordering Food and Drinks at a Market or Cafe',
    description: 'Bread, apple, milk, water, orange, rice, asking how much it costs, ordering with please and thank you.',
    language: 'en',
    domain: 'cam_fl_food_market_ordering'
  },
  {
    subject: 'cam_foreign_lang',
    grade: 5,
    phase: 'Stage 5',
    syllabusStrand: 'Descriptions & Animals',
    topic: 'Describing Animals, Colours and Physical Appearance',
    description: 'Big, small, fast, tall; cat, dog, bird, horse; gender and adjective agreement (grand/grande; rojo/roja).',
    language: 'en',
    domain: 'cam_fl_animals_appearance'
  },
  {
    subject: 'cam_foreign_lang',
    grade: 6,
    phase: 'Stage 6',
    syllabusStrand: 'Daily Life & Routines',
    topic: 'Talking About Daily Routines and Leisure Activities',
    description: 'I get up, I eat breakfast, I play football, I read books, telling simple daily schedule times in foreign tongue.',
    language: 'en',
    domain: 'cam_fl_daily_routines_leisure'
  }
];

module.exports = { CAMBRIDGE_MODULES };
