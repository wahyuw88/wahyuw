# Website Pribadi — Node.js + Vercel

Starter website pribadi dengan halaman beranda, tentang, artikel, kontak, serta API Node.js yang kompatibel dengan Vercel.

## Isi proyek
- `index.html`, `tentang.html`, `artikel.html`, `kontak.html`: halaman statis responsif.
- `assets/style.css`: desain dan gaya tampilan.
- `assets/app.js`: navigasi mobile dan formulir kontak.
- `api/health.js`: endpoint pemeriksaan API.
- `api/articles.js`: endpoint contoh daftar artikel.
- `api/contact.js`: validasi formulir kontak. Belum menyimpan atau mengirim pesan.
- `server.js`: server Express untuk preview lokal; sudah diperbaiki agar menyajikan `index.html` dan halaman lain langsung dari direktori proyek, bukan folder `public` yang tidak tersedia.
- `vercel.json`: konfigurasi deployment Vercel.
- `robots.txt` dan `sitemap.xml`: membantu crawler mesin pencari menemukan halaman website.
- Metadata SEO tiap halaman: title, meta description, canonical, Open Graph, dan Twitter Card; beranda juga menyertakan structured data WebSite.

## Deploy ke Vercel
1. Ekstrak ZIP ini.
2. Unggah folder proyek ke repository GitHub baru.
3. Masuk ke Vercel dan pilih **Add New → Project**.
4. Import repository GitHub tersebut.
5. Untuk starter statis + Functions ini, biarkan Framework Preset sebagai `Other` jika Vercel tidak mendeteksi framework.
6. Pastikan Root Directory menunjuk ke folder yang berisi `index.html`, `api/`, dan `vercel.json`.
7. Klik **Deploy**.
8. Setelah selesai, buka domain deployment yang diberikan Vercel.

Endpoint yang tersedia:
- `/api/health`
- `/api/articles`
- `/api/contact` (POST; saat ini memvalidasi input tetapi belum menyimpan/mengirim pesan)

## Preview lokal (opsional)
Membutuhkan Node.js yang terpasang:
```bash
npm install
npm start
```
Kemudian buka `http://localhost:3000`. Catatan: server Express lokal hanya menyajikan file statis dan endpoint health; fungsi Vercel pada folder `/api` berjalan saat deploy di Vercel.

## Yang perlu dikembangkan sebelum website digunakan secara penuh
- Periksa kembali nama, deskripsi, topik, dan konten agar sesuai identitas serta pengalaman asli pemilik website. SEO tidak menjamin peringkat tertentu; artikel yang orisinal dan bermanfaat tetap penting.
- Tambahkan PostgreSQL dan penyimpanan artikel.
- Tambahkan autentikasi dan otorisasi admin sebelum membuat dashboard admin publik.
- Hubungkan formulir kontak ke layanan email atau database. Jangan menampilkan pesan sukses seolah-olah data sudah tersimpan.
- Tambahkan rate limiting, perlindungan spam, logging, serta kebijakan privasi bila menerima data pengunjung.

**Penting:** starter ini belum menyertakan dashboard admin yang aman atau database. Jangan menyimpan password atau secret di kode frontend.
