import type { Clinic, Doctor, PriceItem } from './types';

export const clinics: Clinic[] = [
  { name: 'FDC Kuningan', city: 'Jakarta Selatan', address: 'Jl. Prof. Dr. Satrio No. 18', distance: '1,8 km', hours: '09.00–21.00' },
  { name: 'FDC Tebet', city: 'Jakarta Selatan', address: 'Jl. Tebet Raya No. 42', distance: '3,2 km', hours: '09.00–21.00' },
  { name: 'FDC Margonda', city: 'Depok', address: 'Jl. Margonda Raya No. 88', distance: '12 km', hours: '08.00–20.00' },
  { name: 'FDC Dramaga', city: 'Bogor', address: 'Jl. Raya Dramaga No. 21', distance: '28 km', hours: '09.00–20.00' },
];

export const doctors: Doctor[] = [
  { name: 'drg. Anisa Putri', specialty: 'Dokter Gigi Umum', clinic: 'FDC Kuningan', rating: 4.9, nextSlot: 'Hari ini, 16.30' },
  { name: 'drg. Raka Mahendra, Sp.Ort', specialty: 'Spesialis Ortodonsia', clinic: 'FDC Tebet', rating: 4.9, nextSlot: 'Besok, 10.00' },
  { name: 'drg. Nadia Kusuma', specialty: 'Dokter Gigi Umum', clinic: 'FDC Margonda', rating: 4.8, nextSlot: 'Hari ini, 18.00' },
  { name: 'drg. Farhan Akbar, Sp.KG', specialty: 'Spesialis Konservasi Gigi', clinic: 'FDC Dramaga', rating: 4.9, nextSlot: 'Sabtu, 11.30' },
];

export const prices: PriceItem[] = [
  { name: 'Konsultasi dokter gigi', category: 'Pemeriksaan', price: 'Mulai Rp75.000' },
  { name: 'Scaling gigi', category: 'Perawatan', price: 'Mulai Rp250.000', note: 'Harga menyesuaikan kondisi karang gigi' },
  { name: 'Tambal gigi', category: 'Perawatan', price: 'Mulai Rp300.000' },
  { name: 'Bleaching', category: 'Estetik', price: 'Mulai Rp1.500.000' },
  { name: 'Behel metal', category: 'Ortodonti', price: 'Mulai Rp4.500.000' },
  { name: 'Cabut gigi', category: 'Tindakan', price: 'Mulai Rp350.000' },
];

export const promos = [
  { title: 'Scaling lebih hemat', subtitle: 'Harga spesial untuk pasien baru', period: 's.d. 31 Desember', tone: 'green' },
  { title: 'Paket senyum cerah', subtitle: 'Konsultasi dan bleaching', period: 'Kuota terbatas', tone: 'pink' },
  { title: 'Kontrol behel bulanan', subtitle: 'Benefit ekstra untuk member', period: 'Khusus aplikasi', tone: 'yellow' },
];

export const articles = [
  { title: 'Kapan waktu yang tepat untuk periksa gigi?', category: 'Kesehatan Gigi', readTime: '4 menit' },
  { title: 'Kenali tanda karang gigi yang perlu dibersihkan', category: 'Perawatan', readTime: '5 menit' },
  { title: 'Panduan memilih sikat gigi untuk keluarga', category: 'Tips', readTime: '3 menit' },
  { title: 'Hal yang perlu disiapkan sebelum memasang behel', category: 'Ortodonti', readTime: '6 menit' },
];

export const videos = [
  { title: 'Cara sikat gigi yang benar', category: '#AskDentist', duration: '04:12' },
  { title: 'Kenapa perlu rutin scaling?', category: '#MitosFakta', duration: '03:48' },
  { title: 'Tur klinik dan fasilitas FDC', category: '#ClinicTour', duration: '02:56' },
];
