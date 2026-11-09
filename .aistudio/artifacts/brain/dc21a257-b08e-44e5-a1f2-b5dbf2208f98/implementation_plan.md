# Perbaikan Layar Blank pada Deployment GitHub Pages

Rencana ini mengatasi masalah layar kosong (blank/white screen) yang terjadi saat proyek dipush dan dipublikasikan di **GitHub Pages**. Masalah ini disebabkan oleh path aset Vite yang masih menggunakan path absolut (`/assets/...`) alih-alih path relatif (`./assets/...`), serta belum adanya alur build otomatis untuk GitHub Pages.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> **Penyebab Utama Layar Blank di GitHub Pages**:
> 1. **Asset Path 404 (Root Path vs Subpath)**: GitHub Pages melayani website di subpath `https://<username>.github.io/<nama-repo>/`. Tanpa konfigurasi `base: './'` di `vite.config.ts`, browser mencari file JavaScript dan CSS di root domain (`https://<username>.github.io/assets/...`), sehingga menghasilkan error **404 Not Found** dan layar menjadi putih kosong.
> 2. **Source Code vs Build Bundle**: Jika yang dipush adalah source code tanpa proses build, browser tidak dapat mengeksekusi file TypeScript (`/src/main.tsx`) secara langsung.

- **Solusi yang Dipilih**:
  - Mengonfigurasi `base: './'` di `vite.config.ts` agar build bundle kompatibel di semua subpath dan domain.
  - Menyediakan file workflow otomatis **GitHub Actions** (`.github/workflows/deploy.yml`) agar setiap kali Anda push ke GitHub, proyek otomatis dibuild dan dipublikasikan tanpa perlu build manual.
  - Menyediakan file `404.html` (SPA fallback) agar refresh halaman atau URL per-kelas (`?kelas=1`, dst.) tidak error di GitHub Pages.

---

## 1. Overview & Core Concept

- **Tujuan**: Memastikan aplikasi Pintaria SD dapat dibuka dengan lancar tanpa layar putih kosong di GitHub Pages, baik untuk link Full Bundling maupun link per-kelas (`?kelas=1` s/d `?kelas=6`).
- **Target Platform**: GitHub Pages (`https://<username>.github.io/<repo>/`).

---

## 2. Alur Eksekusi & Solusi Teknis

```
                  ┌──────────────────────────────┐
                  │    Git Push ke GitHub        │
                  └──────────────┬───────────────┘
                                 │
                                 ▼
                  ┌──────────────────────────────┐
                  │   GitHub Actions Workflow    │
                  │ (Checkout -> Install -> Build│
                  │   dengan base: './')         │
                  └──────────────┬───────────────┘
                                 │
                                 ▼
                  ┌──────────────────────────────┐
                  │        GitHub Pages          │
                  │ Asset path: ./assets/xxx.js  │
                  │ Status: 200 OK (Tidak Blank) │
                  └──────────────────────────────┘
```

### Langkah 1: Update `vite.config.ts`
- Menambahkan properti `base: './'` pada konfigurasi Vite.
- Memastikan aset CSS, JS, dan gambar dibundel dengan path relatif sehingga dapat diakses di URL root maupun subfolder repository GitHub.

### Langkah 2: Buat Workflow GitHub Actions (`.github/workflows/deploy.yml`)
- Membuat file GitHub Actions CI/CD resmi untuk Vite + GitHub Pages:
  - Trigger otomatis saat push ke branch `main`.
  - Menginstal dependensi (`npm install`).
  - Menjalankan build (`npm run build`).
  - Mengunggah artefak `dist/` dan mendeploy langsung ke GitHub Pages.

### Langkah 3: Konfigurasi SPA Fallback (`404.html`)
- Menambahkan skrip/file `404.html` di folder `public/` atau postbuild agar ketika halaman di-refresh pada URL parameter seperti `?kelas=1` atau deep links, GitHub Pages tidak menampilkan pesan "404 Page Not Found".

### Langkah 4: Panduan Aktivasi di Pengaturan GitHub
- Memberikan instruksi singkat dan jelas bagi pengguna:
  - Buka menu **Settings** > **Pages** di repository GitHub Anda.
  - Pada bagian **Build and deployment > Source**, pilih opsi **GitHub Actions**.

---

## 3. Status Penyelesaian

- [x] **Update `vite.config.ts`**: Telah ditambahkan `base: './'` sehingga path bundle JavaScript dan CSS menggunakan path relatif (`./assets/...`).
- [x] **File SPA Redirect (`public/404.html`)**: Telah dibuat skrip penanganan 404 otomatis untuk GitHub Pages agar routing dan query per-kelas (`?kelas=1`, dll.) tidak error saat halaman direfresh.
- [x] **Workflow Otomatisasi GitHub Actions (`.github/workflows/deploy.yml`)**: Telah dibuat alur CI/CD otomatis untuk build dan deploy langsung ke GitHub Pages saat melakukan push ke branch `main`/`master`.
- [x] **Verifikasi Build**: Hasil build `dist/index.html` terverifikasi menggunakan `./assets/index-...` dan lolos `npm run build` serta `tsc --noEmit` dengan 0 error.
