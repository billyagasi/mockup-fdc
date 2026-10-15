import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { ArrowLeft, Bell, BriefcaseMedical, ChevronRight, HeartHandshake, Home, Search, UserRound, CalendarCheck2, Image as ImageIcon, X, type LucideIcon } from 'lucide-react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

type ToastContextType = { notify: (message: string) => void };
const ToastContext = createContext<ToastContextType>({ notify: () => undefined });

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (!message) return;
    const timer = window.setTimeout(() => setMessage(''), 2200);
    return () => window.clearTimeout(timer);
  }, [message]);
  const value = useMemo(() => ({ notify: setMessage }), []);
  return <ToastContext.Provider value={value}>{children}<div className={`toast ${message ? 'show' : ''}`} role="status" aria-live="polite">{message}</div></ToastContext.Provider>;
}

export const useToast = () => useContext(ToastContext);

export function Logo() {
  return <Link className="brand" to="/" aria-label="TemanCare"><span className="brand-mark"><HeartHandshake /></span><span><strong>TemanCare</strong><small>homecare tepercaya</small></span></Link>;
}

export function AppHeader() {
  const { notify } = useToast();
  return <header className="app-header"><Logo /><button className="icon-button glass" aria-label="Notifikasi" onClick={() => notify('Belum ada notifikasi baru')}><Bell size={20} /></button></header>;
}

export function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  const navigate = useNavigate();
  return <header className="page-header"><button className="icon-button" aria-label="Kembali" onClick={() => navigate(-1)}><ArrowLeft size={21} /></button><div><h1>{title}</h1>{subtitle && <p>{subtitle}</p>}</div>{action ?? <span className="header-spacer" />}</header>;
}

export function SectionHeader({ title, link, onClick }: { title: string; link?: string; onClick?: () => void }) {
  const content = <><span>Lihat Semua</span><ChevronRight size={14} /></>;
  return <div className="section-header"><h2>{title}</h2>{link ? <Link to={link}>{content}</Link> : onClick ? <button onClick={onClick}>{content}</button> : null}</div>;
}

export function PlaceholderMedia({ label = 'PLACEHOLDER FOTO', className = '', children }: { label?: string; className?: string; children?: ReactNode }) {
  return <div className={`placeholder-media ${className}`}><div className="placeholder-stamp"><ImageIcon size={15} /><span>{label}</span></div>{children}</div>;
}

export function SearchField({ value, onChange, placeholder = 'Cari...' }: { value: string; onChange: (value: string) => void; placeholder?: string }) {
  return <div className="search-field"><Search size={18} aria-hidden="true" /><input aria-label={placeholder} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} /><button type="button" aria-label="Hapus pencarian" className={value ? 'visible' : ''} onClick={() => onChange('')}><X size={16} /></button></div>;
}

export function Chip({ children, active = false, onClick }: { children: ReactNode; active?: boolean; onClick?: () => void }) {
  return <button className={`chip ${active ? 'active' : ''}`} onClick={onClick}>{children}</button>;
}

export function StatusPill({ children, tone = 'green' }: { children: ReactNode; tone?: 'green' | 'yellow' | 'gray' | 'pink' }) {
  return <span className={`status-pill ${tone}`}>{children}</span>;
}

export function BottomNav() {
  const location = useLocation();
  const items = [
    { to: '/', label: 'Beranda', icon: Home },
    { to: '/layanan', label: 'Layanan', icon: BriefcaseMedical },
    { to: '/pesanan', label: 'Pesanan', icon: CalendarCheck2 },
    { to: '/profil', label: 'Profil', icon: UserRound },
  ];
  return <nav className="bottom-nav" aria-label="Navigasi utama">{items.map(({ to, label, icon: Icon }) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => isActive ? 'active' : ''} aria-current={location.pathname === to ? 'page' : undefined}><Icon /><span>{label}</span></NavLink>)}</nav>;
}

export function AppLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [pathname]);
  return <div className="phone-shell"><main>{children}</main><BottomNav /></div>;
}

export function EmptyState({ icon: Icon, title, description, action }: { icon: LucideIcon; title: string; description: string; action?: ReactNode }) {
  return <div className="empty-state"><span><Icon size={28} /></span><h3>{title}</h3><p>{description}</p>{action}</div>;
}

export function CardLink({ to, icon: Icon, title, description }: { to: string; icon: LucideIcon; title: string; description: string }) {
  return <Link to={to} className="card-link"><span><Icon size={21} /></span><div><strong>{title}</strong><p>{description}</p></div><ChevronRight size={18} /></Link>;
}
