# Rencana: Integrasi Webhook Google Apps Script + Sinkronisasi Login Siswa

## Latar belakang
Arsip yang diunggah berisi aplikasi "Sahabat MAPSI — Belajar PAI & BTQ Interaktif" (React + Vite). Proyek saat ini masih template kosong, jadi aplikasi akan diimpor lebih dulu, lalu integrasi webhook ditambahkan.

Catatan penyesuaian:
- File `src/services/cloudSheetService.ts` sudah ada di arsip dan sudah punya pengiriman webhook (`sendToWebhook`), tetapi belum ada fungsi khusus `syncLoginToCloudSheet`.
- Tidak ada `LoginPanelModal.tsx` di arsip; login siswa terjadi di `src/components/LoginPage.tsx` dan diproses lewat `handleLogin` di `src/App.tsx`. Fungsi sync akan dipanggil di titik login tersebut (setara dengan "saat siswa submit/login").

## Langkah kerja

1. **Impor aplikasi Sahabat MAPSI ke proyek**
   - Salin seluruh `src/` (komponen, data, services, utils), `index.html`, `package.json`, dan konfigurasi dari arsip — tanpa metadata `.git`.
   - Sesuaikan struktur ke stack proyek (TanStack Start): pindahkan `App.tsx` menjadi halaman utama di `src/routes/index.tsx`, hapus placeholder, pasang dependensi yang dipakai (lucide-react, canvas-confetti, motion, dll).
   - Fitur Gemini AI (`@google/genai`) dinonaktifkan sementara bila kunci API belum tersedia, agar aplikasi tetap jalan.

2. **Tambah `syncLoginToCloudSheet` di `src/services/cloudSheetService.ts`**
   - Fungsi baru yang mengambil/membuat data siswa (`getOrCreateStudentRecord`), lalu mengirim satu payload "login event" ke URL webhook Google Apps Script dari pengaturan CloudSheet (`getCloudSheetConfig`).
   - Payload berisi: nama, kelas, sekolah, waktu login (ISO + format id-ID), status "Aktif", dan penanda `event: "login"`.
   - Menggunakan `fetch` mode `no-cors` dengan `Content-Type: text/plain` (pola yang aman untuk Google Apps Script Web App).
   - Gagal kirim tidak boleh memblokir login — error hanya dicatat (silent fail dengan logging).
   - Sertakan template kode Google Apps Script (`doPost`) yang sudah ada agar guru bisa memasang webhook di Spreadsheet mereka.

3. **Panggil saat login siswa**
   - Di alur login (`handleLogin` di App / `LoginPage`), setelah data siswa dibuat/ditemukan, panggil `syncLoginToCloudSheet(...)` sehingga setiap login dari HP langsung terkirim ke CloudSheet.
   - Login admin/pembina tidak ikut terkirim (hanya login siswa).

4. **Verifikasi**
   - Build bersih, halaman utama tampil, simulasi login siswa memicu permintaan ke URL webhook (dicek lewat log jaringan di browser).

## Pertanyaan terbuka (tidak menghalangi)
- URL webhook Google Apps Script belum ada; aplikasi sudah punya kolom pengaturan webhook di Panel Admin, jadi guru bisa mengisinya sendiri nanti.
