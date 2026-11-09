import React from 'react';

export const renderGrade4Svg = (key: string, isPrint = false): React.ReactElement | null => {
  const strokeColor = isPrint ? '#000000' : '#cbd5e1';
  const bgCard = isPrint ? '#ffffff' : '#f8fafc';
  const textDark = isPrint ? '#000000' : '#1e293b';
  const textMuted = isPrint ? '#333333' : '#64748b';

  let normKey = key;
  if (normKey === 'k4-sunda-1' || normKey === 'k4-sunda-2') normKey = 'k4-daerah-1';
  if (normKey === 'k4-jawa-1' || normKey === 'k4-jawa-2') normKey = 'k4-daerah-2';

  switch (normKey) {
    case 'k4-mtk-1': // Pengukuran Sudut Siku-Siku dengan Busur Derajat (Tanpa teks "90° Sudut Siku-Siku")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="160" height="22" rx="6" fill={isPrint ? '#eee' : '#e0e7ff'} />
          <text x="95" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#3730a3'} fontSize="11" fontWeight="bold">Pengukuran Busur Derajat</text>

          {/* Busur Derajat Setengah Lingkaran Transparan di Tengah */}
          <g transform="translate(150, 25)">
            {/* Bentuk Busur Derajat */}
            <path d="M0 95 A80 80 0 0 1 160 95 Z" fill={isPrint ? '#fff' : '#f0f9ff'} stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="2" />
            <circle cx="80" cy="95" r="4" fill={isPrint ? '#000' : '#0369a1'} />

            {/* Skala Derajat: 0, 45, 90, 135, 180 */}
            <line x1="80" y1="15" x2="80" y2="25" stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="2" />
            <text x="80" y="38" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">90°</text>
            <text x="15" y="90" textAnchor="middle" fill={textMuted} fontSize="9">180°</text>
            <text x="145" y="90" textAnchor="middle" fill={textMuted} fontSize="9">0°</text>

            {/* Dua Garis Saling Tegak Lurus */}
            {/* Garis Horizontal BC */}
            <line x1="80" y1="95" x2="165" y2="95" stroke={isPrint ? '#000' : '#dc2626'} strokeWidth="3" strokeLinecap="round" />
            {/* Garis Vertikal BA Menunjuk Tegak ke 90° */}
            <line x1="80" y1="95" x2="80" y2="15" stroke={isPrint ? '#000' : '#dc2626'} strokeWidth="3" strokeLinecap="round" />

            {/* Simbol Kotak Siku-siku di Sudut B */}
            <rect x="80" y="80" width="15" height="15" fill="none" stroke={isPrint ? '#000' : '#dc2626'} strokeWidth="1.5" />
            
            {/* Label Titik A, B, C */}
            <text x="80" y="8" textAnchor="middle" fill={isPrint ? '#000' : '#b91c1c'} fontSize="11" fontWeight="bold">A</text>
            <text x="70" y="108" textAnchor="middle" fill={isPrint ? '#000' : '#b91c1c'} fontSize="11" fontWeight="bold">B</text>
            <text x="172" y="100" textAnchor="middle" fill={isPrint ? '#000' : '#b91c1c'} fontSize="11" fontWeight="bold">C</text>
          </g>

          <rect x="315" y="55" width="130" height="42" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
          <text x="380" y="73" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Sudut ∠ABC:</text>
          <text x="380" y="89" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="11" fontWeight="bold">Besar Sudut = [ ? ]</text>
        </svg>
      );

    case 'k4-mtk-2': // Persegi Panjang p = 8 cm, l = 5 cm (Tanpa perhitungan "40 cm²")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="170" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="100" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Bangun Persegi Panjang</text>

          {/* Bangun Persegi Panjang di Kiri/Tengah */}
          <g transform="translate(60, 40)">
            <rect x="0" y="15" width="190" height="85" rx="6" fill={isPrint ? '#fff' : '#eff6ff'} stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="2" />
            
            {/* Garis Ukuran Panjang (Atas) */}
            <line x1="0" y1="5" x2="190" y2="5" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
            <line x1="0" y1="0" x2="0" y2="10" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
            <line x1="190" y1="0" x2="190" y2="10" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
            <text x="95" y="-2" textAnchor="middle" fill={isPrint ? '#000' : '#1d4ed8'} fontSize="12" fontWeight="bold">panjang (p) = 8 cm</text>

            {/* Garis Ukuran Lebar (Kanan) */}
            <line x1="205" y1="15" x2="205" y2="100" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
            <line x1="200" y1="15" x2="210" y2="15" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
            <line x1="200" y1="100" x2="210" y2="100" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
            <text x="215" y="62" fill={isPrint ? '#000' : '#1d4ed8'} fontSize="12" fontWeight="bold">lebar (l) = 5 cm</text>
          </g>

          {/* Kotak Pertanyaan Luas */}
          <g transform="translate(320, 50)">
            <rect x="0" y="0" width="125" height="70" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="2" strokeDasharray="4 2" />
            <text x="62" y="24" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Hitunglah:</text>
            <text x="62" y="42" textAnchor="middle" fill={textMuted} fontSize="10">Luas Persegi Panjang</text>
            <text x="62" y="58" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="13" fontWeight="bold">Luas = ... ? cm²</text>
          </g>
        </svg>
      );

    case 'k4-indo-1': // Struktur Paragraf Deduktif (Gagasan Pokok di Depan) (Tanpa tulisan jawaban "Deduktif")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Struktur Paragraf Teks</text>

          {/* Bagan Tiga Baris Paragraf */}
          <g transform="translate(45, 42)">
            {/* Baris 1 (Paling Depan / Awal): Gagasan Pokok */}
            <g transform="translate(0, 0)">
              <rect x="0" y="0" width="280" height="28" rx="6" fill={isPrint ? '#ccc' : '#fef08a'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" />
              <text x="140" y="18" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">KALIMAT UTAMA / GAGASAN POKOK (DI AWAL)</text>
            </g>

            {/* Baris 2: Kalimat Penjelas 1 */}
            <g transform="translate(0, 34)">
              <rect x="0" y="0" width="280" height="26" rx="6" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1" />
              <text x="140" y="17" textAnchor="middle" fill={textMuted} fontSize="10">Kalimat Penjelas 1: Rincian &amp; Fakta Pendukung</text>
            </g>

            {/* Baris 3: Kalimat Penjelas 2 */}
            <g transform="translate(0, 66)">
              <rect x="0" y="0" width="280" height="26" rx="6" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1" />
              <text x="140" y="17" textAnchor="middle" fill={textMuted} fontSize="10">Kalimat Penjelas 2: Uraian Bukti Tambahan</text>
            </g>
          </g>

          <rect x="340" y="55" width="110" height="50" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
          <text x="395" y="75" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Jenis Paragraf:</text>
          <text x="395" y="93" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="13" fontWeight="bold">[ ? ]</text>
        </svg>
      );

    case 'k4-indo-2': // Wawancara (Orang Bertanya / Pewawancara vs Narasumber)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="155" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="92" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Kegiatan Wawancara</text>

          {/* Dua Orang: Orang A (Mengajukan Pertanyaan) dan Orang B (Narasumber Ahli) */}
          <g transform="translate(100, 20)">
            <line x1="-20" y1="115" x2="260" y2="115" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="2" />

            {/* Orang A (Membawa Mikrofon & Buku Catatan) Diberi Label [ ? ] */}
            <g transform="translate(30, 15)">
              <circle cx="20" cy="18" r="11" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1.5" />
              <line x1="20" y1="29" x2="20" y2="65" stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="4" />
              <line x1="20" y1="65" x2="10" y2="100" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              <line x1="20" y1="65" x2="30" y2="100" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              {/* Mikrofon di Tangan */}
              <line x1="20" y1="45" x2="55" y2="40" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="3" />
              <circle cx="58" cy="38" r="4.5" fill={isPrint ? '#000' : '#334155'} />
              {/* Balon Pertanyaan */}
              <rect x="-15" y="-12" width="60" height="20" rx="4" fill={isPrint ? '#eee' : '#dbeafe'} stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="1" />
              <text x="15" y="1" textAnchor="middle" fill={textDark} fontSize="9" fontWeight="bold">5W + 1H ?</text>
              <text x="20" y="115" textAnchor="middle" fill={isPrint ? '#000' : '#2563eb'} fontSize="11" fontWeight="bold">Peran: [ ? ]</text>
            </g>

            {/* Orang B (Narasumber Menjawab) */}
            <g transform="translate(180, 15)">
              <circle cx="20" cy="18" r="11" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1.5" />
              <line x1="20" y1="29" x2="20" y2="65" stroke={isPrint ? '#000' : '#16a34a'} strokeWidth="4" />
              <line x1="20" y1="65" x2="10" y2="100" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              <line x1="20" y1="65" x2="30" y2="100" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              <text x="20" y="115" textAnchor="middle" fill={isPrint ? '#000' : '#15803d'} fontSize="11" fontWeight="bold">Narasumber</text>
            </g>
          </g>
        </svg>
      );

    case 'k4-ipas-1': // Bagan Fotosintesis: Cahaya + CO2 + Air -> Glukosa + Gas [ ? ]
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#dcfce7'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#166534'} fontSize="11" fontWeight="bold">Bagan Proses Fotosintesis</text>

          {/* Daun Hijau di Tengah */}
          <g transform="translate(180, 25)">
            {/* Bentuk Daun */}
            <path d="M10 80 C-10 10 90 0 110 50 C110 100 20 100 10 80 Z" fill={isPrint ? '#fff' : '#22c55e'} stroke={isPrint ? '#000' : '#15803d'} strokeWidth="2.5" />
            <path d="M10 80 Q60 50 110 50" fill="none" stroke={isPrint ? '#000' : '#15803d'} strokeWidth="2" />
            <line x1="40" y1="67" x2="55" y2="40" stroke={isPrint ? '#000' : '#15803d'} strokeWidth="1.5" />
            <line x1="70" y1="57" x2="85" y2="35" stroke={isPrint ? '#000' : '#15803d'} strokeWidth="1.5" />
            <text x="60" y="85" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Klorofil</text>
          </g>

          {/* Bahan Masuk (Kiri) */}
          <g transform="translate(25, 40)">
            <text x="0" y="15" fill={isPrint ? '#000' : '#ea580c'} fontSize="10" fontWeight="bold">☀️ Cahaya Matahari</text>
            <text x="0" y="38" fill={isPrint ? '#000' : '#0284c7'} fontSize="10" fontWeight="bold">💧 Air (H₂O) dari Tanah</text>
            <text x="0" y="61" fill={isPrint ? '#000' : '#475569'} fontSize="10" fontWeight="bold">💨 Karbon Dioksida (CO₂)</text>
            <path d="M135 45 L165 55 M158 50 L165 55 L158 60" stroke={isPrint ? '#000' : '#16a34a'} strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Hasil Fotosintesis (Kanan) */}
          <g transform="translate(305, 45)">
            <path d="M-10 40 L15 40 M8 35 L15 40 L8 45" stroke={isPrint ? '#000' : '#16a34a'} strokeWidth="2.5" strokeLinecap="round" />
            <rect x="20" y="10" width="115" height="26" rx="5" fill={isPrint ? '#eee' : '#fefce8'} stroke={isPrint ? '#000' : '#fde047'} strokeWidth="1" />
            <text x="77" y="27" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Gula / Karbohidrat</text>
            
            <rect x="20" y="44" width="115" height="28" rx="5" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="77" y="62" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="11" fontWeight="bold">Gas [ ? ]</text>
          </g>
        </svg>
      );

    case 'k4-ipas-2': // Kincir Air Penggerak Pembangkit Listrik (PLTA)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="170" height="22" rx="6" fill={isPrint ? '#eee' : '#e0f2fe'} />
          <text x="100" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#0369a1'} fontSize="11" fontWeight="bold">Pembangkit Listrik Air (PLTA)</text>

          {/* Aliran Air Sungai & Kincir Berputar */}
          <g transform="translate(60, 25)">
            {/* Air Terjun Mengalir Deras */}
            <path d="M0 25 L80 25 L80 110 L250 110" fill="none" stroke={isPrint ? '#000' : '#38bdf8'} strokeWidth="6" />
            <text x="35" y="18" fill={isPrint ? '#000' : '#0284c7'} fontSize="10" fontWeight="bold">Aliran Air Deras</text>

            {/* Roda Kincir Air Berputar */}
            <g transform="translate(95, 65)">
              <circle cx="0" cy="0" r="34" fill={isPrint ? '#fff' : '#fef3c7'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="2.5" />
              <circle cx="0" cy="0" r="6" fill={isPrint ? '#000' : '#78350f'} />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
                <line key={i} x1="0" y1="0" x2="30" y2="0" stroke={isPrint ? '#000' : '#854d0e'} strokeWidth="2.5" transform={`rotate(${ang} 0 0)`} />
              ))}
            </g>

            {/* Poros Turbin ke Generator Listrik */}
            <line x1="95" y1="65" x2="185" y2="65" stroke={isPrint ? '#000' : '#475569'} strokeWidth="4" />
            
            {/* Kotak Generator Listrik */}
            <rect x="185" y="42" width="60" height="46" rx="6" fill={isPrint ? '#eee' : '#3b82f6'} stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="1.5" />
            <text x="215" y="68" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Generator</text>

            {/* Kilatan Petir Listrik */}
            <path d="M255 65 L275 60 L270 70 L290 65" stroke={isPrint ? '#000' : '#eab308'} strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>

          <rect x="310" y="55" width="135" height="45" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
          <text x="377" y="73" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Perubahan Energi:</text>
          <text x="377" y="90" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="11" fontWeight="bold">Energi Gerak ➔ [ ? ]</text>
        </svg>
      );

    case 'k4-pkn-1': // Simbol Padi dan Kapas Sila Kelima Pancasila (Heraldik Autentik)
      return (
        <svg viewBox="0 0 460 170" className="w-full h-auto max-h-52 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="padiGrain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="60%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
            <linearGradient id="kapasFlower" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="80%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
          </defs>

          <rect width="460" height="170" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />

          {/* Header Label Lambang Negara */}
          <rect x="15" y="10" width="220" height="24" rx="6" fill={isPrint ? '#eee' : '#fefce8'} />
          <text x="125" y="26" textAnchor="middle" fill={isPrint ? '#000' : '#854d0e'} fontSize="11" fontWeight="bold">LAMBANG PERISAI GARUDA PANCASILA</text>

          {/* Perisai Putih Sudut Kiri Bawah di Tengah */}
          <g transform="translate(175, 24)">
            {/* Bayangan perisai */}
            <path d="M55 4 C95 4 105 14 105 60 C105 96 55 120 55 120 C55 120 5 96 5 60 C5 14 15 4 55 4 Z"
                  fill="#000000" opacity="0.15" transform="translate(2, 3)" />
            {/* Badan Perisai Putih */}
            <path d="M55 4 C95 4 105 14 105 60 C105 96 55 120 55 120 C55 120 5 96 5 60 C5 14 15 4 55 4 Z"
                  fill="#ffffff"
                  stroke={isPrint ? '#000000' : '#eab308'}
                  strokeWidth="3.5" />
            <path d="M55 8 C90 8 99 17 99 58 C99 90 55 112 55 112 C55 112 11 90 11 58 C11 17 20 8 55 8 Z"
                  fill="none"
                  stroke={isPrint ? '#ccc' : '#fde68a'}
                  strokeWidth="1" opacity="0.7" />

            {/* Simbol Padi di Kiri & Kapas di Kanan Autentik */}
            <g transform="translate(55, 62)">
              {/* Tangkai Padi Lengkung Emas di Kiri */}
              <path d="M-4 38 Q-26 10 -14 -32 Q-10 -38 -8 -40"
                    fill="none" stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="2.5" strokeLinecap="round" />

              {/* Butir-Butir Padi Kuning Emas */}
              {[-36, -30, -24, -18, -12, -6, 0, 6, 12, 18, 24].map((y, idx) => {
                const x = -14 - Math.sin((y + 40) / 25) * 8;
                return (
                  <g key={idx} transform={`translate(${x.toFixed(1)}, ${y})`}>
                    <ellipse cx="-4" cy="0" rx="3.5" ry="6" fill="url(#padiGrain)" stroke={isPrint ? '#000' : '#854d0e'} strokeWidth="0.8" transform="rotate(-35)" />
                    <ellipse cx="4" cy="-2" rx="3.5" ry="6" fill="url(#padiGrain)" stroke={isPrint ? '#000' : '#854d0e'} strokeWidth="0.8" transform="rotate(35)" />
                  </g>
                );
              })}

              {/* Tangkai Kapas Hijau di Kanan */}
              <path d="M4 38 Q26 10 14 -32 Q10 -38 8 -40"
                    fill="none" stroke={isPrint ? '#000' : '#15803d'} strokeWidth="2.5" strokeLinecap="round" />

              {/* 4 Kuntum Bunga Kapas Putih Lembut */}
              {[-28, -14, 2, 18].map((y, idx) => {
                const x = 14 + Math.sin((y + 40) / 25) * 6;
                return (
                  <g key={idx} transform={`translate(${x.toFixed(1)}, ${y})`}>
                    {/* Kelopak Hijau Bawah */}
                    <path d="M-6 4 Q0 8 6 4 Q0 0 -6 4 Z" fill="#15803d" stroke="#14532d" strokeWidth="0.8" />
                    {/* Bunga Kapas Putih Merekah */}
                    <circle cx="-3" cy="-1" r="4" fill="url(#kapasFlower)" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="0.8" />
                    <circle cx="3" cy="-1" r="4" fill="url(#kapasFlower)" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="0.8" />
                    <circle cx="0" cy="-4" r="4.5" fill="url(#kapasFlower)" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="0.8" />
                  </g>
                );
              })}

              {/* Ikatan Pita Merah Putih di Pangkal Bawah */}
              <g transform="translate(0, 36)">
                <ellipse cx="0" cy="0" rx="7" ry="4" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
                <path d="M-6 2 L-10 10 L-4 8 L0 10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
                <path d="M6 2 L10 10 L4 8 L0 10" fill="#ef4444" stroke="#b91c1c" strokeWidth="0.8" />
              </g>
            </g>
          </g>

          {/* Kotak Pertanyaan & Informasi Sila di Kanan */}
          <g transform="translate(305, 50)">
            <rect x="0" y="0" width="140" height="72" rx="10" fill={isPrint ? '#eee' : '#fefce8'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
            <text x="70" y="22" textAnchor="middle" fill="#854d0e" fontSize="10" fontWeight="bold">Simbol: Padi dan Kapas</text>
            <rect x="15" y="32" width="110" height="26" rx="6" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="70" y="50" textAnchor="middle" fill={textDark} fontSize="12" fontWeight="bold">Sila ke- [ ? ]</text>
          </g>

          {/* Keterangan Edukasi di Kiri Bawah */}
          <g transform="translate(15, 60)">
            <rect x="0" y="0" width="145" height="85" rx="8" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#ccc' : '#e2e8f0'} strokeWidth="1" />
            <text x="10" y="18" fill="#0f172a" fontSize="10" fontWeight="bold">Makna Simbol:</text>
            <text x="10" y="34" fill="#ca8a04" fontSize="9" fontWeight="bold">🌾 Padi: Pangan / Makanan</text>
            <text x="10" y="48" fill="#15803d" fontSize="9" fontWeight="bold">☁️ Kapas: Sandang / Pakaian</text>
            <text x="10" y="64" fill={textMuted} fontSize="8.5">• Kebutuhan dasar seluruh rakyat</text>
            <text x="10" y="76" fill={textMuted} fontSize="8.5">• Simbol Keadilan Sosial</text>
          </g>
        </svg>
      );

    case 'k4-pkn-2': // Bagan Pemerintahan Desa & BPD
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Struktur Pemerintahan Desa</text>

          {/* Bagan Organisasi Tingkat Desa */}
          <g transform="translate(70, 38)">
            {/* Kotak Puncak: Pemimpin Tertinggi Desa [ ? ] */}
            <g transform="translate(100, 0)">
              <rect x="0" y="0" width="120" height="34" rx="6" fill={isPrint ? '#eee' : '#fef08a'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="2" strokeDasharray="3 2" />
              <text x="60" y="15" textAnchor="middle" fill={textDark} fontSize="9" fontWeight="bold">Pemimpin Desa:</text>
              <text x="60" y="27" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="11" fontWeight="bold">[ ? ]</text>
            </g>

            {/* Garis Koordinasi Horisontal ke BPD */}
            <line x1="100" y1="17" x2="30" y2="17" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" strokeDasharray="3 2" />
            <g transform="translate(-40, 2)">
              <rect x="0" y="0" width="70" height="30" rx="5" fill={isPrint ? '#fff' : '#f1f5f9'} stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="1" />
              <text x="35" y="19" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">BPD</text>
            </g>

            {/* Garis Vertikal ke Bawah */}
            <line x1="160" y1="34" x2="160" y2="55" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />

            {/* Sekretaris Desa */}
            <g transform="translate(105, 55)">
              <rect x="0" y="0" width="110" height="26" rx="5" fill={isPrint ? '#fff' : '#eff6ff'} stroke={isPrint ? '#000' : '#93c5fd'} strokeWidth="1" />
              <text x="55" y="17" textAnchor="middle" fill={textDark} fontSize="10">Sekretaris Desa</text>
            </g>

            {/* Perangkat Desa / Kepala Dusun */}
            <line x1="160" y1="81" x2="160" y2="92" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
            <line x1="80" y1="92" x2="240" y2="92" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
            <line x1="80" y1="92" x2="80" y2="100" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
            <line x1="240" y1="92" x2="240" y2="100" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />

            <g transform="translate(35, 100)">
              <rect x="0" y="0" width="90" height="18" rx="3" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1" />
              <text x="45" y="13" textAnchor="middle" fill={textMuted} fontSize="9">Kepala Seksi</text>
            </g>
            <g transform="translate(195, 100)">
              <rect x="0" y="0" width="90" height="18" rx="3" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1" />
              <text x="45" y="13" textAnchor="middle" fill={textMuted} fontSize="9">Kepala Dusun</text>
            </g>
          </g>
        </svg>
      );

    case 'k4-coding-1': // 3 Simbol Flowchart: Terminal, Proses, dan Decision (Belah Ketupat ?)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#e0e7ff'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#3730a3'} fontSize="11" fontWeight="bold">Simbol Diagram Alir</text>

          {/* Tiga Bentuk Simbol Baku Flowchart */}
          <g transform="translate(30, 42)">
            {/* Simbol 1: Oval (Terminal) */}
            <g transform="translate(0, 0)">
              <rect x="0" y="0" width="115" height="98" rx="10" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
              <rect x="18" y="22" width="79" height="34" rx="17" fill={isPrint ? '#eee' : '#38bdf8'} stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="1.5" />
              <text x="57" y="44" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Mulai / Selesai</text>
              <text x="57" y="82" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">(1) Terminal</text>
            </g>

            {/* Simbol 2: Persegi Panjang (Proses) */}
            <g transform="translate(135, 0)">
              <rect x="0" y="0" width="115" height="98" rx="10" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
              <rect x="18" y="22" width="79" height="34" rx="4" fill={isPrint ? '#eee' : '#3b82f6'} stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="1.5" />
              <text x="57" y="44" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Langkah Kerja</text>
              <text x="57" y="82" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">(2) Proses</text>
            </g>

            {/* Simbol 3: Belah Ketupat (Diamond) Diberi Tanda [ ? ] */}
            <g transform="translate(270, 0)">
              <rect x="0" y="0" width="125" height="98" rx="10" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="2" strokeDasharray="3 2" />
              <polygon points="62,15 105,39 62,63 19,39" fill={isPrint ? '#fff' : '#fde047'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" />
              <text x="62" y="44" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="14" fontWeight="bold">?</text>
              <text x="62" y="82" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">(3) [ ? ]</text>
            </g>
          </g>
        </svg>
      );

    case 'k4-coding-2': // Antarmuka Scratch: Balok Kode, Skrip, Panggung (Stage ?)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Antarmuka Visual Scratch</text>

          {/* Tata Letak Layar Scratch */}
          <g transform="translate(45, 38)">
            {/* Bagian Kiri: Balok Kode */}
            <rect x="0" y="0" width="90" height="105" rx="6" fill={isPrint ? '#fff' : '#f1f5f9'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
            <text x="45" y="20" textAnchor="middle" fill={textDark} fontSize="9" fontWeight="bold">Koleksi Balok</text>
            <rect x="10" y="30" width="70" height="16" rx="4" fill={isPrint ? '#ccc' : '#3b82f6'} />
            <rect x="10" y="52" width="70" height="16" rx="4" fill={isPrint ? '#ccc' : '#f59e0b'} />
            <rect x="10" y="74" width="70" height="16" rx="4" fill={isPrint ? '#ccc' : '#10b981'} />

            {/* Bagian Tengah: Script Area */}
            <rect x="100" y="0" width="135" height="105" rx="6" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
            <text x="167" y="20" textAnchor="middle" fill={textDark} fontSize="9" fontWeight="bold">Script Area</text>
            <path d="M115 35 L190 35 L190 55 L130 55 L115 55 Z" fill={isPrint ? '#eee' : '#fbbf24'} stroke={isPrint ? '#000' : '#d97706'} strokeWidth="1" />
            <rect x="125" y="60" width="75" height="20" rx="3" fill={isPrint ? '#eee' : '#60a5fa'} stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="1" />

            {/* Bagian Kanan: Area Panggung Sprite [ ? ] */}
            <rect x="245" y="0" width="125" height="105" rx="6" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="2" strokeDasharray="3 2" />
            <text x="307" y="20" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="10" fontWeight="bold">Area: [ ? ]</text>
            {/* Kucing Sprite Scratch */}
            <circle cx="307" cy="55" r="16" fill={isPrint ? '#ccc' : '#f97316'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1.5" />
            <polygon points="295,43 298,34 304,43" fill={isPrint ? '#000' : '#ea580c'} />
            <polygon points="310,43 316,34 319,43" fill={isPrint ? '#000' : '#ea580c'} />
            <circle cx="302" cy="53" r="2" fill="#fff" />
            <circle cx="312" cy="53" r="2" fill="#fff" />
            <text x="307" y="90" textAnchor="middle" fill={textMuted} fontSize="9">Aksi Karakter Sprite</text>
          </g>
        </svg>
      );

    case 'k4-inggris-1': // Analog Clock Showing 03.15 (Quarter Past Three)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="135" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="82" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Telling The Time</text>

          {/* Jam Dinding Menunjukkan 03.15 */}
          <g transform="translate(160, 20)">
            <circle cx="60" cy="60" r="55" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="3" />
            <text x="60" y="22" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">12</text>
            <text x="103" y="64" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">3</text>
            <text x="60" y="107" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">6</text>
            <text x="17" y="64" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">9</text>

            {/* Jarum Pendek Sedikit Lewat Angka 3 */}
            <line x1="60" y1="60" x2="88" y2="67" stroke={isPrint ? '#000' : '#dc2626'} strokeWidth="4" strokeLinecap="round" />

            {/* Jarum Panjang Tepat di Angka 3 (15 Menit) */}
            <line x1="60" y1="60" x2="98" y2="60" stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="3" strokeLinecap="round" />

            <circle cx="60" cy="60" r="4.5" fill={isPrint ? '#000' : '#0f172a'} />
          </g>

          <rect x="315" y="55" width="130" height="42" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
          <text x="380" y="73" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">What time is it?</text>
          <text x="380" y="89" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="11" fontWeight="bold">It is [ ? ]</text>
        </svg>
      );

    case 'k4-inggris-2': // Comparison: Giraffe & Elephant
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="150" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="90" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Comparative Adjective</text>

          {/* Jerapah Tinggi di Kiri, Gajah Besar di Kanan */}
          <g transform="translate(100, 20)">
            <line x1="-30" y1="115" x2="260" y2="115" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="2" />

            {/* Jerapah (Leher Panjang Tinggi Menjulang) */}
            <g transform="translate(30, 0)">
              {/* Kaki panjang */}
              <line x1="25" y1="75" x2="25" y2="115" stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="3" />
              <line x1="45" y1="75" x2="45" y2="115" stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="3" />
              {/* Badan */}
              <ellipse cx="35" cy="72" rx="22" ry="14" fill={isPrint ? '#eee' : '#fde047'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" />
              {/* Leher tegak sangat tinggi */}
              <line x1="25" y1="70" x2="20" y2="20" stroke={isPrint ? '#000' : '#fde047'} strokeWidth="7" strokeLinecap="round" />
              {/* Kepala jerapah */}
              <circle cx="20" cy="18" r="8" fill={isPrint ? '#eee' : '#fde047'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" />
              <text x="35" y="130" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Giraffe</text>
            </g>

            {/* Gajah (Badan Besar & Berbobot) */}
            <g transform="translate(150, 40)">
              <ellipse cx="40" cy="40" rx="35" ry="25" fill={isPrint ? '#cbd5e1' : '#94a3b8'} stroke={isPrint ? '#000' : '#475569'} strokeWidth="2" />
              <rect x="18" y="50" width="12" height="25" fill={isPrint ? '#cbd5e1' : '#94a3b8'} stroke={isPrint ? '#000' : '#475569'} strokeWidth="1.5" />
              <rect x="52" y="50" width="12" height="25" fill={isPrint ? '#cbd5e1' : '#94a3b8'} stroke={isPrint ? '#000' : '#475569'} strokeWidth="1.5" />
              <circle cx="10" cy="30" r="18" fill={isPrint ? '#cbd5e1' : '#94a3b8'} stroke={isPrint ? '#000' : '#475569'} strokeWidth="1.5" />
              <path d="M-2 35 Q-8 50 -2 55" fill="none" stroke={isPrint ? '#000' : '#475569'} strokeWidth="2.5" />
              <text x="40" y="90" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Elephant</text>
            </g>
          </g>

          <rect x="330" y="55" width="120" height="42" rx="8" fill={isPrint ? '#eee' : '#f0fdf4'} stroke={isPrint ? '#000' : '#86efac'} strokeWidth="1.5" />
          <text x="390" y="73" textAnchor="middle" fill={textDark} fontSize="10">The Giraffe is:</text>
          <text x="390" y="89" textAnchor="middle" fill={isPrint ? '#000' : '#15803d'} fontSize="11" fontWeight="bold">[ ? ] than Elephant</text>
        </svg>
      );

    case 'k4-sbdp-1': // Kerajinan Anyaman Bambu (Anyaman Sasak / Tunggal)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="160" height="22" rx="6" fill={isPrint ? '#eee' : '#fefce8'} />
          <text x="95" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#854d0e'} fontSize="11" fontWeight="bold">Karya Seni Anyaman Bambu</text>

          {/* Pola Anyaman Bersilang Silang Teratur di Tengah */}
          <g transform="translate(140, 20)">
            <rect x="0" y="0" width="170" height="120" rx="6" fill={isPrint ? '#fff' : '#fef3c7'} stroke={isPrint ? '#000' : '#b45309'} strokeWidth="2" />
            
            {/* Garis-Garis Anyaman Pakan dan Lungsin (1 Atas 1 Bawah) */}
            {[0, 1, 2, 3, 4].map(r => (
              [0, 1, 2, 3, 4, 5, 6].map(c => (
                <rect key={`${r}-${c}`} x={c * 24 + 4} y={r * 22 + 5} width="22" height="20" rx="2" 
                      fill={isPrint ? ((r + c) % 2 === 0 ? '#fff' : '#ccc') : ((r + c) % 2 === 0 ? '#fde047' : '#ca8a04')} 
                      stroke={isPrint ? '#000' : '#92400e'} strokeWidth="1" />
              ))
            ))}
          </g>

          <rect x="325" y="55" width="125" height="38" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
          <text x="387" y="72" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Pola Silang Tunggal</text>
          <text x="387" y="86" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="10" fontWeight="bold">Nama Teknik: [ ? ]</text>
        </svg>
      );

    case 'k4-sbdp-2': // Gambar Perspektif Rel Kereta 1 Titik Hilang
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Prinsip Seni Rupa Perspektif</text>

          {/* Rel Kereta Mengarah ke 1 Titik Hilang di Garis Horizon */}
          <g transform="translate(130, 20)">
            <rect x="0" y="0" width="200" height="120" rx="6" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
            
            {/* Garis Horizon di Kejauhan */}
            <line x1="0" y1="45" x2="200" y2="45" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="1.5" strokeDasharray="3 2" />

            {/* Titik Hilang Pusat (Vanishing Point) */}
            <circle cx="100" cy="45" r="4" fill={isPrint ? '#000' : '#ef4444'} />

            {/* Dua Rel Kereta Menuju Titik Hilang */}
            <line x1="100" y1="45" x2="25" y2="120" stroke={isPrint ? '#000' : '#334155'} strokeWidth="3" />
            <line x1="100" y1="45" x2="175" y2="120" stroke={isPrint ? '#000' : '#334155'} strokeWidth="3" />

            {/* Bantalan Rel Semakin Dekat Semakin Renggang & Lebar */}
            {[
              { y: 52, x1: 94, x2: 106, w: 1.5 },
              { y: 62, x1: 85, x2: 115, w: 2 },
              { y: 76, x1: 72, x2: 128, w: 2.5 },
              { y: 95, x1: 52, x2: 148, w: 3 },
              { y: 115, x1: 30, x2: 170, w: 3.5 },
            ].map((tie, i) => (
              <line key={i} x1={tie.x1} y1={tie.y} x2={tie.x2} y2={tie.y} stroke={isPrint ? '#000' : '#78350f'} strokeWidth={tie.w} />
            ))}

            {/* Tiang Listrik di Sisi Rel Semakin Kecil Menuju Titik */}
            <line x1="185" y1="30" x2="185" y2="120" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2.5" />
            <line x1="145" y1="38" x2="145" y2="85" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" />
            <line x1="120" y1="42" x2="120" y2="65" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
          </g>

          <rect x="340" y="55" width="110" height="42" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
          <text x="395" y="73" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Kesan Ruang 3D</text>
          <text x="395" y="89" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="11" fontWeight="bold">Teknik: [ ? ]</text>
        </svg>
      );

    case 'k4-pjok-1': // Chest Pass Basket
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="150" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="90" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Operan Bola Basket</text>

          {/* Dua Pemain Basket: Operan Lurus Mendatar Setinggi Dada */}
          <g transform="translate(100, 20)">
            <line x1="-20" y1="115" x2="260" y2="115" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="2" />

            {/* Pemain 1 (Pengoper Bola) */}
            <g transform="translate(20, 15)">
              <circle cx="15" cy="15" r="10" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1.5" />
              <line x1="15" y1="25" x2="15" y2="60" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="4" />
              <line x1="15" y1="60" x2="5" y2="100" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              <line x1="15" y1="60" x2="25" y2="100" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              {/* Lengan Mendorong Lurus ke Depan Dada */}
              <line x1="15" y1="40" x2="42" y2="40" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="3.5" strokeLinecap="round" />
            </g>

            {/* Garis Lintasan Bola Lurus Mendatar Setinggi Dada */}
            <line x1="70" y1="55" x2="165" y2="55" stroke={isPrint ? '#000' : '#ef4444'} strokeWidth="2.5" strokeDasharray="5 3" />
            <polygon points="165,55 155,50 155,60" fill={isPrint ? '#000' : '#ef4444'} />

            {/* Bola Basket Oranye Berputar */}
            <circle cx="115" cy="55" r="14" fill={isPrint ? '#ccc' : '#f97316'} stroke={isPrint ? '#000' : '#c2410c'} strokeWidth="2" />
            <line x1="101" y1="55" x2="129" y2="55" stroke={isPrint ? '#000' : '#7c2d12'} strokeWidth="1.5" />
            <path d="M115 41 Q123 55 115 69" fill="none" stroke={isPrint ? '#000' : '#7c2d12'} strokeWidth="1.5" />

            {/* Pemain 2 (Penerima Bola) */}
            <g transform="translate(180, 15)">
              <circle cx="15" cy="15" r="10" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1.5" />
              <line x1="15" y1="25" x2="15" y2="60" stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="4" />
              <line x1="15" y1="60" x2="5" y2="100" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              <line x1="15" y1="60" x2="25" y2="100" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              {/* Lengan Terbuka Siap Menerima Setinggi Dada */}
              <line x1="15" y1="40" x2="-8" y2="40" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="3" strokeLinecap="round" />
            </g>
          </g>

          <rect x="315" y="55" width="130" height="38" rx="8" fill={isPrint ? '#eee' : '#fff7ed'} stroke={isPrint ? '#000' : '#fdba74'} strokeWidth="1.5" />
          <text x="380" y="72" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Operan Setinggi Dada</text>
          <text x="380" y="86" textAnchor="middle" fill={isPrint ? '#000' : '#c2410c'} fontSize="10" fontWeight="bold">Nama Lemparan: [ ? ]</text>
        </svg>
      );

    case 'k4-pjok-2': // Servis Bawah Bola Voli
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="160" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="95" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Teknik Servis Bola Voli</text>

          {/* Atlet Melakukan Servis Bawah Melewati Net */}
          <g transform="translate(100, 20)">
            <line x1="-30" y1="115" x2="260" y2="115" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="2" />

            {/* Tiang & Net Voli di Kanan */}
            <line x1="200" y1="20" x2="200" y2="115" stroke={isPrint ? '#000' : '#334155'} strokeWidth="4" />
            <rect x="195" y="25" width="10" height="40" fill={isPrint ? '#ccc' : '#ffffff'} stroke={isPrint ? '#000' : '#475569'} strokeWidth="1.5" />

            {/* Pemain Memukul Bola dari Bawah Pinggang */}
            <g transform="translate(30, 20)">
              <circle cx="20" cy="18" r="10" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1.5" />
              <line x1="20" y1="28" x2="16" y2="65" stroke={isPrint ? '#000' : '#dc2626'} strokeWidth="4" />
              <line x1="16" y1="65" x2="6" y2="95" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              <line x1="16" y1="65" x2="30" y2="95" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              
              {/* Tangan Kiri Melambungkan Bola Rendah */}
              <line x1="18" y1="42" x2="38" y2="48" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="3" />
              
              {/* Tangan Kanan Mengepal Mengayun dari Bawah ke Depan Atas */}
              <path d="M14 42 L0 68 L28 62" fill="none" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="3.5" strokeLinecap="round" />
            </g>

            {/* Bola Voli & Garis Lintasan Melambung ke Net */}
            <circle cx="85" cy="58" r="12" fill={isPrint ? '#fff' : '#fde047'} stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="2" />
            <path d="M85 52 Q140 10 195 40" fill="none" stroke={isPrint ? '#000' : '#16a34a'} strokeWidth="2" strokeDasharray="4 2" />
            <polygon points="195,40 185,34 188,44" fill={isPrint ? '#000' : '#16a34a'} />
          </g>

          <rect x="315" y="55" width="130" height="38" rx="8" fill={isPrint ? '#eee' : '#eff6ff'} stroke={isPrint ? '#000' : '#bfdbfe'} strokeWidth="1.5" />
          <text x="380" y="72" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Ayunan dari Bawah</text>
          <text x="380" y="86" textAnchor="middle" fill={isPrint ? '#000' : '#1d4ed8'} fontSize="10" fontWeight="bold">Jenis Servis: [ ? ]</text>
        </svg>
      );

    case 'k4-daerah-1': // Aksara Sunda Baku (Ngalagena)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#fefce8'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#854d0e'} fontSize="11" fontWeight="bold">Aksara Sunda Baku</text>

          {/* 5 Aksara Konsonan Baku Sunda */}
          <g transform="translate(35, 42)">
            {[
              { char: 'ᮊ', latin: 'Ka' },
              { char: 'ᮌ', latin: 'Ga' },
              { char: 'ᮍ', latin: 'Nga' },
              { char: 'ᮎ', latin: 'Ca' },
              { char: 'ᮏ', latin: 'Ja' },
            ].map((item, i) => (
              <g key={i} transform={`translate(${i * 78}, 0)`}>
                <rect x="0" y="0" width="70" height="96" rx="10" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
                <text x="35" y="48" textAnchor="middle" fill={isPrint ? '#000' : '#0f172a'} fontSize="28" fontWeight="bold">{item.char}</text>
                <rect x="15" y="68" width="40" height="18" rx="4" fill={isPrint ? '#eee' : '#fef9c3'} />
                <text x="35" y="81" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">{item.latin}</text>
              </g>
            ))}
          </g>
        </svg>
      );

    case 'k4-daerah-2': // Sandhangan Swara Aksara Jawa (Wulu, Suku, Taling)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#fefce8'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#854d0e'} fontSize="11" fontWeight="bold">Sandhangan Swara Jawa</text>

          {/* Tiga Sandhangan Swara */}
          <g transform="translate(45, 42)">
            {/* 1. Wulu (i) */}
            <g transform="translate(0, 0)">
              <rect x="0" y="0" width="110" height="96" rx="10" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
              <circle cx="55" cy="30" r="10" fill="none" stroke={isPrint ? '#000' : '#b45309'} strokeWidth="2.5" />
              <text x="55" y="60" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Wulu</text>
              <text x="55" y="82" textAnchor="middle" fill={textMuted} fontSize="10">Swara "i"</text>
            </g>

            {/* 2. Suku (u) Diberi Tanda Fokus */}
            <g transform="translate(130, 0)">
              <rect x="0" y="0" width="110" height="96" rx="10" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="2" />
              {/* Simbol Suku di Bawah Aksara */}
              <path d="M45 25 L45 42 Q45 48 55 48 L65 48" fill="none" stroke={isPrint ? '#000' : '#d97706'} strokeWidth="3" strokeLinecap="round" />
              <text x="55" y="66" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="12" fontWeight="bold">Suku</text>
              <text x="55" y="84" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Swara: [ ? ]</text>
            </g>

            {/* 3. Taling (e) */}
            <g transform="translate(260, 0)">
              <rect x="0" y="0" width="110" height="96" rx="10" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
              <path d="M48 42 Q45 22 55 25 Q62 28 58 42" fill="none" stroke={isPrint ? '#000' : '#b45309'} strokeWidth="2.5" strokeLinecap="round" />
              <text x="55" y="60" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Taling</text>
              <text x="55" y="82" textAnchor="middle" fill={textMuted} fontSize="10">Swara "é"</text>
            </g>
          </g>
        </svg>
      );

    default:
      return null;
  }
};
