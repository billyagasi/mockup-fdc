import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout, ToastProvider } from './components';
import { ArticlesPage, ClinicsPage, DoctorsPage, HomePage, InsurancePage, MembershipPage, NotFoundPage, PaymentHistoryPage, PricelistPage, ProfilePage, PromosPage, ReservationPage, TestimonialsPage, TourPage, VideosPage, VisitHistoryPage, VouchersPage } from './pages';

export function App() {
  return <ToastProvider><AppLayout><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/promo" element={<PromosPage />} />
    <Route path="/reservasi" element={<ReservationPage />} />
    <Route path="/pricelist" element={<PricelistPage />} />
    <Route path="/klinik" element={<ClinicsPage />} />
    <Route path="/riwayat-pembayaran" element={<PaymentHistoryPage />} />
    <Route path="/dokter" element={<DoctorsPage />} />
    <Route path="/asuransi" element={<InsurancePage />} />
    <Route path="/voucher" element={<VouchersPage />} />
    <Route path="/riwayat-kunjungan" element={<VisitHistoryPage />} />
    <Route path="/membership" element={<MembershipPage />} />
    <Route path="/artikel" element={<ArticlesPage />} />
    <Route path="/testimoni" element={<TestimonialsPage />} />
    <Route path="/tur-klinik" element={<TourPage />} />
    <Route path="/video" element={<VideosPage />} />
    <Route path="/profil" element={<ProfilePage />} />
    <Route path="/home" element={<Navigate to="/" replace />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes></AppLayout></ToastProvider>;
}
