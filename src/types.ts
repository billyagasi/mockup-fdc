import type { LucideIcon } from 'lucide-react';

export type Tone = 'pink' | 'green' | 'yellow' | 'blue' | 'purple' | 'teal' | 'orange';
export type MenuItem = { label: string; path: string; icon: LucideIcon; tone: Tone };
export type Service = { id: string; name: string; shortName: string; description: string; price: number; icon: LucideIcon; tone: Tone };
export type Provider = { id: string; name: string; initials: string; role: string; rating: number; reviews: number; distance: number; experience: number; price: number; skills: string[]; availability: string };
