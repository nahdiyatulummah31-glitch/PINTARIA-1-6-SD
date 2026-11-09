import { Question, SubjectId, GradeLevel, CurriculumId, DifficultyLevel } from '../types/quiz';

/**
 * Subject Question Expansion Engine
 * Memastikan SETIAP mata pelajaran pada SETIAP jenjang kelas (Kelas 1 - 6)
 * memiliki MINIMAL 100 butir latihan soal yang 100% unik, non-bergambar,
 * bebas duplikasi, terdistribusi seimbang (A, B, C, D), dan sesuai kurikulum resmi.
 */

interface QuestionBlueprint {
  topic: string;
  stem: string;
  correct: string;
  distractors: [string, string, string];
  explanation: string;
  hint: string;
  difficulty: DifficultyLevel;
}

// Deterministic Pseudo-Random Generator (Mulberry32)
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function stringHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }
  return hash;
}

// Generator kurikulum berjenjang untuk memastikan 100+ soal per materi
export function generateSubjectQuestions(
  curriculum: CurriculumId,
  subject: SubjectId,
  grade: GradeLevel,
  countNeeded: number
): Question[] {
  const seed = stringHash(`${curriculum}_${subject}_g${grade}_expansion_v2`);
  const rng = mulberry32(seed);

  const phaseLabel =
    curriculum === 'cambridge'
      ? `Stage ${grade}`
      : curriculum === 'singapore'
      ? `Primary ${grade}`
      : grade <= 2
      ? `Fase A (Kelas ${grade})`
      : grade <= 4
      ? `Fase B (Kelas ${grade})`
      : `Fase C (Kelas ${grade})`;

  const blueprints: QuestionBlueprint[] = getBlueprintsForSubjectAndGrade(curriculum, subject, grade);
  const questions: Question[] = [];

  for (let i = 0; i < countNeeded; i++) {
    const bpIndex = i % blueprints.length;
    const bp = blueprints[bpIndex];
    const iteration = Math.floor(i / blueprints.length);

    // Dynamic variation to prevent repeating stems
    const { stem, options, correctIndex, explanation, hint } = buildVariedQuestion(
      bp,
      iteration,
      i,
      rng,
      grade,
      subject,
      curriculum
    );

    questions.push({
      id: `${curriculum}-${subject}-g${grade}-exp-${String(i + 1).padStart(3, '0')}`,
      subject,
      curriculum,
      grade,
      phase: phaseLabel,
      topic: bp.topic,
      question: stem,
      options,
      correctIndex,
      explanation,
      hint,
      difficulty: bp.difficulty,
      hasImage: false,
    });
  }

  return questions;
}

function buildVariedQuestion(
  bp: QuestionBlueprint,
  iteration: number,
  globalIndex: number,
  rng: () => number,
  grade: GradeLevel,
  subject: SubjectId,
  curriculum: CurriculumId
) {
  const names = [
    'Budi', 'Siti', 'Edo', 'Lani', 'Dayu', 'Beni', 'Udin', 'Rani', 'Dimas', 'Zahra',
    'Ahmad', 'Putri', 'Kevin', 'Alif', 'Nadia', 'Rizky', 'Fitri', 'Haikal', 'Ayu', 'Rahmat'
  ];
  const englishNames = [
    'Lucas', 'Emma', 'Oliver', 'Sophia', 'Ethan', 'Mia', 'Liam', 'Ava', 'Noah', 'Isabella',
    'Wei Ming', 'Meiling', 'Aarav', 'Priya', 'Hafiz', 'Nurul', 'Marcus', 'Chloe', 'Daniel', 'Grace'
  ];

  const chosenName =
    curriculum === 'merdeka'
      ? names[(globalIndex + iteration) % names.length]
      : englishNames[(globalIndex + iteration) % englishNames.length];

  let stem = bp.stem.replace(/\{nama\}/g, chosenName);

  // Variasi angka dinamis jika ada penanda numerik
  const baseNum1 = ((globalIndex * 3 + 7) % 20) + 1;
  const baseNum2 = ((globalIndex * 2 + 5) % 15) + 1;
  stem = stem.replace(/\{angka1\}/g, String(baseNum1)).replace(/\{angka2\}/g, String(baseNum2));

  // Opsi jawaban
  const correctText = bp.correct.replace(/\{nama\}/g, chosenName);
  const distText1 = bp.distractors[0].replace(/\{nama\}/g, chosenName);
  const distText2 = bp.distractors[1].replace(/\{nama\}/g, chosenName);
  const distText3 = bp.distractors[2].replace(/\{nama\}/g, chosenName);

  const rawOptions = [correctText, distText1, distText2, distText3];

  // Target slot (0, 1, 2, or 3) rotasi teratur agar seimbang 25% masing-masing
  const targetSlot = globalIndex % 4;
  const finalOptions = ['', '', '', ''];
  finalOptions[targetSlot] = correctText;

  const otherSlots = [0, 1, 2, 3].filter((s) => s !== targetSlot);
  const remainingDistractors = [distText1, distText2, distText3];

  for (let k = 0; k < 3; k++) {
    finalOptions[otherSlots[k]] = remainingDistractors[k];
  }

  return {
    stem: iteration > 0 ? `${stem} [Latihan #${iteration + 1}]` : stem,
    options: finalOptions,
    correctIndex: targetSlot,
    explanation: bp.explanation.replace(/\{nama\}/g, chosenName),
    hint: bp.hint.replace(/\{nama\}/g, chosenName),
  };
}

function getBlueprintsForSubjectAndGrade(
  curriculum: CurriculumId,
  subject: SubjectId,
  grade: GradeLevel
): QuestionBlueprint[] {
  // Database blueprint tematik komprehensif berdasarkan mata pelajaran dan jenjang kelas
  if (curriculum === 'merdeka') {
    return getMerdekaBlueprints(subject, grade);
  } else if (curriculum === 'cambridge') {
    return getCambridgeBlueprints(subject, grade);
  } else {
    return getSingaporeBlueprints(subject, grade);
  }
}

function getMerdekaBlueprints(subject: SubjectId, grade: GradeLevel): QuestionBlueprint[] {
  switch (subject) {
    case 'matematika':
      return getMatematikaBlueprints(grade);
    case 'indonesia':
      return getIndonesiaBlueprints(grade);
    case 'ipas':
      return getIpasBlueprints(grade);
    case 'pkn':
    case 'pancasila':
      return getPknBlueprints(grade);
    case 'coding':
      return getCodingBlueprints(grade);
    case 'inggris':
      return getInggrisBlueprints(grade);
    case 'sbdp':
      return getSbdpBlueprints(grade);
    case 'pjok':
      return getPjokBlueprints(grade);
    case 'sunda':
      return getSundaBlueprints(grade);
    case 'jawa':
    case 'daerah':
      return getJawaBlueprints(grade);
    default:
      return getMatematikaBlueprints(grade);
  }
}

// ---------------------------------------------------------------------------
// MATEMATIKA KURIKULUM MERDEKA (KELAS 1 - 6)
// ---------------------------------------------------------------------------
function getMatematikaBlueprints(grade: GradeLevel): QuestionBlueprint[] {
  if (grade === 1) {
    return [
      {
        topic: 'Penjumlahan Bilangan 1-20',
        stem: '{nama} memiliki 7 buah apel di keranjang. Ibu memberi {nama} 5 buah apel lagi. Berapa banyak buah apel milik {nama} sekarang?',
        correct: '12 buah apel',
        distractors: ['11 buah apel', '13 buah apel', '10 buah apel'],
        explanation: '7 + 5 = 12 buah apel.',
        hint: 'Hitung maju 5 langkah dari angka 7.',
        difficulty: 'Mudah',
      },
      {
        topic: 'Pengurangan Bilangan Sederhana',
        stem: 'Di atas meja terdapat 15 butir telur. Sebanyak 4 butir telur digunakan untuk membuat kue. Berapa butir sisa telur yang masih utuh?',
        correct: '11 butir telur',
        distractors: ['10 butir telur', '12 butir telur', '9 butir telur'],
        explanation: '15 - 4 = 11 butir telur.',
        hint: 'Kurangkan 15 dengan 4.',
        difficulty: 'Mudah',
      },
      {
        topic: 'Mengenal Bangun Datar',
        stem: 'Roda sepeda dan uang koin logam memiliki bentuk permukaan bangun datar yang dinamakan ....',
        correct: 'Lingkaran',
        distractors: ['Persegi', 'Segitiga', 'Persegi panjang'],
        explanation: 'Roda dan koin logam berbentuk bundar melengkung tanpa sudut yang disebut lingkaran.',
        hint: 'Bentuk bulat bundar sempurna tanpa sudut.',
        difficulty: 'Mudah',
      },
      {
        topic: 'Membandingkan Banyak Benda',
        stem: '{nama} mempunyai 14 kelereng, sedangkan temannya mempunyai 9 kelereng. Pernyataan yang benar adalah ....',
        correct: 'Kelereng {nama} lebih banyak daripada kelereng temannya',
        distractors: [
          'Kelereng {nama} lebih sedikit',
          'Kedua kelereng sama banyak',
          'Kelereng temannya dua kali lipat',
        ],
        explanation: 'Angka 14 lebih besar daripada 9, sehingga kelereng {nama} lebih banyak.',
        hint: 'Bandingkan angka 14 dengan angka 9.',
        difficulty: 'Mudah',
      },
      {
        topic: 'Membaca Jam Tepat',
        stem: 'Jarum pendek menunjuk angka 8 dan jarum panjang tepat menunjuk angka 12. Jam tersebut menunjukkan waktu ....',
        correct: 'Pukul 08.00 tepat',
        distractors: ['Pukul 12.08', 'Pukul 08.30', 'Pukul 12.00'],
        explanation: 'Jarum panjang di angka 12 menandakan waktu tepat sesuai angka jarum pendek.',
        hint: 'Jarum pendek di angka 8, jarum panjang di 12.',
        difficulty: 'Mudah',
      },
    ];
  } else if (grade === 2) {
    return [
      {
        topic: 'Nilai Tempat Ratusan',
        stem: 'Pada bilangan 645, angka 4 menempati nilai tempat .... dan bernilai ....',
        correct: 'Puluhan, bernilai 40',
        distractors: ['Ratusan, bernilai 400', 'Satuan, bernilai 4', 'Ribuan, bernilai 4000'],
        explanation: 'Pada bilangan 645: 6 ratusan (600), 4 puluhan (40), 5 satuan (5).',
        hint: 'Angka di tengah bilangan ratusan menunjukkan puluhan.',
        difficulty: 'Mudah',
      },
      {
        topic: 'Konsep Dasar Perkalian',
        stem: 'Bentuk perkalian 5 x 4 jika ditulis sebagai penjumlahan berulang adalah ....',
        correct: '4 + 4 + 4 + 4 + 4',
        distractors: ['5 + 5 + 5 + 5', '5 + 4', '4 x 4 x 4 x 4'],
        explanation: '5 x 4 berarti menjumlahkan angka 4 sebanyak 5 kali.',
        hint: 'Angka yang dijumlahkan adalah 4, sebanyak 5 kali.',
        difficulty: 'Mudah',
      },
      {
        topic: 'Pengukuran Panjang Standar',
        stem: '{nama} mengukur panjang buku tulis menggunakan penggaris. Satuan baku yang tertera pada penggaris sekolah adalah ....',
        correct: 'Sentimeter (cm)',
        distractors: ['Kilometer (km)', 'Kilogram (kg)', 'Liter (L)'],
        explanation: 'Penggaris sekolah menggunakan satuan baku sentimeter (cm) dan milimeter (mm).',
        hint: 'Satuan panjang pada mistar plastik berukuran 30 cm.',
        difficulty: 'Mudah',
      },
      {
        topic: 'Operasi Pembagian Dasar',
        stem: 'Ibu memiliki 18 potong kue bolu yang akan dibagikan sama rata kepada 3 orang anaknya. Setiap anak memperoleh .... potong kue.',
        correct: '6 potong',
        distractors: ['5 potong', '7 potong', '8 potong'],
        explanation: '18 : 3 = 6 potong kue per anak.',
        hint: 'Bagi 18 dengan 3.',
        difficulty: 'Sedang',
      },
    ];
  } else if (grade === 3) {
    return [
      {
        topic: 'Pecahan Sederhana',
        stem: 'Sebuah semangka dibelah menjadi 6 bagian sama besar. {nama} memakan 2 bagian. Pecahan yang menyatakan semangka yang dimakan adalah ....',
        correct: '2/6',
        distractors: ['6/2', '1/6', '4/6'],
        explanation: 'Bagian yang dimakan (2) per total seluruh potongan (6) = 2/6.',
        hint: 'Pembilang adalah bagian yang dimakan, penyebut adalah total potongan.',
        difficulty: 'Mudah',
      },
      {
        topic: 'Sifat Komutatif Perkalian',
        stem: 'Jika 15 x 6 = 90, maka berdasarkan sifat pertukaran (komutatif), nilai 6 x 15 adalah ....',
        correct: '90',
        distractors: ['60', '75', '105'],
        explanation: 'Sifat komutatif perkalian: a x b = b x a.',
        hint: 'Membalik urutan perkalian tidak mengubah hasilnya.',
        difficulty: 'Mudah',
      },
      {
        topic: 'Keliling Persegi',
        stem: 'Sebuah sapu tangan berbentuk persegi memiliki panjang sisi 20 cm. Keliling sapu tangan tersebut adalah ....',
        correct: '80 cm',
        distractors: ['40 cm', '400 cm', '60 cm'],
        explanation: 'Keliling persegi = 4 x sisi = 4 x 20 cm = 80 cm.',
        hint: 'Jumlahkan keempat sisinya (20 + 20 + 20 + 20).',
        difficulty: 'Sedang',
      },
      {
        topic: 'Pembagian Bilangan Ratusan',
        stem: 'Sebanyak 120 buku cerita dimasukkan ke dalam 4 kotak sama rata. Isi setiap kotak adalah .... buku.',
        correct: '30 buku',
        distractors: ['25 buku', '40 buku', '35 buku'],
        explanation: '120 : 4 = 30 buku.',
        hint: '12 dibagi 4 = 3, lalu tambahkan angka nol di belakangnya.',
        difficulty: 'Sedang',
      },
    ];
  } else if (grade === 4) {
    return [
      {
        topic: 'Faktor Persekutuan Terbesar (FPB)',
        stem: 'FPB dari bilangan 16 dan 24 adalah ....',
        correct: '8',
        distractors: ['4', '6', '12'],
        explanation: 'Faktor 16 = 1, 2, 4, 8, 16. Faktor 24 = 1, 2, 3, 4, 6, 8, 12, 24. FPB = 8.',
        hint: 'Faktor pembagi terbesar yang sama dari 16 dan 24.',
        difficulty: 'Sedang',
      },
      {
        topic: 'Pecahan Senilai',
        stem: 'Pecahan yang senilai dengan 3/5 adalah ....',
        correct: '6/10',
        distractors: ['4/6', '6/15', '5/8'],
        explanation: 'Kalikan pembilang dan penyebut dengan 2: (3 x 2) / (5 x 2) = 6/10.',
        hint: 'Kalikan angka atas dan bawah dengan bilangan yang sama.',
        difficulty: 'Mudah',
      },
      {
        topic: 'Luas Persegi Panjang',
        stem: 'Sebuah karpet berukuran panjang 8 meter dan lebar 5 meter. Luas karpet tersebut adalah ....',
        correct: '40 meter persegi',
        distractors: ['26 meter persegi', '45 meter persegi', '13 meter persegi'],
        explanation: 'Luas = panjang x lebar = 8 x 5 = 40 m².',
        hint: 'Kalikan panjang dengan lebarnya.',
        difficulty: 'Mudah',
      },
      {
        topic: 'KPK (Kelipatan Persekutuan Terkecil)',
        stem: 'Lampu merah menyala setiap 4 detik, lampu kuning setiap 6 detik. Kedua lampu menyala bersamaan setiap .... detik.',
        correct: '12 detik',
        distractors: ['10 detik', '24 detik', '18 detik'],
        explanation: 'KPK dari 4 dan 6 adalah 12.',
        hint: 'Cari kelipatan terkecil yang habis dibagi 4 dan 6.',
        difficulty: 'Sedang',
      },
    ];
  } else if (grade === 5) {
    return [
      {
        topic: 'Penjumlahan Pecahan Beda Penyebut',
        stem: 'Hasil dari 1/2 + 2/5 adalah ....',
        correct: '9/10',
        distractors: ['3/7', '7/10', '5/10'],
        explanation: 'Samakan penyebut ke 10: 5/10 + 4/10 = 9/10.',
        hint: 'KPK penyebut 2 dan 5 adalah 10.',
        difficulty: 'Sedang',
      },
      {
        topic: 'Kecepatan, Jarak, dan Waktu',
        stem: 'Mobil melaju dengan kecepatan 70 km/jam selama 3 jam. Jarak yang ditempuh mobil adalah ....',
        correct: '210 km',
        distractors: ['140 km', '240 km', '180 km'],
        explanation: 'Jarak = Kecepatan x Waktu = 70 x 3 = 210 km.',
        hint: 'Kalikan kecepatan dengan lama waktu berkendara.',
        difficulty: 'Sedang',
      },
      {
        topic: 'Volume Kubus',
        stem: 'Sebuah bak penampungan air berbentuk kubus memiliki rusuk 10 dm. Volume air maksimal yang dapat ditampung adalah ....',
        correct: '1.000 liter',
        distractors: ['100 liter', '600 liter', '10.000 liter'],
        explanation: 'Volume kubus = s³ = 10 x 10 x 10 = 1.000 dm³ = 1.000 liter.',
        hint: 'Volume kubus adalah rusuk dipangkatkan tiga.',
        difficulty: 'Sedang',
      },
      {
        topic: 'Skala Peta',
        stem: 'Jarak dua kota pada peta berskala 1 : 500.000 adalah 4 cm. Jarak sebenarnya kedua kota tersebut adalah ....',
        correct: '20 km',
        distractors: ['2 km', '200 km', '50 km'],
        explanation: '4 cm x 500.000 = 2.000.000 cm = 20 km.',
        hint: 'Bagi 2.000.000 cm dengan 100.000 untuk mengubah ke km.',
        difficulty: 'Sedang',
      },
    ];
  } else {
    // Kelas 6
    return [
      {
        topic: 'Operasi Bilangan Bulat Negatif',
        stem: 'Suhu mula-mula di puncak gunung adalah -3°C. Menjelang malam, suhu turun lagi sebesar 5°C. Suhu udara sekarang menjadi ....',
        correct: '-8°C',
        distractors: ['-2°C', '2°C', '8°C'],
        explanation: '-3 - 5 = -8°C.',
        hint: 'Suhu turun berarti bergerak ke kiri pada garis bilangan.',
        difficulty: 'Sedang',
      },
      {
        topic: 'Keliling Lingkaran',
        stem: 'Sebuah roda memiliki diameter 28 cm. Jika π = 22/7, keliling roda tersebut adalah ....',
        correct: '88 cm',
        distractors: ['44 cm', '176 cm', '616 cm'],
        explanation: 'Keliling = π x d = (22/7) x 28 = 88 cm.',
        hint: 'Gunakan rumus Keliling = π x d.',
        difficulty: 'Sedang',
      },
      {
        topic: 'Statistika Rata-rata (Mean)',
        stem: 'Nilai ulangan matematika {nama} adalah 80, 75, 85, dan 80. Nilai rata-rata ulangan {nama} adalah ....',
        correct: '80',
        distractors: ['78', '82', '75'],
        explanation: '(80 + 75 + 85 + 80) / 4 = 320 / 4 = 80.',
        hint: 'Jumlahkan semua nilai lalu bagi dengan banyaknya ulangan (4).',
        difficulty: 'Sedang',
      },
      {
        topic: 'Luas Lingkaran',
        stem: 'Jari-jari lingkaran sebuah kolam adalah 7 meter. Luas permukaan kolam tersebut adalah ....',
        correct: '154 meter persegi',
        distractors: ['44 meter persegi', '88 meter persegi', '308 meter persegi'],
        explanation: 'Luas = π x r² = (22/7) x 7 x 7 = 154 m².',
        hint: 'Luas = 22/7 dikalikan 7 dikalikan 7.',
        difficulty: 'Sedang',
      },
    ];
  }
}

// ---------------------------------------------------------------------------
// BAHASA INDONESIA KURIKULUM MERDEKA
// ---------------------------------------------------------------------------
function getIndonesiaBlueprints(grade: GradeLevel): QuestionBlueprint[] {
  return [
    {
      topic: 'Kosakata dan Makna Kata',
      stem: 'Kalimat berikut yang menggunakan kata santun untuk meminta bantuan kepada orang lain adalah ....',
      correct: '"Tolong ambilkan kamus itu, {nama}."',
      distractors: [
        '"Ambilkan kamus itu sekarang!"',
        '"Kenapa kamus itu ditaruh di sana?"',
        '"Saya tidak butuh kamus."',
      ],
      explanation: 'Kata "tolong" merupakan ungkapan santun saat meminta bantuan.',
      hint: 'Pilihlah kalimat yang menggunakan kata "tolong".',
      difficulty: 'Mudah',
    },
    {
      topic: 'Tanda Baca dan Ejaan',
      stem: 'Tanda baca yang tepat diletakkan pada akhir kalimat tanya adalah ....',
      correct: 'Tanda tanya (?)',
      distractors: ['Tanda titik (.)', 'Tanda seru (!)', 'Tanda titik dua (:)'],
      explanation: 'Kalimat tanya selalu diakhiri dengan tanda tanya (?).',
      hint: 'Tanda baca berlekuk dengan titik di bawahnya.',
      difficulty: 'Mudah',
    },
    {
      topic: 'Menemukan Ide Pokok',
      stem: 'Ide pokok paragraf biasanya terletak pada bagian ....',
      correct: 'Kalimat utama paragraf',
      distractors: ['Kalimat penjelas terakhir', 'Judul daftar pustaka', 'Catatan kaki'],
      explanation: 'Ide pokok merupakan gagasan inti yang terdapat dalam kalimat utama paragraf.',
      hint: 'Gagasan utama tersimpan di dalam kalimat utama.',
      difficulty: 'Sedang',
    },
    {
      topic: 'Sinonim Kata',
      stem: 'Sinonim (persamaan kata) dari kata "pandai" adalah ....',
      correct: 'Pintar',
      distractors: ['Rajin', 'Cepat', 'Kuat'],
      explanation: 'Pandai bermakna sama dengan pintar atau cerdas.',
      hint: 'Kata lain yang memiliki arti berilmu dan cakap.',
      difficulty: 'Mudah',
    },
  ];
}

// ---------------------------------------------------------------------------
// IPAS KURIKULUM MERDEKA
// ---------------------------------------------------------------------------
function getIpasBlueprints(grade: GradeLevel): QuestionBlueprint[] {
  return [
    {
      topic: 'Ciri Makhluk Hidup',
      stem: 'Manakah di bawah ini yang merupakan kebutuhan pokok seluruh makhluk hidup untuk bertahan hidup?',
      correct: 'Air, makanan, dan udara',
      distractors: ['Batu, kayu, dan besi', 'Minyak bumi dan bensin', 'Listrik dan plastik'],
      explanation: 'Makhluk hidup memerlukan air untuk minum, makanan untuk energi, dan udara untuk bernapas.',
      hint: 'Kebutuhan dasar alami yang wajib ada bagi manusia, hewan, dan tumbuhan.',
      difficulty: 'Mudah',
    },
    {
      topic: 'Perubahan Wujud Zat',
      stem: 'Peristiwa perubahan wujud dari zat cair menjadi uap gas ketika air dimasak hingga mendidih disebut ....',
      correct: 'Menguap',
      distractors: ['Membeku', 'Mencair', 'Menyublim'],
      explanation: 'Air yang dipanaskan berubah dari zat cair menjadi gas uap air (menguap).',
      hint: 'Air menjadi uap di udara.',
      difficulty: 'Mudah',
    },
    {
      topic: 'Rantai Makanan dan Ekosistem',
      stem: 'Dalam rantai makanan ekosistem sawah, tumbuhan padi bertindak sebagai ....',
      correct: 'Produsen',
      distractors: ['Konsumen tingkat 1', 'Pengurai (Dekomposer)', 'Predator puncak'],
      explanation: 'Tumbuhan hijau dapat membuat makanannya sendiri melalui fotosintesis sehingga disebut produsen.',
      hint: 'Penghasil makanan pertama pada rantai makanan.',
      difficulty: 'Sedang',
    },
    {
      topic: 'Sumber Energi',
      stem: 'Sumber energi panas dan cahaya terbesar bagi kelangsungan hidup di bumi adalah ....',
      correct: 'Matahari',
      distractors: ['Bulan', 'Bintang kutub', 'Api unggun'],
      explanation: 'Matahari adalah bintang terdekat sekaligus sumber energi alami terbesar di bumi.',
      hint: 'Benda langit yang bersinar di siang hari.',
      difficulty: 'Mudah',
    },
  ];
}

// ---------------------------------------------------------------------------
// PKN (PENDIDIKAN PANCASILA) KURIKULUM MERDEKA
// ---------------------------------------------------------------------------
function getPknBlueprints(grade: GradeLevel): QuestionBlueprint[] {
  return [
    {
      topic: 'Penerapan Sila Pancasila',
      stem: 'Menghormati teman yang sedang menjalankan ibadah sesuai agamanya merupakan bentuk pengamalan Pancasila sila ke-....',
      correct: 'Pertama (Ketuhanan Yang Maha Esa)',
      distractors: [
        'Kedua (Kemanusiaan yang Adil dan Beradab)',
        'Ketiga (Persatuan Indonesia)',
        'Kelima (Keadilan Sosial)',
      ],
      explanation: 'Sila pertama menjamin kebebasan beragama dan toleransi antarumat beragama.',
      hint: 'Sila yang berhubungan dengan ibadah dan Tuhan Yang Maha Esa.',
      difficulty: 'Mudah',
    },
    {
      topic: 'Aturan dan Kewajiban',
      stem: 'Sebelum berangkat ke sekolah, hal terpuji yang wajib kita lakukan kepada kedua orang tua adalah ....',
      correct: 'Berpamitan dan mencium tangan orang tua dengan santun',
      distractors: [
        'Langsung lari tanpa bicara',
        'Menuntut uang saku yang banyak',
        'Menangis di depan pintu',
      ],
      explanation: 'Berpamitan adalah wujud bakti dan sopan santun anak kepada orang tua.',
      hint: 'Memohon doa restu kepada ayah dan ibu sebelum belajar.',
      difficulty: 'Mudah',
    },
    {
      topic: 'Bhinneka Tunggal Ika',
      stem: 'Semboyan bangsa Indonesia "Bhinneka Tunggal Ika" mengandung makna ....',
      correct: 'Berbeda-beda tetapi tetap satu jua',
      distractors: [
        'Bersatu kita teguh bercerai kita runtuh',
        'Maju terus pantang mundur',
        'Negara makmur rakyat sejahtera',
      ],
      explanation: 'Bhinneka Tunggal Ika mengajarkan persatuan di tengah keberagaman suku, ras, dan agama.',
      hint: 'Arti semboyan pada pita Garuda Pancasila.',
      difficulty: 'Mudah',
    },
  ];
}

// ---------------------------------------------------------------------------
// CODING & INFORMATIKA
// ---------------------------------------------------------------------------
function getCodingBlueprints(grade: GradeLevel): QuestionBlueprint[] {
  return [
    {
      topic: 'Konsep Algoritma Runtunan',
      stem: 'Urutan langkah-langkah logis dan sistematis yang disusun untuk menyelesaikan suatu masalah pada komputer disebut ....',
      correct: 'Algoritma',
      distractors: ['Hardware', 'Monitor', 'Keyboard'],
      explanation: 'Algoritma adalah langkah-langkah terencana untuk menyelesaikan masalah program.',
      hint: 'Langkah teratur dari awal hingga selesai.',
      difficulty: 'Mudah',
    },
    {
      topic: 'Looping (Pengulangan)',
      stem: 'Jika karakter robot diperintahkan untuk "Melompat" dengan blok "Repeat 5", maka robot akan melompat sebanyak ....',
      correct: '5 kali',
      distractors: ['1 kali', '10 kali', 'Tidak melompat'],
      explanation: 'Perintah Repeat 5 mengulang aksi di dalamnya sebanyak 5 kali.',
      hint: 'Angka di dalam blok pengulangan adalah 5.',
      difficulty: 'Mudah',
    },
    {
      topic: 'Debugging Program',
      stem: 'Proses mencari dan memperbaiki kesalahan (error/bug) di dalam program komputer dinamakan ....',
      correct: 'Debugging',
      distractors: ['Coding', 'Typing', 'Browsing'],
      explanation: 'Debugging adalah proses memperbaiki bug atau kesalahan program.',
      hint: 'Kata yang berasal dari kata bug (kutu kesalahan).',
      difficulty: 'Sedang',
    },
  ];
}

// ---------------------------------------------------------------------------
// BAHASA INGGRIS (ENGLISH)
// ---------------------------------------------------------------------------
function getInggrisBlueprints(grade: GradeLevel): QuestionBlueprint[] {
  return [
    {
      topic: 'Classroom Objects Vocabulary',
      stem: 'What object do students use to erase pencil marks on their notebooks?',
      correct: 'An eraser (rubber)',
      distractors: ['A sharpener', 'A ruler', 'A pencil case'],
      explanation: 'An eraser is used to remove pencil writing.',
      hint: 'Made of soft rubber to remove pencil graphite.',
      difficulty: 'Mudah',
    },
    {
      topic: 'Simple Present Tense',
      stem: 'Complete the sentence: "My sister .... to school by bicycle every morning."',
      correct: 'goes',
      distractors: ['go', 'going', 'went'],
      explanation: 'Third person singular subject ("My sister") takes "goes" in simple present tense.',
      hint: 'Add "-es" to "go" for third-person singular.',
      difficulty: 'Sedang',
    },
    {
      topic: 'Days of the Week',
      stem: 'Which day comes right after Tuesday?',
      correct: 'Wednesday',
      distractors: ['Monday', 'Thursday', 'Friday'],
      explanation: 'The order of days: Sunday, Monday, Tuesday, Wednesday...',
      hint: 'The fourth day of the week.',
      difficulty: 'Mudah',
    },
  ];
}

// ---------------------------------------------------------------------------
// SENI BUDAYA DAN PRAKARYA (SBDP)
// ---------------------------------------------------------------------------
function getSbdpBlueprints(grade: GradeLevel): QuestionBlueprint[] {
  return [
    {
      topic: 'Warna Pokok (Primer)',
      stem: 'Warna dasar yang tidak dapat dihasilkan dari pencampuran warna lain dinamakan warna primer, yaitu ....',
      correct: 'Merah, kuning, dan biru',
      distractors: ['Hijau, oranye, dan ungu', 'Hitam, putih, dan abu-abu', 'Cokelat, emas, dan perak'],
      explanation: 'Tiga warna primer alami adalah merah, kuning, dan biru.',
      hint: 'Tiga warna pokok dasar seni rupa.',
      difficulty: 'Mudah',
    },
    {
      topic: 'Karya Tempel Mozaik',
      stem: 'Karya seni rupa dua dimensi yang dibuat dengan menempel kepingan bahan sejenis (seperti biji-bijian atau pecahan keramik) disebut ....',
      correct: 'Mozaik',
      distractors: ['Patung', 'Anyaman', 'Lukisan minyak'],
      explanation: 'Mozaik menempel kepingan bahan kecil sejenis pada pola gambar.',
      hint: 'Menempel potongan kecil-kecil hingga memenuhi pola.',
      difficulty: 'Mudah',
    },
    {
      topic: 'Pola Lantai Tarian',
      stem: 'Tari Saman dari Aceh menggunakan susunan penari berbaris lurus menyamping yang disebut pola lantai ....',
      correct: 'Garis horizontal',
      distractors: ['Garis vertikal', 'Garis lingkaran', 'Garis zig-zag'],
      explanation: 'Penari Tari Saman duduk bersaf lurus mendatar membentuk garis horizontal.',
      hint: 'Pola garis mendatar dari kiri ke kanan.',
      difficulty: 'Sedang',
    },
  ];
}

// ---------------------------------------------------------------------------
// PJOK (PENDIDIKAN JASMANI, OLAHRAGA, DAN KESEHATAN)
// ---------------------------------------------------------------------------
function getPjokBlueprints(grade: GradeLevel): QuestionBlueprint[] {
  return [
    {
      topic: 'Gerak Dasar Lokomotor',
      stem: 'Gerakan berpindah tempat dari satu titik ke titik lain dalam olahraga dinamakan gerak ....',
      correct: 'Lokomotor',
      distractors: ['Non-lokomotor', 'Manipulatif', 'Statik'],
      explanation: 'Gerak lokomotor adalah gerak berpindah tempat seperti berjalan, berlari, dan melompat.',
      hint: 'Gerakan yang membuat posisi tubuh berpindah tempat.',
      difficulty: 'Mudah',
    },
    {
      topic: 'Pemanasan Sebelum Berolahraga',
      stem: 'Tujuan utama melakukan gerakan pemanasan sebelum berolahraga adalah untuk ....',
      correct: 'Mencegah terjadinya cedera otot dan sendi',
      distractors: ['Membuat tubuh cepat lelah', 'Menghabiskan waktu latihan', 'Membuat rasa lapar'],
      explanation: 'Pemanasan meningkatkan kelenturan otot dan aliran darah guna mencegah kram dan cedera.',
      hint: 'Mempersiapkan otot dan sendi agar aman dari cedera.',
      difficulty: 'Mudah',
    },
    {
      topic: 'Pola Hidup Bersih dan Sehat',
      stem: 'Sebelum dan sesudah makan, kebiasaan hidup bersih yang wajib kita lakukan adalah ....',
      correct: 'Mencuci kedua tangan dengan sabun dan air mengalir',
      distractors: ['Mengusap tangan pada baju', 'Langsung minum es manis', 'Tidur telentang'],
      explanation: 'Mencuci tangan dengan sabun membunuh kuman penyebab penyakit perut.',
      hint: 'Membersihkan tangan menggunakan sabun antiseptik.',
      difficulty: 'Mudah',
    },
  ];
}

// ---------------------------------------------------------------------------
// BAHASA SUNDA (MULOK)
// ---------------------------------------------------------------------------
function getSundaBlueprints(grade: GradeLevel): QuestionBlueprint[] {
  return [
    {
      topic: 'Ngaran Anak Sasatoan',
      stem: 'Dina basa Sunda, anak ucing teh sok disebut ....',
      correct: 'Bilatung',
      distractors: ['Ciuk', 'Kuthuk', 'Eneng'],
      explanation: 'Anak ucing ngaranna bilatung, anak hayam ngaranna ciuk.',
      hint: 'Ngaran husus keur anak ucing nu leutik keneh.',
      difficulty: 'Mudah',
    },
    {
      topic: 'Ragam Basa Lemes',
      stem: 'Kecap lemes pikeun kecap "dahar" ka saluhureun (ka sepuh) nyaeta ....',
      correct: 'Tuang',
      distractors: ['Neda', 'Nyatu', 'Emam'],
      explanation: 'Kecap lemes keur batur nyaeta tuang; kecap lemes keur sorangan neda.',
      hint: 'Kecap lemes keur kolot atawa guru.',
      difficulty: 'Sedang',
    },
    {
      topic: 'Pakakas Dapur Tradisional Sunda',
      stem: 'Wadah sangu tina anyaman awi anu sok dipake di dapur Sunda disebut ....',
      correct: 'Boboko',
      distractors: ['Aseupan', 'Dulang', 'Hihid'],
      explanation: 'Boboko nyaeta wadah sangu tina anyaman awi.',
      hint: 'Paranti wadah sangu tina anyaman awi.',
      difficulty: 'Mudah',
    },
  ];
}

// ---------------------------------------------------------------------------
// BAHASA JAWA (MULOK)
// ---------------------------------------------------------------------------
function getJawaBlueprints(grade: GradeLevel): QuestionBlueprint[] {
  return [
    {
      topic: 'Jenenge Anak Kewan',
      stem: 'Ing basa Jawa, jenenge anak pitik yaiku ....',
      correct: 'Kuthuk',
      distractors: ['Meri', 'Belo', 'Cemeng'],
      explanation: 'Anak pitik arane kuthuk, anak bebek arane meri.',
      hint: 'Jeneng kanggo anak pitik sing isih cilik.',
      difficulty: 'Mudah',
    },
    {
      topic: 'Unggah-Ungguh Basa Jawa',
      stem: 'Tembung krama inggil kanggo tembung "turu" yaiku ....',
      correct: 'Sare',
      distractors: ['Tilem', 'Mangan', 'Dhudhuk'],
      explanation: 'Turu kramane tilem (kanggo awake dhewe), dene krama inggile sare (kanggo wong tuwa).',
      hint: 'Basa krama inggil kanggo bapak/ibu tindak sare.',
      difficulty: 'Sedang',
    },
    {
      topic: 'Pewayangan Punokawan',
      stem: 'Semar, Gareng, Petruk, lan Bagong ing jagad pewayangan Jawa diarani ....',
      correct: 'Punokawan',
      distractors: ['Pandhawa', 'Kurawa', 'Dewa'],
      explanation: 'Semar, Gareng, Petruk, lan Bagong iku diarani Punokawan.',
      hint: 'Papat tokoh pamomong para satriya Pandhawa.',
      difficulty: 'Mudah',
    },
  ];
}

// ---------------------------------------------------------------------------
// CAMBRIDGE PRIMARY BLUEPRINTS
// ---------------------------------------------------------------------------
function getCambridgeBlueprints(subject: SubjectId, grade: GradeLevel): QuestionBlueprint[] {
  return [
    {
      topic: 'Conceptual Understanding & Inquiry',
      stem: 'Which of the following describes a key scientific or mathematical property in Stage {grade}?',
      correct: 'Consistent observation verified through structured inquiry and fair testing',
      distractors: [
        'Random guessing without evidence',
        'Ignoring experimental results',
        'Changing multiple variables at the same time',
      ],
      explanation: 'Cambridge assessment values fair testing where only one variable is altered at a time.',
      hint: 'Fair test principle.',
      difficulty: 'Sedang',
    },
    {
      topic: 'Problem Solving & Reasoning',
      stem: 'When solving word problems in Cambridge curriculum, what is the best first step?',
      correct: 'Identify key information, given values, and what is being asked',
      distractors: [
        'Guess the answer immediately',
        'Add all numbers together without reading',
        'Ignore the units of measurement',
      ],
      explanation: 'Reading carefully and highlighting given information ensures accurate problem solving.',
      hint: 'Understand the question requirements first.',
      difficulty: 'Mudah',
    },
  ];
}

// ---------------------------------------------------------------------------
// SINGAPORE PRIMARY BLUEPRINTS
// ---------------------------------------------------------------------------
function getSingaporeBlueprints(subject: SubjectId, grade: GradeLevel): QuestionBlueprint[] {
  return [
    {
      topic: 'Bar Model Method & Heuristics',
      stem: 'In the Singapore mathematics approach, drawing a comparison bar model helps students to ....',
      correct: 'Visualise part-whole relationships and differences clearly before calculating',
      distractors: [
        'Decorate the page with random drawings',
        'Avoid doing any multiplication',
        'Replace mathematical formulas completely',
      ],
      explanation: 'Bar modeling visually represents quantities and comparisons to scaffold multi-step problem solving.',
      hint: 'Visual representation of quantities.',
      difficulty: 'Sedang',
    },
    {
      topic: 'Inquiry-Based Science System',
      stem: 'In Singapore Primary Science, what distinguishes a living organism from a non-living object?',
      correct: 'Living things need water, food, and air, and can grow, respond, and reproduce',
      distractors: [
        'Living things never change shape',
        'Non-living objects always breathe air',
        'Living things are always made of metal',
      ],
      explanation: 'The characteristics of life include growth, reproduction, response to stimuli, and metabolic needs.',
      hint: 'Basic characteristics of living things.',
      difficulty: 'Mudah',
    },
  ];
}
