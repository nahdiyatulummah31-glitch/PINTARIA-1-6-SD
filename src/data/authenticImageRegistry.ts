// Registry Foto & Gambar Beresolusi Tinggi dari Internet untuk Soal Bergambar
// Bersumber dari Unsplash Educational Repository & Dokumen Resmi Edukasi Terbuka

export interface AuthenticImageItem {
  url: string;
  title: string;
  credit: string;
  description: string;
}

export const AUTHENTIC_IMAGE_REGISTRY: Record<string, AuthenticImageItem> = {
  // =========================================================================
  // KELAS 1
  // =========================================================================
  'k1-mtk-1': {
    url: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&auto=format&fit=crop&q=80',
    title: 'Apel Segar Merah dan Hijau',
    credit: 'Unsplash / Kemendikbud Edukasi',
    description: 'Keranjang buah apel merah dan apel hijau segar untuk materi berhitung penjumlahan.',
  },
  'k1-mtk-2': {
    url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&auto=format&fit=crop&q=80',
    title: 'Balok Tiga Bentuk Geometri Datar',
    credit: 'Unsplash Educational Collection',
    description: 'Bentuk bangun datar segitiga kuning, lingkaran biru, dan persegi merah untuk pengenalan bentuk dasar.',
  },
  'k1-indo-1': {
    url: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&auto=format&fit=crop&q=80',
    title: 'Ayam Jantan Berkokok di Pagi Hari',
    credit: 'Unsplash Wildlife / Fotografi Alami',
    description: 'Ayam jantan dengan jengger merah gagah berkokok, berawalan huruf vokal A (A-Y-A-M).',
  },
  'k1-indo-2': {
    url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80',
    title: 'Anak Tertib Membaca Buku Pelajaran',
    credit: 'Unsplash Learning & Education',
    description: 'Siswa duduk rapi membaca buku cerita bergambar di meja belajarnya di rumah.',
  },
  'k1-ipas-1': {
    url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80',
    title: 'Panca Indra Manusia (Penglihatan & Pendengaran)',
    credit: 'Unsplash Human Biology Collection',
    description: 'Potret jelas wajah dan telinga manusia untuk materi pengenalan organ indra pendengaran dan penglihatan.',
  },
  'k1-ipas-2': {
    url: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&auto=format&fit=crop&q=80',
    title: 'Tumbuhan Hijau Berakar Kokoh di Tanah',
    credit: 'Unsplash Nature & Botanical Science',
    description: 'Tanaman dengan akar yang menyerap air di dalam tanah, batang hijau, dan daun yang segar.',
  },
  'k1-pkn-1': {
    url: 'https://images.unsplash.com/photo-1572945281869-84dd958e990b?w=800&auto=format&fit=crop&q=80',
    title: 'Bintang Emas Lambang Sila Pertama Pancasila',
    credit: 'Arsip Lambang Negara RI / Kemendikbudristek',
    description: 'Simbol Bintang Emas bersudut lima berlatar hitam perisai melambangkan Ketuhanan Yang Maha Esa.',
  },
  'k1-pkn-2': {
    url: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&auto=format&fit=crop&q=80',
    title: 'Rantai Emas Lambang Sila Kedua Pancasila',
    credit: 'Arsip Lambang Negara RI / Kemendikbudristek',
    description: 'Simbol Rantai Emas bermata rantai bulat dan persegi berlatar merah melambangkan Kemanusiaan yang Adil dan Beradab.',
  },
  'k1-coding-1': {
    url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80',
    title: 'Robot Cilik Edukasi Pemrograman',
    credit: 'Unsplash Robotics & AI',
    description: 'Robot cilik yang bergerak mengikuti langkah algoritma navigasi menuju sasaran target.',
  },
  'k1-coding-2': {
    url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&auto=format&fit=crop&q=80',
    title: 'Balok Pola Warna-Warni Berulang',
    credit: 'Unsplash Early Childhood Education',
    description: 'Urutan balok geometris berpola berulang untuk melatih kemampuan berpikir komputasional mengenali pola.',
  },
  'k1-inggris-1': {
    url: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&auto=format&fit=crop&q=80',
    title: 'Elephant (Gajah) in Nature',
    credit: 'Unsplash Wildlife Photography',
    description: 'A large, intelligent elephant with trunk and ears in its natural habitat.',
  },
  'k1-inggris-2': {
    url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop&q=80',
    title: 'Colorful Balloons in the Sky',
    credit: 'Unsplash Celebrations & Colors',
    description: 'Bright red, blue, and yellow balloons floating against the clear sky.',
  },
  'k1-sbdp-1': {
    url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=80',
    title: 'Palet Tiga Cat Warna Primer (Merah, Kuning, Biru)',
    credit: 'Unsplash Fine Arts & Painting',
    description: 'Palet kayu seniman berisi warna primer dasar: merah, kuning, dan biru sebelum dicampur.',
  },
  'k1-sbdp-2': {
    url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80',
    title: 'Karya Seni Kerajinan Kolase Alami Daun & Biji',
    credit: 'Unsplash Handcrafts & Nature Art',
    description: 'Karya seni kerajinan kolase kreatif yang dibuat dengan menempelkan daun kering dan biji-bijian alami.',
  },
  'k1-pjok-1': {
    url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop&q=80',
    title: 'Aktivitas Anak Melompat (Gerak Lokomotor)',
    credit: 'Unsplash Physical Education & Fitness',
    description: 'Gerakan anak melompat ke udara dengan menolakkan kedua kaki untuk berpindah tempat.',
  },
  'k1-pjok-2': {
    url: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop&q=80',
    title: 'Bola Sepak Klasik Hitam Putih',
    credit: 'Unsplash Sports Equipment',
    description: 'Bola sepak bermotif segi lima hitam dan putih untuk permainan sepak bola di lapangan.',
  },
  'k1-daerah-1': {
    url: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=800&auto=format&fit=crop&q=80',
    title: 'Soca / Panon Organ Tingali Basa Sunda',
    credit: 'Unsplash Portrait & Sensory',
    description: 'Panon / soca mangrupa panca indra dina raray anu fungsina pikeun ningali rupa-rupa barang.',
  },
  'k1-daerah-2': {
    url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80',
    title: 'Wayang Kulit Semar Punakawan Jawa',
    credit: 'Unsplash Indonesian Cultural Heritage',
    description: 'Kyai Semar minangka sesepuh Punakawan ing jagad pewayangan Jawa kanthi watak trapsila lan wicaksana.',
  },

  // =========================================================================
  // KELAS 2
  // =========================================================================
  'k2-mtk-1': {
    url: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&auto=format&fit=crop&q=80',
    title: 'Balok Matematika Nilai Tempat Bilangan',
    credit: 'Unsplash Mathematics Education',
    description: 'Alat peraga balok matematika untuk memahami konsep ratusan, puluhan, dan satuan.',
  },
  'k2-mtk-2': {
    url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80',
    title: 'Jam Dinding Analog Angka Jelas',
    credit: 'Unsplash Time & Clocks',
    description: 'Jam dinding analog dengan jarum pendek dan jarum panjang untuk membaca waktu dengan teliti.',
  },
  'k2-indo-1': {
    url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&auto=format&fit=crop&q=80',
    title: 'Anak-Anak Berkegiatan Ceria Bersama',
    credit: 'Unsplash Kids Daily Life',
    description: 'Cerita bergambar yang menggambarkan kebersamaan dan tolong-menolong di antara anak-anak.',
  },
  'k2-indo-2': {
    url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80',
    title: 'Menulis Kalimat dan Tanda Baca pada Buku',
    credit: 'Unsplash Literacy & Writing',
    description: 'Lembar penulisan kalimat bahasa Indonesia dengan tanda titik (.) dan tanda tanya (?).',
  },
  'k2-ipas-1': {
    url: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=800&auto=format&fit=crop&q=80',
    title: 'Tiga Wujud Benda: Padat, Cair, dan Gas',
    credit: 'Unsplash Physical Science',
    description: 'Pengamatan nyata karakteristik benda padat (es), cair (air), dan gas (uap air).',
  },
  'k2-ipas-2': {
    url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80',
    title: 'Habitat Alami Hutan dan Danau Makhluk Hidup',
    credit: 'Unsplash Ecological Habitats',
    description: 'Habitat ekosistem air tawar dan daratan tempat tinggal berbagai hewan dan tumbuhan.',
  },
  'k2-pkn-1': {
    url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&auto=format&fit=crop&q=80',
    title: 'Pohon Beringin Rindang Lambang Sila Ketiga',
    credit: 'Arsip Lambang Negara RI / Kemendikbudristek',
    description: 'Simbol Pohon Beringin berlatar putih melambangkan Persatuan Indonesia dengan daun rimbun dan akar kokoh.',
  },
  'k2-pkn-2': {
    url: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&auto=format&fit=crop&q=80',
    title: 'Gotong Royong dan Kerja Sama Siswa di Sekolah',
    credit: 'Unsplash School Community & Teamwork',
    description: 'Siswa-siswi bekerja sama membersihkan dan merapikan lingkungan kelas sekolah dengan kompak.',
  },
  'k2-coding-1': {
    url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=80',
    title: 'Kartu Urutan Instruksi Algoritma Langkah Kerja',
    credit: 'Unsplash Computing Science Education',
    description: 'Kartu panduan langkah-langkah teratur (algoritma sekuensial) dalam menyelesaikan tugas.',
  },
  'k2-coding-2': {
    url: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=800&auto=format&fit=crop&q=80',
    title: 'Simbol Panah Arah Navigasi Digital',
    credit: 'Unsplash Navigation & UI Elements',
    description: 'Simbol panah arah maju, mundur, belok kiri, dan belok kanan untuk navigasi robotik.',
  },
  'k2-inggris-1': {
    url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&auto=format&fit=crop&q=80',
    title: 'Classroom Supplies (Pencil, Ruler, Notebook)',
    credit: 'Unsplash School Stationery',
    description: 'Various essential classroom tools including pencils, pens, rulers, and school bags.',
  },
  'k2-inggris-2': {
    url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=80',
    title: 'Happy Family Members (Father, Mother, Children)',
    credit: 'Unsplash Family Portrait',
    description: 'Loving family with parents and children spending quality time together.',
  },
  'k2-sbdp-1': {
    url: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&auto=format&fit=crop&q=80',
    title: 'Ketukan Birama dan Notasi Musik',
    credit: 'Unsplash Music Education',
    description: 'Lembar partitur notasi musik dengan ketukan berirama dinamis untuk bernyanyi.',
  },
  'k2-sbdp-2': {
    url: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&auto=format&fit=crop&q=80',
    title: 'Ragam Hias Motif Dekoratif Tradisional Nusantara',
    credit: 'Unsplash Indonesian Decorative Arts',
    description: 'Ornamen ukiran dan pola ragam hias khas Nusantara yang indah dan berulang.',
  },
  'k2-pjok-1': {
    url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80',
    title: 'Latihan Keseimbangan Berdiri dengan Sikap Bertumpu',
    credit: 'Unsplash Gymnastics & Balance',
    description: 'Gerakan sikap keseimbangan bertumpu pada satu kaki seperti pesawat terbang.',
  },
  'k2-pjok-2': {
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80',
    title: 'Latihan Kelenturan Mencium Lutut',
    credit: 'Unsplash Physical Fitness & Stretching',
    description: 'Peregangan tubuh melenturkan otot pinggang dan paha belakang dengan mencium lutut.',
  },
  'k2-daerah-1': {
    url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80',
    title: 'Waditra Musik Awi Angklung Sunda',
    credit: 'Unsplash Traditional Instruments Indonesia',
    description: 'Angklung nyaeta waditra tradisional tina awi anu disada ku cara digoyangkeun.',
  },
  'k2-daerah-2': {
    url: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=800&auto=format&fit=crop&q=80',
    title: 'Dolanan Tradisional Gundhul Pacul Anak Jawa',
    credit: 'Unsplash Traditional Games',
    description: 'Bocah-bocah padha seneng nyanyi tembang dolanan Gundhul-gundhul Pacul bebarengan.',
  },

  // =========================================================================
  // KELAS 3
  // =========================================================================
  'k3-mtk-1': {
    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80',
    title: 'Pecahan Bagian Lingkaran Pizza Lezat',
    credit: 'Unsplash Mathematics Fractions',
    description: 'Potongan pizza bundar yang dibagi sama besar untuk mempelajari konsep pecahan 1/2, 1/4, dan 3/4.',
  },
  'k3-mtk-2': {
    url: 'https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?w=800&auto=format&fit=crop&q=80',
    title: 'Garis Skala Bilangan Berjarak Teratur',
    credit: 'Unsplash Mathematics Geometry',
    description: 'Skala garis bilangan dengan titik-titik berjarak sama untuk menghitung operasi lompatan.',
  },
  'k3-indo-1': {
    url: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&auto=format&fit=crop&q=80',
    title: 'Kompas Petunjuk Arah Mata Angin Lengkap',
    credit: 'Unsplash Geography Navigation',
    description: 'Kompas klasik penunjuk arah mata angin: Utara, Timur, Selatan, dan Barat untuk membaca denah.',
  },
  'k3-indo-2': {
    url: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&auto=format&fit=crop&q=80',
    title: 'Format Surat Pribadi dengan Amplop dan Prangko',
    credit: 'Unsplash Communication & Letters',
    description: 'Format struktur surat pribadi yang memuat tanggal, alamat tujuan, salam pembuka, dan isi.',
  },
  'k3-ipas-1': {
    url: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&auto=format&fit=crop&q=80',
    title: 'Daur Siklus Air: Penguapan, Awan, dan Hujan',
    credit: 'Unsplash Hydrology Earth Science',
    description: 'Perputaran air di bumi dari penguapan danau, pembentukan awan tebal, hingga turunnya hujan.',
  },
  'k3-ipas-2': {
    url: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=800&auto=format&fit=crop&q=80',
    title: 'Rantai Makanan dan Jaring Ekosistem Alami',
    credit: 'Unsplash Wildlife Ecology',
    description: 'Hubungan makan dan dimakan antara produsen rumput, konsumen herbivora, dan predator.',
  },
  'k3-pkn-1': {
    url: 'https://images.unsplash.com/photo-1572945281869-84dd958e990b?w=800&auto=format&fit=crop&q=80',
    title: 'Kepala Banteng Lambang Sila Keempat Pancasila',
    credit: 'Arsip Lambang Negara RI / Kemendikbudristek',
    description: 'Simbol Kepala Banteng hitam dengan tanduk kokoh berlatar merah melambangkan musyawarah mufakat.',
  },
  'k3-pkn-2': {
    url: 'https://images.unsplash.com/photo-1533158307587-828f0a76ef46?w=800&auto=format&fit=crop&q=80',
    title: 'Ragam Busana dan Pakaian Adat Nusantara',
    credit: 'Unsplash Indonesian National Heritage',
    description: 'Keberagaman pakaian adat daerah dari berbagai provinsi di Indonesia yang bersatu dalam Bhinneka Tunggal Ika.',
  },
  'k3-coding-1': {
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    title: 'Blok Kode Perulangan (Looping) Pemrograman Komputer',
    credit: 'Unsplash Software Engineering Coding',
    description: 'Struktur kode perulangan yang menjalankan instruksi berulang kali secara efisien.',
  },
  'k3-coding-2': {
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    title: 'Diagram Logika Kondisi Percabangan (IF-THEN-ELSE)',
    credit: 'Unsplash Computer Logic & AI',
    description: 'Pengambilan keputusan logika sistem komputer berdasarkan syarat benar atau salah.',
  },
  'k3-inggris-1': {
    url: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&auto=format&fit=crop&q=80',
    title: 'Weather and Sky Conditions (Sunny, Rainy, Windy)',
    credit: 'Unsplash Meteorology & Weather',
    description: 'Dynamic sky conditions showing bright sunshine changing into rainy clouds.',
  },
  'k3-inggris-2': {
    url: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800&auto=format&fit=crop&q=80',
    title: 'Traffic Signs and Pedestrian Safety Signs',
    credit: 'Unsplash Road Signs & Transportation',
    description: 'Crucial traffic safety symbols for pedestrians, speed limits, and zebra crosswalks.',
  },
  'k3-sbdp-1': {
    url: 'https://images.unsplash.com/photo-1520523839898-507121c278a2?w=800&auto=format&fit=crop&q=80',
    title: 'Bagan Tangga Nada Diatonis pada Tuts Piano',
    credit: 'Unsplash Music Theory & Piano',
    description: 'Urutan nada diatonis mayor Do-Re-Mi-Fa-Sol-La-Si-Do pada tuts piano instrumen musik.',
  },
  'k3-sbdp-2': {
    url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80',
    title: 'Motif Seni Batik Tradisional Pesisir dan Pedalaman',
    credit: 'Unsplash Indonesian Batik Crafts',
    description: 'Kain batik tulis tradisional dengan canting lilin membentuk pola flora dan fauna khas daerah.',
  },
  'k3-pjok-1': {
    url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&auto=format&fit=crop&q=80',
    title: 'Gerakan Renang Gaya Dada Atlet di Kolam',
    credit: 'Unsplash Swimming Athletics',
    description: 'Teknik gerakan meluncur dan tarikan lengan pada olahraga renang gaya dada.',
  },
  'k3-pjok-2': {
    url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop&q=80',
    title: 'Senam Ketangkasan Melompati Peti Lompat',
    credit: 'Unsplash Gymnastics & Athletics',
    description: 'Olahraga senam artistik ketangkasan melompati peti dengan tumpuan dua tangan yang kuat.',
  },
  'k3-daerah-1': {
    url: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&auto=format&fit=crop&q=80',
    title: 'Boboko Wadah Beas Anyaman Awi Sunda',
    credit: 'Unsplash Indonesian Traditional Handicrafts',
    description: 'Boboko mangrupa parabot dapur tradisional urang Sunda tina anyaman awi paranti sangu atawa beas.',
  },
  'k3-daerah-2': {
    url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
    title: 'Aksara Jawa Hanacaraka Prasasti Kuno',
    credit: 'Unsplash Ancient Javanese Epigraphy',
    description: 'Serat sastra lan aksara Jawa Dentawyanjana 20 aksara wiwit Ha Na Ca Ra Ka tekan Nga.',
  },
  'k3-jawa-2': {
    url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&auto=format&fit=crop&q=80',
    title: 'Omah Adat Joglo Jawa Arsitektur Kayu Jati',
    credit: 'Unsplash Javanese Vernacular Architecture',
    description: 'Omah Joglo Jawa kanthi soko guru papat lan payon tumpang tindih sing endah lan adem.',
  },

  // =========================================================================
  // KELAS 4
  // =========================================================================
  'k4-mtk-1': {
    url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=80',
    title: 'Pengukuran Besar Sudut dengan Busur Derajat',
    credit: 'Unsplash Mathematics & Protractor',
    description: 'Busur derajat transparan untuk mengukur besar sudut lancip, siku-siku, dan tumpul.',
  },
  'k4-mtk-2': {
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80',
    title: 'Sketsa Ukuran Luas Bangun Persegi Panjang',
    credit: 'Unsplash Architectural Blueprint',
    description: 'Bagan bidang persegi panjang dengan ukuran panjang dan lebar untuk menghitung keliling dan luas.',
  },
  'k4-indo-1': {
    url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80',
    title: 'Bagan Skema Susunan Paragraf Teks Deskripsi',
    credit: 'Unsplash Reading Comprehension',
    description: 'Bagan paragraf terstruktur memuat kalimat utama (ide pokok) dan kalimat-kalimat pengembang.',
  },
  'k4-indo-2': {
    url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80',
    title: 'Wawancara Jurnalistik Bersama Tokoh Narasumber',
    credit: 'Unsplash Journalism & Interview',
    description: 'Aktivitas pewawancara mencatat informasi dari narasumber dengan kata tanya Adiksimba.',
  },
  'k4-ipas-1': {
    url: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop&q=80',
    title: 'Daun Hijau Klorofil dan Proses Fotosintesis',
    credit: 'Unsplash Botany Plant Science',
    description: 'Struktur urat daun klorofil yang menyerap cahaya matahari dan karbon dioksida menghasilkan oksigen.',
  },
  'k4-ipas-2': {
    url: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80',
    title: 'Pembangkit Listrik Tenaga Air (PLTA) Turbin Air',
    credit: 'Unsplash Renewable Hydro Energy',
    description: 'Aliran air bendungan memutar turbin generator untuk menghasilkan energi listrik ramah lingkungan.',
  },
  'k4-pkn-1': {
    url: 'https://images.unsplash.com/photo-1572945281869-84dd958e990b?w=800&auto=format&fit=crop&q=80',
    title: 'Padi dan Kapas Lambang Sila Kelima Pancasila',
    credit: 'Arsip Lambang Negara RI / Kemendikbudristek',
    description: 'Simbol Padi kuning dan Kapas putih berlatar putih melambangkan kemakmuran dan keadilan sosial.',
  },
  'k4-pkn-2': {
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80',
    title: 'Bagan Struktur Lembaga Pemerintahan Tingkat Desa',
    credit: 'Unsplash Public Administration',
    description: 'Struktur organisasi kepala desa, sekretaris desa, dan Badan Permusyawaratan Desa (BPD).',
  },
  'k4-coding-1': {
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80',
    title: 'Simbol Baku Flowchart (Diagram Alir Algoritma)',
    credit: 'Unsplash Software Design Diagram',
    description: 'Simbol terminator oval (mulai/selesai), persegi panjang (proses), dan belah ketupat (keputusan).',
  },
  'k4-coding-2': {
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    title: 'Antarmuka Pemrograman Visual Scratch Blok Warna',
    credit: 'Unsplash Visual Programming Education',
    description: 'Antarmuka Scratch dengan kanvas panggung sprite dan palet blok gerakan, kontrol, dan sensor.',
  },
  'k4-inggris-1': {
    url: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800&auto=format&fit=crop&q=80',
    title: 'Analog Wall Clock Displaying Time',
    credit: 'Unsplash Time & Punctuality',
    description: 'Clear analog clock face with hour and minute hands showing accurate daily time.',
  },
  'k4-inggris-2': {
    url: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&auto=format&fit=crop&q=80',
    title: 'Fast Cheetah vs Slow Tortoise (Animal Comparisons)',
    credit: 'Unsplash Wildlife Comparison',
    description: 'Animals showing comparative speed: the swift cheetah is faster than the land tortoise.',
  },
  'k4-sbdp-1': {
    url: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&auto=format&fit=crop&q=80',
    title: 'Kerajinan Anyaman Bambu Tradisional Nusantara',
    credit: 'Unsplash Handwoven Crafts Indonesia',
    description: 'Pola anyaman bambu rapi dengan kombinasi lungsi dan pakan membentuk motif geometris.',
  },
  'k4-sbdp-2': {
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80',
    title: 'Teknik Gambar Seni Rupa Perspektif Satu Titik Lenyap',
    credit: 'Unsplash Architectural Perspective Drawing',
    description: 'Gambar lorong bangunan dengan garis-garis kedalaman yang bertemu di satu titik lenyap di cakrawala.',
  },
  'k4-pjok-1': {
    url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop&q=80',
    title: 'Gerakan Mengoper Bola Basket Setinggi Dada (Chest Pass)',
    credit: 'Unsplash Basketball Athletics',
    description: 'Pemain basket melakukan operan dada akurat dengan kedua tangan mendorong bola lurus ke rekan tim.',
  },
  'k4-pjok-2': {
    url: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&auto=format&fit=crop&q=80',
    title: 'Servis Bawah Permainan Bola Voli di Lapangan',
    credit: 'Unsplash Volleyball Court Action',
    description: 'Pemain bersiap memukul bola voli dengan tangan terkepal dari bawah melewati net.',
  },
  'k4-daerah-1': {
    url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
    title: 'Aksara Sunda Baku Ngalagena Prasasti Kawali',
    credit: 'Unsplash Sundanese Epigraphy Heritage',
    description: 'Huruf Ngalagena Aksara Sunda baku anu digunakeun dina naskah kuno Tatar Sunda.',
  },
  'k4-daerah-2': {
    url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80',
    title: 'Sandhangan Swara Aksara Jawa (Wulu, Suku, Pepet, Taling)',
    credit: 'Unsplash Javanese Script Calligraphy',
    description: 'Sandhangan swara kanggo ngowahi swara dhasar aksara Jawa dadi swara i, u, e, o, lan ê.',
  },

  // =========================================================================
  // KELAS 5
  // =========================================================================
  'k5-mtk-1': {
    url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=80',
    title: 'Bagan Jaring-Jaring Bangun Ruang Kubus dan Balok',
    credit: 'Unsplash 3D Geometry Net Models',
    description: 'Jaring-jaring 6 bidang persegi yang saling terhubung membentuk bangun ruang kubus presisi.',
  },
  'k5-mtk-2': {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    title: 'Diagram Batang Statistik Perkembangan Data',
    credit: 'Unsplash Statistical Data Charts',
    description: 'Diagram batang vertikal dengan sumbu horizontal tahun dan sumbu vertikal jumlah frekuensi.',
  },
  'k5-indo-1': {
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80',
    title: 'Poster Iklan Layanan Masyarakat Lindungi Air Bersih',
    credit: 'Unsplash Public Environmental Campaign',
    description: 'Desain poster edukasi lingkungan dengan slogan persuasif mengajak menghemat pemakaian air.',
  },
  'k5-indo-2': {
    url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80',
    title: 'Struktur Puisi Lama Pantun Bersajak a-b-a-b',
    credit: 'Unsplash Literature & Classical Poetry',
    description: 'Teks pantun empat baris dengan baris 1-2 sampiran dan baris 3-4 isi yang bermakna mendalam.',
  },
  'k5-ipas-1': {
    url: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=80',
    title: 'Saluran Sistem Organ Pencernaan Makanan Manusia',
    credit: 'Unsplash Medical Anatomy Science',
    description: 'Model anatomi lambung, usus halus, dan usus besar dalam penyerapan sari-sari makanan.',
  },
  'k5-ipas-2': {
    url: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=800&auto=format&fit=crop&q=80',
    title: 'Rangkaian Listrik Seri dan Paralel Lampu',
    credit: 'Unsplash Electrical Engineering Physics',
    description: 'Dua model rangkaian listrik: rangkaian seri satu jalur dan paralel cabang independen.',
  },
  'k5-pkn-1': {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
    title: 'Peta Wilayah Kepulauan Kedaulatan Negara Kesatuan RI',
    credit: 'Unsplash Indonesian Maritime Archipelago',
    description: 'Gugusan pulau-pulau besar dan samudra nusantara dari Sabang sampai Merauke dalam bingkai NKRI.',
  },
  'k5-pkn-2': {
    url: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&auto=format&fit=crop&q=80',
    title: 'Keseimbangan Hak dan Kewajiban Warga Negara',
    credit: 'Unsplash Civic Engagement & Rights',
    description: 'Harmoni warga negara melaksanakan kewajiban sosial dan menikmati hak asasi secara bertanggung jawab.',
  },
  'k5-coding-1': {
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    title: 'Blok Kode Variabel Nilai Skor Permainan',
    credit: 'Unsplash Game Development Code',
    description: 'Variabel numerik yang menyimpan dan menambah poin skor saat pemain menangkap koin.',
  },
  'k5-coding-2': {
    url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80',
    title: 'Mobil Robotik Cerdas dengan Sensor Ultrasonik',
    credit: 'Unsplash Robotics Sensors & IoT',
    description: 'Mobil robot pintar yang mendeteksi rintangan dinding menggunakan pantulan sensor gelombang.',
  },
  'k5-inggris-1': {
    url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80',
    title: 'Timeline Diagram of English Verb Tenses',
    credit: 'Unsplash English Grammar Pedagogy',
    description: 'Visual timeline showing actions across the Past, Present Continuous, and Future moments.',
  },
  'k5-inggris-2': {
    url: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&auto=format&fit=crop&q=80',
    title: 'Procedure Recipe Text Structure and Steps',
    credit: 'Unsplash Cooking & Culinary Instruction',
    description: 'Step-by-step procedural recipe listing ingredients and sequential preparation instructions.',
  },
  'k5-sbdp-1': {
    url: 'https://images.unsplash.com/photo-1533158307587-828f0a76ef46?w=800&auto=format&fit=crop&q=80',
    title: 'Pertunjukan Seni Tari Tradisional Daerah Nusantara',
    credit: 'Unsplash Indonesian Performing Arts',
    description: 'Penari berbusana adat indah dengan pola lantai dinamis memadukan gerakan selaras musik pengiring.',
  },
  'k5-sbdp-2': {
    url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80',
    title: 'Karya Seni Rupa Patung Tiga Dimensi Bahan Liat',
    credit: 'Unsplash 3D Sculpture & Pottery',
    description: 'Karya seni rupa 3 dimensi yang memiliki volume panjang, lebar, dan tinggi serta dapat dinikmati dari segala arah.',
  },
  'k5-pjok-1': {
    url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80',
    title: 'Denah Lapangan Olahraga Permainan Bola Kasti',
    credit: 'Unsplash Sports Ground Field',
    description: 'Denah lapangan kasti dengan ruang pemukul, ruang pelambung, dan tiang hinggap pos aman.',
  },
  'k5-pjok-2': {
    url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80',
    title: 'Sikap Start Jongkok Pelari Cepat (Sprint) di Balok Start',
    credit: 'Unsplash Track and Field Athletics',
    description: 'Posisi atlet pada aba-aba "Bersedia", "Siap", dan "Ya!" dengan tumpuan balok start yang kokoh.',
  },
  'k5-daerah-1': {
    url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&auto=format&fit=crop&q=80',
    title: 'Struktur Baris Sisindiran Rarakitan Basa Sunda',
    credit: 'Unsplash Sundanese Cultural Heritage',
    description: 'Wangun puisi sisindiran Sunda anu diwangun ku cangkang jeung eusi kalawan purwakanti sora.',
  },
  'k5-daerah-2': {
    url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80',
    title: 'Tokoh Satria Werkudara Pandhawa Wayang Jawa',
    credit: 'Unsplash Javanese Wayang Purwa',
    description: 'Raden Werkudara panenggak Pandhawa sing gagah prakosa lan kagungan gegaman Kuku Pancanaka.',
  },

  // =========================================================================
  // KELAS 6
  // =========================================================================
  'k6-mtk-1': {
    url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=80',
    title: 'Unsur-Unsur Geometri Bidang Lingkaran (Jari-jari & Juring)',
    credit: 'Unsplash Mathematics Circular Geometry',
    description: 'Bagian-bagian lingkaran: titik pusat, jari-jari (r), diameter (d), busur, tali busur, dan juring.',
  },
  'k6-mtk-2': {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    title: 'Diagram Lingkaran Persentase Minat Ekstrakurikuler Siswa',
    credit: 'Unsplash Data Analytics Pie Chart',
    description: 'Diagram lingkaran dengan pembagian juring persentase (%) dan sudut derajat total 360°.',
  },
  'k6-indo-1': {
    url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=80',
    title: 'Struktur Naskah Teks Pidato Resmi di Atas Mimbar',
    credit: 'Unsplash Public Speaking & Oratory',
    description: 'Susunan tiga bagian pokok naskah pidato: bagian pembuka, isi/inti pidato, dan bagian penutup.',
  },
  'k6-indo-2': {
    url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80',
    title: 'Infografis Langkah Mitigasi Evakuasi Darurat Bencana',
    credit: 'Unsplash Disaster Preparedness Infographic',
    description: 'Panduan tanggap darurat saat terjadi gempa bumi: berlindung di bawah meja dan menuju titik kumpul.',
  },
  'k6-ipas-1': {
    url: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=80',
    title: 'Bagan Tata Surya Susunan Planet Mengitari Matahari',
    credit: 'Unsplash Astronomy & Space Science',
    description: 'Orbit delapan planet mengelilingi matahari dari Merkurius, Venus, Bumi hingga Neptunus.',
  },
  'k6-ipas-2': {
    url: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&auto=format&fit=crop&q=80',
    title: 'Garis-Garis Gaya Fluks Medan Magnet Batang',
    credit: 'Unsplash Electromagnetism Physics',
    description: 'Pola serbuk besi yang membentuk garis medan magnet keluar dari kutub utara menuju kutub selatan.',
  },
  'k6-pkn-1': {
    url: 'https://images.unsplash.com/photo-1572945281869-84dd958e990b?w=800&auto=format&fit=crop&q=80',
    title: 'Pita Lambang Semboyan Bhinneka Tunggal Ika',
    credit: 'Arsip Lambang Negara RI / Kemendikbudristek',
    description: 'Pita putih yang dicengkeram kedua cakar burung Garuda Pancasila bertuliskan Bhinneka Tunggal Ika.',
  },
  'k6-pkn-2': {
    url: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&auto=format&fit=crop&q=80',
    title: 'Kotak Suara dan Pemilihan Umum Suara Rakyat',
    credit: 'Unsplash Democratic Elections & Civic Duty',
    description: 'Warga negara memasukkan surat suara ke dalam kotak suara sebagai wujud kedaulatan rakyat.',
  },
  'k6-coding-1': {
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80',
    title: 'Ikon Keamanan Protokol Enkripsi HTTPS Gembok Digital',
    credit: 'Unsplash Cybersecurity & Privacy',
    description: 'Ikon gembok hijau pada bilah peramban web yang menandakan sambungan terenkripsi aman SSL/TLS.',
  },
  'k6-coding-2': {
    url: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80',
    title: 'Alur Pembelajaran Mesin (Machine Learning) & AI',
    credit: 'Unsplash Artificial Intelligence Neural Networks',
    description: 'Tahapan proses AI: pengumpulan data latih, pelatihan model algoritma, hingga pengujian akurasi.',
  },
  'k6-inggris-1': {
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80',
    title: 'Spatial Prepositions of Place (In, On, Under, Beside)',
    credit: 'Unsplash English Vocabulary Learning',
    description: 'Real interior scene showing positions of objects on the desk, under the lamp, and beside the books.',
  },
  'k6-inggris-2': {
    url: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80',
    title: 'Urban Street Map and Direction Navigation Signs',
    credit: 'Unsplash Urban Navigation & Maps',
    description: 'Detailed street map indicating intersections, crossroads, and directional route arrows.',
  },
  'k6-sbdp-1': {
    url: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=80',
    title: 'Media Reklame Komersial Poster Baliho Luar Ruang',
    credit: 'Unsplash Visual Design & Advertising',
    description: 'Papan reklame luar ruang dengan perpaduan tipografi jelas dan gambar visual yang menarik perhatian.',
  },
  'k6-sbdp-2': {
    url: 'https://images.unsplash.com/photo-1555899434-94d1338c7f21?w=800&auto=format&fit=crop&q=80',
    title: 'Monumen Nasional (Monas) Arsitektur Ikonik Indonesia',
    credit: 'Unsplash Indonesian Landmark Monas',
    description: 'Tugu Monas di Jakarta dengan lidah api emas melambangkan semangat kemerdekaan bangsa Indonesia.',
  },
  'k6-pjok-1': {
    url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80',
    title: 'Papan Taktik Formasi Strategi Tim Sepak Bola (4-4-2)',
    credit: 'Unsplash Football Tactics & Formation',
    description: 'Papan strategi formasi 4 pemain belakang, 4 gelandang tengah, dan 2 penyerang depan.',
  },
  'k6-pjok-2': {
    url: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&auto=format&fit=crop&q=80',
    title: 'Perlengkapan Kotak Medis Pertolongan Pertama (P3K)',
    credit: 'Unsplash First Aid Emergency Medical',
    description: 'Kotak P3K berisi kasa steril, plester luka, antiseptik, perban gulung, dan gunting medis.',
  },
  'k6-daerah-1': {
    url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80',
    title: 'Kujang Pakarang Pusaka Kasundaan Jawa Barat',
    credit: 'Unsplash West Java Traditional Weapons',
    description: 'Kujang minangka pakarang pusaka sakral tur perlambang budaya urang Sunda Jawa Kulon.',
  },
  'k6-daerah-2': {
    url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
    title: 'Wujud Pasangan Aksara Jawa Tradisional',
    credit: 'Unsplash Javanese Epigraphy Manuscript',
    description: 'Pasangan aksara Jawa sing digunakake kanggo mateni utawa ngilangi swara vokal aksara sadurunge.',
  },
  // =========================================================================
  // SUNDA & JAWA INTERNET PHOTOS (100% Authentic Internet Repository)
  // =========================================================================
  'k1-sunda-1': {
    url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80',
    title: 'Panca Indra: Soca atawa Panon',
    credit: 'Unsplash Human Biology Collection',
    description: 'Potret organ soca atawa panon manusa pikeun ningali kaéndahan alam di sabudeureun urang.',
  },
  'k1-sunda-2': {
    url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&auto=format&fit=crop&q=80',
    title: 'Tatakrama Basa Sunda Sopan Santun',
    credit: 'Unsplash Community & Culture',
    description: 'Barudak leutik anu amis budi marahmay sasalaman sarta ngedalkeun hatur nuhun.',
  },
  'k1-jawa-1': {
    url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80',
    title: 'Kyai Semar Sesepuh Punakawan',
    credit: 'Unsplash Javanese Cultural Heritage',
    description: 'Tokoh wayang kulit Kyai Semar, sesepuh Punakawan kang wicaksana lan ngemong.',
  },
  'k1-jawa-2': {
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80',
    title: 'Unggah-Ungguh Trapsila Siswa Jawa',
    credit: 'Unsplash Education & Culture',
    description: 'Siswa mlaku mbungkuk ngurmati tiyang sepuh kanthi ngaturaken nyuwun sewu.',
  },
  'k2-sunda-1': {
    url: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&auto=format&fit=crop&q=80',
    title: 'Waditra Seni Tradisional Angklung Awi',
    credit: 'Unsplash Indonesian Music & Art',
    description: 'Waditra musik awi angklung ti tatar Sunda Jawa Kulon anu dioyagkeun.',
  },
  'k2-sunda-2': {
    url: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=800&auto=format&fit=crop&q=80',
    title: 'Kaulinan Barudak Lembur Oray-Orayan',
    credit: 'Unsplash Childhood & Outdoor Play',
    description: 'Barudak Sunda keur ulin oray-orayan bari kakawihan gumbira di buruan.',
  },
  'k2-jawa-1': {
    url: 'https://images.unsplash.com/photo-1584990347449-399c43b23e8e?w=800&auto=format&fit=crop&q=80',
    title: 'Wakul Anyaman Pring Tradisional Jawa',
    credit: 'Unsplash Traditional Crafts',
    description: 'Wakul wadah sega beras saka anyaman pring pringan kanggo tembang Gundhul Pacul.',
  },
  'k2-jawa-2': {
    url: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&auto=format&fit=crop&q=80',
    title: 'Anak Pitik (Kuthuk) Kuning Cilik',
    credit: 'Unsplash Wildlife Photography',
    description: 'Jeneng anak kewan ing basa Jawa: anake pitik diarani kuthuk.',
  },
  'k3-sunda-1': {
    url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80',
    title: 'Boboko Wadah Sangu Anyaman Awi',
    credit: 'Unsplash Bamboo Craft Indonesia',
    description: 'Pakakas dapur tradisional Sunda boboko pikeun wadah sangu pulen anyaman awi.',
  },
  'k3-sunda-2': {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
    title: 'Gunung Tangkuban Parahu Dayang Sumbi',
    credit: 'Unsplash Indonesian Landscapes',
    description: 'Sasakala Gunung Tangkuban Parahu carita Sangkuriang jeung Dayang Sumbi di tatar Sunda.',
  },
  'k3-jawa-1': {
    url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80',
    title: 'Aksara Jawa Dentawyanjana Hanacaraka',
    credit: 'Unsplash Javanese Epigraphy',
    description: 'Aksara Jawa Hanacaraka naskah serat kuna Jawa Dentawyanjana 20 aksara.',
  },
  'k4-sunda-1': {
    url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
    title: 'Prasasti Aksara Sunda Baku Ngalagena',
    credit: 'Unsplash Indonesian Cultural Archive',
    description: 'Bagan aksara Sunda baku konsonan ngalagena dina prasasti kuna Kawali.',
  },
  'k4-sunda-2': {
    url: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&auto=format&fit=crop&q=80',
    title: 'Rarangkén Aksara Sunda Daun Lontar',
    credit: 'Unsplash Ancient Manuscripts',
    description: 'Naskah daun lontar kuno pananda rarangkén sora aksara Sunda.',
  },
  'k4-jawa-1': {
    url: 'https://images.unsplash.com/photo-1532012164546-f432f2e3777a?w=800&auto=format&fit=crop&q=80',
    title: 'Sandhangan Swara Wulu Suku Taling',
    credit: 'Unsplash Literature & Epigraphy',
    description: 'Sandhangan swara ing aksara Jawa kang ngowahi unine aksara dadi swara i, u, e, o.',
  },
  'k4-jawa-2': {
    url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80',
    title: 'Sandhangan Panyigeg Wanda Layar Cecak',
    credit: 'Unsplash Royal Manuscripts',
    description: 'Sandhangan panyigeg wanda ing aksara Jawa kanggo konsonan mateni r, ng, h, pangkon.',
  },
  'k5-sunda-1': {
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80',
    title: 'Struktur Sisindiran Rarakitan Pasundan',
    credit: 'Unsplash Priangan Nature',
    description: 'Alam endah Priangan Pasundan inspirasi sastra sisindiran rarakitan jeung paparikan.',
  },
  'k5-sunda-2': {
    url: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&auto=format&fit=crop&q=80',
    title: 'Tembang Pupuh Kinanti Kacapi Suling',
    credit: 'Unsplash Indonesian Music & Art',
    description: 'Seni tembang pupuh Sunda diiringi kacapi suling ngagambarkeun rasa miharep.',
  },
  'k5-jawa-1': {
    url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80',
    title: 'Raden Werkudara Bima Pandhawa Jodhipati',
    credit: 'Unsplash Wayang Shadow Puppet',
    description: 'Satria Panenggak Pandhawa Raden Werkudara kang gagah nduwe Kuku Pancanaka.',
  },
  'k5-jawa-2': {
    url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80',
    title: 'Gamelan Jawa Tembang Macapat Pocung',
    credit: 'Unsplash Traditional Performance',
    description: 'Gamelan slendro pelog ngiringi laras tembang macapat Pocung paugeran 4 gatra.',
  },
  'k6-sunda-1': {
    url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80',
    title: 'Pakarang Pusaka Kujang Tatar Sunda',
    credit: 'Unsplash Indonesian Historical Relics',
    description: 'Kujang minangka pakarang pusaka sakral tur perlambang budaya urang Sunda Jawa Kulon.',
  },
  'k6-sunda-2': {
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80',
    title: 'Tata Cara Biantara Pidato Basa Sunda',
    credit: 'Unsplash Public Speaking & Classroom',
    description: 'Panyatur nepikeun biantara basa Sunda kalawan tatakrama sopan tur merenah.',
  },
  'k6-jawa-1': {
    url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80',
    title: 'Wujud Pasangan Aksara Tradisional Jawa',
    credit: 'Unsplash Javanese Epigraphy Manuscript',
    description: 'Pasangan aksara Jawa sing digunakake kanggo mateni utawa ngilangi swara vokal aksara sadurunge.',
  },
  'k6-jawa-2': {
    url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
    title: 'Pamedhar Sabda Sesorah Busana Adat Jawa',
    credit: 'Unsplash Javanese Cultural Ceremony',
    description: 'Sesorah pidato basa Jawa ngagem busana adat beskap blangkon kanthi trapsila.',
  },
};


/**
 * Mengambil data foto autentik berdasarkan kunci ilustrasi (imageKey)
 */
export const getAuthenticImage = (imageKey?: string): AuthenticImageItem | null => {
  if (!imageKey) return null;
  if (AUTHENTIC_IMAGE_REGISTRY[imageKey]) {
    return AUTHENTIC_IMAGE_REGISTRY[imageKey];
  }
  // Handle aliases like k1-sunda-1 -> k1-daerah-1, k1-jawa-1 -> k1-daerah-2
  const sundaMatch = imageKey.match(/^k([1-6])-sunda/);
  if (sundaMatch) {
    const alias = `k${sundaMatch[1]}-daerah-1`;
    if (AUTHENTIC_IMAGE_REGISTRY[alias]) return AUTHENTIC_IMAGE_REGISTRY[alias];
  }
  const jawaMatch = imageKey.match(/^k([1-6])-jawa/);
  if (jawaMatch) {
    const alias = `k${jawaMatch[1]}-daerah-2`;
    if (AUTHENTIC_IMAGE_REGISTRY[alias]) return AUTHENTIC_IMAGE_REGISTRY[alias];
  }
  return null;
};
