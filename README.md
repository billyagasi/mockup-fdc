# TemanCare — mobile-first homecare MVP

Frontend React + Vite + TypeScript untuk marketplace homecare TemanCare. Fondasi UX mobile dari mockup awal dipertahankan, sementara content, branding, dan alur bisnis mengikuti referensi `../caregiver-project`.

Alur demo yang tersedia:

- Customer: pilih layanan, bandingkan provider, buat pesanan, pantau status, dan lihat riwayat.
- Provider: daftar, unggah dokumen simulasi, verifikasi, lihat dashboard, dan tanggapi permintaan.
- Trust & safety: badge verifikasi, transparansi harga/jarak, privacy note, dan informasi layanan darurat.

## Menjalankan lokal

```bash
npm install
npm run dev
```

## Pemeriksaan produksi

```bash
npm run typecheck
npm run build
```

Mock data terpusat di `src/data.ts` dan dapat diganti dengan API tanpa mengubah struktur routing utama.
