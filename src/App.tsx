import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout, ToastProvider } from './components';
import { BookingPage, EducationPage, HomePage, JoinProviderPage, MedicalRecordsPage, NotFoundPage, OrdersPage, ProfilePage, ProviderDashboardPage, ProviderDetailPage, ProviderRequestPage, ProvidersPage, RequestPage, ServicesPage } from './pages';

export function App() {
  return <ToastProvider><AppLayout><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/layanan" element={<ServicesPage />} />
    <Route path="/provider" element={<ProvidersPage />} />
    <Route path="/provider/:providerId" element={<ProviderDetailPage />} />
    <Route path="/pesan/:providerId" element={<BookingPage />} />
    <Route path="/permintaan" element={<RequestPage />} />
    <Route path="/pesanan" element={<OrdersPage />} />
    <Route path="/rekam-medis" element={<MedicalRecordsPage />} />
    <Route path="/edukasi" element={<EducationPage />} />
    <Route path="/profil" element={<ProfilePage />} />
    <Route path="/gabung-provider" element={<JoinProviderPage />} />
    <Route path="/dashboard-provider" element={<ProviderDashboardPage />} />
    <Route path="/permintaan-provider" element={<ProviderRequestPage />} />
    <Route path="/home" element={<Navigate to="/" replace />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes></AppLayout></ToastProvider>;
}
