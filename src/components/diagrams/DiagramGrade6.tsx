import React from 'react';

export const getDiagramGrade6 = (imageKey: string): React.ReactNode | null => {
  switch (imageKey) {
    // 1. Matematika: Unsur Lingkaran - Jari-Jari (r)
    case 'k6-mtk-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Unsur Lingkaran: Garis Pusat ke Tepi Lingkaran = Jari-Jari (r)
          </text>
          {/* Circle diagram */}
          <g transform="translate(210, 105)">
            <circle cx="0" cy="0" r="65" fill="#f0fdf4" stroke="#16a34a" strokeWidth="3" />
            {/* Center point O */}
            <circle cx="0" cy="0" r="4" fill="#0f172a" />
            <text x="-10" y="-8" className="text-xs font-black fill-slate-900">O (Pusat)</text>
            {/* Radius (r) green line - TARGET */}
            <line x1="0" y1="0" x2="65" y2="0" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
            <text x="32" y="-8" textAnchor="middle" className="text-xs font-black fill-green-800">Jari-Jari (r) ⭐</text>

            {/* Diameter (d) faint reference */}
            <line x1="-65" y1="35" x2="65" y2="35" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="0" y="50" textAnchor="middle" className="text-[9px] fill-slate-500">Diameter (d = 2r)</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#14532d" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Garis dari Titik Pusat (O) ke Keliling = JARI-JARI (r) ⭕
          </text>
        </svg>
      );

    // 2. Matematika: Diagram Lingkaran Hobi Siswa (Sepak Bola 50%)
    case 'k6-mtk-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Diagram Lingkaran Hobi Siswa: Sepak Bola Menguasai 50%
          </text>
          {/* Pie Chart */}
          <g transform="translate(170, 105)">
            {/* Half circle: Sepak Bola 50% (Right half) */}
            <path d="M 0 -60 A 60 60 0 0 1 0 60 Z" fill="#22c55e" stroke="#16a34a" strokeWidth="2" />
            <text x="28" y="5" textAnchor="middle" className="text-xs font-black fill-green-950">50% ⭐</text>
            <text x="28" y="20" textAnchor="middle" className="text-[10px] font-bold fill-green-950">Sepak Bola</text>

            {/* Quarter circle: Menyanyi 25% (Top-left) */}
            <path d="M 0 -60 A 60 60 0 0 0 -60 0 L 0 0 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
            <text x="-25" y="-22" textAnchor="middle" className="text-[10px] font-bold fill-sky-950">25% Nyanyi</text>

            {/* Quarter circle: Membaca 25% (Bottom-left) */}
            <path d="M -60 0 A 60 60 0 0 0 0 60 L 0 0 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
            <text x="-25" y="32" textAnchor="middle" className="text-[10px] font-bold fill-amber-950">25% Baca</text>
          </g>
          {/* Legend */}
          <g transform="translate(270, 65)">
            <rect x="0" y="0" width="12" height="12" fill="#22c55e" rx="2" />
            <text x="20" y="10" className="text-[10px] font-black fill-green-900">Sepak Bola (50%)</text>
            <rect x="0" y="22" width="12" height="12" fill="#38bdf8" rx="2" />
            <text x="20" y="32" className="text-[10px] fill-slate-700">Menyanyi (25%)</text>
            <rect x="0" y="44" width="12" height="12" fill="#facc15" rx="2" />
            <text x="20" y="54" className="text-[10px] fill-slate-700">Membaca (25%)</text>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#15803d" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Paling Banyak Digemari = Sepak Bola (50% / Setengah Lingkaran) ⚽
          </text>
        </svg>
      );

    // 3. Bahasa Indonesia: Struktur Pidato (Pembukaan / Purwaka)
    case 'k6-indo-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Bagan Struktur Naskah Pidato: Bagian Pembuka (Purwaka)
          </text>
          {/* 3 Speech sections */}
          <g transform="translate(80, 48)">
            {/* Section 1: Pembukaan - HIGHLIGHTED */}
            <rect x="0" y="0" width="260" height="32" rx="6" fill="#fef08a" stroke="#ca8a04" strokeWidth="2.5" />
            <text x="130" y="21" textAnchor="middle" className="text-xs font-black fill-amber-950">
              1. PEMBUKAAN (Salam, Puji Syukur, Penghormatan) ⭐
            </text>

            <line x1="130" y1="32" x2="130" y2="42" stroke="#64748b" strokeWidth="2" />

            {/* Section 2: Isi */}
            <rect x="20" y="42" width="220" height="30" rx="4" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5" />
            <text x="130" y="61" textAnchor="middle" className="text-[10px] font-bold fill-slate-700">
              2. ISI PIDATO (Inti Gagasan & Ajakan)
            </text>

            <line x1="130" y1="72" x2="130" y2="82" stroke="#64748b" strokeWidth="2" />

            {/* Section 3: Penutup */}
            <rect x="20" y="82" width="220" height="30" rx="4" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5" />
            <text x="130" y="101" textAnchor="middle" className="text-[10px] font-bold fill-slate-700">
              3. PENUTUP (Kesimpulan, Maaf, Salam Penutup)
            </text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="172" width="320" height="34" rx="8" fill="#1e293b" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Salam Pembuka & Puji Syukur Terletak pada: PEMBUKAAN PIDATO 🎤
          </text>
        </svg>
      );

    // 4. Bahasa Indonesia: Mitigasi Gempa (Berlindung di Bawah Meja)
    case 'k6-indo-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fef2f2" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-red-950">
            Infografis Tanggap Darurat Gempa Bumi: Tindakan Pertama
          </text>
          {/* Sturdy Table and crouched student */}
          <g transform="translate(150, 48)">
            {/* Table */}
            <rect x="0" y="25" width="120" height="15" rx="3" fill="#b45309" stroke="#78350f" strokeWidth="2" />
            <rect x="10" y="40" width="12" height="60" fill="#78350f" />
            <rect x="98" y="40" width="12" height="60" fill="#78350f" />
            {/* Student crouching under table protecting head */}
            <g transform="translate(45, 52)">
              <circle cx="15" cy="18" r="12" fill="#fed7aa" />
              {/* Hands covering head */}
              <path d="M 5 10 Q 15 2 25 10" stroke="#ea580c" strokeWidth="4" fill="none" strokeLinecap="round" />
              <rect x="5" y="30" width="20" height="22" rx="3" fill="#3b82f6" />
              <text x="15" y="45" textAnchor="middle" className="text-[8px] font-bold fill-white">Aman</text>
            </g>
          </g>
          {/* Bottom badge */}
          <rect x="40" y="172" width="340" height="34" rx="8" fill="#991b1b" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-white">
            Tindakan Pertama Gempa: Berlindung di Bawah Meja yang Kokoh 🛡️
          </text>
        </svg>
      );

    // 5. IPAS: Tata Surya (Planet Terbesar Jupiter)
    case 'k6-ipas-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#0f172a" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-300">
            Susunan Tata Surya: Planet Terbesar = JUPITER (Urutan ke-5)
          </text>
          {/* Sun & Planets line */}
          <g transform="translate(20, 95)">
            {/* Sun on left */}
            <circle cx="-10" cy="0" r="45" fill="#f59e0b" />
            <text x="4" y="4" textAnchor="middle" className="text-[8px] font-bold fill-slate-900">Matahari</text>

            {/* 1. Merkurius */}
            <circle cx="45" cy="0" r="5" fill="#94a3b8" />
            <text x="45" y="18" textAnchor="middle" className="text-[7px] fill-slate-300">Merkurius</text>

            {/* 2. Venus */}
            <circle cx="75" cy="0" r="8" fill="#eab308" />
            <text x="75" y="18" textAnchor="middle" className="text-[7px] fill-slate-300">Venus</text>

            {/* 3. Bumi */}
            <circle cx="115" cy="0" r="9" fill="#0284c7" />
            <text x="115" y="18" textAnchor="middle" className="text-[7px] fill-slate-300">Bumi</text>

            {/* 4. Mars */}
            <circle cx="155" cy="0" r="7" fill="#ef4444" />
            <text x="155" y="18" textAnchor="middle" className="text-[7px] fill-slate-300">Mars</text>

            {/* 5. JUPITER - LARGEST TARGET */}
            <circle cx="215" cy="0" r="26" fill="#f97316" stroke="#ea580c" strokeWidth="2" />
            {/* Bands on Jupiter */}
            <line x1="192" y1="-5" x2="238" y2="-5" stroke="#c2410c" strokeWidth="2" />
            <line x1="190" y1="5" x2="240" y2="5" stroke="#fde047" strokeWidth="2" />
            <circle cx="225" cy="12" r="3" fill="#dc2626" />
            <text x="215" y="-32" textAnchor="middle" className="text-xs font-black fill-yellow-400">JUPITER ⭐</text>
            <text x="215" y="38" textAnchor="middle" className="text-[8px] font-bold fill-amber-300">(Terbesar)</text>

            {/* 6. Saturnus */}
            <ellipse cx="285" cy="0" rx="16" ry="14" fill="#facc15" />
            <ellipse cx="285" cy="0" rx="26" ry="6" fill="none" stroke="#d97706" strokeWidth="2" />
            <text x="285" y="24" textAnchor="middle" className="text-[7px] fill-slate-300">Saturnus</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#1e293b" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Planet Terbesar di Tata Surya = JUPITER 🪐
          </text>
        </svg>
      );

    // 6. IPAS: Garis Gaya Medan Magnet (Utara ke Selatan)
    case 'k6-ipas-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Medan Magnet: Garis Gaya Keluar dari Kutub Utara (N) Menuju Selatan (S)
          </text>
          {/* Bar Magnet */}
          <g transform="translate(130, 90)">
            {/* North Pole (Red) */}
            <rect x="0" y="0" width="80" height="35" fill="#dc2626" rx="3" />
            <text x="40" y="22" textAnchor="middle" className="text-xs font-black fill-white">U (North)</text>

            {/* South Pole (Blue) */}
            <rect x="80" y="0" width="80" height="35" fill="#2563eb" rx="3" />
            <text x="120" y="22" textAnchor="middle" className="text-xs font-black fill-white">S (South)</text>

            {/* Magnetic Field Lines curving from N to S */}
            <path d="M 20 0 C 20 -50 140 -50 140 0" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4 3" />
            <polygon points="80,-38 75,-34 75,-42" fill="#dc2626" />
            <text x="80" y="-45" textAnchor="middle" className="text-[9px] font-bold fill-red-800">Arah Medan Magnet (U → S) →</text>

            <path d="M 20 35 C 20 85 140 85 140 35" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4 3" />
            <polygon points="80,73 75,69 75,77" fill="#dc2626" />
          </g>
          {/* Bottom badge */}
          <rect x="40" y="172" width="340" height="34" rx="8" fill="#1e293b" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Arah Garis Gaya Magnet: Keluar Kutub UTARA (N) Menuju SELATAN (S) 🧲
          </text>
        </svg>
      );

    // 7. PKn: Pita "Bhinneka Tunggal Ika" Kaki Burung Garuda
    case 'k6-pkn-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fefce8" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-950">
            Lambang Negara: Pita Bhinneka Tunggal Ika yang Dicengkeram Garuda
          </text>
          {/* Garuda Claws holding Ribbon */}
          <g transform="translate(110, 50)">
            {/* Claws */}
            <g fill="#ca8a04" stroke="#78350f" strokeWidth="2">
              <path d="M 40 10 L 40 45 L 30 55 M 40 45 L 50 55" />
              <path d="M 160 10 L 160 45 L 150 55 M 160 45 L 170 55" />
            </g>
            {/* White scroll ribbon */}
            <rect x="0" y="38" width="200" height="34" rx="6" fill="#ffffff" stroke="#b45309" strokeWidth="2.5" />
            <text x="100" y="60" textAnchor="middle" className="text-xs font-black fill-slate-900 tracking-wider">
              BHINNEKA TUNGGAL IKA ⭐
            </text>
          </g>
          {/* Meaning box */}
          <rect x="40" y="145" width="340" height="24" rx="4" fill="#fef08a" />
          <text x="210" y="161" textAnchor="middle" className="text-[11px] font-bold fill-amber-950">
            "Berbeda-beda tetapi tetap satu jua"
          </text>
          {/* Bottom badge */}
          <rect x="40" y="175" width="340" height="34" rx="8" fill="#78350f" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Melambangkan: Persatuan di Tengah Keberagaman Bangsa 🇮🇩
          </text>
        </svg>
      );

    // 8. PKn: Kotak Suara Pemilu (Luber Jurdil: Langsung & Bebas)
    case 'k6-pkn-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Asas Pemilu Luber Jurdil: L = Langsung, B = Bebas
          </text>
          {/* Ballot Box */}
          <g transform="translate(150, 48)">
            <rect x="0" y="25" width="120" height="85" rx="6" fill="#ffffff" stroke="#94a3b8" strokeWidth="3" />
            {/* Slot */}
            <rect x="35" y="20" width="50" height="8" rx="2" fill="#0f172a" />
            {/* KPU logo emblem */}
            <circle cx="60" cy="65" r="18" fill="#ef4444" />
            <text x="60" y="69" textAnchor="middle" className="text-[10px] font-black fill-white">KPU</text>
            {/* Ballot paper dropping in slot */}
            <rect x="45" y="0" width="30" height="25" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
            <text x="60" y="15" textAnchor="middle" className="text-[8px] font-bold fill-amber-900">Suara</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="172" width="320" height="34" rx="8" fill="#1e293b" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Huruf L dan B pada LUBER = LANGSUNG dan BEBAS 🗳️
          </text>
        </svg>
      );

    // 9. Coding: Gembok Hijau HTTPS (Aman & Terenkripsi)
    case 'k6-coding-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-emerald-950">
            Keamanan Internet: Simbol Gembok Hijau (HTTPS / Terenkripsi Aman)
          </text>
          {/* Browser address bar */}
          <g transform="translate(60, 50)">
            <rect width="300" height="42" rx="8" fill="#ffffff" stroke="#16a34a" strokeWidth="2.5" />
            {/* Green padlock icon */}
            <g transform="translate(18, 10)">
              {/* Shackle */}
              <path d="M 6 10 L 6 4 Q 11 0 16 4 L 16 10" fill="none" stroke="#15803d" strokeWidth="2.5" />
              {/* Body */}
              <rect x="2" y="10" width="18" height="13" rx="2" fill="#16a34a" />
              <circle cx="11" cy="16" r="2" fill="#ffffff" />
            </g>
            {/* URL text */}
            <text x="50" y="26" className="text-sm font-black fill-green-800">
              https://<tspan className="fill-slate-800 font-normal">sekolah-pintar.id</tspan>
            </text>
          </g>
          {/* Explanation */}
          <rect x="50" y="105" width="320" height="28" rx="6" fill="#dcfce7" />
          <text x="210" y="123" textAnchor="middle" className="text-xs font-black fill-green-950">
            Koneksi Aman, Terenkripsi & Terlindungi dari Peretas 🔒✨
          </text>
          {/* Bottom badge */}
          <rect x="50" y="172" width="320" height="34" rx="8" fill="#14532d" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-white">
            Gembok HTTPS = Koneksi Aman dan Terenkripsi 🌐🛡️
          </text>
        </svg>
      );

    // 10. Coding: Alur Kecerdasan Buatan (Data -> Model -> Prediksi)
    case 'k6-coding-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Alur Kecerdasan Buatan (AI): Data Latih → Pelatihan Model → Prediksi
          </text>
          {/* 3 AI stages */}
          <g transform="translate(25, 52)">
            {/* Stage 1: Input Data */}
            <rect x="0" y="5" width="105" height="70" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="52" y="32" textAnchor="middle" className="text-lg">📸 🐱</text>
            <text x="52" y="52" textAnchor="middle" className="text-xs font-black fill-blue-950">1. Data Foto</text>
            <text x="52" y="65" textAnchor="middle" className="text-[9px] fill-blue-800">(Input Latih)</text>

            <text x="117" y="44" className="text-base font-black fill-slate-400">→</text>

            {/* Stage 2: Training Model */}
            <rect x="130" y="5" width="110" height="70" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
            <text x="185" y="32" textAnchor="middle" className="text-lg">🧠 ⚙️</text>
            <text x="185" y="52" textAnchor="middle" className="text-xs font-black fill-amber-950">2. Training</text>
            <text x="185" y="65" textAnchor="middle" className="text-[9px] fill-amber-800">(Model AI Belajar)</text>

            <text x="252" y="44" className="text-base font-black fill-slate-400">→</text>

            {/* Stage 3: Prediction Output */}
            <rect x="265" y="5" width="105" height="70" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2.5" />
            <text x="317" y="32" textAnchor="middle" className="text-lg">🎯 ✅</text>
            <text x="317" y="52" textAnchor="middle" className="text-xs font-black fill-green-950">3. Prediksi</text>
            <text x="317" y="65" textAnchor="middle" className="text-[9px] font-bold fill-green-800">"Kucing 99%"</text>
          </g>
          {/* Bottom badge */}
          <rect x="40" y="168" width="340" height="38" rx="8" fill="#1e293b" />
          <text x="210" y="186" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Alur AI: Input Data Foto → Pelatihan Model → Prediksi Output 🤖
          </text>
          <text x="210" y="198" textAnchor="middle" className="text-[10px] font-medium fill-slate-300">
            Model mengenali pola ciri khas objek secara mandiri
          </text>
        </svg>
      );

    // 11. Bahasa Inggris: Preposition UNDER the box
    case 'k6-inggris-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdfa" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-teal-950">
            Prepositions of Place: The Red Ball is UNDER the Box
          </text>
          {/* Box raised with ball underneath */}
          <g transform="translate(170, 50)">
            {/* Cardboard Box */}
            <rect x="0" y="0" width="80" height="50" rx="4" fill="#fed7aa" stroke="#c2410c" strokeWidth="2.5" />
            <text x="40" y="30" textAnchor="middle" className="text-xs font-black fill-orange-950">BOX</text>

            {/* Down arrow */}
            <path d="M 40 52 L 40 70" stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrow)" />

            {/* Red ball UNDER the box - TARGET */}
            <circle cx="40" cy="85" r="15" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
            <circle cx="35" cy="80" r="3" fill="#ffffff" />
            <text x="40" y="115" textAnchor="middle" className="text-xs font-black fill-red-800">UNDER ⭐</text>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#0f766e" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            "The red ball is UNDER the box" (Di bawah kotak) 🔴📦
          </text>
        </svg>
      );

    // 12. Bahasa Inggris: Road Map "Turn Left at the Junction"
    case 'k6-inggris-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Giving Directions: Turn Left at the Junction / Crossroad
          </text>
          {/* Crossroad Road Map */}
          <g transform="translate(150, 45)">
            {/* Vertical road */}
            <rect x="40" y="0" width="40" height="110" fill="#64748b" />
            {/* Horizontal road */}
            <rect x="0" y="35" width="120" height="40" fill="#64748b" />
            {/* Crossroad center */}
            <line x1="60" y1="0" x2="60" y2="35" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="60" y1="75" x2="60" y2="110" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 4" />

            {/* Turning left green arrow path - TARGET */}
            <path d="M 60 100 L 60 55 L 10 55" fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" />
            <polygon points="5,55 18,48 18,62" fill="#22c55e" />
            <text x="20" y="30" textAnchor="middle" className="text-[10px] font-black fill-green-800">BELOK KIRI ⭐</text>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#15803d" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Direction: "Turn left at the junction" (Belok kiri di persimpangan) ⬅️
          </text>
        </svg>
      );

    // 13. SBdP: Poster Reklame Promosi
    case 'k6-sbdp-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fdf4ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-purple-950">
            Karya Seni Grafis: Poster Reklame Komersial & Layanan
          </text>
          {/* Billboard / Poster */}
          <g transform="translate(130, 48)">
            <rect width="160" height="105" rx="8" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2.5" />
            <text x="80" y="28" textAnchor="middle" className="text-xs font-black fill-yellow-400">
              DISCOUNT 50% SALE!
            </text>
            <text x="80" y="55" textAnchor="middle" className="text-2xl">🛍️ ✨</text>
            <text x="80" y="82" textAnchor="middle" className="text-[9px] font-bold fill-white">
              Tawaran Menarik Produk Baru
            </text>
            <text x="80" y="96" textAnchor="middle" className="text-[8px] fill-indigo-200">
              Media Reklame Visual
            </text>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#312e81" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Karya Gambar dan Tulisan Promosi = POSTER REKLAME 📢
          </text>
        </svg>
      );

    // 14. SBdP: Monumen Monas (Seni Patung Arsitektur 3 Dimensi)
    case 'k6-sbdp-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fefce8" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-950">
            Karya Seni Tiga Dimensi: Monumen Nasional (Monas) di Jakarta
          </text>
          {/* Monas silhouette */}
          <g transform="translate(210, 45)">
            {/* Base platform / Cawan Monas */}
            <rect x="-40" y="80" width="80" height="15" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
            <polygon points="-25,80 -35,65 35,65 25,80" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
            {/* Tall Obelisk Column */}
            <polygon points="-8,65 -4,15 4,15 8,65" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
            {/* Golden Flame at top */}
            <path d="M 0 0 Q -8 10 0 15 Q 8 10 0 0 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
            <circle cx="0" cy="8" r="4" fill="#f97316" />
          </g>
          {/* Bottom badge */}
          <rect x="40" y="172" width="340" height="34" rx="8" fill="#78350f" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Monas = Karya Seni Patung & Arsitektur Konstruksi 3 Dimensi 🏛️
          </text>
        </svg>
      );

    // 15. PJOK: Formasi Sepak Bola 4 - 4 - 2
    case 'k6-pjok-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="22" textAnchor="middle" className="text-xs font-bold fill-emerald-950">
            Taktik Sepak Bola: Formasi 4 - 4 - 2 (4 Bek, 4 Gelandang, 2 Striker)
          </text>
          {/* Football pitch half */}
          <g transform="translate(70, 42)">
            <rect width="280" height="120" rx="4" fill="#15803d" stroke="#ffffff" strokeWidth="2" />
            <line x1="140" y1="0" x2="140" y2="120" stroke="#ffffff" strokeWidth="1.5" />

            {/* Goalkeeper */}
            <circle cx="20" cy="60" r="5" fill="#facc15" />
            <text x="20" y="75" textAnchor="middle" className="text-[7px] font-bold fill-white">GK</text>

            {/* 4 Defenders (Bek) */}
            <g fill="#3b82f6">
              <circle cx="60" cy="20" r="5" />
              <circle cx="60" cy="45" r="5" />
              <circle cx="60" cy="75" r="5" />
              <circle cx="60" cy="100" r="5" />
            </g>
            <text x="60" y="115" textAnchor="middle" className="text-[8px] font-black fill-blue-200">4 Bek</text>

            {/* 4 Midfielders (Gelandang) */}
            <g fill="#f59e0b">
              <circle cx="130" cy="20" r="5" />
              <circle cx="130" cy="45" r="5" />
              <circle cx="130" cy="75" r="5" />
              <circle cx="130" cy="100" r="5" />
            </g>
            <text x="130" y="115" textAnchor="middle" className="text-[8px] font-black fill-amber-200">4 Gelandang</text>

            {/* 2 Forwards (Penyerang / Striker) */}
            <g fill="#ef4444">
              <circle cx="210" cy="40" r="5" />
              <circle cx="210" cy="80" r="5" />
            </g>
            <text x="210" y="105" textAnchor="middle" className="text-[8px] font-black fill-red-200">2 Penyerang</text>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#166534" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Formasi Tim Sepak Bola = 4 - 4 - 2 ⚽
          </text>
        </svg>
      );

    // 16. PJOK: Kotak Medis P3K (Kasa Steril & Plester)
    case 'k6-pjok-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fef2f2" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-red-950">
            Kotak Pertolongan Pertama (P3K): Kasa Steril dan Plester Pembalut
          </text>
          {/* First Aid Box */}
          <g transform="translate(150, 48)">
            <rect width="120" height="85" rx="10" fill="#ffffff" stroke="#dc2626" strokeWidth="3" />
            {/* Red Cross emblem */}
            <rect x="52" y="25" width="16" height="45" fill="#dc2626" />
            <rect x="38" y="39.5" width="44" height="16" fill="#dc2626" />
            <text x="60" y="80" textAnchor="middle" className="text-[10px] font-black fill-slate-800">KOTAK P3K</text>
          </g>
          {/* Medical items callout */}
          <rect x="50" y="145" width="320" height="24" rx="4" fill="#fee2e2" />
          <text x="210" y="161" textAnchor="middle" className="text-[11px] font-bold fill-red-900">
            Perlengkapan Luka Gores: Kasa Steril, Plester, Antiseptik 🩹
          </text>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#991b1b" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Peralatan Medis Darurat = Kasa Steril dan Plester Perban 🩺
          </text>
        </svg>
      );

    // 17. Basa Sunda: Pakarang Tradisional Kujang
    case 'k6-sunda-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fefce8" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-950">
            Pakarang Tradisional Khas Tatar Sunda: Senjata Pusaka Kujang
          </text>
          {/* Kujang blade shape */}
          <g transform="translate(160, 48)">
            <path
              d="M 40 10 C 60 10 90 25 80 50 C 70 70 85 85 70 95 L 45 95 C 40 70 45 50 35 40 Z"
              fill="#cbd5e1"
              stroke="#334155"
              strokeWidth="2.5"
            />
            {/* Eye holes in Kujang (Mata Kujang) */}
            <circle cx="55" cy="45" r="3" fill="#0f172a" />
            <circle cx="62" cy="55" r="3" fill="#0f172a" />
            <circle cx="60" cy="65" r="3" fill="#0f172a" />
            {/* Handle / Gagang */}
            <rect x="40" y="95" width="12" height="25" rx="2" fill="#78350f" />
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#78350f" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Pakarang Pusaka Sunda = SENJATA KUJANG ⚔️
          </text>
        </svg>
      );

    // 18. Basa Sunda: Panutup Biantara (Nyuhunkeun Hapunten)
    case 'k6-sunda-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fdf4ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-purple-950">
            Biantara Sunda: Bagian Panutup (Nyuhunkeun Hapunten)
          </text>
          {/* Babasan card */}
          <g transform="translate(60, 48)">
            <rect width="300" height="100" rx="8" fill="#ffffff" stroke="#c084fc" strokeWidth="2" />
            <text x="150" y="32" textAnchor="middle" className="text-xs font-black fill-purple-900">
              "Bilih aya saur saheulaan,
            </text>
            <text x="150" y="52" textAnchor="middle" className="text-xs font-black fill-purple-900">
              bobo sapanon carang sapakan..."
            </text>
            <text x="150" y="80" textAnchor="middle" className="text-[10px] font-bold fill-slate-700">
              Babasan ieu diucapkeun dina bagean:
            </text>
            <text x="150" y="94" textAnchor="middle" className="text-xs font-black fill-purple-950">
              PANUTUP BIANTARA (Mundut Panghapunten) ⭐
            </text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#581c87" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Bagean Panutup Biantara = Nyuhunkeun Hapunten 🙏
          </text>
        </svg>
      );

    // 19. Basa Jawa: Pasangan Aksara Jawa (Mateni Swara Vokal)
    case 'k6-jawa-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fefce8" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-950">
            Pasangan Aksara Jawa: Kanggo Mateni Swara Vokal Aksara Sigeg
          </text>
          {/* Pasangan mechanism */}
          <g transform="translate(80, 48)">
            <rect width="260" height="100" rx="8" fill="#ffffff" stroke="#d97706" strokeWidth="2" />
            <text x="130" y="34" textAnchor="middle" className="text-sm font-black fill-amber-950">
              Fungsi Pasangan Aksara Jawa:
            </text>
            <text x="130" y="62" textAnchor="middle" className="text-xs font-bold fill-slate-800">
              Mateni swara vokal [a] ing aksara
            </text>
            <text x="130" y="80" textAnchor="middle" className="text-xs font-black fill-red-800">
              sigeg (konsonan mati) sadurunge ⭐
            </text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#78350f" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Fungsi Pasangan = Mateni Swara Vokal Aksara Sigeg 📜
          </text>
        </svg>
      );

    // 20. Basa Jawa: Wasana Basa Sesorah (Panutup Pidato)
    case 'k6-jawa-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fdf4ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-purple-950">
            Perangan Sesorah (Pidato) Jawa: Wasana Basa (Panutup)
          </text>
          {/* Wasana basa card */}
          <g transform="translate(60, 48)">
            <rect width="300" height="100" rx="8" fill="#ffffff" stroke="#c084fc" strokeWidth="2" />
            <text x="150" y="32" textAnchor="middle" className="text-xs font-bold fill-slate-700">
              Perangan sesorah sing isine nyuwun pangapura:
            </text>
            <text x="150" y="60" textAnchor="middle" className="text-base font-black fill-purple-950">
              WASANA BASA (PANUTUP) ⭐
            </text>
            <text x="150" y="82" textAnchor="middle" className="text-[10px] font-medium fill-slate-500">
              "Mbok bilih wonten kiranging trapsila, nyuwun agunging pangaksama"
            </text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#581c87" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Panutup Pidato Nyuwun Pangaksama = WASANA BASA 📜
          </text>
        </svg>
      );

    default:
      return null;
  }
};
