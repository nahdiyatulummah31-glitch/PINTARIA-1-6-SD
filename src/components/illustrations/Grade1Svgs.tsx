import React from 'react';

export const renderGrade1Svg = (key: string, isPrint = false): React.ReactElement | null => {
  const strokeColor = isPrint ? '#000000' : '#cbd5e1';
  const bgCard = isPrint ? '#ffffff' : '#f8fafc';
  const textDark = isPrint ? '#000000' : '#1e293b';
  const textMuted = isPrint ? '#333333' : '#64748b';

  // Normalize key for sunda and jawa aliases
  let normKey = key;
  if (normKey === 'k1-sunda-1' || normKey === 'k1-sunda-2') normKey = 'k1-daerah-1';
  if (normKey === 'k1-jawa-1' || normKey === 'k1-jawa-2') normKey = 'k1-daerah-2';

  switch (normKey) {
    case 'k1-mtk-1': // 5 apel merah + 3 apel hijau (Penjumlahan)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          {/* Header Stimulus */}
          <rect x="15" y="10" width="130" height="22" rx="6" fill={isPrint ? '#eee' : '#e0e7ff'} />
          <text x="80" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#3730a3'} fontSize="11" fontWeight="bold">Pengamatan Hitung</text>

          {/* Keranjang A (5 Apel Merah) */}
          <g transform="translate(30, 36)">
            <rect x="0" y="0" width="165" height="105" rx="12" fill={isPrint ? '#fff' : '#fef2f2'} stroke={isPrint ? '#000' : '#fca5a5'} strokeWidth="1.5" />
            <rect x="35" y="6" width="95" height="20" rx="5" fill={isPrint ? '#eee' : '#fee2e2'} />
            <text x="82" y="20" textAnchor="middle" fill={isPrint ? '#000' : '#991b1b'} fontSize="11" fontWeight="bold">Keranjang A</text>
            {/* 5 Apel Merah: 3 di baris bawah, 2 di baris atas */}
            <g transform="translate(18, 30)">
              {/* Apel 1 */}
              <circle cx="20" cy="55" r="14" fill={isPrint ? '#e2e8f0' : '#ef4444'} stroke={isPrint ? '#000' : '#b91c1c'} strokeWidth="1.5" />
              <path d="M20 41 Q22 36 26 38" stroke={isPrint ? '#000' : '#15803d'} strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* Apel 2 */}
              <circle cx="65" cy="55" r="14" fill={isPrint ? '#e2e8f0' : '#ef4444'} stroke={isPrint ? '#000' : '#b91c1c'} strokeWidth="1.5" />
              <path d="M65 41 Q67 36 71 38" stroke={isPrint ? '#000' : '#15803d'} strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* Apel 3 */}
              <circle cx="110" cy="55" r="14" fill={isPrint ? '#e2e8f0' : '#ef4444'} stroke={isPrint ? '#000' : '#b91c1c'} strokeWidth="1.5" />
              <path d="M110 41 Q112 36 116 38" stroke={isPrint ? '#000' : '#15803d'} strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* Apel 4 */}
              <circle cx="42" cy="24" r="14" fill={isPrint ? '#e2e8f0' : '#ef4444'} stroke={isPrint ? '#000' : '#b91c1c'} strokeWidth="1.5" />
              <path d="M42 10 Q44 5 48 7" stroke={isPrint ? '#000' : '#15803d'} strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* Apel 5 */}
              <circle cx="88" cy="24" r="14" fill={isPrint ? '#e2e8f0' : '#ef4444'} stroke={isPrint ? '#000' : '#b91c1c'} strokeWidth="1.5" />
              <path d="M88 10 Q90 5 94 7" stroke={isPrint ? '#000' : '#15803d'} strokeWidth="2" fill="none" strokeLinecap="round" />
            </g>
          </g>

          {/* Operator Plus */}
          <g transform="translate(210, 72)">
            <circle cx="15" cy="15" r="16" fill={isPrint ? '#fff' : '#fef3c7'} stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="2" />
            <text x="15" y="22" textAnchor="middle" fill={isPrint ? '#000' : '#d97706'} fontSize="22" fontWeight="bold">+</text>
          </g>

          {/* Keranjang B (3 Apel Hijau) */}
          <g transform="translate(255, 36)">
            <rect x="0" y="0" width="165" height="105" rx="12" fill={isPrint ? '#fff' : '#f0fdf4'} stroke={isPrint ? '#000' : '#86efac'} strokeWidth="1.5" />
            <rect x="35" y="6" width="95" height="20" rx="5" fill={isPrint ? '#eee' : '#dcfce7'} />
            <text x="82" y="20" textAnchor="middle" fill={isPrint ? '#000' : '#15803d'} fontSize="11" fontWeight="bold">Keranjang B</text>
            {/* 3 Apel Hijau berjejer rapi */}
            <g transform="translate(20, 35)">
              {/* Apel Hijau 1 */}
              <circle cx="22" cy="38" r="14" fill={isPrint ? '#e2e8f0' : '#22c55e'} stroke={isPrint ? '#000' : '#15803d'} strokeWidth="1.5" />
              <path d="M22 24 Q24 19 28 21" stroke={isPrint ? '#000' : '#166534'} strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* Apel Hijau 2 */}
              <circle cx="63" cy="38" r="14" fill={isPrint ? '#e2e8f0' : '#22c55e'} stroke={isPrint ? '#000' : '#15803d'} strokeWidth="1.5" />
              <path d="M63 24 Q65 19 69 21" stroke={isPrint ? '#000' : '#166534'} strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* Apel Hijau 3 */}
              <circle cx="104" cy="38" r="14" fill={isPrint ? '#e2e8f0' : '#22c55e'} stroke={isPrint ? '#000' : '#15803d'} strokeWidth="1.5" />
              <path d="M104 24 Q106 19 110 21" stroke={isPrint ? '#000' : '#166534'} strokeWidth="2" fill="none" strokeLinecap="round" />
            </g>
          </g>
        </svg>
      );

    case 'k1-mtk-2': // Tiga Bentuk Bangun Datar: Lingkaran (A), Segitiga Kuning (B), Persegi (C)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="140" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="85" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Ragam Bentuk Geometri</text>

          {/* Bentuk (A) - Lingkaran Biru */}
          <g transform="translate(35, 38)">
            <rect x="0" y="0" width="115" height="105" rx="10" fill={isPrint ? '#fff' : '#f0f9ff'} stroke={isPrint ? '#000' : '#bae6fd'} strokeWidth="1.5" />
            <circle cx="57" cy="48" r="32" fill={isPrint ? '#e2e8f0' : '#38bdf8'} stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="2" />
            <rect x="22" y="82" width="70" height="18" rx="4" fill={isPrint ? '#eee' : '#e0f2fe'} />
            <text x="57" y="95" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Bentuk (A)</text>
          </g>

          {/* Bentuk (B) - Segitiga Kuning */}
          <g transform="translate(172, 38)">
            <rect x="0" y="0" width="115" height="105" rx="10" fill={isPrint ? '#fff' : '#fefce8'} stroke={isPrint ? '#000' : '#fef08a'} strokeWidth="1.5" />
            <polygon points="57,18 95,78 19,78" fill={isPrint ? '#e2e8f0' : '#facc15'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="2.5" />
            {/* Sudut Titik */}
            <circle cx="57" cy="18" r="3.5" fill={isPrint ? '#000' : '#ef4444'} />
            <circle cx="95" cy="78" r="3.5" fill={isPrint ? '#000' : '#ef4444'} />
            <circle cx="19" cy="78" r="3.5" fill={isPrint ? '#000' : '#ef4444'} />
            <rect x="22" y="82" width="70" height="18" rx="4" fill={isPrint ? '#eee' : '#fef9c3'} />
            <text x="57" y="95" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Bentuk (B)</text>
          </g>

          {/* Bentuk (C) - Persegi Merah */}
          <g transform="translate(310, 38)">
            <rect x="0" y="0" width="115" height="105" rx="10" fill={isPrint ? '#fff' : '#fff1f2'} stroke={isPrint ? '#000' : '#fecdd3'} strokeWidth="1.5" />
            <rect x="28" y="20" width="58" height="58" rx="6" fill={isPrint ? '#e2e8f0' : '#f87171'} stroke={isPrint ? '#000' : '#dc2626'} strokeWidth="2" />
            <rect x="22" y="82" width="70" height="18" rx="4" fill={isPrint ? '#eee' : '#ffe4e6'} />
            <text x="57" y="95" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Bentuk (C)</text>
          </g>
        </svg>
      );

    case 'k1-indo-1': // Ilustrasi Ayam Berkokok (Tanpa tulisan "AYAM")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="130" height="22" rx="6" fill={isPrint ? '#eee' : '#fef3c7'} />
          <text x="80" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#92400e'} fontSize="11" fontWeight="bold">Kartu Pengamatan</text>

          {/* Ilustrasi Ayam Berdiri di Pagar Berlatar Matahari Terbit */}
          <g transform="translate(140, 20)">
            {/* Matahari pagi */}
            <circle cx="150" cy="35" r="22" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#f97316'} strokeWidth="1.5" />
            
            {/* Pagar rumput */}
            <rect x="-60" y="105" width="300" height="10" rx="3" fill={isPrint ? '#ccc' : '#86efac'} />
            <line x1="-30" y1="105" x2="-30" y2="125" stroke={isPrint ? '#000' : '#bbf7d0'} strokeWidth="6" />
            <line x1="40" y1="105" x2="40" y2="125" stroke={isPrint ? '#000' : '#bbf7d0'} strokeWidth="6" />
            <line x1="110" y1="105" x2="110" y2="125" stroke={isPrint ? '#000' : '#bbf7d0'} strokeWidth="6" />
            <line x1="180" y1="105" x2="180" y2="125" stroke={isPrint ? '#000' : '#bbf7d0'} strokeWidth="6" />

            {/* Badan Ayam Jago */}
            <g transform="translate(60, 10)">
              {/* Ekor melengkung indah */}
              <path d="M-15 45 C-45 10 -40 -15 -10 15 C-40 25 -30 55 -5 60 Z" fill={isPrint ? '#64748b' : '#047857'} stroke={isPrint ? '#000' : '#065f46'} strokeWidth="1.5" />
              <path d="M-5 40 C-30 0 -25 -25 0 5" fill="none" stroke={isPrint ? '#000' : '#10b981'} strokeWidth="2.5" />
              
              {/* Badan */}
              <ellipse cx="20" cy="55" rx="30" ry="24" fill={isPrint ? '#e2e8f0' : '#d97706'} stroke={isPrint ? '#000' : '#92400e'} strokeWidth="2" />
              
              {/* Sayap */}
              <path d="M5 45 Q25 65 35 45 Q20 35 5 45 Z" fill={isPrint ? '#cbd5e1' : '#f59e0b'} stroke={isPrint ? '#000' : '#b45309'} strokeWidth="1.5" />
              
              {/* Leher & Kepala */}
              <path d="M35 50 Q45 25 40 15 Q30 20 28 40 Z" fill={isPrint ? '#e2e8f0' : '#ea580c'} stroke={isPrint ? '#000' : '#c2410c'} strokeWidth="1.5" />
              <circle cx="44" cy="18" r="12" fill={isPrint ? '#e2e8f0' : '#f59e0b'} stroke={isPrint ? '#000' : '#b45309'} strokeWidth="1.5" />
              
              {/* Jengger merah atas */}
              <circle cx="38" cy="8" r="4.5" fill={isPrint ? '#64748b' : '#ef4444'} />
              <circle cx="44" cy="5" r="5" fill={isPrint ? '#64748b' : '#ef4444'} />
              <circle cx="50" cy="8" r="4.5" fill={isPrint ? '#64748b' : '#ef4444'} />
              
              {/* Gelambir merah bawah */}
              <ellipse cx="48" cy="27" rx="3" ry="5" fill={isPrint ? '#64748b' : '#ef4444'} />
              
              {/* Paruh */}
              <polygon points="54,16 64,20 54,24" fill={isPrint ? '#94a3b8' : '#f97316'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1" />
              
              {/* Mata */}
              <circle cx="48" cy="15" r="2.5" fill="#fff" stroke="#000" strokeWidth="1" />
              <circle cx="49" cy="15" r="1.2" fill="#000" />
              
              {/* Kaki menjejak pagar */}
              <line x1="12" y1="78" x2="8" y2="105" stroke={isPrint ? '#000' : '#d97706'} strokeWidth="3" />
              <line x1="8" y1="105" x2="0" y2="105" stroke={isPrint ? '#000' : '#d97706'} strokeWidth="2.5" />
              <line x1="28" y1="78" x2="26" y2="105" stroke={isPrint ? '#000' : '#d97706'} strokeWidth="3" />
              <line x1="26" y1="105" x2="18" y2="105" stroke={isPrint ? '#000' : '#d97706'} strokeWidth="2.5" />
            </g>
          </g>

          {/* Badge Petunjuk Netral */}
          <rect x="305" y="15" width="135" height="28" rx="8" fill={isPrint ? '#eee' : '#fff7ed'} stroke={isPrint ? '#000' : '#fdba74'} strokeWidth="1.5" />
          <text x="372" y="33" textAnchor="middle" fill={isPrint ? '#000' : '#9a3412'} fontSize="11" fontWeight="bold">Nama Hewan: [ ? ]</text>
        </svg>
      );

    case 'k1-indo-2': // Anak membaca buku di meja belajar
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="140" height="22" rx="6" fill={isPrint ? '#eee' : '#e0e7ff'} />
          <text x="85" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#3730a3'} fontSize="11" fontWeight="bold">Kegiatan Belajar Siswa</text>

          <g transform="translate(130, 20)">
            {/* Meja Belajar */}
            <rect x="10" y="85" width="180" height="14" rx="4" fill={isPrint ? '#ccc' : '#ca8a04'} stroke={isPrint ? '#000' : '#854d0e'} strokeWidth="1.5" />
            <line x1="30" y1="99" x2="30" y2="128" stroke={isPrint ? '#000' : '#854d0e'} strokeWidth="4" />
            <line x1="170" y1="99" x2="170" y2="128" stroke={isPrint ? '#000' : '#854d0e'} strokeWidth="4" />
            
            {/* Lampu Meja Belajar */}
            <path d="M165 85 L165 45 Q165 35 150 40" fill="none" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2.5" />
            <polygon points="140,35 160,35 165,50 135,50" fill={isPrint ? '#eee' : '#f59e0b'} stroke={isPrint ? '#000' : '#d97706'} strokeWidth="1.5" />
            <polygon points="135,50 165,50 185,85 115,85" fill={isPrint ? 'none' : '#fef08a'} opacity="0.3" />

            {/* Anak Duduk Membaca Buku */}
            <g transform="translate(70, 10)">
              {/* Kepala anak */}
              <circle cx="30" cy="22" r="16" fill={isPrint ? '#e2e8f0' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1.5" />
              {/* Rambut rapi */}
              <path d="M14 20 Q30 5 46 20 Q44 10 30 8 Q16 10 14 20 Z" fill={isPrint ? '#000' : '#1e293b'} />
              {/* Mata tersenyum */}
              <circle cx="25" cy="22" r="1.8" fill="#000" />
              <circle cx="35" cy="22" r="1.8" fill="#000" />
              <path d="M26 28 Q30 32 34 28" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
              
              {/* Badan baju sekolah */}
              <path d="M12 40 L48 40 L52 75 L8 75 Z" fill={isPrint ? '#eee' : '#38bdf8'} stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="1.5" />
              {/* Kerah putih */}
              <polygon points="24,40 30,50 36,40" fill="#ffffff" stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="1" />

              {/* Buku Terbuka di Meja */}
              <g transform="translate(10, 62)">
                <polygon points="0,15 20,5 20,20 0,28" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
                <polygon points="40,15 20,5 20,20 40,28" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
                <line x1="5" y1="16" x2="16" y2="11" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="1.5" />
                <line x1="5" y1="21" x2="16" y2="16" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="1.5" />
                <line x1="24" y1="11" x2="35" y2="16" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="1.5" />
                <line x1="24" y1="16" x2="35" y2="21" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="1.5" />
              </g>
            </g>
          </g>
        </svg>
      );

    case 'k1-ipas-1': // Organ Panca Indra: [A] Mata, [B] Telinga, [C] Hidung, [D] Lidah
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="135" height="22" rx="6" fill={isPrint ? '#eee' : '#e0e7ff'} />
          <text x="82" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Organ Panca Indra</text>

          {/* [A] Mata */}
          <g transform="translate(30, 42)">
            <rect x="0" y="0" width="85" height="98" rx="10" fill={isPrint ? '#fff' : '#f0f9ff'} stroke={isPrint ? '#000' : '#bae6fd'} strokeWidth="1.5" />
            <circle cx="42" cy="40" r="24" fill={isPrint ? '#f1f5f9' : '#e0f2fe'} />
            {/* Ikon Mata */}
            <path d="M26 40 Q42 22 58 40 Q42 58 26 40 Z" fill="#ffffff" stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="2" />
            <circle cx="42" cy="40" r="7" fill={isPrint ? '#000' : '#0369a1'} />
            <circle cx="44" cy="38" r="2.5" fill="#ffffff" />
            <rect x="15" y="72" width="55" height="18" rx="4" fill={isPrint ? '#eee' : '#bae6fd'} />
            <text x="42" y="85" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">(A) Mata</text>
          </g>

          {/* [B] Telinga */}
          <g transform="translate(135, 42)">
            <rect x="0" y="0" width="85" height="98" rx="10" fill={isPrint ? '#fff' : '#fefce8'} stroke={isPrint ? '#000' : '#fde047'} strokeWidth="1.5" />
            <circle cx="42" cy="40" r="24" fill={isPrint ? '#f1f5f9' : '#fef9c3'} />
            {/* Ikon Telinga */}
            <path d="M34 26 C48 24 54 36 50 48 C46 58 38 56 36 62" fill="none" stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="3" strokeLinecap="round" />
            <path d="M38 34 C44 34 46 42 42 48" fill="none" stroke={isPrint ? '#000' : '#eab308'} strokeWidth="2" strokeLinecap="round" />
            <rect x="12" y="72" width="61" height="18" rx="4" fill={isPrint ? '#eee' : '#fef08a'} />
            <text x="42" y="85" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">(B) Telinga</text>
          </g>

          {/* [C] Hidung */}
          <g transform="translate(240, 42)">
            <rect x="0" y="0" width="85" height="98" rx="10" fill={isPrint ? '#fff' : '#fdf2f8'} stroke={isPrint ? '#000' : '#fbcfe8'} strokeWidth="1.5" />
            <circle cx="42" cy="40" r="24" fill={isPrint ? '#f1f5f9' : '#fce7f3'} />
            {/* Ikon Hidung */}
            <path d="M40 25 L40 50 Q48 55 42 58 Q34 58 36 50" fill="none" stroke={isPrint ? '#000' : '#db2777'} strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="36" cy="53" r="2" fill={isPrint ? '#000' : '#be185d'} />
            <circle cx="46" cy="53" r="2" fill={isPrint ? '#000' : '#be185d'} />
            <rect x="13" y="72" width="59" height="18" rx="4" fill={isPrint ? '#eee' : '#fbcfe8'} />
            <text x="42" y="85" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">(C) Hidung</text>
          </g>

          {/* [D] Lidah */}
          <g transform="translate(345, 42)">
            <rect x="0" y="0" width="85" height="98" rx="10" fill={isPrint ? '#fff' : '#f0fdf4'} stroke={isPrint ? '#000' : '#bbf7d0'} strokeWidth="1.5" />
            <circle cx="42" cy="40" r="24" fill={isPrint ? '#f1f5f9' : '#dcfce7'} />
            {/* Ikon Mulut & Lidah */}
            <path d="M28 38 Q42 32 56 38 Q42 58 28 38 Z" fill="#ffffff" stroke={isPrint ? '#000' : '#16a34a'} strokeWidth="2" />
            <path d="M36 42 Q42 62 48 42" fill={isPrint ? '#cbd5e1' : '#f87171'} stroke={isPrint ? '#000' : '#dc2626'} strokeWidth="1.5" />
            <rect x="15" y="72" width="55" height="18" rx="4" fill={isPrint ? '#eee' : '#bbf7d0'} />
            <text x="42" y="85" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">(D) Lidah</text>
          </g>
        </svg>
      );

    case 'k1-ipas-2': // Struktur Tumbuhan: [1] Akar, [2] Batang, [3] Daun, [4] Bunga
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="145" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="87" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Bagian-Bagian Tumbuhan</text>

          {/* Tanaman di Tengah */}
          <g transform="translate(180, 15)">
            {/* Garis Tanah */}
            <line x1="-70" y1="105" x2="160" y2="105" stroke={isPrint ? '#000' : '#a16207'} strokeWidth="3" strokeDasharray="6 3" />
            <text x="130" y="125" fill={isPrint ? '#000' : '#854d0e'} fontSize="10" fontWeight="bold">Tanah</text>

            {/* Bunga di Puncak [4] */}
            <circle cx="45" cy="22" r="14" fill={isPrint ? '#eee' : '#f43f5e'} stroke={isPrint ? '#000' : '#e11d48'} strokeWidth="1.5" />
            <circle cx="45" cy="22" r="6" fill={isPrint ? '#fff' : '#fef08a'} />
            {/* Batang Utama [2] */}
            <line x1="45" y1="36" x2="45" y2="105" stroke={isPrint ? '#000' : '#15803d'} strokeWidth="5" strokeLinecap="round" />
            
            {/* Daun Kiri & Kanan [3] */}
            <path d="M45 65 C20 50 15 75 45 75" fill={isPrint ? '#e2e8f0' : '#22c55e'} stroke={isPrint ? '#000' : '#15803d'} strokeWidth="1.5" />
            <path d="M45 55 C70 40 75 65 45 65" fill={isPrint ? '#e2e8f0' : '#22c55e'} stroke={isPrint ? '#000' : '#15803d'} strokeWidth="1.5" />

            {/* Akar Bawah Tanah [1] */}
            <path d="M45 105 Q35 120 25 135" stroke={isPrint ? '#000' : '#a16207'} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M45 105 Q45 125 45 140" stroke={isPrint ? '#000' : '#a16207'} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M45 105 Q55 120 70 135" stroke={isPrint ? '#000' : '#a16207'} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M35 118 Q20 125 15 132" stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="2" fill="none" />
            <path d="M55 118 Q70 125 80 130" stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="2" fill="none" />

            {/* Pointer [4] Bunga */}
            <line x1="45" y1="22" x2="95" y2="22" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="110" cy="22" r="10" fill={isPrint ? '#eee' : '#ffe4e6'} stroke={isPrint ? '#000' : '#e11d48'} strokeWidth="1.5" />
            <text x="110" y="26" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">4</text>

            {/* Pointer [3] Daun */}
            <line x1="20" y1="65" x2="-20" y2="65" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="-35" cy="65" r="10" fill={isPrint ? '#eee' : '#dcfce7'} stroke={isPrint ? '#000' : '#15803d'} strokeWidth="1.5" />
            <text x="-35" y="69" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">3</text>

            {/* Pointer [2] Batang */}
            <line x1="45" y1="85" x2="95" y2="85" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="110" cy="85" r="10" fill={isPrint ? '#eee' : '#dcfce7'} stroke={isPrint ? '#000' : '#15803d'} strokeWidth="1.5" />
            <text x="110" y="89" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">2</text>

            {/* Pointer [1] Akar */}
            <line x1="25" y1="125" x2="-20" y2="125" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="-35" cy="125" r="10" fill={isPrint ? '#eee' : '#fef3c7'} stroke={isPrint ? '#000' : '#b45309'} strokeWidth="1.5" />
            <text x="-35" y="129" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">1</text>
          </g>
        </svg>
      );

    case 'k1-pkn-1': // Simbol Bintang Emas Sila Pertama Pancasila (Heraldik Autentik)
      return (
        <svg viewBox="0 0 460 170" className="w-full h-auto max-h-52 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
            <linearGradient id="goldStarDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#854d0e" />
            </linearGradient>
            <filter id="starGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <rect width="460" height="170" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />

          {/* Header Label Lambang Negara */}
          <rect x="15" y="10" width="220" height="24" rx="6" fill={isPrint ? '#eee' : '#fef3c7'} />
          <text x="125" y="26" textAnchor="middle" fill={isPrint ? '#000' : '#92400e'} fontSize="11" fontWeight="bold">LAMBANG PERISAI GARUDA PANCASILA</text>

          {/* Perisai Hitam Sila Pertama di Tengah */}
          <g transform="translate(175, 24)">
            {/* Bayangan perisai */}
            <path d="M55 4 C95 4 105 14 105 60 C105 96 55 120 55 120 C55 120 5 96 5 60 C5 14 15 4 55 4 Z"
                  fill="#000000" opacity="0.15" transform="translate(2, 3)" />
            {/* Badan Perisai Hitam */}
            <path d="M55 4 C95 4 105 14 105 60 C105 96 55 120 55 120 C55 120 5 96 5 60 C5 14 15 4 55 4 Z"
                  fill={isPrint ? '#334155' : '#0f172a'}
                  stroke={isPrint ? '#000000' : '#eab308'}
                  strokeWidth="3.5" />
            <path d="M55 8 C90 8 99 17 99 58 C99 90 55 112 55 112 C55 112 11 90 11 58 C11 17 20 8 55 8 Z"
                  fill="none"
                  stroke={isPrint ? '#fff' : '#ca8a04'}
                  strokeWidth="1" opacity="0.6" />

            {/* Berkas Cahaya Bintang */}
            {!isPrint && (
              <g opacity="0.4">
                <line x1="55" y1="20" x2="55" y2="95" stroke="#fef08a" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="18" y1="58" x2="92" y2="58" stroke="#fef08a" strokeWidth="1" strokeDasharray="3 3" />
              </g>
            )}

            {/* Bintang Emas Bersudut Lima 3D Faceted */}
            <g transform="translate(55, 58)">
              {/* Sisi Terang (Light Facet) */}
              <polygon points="0,-36 0,0 11,-11" fill="url(#goldStarGrad)" />
              <polygon points="34,-11 0,0 13,7" fill="url(#goldStarGrad)" />
              <polygon points="21,28 0,0 0,14" fill="url(#goldStarGrad)" />
              <polygon points="-21,28 0,0 -13,7" fill="url(#goldStarGrad)" />
              <polygon points="-34,-11 0,0 -11,-11" fill="url(#goldStarGrad)" />

              {/* Sisi Gelap (Shaded Facet) */}
              <polygon points="0,-36 0,0 -11,-11" fill="url(#goldStarDark)" />
              <polygon points="34,-11 0,0 11,-11" fill="url(#goldStarDark)" />
              <polygon points="21,28 0,0 13,7" fill="url(#goldStarDark)" />
              <polygon points="-21,28 0,0 0,14" fill="url(#goldStarDark)" />
              <polygon points="-34,-11 0,0 -13,7" fill="url(#goldStarDark)" />

              {/* Titik Kilau Inti */}
              <circle cx="0" cy="0" r="3" fill="#ffffff" />
            </g>
          </g>

          {/* Kotak Pertanyaan & Informasi Sila di Kanan */}
          <g transform="translate(305, 50)">
            <rect x="0" y="0" width="140" height="72" rx="10" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
            <text x="70" y="22" textAnchor="middle" fill="#78350f" fontSize="10" fontWeight="bold">Simbol: Bintang Emas</text>
            <rect x="15" y="32" width="110" height="26" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="70" y="50" textAnchor="middle" fill={textDark} fontSize="12" fontWeight="bold">Sila ke- [ ? ]</text>
          </g>

          {/* Keterangan Edukasi di Kiri Bawah */}
          <g transform="translate(15, 60)">
            <rect x="0" y="0" width="145" height="60" rx="8" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#ccc' : '#e2e8f0'} strokeWidth="1" />
            <text x="10" y="20" fill="#0f172a" fontSize="10" fontWeight="bold">Ciri Simbol:</text>
            <text x="10" y="36" fill={textMuted} fontSize="9">• Bintang sudut 5 keemasan</text>
            <text x="10" y="50" fill={textMuted} fontSize="9">• Berlatar warna hitam perisai</text>
          </g>
        </svg>
      );

    case 'k1-pkn-2': // Simbol Rantai Emas Sila Kedua Pancasila (Heraldik Autentik & Rantai Melingkar Bersambung)
      return (
        <svg viewBox="0 0 460 170" className="w-full h-auto max-h-52 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="shieldRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="60%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
            <linearGradient id="goldChainLink" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
            <linearGradient id="goldChainDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#854d0e" />
            </linearGradient>
          </defs>

          <rect width="460" height="170" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />

          {/* Header Label Lambang Negara */}
          <rect x="15" y="10" width="220" height="24" rx="6" fill={isPrint ? '#eee' : '#fee2e2'} />
          <text x="125" y="26" textAnchor="middle" fill={isPrint ? '#000' : '#991b1b'} fontSize="11" fontWeight="bold">LAMBANG PERISAI GARUDA PANCASILA</text>

          {/* Perisai Merah Sudut Kanan Bawah di Tengah */}
          <g transform="translate(175, 24)">
            {/* Bayangan perisai */}
            <path d="M55 4 C95 4 105 14 105 60 C105 96 55 120 55 120 C55 120 5 96 5 60 C5 14 15 4 55 4 Z"
                  fill="#000000" opacity="0.15" transform="translate(2, 3)" />
            {/* Badan Perisai Merah */}
            <path d="M55 4 C95 4 105 14 105 60 C105 96 55 120 55 120 C55 120 5 96 5 60 C5 14 15 4 55 4 Z"
                  fill={isPrint ? '#ffffff' : 'url(#shieldRedGrad)'}
                  stroke={isPrint ? '#000000' : '#f59e0b'}
                  strokeWidth="3.5" />
            <path d="M55 8 C90 8 99 17 99 58 C99 90 55 112 55 112 C55 112 11 90 11 58 C11 17 20 8 55 8 Z"
                  fill="none"
                  stroke={isPrint ? '#000' : '#fef08a'}
                  strokeWidth="1" opacity="0.6" />

            {/* Rantai Emas Melingkar Sempurna Bersambung (16 Mata Rantai: Selang-Seling Persegi & Bulat) */}
            <g transform="translate(55, 60)">
              {/* Lingkaran penuntun bayangan */}
              <circle cx="0" cy="0" r="32" fill="none" stroke="#7f1d1d" strokeWidth="6" opacity="0.4" />

              {/* 16 Mata Rantai melingkar teratur:
                  Sudut 0°, 22.5°, 45°, 67.5°, 90°, 112.5°, 135°, 157.5°,
                  180°, 202.5°, 225°, 247.5°, 270°, 292.5°, 315°, 337.5°
                  Genap (0, 45, 90, 135, ...): Mata Rantai Persegi (Laki-laki)
                  Ganjil (22.5, 67.5, 112.5, ...): Mata Rantai Bulat (Perempuan)
              */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((idx) => {
                const angle = (idx * 360) / 16;
                const rad = (angle * Math.PI) / 180;
                const r = 32;
                const x = r * Math.cos(rad);
                const y = r * Math.sin(rad);
                const isSquare = idx % 2 === 0;

                return (
                  <g key={idx} transform={`translate(${x.toFixed(1)}, ${y.toFixed(1)}) rotate(${angle})`}>
                    {isSquare ? (
                      // Mata Rantai Persegi Emas (Empat Persegi)
                      <g>
                        <rect x="-7.5" y="-7.5" width="15" height="15" rx="2"
                              fill="url(#goldChainLink)"
                              stroke={isPrint ? '#000000' : '#854d0e'}
                              strokeWidth="1.6" />
                        <rect x="-3.5" y="-3.5" width="7" height="7" rx="1"
                              fill={isPrint ? '#ffffff' : '#b91c1c'}
                              stroke={isPrint ? '#000000' : '#78350f'}
                              strokeWidth="0.8" />
                      </g>
                    ) : (
                      // Mata Rantai Bulat Emas (Gelang Lingkaran)
                      <g>
                        <circle cx="0" cy="0" r="7.5"
                                fill="url(#goldChainLink)"
                                stroke={isPrint ? '#000000' : '#854d0e'}
                                strokeWidth="1.6" />
                        <circle cx="0" cy="0" r="3.5"
                                fill={isPrint ? '#ffffff' : '#b91c1c'}
                                stroke={isPrint ? '#000000' : '#78350f'}
                                strokeWidth="0.8" />
                      </g>
                    )}
                  </g>
                );
              })}

              {/* Titik kilau di pusat lingkaran rantai */}
              <circle cx="0" cy="0" r="4" fill="#fef08a" opacity="0.8" />
            </g>
          </g>

          {/* Kotak Pertanyaan & Informasi Sila di Kanan */}
          <g transform="translate(305, 50)">
            <rect x="0" y="0" width="140" height="72" rx="10" fill={isPrint ? '#eee' : '#fff1f2'} stroke={isPrint ? '#000' : '#fecdd3'} strokeWidth="1.5" />
            <text x="70" y="22" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">Simbol: Rantai Emas</text>
            <rect x="15" y="32" width="110" height="26" rx="6" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" />
            <text x="70" y="50" textAnchor="middle" fill={textDark} fontSize="12" fontWeight="bold">Sila ke- [ ? ]</text>
          </g>

          {/* Keterangan Edukasi di Kiri Bawah */}
          <g transform="translate(15, 60)">
            <rect x="0" y="0" width="145" height="85" rx="8" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#ccc' : '#e2e8f0'} strokeWidth="1" />
            <text x="10" y="18" fill="#0f172a" fontSize="10" fontWeight="bold">Makna Lambang:</text>
            <text x="10" y="34" fill="#b45309" fontSize="9" fontWeight="bold">▪ Persegi: Laki-laki</text>
            <text x="10" y="48" fill="#b45309" fontSize="9" fontWeight="bold">⚪ Bulat: Perempuan</text>
            <text x="10" y="64" fill={textMuted} fontSize="8.5">• Mata rantai saling terkait</text>
            <text x="10" y="76" fill={textMuted} fontSize="8.5">• Melambangkan persatuan erat</text>
          </g>
        </svg>
      );

    case 'k1-coding-1': // Labirin Grid 3x3 Robot ke Bintang
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="155" height="22" rx="6" fill={isPrint ? '#eee' : '#e0e7ff'} />
          <text x="92" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#3730a3'} fontSize="11" fontWeight="bold">Grid Algoritma Robot</text>

          {/* Grid 3x3 di Kiri */}
          <g transform="translate(45, 36)">
            {/* 9 Kotak Grid */}
            {[0, 1, 2].map(r => (
              [0, 1, 2].map(c => (
                <rect key={`${r}-${c}`} x={c * 36} y={r * 36} width="34" height="34" rx="6" 
                      fill={isPrint ? '#fff' : ((r === 2 && c === 0) ? '#dbeafe' : (r === 0 && c === 2) ? '#fef3c7' : '#ffffff')} 
                      stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
              ))
            ))}

            {/* Robot di Posisi Awal (Baris 3, Kolom 1 -> r=2, c=0) */}
            <g transform="translate(17, 89)">
              <rect x="-10" y="-10" width="20" height="18" rx="4" fill={isPrint ? '#64748b' : '#3b82f6'} stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="1.5" />
              <circle cx="-4" cy="-3" r="2.5" fill="#fff" />
              <circle cx="4" cy="-3" r="2.5" fill="#fff" />
              <line x1="0" y1="-10" x2="0" y2="-14" stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="2" />
              <circle cx="0" cy="-14" r="2" fill={isPrint ? '#000' : '#ef4444'} />
            </g>

            {/* Bintang Emas di Target (Baris 1, Kolom 3 -> r=0, c=2) */}
            <g transform="translate(89, 17)">
              <polygon points="0,-11 3,-3 11,-3 5,2 7,10 0,6 -7,10 -5,2 -11,-3 -3,-3" 
                       fill={isPrint ? '#000' : '#f59e0b'} stroke={isPrint ? '#000' : '#b45309'} strokeWidth="1" />
            </g>
          </g>

          {/* Petunjuk Arah & Legenda */}
          <g transform="translate(180, 42)">
            <rect x="0" y="0" width="250" height="96" rx="10" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#000' : '#e2e8f0'} strokeWidth="1.5" />
            <text x="15" y="24" fill={textDark} fontSize="11" fontWeight="bold">Posisi Awal: Robot di kiri bawah</text>
            <text x="15" y="44" fill={textDark} fontSize="11" fontWeight="bold">Tujuan: Bintang di kanan atas</text>
            <text x="15" y="68" fill={textMuted} fontSize="10">Pilihan langkah:</text>
            <text x="15" y="84" fill={isPrint ? '#000' : '#2563eb'} fontSize="11" fontWeight="bold">⬆️ Maju ke atas  |  ➡️ Belok ke kanan</text>
          </g>
        </svg>
      );

    case 'k1-coding-2': // Barisan Pola Berulang: Merah, Biru, Hijau, Merah, Biru, [ ? ]
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Pola Barisan Berulang</text>

          {/* Barisan 6 Kotak Pola */}
          <g transform="translate(25, 48)">
            {/* 1. Kotak Merah */}
            <g transform="translate(0, 0)">
              <rect x="0" y="0" width="55" height="65" rx="8" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
              <rect x="13" y="15" width="28" height="28" rx="4" fill={isPrint ? '#64748b' : '#ef4444'} stroke={isPrint ? '#000' : '#b91c1c'} strokeWidth="1.5" />
              <text x="27" y="56" textAnchor="middle" fill={textMuted} fontSize="10">1</text>
            </g>

            {/* 2. Lingkaran Biru */}
            <g transform="translate(68, 0)">
              <rect x="0" y="0" width="55" height="65" rx="8" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
              <circle cx="27" cy="29" r="14" fill={isPrint ? '#94a3b8' : '#3b82f6'} stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="1.5" />
              <text x="27" y="56" textAnchor="middle" fill={textMuted} fontSize="10">2</text>
            </g>

            {/* 3. Segitiga Hijau */}
            <g transform="translate(136, 0)">
              <rect x="0" y="0" width="55" height="65" rx="8" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
              <polygon points="27,15 42,43 12,43" fill={isPrint ? '#cbd5e1' : '#22c55e'} stroke={isPrint ? '#000' : '#15803d'} strokeWidth="1.5" />
              <text x="27" y="56" textAnchor="middle" fill={textMuted} fontSize="10">3</text>
            </g>

            {/* 4. Kotak Merah */}
            <g transform="translate(204, 0)">
              <rect x="0" y="0" width="55" height="65" rx="8" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
              <rect x="13" y="15" width="28" height="28" rx="4" fill={isPrint ? '#64748b' : '#ef4444'} stroke={isPrint ? '#000' : '#b91c1c'} strokeWidth="1.5" />
              <text x="27" y="56" textAnchor="middle" fill={textMuted} fontSize="10">4</text>
            </g>

            {/* 5. Lingkaran Biru */}
            <g transform="translate(272, 0)">
              <rect x="0" y="0" width="55" height="65" rx="8" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
              <circle cx="27" cy="29" r="14" fill={isPrint ? '#94a3b8' : '#3b82f6'} stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="1.5" />
              <text x="27" y="56" textAnchor="middle" fill={textMuted} fontSize="10">5</text>
            </g>

            {/* 6. Tanda Tanya [ ? ] */}
            <g transform="translate(340, 0)">
              <rect x="0" y="0" width="65" height="65" rx="8" fill={isPrint ? '#eee' : '#fef3c7'} stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="2" strokeDasharray="4 2" />
              <circle cx="32" cy="30" r="18" fill={isPrint ? '#fff' : '#fde68a'} />
              <text x="32" y="38" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="22" fontWeight="bold">?</text>
              <text x="32" y="56" textAnchor="middle" fill={textMuted} fontSize="10">6</text>
            </g>
          </g>

          <text x="230" y="138" textAnchor="middle" fill={textMuted} fontSize="11">Bentuk apakah yang tepat untuk mengisi urutan nomor 6?</text>
        </svg>
      );

    case 'k1-inggris-1': // Elephant (Tanpa teks "ELEPHANT")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="135" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="82" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Animal Picture Card</text>

          {/* Gambar Gajah Kartun Lucu di Padang Rumput */}
          <g transform="translate(130, 20)">
            {/* Rumput */}
            <line x1="-50" y1="110" x2="250" y2="110" stroke={isPrint ? '#000' : '#86efac'} strokeWidth="3" />
            
            {/* Badan Gajah */}
            <ellipse cx="90" cy="65" rx="45" ry="35" fill={isPrint ? '#cbd5e1' : '#94a3b8'} stroke={isPrint ? '#000' : '#475569'} strokeWidth="2" />
            {/* Kaki-kaki besar */}
            <rect x="55" y="75" width="16" height="35" rx="5" fill={isPrint ? '#cbd5e1' : '#94a3b8'} stroke={isPrint ? '#000' : '#475569'} strokeWidth="2" />
            <rect x="78" y="75" width="16" height="35" rx="5" fill={isPrint ? '#94a3b8' : '#64748b'} stroke={isPrint ? '#000' : '#334155'} strokeWidth="2" />
            <rect x="105" y="75" width="16" height="35" rx="5" fill={isPrint ? '#cbd5e1' : '#94a3b8'} stroke={isPrint ? '#000' : '#475569'} strokeWidth="2" />
            <rect x="122" y="75" width="16" height="35" rx="5" fill={isPrint ? '#94a3b8' : '#64748b'} stroke={isPrint ? '#000' : '#334155'} strokeWidth="2" />
            
            {/* Kepala Gajah */}
            <circle cx="45" cy="50" r="28" fill={isPrint ? '#cbd5e1' : '#94a3b8'} stroke={isPrint ? '#000' : '#475569'} strokeWidth="2" />
            
            {/* Belalai panjang menjulang */}
            <path d="M30 55 Q10 65 15 88 Q20 95 26 88 Q18 70 35 68" fill={isPrint ? '#cbd5e1' : '#94a3b8'} stroke={isPrint ? '#000' : '#475569'} strokeWidth="2" />
            
            {/* Gading Putih */}
            <path d="M32 68 Q22 75 28 80 Q34 75 36 68 Z" fill="#ffffff" stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1" />
            
            {/* Telinga Lebar */}
            <ellipse cx="60" cy="48" rx="20" ry="24" fill={isPrint ? '#e2e8f0' : '#cbd5e1'} stroke={isPrint ? '#000' : '#475569'} strokeWidth="2" />
            <ellipse cx="60" cy="48" rx="12" ry="16" fill={isPrint ? '#f1f5f9' : '#fbcfe8'} />
            
            {/* Mata */}
            <circle cx="38" cy="42" r="3" fill="#fff" stroke="#000" strokeWidth="1" />
            <circle cx="37" cy="42" r="1.5" fill="#000" />

            {/* Ekor */}
            <path d="M135 60 Q145 75 142 85" stroke={isPrint ? '#000' : '#475569'} strokeWidth="2" fill="none" />
          </g>

          <rect x="310" y="55" width="130" height="32" rx="8" fill={isPrint ? '#eee' : '#f8fafc'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
          <text x="375" y="75" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Name: [ ? ]</text>
        </svg>
      );

    case 'k1-inggris-2': // Tiga Balon: Merah (1), Biru (2), Kuning (3)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="145" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="87" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Three Colorful Balloons</text>

          {/* Tiga Balon Terbang Berjejer */}
          <g transform="translate(100, 25)">
            {/* Balon Kiri: Merah (1) */}
            <g transform="translate(0, 0)">
              <ellipse cx="30" cy="42" rx="24" ry="30" fill={isPrint ? '#64748b' : '#ef4444'} stroke={isPrint ? '#000' : '#b91c1c'} strokeWidth="2" />
              <ellipse cx="22" cy="30" rx="5" ry="9" fill="#ffffff" opacity="0.4" />
              <polygon points="30,72 26,78 34,78" fill={isPrint ? '#000' : '#b91c1c'} />
              <path d="M30 78 Q25 95 32 110" fill="none" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="1.5" />
              <text x="30" y="47" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">1</text>
            </g>

            {/* Balon Tengah: Biru (2) */}
            <g transform="translate(100, 0)">
              <ellipse cx="30" cy="38" rx="26" ry="32" fill={isPrint ? '#94a3b8' : '#3b82f6'} stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="2" />
              <ellipse cx="22" cy="26" rx="5" ry="10" fill="#ffffff" opacity="0.4" />
              <polygon points="30,70 26,76 34,76" fill={isPrint ? '#000' : '#1d4ed8'} />
              <path d="M30 76 Q35 92 30 110" fill="none" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="1.5" />
              <text x="30" y="44" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">2</text>
            </g>

            {/* Balon Kanan: Kuning (3) */}
            <g transform="translate(200, 0)">
              <ellipse cx="30" cy="42" rx="24" ry="30" fill={isPrint ? '#e2e8f0' : '#facc15'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="2" />
              <ellipse cx="22" cy="30" rx="5" ry="9" fill="#ffffff" opacity="0.6" />
              <polygon points="30,72 26,78 34,78" fill={isPrint ? '#000' : '#ca8a04'} />
              <path d="M30 78 Q22 95 28 110" fill="none" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="1.5" />
              <text x="30" y="47" textAnchor="middle" fill={isPrint ? '#000' : '#713f12'} fontSize="12" fontWeight="bold">3</text>
            </g>
          </g>

          <text x="230" y="145" textAnchor="middle" fill={textMuted} fontSize="11">Balloon 1: Left  |  Balloon 2: Middle  |  Balloon 3: Right</text>
        </svg>
      );

    case 'k1-sbdp-1': // Palet Tiga Warna Primer: Merah, Kuning, Biru
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="150" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="90" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Palet Warna Lukis</text>

          {/* Palet Kayu Lukis di Tengah */}
          <g transform="translate(130, 25)">
            {/* Papan palet kayu */}
            <path d="M40 10 C120 5 190 35 180 80 C175 105 140 115 100 110 C70 105 50 115 25 100 C5 85 5 20 40 10 Z" 
                  fill={isPrint ? '#ffffff' : '#fde68a'} 
                  stroke={isPrint ? '#000000' : '#d97706'} 
                  strokeWidth="2.5" />
            {/* Lubang jempol */}
            <ellipse cx="145" cy="80" rx="10" ry="14" fill={isPrint ? '#eee' : '#f8fafc'} stroke={isPrint ? '#000' : '#d97706'} strokeWidth="1.5" />

            {/* Bercak Warna 1: Merah */}
            <circle cx="50" cy="40" r="16" fill={isPrint ? '#64748b' : '#ef4444'} stroke={isPrint ? '#000' : '#b91c1c'} strokeWidth="1.5" />
            <text x="50" y="70" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Merah</text>

            {/* Bercak Warna 2: Kuning */}
            <circle cx="100" cy="35" r="16" fill={isPrint ? '#e2e8f0' : '#facc15'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" />
            <text x="100" y="65" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Kuning</text>

            {/* Bercak Warna 3: Biru */}
            <circle cx="145" cy="45" r="16" fill={isPrint ? '#94a3b8' : '#3b82f6'} stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="1.5" />
            <text x="145" y="72" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Biru</text>

            {/* Kuas Lukis Melintang */}
            <path d="M20 90 L160 20" stroke={isPrint ? '#000' : '#78350f'} strokeWidth="5" strokeLinecap="round" />
            <path d="M150 25 L165 18" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="6" strokeLinecap="round" />
          </g>

          <rect x="330" y="60" width="115" height="32" rx="8" fill={isPrint ? '#eee' : '#f0f9ff'} stroke={isPrint ? '#000' : '#bae6fd'} strokeWidth="1.5" />
          <text x="387" y="80" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Tiga Warna Primer</text>
        </svg>
      );

    case 'k1-sbdp-2': // Kolase Bunga dari Daun Kering
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="150" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="90" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Karya Seni Kerajinan</text>

          {/* Lembar Kanvas Seni Kolase */}
          <g transform="translate(155, 20)">
            <rect x="0" y="0" width="150" height="120" rx="8" fill={isPrint ? '#fff' : '#fefce8'} stroke={isPrint ? '#000' : '#eab308'} strokeWidth="1.5" />
            {/* Tangkai dari ranting kering */}
            <path d="M75 110 Q70 85 75 60" stroke={isPrint ? '#000' : '#78350f'} strokeWidth="4" strokeLinecap="round" />
            {/* Daun samping kering */}
            <path d="M73 85 Q50 78 55 90 Q65 92 73 85" fill={isPrint ? '#cbd5e1' : '#854d0e'} stroke={isPrint ? '#000' : '#78350f'} strokeWidth="1" />
            {/* Kelopak Bunga dari Daun-Daun Kering Cokelat & Kuning */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <ellipse key={i} cx="75" cy="50" rx="9" ry="20" 
                       fill={isPrint ? '#e2e8f0' : (i % 2 === 0 ? '#ca8a04' : '#d97706')} 
                       stroke={isPrint ? '#000' : '#92400e'} strokeWidth="1.5" 
                       transform={`rotate(${angle} 75 50)`} />
            ))}
            {/* Pusat bunga dari biji-bijian */}
            <circle cx="75" cy="50" r="10" fill={isPrint ? '#000' : '#451a03'} />
            <circle cx="72" cy="48" r="2" fill="#fff" opacity="0.6" />
          </g>

          <rect x="325" y="60" width="120" height="32" rx="8" fill={isPrint ? '#eee' : '#fef3c7'} stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="1.5" />
          <text x="385" y="80" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Karya Kolase Alam</text>
        </svg>
      );

    case 'k1-pjok-1': // Gerak Dasar Melompat dengan Dua Kaki
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="150" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="90" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Rangkaian Gerak Siswa</text>

          {/* Tiga Urutan Gerak: (1) Menekuk, (2) Melayang Naik, (3) Mendarat */}
          <g transform="translate(60, 25)">
            <line x1="0" y1="110" x2="340" y2="110" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="2" />

            {/* Tahap 1: Ancang-ancang menekuk lutut */}
            <g transform="translate(30, 25)">
              <circle cx="20" cy="18" r="10" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1.5" />
              <line x1="20" y1="28" x2="20" y2="55" stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="3" />
              <path d="M20 55 L10 70 L5 85" fill="none" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              <path d="M20 55 L25 70 L30 85" fill="none" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              <path d="M20 38 L5 50" fill="none" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="2.5" />
              <text x="20" y="100" textAnchor="middle" fill={textMuted} fontSize="10">1. Tolakan</text>
            </g>

            {/* Tahap 2: Melayang di udara */}
            <g transform="translate(150, 5)">
              <circle cx="20" cy="16" r="10" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1.5" />
              <line x1="20" y1="26" x2="20" y2="52" stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="3" />
              <path d="M20 52 L12 65 L10 75" fill="none" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              <path d="M20 52 L26 65 L28 75" fill="none" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              <path d="M20 34 L8 25" fill="none" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="2.5" />
              <path d="M20 34 L32 25" fill="none" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="2.5" />
              {/* Panah naik */}
              <path d="M20 90 L20 78 M16 82 L20 78 L24 82" stroke={isPrint ? '#000' : '#16a34a'} strokeWidth="2" strokeLinecap="round" />
              <text x="20" y="120" textAnchor="middle" fill={textMuted} fontSize="10">2. Di Udara</text>
            </g>

            {/* Tahap 3: Mendarat dengan dua kaki */}
            <g transform="translate(270, 25)">
              <circle cx="20" cy="18" r="10" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1.5" />
              <line x1="20" y1="28" x2="20" y2="55" stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="3" />
              <path d="M20 55 L12 68 L10 85" fill="none" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              <path d="M20 55 L26 68 L28 85" fill="none" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              <path d="M20 38 L32 48" fill="none" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="2.5" />
              <text x="20" y="100" textAnchor="middle" fill={textMuted} fontSize="10">3. Mendarat</text>
            </g>
          </g>
        </svg>
      );

    case 'k1-pjok-2': // Bola Sepak Corak Hitam Putih (Tanpa teks jawaban "Sepak bola")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Peralatan Cabang Olahraga</text>

          {/* Gambar Bola Sepak di Lapangan Rumput */}
          <g transform="translate(180, 25)">
            {/* Bayangan bola di tanah */}
            <ellipse cx="50" cy="105" rx="35" ry="8" fill={isPrint ? '#ccc' : '#e2e8f0'} />
            
            {/* Lingkaran Bola */}
            <circle cx="50" cy="55" r="46" fill="#ffffff" stroke={isPrint ? '#000' : '#334155'} strokeWidth="2.5" />
            
            {/* Corak Segilima Hitam di Tengah */}
            <polygon points="50,42 63,52 58,67 42,67 37,52" fill={isPrint ? '#000' : '#1e293b'} stroke={isPrint ? '#000' : '#0f172a'} strokeWidth="1.5" />
            
            {/* Garis-garis pola bola */}
            <line x1="50" y1="42" x2="50" y2="20" stroke={isPrint ? '#000' : '#334155'} strokeWidth="2" />
            <line x1="63" y1="52" x2="85" y2="45" stroke={isPrint ? '#000' : '#334155'} strokeWidth="2" />
            <line x1="58" y1="67" x2="75" y2="88" stroke={isPrint ? '#000' : '#334155'} strokeWidth="2" />
            <line x1="42" y1="67" x2="25" y2="88" stroke={isPrint ? '#000' : '#334155'} strokeWidth="2" />
            <line x1="37" y1="52" x2="15" y2="45" stroke={isPrint ? '#000' : '#334155'} strokeWidth="2" />

            {/* Segilima samping */}
            <polygon points="50,20 38,10 62,10" fill={isPrint ? '#000' : '#1e293b'} />
            <polygon points="85,45 95,58 94,40" fill={isPrint ? '#000' : '#1e293b'} />
            <polygon points="75,88 88,85 80,97" fill={isPrint ? '#000' : '#1e293b'} />
            <polygon points="25,88 20,97 12,85" fill={isPrint ? '#000' : '#1e293b'} />
            <polygon points="15,45 6,40 5,58" fill={isPrint ? '#000' : '#1e293b'} />
          </g>

          <rect x="315" y="60" width="130" height="32" rx="8" fill={isPrint ? '#eee' : '#f0fdf4'} stroke={isPrint ? '#000' : '#86efac'} strokeWidth="1.5" />
          <text x="380" y="80" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Cabang Olahraga: [ ? ]</text>
        </svg>
      );

    case 'k1-daerah-1': // Soca / Mripat (Mata) (Tanpa tulisan jawaban "Melihat")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="180" height="22" rx="6" fill={isPrint ? '#eee' : '#ccfbf1'} />
          <text x="105" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#0f766e'} fontSize="11" fontWeight="bold">Bagean Awak (Basa Sunda)</text>

          {/* Gambar Wajah Siswa dan Tanda Panah ke Mata */}
          <g transform="translate(130, 20)">
            {/* Kepala */}
            <circle cx="50" cy="60" r="42" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="2" />
            {/* Rambut */}
            <path d="M12 50 Q50 18 88 50 Q85 30 50 25 Q15 30 12 50 Z" fill={isPrint ? '#000' : '#1e293b'} />
            {/* Alis */}
            <path d="M30 45 Q40 42 48 45" stroke={isPrint ? '#000' : '#451a03'} strokeWidth="2.5" fill="none" />
            <path d="M56 45 Q64 42 74 45" stroke={isPrint ? '#000' : '#451a03'} strokeWidth="2.5" fill="none" />

            {/* Mata Kiri & Kanan */}
            <g id="mata-fokus">
              <ellipse cx="38" cy="54" rx="8" ry="6" fill="#ffffff" stroke={isPrint ? '#000' : '#451a03'} strokeWidth="1.5" />
              <circle cx="38" cy="54" r="3.5" fill={isPrint ? '#000' : '#0284c7'} />
              <ellipse cx="65" cy="54" rx="8" ry="6" fill="#ffffff" stroke={isPrint ? '#000' : '#451a03'} strokeWidth="1.5" />
              <circle cx="65" cy="54" r="3.5" fill={isPrint ? '#000' : '#0284c7'} />
            </g>

            {/* Hidung & Mulut */}
            <path d="M50 56 L48 68 L53 68" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1.5" fill="none" />
            <path d="M42 78 Q50 84 58 78" stroke={isPrint ? '#000' : '#b91c1c'} strokeWidth="2" fill="none" />

            {/* Tanda Panah Penunjuk ke Mata [ X ] */}
            <line x1="120" y1="54" x2="80" y2="54" stroke={isPrint ? '#000' : '#dc2626'} strokeWidth="3" />
            <polygon points="76,54 84,50 84,58" fill={isPrint ? '#000' : '#dc2626'} />
          </g>

          <rect x="295" y="48" width="150" height="42" rx="10" fill={isPrint ? '#eee' : '#fef2f2'} stroke={isPrint ? '#000' : '#fca5a5'} strokeWidth="1.5" />
          <text x="370" y="66" textAnchor="middle" fill={isPrint ? '#000' : '#991b1b'} fontSize="11" fontWeight="bold">Bagean Awak [ X ]</text>
          <text x="370" y="81" textAnchor="middle" fill={textDark} fontSize="10">Soca / Panon (Sunda)</text>
        </svg>
      );

    case 'k1-daerah-2': // Kyai Semar (Tanpa tulisan jawaban nama Semar)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#fef3c7'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#92400e'} fontSize="11" fontWeight="bold">Tokoh Wayang Punakawan</text>

          {/* Siluet Karakter Kyai Semar yang Sangat Khas */}
          <g transform="translate(150, 18)">
            {/* Badan Bulat Gemuk Khas Semar */}
            <ellipse cx="65" cy="80" rx="42" ry="36" fill={isPrint ? '#ffffff' : '#0f172a'} stroke={isPrint ? '#000' : '#334155'} strokeWidth="2.5" />
            
            {/* Kain Kampuh Poleng (Kotak-kotak Hitam Putih) */}
            <rect x="35" y="85" width="60" height="28" rx="6" fill={isPrint ? '#ccc' : '#e2e8f0'} stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
            <line x1="55" y1="85" x2="55" y2="113" stroke="#000" strokeWidth="1.5" />
            <line x1="75" y1="85" x2="75" y2="113" stroke="#000" strokeWidth="1.5" />
            <line x1="35" y1="99" x2="95" y2="99" stroke="#000" strokeWidth="1.5" />

            {/* Kepala Semar Menghadap Kanan */}
            <circle cx="70" cy="38" r="22" fill={isPrint ? '#ffffff' : '#0f172a'} stroke={isPrint ? '#000' : '#334155'} strokeWidth="2" />
            {/* Jambul Kuncung Putih Khas Semar di Dahi */}
            <path d="M85 24 Q95 12 88 8 Q82 12 80 20 Z" fill="#ffffff" stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />

            {/* Mata Sipit & Senyum Bijaksana */}
            <line x1="76" y1="36" x2="86" y2="36" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <path d="M78 46 Q86 52 90 44" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

            {/* Tangan menunjuk */}
            <path d="M95 65 Q115 62 120 55" fill="none" stroke={isPrint ? '#000' : '#0f172a'} strokeWidth="4" strokeLinecap="round" />
          </g>

          <rect x="300" y="55" width="145" height="38" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
          <text x="372" y="72" textAnchor="middle" fill={isPrint ? '#000' : '#92400e'} fontSize="11" fontWeight="bold">Sesepuh Punakawan</text>
          <text x="372" y="86" textAnchor="middle" fill={textDark} fontSize="10">Nama Tokoh: [ ? ]</text>
        </svg>
      );

    default:
      return null;
  }
};
