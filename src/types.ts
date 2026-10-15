import type { LucideIcon } from 'lucide-react';

export type MenuItem = {
  label: string;
  path: string;
  icon: LucideIcon;
  tone: 'pink' | 'green' | 'yellow' | 'blue' | 'purple' | 'teal' | 'orange';
};

export type Clinic = {
  name: string;
  city: string;
  address: string;
  distance: string;
  hours: string;
};

export type Doctor = {
  name: string;
  specialty: string;
  clinic: string;
  rating: number;
  nextSlot: string;
};

export type PriceItem = {
  name: string;
  category: string;
  price: string;
  note?: string;
};
