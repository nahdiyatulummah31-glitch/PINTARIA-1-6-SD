const fs = require('fs');
const path = require('path');

// 65 Audited Materials Definition based strictly on BSKAP 032/H/KR/2024 and SIBI Kemendikbudristek
const AUDITED_TOPICS = [
  // ==================== KELAS 1 (FASE A) ====================
  {
    materiId: 'mer_indo_g1_m1',
    curriculum: 'merdeka',
    grade: 1,
    phase: 'Fase A',
    subject: 'indonesia',
    subjectName: 'Bahasa Indonesia SD',
    syllabusStrand: 'Membaca Permulaan & Fonik',
    topic: 'Bunyi Bahasa, Huruf Vokal dan Konsonan, serta Suku Kata',
    competency: 'Peserta didik mampu bersikap menjadi penyimak yang baik, mengenali bunyi huruf, melafalkan bunyi huruf vokal dan konsonan, serta merangkai suku kata menjadi kata sederhana.',
    source: 'Buku Siswa Bahasa Indonesia: Aku Bisa! Kelas 1 (Kemendikbudristek RI / SIBI)',
    indicators: [
      'Menentukan huruf vokal (a, i, u, e, o) pada kata benda sederhana',
      'Membedakan huruf konsonan dan huruf vokal pada nama hewan/buah',
      'Menggabungkan dua bunyi huruf konsonan dan vokal menjadi satu suku kata (ba, ca, da)',
      'Memenggal kata benda dua suku kata dengan benar (bo-la, bu-ku, ma-ta)',
      'Melengkapi suku kata yang hilang pada nama benda bergambar'
    ],
    concepts: [
      { word: 'buku', syllables: ['bu', 'ku'], vowels: ['u'], consonants: ['b', 'k'], meaning: 'alat tulis untuk membaca dan belajar' },
      { word: 'bola', syllables: ['bo', 'la'], vowels: ['o', 'a'], consonants: ['b', 'l'], meaning: 'benda bulat untuk bermain sepak bola' },
      { word: 'meja', syllables: ['me', 'ja'], vowels: ['e', 'a'], consonants: ['m', 'j'], meaning: 'tempat meletakkan buku saat belajar' },
      { word: 'susu', syllables: ['su', 'su'], vowels: ['u'], consonants: ['s'], meaning: 'minuman bergizi untuk kesehatan tulang' },
      { word: 'kuda', syllables: ['ku', 'da'], vowels: ['u', 'a'], consonants: ['k', 'd'], meaning: 'hewan berkaki empat yang pandai berlari' },
      { word: 'mata', syllables: ['ma', 'ta'], vowels: ['a'], consonants: ['m', 't'], meaning: 'indra penglihatan untuk melihat sekitar' },
      { word: 'topi', syllables: ['to', 'pi'], vowels: ['o', 'i'], consonants: ['t', 'p'], meaning: 'penutup kepala saat terik matahari' },
      { word: 'roda', syllables: ['ro', 'da'], vowels: ['o', 'a'], consonants: ['r', 'd'], meaning: 'benda bundar pada sepeda atau mobil' },
      { word: 'baju', syllables: ['ba', 'ju'], vowels: ['a', 'u'], consonants: ['b', 'j'], meaning: 'pakaian yang melindungi tubuh' },
      { word: 'padi', syllables: ['pa', 'di'], vowels: ['a', 'i'], consonants: ['p', 'd'], meaning: 'tanaman pangan yang menghasilkan beras' }
    ]
  },
  {
    materiId: 'mer_indo_g1_m2',
    curriculum: 'merdeka',
    grade: 1,
    phase: 'Fase A',
    subject: 'indonesia',
    subjectName: 'Bahasa Indonesia SD',
    syllabusStrand: 'Membaca & Berbicara',
    topic: 'Kosakata Benda Sekitar, Membaca Gambar, dan Kalimat Sederhana',
    competency: 'Peserta didik mampu memahami pesan lisan dan informasi dari media audio, teks aural, dan teks visual gambar sederhana serta menyusun kalimat pendek.',
    source: 'Buku Siswa Bahasa Indonesia: Aku Bisa! Kelas 1 (Kemendikbudristek RI / SIBI)',
    indicators: [
      'Menyebutkan fungsi benda-benda di ruang kelas dan rumah',
      'Membaca informasi penting dari gambar kegiatan anak-anak',
      'Menyusun kalimat sederhana pola Subjek-Predikat (S-P)',
      'Menggunakan kata tanya (apa, siapa, di mana) dalam percakapan ramah',
      'Menceritakan kembali isi gambar seri kegiatan pagi hari'
    ],
    concepts: [
      { subject: 'Budi', verb: 'membaca', object: 'buku cerita', place: 'di perpustakaan' },
      { subject: 'Siti', verb: 'menyiram', object: 'bunga mawar', place: 'di halaman rumah' },
      { subject: 'Edo', verb: 'mencuci', object: 'tangan dengan sabun', place: 'sebelum makan' },
      { subject: 'Dayu', verb: 'merapikan', object: 'tempat tidur', place: 'di pagi hari' },
      { subject: 'Lani', verb: 'menggambar', object: 'pemandangan alam', place: 'di buku gambar' }
    ]
  },
  {
    materiId: 'mer_mtk_g1_m1',
    curriculum: 'merdeka',
    grade: 1,
    phase: 'Fase A',
    subject: 'matematika',
    subjectName: 'Matematika SD',
    syllabusStrand: 'Bilangan',
    topic: 'Bilangan Cacah Sampai 20, Nilai Tempat, Membandingkan dan Mengurutkan Bilangan',
    competency: 'Peserta didik mampu membilang lambang bilangan cacah sampai dengan 20, membandingkan dan mengurutkan bilangan, serta memahami komposisi puluhan dan satuan.',
    source: 'Buku Siswa Matematika Kelas 1 (Kemendikbudristek RI / SIBI)',
    indicators: [
      'Membilang banyak benda kumpulan objek dari 1 sampai 20',
      'Menentukan lambang bilangan dan nama bilangan cacah hingga 20',
      'Menentukan nilai tempat puluhan dan satuan pada bilangan belasan (11-19)',
      'Membandingkan dua kumpulan bilangan menggunakan kata lebih banyak, lebih sedikit, atau sama dengan',
      'Mengurutkan sekelompok bilangan acak dari terkecil ke terbesar atau sebaliknya'
    ]
  },
  {
    materiId: 'mer_mtk_g1_m2',
    curriculum: 'merdeka',
    grade: 1,
    phase: 'Fase A',
    subject: 'matematika',
    subjectName: 'Matematika SD',
    syllabusStrand: 'Aljabar & Operasi Hitung',
    topic: 'Penjumlahan dan Pengurangan Bilangan Cacah Sampai 20 serta Soal Cerita',
    competency: 'Peserta didik mampu melakukan operasi penjumlahan dan pengurangan menggunakan benda-benda konkret hingga 20 dan menyelesaikan masalah sehari-hari.',
    source: 'Buku Siswa Matematika Kelas 1 (Kemendikbudristek RI / SIBI)',
    indicators: [
      'Menghitung hasil penjumlahan dua bilangan cacah dengan hasil maksimal 20',
      'Menghitung hasil pengurangan dua bilangan cacah di bawah 20',
      'Menyelesaikan soal cerita penjumlahan terkait mengumpulkan benda',
      'Menyelesaikan soal cerita pengurangan terkait sisa benda yang diberikan',
      'Menentukan pasangan bilangan (komposisi bilangan) yang berjumlah 10'
    ]
  },
  {
    materiId: 'mer_mtk_g1_m3',
    curriculum: 'merdeka',
    grade: 1,
    phase: 'Fase A',
    subject: 'matematika',
    subjectName: 'Matematika SD',
    syllabusStrand: 'Geometri',
    topic: 'Bentuk Bangun Datar, Bangun Ruang Sederhana dan Posisi Benda',
    competency: 'Peserta didik mampu mengenal berbagai bangun datar (segitiga, segiempat, lingkaran) dan bangun ruang (balok, kubus, bola) serta posisi benda sekitar.',
    source: 'Buku Siswa Matematika Kelas 1 (Kemendikbudristek RI / SIBI)',
    indicators: [
      'Mengelompokkan benda di sekitar berbentuk lingkaran, segitiga, dan segiempat',
      'Menghitung banyak sisi dan sudut pada bangun datar sederhana',
      'Membedakan bentuk balok, kubus, tabung, dan bola dari benda nyata',
      'Menjelaskan posisi relatif benda (di atas, di bawah, di depan, di belakang, di samping)',
      'Menentukan pola berulang bangun datar (pola bentuk dan warna)'
    ]
  },
  {
    materiId: 'mer_pkn_g1_m1',
    curriculum: 'merdeka',
    grade: 1,
    phase: 'Fase A',
    subject: 'pkn',
    subjectName: 'Pendidikan Pancasila (PKn)',
    syllabusStrand: 'Bhinneka Tunggal Ika',
    topic: 'Aku dan Teman-temanku: Identitas Diri, Keluarga, dan Keberagaman di Rumah',
    competency: 'Peserta didik mampu menyebutkan identitas dirinya dan teman-temannya serta menghargai keberagaman karakteristik individu di rumah dan sekolah.',
    source: 'Buku Siswa Pendidikan Pancasila Kelas 1 (Kemendikbudristek RI / SIBI)',
    indicators: [
      'Menjelaskan identitas diri lengkap (nama, jenis kelamin, hobi, alamat)',
      'Mengenal anggota keluarga inti (ayah, ibu, kakak, adik) dan perannya',
      'Menghargai perbedaan ciri fisik dan kesukaan antar anggota keluarga',
      'Menunjukkan sikap tolong-menolong sesama teman di sekolah tanpa membedakan',
      'Menerapkan adab berbicara sopan kepada orang tua dan guru'
    ]
  },
  {
    materiId: 'mer_pkn_g1_m2',
    curriculum: 'merdeka',
    grade: 1,
    phase: 'Fase A',
    subject: 'pkn',
    subjectName: 'Pendidikan Pancasila (PKn)',
    syllabusStrand: 'Pancasila',
    topic: 'Mengenal Garuda Pancasila, Simbol dan Lima Sila Pancasila',
    competency: 'Peserta didik mampu mengenali lambang negara Garuda Pancasila, simbol sila Pancasila, dan menceritakan hubungan simbol dengan sila Pancasila.',
    source: 'Buku Siswa Pendidikan Pancasila Kelas 1 (Kemendikbudristek RI / SIBI)',
    indicators: [
      'Mengenal Burung Garuda sebagai lambang negara Republik Indonesia',
      'Menyebutkan semboyan Bhinneka Tunggal Ika pada pita cengkeraman Garuda',
      'Menghubungkan simbol bintang, rantai, pohon beringin, kepala banteng, padi dan kapas dengan bunyi sila',
      'Mencontohkan perilaku sila pertama (berdoa sebelum makan dan belajar)',
      'Mencontohkan perilaku sila kedua (berbagi makanan dan membantu teman yang jatuh)'
    ]
  },
  {
    materiId: 'mer_pjok_g1_m1',
    curriculum: 'merdeka',
    grade: 1,
    phase: 'Fase A',
    subject: 'pjok',
    subjectName: 'PJOK (Olahraga & Kesehatan)',
    syllabusStrand: 'Keterampilan Gerak',
    topic: 'Gerak Dasar Non-Lokomotor dan Manipulatif serta Permainan Sederhana',
    competency: 'Peserta didik mempraktikkan pola gerak dasar non-lokomotor (meliuk, menekuk, mengayun) dan manipulatif (melempar, menangkap bola) melalui permainan sederhana.',
    source: 'Buku Panduan Guru PJOK Kelas 1 (Kemendikbudristek RI / SIBI)',
    indicators: [
      'Melakukan gerak non-lokomotor memutar badan dan meliukkan tubuh',
      'Melakukan gerak mengayunkan lengan untuk kelenturan sendi bahu',
      'Mempraktikkan gerak manipulatif melempar bola kecil ke sasaran keranjang',
      'Mempraktikkan gerak menangkap bola dengan kedua tangan tanpa terjatuh',
      'Bermain permainan tradisional kucing-tikus dengan tertib dan sportif'
    ]
  },
  {
    materiId: 'mer_pjok_g1_m2',
    curriculum: 'merdeka',
    grade: 1,
    phase: 'Fase A',
    subject: 'pjok',
    subjectName: 'PJOK (Olahraga & Kesehatan)',
    syllabusStrand: 'Pola Hidup Sehat',
    topic: 'Kebersihan Diri, Kesehatan Tubuh dan Istirahat Teratur',
    competency: 'Peserta didik memahami bagian-bagian tubuh, bagian tubuh yang boleh dan tidak boleh disentuh orang lain, serta cara menjaga kebersihan diri.',
    source: 'Buku Panduan Guru PJOK Kelas 1 (Kemendikbudristek RI / SIBI)',
    indicators: [
      'Mengenal bagian tubuh pribadi yang tertutup baju dan tidak boleh disentuh sembarang orang',
      'Mempraktikkan 6 langkah cuci tangan pakai sabun dengan air mengalir',
      'Menjelaskan waktu menyikat gigi yang tepat (pagi setelah sarapan dan malam sebelum tidur)',
      'Memahami manfaat mandi dua kali sehari dan memakai pakaian bersih',
      'Menjelaskan pentingnya tidur malam tepat waktu untuk pertumbuhan anak'
    ]
  },
  {
    materiId: 'mer_sbdp_g1_m1',
    curriculum: 'merdeka',
    grade: 1,
    phase: 'Fase A',
    subject: 'sbdp',
    subjectName: 'Seni Budaya & Prakarya (SBdP)',
    syllabusStrand: 'Seni Musik & Tari',
    topic: 'Eksplorasi Bunyi, Pola Irama Sederhana Lagu Anak, dan Gerak Berirama',
    competency: 'Peserta didik mengeksplorasi bunyi menggunakan alat sederhana, menirukan pola irama lagu anak, dan menggerakkan tubuh secara ritmis.',
    source: 'Buku Panduan Guru Seni Musik & Tari Kelas 1 (Kemendikbudristek RI / SIBI)',
    indicators: [
      'Membedakan bunyi alam (suara burung, angin, ombak) dan bunyi buatan (tepuk tangan, peluit, gitar)',
      'Mengenal ketukan teratur (tempo lambat dan cepat) pada lagu anak',
      'Menirukan pola irama tepuk tangan birama dua dan birama tiga',
      'Melakukan gerak tari menirukan gerak hewan (kupu-kupu terbang, kelinci melompat)',
      'Menyanyikan lagu anak Indonesia (misalnya Kasih Ibu, Balonku) dengan rasa gembira'
    ]
  }
];

console.log('Script template ready. Audited topics count:', AUDITED_TOPICS.length);
