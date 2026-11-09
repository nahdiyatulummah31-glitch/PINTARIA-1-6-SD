import React from 'react';

export const renderGrade3Svg = (key: string, isPrint = false): React.ReactElement | null => {
  const strokeColor = isPrint ? '#000000' : '#cbd5e1';
  const bgCard = isPrint ? '#ffffff' : '#f8fafc';
  const textDark = isPrint ? '#000000' : '#1e293b';
  const textMuted = isPrint ? '#333333' : '#64748b';

  let normKey = key;
  if (normKey === 'k3-jawa-1') normKey = 'k3-daerah-1';
  if (normKey === 'k3-jawa-2') normKey = 'k3-daerah-2';

  switch (normKey) {
    case 'k3-mtk-1': // Pecahan Pizza 1 dari 4 (Tanpa teks "1/4")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="150" height="22" rx="6" fill={isPrint ? '#eee' : '#e0e7ff'} />
          <text x="90" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#3730a3'} fontSize="11" fontWeight="bold">Bagan Pecahan Bidang</text>

          {/* Pizza Dibagi 4 Sama Besar di Tengah */}
          <g transform="translate(140, 20)">
            {/* Lingkaran Pizza 3/4 Bagian Tetap di Loyang */}
            <circle cx="70" cy="65" r="50" fill={isPrint ? '#fff' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="2.5" />
            
            {/* Garis Pembagi 4 Kuadran */}
            <line x1="70" y1="15" x2="70" y2="115" stroke={isPrint ? '#000' : '#c2410c'} strokeWidth="2" strokeDasharray="4 2" />
            <line x1="20" y1="65" x2="120" y2="65" stroke={isPrint ? '#000' : '#c2410c'} strokeWidth="2" strokeDasharray="4 2" />

            {/* Topping Pizza di 3 Bagian Lain */}
            <circle cx="45" cy="45" r="5" fill={isPrint ? '#000' : '#ef4444'} />
            <circle cx="45" cy="85" r="5" fill={isPrint ? '#000' : '#ef4444'} />
            <circle cx="95" cy="85" r="5" fill={isPrint ? '#000' : '#ef4444'} />

            {/* 1 Bagian yang Diarsir / Diambil (Kuadran Kanan Atas) */}
            <path d="M70 65 L120 65 A50 50 0 0 0 70 15 Z" fill={isPrint ? '#cbd5e1' : '#f59e0b'} stroke={isPrint ? '#000' : '#b45309'} strokeWidth="2" />
            <circle cx="92" cy="42" r="5" fill={isPrint ? '#000' : '#b91c1c'} />
          </g>

          <rect x="305" y="55" width="140" height="42" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
          <text x="375" y="73" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">1 Bagian Diarsir</text>
          <text x="375" y="89" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="11" fontWeight="bold">Nilai Pecahan: [ ? ]</text>
        </svg>
      );

    case 'k3-mtk-2': // Garis Bilangan Loncat +3: 0, 3, 6, 9, [ ? ], 15
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="170" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="100" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Garis Bilangan Berpola</text>

          {/* Garis Bilangan Utama */}
          <g transform="translate(30, 45)">
            {/* Garis Horizontal dengan Ujung Panah Kiri dan Kanan */}
            <line x1="20" y1="50" x2="380" y2="50" stroke={isPrint ? '#000' : '#334155'} strokeWidth="3" />
            <polygon points="15,50 25,45 25,55" fill={isPrint ? '#000' : '#334155'} />
            <polygon points="385,50 375,45 375,55" fill={isPrint ? '#000' : '#334155'} />

            {/* Titik-titik Bilangan: 0, 3, 6, 9, [ ? ], 15 */}
            {[
              { x: 50, val: '0' },
              { x: 110, val: '3' },
              { x: 170, val: '6' },
              { x: 230, val: '9' },
              { x: 290, val: '?' },
              { x: 350, val: '15' },
            ].map((pt, i) => (
              <g key={i}>
                <line x1={pt.x} y1="42" x2={pt.x} y2="58" stroke={isPrint ? '#000' : '#0f172a'} strokeWidth="2.5" />
                <circle cx={pt.x} cy="50" r="4" fill={pt.val === '?' ? (isPrint ? '#000' : '#f59e0b') : (isPrint ? '#000' : '#2563eb')} />
                <text x={pt.x} y="74" textAnchor="middle" fill={pt.val === '?' ? (isPrint ? '#000' : '#b45309') : textDark} fontSize={pt.val === '?' ? '15' : '13'} fontWeight="bold">
                  {pt.val === '?' ? '[ ? ]' : pt.val}
                </text>
              </g>
            ))}

            {/* Lengkungan Lompatan Pola */}
            {[
              { x1: 50, x2: 110 },
              { x1: 110, x2: 170 },
              { x1: 170, x2: 230 },
              { x1: 230, x2: 290 },
              { x1: 290, x2: 350 },
            ].map((arc, i) => (
              <g key={i}>
                <path d={`M${arc.x1} 45 Q${(arc.x1 + arc.x2) / 2} 18 ${arc.x2} 45`} fill="none" stroke={isPrint ? '#000' : '#10b981'} strokeWidth="2" strokeDasharray="3 2" />
                <text x={(arc.x1 + arc.x2) / 2} y="15" textAnchor="middle" fill={isPrint ? '#000' : '#059669'} fontSize="10" fontWeight="bold">+3</text>
              </g>
            ))}
          </g>

          <text x="230" y="145" textAnchor="middle" fill={textMuted} fontSize="11">Bilangan berapakah yang tepat mengisi tanda tanya [ ? ]?</text>
        </svg>
      );

    case 'k3-indo-1': // Arah Mata Angin (Tanpa teks "U = Utara (Jawaban)")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#e0e7ff'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#3730a3'} fontSize="11" fontWeight="bold">Kompas Arah Mata Angin</text>

          {/* Bintang Mawar Kompas di Tengah */}
          <g transform="translate(180, 20)">
            <circle cx="50" cy="55" r="48" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="2" />
            <circle cx="50" cy="55" r="45" fill="none" stroke={isPrint ? '#000' : '#e2e8f0'} strokeWidth="1" strokeDasharray="2 2" />

            {/* Jarum Atas (Menunjuk ke Atas) Diberi Tanda [ ? ] */}
            <polygon points="50,15 44,55 50,50" fill={isPrint ? '#000' : '#dc2626'} />
            <polygon points="50,15 56,55 50,50" fill={isPrint ? '#666' : '#ef4444'} />

            {/* Jarum Bawah (Selatan) */}
            <polygon points="50,95 44,55 50,60" fill={isPrint ? '#ccc' : '#64748b'} />
            <polygon points="50,95 56,55 50,60" fill={isPrint ? '#999' : '#94a3b8'} />

            {/* Jarum Kanan (Timur) */}
            <polygon points="90,55 50,49 55,55" fill={isPrint ? '#ccc' : '#64748b'} />
            <polygon points="90,55 50,61 55,55" fill={isPrint ? '#999' : '#94a3b8'} />

            {/* Jarum Kiri (Barat) */}
            <polygon points="10,55 50,49 45,55" fill={isPrint ? '#ccc' : '#64748b'} />
            <polygon points="10,55 50,61 45,55" fill={isPrint ? '#999' : '#94a3b8'} />

            <circle cx="50" cy="55" r="5" fill={isPrint ? '#000' : '#0f172a'} />

            {/* Huruf Arah */}
            <text x="50" y="8" textAnchor="middle" fill={isPrint ? '#000' : '#dc2626'} fontSize="13" fontWeight="bold">[ ? ]</text>
            <text x="105" y="59" textAnchor="middle" fill={textDark} fontSize="12" fontWeight="bold">T</text>
            <text x="50" y="112" textAnchor="middle" fill={textDark} fontSize="12" fontWeight="bold">S</text>
            <text x="-5" y="59" textAnchor="middle" fill={textDark} fontSize="12" fontWeight="bold">B</text>
          </g>

          <rect x="315" y="55" width="130" height="38" rx="8" fill={isPrint ? '#eee' : '#fef2f2'} stroke={isPrint ? '#000' : '#fca5a5'} strokeWidth="1.5" />
          <text x="380" y="72" textAnchor="middle" fill={isPrint ? '#000' : '#991b1b'} fontSize="11" fontWeight="bold">Arah Atas Denah</text>
          <text x="380" y="86" textAnchor="middle" fill={textDark} fontSize="10">Nama Arah: [ ? ]</text>
        </svg>
      );

    case 'k3-indo-2': // Format Bagan Surat Pribadi: [1] Tempat Tanggal, [2] Salam, [3] Isi, [4] Penutup
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="150" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="90" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Struktur Surat Pribadi</text>

          {/* Lembar Surat */}
          <g transform="translate(130, 20)">
            <rect x="0" y="0" width="200" height="120" rx="8" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="1.5" />
            
            {/* Bagian [ 1 ] Tempat & Tanggal Surat */}
            <rect x="75" y="10" width="115" height="18" rx="4" fill={isPrint ? '#eee' : '#fef3c7'} stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="1" />
            <text x="132" y="23" textAnchor="middle" fill={isPrint ? '#000' : '#92400e'} fontSize="9" fontWeight="bold">Bandung, 10 Oktober 2026</text>
            <circle cx="65" cy="19" r="7" fill={isPrint ? '#000' : '#ea580c'} />
            <text x="65" y="23" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">1</text>

            {/* Bagian [ 2 ] Salam Pembuka */}
            <text x="15" y="44" fill={textDark} fontSize="10">Salam hangat sahabatku,</text>
            <circle cx="155" cy="40" r="7" fill={isPrint ? '#000' : '#64748b'} />
            <text x="155" y="44" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">2</text>

            {/* Bagian [ 3 ] Isi Surat */}
            <line x1="15" y1="58" x2="185" y2="58" stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
            <line x1="15" y1="70" x2="185" y2="70" stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
            <circle cx="155" cy="65" r="7" fill={isPrint ? '#000' : '#64748b'} />
            <text x="155" y="69" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">3</text>

            {/* Bagian [ 4 ] Penutup & Nama Pembuat */}
            <text x="135" y="94" textAnchor="middle" fill={textDark} fontSize="9">Sahabatmu,</text>
            <text x="135" y="108" textAnchor="middle" fill={textDark} fontSize="9" fontWeight="bold">Budi</text>
            <circle cx="85" cy="100" r="7" fill={isPrint ? '#000' : '#64748b'} />
            <text x="85" y="104" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">4</text>
          </g>

          <rect x="345" y="55" width="105" height="42" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
          <text x="397" y="73" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="11" fontWeight="bold">Nomor [ 1 ]</text>
          <text x="397" y="88" textAnchor="middle" fill={textDark} fontSize="10">Nama Bagian: ?</text>
        </svg>
      );

    case 'k3-ipas-1': // Siklus Daur Air (Tanpa tulisan "Evaporasi = Penguapan (Jawaban)")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="150" height="22" rx="6" fill={isPrint ? '#eee' : '#e0f2fe'} />
          <text x="90" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#0369a1'} fontSize="11" fontWeight="bold">Daur Siklus Air di Bumi</text>

          {/* Siklus Air: Danau/Laut -> Uap Naik (1) -> Awan (2) -> Hujan (3) */}
          <g transform="translate(60, 20)">
            {/* Matahari di Pojok Kiri Atas */}
            <circle cx="20" cy="20" r="16" fill={isPrint ? '#eee' : '#f59e0b'} stroke={isPrint ? '#000' : '#d97706'} strokeWidth="1.5" />

            {/* Air Danau/Laut di Bawah */}
            <rect x="0" y="95" width="340" height="25" rx="4" fill={isPrint ? '#ccc' : '#38bdf8'} stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="1.5" />
            <text x="60" y="112" fill={isPrint ? '#000' : '#ffffff'} fontSize="10" fontWeight="bold">Air Laut / Danau</text>

            {/* Tahap [ 1 ]: Panah Uap Air Menguap ke Atas */}
            <g transform="translate(70, 35)">
              <path d="M0 50 Q-5 35 0 20 M15 50 Q10 35 15 20 M30 50 Q25 35 30 20" fill="none" stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="2.5" strokeDasharray="3 2" />
              <polygon points="0,15 -4,22 4,22" fill={isPrint ? '#000' : '#0284c7'} />
              <polygon points="15,15 11,22 19,22" fill={isPrint ? '#000' : '#0284c7'} />
              <polygon points="30,15 26,22 34,22" fill={isPrint ? '#000' : '#0284c7'} />
              <rect x="-8" y="55" width="50" height="18" rx="4" fill={isPrint ? '#eee' : '#eff6ff'} stroke={isPrint ? '#000' : '#93c5fd'} strokeWidth="1" />
              <text x="17" y="68" textAnchor="middle" fill={isPrint ? '#000' : '#1d4ed8'} fontSize="10" fontWeight="bold">Tahap (1)</text>
            </g>

            {/* Tahap [ 2 ]: Awan Mengembun */}
            <g transform="translate(180, 15)">
              <ellipse cx="35" cy="25" rx="30" ry="18" fill={isPrint ? '#fff' : '#cbd5e1'} stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
              <circle cx="20" cy="18" r="14" fill={isPrint ? '#fff' : '#cbd5e1'} />
              <circle cx="45" cy="18" r="16" fill={isPrint ? '#fff' : '#cbd5e1'} />
              <text x="35" y="29" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Tahap (2)</text>
            </g>

            {/* Tahap [ 3 ]: Turun Hujan */}
            <g transform="translate(260, 45)">
              <line x1="10" y1="10" x2="5" y2="40" stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="2" strokeDasharray="3 2" />
              <line x1="25" y1="10" x2="20" y2="40" stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="2" strokeDasharray="3 2" />
              <line x1="40" y1="10" x2="35" y2="40" stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="2" strokeDasharray="3 2" />
              <rect x="0" y="45" width="50" height="18" rx="4" fill={isPrint ? '#eee' : '#eff6ff'} stroke={isPrint ? '#000' : '#93c5fd'} strokeWidth="1" />
              <text x="25" y="58" textAnchor="middle" fill={isPrint ? '#000' : '#1d4ed8'} fontSize="10" fontWeight="bold">Tahap (3)</text>
            </g>
          </g>
        </svg>
      );

    case 'k3-ipas-2': // Rantai Makanan: Padi -> Belalang -> Katak -> Ular (Tanpa teks "Padi = Produsen")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="160" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="95" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Rantai Makanan Sawah</text>

          {/* 4 Organisme Rantai Makanan */}
          <g transform="translate(20, 42)">
            {/* Organisme A: Tanaman Padi */}
            <g transform="translate(0, 0)">
              <rect x="0" y="0" width="85" height="96" rx="10" fill={isPrint ? '#fff' : '#f0fdf4'} stroke={isPrint ? '#000' : '#86efac'} strokeWidth="1.5" />
              <text x="42" y="45" textAnchor="middle" fontSize="24">🌾</text>
              <rect x="10" y="68" width="65" height="20" rx="4" fill={isPrint ? '#eee' : '#dcfce7'} />
              <text x="42" y="82" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Tumbuhan A</text>
            </g>

            <path d="M92 48 L106 48 M102 44 L106 48 L102 52" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" strokeLinecap="round" />

            {/* Organisme B: Belalang */}
            <g transform="translate(112, 0)">
              <rect x="0" y="0" width="85" height="96" rx="10" fill={isPrint ? '#fff' : '#fefce8'} stroke={isPrint ? '#000' : '#fde047'} strokeWidth="1.5" />
              <text x="42" y="45" textAnchor="middle" fontSize="24">🦗</text>
              <rect x="10" y="68" width="65" height="20" rx="4" fill={isPrint ? '#eee' : '#fef9c3'} />
              <text x="42" y="82" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Hewan B</text>
            </g>

            <path d="M204 48 L218 48 M214 44 L218 48 L214 52" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" strokeLinecap="round" />

            {/* Organisme C: Katak */}
            <g transform="translate(224, 0)">
              <rect x="0" y="0" width="85" height="96" rx="10" fill={isPrint ? '#fff' : '#f0fdf4'} stroke={isPrint ? '#000' : '#86efac'} strokeWidth="1.5" />
              <text x="42" y="45" textAnchor="middle" fontSize="24">🐸</text>
              <rect x="10" y="68" width="65" height="20" rx="4" fill={isPrint ? '#eee' : '#dcfce7'} />
              <text x="42" y="82" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Hewan C</text>
            </g>

            <path d="M316 48 L330 48 M326 44 L330 48 L326 52" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" strokeLinecap="round" />

            {/* Organisme D: Ular */}
            <g transform="translate(336, 0)">
              <rect x="0" y="0" width="85" height="96" rx="10" fill={isPrint ? '#fff' : '#fdf2f8'} stroke={isPrint ? '#000' : '#fbcfe8'} strokeWidth="1.5" />
              <text x="42" y="45" textAnchor="middle" fontSize="24">🐍</text>
              <rect x="10" y="68" width="65" height="20" rx="4" fill={isPrint ? '#eee' : '#fce7f3'} />
              <text x="42" y="82" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Hewan D</text>
            </g>
          </g>
        </svg>
      );

    case 'k3-pkn-1': // Simbol Kepala Banteng Sila Keempat Pancasila (Heraldik Autentik)
      return (
        <svg viewBox="0 0 460 170" className="w-full h-auto max-h-52 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="shieldRedK3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="60%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
            <linearGradient id="hornGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="60%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>

          <rect width="460" height="170" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />

          {/* Header Label Lambang Negara */}
          <rect x="15" y="10" width="220" height="24" rx="6" fill={isPrint ? '#eee' : '#fee2e2'} />
          <text x="125" y="26" textAnchor="middle" fill={isPrint ? '#000' : '#991b1b'} fontSize="11" fontWeight="bold">LAMBANG PERISAI GARUDA PANCASILA</text>

          {/* Perisai Merah Sudut Kiri Atas di Tengah */}
          <g transform="translate(175, 24)">
            {/* Bayangan perisai */}
            <path d="M55 4 C95 4 105 14 105 60 C105 96 55 120 55 120 C55 120 5 96 5 60 C5 14 15 4 55 4 Z"
                  fill="#000000" opacity="0.15" transform="translate(2, 3)" />
            {/* Badan Perisai Merah */}
            <path d="M55 4 C95 4 105 14 105 60 C105 96 55 120 55 120 C55 120 5 96 5 60 C5 14 15 4 55 4 Z"
                  fill={isPrint ? '#ffffff' : 'url(#shieldRedK3)'}
                  stroke={isPrint ? '#000000' : '#f59e0b'}
                  strokeWidth="3.5" />
            <path d="M55 8 C90 8 99 17 99 58 C99 90 55 112 55 112 C55 112 11 90 11 58 C11 17 20 8 55 8 Z"
                  fill="none"
                  stroke={isPrint ? '#000' : '#fef08a'}
                  strokeWidth="1" opacity="0.6" />

            {/* Kepala Banteng Hitam Gagah Autentik */}
            <g transform="translate(55, 62)">
              {/* Tanduk Kiri Melengkung Kuat */}
              <path d="M-12 -6 C-30 -18 -42 -38 -28 -50 C-18 -50 -20 -28 -4 -16 Z"
                    fill="url(#hornGrad)" stroke={isPrint ? '#000' : '#0f172a'} strokeWidth="1.5" />
              {/* Tanduk Kanan Melengkung Kuat */}
              <path d="M12 -6 C30 -18 42 -38 28 -50 C18 -50 20 -28 4 -16 Z"
                    fill="url(#hornGrad)" stroke={isPrint ? '#000' : '#0f172a'} strokeWidth="1.5" />

              {/* Telinga Kiri & Kanan Terbentang Waspada */}
              <ellipse cx="-26" cy="4" rx="10" ry="6" fill="#0f172a" stroke={isPrint ? '#000' : '#334155'} strokeWidth="1" transform="rotate(-20 -26 4)" />
              <ellipse cx="26" cy="4" rx="10" ry="6" fill="#0f172a" stroke={isPrint ? '#000' : '#334155'} strokeWidth="1" transform="rotate(20 26 4)" />

              {/* Kepala Utama Banteng */}
              <path d="M-18 -12 L18 -12 L22 18 L14 34 L-14 34 L-22 18 Z"
                    fill="#0f172a" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="1.5" />

              {/* Moncong / Muka Depan */}
              <ellipse cx="0" cy="24" rx="14" ry="10" fill="#1e293b" />
              <circle cx="-6" cy="24" r="2.8" fill="#ffffff" />
              <circle cx="6" cy="24" r="2.8" fill="#ffffff" />

              {/* Mata Tegas & Alis Banteng */}
              <polygon points="-14,-2 -7,-4 -9,2" fill="#ffffff" />
              <circle cx="-10" cy="-1" r="1.5" fill="#000000" />
              <polygon points="14,-2 7,-4 9,2" fill="#ffffff" />
              <circle cx="10" cy="-1" r="1.5" fill="#000000" />
            </g>
          </g>

          {/* Kotak Pertanyaan & Informasi Sila di Kanan */}
          <g transform="translate(305, 50)">
            <rect x="0" y="0" width="140" height="72" rx="10" fill={isPrint ? '#eee' : '#fff1f2'} stroke={isPrint ? '#000' : '#fecdd3'} strokeWidth="1.5" />
            <text x="70" y="22" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">Simbol: Kepala Banteng</text>
            <rect x="15" y="32" width="110" height="26" rx="6" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" />
            <text x="70" y="50" textAnchor="middle" fill={textDark} fontSize="12" fontWeight="bold">Sila ke- [ ? ]</text>
          </g>

          {/* Keterangan Edukasi di Kiri Bawah */}
          <g transform="translate(15, 60)">
            <rect x="0" y="0" width="145" height="85" rx="8" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#ccc' : '#e2e8f0'} strokeWidth="1" />
            <text x="10" y="18" fill="#0f172a" fontSize="10" fontWeight="bold">Makna Simbol:</text>
            <text x="10" y="34" fill="#991b1b" fontSize="9" fontWeight="bold">🐂 Hewan Sosial Berkumpul</text>
            <text x="10" y="48" fill="#991b1b" fontSize="9" fontWeight="bold">👥 Musyawarah Mufakat</text>
            <text x="10" y="64" fill={textMuted} fontSize="8.5">• Berlatar warna merah berani</text>
            <text x="10" y="76" fill={textMuted} fontSize="8.5">• Mengambil keputusan bersama</text>
          </g>
        </svg>
      );

    case 'k3-pkn-2': // Keragaman Busana Nusantara
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Busana Adat Nusantara</text>

          {/* Tiga Anak Berpakaian Adat Daerah Berbeda Berdampingan Rukun */}
          <g transform="translate(100, 20)">
            {/* Anak 1 (Adat Jawa Beskap & Blangkon) */}
            <g transform="translate(20, 10)">
              <ellipse cx="25" cy="10" rx="14" ry="7" fill={isPrint ? '#000' : '#78350f'} />
              <circle cx="25" cy="22" r="11" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1" />
              <rect x="15" y="33" width="20" height="42" fill={isPrint ? '#666' : '#1e293b'} stroke={isPrint ? '#000' : '#0f172a'} strokeWidth="1.5" />
              <rect x="13" y="75" width="24" height="35" fill={isPrint ? '#ccc' : '#ca8a04'} stroke={isPrint ? '#000' : '#854d0e'} strokeWidth="1" />
              <text x="25" y="125" textAnchor="middle" fill={textMuted} fontSize="9">Adat Jawa</text>
            </g>

            {/* Anak 2 (Adat Minang Suntiang Emas) */}
            <g transform="translate(110, 10)">
              <polygon points="25,-6 5,14 45,14" fill={isPrint ? '#000' : '#f59e0b'} stroke={isPrint ? '#000' : '#b45309'} strokeWidth="1" />
              <circle cx="25" cy="22" r="11" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1" />
              <rect x="14" y="33" width="22" height="45" fill={isPrint ? '#666' : '#dc2626'} stroke={isPrint ? '#000' : '#b91c1c'} strokeWidth="1.5" />
              <rect x="12" y="78" width="26" height="32" fill={isPrint ? '#ccc' : '#eab308'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1" />
              <text x="25" y="125" textAnchor="middle" fill={textMuted} fontSize="9">Adat Minang</text>
            </g>

            {/* Anak 3 (Adat Bali Udeng) */}
            <g transform="translate(200, 10)">
              <ellipse cx="25" cy="11" rx="14" ry="5" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" />
              <circle cx="25" cy="22" r="11" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1" />
              <rect x="15" y="33" width="20" height="42" fill={isPrint ? '#666' : '#eab308'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" />
              <rect x="13" y="75" width="24" height="35" fill={isPrint ? '#ccc' : '#475569'} stroke={isPrint ? '#000' : '#334155'} strokeWidth="1" />
              <text x="25" y="125" textAnchor="middle" fill={textMuted} fontSize="9">Adat Bali</text>
            </g>
          </g>

          <rect x="325" y="55" width="120" height="38" rx="8" fill={isPrint ? '#eee' : '#f0fdf4'} stroke={isPrint ? '#000' : '#86efac'} strokeWidth="1.5" />
          <text x="385" y="72" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Semboyan Bangsa:</text>
          <text x="385" y="86" textAnchor="middle" fill={isPrint ? '#000' : '#15803d'} fontSize="10" fontWeight="bold">[ ? ]</text>
        </svg>
      );

    case 'k3-coding-1': // Blok Loop 4x Menggambar Bangun Datar
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="155" height="22" rx="6" fill={isPrint ? '#eee' : '#e0e7ff'} />
          <text x="92" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#3730a3'} fontSize="11" fontWeight="bold">Blok Kode Algoritma</text>

          {/* Blok Pemrograman Scratch (Loop) di Kiri */}
          <g transform="translate(45, 38)">
            {/* Header Loop */}
            <path d="M0 0 L180 0 L180 24 L50 24 L50 70 L180 70 L180 94 L0 94 Z" fill={isPrint ? '#fff' : '#f59e0b'} stroke={isPrint ? '#000' : '#d97706'} strokeWidth="1.5" />
            <text x="18" y="16" fill="#fff" fontSize="11" fontWeight="bold">repeat (4) times</text>

            {/* Blok Gerak 1: Maju 100 Langkah */}
            <rect x="52" y="26" width="125" height="20" rx="4" fill={isPrint ? '#ccc' : '#3b82f6'} stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="1" />
            <text x="60" y="40" fill="#fff" fontSize="10" fontWeight="bold">move (100) steps</text>

            {/* Blok Gerak 2: Belok Kanan 90 Derajat */}
            <rect x="52" y="48" width="125" height="20" rx="4" fill={isPrint ? '#ccc' : '#3b82f6'} stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="1" />
            <text x="60" y="62" fill="#fff" fontSize="10" fontWeight="bold">turn right ⟳ 90 deg</text>
          </g>

          {/* Tanda Panah ke Hasil Output Bangun */}
          <path d="M255 85 L285 85 M278 79 L285 85 L278 91" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2.5" strokeLinecap="round" />

          {/* Kotak Pertanyaan Hasil Bangun */}
          <g transform="translate(310, 42)">
            <rect x="0" y="0" width="125" height="90" rx="10" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="2" strokeDasharray="4 2" />
            <text x="62" y="32" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Bentuk Terbentuk:</text>
            <text x="62" y="60" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="20" fontWeight="bold">[ ? ]</text>
          </g>
        </svg>
      );

    case 'k3-coding-2': // Diagram Percabangan Logika: Hari Hujan / Tidak Hujan
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="155" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="92" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Diagram Percabangan</text>

          {/* Flowchart Diamond Kondisi di Tengah */}
          <g transform="translate(180, 20)">
            {/* Belah Ketupat (Decision) */}
            <polygon points="50,10 100,38 50,66 0,38" fill={isPrint ? '#fff' : '#fef08a'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" />
            <text x="50" y="34" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Apakah Hari</text>
            <text x="50" y="46" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Hujan?</text>

            {/* Cabang Kiri: YA (Bawa Payung) */}
            <line x1="0" y1="38" x2="-55" y2="38" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" />
            <line x1="-55" y1="38" x2="-55" y2="65" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" />
            <rect x="-105" y="65" width="100" height="42" rx="6" fill={isPrint ? '#fff' : '#dbeafe'} stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="1.5" />
            <text x="-55" y="82" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Bawa Payung ☔</text>
            <text x="-25" y="32" fill={isPrint ? '#000' : '#16a34a'} fontSize="10" fontWeight="bold">YA</text>

            {/* Cabang Kanan: TIDAK (Pakai Topi) */}
            <line x1="100" y1="38" x2="155" y2="38" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" />
            <line x1="155" y1="38" x2="155" y2="65" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" />
            <rect x="105" y="65" width="100" height="42" rx="6" fill={isPrint ? '#fff' : '#fef3c7'} stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="1.5" />
            <text x="155" y="82" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Pakai Topi 🧢</text>
            <text x="110" y="32" fill={isPrint ? '#000' : '#dc2626'} fontSize="10" fontWeight="bold">TIDAK</text>
          </g>

          <rect x="15" y="115" width="165" height="26" rx="6" fill={isPrint ? '#eee' : '#f0fdf4'} stroke={isPrint ? '#000' : '#86efac'} strokeWidth="1" />
          <text x="97" y="132" textAnchor="middle" fill={isPrint ? '#000' : '#166534'} fontSize="10" fontWeight="bold">Kondisi: ☀️ Terik Cerah</text>
        </svg>
      );

    case 'k3-inggris-1': // Weather Symbols: Sunny (A), Rainy (B), Cloudy (C), Windy (D)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="150" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="90" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Weather Symbols Card</text>

          {/* 4 Simbol Cuaca */}
          <g transform="translate(25, 42)">
            {/* Simbol (A): Sunny (Matahari Cerah) */}
            <g transform="translate(0, 0)">
              <rect x="0" y="0" width="85" height="96" rx="10" fill={isPrint ? '#fff' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
              <circle cx="42" cy="40" r="16" fill={isPrint ? '#eee' : '#f59e0b'} stroke={isPrint ? '#000' : '#d97706'} strokeWidth="1.5" />
              {/* Sinar Matahari */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
                <line key={i} x1="42" y1="16" x2="42" y2="10" stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="2" strokeLinecap="round" transform={`rotate(${ang} 42 40)`} />
              ))}
              <rect x="12" y="70" width="61" height="18" rx="4" fill={isPrint ? '#eee' : '#fef3c7'} />
              <text x="42" y="83" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Symbol (A)</text>
            </g>

            {/* Simbol (B): Rainy */}
            <g transform="translate(112, 0)">
              <rect x="0" y="0" width="85" height="96" rx="10" fill={isPrint ? '#fff' : '#eff6ff'} stroke={isPrint ? '#000' : '#bfdbfe'} strokeWidth="1.5" />
              <ellipse cx="42" cy="35" rx="22" ry="14" fill={isPrint ? '#cbd5e1' : '#94a3b8'} />
              <line x1="30" y1="52" x2="25" y2="65" stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="2" strokeLinecap="round" />
              <line x1="42" y1="52" x2="37" y2="65" stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="2" strokeLinecap="round" />
              <line x1="54" y1="52" x2="49" y2="65" stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="2" strokeLinecap="round" />
              <rect x="12" y="70" width="61" height="18" rx="4" fill={isPrint ? '#eee' : '#dbeafe'} />
              <text x="42" y="83" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Symbol (B)</text>
            </g>

            {/* Simbol (C): Cloudy */}
            <g transform="translate(224, 0)">
              <rect x="0" y="0" width="85" height="96" rx="10" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
              <ellipse cx="42" cy="38" rx="26" ry="16" fill={isPrint ? '#cbd5e1' : '#cbd5e1'} />
              <circle cx="30" cy="32" r="14" fill={isPrint ? '#cbd5e1' : '#cbd5e1'} />
              <circle cx="52" cy="34" r="12" fill={isPrint ? '#cbd5e1' : '#cbd5e1'} />
              <rect x="12" y="70" width="61" height="18" rx="4" fill={isPrint ? '#eee' : '#e2e8f0'} />
              <text x="42" y="83" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Symbol (C)</text>
            </g>

            {/* Simbol (D): Windy */}
            <g transform="translate(336, 0)">
              <rect x="0" y="0" width="85" height="96" rx="10" fill={isPrint ? '#fff' : '#f0fdf4'} stroke={isPrint ? '#000' : '#bbf7d0'} strokeWidth="1.5" />
              <path d="M20 32 C45 32 55 25 50 20" fill="none" stroke={isPrint ? '#000' : '#14b8a6'} strokeWidth="2.5" strokeLinecap="round" />
              <path d="M15 42 C50 42 65 38 60 48" fill="none" stroke={isPrint ? '#000' : '#14b8a6'} strokeWidth="2.5" strokeLinecap="round" />
              <path d="M25 52 C45 52 58 58 52 62" fill="none" stroke={isPrint ? '#000' : '#14b8a6'} strokeWidth="2.5" strokeLinecap="round" />
              <rect x="12" y="70" width="61" height="18" rx="4" fill={isPrint ? '#eee' : '#ccfbf1'} />
              <text x="42" y="83" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Symbol (D)</text>
            </g>
          </g>
        </svg>
      );

    case 'k3-inggris-2': // Traffic Road Signs: Stop, Turn Left, and No Entry (Sign ?)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="150" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="90" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Traffic Road Safety Signs</text>

          {/* Tiga Rambu Lalu Lintas */}
          <g transform="translate(45, 38)">
            {/* Rambu 1: STOP */}
            <g transform="translate(0, 0)">
              <rect x="0" y="0" width="105" height="105" rx="10" fill={isPrint ? '#fff' : '#fef2f2'} stroke={isPrint ? '#000' : '#fca5a5'} strokeWidth="1.5" />
              <polygon points="52,18 78,28 88,52 78,76 52,86 26,76 16,52 26,28" fill={isPrint ? '#000' : '#ef4444'} stroke={isPrint ? '#000' : '#b91c1c'} strokeWidth="1.5" />
              <text x="52" y="56" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="black">STOP</text>
            </g>

            {/* Rambu 2: Turn Left */}
            <g transform="translate(130, 0)">
              <rect x="0" y="0" width="105" height="105" rx="10" fill={isPrint ? '#fff' : '#eff6ff'} stroke={isPrint ? '#000' : '#bfdbfe'} strokeWidth="1.5" />
              <circle cx="52" cy="52" r="34" fill={isPrint ? '#000' : '#2563eb'} />
              <path d="M65 65 L65 52 L42 52 M50 44 L40 52 L50 60" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Rambu 3: No Entry (Lingkaran Merah Garis Putih) */}
            <g transform="translate(260, 0)">
              <rect x="0" y="0" width="115" height="105" rx="10" fill={isPrint ? '#eee' : '#fff1f2'} stroke={isPrint ? '#000' : '#fda4af'} strokeWidth="2" strokeDasharray="4 2" />
              <circle cx="57" cy="52" r="34" fill={isPrint ? '#000' : '#dc2626'} stroke={isPrint ? '#000' : '#b91c1c'} strokeWidth="1.5" />
              <rect x="32" y="47" width="50" height="10" rx="2" fill="#ffffff" />
              <text x="57" y="98" textAnchor="middle" fill={isPrint ? '#000' : '#991b1b'} fontSize="11" fontWeight="bold">Sign: [ ? ]</text>
            </g>
          </g>
        </svg>
      );

    case 'k3-sbdp-1': // Tangga Nada Diatonis: 1 (Do) s.d. 1̇ (Do tinggi)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Tangga Nada Diatonis Mayor</text>

          {/* Garis Pranada & Tangga Nada Bertingkat */}
          <g transform="translate(30, 42)">
            {[
              { num: '1', h: 30, x: 20 },
              { num: '2', h: 40, x: 65 },
              { num: '3', h: 50, x: 110 },
              { num: '4', h: 60, x: 155 },
              { num: '5', h: 70, x: 200 },
              { num: '6', h: 80, x: 245 },
              { num: '7', h: 90, x: 290 },
              { num: '1̇', h: 100, x: 335 },
            ].map((step, i) => (
              <g key={i}>
                <rect x={step.x - 18} y={105 - step.h} width="36" height={step.h} rx="5" 
                      fill={isPrint ? '#fff' : ((step.num === '1' || step.num === '5') ? '#dbeafe' : '#f1f5f9')} 
                      stroke={isPrint ? '#000' : ((step.num === '1' || step.num === '5') ? '#2563eb' : '#cbd5e1')} 
                      strokeWidth={(step.num === '1' || step.num === '5') ? 2 : 1.5} />
                <circle cx={step.x} cy={105 - step.h - 10} r="8" fill={isPrint ? '#000' : ((step.num === '1' || step.num === '5') ? '#2563eb' : '#64748b')} />
                <text x={step.x} y={105 - step.h - 6} textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">{step.num}</text>
                <text x={step.x} y="122" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">{step.num}</text>
              </g>
            ))}
          </g>
        </svg>
      );

    case 'k3-sbdp-2': // Motif Batik Parang (Tanpa teks "BATIK PARANG")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#fefce8'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#854d0e'} fontSize="11" fontWeight="bold">Motif Kain Batik Nusantara</text>

          {/* Pola Diagonal Garis Ombak Karang Parang */}
          <g transform="translate(140, 20)">
            <rect x="0" y="0" width="180" height="120" rx="8" fill={isPrint ? '#fff' : '#fef3c7'} stroke={isPrint ? '#000' : '#b45309'} strokeWidth="2" />
            
            {/* Garis-garis Diagonal Bergelombang Karang */}
            {[20, 50, 80, 110, 140, 170].map((x, i) => (
              <g key={i}>
                <line x1={x} y1="0" x2={x - 60} y2="120" stroke={isPrint ? '#000' : '#78350f'} strokeWidth="3" />
                {/* Lekukan Lidah Ombak / Parang */}
                <ellipse cx={x - 15} cy="30" rx="6" ry="12" fill={isPrint ? '#ccc' : '#92400e'} transform={`rotate(-25 ${x - 15} 30)`} />
                <ellipse cx={x - 35} cy="70" rx="6" ry="12" fill={isPrint ? '#ccc' : '#92400e'} transform={`rotate(-25 ${x - 35} 70)`} />
              </g>
            ))}
          </g>

          <rect x="330" y="55" width="120" height="38" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
          <text x="390" y="72" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Corak Diagonal</text>
          <text x="390" y="86" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="10" fontWeight="bold">Nama Motif: [ ? ]</text>
        </svg>
      );

    case 'k3-pjok-1': // Gerakan Renang Gaya Dada (Tanpa tulisan "Gaya Katak (Jawaban)")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="150" height="22" rx="6" fill={isPrint ? '#eee' : '#e0f2fe'} />
          <text x="90" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#0369a1'} fontSize="11" fontWeight="bold">Teknik Renang Siswa</text>

          {/* Atlet Renang di Kolam Air */}
          <g transform="translate(130, 25)">
            {/* Air Kolam Berombak */}
            <path d="M-20 65 Q20 55 60 65 T140 65 T220 65" fill="none" stroke={isPrint ? '#000' : '#38bdf8'} strokeWidth="2.5" />
            
            {/* Kepala Perenang */}
            <circle cx="160" cy="45" r="12" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1.5" />
            <circle cx="160" cy="42" r="11" fill={isPrint ? '#000' : '#3b82f6'} /> {/* Topi renang */}
            
            {/* Badan Perenang Mengapung */}
            <ellipse cx="110" cy="55" rx="42" ry="14" fill={isPrint ? '#eee' : '#0284c7'} stroke={isPrint ? '#000' : '#0369a1'} strokeWidth="2" />
            
            {/* Rentangan Lengan Membelah Air */}
            <path d="M140 50 Q160 30 185 45" fill="none" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="3.5" strokeLinecap="round" />

            {/* Gerakan Kaki Melingkar Menendang Mirip Katak */}
            <path d="M70 55 Q45 40 30 65" fill="none" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="3.5" strokeLinecap="round" />
            <path d="M70 55 Q45 70 30 45" fill="none" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="3.5" strokeLinecap="round" />
            {/* Panah Gerak Kaki Melingkar */}
            <path d="M25 50 Q15 55 25 60" fill="none" stroke={isPrint ? '#000' : '#16a34a'} strokeWidth="2" strokeDasharray="3 2" />
          </g>

          <rect x="315" y="55" width="130" height="38" rx="8" fill={isPrint ? '#eee' : '#eff6ff'} stroke={isPrint ? '#000' : '#bfdbfe'} strokeWidth="1.5" />
          <text x="380" y="72" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Gerakan Kaki:</text>
          <text x="380" y="86" textAnchor="middle" fill={isPrint ? '#000' : '#1d4ed8'} fontSize="10" fontWeight="bold">Menyerupai [ ? ]</text>
        </svg>
      );

    case 'k3-pjok-2': // Lompat Kangkang Senam Ketangkasan Peti Lompat
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Senam Ketangkasan Siswa</text>

          {/* Peti Lompat & Siswa Melompati dengan Kaki Kangkang */}
          <g transform="translate(160, 20)">
            <line x1="-40" y1="115" x2="160" y2="115" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="2" />

            {/* Peti Lompat Kayu Bertingkat */}
            <polygon points="35,55 85,55 95,115 25,115" fill={isPrint ? '#eee' : '#ca8a04'} stroke={isPrint ? '#000' : '#854d0e'} strokeWidth="2" />
            <line x1="30" y1="75" x2="90" y2="75" stroke={isPrint ? '#000' : '#a16207'} strokeWidth="1.5" />
            <line x1="27" y1="95" x2="93" y2="95" stroke={isPrint ? '#000' : '#a16207'} strokeWidth="1.5" />

            {/* Siswa Melompat di Atas Peti Lompat */}
            <circle cx="60" cy="18" r="10" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1.5" />
            <line x1="60" y1="28" x2="60" y2="50" stroke={isPrint ? '#000' : '#dc2626'} strokeWidth="4" />
            
            {/* Tangan Bertumpu di Peti */}
            <line x1="60" y1="36" x2="45" y2="55" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="3" />
            <line x1="60" y1="36" x2="75" y2="55" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="3" />

            {/* Kaki Kangkang Melebar ke Samping Luar Peti */}
            <line x1="60" y1="50" x2="20" y2="60" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3.5" strokeLinecap="round" />
            <line x1="60" y1="50" x2="100" y2="60" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="3.5" strokeLinecap="round" />
          </g>

          <rect x="310" y="55" width="135" height="38" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
          <text x="377" y="72" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Rintangan Peti Lompat</text>
          <text x="377" y="86" textAnchor="middle" fill={textMuted} fontSize="10">Nama Gerakan: [ ? ]</text>
        </svg>
      );

    case 'k3-sunda-1': // Pakakas Dapur Sunda: Boboko Anyaman Awi Wadah Sangu
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="180" height="22" rx="6" fill={isPrint ? '#eee' : '#ccfbf1'} />
          <text x="105" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#0f766e'} fontSize="11" fontWeight="bold">Pakakas Dapur Tradisional Sunda</text>

          {/* Gambar Boboko Anyaman Awi Wadah Sangu */}
          <g transform="translate(145, 25)">
            {/* Tutup / Bibir Atas Buleud Melengkung */}
            <ellipse cx="85" cy="22" rx="65" ry="14" fill={isPrint ? '#eee' : '#fef3c7'} stroke={isPrint ? '#000' : '#d97706'} strokeWidth="2.5" />
            <ellipse cx="85" cy="22" rx="55" ry="10" fill={isPrint ? '#fff' : '#fefce8'} stroke={isPrint ? '#000' : '#b45309'} strokeWidth="1.5" strokeDasharray="3 2" />

            {/* Awak Boboko Anyaman Awi */}
            <path d="M 20 22 Q 40 75, 55 95 L 115 95 Q 130 75, 150 22 Z" fill={isPrint ? '#fff' : '#fde68a'} stroke={isPrint ? '#000' : '#b45309'} strokeWidth="2.5" />

            {/* Motif Anyaman Awi Kepang/Sasag */}
            <line x1="42" y1="40" x2="128" y2="40" stroke={isPrint ? '#aaa' : '#d97706'} strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="50" y1="60" x2="120" y2="60" stroke={isPrint ? '#aaa' : '#d97706'} strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="58" y1="80" x2="112" y2="80" stroke={isPrint ? '#aaa' : '#d97706'} strokeWidth="1.5" strokeDasharray="4 3" />
            
            {/* Garis Anyaman Vertikal Silang */}
            <line x1="60" y1="28" x2="70" y2="95" stroke={isPrint ? '#aaa' : '#d97706'} strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="85" y1="30" x2="85" y2="95" stroke={isPrint ? '#aaa' : '#d97706'} strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="110" y1="28" x2="100" y2="95" stroke={isPrint ? '#aaa' : '#d97706'} strokeWidth="1.5" strokeDasharray="4 3" />

            {/* Soko / Jambangan Handap Pasagi */}
            <rect x="52" y="95" width="66" height="15" rx="3" fill={isPrint ? '#ccc' : '#b45309'} stroke={isPrint ? '#000' : '#78350f'} strokeWidth="2" />
          </g>

          <rect x="300" y="55" width="145" height="42" rx="8" fill={isPrint ? '#eee' : '#f0fdf4'} stroke={isPrint ? '#000' : '#bbf7d0'} strokeWidth="1.5" />
          <text x="372" y="73" textAnchor="middle" fill={textDark} fontSize="10.5" fontWeight="bold">Anyaman Awi Wadah Sangu</text>
          <text x="372" y="88" textAnchor="middle" fill={isPrint ? '#000' : '#059669'} fontSize="10" fontWeight="bold">Nami Pakakas: [ ? ]</text>
        </svg>
      );

    case 'k3-daerah-1': // Aksara Jawa Dentawyanjana: Ha Na Ca Ra Ka
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#fefce8'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#854d0e'} fontSize="11" fontWeight="bold">Aksara Jawa Dentawyanjana</text>

          {/* 5 Aksara Baris Kapisan */}
          <g transform="translate(35, 42)">
            {[
              { char: 'ꦲ', latin: 'Ha' },
              { char: 'ꦤ', latin: 'Na' },
              { char: 'ꦕ', latin: 'Ca' },
              { char: 'ꦫ', latin: 'Ra' },
              { char: 'ꦏ', latin: 'Ka' },
            ].map((item, i) => (
              <g key={i} transform={`translate(${i * 78}, 0)`}>
                <rect x="0" y="0" width="70" height="96" rx="10" fill={isPrint ? '#fff' : (i === 0 ? '#fef3c7' : '#ffffff')} stroke={isPrint ? '#000' : (i === 0 ? '#f59e0b' : '#cbd5e1')} strokeWidth={i === 0 ? 2 : 1.5} />
                <text x="35" y="48" textAnchor="middle" fill={isPrint ? '#000' : '#0f172a'} fontSize="26" fontWeight="bold">{item.char}</text>
                <rect x="15" y="68" width="40" height="18" rx="4" fill={isPrint ? '#eee' : '#f1f5f9'} />
                <text x="35" y="81" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">{item.latin}</text>
              </g>
            ))}
          </g>
        </svg>
      );

    case 'k3-daerah-2': // Omah Adat Jawa (Rumah Joglo) (Tanpa tulisan "Rumah Joglo (Jawa)")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#fefce8'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#854d0e'} fontSize="11" fontWeight="bold">Omah Adat Tradisional</text>

          {/* Gambar Arsitektur Rumah Tradisional Jawa (Joglo) */}
          <g transform="translate(130, 20)">
            <line x1="-30" y1="115" x2="230" y2="115" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="2" />

            {/* Atap Tajug / Trapesium Menjulang Tinggi (Khas Joglo) */}
            <polygon points="100,10 60,40 140,40" fill={isPrint ? '#eee' : '#b45309'} stroke={isPrint ? '#000' : '#78350f'} strokeWidth="2" />
            {/* Atap Bawah Rendah Melandai */}
            <polygon points="60,40 140,40 190,75 10,75" fill={isPrint ? '#eee' : '#d97706'} stroke={isPrint ? '#000' : '#92400e'} strokeWidth="2" />

            {/* Soko Guru (4 Tiang Penyangga Utama di Pendhapa) */}
            <line x1="50" y1="75" x2="50" y2="115" stroke={isPrint ? '#000' : '#78350f'} strokeWidth="4.5" strokeLinecap="round" />
            <line x1="85" y1="75" x2="85" y2="115" stroke={isPrint ? '#000' : '#78350f'} strokeWidth="4.5" strokeLinecap="round" />
            <line x1="115" y1="75" x2="115" y2="115" stroke={isPrint ? '#000' : '#78350f'} strokeWidth="4.5" strokeLinecap="round" />
            <line x1="150" y1="75" x2="150" y2="115" stroke={isPrint ? '#000' : '#78350f'} strokeWidth="4.5" strokeLinecap="round" />

            {/* Pendhapa Luas di Depan */}
            <rect x="30" y="105" width="140" height="10" fill={isPrint ? '#ccc' : '#ca8a04'} stroke={isPrint ? '#000' : '#854d0e'} strokeWidth="1" />
          </g>

          <rect x="310" y="55" width="135" height="38" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
          <text x="377" y="72" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Ciri: Payon Dhuwur</text>
          <text x="377" y="86" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="10" fontWeight="bold">Jeneng Omah: [ ? ]</text>
        </svg>
      );

    default:
      return null;
  }
};
