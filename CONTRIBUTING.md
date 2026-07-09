# Panduan Kontribusi ELIXIR SMP Landing Page

Halo! Terima kasih banyak sudah tertarik untuk berkontribusi pada pengembangan **ELIXIR SMP Official Landing Page**. Kontribusi dari pengembang komunitas sangat kami hargai demi kenyamanan, keindahan visual, dan kecepatan performa website ini.

Berikut adalah panduan singkat agar proses kolaborasi berjalan lancar:

## 🛠️ Cara Memulai

1. **Fork Repository Ini**
   Klik tombol "Fork" di pojok kanan atas halaman repository GitHub ini untuk membuat salinan proyek di akun GitHub Anda.

2. **Clone ke Perangkat Lokal**
   ```bash
   git clone https://github.com/username/elixir-smp-landing.git
   cd elixir-smp-landing
   ```

3. **Instal Seluruh Dependensi**
   ```bash
   npm install
   ```

4. **Buat Branch Baru**
   Gunakan nama branch yang deskriptif terkait fitur atau perbaikan yang Anda buat:
   ```bash
   git checkout -b fitur/nama-fitur-baru
   # atau
   git checkout -b perbaikan/perbaiki-bug-copy-ip
   ```

5. **Lakukan Perubahan**
   Pastikan Anda menguji kode secara lokal dengan menjalankan `npm run dev` dan memeriksa apakah tidak ada error atau layout yang rusak pada berbagai resolusi layar.

6. **Lakukan Komit & Push**
   Tulis pesan komit (commit message) yang singkat, jelas, dan menggunakan Bahasa Indonesia yang baik:
   ```bash
   git add .
   git commit -m "Memperbaiki transisi animasi navbar di mobile"
   git push origin fitur/nama-fitur-baru
   ```

7. **Ajukan Pull Request (PR)**
   Buka repository asli kami di GitHub dan klik tombol "Compare & pull request". Jelaskan secara singkat perubahan apa saja yang Anda lakukan dan lampirkan screenshot jika ada perubahan visual.

---

## 📐 Standar Penulisan Kode & Desain

- **Gaya Desain:** Pertahankan tema **Purple Fantasy Modern** menggunakan palet warna transparan, border tipis, efek glow ungu lembut, dan backdrop blur (Glassmorphism). Jangan menambahkan warna-warna cerah yang bertabrakan (seperti merah menyala atau kuning neon di luar konteks).
- **TypeScript:** Selalu tulis kode dengan tipe yang ketat (*Strict Type Safety*). Hindari penggunaan tipe `any`.
- **Ikon:** Seluruh ikon wajib menggunakan pustaka `lucide-react` demi keseragaman visual.
- **Data Statis:** Dilarang keras melakukan *hardcoding* data langsung di komponen UI. Segala jenis teks informasi, IP, link, dan daftar harga wajib dibaca secara dinamis dari file konfigurasi tersentralisasi `/src/config/site.ts`.

---

Jika Anda memiliki pertanyaan lebih lanjut, Anda dapat membuka diskusi di menu **Issues** atau menghubungi langsung tim pengembang utama **RAN DEV Studio**.

Terima kasih atas dedikasi dan kontribusi Anda! ✨
