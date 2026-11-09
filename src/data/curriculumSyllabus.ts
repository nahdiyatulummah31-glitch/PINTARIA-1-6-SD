import { CurriculumId, GradeLevel, SubjectId } from '../types/quiz';

export interface SyllabusStrand {
  name: string;
  topics: string[];
}

export interface SubjectSyllabus {
  curriculum: CurriculumId;
  subjectId: SubjectId;
  subjectName: string;
  grade: GradeLevel;
  gradeLabel: string;
  description: string;
  strands: SyllabusStrand[];
}

export const CURRICULUM_SYLLABUS: SubjectSyllabus[] = [
  // =========================================================================
  // CAMBRIDGE PRIMARY - ENGLISH (PRIMARY 1 - 6)
  // =========================================================================
  {
    curriculum: 'cambridge',
    subjectId: 'cam_english',
    subjectName: 'Cambridge Primary English',
    grade: 1,
    gradeLabel: 'Cambridge Stage 1 (Primary 1)',
    description: 'Foundational literacy: phonics, sight words, simple sentence structures, and basic oral communication.',
    strands: [
      {
        name: 'Reading',
        topics: [
          'Phonics',
          'Letter sounds',
          'Initial sounds',
          'Final sounds',
          'Blending sounds',
          'Segmenting sounds',
          'High-frequency words',
          'Sight words',
          'Word recognition',
          'Simple sentences',
          'Picture reading',
          'Simple fiction',
          'Simple non-fiction',
          'Reading comprehension',
          'Sequencing events',
          'Characters',
          'Setting',
          'Main idea',
          'Basic inference',
        ],
      },
      {
        name: 'Writing',
        topics: [
          'Letter formation',
          'Handwriting',
          'Spelling',
          'Words',
          'Simple sentences',
          'Capital letters',
          'Full stops',
          'Simple descriptions',
          'Personal writing',
          'Simple stories',
          'Labels',
          'Lists',
          'Simple instructions',
        ],
      },
      {
        name: 'Grammar & Vocabulary',
        topics: [
          'Nouns',
          'Verbs',
          'Adjectives',
          'Pronouns',
          'Singular and plural',
          'Simple tenses',
          'Prepositions',
          'Conjunctions',
          'Basic punctuation',
          'Everyday vocabulary',
        ],
      },
      {
        name: 'Speaking & Listening',
        topics: [
          'Greetings',
          'Introducing oneself',
          'Asking questions',
          'Answering questions',
          'Following instructions',
          'Describing people',
          'Describing objects',
          'Expressing likes and dislikes',
          'Expressing feelings',
          'Simple conversation',
        ],
      },
    ],
  },
  {
    curriculum: 'cambridge',
    subjectId: 'cam_english',
    subjectName: 'Cambridge Primary English',
    grade: 2,
    gradeLabel: 'Cambridge Stage 2 (Primary 2)',
    description: 'Developing reading stamina, narrative and descriptive writing, punctuation, and purposeful speaking.',
    strands: [
      {
        name: 'Reading',
        topics: [
          'Phonics',
          'Spelling patterns',
          'Word recognition',
          'Vocabulary',
          'Fiction',
          'Non-fiction',
          'Poetry',
          'Reading comprehension',
          'Sequencing',
          'Main idea',
          'Supporting details',
          'Character',
          'Setting',
          'Prediction',
          'Simple inference',
        ],
      },
      {
        name: 'Writing',
        topics: [
          'Sentences',
          'Paragraphs',
          'Narrative writing',
          'Descriptive writing',
          'Instructions',
          'Simple reports',
          'Personal writing',
          'Dialogue',
          'Editing basic writing',
        ],
      },
      {
        name: 'Grammar & Vocabulary',
        topics: [
          'Common nouns',
          'Proper nouns',
          'Verbs',
          'Adjectives',
          'Adverbs',
          'Pronouns',
          'Tenses',
          'Conjunctions',
          'Prepositions',
          'Punctuation',
          'Sentence structure',
          'Vocabulary development',
        ],
      },
      {
        name: 'Speaking & Listening',
        topics: [
          'Discussion',
          'Retelling',
          'Describing',
          'Giving opinions',
          'Asking questions',
          'Listening for information',
        ],
      },
    ],
  },
  {
    curriculum: 'cambridge',
    subjectId: 'cam_english',
    subjectName: 'Cambridge Primary English',
    grade: 3,
    gradeLabel: 'Cambridge Stage 3 (Primary 3)',
    description: 'Independent reading, genre comparison, paragraph planning, and direct speech punctuation.',
    strands: [
      {
        name: 'Reading',
        topics: [
          'Fiction',
          'Non-fiction',
          'Poetry',
          'Drama',
          'Reading comprehension',
          'Main idea',
          'Supporting details',
          'Sequence',
          'Inference',
          'Prediction',
          'Vocabulary in context',
          'Comparing texts',
        ],
      },
      {
        name: 'Writing',
        topics: [
          'Narrative writing',
          'Descriptive writing',
          'Informative writing',
          'Instructions',
          'Reports',
          'Letters',
          'Diary',
          'Dialogue',
          'Paragraph organisation',
          'Planning',
          'Drafting',
          'Editing',
        ],
      },
      {
        name: 'Grammar',
        topics: [
          'Nouns',
          'Pronouns',
          'Verbs',
          'Adjectives',
          'Adverbs',
          'Tenses',
          'Conjunctions',
          'Prepositions',
          'Direct speech',
          'Punctuation',
          'Sentence types',
          'Sentence structure',
        ],
      },
      {
        name: 'Speaking & Listening',
        topics: [
          'Presentation',
          'Discussion',
          'Retelling',
          'Explanation',
          'Giving reasons',
          'Listening for key information',
        ],
      },
    ],
  },
  {
    curriculum: 'cambridge',
    subjectId: 'cam_english',
    subjectName: 'Cambridge Primary English',
    grade: 4,
    gradeLabel: 'Cambridge Stage 4 (Primary 4)',
    description: 'Critical comprehension, author purpose, persuasive writing, clauses, and subject-verb agreement.',
    strands: [
      {
        name: 'Reading',
        topics: [
          'Fiction',
          'Non-fiction',
          'Poetry',
          'Drama',
          'Information texts',
          'Reading comprehension',
          'Inference',
          "Author's purpose",
          'Main ideas',
          'Supporting evidence',
          'Summarising',
          'Vocabulary in context',
          'Comparing texts',
          'Interpretation',
        ],
      },
      {
        name: 'Writing',
        topics: [
          'Narrative',
          'Descriptive writing',
          'Informative writing',
          'Persuasive writing',
          'Reports',
          'Instructions',
          'Letters',
          'Reviews',
          'Diary',
          'Character description',
          'Paragraph development',
          'Editing',
          'Proofreading',
        ],
      },
      {
        name: 'Grammar',
        topics: [
          'Tenses',
          'Subject-verb agreement',
          'Pronouns',
          'Adjectives',
          'Adverbs',
          'Prepositions',
          'Conjunctions',
          'Clauses',
          'Direct speech',
          'Punctuation',
          'Sentence structure',
          'Vocabulary development',
        ],
      },
    ],
  },
  {
    curriculum: 'cambridge',
    subjectId: 'cam_english',
    subjectName: 'Cambridge Primary English',
    grade: 5,
    gradeLabel: 'Cambridge Stage 5 (Primary 5)',
    description: 'Evaluating viewpoint, complex sentences, modal verbs, figurative language, and journalistic writing.',
    strands: [
      {
        name: 'Reading',
        topics: [
          'Fiction',
          'Non-fiction',
          'Poetry',
          'Drama',
          'News texts',
          'Information texts',
          'Reading comprehension',
          'Inference',
          "Author's purpose",
          'Tone',
          'Viewpoint',
          'Summarising',
          'Comparing texts',
          'Evaluating information',
        ],
      },
      {
        name: 'Writing',
        topics: [
          'Narrative',
          'Descriptive',
          'Persuasive',
          'Informative',
          'Reports',
          'Reviews',
          'Letters',
          'Articles',
          'Speeches',
          'Dialogue',
          'Character development',
          'Paragraph cohesion',
          'Editing',
          'Revision',
        ],
      },
      {
        name: 'Grammar & Language',
        topics: [
          'Complex sentences',
          'Clauses',
          'Tenses',
          'Modal verbs',
          'Pronouns',
          'Determiners',
          'Adverbs',
          'Conjunctions',
          'Punctuation',
          'Vocabulary',
          'Figurative language',
        ],
      },
    ],
  },
  {
    curriculum: 'cambridge',
    subjectId: 'cam_english',
    subjectName: 'Cambridge Primary English',
    grade: 6,
    gradeLabel: 'Cambridge Stage 6 (Primary 6)',
    description: 'Advanced textual analysis, identifying bias and tone, argumentative essays, active/passive voice, and rhetorical cohesion.',
    strands: [
      {
        name: 'Reading',
        topics: [
          'Fiction',
          'Non-fiction',
          'Poetry',
          'Drama',
          'News',
          'Reading comprehension',
          'Inference',
          'Analysis',
          "Author's purpose",
          'Viewpoint',
          'Bias',
          'Tone',
          'Summarising',
          'Comparing texts',
          'Evaluating evidence',
        ],
      },
      {
        name: 'Writing',
        topics: [
          'Narrative',
          'Descriptive',
          'Persuasive',
          'Informative',
          'Argumentative writing',
          'Reports',
          'Reviews',
          'Articles',
          'Letters',
          'Speeches',
          'Story structure',
          'Character development',
          'Cohesion',
          'Editing',
          'Proofreading',
        ],
      },
      {
        name: 'Grammar & Language',
        topics: [
          'Complex sentence structure',
          'Clauses',
          'Tenses',
          'Modal verbs',
          'Active voice',
          'Passive voice',
          'Direct speech',
          'Indirect speech',
          'Punctuation',
          'Vocabulary',
          'Figurative language',
          'Cohesion',
        ],
      },
    ],
  },

  // =========================================================================
  // CAMBRIDGE PRIMARY - MATHEMATICS (PRIMARY 1 - 6)
  // =========================================================================
  {
    curriculum: 'cambridge',
    subjectId: 'cam_math',
    subjectName: 'Cambridge Primary Mathematics',
    grade: 1,
    gradeLabel: 'Cambridge Stage 1 (Primary 1)',
    description: 'Numbers to 20, number bonds, 2D and 3D shapes, simple measurement, and classifying data.',
    strands: [
      {
        name: 'Number',
        topics: [
          'Counting',
          'Number recognition',
          'Number formation',
          'Number sequences',
          'Comparing numbers',
          'Ordering numbers',
          'Place value',
          'Number bonds',
          'Addition',
          'Subtraction',
          'Doubles',
          'Halves',
          'Simple fractions',
          'Money',
        ],
      },
      {
        name: 'Geometry and Measure',
        topics: [
          '2D shapes',
          '3D shapes',
          'Position',
          'Length',
          'Height',
          'Mass',
          'Capacity',
          'Time',
        ],
      },
      {
        name: 'Statistics and Probability',
        topics: [
          'Sorting',
          'Classification',
          'Simple tables',
          'Simple charts',
          'More and less',
          'Most and least',
        ],
      },
      {
        name: 'Thinking and Working Mathematically',
        topics: ['Patterns', 'Reasoning', 'Explaining answers', 'Simple problem solving'],
      },
    ],
  },
  {
    curriculum: 'cambridge',
    subjectId: 'cam_math',
    subjectName: 'Cambridge Primary Mathematics',
    grade: 2,
    gradeLabel: 'Cambridge Stage 2 (Primary 2)',
    description: 'Mental math strategies, multiplication and division foundations, symmetry, pictograms, and reasoning.',
    strands: [
      {
        name: 'Number',
        topics: [
          'Counting',
          'Number sequences',
          'Place value',
          'Addition',
          'Subtraction',
          'Multiplication',
          'Division',
          'Number bonds',
          'Fractions',
          'Money',
          'Mental strategies',
        ],
      },
      {
        name: 'Geometry and Measure',
        topics: [
          '2D shapes',
          '3D shapes',
          'Symmetry',
          'Position',
          'Length',
          'Mass',
          'Capacity',
          'Time',
        ],
      },
      {
        name: 'Statistics and Probability',
        topics: [
          'Tables',
          'Pictograms',
          'Charts',
          'Data interpretation',
          'Simple probability',
        ],
      },
      {
        name: 'Thinking and Working Mathematically',
        topics: ['Patterns', 'Reasoning', 'Problem solving'],
      },
    ],
  },
  {
    curriculum: 'cambridge',
    subjectId: 'cam_math',
    subjectName: 'Cambridge Primary Mathematics',
    grade: 3,
    gradeLabel: 'Cambridge Stage 3 (Primary 3)',
    description: 'Whole numbers to 1,000, rounding, times tables, angles, perimeter, and bar charts.',
    strands: [
      {
        name: 'Number',
        topics: [
          'Whole numbers',
          'Place value',
          'Ordering',
          'Rounding',
          'Addition',
          'Subtraction',
          'Multiplication',
          'Division',
          'Multiplication tables',
          'Fractions',
          'Money',
        ],
      },
      {
        name: 'Geometry and Measure',
        topics: [
          '2D shapes',
          '3D shapes',
          'Angles',
          'Length',
          'Mass',
          'Capacity',
          'Time',
          'Perimeter',
          'Position',
        ],
      },
      {
        name: 'Statistics and Probability',
        topics: [
          'Data collection',
          'Tables',
          'Charts',
          'Bar charts',
          'Data interpretation',
          'Probability',
        ],
      },
      {
        name: 'Thinking and Working Mathematically',
        topics: ['Mathematical reasoning', 'Patterns', 'Problem solving'],
      },
    ],
  },
  {
    curriculum: 'cambridge',
    subjectId: 'cam_math',
    subjectName: 'Cambridge Primary Mathematics',
    grade: 4,
    gradeLabel: 'Cambridge Stage 4 (Primary 4)',
    description: 'Equivalent fractions, decimals, area and perimeter, symmetry transformations, line graphs, and mathematical communication.',
    strands: [
      {
        name: 'Number',
        topics: [
          'Whole numbers',
          'Place value',
          'Ordering',
          'Rounding',
          'Addition',
          'Subtraction',
          'Multiplication',
          'Division',
          'Fractions',
          'Equivalent fractions',
          'Decimals',
          'Money',
        ],
      },
      {
        name: 'Geometry and Measure',
        topics: [
          '2D shapes',
          '3D shapes',
          'Angles',
          'Perimeter',
          'Area',
          'Length',
          'Mass',
          'Capacity',
          'Time',
          'Position',
          'Symmetry',
          'Transformations',
        ],
      },
      {
        name: 'Statistics and Probability',
        topics: [
          'Tables',
          'Bar charts',
          'Line graphs',
          'Data interpretation',
          'Probability',
        ],
      },
      {
        name: 'Thinking and Working Mathematically',
        topics: [
          'Reasoning',
          'Patterns',
          'Problem solving',
          'Mathematical communication',
        ],
      },
    ],
  },
  {
    curriculum: 'cambridge',
    subjectId: 'cam_math',
    subjectName: 'Cambridge Primary Mathematics',
    grade: 5,
    gradeLabel: 'Cambridge Stage 5 (Primary 5)',
    description: 'Integers, percentages, ratio & proportion, coordinates, volume, 3D nets, and statistical enquiry.',
    strands: [
      {
        name: 'Number',
        topics: [
          'Whole numbers',
          'Integers',
          'Place value',
          'Rounding',
          'Operations',
          'Fractions',
          'Decimals',
          'Percentages',
          'Ratio',
          'Proportion',
          'Money',
          'Powers',
        ],
      },
      {
        name: 'Geometry and Measure',
        topics: [
          'Angles',
          '2D shapes',
          '3D shapes',
          'Area',
          'Perimeter',
          'Volume',
          'Length',
          'Mass',
          'Capacity',
          'Time',
          'Coordinates',
          'Transformations',
          'Nets',
        ],
      },
      {
        name: 'Statistics and Probability',
        topics: [
          'Tables',
          'Bar charts',
          'Line graphs',
          'Statistical questions',
          'Data interpretation',
          'Probability',
        ],
      },
      {
        name: 'Thinking and Working Mathematically',
        topics: [
          'Reasoning',
          'Problem solving',
          'Patterns',
          'Mathematical relationships',
        ],
      },
    ],
  },
  {
    curriculum: 'cambridge',
    subjectId: 'cam_math',
    subjectName: 'Cambridge Primary Mathematics',
    grade: 6,
    gradeLabel: 'Cambridge Stage 6 (Primary 6)',
    description: 'Mastery of operations with rational numbers, circles, composite figures, probability comparison, justification, and proof.',
    strands: [
      {
        name: 'Number',
        topics: [
          'Whole numbers',
          'Integers',
          'Powers',
          'Place value',
          'Rounding',
          'Fractions',
          'Decimals',
          'Percentages',
          'Ratio',
          'Proportion',
          'Operations',
          'Money',
        ],
      },
      {
        name: 'Geometry and Measure',
        topics: [
          'Angles',
          'Properties of shapes',
          '2D shapes',
          '3D shapes',
          'Area',
          'Perimeter',
          'Volume',
          'Coordinates',
          'Transformations',
          'Nets',
          'Length',
          'Mass',
          'Capacity',
          'Time',
        ],
      },
      {
        name: 'Statistics and Probability',
        topics: [
          'Data collection',
          'Tables',
          'Bar charts',
          'Line graphs',
          'Statistical interpretation',
          'Probability',
          'Comparing data sets',
        ],
      },
      {
        name: 'Thinking and Working Mathematically',
        topics: [
          'Mathematical reasoning',
          'Problem solving',
          'Patterns',
          'Relationships',
          'Justification',
          'Mathematical communication',
        ],
      },
    ],
  },

  // =========================================================================
  // CAMBRIDGE PRIMARY - SCIENCE (PRIMARY 1 - 6)
  // =========================================================================
  {
    curriculum: 'cambridge',
    subjectId: 'cam_science',
    subjectName: 'Cambridge Primary Science',
    grade: 1,
    gradeLabel: 'Cambridge Stage 1 (Primary 1)',
    description: 'Sensory exploration: living and non-living, basic materials, sound and forces, weather and day/night.',
    strands: [
      {
        name: 'Biology',
        topics: [
          'Living things',
          'Never been alive',
          'Plants',
          'Animals',
          'Habitats',
          'Human body',
          'External body parts',
        ],
      },
      {
        name: 'Chemistry',
        topics: ['Materials', 'Common materials', 'Properties of materials', 'Uses of materials'],
      },
      {
        name: 'Physics',
        topics: ['Sound', 'Light', 'Movement', 'Forces', 'Simple electricity'],
      },
      {
        name: 'Earth and Space',
        topics: ['Earth', 'Weather', 'Day and night', 'Sun', 'Moon', 'Environment'],
      },
      {
        name: 'Thinking and Working Scientifically',
        topics: [
          'Observation',
          'Asking questions',
          'Making predictions',
          'Recording observations',
          'Simple investigations',
        ],
      },
      {
        name: 'Science in Context',
        topics: ['Science in everyday life', 'Science and environment'],
      },
    ],
  },
  {
    curriculum: 'cambridge',
    subjectId: 'cam_science',
    subjectName: 'Cambridge Primary Science',
    grade: 2,
    gradeLabel: 'Cambridge Stage 2 (Primary 2)',
    description: 'Plant and animal life cycles, human teeth, solids and liquids, simple circuits, and seasons.',
    strands: [
      {
        name: 'Biology',
        topics: ['Plants', 'Animals', 'Habitats', 'Life cycles', 'Human body', 'Teeth', 'Healthy living'],
      },
      {
        name: 'Chemistry',
        topics: [
          'Properties of materials',
          'Solids',
          'Liquids',
          'Changes in materials',
          'Uses of materials',
        ],
      },
      {
        name: 'Physics',
        topics: ['Sound', 'Light', 'Forces', 'Movement', 'Electricity', 'Simple circuits'],
      },
      {
        name: 'Earth and Space',
        topics: ['Earth', 'Sun', 'Moon', 'Weather', 'Seasons', 'Environment'],
      },
      {
        name: 'Thinking and Working Scientifically',
        topics: ['Observation', 'Classification', 'Prediction', 'Measurement', 'Recording data'],
      },
    ],
  },
  {
    curriculum: 'cambridge',
    subjectId: 'cam_science',
    subjectName: 'Cambridge Primary Science',
    grade: 3,
    gradeLabel: 'Cambridge Stage 3 (Primary 3)',
    description: 'Human internal organs, food chains, states of matter, light and shadow, and fair testing.',
    strands: [
      {
        name: 'Biology',
        topics: ['Plants', 'Animals', 'Habitats', 'Food chains', 'Life cycles', 'Human organs', 'Health'],
      },
      {
        name: 'Chemistry',
        topics: ['Solids', 'Liquids', 'Properties of materials', 'Mixtures', 'Changes of state'],
      },
      {
        name: 'Physics',
        topics: ['Forces', 'Movement', 'Sound', 'Light', 'Electricity', 'Circuits'],
      },
      {
        name: 'Earth and Space',
        topics: ['Earth', 'Moon', 'Sun', 'Day and night'],
      },
      {
        name: 'Thinking and Working Scientifically',
        topics: [
          'Observation',
          'Fair testing',
          'Measurement',
          'Recording data',
          'Drawing conclusions',
        ],
      },
    ],
  },
  {
    curriculum: 'cambridge',
    subjectId: 'cam_science',
    subjectName: 'Cambridge Primary Science',
    grade: 4,
    gradeLabel: 'Cambridge Stage 4 (Primary 4)',
    description: 'Human skeleton and muscles, particle ideas, reversible/irreversible changes, magnetism, and series circuits.',
    strands: [
      {
        name: 'Biology',
        topics: ['Human body', 'Bones', 'Skeleton', 'Muscles', 'Plants', 'Animals', 'Habitats', 'Food chains', 'Adaptation'],
      },
      {
        name: 'Chemistry',
        topics: [
          'Properties of solids',
          'Properties of liquids',
          'Particle ideas',
          'Materials',
          'Mixtures',
          'Reversible changes',
          'Irreversible changes',
        ],
      },
      {
        name: 'Physics',
        topics: [
          'Forces',
          'Movement',
          'Light',
          'Sound',
          'Electricity',
          'Series circuits',
          'Magnets',
          'Magnetism',
          'Magnetic materials',
          'Magnetic and non-magnetic materials',
          'Magnetic poles',
          'Attraction',
          'Repulsion',
        ],
      },
      {
        name: 'Earth and Space',
        topics: ['Earth', 'Sun', 'Moon', 'Day and night', 'Shadows'],
      },
      {
        name: 'Thinking and Working Scientifically',
        topics: [
          'Planning investigations',
          'Prediction',
          'Measurement',
          'Variables',
          'Data recording',
          'Conclusions',
        ],
      },
    ],
  },
  {
    curriculum: 'cambridge',
    subjectId: 'cam_science',
    subjectName: 'Cambridge Primary Science',
    grade: 5,
    gradeLabel: 'Cambridge Stage 5 (Primary 5)',
    description: 'Human digestive system, plant reproduction, solutions and separation, energy forms, and the solar system.',
    strands: [
      {
        name: 'Biology',
        topics: [
          'Human digestive system',
          'Digestion',
          'Nutrients',
          'Plants',
          'Reproduction',
          'Life cycles',
          'Adaptation',
          'Ecosystems',
          'Food chains',
        ],
      },
      {
        name: 'Chemistry',
        topics: [
          'Materials',
          'Particle model',
          'Changes of state',
          'Mixtures',
          'Solutions',
          'Separation',
          'Chemical changes',
        ],
      },
      {
        name: 'Physics',
        topics: ['Forces', 'Light', 'Sound', 'Energy', 'Electricity', 'Circuits', 'Magnets', 'Magnetism'],
      },
      {
        name: 'Earth and Space',
        topics: ['Earth', 'Sun', 'Moon', 'Solar System', "Earth's orbit", 'Seasons', 'Environment'],
      },
      {
        name: 'Thinking and Working Scientifically',
        topics: [
          'Scientific models',
          'Planning enquiries',
          'Variables',
          'Data analysis',
          'Evidence',
          'Conclusions',
        ],
      },
    ],
  },
  {
    curriculum: 'cambridge',
    subjectId: 'cam_science',
    subjectName: 'Cambridge Primary Science',
    grade: 6,
    gradeLabel: 'Cambridge Stage 6 (Primary 6)',
    description: 'Circulatory and respiratory systems, chemical reactions, parallel circuits, planetary orbits, and environmental sustainability.',
    strands: [
      {
        name: 'Biology',
        topics: [
          'Human circulatory system',
          'Heart',
          'Blood',
          'Arteries',
          'Veins',
          'Capillaries',
          'Respiration',
          'Nutrition',
          'Reproduction',
          'Life cycles',
          'Ecosystems',
          'Adaptation',
        ],
      },
      {
        name: 'Chemistry',
        topics: [
          'Solids',
          'Liquids',
          'Gases',
          'Particle model',
          'Materials',
          'Changes of state',
          'Mixtures',
          'Separation',
          'Chemical reactions',
        ],
      },
      {
        name: 'Physics',
        topics: [
          'Forces',
          'Energy',
          'Light',
          'Sound',
          'Electricity',
          'Series circuits',
          'Parallel circuits',
          'Magnets',
          'Magnetism',
        ],
      },
      {
        name: 'Earth and Space',
        topics: ['Solar System', 'Planets', 'Moon', 'Sun', "Earth's movement", 'Orbits', 'Day and night', 'Seasons'],
      },
      {
        name: 'Thinking and Working Scientifically',
        topics: [
          'Scientific enquiry',
          'Models',
          'Evidence',
          'Variables',
          'Data analysis',
          'Evaluation',
          'Conclusions',
        ],
      },
      {
        name: 'Science in Context',
        topics: ['Science and technology', 'Environment', 'Sustainability', 'Impact of science'],
      },
    ],
  },

  // =========================================================================
  // CAMBRIDGE PRIMARY - GLOBAL PERSPECTIVES (PRIMARY 1 - 6)
  // =========================================================================
  ...([1, 2, 3, 4, 5, 6] as GradeLevel[]).map((g) => ({
    curriculum: 'cambridge' as CurriculumId,
    subjectId: 'cam_global_perspectives' as SubjectId,
    subjectName: 'Cambridge Global Perspectives',
    grade: g,
    gradeLabel: `Cambridge Stage ${g} (Primary ${g})`,
    description: 'Inquiry-based program developing cross-cultural research, critical analysis, reflection, and collaborative problem-solving skills.',
    strands: [
      {
        name: 'Research Skills',
        topics: [
          'Asking questions',
          'Finding information',
          'Selecting information',
          'Recording information',
          'Organising information',
        ],
      },
      {
        name: 'Analysis Skills',
        topics: [
          'Identifying patterns',
          'Identifying relationships',
          'Comparing information',
          'Interpreting information',
        ],
      },
      {
        name: 'Evaluation Skills',
        topics: [
          'Evaluating evidence',
          'Evaluating arguments',
          'Identifying strengths and weaknesses',
          'Making justified conclusions',
        ],
      },
      {
        name: 'Reflection Skills',
        topics: [
          'Reflecting on learning',
          'Considering different perspectives',
          'Self-evaluation',
          'Identifying next steps',
        ],
      },
      {
        name: 'Collaboration',
        topics: ['Teamwork', 'Sharing ideas', 'Negotiation', 'Decision making', 'Solving problems together'],
      },
      {
        name: 'Communication',
        topics: ['Presentation', 'Discussion', 'Explanation', 'Debate', 'Expressing viewpoints'],
      },
      {
        name: 'Possible Topics',
        topics: [
          'Family',
          'Education',
          'Environment',
          'Water',
          'Food',
          'Health',
          'Technology',
          'Transport',
          'Jobs',
          'Communities',
          'Globalisation',
          'Sustainability',
          'Culture',
          'Society',
          'Communication',
          'Natural resources',
          'Climate',
          'Innovation',
        ],
      },
    ],
  })),

  // =========================================================================
  // SINGAPORE PRIMARY - ENGLISH (PRIMARY 1 - 6)
  // =========================================================================
  {
    curriculum: 'singapore',
    subjectId: 'sg_english',
    subjectName: 'Singapore Primary English Language',
    grade: 1,
    gradeLabel: 'Singapore Primary 1 (P1)',
    description: 'STELLAR foundation: phonemic awareness, simple sentence composition, active listening, and viewing multimodal texts.',
    strands: [
      {
        name: 'Listening and Viewing',
        topics: [
          'Listening for information',
          'Following instructions',
          'Understanding simple messages',
          'Recognising sounds',
          'Recognising words in context',
        ],
      },
      {
        name: 'Speaking and Representing',
        topics: [
          'Greetings',
          'Introducing oneself',
          'Asking questions',
          'Answering questions',
          'Simple descriptions',
          'Expressing opinions',
          'Expressing feelings',
          'Simple conversation',
        ],
      },
      {
        name: 'Reading and Viewing',
        topics: [
          'Phonics',
          'Word recognition',
          'Vocabulary',
          'Simple sentences',
          'Fiction',
          'Non-fiction',
          'Comprehension',
          'Sequencing',
        ],
      },
      {
        name: 'Writing and Representing',
        topics: [
          'Handwriting',
          'Spelling',
          'Words',
          'Sentences',
          'Simple descriptions',
          'Simple stories',
          'Functional writing',
        ],
      },
      {
        name: 'Grammar and Language',
        topics: ['Nouns', 'Verbs', 'Adjectives', 'Pronouns', 'Singular and plural', 'Basic punctuation'],
      },
    ],
  },
  {
    curriculum: 'singapore',
    subjectId: 'sg_english',
    subjectName: 'Singapore Primary English Language',
    grade: 2,
    gradeLabel: 'Singapore Primary 2 (P2)',
    description: 'Paragraph construction, personal recount, story prediction, and expanding grammar (tenses & conjunctions).',
    strands: [
      {
        name: 'Listening and Viewing',
        topics: ['Main ideas', 'Key details', 'Instructions', 'Conversations'],
      },
      {
        name: 'Speaking and Representing',
        topics: ['Describing', 'Retelling', 'Asking questions', 'Giving reasons', 'Expressing opinions'],
      },
      {
        name: 'Reading and Viewing',
        topics: [
          'Fiction',
          'Non-fiction',
          'Poetry',
          'Comprehension',
          'Main idea',
          'Details',
          'Prediction',
          'Inference',
        ],
      },
      {
        name: 'Writing and Representing',
        topics: [
          'Paragraphs',
          'Descriptive writing',
          'Narrative writing',
          'Instructions',
          'Personal writing',
        ],
      },
      {
        name: 'Grammar',
        topics: [
          'Tenses',
          'Nouns',
          'Verbs',
          'Adjectives',
          'Adverbs',
          'Pronouns',
          'Conjunctions',
          'Prepositions',
          'Punctuation',
        ],
      },
    ],
  },
  {
    curriculum: 'singapore',
    subjectId: 'sg_english',
    subjectName: 'Singapore Primary English Language',
    grade: 3,
    gradeLabel: 'Singapore Primary 3 (P3)',
    description: 'Literal and inferential comprehension, functional writing, sentence expansion, and collaborative discussions.',
    strands: [
      {
        name: 'Listening and Viewing',
        topics: [
          'Listening for understanding',
          'Listening for key information',
          'Literal meaning',
          'Inferential meaning',
          'Responding to texts',
        ],
      },
      {
        name: 'Speaking and Representing',
        topics: [
          'Describing',
          'Retelling',
          'Discussion',
          'Presentation',
          'Giving reasons',
          'Expressing opinions',
        ],
      },
      {
        name: 'Reading and Viewing',
        topics: [
          'Fiction',
          'Non-fiction',
          'Poetry',
          'Comprehension',
          'Vocabulary in context',
          'Main ideas',
          'Details',
          'Inference',
          'Prediction',
        ],
      },
      {
        name: 'Writing and Representing',
        topics: [
          'Narrative',
          'Descriptive',
          'Informative',
          'Functional writing',
          'Paragraphs',
          'Editing',
        ],
      },
      {
        name: 'Grammar and Language',
        topics: ['Grammar', 'Vocabulary', 'Sentence structure', 'Tenses', 'Punctuation'],
      },
    ],
  },
  {
    curriculum: 'singapore',
    subjectId: 'sg_english',
    subjectName: 'Singapore Primary English Language',
    grade: 4,
    gradeLabel: 'Singapore Primary 4 (P4)',
    description: 'Critical listening, expository and report writing, complex clauses, and author intent.',
    strands: [
      {
        name: 'Listening and Viewing',
        topics: [
          'Understanding information',
          'Literal meaning',
          'Inferential meaning',
          'Critical listening',
          'Identifying key ideas',
        ],
      },
      {
        name: 'Speaking and Representing',
        topics: [
          'Discussion',
          'Presentation',
          'Descriptions',
          'Giving reasons',
          'Expressing opinions',
          'Responding to others',
        ],
      },
      {
        name: 'Reading and Viewing',
        topics: [
          'Fiction',
          'Non-fiction',
          'Poetry',
          'Comprehension',
          'Inference',
          'Main idea',
          'Supporting details',
          'Vocabulary',
          'Comparing texts',
          "Author's purpose",
        ],
      },
      {
        name: 'Writing and Representing',
        topics: [
          'Narrative',
          'Descriptive',
          'Expository',
          'Personal recount',
          'Functional writing',
          'Reports',
          'Paragraph organisation',
          'Editing',
        ],
      },
      {
        name: 'Grammar',
        topics: [
          'Tenses',
          'Clauses',
          'Conjunctions',
          'Adverbs',
          'Prepositions',
          'Pronouns',
          'Subject-verb agreement',
          'Punctuation',
        ],
      },
    ],
  },
  {
    curriculum: 'singapore',
    subjectId: 'sg_english',
    subjectName: 'Singapore Primary English Language',
    grade: 5,
    gradeLabel: 'Singapore Primary 5 (P5)',
    description: 'Synthesis & transformation, persuasive/discursive essays, critical text evaluation, and nuanced vocabulary.',
    strands: [
      {
        name: 'Listening and Viewing',
        topics: [
          'Listening comprehension',
          'Literal meaning',
          'Inferential meaning',
          'Critical evaluation',
          'Interpreting information',
        ],
      },
      {
        name: 'Speaking and Representing',
        topics: [
          'Discussion',
          'Presentation',
          'Giving reasons',
          'Expressing viewpoints',
          'Responding to viewpoints',
        ],
      },
      {
        name: 'Reading and Viewing',
        topics: [
          'Fiction',
          'Non-fiction',
          'Poetry',
          'Comprehension',
          'Inference',
          'Interpretation',
          'Vocabulary',
          "Author's purpose",
          'Viewpoint',
          'Summary',
          'Comparing texts',
        ],
      },
      {
        name: 'Writing and Representing',
        topics: [
          'Narrative',
          'Descriptive',
          'Expository',
          'Persuasive',
          'Discursive',
          'Reports',
          'Letters',
          'Articles',
          'Functional writing',
          'Editing',
          'Revision',
        ],
      },
      {
        name: 'Grammar and Language',
        topics: [
          'Grammar',
          'Sentence structure',
          'Vocabulary',
          'Tenses',
          'Clauses',
          'Connectives',
          'Punctuation',
        ],
      },
    ],
  },
  {
    curriculum: 'singapore',
    subjectId: 'sg_english',
    subjectName: 'Singapore Primary English Language',
    grade: 6,
    gradeLabel: 'Singapore Primary 6 (P6)',
    description: 'PSLE benchmark: higher-order comprehension, tone & viewpoint analysis, argumentative letters/reports, and complex sentence synthesis.',
    strands: [
      {
        name: 'Listening and Viewing',
        topics: [
          'Listening comprehension',
          'Literal meaning',
          'Inferential meaning',
          'Critical evaluation',
          'Higher-order thinking',
          'Evaluating information',
        ],
      },
      {
        name: 'Speaking and Representing',
        topics: [
          'Discussion',
          'Presentation',
          'Giving reasons',
          'Expressing viewpoints',
          'Defending viewpoints',
          'Responding critically',
        ],
      },
      {
        name: 'Reading and Viewing',
        topics: [
          'Fiction',
          'Non-fiction',
          'Poetry',
          'Comprehension',
          'Inference',
          'Interpretation',
          'Evaluation',
          "Author's purpose",
          'Tone',
          'Viewpoint',
          'Summary',
          'Comparing texts',
        ],
      },
      {
        name: 'Writing and Representing',
        topics: [
          'Narrative',
          'Descriptive',
          'Expository',
          'Persuasive',
          'Discursive',
          'Reports',
          'Articles',
          'Letters',
          'Argument and opinion',
          'Editing',
          'Proofreading',
        ],
      },
      {
        name: 'Grammar and Language',
        topics: [
          'Complex sentences',
          'Clauses',
          'Tenses',
          'Vocabulary',
          'Connectives',
          'Punctuation',
          'Grammar',
        ],
      },
    ],
  },

  // =========================================================================
  // SINGAPORE PRIMARY - MATHEMATICS (PRIMARY 1 - 6)
  // =========================================================================
  {
    curriculum: 'singapore',
    subjectId: 'sg_math',
    subjectName: 'Singapore Primary Mathematics',
    grade: 1,
    gradeLabel: 'Singapore Primary 1 (P1)',
    description: 'CPA approach: number bonds to 10, addition/subtraction within 100, length, mass, time, 2D/3D shapes, and picture graphs.',
    strands: [
      {
        name: 'Number and Algebra',
        topics: [
          'Whole numbers',
          'Counting',
          'Number bonds',
          'Comparing numbers',
          'Ordering numbers',
          'Addition',
          'Subtraction',
          'Money',
          'Number patterns',
        ],
      },
      {
        name: 'Measurement and Geometry',
        topics: [
          'Length',
          'Mass',
          'Capacity',
          'Time',
          '2D shapes',
          '3D shapes',
          'Position',
        ],
      },
      {
        name: 'Statistics',
        topics: ['Picture graphs', 'Simple tables', 'Sorting', 'Data'],
      },
      {
        name: 'Problem Solving',
        topics: ['Simple word problems', 'Reasoning', 'Patterns'],
      },
    ],
  },
  {
    curriculum: 'singapore',
    subjectId: 'sg_math',
    subjectName: 'Singapore Primary Mathematics',
    grade: 2,
    gradeLabel: 'Singapore Primary 2 (P2)',
    description: '2-step bar models, multiplication tables of 2, 3, 4, 5, 10, fractions of a whole, and volume.',
    strands: [
      {
        name: 'Number and Algebra',
        topics: [
          'Whole numbers',
          'Place value',
          'Addition',
          'Subtraction',
          'Multiplication',
          'Division',
          'Multiplication tables',
          'Fractions',
          'Money',
          'Number patterns',
        ],
      },
      {
        name: 'Measurement and Geometry',
        topics: ['Length', 'Mass', 'Volume', 'Time', '2D shapes', '3D shapes', 'Position'],
      },
      {
        name: 'Statistics',
        topics: ['Picture graphs', 'Tables', 'Data interpretation'],
      },
      {
        name: 'Problem Solving',
        topics: ['Word problems', 'Reasoning', 'Patterns'],
      },
    ],
  },
  {
    curriculum: 'singapore',
    subjectId: 'sg_math',
    subjectName: 'Singapore Primary Mathematics',
    grade: 3,
    gradeLabel: 'Singapore Primary 3 (P3)',
    description: 'Numbers to 10,000, decimals, bar graphs, angles, perimeter and area, and heuristics problem-solving.',
    strands: [
      {
        name: 'Number and Algebra',
        topics: [
          'Whole numbers',
          'Place value',
          'Addition',
          'Subtraction',
          'Multiplication',
          'Division',
          'Fractions',
          'Decimals',
          'Money',
          'Patterns',
        ],
      },
      {
        name: 'Measurement and Geometry',
        topics: ['Length', 'Mass', 'Volume', 'Time', 'Area', 'Perimeter', 'Angles', 'Shapes'],
      },
      {
        name: 'Statistics',
        topics: ['Tables', 'Bar graphs', 'Data interpretation'],
      },
      {
        name: 'Problem Solving',
        topics: ['Word problems', 'Heuristics', 'Reasoning'],
      },
    ],
  },
  {
    curriculum: 'singapore',
    subjectId: 'sg_math',
    subjectName: 'Singapore Primary Mathematics',
    grade: 4,
    gradeLabel: 'Singapore Primary 4 (P4)',
    description: 'Factors, multiples, four operations of decimals, 8-point compass, line graphs, and multi-step heuristics.',
    strands: [
      {
        name: 'Number and Algebra',
        topics: [
          'Whole numbers',
          'Place value',
          'Four operations',
          'Factors',
          'Multiples',
          'Fractions',
          'Equivalent fractions',
          'Decimals',
          'Money',
          'Patterns',
        ],
      },
      {
        name: 'Measurement and Geometry',
        topics: ['Area', 'Perimeter', 'Angles', 'Lines', 'Shapes', 'Time', 'Volume', 'Length', 'Mass'],
      },
      {
        name: 'Statistics',
        topics: ['Tables', 'Bar graphs', 'Line graphs', 'Data interpretation'],
      },
      {
        name: 'Problem Solving',
        topics: ['Multi-step problems', 'Heuristics', 'Logical reasoning'],
      },
    ],
  },
  {
    curriculum: 'singapore',
    subjectId: 'sg_math',
    subjectName: 'Singapore Primary Mathematics',
    grade: 5,
    gradeLabel: 'Singapore Primary 5 (P5)',
    description: 'Percentages, ratio, rate, algebraic thinking, triangles and quadrilaterals, pie charts, and mathematical modelling.',
    strands: [
      {
        name: 'Number and Algebra',
        topics: [
          'Whole numbers',
          'Factors',
          'Multiples',
          'Fractions',
          'Decimals',
          'Percentages',
          'Ratio',
          'Rate',
          'Algebraic thinking',
        ],
      },
      {
        name: 'Measurement and Geometry',
        topics: [
          'Area',
          'Perimeter',
          'Volume',
          'Angles',
          'Triangles',
          'Quadrilaterals',
          'Composite shapes',
          'Coordinates',
          'Time',
        ],
      },
      {
        name: 'Statistics',
        topics: ['Data', 'Tables', 'Line graphs', 'Pie charts', 'Data interpretation'],
      },
      {
        name: 'Problem Solving',
        topics: ['Multi-step problems', 'Heuristics', 'Reasoning', 'Mathematical modelling'],
      },
    ],
  },
  {
    curriculum: 'singapore',
    subjectId: 'sg_math',
    subjectName: 'Singapore Primary Mathematics',
    grade: 6,
    gradeLabel: 'Singapore Primary 6 (P6)',
    description: 'Speed, distance, time, circles, constant difference heuristics, assumption method, and non-routine problem solving.',
    strands: [
      {
        name: 'Number and Algebra',
        topics: [
          'Whole numbers',
          'Fractions',
          'Decimals',
          'Percentages',
          'Ratio',
          'Rate',
          'Algebraic thinking',
          'Four operations',
        ],
      },
      {
        name: 'Measurement and Geometry',
        topics: [
          'Area',
          'Perimeter',
          'Volume',
          'Angles',
          'Triangles',
          'Quadrilaterals',
          'Circles',
          'Coordinates',
          'Composite figures',
        ],
      },
      {
        name: 'Statistics',
        topics: ['Tables', 'Bar graphs', 'Line graphs', 'Pie charts', 'Data interpretation'],
      },
      {
        name: 'Problem Solving',
        topics: [
          'Multi-step problems',
          'Heuristics',
          'Algebraic reasoning',
          'Logical reasoning',
          'Non-routine problems',
        ],
      },
    ],
  },

  // =========================================================================
  // SINGAPORE PRIMARY - SCIENCE (PRIMARY 3 - 6)
  // (Note: Singapore formal science begins in P3, but P1-P2 includes foundation inquiry)
  // =========================================================================
  {
    curriculum: 'singapore',
    subjectId: 'sg_science',
    subjectName: 'Singapore Primary Science',
    grade: 3,
    gradeLabel: 'Singapore Primary 3 (P3)',
    description: 'Inquiry based on 5 core themes: Diversity of living/non-living, life cycles, human digestive system, light/heat energy, and magnets.',
    strands: [
      {
        name: 'Diversity',
        topics: [
          'Living things',
          'Plants',
          'Animals',
          'Human beings',
          'Materials',
          'Classification',
          'Properties of materials',
        ],
      },
      {
        name: 'Cycles',
        topics: ['Life cycles', 'Plant life cycles', 'Animal life cycles', 'Human life cycles'],
      },
      {
        name: 'Systems',
        topics: ['Plant parts', 'Human body', 'Digestive system', 'Simple systems'],
      },
      {
        name: 'Energy',
        topics: ['Light', 'Heat', 'Sound'],
      },
      {
        name: 'Interactions',
        topics: [
          'Forces',
          'Push and pull',
          'Magnets',
          'Magnetic materials',
          'Attraction',
          'Repulsion',
          'Environment',
        ],
      },
    ],
  },
  {
    curriculum: 'singapore',
    subjectId: 'sg_science',
    subjectName: 'Singapore Primary Science',
    grade: 4,
    gradeLabel: 'Singapore Primary 4 (P4)',
    description: 'Reproduction cycles, the water cycle, simple electrical circuits, energy transfer, and magnetic forces.',
    strands: [
      {
        name: 'Diversity',
        topics: [
          'Plant diversity',
          'Animal diversity',
          'Materials',
          'Properties of materials',
          'Classification',
        ],
      },
      {
        name: 'Cycles',
        topics: ['Reproduction', 'Life cycles', 'Water cycle', 'Changes in matter'],
      },
      {
        name: 'Systems',
        topics: ['Human body systems', 'Digestive system', 'Electrical systems', 'Simple circuits'],
      },
      {
        name: 'Energy',
        topics: ['Light', 'Heat', 'Sound', 'Energy transfer'],
      },
      {
        name: 'Interactions',
        topics: [
          'Forces',
          'Magnets',
          'Magnetic force',
          'Magnetic materials',
          'Attraction',
          'Repulsion',
          'Organisms and environment',
        ],
      },
    ],
  },
  {
    curriculum: 'singapore',
    subjectId: 'sg_science',
    subjectName: 'Singapore Primary Science',
    grade: 5,
    gradeLabel: 'Singapore Primary 5 (P5)',
    description: 'Plant and human transport systems, changes of matter, electrical energy and circuits, and interdependence in ecosystems.',
    strands: [
      {
        name: 'Diversity',
        topics: ['Materials', 'Properties of materials', 'Adaptation', 'Classification'],
      },
      {
        name: 'Cycles',
        topics: ['Reproduction', 'Life cycles', 'Water cycle', 'Changes of matter'],
      },
      {
        name: 'Systems',
        topics: ['Human body', 'Plant systems', 'Electrical systems', 'Solar system'],
      },
      {
        name: 'Energy',
        topics: ['Light', 'Heat', 'Sound', 'Energy transfer', 'Electrical energy'],
      },
      {
        name: 'Interactions',
        topics: ['Forces', 'Magnets', 'Magnetic effects', 'Organisms', 'Interdependence', 'Environment'],
      },
    ],
  },
  {
    curriculum: 'singapore',
    subjectId: 'sg_science',
    subjectName: 'Singapore Primary Science',
    grade: 6,
    gradeLabel: 'Singapore Primary 6 (P6)',
    description: 'Environmental impact, adaptation for survival, cycles in nature, energy conversions, and Earth-Moon-Sun dynamics.',
    strands: [
      {
        name: 'Diversity',
        topics: ['Diversity of living things', 'Classification', 'Adaptation', 'Properties of materials'],
      },
      {
        name: 'Cycles',
        topics: ['Life cycles', 'Reproduction', 'Water cycle', 'Cycles in nature'],
      },
      {
        name: 'Systems',
        topics: [
          'Human body systems',
          'Plant systems',
          'Electrical systems',
          'Solar system',
          'Earth-Moon-Sun system',
        ],
      },
      {
        name: 'Energy',
        topics: ['Light', 'Heat', 'Sound', 'Electrical energy', 'Energy transfer'],
      },
      {
        name: 'Interactions',
        topics: [
          'Forces',
          'Magnets',
          'Magnetic effects',
          'Organisms and environment',
          'Interdependence',
          'Environmental impact',
        ],
      },
    ],
  },
  // Singapore P1 & P2 Science Foundations (Exploratory / Inquiry)
  {
    curriculum: 'singapore',
    subjectId: 'sg_science',
    subjectName: 'Singapore Primary Science',
    grade: 1,
    gradeLabel: 'Singapore Primary 1 (P1)',
    description: 'Early foundational science: exploring our senses, living vs non-living things, shapes, colors, and everyday materials.',
    strands: [
      {
        name: 'Diversity',
        topics: ['My five senses', 'Living and non-living things', 'Animals around us', 'Everyday materials'],
      },
      {
        name: 'Inquiry & Exploration',
        topics: ['Observing nature', 'Sorting by color and shape', 'Asking questions', 'Care for living things'],
      },
    ],
  },
  {
    curriculum: 'singapore',
    subjectId: 'sg_science',
    subjectName: 'Singapore Primary Science',
    grade: 2,
    gradeLabel: 'Singapore Primary 2 (P2)',
    description: 'Foundations of physical and life sciences: animal body coverings, plant parts, water uses, and pushing/pulling.',
    strands: [
      {
        name: 'Living Things & Systems',
        topics: ['Plant parts (root, stem, leaf)', 'Animal coverings (fur, scales, feathers)', 'Healthy eating plate'],
      },
      {
        name: 'Energy & Interactions',
        topics: ['Pushing and pulling forces', 'Light and darkness', 'Saving water in daily life'],
      },
    ],
  },
];

import { NEW_SUPPLEMENTARY_SYLLABUS } from './newSupplementarySyllabus';

export function getSyllabus(
  curriculum: CurriculumId,
  subjectId: SubjectId,
  grade: GradeLevel
): SubjectSyllabus | undefined {
  const existing = CURRICULUM_SYLLABUS.find(
    (s) => s.curriculum === curriculum && s.subjectId === subjectId && s.grade === grade
  );
  const suppList = NEW_SUPPLEMENTARY_SYLLABUS.filter(
    (s) => s.curriculum === curriculum && s.subjectId === subjectId && s.grade === grade
  );

  if (!existing && suppList.length === 0) return undefined;

  const base: SubjectSyllabus = existing
    ? { ...existing, strands: existing.strands.map((s) => ({ ...s, topics: [...s.topics] })) }
    : {
        curriculum: suppList[0].curriculum,
        subjectId: suppList[0].subjectId,
        subjectName: suppList[0].subjectName,
        grade: suppList[0].grade,
        gradeLabel: suppList[0].gradeLabel,
        description: suppList[0].description,
        strands: [],
      };

  for (const supp of suppList) {
    for (const st of supp.strands) {
      const exStrand = base.strands.find((s) => s.name.toLowerCase() === st.name.toLowerCase());
      if (exStrand) {
        for (const t of st.topics) {
          if (!exStrand.topics.includes(t)) exStrand.topics.push(t);
        }
      } else {
        base.strands.push({ name: st.name, topics: [...st.topics] });
      }
    }
  }

  return base;
}

export function getSyllabusForGrade(
  curriculum: CurriculumId,
  grade: GradeLevel
): SubjectSyllabus[] {
  const allForGrade: SubjectSyllabus[] = [];
  const subjects = new Set<SubjectId>();

  for (const s of CURRICULUM_SYLLABUS) {
    if (s.curriculum === curriculum && s.grade === grade) {
      subjects.add(s.subjectId);
    }
  }
  for (const s of NEW_SUPPLEMENTARY_SYLLABUS) {
    if (s.curriculum === curriculum && s.grade === grade) {
      subjects.add(s.subjectId);
    }
  }

  for (const subj of subjects) {
    const syl = getSyllabus(curriculum, subj, grade);
    if (syl) allForGrade.push(syl);
  }

  return allForGrade;
}

export function getAllSyllabiByCurriculum(curriculum: CurriculumId): SubjectSyllabus[] {
  const all: SubjectSyllabus[] = [];
  for (let g = 1; g <= 6; g++) {
    all.push(...getSyllabusForGrade(curriculum, g as GradeLevel));
  }
  return all;
}
