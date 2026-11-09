import React from 'react';

export const getDiagramGrade2 = (imageKey: string): React.ReactNode | null => {
  switch (imageKey) {
    // 1. Matematika: Nilai Tempat 235 (2 Ratusan + 3 Puluhan + 5 Satuan)
    case 'k2-mtk-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Balok Nilai Tempat: 2 Ratusan + 3 Puluhan + 5 Satuan = 235
          </text>
          {/* 2 Ratusan */}
          <g transform="translate(30, 42)">
            <rect x="0" y="10" width="65" height="65" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="2" />
            <rect x="15" y="0" width="65" height="65" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="2" />
            <text x="40" y="90" textAnchor="middle" className="text-xs font-bold fill-blue-900">2 Ratusan</text>
            <text x="40" y="106" textAnchor="middle" className="text-xs font-black fill-blue-950">(200)</text>
          </g>
          <text x="145" y="85" textAnchor="middle" className="text-xl font-black fill-slate-400">+</text>
          {/* 3 Puluhan */}
          <g transform="translate(170, 42)">
            <rect x="0" y="10" width="14" height="65" rx="2" fill="#34d399" stroke="#059669" strokeWidth="1.5" />
            <rect x="20" y="10" width="14" height="65" rx="2" fill="#34d399" stroke="#059669" strokeWidth="1.5" />
            <rect x="40" y="10" width="14" height="65" rx="2" fill="#34d399" stroke="#059669" strokeWidth="1.5" />
            <text x="27" y="90" textAnchor="middle" className="text-xs font-bold fill-emerald-900">3 Puluhan</text>
            <text x="27" y="106" textAnchor="middle" className="text-xs font-black fill-emerald-950">(30)</text>
          </g>
          <text x="260" y="85" textAnchor="middle" className="text-xl font-black fill-slate-400">+</text>
          {/* 5 Satuan */}
          <g transform="translate(285, 42)">
            <rect x="5" y="10" width="14" height="14" rx="2" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
            <rect x="25" y="10" width="14" height="14" rx="2" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
            <rect x="45" y="10" width="14" height="14" rx="2" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
            <rect x="15" y="32" width="14" height="14" rx="2" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
            <rect x="35" y="32" width="14" height="14" rx="2" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
            <text x="32" y="90" textAnchor="middle" className="text-xs font-bold fill-amber-900">5 Satuan</text>
            <text x="32" y="106" textAnchor="middle" className="text-xs font-black fill-amber-950">(5)</text>
          </g>
          {/* Total box */}
          <rect x="110" y="170" width="200" height="34" rx="8" fill="#1e293b" />
          <text x="210" y="192" textAnchor="middle" className="text-sm font-black fill-yellow-400">
            Total = 235 (Dua Ratus Tiga Puluh Lima)
          </text>
        </svg>
      );

    // 2. Matematika: Jam Analog 07.30 (Setengah Delapan)
    case 'k2-mtk-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0f9ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-sky-950">
            Membaca Jam Analog: Pukul 07.30 (Setengah Delapan)
          </text>
          {/* Clock face */}
          <circle cx="210" cy="105" r="68" fill="#ffffff" stroke="#0369a1" strokeWidth="4" />
          {/* Clock numbers */}
          <text x="210" y="55" textAnchor="middle" className="text-xs font-black fill-slate-800">12</text>
          <text x="260" y="109" textAnchor="middle" className="text-xs font-black fill-slate-800">3</text>
          <text x="210" y="162" textAnchor="middle" className="text-xs font-black fill-slate-800">6</text>
          <text x="160" y="109" textAnchor="middle" className="text-xs font-black fill-slate-800">9</text>
          <text x="175" y="140" textAnchor="middle" className="text-[10px] font-bold fill-slate-500">7</text>
          <text x="165" y="125" textAnchor="middle" className="text-[10px] font-bold fill-slate-500">8</text>
          {/* Hour hand between 7 and 8 (red) */}
          <line x1="210" y1="105" x2="178" y2="128" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" />
          {/* Minute hand straight to 6 (blue) */}
          <line x1="210" y1="105" x2="210" y2="152" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" />
          {/* Center pin */}
          <circle cx="210" cy="105" r="5" fill="#0f172a" />
          {/* Digital Badge */}
          <rect x="130" y="180" width="160" height="28" rx="6" fill="#0284c7" />
          <text x="210" y="198" textAnchor="middle" className="text-xs font-black fill-white">
            07.30 (Setengah Delapan) ⏰
          </text>
        </svg>
      );

    // 3. Bahasa Indonesia: Tanda Tanya (?)
    case 'k2-indo-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fdf4ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-fuchsia-950">
            Tanda Baca: Tanda Tanya (?) di Akhir Kalimat Tanya
          </text>
          {/* Big Question Mark */}
          <g transform="translate(140, 45)">
            <rect width="140" height="110" rx="12" fill="#fae8ff" stroke="#c084fc" strokeWidth="2" />
            <text x="70" y="80" textAnchor="middle" className="text-7xl font-black fill-purple-700">?</text>
          </g>
          {/* Example Sentence */}
          <rect x="50" y="165" width="320" height="42" rx="8" fill="#581c87" />
          <text x="210" y="184" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Contoh: "Di mana rumahmu tinggal?" ❓
          </text>
          <text x="210" y="198" textAnchor="middle" className="text-[10px] font-medium fill-purple-200">
            Digunakan untuk menanyakan sesuatu kepada orang lain
          </text>
        </svg>
      );

    // 4. Bahasa Indonesia: Fabel Si Kancil dan Buaya
    case 'k2-indo-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-emerald-950">
            Fabel Nusantara: Kancil yang Cerdik Menyeberangi Sungai
          </text>
          {/* River */}
          <rect x="30" y="100" width="360" height="50" rx="6" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
          {/* Crocodiles in river */}
          <g transform="translate(130, 105)">
            <ellipse cx="20" cy="18" rx="22" ry="8" fill="#15803d" />
            <text x="20" y="22" textAnchor="middle" className="text-xs">🐊 1</text>
            <ellipse cx="70" cy="18" rx="22" ry="8" fill="#15803d" />
            <text x="70" y="22" textAnchor="middle" className="text-xs">🐊 2</text>
            <ellipse cx="120" cy="18" rx="22" ry="8" fill="#15803d" />
            <text x="120" y="22" textAnchor="middle" className="text-xs">🐊 3</text>
          </g>
          {/* Kancil jumping across */}
          <g transform="translate(60, 50)">
            <ellipse cx="20" cy="25" rx="16" ry="12" fill="#ca8a04" />
            <circle cx="34" cy="18" r="8" fill="#ca8a04" />
            <text x="20" y="48" textAnchor="middle" className="text-xs font-black fill-amber-950">Si Kancil 🦌</text>
          </g>
          {/* Path of jump */}
          <path d="M 80 70 Q 150 35 240 70 Q 300 35 340 75" fill="none" stroke="#eab308" strokeWidth="2.5" strokeDasharray="4 3" />
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="30" rx="8" fill="#166534" />
          <text x="210" y="195" textAnchor="middle" className="text-xs font-black fill-white">
            Tokoh: Kancil Cerdik Menyeberangi Sungai
          </text>
        </svg>
      );

    // 5. IPAS: Metamorfosis Kupu-Kupu (Telur -> Ulat -> Kepompong -> Kupu-kupu)
    case 'k2-ipas-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="22" textAnchor="middle" className="text-xs font-bold fill-emerald-950">
            Daur Hidup Metamorfosis Sempurna Kupu-Kupu
          </text>
          {/* 4 Stages */}
          <g transform="translate(20, 42)">
            {/* 1. Telur */}
            <rect x="0" y="15" width="80" height="85" rx="8" fill="#fef9c3" stroke="#eab308" strokeWidth="2" />
            <ellipse cx="40" cy="50" rx="14" ry="10" fill="#84cc16" />
            <text x="40" y="54" textAnchor="middle" className="text-sm">🥚</text>
            <text x="40" y="80" textAnchor="middle" className="text-[10px] font-black fill-amber-900">1. Telur</text>
            <text x="90" y="60" className="text-base font-black fill-slate-400">→</text>

            {/* 2. Ulat (Larva) */}
            <rect x="100" y="15" width="80" height="85" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
            <text x="140" y="54" textAnchor="middle" className="text-xl">🐛</text>
            <text x="140" y="80" textAnchor="middle" className="text-[10px] font-black fill-green-900">2. Ulat</text>
            <text x="190" y="60" className="text-base font-black fill-slate-400">→</text>

            {/* 3. Kepompong (Pupa) */}
            <rect x="200" y="15" width="80" height="85" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
            <ellipse cx="240" cy="48" rx="12" ry="18" fill="#b45309" />
            <text x="240" y="80" textAnchor="middle" className="text-[10px] font-black fill-amber-950">3. Kepompong</text>
            <text x="290" y="60" className="text-base font-black fill-slate-400">→</text>

            {/* 4. Kupu-Kupu */}
            <rect x="300" y="15" width="80" height="85" rx="8" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" />
            <text x="340" y="54" textAnchor="middle" className="text-xl">🦋</text>
            <text x="340" y="80" textAnchor="middle" className="text-[10px] font-black fill-pink-900">4. Kupu-Kupu</text>
          </g>
          {/* Summary */}
          <rect x="40" y="165" width="340" height="38" rx="8" fill="#15803d" />
          <text x="210" y="182" textAnchor="middle" className="text-xs font-black fill-white">
            Urutan: Telur → Ulat (Larva) → Kepompong (Pupa) → Kupu-kupu
          </text>
          <text x="210" y="196" textAnchor="middle" className="text-[10px] font-semibold fill-emerald-200">
            Metamorfosis Sempurna
          </text>
        </svg>
      );

    // 6. IPAS: Tiga Wujud Benda (Padat, Cair, Gas)
    case 'k2-ipas-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Tiga Wujud Benda: Padat (Es), Cair (Air), dan Gas (Uap)
          </text>
          {/* 3 Containers */}
          <g transform="translate(30, 45)">
            {/* Padat: Ice Cube */}
            <rect x="0" y="10" width="100" height="90" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
            <rect x="25" y="25" width="50" height="40" rx="4" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="50" y="50" textAnchor="middle" className="text-lg">🧊</text>
            <text x="50" y="85" textAnchor="middle" className="text-xs font-black fill-blue-900">1. PADAT (Es)</text>

            {/* Cair: Water Glass */}
            <rect x="130" y="10" width="100" height="90" rx="8" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2" />
            <path d="M 160 30 L 165 70 Q 180 75 195 70 L 200 30 Z" fill="#2dd4bf" stroke="#0f766e" strokeWidth="1.5" />
            <text x="180" y="52" textAnchor="middle" className="text-lg">💧</text>
            <text x="180" y="85" textAnchor="middle" className="text-xs font-black fill-teal-900">2. CAIR (Air)</text>

            {/* Gas: Steam from Kettle */}
            <rect x="260" y="10" width="100" height="90" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
            <text x="310" y="48" textAnchor="middle" className="text-2xl">♨️</text>
            <text x="310" y="85" textAnchor="middle" className="text-xs font-black fill-red-900">3. GAS (Uap)</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="170" width="320" height="34" rx="8" fill="#0f172a" />
          <text x="210" y="192" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Wujud Zat: Padat, Cair, dan Gas
          </text>
        </svg>
      );

    // 7. PKn: Pohon Beringin (Sila 3)
    case 'k2-pkn-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-emerald-950">
            Simbol Sila Ketiga: Pohon Beringin Berlatar Putih
          </text>
          {/* Shield outline */}
          <path d="M 145 42 L 275 42 L 275 115 Q 210 175 145 115 Z" fill="#ffffff" stroke="#15803d" strokeWidth="4" />
          {/* Banyan tree */}
          <g transform="translate(210, 100)">
            {/* Trunk */}
            <rect x="-8" y="0" width="16" height="30" fill="#78350f" />
            {/* Hanging roots */}
            <line x1="-15" y1="0" x2="-15" y2="25" stroke="#92400e" strokeWidth="2" />
            <line x1="15" y1="0" x2="15" y2="25" stroke="#92400e" strokeWidth="2" />
            {/* Foliage */}
            <circle cx="0" cy="-15" r="32" fill="#16a34a" />
            <circle cx="-20" cy="-8" r="22" fill="#15803d" />
            <circle cx="20" cy="-8" r="22" fill="#15803d" />
            <circle cx="0" cy="-30" r="24" fill="#22c55e" />
          </g>
          {/* Bottom banner */}
          <rect x="40" y="180" width="340" height="28" rx="6" fill="#15803d" />
          <text x="210" y="198" textAnchor="middle" className="text-xs font-black fill-white">
            Sila 3: "Persatuan Indonesia" (Pohon Beringin) 🌳
          </text>
        </svg>
      );

    // 8. PKn: Gotong Royong Membersihkan Lingkungan
    case 'k2-pkn-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#eff6ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-blue-950">
            Sikap Terpuji: Gotong Royong Membersihkan Halaman Sekolah
          </text>
          {/* 3 students cooperating */}
          <g transform="translate(80, 50)">
            {/* Student 1 sweeping */}
            <g transform="translate(30, 10)">
              <circle cx="15" cy="15" r="12" fill="#fed7aa" />
              <rect x="8" y="27" width="14" height="28" rx="3" fill="#3b82f6" />
              <line x1="10" y1="35" x2="2" y2="65" stroke="#78350f" strokeWidth="3" />
              <rect x="-4" y="65" width="12" height="12" fill="#d97706" rx="2" />
              <text x="15" y="90" textAnchor="middle" className="text-[9px] font-bold fill-slate-700">Menyapu</text>
            </g>
            {/* Student 2 collecting trash */}
            <g transform="translate(120, 10)">
              <circle cx="15" cy="15" r="12" fill="#fed7aa" />
              <rect x="8" y="27" width="14" height="28" rx="3" fill="#ef4444" />
              <rect x="22" y="45" width="18" height="24" rx="4" fill="#10b981" />
              <text x="15" y="90" textAnchor="middle" className="text-[9px] font-bold fill-slate-700">Tempat Sampah</text>
            </g>
            {/* Student 3 watering plants */}
            <g transform="translate(200, 10)">
              <circle cx="15" cy="15" r="12" fill="#fed7aa" />
              <rect x="8" y="27" width="14" height="28" rx="3" fill="#eab308" />
              <text x="25" y="55" className="text-sm">🪴</text>
              <text x="15" y="90" textAnchor="middle" className="text-[9px] font-bold fill-slate-700">Menyiram</text>
            </g>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="178" width="320" height="28" rx="8" fill="#1e40af" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Nilai Karakter: Gotong Royong dan Peduli Lingkungan 🤝
          </text>
        </svg>
      );

    // 9. Coding: Algoritma Menanam Bunga (1. Gali -> 2. Biji -> 3. Siram)
    case 'k2-coding-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="22" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Algoritma: 3 Langkah Berurutan Menanam Bunga
          </text>
          {/* 3 Steps */}
          <g transform="translate(25, 45)">
            {/* Step 1 */}
            <rect x="0" y="5" width="110" height="90" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
            <text x="55" y="42" textAnchor="middle" className="text-2xl">⛏️</text>
            <text x="55" y="70" textAnchor="middle" className="text-xs font-black fill-amber-950">1. Gali Lubang</text>
            <text x="120" y="55" className="text-base font-black fill-slate-400">→</text>

            {/* Step 2 */}
            <rect x="130" y="5" width="110" height="90" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
            <text x="185" y="42" textAnchor="middle" className="text-2xl">🌱</text>
            <text x="185" y="70" textAnchor="middle" className="text-xs font-black fill-green-950">2. Masukkan Biji</text>
            <text x="250" y="55" className="text-base font-black fill-slate-400">→</text>

            {/* Step 3 */}
            <rect x="260" y="5" width="110" height="90" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
            <text x="315" y="42" textAnchor="middle" className="text-2xl">💧</text>
            <text x="315" y="70" textAnchor="middle" className="text-xs font-black fill-sky-950">3. Siram Air</text>
          </g>
          {/* Bottom badge */}
          <rect x="40" y="165" width="340" height="38" rx="8" fill="#15803d" />
          <text x="210" y="182" textAnchor="middle" className="text-xs font-black fill-white">
            Urutan: 1. Gali Lubang → 2. Masukkan Biji → 3. Siram Air
          </text>
          <text x="210" y="196" textAnchor="middle" className="text-[10px] font-semibold fill-emerald-200">
            Algoritma harus berurutan secara logis agar bunga tumbuh subur
          </text>
        </svg>
      );

    // 10. Coding: Bagan Input - Proses - Output
    case 'k2-coding-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Sistem Komputer: Input (Masukan) → Proses → Output (Keluaran)
          </text>
          {/* Diagram IPO */}
          <g transform="translate(30, 48)">
            {/* Input */}
            <rect x="0" y="10" width="100" height="80" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="50" y="42" textAnchor="middle" className="text-xl">⌨️</text>
            <text x="50" y="65" textAnchor="middle" className="text-xs font-black fill-blue-900">INPUT</text>
            <text x="50" y="78" textAnchor="middle" className="text-[9px] font-bold fill-blue-700">(Keyboard)</text>

            <text x="115" y="55" className="text-lg font-black fill-slate-500">→</text>

            {/* Process */}
            <rect x="130" y="10" width="100" height="80" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
            <text x="180" y="42" textAnchor="middle" className="text-xl">⚙️</text>
            <text x="180" y="65" textAnchor="middle" className="text-xs font-black fill-amber-900">PROSES</text>
            <text x="180" y="78" textAnchor="middle" className="text-[9px] font-bold fill-amber-700">(CPU / Otak)</text>

            <text x="245" y="55" className="text-lg font-black fill-slate-500">→</text>

            {/* Output */}
            <rect x="260" y="10" width="100" height="80" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2.5" />
            <text x="310" y="42" textAnchor="middle" className="text-xl">🖥️</text>
            <text x="310" y="65" textAnchor="middle" className="text-xs font-black fill-green-950">OUTPUT ⭐</text>
            <text x="310" y="78" textAnchor="middle" className="text-[9px] font-bold fill-green-700">(Layar Monitor)</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="172" width="320" height="32" rx="8" fill="#0f172a" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Keluaran di Layar Monitor = OUTPUT 💻
          </text>
        </svg>
      );

    // 11. Bahasa Inggris: Family Tree - Grandfather (Kakek)
    case 'k2-inggris-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="22" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Family Tree: Grandfather (Father of our parents)
          </text>
          {/* Tree hierarchy */}
          <g transform="translate(130, 42)">
            {/* Grandfather at the top */}
            <rect x="35" y="0" width="90" height="52" rx="8" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2.5" />
            <text x="80" y="24" textAnchor="middle" className="text-lg">👴</text>
            <text x="80" y="42" textAnchor="middle" className="text-[10px] font-black fill-indigo-950">GRANDFATHER</text>
            {/* Connecting lines */}
            <line x1="80" y1="52" x2="80" y2="70" stroke="#94a3b8" strokeWidth="2" />
            <line x1="20" y1="70" x2="140" y2="70" stroke="#94a3b8" strokeWidth="2" />
            <line x1="20" y1="70" x2="20" y2="85" stroke="#94a3b8" strokeWidth="2" />
            <line x1="140" y1="70" x2="140" y2="85" stroke="#94a3b8" strokeWidth="2" />
            {/* Father & Mother below */}
            <rect x="-20" y="85" width="80" height="42" rx="6" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="20" y="105" textAnchor="middle" className="text-sm">👨</text>
            <text x="20" y="120" textAnchor="middle" className="text-[9px] font-bold fill-slate-800">Father</text>

            <rect x="100" y="85" width="80" height="42" rx="6" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="140" y="105" textAnchor="middle" className="text-sm">👩</text>
            <text x="140" y="120" textAnchor="middle" className="text-[9px] font-bold fill-slate-800">Mother</text>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="180" width="300" height="28" rx="8" fill="#312e81" />
          <text x="210" y="198" textAnchor="middle" className="text-xs font-black fill-white">
            GRANDFATHER = Kakek 👴
          </text>
        </svg>
      );

    // 12. Bahasa Inggris: Dining Tools (Spoon and Fork)
    case 'k2-inggris-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdfa" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-teal-950">
            Dining Tools: Spoon (Sendok) and Fork (Garpu)
          </text>
          {/* Spoon and Fork illustration */}
          <g transform="translate(130, 48)">
            {/* Spoon */}
            <g transform="translate(30, 0)">
              <ellipse cx="20" cy="25" rx="16" ry="22" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
              <rect x="17" y="45" width="6" height="65" rx="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
              <text x="20" y="126" textAnchor="middle" className="text-xs font-bold fill-slate-800">SPOON</text>
              <text x="20" y="138" textAnchor="middle" className="text-[10px] font-semibold fill-slate-500">(Sendok)</text>
            </g>
            {/* Fork */}
            <g transform="translate(110, 0)">
              {/* Prongs */}
              <path d="M 6 10 L 6 32 Q 20 40 34 32 L 34 10" fill="none" stroke="#475569" strokeWidth="2" />
              <line x1="15" y1="10" x2="15" y2="35" stroke="#475569" strokeWidth="2" />
              <line x1="25" y1="10" x2="25" y2="35" stroke="#475569" strokeWidth="2" />
              <rect x="17" y="38" width="6" height="72" rx="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
              <text x="20" y="126" textAnchor="middle" className="text-xs font-bold fill-slate-800">FORK</text>
              <text x="20" y="138" textAnchor="middle" className="text-[10px] font-semibold fill-slate-500">(Garpu)</text>
            </g>
          </g>
          {/* Bottom badge */}
          <rect x="70" y="180" width="280" height="28" rx="8" fill="#0f766e" />
          <text x="210" y="198" textAnchor="middle" className="text-xs font-black fill-white">
            Tableware: Spoon and Fork 🍴
          </text>
        </svg>
      );

    // 13. SBdP: Angklung (Alat Musik Bambu Digoyang)
    case 'k2-sbdp-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fefce8" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-950">
            Alat Musik Tradisional: Angklung dari Bambu (Digoyang)
          </text>
          {/* Bamboo Angklung frame */}
          <g transform="translate(150, 45)">
            {/* Frame base */}
            <rect x="0" y="95" width="120" height="12" rx="3" fill="#b45309" stroke="#78350f" strokeWidth="1.5" />
            <line x1="15" y1="10" x2="15" y2="95" stroke="#b45309" strokeWidth="5" />
            <line x1="105" y1="10" x2="105" y2="95" stroke="#b45309" strokeWidth="5" />
            <line x1="10" y1="20" x2="110" y2="20" stroke="#b45309" strokeWidth="5" />
            {/* Bamboo tubes */}
            <rect x="35" y="30" width="16" height="65" rx="3" fill="#ca8a04" stroke="#78350f" strokeWidth="1.5" />
            <rect x="70" y="15" width="18" height="80" rx="3" fill="#ca8a04" stroke="#78350f" strokeWidth="1.5" />
            {/* Sound waves vibration */}
            <path d="M 5 50 Q -5 60 5 70" fill="none" stroke="#d97706" strokeWidth="2" />
            <path d="M 115 50 Q 125 60 115 70" fill="none" stroke="#d97706" strokeWidth="2" />
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="34" rx="8" fill="#78350f" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Alat Musik: Angklung (Khas Sunda / Jawa Barat) 🎶
          </text>
          <text x="210" y="205" textAnchor="middle" className="text-[10px] font-medium fill-amber-200">
            Dimainkan dengan cara digoyangkan
          </text>
        </svg>
      );

    // 14. SBdP: Tari Merak (Gerakan Merentangkan Selendang)
    case 'k2-sbdp-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-emerald-950">
            Tari Tradisional: Tari Merak (Rentangan Selendang Sayap Indah)
          </text>
          {/* Dancer with Peacock wings shawl */}
          <g transform="translate(150, 45)">
            {/* Peacock spread wings shawl */}
            <path d="M 60 60 C 0 10 -20 80 60 90 Z" fill="#059669" stroke="#047857" strokeWidth="2" />
            <path d="M 60 60 C 120 10 140 80 60 90 Z" fill="#059669" stroke="#047857" strokeWidth="2" />
            {/* Peacock eye feather motifs */}
            <circle cx="15" cy="50" r="8" fill="#0284c7" />
            <circle cx="15" cy="50" r="4" fill="#facc15" />
            <circle cx="105" cy="50" r="8" fill="#0284c7" />
            <circle cx="105" cy="50" r="4" fill="#facc15" />
            {/* Dancer body & crown */}
            <circle cx="60" cy="30" r="14" fill="#fed7aa" />
            {/* Siger crown */}
            <polygon points="50,22 60,10 70,22" fill="#facc15" stroke="#b45309" strokeWidth="1" />
            <rect x="52" y="44" width="16" height="45" rx="4" fill="#15803d" />
          </g>
          {/* Bottom badge */}
          <rect x="60" y="178" width="300" height="30" rx="8" fill="#065f46" />
          <text x="210" y="198" textAnchor="middle" className="text-xs font-black fill-yellow-200">
            Tari Tradisional: Tari Merak 🦚
          </text>
        </svg>
      );

    // 15. PJOK: Sikap Pesawat Terbang (Keseimbangan)
    case 'k2-pjok-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#eff6ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-blue-950">
            Senam Ketangkasan: Sikap Pesawat Terbang (Keseimbangan)
          </text>
          {/* Floor */}
          <line x1="40" y1="165" x2="380" y2="165" stroke="#94a3b8" strokeWidth="2" />
          {/* Airplane stance */}
          <g transform="translate(150, 50)">
            {/* Supporting leg standing on ground */}
            <line x1="50" y1="95" x2="50" y2="115" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
            {/* Torso horizontal */}
            <line x1="20" y1="75" x2="90" y2="75" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round" />
            {/* Head looking forward */}
            <circle cx="98" cy="73" r="12" fill="#fed7aa" />
            {/* Lifted leg extending back horizontally */}
            <line x1="20" y1="75" x2="-25" y2="75" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
            {/* Arms spread like airplane wings */}
            <line x1="55" y1="75" x2="55" y2="40" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
            <line x1="55" y1="75" x2="55" y2="100" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#1d4ed8" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Sikap Pesawat Terbang = Melatih Keseimbangan ✈️
          </text>
        </svg>
      );

    // 16. PJOK: Lari Estafet (Tongkat Sambung)
    case 'k2-pjok-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fef2f2" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-red-950">
            Olahraga Atletik: Lari Estafet (Menyerahkan Tongkat Sambung)
          </text>
          {/* Running track */}
          <line x1="30" y1="160" x2="390" y2="160" stroke="#ef4444" strokeWidth="3" />
          {/* Two runners passing the baton */}
          <g transform="translate(110, 50)">
            {/* Runner 1 (giver) on left */}
            <circle cx="40" cy="30" r="14" fill="#fed7aa" />
            <line x1="40" y1="44" x2="40" y2="85" stroke="#2563eb" strokeWidth="6" strokeLinecap="round" />
            <line x1="40" y1="85" x2="20" y2="110" stroke="#1e293b" strokeWidth="4" />
            <line x1="40" y1="85" x2="60" y2="105" stroke="#1e293b" strokeWidth="4" />
            {/* Hand extending forward holding baton */}
            <line x1="40" y1="55" x2="85" y2="60" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />

            {/* The Baton */}
            <rect x="85" y="50" width="22" height="6" rx="2" fill="#eab308" stroke="#a16207" strokeWidth="1.5" transform="rotate(-15 95 53)" />

            {/* Runner 2 (receiver) on right */}
            <circle cx="150" cy="30" r="14" fill="#fed7aa" />
            <line x1="150" y1="44" x2="150" y2="85" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" />
            <line x1="150" y1="85" x2="130" y2="105" stroke="#1e293b" strokeWidth="4" />
            <line x1="150" y1="85" x2="170" y2="110" stroke="#1e293b" strokeWidth="4" />
            {/* Hand extending backward to grab baton */}
            <line x1="150" y1="55" x2="105" y2="60" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#b91c1c" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Lari Estafet (Lari Sambung Beregu) 🏃💨
          </text>
        </svg>
      );

    // 17. Basa Sunda: Angklung tina Awi
    case 'k2-sunda-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fefce8" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-950">
            Waditra Musik Sunda: Angklung tina Awi (Dioyagkeun)
          </text>
          {/* Bamboo Angklung */}
          <g transform="translate(150, 45)">
            <rect x="0" y="95" width="120" height="12" rx="3" fill="#b45309" />
            <line x1="15" y1="10" x2="15" y2="95" stroke="#b45309" strokeWidth="5" />
            <line x1="105" y1="10" x2="105" y2="95" stroke="#b45309" strokeWidth="5" />
            <line x1="10" y1="20" x2="110" y2="20" stroke="#b45309" strokeWidth="5" />
            <rect x="35" y="30" width="16" height="65" rx="3" fill="#ca8a04" stroke="#78350f" strokeWidth="1.5" />
            <rect x="70" y="15" width="18" height="80" rx="3" fill="#ca8a04" stroke="#78350f" strokeWidth="1.5" />
          </g>
          {/* Bottom badge */}
          <rect x="60" y="178" width="300" height="30" rx="8" fill="#78350f" />
          <text x="210" y="198" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Waditra: Angklung (Dioyagkeun)
          </text>
        </svg>
      );

    // 18. Basa Sunda: Kaulinan Oray-Orayan
    case 'k2-sunda-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-emerald-950">
            Kaulinan Barudak Lembur Sunda: Oray-Orayan
          </text>
          {/* Line of children holding shoulders like a snake */}
          <g transform="translate(60, 50)">
            {[0, 1, 2, 3].map((i) => (
              <g key={i} transform={`translate(${i * 70}, 0)`}>
                <circle cx="20" cy="20" r="14" fill="#fed7aa" />
                <rect x="12" y="34" width="16" height="30" rx="3" fill={i % 2 === 0 ? '#3b82f6' : '#10b981'} />
                {i > 0 && (
                  <line x1="0" y1="42" x2="12" y2="42" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />
                )}
                <line x1="16" y1="64" x2="12" y2="90" stroke="#1e293b" strokeWidth="3" />
                <line x1="24" y1="64" x2="28" y2="90" stroke="#1e293b" strokeWidth="3" />
              </g>
            ))}
          </g>
          {/* Song lyrics snippet */}
          <rect x="50" y="145" width="320" height="26" rx="6" fill="#ffffff" stroke="#15803d" strokeWidth="1.5" />
          <text x="210" y="162" textAnchor="middle" className="text-xs font-black fill-emerald-800">
            "Oray-orayan luar léor mapay sawah..." 🐍
          </text>
          {/* Bottom badge */}
          <rect x="50" y="178" width="320" height="30" rx="8" fill="#166534" />
          <text x="210" y="198" textAnchor="middle" className="text-xs font-black fill-white">
            Kaulinan Tradisional: Oray-Orayan
          </text>
        </svg>
      );

    // 19. Basa Jawa: Gundhul-Gundhul Pacul (Aja Sombong)
    case 'k2-jawa-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fefce8" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-950">
            Tembang Dolanan Jawa: Gundhul-Gundhul Pacul (Nyunggi Wakul)
          </text>
          {/* Child carrying basket on head */}
          <g transform="translate(170, 45)">
            {/* Basket (Wakul) on head */}
            <polygon points="10,18 70,18 60,35 20,35" fill="#d97706" stroke="#78350f" strokeWidth="2" />
            <text x="40" y="14" textAnchor="middle" className="text-[10px] font-bold fill-amber-900">Wakul Segi</text>
            {/* Head */}
            <circle cx="40" cy="50" r="16" fill="#fed7aa" />
            <rect x="28" y="66" width="24" height="35" rx="4" fill="#3b82f6" />
            {/* Hands balancing basket */}
            <path d="M 28 75 L 15 50 L 22 30" fill="none" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />
            <path d="M 52 75 L 65 50 L 58 30" fill="none" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />
          </g>
          {/* Moral message */}
          <rect x="50" y="172" width="320" height="36" rx="8" fill="#854d0e" />
          <text x="210" y="190" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Pesen Moral: Aja Sombong & Sembrono Nampa Amanah
          </text>
          <text x="210" y="202" textAnchor="middle" className="text-[10px] font-medium fill-amber-100">
            "Wakul ngglimpang segane dadi saratan"
          </text>
        </svg>
      );

    // 20. Basa Jawa: Jeneng Anak Kewan (Anak Pitik = Kuthuk)
    case 'k2-jawa-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fefce8" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-950">
            Kewan Basa Jawa: Anak Pitik Diarani "Kuthuk"
          </text>
          {/* Hen & Chick */}
          <g transform="translate(100, 48)">
            {/* Mother Hen on left */}
            <g transform="translate(30, 0)">
              <ellipse cx="40" cy="50" rx="30" ry="24" fill="#ca8a04" />
              <circle cx="65" cy="35" r="16" fill="#b45309" />
              <polygon points="80,35 92,40 80,45" fill="#facc15" />
              <text x="40" y="90" textAnchor="middle" className="text-xs font-bold fill-amber-900">Babon Pitik (Induk)</text>
            </g>
            {/* Little Chick (Kuthuk) on right - HIGHLIGHTED */}
            <g transform="translate(150, 15)">
              <ellipse cx="20" cy="40" rx="18" ry="14" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
              <circle cx="32" cy="28" r="12" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
              <polygon points="44,28 54,32 44,36" fill="#ea580c" />
              <circle cx="34" cy="26" r="2.5" fill="#0f172a" />
              <text x="25" y="75" textAnchor="middle" className="text-xs font-black fill-amber-950">KUTHUK ⭐</text>
            </g>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="34" rx="8" fill="#1e293b" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Anak Kucing = Cemeng | Anak Pitik = Kuthuk 🐥
          </text>
          <text x="210" y="204" textAnchor="middle" className="text-[10px] font-medium fill-slate-300">
            Jeneng anak kewan ing kasusastran Jawa
          </text>
        </svg>
      );

    default:
      return null;
  }
};
