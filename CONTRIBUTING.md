# Panduan Berkontribusi — OZI STAR SMP Website

Kami sangat senang Anda tertarik untuk berkontribusi pada pengembangan website OZI STAR SMP! Berikut adalah panduan langkah demi langkah agar kontribusi Anda berjalan dengan lancar.

## 🌿 Struktur Alur Kerja Git (Branching)
- `main`: Branch utama yang stabil untuk rilis produksi.
- `dev`: Branch pengembangan tempat semua fitur diuji sebelum rilis.
- Buat branch baru untuk setiap fitur atau perbaikan bug:
  - Fitur: `feature/nama-fitur`
  - Perbaikan: `bugfix/nama-perbaikan`

## ⌨️ Coding Style & Standar Kode
- Gunakan **TypeScript** secara konsisten.
- Gunakan **Tailwind CSS** untuk semua kebutuhan styling elemen.
- Komponen visual dibuat secara modular di `/src/components/`.
- Jangan pernah mengubah API key atau rahasia server secara hardcode.

## 🤝 Alur Membuat Pull Request (PR)
1. Fork repositori ini ke akun GitHub Anda.
2. Buat branch baru dari `dev` atau `main` tergantung konfigurasi terbaru.
3. Tulis kode Anda dengan komentar yang jelas.
4. Pastikan aplikasi dapat dikompilasi dengan sukses (`npm run build`).
5. Buat commit yang deskriptif (misalnya: `feat: menambahkan tombol salin IP otomatis`).
6. Push perubahan Anda ke repositori hasil fork dan ajukan Pull Request ke branch `dev`.
