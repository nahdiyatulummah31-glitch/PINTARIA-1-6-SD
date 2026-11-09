import React from 'react';

export const renderGrade6Svg = (key: string, isPrint = false): React.ReactElement | null => {
  const strokeColor = isPrint ? '#000000' : '#cbd5e1';
  const bgCard = isPrint ? '#ffffff' : '#f8fafc';
  const textDark = isPrint ? '#000000' : '#1e293b';
  const textMuted = isPrint ? '#333333' : '#64748b';

  let normKey = key;
  if (normKey === 'k6-jawa-1') normKey = 'k6-daerah-1';
  if (normKey === 'k6-jawa-2') normKey = 'k6-daerah-2';

  switch (normKey) {
    case 'k6-mtk-1': // Unsur Lingkaran: Titik Pusat O, Jari-jari (r), Diameter (d) - TANPA menuliskan jawaban "Jari-jari"
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#e0e7ff'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#3730a3'} fontSize="11" fontWeight="bold">Unsur-Unsur Lingkaran</text>

          {/* Lingkaran dengan Titik Pusat O */}
          <g transform="translate(130, 80)">
            <circle cx="0" cy="0" r="55" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="2" />
            
            {/* Garis Diameter d (Abu-abu / Datar) */}
            <line x1="-55" y1="0" x2="55" y2="0" stroke={isPrint ? '#666' : '#94a3b8'} strokeWidth="1.5" strokeDasharray="4 2" />
            <text x="35" y="-5" textAnchor="middle" fill={textMuted} fontSize="9">Garis (d)</text>

            {/* Titik Pusat O */}
            <circle cx="0" cy="0" r="4" fill={isPrint ? '#000' : '#ef4444'} />
            <text x="-8" y="-7" fill={textDark} fontSize="11" fontWeight="bold">O</text>

            {/* Garis Hijau yang ditanyakan (r): dari Titik Pusat O ke Keliling */}
            <line x1="0" y1="0" x2="38.8" y2="-38.8" stroke={isPrint ? '#000' : '#16a34a'} strokeWidth="3" />
            <circle cx="38.8" cy="-38.8" r="3" fill={isPrint ? '#000' : '#16a34a'} />
            
            {/* Label r */}
            <rect x="18" y="-30" width="22" height="16" rx="4" fill={isPrint ? '#eee' : '#dcfce7'} stroke={isPrint ? '#000' : '#86efac'} />
            <text x="29" y="-18" textAnchor="middle" fill={isPrint ? '#000' : '#15803d'} fontSize="11" fontWeight="bold">r</text>
          </g>

          {/* Keterangan Bagan */}
          <g transform="translate(250, 40)">
            <rect width="185" height="85" rx="8" fill={isPrint ? '#f8f8f8' : '#ffffff'} stroke={isPrint ? '#000' : '#e2e8f0'} strokeWidth="1.5" />
            <text x="12" y="22" fill={textDark} fontSize="10" fontWeight="bold">Keterangan Gambar:</text>
            <text x="12" y="40" fill={textDark} fontSize="10">• Titik O = Titik Pusat</text>
            <text x="12" y="58" fill={isPrint ? '#000' : '#15803d'} fontSize="10" fontWeight="bold">• Garis Hijau (r) = [ ? ]</text>
            <text x="12" y="74" fill={textMuted} fontSize="9.5">• Garis Abu (d) = Garis Tengah</text>
          </g>
        </svg>
      );

    case 'k6-mtk-2': // Diagram Lingkaran Data Hobi Siswa
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Diagram Lingkaran Hobi</text>

          {/* Pie Chart: 50% Sepak Bola (kiri), 25% Menyanyi (kanan atas), 25% Membaca (kanan bawah) */}
          <g transform="translate(130, 85)">
            {/* Sektor 50% (Sepak Bola) - Setengah Lingkaran Kiri */}
            <path d="M 0 0 L 0 -55 A 55 55 0 0 0 0 55 Z" fill={isPrint ? '#bbb' : '#3b82f6'} stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="1.5" />
            <text x="-26" y="4" textAnchor="middle" fill={isPrint ? '#000' : '#ffffff'} fontSize="11" fontWeight="bold">50%</text>

            {/* Sektor 25% (Menyanyi) - Kuadran Kanan Atas */}
            <path d="M 0 0 L 55 0 A 55 55 0 0 0 0 -55 Z" fill={isPrint ? '#eee' : '#f59e0b'} stroke={isPrint ? '#000' : '#d97706'} strokeWidth="1.5" />
            <text x="24" y="-20" textAnchor="middle" fill={isPrint ? '#000' : '#ffffff'} fontSize="10" fontWeight="bold">25%</text>

            {/* Sektor 25% (Membaca) - Kuadran Kanan Bawah */}
            <path d="M 0 0 L 0 55 A 55 55 0 0 0 55 0 Z" fill={isPrint ? '#ddd' : '#10b981'} stroke={isPrint ? '#000' : '#047857'} strokeWidth="1.5" />
            <text x="24" y="26" textAnchor="middle" fill={isPrint ? '#000' : '#ffffff'} fontSize="10" fontWeight="bold">25%</text>

            <circle cx="0" cy="0" r="3" fill="#ffffff" stroke={isPrint ? '#000' : '#334155'} strokeWidth="1.5" />
          </g>

          {/* Legenda Kategori */}
          <g transform="translate(250, 40)">
            <rect width="185" height="85" rx="8" fill={isPrint ? '#f8f8f8' : '#ffffff'} stroke={isPrint ? '#000' : '#e2e8f0'} strokeWidth="1.5" />
            <text x="12" y="20" fill={textDark} fontSize="10" fontWeight="bold">Kategori & Porsi:</text>
            
            <rect x="12" y="28" width="12" height="12" rx="2" fill={isPrint ? '#bbb' : '#3b82f6'} stroke={isPrint ? '#000' : '#1d4ed8'} />
            <text x="30" y="38" fill={textDark} fontSize="10">Sepak Bola : 50%</text>

            <rect x="12" y="46" width="12" height="12" rx="2" fill={isPrint ? '#eee' : '#f59e0b'} stroke={isPrint ? '#000' : '#d97706'} />
            <text x="30" y="56" fill={textDark} fontSize="10">Menyanyi : 25%</text>

            <rect x="12" y="64" width="12" height="12" rx="2" fill={isPrint ? '#ddd' : '#10b981'} stroke={isPrint ? '#000' : '#047857'} />
            <text x="30" y="74" fill={textDark} fontSize="10">Membaca : 25%</text>
          </g>
        </svg>
      );

    case 'k6-indo-1': // Struktur Naskah Pidato (Bagian 1: Salam & Syukur, Bagian 2: Isi Pokok, Bagian 3: Kesimpulan & Penutup)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="180" height="22" rx="6" fill={isPrint ? '#eee' : '#e0e7ff'} />
          <text x="105" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#3730a3'} fontSize="11" fontWeight="bold">Struktur Naskah Pidato</text>

          {/* 3 Blok Struktur Alur */}
          <g transform="translate(30, 48)">
            {/* Blok 1 (Ditanyakan) */}
            <rect x="0" y="0" width="120" height="75" rx="8" fill={isPrint ? '#eee' : '#eff6ff'} stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="2" />
            <rect x="10" y="8" width="100" height="18" rx="4" fill={isPrint ? '#ddd' : '#dbeafe'} />
            <text x="60" y="21" textAnchor="middle" fill={isPrint ? '#000' : '#1d4ed8'} fontSize="10" fontWeight="bold">Bagian I: [ ? ]</text>
            <text x="60" y="42" textAnchor="middle" fill={textDark} fontSize="9">• Salam Pembuka</text>
            <text x="60" y="55" textAnchor="middle" fill={textDark} fontSize="9">• Rasa Syukur</text>
            <text x="60" y="67" textAnchor="middle" fill={textDark} fontSize="9">• Penghormatan</text>

            <path d="M 125 38 L 138 38" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Blok 2: Isi Pidato */}
            <rect x="142" y="0" width="120" height="75" rx="8" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
            <rect x="152" y="8" width="100" height="18" rx="4" fill={isPrint ? '#eee' : '#f1f5f9'} />
            <text x="202" y="21" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Bagian II: Isi</text>
            <text x="202" y="42" textAnchor="middle" fill={textDark} fontSize="9">• Gagasan Utama</text>
            <text x="202" y="55" textAnchor="middle" fill={textDark} fontSize="9">• Pesan Persuasi</text>
            <text x="202" y="67" textAnchor="middle" fill={textDark} fontSize="9">• Argumen Bukti</text>

            <path d="M 267 38 L 280 38" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" />

            {/* Blok 3: Penutup */}
            <rect x="284" y="0" width="116" height="75" rx="8" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
            <rect x="294" y="8" width="96" height="18" rx="4" fill={isPrint ? '#eee' : '#f1f5f9'} />
            <text x="342" y="21" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Bagian III: Penutup</text>
            <text x="342" y="42" textAnchor="middle" fill={textDark} fontSize="9">• Simpulan</text>
            <text x="342" y="55" textAnchor="middle" fill={textDark} fontSize="9">• Permohonan Maaf</text>
            <text x="342" y="67" textAnchor="middle" fill={textDark} fontSize="9">• Salam Penutup</text>
          </g>

          <text x="230" y="142" textAnchor="middle" fill={textMuted} fontSize="9.5">Susunan babak penyampaian orasi/pidato persuasif formal</text>
        </svg>
      );

    case 'k6-indo-2': // Infografis Mitigasi Tanggap Gempa Bumi (Drop, Cover, Hold)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="180" height="22" rx="6" fill={isPrint ? '#eee' : '#fef2f2'} />
          <text x="105" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#991b1b'} fontSize="11" fontWeight="bold">Mitigasi Darurat Gempa</text>

          {/* Ilustrasi Meja Kokoh & Orang Berlindung */}
          <g transform="translate(100, 45)">
            {/* Meja */}
            <rect x="0" y="30" width="120" height="12" rx="3" fill={isPrint ? '#999' : '#b45309'} stroke={isPrint ? '#000' : '#78350f'} strokeWidth="1.5" />
            <rect x="8" y="42" width="10" height="42" fill={isPrint ? '#999' : '#92400e'} stroke={isPrint ? '#000' : '#78350f'} strokeWidth="1.5" />
            <rect x="102" y="42" width="10" height="42" fill={isPrint ? '#999' : '#92400e'} stroke={isPrint ? '#000' : '#78350f'} strokeWidth="1.5" />

            {/* Orang Berlutut di Bawah Meja Memegangi Kepala */}
            {/* Kepala */}
            <circle cx="55" cy="52" r="9" fill={isPrint ? '#eee' : '#fde047'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" />
            {/* Tangan menutupi kepala */}
            <path d="M 46 52 Q 55 42 64 52" fill="none" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="2.5" />
            {/* Badan jongkok */}
            <path d="M 55 60 Q 68 66 75 78" fill="none" stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="6" strokeLinecap="round" />
            {/* Kaki melipat */}
            <path d="M 75 78 L 48 82" stroke={isPrint ? '#000' : '#1e3a8a'} strokeWidth="4" strokeLinecap="round" />

            {/* Simbol Getaran Gempa */}
            <path d="M 125 15 L 132 25 L 124 35 L 134 45" fill="none" stroke={isPrint ? '#000' : '#ef4444'} strokeWidth="2" strokeLinecap="round" />
          </g>

          <g transform="translate(250, 48)">
            <rect width="180" height="75" rx="8" fill={isPrint ? '#f8f8f8' : '#ffffff'} stroke={isPrint ? '#000' : '#e2e8f0'} strokeWidth="1.5" />
            <text x="12" y="24" fill={textDark} fontSize="10" fontWeight="bold">Protokol Penyelamatan:</text>
            <text x="12" y="44" fill={textDark} fontSize="9.5">1. Merunduk / Jongkok</text>
            <text x="12" y="58" fill={isPrint ? '#000' : '#b91c1c'} fontSize="9.5" fontWeight="bold">2. Tindakan: [ ? ]</text>
            <text x="12" y="72" fill={textDark} fontSize="9.5">3. Bertahan hingga aman</text>
          </g>
        </svg>
      );

    case 'k6-ipas-1': // Tata Surya 8 Planet - Planet ke-5 Jupiter (Ditandai [ ? ] tanpa nama Jupiter)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#e0e7ff'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#3730a3'} fontSize="11" fontWeight="bold">Susunan Tata Surya</text>

          {/* Matahari di Kiri */}
          <path d="M 0 10 A 80 80 0 0 1 0 150 Z" fill={isPrint ? '#ddd' : '#f59e0b'} stroke={isPrint ? '#000' : '#d97706'} strokeWidth="2" />
          <text x="12" y="85" fill={isPrint ? '#000' : '#78350f'} fontSize="9" fontWeight="bold" transform="rotate(-90 12 85)">Matahari</text>

          {/* 8 Planet Berjajar */}
          {/* 1. Merkurius */}
          <circle cx="55" cy="85" r="4" fill={isPrint ? '#999' : '#94a3b8'} stroke={isPrint ? '#000' : '#475569'} />
          <text x="55" y="102" textAnchor="middle" fill={textMuted} fontSize="7.5">1</text>

          {/* 2. Venus */}
          <circle cx="85" cy="85" r="6" fill={isPrint ? '#bbb' : '#fde047'} stroke={isPrint ? '#000' : '#ca8a04'} />
          <text x="85" y="104" textAnchor="middle" fill={textMuted} fontSize="7.5">2</text>

          {/* 3. Bumi */}
          <circle cx="120" cy="85" r="7" fill={isPrint ? '#666' : '#38bdf8'} stroke={isPrint ? '#000' : '#0284c7'} />
          <text x="120" y="105" textAnchor="middle" fill={textMuted} fontSize="7.5">3</text>

          {/* 4. Mars */}
          <circle cx="155" cy="85" r="5" fill={isPrint ? '#888' : '#f87171'} stroke={isPrint ? '#000' : '#dc2626'} />
          <text x="155" y="103" textAnchor="middle" fill={textMuted} fontSize="7.5">4</text>

          {/* 5. Jupiter (Planet Terbesar dengan tanda tanya) */}
          <g transform="translate(205, 85)">
            <circle cx="0" cy="0" r="18" fill={isPrint ? '#fff' : '#fdba74'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="2.5" />
            {/* Garis-garis atmosfer */}
            <line x1="-16" y1="-5" x2="16" y2="-5" stroke={isPrint ? '#000' : '#c2410c'} strokeWidth="1.5" />
            <line x1="-16" y1="5" x2="16" y2="5" stroke={isPrint ? '#000' : '#c2410c'} strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fill={isPrint ? '#000' : '#9a3412'} fontSize="11" fontWeight="bold">?</text>
          </g>
          <rect x="180" y="112" width="50" height="16" rx="4" fill={isPrint ? '#eee' : '#ffedd5'} stroke={isPrint ? '#000' : '#fdba74'} />
          <text x="205" y="124" textAnchor="middle" fill={isPrint ? '#000' : '#c2410c'} fontSize="8.5" fontWeight="bold">Ke-5: [ ? ]</text>

          {/* 6. Saturnus (Cincin) */}
          <g transform="translate(270, 85)">
            <ellipse cx="0" cy="0" rx="18" ry="5" fill="none" stroke={isPrint ? '#999' : '#eab308'} strokeWidth="2" transform="rotate(-20)" />
            <circle cx="0" cy="0" r="12" fill={isPrint ? '#ccc' : '#fef08a'} stroke={isPrint ? '#000' : '#ca8a04'} />
            <text x="0" y="24" textAnchor="middle" fill={textMuted} fontSize="7.5">6</text>
          </g>

          {/* 7. Uranus */}
          <circle cx="330" cy="85" r="9" fill={isPrint ? '#bbb' : '#a5f3fc'} stroke={isPrint ? '#000' : '#0891b2'} />
          <text x="330" y="107" textAnchor="middle" fill={textMuted} fontSize="7.5">7</text>

          {/* 8. Neptunus */}
          <circle cx="375" cy="85" r="8.5" fill={isPrint ? '#999' : '#818cf8'} stroke={isPrint ? '#000' : '#4338ca'} />
          <text x="375" y="106.5" textAnchor="middle" fill={textMuted} fontSize="7.5">8</text>

          {/* Keterangan */}
          <text x="230" y="148" textAnchor="middle" fill={textMuted} fontSize="9">Planet terbesar di tata surya berada di urutan nomor 5</text>
        </svg>
      );

    case 'k6-ipas-2': // Medan Magnet: Garis Gaya dari N (Utara) ke S (Selatan)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Garis Gaya Magnet Batang</text>

          <g transform="translate(130, 80)">
            {/* Garis-Garis Gaya Lengkung Atas dengan Arah Panah Keluar N Menuju S */}
            <path d="M -60 0 C -60 -45, 60 -45, 60 0" fill="none" stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="1.5" />
            <path d="M -5 -33 L 5 -33 L 1 -37" fill="none" stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="1.5" /> {/* Panah kanan */}

            <path d="M -70 0 C -70 -70, 70 -70, 70 0" fill="none" stroke={isPrint ? '#000' : '#93c5fd'} strokeWidth="1.5" strokeDasharray="4 2" />
            <path d="M -5 -52 L 5 -52 L 1 -56" fill="none" stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="1.5" />

            {/* Garis-Garis Gaya Lengkung Bawah */}
            <path d="M -60 0 C -60 45, 60 45, 60 0" fill="none" stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="1.5" />
            <path d="M -5 33 L 5 33 L 1 29" fill="none" stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="1.5" />

            <path d="M -70 0 C -70 70, 70 70, 70 0" fill="none" stroke={isPrint ? '#000' : '#93c5fd'} strokeWidth="1.5" strokeDasharray="4 2" />

            {/* Batang Magnet */}
            <rect x="-80" y="-14" width="80" height="28" fill={isPrint ? '#333' : '#ef4444'} stroke={isPrint ? '#000' : '#b91c1c'} strokeWidth="1.5" />
            <text x="-40" y="4" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">U / N</text>

            <rect x="0" y="-14" width="80" height="28" fill={isPrint ? '#777' : '#3b82f6'} stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="1.5" />
            <text x="40" y="4" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">S</text>
          </g>

          <g transform="translate(300, 48)">
            <rect width="135" height="75" rx="8" fill={isPrint ? '#eee' : '#f8fafc'} stroke={isPrint ? '#000' : '#e2e8f0'} strokeWidth="1.5" />
            <text x="12" y="24" fill={textDark} fontSize="10" fontWeight="bold">Arah Garis Luar:</text>
            <text x="12" y="45" fill={isPrint ? '#000' : '#ef4444'} fontSize="10" fontWeight="bold">Keluar: Kutub [ ? ]</text>
            <text x="12" y="65" fill={isPrint ? '#000' : '#2563eb'} fontSize="10" fontWeight="bold">Masuk : Kutub [ ? ]</text>
          </g>
        </svg>
      );

    case 'k6-pkn-1': // Pita Kaki Garuda: "Bhinneka Tunggal Ika" (Heraldik Autentik)
      return (
        <svg viewBox="0 0 460 170" className="w-full h-auto max-h-52 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="talonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
            <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="85%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
          </defs>

          <rect width="460" height="170" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />

          {/* Header Label Lambang Negara */}
          <rect x="15" y="10" width="220" height="24" rx="6" fill={isPrint ? '#eee' : '#fffbeb'} />
          <text x="125" y="26" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="11" fontWeight="bold">LAMBANG NEGARA REPUBLIK INDONESIA</text>

          {/* Cengkeraman Kaki Emas Burung Garuda Memegang Pita */}
          <g transform="translate(180, 50)">
            {/* Kaki Kiri & Cakar Emas Garuda */}
            <g transform="translate(-45, -10)">
              {/* Bulu Kaki Keemasan */}
              <path d="M-12 -22 L0 2 L12 -22 Z" fill="url(#talonGrad)" stroke={isPrint ? '#000' : '#854d0e'} strokeWidth="1" />
              {/* Tiga Jari Cakar Kuat Mengait ke Depan Pita */}
              <path d="M-10 0 C-10 18 -4 26 -4 26 C-4 26 2 18 0 0" fill="url(#talonGrad)" stroke={isPrint ? '#000' : '#854d0e'} strokeWidth="1.5" />
              <path d="M-2 0 C-2 22 4 30 4 30 C4 30 10 22 8 0" fill="url(#talonGrad)" stroke={isPrint ? '#000' : '#854d0e'} strokeWidth="1.5" />
              <path d="M6 0 C6 18 12 26 12 26 C12 26 18 18 16 0" fill="url(#talonGrad)" stroke={isPrint ? '#000' : '#854d0e'} strokeWidth="1.5" />
            </g>

            {/* Kaki Kanan & Cakar Emas Garuda */}
            <g transform="translate(45, -10)">
              {/* Bulu Kaki Keemasan */}
              <path d="M-12 -22 L0 2 L12 -22 Z" fill="url(#talonGrad)" stroke={isPrint ? '#000' : '#854d0e'} strokeWidth="1" />
              {/* Tiga Jari Cakar Kuat Mengait ke Depan Pita */}
              <path d="M-16 0 C-18 18 -12 26 -12 26 C-12 26 -6 18 -6 0" fill="url(#talonGrad)" stroke={isPrint ? '#000' : '#854d0e'} strokeWidth="1.5" />
              <path d="M-8 0 C-10 22 -4 30 -4 30 C-4 30 2 22 2 0" fill="url(#talonGrad)" stroke={isPrint ? '#000' : '#854d0e'} strokeWidth="1.5" />
              <path d="M0 0 C-2 18 4 26 4 26 C4 26 10 18 10 0" fill="url(#talonGrad)" stroke={isPrint ? '#000' : '#854d0e'} strokeWidth="1.5" />
            </g>

            {/* Pita Putih Utama Melengkung Berkeluk */}
            <g transform="translate(0, 20)">
              {/* Bayangan Lipatan Pita di Belakang */}
              <path d="M-135 12 L-150 -2 L-130 -8 L-115 4 Z" fill="#94a3b8" />
              <path d="M135 12 L150 -2 L130 -8 L115 4 Z" fill="#94a3b8" />

              {/* Lipatan Ujung Kiri & Kanan Berkeluk */}
              <path d="M-115 4 L-152 14 L-140 28 L-105 18 Z" fill="#e2e8f0" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.2" />
              <path d="M115 4 L152 14 L140 28 L105 18 Z" fill="#e2e8f0" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.2" />

              {/* Pita Depan Utama */}
              <path d="M-125 18 C-60 -2 60 -2 125 18 L122 38 C60 18 -60 18 -122 38 Z"
                    fill="url(#ribbonGrad)" stroke={isPrint ? '#000' : '#0f172a'} strokeWidth="1.8" />

              {/* Teks Semboyan Kebangsaan Autentik */}
              <text x="0" y="24" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="900" letterSpacing="3">
                BHINNEKA TUNGGAL IKA
              </text>
            </g>
          </g>

          {/* Kotak Pertanyaan & Makna di Kanan */}
          <g transform="translate(310, 48)">
            <rect x="0" y="0" width="135" height="74" rx="10" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
            <text x="67" y="20" textAnchor="middle" fill="#92400e" fontSize="9.5" fontWeight="bold">Semboyan Negara:</text>
            <rect x="12" y="28" width="111" height="32" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="67" y="44" textAnchor="middle" fill={textDark} fontSize="9" fontWeight="bold">Makna:</text>
            <text x="67" y="55" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="bold">[ ? ]</text>
          </g>

          {/* Keterangan Edukasi di Kiri Bawah */}
          <g transform="translate(15, 60)">
            <rect x="0" y="0" width="145" height="85" rx="8" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#ccc' : '#e2e8f0'} strokeWidth="1" />
            <text x="10" y="18" fill="#0f172a" fontSize="10" fontWeight="bold">Kedudukan Pita:</text>
            <text x="10" y="34" fill="#b45309" fontSize="9" fontWeight="bold">🦅 Dicengkeram kuat kaki Garuda</text>
            <text x="10" y="48" fill="#b45309" fontSize="9" fontWeight="bold">📜 Kitab Sutasoma Mpu Tantular</text>
            <text x="10" y="64" fill={textMuted} fontSize="8.5">• Walau berbeda-beda suku/agama</text>
            <text x="10" y="76" fill={textMuted} fontSize="8.5">• Tetap satu kesatuan bangsa</text>
          </g>
        </svg>
      );

    case 'k6-pkn-2': // Kotak Suara Pemilihan Umum (Luber Jurdil) - TANPA menuliskan kepanjangan Luber
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Sarana Pemilihan Umum</text>

          {/* Kotak Suara PEMILU */}
          <g transform="translate(130, 40)">
            {/* Badan Kotak Suara */}
            <rect x="0" y="20" width="85" height="80" rx="6" fill={isPrint ? '#eee' : '#f8fafc'} stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" />
            <rect x="15" y="45" width="55" height="35" rx="3" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
            <text x="42" y="60" textAnchor="middle" fill={isPrint ? '#000' : '#dc2626'} fontSize="9" fontWeight="bold">KPU</text>
            <text x="42" y="72" textAnchor="middle" fill={textDark} fontSize="8" fontWeight="bold">PEMILU</text>

            {/* Lubang Masuk Kertas Suara */}
            <rect x="22" y="14" width="40" height="6" rx="2" fill={isPrint ? '#000' : '#334155'} />

            {/* Surat Suara yang sedang dimasukkan */}
            <rect x="30" y="0" width="24" height="22" rx="2" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#dc2626'} strokeWidth="1.5" transform="rotate(-8 30 10)" />
            <line x1="34" y1="5" x2="48" y2="3" stroke={isPrint ? '#000' : '#dc2626'} strokeWidth="1.5" />
            <circle cx="41" cy="11" r="2.5" fill={isPrint ? '#000' : '#dc2626'} />
          </g>

          <g transform="translate(250, 45)">
            <rect width="180" height="75" rx="8" fill={isPrint ? '#f8f8f8' : '#ffffff'} stroke={isPrint ? '#000' : '#e2e8f0'} strokeWidth="1.5" />
            <text x="12" y="22" fill={textDark} fontSize="10" fontWeight="bold">Asas Pelaksanaan:</text>
            <text x="12" y="42" fill={isPrint ? '#000' : '#dc2626'} fontSize="11" fontWeight="bold">" L U B E R "</text>
            <text x="12" y="62" fill={textMuted} fontSize="9">Huruf L dan B = [ ? ]</text>
          </g>
        </svg>
      );

    case 'k6-coding-1': // Gembok Hijau Enkripsi HTTPS Web Address Bar
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#ecfdf5'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#065f46'} fontSize="11" fontWeight="bold">Protokol Keamanan Web</text>

          {/* Browser Address Bar Mockup */}
          <g transform="translate(45, 52)">
            <rect width="370" height="42" rx="8" fill={isPrint ? '#ffffff' : '#ffffff'} stroke={isPrint ? '#000000' : '#10b981'} strokeWidth="2" />
            
            {/* Gembok Hijau */}
            <g transform="translate(22, 12)">
              {/* Lengkungan Kawat Gembok */}
              <path d="M 4 8 L 4 4 C 4 0 14 0 14 4 L 14 8" fill="none" stroke={isPrint ? '#000' : '#059669'} strokeWidth="2.5" />
              {/* Badan Gembok */}
              <rect x="0" y="8" width="18" height="12" rx="3" fill={isPrint ? '#000' : '#10b981'} />
              <circle cx="9" cy="14" r="1.5" fill="#ffffff" />
            </g>

            {/* URL Teks */}
            <text x="50" y="26" fill={isPrint ? '#000' : '#059669'} fontSize="13" fontWeight="bold">https://</text>
            <text x="105" y="26" fill={textDark} fontSize="13">sekolah-dasar.sch.id/portal</text>

            {/* Badge Status */}
            <rect x="290" y="8" width="70" height="26" rx="6" fill={isPrint ? '#eee' : '#d1fae5'} />
            <text x="325" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#065f46'} fontSize="10" fontWeight="bold">Secure</text>
          </g>

          <text x="230" y="130" textAnchor="middle" fill={textMuted} fontSize="10">Simbol gembok pada URL peramban internet</text>
        </svg>
      );

    case 'k6-coding-2': // Alur Machine Learning / AI Kucing
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#e0e7ff'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#3730a3'} fontSize="11" fontWeight="bold">Alur Pembelajaran Mesin</text>

          {/* 3 Tahap Alur AI */}
          <g transform="translate(30, 48)">
            {/* Tahap 1: Kumpulan Data (Dataset) */}
            <rect x="0" y="0" width="110" height="70" rx="8" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
            <rect x="8" y="8" width="94" height="18" rx="4" fill={isPrint ? '#eee' : '#f1f5f9'} />
            <text x="55" y="21" textAnchor="middle" fill={textDark} fontSize="9.5" fontWeight="bold">1. Data Foto</text>
            <text x="55" y="44" textAnchor="middle" fill={textMuted} fontSize="8.5">Ribuan Gambar</text>
            <text x="55" y="58" textAnchor="middle" fill={textDark} fontSize="9">Kucing & Anjing</text>

            <path d="M 115 35 L 132 35" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" />

            {/* Tahap 2: Proses Training / Pembelajaran Model */}
            <rect x="138" y="0" width="120" height="70" rx="8" fill={isPrint ? '#eee' : '#eff6ff'} stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="2" />
            <rect x="146" y="8" width="104" height="18" rx="4" fill={isPrint ? '#ddd' : '#dbeafe'} />
            <text x="198" y="21" textAnchor="middle" fill={isPrint ? '#000' : '#1d4ed8'} fontSize="9.5" fontWeight="bold">2. Tahapan [ ? ]</text>
            <text x="198" y="44" textAnchor="middle" fill={textDark} fontSize="8.5">Pelatihan Model</text>
            <text x="198" y="58" textAnchor="middle" fill={isPrint ? '#000' : '#2563eb'} fontSize="9" fontWeight="bold">(Training Algorithm)</text>

            <path d="M 264 35 L 281 35" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" />

            {/* Tahap 3: Prediksi Output */}
            <rect x="287" y="0" width="112" height="70" rx="8" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
            <rect x="295" y="8" width="96" height="18" rx="4" fill={isPrint ? '#eee' : '#f1f5f9'} />
            <text x="343" y="21" textAnchor="middle" fill={textDark} fontSize="9.5" fontWeight="bold">3. Prediksi</text>
            <text x="343" y="44" textAnchor="middle" fill={textMuted} fontSize="8.5">Mengenali Objek</text>
            <text x="343" y="58" textAnchor="middle" fill={isPrint ? '#000' : '#16a34a'} fontSize="9" fontWeight="bold">Objek = Kucing</text>
          </g>

          <text x="230" y="142" textAnchor="middle" fill={textMuted} fontSize="9.5">Diagram siklus pemrosesan kecerdasan buatan (Artificial Intelligence)</text>
        </svg>
      );

    case 'k6-inggris-1': // Preposition of Place: Bola Merah di Bawah Kotak
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Prepositions of Place</text>

          {/* Kotak Kayu dan Bola Merah Tepat di Bawah */}
          <g transform="translate(130, 40)">
            {/* Kotak Kayu Terangkat */}
            <rect x="-35" y="0" width="70" height="50" rx="4" fill={isPrint ? '#ddd' : '#d97706'} stroke={isPrint ? '#000' : '#92400e'} strokeWidth="1.5" />
            <line x1="-35" y1="25" x2="35" y2="25" stroke={isPrint ? '#000' : '#b45309'} strokeWidth="1" />
            <text x="0" y="29" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">BOX</text>

            {/* Bola Merah di Kolong Bawah */}
            <circle cx="0" cy="72" r="14" fill={isPrint ? '#000' : '#ef4444'} stroke={isPrint ? '#000' : '#b91c1c'} strokeWidth="1.5" />
            <circle cx="-4" cy="67" r="3" fill="#ffffff" opacity="0.6" />

            {/* Garis Lantai */}
            <line x1="-60" y1="86" x2="60" y2="86" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" />
          </g>

          <g transform="translate(250, 45)">
            <rect width="180" height="75" rx="8" fill={isPrint ? '#f8f8f8' : '#ffffff'} stroke={isPrint ? '#000' : '#e2e8f0'} strokeWidth="1.5" />
            <text x="12" y="24" fill={textDark} fontSize="10" fontWeight="bold">Position Indicator:</text>
            <text x="12" y="46" fill={textDark} fontSize="10">• Object: Red Ball</text>
            <text x="12" y="66" fill={isPrint ? '#000' : '#dc2626'} fontSize="10" fontWeight="bold">• Position: [ ? ] the box</text>
          </g>
        </svg>
      );

    case 'k6-inggris-2': // Directions: Simbol Belok Kiri pada Peta Jalan
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Road Navigation Sign</text>

          {/* Rambu Petunjuk Arah Belok Kiri */}
          <g transform="translate(130, 80)">
            {/* Tiang Rambu */}
            <rect x="-3" y="20" width="6" height="45" fill={isPrint ? '#666' : '#94a3b8'} />

            {/* Papan Rambu Biru Bulat */}
            <circle cx="0" cy="0" r="38" fill={isPrint ? '#000' : '#2563eb'} stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="2" />
            <circle cx="0" cy="0" r="35" fill="none" stroke="#ffffff" strokeWidth="1.5" />

            {/* Panah Belok Kiri Putih Tebal */}
            <path d="M 12 20 L 12 -4 C 12 -12 6 -16 -6 -16 L -16 -16" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
            <polygon points="-16,-24 -28,-16 -16,-8" fill="#ffffff" />
          </g>

          <g transform="translate(250, 48)">
            <rect width="180" height="75" rx="8" fill={isPrint ? '#f8f8f8' : '#ffffff'} stroke={isPrint ? '#000' : '#e2e8f0'} strokeWidth="1.5" />
            <text x="12" y="22" fill={textDark} fontSize="10" fontWeight="bold">Traffic Instruction:</text>
            <text x="12" y="44" fill={textMuted} fontSize="9.5">At the crossroad:</text>
            <text x="12" y="64" fill={isPrint ? '#000' : '#2563eb'} fontSize="11" fontWeight="bold">Instruction: [ ? ]</text>
          </g>
        </svg>
      );

    case 'k6-sbdp-1': // Poster Reklame Komersial
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#fff7ed'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#c2410c'} fontSize="11" fontWeight="bold">Karya Seni Grafis Terapan</text>

          {/* Lembar Poster Produk */}
          <g transform="translate(110, 40)">
            <rect x="0" y="0" width="80" height="105" rx="4" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#f97316'} strokeWidth="2" />
            
            {/* Header Poster */}
            <rect x="6" y="6" width="68" height="18" rx="2" fill={isPrint ? '#eee' : '#ffedd5'} />
            <text x="40" y="18" textAnchor="middle" fill={isPrint ? '#000' : '#c2410c'} fontSize="8" fontWeight="bold">PROMO SEHAT</text>

            {/* Ilustrasi Botol Minuman Segar */}
            <rect x="32" y="32" width="16" height="34" rx="3" fill={isPrint ? '#ccc' : '#fdba74'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1.5" />
            <rect x="36" y="28" width="8" height="5" rx="1" fill={isPrint ? '#999' : '#ea580c'} />

            {/* Kalimat Persuasif */}
            <rect x="10" y="74" width="60" height="12" rx="2" fill={isPrint ? '#000' : '#ea580c'} />
            <text x="40" y="83" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">BELI 1 GRATIS 1!</text>
            <text x="40" y="98" textAnchor="middle" fill={textMuted} fontSize="6">Segar & Bervitamin</text>
          </g>

          <g transform="translate(240, 48)">
            <rect width="190" height="75" rx="8" fill={isPrint ? '#f8f8f8' : '#ffffff'} stroke={isPrint ? '#000' : '#e2e8f0'} strokeWidth="1.5" />
            <text x="12" y="22" fill={textDark} fontSize="10" fontWeight="bold">Ciri Karya Gambar:</text>
            <text x="12" y="42" fill={textDark} fontSize="9">• Memuat gambar & teks persuasif</text>
            <text x="12" y="56" fill={textDark} fontSize="9">• Bertujuan menawarkan produk/jasa</text>
            <text x="12" y="70" fill={isPrint ? '#000' : '#ea580c'} fontSize="9.5" fontWeight="bold">• Jenis Media: [ ? ]</text>
          </g>
        </svg>
      );

    case 'k6-sbdp-2': // Monumen Nasional (Monas) Arsitektur 3 Dimensi
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#fffbeb'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="11" fontWeight="bold">Ikon Monumen Nasional</text>

          {/* Vektor Siluet Monas Jakarta */}
          <g transform="translate(130, 40)">
            {/* Pelataran Bawah */}
            <rect x="-40" y="90" width="80" height="10" rx="2" fill={isPrint ? '#ccc' : '#e2e8f0'} stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="1.5" />

            {/* Cawan Monas */}
            <polygon points="-25,90 25,90 32,75 -32,75" fill={isPrint ? '#bbb' : '#f8fafc'} stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />

            {/* Tiang Tugu Menjulang */}
            <polygon points="-7,75 7,75 5,20 -5,20" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />

            {/* Cawan Atas */}
            <rect x="-9" y="16" width="18" height="5" rx="1" fill={isPrint ? '#ddd' : '#fef08a'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" />

            {/* Lidah Api Emas */}
            <path d="M 0 0 C 8 6 6 16 0 16 C -6 16 -8 6 0 0 Z" fill={isPrint ? '#000' : '#eab308'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" />
          </g>

          <g transform="translate(240, 48)">
            <rect width="190" height="75" rx="8" fill={isPrint ? '#f8f8f8' : '#ffffff'} stroke={isPrint ? '#000' : '#e2e8f0'} strokeWidth="1.5" />
            <text x="12" y="22" fill={textDark} fontSize="10" fontWeight="bold">Ciri Karya:</text>
            <text x="12" y="42" fill={textDark} fontSize="9">• Memiliki panjang, lebar, dan tinggi</text>
            <text x="12" y="56" fill={textDark} fontSize="9">• Dapat dinikmati dari segala arah</text>
            <text x="12" y="70" fill={isPrint ? '#000' : '#b45309'} fontSize="9.5" fontWeight="bold">• Cabang Seni: [ ? ]</text>
          </g>
        </svg>
      );

    case 'k6-pjok-1': // Denah Formasi Sepak Bola 4-4-2 (Ditandai tanpa tulisan "Formasi 4-4-2")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#ecfdf5'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#065f46'} fontSize="11" fontWeight="bold">Formasi Taktik Sepak Bola</text>

          {/* Lapangan Hijau Tampak Atas */}
          <g transform="translate(50, 45)">
            <rect width="210" height="98" rx="6" fill={isPrint ? '#ffffff' : '#15803d'} stroke={isPrint ? '#000' : '#166534'} strokeWidth="2" />
            {/* Garis Tengah & Lingkaran */}
            <line x1="105" y1="0" x2="105" y2="98" stroke={isPrint ? '#000' : '#ffffff'} strokeWidth="1.5" opacity="0.8" />
            <circle cx="105" cy="49" r="22" fill="none" stroke={isPrint ? '#000' : '#ffffff'} strokeWidth="1.5" opacity="0.8" />

            {/* Kiper (1) */}
            <circle cx="18" cy="49" r="6" fill={isPrint ? '#000' : '#f59e0b'} />
            <text x="18" y="52" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">GK</text>

            {/* 4 Pemain Belakang (Bek) */}
            {[20, 39, 59, 78].map((y, i) => (
              <circle key={`def-${i}`} cx="55" cy={y} r="5" fill={isPrint ? '#333' : '#3b82f6'} stroke="#fff" strokeWidth="1" />
            ))}

            {/* 4 Pemain Tengah (Gelandang) */}
            {[20, 39, 59, 78].map((y, i) => (
              <circle key={`mid-${i}`} cx="120" cy={y} r="5" fill={isPrint ? '#666' : '#eab308'} stroke="#fff" strokeWidth="1" />
            ))}

            {/* 2 Penyerang (Striker) */}
            {[34, 64].map((y, i) => (
              <circle key={`fwd-${i}`} cx="175" cy={y} r="5.5" fill={isPrint ? '#000' : '#ef4444'} stroke="#fff" strokeWidth="1" />
            ))}
          </g>

          <g transform="translate(280, 48)">
            <rect width="160" height="90" rx="8" fill={isPrint ? '#f8f8f8' : '#ffffff'} stroke={isPrint ? '#000' : '#e2e8f0'} strokeWidth="1.5" />
            <text x="12" y="20" fill={textDark} fontSize="10" fontWeight="bold">Komposisi Pemain:</text>
            <text x="12" y="38" fill={isPrint ? '#000' : '#2563eb'} fontSize="9.5">• Bertahan (Bek): 4 Orang</text>
            <text x="12" y="54" fill={isPrint ? '#000' : '#ca8a04'} fontSize="9.5">• Gelandang: 4 Orang</text>
            <text x="12" y="70" fill={isPrint ? '#000' : '#dc2626'} fontSize="9.5">• Penyerang: 2 Orang</text>
            <text x="12" y="84" fill={textDark} fontSize="9.5" fontWeight="bold">Susunan Formasi: [ ? ]</text>
          </g>
        </svg>
      );

    case 'k6-pjok-2': // Kotak Medis P3K
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#fef2f2'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#991b1b'} fontSize="11" fontWeight="bold">Perlengkapan Medis</text>

          {/* Kotak P3K Terbuka dengan Kasa dan Plester */}
          <g transform="translate(130, 40)">
            {/* Kotak Putih */}
            <rect x="-45" y="10" width="90" height="70" rx="8" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#dc2626'} strokeWidth="2.5" />
            {/* Pegangan Atas */}
            <path d="M -18 10 L -18 2 L 18 2 L 18 10" fill="none" stroke={isPrint ? '#000' : '#dc2626'} strokeWidth="2.5" />

            {/* Tanda Palang Merah */}
            <rect x="-6" y="28" width="12" height="34" fill={isPrint ? '#000' : '#dc2626'} />
            <rect x="-17" y="39" width="34" height="12" fill={isPrint ? '#000' : '#dc2626'} />

            {/* Label P3K */}
            <text x="0" y="74" textAnchor="middle" fill={isPrint ? '#000' : '#dc2626'} fontSize="10" fontWeight="bold">P 3 K</text>
          </g>

          <g transform="translate(250, 48)">
            <rect width="180" height="75" rx="8" fill={isPrint ? '#f8f8f8' : '#ffffff'} stroke={isPrint ? '#000' : '#e2e8f0'} strokeWidth="1.5" />
            <text x="12" y="22" fill={textDark} fontSize="10" fontWeight="bold">Kegunaan Alat:</text>
            <text x="12" y="42" fill={textDark} fontSize="9">• Pertolongan pertama darurat</text>
            <text x="12" y="56" fill={textDark} fontSize="9">• Membalut luka & cegah infeksi</text>
            <text x="12" y="70" fill={isPrint ? '#000' : '#dc2626'} fontSize="9.5" fontWeight="bold">• Alat utama: [ ? ]</text>
          </g>
        </svg>
      );

    case 'k6-sunda-1': // Pakarang Pusaka Tatar Sunda: Kujang Jawa Barat
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="180" height="22" rx="6" fill={isPrint ? '#eee' : '#ccfbf1'} />
          <text x="105" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#0f766e'} fontSize="11" fontWeight="bold">Pakarang Pusaka Tatar Sunda</text>

          {/* Gambar Siluet Bilah Kujang Khas Sunda Jawa Barat */}
          <g transform="translate(130, 22)">
            {/* Gagang Kujang Kayu Ukir (Pangsor) */}
            <path d="M 30 100 Q 15 110, 10 120 Q 20 128, 38 120 Q 42 110, 40 95 Z" fill={isPrint ? '#999' : '#78350f'} stroke={isPrint ? '#000' : '#451a03'} strokeWidth="2" />
            <ellipse cx="38" cy="97" rx="8" ry="5" fill={isPrint ? '#ccc' : '#d97706'} stroke={isPrint ? '#000' : '#78350f'} strokeWidth="1.5" />

            {/* Bilah Kujang Melengkung Elegan Khas Jawa Barat */}
            <path d="M 40 95 Q 50 70, 70 50 Q 95 30, 130 18 Q 155 12, 175 14 Q 150 30, 140 45 Q 155 42, 170 45 Q 135 65, 120 85 Q 90 98, 55 95 Z" fill={isPrint ? '#fff' : '#f1f5f9'} stroke={isPrint ? '#000' : '#334155'} strokeWidth="2.5" />
            
            {/* Liang-liang (Mata Kujang) Khas Pusaka Pajajaran */}
            <circle cx="115" cy="42" r="3.5" fill={isPrint ? '#000' : '#d97706'} stroke={isPrint ? '#000' : '#b45309'} strokeWidth="1.5" />
            <circle cx="100" cy="54" r="3.5" fill={isPrint ? '#000' : '#d97706'} stroke={isPrint ? '#000' : '#b45309'} strokeWidth="1.5" />
            <circle cx="85" cy="67" r="3.5" fill={isPrint ? '#000' : '#d97706'} stroke={isPrint ? '#000' : '#b45309'} strokeWidth="1.5" />

            {/* Pamor Garis Logam Tempaan Besi Kuno */}
            <path d="M 52 90 Q 75 65, 105 45 Q 135 30, 160 20" fill="none" stroke={isPrint ? '#aaa' : '#94a3b8'} strokeWidth="1.5" strokeDasharray="4 2" />
          </g>

          <rect x="295" y="55" width="150" height="42" rx="8" fill={isPrint ? '#eee' : '#f0fdf4'} stroke={isPrint ? '#000' : '#bbf7d0'} strokeWidth="1.5" />
          <text x="370" y="73" textAnchor="middle" fill={textDark} fontSize="10.5" fontWeight="bold">Senjata Tradisional Jawa Barat</text>
          <text x="370" y="88" textAnchor="middle" fill={isPrint ? '#000' : '#0f766e'} fontSize="10" fontWeight="bold">Nami Pakarang: [ ? ]</text>
        </svg>
      );

    case 'k6-daerah-1': // Pasangan Aksara Jawa (Ka, Da, Sa, Pa)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#fffbeb'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="11" fontWeight="bold">Pasangan Aksara Jawa</text>

          {/* 4 Contoh Pasangan Aksara Jawa */}
          <g transform="translate(30, 48)">
            {[
              { label: 'Pasangan Ka', glyph: '꧀ꦏ' },
              { label: 'Pasangan Da', glyph: '꧀ꦢ' },
              { label: 'Pasangan Sa', glyph: '꧀ꦱ' },
              { label: 'Pasangan Pa', glyph: '꧀ꦥ' },
            ].map((item, idx) => (
              <g key={idx} transform={`translate(${idx * 100}, 0)`}>
                <rect width="88" height="75" rx="8" fill={isPrint ? '#fff' : '#fefce8'} stroke={isPrint ? '#000' : '#fde047'} strokeWidth="1.5" />
                <rect x="6" y="6" width="76" height="18" rx="3" fill={isPrint ? '#eee' : '#fef08a'} />
                <text x="44" y="18" textAnchor="middle" fill={isPrint ? '#000' : '#854d0e'} fontSize="9" fontWeight="bold">{item.label}</text>
                <text x="44" y="55" textAnchor="middle" fill={textDark} fontSize="24" fontFamily="serif">ꦲ{item.glyph}</text>
              </g>
            ))}
          </g>

          <text x="230" y="142" textAnchor="middle" fill={textMuted} fontSize="9.5">Wujud pasangan aksara Jawa ing sangandhaping aksara legena</text>
        </svg>
      );

    case 'k6-daerah-2': // Aksara Tradisional Bali (Naskah Lontar)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#fffbeb'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="11" fontWeight="bold">Aksara Tradisional Nusantara</text>

          {/* Selembar Daun Lontar Bertuliskan Aksara Tradisional */}
          <g transform="translate(60, 45)">
            <rect width="340" height="50" rx="4" fill={isPrint ? '#fff' : '#fef3c7'} stroke={isPrint ? '#000' : '#d97706'} strokeWidth="1.5" />
            <circle cx="20" cy="25" r="4" fill="none" stroke={isPrint ? '#000' : '#b45309'} strokeWidth="1.5" />
            <circle cx="320" cy="25" r="4" fill="none" stroke={isPrint ? '#000' : '#b45309'} strokeWidth="1.5" />

            {/* Tulisan Aksara Lontar Khas Bali */}
            <text x="170" y="32" textAnchor="middle" fill={textDark} fontSize="18" fontFamily="serif" letterSpacing="4">
              ᬑᬁ ᬲ᭄ᬯᬲ᭄ᬢ᭄ᬬᬲ᭄ᬢᬸ
            </text>
          </g>

          <g transform="translate(60, 105)">
            <rect width="340" height="35" rx="6" fill={isPrint ? '#f8f8f8' : '#ffffff'} stroke={isPrint ? '#000' : '#e2e8f0'} strokeWidth="1.5" />
            <text x="170" y="22" textAnchor="middle" fill={textDark} fontSize="10">Naskah lontar suci lan kidung tradisi Pulo Dewata: [ ? ]</text>
          </g>
        </svg>
      );

    default:
      return null;
  }
};
