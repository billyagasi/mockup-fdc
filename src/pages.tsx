import { useMemo, useState, type FormEvent } from 'react';
import {
  Award, BadgeCheck, Building2, CalendarCheck2, Check, ChevronDown, ChevronRight,
  CircleDollarSign, ClipboardCheck, Clock3, Crown, FileText, Gift, HeartHandshake,
  History, Info, MapPin, Navigation, Newspaper, Play, PlayCircle, ReceiptText, Search,
  ShieldCheck, Sparkles, Star, Stethoscope, Tag, TicketPercent, UserRound, UsersRound,
  Video, WalletCards,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { AppHeader, CardLink, Chip, EmptyState, PageHeader, PlaceholderMedia, SearchField, SectionHeader, StatusPill, useToast } from './components';
import { articles, clinics, doctors, prices, promos, videos } from './data';
import type { MenuItem } from './types';

const menuItems: MenuItem[] = [
  { label: 'Promo', path: '/promo', icon: Tag, tone: 'pink' },
  { label: 'Reservasi', path: '/reservasi', icon: CalendarCheck2, tone: 'green' },
  { label: 'Pricelist', path: '/pricelist', icon: ReceiptText, tone: 'yellow' },
  { label: 'Klinik Terdekat', path: '/klinik', icon: MapPin, tone: 'blue' },
  { label: 'Riwayat Bayar', path: '/riwayat-pembayaran', icon: History, tone: 'purple' },
  { label: 'Dokter', path: '/dokter', icon: Stethoscope, tone: 'teal' },
  { label: 'Info Asuransi', path: '/asuransi', icon: ShieldCheck, tone: 'orange' },
  { label: 'Voucher Saya', path: '/voucher', icon: TicketPercent, tone: 'pink' },
  { label: 'Riwayat Kunjungan', path: '/riwayat-kunjungan', icon: ClipboardCheck, tone: 'green' },
  { label: 'Membership', path: '/membership', icon: Crown, tone: 'yellow' },
  { label: 'Artikel', path: '/artikel', icon: Newspaper, tone: 'blue' },
  { label: 'Testimoni', path: '/testimoni', icon: Star, tone: 'purple' },
  { label: 'Tur Klinik', path: '/tur-klinik', icon: Building2, tone: 'teal' },
  { label: 'Video Edukasi', path: '/video', icon: PlayCircle, tone: 'orange' },
];

function MenuGrid() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? menuItems : menuItems.slice(0, 7);
  return <section className="menu-panel" aria-label="Menu layanan"><div className="menu-grid">{visible.map(({ label, path, icon: Icon, tone }) => <Link key={path} to={path} className="menu-item"><span className={`menu-icon ${tone}`}><Icon /></span><span>{label}</span></Link>)}<button className="menu-item" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}><span className="menu-icon gray"><ChevronDown className={expanded ? 'rotate' : ''} /></span><span>{expanded ? 'Sederhanakan' : 'Menu Lainnya'}</span></button></div></section>;
}

export function HomePage() {
  const { notify } = useToast();
  return <>
    <div className="home-hero"><AppHeader /><section className="welcome-card"><div><span className="eyebrow">Selamat datang</span><h1>Rawat senyummu bersama FDC</h1><p>Masuk untuk melihat reservasi dan benefit member.</p></div><div className="button-row"><button className="button primary" onClick={() => notify('Login akan terhubung ke backend Go pada fase 2')}>Login</button><Link className="button secondary" to="/profil">Register</Link></div></section></div>
    <section className="page-content hero-gap"><PlaceholderMedia className="hero-banner" label="HERO BANNER"><div className="hero-copy"><span>PROMO PILIHAN BULAN INI</span><h2>Senyum sehat,<br />makin percaya diri.</h2><Link className="mini-button" to="/promo">Lihat Promo <ChevronRight size={14} /></Link></div></PlaceholderMedia><div className="dots"><i className="active" /><i /><i /></div></section>
    <div className="page-content"><MenuGrid /></div>
    <section className="page-content block"><PlaceholderMedia className="event-banner" label="EVENT BANNER"><div><span>FDC EVENT</span><h2>Perawatan nyaman<br />untuk semua</h2></div></PlaceholderMedia></section>
    <section className="page-content block"><SectionHeader title="Promo Terbaru" link="/promo" /><div className="horizontal-list">{promos.slice(0, 2).map((promo) => <article className="promo-card" key={promo.title}><PlaceholderMedia className={`promo-media ${promo.tone}`} /><div><StatusPill tone="pink">Promo</StatusPill><h3>{promo.title}</h3><p>{promo.subtitle}</p><small>{promo.period}</small></div></article>)}</div></section>
    <section className="reward-strip"><div><span className="eyebrow">FDC REWARD</span><h2>Poin senyummu,<br />hadiah pilihanmu.</h2><Link className="mini-button" to="/membership">Cek Reward <ChevronRight size={14} /></Link></div><PlaceholderMedia label="ILUSTRASI" className="reward-art" /></section>
    <section className="achievement-section"><h2>Mengapa memilih FDC?</h2><div>{[[Star, 'Review Google terbanyak'], [Award, 'Customer experience'], [Crown, '2 Rekor MURI'], [BadgeCheck, 'Standar ISO']].map(([Icon, text]) => { const IconComponent = Icon as typeof Star; return <article key={String(text)}><span><IconComponent /></span><p>{String(text)}</p></article>; })}</div></section>
    <section className="testimonial-section"><SectionHeader title="Cerita Pasien" link="/testimoni" /><article><PlaceholderMedia label="FOTO" className="avatar" /><div><div className="stars">★★★★★</div><p>“Perawatannya dijelaskan dengan jelas dan suasana kliniknya nyaman.”</p><strong>Pasien FDC</strong><small>Ilustrasi testimoni</small></div></article></section>
    <section className="page-content block"><SectionHeader title="Video Edukasi" link="/video" /><div className="horizontal-list">{videos.slice(0, 2).map((video) => <article className="video-card" key={video.title}><PlaceholderMedia label="VIDEO" className="video-media"><span className="play-button"><Play /></span><small>{video.duration}</small></PlaceholderMedia><h3>{video.title}</h3><p>{video.category}</p></article>)}</div></section>
    <section className="page-content block"><SectionHeader title="Artikel" link="/artikel" /><article className="featured-article"><PlaceholderMedia className="article-media" /><div><span>Kesehatan Gigi</span><h3>{articles[0].title}</h3><p>Kenali kebiasaan sederhana untuk menjaga senyum tetap sehat.</p><Link to="/artikel">Baca artikel <ChevronRight size={14} /></Link></div></article></section>
    <section className="founder-section"><SectionHeader title="Kenali Founder FDC" /><p className="section-description">Sosok penting yang membangun layanan FDC Dental Klinik.</p><div className="founder-grid">{['drg. Ita Lestari, MARS', 'Abdul Mughny'].map((name, index) => <article key={name}><PlaceholderMedia label="FOTO" className="founder-photo" /><h3>{name}</h3><strong>{index === 0 ? 'Founder & CEO' : 'Chief Business Officer'}</strong><p>Berpengalaman membangun layanan kesehatan gigi yang mudah diakses.</p><button onClick={() => notify('Profil lengkap akan tersedia pada fase berikutnya')}>Lihat Profil</button></article>)}</div></section>
    <section className="download-section"><div><span className="eyebrow">SEMUA DALAM SATU APLIKASI</span><h2>Download aplikasi<br />FDC Dental Klinik</h2><p>Reservasi dan informasi perawatan dalam satu tempat.</p><div className="store-buttons"><button onClick={() => notify('Tautan App Store belum diaktifkan')}>App Store</button><button onClick={() => notify('Tautan Google Play belum diaktifkan')}>Google Play</button></div></div></section>
    <footer className="footer"><div><LogoFooter /><p>Frontend MVP · Data demonstrasi</p></div><div className="footer-links"><Link to="/artikel">Artikel</Link><Link to="/klinik">Klinik</Link><Link to="/profil">Profil</Link></div></footer>
  </>;
}

function LogoFooter() { return <div className="footer-brand">FDC <small>Dental Clinic</small></div>; }

export function PromosPage() {
  const [category, setCategory] = useState('Semua');
  const { notify } = useToast();
  return <><PageHeader title="Promo" subtitle="Penawaran terbaik untuk senyummu" /><div className="page-content page-body"><div className="chip-row">{['Semua', 'Scaling', 'Behel', 'Membership'].map((item) => <Chip key={item} active={category === item} onClick={() => setCategory(item)}>{item}</Chip>)}</div><div className="stack-list">{promos.map((promo, index) => <article className="promo-detail" key={promo.title}><PlaceholderMedia label="PROMO BANNER" className={`promo-detail-media ${promo.tone}`} /><div><StatusPill tone={index === 2 ? 'yellow' : 'pink'}>{index === 2 ? 'Member' : 'Promo'}</StatusPill><h2>{promo.title}</h2><p>{promo.subtitle}</p><small><Clock3 size={14} /> {promo.period}</small><button className="button primary full" onClick={() => notify('Promo tersimpan. Integrasi backend menyusul.')}>Ambil Promo</button></div></article>)}</div></div></>;
}

export function ReservationPage() {
  const [submitted, setSubmitted] = useState(false);
  const { notify } = useToast();
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); notify('Reservasi demo berhasil dibuat'); };
  return <><PageHeader title="Reservasi" subtitle="Pilih jadwal kunjunganmu" />{submitted ? <div className="page-content page-body"><div className="success-card"><span><Check /></span><h2>Reservasi tercatat</h2><p>Ini adalah konfirmasi frontend. Data belum dikirim ke backend.</p><div className="summary-box"><small>KLINIK</small><strong>FDC Kuningan</strong><small>JADWAL</small><strong>Sabtu, 10.00 WIB</strong></div><button className="button secondary full" onClick={() => setSubmitted(false)}>Buat reservasi lain</button></div></div> : <form className="page-content page-body form-stack" onSubmit={submit}><div className="step-indicator"><span className="active">1</span><i /><span>2</span><i /><span>3</span></div><label>Klinik<select required defaultValue=""><option value="" disabled>Pilih klinik</option>{clinics.map((clinic) => <option key={clinic.name}>{clinic.name}</option>)}</select></label><label>Perawatan<select required defaultValue=""><option value="" disabled>Pilih perawatan</option>{prices.map((price) => <option key={price.name}>{price.name}</option>)}</select></label><div className="form-grid"><label>Tanggal<input type="date" required /></label><label>Jam<select required defaultValue=""><option value="" disabled>Pilih jam</option><option>10.00</option><option>13.30</option><option>16.00</option><option>18.30</option></select></label></div><label>Catatan<textarea placeholder="Keluhan atau kebutuhan khusus (opsional)" rows={4} /></label><div className="info-callout"><Info size={18} /><p>Reservasi ini masih menggunakan data demonstrasi. Konfirmasi klinik akan aktif setelah backend Go terhubung.</p></div><button className="button primary full" type="submit">Konfirmasi Reservasi</button></form>}</>;
}

export function PricelistPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Semua');
  const categories = ['Semua', ...new Set(prices.map((price) => price.category))];
  const filtered = prices.filter((price) => (category === 'Semua' || price.category === category) && price.name.toLowerCase().includes(query.toLowerCase()));
  return <><PageHeader title="Pricelist" subtitle="Estimasi harga perawatan" /><div className="page-content page-body"><SearchField value={query} onChange={setQuery} placeholder="Cari perawatan" /><div className="chip-row">{categories.map((item) => <Chip key={item} active={category === item} onClick={() => setCategory(item)}>{item}</Chip>)}</div><div className="price-list">{filtered.map((price) => <article key={price.name}><span className="list-icon"><CircleDollarSign /></span><div><h3>{price.name}</h3><p>{price.category}</p>{price.note && <small>{price.note}</small>}</div><strong>{price.price}</strong></article>)}</div><div className="info-callout"><Info size={18} /><p>Harga merupakan estimasi dan dapat berubah setelah pemeriksaan dokter.</p></div></div></>;
}

export function ClinicsPage() {
  const [query, setQuery] = useState('');
  const filtered = clinics.filter((clinic) => `${clinic.name} ${clinic.city}`.toLowerCase().includes(query.toLowerCase()));
  const { notify } = useToast();
  return <><PageHeader title="Klinik Kami" subtitle="Temukan lokasi terdekat" action={<button className="icon-button" onClick={() => notify('Lokasi otomatis memerlukan izin pengguna')} aria-label="Gunakan lokasi"><Navigation size={20} /></button>} /><div className="page-content page-body"><SearchField value={query} onChange={setQuery} placeholder="Cari nama klinik atau kota" /><PlaceholderMedia label="MAP PREVIEW" className="map-preview"><MapPin size={28} /><span>{filtered.length} klinik ditemukan</span></PlaceholderMedia><div className="stack-list clinic-list">{filtered.map((clinic) => <article key={clinic.name}><span className="list-icon blue"><Building2 /></span><div><h3>{clinic.name}</h3><p>{clinic.address}, {clinic.city}</p><small><Clock3 size={13} /> {clinic.hours} · {clinic.distance}</small></div><button onClick={() => notify(`Membuka arah ke ${clinic.name}`)} aria-label={`Arah ke ${clinic.name}`}><Navigation size={18} /></button></article>)}</div></div></>;
}

export function PaymentHistoryPage() {
  return <><PageHeader title="Riwayat Pembayaran" subtitle="Status transaksi perawatan" /><div className="page-content page-body"><div className="summary-card"><div><small>Total dibayar</small><strong>Rp850.000</strong></div><WalletCards size={28} /></div><div className="stack-list transaction-list"><article><span className="list-icon green"><Check /></span><div><h3>Scaling gigi</h3><p>FDC Kuningan · 12 Sep 2026</p></div><div><strong>Rp350.000</strong><StatusPill>Lunas</StatusPill></div></article><article><span className="list-icon green"><Check /></span><div><h3>Kontrol behel</h3><p>FDC Tebet · 18 Agu 2026</p></div><div><strong>Rp500.000</strong><StatusPill>Lunas</StatusPill></div></article></div></div></>;
}

export function DoctorsPage() {
  const [query, setQuery] = useState('');
  const filtered = doctors.filter((doctor) => `${doctor.name} ${doctor.specialty}`.toLowerCase().includes(query.toLowerCase()));
  return <><PageHeader title="Dokter" subtitle="Temukan dokter yang tepat" /><div className="page-content page-body"><SearchField value={query} onChange={setQuery} placeholder="Cari dokter atau spesialisasi" /><div className="stack-list doctor-list">{filtered.map((doctor) => <article key={doctor.name}><PlaceholderMedia label="FOTO" className="doctor-photo" /><div><h3>{doctor.name}</h3><p>{doctor.specialty}</p><small><MapPin size={13} /> {doctor.clinic}</small><div><StatusPill>★ {doctor.rating}</StatusPill><span className="slot">{doctor.nextSlot}</span></div></div><Link to="/reservasi" aria-label={`Reservasi dengan ${doctor.name}`}><ChevronRight /></Link></article>)}</div></div></>;
}

export function InsurancePage() {
  const [query, setQuery] = useState('');
  const partners = ['AdMedika', 'Allianz', 'AXA Mandiri', 'Mandiri Inhealth', 'Prudential', 'Reliance'];
  const filtered = partners.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  return <><PageHeader title="Info Asuransi" subtitle="Partner pembayaran yang tersedia" /><div className="page-content page-body"><SearchField value={query} onChange={setQuery} placeholder="Cari provider asuransi" /><div className="insurance-grid">{filtered.map((partner) => <article key={partner}><span><ShieldCheck /></span><strong>{partner}</strong><small>Cashless*</small></article>)}</div><div className="info-callout"><Info size={18} /><p>Ketersediaan manfaat mengikuti polis dan konfirmasi provider masing-masing.</p></div></div></>;
}

export function VouchersPage() {
  const [tab, setTab] = useState('Tersedia');
  const { notify } = useToast();
  return <><PageHeader title="Voucher Saya" subtitle="Simpan dan gunakan voucher" /><div className="page-content page-body"><div className="segmented">{['Tersedia', 'Digunakan'].map((item) => <button key={item} className={tab === item ? 'active' : ''} onClick={() => setTab(item)}>{item}</button>)}</div>{tab === 'Tersedia' ? <div className="stack-list voucher-list">{[['WELCOME50', 'Diskon Rp50.000', 'Min. transaksi Rp300.000'], ['SMILE10', 'Diskon 10%', 'Khusus scaling']].map(([code, title, note]) => <article key={code}><div><Gift /></div><div><StatusPill tone="pink">{code}</StatusPill><h3>{title}</h3><p>{note}</p><small>Berlaku sampai 31 Desember</small></div><button onClick={() => notify(`Kode ${code} disalin`)}>Salin</button></article>)}</div> : <EmptyState icon={TicketPercent} title="Belum ada voucher digunakan" description="Voucher yang selesai dipakai akan muncul di sini." />}</div></>;
}

export function VisitHistoryPage() {
  return <><PageHeader title="Riwayat Kunjungan" subtitle="Catatan perawatanmu" /><div className="page-content page-body timeline"><article><span><Check /></span><div><small>12 SEPTEMBER 2026</small><h3>Scaling gigi</h3><p>FDC Kuningan · drg. Anisa Putri</p><StatusPill>Selesai</StatusPill></div></article><article><span><Check /></span><div><small>18 AGUSTUS 2026</small><h3>Kontrol behel</h3><p>FDC Tebet · drg. Raka Mahendra, Sp.Ort</p><StatusPill>Selesai</StatusPill></div></article><article><span><CalendarCheck2 /></span><div><small>KUNJUNGAN BERIKUTNYA</small><h3>Kontrol rutin</h3><p>Belum dijadwalkan</p><Link className="text-link" to="/reservasi">Buat reservasi <ChevronRight size={14} /></Link></div></article></div></>;
}

export function MembershipPage() {
  const { notify } = useToast();
  return <><PageHeader title="Membership" subtitle="Benefit untuk setiap senyum" /><div className="page-content page-body"><div className="member-pass"><div><span>SILVER MEMBER</span><h2>Guest User</h2><p>ID — FDC000000</p></div><Crown /></div><div className="points-card"><div><small>Poin aktif</small><strong>1.250</strong></div><button onClick={() => notify('Katalog reward masih berupa demo')}>Tukar Poin</button></div><section className="benefit-section"><h2>Benefit member</h2>{[['Diskon perawatan', 'Penawaran khusus pada periode tertentu'], ['Poin setiap transaksi', 'Kumpulkan dan tukarkan dengan reward'], ['Pengingat kontrol', 'Jangan lewatkan jadwal perawatan']].map(([title, detail], index) => <article key={title}><span>{index === 0 ? <Tag /> : index === 1 ? <Gift /> : <CalendarCheck2 />}</span><div><h3>{title}</h3><p>{detail}</p></div></article>)}</section><div className="tier-progress"><div><strong>Silver</strong><strong>Gold</strong></div><div><i style={{ width: '42%' }} /></div><p>750 poin lagi menuju Gold Member</p></div></div></>;
}

export function ArticlesPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Semua');
  const filtered = articles.filter((article) => (category === 'Semua' || article.category === category) && article.title.toLowerCase().includes(query.toLowerCase()));
  return <><PageHeader title="Artikel" subtitle="Insight untuk kesehatan gigimu" /><div className="page-content page-body"><SearchField value={query} onChange={setQuery} placeholder="Cari artikel" /><div className="chip-row">{['Semua', 'Kesehatan Gigi', 'Perawatan', 'Tips'].map((item) => <Chip key={item} active={category === item} onClick={() => setCategory(item)}>{item}</Chip>)}</div><div className="article-list">{filtered.map((article) => <article key={article.title}><PlaceholderMedia className="article-list-media" /><div><StatusPill tone="pink">{article.category}</StatusPill><h2>{article.title}</h2><p>Konten artikel akan dikelola melalui API pada fase backend.</p><small><Clock3 size={13} /> {article.readTime}</small></div></article>)}</div></div></>;
}

export function TestimonialsPage() {
  const testimonials = ['Perawatan dijelaskan dengan rinci dan tidak membuat tegang.', 'Reservasinya mudah dan dokternya ramah.', 'Kliniknya bersih, nyaman, dan jadwalnya tepat waktu.'];
  return <><PageHeader title="Testimoni" subtitle="Cerita dari pasien FDC" /><div className="page-content page-body stack-list testimonial-list">{testimonials.map((text, index) => <article key={text}><div className="testimonial-top"><PlaceholderMedia label="FOTO" className="small-avatar" /><div><strong>Pasien FDC {index + 1}</strong><span className="stars">★★★★★</span></div></div><p>“{text}”</p><small>Testimoni ilustratif untuk MVP frontend.</small></article>)}</div></>;
}

export function TourPage() {
  const { notify } = useToast();
  return <><PageHeader title="Tur Klinik" subtitle="Lihat fasilitas sebelum berkunjung" /><div className="page-content page-body"><PlaceholderMedia label="360° CLINIC VIEW" className="tour-hero"><button className="play-button large" onClick={() => notify('Tur 360° memerlukan aset produksi')}><Play /></button></PlaceholderMedia><section className="facility-list"><h2>Fasilitas klinik</h2>{[['Ruang tunggu nyaman', UsersRound], ['Ruang perawatan modern', Stethoscope], ['Peralatan terstandar', BadgeCheck]].map(([title, Icon]) => { const Component = Icon as typeof UsersRound; return <article key={String(title)}><span><Component /></span><div><h3>{String(title)}</h3><p>Placeholder deskripsi fasilitas dan standar layanan.</p></div></article>; })}</section><Link className="button primary full" to="/klinik">Pilih Klinik</Link></div></>;
}

export function VideosPage() {
  const [category, setCategory] = useState('Semua');
  const { notify } = useToast();
  return <><PageHeader title="Video Edukasi" subtitle="Belajar langsung bersama dokter" /><div className="page-content page-body"><div className="chip-row">{['Semua', '#AskDentist', '#MitosFakta', '#ClinicTour'].map((item) => <Chip key={item} active={category === item} onClick={() => setCategory(item)}>{item}</Chip>)}</div><div className="video-grid">{videos.filter((video) => category === 'Semua' || video.category === category).map((video) => <article key={video.title}><PlaceholderMedia label="VIDEO THUMBNAIL" className="video-grid-media"><button className="play-button" onClick={() => notify('Pemutar video akan terhubung ke konten produksi')}><Play /></button><small>{video.duration}</small></PlaceholderMedia><h2>{video.title}</h2><p>{video.category}</p></article>)}</div></div></>;
}

export function ProfilePage() {
  const { notify } = useToast();
  return <><PageHeader title="Profil" subtitle="Akun dan pengaturan" /><div className="page-content page-body"><div className="profile-card"><span><UserRound /></span><div><h2>Selamat datang</h2><p>Masuk untuk mengakses profil dan riwayat perawatan.</p></div></div><div className="button-row"><button className="button primary" onClick={() => notify('Login akan menggunakan API Go fase 2')}>Login</button><button className="button secondary" onClick={() => notify('Registrasi akan menggunakan API Go fase 2')}>Register</button></div><section className="settings-list"><CardLink to="/membership" icon={Crown} title="Membership" description="Poin dan benefit member" /><CardLink to="/voucher" icon={TicketPercent} title="Voucher Saya" description="Voucher aktif dan riwayat" /><CardLink to="/riwayat-kunjungan" icon={ClipboardCheck} title="Riwayat Kunjungan" description="Catatan perawatan" /><CardLink to="/riwayat-pembayaran" icon={WalletCards} title="Riwayat Pembayaran" description="Status transaksi" /></section><div className="info-callout"><HeartHandshake size={18} /><p>Data pada halaman ini masih berupa demonstrasi frontend.</p></div></div></>;
}

export function NotFoundPage() {
  return <div className="page-content not-found"><span><Search /></span><h1>Halaman tidak ditemukan</h1><p>Alamat yang kamu buka tidak tersedia.</p><Link className="button primary" to="/">Kembali ke Beranda</Link></div>;
}
