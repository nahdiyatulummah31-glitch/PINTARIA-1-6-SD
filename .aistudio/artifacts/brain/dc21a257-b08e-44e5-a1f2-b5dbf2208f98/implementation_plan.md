# Sistem Multi-Kurikulum: Kurikulum Merdeka, Cambridge Primary & Singapore Primary

Rencana ini merombak dan memperluas arsitektur Pintaria SD menjadi platform pembelajaran multi-kurikulum lengkap. Pengguna (siswa, guru, dan orang tua) dapat beralih secara dinamis antara **Kurikulum Merdeka (Nasional)**, **Cambridge Primary**, dan **Singapore Primary** untuk setiap jenjang kelas (Grade/Stage/Primary 1 sampai 6), lengkap dengan minimal 50 soal latihan per mata pelajaran, kuis interaktif, bank soal terkurasi, dan lembar kerja cetak (worksheet).

---

## User Review & Critical Decisions

> [!IMPORTANT]
> **Keputusan Arsitektur Multi-Kurikulum**:
> 1. **Tiga Pilihan Kurikulum Utama**:
>    - **Kurikulum Merdeka (Nasional)**: Bahasa Indonesia pengantar; mapel IPAS, Pendidikan Pancasila, Matematika, Bahasa Indonesia, PJOK, Seni Budaya, Koding, serta Bahasa Sunda & Bahasa Jawa.
>    - **Cambridge Primary (Stage 1-6)**: Pengantar Bahasa Inggris; mapel *Cambridge English*, *Cambridge Mathematics*, *Cambridge Science*, dan *Computing/ICT*, berfokus pada penalaran konseptual.
>    - **Singapore Primary (Primary 1-6)**: Pengantar Bahasa Inggris; mapel *Singapore Mathematics* (spesialisasi Bar Modeling & Problem Solving Heuristics), *Singapore Science* (Inquiry-based: Diversity, Cycles, Systems, Energy, Interactions), dan *Singapore English*.
> 2. **Kapasitas Soal**: Menjamin minimal 50 butir soal unik berkualitas tinggi per mata pelajaran per jenjang kelas pada setiap kurikulum.
> 3. **Switcher Kurikulum Global**: Selector kurikulum yang mudah diakses di bagian atas navigasi maupun beranda modul, dengan preferensi tersimpan di penyimpanan lokal (*localStorage*).

- **Bahasa Soal**: Kurikulum Merdeka menggunakan Bahasa Indonesia (dan bahasa daerah untuk muatan lokal), sedangkan Cambridge dan Singapore menggunakan standar Bahasa Inggris akademik sesuai standar internasional masing-masing silabus.
- **Format LKPD / Worksheet**: Lembar kerja siap cetak secara otomatis menyesuaikan kop dan format kurikulum yang aktif (Kop Kurikulum Merdeka, Cambridge Assessment Style, atau Singapore MOE Worksheet Style).

---

## 1. Overview & Core Concept

- **What It Does**: Memberikan kebebasan kepada pengguna untuk memilih silabus pendidikan yang sesuai dengan kebutuhan sekolah anak (Sekolah Nasional, Sekolah SPK/Bilingual, Sekolah Internasional Cambridge, atau bimbingan intensif Olimpiade/Singapore Math).
- **Target Audience / Persona**:
  - Siswa Sekolah Dasar Nasional (Kurikulum Merdeka).
  - Siswa sekolah SPK/Internasional yang menempuh kurikulum Cambridge Primary (Checkpoint preparation).
  - Siswa dan pengajar yang fokus pada penguasaan metode *Singapore Bar Model* dan sains berbasis inkuiri.
  - Guru dan lembaga bimbingan belajar yang memerlukan bank soal dan LKPD siap cetak lintas kurikulum.
- **Key Value**: Satu platform serba ada untuk latihan soal komprehensif, dari kurikulum nasional Indonesia hingga dua standar kurikulum internasional paling populer di dunia.

---

## 2. User Experience & Visual Design

### A. Key User Flows
1. **Pemilihan Kurikulum di Header / Beranda**:
   - Pengguna disambut dengan selector kurikulum di Top Navigation:
     - 🇮🇩 **Kurikulum Merdeka** (Fase A, B, C · Kelas 1-6)
     - 🇬🇧 **Cambridge Primary** (Stage 1-6 · Global Standards)
     - 🇸🇬 **Singapore Primary** (Primary 1-6 · Bar Model & Inquiry)
2. **Eksplorasi Kelas & Mata Pelajaran Spesifik**:
   - Saat kurikulum diubah, daftar mata pelajaran langsung berganti secara reaktif:
     - Cambridge: *English*, *Mathematics*, *Science*, *Computing*.
     - Singapore: *Math (Bar Models & Heuristics)*, *Science (Inquiry Themes)*, *English (Synthesis & Cloze)*.
     - Merdeka: *IPAS*, *Matematika*, *Bahasa Indonesia*, *Pancasila*, *Bahasa Daerah*, dll.
3. **Pengerjaan Kuis Interaktif**:
   - Mode kuis menyediakan timer, navigasi nomor soal, petunjuk visual (termasuk diagram Bar Model untuk Singapore Math dan diagram eksperimen untuk Cambridge Science), serta pembahasan langkah demi langkah.
4. **Bank Soal & Pencarian Terpadu**:
   - Filter bank soal memiliki dropdown kurikulum aktif, tingkat kelas/stage, mata pelajaran, tingkat kesulitan, serta opsi ilustrasi.
5. **Cetak LKPD / Printable Worksheets**:
   - Menghasilkan file cetak PDF/A4 dengan tata letak profesional, instruksi siswa, ruang jawaban, dan lembar kunci jawaban terpisah.

### B. Visual Identity & Theme
- **Color Palette & Accents**:
  - *Kurikulum Merdeka*: Nuansa Biru Edukasi Kemendikbud (`#0284C7`) & Merah Putih hangat.
  - *Cambridge Primary*: Nuansa Biru Klasik Cambridge Navy (`#1E3A8A`) & Emas Royal (`#D97706`).
  - *Singapore Primary*: Nuansa Merah-Crimson Elegan (`#BE123C`) & Zamrud Cerdas (`#047857`).
- **Typography & Clean Layout**:
  - Judul Display: `Plus Jakarta Sans` dengan visual weight SemiBold yang tegas.
  - Notasi Matematika & Diagram: Font terstruktur dengan angka tabular (`tabular-nums`) dan diagram visual berbasis SVG bersih.
  - Anti-Pill Restraint: Menggunakan *segmented tab controls* fungsional tanpa ornamen badge mengambang yang berantakan.

---

## 3. Key Product Decisions & Trade-Offs

- **Pemisahan Bank Data Soal per Kurikulum**:
  - *Chosen Approach*: Struktur data modular terpisah di direktori data (`merdeka/`, `cambridge/`, `singapore/`) yang disatukan melalui *curriculum abstraction layer*.
  - *Why*: Menghindari kebocoran soal lintas silabus, mempermudah perawatan, dan menjaga kemurnian terminologi bahasa (misal: "fractions" vs "pecahan", "states of matter" vs "wujud zat").
- **Ketersediaan Minimal 50 Soal per Mapel**:
  - *Chosen Approach*: Menyediakan dataset terstruktur 50 butir soal komprehensif untuk setiap mata pelajaran di setiap tingkat kelas/stage, mencakup soal tingkat dasar, pemahaman konsep, hingga soal penalaran tingkat tinggi (HOTS / Heuristics).
  - *Why*: Memenuhi target latihan intensif pengguna tanpa adanya pengulangan soal yang membosankan.
- **Keseimbangan Kunci Jawaban**:
  - *Chosen Approach*: Algoritma pengacakan pilihan ganda yang menjamin distribusi opsi A, B, C, D merata secara proporsional.

---

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

### Architecture & Component Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                             Top Navigation Bar                              │
│  [Pintaria SD] ─── [Curriculum Switcher: Merdeka | Cambridge | Singapore]   │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          Curriculum Context Provider                        │
│          (curriculum: 'merdeka' | 'cambridge' | 'singapore', grade: 1..6)   │
└──────┬───────────────────────────────┬───────────────────────────────┬──────┘
       │                               │                               │
       ▼                               ▼                               ▼
┌──────────────┐               ┌──────────────┐                ┌──────────────┐
│ Merdeka Pack │               │Cambridge Pack│                │Singapore Pack│
│ - Kelas 1-6  │               │ - Stage 1-6  │                │ - P1 to P6   │
│ - 10 Mapel   │               │ - 4 Mapel    │                │ - 3 Mapel    │
│ - 50+ Soal/m │               │ - 50+ Soal/m │                │ - 50+ Soal/m │
└──────┬───────┘               └──────┬───────┘                └──────┬───────┘
       └───────────────────────┬──────┴────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           Unified Views & Router                            │
│  ┌───────────────────────┐ ┌───────────────────────┐ ┌───────────────────┐  │
│  │   GradeModuleView     │ │      QuizView         │ │PrintWorksheetView │  │
│  │ (Adaptive Subjects)   │ │  (Timer & Feedback)   │ │ (Curriculum Kop)  │  │
│  └───────────────────────┘ └───────────────────────┘ └───────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Data Model & Implementation Plan
1. **Definisi Metadata Kurikulum**:
   - `CurriculumId`: `'merdeka' | 'cambridge' | 'singapore'`.
   - `CurriculumMeta`: Nama resmi, ikon bendera/simbol, jenjang penamaan (*Kelas 1-6*, *Stage 1-6*, *Primary 1-6*), daftar mata pelajaran resmi.
2. **Penyusunan Bank Soal**:
   - **Cambridge Primary**: Modul Stage 1-6 untuk English, Mathematics, Science, Computing dengan minimal 50 soal teruji per mata pelajaran.
   - **Singapore Primary**: Modul Primary 1-6 untuk Singapore Math (termasuk soal pemecahan masalah model bar), Singapore Science, dan English dengan minimal 50 soal teruji per mata pelajaran.
   - **Kurikulum Merdeka**: Pemeliharaan dan penyempurnaan dataset yang sudah ada (termasuk kelengkapan soal 51-100 dan pemisahan tegas Bahasa Sunda & Bahasa Jawa).
3. **Penyempurnaan Antarmuka**:
   - Selector kurikulum di navbar dan header beranda.
   - Penyesuaian label kop cetak LKPD sesuai kurikulum yang dipilih.
   - Penyesuaian filter pencarian bank soal.
