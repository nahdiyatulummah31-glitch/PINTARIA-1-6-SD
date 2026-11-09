import fs from 'fs';
import path from 'path';

interface QDef {
  id: string;
  subject: string;
  curriculum: string;
  grade: number;
  phase: string;
  topic: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  hint: string;
  difficulty: 'Mudah' | 'Sedang' | 'Tantangan';
}

function toTs(qs: QDef[], exportName: string): string {
  const items = qs.map(q => {
    return `  {
    id: ${JSON.stringify(q.id)},
    subject: ${JSON.stringify(q.subject)} as any,
    curriculum: ${JSON.stringify(q.curriculum)} as any,
    grade: ${q.grade} as any,
    phase: ${JSON.stringify(q.phase)},
    topic: ${JSON.stringify(q.topic)},
    question: ${JSON.stringify(q.question)},
    options: ${JSON.stringify(q.options)},
    correctIndex: ${q.correctIndex},
    explanation: ${JSON.stringify(q.explanation)},
    hint: ${JSON.stringify(q.hint)},
    difficulty: ${JSON.stringify(q.difficulty)},
  }`;
  }).join(',\n');

  return `import { Question } from '../../../types/quiz';\n\nexport const ${exportName}: Question[] = [\n${items}\n];\n`;
}

// Cambridge generator
export function generateCambridgeQuestions(): QDef[] {
  const result: QDef[] = [];
  const subjects = [
    'cam_english',
    'cam_math',
    'cam_science',
    'cam_global_perspectives',
    'cam_computing',
    'cam_art',
    'cam_music',
    'cam_pe',
    'cam_foreign_lang',
  ];

  // Specific content templates per subject
  const data: Record<string, Array<{ topic: string; q: string; opts: [string, string, string, string]; corr: number; exp: string; hint: string; diff: 'Mudah' | 'Sedang' | 'Tantangan'; g: number }>> = {
    cam_global_perspectives: [
      {
        topic: 'Water Scarcity & Conservation',
        q: 'Which action by local communities most effectively supports long-term freshwater conservation?',
        opts: ['Installing rainwater harvesting and fixing pipe leakages', 'Dumping greywater into local rivers', 'Watering lawns during the hottest part of midday', 'Paving over natural wetlands with concrete'],
        corr: 0,
        exp: 'Rainwater harvesting and repairing pipeline infrastructure directly conserve freshwater resources and recharge local aquifers.',
        hint: 'Think about capturing natural precipitation without wasting tap water.',
        diff: 'Sedang',
        g: 3,
      },
      {
        topic: 'Renewable Energy Transition',
        q: 'Why are solar and wind energy categorized as renewable energy sources rather than finite resources?',
        opts: ['They replenish naturally within a human timescale and do not deplete', 'They produce dangerous nuclear waste after generation', 'They can only be utilized once before disappearing forever', 'They require coal combustion to remain active'],
        corr: 0,
        exp: 'Renewable sources like sunlight and wind replenish naturally and will not run out over human generational scales.',
        hint: 'Consider resources that nature continuously supplies without exhausting.',
        diff: 'Mudah',
        g: 2,
      },
      {
        topic: 'Plastic Pollution in Oceans',
        q: 'What is the most serious consequence of microplastics entering marine food chains?',
        opts: ['Toxins bioaccumulate in fish and travel up the food web to apex predators and humans', 'They cause coral reefs to turn into solid rock faster', 'They make ocean water turn immediately into drinking water', 'They help sea turtles navigate across oceans easily'],
        corr: 0,
        exp: 'Microplastics absorb toxic chemical compounds and bioaccumulate as smaller marine organisms are eaten by larger predators.',
        hint: 'Consider how chemicals concentrate when smaller animals are eaten by bigger ones.',
        diff: 'Tantangan',
        g: 5,
      },
      {
        topic: 'Biodiversity & Forest Ecosystems',
        q: 'Which method best demonstrates sustainable forestry management?',
        opts: ['Selective logging paired with mandatory replanting of native trees', 'Clear-cutting an entire primary rainforest for timber', 'Replacing ancient mangrove forests with concrete docks', 'Burning brushlands repeatedly during the dry season'],
        corr: 0,
        exp: 'Selective logging and native replanting ensure that forest biodiversity and soil stability remain intact across generations.',
        hint: 'Look for an approach that balances harvesting with active replanting of indigenous species.',
        diff: 'Sedang',
        g: 4,
      },
      {
        topic: 'Fair Trade & Ethical Consumption',
        q: 'What is the primary aim of the Fairtrade certification movement worldwide?',
        opts: ['Ensuring farmers in developing nations receive fair wages and safe working conditions', 'Making products as cheap as possible by reducing safety standards', 'Encouraging single-use plastic packaging for all exports', 'Restricting farmers from selling any agricultural products'],
        corr: 0,
        exp: 'Fairtrade certification establishes minimum price floors and standards that guarantee dignified livelihood and community funds for producers.',
        hint: 'Focus on social justice, worker compensation, and equitable partnership.',
        diff: 'Sedang',
        g: 5,
      },
      {
        topic: 'Urban Heat Island Effect',
        q: 'How can modern cities mitigate the urban heat island effect caused by dense asphalt and concrete?',
        opts: ['Constructing green rooftops and planting street tree canopies', 'Removing public parks to construct more asphalt parking lots', 'Painting all buildings with heat-absorbing dark black tar', 'Banning public transport in favor of more private cars'],
        corr: 0,
        exp: 'Vegetation on green roofs and tree canopies provides natural shading and evaporative cooling, substantially lowering urban surface temperatures.',
        hint: 'Think about plants providing shade and natural evapotranspiration.',
        diff: 'Sedang',
        g: 6,
      },
      {
        topic: 'Preserving Cultural Heritage',
        q: 'Why does UNESCO designate World Heritage sites across diverse nations?',
        opts: ['To safeguard outstanding universal cultural and natural value for future generations', 'To convert historic landmarks into modern shopping arcades', 'To restrict local citizens from ever learning about their history', 'To demolish old monuments and construct identical modern towers'],
        corr: 0,
        exp: 'UNESCO World Heritage status helps protect irreplaceable historic, artistic, and ecological sites of universal value to humanity.',
        hint: 'Preservation of human identity, art, and remarkable natural phenomena.',
        diff: 'Mudah',
        g: 3,
      },
      {
        topic: 'Global Digital Divide',
        q: 'What is meant by the term "digital divide" in international community studies?',
        opts: ['The gap in access to modern information technologies and high-speed internet between regions', 'The physical boundary separating digital computers from television sets', 'The difference between laptop keyboards and touchscreen smartphones', 'The practice of turning off electronic screens at night'],
        corr: 0,
        exp: 'The digital divide describes inequalities between individuals and communities regarding access to digital technology and the internet.',
        hint: 'Access inequalities to computers, data, and digital literacy.',
        diff: 'Sedang',
        g: 4,
      },
      {
        topic: 'Food Waste Reduction',
        q: 'Which household habit contributes most effectively to reducing global food waste?',
        opts: ['Planning weekly meals and utilizing leftovers creatively before expiry', 'Purchasing double the groceries needed and discarding untasted items', 'Discarding edible imperfect fruits purely because of irregular shape', 'Storing fresh vegetables in warm sunlight so they spoil quicker'],
        corr: 0,
        exp: 'Meal planning, proper refrigeration, and using leftovers prevent household food spoilage and landfill greenhouse emissions.',
        hint: 'Smart purchasing and responsible consumption before food deteriorates.',
        diff: 'Mudah',
        g: 2,
      },
      {
        topic: 'Endangered Species Protection',
        q: 'What is the role of wildlife corridors connecting fragmented forest reserves?',
        opts: ['They allow isolated animal populations to migrate safely, find food, and mate without human collisions', 'They fence animals inside small cages permanently', 'They build multi-lane expressways across nature parks', 'They harvest all native trees along riverbanks'],
        corr: 0,
        exp: 'Corridors reconnect fragmented habitats, maintaining genetic diversity and safe migration paths across landscapes.',
        hint: 'Bridges or ribbons of green habitat connecting separated wilderness patches.',
        diff: 'Sedang',
        g: 4,
      },
      {
        topic: 'Public Health & Clean Sanitation',
        q: 'According to the United Nations Sustainable Development Goals (SDG 6), access to clean water and sanitation is essential because it:',
        opts: ['Drastically reduces waterborne infectious diseases and enables children to attend school regularly', 'Increases the sale of plastic disposable water bottles', 'Prevents trees from absorbing moisture from soil', 'Eliminates the need for handwashing in healthcare clinics'],
        corr: 0,
        exp: 'Clean water and adequate sanitation break the transmission cycle of cholera, dysentery, and other waterborne illnesses, improving community welfare.',
        hint: 'Think about illness prevention and school attendance.',
        diff: 'Mudah',
        g: 1,
      },
      {
        topic: 'International Collaboration & Peace',
        q: 'When nations sign international treaties to protect migratory bird flyways, they demonstrate that:',
        opts: ['Environmental stewardship requires multilateral cross-border cooperation', 'Migratory birds only belong to one individual country', 'Borders prevent all animals from moving naturally', 'Individual nations should ignore environmental issues entirely'],
        corr: 0,
        exp: 'Ecosystems and wildlife movements cross geopolitical borders, necessitating shared treaties and international collaboration.',
        hint: 'Birds fly across multiple countries along global flight paths.',
        diff: 'Sedang',
        g: 5,
      },
      {
        topic: 'Circular Economy Concepts',
        q: 'How does a circular economy model differ fundamentally from the traditional "take-make-dispose" linear economy?',
        opts: ['It designs products for durability, reuse, refurbishment, and recycling to eliminate waste', 'It manufactures single-use goods meant to be buried immediately in landfills', 'It avoids recycling materials completely to save processing time', 'It uses only non-recyclable toxic composites in consumer goods'],
        corr: 0,
        exp: 'The circular economy aims to keep materials at their highest value for as long as possible through reuse, repair, and remanufacturing.',
        hint: 'Closing the loop through recycling and repair instead of landfill dumping.',
        diff: 'Tantangan',
        g: 6,
      },
      {
        topic: 'Climate Change Adaptation',
        q: 'Which adaptation strategy helps coastal agricultural regions withstand sea level rise and saltwater intrusion?',
        opts: ['Cultivating salt-tolerant crop varieties and constructing mangrove buffers', 'Pumping saltwater directly onto freshwater irrigation canals', 'Cutting down protective barrier islands and reefs', 'Banning all farmers from inspecting their crop fields'],
        corr: 0,
        exp: 'Salt-tolerant crops (halophytes) and natural mangrove surge breaks allow coastal communities to adapt to encroaching saline tides.',
        hint: 'Plants that thrive despite higher salinity and natural coastline buffers.',
        diff: 'Tantangan',
        g: 6,
      },
      {
        topic: 'Community Empathy & Inclusion',
        q: 'In an inclusive classroom or community, universal design principles require that public spaces:',
        opts: ['Are easily accessible to people of all physical abilities, including ramp access and tactile pathways', 'Exclude anyone requiring wheelchair ramps or sensory adjustments', 'Have only steep staircases with no elevators or handrails', 'Prohibit audible announcements at pedestrian crossings'],
        corr: 0,
        exp: 'Universal design ensures environment and services can be accessed and used to the greatest extent possible by all people regardless of disability.',
        hint: 'Think of wheelchair ramps, elevators, and inclusive physical design.',
        diff: 'Mudah',
        g: 1,
      },
    ],
  };

  return result;
}
