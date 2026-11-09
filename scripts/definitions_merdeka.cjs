// Definitions for 60 Kurikulum Merdeka New Materials (10 mapel x 6 kelas)
const MERDEKA_MODULES = [
  // 1. Matematika (Grade 1 - 6)
  {
    subject: 'matematika',
    grade: 1,
    phase: 'Fase A',
    syllabusStrand: 'Pengukuran',
    topic: 'Pengukuran Panjang & Berat dengan Satuan Tidak Baku',
    description: 'Mengukur panjang benda dengan jengkal, depa, langkah, dan klip kertas serta membandingkan berat benda dengan timbangan sederhana.',
    language: 'id',
    domain: 'math_measurement_nonstandard'
  },
  {
    subject: 'matematika',
    grade: 2,
    phase: 'Fase A',
    syllabusStrand: 'Bilangan & Uang',
    topic: 'Mengenal Nilai Mata Uang Rupiah & Kesetaraan Nilai Uang',
    description: 'Mengenal pecahan uang logam dan kertas rupiah, menghitung nilai sekelompok uang, dan kesetaraan uang belanja.',
    language: 'id',
    domain: 'math_money_rupiah'
  },
  {
    subject: 'matematika',
    grade: 3,
    phase: 'Fase B',
    syllabusStrand: 'Geometri',
    topic: 'Sifat-sifat Bangun Datar & Pola Pengubinan',
    description: 'Mengenal simetri lipat, simetri putar, sisi dan sudut persegi, segitiga, trapesium serta pola pengubinan beraturan.',
    language: 'id',
    domain: 'math_geometry_tessellation'
  },
  {
    subject: 'matematika',
    grade: 4,
    phase: 'Fase B',
    syllabusStrand: 'Analisis Data & Peluang',
    topic: 'Penyajian Data dalam Diagram Batang & Piktogram',
    description: 'Membaca dan membuat piktogram, diagram batang vertikal dan horizontal dari data kegiatan sehari-hari.',
    language: 'id',
    domain: 'math_data_charts'
  },
  {
    subject: 'matematika',
    grade: 5,
    phase: 'Fase C',
    syllabusStrand: 'Bilangan & Aljabar',
    topic: 'Perbandingan, Rasio & Skala Denah',
    description: 'Memahami rasio perbandingan dua besaran, perbandingan senilai, dan menghitung jarak sebenarnya menggunakan skala peta.',
    language: 'id',
    domain: 'math_ratio_scale'
  },
  {
    subject: 'matematika',
    grade: 6,
    phase: 'Fase C',
    syllabusStrand: 'Pengukuran & Geometri Ruang',
    topic: 'Volume Bangun Ruang Kubus & Balok serta Satuan Liter',
    description: 'Menghitung volume kubus dan balok dengan kubus satuan dan rumus baku serta konversi satuan volume desimeter kubik ke liter.',
    language: 'id',
    domain: 'math_volume_cube_prism'
  },

  // 2. Bahasa Indonesia (Grade 1 - 6)
  {
    subject: 'indonesia',
    grade: 1,
    phase: 'Fase A',
    syllabusStrand: 'Menulis & Tata Bahasa',
    topic: 'Mengenal Tanda Titik, Huruf Kapital & Kalimat Tanya Sederhana',
    description: 'Penggunaan huruf kapital di awal kalimat dan nama orang, tanda titik di akhir kalimat berita, serta tanda tanya.',
    language: 'id',
    domain: 'indo_punctuation_capital'
  },
  {
    subject: 'indonesia',
    grade: 2,
    phase: 'Fase A',
    syllabusStrand: 'Membaca & Kosakata',
    topic: 'Membaca Denah Lokasi & Kosakata Arah Mata Angin',
    description: 'Memahami denah sekolah atau rumah, kosakata arah (utara, selatan, timur, barat, kanan, kiri, depan, belakang).',
    language: 'id',
    domain: 'indo_map_directions'
  },
  {
    subject: 'indonesia',
    grade: 3,
    phase: 'Fase B',
    syllabusStrand: 'Membaca & Memirsa',
    topic: 'Teks Prosedur Membuat Sesuatu & Langkah Berurutan',
    description: 'Struktur teks prosedur (tujuan, alat/bahan, langkah-langkah), kata kerja imperatif, dan kata hubung urutan.',
    language: 'id',
    domain: 'indo_procedure_steps'
  },
  {
    subject: 'indonesia',
    grade: 4,
    phase: 'Fase B',
    syllabusStrand: 'Membaca Kritis',
    topic: 'Membedakan Fakta dan Opini dalam Teks Bacaan',
    description: 'Ciri-ciri kalimat fakta yang dapat dibuktikan kebenarannya dan kalimat opini yang berisi pendapat pribadi.',
    language: 'id',
    domain: 'indo_fact_opinion'
  },
  {
    subject: 'indonesia',
    grade: 5,
    phase: 'Fase C',
    syllabusStrand: 'Sastra & Cerita',
    topic: 'Unsur Intrinsik Cerita Pendek & Watak Tokoh',
    description: 'Menganalisis tema, tokoh, penokohan (protagonis, antagonis), latar tempat/waktu, alur, dan amanat dalam cerpen.',
    language: 'id',
    domain: 'indo_story_elements'
  },
  {
    subject: 'indonesia',
    grade: 6,
    phase: 'Fase C',
    syllabusStrand: 'Keterampilan Berbicara & Menulis',
    topic: 'Menulis Teks Pidato Persuasif & Kalimat Efektif',
    description: 'Bagian teks pidato (pembukaan, isi, penutup), kalimat efektif, kata persuasif, dan etika berpidato di depan umum.',
    language: 'id',
    domain: 'indo_speech_persuasive'
  },

  // 3. IPAS (Grade 1 - 6)
  {
    subject: 'ipas',
    grade: 1,
    phase: 'Fase A',
    syllabusStrand: 'Sains Tubuh Manusia',
    topic: 'Mengenal Bagian Tubuh & Cara Menjaga Kebersihan Diri',
    description: 'Nama anggota tubuh luar, fungsi panca indra, kebiasaan mencuci tangan, menggosok gigi, dan menjaga kesehatan diri.',
    language: 'id',
    domain: 'ipas_body_hygiene'
  },
  {
    subject: 'ipas',
    grade: 2,
    phase: 'Fase A',
    syllabusStrand: 'Bumi & Antariksa',
    topic: 'Cuaca, Musim di Indonesia & Pengaruhnya bagi Kehidupan',
    description: 'Jenis cuaca (cerah, berawan, hujan, berangin), musim kemarau dan hujan di Indonesia, pakaian dan kegiatan yang sesuai.',
    language: 'id',
    domain: 'ipas_weather_seasons'
  },
  {
    subject: 'ipas',
    grade: 3,
    phase: 'Fase B',
    syllabusStrand: 'Makhluk Hidup',
    topic: 'Siklus Hidup Hewan (Metamorfosis Sempurna & Tidak Sempurna)',
    description: 'Daur hidup kupu-kupu, nyamuk, katak (metamorfosis sempurna) dan kecoak, belalang (tidak sempurna) serta hewan tanpa metamorfosis.',
    language: 'id',
    domain: 'ipas_metamorphosis'
  },
  {
    subject: 'ipas',
    grade: 4,
    phase: 'Fase B',
    syllabusStrand: 'Sosial Budaya',
    topic: 'Keragaman Budaya, Rumah Adat & Pakaian Adat di Indonesia',
    description: 'Mengenal rumah adat (Joglo, Gadang, Tongkonan, Honai), pakaian adat daerah, senjata tradisional, dan sikap toleransi.',
    language: 'id',
    domain: 'ipas_culture_indonesia'
  },
  {
    subject: 'ipas',
    grade: 5,
    phase: 'Fase C',
    syllabusStrand: 'Sistem Tubuh Manusia',
    topic: 'Sistem Pencernaan Manusia & Makanan Bergizi Seimbang',
    description: 'Urutan saluran pencernaan (mulut, kerongkongan, lambung, usus halus, usus besar, anus), enzim pencernaan, dan gizi seimbang.',
    language: 'id',
    domain: 'ipas_digestive_system'
  },
  {
    subject: 'ipas',
    grade: 6,
    phase: 'Fase C',
    syllabusStrand: 'Bumi & Tata Surya',
    topic: 'Rotasi & Revolusi Bumi serta Akibatnya terhadap Kehidupan',
    description: 'Gerak rotasi (siang malam, perbedaan waktu) dan gerak revolusi bumi (pergantian musim, gerak semu tahunan matahari).',
    language: 'id',
    domain: 'ipas_earth_rotation'
  },

  // 4. Pendidikan Pancasila (Grade 1 - 6)
  {
    subject: 'pkn',
    grade: 1,
    phase: 'Fase A',
    syllabusStrand: 'Norma & Aturan',
    topic: 'Aturan dan Tata Tertib di Rumah serta di Sekolah',
    description: 'Mematuhi aturan makan, tidur, belajar di rumah serta tata tertib kelas, antre, dan menghormati guru di sekolah.',
    language: 'id',
    domain: 'pkn_rules_home_school'
  },
  {
    subject: 'pkn',
    grade: 2,
    phase: 'Fase A',
    syllabusStrand: 'Pancasila',
    topic: 'Mengenal Simbol dan Nilai Sila-Sila Pancasila dalam Keseharian',
    description: 'Simbol Bintang, Rantai, Pohon Beringin, Kepala Banteng, Padi & Kapas serta contoh pengamalannya di kehidupan sehari-hari.',
    language: 'id',
    domain: 'pkn_pancasila_symbols'
  },
  {
    subject: 'pkn',
    grade: 3,
    phase: 'Fase B',
    syllabusStrand: 'Hak & Kewajiban',
    topic: 'Hak dan Kewajiban Anggota Keluarga serta Warga Sekolah',
    description: 'Perbedaan hak dan kewajiban anak di rumah, hak dan kewajiban murid di sekolah, serta mendahulukan kewajiban sebelum hak.',
    language: 'id',
    domain: 'pkn_rights_duties'
  },
  {
    subject: 'pkn',
    grade: 4,
    phase: 'Fase B',
    syllabusStrand: 'Bhinneka Tunggal Ika',
    topic: 'Menghargai Keberagaman Suku, Agama, dan Ras di Lingkungan Sekitar',
    description: 'Semboyan Bhinneka Tunggal Ika, 6 agama resmi di Indonesia, sikap saling menghargai teman yang berbeda latar belakang.',
    language: 'id',
    domain: 'pkn_tolerance_diversity'
  },
  {
    subject: 'pkn',
    grade: 5,
    phase: 'Fase C',
    syllabusStrand: 'Negara Kesatuan RI',
    topic: 'Nilai Persatuan dan Kesatuan dalam Peristiwa Sumpah Pemuda',
    description: 'Sejarah Sumpah Pemuda 1928, tiga ikrar pemuda, makna satu nusa, satu bangsa, satu bahasa, dan gotong royong masa kini.',
    language: 'id',
    domain: 'pkn_sumpah_pemuda'
  },
  {
    subject: 'pkn',
    grade: 6,
    phase: 'Fase C',
    syllabusStrand: 'Demokrasi & Musyawarah',
    topic: 'Musyawarah Mufakat dalam Pengambilan Keputusan Bersama',
    description: 'Penerapan sila ke-4 dalam pemilihan ketua kelas, musyawarah mufakat, menghormati pendapat yang berbeda, dan lapang dada.',
    language: 'id',
    domain: 'pkn_musyawarah_decision'
  },

  // 5. Coding & Informatika (Grade 1 - 6)
  {
    subject: 'coding',
    grade: 1,
    phase: 'Fase A',
    syllabusStrand: 'Algoritma Awal',
    topic: 'Pengenalan Arah dan Langkah Berurutan (Instruksi Langkah Demi Langkah)',
    description: 'Konsep dasar arah maju, mundur, belok kanan, belok kiri untuk memandu karakter mencapai tujuan tanpa menabrak halangan.',
    language: 'id',
    domain: 'coding_step_direction'
  },
  {
    subject: 'coding',
    grade: 2,
    phase: 'Fase A',
    syllabusStrand: 'Berpikir Komputasional',
    topic: 'Pola Berulang (Pattern Recognition) dan Pengelompokan Data Sederhana',
    description: 'Mengenali pola berulang pada gambar dan angka, mengelompokkan benda berdasarkan atribut (warna, bentuk, ukuran).',
    language: 'id',
    domain: 'coding_patterns_sorting'
  },
  {
    subject: 'coding',
    grade: 3,
    phase: 'Fase B',
    syllabusStrand: 'Logika Algoritma',
    topic: 'Logika Algoritma Bercabang (Jika - Maka / Conditional If-Else)',
    description: 'Pengambilan keputusan logika sehari-hari: Jika hujan MAKA bawa payung, jika lapar MAKA makan, dan logika robot.',
    language: 'id',
    domain: 'coding_conditionals'
  },
  {
    subject: 'coding',
    grade: 4,
    phase: 'Fase B',
    syllabusStrand: 'Pemrograman Visual',
    topic: 'Pengenalan Blok Kode Scratch (Motion, Looks, dan Events)',
    description: 'Mengenal Sprite, Stage, blok gerak (move, turn), tampilan (say, costume), dan pemicu aksi (when green flag clicked).',
    language: 'id',
    domain: 'coding_scratch_basics'
  },
  {
    subject: 'coding',
    grade: 5,
    phase: 'Fase C',
    syllabusStrand: 'Struktur Data & Variabel',
    topic: 'Penggunaan Variabel dan Operator Perhitungan dalam Pemrograman Blok',
    description: 'Membuat variabel skor (score), nyawa (lives), timer, serta operasi penambahan dan pengurangan nilai variabel.',
    language: 'id',
    domain: 'coding_variables_operators'
  },
  {
    subject: 'coding',
    grade: 6,
    phase: 'Fase C',
    syllabusStrand: 'Literasi Digital & Debugging',
    topic: 'Etika Digital, Keamanan Data Pribadi, dan Deteksi Kesalahan (Debugging)',
    description: 'Melindungi kata sandi, mengenali pesan penipuan (phishing), hak cipta digital, dan strategi mencari bug pada kode program.',
    language: 'id',
    domain: 'coding_debugging_cybersecurity'
  },

  // 6. Bahasa Inggris (Grade 1 - 6)
  {
    subject: 'inggris',
    grade: 1,
    phase: 'Fase A',
    syllabusStrand: 'Vocabulary & Family',
    topic: 'My Family Members and Parts of the House',
    description: 'Words for father, mother, brother, sister, grandfather, grandmother and rooms (living room, bedroom, kitchen, bathroom).',
    language: 'en',
    domain: 'eng_family_house'
  },
  {
    subject: 'inggris',
    grade: 2,
    phase: 'Fase A',
    syllabusStrand: 'Daily Routines',
    topic: 'Daily Activities and Telling Time (Morning, Afternoon, Night)',
    description: 'Verbs of routine (wake up, brush teeth, go to school, eat lunch, sleep) and simple time expressions (in the morning, at night).',
    language: 'en',
    domain: 'eng_routines_time'
  },
  {
    subject: 'inggris',
    grade: 3,
    phase: 'Fase B',
    syllabusStrand: 'School & Clothing',
    topic: 'School Stationery, Clothes and Favorite Colors',
    description: 'Pencil, eraser, ruler, sharpener, bag and clothes (shirt, skirt, trousers, shoes, socks) with colors and singular/plural nouns.',
    language: 'en',
    domain: 'eng_stationery_clothes'
  },
  {
    subject: 'inggris',
    grade: 4,
    phase: 'Fase B',
    syllabusStrand: 'Food & Dining',
    topic: 'Food and Drinks, Ordering Meals and Polite Expressions',
    description: 'Healthy meals (rice, noodles, fish, chicken, milk, water, juice), tastes (sweet, sour, salty), and polite requests (May I have..., Please).',
    language: 'en',
    domain: 'eng_food_ordering'
  },
  {
    subject: 'inggris',
    grade: 5,
    phase: 'Fase C',
    syllabusStrand: 'Hobbies & Leisure',
    topic: 'Hobbies, Free Time Activities and Expressing Preferences',
    description: 'Swimming, playing guitar, reading, cycling, painting, using like/likes/dislike and expressing why (Because it is fun/healthy).',
    language: 'en',
    domain: 'eng_hobbies_preferences'
  },
  {
    subject: 'inggris',
    grade: 6,
    phase: 'Fase C',
    syllabusStrand: 'Directions & Prepositions',
    topic: 'Giving Directions, Places in the Town and Prepositions of Place',
    description: 'Post office, hospital, bank, library, park, cinema with prepositions (next to, opposite, between, behind) and turn left/turn right.',
    language: 'en',
    domain: 'eng_places_directions'
  },

  // 7. SBdP (Grade 1 - 6)
  {
    subject: 'sbdp',
    grade: 1,
    phase: 'Fase A',
    syllabusStrand: 'Seni Rupa Murni',
    topic: 'Mengenal Garis, Bentuk Geometris & Warna Primer dalam Seni Rupa',
    description: 'Garis lurus, lengkung, zig-zag, bentuk lingkaran, segitiga, persegi serta warna primer merah, kuning, biru.',
    language: 'id',
    domain: 'sbdp_lines_colors'
  },
  {
    subject: 'sbdp',
    grade: 2,
    phase: 'Fase A',
    syllabusStrand: 'Seni Musik',
    topic: 'Pola Irama Lagu Anak, Ketukan Cepat dan Lambat',
    description: 'Birama 2/4, 3/4, ketukan teratur (tempo lambat dan cepat), serta bunyi alam (petir, angin) vs bunyi buatan (tepuk tangan, gitar).',
    language: 'id',
    domain: 'sbdp_rhythm_tempo'
  },
  {
    subject: 'sbdp',
    grade: 3,
    phase: 'Fase B',
    syllabusStrand: 'Kriya & Prakarya',
    topic: 'Membuat Karya Seni Mozaik dan Kolase dari Bahan Alam',
    description: 'Teknik menempel bahan alam (biji-bijian, daun kering, cangkang telur) dan bahan buatan (kertas warna) dengan rapi.',
    language: 'id',
    domain: 'sbdp_mosaic_collage'
  },
  {
    subject: 'sbdp',
    grade: 4,
    phase: 'Fase B',
    syllabusStrand: 'Seni Tari',
    topic: 'Gerak Tari Tradisional Nusantara dan Iringan Musik Tari',
    description: 'Gerak dasar kepala, tangan, kaki tari daerah (tari Saman, Piring, Pendet, Merak) dan alat musik pengiringnya.',
    language: 'id',
    domain: 'sbdp_traditional_dance'
  },
  {
    subject: 'sbdp',
    grade: 5,
    phase: 'Fase C',
    syllabusStrand: 'Seni Rupa Terapan',
    topic: 'Membuat Gambar Cerita (Komik) dan Ilustrasi Alur Cerita',
    description: 'Ciri-ciri gambar cerita/komik, balon kata (dialog), panel gambar, pewarnaan, dan menyampaikan pesan moral.',
    language: 'id',
    domain: 'sbdp_comic_illustration'
  },
  {
    subject: 'sbdp',
    grade: 6,
    phase: 'Fase C',
    syllabusStrand: 'Seni Grafis & Desain',
    topic: 'Mengenal Reklame, Poster, dan Selebaran Seni Grafis',
    description: 'Jenis reklame komersial dan nonkomersial, poster edukasi, slogan menarik, komposisi tulisan dan gambar seimbang.',
    language: 'id',
    domain: 'sbdp_poster_reklame'
  },

  // 8. PJOK (Grade 1 - 6)
  {
    subject: 'pjok',
    grade: 1,
    phase: 'Fase A',
    syllabusStrand: 'Gerak Lokomotor',
    topic: 'Gerak Dasar Lokomotor (Berjalan, Berlari, dan Melompat)',
    description: 'Gerak berpindah tempat yang benar: jalan lurus, lari pelan/cepat, lompat satu kaki dan dua kaki dengan pendaratan aman.',
    language: 'id',
    domain: 'pjok_locomotor_skills'
  },
  {
    subject: 'pjok',
    grade: 2,
    phase: 'Fase A',
    syllabusStrand: 'Gerak Non-Lokomotor',
    topic: 'Gerak Non-Lokomotor (Meliuk, Mengayun, dan Membungkuk)',
    description: 'Gerak tanpa berpindah tempat untuk kelenturan tubuh: memutar pinggang, mengayun lengan, membungkukkan badan.',
    language: 'id',
    domain: 'pjok_nonlocomotor_skills'
  },
  {
    subject: 'pjok',
    grade: 3,
    phase: 'Fase B',
    syllabusStrand: 'Gerak Manipulatif',
    topic: 'Kombinasi Gerak Manipulatif Melempar dan Menangkap Bola',
    description: 'Melempar bola melambung, mendatar, dan menggelinding serta menangkap bola dengan dua tangan secara tepat.',
    language: 'id',
    domain: 'pjok_manipulative_ball'
  },
  {
    subject: 'pjok',
    grade: 4,
    phase: 'Fase B',
    syllabusStrand: 'Senam Irama',
    topic: 'Variasi Gerak Langkah Kaki dan Ayunan Lengan Senam Irama',
    description: 'Langkah biasa, langkah rapat, ayunan satu lengan, ayunan dua lengan mengikuti ketukan hitungan atau irama musik.',
    language: 'id',
    domain: 'pjok_rhythmic_gymnastics'
  },
  {
    subject: 'pjok',
    grade: 5,
    phase: 'Fase C',
    syllabusStrand: 'Aktivitas Air',
    topic: 'Gerak Dasar Renang Gaya Dada dan Keselamatan di Air',
    description: 'Posisi tubuh mengapung, gerakan kaki renang gaya dada, ayunan tangan, pengambilan napas, dan etika keselamatan di kolam renang.',
    language: 'id',
    domain: 'pjok_breaststroke_safety'
  },
  {
    subject: 'pjok',
    grade: 6,
    phase: 'Fase C',
    syllabusStrand: 'Kesehatan Pribadi & Lingkungan',
    topic: 'Pola Hidup Sehat, Pencegahan Penyakit Menular dan Istirahat Cukup',
    description: 'Penyakit menular (flu, demam berdarah), cara pencegahan 3M Plus, makanan bergizi, bahaya merokok, dan waktu tidur berkualitas.',
    language: 'id',
    domain: 'pjok_healthy_lifestyle'
  },

  // 9. Bahasa Sunda (Grade 1 - 6)
  {
    subject: 'sunda',
    grade: 1,
    phase: 'Fase A',
    syllabusStrand: 'Kosakata & Awak',
    topic: 'Ngaran Babagian Awak dina Basa Sunda Lemes',
    description: 'Mastaka (sirah), soca (panon), pangambung (irung), lambey (biwir), panangan (leungeun), sampean (suku).',
    language: 'su',
    domain: 'sunda_body_parts'
  },
  {
    subject: 'sunda',
    grade: 2,
    phase: 'Fase A',
    syllabusStrand: 'Pakakas & Lingkungan',
    topic: 'Pakakas di Sakola jeung di Imah dina Basa Sunda',
    description: 'Mataholang, patlot, jidar, pamupus, bor, bangku, lomari, peso, wadah sangu, sapu nyere.',
    language: 'su',
    domain: 'sunda_tools_household'
  },
  {
    subject: 'sunda',
    grade: 3,
    phase: 'Fase B',
    syllabusStrand: 'Sastra & Tembang',
    topic: 'Pupuh Pucung jeung Kaulinan Barudak Lembur',
    description: 'Pola guru lagu jeung guru wilangan Pupuh Pucung (12u, 6a, 8i, 12a), ucing sumput, oray-orayan, sondah, gatrik.',
    language: 'su',
    domain: 'sunda_pupuh_games'
  },
  {
    subject: 'sunda',
    grade: 4,
    phase: 'Fase B',
    syllabusStrand: 'Tatakrama Basa',
    topic: 'Tatakrama Basa Sunda (Loma jeung Lemes) dina Paguneman',
    description: 'Basa loma keur babaturan sebaya jeung basa lemes keur kolot/guru (neda/tuang, mondok/kulem, mios/angkat).',
    language: 'su',
    domain: 'sunda_tatakrama_manners'
  },
  {
    subject: 'sunda',
    grade: 5,
    phase: 'Fase C',
    syllabusStrand: 'Nulis & Carita',
    topic: 'Pangalaman Pribadi jeung Nulis Carita Pondok Sunda',
    description: 'Nulis karangan dumasar kana pangalaman pikaresepeun atawa pikasediheun kalayan alur anu runtut jeung basa merenah.',
    language: 'su',
    domain: 'sunda_personal_experience'
  },
  {
    subject: 'sunda',
    grade: 6,
    phase: 'Fase C',
    syllabusStrand: 'Sastra & Aksara',
    topic: 'Wawacan, Dongeng Sasakala jeung Aksara Sunda Dasar',
    description: 'Dongeng sasakala (Sangkuriang, Situ Bagendit), tokoh mitologi Sunda, jeung mikawanoh aksara swara sarta ngalagena dasar.',
    language: 'su',
    domain: 'sunda_folktales_aksara'
  },

  // 10. Bahasa Jawa (Grade 1 - 6)
  {
    subject: 'jawa',
    grade: 1,
    phase: 'Fase A',
    syllabusStrand: 'Kawruh Basa',
    topic: 'Arane Perangane Awak ing Basa Jawa Krama',
    description: 'Mustaka (sirah), soca (mripat), grana (irung), tutuk (cangkem), asta (tangan), samparan (sikil).',
    language: 'jv',
    domain: 'jawa_body_krama'
  },
  {
    subject: 'jawa',
    grade: 2,
    phase: 'Fase A',
    syllabusStrand: 'Paramasastra',
    topic: 'Swara Jejeg lan Swara Miring ing Tembung Basa Jawa',
    description: 'Mbedakake swara a jejeg (kaya pira, sega) lan swara a miring (kaya bapak, mangan), i jejeg vs i miring, u jejeg vs u miring.',
    language: 'jv',
    domain: 'jawa_swara_phonology'
  },
  {
    subject: 'jawa',
    grade: 3,
    phase: 'Fase B',
    syllabusStrand: 'Tembang & Kosakata',
    topic: 'Tembung Kosok Balen (Lawan Kata) lan Tembang Dolanan',
    description: 'Padha/kosok balen (gedhe x cilik, dhuwur x cendhek), tembang Gundhul-Gundhul Pacul, Jamuran, Cublak-Cublak Suweng.',
    language: 'jv',
    domain: 'jawa_antonyms_songs'
  },
  {
    subject: 'jawa',
    grade: 4,
    phase: 'Fase B',
    syllabusStrand: 'Unggah-Ungguh Basa',
    topic: 'Unggah-Ungguh Basa Jawa (Ngoko Lugu lan Krama Alus)',
    description: 'Panganggone basa ngoko lugu marang kanca sapadha-padha lan basa krama alus marang wong tuwa, guru, lan tamu.',
    language: 'jv',
    domain: 'jawa_unggah_ungguh'
  },
  {
    subject: 'jawa',
    grade: 5,
    phase: 'Fase C',
    syllabusStrand: 'Wayang & Sastra',
    topic: 'Cerita Wayang Pandhawa lan Watak Para Paraga',
    description: 'Satria Pandhawa Lima: Puntadewa (jujur), Werkudara (gagah prakosa), Janaka (alus), Nakula lan Sadewa (setya).',
    language: 'jv',
    domain: 'jawa_wayang_pandhawa'
  },
  {
    subject: 'jawa',
    grade: 6,
    phase: 'Fase C',
    syllabusStrand: 'Aksara Jawa',
    topic: 'Aksara Jawa Legena (20 Pasangan) lan Sandhangan Swara',
    description: 'Maca lan nulis 20 aksara Carakan (ha na ca ra ka ... nga), sandhangan wulu (i), suku (u), taling (e), taling tarung (o), pepet (e).',
    language: 'jv',
    domain: 'jawa_aksara_sandhangan'
  }
];

module.exports = { MERDEKA_MODULES };
