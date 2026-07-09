# OZI STAR SMP — Official Server Website

Website resmi berkualitas tinggi untuk server Minecraft **OZI STAR SMP** (Minecraft Survival Economy). Didesain dengan estetika modern, dipadukan dengan sentuhan pixel klasik khas Minecraft yang bersih, cepat, dan mobile-responsive.

## 🌟 Preview & Visual Style
- **Tema Visual**: Minecraft Pixel Inspired dengan palet warna natural (Hijau Rumput, Coklat Tanah, Biru Langit).
- **Desain**: Modern Minimalist, Glassmorphism, Rounded Corners, dan Shadow Lembut tanpa over-animasi.
- **Performa Tinggi**: Dioptimalkan untuk performa Lighthouse tinggi, CLS rendah, dan ramah SEO.

## 🚀 Fitur Utama
1. **Dynamic Developer Topbar & Footer**: Mengambil data developer secara langsung (real-time fetch) dari API resmi GitHub tanpa hardcode.
2. **Server Status Indicator**: Menunjukkan status online/offline server lengkap dengan jumlah pemain aktif.
3. **Copy-to-Clipboard Server IP**: Tombol interaktif untuk memudahkan pemain menyalin IP server dengan satu klik.
4. **Minecraft Skin Avatars**: Menampilkan wajah para staf (Owner, Admin, Streamer) menggunakan render kepala 3D Minecraft asli.
5. **Leaderboard Donatur**: Visualisasi donatur teratas dengan desain kartu emas/silver yang elegan.
6. **Timeline Jam PvP**: Panduan waktu berlakunya jam PvP bebas yang ramah pengguna.
7. **Rules Section**: Pembagian aturan yang tegas antara hal yang diperbolehkan (hijau) dan dilarang (merah).
8. **Responsive Layout & Smooth Transitions**: Mobile-first, mendukung desktop, laptop, tablet, hingga smartphone.

## 🛠️ Instalasi & Pengembangan Lokal

### Prasyarat
- Node.js versi 18 atau lebih baru.
- npm atau yarn.

### Langkah-Langkah
1. Clone repositori ini:
   ```bash
   git clone https://github.com/mcpeserver/ozi-star-smp.git
   cd ozi-star-smp
   ```

2. Instal dependensi:
   ```bash
   npm install
   ```

3. Jalankan development server lokal:
   ```bash
   npm run dev
   ```

4. Bangun versi produksi:
   ```bash
   npm run build
   ```

## 📦 Panduan Deploy

### 1. GitHub Pages
Aplikasi ini dapat di-deploy dengan mudah menggunakan GitHub Actions.
1. Masuk ke tab **Settings** di repositori GitHub kamu.
2. Pilih menu **Pages** di sidebar kiri.
3. Ubah **Source** menjadi **GitHub Actions**.
4. Push file pemicu di `.github/workflows/deploy.yml` untuk memicu deployment otomatis.

### 2. Vercel
1. Hubungkan akun GitHub kamu ke [Vercel](https://vercel.com).
2. Buat proyek baru dan arahkan ke repositori ini.
3. Vercel akan secara otomatis mendeteksi konfigurasi **Vite** dan mem-build folder `dist`.
4. Klik **Deploy** dan website langsung online!

## 🔧 Kustomisasi Data Server
Semua informasi server disimpan dalam file `/src/serverData.ts` yang terorganisir dengan baik. Kamu dapat menyesuaikan IP, Port, Daftar Staf, Leaderboard Donatur, dan tautan sosial media hanya dengan mengedit file tersebut.

## 📝 Kontributor & Lisensi
- Dikembangkan oleh **Ran Dev** (diambil dinamis via API).
- Kontribusi dipersilakan dengan mengikuti pedoman kontribusi di [CONTRIBUTING.md](./CONTRIBUTING.md).
- Dilindungi oleh lisensi [MIT License](./LICENSE).
