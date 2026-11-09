import React from 'react';

export const getDiagramGrade4 = (imageKey: string): React.ReactNode | null => {
  switch (imageKey) {
    // 1. Matematika: Busur Derajat Sudut Siku-Siku 90°
    case 'k4-mtk-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Pengukuran Sudut: Busur Derajat Menunjukkan Sudut Siku-Siku (90°)
          </text>
          {/* Protractor semicircle */}
          <g transform="translate(210, 145)">
            <path d="M -110 0 A 110 110 0 0 1 110 0 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2.5" />
            <path d="M -40 0 A 40 40 0 0 1 40 0 Z" fill="#ffffff" stroke="#0284c7" strokeWidth="1.5" />
            {/* Center origin */}
            <circle cx="0" cy="0" r="4" fill="#0f172a" />
            <line x1="-105" y1="0" x2="105" y2="0" stroke="#0f172a" strokeWidth="2" />
            {/* 90 degree ray up - HIGHLIGHTED */}
            <line x1="0" y1="0" x2="0" y2="-105" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />
            {/* 0 degree ray right */}
            <line x1="0" y1="0" x2="105" y2="0" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
            {/* Right angle square indicator */}
            <rect x="0" y="-18" width="18" height="18" fill="none" stroke="#dc2626" strokeWidth="2" />
            {/* Degree labels */}
            <text x="0" y="-115" textAnchor="middle" className="text-xs font-black fill-red-800">90° (Tegak Lurus)</text>
            <text x="125" y="4" textAnchor="middle" className="text-[10px] font-bold fill-slate-600">0°</text>
            <text x="-125" y="4" textAnchor="middle" className="text-[10px] font-bold fill-slate-600">180°</text>
            <text x="75" y="-70" textAnchor="middle" className="text-[9px] fill-slate-500">45°</text>
            <text x="-75" y="-70" textAnchor="middle" className="text-[9px] fill-slate-500">135°</text>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#1e293b" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Besar Sudut Siku-Siku Tepat = 90° 📐
          </text>
        </svg>
      );

    // 2. Matematika: Persegi Panjang p=8 cm, l=5 cm, Luas=40 cm²
    case 'k4-mtk-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Luas Persegi Panjang: Panjang = 8 cm, Lebar = 5 cm
          </text>
          {/* Rectangle figure */}
          <g transform="translate(130, 48)">
            <rect x="0" y="0" width="160" height="100" rx="4" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="3" />
            {/* Dimension labels */}
            <text x="80" y="-10" textAnchor="middle" className="text-xs font-black fill-blue-900">Panjang (p) = 8 cm</text>
            <text x="180" y="55" textAnchor="start" className="text-xs font-black fill-blue-900">Lebar (l) = 5 cm</text>
            {/* Area calculation formula inside */}
            <text x="80" y="48" textAnchor="middle" className="text-xs font-bold fill-blue-800">Luas = p × l</text>
            <text x="80" y="68" textAnchor="middle" className="text-sm font-black fill-blue-950">8 cm × 5 cm = 40 cm²</text>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#1e40af" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Luas Bangun = 40 cm² 🟦
          </text>
        </svg>
      );

    // 3. Bahasa Indonesia: Bagan Paragraf Deduktif
    case 'k4-indo-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Struktur Paragraf Deduktif: Gagasan Utama di Awal Paragraf
          </text>
          {/* Paragraph Structure Diagram */}
          <g transform="translate(70, 48)">
            {/* Main idea box at TOP */}
            <rect x="0" y="0" width="280" height="34" rx="6" fill="#fef08a" stroke="#ca8a04" strokeWidth="2.5" />
            <text x="140" y="22" textAnchor="middle" className="text-xs font-black fill-amber-950">
              1. KALIMAT UTAMA (Gagasan Pokok) ⭐
            </text>

            <line x1="140" y1="34" x2="140" y2="52" stroke="#64748b" strokeWidth="2" />

            {/* Explanation sentence 1 */}
            <rect x="20" y="52" width="240" height="26" rx="4" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5" />
            <text x="140" y="69" textAnchor="middle" className="text-[10px] font-bold fill-slate-700">
              2. Kalimat Penjelas 1
            </text>

            {/* Explanation sentence 2 */}
            <rect x="20" y="84" width="240" height="26" rx="4" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5" />
            <text x="140" y="101" textAnchor="middle" className="text-[10px] font-bold fill-slate-700">
              3. Kalimat Penjelas 2
            </text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="172" width="320" height="34" rx="8" fill="#1e293b" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Paragraf DEDUKTIF = Gagasan Pokok di AWAL Paragraf 📖
          </text>
        </svg>
      );

    // 4. Bahasa Indonesia: Wawancara (Pewawancara & Narasumber)
    case 'k4-indo-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-emerald-950">
            Kegiatan Wawancara: Pewawancara Bertanya kepada Narasumber
          </text>
          {/* Two persons facing each other */}
          <g transform="translate(100, 48)">
            {/* Interviewer on left */}
            <g transform="translate(30, 0)">
              <circle cx="20" cy="20" r="14" fill="#fed7aa" />
              <rect x="10" y="34" width="20" height="35" rx="4" fill="#2563eb" />
              {/* Holding microphone */}
              <line x1="25" y1="45" x2="55" y2="40" stroke="#fed7aa" strokeWidth="3" strokeLinecap="round" />
              <rect x="55" y="36" width="12" height="8" rx="2" fill="#0f172a" />
              <text x="20" y="85" textAnchor="middle" className="text-xs font-black fill-blue-900">Pewawancara ⭐</text>
              <text x="20" y="98" textAnchor="middle" className="text-[9px] font-semibold fill-slate-600">(Mengajukan Tanya)</text>
            </g>

            {/* Informant on right */}
            <g transform="translate(150, 0)">
              <circle cx="20" cy="20" r="14" fill="#fed7aa" />
              <rect x="10" y="34" width="20" height="35" rx="4" fill="#16a34a" />
              <text x="20" y="85" textAnchor="middle" className="text-xs font-black fill-green-900">Narasumber</text>
              <text x="20" y="98" textAnchor="middle" className="text-[9px] font-semibold fill-slate-600">(Memberi Info)</text>
            </g>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#15803d" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Orang yang Mengajukan Pertanyaan = Pewawancara 🎙️
          </text>
        </svg>
      );

    // 5. IPAS: Bagan Fotosintesis Tumbuhan Hijau
    case 'k4-ipas-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="22" textAnchor="middle" className="text-xs font-bold fill-emerald-950">
            Proses Fotosintesis: Menghasilkan Karbohidrat dan Oksigen (O₂)
          </text>
          {/* Photosynthesis Leaf Diagram */}
          <g transform="translate(70, 42)">
            {/* Sun on top left */}
            <circle cx="30" cy="15" r="14" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
            <text x="30" y="40" textAnchor="middle" className="text-[9px] font-bold fill-amber-800">Cahaya Matahari</text>

            {/* Big green leaf in center */}
            <path d="M 60 70 C 100 20 200 40 220 70 C 200 100 100 120 60 70 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2.5" />
            <line x1="60" y1="70" x2="220" y2="70" stroke="#15803d" strokeWidth="2" />

            {/* Inputs: Water & CO2 */}
            <text x="35" y="80" className="text-[10px] font-bold fill-blue-700">Air (H₂O) →</text>
            <text x="35" y="98" className="text-[10px] font-bold fill-slate-700">CO₂ (Udara) →</text>

            {/* Outputs: Glucose & OXYGEN (Target!) */}
            <text x="225" y="60" className="text-[10px] font-bold fill-amber-700">→ Glukosa</text>
            <rect x="222" y="70" width="85" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
            <text x="264" y="87" textAnchor="middle" className="text-[10px] font-black fill-green-950">→ Oksigen (O₂) ⭐</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="168" width="320" height="38" rx="8" fill="#14532d" />
          <text x="210" y="186" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Gas yang Dihasilkan Fotosintesis = Oksigen (O₂) 🍃💨
          </text>
          <text x="210" y="198" textAnchor="middle" className="text-[10px] font-medium fill-emerald-100">
            Oksigen sangat penting untuk pernapasan manusia dan hewan
          </text>
        </svg>
      );

    // 6. IPAS: Kincir Air (Energi Gerak -> Energi Listrik)
    case 'k4-ipas-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0f9ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-sky-950">
            Pembangkit Listrik Tenaga Air (PLTA): Kincir Air
          </text>
          {/* Water wheel */}
          <g transform="translate(140, 50)">
            <circle cx="50" cy="50" r="38" fill="none" stroke="#b45309" strokeWidth="4" />
            <circle cx="50" cy="50" r="8" fill="#78350f" />
            {/* Blades */}
            <line x1="50" y1="12" x2="50" y2="88" stroke="#b45309" strokeWidth="4" />
            <line x1="12" y1="50" x2="88" y2="50" stroke="#b45309" strokeWidth="4" />
            <line x1="23" y1="23" x2="77" y2="77" stroke="#b45309" strokeWidth="4" />
            <line x1="23" y1="77" x2="77" y2="23" stroke="#b45309" strokeWidth="4" />
            {/* Water flow */}
            <path d="M -50 75 Q 0 65 50 85 Q 100 105 150 95" fill="none" stroke="#0284c7" strokeWidth="6" />
            {/* Generator bulb */}
            <g transform="translate(130, 20)">
              <rect width="50" height="34" rx="4" fill="#1e293b" />
              <text x="25" y="22" textAnchor="middle" className="text-base">💡</text>
              <text x="25" y="44" textAnchor="middle" className="text-[8px] font-bold fill-slate-700">Listrik</text>
            </g>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="172" width="320" height="34" rx="8" fill="#0369a1" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-white">
            Perubahan Energi: Gerak (Kinetik) → Listrik ⚡
          </text>
        </svg>
      );

    // 7. PKn: Perisai Padi dan Kapas (Sila 5)
    case 'k4-pkn-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-emerald-950">
            Simbol Sila Kelima: Padi dan Kapas Berlatar Putih
          </text>
          {/* Shield outline */}
          <path d="M 145 42 L 275 42 L 275 115 Q 210 175 145 115 Z" fill="#ffffff" stroke="#15803d" strokeWidth="4" />
          {/* Rice & Cotton stalk */}
          <g transform="translate(210, 100)">
            {/* Rice (Padi - yellow) on left */}
            <path d="M 0 35 Q -30 10 -25 -25" fill="none" stroke="#eab308" strokeWidth="3" />
            <circle cx="-25" cy="-25" r="4" fill="#facc15" />
            <circle cx="-23" cy="-10" r="4" fill="#facc15" />
            <circle cx="-18" cy="5" r="4" fill="#facc15" />
            {/* Cotton (Kapas - white with green sepals) on right */}
            <path d="M 0 35 Q 30 10 25 -25" fill="none" stroke="#15803d" strokeWidth="3" />
            <circle cx="25" cy="-25" r="6" fill="#f8fafc" stroke="#15803d" strokeWidth="1.5" />
            <circle cx="23" cy="-10" r="6" fill="#f8fafc" stroke="#15803d" strokeWidth="1.5" />
            <circle cx="18" cy="5" r="6" fill="#f8fafc" stroke="#15803d" strokeWidth="1.5" />
          </g>
          {/* Bottom badge */}
          <rect x="40" y="175" width="340" height="34" rx="8" fill="#15803d" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Sila 5: "Keadilan Sosial bagi Seluruh Rakyat Indonesia" 🌾
          </text>
        </svg>
      );

    // 8. PKn: Struktur Pemerintahan Desa (Kepala Desa / Lurah)
    case 'k4-pkn-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Bagan Pemerintahan Desa: Pemimpin Tertinggi di Desa
          </text>
          {/* Hierarchy Chart */}
          <g transform="translate(130, 48)">
            {/* Top Leader: Kepala Desa / Lurah */}
            <rect x="10" y="0" width="140" height="38" rx="6" fill="#fef08a" stroke="#ca8a04" strokeWidth="2.5" />
            <text x="80" y="23" textAnchor="middle" className="text-xs font-black fill-amber-950">
              KEPALA DESA (Lurah) ⭐
            </text>

            <line x1="80" y1="38" x2="80" y2="58" stroke="#64748b" strokeWidth="2" />
            <line x1="0" y1="58" x2="160" y2="58" stroke="#64748b" strokeWidth="2" />
            <line x1="0" y1="58" x2="0" y2="70" stroke="#64748b" strokeWidth="2" />
            <line x1="160" y1="58" x2="160" y2="70" stroke="#64748b" strokeWidth="2" />

            {/* Subordinates */}
            <rect x="-45" y="70" width="90" height="28" rx="4" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5" />
            <text x="0" y="88" textAnchor="middle" className="text-[10px] font-bold fill-slate-800">Sekretaris Desa</text>

            <rect x="115" y="70" width="90" height="28" rx="4" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5" />
            <text x="160" y="88" textAnchor="middle" className="text-[10px] font-bold fill-slate-800">Badan Permusyawaratan</text>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#1e293b" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Pemimpin Tertinggi di Wilayah Desa = Kepala Desa (Lurah) 🏛️
          </text>
        </svg>
      );

    // 9. Coding: Flowchart Belah Ketupat (Decision / Percabangan)
    case 'k4-coding-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Simbol Flowchart: Belah Ketupat (Keputusan / Decision)
          </text>
          {/* Diamond flowchart shape */}
          <g transform="translate(150, 45)">
            <polygon points="60,5 120,45 60,85 0,45" fill="#fef3c7" stroke="#d97706" strokeWidth="3" />
            <text x="60" y="42" textAnchor="middle" className="text-xs font-black fill-amber-950">Keputusan?</text>
            <text x="60" y="55" textAnchor="middle" className="text-[10px] font-bold fill-amber-800">(Decision)</text>

            {/* Branches: Ya / Tidak */}
            <line x1="120" y1="45" x2="155" y2="45" stroke="#16a34a" strokeWidth="2.5" />
            <text x="138" y="38" className="text-[10px] font-black fill-green-700">Ya</text>

            <line x1="60" y1="85" x2="60" y2="105" stroke="#dc2626" strokeWidth="2.5" />
            <text x="70" y="100" className="text-[10px] font-black fill-red-700">Tidak</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="172" width="320" height="34" rx="8" fill="#1e293b" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Simbol Belah Ketupat = Percabangan Logika (Ya / Tidak) 🔀
          </text>
        </svg>
      );

    // 10. Coding: Antarmuka Scratch (Stage / Panggung)
    case 'k4-coding-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Antarmuka Scratch: Panggung Tempat Karakter Bergerak (Stage)
          </text>
          {/* Scratch UI layout */}
          <g transform="translate(60, 48)">
            {/* Code Block palette on left */}
            <rect x="0" y="0" width="80" height="100" rx="4" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5" />
            <text x="40" y="20" textAnchor="middle" className="text-[9px] font-bold fill-blue-700">Blok Kode</text>
            <rect x="10" y="30" width="60" height="14" rx="3" fill="#3b82f6" />
            <rect x="10" y="50" width="60" height="14" rx="3" fill="#eab308" />

            {/* Script area in middle */}
            <rect x="88" y="0" width="90" height="100" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="133" y="20" textAnchor="middle" className="text-[9px] font-bold fill-slate-600">Area Skrip</text>

            {/* STAGE (PANGGUNG) on right - HIGHLIGHTED */}
            <rect x="186" y="0" width="114" height="100" rx="6" fill="#fefce8" stroke="#ca8a04" strokeWidth="2.5" />
            <text x="243" y="18" textAnchor="middle" className="text-[10px] font-black fill-amber-900">STAGE (Panggung) ⭐</text>
            {/* Sprite Cat in stage */}
            <text x="243" y="60" textAnchor="middle" className="text-2xl">🐱</text>
            <text x="243" y="80" textAnchor="middle" className="text-[9px] font-bold fill-amber-800">Karakter / Sprite</text>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#d97706" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Area Gerak Karakter Scratch = STAGE (Panggung) 🎭
          </text>
        </svg>
      );

    // 11. Bahasa Inggris: Clock 03:15 (A Quarter Past Three)
    case 'k4-inggris-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0f9ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-sky-950">
            Telling Time: A Quarter Past Three (03.15)
          </text>
          {/* Clock face */}
          <circle cx="210" cy="105" r="68" fill="#ffffff" stroke="#0369a1" strokeWidth="4" />
          <text x="210" y="55" textAnchor="middle" className="text-xs font-black fill-slate-800">12</text>
          <text x="262" y="109" textAnchor="middle" className="text-xs font-black fill-slate-800">3</text>
          <text x="210" y="162" textAnchor="middle" className="text-xs font-black fill-slate-800">6</text>
          <text x="158" y="109" textAnchor="middle" className="text-xs font-black fill-slate-800">9</text>
          {/* Hour hand slightly past 3 */}
          <line x1="210" y1="105" x2="242" y2="112" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" />
          {/* Minute hand pointing directly at 3 (15 minutes) */}
          <line x1="210" y1="105" x2="258" y2="105" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" />
          <circle cx="210" cy="105" r="5" fill="#0f172a" />
          {/* Bottom badge */}
          <rect x="60" y="180" width="300" height="28" rx="8" fill="#0284c7" />
          <text x="210" y="198" textAnchor="middle" className="text-xs font-black fill-white">
            03:15 = "A quarter past three" (Lewat 15 menit) ⏰
          </text>
        </svg>
      );

    // 12. Bahasa Inggris: Comparison Giraffe Taller Than Elephant
    case 'k4-inggris-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Comparative Adjectives: The Giraffe is TALLER than the Elephant
          </text>
          {/* Ground line */}
          <line x1="40" y1="160" x2="380" y2="160" stroke="#94a3b8" strokeWidth="2" />
          {/* Elephant on left */}
          <g transform="translate(100, 70)">
            <ellipse cx="40" cy="50" rx="36" ry="28" fill="#94a3b8" />
            <text x="40" y="105" textAnchor="middle" className="text-xs font-bold fill-slate-700">Elephant (Gajah)</text>
            <text x="40" y="45" textAnchor="middle" className="text-2xl">🐘</text>
          </g>
          {/* Giraffe on right - TALLER */}
          <g transform="translate(230, 25)">
            <ellipse cx="40" cy="95" rx="26" ry="20" fill="#f59e0b" />
            <rect x="45" y="20" width="10" height="80" rx="4" fill="#f59e0b" />
            <circle cx="50" cy="20" r="10" fill="#d97706" />
            <text x="50" y="150" textAnchor="middle" className="text-xs font-black fill-amber-950">Giraffe (Jerapah) ⭐</text>
            <text x="50" y="15" textAnchor="middle" className="text-2xl">🦒</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#1e293b" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            "The giraffe is TALLER than the elephant" (Lebih tinggi) 🦒
          </text>
        </svg>
      );

    // 13. SBdP: Anyaman Sasak Bambu Tunggal
    case 'k4-sbdp-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fefce8" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-950">
            Seni Kriya Anyaman: Pola Anyaman Tunggal (Sasak)
          </text>
          {/* Checkerboard weave pattern */}
          <g transform="translate(140, 48)">
            {[0, 1, 2, 3].map((r) =>
              [0, 1, 2, 3].map((c) => (
                <rect
                  key={`${r}-${c}`}
                  x={c * 35}
                  y={r * 25}
                  width="33"
                  height="23"
                  rx="2"
                  fill={(r + c) % 2 === 0 ? '#d97706' : '#fde68a'}
                  stroke="#78350f"
                  strokeWidth="1.5"
                />
              ))
            )}
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#78350f" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Pola Selang-Seling = Anyaman Sasak (Tunggal) 🎋
          </text>
        </svg>
      );

    // 14. SBdP: Perspektif Satu Titik Hilang (Rel Kereta Api)
    case 'k4-sbdp-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Gambar Perspektif: Rel Kereta Menuju Satu Titik Hilang
          </text>
          {/* Horizon Line */}
          <line x1="30" y1="70" x2="390" y2="70" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="350" y="65" className="text-[9px] font-bold fill-slate-500">Garis Horison</text>
          {/* Vanishing Point */}
          <circle cx="210" cy="70" r="4" fill="#dc2626" />
          <text x="210" y="60" textAnchor="middle" className="text-[10px] font-black fill-red-800">Titik Hilang (VP) ⭐</text>
          {/* Rails converging */}
          <line x1="210" y1="70" x2="80" y2="165" stroke="#334155" strokeWidth="4" />
          <line x1="210" y1="70" x2="340" y2="165" stroke="#334155" strokeWidth="4" />
          {/* Railroad ties with perspective spacing */}
          <line x1="190" y1="80" x2="230" y2="80" stroke="#78350f" strokeWidth="2" />
          <line x1="175" y1="95" x2="245" y2="95" stroke="#78350f" strokeWidth="2.5" />
          <line x1="150" y1="115" x2="270" y2="115" stroke="#78350f" strokeWidth="3" />
          <line x1="115" y1="140" x2="305" y2="140" stroke="#78350f" strokeWidth="3.5" />
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#1e293b" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Perspektif Satu Titik Hilang (One Point Perspective) 🛤️
          </text>
        </svg>
      );

    // 15. PJOK: Chest Pass Basket (Operan Setinggi Dada)
    case 'k4-pjok-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fef2f2" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-red-950">
            Teknik Bola Basket: Chest Pass (Operan Lurus Setinggi Dada)
          </text>
          {/* Passing diagram between 2 players */}
          <g transform="translate(80, 50)">
            {/* Player 1 */}
            <circle cx="30" cy="20" r="14" fill="#fed7aa" />
            <rect x="20" y="34" width="20" height="40" rx="4" fill="#ea580c" />
            {/* Hands pushing ball forward */}
            <line x1="35" y1="48" x2="70" y2="48" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />

            {/* Straight pass trajectory at chest height */}
            <line x1="70" y1="48" x2="190" y2="48" stroke="#dc2626" strokeWidth="3" strokeDasharray="5 3" />
            {/* Basketball */}
            <circle cx="130" cy="48" r="12" fill="#ea580c" stroke="#7c2d12" strokeWidth="1.5" />

            {/* Player 2 catching */}
            <circle cx="230" cy="20" r="14" fill="#fed7aa" />
            <rect x="220" y="34" width="20" height="40" rx="4" fill="#2563eb" />
            <line x1="220" y1="48" x2="190" y2="48" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#9a3412" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Operan Lurus Setinggi Dada = CHEST PASS 🏀
          </text>
        </svg>
      );

    // 16. PJOK: Servis Bawah Bola Voli
    case 'k4-pjok-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0f9ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-sky-950">
            Teknik Bola Voli: Servis Bawah (Underhand Serve)
          </text>
          {/* Player serving from bottom */}
          <g transform="translate(130, 48)">
            <circle cx="40" cy="20" r="14" fill="#fed7aa" />
            <rect x="30" y="34" width="20" height="42" rx="4" fill="#0284c7" />
            {/* Left hand holding ball out */}
            <line x1="30" y1="48" x2="10" y2="52" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />
            {/* Volleyball */}
            <circle cx="5" cy="48" r="12" fill="#facc15" stroke="#0284c7" strokeWidth="2" />
            {/* Right arm swinging back to forward from below */}
            <path d="M 50 48 L 70 80 L 15 62" fill="none" stroke="#dc2626" strokeWidth="3" strokeDasharray="3 3" />
            <line x1="45" y1="48" x2="20" y2="60" stroke="#fed7aa" strokeWidth="5" strokeLinecap="round" />
            {/* Clenched fist */}
            <circle cx="18" cy="60" r="5" fill="#fed7aa" />
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#0369a1" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Memukul Bola dari Bawah = SERVIS BAWAH 🏐
          </text>
        </svg>
      );

    // 17. Basa Sunda: Aksara Ngalagena
    case 'k4-sunda-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fdf4ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-purple-950">
            Aksara Sunda Baku: Aksara Ngalagena (Konsonan Dasar)
          </text>
          {/* Ngalagena characters table */}
          <g transform="translate(60, 48)">
            <rect width="300" height="110" rx="8" fill="#ffffff" stroke="#c084fc" strokeWidth="2" />
            <text x="150" y="32" textAnchor="middle" className="text-xs font-black fill-purple-900">
              ka - qa - ga - nga - ca - ja - nya
            </text>
            <text x="150" y="58" textAnchor="middle" className="text-xs font-black fill-purple-900">
              ta - da - na - pa - fa - va - ba - ma
            </text>
            <text x="150" y="84" textAnchor="middle" className="text-xs font-black fill-purple-900">
              ya - ra - la - wa - sa - xa - za - ha
            </text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#581c87" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Aksara Konsonan Dasar Sunda = Ngalagena (18+7 Konsonan) 📜
          </text>
        </svg>
      );

    // 18. Basa Sunda: Rarangkén Panghulu (Sora "i")
    case 'k4-sunda-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fefce8" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-950">
            Rarangkén Aksara Sunda: Panghulu (Ngarobah Sora Jadi "i")
          </text>
          {/* Rarangkén Panghulu illustration */}
          <g transform="translate(150, 48)">
            <rect width="120" height="100" rx="8" fill="#ffffff" stroke="#d97706" strokeWidth="2" />
            {/* The Panghulu circle above the letter */}
            <circle cx="60" cy="25" r="8" fill="#dc2626" />
            <text x="60" y="15" textAnchor="middle" className="text-[10px] font-black fill-red-800">Panghulu (di luhur)</text>
            {/* Base consonant */}
            <text x="60" y="70" textAnchor="middle" className="text-3xl font-black fill-slate-800">Ka → Ki</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#78350f" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Rarangkén di Luhur pikeun Sora "i" = PANGHULU 🔤
          </text>
        </svg>
      );

    // 19. Basa Jawa: Sandhangan Suku (Swara "u")
    case 'k4-jawa-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fdf4ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-purple-950">
            Sandhangan Swara Aksara Jawa: Suku (Ngganti Swara "u")
          </text>
          {/* Sandhangan Suku diagram */}
          <g transform="translate(130, 48)">
            <rect width="160" height="100" rx="8" fill="#ffffff" stroke="#a855f7" strokeWidth="2" />
            <text x="80" y="45" textAnchor="middle" className="text-2xl font-black fill-slate-800">Ha → Hu</text>
            {/* Hook at the bottom */}
            <path d="M 80 55 L 80 80 Q 95 90 105 75" fill="none" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />
            <text x="80" y="92" textAnchor="middle" className="text-[10px] font-black fill-red-800">Sandhangan Suku (ing ngisor)</text>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#581c87" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Sandhangan Swara "u" = SUKU 📜
          </text>
        </svg>
      );

    // 20. Basa Jawa: Sandhangan Panyigeg Layar (Sigeg "r")
    case 'k4-jawa-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fefce8" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-950">
            Sandhangan Panyigeg Aksara Jawa: Layar (Sigeg "r")
          </text>
          {/* Sandhangan Layar diagram */}
          <g transform="translate(130, 48)">
            <rect width="160" height="100" rx="8" fill="#ffffff" stroke="#d97706" strokeWidth="2" />
            {/* Slashed lines above */}
            <line x1="60" y1="28" x2="100" y2="15" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />
            <text x="80" y="12" textAnchor="middle" className="text-[10px] font-black fill-red-800">Layar (garis miring ing dhuwur)</text>
            <text x="80" y="60" textAnchor="middle" className="text-2xl font-black fill-slate-800">Ka + /r/ → Kar</text>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#78350f" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Sandhangan Sigeg "r" = LAYAR 📜
          </text>
        </svg>
      );

    default:
      return null;
  }
};
