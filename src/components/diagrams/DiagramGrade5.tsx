import React from 'react';

export const getDiagramGrade5 = (imageKey: string): React.ReactNode | null => {
  switch (imageKey) {
    // 1. Matematika: Jaring-Jaring Kubus (6 Bujursangkar Kongruen)
    case 'k5-mtk-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Jaring-Jaring Bangun Ruang: 6 Bujursangkar Membentuk KUBUS
          </text>
          {/* Cube net layout (cross shape) */}
          <g transform="translate(130, 45)">
            {/* Top flap */}
            <rect x="40" y="0" width="36" height="36" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="2" />
            <text x="58" y="22" textAnchor="middle" className="text-xs font-black fill-blue-900">1</text>

            {/* Middle row: 4 squares */}
            <rect x="0" y="36" width="36" height="36" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="2" />
            <text x="18" y="58" textAnchor="middle" className="text-xs font-black fill-blue-900">2</text>

            <rect x="40" y="36" width="36" height="36" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="2" />
            <text x="58" y="58" textAnchor="middle" className="text-xs font-black fill-blue-950">Alas</text>

            <rect x="80" y="36" width="36" height="36" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="2" />
            <text x="98" y="58" textAnchor="middle" className="text-xs font-black fill-blue-900">4</text>

            <rect x="120" y="36" width="36" height="36" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="2" />
            <text x="138" y="58" textAnchor="middle" className="text-xs font-black fill-blue-900">5</text>

            {/* Bottom flap */}
            <rect x="40" y="72" width="36" height="36" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="2" />
            <text x="58" y="94" textAnchor="middle" className="text-xs font-black fill-blue-900">6</text>
          </g>
          {/* Fold arrow to 3D cube */}
          <text x="320" y="85" textAnchor="middle" className="text-2xl">🧊</text>
          <text x="320" y="105" textAnchor="middle" className="text-[10px] font-black fill-slate-700">KUBUS 3D</text>
          {/* Bottom badge */}
          <rect x="60" y="172" width="300" height="34" rx="8" fill="#1e40af" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-white">
            Pola 6 Bujursangkar = Jaring-Jaring KUBUS 📦
          </text>
        </svg>
      );

    // 2. Matematika: Diagram Batang Hasil Panen (Tahun 2025 Tertinggi)
    case 'k5-mtk-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Hasil Panen Padi Desa Makmur: Panen Tertinggi 50 Ton di Tahun 2025
          </text>
          {/* Bar chart */}
          <g transform="translate(70, 45)">
            <line x1="0" y1="0" x2="0" y2="110" stroke="#64748b" strokeWidth="2" />
            <line x1="0" y1="110" x2="300" y2="110" stroke="#64748b" strokeWidth="2" />

            <text x="-10" y="114" textAnchor="end" className="text-[9px] fill-slate-500">0 ton</text>
            <text x="-10" y="65" textAnchor="end" className="text-[9px] fill-slate-500">25 ton</text>
            <text x="-10" y="10" textAnchor="end" className="text-[9px] font-bold fill-slate-700">50 ton</text>
            <line x1="0" y1="6" x2="300" y2="6" stroke="#e2e8f0" strokeDasharray="3 3" />

            {/* 2022: 30 ton */}
            <rect x="25" y="44" width="40" height="66" rx="3" fill="#94a3b8" />
            <text x="45" y="126" textAnchor="middle" className="text-[10px] font-bold fill-slate-700">2022</text>
            <text x="45" y="38" textAnchor="middle" className="text-[9px] font-bold fill-slate-600">30t</text>

            {/* 2023: 35 ton */}
            <rect x="95" y="33" width="40" height="77" rx="3" fill="#94a3b8" />
            <text x="115" y="126" textAnchor="middle" className="text-[10px] font-bold fill-slate-700">2023</text>
            <text x="115" y="28" textAnchor="middle" className="text-[9px] font-bold fill-slate-600">35t</text>

            {/* 2024: 40 ton */}
            <rect x="165" y="22" width="40" height="88" rx="3" fill="#94a3b8" />
            <text x="185" y="126" textAnchor="middle" className="text-[10px] font-bold fill-slate-700">2024</text>
            <text x="185" y="17" textAnchor="middle" className="text-[9px] font-bold fill-slate-600">40t</text>

            {/* 2025: 50 ton - HIGHEST */}
            <rect x="235" y="0" width="40" height="110" rx="3" fill="#16a34a" />
            <text x="255" y="126" textAnchor="middle" className="text-[10px] font-black fill-green-800">2025 ⭐</text>
            <text x="255" y="-5" textAnchor="middle" className="text-[10px] font-black fill-green-800">50 ton</text>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="180" width="300" height="28" rx="6" fill="#166534" />
          <text x="210" y="198" textAnchor="middle" className="text-xs font-black fill-white">
            Panen Tertinggi = Tahun 2025 (Mencapai 50 Ton) 🌾
          </text>
        </svg>
      );

    // 3. Bahasa Indonesia: Poster Hemat Energi Listrik
    case 'k5-indo-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fefce8" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-950">
            Iklan Layanan Masyarakat: Poster Hemat Energi Listrik
          </text>
          {/* Poster Card */}
          <g transform="translate(130, 45)">
            <rect width="160" height="110" rx="10" fill="#1e293b" stroke="#facc15" strokeWidth="2.5" />
            <text x="80" y="32" textAnchor="middle" className="text-3xl">💡</text>
            <text x="80" y="65" textAnchor="middle" className="text-xs font-black fill-yellow-400">
              "MATIKAN LAMPU"
            </text>
            <text x="80" y="82" textAnchor="middle" className="text-[9px] font-bold fill-emerald-300">
              Saat Tidak Digunakan!
            </text>
            <text x="80" y="98" textAnchor="middle" className="text-[8px] fill-slate-300">
              Hemat Energi Demi Bumi 🌍
            </text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="172" width="320" height="34" rx="8" fill="#854d0e" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Pesan Moral: Menghemat Energi Listrik Demi Kelestarian Bumi ⚡
          </text>
        </svg>
      );

    // 4. Bahasa Indonesia: Pantun 4 Baris Rima a-b-a-b
    case 'k5-indo-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fdf4ff" rx="16" />
          <text x="210" y="22" textAnchor="middle" className="text-xs font-bold fill-fuchsia-950">
            Karya Sastra Pantun: 4 Baris Bersajak Akhir a - b - a - b
          </text>
          {/* Pantun Sheet */}
          <g transform="translate(60, 45)">
            <rect width="300" height="115" rx="8" fill="#ffffff" stroke="#c084fc" strokeWidth="2" />
            <text x="20" y="28" className="text-xs font-bold fill-slate-800">
              Baris 1: Beli kelapa di pasar Melay<tspan className="font-black fill-fuchsia-700">u</tspan> (Sampiran - <tspan className="font-black fill-fuchsia-700">a</tspan>)
            </text>
            <text x="20" y="52" className="text-xs font-bold fill-slate-800">
              Baris 2: Jangan lupa membeli teron<tspan className="font-black fill-blue-700">g</tspan> (Sampiran - <tspan className="font-black fill-blue-700">b</tspan>)
            </text>
            <text x="20" y="76" className="text-xs font-bold fill-slate-800">
              Baris 3: Rajin belajar tak kenal lay<tspan className="font-black fill-fuchsia-700">u</tspan> (Isi - <tspan className="font-black fill-fuchsia-700">a</tspan>)
            </text>
            <text x="20" y="100" className="text-xs font-bold fill-slate-800">
              Baris 4: Kelak dewasa suka menolon<tspan className="font-black fill-blue-700">g</tspan> (Isi - <tspan className="font-black fill-blue-700">b</tspan>)
            </text>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#581c87" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Rima Persajakan Pantun = a - b - a - b 📜
          </text>
        </svg>
      );

    // 5. IPAS: Sistem Pencernaan Manusia
    case 'k5-ipas-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="22" textAnchor="middle" className="text-xs font-bold fill-emerald-950">
            Urutan Saluran Sistem Pencernaan Makanan pada Manusia
          </text>
          {/* Digestive flow chart */}
          <g transform="translate(20, 50)">
            {/* Mulut */}
            <rect x="0" y="15" width="65" height="40" rx="6" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="32" y="32" textAnchor="middle" className="text-[10px] font-black fill-amber-950">1. Mulut</text>
            <text x="32" y="45" textAnchor="middle" className="text-[8px] fill-amber-800">(Gigi/Lidah)</text>
            <text x="70" y="38" className="text-sm font-black fill-slate-400">→</text>

            {/* Kerongkongan */}
            <rect x="80" y="15" width="80" height="40" rx="6" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5" />
            <text x="120" y="32" textAnchor="middle" className="text-[9px] font-black fill-blue-950">2. Kerongkongan</text>
            <text x="120" y="45" textAnchor="middle" className="text-[8px] fill-blue-700">(Esofagus)</text>
            <text x="165" y="38" className="text-sm font-black fill-slate-400">→</text>

            {/* Lambung */}
            <rect x="175" y="15" width="65" height="40" rx="6" fill="#fee2e2" stroke="#f87171" strokeWidth="1.5" />
            <text x="207" y="32" textAnchor="middle" className="text-[10px] font-black fill-red-950">3. Lambung</text>
            <text x="207" y="45" textAnchor="middle" className="text-[8px] fill-red-700">(Asam/Enzim)</text>
            <text x="245" y="38" className="text-sm font-black fill-slate-400">→</text>

            {/* Usus Halus */}
            <rect x="255" y="15" width="60" height="40" rx="6" fill="#dcfce7" stroke="#86efac" strokeWidth="1.5" />
            <text x="285" y="32" textAnchor="middle" className="text-[9px] font-black fill-green-950">4. Usus Halus</text>
            <text x="285" y="45" textAnchor="middle" className="text-[8px] fill-green-700">(Serap Sari)</text>
            <text x="320" y="38" className="text-sm font-black fill-slate-400">→</text>

            {/* Usus Besar */}
            <rect x="330" y="15" width="50" height="40" rx="6" fill="#ffedd5" stroke="#fdba74" strokeWidth="1.5" />
            <text x="355" y="32" textAnchor="middle" className="text-[9px] font-black fill-orange-950">5. Usus</text>
            <text x="355" y="45" textAnchor="middle" className="text-[9px] font-black fill-orange-950">Besar</text>
          </g>
          {/* Bottom badge */}
          <rect x="40" y="165" width="340" height="38" rx="8" fill="#166534" />
          <text x="210" y="182" textAnchor="middle" className="text-xs font-black fill-white">
            Mulut → Kerongkongan → Lambung → Usus Halus → Usus Besar
          </text>
          <text x="210" y="196" textAnchor="middle" className="text-[10px] font-medium fill-emerald-200">
            Urutan jalannya pencernaan makanan secara berkesinambungan
          </text>
        </svg>
      );

    // 6. IPAS: Rangkaian Listrik Paralel
    case 'k5-ipas-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Rangkaian Listrik Paralel: Bercabang (Satu Lampu Padam, Lainnya Menyala)
          </text>
          {/* Parallel circuit schematic */}
          <g transform="translate(100, 48)">
            {/* Battery on left */}
            <rect x="0" y="35" width="24" height="40" rx="3" fill="#1e293b" />
            <rect x="8" y="28" width="8" height="7" fill="#facc15" />
            <text x="-5" y="58" textAnchor="end" className="text-[10px] font-bold fill-slate-700">Baterai</text>

            {/* Wires branching */}
            <line x1="12" y1="28" x2="12" y2="10" stroke="#0f172a" strokeWidth="2.5" />
            <line x1="12" y1="10" x2="200" y2="10" stroke="#0f172a" strokeWidth="2.5" />

            <line x1="12" y1="75" x2="12" y2="95" stroke="#0f172a" strokeWidth="2.5" />
            <line x1="12" y1="95" x2="200" y2="95" stroke="#0f172a" strokeWidth="2.5" />

            {/* Branch 1 (Lamp 1) */}
            <line x1="100" y1="10" x2="100" y2="40" stroke="#0f172a" strokeWidth="2" />
            <circle cx="100" cy="50" r="14" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
            <text x="100" y="55" textAnchor="middle" className="text-xs">💡</text>
            <line x1="100" y1="64" x2="100" y2="95" stroke="#0f172a" strokeWidth="2" />
            <text x="100" y="28" textAnchor="middle" className="text-[9px] font-bold fill-amber-800">Cabang 1</text>

            {/* Branch 2 (Lamp 2) */}
            <line x1="180" y1="10" x2="180" y2="40" stroke="#0f172a" strokeWidth="2" />
            <circle cx="180" cy="50" r="14" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
            <text x="180" y="55" textAnchor="middle" className="text-xs">💡</text>
            <line x1="180" y1="64" x2="180" y2="95" stroke="#0f172a" strokeWidth="2" />
            <text x="180" y="28" textAnchor="middle" className="text-[9px] font-bold fill-amber-800">Cabang 2</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="172" width="320" height="34" rx="8" fill="#1e293b" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Rangkaian PARALEL = Jalur Arus Listrik Bercabang ⚡
          </text>
        </svg>
      );

    // 7. PKn: Peta Kepulauan Indonesia (NKRI)
    case 'k5-pkn-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0f9ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-sky-950">
            Wilayah Nusantara: Sabang Sampai Merauke dalam Wadah NKRI
          </text>
          {/* Map of Indonesia islands silhouette */}
          <g transform="translate(60, 55)">
            {/* Sumatra */}
            <polygon points="10,65 35,25 50,45 25,85" fill="#16a34a" stroke="#15803d" strokeWidth="1.5" />
            <text x="30" y="55" textAnchor="middle" className="text-[8px] font-black fill-white">Sumatra</text>

            {/* Jawa */}
            <polygon points="50,90 120,95 115,105 45,100" fill="#16a34a" stroke="#15803d" strokeWidth="1.5" />
            <text x="80" y="100" textAnchor="middle" className="text-[8px] font-black fill-white">Jawa</text>

            {/* Kalimantan */}
            <polygon points="90,20 145,25 140,65 85,55" fill="#16a34a" stroke="#15803d" strokeWidth="1.5" />
            <text x="115" y="45" textAnchor="middle" className="text-[8px] font-black fill-white">Kalimantan</text>

            {/* Sulawesi */}
            <path d="M 160 35 L 180 30 L 175 55 L 190 60 L 170 85 L 160 60 Z" fill="#16a34a" stroke="#15803d" strokeWidth="1.5" />
            <text x="175" y="55" textAnchor="middle" className="text-[7px] font-black fill-white">Sulawesi</text>

            {/* Papua */}
            <polygon points="230,45 290,40 280,85 240,75" fill="#16a34a" stroke="#15803d" strokeWidth="1.5" />
            <text x="260" y="65" textAnchor="middle" className="text-[8px] font-black fill-white">Papua</text>
          </g>
          {/* Bottom badge */}
          <rect x="40" y="175" width="340" height="32" rx="8" fill="#1e40af" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            NKRI = Negara Kesatuan Republik Indonesia 🇮🇩
          </text>
        </svg>
      );

    // 8. PKn: Timbangan Hak dan Kewajiban Seimbang
    case 'k5-pkn-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Keadilan Sosial: Timbangan Hak dan Kewajiban Harus Seimbang
          </text>
          {/* Balance Scales */}
          <g transform="translate(210, 60)">
            {/* Center Pillar */}
            <line x1="0" y1="0" x2="0" y2="85" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
            <rect x="-35" y="85" width="70" height="12" rx="3" fill="#78350f" />
            {/* Fulcrum point */}
            <circle cx="0" cy="0" r="8" fill="#d97706" />

            {/* Horizontal balance beam (level) */}
            <line x1="-90" y1="0" x2="90" y2="0" stroke="#d97706" strokeWidth="4" />

            {/* Left Pan: HAK */}
            <line x1="-90" y1="0" x2="-110" y2="40" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="-90" y1="0" x2="-70" y2="40" stroke="#94a3b8" strokeWidth="1.5" />
            <path d="M -120 40 Q -90 55 -60 40 Z" fill="#3b82f6" />
            <text x="-90" y="32" textAnchor="middle" className="text-xs font-black fill-blue-900">HAK</text>

            {/* Right Pan: KEWAJIBAN */}
            <line x1="90" y1="0" x2="70" y2="40" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="90" y1="0" x2="110" y2="40" stroke="#94a3b8" strokeWidth="1.5" />
            <path d="M 60 40 Q 90 55 120 40 Z" fill="#10b981" />
            <text x="90" y="32" textAnchor="middle" className="text-xs font-black fill-emerald-900">KEWAJIBAN</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#1e293b" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Pelaksanaan Hak dan Kewajiban: Harus SEIMBANG dan Selaras ⚖️
          </text>
        </svg>
      );

    // 9. Coding: Variabel Nilai Skor Game
    case 'k5-coding-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Pemrograman Blok: Variabel Skor Game Bertambah Saat Sentuh Koin
          </text>
          {/* Scratch code blocks */}
          <g transform="translate(110, 48)">
            {/* Event block */}
            <rect x="0" y="0" width="200" height="32" rx="6" fill="#f59e0b" />
            <text x="100" y="21" textAnchor="middle" className="text-xs font-black fill-white">
              Ketika [Koin 🪙] Disentuh
            </text>

            {/* Variable change block */}
            <rect x="15" y="36" width="170" height="34" rx="6" fill="#ea580c" />
            <text x="100" y="58" textAnchor="middle" className="text-xs font-black fill-white">
              Ubah [Skor] sebesar +10 ⭐
            </text>
          </g>
          {/* Variable box explanation */}
          <rect x="60" y="130" width="300" height="26" rx="6" fill="#fed7aa" stroke="#f97316" strokeWidth="1.5" />
          <text x="210" y="147" textAnchor="middle" className="text-xs font-bold fill-orange-950">
            Wadah Penyimpan Nilai yang Berubah = VARIABEL 📦
          </text>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#c2410c" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Konsep Pemrograman: Variabel (Penyimpan Nilai Game) 🎮
          </text>
        </svg>
      );

    // 10. Coding: Sensor Ultrasonik Jarak Robot
    case 'k5-coding-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Robotika: Sensor Ultrasonik (Dua Silinder Pendeteksi Jarak Dinding)
          </text>
          {/* Ultrasonic sensor module (HC-SR04) */}
          <g transform="translate(100, 50)">
            {/* Blue PCB */}
            <rect x="0" y="15" width="120" height="65" rx="6" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
            {/* Left cylinder (Transmitter) */}
            <circle cx="35" cy="48" r="22" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
            <circle cx="35" cy="48" r="16" fill="#94a3b8" />
            <text x="35" y="52" textAnchor="middle" className="text-[10px] font-black fill-white">T</text>

            {/* Right cylinder (Receiver) */}
            <circle cx="85" cy="48" r="22" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
            <circle cx="85" cy="48" r="16" fill="#94a3b8" />
            <text x="85" y="52" textAnchor="middle" className="text-[10px] font-black fill-white">R</text>

            {/* Ultrasonic soundwaves forward */}
            <path d="M 125 35 Q 155 48 125 61" fill="none" stroke="#eab308" strokeWidth="2.5" />
            <path d="M 140 28 Q 175 48 140 68" fill="none" stroke="#eab308" strokeWidth="2.5" />
            {/* Obstacle wall */}
            <rect x="180" y="10" width="16" height="75" rx="2" fill="#ef4444" />
            <text x="188" y="100" textAnchor="middle" className="text-[9px] font-bold fill-red-800">Halangan</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="172" width="320" height="34" rx="8" fill="#075985" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-white">
            Sensor Berbentuk Dua Silinder = Sensor Ultrasonik (Jarak) 🤖📡
          </text>
        </svg>
      );

    // 11. Bahasa Inggris: Simple Past Tense Timeline
    case 'k5-inggris-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0f9ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-sky-950">
            Grammar Timeline: Simple Past Tense (Yesterday / Thursday)
          </text>
          {/* Timeline bar */}
          <g transform="translate(60, 60)">
            <line x1="0" y1="30" x2="300" y2="30" stroke="#0f172a" strokeWidth="3" />
            <polygon points="305,30 295,25 295,35" fill="#0f172a" />

            {/* Past: Yesterday (Thursday) - TARGET */}
            <circle cx="70" cy="30" r="10" fill="#dc2626" />
            <text x="70" y="10" textAnchor="middle" className="text-xs font-black fill-red-800">PAST (Kemarin)</text>
            <text x="70" y="58" textAnchor="middle" className="text-[10px] font-bold fill-slate-700">Thursday (Yesterday)</text>
            <rect x="25" y="65" width="90" height="24" rx="4" fill="#fee2e2" stroke="#ef4444" strokeWidth="1" />
            <text x="70" y="81" textAnchor="middle" className="text-[10px] font-black fill-red-900">VERB 2 (Went) ⭐</text>

            {/* Present: Today (Friday) */}
            <circle cx="210" cy="30" r="8" fill="#16a34a" />
            <text x="210" y="10" textAnchor="middle" className="text-xs font-bold fill-green-800">PRESENT (Hari Ini)</text>
            <text x="210" y="58" textAnchor="middle" className="text-[10px] font-bold fill-slate-700">Friday (Today)</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="172" width="320" height="34" rx="8" fill="#1e293b" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Events in the Past use SIMPLE PAST TENSE (Verb 2) ⏳
          </text>
        </svg>
      );

    // 12. Bahasa Inggris: Sequence Words Recipe (First, Second, Next, Finally)
    case 'k5-inggris-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Procedure Text: Sequence Words / Connectives of Time
          </text>
          {/* Sequence recipe flow */}
          <g transform="translate(40, 50)">
            <rect x="0" y="10" width="70" height="50" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="35" y="32" textAnchor="middle" className="text-xs font-black fill-amber-950">First</text>
            <text x="35" y="48" textAnchor="middle" className="text-[9px] font-bold fill-amber-800">Wash fruits</text>

            <text x="78" y="40" className="text-base font-black fill-slate-400">→</text>

            <rect x="90" y="10" width="70" height="50" rx="6" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5" />
            <text x="125" y="32" textAnchor="middle" className="text-xs font-black fill-green-950">Second</text>
            <text x="125" y="48" textAnchor="middle" className="text-[9px] font-bold fill-green-800">Cut them</text>

            <text x="168" y="40" className="text-base font-black fill-slate-400">→</text>

            <rect x="180" y="10" width="70" height="50" rx="6" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
            <text x="215" y="32" textAnchor="middle" className="text-xs font-black fill-sky-950">Next</text>
            <text x="215" y="48" textAnchor="middle" className="text-[9px] font-bold fill-sky-800">Mix yogurt</text>

            <text x="258" y="40" className="text-base font-black fill-slate-400">→</text>

            <rect x="270" y="10" width="70" height="50" rx="6" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5" />
            <text x="305" y="32" textAnchor="middle" className="text-xs font-black fill-pink-950">Finally</text>
            <text x="305" y="48" textAnchor="middle" className="text-[9px] font-bold fill-pink-800">Serve cold</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="172" width="320" height="34" rx="8" fill="#065f46" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-white">
            "First, Second, Next, Finally" = Sequence Words 🥗
          </text>
        </svg>
      );

    // 13. SBdP: Tari Piring Minangkabau
    case 'k5-sbdp-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fef2f2" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-red-950">
            Tari Tradisional Nusantara: Tari Piring (Minangkabau)
          </text>
          {/* Dancer with plates in hands */}
          <g transform="translate(160, 48)">
            <circle cx="50" cy="22" r="14" fill="#fed7aa" />
            {/* Minang horned headdress (Tangkuluak) */}
            <path d="M 30 18 Q 50 2 70 18 L 85 8 L 65 14 L 35 14 L 15 8 Z" fill="#dc2626" />
            <rect x="38" y="36" width="24" height="42" rx="4" fill="#dc2626" />
            {/* Hands holding white ceramic plates */}
            <line x1="38" y1="48" x2="8" y2="48" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />
            <ellipse cx="6" cy="48" rx="8" ry="14" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />

            <line x1="62" y1="48" x2="92" y2="48" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />
            <ellipse cx="94" cy="48" rx="8" ry="14" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#991b1b" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Tari Tradisional: TARI PIRING (Sumatera Barat) 🍽️
          </text>
        </svg>
      );

    // 14. SBdP: Seni Patung 3 Dimensi (Panjang, Lebar, Tinggi)
    case 'k5-sbdp-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Karya Seni Tiga Dimensi: Seni Patung (Memiliki Volume)
          </text>
          {/* 3D Statue on Pedestal */}
          <g transform="translate(160, 45)">
            {/* Pedestal */}
            <rect x="15" y="80" width="70" height="25" fill="#64748b" rx="2" />
            {/* Sculpted figure */}
            <path d="M 50 15 C 30 25 35 45 40 55 C 45 65 30 75 50 80 C 70 75 55 65 60 55 C 65 45 70 25 50 15 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
            <circle cx="50" cy="18" r="10" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
          </g>
          {/* 3D Dimensions indicator */}
          <g transform="translate(280, 60)">
            <text x="0" y="20" className="text-xs font-bold fill-blue-700">↔ Panjang</text>
            <text x="0" y="42" className="text-xs font-bold fill-green-700">↕ Tinggi</text>
            <text x="0" y="64" className="text-xs font-bold fill-amber-700">↗ Lebar (Volume)</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#1e293b" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Karya Seni 3 Dimensi Memiliki Volume = SENI PATUNG 🗿
          </text>
        </svg>
      );

    // 15. PJOK: Lapangan Kasti / Rounders Segi Lima Beraturan
    case 'k5-pjok-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-emerald-950">
            Bentuk Lapangan Permainan Rounders: Segi Lima Beraturan
          </text>
          {/* Regular Pentagon field with 5 bases */}
          <g transform="translate(210, 105)">
            <polygon
              points="0,-55 52,-18 32,44 -32,44 -52,-18"
              fill="#dcfce7"
              stroke="#15803d"
              strokeWidth="3"
            />
            {/* 5 Bases / Tiang Hinggap */}
            <circle cx="0" cy="-55" r="7" fill="#dc2626" />
            <text x="0" y="-65" textAnchor="middle" className="text-[9px] font-black fill-red-800">Home Base</text>

            <circle cx="52" cy="-18" r="7" fill="#2563eb" />
            <text x="68" y="-15" className="text-[9px] font-black fill-blue-800">Tiang 1</text>

            <circle cx="32" cy="44" r="7" fill="#2563eb" />
            <text x="45" y="55" className="text-[9px] font-black fill-blue-800">Tiang 2</text>

            <circle cx="-32" cy="44" r="7" fill="#2563eb" />
            <text x="-45" y="55" textAnchor="end" className="text-[9px] font-black fill-blue-800">Tiang 3</text>

            <circle cx="-52" cy="-18" r="7" fill="#2563eb" />
            <text x="-68" y="-15" textAnchor="end" className="text-[9px] font-black fill-blue-800">Tiang 4</text>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#15803d" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Lapangan Rounders = SEGI LIMA BERATURAN (5 Tiang) ⚾
          </text>
        </svg>
      );

    // 16. PJOK: Aba-Aba "Siap!" Lari Cepat (Pinggul Diangkat)
    case 'k5-pjok-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fef2f2" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-red-950">
            Start Jongkok Lari Cepat: Posisi Saat Aba-Aba "SIAP!"
          </text>
          {/* Ground */}
          <line x1="40" y1="165" x2="380" y2="165" stroke="#ef4444" strokeWidth="3" />
          {/* Runner in "SET" stance */}
          <g transform="translate(160, 60)">
            {/* Hands on ground */}
            <circle cx="20" cy="100" r="4" fill="#0f172a" />
            <line x1="20" y1="100" x2="40" y2="65" stroke="#fed7aa" strokeWidth="4" />
            {/* Head low */}
            <circle cx="35" cy="55" r="12" fill="#fed7aa" />
            {/* Torso sloping up */}
            <line x1="40" y1="65" x2="85" y2="35" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" />
            {/* HIPS RAISED HIGHER than shoulders - HIGHLIGHTED */}
            <circle cx="85" cy="35" r="6" fill="#dc2626" />
            <text x="85" y="20" textAnchor="middle" className="text-[10px] font-black fill-red-800">
              Pinggul Diangkat Lebih Tinggi ⭐
            </text>
            {/* Legs bent on blocks */}
            <line x1="85" y1="35" x2="100" y2="70" stroke="#1e293b" strokeWidth="5" />
            <line x1="100" y1="70" x2="115" y2="100" stroke="#1e293b" strokeWidth="5" />
          </g>
          {/* Bottom badge */}
          <rect x="40" y="172" width="340" height="34" rx="8" fill="#991b1b" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-white">
            Aba-Aba "Siap!": Pinggul Diangkat Lebih Tinggi dari Bahu 🏃💨
          </text>
        </svg>
      );

    // 17. Basa Sunda: Struktur Sisindiran (Padalisan 3-4 = Eusi)
    case 'k5-sunda-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fefce8" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-950">
            Struktur Sisindiran Sunda: Cangkang (1-2) jeung Eusi (3-4)
          </text>
          {/* Structure box */}
          <g transform="translate(60, 48)">
            <rect width="300" height="110" rx="8" fill="#ffffff" stroke="#d97706" strokeWidth="2" />
            <rect x="15" y="12" width="270" height="38" rx="4" fill="#fef3c7" />
            <text x="150" y="28" textAnchor="middle" className="text-[10px] font-bold fill-amber-900">Padalisan 1 & 2:</text>
            <text x="150" y="42" textAnchor="middle" className="text-xs font-black fill-amber-950">CANGKANG (Sampiran)</text>

            <rect x="15" y="58" width="270" height="38" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
            <text x="150" y="74" textAnchor="middle" className="text-[10px] font-bold fill-green-900">Padalisan 3 & 4: ⭐</text>
            <text x="150" y="88" textAnchor="middle" className="text-xs font-black fill-green-950">EUSI (Pesen Inti Piwuruk)</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#78350f" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Padalisan 3 jeung 4 Sisindiran = EUSI (Pesen Pituduh) 📜
          </text>
        </svg>
      );

    // 18. Basa Sunda: Pupuh Kinanti (Watak Kanyaah & Prihatin)
    case 'k5-sunda-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fdf4ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-purple-950">
            Pupuh Sunda: Pupuh Kinanti (Watak Kanyaah & Ngadagoan)
          </text>
          {/* Kinanti characteristic card */}
          <g transform="translate(80, 50)">
            <rect width="260" height="100" rx="10" fill="#ffffff" stroke="#c084fc" strokeWidth="2" />
            <text x="130" y="32" textAnchor="middle" className="text-base font-black fill-purple-900">
              PUPUH KINANTI 🎵
            </text>
            <text x="130" y="60" textAnchor="middle" className="text-xs font-bold fill-slate-700">
              Watak: Kanyaah (Kasih Sayang),
            </text>
            <text x="130" y="78" textAnchor="middle" className="text-xs font-bold fill-slate-700">
              Ngadagoan (Menunggu), atawa Prihatin
            </text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#581c87" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Watak Pupuh Kinanti: Kanyaah, Ngadagoan, atawa Prihatin ❤️
          </text>
        </svg>
      );

    // 19. Basa Jawa: Tokoh Pandhawa Raden Werkudara (Bima)
    case 'k5-jawa-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fefce8" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-950">
            Tokoh Wayang Pandhawa: Raden Werkudara (Bima ing Jodhipati)
          </text>
          {/* Werkudara characteristics */}
          <g transform="translate(130, 48)">
            <rect width="160" height="110" rx="8" fill="#ffffff" stroke="#78350f" strokeWidth="2" />
            <text x="80" y="30" textAnchor="middle" className="text-sm font-black fill-amber-950">RADEN WERKUDARA</text>
            <text x="80" y="48" textAnchor="middle" className="text-xs font-bold fill-slate-700">(Bima / Panenggak)</text>
            {/* Characteristics list */}
            <text x="80" y="70" textAnchor="middle" className="text-[10px] font-bold fill-red-800">
              • Senjata: Kuku Pancanaka ⭐
            </text>
            <text x="80" y="85" textAnchor="middle" className="text-[10px] font-bold fill-blue-800">
              • Satria ing Jodhipati
            </text>
            <text x="80" y="100" textAnchor="middle" className="text-[10px] font-bold fill-green-800">
              • Awak Gagah Pideksa
            </text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#78350f" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Satria Kuku Pancanaka = Raden Werkudara (Bima) ⚔️
          </text>
        </svg>
      );

    // 20. Basa Jawa: Macapat Pocung (4 Gatra)
    case 'k5-jawa-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fdf4ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-purple-950">
            Tembang Macapat Pocung: Guru Gatra Ana 4 Baris (Gatra)
          </text>
          {/* 4 lines of Pocung rule */}
          <g transform="translate(70, 48)">
            <rect width="280" height="110" rx="8" fill="#ffffff" stroke="#c084fc" strokeWidth="2" />
            <text x="140" y="28" textAnchor="middle" className="text-xs font-black fill-purple-950">
              Gatra 1: 12 u (Bapak Pocung...)
            </text>
            <text x="140" y="52" textAnchor="middle" className="text-xs font-black fill-purple-950">
              Gatra 2: 6 a (Dudu watu dudu...)
            </text>
            <text x="140" y="76" textAnchor="middle" className="text-xs font-black fill-purple-950">
              Gatra 3: 8 i (Ngapurancang...)
            </text>
            <text x="140" y="100" textAnchor="middle" className="text-xs font-black fill-purple-950">
              Gatra 4: 12 a (Sira nuli...)
            </text>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#581c87" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Guru Gatra Tembang Pocung = 4 GATRA (Baris) 📜
          </text>
        </svg>
      );

    default:
      return null;
  }
};
