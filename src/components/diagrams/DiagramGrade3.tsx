import React from 'react';

export const getDiagramGrade3 = (imageKey: string): React.ReactNode | null => {
  switch (imageKey) {
    // 1. Matematika: Garis Bilangan Pecahan 1/4, 2/4, 3/4, 1
    case 'k3-mtk-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Garis Bilangan: Letak Pecahan 1/4, 2/4 (1/2), 3/4, dan 1
          </text>
          {/* Number line */}
          <g transform="translate(40, 95)">
            <line x1="0" y1="0" x2="340" y2="0" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
            {/* Arrows */}
            <polygon points="-8,0 0,-5 0,5" fill="#0f172a" />
            <polygon points="348,0 340,-5 340,5" fill="#0f172a" />
            {/* Tick 0 */}
            <line x1="20" y1="-12" x2="20" y2="12" stroke="#0f172a" strokeWidth="3" />
            <text x="20" y="32" textAnchor="middle" className="text-sm font-black fill-slate-900">0</text>

            {/* Tick 1/4 */}
            <line x1="95" y1="-10" x2="95" y2="10" stroke="#3b82f6" strokeWidth="2.5" />
            <text x="95" y="30" textAnchor="middle" className="text-xs font-bold fill-blue-700">1/4</text>

            {/* Tick 2/4 = 1/2 */}
            <line x1="170" y1="-12" x2="170" y2="12" stroke="#16a34a" strokeWidth="3" />
            <text x="170" y="30" textAnchor="middle" className="text-xs font-black fill-green-800">2/4 (1/2)</text>

            {/* Tick 3/4 - TARGET */}
            <line x1="245" y1="-14" x2="245" y2="14" stroke="#dc2626" strokeWidth="3.5" />
            <circle cx="245" cy="0" r="6" fill="#dc2626" />
            <text x="245" y="30" textAnchor="middle" className="text-sm font-black fill-red-800">3/4 ⭐</text>

            {/* Tick 4/4 = 1 */}
            <line x1="320" y1="-12" x2="320" y2="12" stroke="#0f172a" strokeWidth="3" />
            <text x="320" y="32" textAnchor="middle" className="text-sm font-black fill-slate-900">4/4 (1)</text>
          </g>
          {/* Fraction Bar representation */}
          <g transform="translate(60, 42)">
            <rect x="0" y="0" width="300" height="24" rx="4" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
            <rect x="0" y="0" width="75" height="24" fill="#93c5fd" />
            <rect x="75" y="0" width="75" height="24" fill="#93c5fd" />
            <rect x="150" y="0" width="75" height="24" fill="#93c5fd" />
            <line x1="75" y1="0" x2="75" y2="24" stroke="#ffffff" strokeWidth="2" />
            <line x1="150" y1="0" x2="150" y2="24" stroke="#ffffff" strokeWidth="2" />
            <line x1="225" y1="0" x2="225" y2="24" stroke="#ffffff" strokeWidth="2" />
            <text x="112" y="16" textAnchor="middle" className="text-[10px] font-black fill-blue-950">3 dari 4 bagian diarsir (3/4)</text>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#1e293b" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Letak Pecahan: 3/4 berada di antara 2/4 dan 1 📍
          </text>
        </svg>
      );

    // 2. Matematika: Diagram Batang Penjualan Buah
    case 'k3-mtk-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Diagram Batang: Hasil Penjualan Buah Toko Segar (kg)
          </text>
          {/* Chart Axes */}
          <g transform="translate(70, 42)">
            {/* Y axis */}
            <line x1="0" y1="0" x2="0" y2="120" stroke="#64748b" strokeWidth="2" />
            {/* X axis */}
            <line x1="0" y1="120" x2="300" y2="120" stroke="#64748b" strokeWidth="2" />

            {/* Gridlines & Y labels */}
            <text x="-10" y="124" textAnchor="end" className="text-[10px] font-bold fill-slate-500">0</text>
            <text x="-10" y="84" textAnchor="end" className="text-[10px] font-bold fill-slate-500">10</text>
            <line x1="0" y1="80" x2="300" y2="80" stroke="#e2e8f0" strokeDasharray="3 3" />
            <text x="-10" y="44" textAnchor="end" className="text-[10px] font-bold fill-slate-500">20</text>
            <line x1="0" y1="40" x2="300" y2="40" stroke="#e2e8f0" strokeDasharray="3 3" />
            <text x="-10" y="4" textAnchor="end" className="text-[10px] font-bold fill-slate-500">30</text>
            <line x1="0" y1="0" x2="300" y2="0" stroke="#e2e8f0" strokeDasharray="3 3" />

            {/* Bar 1: Apel (25 kg) */}
            <rect x="25" y="20" width="40" height="100" rx="4" fill="#ef4444" />
            <text x="45" y="15" textAnchor="middle" className="text-[10px] font-black fill-red-800">25 kg</text>
            <text x="45" y="136" textAnchor="middle" className="text-[10px] font-bold fill-slate-700">Apel</text>

            {/* Bar 2: Jeruk (30 kg) - TERTINGGI */}
            <rect x="95" y="0" width="40" height="120" rx="4" fill="#f59e0b" />
            <text x="115" y="-5" textAnchor="middle" className="text-[10px] font-black fill-amber-800">30 kg ⭐</text>
            <text x="115" y="136" textAnchor="middle" className="text-[10px] font-bold fill-slate-700">Jeruk</text>

            {/* Bar 3: Mangga (15 kg) */}
            <rect x="165" y="60" width="40" height="60" rx="4" fill="#10b981" />
            <text x="185" y="55" textAnchor="middle" className="text-[10px] font-black fill-emerald-800">15 kg</text>
            <text x="185" y="136" textAnchor="middle" className="text-[10px] font-bold fill-slate-700">Mangga</text>

            {/* Bar 4: Pisang (20 kg) */}
            <rect x="235" y="40" width="40" height="80" rx="4" fill="#eab308" />
            <text x="255" y="35" textAnchor="middle" className="text-[10px] font-black fill-yellow-800">20 kg</text>
            <text x="255" y="136" textAnchor="middle" className="text-[10px] font-bold fill-slate-700">Pisang</text>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="185" width="300" height="26" rx="6" fill="#1e293b" />
          <text x="210" y="202" textAnchor="middle" className="text-xs font-bold fill-white">
            Penjualan Terbanyak: Jeruk (30 kg) 🍊
          </text>
        </svg>
      );

    // 3. Bahasa Indonesia: Teks Fabel Kelinci dan Kura-Kura
    case 'k3-indo-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-emerald-950">
            Ciri Cerita Fabel: Dongeng dengan Tokoh Hewan Berperilaku Manusia
          </text>
          {/* Race track illustration */}
          <g transform="translate(80, 48)">
            {/* Finish Line */}
            <line x1="220" y1="10" x2="220" y2="90" stroke="#0f172a" strokeWidth="4" strokeDasharray="6 6" />
            <text x="220" y="5" textAnchor="middle" className="text-xs font-black fill-red-600">🏁 FINISH</text>

            {/* Hare sleeping under tree */}
            <g transform="translate(40, 20)">
              <text x="20" y="30" className="text-2xl">🐇</text>
              <text x="20" y="55" textAnchor="middle" className="text-[10px] font-bold fill-slate-600">Kelinci Tertidur 💤</text>
            </g>

            {/* Tortoise walking steadfastly */}
            <g transform="translate(140, 20)">
              <text x="20" y="30" className="text-2xl">🐢</text>
              <text x="20" y="55" textAnchor="middle" className="text-[10px] font-black fill-green-800">Kura-Kura Gigih ⭐</text>
            </g>
          </g>
          {/* Explanation badge */}
          <rect x="50" y="165" width="320" height="42" rx="8" fill="#166534" />
          <text x="210" y="184" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Teks Fabel: Dongeng Hewan yang Memiliki Pesan Moral
          </text>
          <text x="210" y="198" textAnchor="middle" className="text-[10px] font-medium fill-emerald-100">
            Kura-kura menang karena pantang menyerah dan tekun
          </text>
        </svg>
      );

    // 4. Bahasa Indonesia: Huruf Kapital (Nama Hari & Kota)
    case 'k3-indo-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Kaidah Bahasa: Penggunaan Huruf Kapital pada Nama Hari & Kota
          </text>
          {/* Sentence card */}
          <g transform="translate(40, 50)">
            <rect width="340" height="95" rx="10" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" />
            <text x="170" y="36" textAnchor="middle" className="text-sm font-bold fill-slate-800">
              "Pada hari <tspan className="font-black fill-blue-700">S</tspan>enin, Bayu berlibur ke kota <tspan className="font-black fill-blue-700">B</tspan>andung."
            </text>
            {/* Highlights */}
            <rect x="70" y="52" width="70" height="24" rx="4" fill="#dbeafe" />
            <text x="105" y="68" textAnchor="middle" className="text-[10px] font-black fill-blue-900">1. Nama Hari</text>

            <rect x="200" y="52" width="70" height="24" rx="4" fill="#dbeafe" />
            <text x="235" y="68" textAnchor="middle" className="text-[10px] font-black fill-blue-900">2. Nama Kota</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="170" width="320" height="34" rx="8" fill="#1e40af" />
          <text x="210" y="192" textAnchor="middle" className="text-xs font-black fill-white">
            Huruf Kapital Wajib untuk Awal Nama Hari dan Nama Geografi (Kota) ✍️
          </text>
        </svg>
      );

    // 5. IPAS: Bagian-Bagian Bunga Sempurna
    case 'k3-ipas-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fdf4ff" rx="16" />
          <text x="210" y="22" textAnchor="middle" className="text-xs font-bold fill-fuchsia-950">
            Struktur Bunga Sempurna: Putik, Benang Sari, Mahkota, Kelopak
          </text>
          {/* Flower diagram */}
          <g transform="translate(150, 40)">
            {/* Receptacle & Sepal */}
            <path d="M 40 100 Q 60 115 80 100 L 70 125 L 50 125 Z" fill="#15803d" />
            <line x1="60" y1="125" x2="60" y2="145" stroke="#15803d" strokeWidth="6" />
            {/* Petals (Mahkota) */}
            <path d="M 60 90 C 20 60 10 20 60 10 C 110 20 100 60 60 90 Z" fill="#ec4899" opacity="0.8" />
            <path d="M 60 90 C 10 90 -10 60 30 45" fill="#f43f5e" opacity="0.7" />
            <path d="M 60 90 C 110 90 130 60 90 45" fill="#f43f5e" opacity="0.7" />
            {/* Pistil / Putik in center (female) */}
            <line x1="60" y1="90" x2="60" y2="40" stroke="#84cc16" strokeWidth="4" />
            <circle cx="60" cy="38" r="6" fill="#facc15" stroke="#65a30d" strokeWidth="1.5" />
            {/* Stamen / Benang sari (male) */}
            <line x1="60" y1="90" x2="45" y2="50" stroke="#ca8a04" strokeWidth="2" />
            <circle cx="45" cy="48" r="4" fill="#eab308" />
            <line x1="60" y1="90" x2="75" y2="50" stroke="#ca8a04" strokeWidth="2" />
            <circle cx="75" cy="48" r="4" fill="#eab308" />
          </g>
          {/* Labels on sides */}
          <g transform="translate(30, 48)">
            <rect x="0" y="10" width="105" height="24" rx="4" fill="#fce7f3" stroke="#db2777" strokeWidth="1" />
            <text x="52" y="26" textAnchor="middle" className="text-[10px] font-black fill-pink-900">Mahkota (Perhiasan)</text>

            <rect x="0" y="45" width="105" height="24" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
            <text x="52" y="61" textAnchor="middle" className="text-[10px] font-black fill-amber-900">Benang Sari (Jantan)</text>

            <rect x="0" y="80" width="105" height="24" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
            <text x="52" y="96" textAnchor="middle" className="text-[10px] font-black fill-green-900">Putik (Betina) ⭐</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#831843" />
          <text x="210" y="195" textAnchor="middle" className="text-xs font-black fill-white">
            Alat Perkembangbiakan Bunga: Putik (Betina) & Benang Sari (Jantan) 🌸
          </text>
        </svg>
      );

    // 6. IPAS: Perubahan Wujud Benda (Mencair, Membeku, Menguap)
    case 'k3-ipas-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="22" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Perubahan Wujud Benda: Mencair, Membeku, dan Menguap
          </text>
          {/* Triangle Diagram of states */}
          <g transform="translate(60, 42)">
            {/* Padat (Es) */}
            <rect x="0" y="10" width="80" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
            <text x="40" y="38" textAnchor="middle" className="text-lg">🧊</text>
            <text x="40" y="58" textAnchor="middle" className="text-xs font-black fill-blue-900">PADAT</text>

            {/* Arrows between Padat and Cair */}
            <path d="M 85 28 L 195 28" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <text x="140" y="22" textAnchor="middle" className="text-[9px] font-bold fill-red-600">Mencair (Dipanaskan) →</text>
            <path d="M 195 48 L 85 48" stroke="#0284c7" strokeWidth="2.5" />
            <text x="140" y="60" textAnchor="middle" className="text-[9px] font-bold fill-sky-700">← Membeku (Didinginkan)</text>

            {/* Cair (Air) */}
            <rect x="200" y="10" width="80" height="60" rx="8" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2" />
            <text x="240" y="38" textAnchor="middle" className="text-lg">💧</text>
            <text x="240" y="58" textAnchor="middle" className="text-xs font-black fill-teal-900">CAIR</text>

            {/* Cair to Gas */}
            <path d="M 240 75 L 240 100" stroke="#f59e0b" strokeWidth="2.5" />
            <text x="270" y="90" className="text-[9px] font-bold fill-amber-700">Menguap ↓</text>

            {/* Gas */}
            <rect x="200" y="105" width="80" height="40" rx="8" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" />
            <text x="240" y="128" textAnchor="middle" className="text-xs font-black fill-red-900">GAS (Uap) ♨️</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="185" width="320" height="26" rx="6" fill="#0f172a" />
          <text x="210" y="202" textAnchor="middle" className="text-xs font-bold fill-yellow-400">
            Es batu terkena sinar matahari akan MENCAIR menjadi air cair
          </text>
        </svg>
      );

    // 7. PKn: Musyawarah Mufakat di Kelas
    case 'k3-pkn-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#eff6ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-blue-950">
            Penerapan Sila Ke-4: Musyawarah Memilih Ketua Kelas
          </text>
          {/* Classroom meeting */}
          <g transform="translate(100, 48)">
            {/* Whiteboard with vote count */}
            <rect x="40" y="0" width="140" height="60" rx="6" fill="#ffffff" stroke="#64748b" strokeWidth="2" />
            <text x="110" y="20" textAnchor="middle" className="text-[10px] font-bold fill-slate-700">Pemilihan Ketua Kelas</text>
            <text x="65" y="42" className="text-[10px] font-bold fill-blue-700">Andi: ||||</text>
            <text x="120" y="42" className="text-[10px] font-bold fill-green-700">Siti: |||| |</text>

            {/* Students raising hands in circle */}
            <g transform="translate(0, 65)">
              <circle cx="30" cy="20" r="12" fill="#fed7aa" />
              <line x1="30" y1="12" x2="30" y2="-5" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />
              <circle cx="90" cy="20" r="12" fill="#fed7aa" />
              <circle cx="150" cy="20" r="12" fill="#fed7aa" />
              <line x1="150" y1="12" x2="150" y2="-5" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />
              <circle cx="210" cy="20" r="12" fill="#fed7aa" />
            </g>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#1e40af" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Musyawarah untuk Mufakat (Sila ke-4 Pancasila) 🗳️
          </text>
        </svg>
      );

    // 8. PKn: Gotong Royong Kerja Bakti
    case 'k3-pkn-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-emerald-950">
            Kerja Bakti: Warga Gotong Royong Membersihkan Saluran Air
          </text>
          {/* Village stream cleaning */}
          <g transform="translate(80, 50)">
            <rect x="0" y="60" width="260" height="30" rx="4" fill="#38bdf8" />
            {/* Citizens working together */}
            <g transform="translate(20, 10)">
              <circle cx="20" cy="20" r="14" fill="#fed7aa" />
              <rect x="12" y="34" width="16" height="30" rx="3" fill="#047857" />
              <line x1="10" y1="40" x2="-5" y2="70" stroke="#78350f" strokeWidth="3" />
            </g>
            <g transform="translate(100, 10)">
              <circle cx="20" cy="20" r="14" fill="#fed7aa" />
              <rect x="12" y="34" width="16" height="30" rx="3" fill="#b45309" />
              <rect x="30" y="45" width="22" height="24" rx="3" fill="#10b981" />
            </g>
            <g transform="translate(180, 10)">
              <circle cx="20" cy="20" r="14" fill="#fed7aa" />
              <rect x="12" y="34" width="16" height="30" rx="3" fill="#1d4ed8" />
              <line x1="20" y1="40" x2="35" y2="70" stroke="#78350f" strokeWidth="3" />
            </g>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#166534" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Nilai Luhur Bangsa: Gotong Royong Warga Masyarakat 🤝
          </text>
        </svg>
      );

    // 9. Coding: Percabangan Logika IF - ELSE
    case 'k3-coding-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="22" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Logika Percabangan (Decision): JIKA Hujan MAKA Bawa Payung
          </text>
          {/* Flowchart Diamond */}
          <g transform="translate(130, 42)">
            {/* Condition Diamond */}
            <polygon points="80,10 140,40 80,70 20,40" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" />
            <text x="80" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-950">Apakah Hari</text>
            <text x="80" y="50" textAnchor="middle" className="text-[10px] font-black fill-amber-950">HUJAN? 🌧️</text>

            {/* Branch TRUE -> Bawa Payung */}
            <line x1="140" y1="40" x2="190" y2="40" stroke="#16a34a" strokeWidth="2.5" />
            <text x="165" y="32" textAnchor="middle" className="text-[10px] font-black fill-green-700">YA</text>
            <rect x="190" y="20" width="85" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
            <text x="232" y="38" textAnchor="middle" className="text-[9px] font-black fill-green-950">Bawa Payung ☂️</text>
            <text x="232" y="50" textAnchor="middle" className="text-[8px] font-bold fill-green-800">(Aksi Benar)</text>

            {/* Branch FALSE -> Pakai Topi */}
            <line x1="20" y1="40" x2="-30" y2="40" stroke="#dc2626" strokeWidth="2.5" />
            <text x="-5" y="32" textAnchor="middle" className="text-[10px] font-black fill-red-700">TIDAK</text>
            <rect x="-115" y="20" width="85" height="40" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
            <text x="-72" y="38" textAnchor="middle" className="text-[9px] font-black fill-red-950">Pakai Topi 🧢</text>
            <text x="-72" y="50" textAnchor="middle" className="text-[8px] font-bold fill-red-800">(Aksi Salah)</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="168" width="320" height="38" rx="8" fill="#1e293b" />
          <text x="210" y="186" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Konsep Pemrograman: IF - ELSE (Percabangan Kondisi) 🔀
          </text>
          <text x="210" y="198" textAnchor="middle" className="text-[10px] font-medium fill-slate-300">
            Komputer memilih perintah berdasarkan kondisi yang bernilai benar/salah
          </text>
        </svg>
      );

    // 10. Coding: Dekomposisi Masalah
    case 'k3-coding-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="22" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Berpikir Komputasional: Dekomposisi (Memecah Masalah Kompleks)
          </text>
          {/* Big Problem Box */}
          <g transform="translate(150, 42)">
            <rect x="0" y="0" width="120" height="36" rx="6" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2" />
            <text x="60" y="22" textAnchor="middle" className="text-xs font-black fill-indigo-950">Masalah Besar</text>
            {/* Split arrows */}
            <path d="M 60 36 L 60 55 L -60 55 L -60 70" fill="none" stroke="#64748b" strokeWidth="2" />
            <path d="M 60 36 L 60 70" fill="none" stroke="#64748b" strokeWidth="2" />
            <path d="M 60 36 L 60 55 L 180 55 L 180 70" fill="none" stroke="#64748b" strokeWidth="2" />
            {/* 3 Smaller sub-problems */}
            <rect x="-110" y="70" width="100" height="34" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
            <text x="-60" y="91" textAnchor="middle" className="text-[10px] font-black fill-green-950">Bagian 1</text>

            <rect x="10" y="70" width="100" height="34" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
            <text x="60" y="91" textAnchor="middle" className="text-[10px] font-black fill-green-950">Bagian 2</text>

            <rect x="130" y="70" width="100" height="34" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
            <text x="180" y="91" textAnchor="middle" className="text-[10px] font-black fill-green-950">Bagian 3</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="172" width="320" height="32" rx="8" fill="#312e81" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-white">
            DEKOMPOSISI = Memecah masalah menjadi bagian lebih kecil 🧩
          </text>
        </svg>
      );

    // 11. Bahasa Inggris: Preposition of Place (ON the box)
    case 'k3-inggris-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdfa" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-teal-950">
            Prepositions of Place: The Ball is ON the Box
          </text>
          {/* 3 Box scenarios */}
          <g transform="translate(30, 48)">
            {/* 1. ON - TARGET */}
            <g transform="translate(20, 0)">
              <rect x="10" y="45" width="60" height="50" rx="4" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
              <circle cx="40" cy="28" r="14" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
              <text x="40" y="112" textAnchor="middle" className="text-xs font-black fill-red-800">ON the box ⭐</text>
            </g>

            {/* 2. IN */}
            <g transform="translate(140, 0)">
              <rect x="10" y="45" width="60" height="50" rx="4" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
              <circle cx="40" cy="65" r="12" fill="#3b82f6" opacity="0.9" />
              <text x="40" y="112" textAnchor="middle" className="text-xs font-bold fill-slate-700">IN the box</text>
            </g>

            {/* 3. UNDER */}
            <g transform="translate(260, 0)">
              <rect x="10" y="30" width="60" height="40" rx="4" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
              <circle cx="40" cy="85" r="14" fill="#22c55e" stroke="#166534" strokeWidth="2" />
              <text x="40" y="112" textAnchor="middle" className="text-xs font-bold fill-slate-700">UNDER the box</text>
            </g>
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#0f766e" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Answer: "The red ball is ON the box" (Di atas kotak) 🔴📦
          </text>
        </svg>
      );

    // 12. Bahasa Inggris: Daily Routines (Wake up, breakfast, school)
    case 'k3-inggris-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f8fafc" rx="16" />
          <text x="210" y="22" textAnchor="middle" className="text-xs font-bold fill-slate-800">
            Daily Routines: Morning Activities in Sequence
          </text>
          {/* 3 activities */}
          <g transform="translate(20, 45)">
            {/* 1. Wake up */}
            <rect x="0" y="5" width="110" height="90" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
            <text x="55" y="42" textAnchor="middle" className="text-2xl">⏰</text>
            <text x="55" y="68" textAnchor="middle" className="text-xs font-black fill-amber-950">1. Wake Up</text>
            <text x="55" y="82" textAnchor="middle" className="text-[9px] font-bold fill-amber-700">(06:00 AM)</text>
            <text x="120" y="55" className="text-base font-black fill-slate-400">→</text>

            {/* 2. Have Breakfast */}
            <rect x="130" y="5" width="110" height="90" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
            <text x="185" y="42" textAnchor="middle" className="text-2xl">🍳</text>
            <text x="185" y="68" textAnchor="middle" className="text-xs font-black fill-green-950">2. Breakfast</text>
            <text x="185" y="82" textAnchor="middle" className="text-[9px] font-bold fill-green-700">(Makan Pagi)</text>
            <text x="250" y="55" className="text-base font-black fill-slate-400">→</text>

            {/* 3. Go to School */}
            <rect x="260" y="5" width="110" height="90" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
            <text x="315" y="42" textAnchor="middle" className="text-2xl">🏫</text>
            <text x="315" y="68" textAnchor="middle" className="text-xs font-black fill-sky-950">3. Go to School</text>
            <text x="315" y="82" textAnchor="middle" className="text-[9px] font-bold fill-sky-700">(Berangkat)</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="172" width="320" height="32" rx="8" fill="#1e293b" />
          <text x="210" y="193" textAnchor="middle" className="text-xs font-black fill-yellow-400">
            Kegiatan Pagi: Bangun Tidur → Sarapan → Pergi ke Sekolah 🎒
          </text>
        </svg>
      );

    // 13. SBdP: Gambar Dekoratif Motif Tumbuhan / Hewan
    case 'k3-sbdp-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fefce8" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-950">
            Seni Dekoratif: Hiasan Ornamen Motif Daun dan Burung
          </text>
          {/* Decorative frame */}
          <g transform="translate(110, 45)">
            <rect width="200" height="110" rx="8" fill="#ffffff" stroke="#d97706" strokeWidth="2.5" />
            {/* Symmetrical swirling decorative vine leaf */}
            <path d="M 30 85 Q 70 30 100 55 Q 130 80 170 35" fill="none" stroke="#16a34a" strokeWidth="3" />
            {/* Leaves along vine */}
            <circle cx="70" cy="45" r="8" fill="#84cc16" />
            <circle cx="100" cy="55" r="8" fill="#f59e0b" />
            <circle cx="130" cy="65" r="8" fill="#84cc16" />
            {/* Stylized decorative bird */}
            <path d="M 85 85 Q 100 65 115 85 Z" fill="#3b82f6" />
            <circle cx="100" cy="72" r="5" fill="#facc15" />
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#78350f" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Seni Dekoratif = Menggambar Pola Hiasan Indah 🌿✨
          </text>
        </svg>
      );

    // 14. SBdP: Tari Menirukan Burung Terbang
    case 'k3-sbdp-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-emerald-950">
            Gerak Tari Kreatif: Menirukan Gerakan Burung Terbang
          </text>
          {/* Dancer flapping arms */}
          <g transform="translate(170, 48)">
            <circle cx="40" cy="25" r="16" fill="#fed7aa" />
            <rect x="28" y="42" width="24" height="40" rx="4" fill="#10b981" />
            {/* Arms flapping up and down */}
            <path d="M 28 50 Q -10 30 -25 55" fill="none" stroke="#059669" strokeWidth="5" strokeLinecap="round" />
            <path d="M 52 50 Q 90 30 105 55" fill="none" stroke="#059669" strokeWidth="5" strokeLinecap="round" />
            {/* Motion swoosh lines */}
            <path d="M -20 25 Q -10 40 -15 65" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M 100 25 Q 90 40 95 65" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="32" y1="82" x2="30" y2="105" stroke="#1e293b" strokeWidth="4" />
            <line x1="48" y1="82" x2="50" y2="105" stroke="#1e293b" strokeWidth="4" />
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#065f46" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Gerak Tari: Menirukan Sayap Burung Mengepak 🕊️
          </text>
        </svg>
      );

    // 15. PJOK: Lari Zig-Zag (Kelincahan)
    case 'k3-pjok-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#eff6ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-blue-950">
            Latihan Kelincahan: Lari Zig-Zag Melewati Tiang Rintangan
          </text>
          {/* Cones / Poles */}
          <g transform="translate(60, 48)">
            {[0, 1, 2, 3].map((i) => (
              <g key={i} transform={`translate(${i * 80}, 0)`}>
                <polygon points="20,25 35,65 5,65" fill="#f97316" stroke="#c2410c" strokeWidth="2" />
                <rect x="0" y="65" width="40" height="8" rx="2" fill="#ea580c" />
                <text x="20" y="88" textAnchor="middle" className="text-[10px] font-bold fill-slate-700">Tiang {i + 1}</text>
              </g>
            ))}
            {/* Zigzag path line */}
            <path
              d="M -20 45 Q 20 15 50 45 Q 80 80 120 45 Q 160 10 200 45 Q 240 80 280 45 Q 310 20 330 45"
              fill="none"
              stroke="#2563eb"
              strokeWidth="4"
              strokeDasharray="6 4"
            />
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#1d4ed8" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Tujuan: Melatih Kelincahan (Agility) Berkelok-Kelok ⚡
          </text>
        </svg>
      );

    // 16. PJOK: Renang Gaya Dada
    case 'k3-pjok-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0f9ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-sky-950">
            Olahraga Renang: Gaya Dada (Gaya Katak)
          </text>
          {/* Swimming pool water */}
          <rect x="30" y="60" width="360" height="90" rx="8" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
          {/* Swimmer in water */}
          <g transform="translate(170, 75)">
            <ellipse cx="40" cy="20" rx="35" ry="14" fill="#fed7aa" stroke="#c2410c" strokeWidth="1.5" />
            <circle cx="80" cy="18" r="10" fill="#1e293b" />
            {/* Arms scooping forward */}
            <path d="M 65 15 Q 95 5 80 30" fill="none" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />
            {/* Frog-like kicking legs */}
            <path d="M 10 20 Q -15 0 -20 15" fill="none" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />
            <path d="M 10 20 Q -15 40 -20 25" fill="none" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />
          </g>
          {/* Water waves */}
          <path d="M 50 115 Q 100 100 150 115 Q 200 130 250 115 Q 300 100 350 115" fill="none" stroke="#ffffff" strokeWidth="3" />
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#0369a1" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-white">
            Gaya Dada = Gerakan Kaki & Tangan Seperti Katak 🏊‍♂️
          </text>
        </svg>
      );

    // 17. Basa Sunda: Boboko (Pakakas Dapur Sunda)
    case 'k3-sunda-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fefce8" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-950">
            Pakakas Dapur Tradisional Sunda: Boboko (Wadah Sangu)
          </text>
          {/* Woven bamboo Boboko basket */}
          <g transform="translate(150, 48)">
            {/* Rim top */}
            <ellipse cx="60" cy="20" rx="55" ry="14" fill="#fde68a" stroke="#78350f" strokeWidth="2.5" />
            {/* Body of boboko */}
            <path d="M 5 20 Q 30 90 60 90 Q 90 90 115 20 Z" fill="#d97706" stroke="#78350f" strokeWidth="2.5" />
            {/* Square base (soko) */}
            <rect x="40" y="90" width="40" height="15" rx="2" fill="#78350f" />
            {/* Woven cross-hatch pattern */}
            <path d="M 25 35 L 95 75 M 95 35 L 25 75" stroke="#92400e" strokeWidth="1.5" />
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#78350f" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Boboko = Wadah sangu tina anyaman awi 🍚
          </text>
        </svg>
      );

    // 18. Basa Sunda: Sasakala Gunung Tangkuban Parahu
    case 'k3-sunda-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#f0fdf4" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-emerald-950">
            Dongéng Sasakala Sunda: Sangkuriang & Tangkuban Parahu
          </text>
          {/* Overturned boat mountain silhouette */}
          <g transform="translate(80, 50)">
            {/* Sky background */}
            <path d="M 10 100 Q 130 15 250 100 Z" fill="#15803d" stroke="#065f46" strokeWidth="3" />
            {/* Flattened inverted keel shape */}
            <path d="M 70 45 Q 130 35 190 45" stroke="#facc15" strokeWidth="3" fill="none" />
            <text x="130" y="70" textAnchor="middle" className="text-xs font-black fill-white">Parahu Nangkub</text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#065f46" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-200">
            Sasakala: Gunung Tangkuban Parahu di Jawa Barat ⛰️
          </text>
        </svg>
      );

    // 19. Basa Jawa: Aksara Jawa Dentawyanjana
    case 'k3-jawa-1':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fdf4ff" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-purple-950">
            Aksara Jawa Dentawyanjana: Carakan (20 Aksara Baku)
          </text>
          {/* 4 lines of Carakan */}
          <g transform="translate(60, 48)">
            <rect width="300" height="110" rx="8" fill="#ffffff" stroke="#c084fc" strokeWidth="2" />
            <text x="150" y="28" textAnchor="middle" className="text-xs font-black fill-purple-900">
              1. Ha - Na - Ca - Ra - Ka (Ana utusan)
            </text>
            <text x="150" y="52" textAnchor="middle" className="text-xs font-black fill-purple-900">
              2. Da - Ta - Sa - Wa - La (Padha rebat adil)
            </text>
            <text x="150" y="76" textAnchor="middle" className="text-xs font-black fill-purple-900">
              3. Pa - Dha - Ja - Ya - Nya (Padha sektine)
            </text>
            <text x="150" y="100" textAnchor="middle" className="text-xs font-black fill-purple-900">
              4. Ma - Ga - Ba - Tha - Nga (Padha dadi bathang)
            </text>
          </g>
          {/* Bottom badge */}
          <rect x="50" y="175" width="320" height="32" rx="8" fill="#581c87" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Aksara Carakan / Dentawyanjana (20 Aksara Dasar) 📜
          </text>
        </svg>
      );

    // 20. Basa Jawa: Omah Adat Joglo
    case 'k3-jawa-2':
      return (
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-56 select-none font-sans">
          <rect width="420" height="220" fill="#fefce8" rx="16" />
          <text x="210" y="24" textAnchor="middle" className="text-xs font-bold fill-amber-950">
            Omah Adat Tradisional Jawa: Omah Joglo
          </text>
          {/* Joglo roof & pillars */}
          <g transform="translate(110, 45)">
            {/* Steep high middle roof (brunjung) */}
            <polygon points="100,10 50,50 150,50" fill="#78350f" stroke="#451a03" strokeWidth="2" />
            {/* Flatter surrounding roof (emperan) */}
            <polygon points="50,50 150,50 190,80 10,80" fill="#b45309" stroke="#451a03" strokeWidth="2" />
            {/* 4 Main Pillars (Saka Guru) */}
            <rect x="35" y="80" width="8" height="40" fill="#78350f" />
            <rect x="75" y="80" width="8" height="40" fill="#78350f" />
            <rect x="115" y="80" width="8" height="40" fill="#78350f" />
            <rect x="155" y="80" width="8" height="40" fill="#78350f" />
            {/* Pendhapa floor */}
            <rect x="0" y="118" width="200" height="8" rx="2" fill="#d97706" />
          </g>
          {/* Bottom badge */}
          <rect x="60" y="175" width="300" height="32" rx="8" fill="#78350f" />
          <text x="210" y="196" textAnchor="middle" className="text-xs font-black fill-yellow-300">
            Omah Tradisional Jawa = Omah Joglo 🏠
          </text>
        </svg>
      );

    default:
      return null;
  }
};
