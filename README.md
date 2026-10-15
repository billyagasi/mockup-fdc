# FDC Dental Clinic — mobile-first frontend MVP

Frontend React + Vite + TypeScript untuk MVP FDC Dental Clinic. Seluruh menu menggunakan data demonstrasi dan dapat dipakai tanpa backend. Foto, banner, avatar, peta, serta video sengaja berupa placeholder agar mudah diganti dengan aset produksi.

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka `http://127.0.0.1:4173`. Tampilan dioptimalkan untuk browser ponsel dan tetap nyaman dipreview dari desktop.

## Pemeriksaan produksi

```bash
npm run typecheck
npm run build
npm run preview
```

## Deploy ke Netlify

Repository sudah dilengkapi `netlify.toml` dan fallback SPA di `public/_redirects`.

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22`

## Integrasi backend fase 2

Komponen saat ini memakai mock data di `src/data.ts`. Pada fase backend Go, data tersebut dapat dipindahkan ke REST API tanpa mengganti struktur halaman dan routing frontend.
