import React from 'react';

export const renderGrade2Svg = (key: string, isPrint = false): React.ReactElement | null => {
  const strokeColor = isPrint ? '#000000' : '#cbd5e1';
  const bgCard = isPrint ? '#ffffff' : '#f8fafc';
  const textDark = isPrint ? '#000000' : '#1e293b';
  const textMuted = isPrint ? '#333333' : '#64748b';

  let normKey = key;
  if (normKey === 'k2-sunda-1' || normKey === 'k2-sunda-2') normKey = 'k2-daerah-1';
  if (normKey === 'k2-jawa-1' || normKey === 'k2-jawa-2') normKey = 'k2-daerah-2';

  switch (normKey) {
    case 'k2-mtk-1': // Susunan Balok: 2 Ratusan, 3 Puluhan, 5 Satuan
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#e0e7ff'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#3730a3'} fontSize="11" fontWeight="bold">Nilai Tempat Bilangan</text>

          {/* 2 Ratusan (Kiri) */}
          <g transform="translate(30, 40)">
            <rect x="0" y="5" width="55" height="55" rx="4" fill={isPrint ? '#fff' : '#dbeafe'} stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="1.5" />
            <line x1="0" y1="23" x2="55" y2="23" stroke={isPrint ? '#000' : '#93c5fd'} strokeWidth="1" />
            <line x1="0" y1="41" x2="55" y2="41" stroke={isPrint ? '#000' : '#93c5fd'} strokeWidth="1" />
            <line x1="18" y1="5" x2="18" y2="60" stroke={isPrint ? '#000' : '#93c5fd'} strokeWidth="1" />
            <line x1="36" y1="5" x2="36" y2="60" stroke={isPrint ? '#000' : '#93c5fd'} strokeWidth="1" />

            <rect x="15" y="20" width="55" height="55" rx="4" fill={isPrint ? '#fff' : '#bfdbfe'} stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="1.5" />
            <line x1="15" y1="38" x2="70" y2="38" stroke={isPrint ? '#000' : '#60a5fa'} strokeWidth="1" />
            <line x1="15" y1="56" x2="70" y2="56" stroke={isPrint ? '#000' : '#60a5fa'} strokeWidth="1" />
            <line x1="33" y1="20" x2="33" y2="75" stroke={isPrint ? '#000' : '#60a5fa'} strokeWidth="1" />
            <line x1="51" y1="20" x2="51" y2="75" stroke={isPrint ? '#000' : '#60a5fa'} strokeWidth="1" />

            <text x="35" y="95" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">2 Ratusan</text>
          </g>

          <text x="125" y="85" textAnchor="middle" fill={textMuted} fontSize="18" fontWeight="bold">+</text>

          {/* 3 Puluhan (Tengah) */}
          <g transform="translate(150, 45)">
            {[0, 20, 40].map((off, i) => (
              <g key={i} transform={`translate(${off}, 0)`}>
                <rect x="0" y="0" width="12" height="60" rx="3" fill={isPrint ? '#fff' : '#dcfce7'} stroke={isPrint ? '#000' : '#16a34a'} strokeWidth="1.5" />
                <line x1="0" y1="15" x2="12" y2="15" stroke={isPrint ? '#000' : '#86efac'} />
                <line x1="0" y1="30" x2="12" y2="30" stroke={isPrint ? '#000' : '#86efac'} />
                <line x1="0" y1="45" x2="12" y2="45" stroke={isPrint ? '#000' : '#86efac'} />
              </g>
            ))}
            <text x="26" y="90" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">3 Puluhan</text>
          </g>

          <text x="235" y="85" textAnchor="middle" fill={textMuted} fontSize="18" fontWeight="bold">+</text>

          {/* 5 Satuan (Kanan) */}
          <g transform="translate(260, 50)">
            <g transform="translate(0, 0)">
              <rect x="0" y="10" width="14" height="14" rx="2" fill={isPrint ? '#fff' : '#fef08a'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" />
              <rect x="18" y="10" width="14" height="14" rx="2" fill={isPrint ? '#fff' : '#fef08a'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" />
              <rect x="36" y="10" width="14" height="14" rx="2" fill={isPrint ? '#fff' : '#fef08a'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" />
              <rect x="9" y="30" width="14" height="14" rx="2" fill={isPrint ? '#fff' : '#fef08a'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" />
              <rect x="27" y="30" width="14" height="14" rx="2" fill={isPrint ? '#fff' : '#fef08a'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" />
            </g>
            <text x="25" y="85" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">5 Satuan</text>
          </g>

          {/* Hasil Kotak Pertanyaan */}
          <g transform="translate(340, 55)">
            <rect x="0" y="0" width="100" height="55" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="2" strokeDasharray="4 2" />
            <text x="50" y="24" textAnchor="middle" fill={textMuted} fontSize="10">Lambang Bilangan:</text>
            <text x="50" y="44" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="20" fontWeight="bold">[ ? ]</text>
          </g>
        </svg>
      );

    case 'k2-mtk-2': // Jam Analog 07.30 (Tanpa teks "07.30")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="140" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="85" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Jam Dinding Analog</text>

          {/* Jam Analog di Tengah */}
          <g transform="translate(160, 20)">
            {/* Lingkaran Luar Jam */}
            <circle cx="60" cy="60" r="55" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="3" />
            <circle cx="60" cy="60" r="52" fill="none" stroke={isPrint ? '#000' : '#dbeafe'} strokeWidth="1" />

            {/* Angka-angka Jam 12, 3, 6, 9 dan lainnya */}
            <text x="60" y="20" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">12</text>
            <text x="103" y="64" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">3</text>
            <text x="60" y="107" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">6</text>
            <text x="17" y="64" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">9</text>
            <text x="82" y="27" textAnchor="middle" fill={textMuted} fontSize="9">1</text>
            <text x="98" y="44" textAnchor="middle" fill={textMuted} fontSize="9">2</text>
            <text x="98" y="84" textAnchor="middle" fill={textMuted} fontSize="9">4</text>
            <text x="82" y="100" textAnchor="middle" fill={textMuted} fontSize="9">5</text>
            <text x="38" y="100" textAnchor="middle" fill={textMuted} fontSize="9">7</text>
            <text x="22" y="84" textAnchor="middle" fill={textMuted} fontSize="9">8</text>
            <text x="22" y="44" textAnchor="middle" fill={textMuted} fontSize="9">10</text>
            <text x="38" y="27" textAnchor="middle" fill={textMuted} fontSize="9">11</text>

            {/* Jarum Pendek (Jam) di antara 7 dan 8 */}
            <line x1="60" y1="60" x2="35" y2="80" stroke={isPrint ? '#000' : '#dc2626'} strokeWidth="4" strokeLinecap="round" />

            {/* Jarum Panjang (Menit) tepat di angka 6 */}
            <line x1="60" y1="60" x2="60" y2="98" stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="3" strokeLinecap="round" />

            {/* Titik Pusat Poros */}
            <circle cx="60" cy="60" r="4.5" fill={isPrint ? '#000' : '#0f172a'} />
          </g>

          <rect x="315" y="55" width="125" height="42" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
          <text x="377" y="73" textAnchor="middle" fill={textMuted} fontSize="10">Waktu Jam:</text>
          <text x="377" y="90" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="14" fontWeight="bold">Pukul [ ? : ? ]</text>
        </svg>
      );

    case 'k2-indo-1': // Dua Tanda Baca: Tanda Tanya (?) dan Tanda Titik (.)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="145" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="87" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Tanda Baca Kalimat</text>

          {/* Kartu [A] Tanda Tanya */}
          <g transform="translate(100, 36)">
            <rect x="0" y="0" width="110" height="105" rx="12" fill={isPrint ? '#fff' : '#fef3c7'} stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="1.5" />
            <text x="55" y="65" textAnchor="middle" fill={isPrint ? '#000' : '#d97706'} fontSize="48" fontWeight="black">?</text>
            <rect x="20" y="78" width="70" height="20" rx="5" fill={isPrint ? '#eee' : '#fef9c3'} />
            <text x="55" y="92" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Simbol (A)</text>
          </g>

          {/* Kartu [B] Tanda Titik */}
          <g transform="translate(250, 36)">
            <rect x="0" y="0" width="110" height="105" rx="12" fill={isPrint ? '#fff' : '#f0fdf4'} stroke={isPrint ? '#000' : '#22c55e'} strokeWidth="1.5" />
            <circle cx="55" cy="48" r="10" fill={isPrint ? '#000' : '#15803d'} />
            <rect x="20" y="78" width="70" height="20" rx="5" fill={isPrint ? '#eee' : '#dcfce7'} />
            <text x="55" y="92" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Simbol (B)</text>
          </g>
        </svg>
      );

    case 'k2-indo-2': // Fabel Kancil dan Buaya
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="150" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="90" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Cerita Fabel Bergambar</text>

          {/* Sungai dengan Buaya dan Kancil Melompat */}
          <g transform="translate(60, 25)">
            {/* Air Sungai Biru */}
            <rect x="0" y="55" width="340" height="60" rx="6" fill={isPrint ? '#fff' : '#e0f2fe'} stroke={isPrint ? '#000' : '#38bdf8'} strokeWidth="1" />
            <path d="M10 75 Q40 70 70 75 T130 75 T190 75 T250 75 T310 75" fill="none" stroke={isPrint ? '#000' : '#bae6fd'} strokeWidth="2" />
            <path d="M20 95 Q50 90 80 95 T140 95 T200 95 T260 95 T320 95" fill="none" stroke={isPrint ? '#000' : '#bae6fd'} strokeWidth="2" />

            {/* Tiga Punggung Buaya di Sungai */}
            {[50, 140, 230].map((x, i) => (
              <g key={i} transform={`translate(${x}, 65)`}>
                <ellipse cx="25" cy="15" rx="28" ry="12" fill={isPrint ? '#ccc' : '#15803d'} stroke={isPrint ? '#000' : '#166534'} strokeWidth="1.5" />
                <polygon points="12,4 18,-2 24,4" fill={isPrint ? '#666' : '#166534'} />
                <polygon points="26,4 32,-2 38,4" fill={isPrint ? '#666' : '#166534'} />
                <circle cx="45" cy="10" r="3" fill="#fff" stroke="#000" strokeWidth="1" />
                <circle cx="46" cy="10" r="1.5" fill="#000" />
              </g>
            ))}

            {/* Kancil Cerdik Melompat di Atas Punggung Buaya */}
            <g transform="translate(130, 8)">
              {/* Badan Kancil Cokelat */}
              <ellipse cx="25" cy="35" rx="18" ry="12" fill={isPrint ? '#eee' : '#b45309'} stroke={isPrint ? '#000' : '#78350f'} strokeWidth="1.5" />
              {/* Kaki melompat */}
              <line x1="12" y1="42" x2="5" y2="55" stroke={isPrint ? '#000' : '#78350f'} strokeWidth="2.5" />
              <line x1="35" y1="42" x2="45" y2="55" stroke={isPrint ? '#000' : '#78350f'} strokeWidth="2.5" />
              {/* Kepala kancil dengan telinga tegak */}
              <circle cx="42" cy="24" r="10" fill={isPrint ? '#eee' : '#d97706'} stroke={isPrint ? '#000' : '#78350f'} strokeWidth="1.5" />
              <polygon points="38,16 40,6 44,15" fill={isPrint ? '#666' : '#92400e'} />
              <polygon points="44,16 48,6 49,15" fill={isPrint ? '#666' : '#92400e'} />
              {/* Mata bulat */}
              <circle cx="44" cy="22" r="2.5" fill="#fff" stroke="#000" strokeWidth="1" />
              <circle cx="45" cy="22" r="1" fill="#000" />
            </g>
          </g>

          <text x="230" y="145" textAnchor="middle" fill={textMuted} fontSize="11">Hewan cerdik menyeberangi deretan buaya di sungai</text>
        </svg>
      );

    case 'k2-ipas-1': // Daur Hidup Kupu-kupu: 1. Telur -> 2. Ulat -> 3. Kepompong -> 4. Kupu-kupu
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="160" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="95" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Daur Hidup Metamorfosis</text>

          {/* 4 Tahapan Berurutan */}
          <g transform="translate(25, 42)">
            {/* Tahap 1: Telur di daun */}
            <g transform="translate(0, 0)">
              <rect x="0" y="0" width="85" height="96" rx="10" fill={isPrint ? '#fff' : '#f0fdf4'} stroke={isPrint ? '#000' : '#86efac'} strokeWidth="1.5" />
              <path d="M20 50 C20 30 65 30 65 50 C65 70 20 70 20 50 Z" fill={isPrint ? '#e2e8f0' : '#4ade80'} />
              <circle cx="36" cy="46" r="3.5" fill="#ffffff" stroke={isPrint ? '#000' : '#15803d'} strokeWidth="1" />
              <circle cx="48" cy="46" r="3.5" fill="#ffffff" stroke={isPrint ? '#000' : '#15803d'} strokeWidth="1" />
              <text x="42" y="85" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">1. Telur</text>
            </g>

            {/* Panah 1 -> 2 */}
            <path d="M92 48 L106 48 M102 44 L106 48 L102 52" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" strokeLinecap="round" />

            {/* Tahap 2: Ulat (Larva) */}
            <g transform="translate(112, 0)">
              <rect x="0" y="0" width="85" height="96" rx="10" fill={isPrint ? '#fff' : '#fefce8'} stroke={isPrint ? '#000' : '#fde047'} strokeWidth="1.5" />
              <circle cx="25" cy="48" r="8" fill={isPrint ? '#cbd5e1' : '#84cc16'} stroke={isPrint ? '#000' : '#4d7c0f'} strokeWidth="1" />
              <circle cx="36" cy="48" r="8" fill={isPrint ? '#cbd5e1' : '#a3e635'} stroke={isPrint ? '#000' : '#4d7c0f'} strokeWidth="1" />
              <circle cx="47" cy="48" r="8" fill={isPrint ? '#cbd5e1' : '#bef264'} stroke={isPrint ? '#000' : '#4d7c0f'} strokeWidth="1" />
              <circle cx="58" cy="48" r="9" fill={isPrint ? '#cbd5e1' : '#65a30d'} stroke={isPrint ? '#000' : '#365314'} strokeWidth="1.5" />
              <circle cx="61" cy="45" r="1.5" fill="#000" />
              <text x="42" y="85" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">2. Ulat (Larva)</text>
            </g>

            {/* Panah 2 -> 3 */}
            <path d="M204 48 L218 48 M214 44 L218 48 L214 52" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" strokeLinecap="round" />

            {/* Tahap 3: Kepompong (Pupa) */}
            <g transform="translate(224, 0)">
              <rect x="0" y="0" width="85" height="96" rx="10" fill={isPrint ? '#fff' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
              <line x1="20" y1="25" x2="65" y2="25" stroke={isPrint ? '#000' : '#78350f'} strokeWidth="3" />
              <path d="M42 25 C30 35 30 65 42 70 C54 65 54 35 42 25 Z" fill={isPrint ? '#e2e8f0' : '#ca8a04'} stroke={isPrint ? '#000' : '#854d0e'} strokeWidth="1.5" />
              <text x="42" y="85" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">3. Kepompong</text>
            </g>

            {/* Panah 3 -> 4 */}
            <path d="M316 48 L330 48 M326 44 L330 48 L326 52" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" strokeLinecap="round" />

            {/* Tahap 4: Kupu-kupu */}
            <g transform="translate(336, 0)">
              <rect x="0" y="0" width="85" height="96" rx="10" fill={isPrint ? '#fff' : '#fdf2f8'} stroke={isPrint ? '#000' : '#fbcfe8'} strokeWidth="1.5" />
              {/* Sayap */}
              <ellipse cx="32" cy="42" rx="14" ry="16" fill={isPrint ? '#e2e8f0' : '#ec4899'} stroke={isPrint ? '#000' : '#be185d'} strokeWidth="1" />
              <ellipse cx="52" cy="42" rx="14" ry="16" fill={isPrint ? '#e2e8f0' : '#ec4899'} stroke={isPrint ? '#000' : '#be185d'} strokeWidth="1" />
              <ellipse cx="42" cy="45" rx="3.5" ry="12" fill={isPrint ? '#000' : '#475569'} />
              <text x="42" y="85" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">4. Kupu-kupu</text>
            </g>
          </g>
        </svg>
      );

    case 'k2-ipas-2': // Tiga Wujud Benda: Padat (Es), Cair (Air), Gas (Uap)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="135" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="82" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Tiga Wujud Benda</text>

          {/* Wadah 1: Es Batu (Padat) */}
          <g transform="translate(35, 42)">
            <rect x="0" y="0" width="115" height="98" rx="10" fill={isPrint ? '#fff' : '#f0f9ff'} stroke={isPrint ? '#000' : '#bae6fd'} strokeWidth="1.5" />
            <rect x="25" y="22" width="28" height="28" rx="4" fill={isPrint ? '#eee' : '#bae6fd'} stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="1.5" />
            <rect x="42" y="32" width="28" height="28" rx="4" fill={isPrint ? '#cbd5e1' : '#7dd3fc'} stroke={isPrint ? '#000' : '#0369a1'} strokeWidth="1.5" />
            <rect x="18" y="72" width="79" height="18" rx="4" fill={isPrint ? '#eee' : '#e0f2fe'} />
            <text x="57" y="85" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Benda A: Es Batu</text>
          </g>

          {/* Wadah 2: Air dalam Gelas (Cair) */}
          <g transform="translate(172, 42)">
            <rect x="0" y="0" width="115" height="98" rx="10" fill={isPrint ? '#fff' : '#eff6ff'} stroke={isPrint ? '#000' : '#bfdbfe'} strokeWidth="1.5" />
            {/* Gelas Kaca */}
            <path d="M38 18 L42 62 Q57 65 72 62 L76 18" fill="none" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" />
            {/* Air di dalam gelas */}
            <path d="M40 32 L42 61 Q57 63 72 61 L74 32 Z" fill={isPrint ? '#cbd5e1' : '#60a5fa'} opacity="0.6" />
            <rect x="18" y="72" width="79" height="18" rx="4" fill={isPrint ? '#eee' : '#dbeafe'} />
            <text x="57" y="85" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Benda B: Air Minum</text>
          </g>

          {/* Wadah 3: Uap dari Teko (Gas) */}
          <g transform="translate(310, 42)">
            <rect x="0" y="0" width="115" height="98" rx="10" fill={isPrint ? '#fff' : '#faf5ff'} stroke={isPrint ? '#000' : '#e9d5ff'} strokeWidth="1.5" />
            {/* Teko dengan uap */}
            <path d="M40 60 Q35 42 55 42 Q75 42 70 60 Z" fill={isPrint ? '#eee' : '#a855f7'} stroke={isPrint ? '#000' : '#7e22ce'} strokeWidth="1.5" />
            <line x1="38" y1="48" x2="26" y2="40" stroke={isPrint ? '#000' : '#7e22ce'} strokeWidth="3" />
            {/* Gelombang uap gas */}
            <path d="M24 36 Q20 28 26 22" fill="none" stroke={isPrint ? '#000' : '#c084fc'} strokeWidth="2" strokeDasharray="3 2" />
            <path d="M30 36 Q26 26 32 18" fill="none" stroke={isPrint ? '#000' : '#c084fc'} strokeWidth="2" strokeDasharray="3 2" />
            <rect x="18" y="72" width="79" height="18" rx="4" fill={isPrint ? '#eee' : '#f3e8ff'} />
            <text x="57" y="85" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Benda C: Uap Air</text>
          </g>
        </svg>
      );

    case 'k2-pkn-1': // Simbol Pohon Beringin Sila Ketiga Pancasila (Heraldik Autentik)
      return (
        <svg viewBox="0 0 460 170" className="w-full h-auto max-h-52 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="banyanLeafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="60%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
            <linearGradient id="banyanTrunkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#78350f" />
              <stop offset="50%" stopColor="#92400e" />
              <stop offset="100%" stopColor="#451a03" />
            </linearGradient>
          </defs>

          <rect width="460" height="170" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />

          {/* Header Label Lambang Negara */}
          <rect x="15" y="10" width="220" height="24" rx="6" fill={isPrint ? '#eee' : '#dcfce7'} />
          <text x="125" y="26" textAnchor="middle" fill={isPrint ? '#000' : '#166534'} fontSize="11" fontWeight="bold">LAMBANG PERISAI GARUDA PANCASILA</text>

          {/* Perisai Putih Sudut Kanan Atas di Tengah */}
          <g transform="translate(175, 24)">
            {/* Bayangan perisai */}
            <path d="M55 4 C95 4 105 14 105 60 C105 96 55 120 55 120 C55 120 5 96 5 60 C5 14 15 4 55 4 Z"
                  fill="#000000" opacity="0.15" transform="translate(2, 3)" />
            {/* Badan Perisai Putih */}
            <path d="M55 4 C95 4 105 14 105 60 C105 96 55 120 55 120 C55 120 5 96 5 60 C5 14 15 4 55 4 Z"
                  fill="#ffffff"
                  stroke={isPrint ? '#000000' : '#16a34a'}
                  strokeWidth="3.5" />
            <path d="M55 8 C90 8 99 17 99 58 C99 90 55 112 55 112 C55 112 11 90 11 58 C11 17 20 8 55 8 Z"
                  fill="none"
                  stroke={isPrint ? '#ccc' : '#86efac'}
                  strokeWidth="1" opacity="0.7" />

            {/* Pohon Beringin Rindang Autentik */}
            <g transform="translate(55, 66)">
              {/* Batang Utama & Cabang-Cabang Kuat */}
              <path d="M-12 36 L-7 8 Q-10 -4 -16 -12 L-10 -15 Q-4 -2 0 4 Q4 -2 10 -15 L16 -12 Q10 -4 7 8 L12 36 Z"
                    fill="url(#banyanTrunkGrad)" stroke={isPrint ? '#000' : '#451a03'} strokeWidth="1" />

              {/* Akar Tunjang & Akar Gantung (Sulur) */}
              <line x1="-22" y1="2" x2="-22" y2="34" stroke={isPrint ? '#000' : '#92400e'} strokeWidth="2.2" strokeLinecap="round" />
              <line x1="-15" y1="8" x2="-15" y2="36" stroke={isPrint ? '#000' : '#b45309'} strokeWidth="1.8" strokeLinecap="round" />
              <line x1="-8" y1="14" x2="-8" y2="36" stroke={isPrint ? '#000' : '#78350f'} strokeWidth="1.8" strokeLinecap="round" />
              <line x1="8" y1="14" x2="8" y2="36" stroke={isPrint ? '#000' : '#78350f'} strokeWidth="1.8" strokeLinecap="round" />
              <line x1="15" y1="8" x2="15" y2="36" stroke={isPrint ? '#000' : '#b45309'} strokeWidth="1.8" strokeLinecap="round" />
              <line x1="22" y1="2" x2="22" y2="34" stroke={isPrint ? '#000' : '#92400e'} strokeWidth="2.2" strokeLinecap="round" />

              {/* Rindang Dedaunan Beringin Bertingkat (Canopy Cluster) */}
              <ellipse cx="-24" cy="-12" rx="18" ry="14" fill={isPrint ? '#cbd5e1' : 'url(#banyanLeafGrad)'} stroke={isPrint ? '#000' : '#14532d'} strokeWidth="1.5" />
              <ellipse cx="24" cy="-12" rx="18" ry="14" fill={isPrint ? '#cbd5e1' : 'url(#banyanLeafGrad)'} stroke={isPrint ? '#000' : '#14532d'} strokeWidth="1.5" />
              <ellipse cx="-16" cy="-28" rx="20" ry="16" fill={isPrint ? '#cbd5e1' : 'url(#banyanLeafGrad)'} stroke={isPrint ? '#000' : '#14532d'} strokeWidth="1.5" />
              <ellipse cx="16" cy="-28" rx="20" ry="16" fill={isPrint ? '#cbd5e1' : 'url(#banyanLeafGrad)'} stroke={isPrint ? '#000' : '#14532d'} strokeWidth="1.5" />
              <ellipse cx="0" cy="-35" rx="24" ry="18" fill={isPrint ? '#e2e8f0' : 'url(#banyanLeafGrad)'} stroke={isPrint ? '#000' : '#14532d'} strokeWidth="1.5" />
              <circle cx="0" cy="-20" r="14" fill={isPrint ? '#cbd5e1' : '#22c55e'} opacity="0.6" />

              {/* Tekstur Daun Segar */}
              <circle cx="-10" cy="-36" r="3" fill="#86efac" opacity="0.8" />
              <circle cx="10" cy="-36" r="3" fill="#86efac" opacity="0.8" />
              <circle cx="0" cy="-42" r="3" fill="#bbf7d0" opacity="0.9" />
            </g>
          </g>

          {/* Kotak Pertanyaan & Informasi Sila di Kanan */}
          <g transform="translate(305, 50)">
            <rect x="0" y="0" width="140" height="72" rx="10" fill={isPrint ? '#eee' : '#f0fdf4'} stroke={isPrint ? '#000' : '#86efac'} strokeWidth="1.5" />
            <text x="70" y="22" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">Simbol: Pohon Beringin</text>
            <rect x="15" y="32" width="110" height="26" rx="6" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5" />
            <text x="70" y="50" textAnchor="middle" fill={textDark} fontSize="12" fontWeight="bold">Sila ke- [ ? ]</text>
          </g>

          {/* Keterangan Edukasi di Kiri Bawah */}
          <g transform="translate(15, 60)">
            <rect x="0" y="0" width="145" height="85" rx="8" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#ccc' : '#e2e8f0'} strokeWidth="1" />
            <text x="10" y="18" fill="#0f172a" fontSize="10" fontWeight="bold">Makna Simbol:</text>
            <text x="10" y="34" fill="#15803d" fontSize="9" fontWeight="bold">🌳 Pohon Rindang: Pengayoman</text>
            <text x="10" y="48" fill="#15803d" fontSize="9" fontWeight="bold">🌿 Akar Kokoh: Persatuan Bangsa</text>
            <text x="10" y="64" fill={textMuted} fontSize="8.5">• Berlatar warna putih bersih</text>
            <text x="10" y="76" fill={textMuted} fontSize="8.5">• Tempat berteduh seluruh rakyat</text>
          </g>
        </svg>
      );

    case 'k2-pkn-2': // Gotong Royong dan Kerja Sama Siswa di Sekolah (Ilustrasi Rapi & Karakter Jelas)
      return (
        <svg viewBox="0 0 460 170" className="w-full h-auto max-h-52 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="170" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />

          {/* Header Stimulus */}
          <rect x="15" y="10" width="170" height="24" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="100" y="26" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Kerja Sama di Lingkungan Sekolah</text>

          {/* Adegan Halaman Sekolah */}
          <g transform="translate(30, 42)">
            {/* Latar Belakang Gedung Sekolah & Rumput */}
            <rect x="0" y="0" width="400" height="95" rx="10" fill={isPrint ? '#fff' : '#f0fdf4'} stroke={isPrint ? '#ccc' : '#dcfce7'} strokeWidth="1" />
            <rect x="0" y="70" width="400" height="25" rx="0" fill={isPrint ? '#eee' : '#bbf7d0'} />

            {/* Gedung Kelas di Kejauhan */}
            <g transform="translate(20, 15)">
              <rect x="0" y="15" width="80" height="42" fill={isPrint ? '#fff' : '#fef3c7'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" rx="4" />
              <polygon points="-5,15 40,-2 85,15" fill={isPrint ? '#ccc' : '#ef4444'} stroke={isPrint ? '#000' : '#b91c1c'} strokeWidth="1.5" />
              <rect x="12" y="26" width="16" height="20" fill={isPrint ? '#eee' : '#bfdbfe'} stroke="#3b82f6" rx="2" />
              <rect x="52" y="26" width="16" height="20" fill={isPrint ? '#eee' : '#bfdbfe'} stroke="#3b82f6" rx="2" />
              <rect x="33" y="32" width="14" height="25" fill="#92400e" rx="1" />
            </g>

            {/* Karakter Siswa 1 (Andi): Menyapu Halaman Rapi */}
            <g transform="translate(130, 18)">
              {/* Kepala & Topi Siswa */}
              <circle cx="20" cy="14" r="9" fill="#fed7aa" stroke="#c2410c" strokeWidth="1.2" />
              <path d="M12 12 Q20 4 28 12" fill="#1e293b" />
              {/* Seragam Sekolah Merah Putih */}
              <path d="M11 23 L29 23 L27 46 L13 46 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.2" />
              <polygon points="18,24 22,24 21,34 19,34" fill="#ef4444" />
              <rect x="12" y="46" width="16" height="15" fill="#ef4444" rx="2" />
              {/* Kaki & Sepatu */}
              <line x1="15" y1="61" x2="15" y2="72" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
              <line x1="25" y1="61" x2="25" y2="72" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
              {/* Sapu Lidi & Tangan */}
              <line x1="8" y1="34" x2="36" y2="72" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
              <polygon points="34,70 26,82 44,82" fill="#ca8a04" stroke="#854d0e" strokeWidth="1" />
            </g>

            {/* Karakter Siswa 2 (Siti): Membuang Sampah Daun ke Tempat Sampah */}
            <g transform="translate(230, 18)">
              {/* Kepala Siswi dengan Kerudung Putih / Rambut Rapi */}
              <circle cx="20" cy="14" r="9" fill="#fed7aa" stroke="#c2410c" strokeWidth="1.2" />
              <circle cx="20" cy="12" r="10.5" fill="none" stroke="#64748b" strokeWidth="2.5" />
              {/* Seragam Sekolah */}
              <path d="M11 23 L29 23 L27 46 L13 46 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.2" />
              <polygon points="18,24 22,24 21,34 19,34" fill="#ef4444" />
              <rect x="10" y="46" width="20" height="20" fill="#ef4444" rx="2" />
              {/* Kaki */}
              <line x1="15" y1="66" x2="15" y2="72" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
              <line x1="25" y1="66" x2="25" y2="72" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
              {/* Kantong Sampah Kering */}
              <circle cx="34" cy="48" r="8" fill="#fde68a" stroke="#ca8a04" strokeWidth="1" />
            </g>

            {/* Tempat Sampah Hijau Organik */}
            <g transform="translate(300, 36)">
              <rect x="0" y="10" width="34" height="42" rx="4" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
              <rect x="-3" y="5" width="40" height="8" rx="2" fill="#16a34a" stroke="#15803d" strokeWidth="1.5" />
              {/* Ikon Daur Ulang */}
              <text x="17" y="32" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">♻️</text>
              <rect x="4" y="38" width="26" height="10" rx="2" fill="#15803d" />
              <text x="17" y="46" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">ORGANIK</text>
            </g>
          </g>

          <text x="230" y="156" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Siswa bergotong royong menjaga kebersihan dan ketertiban lingkungan sekolah</text>
        </svg>
      );

    case 'k2-coding-1': // Urutan Algoritma Menanam Biji
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Tahapan Algoritma Menanam</text>

          {/* Tiga Kartu Langkah Algoritma */}
          <g transform="translate(45, 42)">
            {/* Langkah 1 */}
            <g transform="translate(0, 0)">
              <rect x="0" y="0" width="100" height="96" rx="10" fill={isPrint ? '#fff' : '#fefce8'} stroke={isPrint ? '#000' : '#fef08a'} strokeWidth="1.5" />
              {/* Cangkul tanah */}
              <ellipse cx="50" cy="50" rx="30" ry="14" fill={isPrint ? '#cbd5e1' : '#a16207'} />
              <path d="M40 30 L60 50" stroke={isPrint ? '#000' : '#78350f'} strokeWidth="3" />
              <text x="50" y="85" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">1. Gali Tanah</text>
            </g>

            {/* Panah 1 -> 2 */}
            <path d="M108 48 L122 48 M118 44 L122 48 L118 52" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" strokeLinecap="round" />

            {/* Langkah 2 */}
            <g transform="translate(130, 0)">
              <rect x="0" y="0" width="100" height="96" rx="10" fill={isPrint ? '#fff' : '#f0fdf4'} stroke={isPrint ? '#000' : '#86efac'} strokeWidth="1.5" />
              {/* Biji dimasukkan */}
              <ellipse cx="50" cy="52" rx="25" ry="12" fill={isPrint ? '#cbd5e1' : '#a16207'} />
              <circle cx="50" cy="46" r="5" fill={isPrint ? '#000' : '#451a03'} />
              <text x="50" y="85" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">2. Masukkan Biji</text>
            </g>

            {/* Panah 2 -> 3 */}
            <path d="M238 48 L252 48 M248 44 L252 48 L248 52" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" strokeLinecap="round" />

            {/* Langkah 3 */}
            <g transform="translate(260, 0)">
              <rect x="0" y="0" width="100" height="96" rx="10" fill={isPrint ? '#fff' : '#eff6ff'} stroke={isPrint ? '#000' : '#bfdbfe'} strokeWidth="1.5" />
              {/* Siram air */}
              <path d="M35 35 Q50 35 60 45" stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="3" fill="none" />
              <circle cx="62" cy="52" r="2.5" fill={isPrint ? '#000' : '#38bdf8'} />
              <circle cx="56" cy="58" r="2" fill={isPrint ? '#000' : '#38bdf8'} />
              <text x="50" y="85" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">3. Siram Air</text>
            </g>
          </g>
        </svg>
      );

    case 'k2-coding-2': // Bagan Komputer: Input -> Proses -> Output (Output ditandai [ ? ])
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#e0e7ff'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#3730a3'} fontSize="11" fontWeight="bold">Alur Sistem Komputer</text>

          {/* Tiga Kotak Alur Komputer */}
          <g transform="translate(45, 42)">
            {/* 1. INPUT (Keyboard) */}
            <g transform="translate(0, 0)">
              <rect x="0" y="0" width="100" height="96" rx="10" fill={isPrint ? '#fff' : '#f1f5f9'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
              <rect x="18" y="22" width="64" height="34" rx="4" fill={isPrint ? '#eee' : '#475569'} stroke={isPrint ? '#000' : '#334155'} strokeWidth="1.5" />
              {/* Tombol-tombol keyboard */}
              <line x1="25" y1="32" x2="75" y2="32" stroke="#fff" strokeWidth="2" strokeDasharray="3 2" />
              <line x1="25" y1="42" x2="75" y2="42" stroke="#fff" strokeWidth="2" strokeDasharray="3 2" />
              <text x="50" y="78" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">1. Input</text>
            </g>

            {/* Panah 1 -> 2 */}
            <path d="M108 48 L122 48 M118 44 L122 48 L118 52" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" strokeLinecap="round" />

            {/* 2. PROSES (CPU / Otak Komputer) */}
            <g transform="translate(130, 0)">
              <rect x="0" y="0" width="100" height="96" rx="10" fill={isPrint ? '#fff' : '#eff6ff'} stroke={isPrint ? '#000' : '#93c5fd'} strokeWidth="1.5" />
              <rect x="22" y="18" width="56" height="42" rx="4" fill={isPrint ? '#cbd5e1' : '#3b82f6'} stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="1.5" />
              <circle cx="50" cy="39" r="10" fill={isPrint ? '#fff' : '#60a5fa'} />
              <text x="50" y="78" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">2. Proses</text>
            </g>

            {/* Panah 2 -> 3 */}
            <path d="M238 48 L252 48 M248 44 L252 48 L248 52" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" strokeLinecap="round" />

            {/* 3. OUTPUT Monitor Layar (Diberi tanda tanya [ ? ]) */}
            <g transform="translate(260, 0)">
              <rect x="0" y="0" width="100" height="96" rx="10" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="2" strokeDasharray="4 2" />
              <rect x="18" y="16" width="64" height="40" rx="4" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="1.5" />
              <text x="50" y="42" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="18" fontWeight="bold">?</text>
              <line x1="50" y1="56" x2="50" y2="64" stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="2.5" />
              <line x1="40" y1="64" x2="60" y2="64" stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="2.5" />
              <text x="50" y="82" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">3. [ ? ]</text>
            </g>
          </g>
        </svg>
      );

    case 'k2-inggris-1': // Family Tree (Grandfather, Parents, Children)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="145" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="87" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Family Tree Diagram</text>

          {/* Pohon Keluarga */}
          <g transform="translate(130, 20)">
            {/* Puncak: Kakek [ ? ] */}
            <g transform="translate(60, 0)">
              <rect x="0" y="0" width="80" height="42" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="1.5" strokeDasharray="3 2" />
              <text x="40" y="20" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="11" fontWeight="bold">[ ? ]</text>
              <text x="40" y="34" textAnchor="middle" fill={textMuted} fontSize="9">Father's Father</text>
            </g>

            {/* Garis Penghubung */}
            <line x1="100" y1="42" x2="100" y2="60" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="1.5" />
            <line x1="45" y1="60" x2="155" y2="60" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="1.5" />
            <line x1="45" y1="60" x2="45" y2="70" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="1.5" />
            <line x1="155" y1="60" x2="155" y2="70" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="1.5" />

            {/* Generasi 2: Father & Mother */}
            <g transform="translate(10, 70)">
              <rect x="0" y="0" width="70" height="34" rx="6" fill={isPrint ? '#fff' : '#eff6ff'} stroke={isPrint ? '#000' : '#93c5fd'} strokeWidth="1" />
              <text x="35" y="22" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Father</text>
            </g>
            <g transform="translate(120, 70)">
              <rect x="0" y="0" width="70" height="34" rx="6" fill={isPrint ? '#fff' : '#fdf2f8'} stroke={isPrint ? '#000' : '#fbcfe8'} strokeWidth="1" />
              <text x="35" y="22" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Mother</text>
            </g>

            {/* Garis ke Anak (Me) */}
            <line x1="100" y1="104" x2="100" y2="114" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="1.5" />
            <g transform="translate(65, 114)">
              <rect x="0" y="0" width="70" height="22" rx="4" fill={isPrint ? '#fff' : '#f0fdf4'} stroke={isPrint ? '#000' : '#86efac'} strokeWidth="1" />
              <text x="35" y="15" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Me (Child)</text>
            </g>
          </g>
        </svg>
      );

    case 'k2-inggris-2': // Spoon & Fork with Clean Plate
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="135" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="82" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Dining Tools Set</text>

          {/* Garpu di Kiri, Piring di Tengah, Sendok di Kanan */}
          <g transform="translate(140, 20)">
            {/* Piring Bersih di Tengah */}
            <circle cx="90" cy="65" r="45" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="2.5" />
            <circle cx="90" cy="65" r="32" fill="none" stroke={isPrint ? '#000' : '#e2e8f0'} strokeWidth="1.5" />

            {/* Garpu (Fork) di Kiri */}
            <g transform="translate(20, 20)">
              <path d="M0 50 L0 85" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="3.5" strokeLinecap="round" />
              <path d="M-8 15 L-8 32 Q0 40 8 32 L8 15" fill="none" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2.5" strokeLinecap="round" />
              <line x1="-3" y1="15" x2="-3" y2="35" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" />
              <line x1="3" y1="15" x2="3" y2="35" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" />
            </g>

            {/* Sendok (Spoon) di Kanan */}
            <g transform="translate(160, 20)">
              <path d="M0 45 L0 85" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="3.5" strokeLinecap="round" />
              <ellipse cx="0" cy="25" rx="11" ry="18" fill={isPrint ? '#eee' : '#cbd5e1'} stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" />
            </g>
          </g>

          <rect x="315" y="60" width="130" height="32" rx="8" fill={isPrint ? '#eee' : '#f8fafc'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
          <text x="380" y="80" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Eating Tools: [ ? ]</text>
        </svg>
      );

    case 'k2-sbdp-1':
    case 'k2-daerah-1': // Waditra Angklung Bambu (Tanpa teks jawaban "Angklung Jawa Barat")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="160" height="22" rx="6" fill={isPrint ? '#eee' : '#fefce8'} />
          <text x="95" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#854d0e'} fontSize="11" fontWeight="bold">Waditra Musik Tradisional</text>

          {/* Gambar Angklung Bambu Berdiri Rapi */}
          <g transform="translate(170, 20)">
            {/* Tiang Bingkai Bambu Vertikal */}
            <line x1="20" y1="10" x2="20" y2="115" stroke={isPrint ? '#000' : '#78350f'} strokeWidth="4.5" strokeLinecap="round" />
            <line x1="100" y1="10" x2="100" y2="115" stroke={isPrint ? '#000' : '#78350f'} strokeWidth="4.5" strokeLinecap="round" />
            
            {/* Palang Bambu Horisontal Atas & Bawah */}
            <line x1="12" y1="25" x2="108" y2="25" stroke={isPrint ? '#000' : '#b45309'} strokeWidth="4" />
            <line x1="12" y1="105" x2="108" y2="105" stroke={isPrint ? '#000' : '#b45309'} strokeWidth="5" />

            {/* Tabung Bambu 1 (Kiri - Panjang/Rendah) */}
            <g transform="translate(38, 28)">
              <rect x="0" y="0" width="16" height="74" rx="3" fill={isPrint ? '#eee' : '#fde047'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" />
              <path d="M0 0 Q8 10 16 0" fill={isPrint ? '#666' : '#ca8a04'} />
              <line x1="4" y1="10" x2="4" y2="70" stroke={isPrint ? '#000' : '#eab308'} strokeWidth="1" />
            </g>

            {/* Tabung Bambu 2 (Kanan - Lebih Pendek/Tinggi) */}
            <g transform="translate(68, 45)">
              <rect x="0" y="0" width="14" height="57" rx="3" fill={isPrint ? '#eee' : '#fde047'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" />
              <path d="M0 0 Q7 8 14 0" fill={isPrint ? '#666' : '#ca8a04'} />
              <line x1="4" y1="8" x2="4" y2="53" stroke={isPrint ? '#000' : '#eab308'} strokeWidth="1" />
            </g>
          </g>

          <rect x="310" y="55" width="135" height="38" rx="8" fill={isPrint ? '#eee' : '#fefce8'} stroke={isPrint ? '#000' : '#fde047'} strokeWidth="1.5" />
          <text x="377" y="72" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Cara Main: Dioyagkeun</text>
          <text x="377" y="86" textAnchor="middle" fill={textMuted} fontSize="10">Nama Alat: [ ? ]</text>
        </svg>
      );

    case 'k2-sbdp-2': // Gerak Tari Merak (Rentangan Selendang)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="150" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="90" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Seni Tari Tradisional</text>

          {/* Penari Merentangkan Selendang Bermotif Bulu Burung */}
          <g transform="translate(130, 18)">
            {/* Sayap Selendang Lebar di Kiri & Kanan */}
            <path d="M100 70 C40 30 10 45 -10 75 C30 85 70 80 100 70 Z" fill={isPrint ? '#ccc' : '#06b6d4'} stroke={isPrint ? '#000' : '#0891b2'} strokeWidth="1.5" />
            <path d="M100 70 C160 30 190 45 210 75 C170 85 130 80 100 70 Z" fill={isPrint ? '#ccc' : '#06b6d4'} stroke={isPrint ? '#000' : '#0891b2'} strokeWidth="1.5" />
            
            {/* Pola Mata Bulu Merak pada Selendang */}
            <circle cx="15" cy="65" r="7" fill={isPrint ? '#fff' : '#fde047'} stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="1.5" />
            <circle cx="15" cy="65" r="3.5" fill={isPrint ? '#000' : '#0369a1'} />
            <circle cx="185" cy="65" r="7" fill={isPrint ? '#fff' : '#fde047'} stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="1.5" />
            <circle cx="185" cy="65" r="3.5" fill={isPrint ? '#000' : '#0369a1'} />

            {/* Tubuh Penari */}
            <g transform="translate(85, 10)">
              {/* Mahkota Penari */}
              <polygon points="15,-2 5,12 25,12" fill={isPrint ? '#000' : '#eab308'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1" />
              {/* Kepala */}
              <circle cx="15" cy="20" r="10" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1.5" />
              {/* Badan & Kain Kemben */}
              <path d="M7 30 L23 30 L26 85 L4 85 Z" fill={isPrint ? '#666' : '#059669'} stroke={isPrint ? '#000' : '#047857'} strokeWidth="1.5" />
              {/* Rentangan Tangan */}
              <path d="M7 38 L-30 45" stroke={isPrint ? '#000' : '#fed7aa'} strokeWidth="3" strokeLinecap="round" />
              <path d="M23 38 L60 45" stroke={isPrint ? '#000' : '#fed7aa'} strokeWidth="3" strokeLinecap="round" />
            </g>
          </g>

          <rect x="315" y="55" width="130" height="38" rx="8" fill={isPrint ? '#eee' : '#ecfeff'} stroke={isPrint ? '#000' : '#a5f3fc'} strokeWidth="1.5" />
          <text x="380" y="72" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Inspirasi Gerakan:</text>
          <text x="380" y="86" textAnchor="middle" fill={isPrint ? '#000' : '#0891b2'} fontSize="10" fontWeight="bold">Tari [ ? ]</text>
        </svg>
      );

    case 'k2-pjok-1': // Sikap Pesawat Terbang Keseimbangan
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="150" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="90" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Latihan Keseimbangan</text>

          {/* Karakter Siswa Memperagakan Sikap Pesawat Terbang */}
          <g transform="translate(140, 20)">
            <line x1="-30" y1="110" x2="190" y2="110" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="2" />

            {/* Kepala menatap ke depan */}
            <circle cx="110" cy="35" r="11" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1.5" />
            
            {/* Badan condong ke depan horizontal */}
            <line x1="40" y1="48" x2="102" y2="42" stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="7" strokeLinecap="round" />

            {/* Satu Kaki Bertumpu Kuat ke Lantai */}
            <line x1="68" y1="48" x2="68" y2="110" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="4" strokeLinecap="round" />

            {/* Satu Kaki Lain Lurus Terangkat ke Belakang */}
            <line x1="42" y1="48" x2="-10" y2="40" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3.5" strokeLinecap="round" />

            {/* Kedua Tangan Direntangkan ke Samping Luas */}
            <line x1="72" y1="46" x2="72" y2="12" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="3" strokeLinecap="round" />
            <line x1="72" y1="46" x2="72" y2="76" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="3" strokeLinecap="round" />
          </g>

          <rect x="310" y="55" width="135" height="38" rx="8" fill={isPrint ? '#eee' : '#eff6ff'} stroke={isPrint ? '#000' : '#bfdbfe'} strokeWidth="1.5" />
          <text x="377" y="72" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Sikap Meniru:</text>
          <text x="377" y="86" textAnchor="middle" fill={isPrint ? '#000' : '#1d4ed8'} fontSize="10" fontWeight="bold">Sikap [ ? ]</text>
        </svg>
      );

    case 'k2-pjok-2': // Pelari Menyerahkan Tongkat Estafet
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="150" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="90" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Nomor Lari Atletik</text>

          {/* Dua Pelari dan Tongkat Estafet Berpindah */}
          <g transform="translate(100, 20)">
            <line x1="-20" y1="110" x2="260" y2="110" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="2" />

            {/* Pelari 1 (Pemberi Tongkat) */}
            <g transform="translate(30, 15)">
              <circle cx="15" cy="15" r="10" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1.5" />
              <line x1="15" y1="25" x2="20" y2="58" stroke={isPrint ? '#000' : '#dc2626'} strokeWidth="4" />
              <line x1="20" y1="58" x2="8" y2="92" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              <line x1="20" y1="58" x2="32" y2="85" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              {/* Tangan menjulur membawa tongkat */}
              <line x1="18" y1="36" x2="55" y2="45" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* Tongkat Estafet Merah Kuning */}
            <rect x="85" y="55" width="22" height="6" rx="2" fill={isPrint ? '#000' : '#facc15'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" transform="rotate(-15 85 55)" />

            {/* Pelari 2 (Penerima Tongkat) */}
            <g transform="translate(140, 15)">
              <circle cx="15" cy="15" r="10" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1.5" />
              <line x1="15" y1="25" x2="22" y2="58" stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="4" />
              <line x1="22" y1="58" x2="10" y2="92" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              <line x1="22" y1="58" x2="38" y2="85" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3" />
              {/* Tangan menjulur ke belakang menyambut */}
              <line x1="18" y1="36" x2="-10" y2="48" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="3" strokeLinecap="round" />
            </g>
          </g>

          <rect x="315" y="55" width="130" height="38" rx="8" fill={isPrint ? '#eee' : '#fff7ed'} stroke={isPrint ? '#000' : '#fdba74'} strokeWidth="1.5" />
          <text x="380" y="72" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Perpindahan Tongkat</text>
          <text x="380" y="86" textAnchor="middle" fill={textMuted} fontSize="10">Cabang Lari: [ ? ]</text>
        </svg>
      );

    case 'k2-daerah-2': // Gundhul Pacul (Anak Menjunjung Bakul)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#fefce8'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#854d0e'} fontSize="11" fontWeight="bold">Ilustrasi Tembang Jawa</text>

          {/* Anak Botak Gundhul Menjunjung Bakul Nasi di Kepala */}
          <g transform="translate(160, 15)">
            <line x1="-30" y1="120" x2="160" y2="120" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="2" />

            {/* Bakul Wakul Nasi di Atas Kepala */}
            <polygon points="15,22 65,22 55,40 25,40" fill={isPrint ? '#eee' : '#ca8a04'} stroke={isPrint ? '#000' : '#854d0e'} strokeWidth="2" />
            <line x1="25" y1="28" x2="55" y2="28" stroke={isPrint ? '#000' : '#eab308'} strokeWidth="1.5" />

            {/* Kepala Anak Gundhul Botak */}
            <circle cx="40" cy="54" r="16" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1.5" />
            <circle cx="36" cy="52" r="1.5" fill="#000" />
            <circle cx="44" cy="52" r="1.5" fill="#000" />
            <path d="M36 60 Q40 64 44 60" fill="none" stroke="#000" strokeWidth="1.5" />

            {/* Badan Anak Bersarung */}
            <rect x="25" y="70" width="30" height="48" rx="4" fill={isPrint ? '#ccc' : '#e2e8f0'} stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
            <line x1="32" y1="70" x2="32" y2="118" stroke="#000" strokeWidth="1" />
            <line x1="48" y1="70" x2="48" y2="118" stroke="#000" strokeWidth="1" />

            {/* Tangan Menopang Bakul */}
            <path d="M25 78 L12 50 L22 38" fill="none" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="2.5" strokeLinecap="round" />
            <path d="M55 78 L68 50 L58 38" fill="none" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="2.5" strokeLinecap="round" />
          </g>

          <rect x="305" y="55" width="140" height="38" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
          <text x="375" y="72" textAnchor="middle" fill={isPrint ? '#000' : '#92400e'} fontSize="11" fontWeight="bold">"Nyunggi-nyunggi wakul..."</text>
          <text x="375" y="86" textAnchor="middle" fill={textDark} fontSize="10">Makna Sikap: [ ? ]</text>
        </svg>
      );

    default:
      return null;
  }
};
