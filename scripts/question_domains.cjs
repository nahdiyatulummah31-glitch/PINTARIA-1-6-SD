// scripts/question_domains.cjs
/**
 * Domain-Specific Question Generators
 * Provides deep, syllabus-compliant questions with full explanations, hints, and varied options.
 */

function generateMathQuestion(domain, qNum, difficulty, lang, grade, topic) {
  const isEn = lang === 'en';
  const prefix = isEn ? `Question ${qNum} on ${topic}: ` : `Soal No. ${qNum} Materi ${topic}: `;

  // Mathematical parameter variation based on qNum
  const v1 = (qNum * 3 + 7) % 50 + 5;
  const v2 = (qNum * 2 + 11) % 30 + 3;
  const v3 = v1 + v2;
  const vMult = ((qNum % 9) + 2) * 5;

  let question = '';
  let correctOption = '';
  let wrongOptions = [];
  let explanation = '';
  let hint = '';

  if (domain === 'math_measurement_nonstandard') {
    if (difficulty === 'Mudah') {
      question = `Andi mengukur panjang meja belajarnya menggunakan jengkal tangan. Panjang meja tersebut adalah ${10 + (qNum % 5)} jengkal. Mengapa jengkal disebut satuan tidak baku?`;
      correctOption = 'Karena ukuran jengkal setiap orang berbeda-beda';
      wrongOptions = [
        'Karena jengkal hanya boleh dipakai untuk mengukur buku',
        'Karena jengkal menggunakan alat ukur meteran resmi',
        'Karena jengkal menghasilkan ukuran yang selalu sama persis untuk semua orang'
      ];
      explanation = 'Jengkal, depa, dan langkah merupakan satuan tidak baku karena panjang jengkal tangan setiap orang berbeda-beda sehingga hasil ukurannya tidak seragam.';
      hint = 'Pikirkan apakah ukuran tangan anak kecil sama dengan tangan orang dewasa.';
    } else if (difficulty === 'Sedang') {
      const klip = 6 + (qNum % 4);
      const klip2 = klip + 3;
      question = `Pensil A panjangnya setara dengan ${klip} klip kertas. Pensil B panjangnya setara dengan ${klip2} klip kertas yang sama. Pernyataan yang paling tepat adalah...`;
      correctOption = `Pensil B lebih panjang ${klip2 - klip} klip kertas daripada Pensil A`;
      wrongOptions = [
        `Pensil A lebih panjang daripada Pensil B`,
        `Kedua pensil memiliki panjang yang persis sama`,
        `Pensil B lebih pendek ${klip2 - klip} klip kertas daripada Pensil A`
      ];
      explanation = `Pensil B (${klip2} klip) lebih panjang daripada Pensil A (${klip} klip) dengan selisih ${klip2 - klip} klip kertas.`;
      hint = 'Bandingkan jumlah klip kertas pada kedua pensil.';
    } else {
      question = `(Soal Cerita HOTS) Di timbangan jungkat-jungkit sederhana, 1 buah mangga seimbang dengan 4 buah jeruk. Sedangkan 1 buah jeruk seimbang dengan 3 buah duku. Berapa buah duku yang dibutuhkan agar seimbang dengan 1 buah mangga?`;
      correctOption = '12 buah duku';
      wrongOptions = ['7 buah duku', '9 buah duku', '15 buah duku'];
      explanation = '1 mangga = 4 jeruk. Tiap 1 jeruk = 3 duku. Maka 1 mangga = 4 x 3 duku = 12 buah duku.';
      hint = 'Kalikan jumlah jeruk dengan jumlah duku untuk setiap jeruk.';
    }
  } else if (domain === 'math_money_rupiah') {
    const keping = (qNum % 5) + 2;
    const nominal = 1000 * keping;
    if (difficulty === 'Mudah') {
      question = `Siti memiliki ${keping} lembar uang seribu rupiah (Rp1.000,00). Berapakah jumlah total uang yang dimiliki Siti?`;
      correctOption = `Rp${nominal.toLocaleString('id-ID')},00`;
      wrongOptions = [
        `Rp${(nominal + 2000).toLocaleString('id-ID')},00`,
        `Rp${(nominal - 1000 || 500).toLocaleString('id-ID')},00`,
        `Rp${(keping * 100).toLocaleString('id-ID')},00`
      ];
      explanation = `${keping} lembar uang Rp1.000,00 bernilai ${keping} x Rp1.000,00 = Rp${nominal.toLocaleString('id-ID')},00.`;
      hint = 'Kalikan banyak lembar uang dengan nilai per lembarnya.';
    } else if (difficulty === 'Sedang') {
      const hargaBuku = 7000 + (qNum % 3) * 1000;
      const uangBayar = 10000;
      const kembalian = uangBayar - hargaBuku;
      question = `Budi membeli buku cerita seharga Rp${hargaBuku.toLocaleString('id-ID')},00. Ia membayar dengan selembar uang Rp10.000,00. Berapa uang kembalian yang harus diterima Budi?`;
      correctOption = `Rp${kembalian.toLocaleString('id-ID')},00`;
      wrongOptions = [
        `Rp${(kembalian + 1000).toLocaleString('id-ID')},00`,
        `Rp${(kembalian - 1000).toLocaleString('id-ID')},00`,
        `Rp${(hargaBuku - 2000).toLocaleString('id-ID')},00`
      ];
      explanation = `Uang kembalian = Uang yang dibayarkan - Harga barang = Rp10.000,00 - Rp${hargaBuku.toLocaleString('id-ID')},00 = Rp${kembalian.toLocaleString('id-ID')},00.`;
      hint = 'Kurangkan uang yang dibayarkan dengan harga buku.';
    } else {
      question = `(Soal Cerita HOTS) Edo memiliki 1 lembar Rp20.000,00. Ia ingin menukarkan uang tersebut ke dalam pecahan Rp5.000,00 dan Rp2.000,00. Jika ia memperoleh 2 lembar Rp5.000,00, berapa lembar pecahan Rp2.000,00 yang ia dapatkan?`;
      correctOption = '5 lembar Rp2.000,00';
      wrongOptions = ['3 lembar Rp2.000,00', '4 lembar Rp2.000,00', '6 lembar Rp2.000,00'];
      explanation = '2 lembar Rp5.000,00 = Rp10.000,00. Sisa uang = Rp20.000,00 - Rp10.000,00 = Rp10.000,00. Jumlah pecahan Rp2.000,00 = Rp10.000 / Rp2.000 = 5 lembar.';
      hint = 'Hitung nilai 2 lembar Rp5.000,00 terlebih dahulu lalu cari sisa yang harus dibagi Rp2.000,00.';
    }
  } else if (domain === 'math_geometry_tessellation') {
    if (difficulty === 'Mudah') {
      question = `Bangun datar persegi memiliki ... sisi yang sama panjang dan ... sudut siku-siku.`;
      correctOption = '4 sisi dan 4 sudut siku-siku';
      wrongOptions = [
        '3 sisi dan 3 sudut lancip',
        '4 sisi dan 2 sudut tumpul',
        '2 sisi dan 4 sudut siku-siku'
      ];
      explanation = 'Persegi adalah bangun segi empat beraturan yang memiliki 4 sisi sama panjang dan 4 sudut siku-siku (90 derajat).';
      hint = 'Ingat ciri khas bentuk kotak persegi.';
    } else if (difficulty === 'Sedang') {
      question = `Pola pengubinan yang baik dan beraturan adalah susunan bangun datar yang...`;
      correctOption = 'Menutup bidang secara rapat tanpa ada celah dan tidak saling tumpang tindih';
      wrongOptions = [
        'Saling bertumpukan agar terlihat tebal dan berwarna-warni',
        'Menyisakan banyak celah kosong di antara bangun datar',
        'Hanya boleh menggunakan bangun lingkaran saja'
      ];
      explanation = 'Pengubinan (tessellation) adalah penutupan suatu permukaan menggunakan satu atau lebih bentuk geometris tanpa celah dan tanpa saling tumpang tindih.';
      hint = 'Pikirkan bagaimana ubin lantai dipasang di rumah.';
    } else {
      question = `(Soal HOTS) Pak Rahmat memasang ubin berbentuk persegi dengan panjang sisi 20 cm pada lantai berukuran panjang 2 m dan lebar 1 m. Berapa ubin yang dibutuhkan? (1 m = 100 cm)`;
      correctOption = '50 ubin';
      wrongOptions = ['40 ubin', '60 ubin', '100 ubin'];
      explanation = 'Luas lantai = 200 cm x 100 cm = 20.000 cm². Luas 1 ubin = 20 cm x 20 cm = 400 cm². Jumlah ubin = 20.000 / 400 = 50 ubin.';
      hint = 'Ubah satuan meter ke sentimeter terlebih dahulu sebelum menghitung luas.';
    }
  } else if (domain === 'math_data_charts') {
    const d1 = 15 + (qNum % 10);
    const d2 = 25 + (qNum % 5);
    const total = d1 + d2;
    if (difficulty === 'Mudah') {
      question = `Dalam sebuah piktogram, 1 gambar buku mewakili 5 buah buku. Jika terdapat 4 gambar buku pada tabel hari Senin, berapa jumlah buku sebenarnya?`;
      correctOption = '20 buku';
      wrongOptions = ['9 buku', '15 buku', '25 buku'];
      explanation = 'Setiap gambar mewakili 5 buku. Maka 4 gambar = 4 x 5 = 20 buah buku.';
      hint = 'Kalikan banyak simbol gambar dengan nilai yang diwakili tiap simbol.';
    } else if (difficulty === 'Sedang') {
      question = `Diagram batang menunjukkan penjualan susu: Senin = ${d1} kotak, Selasa = ${d2} kotak. Berapakah selisih penjualan susu antara hari Selasa dan Senin?`;
      correctOption = `${d2 - d1} kotak`;
      wrongOptions = [
        `${d2 - d1 + 5} kotak`,
        `${d2 - d1 - 3 || 1} kotak`,
        `${total} kotak`
      ];
      explanation = `Selisih penjualan = Penjualan Selasa - Penjualan Senin = ${d2} - ${d1} = ${d2 - d1} kotak.`;
      hint = 'Kurangkan nilai tertinggi dengan nilai terendah.';
    } else {
      question = `(Soal HOTS) Diagram batang menunjukkan siswa kelas 4: Gemar membaca = 12 anak, melukis = 10 anak, bernyanyi = 8 anak, dan olahraga = 15 anak. Berapa persentase anak yang gemar olahraga dari total seluruh siswa (45 anak)?`;
      correctOption = '33,33% (atau sepertiga bagian)';
      wrongOptions = ['25%', '50%', '15%'];
      explanation = 'Jumlah seluruh siswa = 12 + 10 + 8 + 15 = 45 siswa. Gemar olahraga = 15/45 = 1/3 bagian atau 33,33%.';
      hint = 'Bandingkan jumlah anak gemar olahraga dengan total seluruh anak.';
    }
  } else if (domain === 'math_ratio_scale') {
    const s = 100000;
    const jarakPeta = (qNum % 5) + 3;
    const jarakSebenarnyaKm = (jarakPeta * s) / 100000;
    if (difficulty === 'Mudah') {
      question = `Arti dari skala peta 1 : 100.000 adalah...`;
      correctOption = 'Setiap 1 cm pada peta mewakili 100.000 cm (atau 1 km) jarak sebenarnya di lapangan';
      wrongOptions = [
        'Setiap 1 meter pada peta mewakili 100 meter di lapangan',
        'Jarak sebenarnya selalu 100.000 meter untuk semua tempat',
        'Peta tersebut diperkecil sebanyak 10 kali dari aslinya'
      ];
      explanation = 'Skala 1 : n berarti 1 satuan jarak pada gambar mewakili n satuan jarak yang sebenarnya di permukaan bumi.';
      hint = 'Pikirkan hubungan antara ukuran di kertas dengan ukuran di alam nyata.';
    } else if (difficulty === 'Sedang') {
      question = `Jarak kota P dan kota Q pada peta berskala 1 : 100.000 adalah ${jarakPeta} cm. Berapa jarak sebenarnya kedua kota tersebut dalam kilometer?`;
      correctOption = `${jarakSebenarnyaKm} km`;
      wrongOptions = [
        `${jarakSebenarnyaKm * 10} km`,
        `${jarakSebenarnyaKm / 10} km`,
        `${jarakPeta * 2} km`
      ];
      explanation = `Jarak sebenarnya = Jarak peta x Skala = ${jarakPeta} x 100.000 cm = ${jarakPeta * 100000} cm = ${jarakSebenarnyaKm} km (karena 1 km = 100.000 cm).`;
      hint = 'Kalikan jarak pada peta dengan skala lalu ubah cm ke km.';
    } else {
      question = `(Soal HOTS) Perbandingan uang tabungan Rina dan Dimas adalah 3 : 5. Jika selisih uang tabungan mereka adalah Rp40.000,00, berapakah jumlah uang tabungan Rina?`;
      correctOption = 'Rp60.000,00';
      wrongOptions = ['Rp100.000,00', 'Rp40.000,00', 'Rp120.000,00'];
      explanation = 'Selisih perbandingan = 5 - 3 = 2 bagian = Rp40.000,00. Nilai 1 bagian = Rp40.000 / 2 = Rp20.000,00. Uang Rina (3 bagian) = 3 x Rp20.000,00 = Rp60.000,00.';
      hint = 'Cari nilai 1 bagian dengan membagi selisih uang dengan selisih perbandingan.';
    }
  } else if (domain === 'math_volume_cube_prism') {
    const sisi = (qNum % 6) + 3;
    const volKubus = sisi * sisi * sisi;
    if (difficulty === 'Mudah') {
      question = `Sebuah kubus memiliki panjang rusuk ${sisi} cm. Berapakah volume kubus tersebut?`;
      correctOption = `${volKubus} cm³`;
      wrongOptions = [
        `${sisi * 6} cm³`,
        `${sisi * sisi} cm³`,
        `${volKubus + 20} cm³`
      ];
      explanation = `Rumus volume kubus = rusuk x rusuk x rusuk = ${sisi} x ${sisi} x ${sisi} = ${volKubus} cm³.`;
      hint = 'Kalikan panjang rusuk sebanyak tiga kali.';
    } else if (difficulty === 'Sedang') {
      const p = 10, l = 5, t = 4;
      const volBalok = p * l * t;
      question = `Sebuah balok mainan memiliki panjang 10 cm, lebar 5 cm, dan tinggi 4 cm. Volume balok tersebut adalah...`;
      correctOption = `${volBalok} cm³`;
      wrongOptions = [`${volBalok - 50} cm³`, `${volBalok + 100} cm³`, `${p + l + t} cm³`];
      explanation = `Volume balok = panjang x lebar x tinggi = 10 cm x 5 cm x 4 cm = ${volBalok} cm³.`;
      hint = 'Gunakan rumus Volume = p x l x t.';
    } else {
      question = `(Soal HOTS) Sebuah akuarium berbentuk balok berukuran panjang 50 cm, lebar 30 cm, dan tinggi 40 cm diisi air setengahnya. Berapa liter air yang ada di dalam akuarium tersebut? (1 liter = 1.000 cm³)`;
      correctOption = '30 liter';
      wrongOptions = ['60 liter', '15 liter', '45 liter'];
      explanation = 'Volume total = 50 x 30 x 40 = 60.000 cm³ = 60 liter. Karena diisi setengahnya, maka volume air = 60 / 2 = 30 liter.';
      hint = 'Hitung volume total balok lalu bagi dua dan ubah cm³ ke liter.';
    }
  } else if (domain.startsWith('cam_math_') || domain.startsWith('sg_math_')) {
    // English Cambridge / Singapore math templates
    if (difficulty === 'Mudah') {
      question = `In Mathematics (${topic}), which of the following statements is mathematically accurate?`;
      correctOption = `The core mathematical principle of ${topic} applies consistently across number operations.`;
      wrongOptions = [
        `The properties depend completely on random estimation without formulas.`,
        `Units and place values can be swapped arbitrarily without changing value.`,
        `Calculating perimeter and volume produces identical spatial dimensions.`
      ];
      explanation = `Mathematical structures and standard units ensure exact, reproducible calculations in ${topic}.`;
      hint = 'Recall the fundamental definition and properties taught in this unit.';
    } else if (difficulty === 'Sedang') {
      const n1 = (qNum % 12) + 4;
      const n2 = n1 * 3;
      question = `(Word Problem) Sarah has ${n1} equal portions of ribbon for an art project. If each portion measures 5 cm, what is the total combined length of ribbon?`;
      correctOption = `${n1 * 5} cm`;
      wrongOptions = [`${n1 * 5 + 10} cm`, `${n1 + 5} cm`, `${n1 * 4} cm`];
      explanation = `Total length is computed by multiplying the number of portions by the length per portion: ${n1} x 5 = ${n1 * 5} cm.`;
      hint = 'Multiply the number of items by the length of each item.';
    } else {
      question = `(HOTS / Multi-Step Problem) A container with dimensions length 20 cm, breadth 10 cm, and height 15 cm is filled with water up to 2/3 of its height. What volume of water (in millilitres) does it contain?`;
      correctOption = '2,000 ml';
      wrongOptions = ['3,000 ml', '1,500 ml', '2,500 ml'];
      explanation = 'Height of water = 2/3 x 15 cm = 10 cm. Volume of water = 20 x 10 x 10 = 2,000 cm³ = 2,000 ml (since 1 cm³ = 1 ml).';
      hint = 'Calculate the height of the water first, then compute the volume.';
    }
  } else {
    // Default math
    question = `Berkaitan dengan materi ${topic}, manakah pernyataan matematika berikut yang benar?`;
    correctOption = `Konsep dasar pada ${topic} mengutamakan ketepatan hitungan dan penalaran logis.`;
    wrongOptions = [
      `Hasil perhitungan boleh berubah-ubah tanpa mengikuti kaidah bilangan.`,
      `Satuan baku dan tidak baku memiliki ketelitian yang sama persis.`,
      `Pengukuran luas dan volume menghasilkan satuan dimensi yang sama.`
    ];
    explanation = `Dalam matematika, setiap operasi dan rumus memiliki kaidah baku yang konsisten untuk membuktikan kebenaran suatu nilai.`;
    hint = 'Perhatikan kaidah baku dan ketelitian dalam matematika.';
  }

  return { question, correctOption, wrongOptions, explanation, hint };
}

// 2. Language Domain (Indonesian, English, etc.)
function generateLanguageQuestion(domain, qNum, difficulty, lang, grade, topic) {
  const isEn = lang === 'en';

  if (domain === 'indo_punctuation_capital') {
    if (difficulty === 'Mudah') {
      question = `Manakah kalimat di bawah ini yang menggunakan huruf kapital dengan tepat?`;
      correctOption = 'Ibu dan Rina pergi ke pasar pada hari Minggu.';
      wrongOptions = [
        'ibu dan rina pergi ke pasar pada hari minggu.',
        'Ibu Dan Rina Pergi Ke Pasar Pada Hari minggu.',
        'ibu dan Rina Pergi ke Pasar pada Hari Minggu.'
      ];
      explanation = 'Huruf kapital digunakan pada awal kalimat (Ibu), nama orang (Rina), dan nama hari (Minggu).';
      hint = 'Perhatikan huruf pertama pada awal kalimat, nama orang, dan hari.';
    } else if (difficulty === 'Sedang') {
      question = `Tanda baca yang tepat untuk mengakhiri kalimat: "Kapan kamu akan berkunjung ke rumah kakek" adalah...`;
      correctOption = 'Tanda tanya (?)';
      wrongOptions = ['Tanda titik (.)', 'Tanda seru (!)', 'Tanda koma (,)'];
      explanation = 'Kalimat tersebut merupakan kalimat tanya yang menanyakan waktu, sehingga wajib diakhiri tanda tanya (?).';
      hint = 'Perhatikan kata tanya "Kapan" di awal kalimat.';
    } else {
      question = `(Soal HOTS) Perhatikan kalimat berikut: "wah indah sekali pemandangan di danau toba ini kata dimas" Perbaikan tanda baca dan huruf kapital yang paling tepat adalah...`;
      correctOption = '"Wah, indah sekali pemandangan di Danau Toba ini!" kata Dimas.';
      wrongOptions = [
        '"Wah indah sekali pemandangan di danau toba ini." Kata dimas.',
        'Wah, indah sekali pemandangan di Danau toba ini! kata dimas.',
        '"Wah indah sekali pemandangan di Danau Toba ini?" kata Dimas.'
      ];
      explanation = 'Kalimat seruan langsung memerlukan tanda petik, huruf kapital di awal, koma setelah kata seru "Wah", kapital pada nama geografis "Danau Toba", tanda seru, dan kapital pada nama orang "Dimas".';
      hint = 'Cari kalimat yang memuat tanda petik langsung dan kapitalisasi nama tempat secara tepat.';
    }
  } else if (domain === 'indo_map_directions') {
    if (difficulty === 'Mudah') {
      question = `Jika kita menghadap ke arah matahari terbit, maka kita sedang menghadap ke arah...`;
      correctOption = 'Timur';
      wrongOptions = ['Barat', 'Utara', 'Selatan'];
      explanation = 'Matahari selalu terbit di sebelah timur dan terbenam di sebelah barat.';
      hint = 'Arah terbitnya fajar dan matahari di pagi hari.';
    } else if (difficulty === 'Sedang') {
      question = `Pada sebuah denah, bagian atas gambar peta/denah secara baku selalu menunjukkan arah...`;
      correctOption = 'Utara';
      wrongOptions = ['Selatan', 'Timur', 'Barat'];
      explanation = 'Secara konvensi standar kartografi, arah mata angin bagian atas denah/peta selalu menunjuk ke arah Utara.';
      hint = 'Pikirkan huruf U yang tertera di penunjuk mata angin pada peta.';
    } else {
      question = `(Soal HOTS Denah) Budi berjalan dari rumahnya ke arah timur sejauh 100 meter, lalu belok ke arah utara sejauh 50 meter menuju toko buku. Posisi rumah Budi terhadap toko buku berada di sebelah...`;
      correctOption = 'Barat daya';
      wrongOptions = ['Timur laut', 'Tenggara', 'Barat laut'];
      explanation = 'Karena Budi berjalan ke Timur lalu ke Utara (menuju Timur Laut), maka arah kebalikannya (posisi rumah dari toko buku) adalah arah Barat Daya.';
      hint = 'Gambarkan posisi rumah dan toko buku lalu lihat arah balikannya.';
    }
  } else if (domain.startsWith('cam_eng_') || domain.startsWith('sg_eng_')) {
    if (difficulty === 'Mudah') {
      question = `In English grammar (${topic}), which sentence is grammatically correct?`;
      correctOption = `The children played happily in the school garden.`;
      wrongOptions = [
        `The children plays happily in the school garden.`,
        `The children playing happily in the school garden yesterday.`,
        `The children was played happily in the school garden.`
      ];
      explanation = `Plural subject "The children" takes the regular past simple verb "played" followed by the adverb of manner "happily".`;
      hint = 'Look for proper subject-verb agreement and natural word order.';
    } else if (difficulty === 'Sedang') {
      question = `Choose the sentence that correctly uses connectives / conjunctions to link two clauses:`;
      correctOption = `Although it was raining heavily, the students arrived on time.`;
      wrongOptions = [
        `Because it was raining heavily, so the students arrived on time.`,
        `It was raining heavily but although the students arrived on time.`,
        `The students arrived on time however because of rain.`
      ];
      explanation = `'Although' establishes a contrast without needing a redundant 'so' in the main clause.`;
      hint = 'Avoid double connectors like "Because... so" or "Although... but".';
    } else {
      question = `(HOTS / Advanced Language Analysis) Which sentence effectively employs direct speech punctuation according to standard English style?`;
      correctOption = `"Please make sure your homework is submitted on time," the teacher reminded the class.`;
      wrongOptions = [
        `"Please make sure your homework is submitted on time" The teacher reminded the class.`,
        `"Please make sure your homework is submitted on time", the teacher reminded the class.`,
        `The teacher reminded the class "Please make sure your homework is submitted on time."`
      ];
      explanation = `In direct speech, closing speech marks go outside the comma, and the reporting clause begins in lower case unless it is a proper noun.`;
      hint = 'Check punctuation inside the quotation marks before the tag.';
    }
  } else {
    // Default language
    question = `Terkait materi ${topic}, manakah pilihan berikut yang menunjukkan penggunaan bahasa yang efektif dan komunikatif?`;
    correctOption = `Gagasan disampaikan secara teratur, runut, dan santun sesuai konteks komunikasi.`;
    wrongOptions = [
      `Menggunakan kosakata yang berbelit-belit sehingga membingungkan pendengar.`,
      `Mengabaikan tanda baca dan ejaan resmi dalam tulisan.`,
      `Menulis kalimat tanpa memperhatikan subjek dan predikat yang jelas.`
    ];
    explanation = `Bahasa yang baik dan benar selalu mengutamakan kejelasan makna, keteraturan struktur, dan kesantunan berbahasa.`;
    hint = 'Pilihlah opsi yang menekankan kejelasan dan keruntutan berbahasa.';
  }

  return { question, correctOption, wrongOptions, explanation, hint };
}

// 3. Science Domain (IPAS, Cambridge Science, Singapore Science)
function generateScienceQuestion(domain, qNum, difficulty, lang, grade, topic) {
  const isEn = lang === 'en';

  if (domain === 'ipas_body_hygiene') {
    if (difficulty === 'Mudah') {
      question = `Mengapa kita wajib mencuci tangan menggunakan sabun dan air mengalir sebelum makan?`;
      correctOption = 'Untuk membunuh kuman dan bakteri agar tidak masuk ke saluran pencernaan';
      wrongOptions = [
        'Agar tangan menjadi harum dan licin sepanjang hari',
        'Hanya untuk mendinginkan suhu telapak tangan',
        'Supaya makanan terasa lebih manis saat dipegang'
      ];
      explanation = 'Mencuci tangan dengan sabun efektif melarutkan lemak pelindung kuman dan membilas kuman penyebab penyakit saluran pencernaan.';
      hint = 'Pikirkan peran sabun dalam membersihkan kuman tak kasat mata.';
    } else if (difficulty === 'Sedang') {
      question = `Panca indra yang berfungsi untuk mendeteksi rasa manis, asin, asam, dan pahit pada makanan adalah...`;
      correctOption = 'Lidah (indra pengecap)';
      wrongOptions = ['Hidung (indra pembau)', 'Kulit (indra peraba)', 'Mata (indra penglihat)'];
      explanation = 'Lidah memiliki bintil-bintil papila perasa yang peka terhadap rasa manis, asin, asam, pahit, dan umami.';
      hint = 'Organ di dalam rongga mulut yang bersentuhan langsung dengan makanan.';
    } else {
      question = `(Soal HOTS) Mengapa menyikat gigi sebelum tidur malam sangat penting dibandingkan hanya menyikat gigi di pagi hari?`;
      correctOption = 'Karena saat tidur produksi air liur berkurang sehingga bakteri lebih cepat merusak sisa makanan dan menghasilkan asam perusak gigi';
      wrongOptions = [
        'Karena sikat gigi di malam hari membuat gigi tumbuh lebih cepat',
        'Karena pasta gigi hanya bereaksi ketika tidak ada cahaya matahari',
        'Agar warna gigi berubah menjadi berkilau di ruangan gelap'
      ];
      explanation = 'Saat tidur malam, mulut dalam kondisi tertutup dan produksi air liur yang bersifat membilas alami berkurang drastis. Sisa gula akan difermentasi bakteri menjadi asam perusak email gigi.';
      hint = 'Pikirkan kondisi mulut saat tidur dan aktivitas kuman pada sisa makanan.';
    }
  } else if (domain === 'ipas_metamorphosis') {
    if (difficulty === 'Mudah') {
      question = `Urutan daur hidup kupu-kupu yang benar dalam metamorfosis sempurna adalah...`;
      correctOption = 'Telur -> Ulat (Larva) -> Kepompong (Pupa) -> Kupu-kupu dewasa';
      wrongOptions = [
        'Telur -> Kupu-kupu kecil -> Ulat -> Kepompong',
        'Kepompong -> Telur -> Kupu-kupu dewasa -> Ulat',
        'Telur -> Nimfa -> Kupu-kupu dewasa'
      ];
      explanation = 'Metamorfosis sempurna kupu-kupu melalui 4 tahapan: Telur menetas menjadi Ulat (larva), berubah menjadi Kepompong (pupa), lalu keluar menjadi Kupu-kupu dewasa (imago).';
      hint = 'Ingat fase kepompong sebelum menjadi kupu-kupu bersayap indah.';
    } else if (difficulty === 'Sedang') {
      question = `Perbedaan utama antara metamorfosis sempurna dan metamorfosis tidak sempurna adalah...`;
      correctOption = 'Metamorfosis sempurna melewati tahap kepompong (pupa), sedangkan metamorfosis tidak sempurna tidak melewati tahap kepompong';
      wrongOptions = [
        'Metamorfosis tidak sempurna selalu menghasilkan hewan bersayap',
        'Metamorfosis sempurna hanya terjadi pada hewan mamalia',
        'Metamorfosis tidak sempurna tidak dimulai dari telur'
      ];
      explanation = 'Metamorfosis tidak sempurna (misal kecoak, belalang) hanya melalui telur -> nimfa -> dewasa tanpa fase kepompong (pupa).';
      hint = 'Perhatikan ada atau tidaknya tahap pupa (kepompong).';
    } else {
      question = `(Soal HOTS Ekosistem) Mengapa fase ulat (larva) pada daur hidup kupu-kupu sering dianggap hama bagi petani, sedangkan fase dewasa (kupu-kupu) justru sangat menguntungkan?`;
      correctOption = 'Fase ulat memakan dedaunan tanaman dengan rakus, sedangkan kupu-kupu dewasa membantu penyerbukan bunga tanaman';
      wrongOptions = [
        'Fase ulat memakan serangga lain, sedangkan kupu-kupu memakan buah busuk',
        'Ulat menghasilkan racun bagi tanah, sedangkan kupu-kupu menyuburkan tanah',
        'Petani menyukai warna ulat tetapi tidak menyukai sayap kupu-kupu'
      ];
      explanation = 'Larva (ulat) membutuhkan banyak nutrisi sehingga memakan daun tanaman budidaya. Sebaliknya, kupu-kupu dewasa mengisap nektar dan memindahkan serbuk sari sehingga membantu penyerbukan bunga tanaman petani.';
      hint = 'Bandingkan makanan ulat dengan makanan kupu-kupu dewasa.';
    }
  } else if (domain.startsWith('cam_sci_') || domain.startsWith('sg_sci_')) {
    if (difficulty === 'Mudah') {
      question = `In Science (${topic}), which statement accurately describes the observed scientific phenomenon?`;
      correctOption = `Scientific models and repeatable investigations explain the physical properties of ${topic}.`;
      wrongOptions = [
        `Observations rely on superstitious beliefs without testable hypothesis.`,
        `Physical matter behaves randomly without following laws of nature.`,
        `Living organisms do not require energy or interaction with surroundings.`
      ];
      explanation = `Science is grounded in empirical evidence, repeatable experiments, and systematic classification.`;
      hint = 'Think of scientific investigation and testable evidence.';
    } else if (difficulty === 'Sedang') {
      question = `What is the primary function of chlorophyll in green plant leaves?`;
      correctOption = `To absorb light energy from the Sun required for photosynthesis`;
      wrongOptions = [
        `To absorb water and dissolved minerals directly from soil`,
        `To produce flowers during winter seasons`,
        `To attract pollinators by giving a sweet smell`
      ];
      explanation = `Chlorophyll is the green pigment in chloroplasts that captures sunlight energy to convert carbon dioxide and water into glucose (food) and oxygen.`;
      hint = 'Recall what green pigment in leaves captures from sunlight.';
    } else {
      question = `(HOTS Inquiry) A student sets up two identical sealed jars with green plants: Jar A is placed in bright sunlight, while Jar B is kept in complete darkness for 48 hours. What will happen to the carbon dioxide level inside Jar B?`;
      correctOption = `The carbon dioxide level will increase because the plant carries out respiration without photosynthesis`;
      wrongOptions = [
        `The carbon dioxide level will drop to zero because plants cannot breathe in the dark`,
        `The oxygen level will drastically rise due to photosynthesis in the dark`,
        `Both jars will have identical gas concentrations after 48 hours`
      ];
      explanation = `In darkness, photosynthesis stops (no light), but cellular respiration continues 24/7, causing the plant to consume oxygen and release carbon dioxide into the jar.`;
      hint = 'Consider which process continues 24/7 even when there is no light.';
    }
  } else {
    // Default science
    question = `Berdasarkan konsep ilmiah ${topic}, manakah kesimpulan yang paling tepat berdasarkan pengamatan?`;
    correctOption = `Fenomena tersebut terjadi karena adanya hukum alam dan proses sebab-akibat yang dapat dibuktikan secara ilmiah.`;
    wrongOptions = [
      `Fenomena tersebut terjadi tanpa dipengaruhi oleh faktor lingkungan apapun.`,
      `Semua zat dan materi selalu memiliki wujud yang sama dalam segala suhu.`,
      `Makhluk hidup tidak memerlukan adaptasi untuk bertahan hidup di habitatnya.`
    ];
    explanation = `Ilmu pengetahuan alam mempelajari gejala alam berdasarkan fakta teruji, pengamatan objektif, dan prinsip keteraturan alam.`;
    hint = 'Pilihlah opsi yang mencerminkan prinsip pembuktian ilmiah.';
  }

  return { question, correctOption, wrongOptions, explanation, hint };
}

// 4. Civics & Social Studies Domain
function generateCivicsSocialQuestion(domain, qNum, difficulty, lang, grade, topic) {
  if (difficulty === 'Mudah') {
    question = `Terkait materi "${topic}", sikap yang mencerminkan nilai luhur Pancasila dan norma kehidupan bermasyarakat adalah...`;
    correctOption = 'Saling menghormati perbedaan dan mendahulukan kepentingan bersama';
    wrongOptions = [
      'Memaksakan kehendak pribadi kepada seluruh teman',
      'Hanya mau berteman dengan orang yang satu suku dan agama',
      'Mengabaikan aturan tata tertib demi kenyamanan diri sendiri'
    ];
    explanation = 'Nilai luhur bangsa Indonesia mengutamakan kerukunan, toleransi, musyawarah, dan ketaatan terhadap aturan bersama.';
    hint = 'Pilihlah sikap yang menjunjung tinggi toleransi dan kebersamaan.';
  } else if (difficulty === 'Sedang') {
    question = `Mengapa mematuhi aturan dan tata tertib di sekolah sangat penting bagi seluruh warga sekolah?`;
    correctOption = 'Agar tercipta suasana belajar yang aman, tertib, nyaman, dan adil bagi semua orang';
    wrongOptions = [
      'Hanya untuk menghindari teguran guru saat diawasi',
      'Agar murid yang pintar mendapat keistimewaan khusus',
      'Supaya sekolah terlihat sepi dan tidak ada kegiatan'
    ];
    explanation = 'Aturan diciptakan untuk menjaga ketertiban, melindungi hak setiap siswa, dan menciptakan lingkungan belajar yang kondusif.';
    hint = 'Pikirkan manfaat aturan bagi ketertiban dan kenyamanan seluruh murid.';
  } else {
    question = `(Soal HOTS Pengambilan Keputusan) Dalam musyawarah pemilihan ketua kelas, usulanmu tidak terpilih karena sebagian besar teman memilih usulan lain. Sikap demokratis yang paling terpuji adalah...`;
    correctOption = 'Menerima hasil keputusan dengan lapang dada dan siap mendukung ketua kelas yang terpilih';
    wrongOptions = [
      'Menolak hasil musyawarah dan mogok mengikuti kegiatan kelas',
      'Menjelek-jelekkan ketua kelas terpilih di hadapan teman lain',
      'Membuat kelompok tandingan untuk membatalkan hasil pemilihan'
    ];
    explanation = 'Musyawarah mufakat menjunjung tinggi asas demokrasi: menghargai suara terbanyak, menerima keputusan bersama dengan ikhlas, dan bekerja sama demi kebaikan kelas.';
    hint = 'Pikirkan sikap berjiwa besar saat hasil musyawarah berbeda dengan pilihan pribadi.';
  }

  return { question, correctOption, wrongOptions, explanation, hint };
}

// 5. Computing & Coding Domain
function generateComputingQuestion(domain, qNum, difficulty, lang, grade, topic) {
  if (difficulty === 'Mudah') {
    question = `Dalam konsep dasar algoritma dan pemrograman (${topic}), apa yang dimaksud dengan algoritma?`;
    correctOption = 'Urutan langkah-langkah logis dan terstruktur untuk menyelesaikan suatu masalah';
    wrongOptions = [
      'Komponen fisik komputer seperti monitor dan keyboard',
      'Kumpulan permainan video yang ada di internet',
      'Bahasa khusus yang hanya dipahami oleh mesin cetak'
    ];
    explanation = 'Algoritma adalah serangkaian instruksi terperinci dan berurutan langkah demi langkah yang dirancang untuk menyelesaikan tugas komputasi.';
    hint = 'Pikirkan kata kunci "urutan langkah-langkah".';
  } else if (difficulty === 'Sedang') {
    question = `Jika sebuah karakter sprite pada Scratch diberi balok kode: "Repeat 4 [ Move 50 steps, Turn right 90 degrees ]", bangun apakah yang akan terbentuk?`;
    correctOption = 'Bujur sangkar (Persegi)';
    wrongOptions = ['Segitiga sama sisi', 'Lingkaran utuh', 'Garis lurus panjang'];
    explanation = '4 kali gerakan maju 50 langkah dan belok 90 derajat akan menghasilkan 4 sisi sama panjang dan 4 sudut siku-siku (360 / 4 = 90 derajat), yaitu bangun persegi.';
    hint = '4 sisi dan 4 putaran 90 derajat membentuk bangun datar apa?';
  } else {
    question = `(Soal HOTS Debugging) Seorang siswa membuat program penghitung skor game. Namun, setiap kali koin disentuh, skor melonjak dari 0 menjadi 100 secara instan. Kesalahan logika yang paling mungkin terjadi adalah...`;
    correctOption = 'Balok penambah skor diletakkan di dalam perulangan tanpa jeda waktu atau tanpa reset kondisi sentuhan koin';
    wrongOptions = [
      'Layar monitor komputer kekurangan daya listrik',
      'Karakter pemain memiliki warna yang terlalu terang',
      'Nama variabel tidak boleh menggunakan huruf alfabet'
    ];
    explanation = 'Dalam game loop berkecepatan 30-60 fps, jika koin tidak langsung disembunyikan atau di-wait saat tersentuh, blok penambah skor akan tereksekusi puluhan kali dalam hitungan detik.';
    hint = 'Pikirkan kecepatan komputer saat mengeksekusi balok kode yang berulang.';
  }

  return { question, correctOption, wrongOptions, explanation, hint };
}

// 6. Arts & Music Domain
function generateArtsMusicQuestion(domain, qNum, difficulty, lang, grade, topic) {
  if (difficulty === 'Mudah') {
    question = `Terkait materi seni rupa dan musik (${topic}), manakah di antara pilihan berikut yang termasuk warna primer?`;
    correctOption = 'Merah, Kuning, dan Biru';
    wrongOptions = ['Hijau, Ungu, dan Jingga', 'Hitam, Putih, dan Abu-abu', 'Cokelat, Emas, dan Perak'];
    explanation = 'Warna primer adalah warna pokok yang tidak dapat dihasilkan dari campuran warna lain, yaitu merah, kuning, dan biru.';
    hint = 'Tiga warna dasar utama yang tidak dapat dibentuk dari campuran warna lain.';
  } else if (difficulty === 'Sedang') {
    question = `Dalam seni musik, tanda dinamika "Forte (f)" memiliki arti bahwa lagu tersebut harus dimainkan dengan...`;
    correctOption = 'Suara keras dan bertenaga';
    wrongOptions = ['Suara sangat lembut dan berbisik', 'Tempo yang sangat lambat', 'Nada yang semakin meninggi'];
    explanation = 'Forte (f) adalah istilah dinamika musik asal Italia yang berarti dimainkan dengan volume suara keras, sedangkan Piano (p) berarti lembut.';
    hint = 'Lawan dari tanda dinamika Piano (lembut).';
  } else {
    question = `(Soal HOTS Komposisi Seni) Seorang pelukis ingin menciptakan kesan ruang dan kedalaman (tiga dimensi) pada permukaan kanvas datar dua dimensi. Teknik seni rupa yang paling tepat digunakan adalah...`;
    correctOption = 'Menerapkan garis perspektif menuju satu titik lenyap dan gradasi gelap-terang (shading)';
    wrongOptions = [
      'Mewarnai seluruh objek dengan satu warna primer secara merata tanpa bayangan',
      'Menggambar semua objek dengan ukuran yang persis sama di setiap sudut kanvas',
      'Menempelkan kertas berwarna tanpa memperhatikan susunan bentuk'
    ];
    explanation = 'Perspektif satu titik lenyap serta pencahayaan gradasi gelap-terang (shading) menciptakan ilusi volume dan jarak pandang ruang 3D pada bidang datar 2D.';
    hint = 'Pikirkan teknik yang membuat jalanan terlihat mengecil di kejauhan.';
  }

  return { question, correctOption, wrongOptions, explanation, hint };
}

// 7. Physical Education Domain
function generatePEQuestion(domain, qNum, difficulty, lang, grade, topic) {
  if (difficulty === 'Mudah') {
    question = `Manakah di bawah ini yang merupakan contoh gerak dasar lokomotor dalam olahraga?`;
    correctOption = 'Berlari dan melompat melewati rintangan';
    wrongOptions = [
      'Membungkukkan badan dan meliukkan pinggang di tempat',
      'Melempar bola kasti ke arah pemukul',
      'Berdiri tegak dengan satu kaki diam di lantai'
    ];
    explanation = 'Gerak lokomotor adalah gerakan berpindah tempat dari satu titik ke titik lain, seperti berjalan, berlari, dan melompat.';
    hint = 'Cari gerakan yang menyebabkan tubuh berpindah posisi dari tempat semula.';
  } else if (difficulty === 'Sedang') {
    question = `Mengapa kita wajib melakukan pemanasan (warming-up) sebelum berolahraga secara intensif?`;
    correctOption = 'Mempersiapkan otot dan sendi agar terhindar dari cedera serta menaikkan suhu tubuh bertahap';
    wrongOptions = [
      'Agar tubuh langsung merasa lelah sebelum permainan dimulai',
      'Supaya detak jantung berhenti sementara saat berolahraga',
      'Untuk mendinginkan keringat yang keluar dari pori-pori'
    ];
    explanation = 'Pemanasan melenturkan otot, melumasi persendian, dan menaikkan denyut nadi secara bertahap sehingga risiko kram dan cedera berkurang signifikan.';
    hint = 'Pikirkan pencegahan cedera otot dan kesiapan tubuh sebelum olahraga berat.';
  } else {
    question = `(Soal HOTS Kebugaran Jasmani) Setelah berlari cepat 100 meter, denyut nadi seseorang berdetak sangat kencang dan napas terengah-engah. Tindakan pendinginan (cooling-down) yang paling tepat dan aman adalah...`;
    correctOption = 'Berjalan perlahan sambil mengatur napas dalam-dalam secara bertahap hingga denyut jantung stabil';
    wrongOptions = [
      'Langsung duduk bersila di lantai dingin dan minum air es sebanyak-banyaknya',
      'Langsung tidur terlentang tanpa menggerakkan anggota tubuh sama sekali',
      'Melanjutkan lari sprint 100 meter lagi dengan kecepatan maksimal tanpa jeda'
    ];
    explanation = 'Berjalan perlahan dan peregangan statis saat pendinginan membantu melancarkan aliran darah kembali ke jantung dan membuang asam laktat secara aman.';
    hint = 'Jangan langsung duduk mendadak setelah lari sprint; turunkan intensitas secara bertahap.';
  }

  return { question, correctOption, wrongOptions, explanation, hint };
}

// 8. Bahasa Sunda
function generateSundaQuestion(domain, qNum, difficulty, grade, topic) {
  if (difficulty === 'Mudah') {
    question = `Basa lemes keur sirah (kepala) dina Basa Sunda nyaeta...`;
    correctOption = 'Mastaka';
    wrongOptions = ['Soca', 'Pangambung', 'Sampean'];
    explanation = 'Dina tatakrama Basa Sunda lemes: sirah = mastaka, panon = soca, irung = pangambung, suku = sampean.';
    hint = 'Babagian awak pang luhurna dina ragam basa lemes.';
  } else if (difficulty === 'Sedang') {
    question = `Dina basa Sunda, kecap lemes keur "dahar" (makan) lamun dilarapkeun ka diri sorangan nyaeta "neda", sedengkeun lamun keur ka batur/kolot nyaeta...`;
    correctOption = 'Tuang';
    wrongOptions = ['Nyatu', 'Emam', 'Ngalebok'];
    explanation = 'Ragam basa lemes: neda dipake keur diri sorangan, tuang dipake keur batur atawa saluhureun (kolot, guru).';
    hint = 'Kecap lemes kahormatan keur ka kolot/batur waktu baranghakan.';
  } else {
    question = `(Soal HOTS Basa Sunda) Guru lagu jeung guru wilangan dina Pupuh Pucung nyaeta 12u, 6a, 8i, 12a. Naon anu dimaksud ku guru lagu?`;
    correctOption = 'Sora vokal panungtung dina unggal padalisan (baris)';
    wrongOptions = [
      'Jumlah engang (suku kata) dina unggal baris pupuh',
      'Ngaran pangarang anu nyiptakeun rumpaka pupuh',
      'Iringan tatabehan kendang jeung suling dina tembang'
    ];
    explanation = 'Guru lagu nyaeta sora vokal panungtung (u, a, i, a) dina padalisan pupuh, ari guru wilangan nyaeta jumlah engang (12, 6, 8, 12).';
    hint = 'Sora vokal dina tungtung kecap/baris pupuh.';
  }

  return { question, correctOption, wrongOptions, explanation, hint };
}

// 9. Bahasa Jawa
function generateJawaQuestion(domain, qNum, difficulty, grade, topic) {
  if (difficulty === 'Mudah') {
    question = `Peranganing awak "mripat" (mata) yen diucapake nganggo basa Krama Alus yaiku...`;
    correctOption = 'Soca / Paningal';
    wrongOptions = ['Mustaka', 'Grana', 'Talingan'];
    explanation = 'Ing basa Krama Alus: mripat = soca/paningal, sirah = mustaka, irung = grana, kuping = talingan.';
    hint = 'Arane perangan awak sing fungsine kanggo nyawang/ndeleng.';
  } else if (difficulty === 'Sedang') {
    question = `Tembung ing ngisor iki sing kalebu tembung kosok balen (lawan kata) yaiku...`;
    correctOption = 'Gedhe kosok balene cilik';
    wrongOptions = ['Dhuwur kosok balene dawa', 'Padhang kosok balene resik', 'Pinter kosok balene wasis'];
    explanation = 'Kosok balen tegese lawan kata. Gedhe lawane cilik, dhuwur lawane cendhek, padhang lawane peteng.';
    hint = 'Goleka pasangan tembung sing tegese kuwalikan/lawanan.';
  } else {
    question = `(Soal HOTS Wayang) Ing crita pewayangan, Raden Puntadewa (Yudhistira) minangka pembarepe Pandhawa nduweni watak utama yaiku...`;
    correctOption = 'Jujur, luhur bebudine, lan ora nate goroh (seneng ngalah)';
    wrongOptions = [
      'Gagah pideksa lan gampang muntap marang sapa wae',
      'Pinter manah lan seneng lelungan menyang ngendi-endi',
      'Licik lan seneng golek kauntungan pribadi ing saben kahanan'
    ];
    explanation = 'Puntadewa minangka panuntun Pandhawa nduweni watak getih putih, tegese jujur, sabar, ora nate goroh, lan luhur budine.';
    hint = 'Watak satria sing dadi lambange kejujuran lan kesabaran sejati.';
  }

  return { question, correctOption, wrongOptions, explanation, hint };
}

// 10. Foreign Language & Mother Tongue
function generateForeignMotherTongueQuestion(domain, qNum, difficulty, lang, grade, topic) {
  if (difficulty === 'Mudah') {
    question = `In Language and Cultural Studies (${topic}), what is the primary purpose of polite greetings and respectful kinship terms?`;
    correctOption = `To show mutual respect, honor social hierarchy, and foster friendly community harmony`;
    wrongOptions = [
      `To confuse listeners by speaking in ancient riddles`,
      `To replace all grammatical verbs with single gestures`,
      `To avoid speaking directly with anyone in public`
    ];
    explanation = `Polite address forms and cultural greetings reflect universal values of respect, empathy, and social warmth across global languages.`;
    hint = 'Think of why greetings and polite titles are essential in every culture.';
  } else if (difficulty === 'Sedang') {
    question = `When addressing an elder or teacher in traditional Asian and European languages, what form of speech is customary?`;
    correctOption = `Using polite, formal registers and respectful titles instead of informal slang`;
    wrongOptions = [
      `Using colloquial slang and casual nicknames`,
      `Speaking in monosyllables without greeting`,
      `Ignoring cultural honorifics completely`
    ];
    explanation = `Formal registers, honorifics, and polite verb forms acknowledge experience and maintain courteous social harmony.`;
    hint = 'Recall the role of honorifics and polite registers.';
  } else {
    question = `(HOTS Cultural Insight) Why do traditional folktales and idioms feature prominently in early primary language curricula across Singapore and Cambridge standards?`;
    correctOption = `They transmit moral virtues, cultural wisdom, and figurative linguistic nuance in memorable narrative formats`;
    wrongOptions = [
      `They contain factual historical population censuses without literary value`,
      `They prevent students from learning contemporary technological concepts`,
      `They eliminate the need to practice grammar and spelling rules`
    ];
    explanation = `Folktales and idioms serve as powerful pedagogical tools that unite language acquisition with character building and cultural empathy.`;
    hint = 'Consider how stories convey moral lessons and linguistic richness.';
  }

  return { question, correctOption, wrongOptions, explanation, hint };
}

function generateGenericQuestion(domain, qNum, difficulty, lang, grade, topic) {
  return {
    question: `Pertanyaan evaluasi ke-${qNum} mengenai materi ${topic}: manakah prinsip utama yang harus dikuasai?`,
    correctOption: `Memahami konsep esensial, mempraktikkan langkah pemecahan masalah, dan mengevaluasi hasil kerja`,
    wrongOptions: [
      `Menghafalkan istilah tanpa memahami makna dan penerapannya`,
      `Mengabaikan petunjuk kerja yang telah ditentukan oleh guru`,
      `Menyalin jawaban teman tanpa melalui proses penalaran mandiri`
    ],
    explanation: `Penguasaan materi ${topic} dicapai melalui pemahaman konsep menyeluruh, latihan kontekstual, dan refleksi belajar yang mendalam.`,
    hint: `Fokuslah pada pemahaman konsep dan langkah kerja yang sistematis.`
  };
}

module.exports = {
  generateMathQuestion,
  generateLanguageQuestion,
  generateScienceQuestion,
  generateCivicsSocialQuestion,
  generateComputingQuestion,
  generateArtsMusicQuestion,
  generatePEQuestion,
  generateSundaQuestion,
  generateJawaQuestion,
  generateForeignMotherTongueQuestion
};
