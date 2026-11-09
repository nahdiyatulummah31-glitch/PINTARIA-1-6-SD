import React from 'react';

export const renderGrade5Svg = (key: string, isPrint = false): React.ReactElement | null => {
  const strokeColor = isPrint ? '#000000' : '#cbd5e1';
  const bgCard = isPrint ? '#ffffff' : '#f8fafc';
  const textDark = isPrint ? '#000000' : '#1e293b';
  const textMuted = isPrint ? '#333333' : '#64748b';

  let normKey = key;
  if (normKey === 'k5-sunda-1' || normKey === 'k5-sunda-2') normKey = 'k5-daerah-1';
  if (normKey === 'k5-jawa-1' || normKey === 'k5-jawa-2') normKey = 'k5-daerah-2';

  switch (normKey) {
    case 'k5-mtk-1': // Jaring-Jaring Kubus 6 Persegi Bentuk Salib (Tanpa teks "Kubus")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#e0e7ff'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#3730a3'} fontSize="11" fontWeight="bold">Jaring-Jaring Bangun Ruang</text>

          {/* Jaring-Jaring 6 Persegi Identik di Tengah */}
          <g transform="translate(130, 25)">
            {/* Kolom Tengah (4 Persegi Vertikal: y = 0, 28, 56, 84) */}
            <rect x="56" y="0" width="28" height="28" fill={isPrint ? '#fff' : '#dbeafe'} stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="1.5" />
            <text x="70" y="18" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">1</text>

            <rect x="56" y="28" width="28" height="28" fill={isPrint ? '#fff' : '#eff6ff'} stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="1.5" />
            <text x="70" y="46" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">2</text>

            <rect x="56" y="56" width="28" height="28" fill={isPrint ? '#fff' : '#eff6ff'} stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="1.5" />
            <text x="70" y="74" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">3</text>

            <rect x="56" y="84" width="28" height="28" fill={isPrint ? '#fff' : '#dbeafe'} stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="1.5" />
            <text x="70" y="102" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">4</text>

            {/* Sayap Kiri (Persegi ke-5 di samping nomor 2) */}
            <rect x="28" y="28" width="28" height="28" fill={isPrint ? '#fff' : '#eff6ff'} stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="1.5" />
            <text x="42" y="46" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">5</text>

            {/* Sayap Kanan (Persegi ke-6 di samping nomor 2) */}
            <rect x="84" y="28" width="28" height="28" fill={isPrint ? '#fff' : '#eff6ff'} stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="1.5" />
            <text x="98" y="46" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">6</text>

            {/* Garis Lipatan Putus-Putus */}
            <line x1="56" y1="28" x2="84" y2="28" stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="2" strokeDasharray="3 2" />
            <line x1="56" y1="56" x2="84" y2="56" stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="2" strokeDasharray="3 2" />
            <line x1="56" y1="84" x2="84" y2="84" stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="2" strokeDasharray="3 2" />
            <line x1="56" y1="28" x2="56" y2="56" stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="2" strokeDasharray="3 2" />
            <line x1="84" y1="28" x2="84" y2="56" stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="2" strokeDasharray="3 2" />
          </g>

          <rect x="305" y="55" width="140" height="45" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
          <text x="375" y="73" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">6 Persegi Kongruen</text>
          <text x="375" y="90" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="11" fontWeight="bold">Bangun Ruang: [ ? ]</text>
        </svg>
      );

    case 'k5-mtk-2': // Diagram Batang Hasil Panen Padi 5 Tahun
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Hasil Panen Padi (Ton)</text>

          {/* Diagram Batang */}
          <g transform="translate(60, 35)">
            {/* Sumbu Y & Sumbu X */}
            <line x1="30" y1="10" x2="30" y2="95" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
            <line x1="30" y1="95" x2="350" y2="95" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />

            {/* Skala Sumbu Y (0, 20, 40, 60 Ton) */}
            <text x="22" y="98" textAnchor="end" fill={textMuted} fontSize="9">0</text>
            <text x="22" y="65" textAnchor="end" fill={textMuted} fontSize="9">25</text>
            <text x="22" y="25" textAnchor="end" fill={textMuted} fontSize="9">50</text>
            <line x1="27" y1="62" x2="350" y2="62" stroke={isPrint ? '#ccc' : '#e2e8f0'} strokeWidth="1" strokeDasharray="3 2" />
            <line x1="27" y1="22" x2="350" y2="22" stroke={isPrint ? '#ccc' : '#e2e8f0'} strokeWidth="1" strokeDasharray="3 2" />

            {/* 5 Batang Data: 2021 (30), 2022 (25), 2023 (40), 2024 (35), 2025 (50) */}
            {[
              { yr: '2021', val: 30, h: 42, x: 50 },
              { yr: '2022', val: 25, h: 35, x: 110 },
              { yr: '2023', val: 40, h: 56, x: 170 },
              { yr: '2024', val: 35, h: 49, x: 230 },
              { yr: '2025', val: 50, h: 73, x: 290 },
            ].map((bar, i) => (
              <g key={i}>
                <rect x={bar.x} y={95 - bar.h} width="36" height={bar.h} rx="3" 
                      fill={isPrint ? (bar.val === 50 ? '#000' : '#ccc') : (bar.val === 50 ? '#3b82f6' : '#93c5fd')} 
                      stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="1.5" />
                <text x={bar.x + 18} y={90 - bar.h} textAnchor="middle" fill={textDark} fontSize="9" fontWeight="bold">{bar.val}</text>
                <text x={bar.x + 18} y="110" textAnchor="middle" fill={textDark} fontSize="10">{bar.yr}</text>
              </g>
            ))}
          </g>
        </svg>
      );

    case 'k5-indo-1': // Poster Iklan Layanan Masyarakat
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="160" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="95" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Poster Informasi Publik</text>

          {/* Lembar Poster Iklan di Tengah */}
          <g transform="translate(130, 20)">
            <rect x="0" y="0" width="200" height="120" rx="8" fill={isPrint ? '#fff' : '#fefce8'} stroke={isPrint ? '#000' : '#eab308'} strokeWidth="2" />
            
            {/* Lampu Bohlam */}
            <circle cx="100" cy="40" r="18" fill={isPrint ? '#eee' : '#facc15'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1.5" />
            <rect x="94" y="58" width="12" height="8" rx="2" fill={isPrint ? '#666' : '#64748b'} />
            
            {/* Tulisan Iklan Poster */}
            <text x="100" y="82" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="11" fontWeight="black">MATIKAN LAMPU!</text>
            <text x="100" y="98" textAnchor="middle" fill={textDark} fontSize="9">Jika Ruangan Tidak Digunakan</text>
            <text x="100" y="112" textAnchor="middle" fill={isPrint ? '#000' : '#15803d'} fontSize="8" fontWeight="bold">Hemat Energi, Sayangi Bumi</text>
          </g>

          <rect x="345" y="55" width="105" height="42" rx="8" fill={isPrint ? '#eee' : '#f0fdf4'} stroke={isPrint ? '#000' : '#86efac'} strokeWidth="1.5" />
          <text x="397" y="73" textAnchor="middle" fill={textDark} fontSize="10">Kategori Teks:</text>
          <text x="397" y="89" textAnchor="middle" fill={isPrint ? '#000' : '#15803d'} fontSize="11" fontWeight="bold">Iklan Layanan</text>
        </svg>
      );

    case 'k5-indo-2': // Pantun 4 Baris: Baris 1-2 Sampiran, Baris 3-4 Isi
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="150" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="90" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Struktur Bait Pantun</text>

          {/* Kotak Teks Pantun 4 Baris */}
          <g transform="translate(45, 38)">
            <rect x="0" y="0" width="280" height="105" rx="8" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
            
            {/* Baris 1 & 2: Sampiran */}
            <text x="15" y="24" fill={textDark} fontSize="10">Baris 1: Pergi ke pasar membeli kain (<tspan fontWeight="bold" fill={isPrint ? '#000' : '#2563eb'}>a</tspan>)</text>
            <text x="15" y="46" fill={textDark} fontSize="10">Baris 2: Jangan lupa membeli batu (<tspan fontWeight="bold" fill={isPrint ? '#000' : '#dc2626'}>b</tspan>)</text>
            <line x1="10" y1="56" x2="270" y2="56" stroke={isPrint ? '#ccc' : '#e2e8f0'} strokeWidth="1" strokeDasharray="3 2" />

            {/* Baris 3 & 4: Isi */}
            <text x="15" y="74" fill={textDark} fontSize="10">Baris 3: Patuhilah nasihat orang lain (<tspan fontWeight="bold" fill={isPrint ? '#000' : '#2563eb'}>a</tspan>)</text>
            <text x="15" y="96" fill={textDark} fontSize="10">Baris 4: Agar selamat sepanjang waktu (<tspan fontWeight="bold" fill={isPrint ? '#000' : '#dc2626'}>b</tspan>)</text>
          </g>

          <rect x="340" y="55" width="110" height="42" rx="8" fill={isPrint ? '#eee' : '#eff6ff'} stroke={isPrint ? '#000' : '#bfdbfe'} strokeWidth="1.5" />
          <text x="395" y="73" textAnchor="middle" fill={textDark} fontSize="10">Rima Persajakan:</text>
          <text x="395" y="89" textAnchor="middle" fill={isPrint ? '#000' : '#1d4ed8'} fontSize="13" fontWeight="bold">[ ? ]</text>
        </svg>
      );

    case 'k5-ipas-1': // Sistem Pencernaan: Mulut -> Kerongkongan -> Lambung -> Usus Halus -> Usus Besar
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#e0e7ff'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#3730a3'} fontSize="11" fontWeight="bold">Sistem Pencernaan Manusia</text>

          {/* Alur 5 Organ Pencernaan */}
          <g transform="translate(15, 42)">
            {[
              { num: '1', name: 'Mulut', icon: '👄', x: 0 },
              { num: '2', name: 'Kerongkongan', icon: '🧣', x: 86 },
              { num: '3', name: 'Lambung', icon: '🫁', x: 172 },
              { num: '4', name: 'Usus Halus', icon: '🥨', x: 258 },
              { num: '5', name: 'Usus Besar', icon: '🔄', x: 344 },
            ].map((org, i) => (
              <g key={i} transform={`translate(${org.x}, 0)`}>
                <rect x="0" y="0" width="80" height="96" rx="8" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
                <circle cx="40" cy="22" r="11" fill={isPrint ? '#000' : '#3b82f6'} />
                <text x="40" y="26" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">{org.num}</text>
                <text x="40" y="52" textAnchor="middle" fontSize="18">{org.icon}</text>
                <text x="40" y="80" textAnchor="middle" fill={textDark} fontSize="9" fontWeight="bold">{org.name}</text>
                {i < 4 && (
                  <path d="M82 48 L86 48 M84 45 L86 48 L84 51" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2" strokeLinecap="round" />
                )}
              </g>
            ))}
          </g>
        </svg>
      );

    case 'k5-ipas-2': // Rangkaian Listrik: Model (A) Seri vs Model (B) Paralel (Tanpa teks bocoran)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Dua Model Rangkaian Listrik</text>

          {/* Model Rangkaian (A): Jalur Tunggal Berderet */}
          <g transform="translate(35, 38)">
            <rect x="0" y="0" width="185" height="105" rx="10" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
            <text x="92" y="20" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Rangkaian (A)</text>
            
            {/* Kawat Loop Tunggal */}
            <rect x="25" y="30" width="135" height="50" rx="4" fill="none" stroke={isPrint ? '#000' : '#334155'} strokeWidth="2" />
            {/* Baterai di Kiri */}
            <rect x="18" y="45" width="14" height="20" rx="2" fill={isPrint ? '#000' : '#ca8a04'} />
            {/* 2 Lampu Berderet di Kawat Atas */}
            <circle cx="70" cy="30" r="9" fill={isPrint ? '#fff' : '#fef08a'} stroke={isPrint ? '#000' : '#eab308'} strokeWidth="1.5" />
            <circle cx="115" cy="30" r="9" fill={isPrint ? '#fff' : '#fef08a'} stroke={isPrint ? '#000' : '#eab308'} strokeWidth="1.5" />
            <text x="92" y="95" textAnchor="middle" fill={textMuted} fontSize="9">1 Jalur Tanpa Cabang</text>
          </g>

          {/* Model Rangkaian (B): Memiliki Percabangan Paralel */}
          <g transform="translate(240, 38)">
            <rect x="0" y="0" width="185" height="105" rx="10" fill={isPrint ? '#fff' : '#f8fafc'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
            <text x="92" y="20" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Rangkaian (B)</text>
            
            {/* Kawat Utama & Cabang Paralel */}
            <line x1="25" y1="35" x2="160" y2="35" stroke={isPrint ? '#000' : '#334155'} strokeWidth="2" />
            <line x1="25" y1="75" x2="160" y2="75" stroke={isPrint ? '#000' : '#334155'} strokeWidth="2" />
            <line x1="25" y1="35" x2="25" y2="75" stroke={isPrint ? '#000' : '#334155'} strokeWidth="2" />
            <line x1="160" y1="35" x2="160" y2="75" stroke={isPrint ? '#000' : '#334155'} strokeWidth="2" />
            {/* Baterai */}
            <rect x="18" y="45" width="14" height="20" rx="2" fill={isPrint ? '#000' : '#ca8a04'} />
            {/* Cabang Lampu 1 (Atas) & Lampu 2 (Bawah) */}
            <circle cx="95" cy="35" r="9" fill={isPrint ? '#fff' : '#fef08a'} stroke={isPrint ? '#000' : '#eab308'} strokeWidth="1.5" />
            <circle cx="95" cy="75" r="9" fill={isPrint ? '#fff' : '#fef08a'} stroke={isPrint ? '#000' : '#eab308'} strokeWidth="1.5" />
            <text x="92" y="95" textAnchor="middle" fill={textMuted} fontSize="9">Memiliki Percabangan</text>
          </g>
        </svg>
      );

    case 'k5-pkn-1': // Peta Kedaulatan Kepulauan Indonesia (NKRI)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#fee2e2'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#991b1b'} fontSize="11" fontWeight="bold">Peta Kedaulatan Nusantara</text>

          {/* Peta Gugusan Pulau Indonesia */}
          <g transform="translate(60, 35)">
            {/* Garis Khatulistiwa */}
            <line x1="0" y1="45" x2="340" y2="45" stroke={isPrint ? '#ccc' : '#fecdd3'} strokeWidth="1.5" strokeDasharray="4 2" />

            {/* Pulau Sumatera (Kiri Miring) */}
            <polygon points="10,20 40,55 30,85 15,40" fill={isPrint ? '#666' : '#15803d'} stroke={isPrint ? '#000' : '#166534'} strokeWidth="1.5" />
            <text x="18" y="98" fill={textMuted} fontSize="8">Sumatera</text>

            {/* Pulau Jawa (Bawah Memanjang) */}
            <rect x="50" y="85" width="85" height="12" rx="3" fill={isPrint ? '#666' : '#15803d'} stroke={isPrint ? '#000' : '#166534'} strokeWidth="1.5" />
            <text x="90" y="108" fill={textMuted} fontSize="8">Jawa</text>

            {/* Pulau Kalimantan (Tengah Besar) */}
            <polygon points="90,15 145,15 150,55 95,50" fill={isPrint ? '#666' : '#15803d'} stroke={isPrint ? '#000' : '#166534'} strokeWidth="1.5" />
            <text x="120" y="65" fill={textMuted} fontSize="8">Kalimantan</text>

            {/* Pulau Sulawesi (Bentuk K) */}
            <path d="M170 30 L185 30 L185 70 L170 70 M185 45 L200 35 M185 55 L200 65" fill="none" stroke={isPrint ? '#000' : '#15803d'} strokeWidth="4" strokeLinecap="round" />
            <text x="185" y="82" fill={textMuted} fontSize="8">Sulawesi</text>

            {/* Kepulauan Maluku & Papua (Kanan) */}
            <polygon points="250,30 310,35 320,80 260,75" fill={isPrint ? '#666' : '#15803d'} stroke={isPrint ? '#000' : '#166534'} strokeWidth="1.5" />
            <text x="285" y="92" fill={textMuted} fontSize="8">Papua</text>
          </g>

          <rect x="15" y="125" width="430" height="22" rx="4" fill={isPrint ? '#eee' : '#fff1f2'} />
          <text x="230" y="140" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Dari Sabang di ujung barat hingga Merauke di ujung timur</text>
        </svg>
      );

    case 'k5-pkn-2': // Timbangan Hak dan Kewajiban Seimbang
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Timbangan Keseimbangan</text>

          {/* Timbangan Hak dan Kewajiban Posisi Seimbang Horizontal */}
          <g transform="translate(130, 20)">
            {/* Tiang Utama Penyangga Timbangan */}
            <line x1="100" y1="35" x2="100" y2="115" stroke={isPrint ? '#000' : '#334155'} strokeWidth="5" strokeLinecap="round" />
            <polygon points="75,115 125,115 100,95" fill={isPrint ? '#ccc' : '#64748b'} stroke={isPrint ? '#000' : '#334155'} strokeWidth="1.5" />
            
            {/* Lengan Timbangan Rata Mendatar (Seimbang) */}
            <line x1="20" y1="35" x2="180" y2="35" stroke={isPrint ? '#000' : '#334155'} strokeWidth="4" strokeLinecap="round" />
            <circle cx="100" cy="35" r="5" fill={isPrint ? '#000' : '#f59e0b'} />

            {/* Piringan Kiri: HAK */}
            <line x1="20" y1="35" x2="5" y2="70" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
            <line x1="20" y1="35" x2="35" y2="70" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
            <path d="M-5 70 Q20 85 45 70 Z" fill={isPrint ? '#eee' : '#bfdbfe'} stroke={isPrint ? '#000' : '#2563eb'} strokeWidth="1.5" />
            <text x="20" y="65" textAnchor="middle" fill={isPrint ? '#000' : '#1d4ed8'} fontSize="11" fontWeight="bold">HAK</text>

            {/* Piringan Kanan: KEWAJIBAN */}
            <line x1="180" y1="35" x2="165" y2="70" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
            <line x1="180" y1="35" x2="195" y2="70" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
            <path d="M155 70 Q180 85 205 70 Z" fill={isPrint ? '#eee' : '#bbf7d0'} stroke={isPrint ? '#000' : '#16a34a'} strokeWidth="1.5" />
            <text x="180" y="65" textAnchor="middle" fill={isPrint ? '#000' : '#15803d'} fontSize="10" fontWeight="bold">KEWAJIBAN</text>
          </g>

          <rect x="330" y="55" width="120" height="42" rx="8" fill={isPrint ? '#eee' : '#f0fdf4'} stroke={isPrint ? '#000' : '#86efac'} strokeWidth="1.5" />
          <text x="390" y="73" textAnchor="middle" fill={textDark} fontSize="10">Posisi Kedua Sisi:</text>
          <text x="390" y="89" textAnchor="middle" fill={isPrint ? '#000' : '#15803d'} fontSize="11" fontWeight="bold">[ ? ]</text>
        </svg>
      );

    case 'k5-coding-1': // Blok Kode Variabel Skor Game
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#e0e7ff'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#3730a3'} fontSize="11" fontWeight="bold">Blok Logika Game Digital</text>

          {/* Blok Scratch di Kiri */}
          <g transform="translate(50, 42)">
            {/* Event Block: When coin collected */}
            <path d="M0 10 C0 0 20 0 35 10 L180 10 L180 34 L0 34 Z" fill={isPrint ? '#ccc' : '#f59e0b'} stroke={isPrint ? '#000' : '#d97706'} strokeWidth="1.5" />
            <text x="20" y="26" fill="#fff" fontSize="10" fontWeight="bold">when coin collected</text>

            {/* Variable Block: change [skor] by (10) */}
            <rect x="0" y="38" width="180" height="34" rx="4" fill={isPrint ? '#eee' : '#ea580c'} stroke={isPrint ? '#000' : '#c2410c'} strokeWidth="1.5" />
            <text x="15" y="58" fill="#fff" fontSize="10" fontWeight="bold">change [ <tspan fill="#fef08a" fontWeight="black">skor</tspan> ] by (10)</text>
          </g>

          <path d="M250 75 L285 75 M278 69 L285 75 L278 81" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="2.5" strokeLinecap="round" />

          {/* Kotak Pertanyaan Konsep */}
          <g transform="translate(305, 45)">
            <rect x="0" y="0" width="135" height="75" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="2" strokeDasharray="3 2" />
            <text x="67" y="26" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Nilai Penyimpan Data</text>
            <text x="67" y="42" textAnchor="middle" fill={textMuted} fontSize="9">yang dapat berubah:</text>
            <text x="67" y="62" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="13" fontWeight="bold">[ ? ]</text>
          </g>
        </svg>
      );

    case 'k5-coding-2': // Mobil Robot Cerdas dengan Sensor Jarak Dua Silinder (Ultrasonik)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Robotika Cerdas Otomasi</text>

          {/* Mobil Robot dengan Dua Silinder Sensor di Depan */}
          <g transform="translate(100, 25)">
            <line x1="-30" y1="110" x2="260" y2="110" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="2" />

            {/* Badan Mobil Robot */}
            <rect x="20" y="45" width="110" height="50" rx="8" fill={isPrint ? '#fff' : '#3b82f6'} stroke={isPrint ? '#000' : '#1d4ed8'} strokeWidth="2" />
            {/* Roda Robot */}
            <circle cx="45" cy="100" r="12" fill={isPrint ? '#000' : '#1e293b'} stroke={isPrint ? '#000' : '#475569'} strokeWidth="2" />
            <circle cx="105" cy="100" r="12" fill={isPrint ? '#000' : '#1e293b'} stroke={isPrint ? '#000' : '#475569'} strokeWidth="2" />

            {/* Sensor Berbentuk Dua Silinder Mata di Depan Mobil */}
            <g transform="translate(130, 52)">
              <rect x="0" y="0" width="28" height="34" rx="4" fill={isPrint ? '#ccc' : '#475569'} stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="1.5" />
              {/* Silinder Atas & Bawah */}
              <circle cx="14" cy="9" r="6" fill={isPrint ? '#fff' : '#cbd5e1'} stroke={isPrint ? '#000' : '#334155'} strokeWidth="1.5" />
              <circle cx="14" cy="25" r="6" fill={isPrint ? '#fff' : '#cbd5e1'} stroke={isPrint ? '#000' : '#334155'} strokeWidth="1.5" />

              {/* Pancaran Gelombang Suara Pengukur Jarak */}
              <path d="M36 7 Q44 17 36 27" fill="none" stroke={isPrint ? '#000' : '#38bdf8'} strokeWidth="2" />
              <path d="M46 2 Q58 17 46 32" fill="none" stroke={isPrint ? '#000' : '#38bdf8'} strokeWidth="2" />
              <path d="M56 -3 Q72 17 56 37" fill="none" stroke={isPrint ? '#000' : '#38bdf8'} strokeWidth="2" />
            </g>

            {/* Dinding Rintangan di Kanan */}
            <rect x="220" y="30" width="14" height="80" rx="3" fill={isPrint ? '#666' : '#94a3b8'} stroke={isPrint ? '#000' : '#475569'} strokeWidth="1.5" />
          </g>

          <rect x="330" y="55" width="120" height="42" rx="8" fill={isPrint ? '#eee' : '#eff6ff'} stroke={isPrint ? '#000' : '#bfdbfe'} strokeWidth="1.5" />
          <text x="390" y="73" textAnchor="middle" fill={textDark} fontSize="10">Deteksi Halangan:</text>
          <text x="390" y="89" textAnchor="middle" fill={isPrint ? '#000' : '#1d4ed8'} fontSize="11" fontWeight="bold">Sensor: [ ? ]</text>
        </svg>
      );

    case 'k5-inggris-1': // Grammar Timeline: Past, Present, Future
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="150" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="90" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Grammar Time Line</text>

          {/* Garis Garis Waktu */}
          <g transform="translate(45, 45)">
            <line x1="20" y1="50" x2="350" y2="50" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="3" />
            <polygon points="355,50 345,45 345,55" fill={isPrint ? '#000' : '#64748b'} />

            {/* Titik 1: PAST (Yesterday / Thursday) */}
            <g transform="translate(60, 0)">
              <rect x="-45" y="0" width="90" height="38" rx="6" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="1.5" strokeDasharray="3 2" />
              <text x="0" y="18" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="11" fontWeight="bold">PAST [ ? ]</text>
              <text x="0" y="32" textAnchor="middle" fill={textMuted} fontSize="9">Yesterday</text>
              <line x1="0" y1="38" x2="0" y2="50" stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="2" />
              <circle cx="0" cy="50" r="4.5" fill={isPrint ? '#000' : '#f59e0b'} />
            </g>

            {/* Titik 2: PRESENT (Today / Friday) */}
            <g transform="translate(180, 0)">
              <rect x="-45" y="0" width="90" height="38" rx="6" fill={isPrint ? '#fff' : '#dbeafe'} stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="1.5" />
              <text x="0" y="18" textAnchor="middle" fill={isPrint ? '#000' : '#1d4ed8'} fontSize="11" fontWeight="bold">PRESENT</text>
              <text x="0" y="32" textAnchor="middle" fill={textDark} fontSize="9">Today (Friday)</text>
              <line x1="0" y1="38" x2="0" y2="50" stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="2" />
              <circle cx="0" cy="50" r="4.5" fill={isPrint ? '#000' : '#3b82f6'} />
            </g>

            {/* Titik 3: FUTURE (Tomorrow / Saturday) */}
            <g transform="translate(300, 0)">
              <rect x="-45" y="0" width="90" height="38" rx="6" fill={isPrint ? '#fff' : '#f1f5f9'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1" />
              <text x="0" y="18" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">FUTURE</text>
              <text x="0" y="32" textAnchor="middle" fill={textMuted} fontSize="9">Tomorrow</text>
              <line x1="0" y1="38" x2="0" y2="50" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="2" />
              <circle cx="0" cy="50" r="4" fill={isPrint ? '#000' : '#94a3b8'} />
            </g>
          </g>

          <text x="230" y="145" textAnchor="middle" fill={textMuted} fontSize="11">Events happened yesterday are written in which tense?</text>
        </svg>
      );

    case 'k5-inggris-2': // Procedure Recipe Sequence Words
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Procedure Text Recipe</text>

          {/* Kartu Resep Salad Buah */}
          <g transform="translate(45, 38)">
            <rect x="0" y="0" width="280" height="105" rx="8" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
            <text x="15" y="22" fill={textDark} fontSize="11" fontWeight="bold">How to Make Fruit Salad:</text>
            
            <text x="15" y="44" fill={textDark} fontSize="10">1. <tspan fill={isPrint ? '#000' : '#2563eb'} fontWeight="bold">First</tspan>, wash all the fresh fruits.</text>
            <text x="15" y="62" fill={textDark} fontSize="10">2. <tspan fill={isPrint ? '#000' : '#2563eb'} fontWeight="bold">Second</tspan>, slice apples and melons.</text>
            <text x="15" y="80" fill={textDark} fontSize="10">3. <tspan fill={isPrint ? '#000' : '#2563eb'} fontWeight="bold">Next</tspan>, add sweet yogurt into the bowl.</text>
            <text x="15" y="98" fill={textDark} fontSize="10">4. <tspan fill={isPrint ? '#000' : '#2563eb'} fontWeight="bold">Finally</tspan>, serve it fresh and enjoy!</text>
          </g>

          <rect x="340" y="55" width="110" height="42" rx="8" fill={isPrint ? '#eee' : '#eff6ff'} stroke={isPrint ? '#000' : '#bfdbfe'} strokeWidth="1.5" />
          <text x="395" y="73" textAnchor="middle" fill={textDark} fontSize="10">Highlighted Words:</text>
          <text x="395" y="89" textAnchor="middle" fill={isPrint ? '#000' : '#1d4ed8'} fontSize="10" fontWeight="bold">[ ? ] words</text>
        </svg>
      );

    case 'k5-sbdp-1': // Tari Piring Minangkabau (Tanpa teks "TARI PIRING")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#fefce8'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#854d0e'} fontSize="11" fontWeight="bold">Tari Tradisional Nusantara</text>

          {/* Penari Memegang Dua Buah Piring di Telapak Tangannya */}
          <g transform="translate(150, 18)">
            <line x1="-30" y1="120" x2="160" y2="120" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="2" />

            {/* Penari Berbusana Adat Minang */}
            <g transform="translate(40, 5)">
              {/* Tutup Kepala Tanduk Khas Minang (Tengkuluk) */}
              <polygon points="25,-4 0,14 50,14" fill={isPrint ? '#000' : '#dc2626'} stroke={isPrint ? '#000' : '#991b1b'} strokeWidth="1.5" />
              {/* Kepala */}
              <circle cx="25" cy="22" r="10" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1" />
              {/* Baju Kurung Merah Emas */}
              <rect x="15" y="32" width="20" height="50" fill={isPrint ? '#666' : '#dc2626'} stroke={isPrint ? '#000' : '#991b1b'} strokeWidth="1.5" />
              <rect x="13" y="82" width="24" height="35" fill={isPrint ? '#ccc' : '#eab308'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="1" />

              {/* Tangan Kiri Menengadah Memegang Piring Porselen */}
              <path d="M15 42 L-10 48" stroke={isPrint ? '#000' : '#fed7aa'} strokeWidth="3" strokeLinecap="round" />
              <ellipse cx="-15" cy="48" rx="14" ry="5" fill="#ffffff" stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="2" />

              {/* Tangan Kanan Menengadah Memegang Piring Porselen */}
              <path d="M35 42 L60 48" stroke={isPrint ? '#000' : '#fed7aa'} strokeWidth="3" strokeLinecap="round" />
              <ellipse cx="65" cy="48" rx="14" ry="5" fill="#ffffff" stroke={isPrint ? '#000' : '#0284c7'} strokeWidth="2" />
            </g>
          </g>

          <rect x="310" y="55" width="135" height="42" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
          <text x="377" y="73" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Dua Piring di Tangan</text>
          <text x="377" y="89" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="10" fontWeight="bold">Nama Tari: [ ? ]</text>
        </svg>
      );

    case 'k5-sbdp-2': // Seni Patung 3 Dimensi (Volume Ruang)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Karya Seni Rupa 3D</text>

          {/* Patung Figur Seni di Atas Meja Pedestal */}
          <g transform="translate(160, 20)">
            <line x1="-30" y1="120" x2="160" y2="120" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="2" />

            {/* Pedestal / Alas Meja Patung */}
            <rect x="25" y="85" width="50" height="35" rx="3" fill={isPrint ? '#ccc' : '#e2e8f0'} stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />

            {/* Karya Seni Patung 3 Dimensi */}
            <g transform="translate(30, 15)">
              <ellipse cx="20" cy="50" rx="16" ry="22" fill={isPrint ? '#666' : '#a855f7'} stroke={isPrint ? '#000' : '#7e22ce'} strokeWidth="2" />
              <circle cx="20" cy="20" r="12" fill={isPrint ? '#666' : '#c084fc'} stroke={isPrint ? '#000' : '#7e22ce'} strokeWidth="2" />
              {/* Gelombang Dimensi Panjang, Lebar, Tinggi */}
              <line x1="-15" y1="70" x2="55" y2="70" stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="1.5" strokeDasharray="3 2" />
              <text x="20" y="82" textAnchor="middle" fill={isPrint ? '#000' : '#2563eb'} fontSize="8" fontWeight="bold">Panjang × Lebar</text>

              <line x1="-18" y1="70" x2="-18" y2="10" stroke={isPrint ? '#000' : '#ef4444'} strokeWidth="1.5" strokeDasharray="3 2" />
              <text x="-25" y="45" textAnchor="end" fill={isPrint ? '#000' : '#dc2626'} fontSize="8" fontWeight="bold">Tinggi</text>
            </g>
          </g>

          <rect x="315" y="55" width="130" height="42" rx="8" fill={isPrint ? '#eee' : '#faf5ff'} stroke={isPrint ? '#000' : '#d8b4fe'} strokeWidth="1.5" />
          <text x="380" y="73" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Memiliki Volume Ruang</text>
          <text x="380" y="89" textAnchor="middle" fill={isPrint ? '#000' : '#7e22ce'} fontSize="10" fontWeight="bold">Karya Seni: [ ? ]</text>
        </svg>
      );

    case 'k5-pjok-1': // Lapangan Kasti / Rounders Segilima
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#dcfce7'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#166534'} fontSize="11" fontWeight="bold">Denah Lapangan Kasti/Rounders</text>

          {/* Bangun Segilima Lapangan Kasti di Tengah */}
          <g transform="translate(150, 20)">
            <polygon points="70,10 130,55 105,115 35,115 10,55" fill={isPrint ? '#fff' : '#f0fdf4'} stroke={isPrint ? '#000' : '#15803d'} strokeWidth="2.5" />
            
            {/* 5 Tiang Hinggap / Base di Setiap Titik Sudut */}
            {/* Base I (Kanan Atas) */}
            <circle cx="130" cy="55" r="7" fill={isPrint ? '#000' : '#dc2626'} />
            <text x="145" y="59" fill={textDark} fontSize="10" fontWeight="bold">Base I</text>

            {/* Base II (Kanan Bawah) */}
            <circle cx="105" cy="115" r="7" fill={isPrint ? '#000' : '#dc2626'} />
            <text x="110" y="128" fill={textDark} fontSize="10" fontWeight="bold">Base II</text>

            {/* Base III (Kiri Bawah) */}
            <circle cx="35" cy="115" r="7" fill={isPrint ? '#000' : '#dc2626'} />
            <text x="15" y="128" fill={textDark} fontSize="10" fontWeight="bold">Base III</text>

            {/* Base IV (Kiri Atas) */}
            <circle cx="10" cy="55" r="7" fill={isPrint ? '#000' : '#dc2626'} />
            <text x="-8" y="59" textAnchor="end" fill={textDark} fontSize="10" fontWeight="bold">Base IV</text>

            {/* Home Base (Puncak / Ruang Bebas) */}
            <circle cx="70" cy="10" r="8" fill={isPrint ? '#000' : '#f59e0b'} />
            <text x="70" y="-1" textAnchor="middle" fill={textDark} fontSize="10" fontWeight="bold">Home Base</text>
          </g>

          <rect x="325" y="55" width="125" height="42" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
          <text x="387" y="73" textAnchor="middle" fill={textDark} fontSize="10">Bentuk Geometri:</text>
          <text x="387" y="89" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="11" fontWeight="bold">Segi [ ? ] Beraturan</text>
        </svg>
      );

    case 'k5-pjok-2': // Aba-Aba Start Jongkok Lari Cepat Sprint (Fokus Aba-aba "Siap!")
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#f1f5f9'} />
          <text x="97" y="25" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Aba-Aba Start Jongkok Sprint</text>

          {/* Tiga Posisi: 1. Bersedia, 2. Siap! (Fokus), 3. Ya! */}
          <g transform="translate(30, 25)">
            <line x1="0" y1="110" x2="390" y2="110" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="2" />

            {/* 1. Bersedia */}
            <g transform="translate(30, 30)">
              <circle cx="20" cy="25" r="9" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1" />
              <line x1="20" y1="34" x2="30" y2="60" stroke={isPrint ? '#000' : '#64748b'} strokeWidth="3" />
              <line x1="30" y1="60" x2="10" y2="80" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="2.5" />
              <line x1="20" y1="45" x2="5" y2="80" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="2.5" />
              <text x="20" y="98" textAnchor="middle" fill={textMuted} fontSize="9">1. "Bersedia"</text>
            </g>

            {/* 2. "Siap!" (Fokus: Pinggul Terangkat Lebih Tinggi dari Bahu) */}
            <g transform="translate(160, 10)">
              <rect x="-15" y="0" width="105" height="98" rx="8" fill={isPrint ? '#fff' : '#fef3c7'} stroke={isPrint ? '#000' : '#f59e0b'} strokeWidth="2" strokeDasharray="3 2" />
              
              {/* Kepala Rendah Menunduk */}
              <circle cx="15" cy="45" r="9" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1" />
              
              {/* Tangan Bertumpu di Garis Start */}
              <line x1="15" y1="54" x2="10" y2="90" stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="2.5" />
              
              {/* Pinggul Naik Tinggi ke Atas! */}
              <path d="M15 54 L45 28 L70 90" fill="none" stroke={isPrint ? '#000' : '#dc2626'} strokeWidth="3.5" strokeLinecap="round" />
              
              <text x="45" y="20" textAnchor="middle" fill={isPrint ? '#000' : '#dc2626'} fontSize="9" fontWeight="bold">▲ Pinggul Naik</text>
              <text x="38" y="94" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="10" fontWeight="bold">2. "Siap!"</text>
            </g>

            {/* 3. "Ya!" (Melesat Lari) */}
            <g transform="translate(300, 25)">
              <circle cx="20" cy="18" r="9" fill={isPrint ? '#eee' : '#fed7aa'} stroke={isPrint ? '#000' : '#ea580c'} strokeWidth="1" />
              <line x1="20" y1="27" x2="35" y2="55" stroke={isPrint ? '#000' : '#16a34a'} strokeWidth="3" />
              <line x1="35" y1="55" x2="60" y2="85" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="2.5" />
              <line x1="35" y1="55" x2="15" y2="80" stroke={isPrint ? '#000' : '#1e293b'} strokeWidth="2.5" />
              <text x="35" y="98" textAnchor="middle" fill={textMuted} fontSize="9">3. "Ya!"</text>
            </g>
          </g>
        </svg>
      );

    case 'k5-daerah-1': // Struktur Sisindiran Sunda: Padalisan 1-2 Cangkang, Padalisan 3-4 Eusi (Ditandai [ ? ])
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#fefce8'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#854d0e'} fontSize="11" fontWeight="bold">Wangun Sisindiran Sunda</text>

          {/* Kotak Rarakitan 4 Padalisan */}
          <g transform="translate(35, 38)">
            <rect x="0" y="0" width="300" height="105" rx="8" fill={isPrint ? '#fff' : '#ffffff'} stroke={isPrint ? '#000' : '#cbd5e1'} strokeWidth="1.5" />
            
            {/* Padalisan 1 & 2: Cangkang */}
            <text x="15" y="24" fill={textDark} fontSize="10">Padalisan 1: Mihapé sisir jeung minyak</text>
            <text x="15" y="44" fill={textDark} fontSize="10">Padalisan 2: Kadé kaancloman lebu</text>
            <rect x="220" y="14" width="70" height="30" rx="4" fill={isPrint ? '#eee' : '#fef3c7'} stroke={isPrint ? '#000' : '#fde047'} strokeWidth="1" />
            <text x="255" y="33" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="10" fontWeight="bold">Cangkang</text>

            <line x1="10" y1="55" x2="290" y2="55" stroke={isPrint ? '#ccc' : '#e2e8f0'} strokeWidth="1" strokeDasharray="3 2" />

            {/* Padalisan 3 & 4: Eusi (Diberi tanda tanya [ ? ]) */}
            <text x="15" y="74" fill={textDark} fontSize="10">Padalisan 3: Mihapé pikir jeung niat</text>
            <text x="15" y="94" fill={textDark} fontSize="10">Padalisan 4: Kadé kaancikan kalbu</text>
            <rect x="220" y="64" width="70" height="30" rx="4" fill={isPrint ? '#eee' : '#eff6ff'} stroke={isPrint ? '#000' : '#3b82f6'} strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="255" y="83" textAnchor="middle" fill={isPrint ? '#000' : '#1d4ed8'} fontSize="11" fontWeight="bold">[ ? ]</text>
          </g>

          <rect x="345" y="55" width="105" height="42" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
          <text x="397" y="73" textAnchor="middle" fill={textDark} fontSize="10">Padalisan 3-4:</text>
          <text x="397" y="89" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="11" fontWeight="bold">Bagian [ ? ]</text>
        </svg>
      );

    case 'k5-daerah-2': // Raden Werkudara (Bima) Tokoh Pandhawa Gagah Pideksa (Tanpa teks nama Werkudara)
      return (
        <svg viewBox="0 0 460 160" className="w-full h-auto max-h-48 mx-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="460" height="160" rx="14" fill={bgCard} stroke={strokeColor} strokeWidth="1.5" />
          
          <rect x="15" y="10" width="165" height="22" rx="6" fill={isPrint ? '#eee' : '#fefce8'} />
          <text x="97" y="25" textAnchor="middle" fill={isPrint ? '#000' : '#854d0e'} fontSize="11" fontWeight="bold">Tokoh Satria Pandhawa</text>

          {/* Siluet Gagah Perkasa Raden Werkudara / Bima */}
          <g transform="translate(150, 15)">
            <line x1="-30" y1="125" x2="180" y2="125" stroke={isPrint ? '#000' : '#94a3b8'} strokeWidth="2" />

            {/* Badan Gagah Tinggi Hitam */}
            <g transform="translate(45, 5)">
              {/* Rambut Gelung Supit Urang Menjulang Melengkung Khas Bima */}
              <path d="M25 22 C35 -5 65 0 50 25 C45 35 30 30 25 22 Z" fill={isPrint ? '#000' : '#0f172a'} stroke={isPrint ? '#000' : '#334155'} strokeWidth="1.5" />
              
              {/* Wajah Gagah & Mata Thelengan */}
              <circle cx="28" cy="28" r="14" fill={isPrint ? '#000' : '#0f172a'} />
              <circle cx="33" cy="27" r="2.5" fill="#fff" />
              <polygon points="36,33 46,36 36,39" fill={isPrint ? '#ccc' : '#eab308'} /> {/* Sumpit / Taring */}

              {/* Badan Kekar Hitam */}
              <polygon points="15,42 42,42 46,75 10,75" fill={isPrint ? '#000' : '#0f172a'} stroke={isPrint ? '#000' : '#334155'} strokeWidth="2" />
              
              {/* Kain Kampuh Poleng Merah Hitam Putih */}
              <rect x="12" y="75" width="34" height="45" fill={isPrint ? '#ccc' : '#e2e8f0'} stroke={isPrint ? '#000' : '#64748b'} strokeWidth="1.5" />
              <line x1="23" y1="75" x2="23" y2="120" stroke="#000" strokeWidth="1" />
              <line x1="34" y1="75" x2="34" y2="120" stroke="#000" strokeWidth="1" />

              {/* Kuku Pancanaka Panjang Melengkung di Ibu Jari */}
              <path d="M42 50 L70 58 Q85 58 82 50 Q75 52 65 54" fill={isPrint ? '#fff' : '#fde047'} stroke={isPrint ? '#000' : '#ca8a04'} strokeWidth="2" strokeLinecap="round" />
              <text x="82" y="44" fill={isPrint ? '#000' : '#b45309'} fontSize="9" fontWeight="bold">Kuku Pancanaka</text>
            </g>
          </g>

          <rect x="310" y="55" width="135" height="42" rx="8" fill={isPrint ? '#eee' : '#fffbeb'} stroke={isPrint ? '#000' : '#fde68a'} strokeWidth="1.5" />
          <text x="377" y="73" textAnchor="middle" fill={textDark} fontSize="11" fontWeight="bold">Satria ing Jodhipati</text>
          <text x="377" y="89" textAnchor="middle" fill={isPrint ? '#000' : '#b45309'} fontSize="10" fontWeight="bold">Nama Tokoh: [ ? ]</text>
        </svg>
      );

    default:
      return null;
  }
};
