import { Baby, HeartPulse, House, PersonStanding, Stethoscope, UsersRound } from 'lucide-react';
import type { Provider, Service } from './types';

export const money = (value: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);

export const services: Service[] = [
  { id: 'perawat', name: 'Perawatan Perawat di Rumah', shortName: 'Perawat', description: 'Pemantauan kondisi, obat, dan perawatan pascaklinis di rumah.', price: 150000, icon: Stethoscope, tone: 'green' },
  { id: 'bidan', name: 'Kunjungan Bidan', shortName: 'Bidan', description: 'Pendampingan profesional untuk ibu, bayi, dan masa nifas.', price: 175000, icon: Baby, tone: 'pink' },
  { id: 'pendamping', name: 'Pendamping Harian', shortName: 'Pendamping', description: 'Bantuan aktivitas harian dan teman beraktivitas di rumah.', price: 110000, icon: House, tone: 'blue' },
  { id: 'lansia', name: 'Pendamping Lansia', shortName: 'Lansia', description: 'Pendamping tepercaya untuk rutinitas dan mobilitas lansia.', price: 125000, icon: PersonStanding, tone: 'yellow' },
  { id: 'luka', name: 'Perawatan Luka', shortName: 'Perawatan Luka', description: 'Perawatan luka berkala oleh tenaga kesehatan terverifikasi.', price: 185000, icon: HeartPulse, tone: 'teal' },
  { id: 'personal', name: 'Bantuan Personal', shortName: 'Bantuan Personal', description: 'Dukungan personal sesuai kebutuhan keluarga di rumah.', price: 100000, icon: UsersRound, tone: 'purple' },
];

export const providers: Provider[] = [
  { id: 'siti', name: 'Siti Rahma', initials: 'SR', role: 'Perawat', rating: 4.9, reviews: 128, distance: 1.2, experience: 4, price: 150000, skills: ['Perawatan di Rumah', 'Lansia', 'Pascaklinis'], availability: 'Tersedia sekarang' },
  { id: 'nadia', name: 'Nadia Putri', initials: 'NP', role: 'Perawat', rating: 4.8, reviews: 89, distance: 1.8, experience: 6, price: 175000, skills: ['Perawatan Luka', 'Lansia', 'Pemantauan Obat'], availability: 'Tersedia hari ini' },
  { id: 'maya', name: 'Maya Lestari', initials: 'ML', role: 'Pendamping', rating: 4.9, reviews: 64, distance: 2.4, experience: 5, price: 110000, skills: ['Pendamping Lansia', 'Mobilitas', 'Teman Harian'], availability: 'Tersedia pukul 20.00' },
];

export const articles = [
  { category: 'Perawatan Lansia', title: 'Menyiapkan rumah yang aman untuk orang tua', readTime: '5 menit' },
  { category: 'Pascaklinis', title: 'Yang perlu dipantau setelah pulang dari rumah sakit', readTime: '4 menit' },
  { category: 'Keluarga', title: 'Cara memilih caregiver yang tepat dan tepercaya', readTime: '6 menit' },
];
