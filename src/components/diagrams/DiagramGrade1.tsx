import React from 'react';

export const getDiagramGrade1 = (imageKey: string): React.ReactNode | null => {
  switch (imageKey) {
    // 1. Matematika: 5 Apel Merah + 3 Apel Hijau = 8
    case 'k1-mtk-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Keranjang Buah Apel: 5 Apel Merah + 3 Apel Hijau
          </text>
          {/* Basket */}
          <path d="M 80 110 Q 210 90 340 110 L 315 190 Q 210 208 105 190 Z" fill="#d97706" stroke="#92400e" strokeWidth="3.5" />
          <path d="M 90 110 Q 210 50 330 110" fill="none" stroke="#b45309" strokeWidth="5" strokeLinecap="round" />
          {/* 5 Red Apples */}
          <g>
            <circle cx="125" cy="120" r="17" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
            <circle cx="160" cy="112" r="17" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
            <circle cx="195" cy="120" r="17" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
            <circle cx="142" cy="150" r="17" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
            <circle cx="178" cy="152" r="17" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
          </g>
          {/* 3 Green Apples */}
          <g>
            <circle cx="235" cy="115" r="17" fill="#22c55e" stroke="#166534" strokeWidth="2" />
            <circle cx="270" cy="122" r="17" fill="#22c55e" stroke="#166534" strokeWidth="2" />
            <circle cx="230" cy="152" r="17" fill="#22c55e" stroke="#166534" strokeWidth="2" />
          </g>
          {/* Badges */}
          <rect x="80" y="186" width="95" height="24" rx="6" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" />
          <text x="127" y="202" textAnchor="middle" className="text-xs font-bold fill-red-800">5 Apel Merah</text>
          <text x="195" y="203" textAnchor="middle" className="text-sm font-black fill-slate-700">+</text>
          <rect x="215" y="186" width="95" height="24" rx="6" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5" />
          <text x="262" y="202" textAnchor="middle" className="text-xs font-bold fill-green-800">3 Apel Hijau</text>
          <text x="328" y="203" textAnchor="middle" className="text-sm font-black fill-slate-700">=</text>
          <rect x="348" y="186" width="55" height="24" rx="6" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="1.5" />
          <text x="375" y="202" textAnchor="middle" className="text-xs font-black fill-indigo-900">8 Buah</text>
        </svg>
      );

    // 2. Matematika: Tiga Bangun Datar Dasar (Segitiga Kuning, Lingkaran Biru, Persegi Merah)
    case 'k1-mtk-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Tiga Bentuk Bangun Datar Sederhana
          </text>
          {/* Segitiga Kuning */}
          <polygon points="90,60 40,150 140,150" fill="#facc15" stroke="#ca8a04" strokeWidth="3.5" />
          <rect x="45" y="165" width="90" height="36" rx="6" fill="#fef9c3" stroke="#eab308" strokeWidth="1" />
          <text x="90" y="180" textAnchor="middle" className="text-xs font-black fill-amber-950">Segitiga</text>
          <text x="90" y="195" textAnchor="middle" className="text-[10px] font-bold fill-amber-800">Kuning (3 Sisi)</text>

          {/* Lingkaran Biru */}
          <circle cx="210" cy="105" r="45" fill="#38bdf8" stroke="#0284c7" strokeWidth="3.5" />
          <rect x="165" y="165" width="90" height="36" rx="6" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1" />
          <text x="210" y="180" textAnchor="middle" className="text-xs font-black fill-sky-950">Lingkaran</text>
          <text x="210" y="195" textAnchor="middle" className="text-[10px] font-bold fill-sky-800">Biru (1 Sisi Lengkung)</text>

          {/* Persegi Merah */}
          <rect x="285" y="60" width="90" height="90" rx="6" fill="#f87171" stroke="#dc2626" strokeWidth="3.5" />
          <rect x="285" y="165" width="90" height="36" rx="6" fill="#fee2e2" stroke="#f87171" strokeWidth="1" />
          <text x="330" y="180" textAnchor="middle" className="text-xs font-black fill-red-950">Persegi</text>
          <text x="330" y="195" textAnchor="middle" className="text-[10px] font-bold fill-red-800">Merah (4 Sisi)</text>
        </svg>
      );

    // 3. Bahasa Indonesia: Ayam Jantan Berkokok berawalan "A"
    case 'k1-indo-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fefce8" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-900">
            Mengenal Huruf Vokal Awal: [A - Y - A - M]
          </text>
          {/* Rooster illustration */}
          <g transform="translate(100, 40)">
            <ellipse cx="80" cy="85" rx="36" ry="28" fill="#d97706" />
            <circle cx="115" cy="55" r="20" fill="#b45309" />
            {/* Comb */}
            <path d="M 105 38 Q 112 28 118 36 Q 124 25 130 38" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
            {/* Beak */}
            <polygon points="135,55 152,60 135,66" fill="#facc15" stroke="#b45309" strokeWidth="1.5" />
            {/* Wattle */}
            <ellipse cx="128" cy="72" rx="6" ry="10" fill="#dc2626" />
            {/* Eye */}
            <circle cx="124" cy="52" r="3" fill="#0f172a" />
            {/* Tail feathers */}
            <path d="M 45 75 C 20 40 10 90 45 95" stroke="#047857" strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M 45 80 C 15 65 15 110 50 100" stroke="#0284c7" strokeWidth="6" fill="none" strokeLinecap="round" />
            {/* Legs */}
            <line x1="70" y1="113" x2="68" y2="135" stroke="#b45309" strokeWidth="3" />
            <line x1="90" y1="113" x2="92" y2="135" stroke="#b45309" strokeWidth="3" />
            <path d="M 60 135 L 75 135" stroke="#b45309" strokeWidth="3" />
            <path d="M 85 135 L 100 135" stroke="#b45309" strokeWidth="3" />
          </g>
          {/* Speech bubble: Kukuruyuuuk */}
          <rect x="250" y="50" width="135" height="42" rx="10" fill="#ffffff" stroke="#eab308" strokeWidth="2" />
          <text x="317" y="76" textAnchor="middle" className="text-xs font-black fill-amber-700">"Kukuruyuuuk!" 🌅</text>
          {/* Name Banner */}
          <rect x="90" y="180" width="240" height="30" rx="8" fill="#1e293b" />
          <text x="210" y="200" textAnchor="middle" className="text-sm font-black fill-yellow-400 tracking-widest">
            A - Y - A - M  (Ayam Jantan)
          </text>
        </svg>
      );

    // 4. Bahasa Indonesia: Anak Tertib Membaca Buku
    case 'k1-indo-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-emerald-900">
            Kegiatan Positif: Membaca Buku Pelajaran di Meja Belajar
          </text>
          {/* Study desk */}
          <rect x="80" y="140" width="260" height="24" rx="4" fill="#b45309" />
          <rect x="110" y="164" width="16" height="40" fill="#78350f" />
          <rect x="294" y="164" width="16" height="40" fill="#78350f" />
          {/* Open Book */}
          <g transform="translate(160, 115)">
            <path d="M 50 15 Q 25 10 0 16 L 0 38 Q 25 32 50 37 Q 75 32 100 38 L 100 16 Q 75 10 50 15 Z" fill="#ffffff" stroke="#0284c7" strokeWidth="2.5" />
            <line x1="50" y1="15" x2="50" y2="37" stroke="#0284c7" strokeWidth="2" />
            <line x1="10" y1="22" x2="42" y2="22" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="10" y1="28" x2="42" y2="28" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="58" y1="22" x2="90" y2="22" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="58" y1="28" x2="90" y2="28" stroke="#94a3b8" strokeWidth="1.5" />
          </g>
          {/* Student Head and Torso */}
          <circle cx="210" cy="70" r="22" fill="#fed7aa" />
          <path d="M 190 60 Q 210 44 230 60 Q 210 52 190 60 Z" fill="#1e293b" />
          <circle cx="203" cy="70" r="2.5" fill="#0f172a" />
          <circle cx="217" cy="70" r="2.5" fill="#0f172a" />
          <path d="M 205 79 Q 210 84 215 79" stroke="#ea580c" strokeWidth="2" fill="none" />
          <path d="M 180 92 Q 210 90 240 92 L 235 140 L 185 140 Z" fill="#3b82f6" />
          {/* Label banner */}
          <rect x="90" y="186" width="240" height="26" rx="6" fill="#15803d" />
          <text x="210" y="203" textAnchor="middle" className="text-xs font-bold fill-white">
            📖 Kegiatan: Membaca Buku Pelajaran
          </text>
        </svg>
      );

    // 5. IPAS: Panca Indra Manusia (Telinga & Mata)
    case 'k1-ipas-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Panca Indra Manusia: Mengenal Organ Pendengaran (Telinga)
          </text>
          {/* Left: Eye (Penglihatan) */}
          <g transform="translate(60, 45)">
            <rect width="130" height="120" rx="12" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5" />
            <text x="65" y="24" textAnchor="middle" className="text-xs font-bold fill-sky-800">Mata (Penglihatan)</text>
            <path d="M 25 65 Q 65 35 105 65 Q 65 95 25 65 Z" fill="#ffffff" stroke="#0f172a" strokeWidth="2.5" />
            <circle cx="65" cy="65" r="16" fill="#0284c7" />
            <circle cx="65" cy="65" r="8" fill="#0f172a" />
            <circle cx="68" cy="62" r="3" fill="#ffffff" />
            <text x="65" y="110" textAnchor="middle" className="text-[10px] font-semibold fill-slate-600">Untuk Melihat</text>
          </g>
          {/* Right: Ear (Pendengaran) - HIGHLIGHTED */}
          <g transform="translate(230, 45)">
            <rect width="130" height="120" rx="12" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2.5" />
            <text x="65" y="24" textAnchor="middle" className="text-xs font-black fill-amber-900">Telinga (Pendengaran)</text>
            {/* Ear shape */}
            <path d="M 50 38 C 75 35 88 50 85 70 C 82 85 68 95 62 102 C 55 100 48 95 50 88" fill="#fed7aa" stroke="#c2410c" strokeWidth="2.5" />
            <path d="M 60 55 C 70 55 72 65 65 72" fill="none" stroke="#c2410c" strokeWidth="2" strokeLinecap="round" />
            {/* Music notes entering ear */}
            <text x="18" y="58" className="text-sm">🎵</text>
            <text x="28" y="78" className="text-sm">🎶</text>
            <text x="65" y="112" textAnchor="middle" className="text-[10px] font-black fill-amber-800">Mendengar Suara ⭐</text>
          </g>
          {/* Bottom badge */}
          <rect x="70" y="182" width="280" height="28" rx="8" fill="#1e293b" />
          <text x="210" y="200" textAnchor="middle" className="text-xs font-bold fill-white">
            Indra Pendengaran = Telinga 👂
          </text>
        </svg>
      );

    // 6. IPAS: Bagian Tumbuhan (Akar di dalam Tanah)
    case 'k1-ipas-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-emerald-900">
            Bagian Tubuh Tumbuhan: Akar Menyerap Air di Dalam Tanah
          </text>
          {/* Soil boundary */}
          <rect x="40" y="130" width="340" height="60" fill="#fed7aa" stroke="#9a3412" strokeWidth="2" rx="6" />
          <text x="80" y="150" className="text-[11px] font-bold fill-amber-900">Tanah Subur 🟤</text>
          {/* Plant Stem */}
          <line x1="210" y1="130" x2="210" y2="60" stroke="#15803d" strokeWidth="6" strokeLinecap="round" />
          {/* Flower on top */}
          <circle cx="210" cy="55" r="14" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
          <circle cx="210" cy="40" r="10" fill="#f43f5e" />
          <circle cx="210" cy="70" r="10" fill="#f43f5e" />
          <circle cx="195" cy="55" r="10" fill="#f43f5e" />
          <circle cx="225" cy="55" r="10" fill="#f43f5e" />
          {/* Leaves */}
          <ellipse cx="175" cy="85" rx="22" ry="10" fill="#22c55e" stroke="#166534" strokeWidth="2" transform="rotate(-25 175 85)" />
          <ellipse cx="245" cy="95" rx="22" ry="10" fill="#22c55e" stroke="#166534" strokeWidth="2" transform="rotate(25 245 95)" />
          {/* Roots branching down in soil */}
          <g stroke="#78350f" strokeWidth="3" strokeLinecap="round" fill="none">
            <line x1="210" y1="130" x2="210" y2="175" />
            <line x1="210" y1="140" x2="180" y2="165" />
            <line x1="210" y1="145" x2="240" y2="168" />
            <line x1="180" y1="165" x2="165" y2="180" />
            <line x1="240" y1="168" x2="255" y2="180" />
          </g>
          {/* Callout box for Root */}
          <rect x="250" y="145" width="120" height="28" rx="6" fill="#78350f" />
          <text x="310" y="163" textAnchor="middle" className="text-xs font-black fill-amber-100">
            Akar (Menyerap Air)
          </text>
        </svg>
      );

    // 7. PKn: Perisai Bintang Emas (Sila 1)
    case 'k1-pkn-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#0f172a" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-300">
            Simbol Sila Pertama: Bintang Emas Berlatar Hitam
          </text>
          {/* Shield outline */}
          <path d="M 140 45 L 280 45 L 280 120 Q 210 185 140 120 Z" fill="#000000" stroke="#f59e0b" strokeWidth="4" />
          {/* Golden 5-point Star */}
          <polygon
            points="210,65 218,88 242,88 223,103 230,126 210,112 190,126 197,103 178,88 202,88"
            fill="#facc15"
            stroke="#b45309"
            strokeWidth="2"
          />
          {/* Label banner */}
          <rect x="50" y="185" width="320" height="26" rx="6" fill="#facc15" />
          <text x="210" y="202" textAnchor="middle" className="text-xs font-black fill-slate-900">
            Sila 1: "Ketuhanan Yang Maha Esa" (Bintang Emas)
          </text>
        </svg>
      );

    // 8. PKn: Rantai Emas (Sila 2)
    case 'k1-pkn-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fef2f2" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-red-900">
            Simbol Sila Kedua: Rantai Emas Berlatar Merah
          </text>
          {/* Shield red background */}
          <path d="M 145 42 L 275 42 L 275 115 Q 210 175 145 115 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="4" />
          {/* Linked gold rings & squares */}
          <g transform="translate(210, 105)">
            <circle cx="-30" cy="-20" r="14" fill="none" stroke="#facc15" strokeWidth="4" />
            <rect x="-10" y="-32" width="22" height="22" rx="2" fill="none" stroke="#facc15" strokeWidth="4" />
            <circle cx="28" cy="-20" r="14" fill="none" stroke="#facc15" strokeWidth="4" />
            <rect x="18" y="-2" width="22" height="22" rx="2" fill="none" stroke="#facc15" strokeWidth="4" />
            <circle cx="0" cy="15" r="14" fill="none" stroke="#facc15" strokeWidth="4" />
            <rect x="-35" y="-2" width="22" height="22" rx="2" fill="none" stroke="#facc15" strokeWidth="4" />
          </g>
          {/* Label */}
          <rect x="40" y="185" width="340" height="26" rx="6" fill="#dc2626" />
          <text x="210" y="202" textAnchor="middle" className="text-xs font-black fill-white">
            Sila 2: "Kemanusiaan yang Adil dan Beradab" (Rantai Emas)
          </text>
        </svg>
      );

    // 9. Coding: Grid Maze 3x3 Robot ke Bintang
    case 'k1-coding-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Petak Grid 3x3: Instruksi Robot Menuju Bintang Emas
          </text>
          {/* 3x3 Grid */}
          <g transform="translate(70, 42)">
            {[0, 1, 2].map((r) =>
              [0, 1, 2].map((c) => (
                <rect
                  key={`${r}-${c}`}
                  x={c * 44}
                  y={r * 44}
                  width="40"
                  height="40"
                  rx="6"
                  fill={r === 2 && c === 0 ? '#dbeafe' : r === 0 && c === 2 ? '#fef3c7' : '#ffffff'}
                  stroke="#94a3b8"
                  strokeWidth="2"
                />
              ))
            )}
            {/* Robot start at (2,0) bottom-left */}
            <text x="20" y="26" textAnchor="middle" className="text-xl">🤖</text>
            <text x="20" y="38" textAnchor="middle" className="text-[8px] font-bold fill-blue-700">Mulai</text>
            {/* Star target at (0,2) top-right */}
            <text x="108" y="26" textAnchor="middle" className="text-xl">⭐</text>
            <text x="108" y="38" textAnchor="middle" className="text-[8px] font-bold fill-amber-700">Tujuan</text>
            {/* Arrows path: 2 Up then 2 Right */}
            <path d="M 20 88 L 20 20 L 88 20" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="4 4" strokeLinecap="round" />
          </g>
          {/* Instructions Box */}
          <g transform="translate(225, 45)">
            <rect width="165" height="125" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
            <text x="82" y="24" textAnchor="middle" className="text-xs font-black fill-blue-900">Langkah Robot:</text>
            <rect x="15" y="36" width="135" height="26" rx="6" fill="#3b82f6" />
            <text x="82" y="53" textAnchor="middle" className="text-[11px] font-black fill-white">1. Maju 2 Langkah (⬆️ ⬆️)</text>
            <rect x="15" y="72" width="135" height="26" rx="6" fill="#3b82f6" />
            <text x="82" y="89" textAnchor="middle" className="text-[11px] font-black fill-white">2. Belok Kanan 2 (➡️ ➡️)</text>
            <text x="82" y="114" textAnchor="middle" className="text-[10px] font-bold fill-emerald-700">Sampai di Bintang! ⭐</text>
          </g>
          <rect x="50" y="185" width="320" height="26" rx="6" fill="#1e293b" />
          <text x="210" y="202" textAnchor="middle" className="text-xs font-bold fill-white">
            Algoritma: Maju 2 langkah lalu Belok Kanan 2 langkah
          </text>
        </svg>
      );

    // 10. Coding: Pola Barisan Bangun Datar
    case 'k1-coding-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Pola Berulang: Kotak Merah, Lingkaran Biru, Segitiga Hijau ...
          </text>
          {/* Shapes Sequence */}
          <g transform="translate(25, 55)">
            {/* 1. Red Square */}
            <rect x="0" y="15" width="45" height="45" rx="6" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
            <text x="22" y="75" textAnchor="middle" className="text-[10px] font-bold fill-red-800">1. Kotak</text>
            {/* 2. Blue Circle */}
            <circle cx="85" cy="38" r="23" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
            <text x="85" y="75" textAnchor="middle" className="text-[10px] font-bold fill-sky-800">2. Lingkaran</text>
            {/* 3. Green Triangle */}
            <polygon points="150,15 125,60 175,60" fill="#22c55e" stroke="#166534" strokeWidth="2" />
            <text x="150" y="75" textAnchor="middle" className="text-[10px] font-bold fill-green-800">3. Segitiga</text>
            {/* 4. Red Square */}
            <rect x="195" y="15" width="45" height="45" rx="6" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
            <text x="217" y="75" textAnchor="middle" className="text-[10px] font-bold fill-red-800">4. Kotak</text>
            {/* 5. Blue Circle */}
            <circle cx="280" cy="38" r="23" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
            <text x="280" y="75" textAnchor="middle" className="text-[10px] font-bold fill-sky-800">5. Lingkaran</text>
            {/* 6. Question Mark ? (Green Triangle Target) */}
            <rect x="325" y="10" width="50" height="55" rx="8" fill="#fef08a" stroke="#ca8a04" strokeWidth="3" strokeDasharray="3 3" />
            <text x="350" y="46" textAnchor="middle" className="text-2xl font-black fill-amber-900">?</text>
            <text x="350" y="75" textAnchor="middle" className="text-[10px] font-black fill-amber-900">6. Jawaban</text>
          </g>
          {/* Answer Card */}
          <rect x="60" y="165" width="300" height="42" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
          <text x="210" y="183" textAnchor="middle" className="text-xs font-black fill-green-900">
            Jawaban Pola Berikutnya: Segitiga Hijau 🔺
          </text>
          <text x="210" y="198" textAnchor="middle" className="text-[10px] font-bold fill-green-700">
            (Pola berulang setiap 3 bentuk: Kotak → Lingkaran → Segitiga)
          </text>
        </svg>
      );

    // 11. Bahasa Inggris: Elephant (Gajah dengan belalai & telinga besar)
    case 'k1-inggris-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f1f5f9" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Vocabulary: Large Animal with a Long Trunk and Big Ears
          </text>
          {/* Elephant SVG */}
          <g transform="translate(130, 42)">
            {/* Body */}
            <ellipse cx="80" cy="70" rx="55" ry="40" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
            {/* Legs */}
            <rect x="40" y="90" width="18" height="40" rx="4" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
            <rect x="65" y="90" width="18" height="40" rx="4" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
            <rect x="95" y="90" width="18" height="40" rx="4" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
            {/* Head */}
            <circle cx="130" cy="55" r="28" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
            {/* Big Ear */}
            <ellipse cx="115" cy="55" rx="22" ry="28" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
            {/* Eye */}
            <circle cx="138" cy="48" r="3" fill="#0f172a" />
            {/* Trunk */}
            <path d="M 148 60 C 165 70 170 95 155 105 C 148 110 142 105 145 98" fill="none" stroke="#94a3b8" strokeWidth="12" strokeLinecap="round" />
            <path d="M 148 60 C 165 70 170 95 155 105 C 148 110 142 105 145 98" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
            {/* Tusk */}
            <path d="M 142 75 Q 155 82 148 90" stroke="#fef08a" strokeWidth="4" fill="none" strokeLinecap="round" />
          </g>
          {/* Label banner */}
          <rect x="80" y="180" width="260" height="30" rx="8" fill="#1e293b" />
          <text x="210" y="200" textAnchor="middle" className="text-sm font-black fill-yellow-400 tracking-wider">
            ELEPHANT (Gajah) 🐘
          </text>
        </svg>
      );

    // 12. Bahasa Inggris: 3 Balon (Red, Blue, Yellow - middle is Blue)
    case 'k1-inggris-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdfa" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-teal-900">
            Colors: Left Balloon (Red) - Middle (Blue) - Right (Yellow)
          </text>
          {/* Left Balloon: Red */}
          <g transform="translate(70, 45)">
            <ellipse cx="40" cy="50" rx="30" ry="38" fill="#ef4444" stroke="#dc2626" strokeWidth="2" />
            <polygon points="40,88 34,96 46,96" fill="#ef4444" />
            <path d="M 40 96 Q 30 120 40 140" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <text x="40" y="155" textAnchor="middle" className="text-xs font-bold fill-red-700">1. RED</text>
          </g>
          {/* Middle Balloon: Blue (Target!) */}
          <g transform="translate(170, 35)">
            <ellipse cx="40" cy="50" rx="32" ry="40" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="3" />
            <polygon points="40,90 34,98 46,98" fill="#3b82f6" />
            <path d="M 40 98 Q 50 120 40 140" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <rect x="5" y="142" width="70" height="24" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="40" y="158" textAnchor="middle" className="text-xs font-black fill-blue-900">2. BLUE ⭐</text>
          </g>
          {/* Right Balloon: Yellow */}
          <g transform="translate(270, 45)">
            <ellipse cx="40" cy="50" rx="30" ry="38" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
            <polygon points="40,88 34,96 46,96" fill="#facc15" />
            <path d="M 40 96 Q 50 120 40 140" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <text x="40" y="155" textAnchor="middle" className="text-xs font-bold fill-amber-700">3. YELLOW</text>
          </g>
          {/* Question callout */}
          <rect x="70" y="184" width="280" height="26" rx="6" fill="#1d4ed8" />
          <text x="210" y="201" textAnchor="middle" className="text-xs font-black fill-white">
            The middle balloon is BLUE (Biru) 🎈
          </text>
        </svg>
      );

    // 13. SBdP: Palet Cat 3 Warna Primer (Merah, Kuning, Biru)
    case 'k1-sbdp-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fdf4ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-fuchsia-950">
            Seni Rupa: Palet Tiga Warna Primer (Pokok)
          </text>
          {/* Wooden Palette shape */}
          <path d="M 100 80 C 100 45 320 45 330 90 C 340 130 300 170 240 165 C 210 162 200 145 180 145 C 160 145 150 165 120 160 C 90 155 100 110 100 80 Z" fill="#fde68a" stroke="#d97706" strokeWidth="3" />
          {/* Thumb hole */}
          <ellipse cx="180" cy="130" rx="12" ry="16" fill="#fdf4ff" stroke="#d97706" strokeWidth="2" />
          {/* Red Paint */}
          <circle cx="140" cy="80" r="18" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
          <text x="140" y="112" textAnchor="middle" className="text-[10px] font-black fill-red-900">MERAH</text>
          {/* Yellow Paint */}
          <circle cx="215" cy="65" r="18" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
          <text x="215" y="98" textAnchor="middle" className="text-[10px] font-black fill-amber-900">KUNING</text>
          {/* Blue Paint */}
          <circle cx="285" cy="85" r="18" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
          <text x="285" y="118" textAnchor="middle" className="text-[10px] font-black fill-blue-900">BIRU</text>
          {/* Paintbrush */}
          <path d="M 280 160 L 370 120" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
          <path d="M 270 164 L 280 160" stroke="#94a3b8" strokeWidth="7" strokeLinecap="round" />
          <circle cx="267" cy="165" r="5" fill="#ef4444" />
          {/* Bottom badge */}
          <rect x="50" y="180" width="320" height="28" rx="8" fill="#701a75" />
          <text x="210" y="198" textAnchor="middle" className="text-xs font-black fill-white">
            Warna Pokok (Primer): Merah, Kuning, dan Biru 🎨
          </text>
        </svg>
      );

    // 14. SBdP: Kerajinan Kolase Alami dari Daun dan Biji
    case 'k1-sbdp-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-emerald-950">
            Karya Seni Kolase: Menempelkan Bahan Alam (Daun & Biji)
          </text>
          {/* Drawing Canvas */}
          <rect x="100" y="42" width="220" height="130" rx="8" fill="#ffffff" stroke="#15803d" strokeWidth="2.5" />
          {/* Flower made of dry leaves */}
          <g transform="translate(210, 105)">
            {/* Center: Sunflower seeds / beans */}
            <circle cx="0" cy="0" r="16" fill="#78350f" stroke="#451a03" strokeWidth="2" />
            <circle cx="-6" cy="-4" r="2.5" fill="#fde68a" />
            <circle cx="5" cy="-5" r="2.5" fill="#fde68a" />
            <circle cx="-3" cy="6" r="2.5" fill="#fde68a" />
            <circle cx="5" cy="5" r="2.5" fill="#fde68a" />
            {/* Petals made of natural dried green/yellow leaves */}
            <ellipse cx="0" cy="-32" rx="10" ry="20" fill="#65a30d" stroke="#365314" strokeWidth="1.5" />
            <ellipse cx="28" cy="-18" rx="10" ry="20" fill="#84cc16" stroke="#365314" strokeWidth="1.5" transform="rotate(60 28 -18)" />
            <ellipse cx="28" cy="18" rx="10" ry="20" fill="#65a30d" stroke="#365314" strokeWidth="1.5" transform="rotate(120 28 18)" />
            <ellipse cx="0" cy="32" rx="10" ry="20" fill="#ca8a04" stroke="#713f12" strokeWidth="1.5" transform="rotate(180 0 32)" />
            <ellipse cx="-28" cy="18" rx="10" ry="20" fill="#84cc16" stroke="#365314" strokeWidth="1.5" transform="rotate(240 -28 18)" />
            <ellipse cx="-28" cy="-18" rx="10" ry="20" fill="#65a30d" stroke="#365314" strokeWidth="1.5" transform="rotate(300 -28 -18)" />
          </g>
          {/* Material callout */}
          <rect x="50" y="180" width="320" height="28" rx="8" fill="#15803d" />
          <text x="210" y="198" textAnchor="middle" className="text-xs font-black fill-white">
            Bahan Alami: Daun Kering 🍃 dan Biji-Bijian 🌰
          </text>
        </svg>
      );

    // 15. PJOK: Melompat (Menolakkan kedua kaki)
    case 'k1-pjok-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#eff6ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-blue-950">
            Gerak Lokomotor: Gerakan Melompat (Dua Kaki Menolak)
          </text>
          {/* Ground */}
          <line x1="40" y1="170" x2="380" y2="170" stroke="#0284c7" strokeWidth="3" />
          {/* Child jumping in mid-air */}
          <g transform="translate(190, 50)">
            {/* Head */}
            <circle cx="20" cy="20" r="16" fill="#fed7aa" />
            <path d="M 6 15 Q 20 5 34 15" stroke="#1e293b" strokeWidth="3" fill="#1e293b" />
            {/* Smile */}
            <circle cx="15" cy="18" r="2" fill="#0f172a" />
            <circle cx="25" cy="18" r="2" fill="#0f172a" />
            <path d="M 16 26 Q 20 30 24 26" stroke="#ea580c" strokeWidth="1.5" fill="none" />
            {/* Torso */}
            <rect x="8" y="38" width="24" height="32" rx="4" fill="#ef4444" />
            {/* Arms raised up */}
            <line x1="8" y1="45" x2="-8" y2="25" stroke="#fed7aa" strokeWidth="5" strokeLinecap="round" />
            <line x1="32" y1="45" x2="48" y2="25" stroke="#fed7aa" strokeWidth="5" strokeLinecap="round" />
            {/* Legs bent in jump */}
            <path d="M 12 70 L 4 92 L 18 96" fill="none" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" />
            <path d="M 28 70 L 36 92 L 22 96" fill="none" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" />
            {/* Motion lines jumping up */}
            <path d="M -15 95 Q 20 60 55 95" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 3" />
            <text x="20" y="115" textAnchor="middle" className="text-base">⬆️</text>
          </g>
          {/* Bottom badge */}
          <rect x="70" y="180" width="280" height="28" rx="8" fill="#1d4ed8" />
          <text x="210" y="198" textAnchor="middle" className="text-xs font-black fill-white">
            Gerak Lokomotor = Melompat ke Udara 🏃💨
          </text>
        </svg>
      );

    // 16. PJOK: Bola Sepak Bola
    case 'k1-pjok-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-emerald-950">
            Alat Olahraga: Bola Sepak Corak Hitam Putih
          </text>
          {/* Football */}
          <g transform="translate(210, 105)">
            <circle cx="0" cy="0" r="50" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />
            {/* Center pentagon */}
            <polygon points="0,-22 20,-7 12,17 -12,17 -20,-7" fill="#0f172a" />
            {/* Radiating seams */}
            <line x1="0" y1="-22" x2="0" y2="-45" stroke="#0f172a" strokeWidth="2.5" />
            <line x1="20" y1="-7" x2="43" y2="-15" stroke="#0f172a" strokeWidth="2.5" />
            <line x1="12" y1="17" x2="30" y2="40" stroke="#0f172a" strokeWidth="2.5" />
            <line x1="-12" y1="17" x2="-30" y2="40" stroke="#0f172a" strokeWidth="2.5" />
            <line x1="-20" y1="-7" x2="-43" y2="-15" stroke="#0f172a" strokeWidth="2.5" />
          </g>
          {/* Bottom badge */}
          <rect x="80" y="180" width="260" height="28" rx="8" fill="#15803d" />
          <text x="210" y="198" textAnchor="middle" className="text-xs font-black fill-white">
            Olahraga: Sepak Bola ⚽
          </text>
        </svg>
      );

    // 17. Basa Sunda: Soca / Panon pikeun Ningali (Melihat)
    case 'k1-sunda-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#eff6ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-blue-950">
            Panca Indra Basa Sunda: Soca / Panon
          </text>
          {/* Pair of Eyes */}
          <g transform="translate(130, 60)">
            {/* Left Eye */}
            <ellipse cx="35" cy="40" rx="35" ry="24" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
            <circle cx="35" cy="40" r="14" fill="#0284c7" />
            <circle cx="35" cy="40" r="7" fill="#0f172a" />
            <circle cx="38" cy="37" r="3" fill="#ffffff" />
            {/* Eyebrow */}
            <path d="M 10 16 Q 35 6 60 16" fill="none" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />

            {/* Right Eye */}
            <ellipse cx="125" cy="40" rx="35" ry="24" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
            <circle cx="125" cy="40" r="14" fill="#0284c7" />
            <circle cx="125" cy="40" r="7" fill="#0f172a" />
            <circle cx="128" cy="37" r="3" fill="#ffffff" />
            {/* Eyebrow */}
            <path d="M 100 16 Q 125 6 150 16" fill="none" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
          </g>
          {/* Label banner */}
          <rect x="50" y="175" width="320" height="34" rx="8" fill="#1e293b" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Soca / Panon = Ningali (Melihat) 👀
          </text>
          <text x="210" y="205" textAnchor="middle" className="text-[10px] font-medium fill-slate-300">
            Kagunaan organ soca nyaéta pikeun ningali kaayaan sabudeureun
          </text>
        </svg>
      );

    // 18. Basa Sunda: Hatur Nuhun (Terima Kasih)
    case 'k1-sunda-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fefce8" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-950">
            Tata Krama Sunda: Ngucapkeun Nuhun Nalika Ditulungan
          </text>
          {/* Two smiling children sharing */}
          <g transform="translate(130, 50)">
            <circle cx="40" cy="35" r="22" fill="#fed7aa" />
            <path d="M 22 25 Q 40 12 58 25" fill="#1e293b" />
            <circle cx="34" cy="34" r="2.5" fill="#0f172a" />
            <circle cx="46" cy="34" r="2.5" fill="#0f172a" />
            <path d="M 35 43 Q 40 48 45 43" stroke="#ea580c" strokeWidth="2" fill="none" />
            <rect x="22" y="58" width="36" height="34" rx="6" fill="#3b82f6" />

            <circle cx="120" cy="35" r="22" fill="#fed7aa" />
            <path d="M 102 25 Q 120 12 138 25" fill="#78350f" />
            <circle cx="114" cy="34" r="2.5" fill="#0f172a" />
            <circle cx="126" cy="34" r="2.5" fill="#0f172a" />
            <path d="M 115 43 Q 120 48 125 43" stroke="#ea580c" strokeWidth="2" fill="none" />
            <rect x="102" y="58" width="36" height="34" rx="6" fill="#10b981" />
          </g>
          {/* Speech bubble */}
          <rect x="135" y="138" width="150" height="30" rx="8" fill="#ffffff" stroke="#d97706" strokeWidth="2" />
          <text x="210" y="158" textAnchor="middle" className="text-xs font-black fill-amber-900">
            "Hatur Nuhun!" 🙏
          </text>
          {/* Bottom badge */}
          <rect x="60" y="180" width="300" height="28" rx="8" fill="#b45309" />
          <text x="210" y="198" textAnchor="middle" className="text-xs font-black fill-white">
            Sopan Santun: Ngucapkeun "Hatur Nuhun"
          </text>
        </svg>
      );

    // 19. Basa Jawa: Tokoh Punakawan Kyai Semar
    case 'k1-jawa-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fdf4ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-purple-950">
            Tokoh Wayang Punakawan: Kyai Semar (Bunder Lemu & Wicaksana)
          </text>
          {/* Semar figure outline */}
          <g transform="translate(160, 42)">
            {/* Big round belly */}
            <ellipse cx="50" cy="80" rx="42" ry="36" fill="#fde047" stroke="#854d0e" strokeWidth="2.5" />
            {/* White face/head */}
            <circle cx="48" cy="36" r="20" fill="#ffffff" stroke="#854d0e" strokeWidth="2.5" />
            {/* Semar tuft/kuncung */}
            <path d="M 44 16 Q 48 2 54 16 Z" fill="#1e293b" />
            {/* Smiling gentle face */}
            <circle cx="42" cy="34" r="2.5" fill="#0f172a" />
            <circle cx="54" cy="34" r="2.5" fill="#0f172a" />
            <path d="M 44 44 Q 48 48 52 44" stroke="#854d0e" strokeWidth="2" fill="none" />
            {/* Hand gesture */}
            <path d="M 20 75 Q 8 60 14 50" fill="none" stroke="#854d0e" strokeWidth="3" strokeLinecap="round" />
            {/* Sarung motif */}
            <rect x="22" y="98" width="56" height="24" fill="#a855f7" rx="3" />
          </g>
          {/* Bottom badge */}
          <rect x="60" y="178" width="300" height="30" rx="8" fill="#581c87" />
          <text x="210" y="198" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Kyai Semar (Punakawan Sesepuh ingkang Wicaksana)
          </text>
        </svg>
      );

    // 20. Basa Jawa: Unggah-ungguh "Nyuwun Sewu"
    case 'k1-jawa-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-emerald-950">
            Unggah-Ungguh Basa Jawa: Mlaku Mungkuk Ngucap "Nyuwun Sewu"
          </text>
          {/* Walking bowing respectfully */}
          <g transform="translate(120, 50)">
            {/* Elder on the right */}
            <circle cx="160" cy="35" r="16" fill="#fed7aa" />
            <rect x="148" y="52" width="24" height="46" rx="4" fill="#047857" />
            <text x="160" y="112" textAnchor="middle" className="text-[10px] font-bold fill-emerald-900">Wong Sepuh</text>

            {/* Child bowing (mungkuk) on the left */}
            <circle cx="50" cy="48" r="14" fill="#fed7aa" />
            <path d="M 44 62 L 60 82 L 48 102" fill="none" stroke="#2563eb" strokeWidth="6" strokeLinecap="round" />
            <text x="50" y="118" textAnchor="middle" className="text-[10px] font-bold fill-blue-900">Bocah Mungkuk</text>
          </g>
          {/* Speech bubble */}
          <rect x="100" y="135" width="220" height="28" rx="8" fill="#ffffff" stroke="#047857" strokeWidth="2" />
          <text x="210" y="154" textAnchor="middle" className="text-xs font-black fill-emerald-900">
            "Nyuwun sewu / Ndherek langkung..." 🙏
          </text>
          {/* Bottom badge */}
          <rect x="50" y="178" width="320" height="30" rx="8" fill="#065f46" />
          <text x="210" y="198" textAnchor="middle" className="text-xs font-black fill-yellow-200">
            Patrap lan Unggah-Ungguh: Nyuwun Sewu
          </text>
        </svg>
      );

    default:
      return null;
  }
};
