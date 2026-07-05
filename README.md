# ELIXIR SMP • Official Landing Page

Selamat datang di repository resmi **ELIXIR SMP Official Landing Page**. Ini adalah website informasi resmi yang dirancang dengan dedikasi tinggi khusus untuk komunitas server Minecraft Minecraft Survival bertema **Purple Fantasy, Magic, Alchemy, & Potion**. 

Website ini dirancang minimalis, elegan, berkecepatan tinggi, dan 100% responsif di seluruh jenis perangkat (Mobile, Tablet, hingga Ultra-Wide Desktop). Fokus utama proyek ini adalah menyajikan seluruh data koneksi server secara transparan, aman, dan memikat visual pemain baru.

---

## 🎨 Preview Visual & Identitas Utama

Di bawah ini adalah aset identitas resmi yang digunakan pada website ini:

### Official Logo
<p align="center">
  <img src="/public/logo.png" width="200" alt="ELIXIR SMP Official Logo" style="border-radius: 50%; box-shadow: 0 0 25px rgba(168, 85, 247, 0.4);" />
</p>

### Hero Banner Background
<p align="center">
  <img src="/public/hero-bg.png" width="100%" alt="ELIXIR SMP Hero Background Banner" style="border-radius: 12px; border: 1px solid rgba(168, 85, 247, 0.2);" />
</p>

---

## 🚀 Teknologi Utama Yang Digunakan

Proyek ini dibangun menggunakan kombinasi pustaka modern berperforma tinggi untuk memastikan pemuatan secepat kilat:

- **React 19 (SPA)** — Framework pemrograman antarmuka utama.
- **TypeScript** — Jaminan pengetikan ketat demi stabilitas kode jangka panjang.
- **Tailwind CSS v4** — Framework utilitas desain modern yang ringkas dan ekspansif.
- **Motion (Framer Motion)** — Penggerak animasi transisi halus, mengambang (floating), dan meluncur (sliding).
- **Lucide React** — Set ikon berbasis vektor SVG berkualitas tinggi yang seragam.
- **Vite** — Alat build kilat untuk siklus pengembangan yang efisien.

---

## 📂 Struktur Folder Proyek

```text
/
├── public/                 # Aset statis publik yang dapat langsung diakses
│   ├── logo.png            # Logo utama server (Magic Hourglass)
│   ├── hero-bg.png         # Background megah bertema fantasi ungu
│   ├── og-image.png        # Gambar pratinjau saat link dibagikan di medsos
│   ├── favicon.ico         # Icon kecil pada tab browser
│   └── manifest.webmanifest# Konfigurasi PWA dan metadata perangkat
├── src/
│   ├── components/         # Komponen UI modular
│   │   ├── DeveloperBanner.tsx # Banner developer RAN DEV di bagian atas
│   │   ├── Navbar.tsx          # Navigasi sticky responsif dengan tombol salin IP
│   │   ├── Hero.tsx            # Bagian utama penarik perhatian (Floating logo & CTA)
│   │   ├── ServerInfo.tsx      # Panel detail IP Java, Alt IP, Bedrock IP, & Port
│   │   ├── Features.tsx        # Grid fitur kustom (Claim land, gacha, dll)
│   │   ├── Rules.tsx           # Daftar aturan hukum tata tertib server
│   │   ├── Ranks.tsx           # Daftar rank donatur lengkap & integrasi WhatsApp
│   │   ├── Community.tsx       # Tautan media sosial komunitas (Discord, Linktree)
│   │   └── Footer.tsx          # Hak cipta & watermark pengembang
│   ├── config/
│   │   └── site.ts         # PUSAT DATA KONFIGURASI UTAMA SERVER
│   ├── App.tsx             # Assembly utama komponen landing page
│   ├── index.css           # Integrasi Tailwind CSS v4, Google Fonts, dan gaya kustom
│   └── main.tsx            # Titik awal render aplikasi React
├── package.json            # Daftar dependensi dan script build
└── tsconfig.json           # Konfigurasi standar TypeScript compiler
```

---

## 🛠️ Cara Instalasi & Menjalankan Proyek Secara Lokal

Ikuti langkah-langkah sederhana di bawah ini untuk menguji proyek di komputer lokal Anda:

### Prasyarat
Pastikan Anda sudah menginstal **Node.js** (rekomendasi v18 ke atas) dan paket manajer **npm** di sistem Anda.

### Langkah-langkah
1. **Clone Repository / Ekstrak Proyek**
   ```bash
   git clone https://github.com/username/elixir-smp-landing.git
   cd elixir-smp-landing
   ```

2. **Instal Dependensi**
   ```bash
   npm install
   ```

3. **Jalankan Server Pengembangan**
   ```bash
   npm run dev
   ```
   Buka browser Anda dan akses halaman di alamat `http://localhost:3000`.

4. **Build untuk Produksi**
   ```bash
   npm run build
   ```
   Hasil build statis akan tersimpan dengan bersih di dalam folder `dist/`.

---

## ✍️ Cara Mengustomisasi Data Server Anda

Salah satu keunggulan terbesar arsitektur website ini adalah **Desain Tersentralisasi**. Anda **tidak perlu mengutak-atik kode komponen React** jika hanya ingin mengganti tulisan atau informasi server.

### 1. Mengubah Data Informasi, Fitur, Aturan, dan Rank
Buka file `src/config/site.ts`. Di dalam file tersebut, Anda dapat langsung mengubah:
- **Nama Server** (`name`)
- **IP Java / IP Bedrock / Port** (`javaIp`, `bedrockIp`, `bedrockPort`)
- **Fitur Kustom** (`features` array) — Anda bisa menambah, mengurangi, atau mengganti penjelasan fitur serta mengganti ikonnya menggunakan nama ikon dari Lucide React.
- **Aturan Server** (`rules` array) — Tulis pasal-pasal server Anda secara rinci.
- **Harga dan Benefit Rank** (`ranks` array) — Atur nama rank (Archery, Knight, dll), harga donasi, deskripsi singkat, dan list keuntungannya.
- **Tautan Media Sosial** (`links` object) — Masukkan tautan grup WhatsApp, server Discord, dan alamat Linktree Anda sendiri.

### 2. Mengganti Logo Utama & Gambar Latar
Jika Anda memiliki logo dan background baru, Anda hanya perlu mengganti file gambarnya di dalam folder `public/`:
- Pastikan nama dan formatnya tetap sama persis: `logo.png` dan `hero-bg.png`.
- Resolusi yang disarankan untuk `logo.png` adalah rasio **1:1** (minimal `512x512px`).
- Resolusi yang disarankan untuk `hero-bg.png` adalah rasio **16:9** (minimal `1920x1080px`).

### 3. Memperbarui Metadata SEO & OpenGraph (Medsos)
Data metadata juga dapat diatur langsung di dalam objek `seo` pada file `src/config/site.ts`. Ganti `title`, `description`, dan `keywords` sesuai target kata kunci pencarian Anda di Google.

---

## ☁️ Cara Deploy ke Vercel

Aplikasi ini dikembangkan dengan kaidah modern yang ramah terhadap platform hosting statis instan seperti **Vercel** atau **Netlify**:

1. Hubungkan repository GitHub Anda ke Vercel.
2. Vercel akan otomatis mendeteksi proyek **Vite + React**.
3. Pastikan pengaturan build command adalah `npm run build` dan output directory adalah `dist`.
4. Klik **Deploy**, dan dalam waktu kurang dari 1 menit website resmi ELIXIR SMP Anda sudah online dan dapat diakses publik!

---

## 📜 Lisensi & Aturan Kontribusi

### Lisensi
Proyek ini dilisensikan di bawah **Lisensi MIT**. Anda bebas melakukan modifikasi, penyebaran, dan penggunaan komersial/non-komersial selama tetap menyertakan atribusi hak cipta asli.

### Kontribusi
Kontribusi komunitas sangat diapresiasi! Jika Anda menemukan bug, memiliki saran improvisasi desain, silakan ajukan **Pull Request** atau buka **Issues** baru di halaman repository.

---

## 🛡️ Kebijakan Keamanan (Security Policy)
Jika Anda menemukan kerentanan keamanan yang fatal pada sistem web ini, harap hubungi langsung RAN DEV selaku pengembang melalui WhatsApp resmi di nomor **0895602592430** daripada menulisnya di forum umum, demi menjaga keamanan data server pengguna.

---

## 📈 Riwayat Perubahan (Changelog)

### v1.0.0 (Rilis Utama)
- Inisiasi Landing Page Resmi ELIXIR SMP bertema Purple Fantasy.
- Integrasi Framer Motion untuk efek mengambang (floating animation) pada logo utama.
- Desain Glassmorphism tipis, modern, border transparan, dan soft shadow.
- Sistem penyalinan IP sekali klik dengan notifikasi visual feedback instan.
- Halaman responsif penuh diuji pada perangkat Android, iPhone, Tablet, hingga Ultra-Wide Monitor.
- Pembuatan file manifest PWA, robots.txt, sitemap.xml, dan konfigurasi SEO komprehensif.

---

## 💖 Ucapan Terima Kasih

Terima kasih sebesar-besarnya kepada **Owner ELIXIR SMP** atas kepercayaan penuh yang diberikan kepada **RAN DEV Studio** untuk mendesain dan membangun halaman pendaratan (landing page) resmi ini. 

Semoga website ini dapat memajukan server ELIXIR SMP, mendatangkan ratusan pemain aktif baru setiap harinya, meningkatkan loyalitas donatur rank, dan menyatukan komunitas survival Minecraft Indonesia dalam satu semesta fantasi yang megah dan solid!

*Salam hangat petualang,*
**RAN DEV Studio** 🛡️✨
