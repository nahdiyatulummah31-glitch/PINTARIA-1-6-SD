import React, { useState, useMemo } from 'react';
import {
  Calculator,
  ShieldCheck,
  BookOpen,
  Compass,
  Layers,
  Globe,
  Code,
  Search,
  Check,
  Copy,
  Ruler,
  Clock,
  Sparkles,
  Zap,
  ArrowRight,
  Flame,
  Award,
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

type CheatSheetTab =
  | 'matematika'
  | 'perkalian'
  | 'sains'
  | 'pancasila'
  | 'indonesia'
  | 'english'
  | 'coding'
  | 'daerah';

export const CheatSheetView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CheatSheetTab>('matematika');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Interactive Multiplication Matrix State
  const [selectedNum1, setSelectedNum1] = useState<number>(7);
  const [selectedNum2, setSelectedNum2] = useState<number>(8);

  // Interactive Converter State
  const [convertType, setConvertType] = useState<'panjang' | 'berat'>('panjang');
  const [convertValue, setConvertValue] = useState<number>(1);
  const [convertFromUnit, setConvertFromUnit] = useState<string>('m');

  // Copy indicator state
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    sounds.playPop();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  const tabs = [
    { id: 'matematika', label: '📐 Matematika & Rumus', icon: Layers },
    { id: 'perkalian', label: '✖️ Perkalian & Trik Jitu', icon: Calculator },
    { id: 'sains', label: '🔬 IPAS & Sains Pintar', icon: Compass },
    { id: 'pancasila', label: '🇮🇩 Pancasila & PKn', icon: ShieldCheck },
    { id: 'indonesia', label: '📖 Bahasa Indonesia', icon: BookOpen },
    { id: 'english', label: '🌍 English & Cambridge', icon: Globe },
    { id: 'coding', label: '💻 Coding & Komputasi', icon: Code },
    { id: 'daerah', label: '🏛️ Muatan Lokal Daerah', icon: Sparkles },
  ] as const;

  // Tangga satuan converter calculations
  const unitScales = useMemo(() => {
    if (convertType === 'panjang') {
      const units = [
        { key: 'km', name: 'Kilometer', factor: 1000 },
        { key: 'hm', name: 'Hektometer', factor: 100 },
        { key: 'dam', name: 'Dekameter', factor: 10 },
        { key: 'm', name: 'Meter', factor: 1 },
        { key: 'dm', name: 'Desimeter', factor: 0.1 },
        { key: 'cm', name: 'Sentimeter', factor: 0.01 },
        { key: 'mm', name: 'Milimeter', factor: 0.001 },
      ];
      const fromObj = units.find((u) => u.key === convertFromUnit) || units[3];
      const baseInMeters = convertValue * fromObj.factor;
      return units.map((u) => ({
        ...u,
        result: baseInMeters / u.factor,
      }));
    } else {
      const units = [
        { key: 'kg', name: 'Kilogram', factor: 1000 },
        { key: 'hg', name: 'Hektogram (Ons)', factor: 100 },
        { key: 'dag', name: 'Dekagram', factor: 10 },
        { key: 'g', name: 'Gram', factor: 1 },
        { key: 'dg', name: 'Desigram', factor: 0.1 },
        { key: 'cg', name: 'Sentigram', factor: 0.01 },
        { key: 'mg', name: 'Miligram', factor: 0.001 },
      ];
      const fromObj = units.find((u) => u.key === convertFromUnit) || units[0];
      const baseInGrams = convertValue * fromObj.factor;
      return units.map((u) => ({
        ...u,
        result: baseInGrams / u.factor,
      }));
    }
  }, [convertType, convertValue, convertFromUnit]);

  return (
    <div className="mx-auto max-w-6xl px-2.5 sm:px-4 py-3 sm:py-8 w-full max-w-full overflow-hidden">
      {/* Top Banner */}
      <div className="mb-4 sm:mb-6 rounded-3xl border-2 border-amber-200 bg-white p-4 sm:p-7 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="rounded-xl bg-amber-500 text-white px-2.5 py-0.5 font-display text-[11px] sm:text-xs font-black shadow-2xs">
                ⭐ Ensiklopedia Saku
              </span>
              <span className="text-xs text-slate-300">·</span>
              <span className="text-[11px] sm:text-xs font-bold text-slate-600">
                Pintaria SD · Multi-Kurikulum (Merdeka, Cambridge, Singapore)
              </span>
            </div>
            <h1 className="font-display text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Pojok Rumus & Catatan Pintar
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Kumpulan rumus lengkap, tangga satuan interaktif, rangkuman sains & organ tubuh, tata bahasa, tenses, kaidah komputasi, dan kamus daerah untuk SD Kelas 1–6.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari rumus, konsep, materi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-600 bg-slate-200 rounded-full w-4 h-4 flex items-center justify-center font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Quick Search Chips */}
        <div className="flex items-center gap-1.5 mt-3 overflow-x-auto pb-1 text-[11px]">
          <span className="text-slate-400 font-medium shrink-0">Pintasan Topik:</span>
          {[
            { label: '📐 Bangun Ruang', tab: 'matematika' },
            { label: '⏱️ J-K-W & Debit', tab: 'matematika' },
            { label: '🇸🇬 Bar Model', tab: 'matematika' },
            { label: '✖️ Trik Jari 9', tab: 'perkalian' },
            { label: '🫀 Organ Tubuh', tab: 'sains' },
            { label: '💧 Siklus Air', tab: 'sains' },
            { label: '⭐ Lambang Sila', tab: 'pancasila' },
            { label: '✍️ Pola SPOK', tab: 'indonesia' },
            { label: '🇬🇧 3 Tenses', tab: 'english' },
            { label: '🧩 Scratch Blok', tab: 'coding' },
          ].map((chip, idx) => (
            <button
              key={idx}
              onClick={() => {
                sounds.playPop();
                setActiveTab(chip.tab as CheatSheetTab);
                setSearchQuery('');
              }}
              className="px-2.5 py-0.5 rounded-full bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 font-semibold shrink-0 cursor-pointer transition-colors"
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-3 pt-3.5 border-t border-slate-100">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sounds.playPop();
                  setActiveTab(tab.id);
                }}
                className={`flex items-center gap-1.5 rounded-2xl px-3 py-2 font-display text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-white shadow-[0_3px_0_#b45309]'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ============================================================== */}
      {/* TAB 1: MATEMATIKA LENGKAP & RUMUS                             */}
      {/* ============================================================== */}
      {activeTab === 'matematika' && (
        <div className="space-y-6">
          {/* Sub-Section A: Tangga Satuan Interaktif */}
          <div className="rounded-3xl border-2 border-sky-200 bg-white p-4 sm:p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-sky-600 block mb-0.5">
                  Alat Bantu Hitung Kilat
                </span>
                <h3 className="font-display text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-sky-600" />
                  <span>Kalkulator Tangga Konversi Satuan</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Setiap turun 1 tangga dikali 10 (×10). Setiap naik 1 tangga dibagi 10 (:10).
                </p>
              </div>

              {/* Toggle Panjang / Berat */}
              <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200 self-start sm:self-auto">
                <button
                  onClick={() => {
                    sounds.playPop();
                    setConvertType('panjang');
                    setConvertFromUnit('m');
                  }}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    convertType === 'panjang'
                      ? 'bg-sky-500 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Panjang (km - mm)
                </button>
                <button
                  onClick={() => {
                    sounds.playPop();
                    setConvertType('berat');
                    setConvertFromUnit('kg');
                  }}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    convertType === 'berat'
                      ? 'bg-sky-500 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Berat/Massa (kg - mg)
                </button>
              </div>
            </div>

            {/* Input Converter */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-sky-50/70 rounded-2xl p-3.5 border border-sky-100 mb-4">
              <div>
                <label className="text-[11px] font-bold text-sky-900 block mb-1">
                  Masukkan Nilai:
                </label>
                <input
                  type="number"
                  value={convertValue}
                  onChange={(e) => setConvertValue(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-1.5 rounded-xl bg-white border border-sky-200 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-sky-900 block mb-1">
                  Dari Satuan Asal:
                </label>
                <select
                  value={convertFromUnit}
                  onChange={(e) => setConvertFromUnit(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl bg-white border border-sky-200 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  {unitScales.map((u) => (
                    <option key={u.key} value={u.key}>
                      {u.key} ({u.name})
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col justify-end">
                <span className="text-[11px] text-sky-700 font-semibold mb-1">Jembatan Keledai:</span>
                <span className="text-xs font-bold text-sky-950 bg-white/80 rounded-xl px-2.5 py-1.5 border border-sky-200">
                  {convertType === 'panjang'
                    ? 'Kucing Hitam Dalam Mobil Desi Centil Mandi-mandi'
                    : 'Kucing Hitam Dalam Gudang Desi Centil Mandi-mandi'}
                </span>
              </div>
            </div>

            {/* Result Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {unitScales.map((item) => (
                <div
                  key={item.key}
                  className={`rounded-2xl p-2.5 text-center border transition-all ${
                    item.key === convertFromUnit
                      ? 'bg-sky-500 text-white border-sky-600 shadow-sm ring-2 ring-sky-300'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-sky-300'
                  }`}
                >
                  <span className="text-[10px] font-bold opacity-80 block">{item.name}</span>
                  <span className="text-xs font-black block mt-0.5">{item.key}</span>
                  <span className="text-sm font-black font-mono block mt-1">
                    {Number(item.result.toFixed(6))}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-Section B: Bangun Datar 2D */}
          <div className="rounded-3xl border-2 border-amber-200 bg-white p-4 sm:p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-600 block">
                  Geometri Bidang Datar (2D)
                </span>
                <h3 className="font-display text-lg sm:text-xl font-black text-slate-900">
                  Rumus Keliling & Luas 8 Bangun Datar
                </h3>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                8 Bangun
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {[
                {
                  nama: 'Persegi',
                  icon: '🔲',
                  sifat: '4 sisi sama panjang, 4 sudut 90°',
                  keliling: 'K = 4 × s',
                  luas: 'L = s × s = s²',
                  contoh: 's = 7 cm ➔ K = 28 cm, L = 49 cm²',
                },
                {
                  nama: 'Persegi Panjang',
                  icon: '▭',
                  sifat: '2 pasang sisi sejajar & sama panjang',
                  keliling: 'K = 2 × (p + l)',
                  luas: 'L = p × l',
                  contoh: 'p = 10, l = 4 ➔ K = 28 cm, L = 40 cm²',
                },
                {
                  nama: 'Segitiga',
                  icon: '🔺',
                  sifat: '3 sisi, jumlah ketiga sudut = 180°',
                  keliling: 'K = a + b + c',
                  luas: 'L = ½ × a × t',
                  contoh: 'a = 8 cm, t = 6 cm ➔ L = 24 cm²',
                },
                {
                  nama: 'Lingkaran',
                  icon: '⚪',
                  sifat: 'r = ½ × d; π = 22/7 atau 3,14',
                  keliling: 'K = 2 × π × r = π × d',
                  luas: 'L = π × r²',
                  contoh: 'r = 7 cm ➔ K = 44 cm, L = 154 cm²',
                },
                {
                  nama: 'Jajar Genjang',
                  icon: '▱',
                  sifat: 'Sisi berhadapan sejajar & sama',
                  keliling: 'K = 2 × (a + b)',
                  luas: 'L = a × t',
                  contoh: 'a = 12 cm, t = 5 cm ➔ L = 60 cm²',
                },
                {
                  nama: 'Trapesium',
                  icon: '⏢',
                  sifat: 'Punya sepasang sisi sejajar (a & b)',
                  keliling: 'K = a + b + c + d',
                  luas: 'L = ½ × (a + b) × t',
                  contoh: 'a = 6, b = 10, t = 4 ➔ L = 32 cm²',
                },
                {
                  nama: 'Belah Ketupat',
                  icon: '🔷',
                  sifat: '4 sisi sama panjang, diagonal berpotongan 90°',
                  keliling: 'K = 4 × s',
                  luas: 'L = ½ × d₁ × d₂',
                  contoh: 'd₁ = 12, d₂ = 16 ➔ L = 96 cm²',
                },
                {
                  nama: 'Layang-layang',
                  icon: '🪁',
                  sifat: '2 pasang sisi bersebelahan sama panjang',
                  keliling: 'K = 2 × (a + b)',
                  luas: 'L = ½ × d₁ × d₂',
                  contoh: 'd₁ = 10, d₂ = 24 ➔ L = 120 cm²',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 p-3.5 hover:border-amber-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xl">{item.icon}</span>
                      <h4 className="font-display text-sm font-extrabold text-slate-900">
                        {item.nama}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-500 mb-2.5 leading-snug">{item.sifat}</p>
                    <div className="space-y-1 bg-white p-2.5 rounded-xl border border-amber-200/70 text-xs font-mono font-bold text-amber-950 mb-2">
                      <div className="text-sky-800">📏 {item.keliling}</div>
                      <div className="text-amber-800">📐 {item.luas}</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-600 bg-amber-50/80 rounded-lg p-1.5 border border-amber-100 block">
                    💡 <strong>Contoh:</strong> {item.contoh}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-Section C: Bangun Ruang 3D */}
          <div className="rounded-3xl border-2 border-emerald-200 bg-white p-4 sm:p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600 block">
                  Geometri Ruang (3D)
                </span>
                <h3 className="font-display text-lg sm:text-xl font-black text-slate-900">
                  Rumus Volume & Luas Permukaan 6 Bangun Ruang
                </h3>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                6 Bangun
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {[
                {
                  nama: 'Kubus',
                  icon: '🧊',
                  ciri: '6 sisi persegi kongruen, 12 rusuk sama, 8 titik sudut',
                  vol: 'V = s × s × s = s³',
                  lp: 'LP = 6 × s²',
                  contoh: 's = 5 cm ➔ V = 125 cm³, LP = 150 cm²',
                },
                {
                  nama: 'Balok',
                  icon: '📦',
                  ciri: '6 sisi (3 pasang persegi panjang), 12 rusuk, 8 sudut',
                  vol: 'V = p × l × t',
                  lp: 'LP = 2 × (p·l + p·t + l·t)',
                  contoh: 'p = 8, l = 5, t = 4 ➔ V = 160 cm³, LP = 184 cm²',
                },
                {
                  nama: 'Tabung (Silinder)',
                  icon: '🛢️',
                  ciri: 'Alas & tutup lingkaran sejajar, 1 selimut lengkung',
                  vol: 'V = π × r² × t',
                  lp: 'LP = 2 × π × r × (r + t)',
                  contoh: 'r = 7 cm, t = 10 cm ➔ V = 1.540 cm³',
                },
                {
                  nama: 'Kerucut',
                  icon: '🍦',
                  ciri: 'Alas lingkaran, 1 titik puncak, selimut lingkaran juring',
                  vol: 'V = ⅓ × π × r² × t',
                  lp: 'LP = π × r × (r + s)',
                  contoh: 'r = 7 cm, t = 12 cm ➔ V = 616 cm³',
                },
                {
                  nama: 'Prisma Segitiga',
                  icon: '⛺',
                  ciri: '2 alas segitiga kongruen & 3 sisi tegak persegi panjang',
                  vol: 'V = Luas Alas × t_prisma',
                  lp: 'LP = (2 × L_alas) + (Keliling_alas × t)',
                  contoh: 'L_alas = 24 cm², t = 10 cm ➔ V = 240 cm³',
                },
                {
                  nama: 'Bola',
                  icon: '⚽',
                  ciri: 'Hanya memiliki 1 sisi bidang lengkung tanpa sudut',
                  vol: 'V = ⁴⁄₃ × π × r³',
                  lp: 'LP = 4 × π × r²',
                  contoh: 'r = 7 cm ➔ LP = 616 cm²',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-emerald-50/20 p-3.5 hover:border-emerald-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xl">{item.icon}</span>
                      <h4 className="font-display text-sm font-extrabold text-slate-900">
                        {item.nama}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-500 mb-2 leading-snug">{item.ciri}</p>
                    <div className="space-y-1 bg-white p-2.5 rounded-xl border border-emerald-200 text-xs font-mono font-bold text-emerald-950 mb-2">
                      <div className="text-emerald-800">💧 Volume: {item.vol}</div>
                      <div className="text-slate-800">📦 Luas Permukaan: {item.lp}</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-900 bg-emerald-100/60 rounded-lg p-1.5 border border-emerald-200 block">
                    💡 {item.contoh}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-Section D: Rumus Kecepatan, Debit, Skala & Singapore Bar Model */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Segitiga Ajaib J-K-W & Debit */}
            <div className="rounded-3xl border-2 border-amber-200 bg-white p-5 shadow-xs">
              <h4 className="font-display text-base font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                <span>⏱️</span>
                <span>Rumus Praktis: Kecepatan, Debit, & Skala Peta</span>
              </h4>

              <div className="space-y-3 text-xs">
                <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200">
                  <strong className="text-amber-900 block mb-1">
                    1. Rumus Kecepatan (J-K-W / Jo-Ko-Wi):
                  </strong>
                  <ul className="list-disc pl-4 space-y-0.5 text-slate-700">
                    <li>
                      <strong>Jarak (J)</strong> = Kecepatan (K) × Waktu (W)
                    </li>
                    <li>
                      <strong>Kecepatan (K)</strong> = Jarak (J) ÷ Waktu (W) (km/jam atau m/detik)
                    </li>
                    <li>
                      <strong>Waktu (W)</strong> = Jarak (J) ÷ Kecepatan (K)
                    </li>
                  </ul>
                </div>

                <div className="bg-sky-50 p-3 rounded-2xl border border-sky-200">
                  <strong className="text-sky-900 block mb-1">
                    2. Rumus Debit Air (V-D-W):
                  </strong>
                  <ul className="list-disc pl-4 space-y-0.5 text-slate-700">
                    <li>
                      <strong>Volume (V)</strong> = Debit (D) × Waktu (W) (Liter atau m³)
                    </li>
                    <li>
                      <strong>Debit (D)</strong> = Volume (V) ÷ Waktu (W) (Liter/menit)
                    </li>
                    <li>
                      <strong>Waktu (W)</strong> = Volume (V) ÷ Debit (D)
                    </li>
                  </ul>
                </div>

                <div className="bg-rose-50 p-3 rounded-2xl border border-rose-200">
                  <strong className="text-rose-900 block mb-1">
                    3. Rumus Skala Peta (S - JP - JS):
                  </strong>
                  <ul className="list-disc pl-4 space-y-0.5 text-slate-700">
                    <li>
                      <strong>Skala (S)</strong> = Jarak Peta (JP) ÷ Jarak Sebenarnya (JS)
                    </li>
                    <li>
                      <strong>Jarak Peta (JP)</strong> = Skala (S) × Jarak Sebenarnya (JS)
                    </li>
                    <li>
                      <strong>Jarak Sebenarnya (JS)</strong> = Jarak Peta (JP) ÷ Skala (S)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Singapore Math Bar Model Method */}
            <div className="rounded-3xl border-2 border-indigo-200 bg-white p-5 shadow-xs">
              <h4 className="font-display text-base font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                <span>🇸🇬</span>
                <span>Singapore Primary: Bar Model Method (Heuristics)</span>
              </h4>

              <div className="space-y-3 text-xs">
                <div className="bg-indigo-50 p-3 rounded-2xl border border-indigo-200">
                  <strong className="text-indigo-950 block mb-1">
                    1. Part-Whole Model (Bagian & Keseluruhan)
                  </strong>
                  <p className="text-slate-600 mb-2">
                    Menggabungkan beberapa unit kotak balok menjadi satu kesatuan utuh.
                  </p>
                  <div className="bg-white p-2 rounded-xl border border-indigo-200 font-mono text-[11px] text-center font-bold text-indigo-900">
                    [ Bagian A: 15 ] + [ Bagian B: 25 ] ➔ Total Keseluruhan = 40
                  </div>
                </div>

                <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-200">
                  <strong className="text-emerald-950 block mb-1">
                    2. Comparison Model (Model Perbandingan Selisih)
                  </strong>
                  <p className="text-slate-600 mb-2">
                    Dua balok sejajar untuk memvisualisasikan siapa yang memiliki lebih banyak / selisih.
                  </p>
                  <div className="bg-white p-2 rounded-xl border border-emerald-200 font-mono text-[11px] space-y-1 font-bold text-emerald-900">
                    <div>Ali &nbsp;: [==== 4 unit ====] = 32 kelereng</div>
                    <div>Budi : [== 2 unit ==] (Selisih 2 unit = 16 kelereng)</div>
                  </div>
                </div>

                <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200">
                  <strong className="text-amber-950 block mb-1">
                    3. Constant Difference (Perbedaan Umur yang Tetap)
                  </strong>
                  <p className="text-slate-600">
                    Selisih umur antara dua orang selalu sama setiap tahun, tidak pernah berubah!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-Section E: Tabel Sakti Pecahan & Bilangan Prima */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Tabel Pecahan - Desimal - Persen */}
            <div className="rounded-3xl border-2 border-purple-200 bg-white p-5 shadow-xs">
              <h4 className="font-display text-base font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                <span>🎯</span>
                <span>Tabel Sakti Konversi: Pecahan ➔ Desimal ➔ Persen</span>
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="bg-purple-100 text-purple-950 font-bold">
                      <th className="p-2 rounded-l-xl">Pecahan Biasa</th>
                      <th className="p-2">Bentuk Desimal</th>
                      <th className="p-2 rounded-r-xl">Bentuk Persen (%)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-100 font-mono">
                    {[
                      { p: '1/2', d: '0,5', pc: '50%' },
                      { p: '1/4', d: '0,25', pc: '25%' },
                      { p: '3/4', d: '0,75', pc: '75%' },
                      { p: '1/5', d: '0,2', pc: '20%' },
                      { p: '2/5', d: '0,4', pc: '40%' },
                      { p: '1/8', d: '0,125', pc: '12,5%' },
                      { p: '3/8', d: '0,375', pc: '37,5%' },
                      { p: '1/10', d: '0,1', pc: '10%' },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-purple-50">
                        <td className="p-2 font-bold text-slate-800">{row.p}</td>
                        <td className="p-2 text-sky-700 font-semibold">{row.d}</td>
                        <td className="p-2 text-emerald-700 font-bold">{row.pc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bilangan Prima 1 - 100 */}
            <div className="rounded-3xl border-2 border-amber-200 bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <span>🔢</span>
                  <span>25 Bilangan Prima Antara 1 Sampai 100</span>
                </h4>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                  Total 25 Angka
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-3">
                Bilangan prima adalah bilangan yang hanya memiliki 2 faktor: angka 1 dan bilangan itu sendiri.
                (Angka 2 adalah satu-satunya bilangan prima genap!).
              </p>

              <div className="flex flex-wrap gap-1.5">
                {[
                  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73,
                  79, 83, 89, 97,
                ].map((prime) => (
                  <span
                    key={prime}
                    className="w-8 h-8 rounded-xl bg-amber-100 text-amber-950 border border-amber-300 font-display font-black text-xs flex items-center justify-center shadow-2xs"
                  >
                    {prime}
                  </span>
                ))}
              </div>

              <div className="mt-4 p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-slate-700">
                <strong>💡 Trik KPK & FPB:</strong>
                <div className="mt-1">
                  • <strong>KPK</strong>: Ambil semua faktor prima pangkat terbesar lalu kalikan.
                </div>
                <div>
                  • <strong>FPB</strong>: Ambil hanya faktor prima yang sama dengan pangkat terkecil.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 2: TABEL PERKALIAN INTERAKTIF & TRIK JITU                 */}
      {/* ============================================================== */}
      {activeTab === 'perkalian' && (
        <div className="space-y-6">
          <div className="rounded-3xl border-2 border-amber-200 bg-white p-4 sm:p-6 shadow-xs w-full max-w-full overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div>
                <h3 className="font-display text-base sm:text-xl font-black text-slate-900">
                  Tabel Perkalian Interaktif 1 × 1 sampai 10 × 10
                </h3>
                <p className="text-xs text-slate-500">
                  Klik sel angka mana saja untuk melihat hasil perkalian dua bilangan!
                </p>
              </div>

              {/* Interactive display */}
              <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 px-5 py-2.5 text-center self-start sm:self-auto shadow-2xs">
                <span className="text-[11px] font-bold text-amber-700 block">Hasil Perkalian:</span>
                <span className="font-display text-2xl font-black text-amber-900">
                  {selectedNum1} × {selectedNum2} = {selectedNum1 * selectedNum2}
                </span>
              </div>
            </div>

            <div className="overflow-x-auto pb-2 w-full max-w-full rounded-2xl border border-amber-100 p-1">
              <table className="min-w-[460px] w-full border-collapse text-center font-display text-xs sm:text-sm">
                <thead>
                  <tr>
                    <th className="rounded-xl bg-amber-400 p-2.5 font-black text-slate-900">×</th>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <th
                        key={num}
                        onClick={() => {
                          sounds.playPop();
                          setSelectedNum2(num);
                        }}
                        className={`cursor-pointer rounded-xl p-2 font-bold transition-colors ${
                          selectedNum2 === num
                            ? 'bg-amber-500 text-white'
                            : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                        }`}
                      >
                        {num}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
                    <tr key={row}>
                      <th
                        onClick={() => {
                          sounds.playPop();
                          setSelectedNum1(row);
                        }}
                        className={`cursor-pointer rounded-xl p-2 font-bold transition-colors ${
                          selectedNum1 === row
                            ? 'bg-amber-500 text-white'
                            : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                        }`}
                      >
                        {row}
                      </th>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((col) => {
                        const isHighlighted = row === selectedNum1 && col === selectedNum2;
                        const isInRowOrCol = row === selectedNum1 || col === selectedNum2;

                        return (
                          <td
                            key={col}
                            onClick={() => {
                              sounds.playPop();
                              setSelectedNum1(row);
                              setSelectedNum2(col);
                            }}
                            className={`cursor-pointer p-2 font-semibold transition-all rounded-lg ${
                              isHighlighted
                                ? 'bg-amber-500 text-white font-extrabold scale-110 shadow-md ring-2 ring-amber-300'
                                : isInRowOrCol
                                ? 'bg-amber-50 text-amber-900 font-bold'
                                : 'text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            {row * col}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3 Trik Perkalian Ajaib */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-3xl border-2 border-emerald-200 bg-white p-5 shadow-xs">
              <span className="text-2xl mb-2 block">🖐️</span>
              <h4 className="font-display text-sm font-extrabold text-slate-900 mb-1">
                Trik Jari Ajaib Perkalian 9
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Buka 10 jarimu. Untuk <strong>9 × 4</strong>, lipat jari ke-4 dari kiri. Jari di sebelah kiri lipatan ada <strong>3</strong> (puluhan), jari di kanan lipatan ada <strong>6</strong> (satuan). Hasilnya = <strong>36</strong>!
              </p>
            </div>

            <div className="rounded-3xl border-2 border-sky-200 bg-white p-5 shadow-xs">
              <span className="text-2xl mb-2 block">⚡</span>
              <h4 className="font-display text-sm font-extrabold text-slate-900 mb-1">
                Trik Kilat Perkalian 11
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Untuk bilangan dua angka seperti <strong>25 × 11</strong>: Pisahkan 2 dan 5, lalu jumlahkan di tengah (2 + 5 = 7). Hasilnya = <strong>275</strong>! Jika melebihi 10, simpan 1 ke angka depan.
              </p>
            </div>

            <div className="rounded-3xl border-2 border-amber-200 bg-white p-5 shadow-xs">
              <span className="text-2xl mb-2 block">🎯</span>
              <h4 className="font-display text-sm font-extrabold text-slate-900 mb-1">
                Trik Kuadrat Akhiran 5
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Untuk <strong>35²</strong>: Ambil angka depan 3, kalikan dengan kakaknya (3 × 4 = 12), lalu tempelkan angka <strong>25</strong> di belakangnya. Hasilnya = <strong>1.225</strong>!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 3: SAINS & IPAS PINTAR                                    */}
      {/* ============================================================== */}
      {activeTab === 'sains' && (
        <div className="space-y-6">
          {/* Sub-Section A: Sistem Organ Tubuh Manusia */}
          <div className="rounded-3xl border-2 border-rose-200 bg-white p-5 sm:p-6 shadow-xs">
            <h3 className="font-display text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span>🫀</span>
              <span>Sistem Organ Tubuh Manusia: Pencernaan, Peredaran Darah, & Pernapasan</span>
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Konsep esensial anatomi dan fisiologi manusia yang selalu menjadi topik utama ujian SD.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-rose-50/70 rounded-2xl p-4 border border-rose-200">
                <strong className="text-rose-950 font-display text-sm block mb-1">
                  1. Saluran Pencernaan
                </strong>
                <p className="text-slate-600 mb-2">
                  Urutan makanan berjalan di dalam tubuh:
                </p>
                <div className="bg-white p-2.5 rounded-xl border border-rose-200 font-mono font-bold text-rose-900 text-[11px] space-y-1">
                  <div>1. Mulut (Gigi & Enzim Ptialin)</div>
                  <div>2. Kerongkongan (Gerak Peristaltik)</div>
                  <div>3. Lambung (Asam HCl & Pepsin)</div>
                  <div>4. Usus Halus (Serap Nutrisi)</div>
                  <div>5. Usus Besar (Serap Air & Pembusukan)</div>
                  <div>6. Anus (Pembuangan Feses)</div>
                </div>
              </div>

              <div className="bg-red-50/70 rounded-2xl p-4 border border-red-200">
                <strong className="text-red-950 font-display text-sm block mb-1">
                  2. Peredaran Darah
                </strong>
                <p className="text-slate-600 mb-2">
                  Jantung memompa darah ke seluruh tubuh:
                </p>
                <div className="bg-white p-2.5 rounded-xl border border-red-200 text-[11px] space-y-2">
                  <div>
                    <strong className="text-red-800">Darah Kecil:</strong>
                    <div className="font-mono text-[10px] text-slate-700">
                      Bilik Kanan ➔ Paru-paru ➔ Serambi Kiri
                    </div>
                  </div>
                  <div>
                    <strong className="text-red-800">Darah Besar:</strong>
                    <div className="font-mono text-[10px] text-slate-700">
                      Bilik Kiri ➔ Seluruh Tubuh ➔ Serambi Kanan
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500 italic">
                    Arteri = Pembuluh nadi (keluar jantung), Vena = Pembuluh balik (menuju jantung).
                  </p>
                </div>
              </div>

              <div className="bg-sky-50/70 rounded-2xl p-4 border border-sky-200">
                <strong className="text-sky-950 font-display text-sm block mb-1">
                  3. Saluran Pernapasan
                </strong>
                <p className="text-slate-600 mb-2">
                  Pertukaran oksigen (O₂) dan karbon dioksida (CO₂):
                </p>
                <div className="bg-white p-2.5 rounded-xl border border-sky-200 font-mono font-bold text-sky-900 text-[11px] space-y-1">
                  <div>Hidung (Rambut & Lendir penyaring)</div>
                  <div>➔ Faring & Laring (Pita suara)</div>
                  <div>➔ Trakea (Batang tenggorokan ber-silia)</div>
                  <div>➔ Bronkus (Cabang kiri & kanan)</div>
                  <div>➔ Bronkiolus</div>
                  <div>➔ Alveolus (Tempat Difusi Gas O₂ & CO₂)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-Section B: Siklus Air & Fotosintesis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Siklus Air */}
            <div className="rounded-3xl border-2 border-sky-200 bg-white p-5 shadow-xs">
              <h4 className="font-display text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                <span>💧</span>
                <span>Siklus Air (Daur Hidrologi)</span>
              </h4>
              <p className="text-xs text-slate-500 mb-3">
                Jumlah air bumi tetap seimbang karena bersirkulasi secara alami:
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-sky-50 p-2.5 rounded-xl border border-sky-100">
                  <strong className="text-sky-900 block mb-0.5">1. Evaporasi</strong>
                  <p className="text-sky-800 text-[11px]">Air laut/danau menguap karena panas matahari.</p>
                </div>
                <div className="bg-indigo-50 p-2.5 rounded-xl border border-indigo-100">
                  <strong className="text-indigo-900 block mb-0.5">2. Kondensasi</strong>
                  <p className="text-indigo-800 text-[11px]">Uap mendingin dan membentuk gumpalan awan.</p>
                </div>
                <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-100">
                  <strong className="text-blue-900 block mb-0.5">3. Presipitasi</strong>
                  <p className="text-blue-800 text-[11px]">Awan jenuh turun menjadi tetesan hujan.</p>
                </div>
                <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-100">
                  <strong className="text-emerald-900 block mb-0.5">4. Infiltrasi</strong>
                  <p className="text-emerald-800 text-[11px]">Air meresap ke tanah menjadi mata air.</p>
                </div>
              </div>
            </div>

            {/* Fotosintesis */}
            <div className="rounded-3xl border-2 border-emerald-200 bg-white p-5 shadow-xs">
              <h4 className="font-display text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                <span>🌿</span>
                <span>Dapur Tanaman: Proses Fotosintesis</span>
              </h4>
              <p className="text-xs text-slate-500 mb-3">
                Tumbuhan hijau membuat makanannya sendiri di klorofil daun:
              </p>

              <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-2xl text-center font-display text-xs font-bold text-emerald-950 mb-2">
                Air (H₂O) + Karbon Dioksida (CO₂) + Sinar Matahari + Klorofil
                <div className="my-1 text-emerald-600 font-black">⬇ (Fotosintesis) ⬇</div>
                Glukosa (Makanan Tumbuhan) + Gas Oksigen (O₂) Segar!
              </div>

              <div className="text-[11px] text-slate-600 space-y-0.5">
                <div>• <strong>Stomata</strong>: Mulut daun untuk pertukaran gas.</div>
                <div>• <strong>Klorofil</strong>: Zat hijau daun penyerap energi sinar matahari.</div>
              </div>
            </div>
          </div>

          {/* Sub-Section C: Tata Surya & 8 Planet */}
          <div className="rounded-3xl border-2 border-indigo-200 bg-white p-5 shadow-xs">
            <h4 className="font-display text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
              <span>🪐</span>
              <span>Tata Surya: Urutan 8 Planet dari Matahari & Gerakannya</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-center text-xs mt-3">
              {[
                { name: 'Merkurius', tag: 'Terkecil & Terdekat', icon: '🌑' },
                { name: 'Venus', tag: 'Bintang Kejora / Terpanas', icon: '🌕' },
                { name: 'Bumi', tag: 'Planet Kehidupan', icon: '🌍' },
                { name: 'Mars', tag: 'Planet Merah', icon: '🔴' },
                { name: 'Yupiter', tag: 'Planet Terbesar', icon: '🟠' },
                { name: 'Saturnus', tag: 'Cincin Indah', icon: '🪐' },
                { name: 'Uranus', tag: 'Planet Es Terdingin', icon: '❄️' },
                { name: 'Neptunus', tag: 'Terluar & Berangin', icon: '🔵' },
              ].map((p, i) => (
                <div key={i} className="bg-indigo-50/60 p-2.5 rounded-2xl border border-indigo-100">
                  <span className="text-xl block mb-1">{p.icon}</span>
                  <strong className="text-indigo-950 block text-[11px]">{i + 1}. {p.name}</strong>
                  <span className="text-[10px] text-slate-500 leading-tight block mt-0.5">{p.tag}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs pt-3 border-t border-slate-100">
              <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200">
                <strong className="text-amber-900 block mb-0.5">Rotasi Bumi (Berputar pada porosnya = 24 jam):</strong>
                <span className="text-slate-600">Menyebabkan pergantian siang dan malam, gerak semu harian matahari, dan perbedaan zona waktu (WIB, WITA, WIT).</span>
              </div>
              <div className="bg-purple-50 p-2.5 rounded-xl border border-purple-200">
                <strong className="text-purple-900 block mb-0.5">Revolusi Bumi (Mengelilingi matahari = 365¼ hari):</strong>
                <span className="text-slate-600">Menyebabkan pergantian musim di belahan bumi utara/selatan, gerak semu tahunan matahari, dan perubahan lamanya siang/malam.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 4: PENDIDIKAN PANCASILA & PKN                             */}
      {/* ============================================================== */}
      {activeTab === 'pancasila' && (
        <div className="space-y-6">
          <div className="space-y-3.5">
            {[
              {
                sila: 1,
                bunyi: 'Ketuhanan Yang Maha Esa',
                simbol: '⭐ Bintang Emas',
                warna: 'Bintang lima sudut emas berlatar perisai hitam',
                makna: 'Cahaya kerohanian yang dipancarkan Tuhan Yang Maha Esa kepada setiap insan manusia.',
                contoh: 'Berdoa sebelum belajar/makan, taat beribadah, toleransi tidak mengganggu teman beda agama.',
              },
              {
                sila: 2,
                bunyi: 'Kemanusiaan yang Adil dan Beradab',
                simbol: '⛓️ Rantai Emas',
                warna: 'Mata rantai lingkaran (perempuan) dan persegi (laki-laki) saling bertaut',
                makna: 'Persatuan seluruh rakyat Indonesia tanpa membedakan suku, derajat, dan gender.',
                contoh: 'Menolong korban bencana, bertutur kata sopan santun, tidak melakukan perundungan (bullying).',
              },
              {
                sila: 3,
                bunyi: 'Persatuan Indonesia',
                simbol: '🌳 Pohon Beringin',
                warna: 'Pohon berdaun lebat dan berakar gantung kuat berlatar putih',
                makna: 'Tempat berteduh dan bernaung yang aman dan rukun bagi seluruh suku bangsa Indonesia.',
                contoh: 'Cinta produk buatan Indonesia, bangga berbahasa Indonesia, gotong royong membersihkan kelas.',
              },
              {
                sila: 4,
                bunyi: 'Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan',
                simbol: '🐂 Kepala Banteng',
                warna: 'Kepala banteng hitam berlatar merah',
                makna: 'Banteng adalah hewan sosial yang suka berkumpul, melambangkan musyawarah mufakat.',
                contoh: 'Pemilihan ketua kelas secara voting/musyawarah, menghargai pendapat orang lain, lapang dada.',
              },
              {
                sila: 5,
                bunyi: 'Keadilan Sosial bagi Seluruh Rakyat Indonesia',
                simbol: '🌾 Padi dan Kapas',
                warna: 'Padi kuning emas (pangan) dan kapas hijau-putih (sandang)',
                makna: 'Kebutuhan pokok pangan dan sandang tercukupi merata demi kemakmuran bersama.',
                contoh: 'Gemar menabung, tidak bergaya hidup boros, menghargai karya teman, bersikap adil.',
              },
            ].map((item) => (
              <div
                key={item.sila}
                className="rounded-3xl border-2 border-amber-200 bg-white p-4 sm:p-5 shadow-xs"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="inline-block rounded-xl bg-amber-100 px-3 py-0.5 font-display text-xs font-black text-amber-900 mb-1">
                      Sila Ke-{item.sila}
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
                      "{item.bunyi}"
                    </h3>
                  </div>
                  <span className="font-display text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-2xl whitespace-nowrap">
                    {item.simbol}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mt-2.5 pt-2.5 border-t border-slate-100">
                  <div className="bg-amber-50/50 rounded-2xl p-3 border border-amber-200/60">
                    <strong className="text-amber-900 block mb-1">📖 Makna & Arti Lambang:</strong>
                    <p className="text-slate-600 leading-relaxed">{item.makna}</p>
                  </div>
                  <div className="bg-emerald-50/50 rounded-2xl p-3 border border-emerald-200/60">
                    <strong className="text-emerald-900 block mb-1">🌟 Pengamalan Sehari-hari:</strong>
                    <p className="text-slate-600 leading-relaxed">{item.contoh}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trias Politika & Hak/Kewajiban */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-3xl border-2 border-slate-200 bg-white p-5 shadow-xs">
              <h4 className="font-display text-sm font-black text-slate-900 mb-2">
                🏛️ Trias Politika (Pembagian Kekuasaan Negara)
              </h4>
              <div className="space-y-2 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <strong className="text-slate-900">1. Eksekutif (Menjalankan UU)</strong>: Presiden, Wakil Presiden, dan Menteri.
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <strong className="text-slate-900">2. Legislatif (Membuat UU)</strong>: DPR, DPD, dan MPR.
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <strong className="text-slate-900">3. Yudikatif (Mengadili Pelanggar UU)</strong>: Mahkamah Agung (MA), Mahkamah Konstitusi (MK), dan Komisi Yudisial (KY).
                </div>
              </div>
            </div>

            <div className="rounded-3xl border-2 border-slate-200 bg-white p-5 shadow-xs">
              <h4 className="font-display text-sm font-black text-slate-900 mb-2">
                ⚖️ Hak vs Kewajiban Anak
              </h4>
              <div className="space-y-2 text-xs">
                <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                  <strong className="text-emerald-900 block">Kewajiban Harus Didahulukan:</strong>
                  <span className="text-slate-600">Belajar dengan tekun, mematuhi tata tertib sekolah, menghormati guru dan orang tua, menjaga kebersihan kelas.</span>
                </div>
                <div className="bg-sky-50 p-2.5 rounded-xl border border-sky-200">
                  <strong className="text-sky-900 block">Hak yang Diperoleh Setelahnya:</strong>
                  <span className="text-slate-600">Mendapatkan kasih sayang, memperoleh pengajaran bermutu, menggunakan fasilitas sekolah, merasa aman dari bahaya.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 5: BAHASA INDONESIA & LITERASI                            */}
      {/* ============================================================== */}
      {activeTab === 'indonesia' && (
        <div className="space-y-6">
          {/* Pola Kalimat SPOK */}
          <div className="rounded-3xl border-2 border-orange-200 bg-white p-5 sm:p-6 shadow-xs">
            <h3 className="font-display text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span>✍️</span>
              <span>Pola Kalimat Dasar: S - P - O - K</span>
            </h3>
            <p className="text-xs text-slate-500 mb-3">
              Setiap kalimat efektif minimal memiliki unsur <strong>Subjek (S)</strong> dan <strong>Predikat (P)</strong>.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs mb-4">
              <div className="bg-orange-50 p-3 rounded-2xl border border-orange-200">
                <strong className="text-orange-950 font-display block mb-0.5">S (Subjek)</strong>
                <span className="text-slate-600 text-[11px]">Pelaku / yang melakukan kegiatan (orang, hewan, benda).</span>
              </div>
              <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-200">
                <strong className="text-emerald-950 font-display block mb-0.5">P (Predikat)</strong>
                <span className="text-slate-600 text-[11px]">Tindakan / kata kerja yang dilakukan subjek (membaca, memasak).</span>
              </div>
              <div className="bg-sky-50 p-3 rounded-2xl border border-sky-200">
                <strong className="text-sky-950 font-display block mb-0.5">O (Objek)</strong>
                <span className="text-slate-600 text-[11px]">Benda yang dikenai tindakan oleh subjek (buku, sepeda, nasi).</span>
              </div>
              <div className="bg-purple-50 p-3 rounded-2xl border border-purple-200">
                <strong className="text-purple-950 font-display block mb-0.5">K (Keterangan)</strong>
                <span className="text-slate-600 text-[11px]">Penjelas waktu atau tempat (di perpustakaan, kemarin sore).</span>
              </div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs">
              <span className="font-bold text-slate-900 block mb-1">🔍 Contoh Bedah Kalimat SPOK:</span>
              <div className="font-mono text-xs text-slate-700 font-bold">
                "Ibu [S] memasak [P] sayur bayam [O] di dapur tadi pagi [K-tempat & waktu]."
              </div>
            </div>
          </div>

          {/* Unsur Intrinsik Cerita & 4 Jenis Paragraf */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-3xl border-2 border-amber-200 bg-white p-5 shadow-xs">
              <h4 className="font-display text-base font-extrabold text-slate-900 mb-2">
                📚 6 Unsur Intrinsik Cerita & Fabel
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="bg-amber-50/60 p-2 rounded-xl">
                  <strong>1. Tema</strong>: Gagasan utama yang mendasari isi seluruh cerita.
                </li>
                <li className="bg-amber-50/60 p-2 rounded-xl">
                  <strong>2. Tokoh & Watak</strong>: Pelaku cerita (Protagonis = baik, Antagonis = jahat/penentang, Tritagonis = penengah).
                </li>
                <li className="bg-amber-50/60 p-2 rounded-xl">
                  <strong>3. Latar (Setting)</strong>: Tempat, waktu, dan suasana kejadian berlangsung.
                </li>
                <li className="bg-amber-50/60 p-2 rounded-xl">
                  <strong>4. Alur (Plot)</strong>: Rangkaian peristiwa (Maju, Mundur, atau Campuran).
                </li>
                <li className="bg-amber-50/60 p-2 rounded-xl">
                  <strong>5. Sudut Pandang</strong>: Posisi pengarang (Orang pertama "Aku" atau orang ketiga "Dia/Mereka").
                </li>
                <li className="bg-amber-50/60 p-2 rounded-xl">
                  <strong>6. Amanat</strong>: Pesan moral berharga yang ingin disampaikan kepada pembaca.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border-2 border-emerald-200 bg-white p-5 shadow-xs">
              <h4 className="font-display text-base font-extrabold text-slate-900 mb-2">
                📑 Jenis Paragraf Berdasarkan Letak Ide Pokok
              </h4>
              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-200">
                  <strong className="text-emerald-950 font-bold block mb-0.5">
                    1. Paragraf Deduktif (Awal)
                  </strong>
                  Kalimat utama / ide pokok terletak di <strong>awal paragraf</strong>, kemudian diikuti kalimat-kalimat penjelas.
                </div>
                <div className="bg-sky-50 p-3 rounded-2xl border border-sky-200">
                  <strong className="text-sky-950 font-bold block mb-0.5">
                    2. Paragraf Induktif (Akhir)
                  </strong>
                  Diawali dengan penjelasan khusus dan diakhiri dengan kesimpulan / ide pokok di <strong>akhir paragraf</strong> (biasanya ada kata: <em>oleh karena itu, dengan demikian</em>).
                </div>
                <div className="bg-purple-50 p-3 rounded-2xl border border-purple-200">
                  <strong className="text-purple-950 font-bold block mb-0.5">
                    3. Paragraf Campuran (Awal & Akhir)
                  </strong>
                  Gagasan utama diletakkan di awal, lalu dipertegas kembali di kalimat terakhir sebagai penekanan.
                </div>
              </div>
            </div>
          </div>

          {/* 10 Peribahasa Populer SD */}
          <div className="rounded-3xl border-2 border-slate-200 bg-white p-5 shadow-xs">
            <h4 className="font-display text-base font-extrabold text-slate-900 mb-3">
              💡 10 Peribahasa Indonesia Populer & Artinya
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {[
                { p: 'Tong kosong nyaring bunyinya', a: 'Orang yang banyak bicara biasanya ilmunya sedikit.' },
                { p: 'Ada udang di balik batu', a: 'Ada maksud tersembunyi di balik suatu perbuatan.' },
                { p: 'Besar pasak daripada tiang', a: 'Pengeluaran lebih besar daripada pendapatan.' },
                { p: 'Air beriak tanda tak dalam', a: 'Orang yang sombong biasanya tidak berpengetahuan tinggi.' },
                { p: 'Rajin pangkal pandai, hemat pangkal kaya', a: 'Kunci kesuksesan adalah rajin belajar dan cermat mengatur uang.' },
                { p: 'Di mana bumi dipijak, di sana langit dijunjung', a: 'Harus menghormati adat istiadat tempat kita berada.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block font-semibold mb-0.5">"{item.p}"</strong>
                  <span className="text-slate-600 text-[11px]">{item.a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 6: ENGLISH & CAMBRIDGE GRAMMAR                            */}
      {/* ============================================================== */}
      {activeTab === 'english' && (
        <div className="space-y-6">
          {/* Tenses Banner */}
          <div className="rounded-3xl border-2 border-emerald-200 bg-white p-5 sm:p-6 shadow-xs">
            <h3 className="font-display text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span>🇬🇧</span>
              <span>The 3 Essential Tenses for Primary Learners</span>
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Pedoman tenses utama bahasa Inggris untuk Cambridge & Singapore Primary:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200">
                <strong className="text-emerald-950 font-display text-sm block mb-1">
                  1. Simple Present Tense
                </strong>
                <span className="text-[11px] text-slate-500 block mb-2">Kebiasaan & Fakta Umum (Always, Everyday)</span>
                <div className="bg-white p-2.5 rounded-xl border border-emerald-200 font-mono text-[11px] space-y-1 font-bold text-emerald-900">
                  <div>Subject + V1 (s/es)</div>
                  <div className="text-[10px] text-slate-600 font-normal mt-1">
                    • She <strong>reads</strong> a book every day.<br />
                    • They <strong>play</strong> football on Sundays.
                  </div>
                </div>
              </div>

              <div className="bg-sky-50 p-4 rounded-2xl border border-sky-200">
                <strong className="text-sky-950 font-display text-sm block mb-1">
                  2. Present Continuous
                </strong>
                <span className="text-[11px] text-slate-500 block mb-2">Sedang Berlangsung Sekarang (Now, At this moment)</span>
                <div className="bg-white p-2.5 rounded-xl border border-sky-200 font-mono text-[11px] space-y-1 font-bold text-sky-900">
                  <div>am / is / are + V-ing</div>
                  <div className="text-[10px] text-slate-600 font-normal mt-1">
                    • I <strong>am writing</strong> an essay.<br />
                    • He <strong>is sleeping</strong> right now.
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200">
                <strong className="text-amber-950 font-display text-sm block mb-1">
                  3. Simple Past Tense
                </strong>
                <span className="text-[11px] text-slate-500 block mb-2">Sudah Terjadi di Masa Lalu (Yesterday, Last week)</span>
                <div className="bg-white p-2.5 rounded-xl border border-amber-200 font-mono text-[11px] space-y-1 font-bold text-amber-900">
                  <div>Subject + V2 (Past form)</div>
                  <div className="text-[10px] text-slate-600 font-normal mt-1">
                    • We <strong>visited</strong> grandmother yesterday.<br />
                    • He <strong>bought</strong> a toy yesterday.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Irregular Verbs List */}
          <div className="rounded-3xl border-2 border-indigo-200 bg-white p-5 shadow-xs">
            <h4 className="font-display text-base font-extrabold text-slate-900 mb-2">
              📝 16 Kata Kerja Tidak Beraturan (Irregular Verbs) yang Paling Sering Diuji
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-indigo-100 text-indigo-950 font-bold">
                    <th className="p-2 rounded-l-xl">Verb 1 (Present)</th>
                    <th className="p-2">Verb 2 (Past Simple)</th>
                    <th className="p-2">Verb 3 (Past Participle)</th>
                    <th className="p-2 rounded-r-xl">Arti Bahasa Indonesia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-indigo-100 font-mono">
                  {[
                    { v1: 'go', v2: 'went', v3: 'gone', m: 'pergi' },
                    { v1: 'eat', v2: 'ate', v3: 'eaten', m: 'makan' },
                    { v1: 'drink', v2: 'drank', v3: 'drunk', m: 'minum' },
                    { v1: 'see', v2: 'saw', v3: 'seen', m: 'melihat' },
                    { v1: 'buy', v2: 'bought', v3: 'bought', m: 'membeli' },
                    { v1: 'write', v2: 'wrote', v3: 'written', m: 'menulis' },
                    { v1: 'give', v2: 'gave', v3: 'given', m: 'memberi' },
                    { v1: 'take', v2: 'took', v3: 'taken', m: 'mengambil' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-indigo-50">
                      <td className="p-2 font-bold text-indigo-900">{row.v1}</td>
                      <td className="p-2 text-emerald-800 font-bold">{row.v2}</td>
                      <td className="p-2 text-purple-800">{row.v3}</td>
                      <td className="p-2 text-slate-600 font-sans italic">{row.m}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 7: CODING & KOMPUTASI                                      */}
      {/* ============================================================== */}
      {activeTab === 'coding' && (
        <div className="space-y-6">
          {/* 4 Pilar CT */}
          <div className="rounded-3xl border-2 border-blue-200 bg-white p-5 sm:p-6 shadow-xs">
            <h3 className="font-display text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span>🧠</span>
              <span>4 Pilar Berpikir Komputasional (Computational Thinking)</span>
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Cara berpikir pemecahan masalah seperti seorang ilmuwan komputer:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="bg-blue-50 p-3.5 rounded-2xl border border-blue-200">
                <strong className="text-blue-950 font-display text-sm block mb-1">
                  1. Dekomposisi
                </strong>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Memecah masalah yang besar dan rumit menjadi bagian-bagian kecil yang lebih mudah dikelola.
                </p>
              </div>
              <div className="bg-purple-50 p-3.5 rounded-2xl border border-purple-200">
                <strong className="text-purple-950 font-display text-sm block mb-1">
                  2. Pengenalan Pola
                </strong>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Melihat kesamaan atau tren yang berulang dari masalah-masalah sebelumnya.
                </p>
              </div>
              <div className="bg-emerald-50 p-3.5 rounded-2xl border border-emerald-200">
                <strong className="text-emerald-950 font-display text-sm block mb-1">
                  3. Abstraksi
                </strong>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Fokus hanya pada informasi penting dan mengabaikan detail yang tidak relevan.
                </p>
              </div>
              <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200">
                <strong className="text-amber-950 font-display text-sm block mb-1">
                  4. Algoritma
                </strong>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Menyusun langkah-langkah terurut yang logis untuk menyelesaikan masalah dari awal hingga selesai.
                </p>
              </div>
            </div>
          </div>

          {/* Scratch Blocks & Cyber Wellness */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-3xl border-2 border-purple-200 bg-white p-5 shadow-xs">
              <h4 className="font-display text-base font-extrabold text-slate-900 mb-2">
                🧩 Kategori Blok Dasar Scratch 3.0
              </h4>
              <div className="space-y-2 text-xs">
                <div className="bg-blue-100/70 p-2.5 rounded-xl border border-blue-200">
                  <strong className="text-blue-900 block">Motion (Biru)</strong>: Menggerakkan sprite, memutar derajat, meluncur ke koordinat x & y.
                </div>
                <div className="bg-purple-100/70 p-2.5 rounded-xl border border-purple-200">
                  <strong className="text-purple-900 block">Looks (Ungu)</strong>: Mengubah kostum, balon dialog "Say Hello!", efek ukuran.
                </div>
                <div className="bg-amber-100/70 p-2.5 rounded-xl border border-amber-200">
                  <strong className="text-amber-900 block">Events (Kuning)</strong>: Pemicu jalannya program ("When Green Flag Clicked").
                </div>
                <div className="bg-orange-100/70 p-2.5 rounded-xl border border-orange-200">
                  <strong className="text-orange-900 block">Control (Oranye)</strong>: Perulangan (repeat 10, forever) dan percabangan (if..then).
                </div>
              </div>
            </div>

            <div className="rounded-3xl border-2 border-emerald-200 bg-white p-5 shadow-xs">
              <h4 className="font-display text-base font-extrabold text-slate-900 mb-2">
                🛡️ 5 Aturan Emas Keselamatan Siber Anak
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="bg-emerald-50 p-2 rounded-xl border border-emerald-200">
                  <strong>1. Rahasiakan Kata Sandi</strong>: Jangan beritahu teman atau siapapun kecuali orang tua.
                </li>
                <li className="bg-emerald-50 p-2 rounded-xl border border-emerald-200">
                  <strong>2. Lindungi Data Pribadi</strong>: Jangan membagikan alamat rumah, nomor HP, atau nama sekolah secara publik.
                </li>
                <li className="bg-emerald-50 p-2 rounded-xl border border-emerald-200">
                  <strong>3. Laporkan Hal Aneh</strong>: Segera cerita ke guru/orang tua jika melihat pesan mencurigakan atau kasar.
                </li>
                <li className="bg-emerald-50 p-2 rounded-xl border border-emerald-200">
                  <strong>4. Etika Sopan Santun (Netiquette)</strong>: Komentar baik dan tidak menyakiti perasaan sesama teman online.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 8: MUATAN LOKAL DAERAH                                    */}
      {/* ============================================================== */}
      {activeTab === 'daerah' && (
        <div className="space-y-6">
          <div className="rounded-3xl border-2 border-amber-200 bg-white p-5 sm:p-6 shadow-xs">
            <h3 className="font-display text-lg font-bold text-slate-900 mb-1">
              🏛️ Kamus Saku Bahasa Daerah (Sunda, Jawa, Bali, Madura)
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Ringkasan muatan lokal SD untuk mengenal ungkapan santun, hitungan angka, dan anggota tubuh dalam ragam bahasa daerah di Nusantara.
            </p>

            {/* Sapaan Santun */}
            <div className="mb-6">
              <h4 className="font-display text-sm font-extrabold text-amber-900 mb-2">
                1. Ungkapan Sapaan & Kesantunan Harian
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left font-display text-xs">
                  <thead>
                    <tr className="bg-amber-100 text-amber-950 font-bold">
                      <th className="p-2.5 rounded-l-xl">Bahasa Indonesia</th>
                      <th className="p-2.5">Basa Sunda (Jabar)</th>
                      <th className="p-2.5">Basa Jawa (Krama)</th>
                      <th className="p-2.5">Basa Bali</th>
                      <th className="p-2.5 rounded-r-xl">Basa Madura</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-100">
                    <tr className="hover:bg-amber-50/50">
                      <td className="p-2.5 font-bold text-slate-900">Terima kasih</td>
                      <td className="p-2.5 text-amber-900">Hatur nuhun</td>
                      <td className="p-2.5 text-emerald-900">Matur nuwun</td>
                      <td className="p-2.5 text-purple-900">Matur suksma</td>
                      <td className="p-2.5 text-blue-900">Mator sakalangkong</td>
                    </tr>
                    <tr className="hover:bg-amber-50/50">
                      <td className="p-2.5 font-bold text-slate-900">Permisi / Maaf</td>
                      <td className="p-2.5 text-amber-900">Punten / Hapunten</td>
                      <td className="p-2.5 text-emerald-900">Nuwun sewu / Nyuwun pangapunten</td>
                      <td className="p-2.5 text-purple-900">Nunas lugra / Ampura</td>
                      <td className="p-2.5 text-blue-900">Nyo'on sapora</td>
                    </tr>
                    <tr className="hover:bg-amber-50/50">
                      <td className="p-2.5 font-bold text-slate-900">Selamat pagi</td>
                      <td className="p-2.5 text-amber-900">Wilujeng enjing</td>
                      <td className="p-2.5 text-emerald-900">Sugeng enjang</td>
                      <td className="p-2.5 text-purple-900">Rahajeng semeng</td>
                      <td className="p-2.5 text-blue-900">Salamet ghu-lagghu</td>
                    </tr>
                    <tr className="hover:bg-amber-50/50">
                      <td className="p-2.5 font-bold text-slate-900">Silakan / Mari</td>
                      <td className="p-2.5 text-amber-900">Mangga</td>
                      <td className="p-2.5 text-emerald-900">Mangga / Sumangga</td>
                      <td className="p-2.5 text-purple-900">Durusang</td>
                      <td className="p-2.5 text-blue-900">Ngereng</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Angka 1-10 */}
            <div className="mb-6">
              <h4 className="font-display text-sm font-extrabold text-amber-900 mb-2">
                2. Angka & Wilangan Dasar (1 - 10)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left font-display text-xs">
                  <thead>
                    <tr className="bg-amber-100 text-amber-950 font-bold">
                      <th className="p-2.5 rounded-l-xl">Angka</th>
                      <th className="p-2.5">Basa Sunda</th>
                      <th className="p-2.5">Basa Jawa (Ngoko / Krama)</th>
                      <th className="p-2.5">Basa Bali</th>
                      <th className="p-2.5 rounded-r-xl">Basa Madura</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-100">
                    {[
                      { n: '1', s: 'Hiji', j: 'Siji / Setunggal', b: 'Sa / Besik', m: 'Settong' },
                      { n: '2', s: 'Dua', j: 'Loro / Kalih', b: 'Dua', m: 'Dhuwa\'' },
                      { n: '3', s: 'Tilu', j: 'Telu / Tiga', b: 'Telu', m: 'Tello\'' },
                      { n: '4', s: 'Opat', j: 'Papat / Sekawan', b: 'Papat', m: 'Eppa\'' },
                      { n: '5', s: 'Lima', j: 'Lima / Gangsal', b: 'Lima', m: 'Lema\'' },
                      { n: '6', s: 'Genep', j: 'Nem / Enem', b: 'Nem', m: 'Ennem' },
                      { n: '7', s: 'Tujuh', j: 'Pitu / Pitu', b: 'Pitu', m: 'Petto\'' },
                      { n: '8', s: 'Dalapan', j: 'Wolu / Wolu', b: 'Kutus', m: 'Bhellu\'' },
                      { n: '9', s: 'Salapan', j: 'Sanga / Sanga', b: 'Sia', m: 'Sanga\'' },
                      { n: '10', s: 'Sapuluh', j: 'Sepuluh / Sedasa', b: 'Dasa', m: 'Sapolo' },
                    ].map((row) => (
                      <tr key={row.n} className="hover:bg-amber-50/50">
                        <td className="p-2 font-bold text-slate-900">{row.n}</td>
                        <td className="p-2 text-amber-900">{row.s}</td>
                        <td className="p-2 text-emerald-900">{row.j}</td>
                        <td className="p-2 text-purple-900">{row.b}</td>
                        <td className="p-2 text-blue-900">{row.m}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Anggota Tubuh */}
            <div>
              <h4 className="font-display text-sm font-extrabold text-amber-900 mb-2">
                3. Anggota Tubuh / Perangane Awak
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3">
                  <span className="font-bold text-amber-950 block mb-1">Mata (Melihat)</span>
                  <p className="text-amber-900 text-[11px]">Sunda: Soca / Panon</p>
                  <p className="text-emerald-900 text-[11px]">Jawa: Mripat / Soca</p>
                  <p className="text-purple-900 text-[11px]">Bali: Penyingakan / Mata</p>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3">
                  <span className="font-bold text-amber-950 block mb-1">Telinga (Mendengar)</span>
                  <p className="text-amber-900 text-[11px]">Sunda: Cepil / Ceuli</p>
                  <p className="text-emerald-900 text-[11px]">Jawa: Kuping / Talingan</p>
                  <p className="text-purple-900 text-[11px]">Bali: Karna / Kuping</p>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3">
                  <span className="font-bold text-amber-950 block mb-1">Hidung (Membau)</span>
                  <p className="text-amber-900 text-[11px]">Sunda: Pangambung / Irung</p>
                  <p className="text-emerald-900 text-[11px]">Jawa: Irung / Grana</p>
                  <p className="text-purple-900 text-[11px]">Bali: Cunguh / Irung</p>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3">
                  <span className="font-bold text-amber-950 block mb-1">Tangan (Memegang)</span>
                  <p className="text-amber-900 text-[11px]">Sunda: Pandangan / Leungeun</p>
                  <p className="text-emerald-900 text-[11px]">Jawa: Tangan / Asta</p>
                  <p className="text-purple-900 text-[11px]">Bali: Tangan / Lima</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
