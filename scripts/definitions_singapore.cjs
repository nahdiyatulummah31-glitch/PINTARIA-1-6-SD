// Definitions for 60 Singapore Primary New Materials (10 subjects x 6 grades)
const SINGAPORE_MODULES = [
  // 1. Singapore English (sg_english)
  {
    subject: 'sg_english',
    grade: 1,
    phase: 'Primary 1',
    syllabusStrand: 'Grammar & Syntax',
    topic: 'Punctuation Marks, Capital Letters and Simple Noun-Verb Agreement',
    description: 'Using full stops, question marks, exclamation marks, singular subject + verb with -s (He runs vs They run).',
    language: 'en',
    domain: 'sg_eng_punctuation_agreement'
  },
  {
    subject: 'sg_english',
    grade: 2,
    phase: 'Primary 2',
    syllabusStrand: 'Adverbs & Connectors',
    topic: 'Adverbs of Manner and Sequencing Connectors (First, Next, Then, Finally)',
    description: 'Adverbs ending in -ly (patiently, quietly, gracefully) and transition words for chronological narratives.',
    language: 'en',
    domain: 'sg_eng_adverbs_sequencing'
  },
  {
    subject: 'sg_english',
    grade: 3,
    phase: 'Primary 3',
    syllabusStrand: 'Grammar Mastery',
    topic: 'Subject-Verb Agreement with Collective Nouns and Indefinite Pronouns',
    description: 'Rules for team, class, family (treated as singular/plural), everyone, someone, neither/either agreement.',
    language: 'en',
    domain: 'sg_eng_collective_indefinite'
  },
  {
    subject: 'sg_english',
    grade: 4,
    phase: 'Primary 4',
    syllabusStrand: 'Modal Verbs',
    topic: 'Modal Auxiliaries (Can, Must, Should, May) for Advice and Obligation',
    description: 'Expressing certainty, permission, prohibition (must not), advice (should), and polite requests (may/might).',
    language: 'en',
    domain: 'sg_eng_modal_auxiliaries'
  },
  {
    subject: 'sg_english',
    grade: 5,
    phase: 'Primary 5',
    syllabusStrand: 'Reported Speech',
    topic: 'Direct and Indirect Speech Conversion and Reporting Verbs',
    description: 'Converting quotes to indirect speech, backshifting tenses, changing pronouns, time/place references (today -> that day).',
    language: 'en',
    domain: 'sg_eng_reported_speech'
  },
  {
    subject: 'sg_english',
    grade: 6,
    phase: 'Primary 6',
    syllabusStrand: 'Situational Writing',
    topic: 'Situational Writing: Formal Email/Letter Structure and Purpose Audience Tone',
    description: 'PAC (Purpose, Audience, Context), greeting, formal sign-off, maintaining polite respectful tone in complaints or proposals.',
    language: 'en',
    domain: 'sg_eng_situational_writing'
  },

  // 2. Singapore Math (sg_math - CPA Bar Model)
  {
    subject: 'sg_math',
    grade: 1,
    phase: 'Primary 1',
    syllabusStrand: 'Numbers & Position',
    topic: 'Ordinal Numbers (1st to 10th) and Position (Before, After, Between)',
    description: 'First to tenth words and symbols, left-to-right queuing positions, comparative rankings in sports races.',
    language: 'en',
    domain: 'sg_math_ordinal_positions'
  },
  {
    subject: 'sg_math',
    grade: 2,
    phase: 'Primary 2',
    syllabusStrand: 'Multiplication & Division',
    topic: 'Multiplication and Division by 2, 3, 4, 5 and 10 Word Problems',
    description: 'Equal groups, arrays, sharing equally, bar models showing total units and unit value.',
    language: 'en',
    domain: 'sg_math_multiplication_division'
  },
  {
    subject: 'sg_math',
    grade: 3,
    phase: 'Primary 3',
    syllabusStrand: 'Fractions & Bar Model',
    topic: 'Fractions of a Set and Equivalent Fractions Using Bar Models',
    description: 'Finding 2/3 of 18, generating equivalent fractions by multiplying/dividing numerator and denominator by same factor.',
    language: 'en',
    domain: 'sg_math_fractions_bar_model'
  },
  {
    subject: 'sg_math',
    grade: 4,
    phase: 'Primary 4',
    syllabusStrand: 'Decimals & Money',
    topic: 'Decimals (Tenths, Hundredths) and Conversion with Fractions',
    description: 'Place value of tenths (0.1) and hundredths (0.01), converting 7/100 to 0.07, adding and subtracting money decimals.',
    language: 'en',
    domain: 'sg_math_decimals_fractions'
  },
  {
    subject: 'sg_math',
    grade: 5,
    phase: 'Primary 5',
    syllabusStrand: 'Geometry & Volume',
    topic: 'Volume of Cubes and Cuboids and Liquid Capacity in Millilitres',
    description: 'V = length x breadth x height; 1 cubic cm = 1 ml, 1000 ml = 1 litre, water level height changes in tanks.',
    language: 'en',
    domain: 'sg_math_volume_capacity'
  },
  {
    subject: 'sg_math',
    grade: 6,
    phase: 'Primary 6',
    syllabusStrand: 'Speed & Rates',
    topic: 'Speed, Distance, Time Word Problems and Average Speed Calculations',
    description: 'Formula triangle: Distance = Speed x Time; converting minutes to hours, finding average speed (Total Distance / Total Time).',
    language: 'en',
    domain: 'sg_math_speed_distance_time'
  },

  // 3. Singapore Science (sg_science)
  {
    subject: 'sg_science',
    grade: 1,
    phase: 'Primary 1',
    syllabusStrand: 'Diversity & Living Things',
    topic: 'Exploring Our Senses and Observing Living and Non-Living Things',
    description: 'Five senses (sight, hearing, touch, taste, smell); characteristics of living things: need food, water, air, grow, reproduce.',
    language: 'en',
    domain: 'sg_sci_living_nonliving'
  },
  {
    subject: 'sg_science',
    grade: 2,
    phase: 'Primary 2',
    syllabusStrand: 'Plant Diversity',
    topic: 'Plants and Their Parts: Roots, Stems, Leaves and Flowers',
    description: 'Classifying flowering vs non-flowering plants, leaf venation, woody vs non-woody stems, seed dispersal.',
    language: 'en',
    domain: 'sg_sci_plants_parts'
  },
  {
    subject: 'sg_science',
    grade: 3,
    phase: 'Primary 3',
    syllabusStrand: 'Microorganisms & Fungi',
    topic: 'Fungi and Bacteria: Microscopic Organisms, Decomposers and Spores',
    description: 'Mushrooms, yeast, mold; how fungi reproduce by spores, decomposition of organic matter, beneficial and harmful bacteria.',
    language: 'en',
    domain: 'sg_sci_fungi_bacteria'
  },
  {
    subject: 'sg_science',
    grade: 4,
    phase: 'Primary 4',
    syllabusStrand: 'Matter & Properties',
    topic: 'Matter: Mass, Volume and States of Solids, Liquids and Gases',
    description: 'Definition of matter (has mass, occupies space); definite shape vs volume; measuring volume with measuring cylinders.',
    language: 'en',
    domain: 'sg_sci_matter_properties'
  },
  {
    subject: 'sg_science',
    grade: 5,
    phase: 'Primary 5',
    syllabusStrand: 'Systems (Transport)',
    topic: 'Plant and Human Transport Systems: Xylem, Phloem and Blood Vessels',
    description: 'Xylem transports water/mineral salts up; phloem transports food down; heart, blood, arteries, veins in humans.',
    language: 'en',
    domain: 'sg_sci_transport_systems'
  },
  {
    subject: 'sg_science',
    grade: 6,
    phase: 'Primary 6',
    syllabusStrand: 'Forces & Energy',
    topic: 'Forces: Friction, Gravitational Force, Elastic Spring Force and Energy Conversion',
    description: 'Effects of forces (change speed, direction, shape); friction advantages/disadvantages; kinetic to potential energy conversions.',
    language: 'en',
    domain: 'sg_sci_forces_energy'
  },

  // 4. Mother Tongue (sg_mother_tongue)
  {
    subject: 'sg_mother_tongue',
    grade: 1,
    phase: 'Primary 1',
    syllabusStrand: 'Cultural Etiquette',
    topic: 'Basic Greetings, Self-Introduction and Family Kinship Terms',
    description: 'Addressing elders respectfully, kinship terms (older brother, aunt, grandparents), polite mealtime customs.',
    language: 'en',
    domain: 'sg_mt_family_kinship'
  },
  {
    subject: 'sg_mother_tongue',
    grade: 2,
    phase: 'Primary 2',
    syllabusStrand: 'School & Civility',
    topic: 'Classroom Etiquette, Politeness and Daily School Objects',
    description: 'Bowing/greeting teachers, asking for stationery, taking turns in conversation, neat handwriting habits.',
    language: 'en',
    domain: 'sg_mt_classroom_polite'
  },
  {
    subject: 'sg_mother_tongue',
    grade: 3,
    phase: 'Primary 3',
    syllabusStrand: 'Heritage & Festivals',
    topic: 'Traditional Festivals (Chinese New Year, Hari Raya, Deepavali) and Values',
    description: 'Significance of red packets, ketupat, oil lamps; reunion dinners, forgiveness, victory of light over darkness.',
    language: 'en',
    domain: 'sg_mt_festivals_values'
  },
  {
    subject: 'sg_mother_tongue',
    grade: 4,
    phase: 'Primary 4',
    syllabusStrand: 'Folklore & Morals',
    topic: 'Moral Folktales, Idiomatic Expressions and Story Retelling',
    description: 'Classic fables of filial piety, modesty, perseverance; matching proverbs/idioms to life situations.',
    language: 'en',
    domain: 'sg_mt_folktales_idioms'
  },
  {
    subject: 'sg_mother_tongue',
    grade: 5,
    phase: 'Primary 5',
    syllabusStrand: 'Expressive Composition',
    topic: 'Descriptive Narrative Writing: Setting the Scene and Expressing Feelings',
    description: 'Sensory descriptions (sight, sound, emotions), building climax, reflecting on lessons learnt.',
    language: 'en',
    domain: 'sg_mt_narrative_feelings'
  },
  {
    subject: 'sg_mother_tongue',
    grade: 6,
    phase: 'Primary 6',
    syllabusStrand: 'Comprehension Analysis',
    topic: 'Comprehension Open-Ended Answering Techniques and Logical Inferences',
    description: 'Locating direct textual evidence, paraphrasing questions, deducing motives and character traits from dialog.',
    language: 'en',
    domain: 'sg_mt_comprehension_inference'
  },

  // 5. Social Studies (sg_social_studies)
  {
    subject: 'sg_social_studies',
    grade: 1,
    phase: 'Primary 1',
    syllabusStrand: 'Family & Home',
    topic: 'My Family, My Home and Responsibilities in the Household',
    description: 'Roles of family members, doing household chores, saving electricity and water at home.',
    language: 'en',
    domain: 'sg_ss_family_roles'
  },
  {
    subject: 'sg_social_studies',
    grade: 2,
    phase: 'Primary 2',
    syllabusStrand: 'Neighborhood Amenities',
    topic: 'Our Neighborhood Amenities: Parks, Libraries, Markets and MRT',
    description: 'Public facilities in housing estates (HDB), hawker centres, community clubs, respectful shared usage.',
    language: 'en',
    domain: 'sg_ss_neighborhood_facilities'
  },
  {
    subject: 'sg_social_studies',
    grade: 3,
    phase: 'Primary 3',
    syllabusStrand: 'Geography of Singapore',
    topic: 'Physical Features of Singapore: Reservoirs, Coastlines and Green Spaces',
    description: 'MacRitchie, Bukit Timah Hill, Singapore River, offshore islands (Pulau Ubin, Sentosa), land reclamation.',
    language: 'en',
    domain: 'sg_ss_geography_greenery'
  },
  {
    subject: 'sg_social_studies',
    grade: 4,
    phase: 'Primary 4',
    syllabusStrand: 'Early History',
    topic: 'Early Singapore Pioneers and Immigrant Communities (Sang Nila Utama to 1819)',
    description: 'Temasek, Kingdom of Singapura, Sir Stamford Raffles, early Chinese, Malay, Indian, and Eurasian immigrants.',
    language: 'en',
    domain: 'sg_ss_early_pioneers'
  },
  {
    subject: 'sg_social_studies',
    grade: 5,
    phase: 'Primary 5',
    syllabusStrand: 'Global Trade & Heritage',
    topic: 'Singapore as a Global Port City: Trade, Port History and Connections',
    description: 'Free trade port status, entrepot trade (spices, tin, rubber), Port of Singapore Authority, maritime connections.',
    language: 'en',
    domain: 'sg_ss_port_trade_history'
  },
  {
    subject: 'sg_social_studies',
    grade: 6,
    phase: 'Primary 6',
    syllabusStrand: 'Nation Building',
    topic: 'National Identity, Total Defence and Harmony in a Multicultural Society',
    description: 'Six pillars of Total Defence, National Pledge and Anthem, racial harmony day, overcoming resource constraints.',
    language: 'en',
    domain: 'sg_ss_total_defence_identity'
  },

  // 6. Character & Citizenship Education (sg_cce)
  {
    subject: 'sg_cce',
    grade: 1,
    phase: 'Primary 1',
    syllabusStrand: 'Core Values: Responsibility',
    topic: 'Responsibility: Packing One’s School Bag and Being Punctual',
    description: 'Self-discipline, waking up on time, packing according to timetable, keeping school environment clean.',
    language: 'en',
    domain: 'sg_cce_responsibility_habits'
  },
  {
    subject: 'sg_cce',
    grade: 2,
    phase: 'Primary 2',
    syllabusStrand: 'Core Values: Respect',
    topic: 'Respect: Listening Attentively and Valuing Friends’ Differences',
    description: 'Listening without interrupting, speaking kindly, appreciating diverse strengths and background of peers.',
    language: 'en',
    domain: 'sg_cce_respect_listening'
  },
  {
    subject: 'sg_cce',
    grade: 3,
    phase: 'Primary 3',
    syllabusStrand: 'Core Values: Care',
    topic: 'Care and Compassion: Helping Classmates and Empathy for Others',
    description: 'Recognizing when a friend is troubled, comforting others, standing up against bullying, inclusive play.',
    language: 'en',
    domain: 'sg_cce_care_compassion'
  },
  {
    subject: 'sg_cce',
    grade: 4,
    phase: 'Primary 4',
    syllabusStrand: 'Core Values: Resilience',
    topic: 'Resilience: Overcoming Academic Challenges and Growth Mindset',
    description: 'Viewing mistakes as learning opportunities, managing exam stress, persisting through difficult tasks.',
    language: 'en',
    domain: 'sg_cce_resilience_mindset'
  },
  {
    subject: 'sg_cce',
    grade: 5,
    phase: 'Primary 5',
    syllabusStrand: 'Core Values: Integrity',
    topic: 'Integrity and Honesty: Moral Courage to Do What is Right',
    description: 'Returning lost property, being honest about mistakes, resisting peer pressure, fair play in sports.',
    language: 'en',
    domain: 'sg_cce_integrity_honesty'
  },
  {
    subject: 'sg_cce',
    grade: 6,
    phase: 'Primary 6',
    syllabusStrand: 'Active Citizenship',
    topic: 'Harmony and Civic Duty: Active Contributions to Community Welfare',
    description: 'Volunteering, environmental stewardship, building a compassionate society, celebrating multiracial cohesion.',
    language: 'en',
    domain: 'sg_cce_harmony_civic'
  },

  // 7. Art (sg_art)
  {
    subject: 'sg_art',
    grade: 1,
    phase: 'Primary 1',
    syllabusStrand: 'Visual Elements',
    topic: 'Lines and Shapes: Drawing Geometric and Organic Forms from Nature',
    description: 'Observing leaves, flowers, animals; using curved and straight lines to compose balanced original artwork.',
    language: 'en',
    domain: 'sg_art_lines_nature'
  },
  {
    subject: 'sg_art',
    grade: 2,
    phase: 'Primary 2',
    syllabusStrand: 'Colour Harmonies',
    topic: 'Colour Schemes: Warm and Cool Colours in Landscape Painting',
    description: 'Warm colors (red, yellow, orange) for sunrise; cool colors (blue, green, purple) for underwater and night scenes.',
    language: 'en',
    domain: 'sg_art_warm_cool_colours'
  },
  {
    subject: 'sg_art',
    grade: 3,
    phase: 'Primary 3',
    syllabusStrand: 'Tactile Media',
    topic: 'Textures in Art: Rubbing, Printing and Collage with Everyday Materials',
    description: 'Frottage rubbing of coins and tree bark, collaging fabric scraps, textured relief surfaces.',
    language: 'en',
    domain: 'sg_art_textures_rubbing'
  },
  {
    subject: 'sg_art',
    grade: 4,
    phase: 'Primary 4',
    syllabusStrand: 'Cultural Patterns',
    topic: 'Traditional Peranakan Tile Patterns and Symmetrical Batik Motifs',
    description: 'Floral symmetry in Peranakan ceramic tiles, canting wax resist principles in Southeast Asian batik.',
    language: 'en',
    domain: 'sg_art_peranakan_batik'
  },
  {
    subject: 'sg_art',
    grade: 5,
    phase: 'Primary 5',
    syllabusStrand: 'Sculpture & Relief',
    topic: 'Sculptural Clay Reliefs: Forming Raised Surfaces and Details',
    description: 'Additive and subtractive sculpture techniques, sculpting architectural facades or animals with clay tools.',
    language: 'en',
    domain: 'sg_art_clay_reliefs'
  },
  {
    subject: 'sg_art',
    grade: 6,
    phase: 'Primary 6',
    syllabusStrand: 'Digital Media & Visual Design',
    topic: 'Digital Media Art: Creating Visual Posters for School Campaigns',
    description: 'Digital drawing software tools, typography contrast, color symbolism, layout design for environmental awareness.',
    language: 'en',
    domain: 'sg_art_digital_posters'
  },

  // 8. Music (sg_music)
  {
    subject: 'sg_music',
    grade: 1,
    phase: 'Primary 1',
    syllabusStrand: 'Vocal & Pitch',
    topic: 'Vocal Exploration: High, Low, Loud, Soft Sounds and Action Songs',
    description: 'Vocal warm-ups, matching pitch with bells, singing nursery tunes with body percussion and expressive dynamics.',
    language: 'en',
    domain: 'sg_mus_vocal_dynamics'
  },
  {
    subject: 'sg_music',
    grade: 2,
    phase: 'Primary 2',
    syllabusStrand: 'Rhythm Notation',
    topic: 'Rhythm and Pulse: Clapping Simple Note Values (Crotchet, Quaver)',
    description: 'Ta (crotchet - 1 beat), Ti-ti (paired quavers - 1/2 beat each), rest (silence for 1 beat), clapping in 4/4 time.',
    language: 'en',
    domain: 'sg_mus_crotchet_quaver'
  },
  {
    subject: 'sg_music',
    grade: 3,
    phase: 'Primary 3',
    syllabusStrand: 'Multicultural Instruments',
    topic: 'Ethnic Instruments of Singapore: Kompang, Guqin, Tabla and Angklung',
    description: 'Malay kompang frame drum, Chinese guzheng/guqin, Indian tabla, Indonesian bamboo angklung tuned scales.',
    language: 'en',
    domain: 'sg_mus_ethnic_instruments'
  },
  {
    subject: 'sg_music',
    grade: 4,
    phase: 'Primary 4',
    syllabusStrand: 'Musical Structure',
    topic: 'Form in Music: AB (Binary) and ABA (Ternary) Song Structures',
    description: 'Verse and chorus forms, recognizing contrast in section B and return to home key/theme in section A.',
    language: 'en',
    domain: 'sg_mus_binary_ternary_form'
  },
  {
    subject: 'sg_music',
    grade: 5,
    phase: 'Primary 5',
    syllabusStrand: 'Ensemble Performance',
    topic: 'Ensemble Playing: Recorder Fingerings and Melodic Harmony',
    description: 'Soprano recorder notes B, A, G, C, D; breath control, tonguing articulation (tu), playing in two-part rounds.',
    language: 'en',
    domain: 'sg_mus_recorder_harmony'
  },
  {
    subject: 'sg_music',
    grade: 6,
    phase: 'Primary 6',
    syllabusStrand: 'National Heritage & Song',
    topic: 'Appreciation of National Day Songs and Expressive Musical Elements',
    description: 'Themes of unity in Home, Stand Up for Singapore, We Are Singapore; tempo, major key tonality, lyrical message.',
    language: 'en',
    domain: 'sg_mus_national_songs'
  },

  // 9. Physical Education (sg_pe)
  {
    subject: 'sg_pe',
    grade: 1,
    phase: 'Primary 1',
    syllabusStrand: 'Fundamental Movement',
    topic: 'Fundamental Movement Skills: Hopping, Skipping, Side-Stepping and Landing',
    description: 'Coordination, rhythm in skipping, landing with bent knees (shock absorption), maintaining safe personal space.',
    language: 'en',
    domain: 'sg_pe_movement_landing'
  },
  {
    subject: 'sg_pe',
    grade: 2,
    phase: 'Primary 2',
    syllabusStrand: 'Ball Handling',
    topic: 'Manipulative Skills: Bouncing, Dribbling and Catching Medium Balls',
    description: 'Using finger pads to bounce basketball/handball, tracking ball path, moving while maintaining ball control.',
    language: 'en',
    domain: 'sg_pe_dribbling_catching'
  },
  {
    subject: 'sg_pe',
    grade: 3,
    phase: 'Primary 3',
    syllabusStrand: 'Gymnastics Skills',
    topic: 'Educational Gymnastics: Balancing on Differing Bases of Support',
    description: 'Wide vs narrow base of support, counterbalance with partner, rolling smoothly (pencil roll, forward roll prep).',
    language: 'en',
    domain: 'sg_pe_gymnastic_support'
  },
  {
    subject: 'sg_pe',
    grade: 4,
    phase: 'Primary 4',
    syllabusStrand: 'Net-Barrier Games',
    topic: 'Net-Barrier Games: Forehand and Backhand Racket Strikes',
    description: 'Badminton and mini-tennis readiness stance, contacting shuttlecock at highest point, serving over net legally.',
    language: 'en',
    domain: 'sg_pe_racket_strikes'
  },
  {
    subject: 'sg_pe',
    grade: 5,
    phase: 'Primary 5',
    syllabusStrand: 'Territorial Games',
    topic: 'Invasion Games: Passing, Moving into Space and Marking Opponents',
    description: 'Basketball and captain\'s ball tactical concepts: defensive triangle, cutting to receive, interception without fouling.',
    language: 'en',
    domain: 'sg_pe_invasion_spacing'
  },
  {
    subject: 'sg_pe',
    grade: 6,
    phase: 'Primary 6',
    syllabusStrand: 'Physical Fitness & NAPFA',
    topic: 'Physical Fitness Components (NAPFA Test Prep: Shuttle Run, Sit-ups, Stamina)',
    description: 'Muscular endurance (sit-ups), speed and agility (4x10m shuttle run), cardiovascular aerobic capacity (1.6km run-walk).',
    language: 'en',
    domain: 'sg_pe_fitness_napfa'
  },

  // 10. Digital Literacy & Computing (sg_computing)
  {
    subject: 'sg_computing',
    grade: 1,
    phase: 'Primary 1',
    syllabusStrand: 'Digital Ergonomics',
    topic: 'Basic Digital Hygiene: Screen Time Balance and Posture',
    description: '20-20-20 eye rest rule, sitting upright, proper distance from screens, asking parent/teacher permission to use devices.',
    language: 'en',
    domain: 'sg_comp_ergonomics_hygiene'
  },
  {
    subject: 'sg_computing',
    grade: 2,
    phase: 'Primary 2',
    syllabusStrand: 'Computer Hardware',
    topic: 'Parts of a Computer: CPU, Monitor, Keyboard, Trackpad and Storage',
    description: 'Input devices (mouse, keyboard, mic) vs output devices (monitor, speaker, printer); USB storage and cloud basics.',
    language: 'en',
    domain: 'sg_comp_hardware_devices'
  },
  {
    subject: 'sg_computing',
    grade: 3,
    phase: 'Primary 3',
    syllabusStrand: 'Visual Animation',
    topic: 'Visual Block Programming: Sequencing Actions and Sprite Animations',
    description: 'Scratch blocks: glide to coordinate (x,y), next costume, play sound until done, wait 1 second timing.',
    language: 'en',
    domain: 'sg_comp_sprite_animation'
  },
  {
    subject: 'sg_computing',
    grade: 4,
    phase: 'Primary 4',
    syllabusStrand: 'Productivity Tools',
    topic: 'Handling Digital Information: Tables, Word Processing and Formatting',
    description: 'Bold, italics, bullet points, inserting tables and copyright-free images, saving as PDF and file naming conventions.',
    language: 'en',
    domain: 'sg_comp_word_processing'
  },
  {
    subject: 'sg_computing',
    grade: 5,
    phase: 'Primary 5',
    syllabusStrand: 'Algorithmic Logic',
    topic: 'Algorithmic Thinking: Designing Flowcharts for Daily Decision Making',
    description: 'Flowchart symbols: oval (start/end), rectangle (process), diamond (decision yes/no), parallelograms (input/output).',
    language: 'en',
    domain: 'sg_comp_flowcharts_algorithms'
  },
  {
    subject: 'sg_computing',
    grade: 6,
    phase: 'Primary 6',
    syllabusStrand: 'Cyber Wellness',
    topic: 'Cyber Wellness: Combating Cyberbullying and Verifying Online Information',
    description: 'Respecting peers online, reporting cyberbullying, verifying fake news (cross-checking source, publication date, author).',
    language: 'en',
    domain: 'sg_comp_cyber_wellness_news'
  }
];

module.exports = { SINGAPORE_MODULES };
