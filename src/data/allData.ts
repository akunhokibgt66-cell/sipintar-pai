import { MateriItem, ScopeCategory } from '../types';
import { quranHaditsData } from './quranHaditsData';
import { aqidahData } from './aqidahData';
import { akhlakData } from './akhlakData';
import { fiqihData } from './fiqihData';
import { spiData } from './spiData';
import { btqData } from './btqData';

export const scopeCategories: ScopeCategory[] = [
  {
    id: 'quran',
    nomorSurat: 'A',
    title: 'Al-Qur’an & Hadits',
    subtitle: '15 Materi Surah Pilihan, Ayat Pilihan & Hadis Keragaman',
    iconName: 'BookOpen',
    color: 'emerald',
    badgeBg: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20',
    totalMateri: quranHaditsData.length
  },
  {
    id: 'aqidah',
    nomorSurat: 'B',
    title: 'Aqidah / Keimanan',
    subtitle: '10 Asmaul Husna & 6 Rukun Iman Komprehensif',
    iconName: 'ShieldCheck',
    color: 'sky',
    badgeBg: 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20',
    totalMateri: aqidahData.length
  },
  {
    id: 'akhlak',
    nomorSurat: 'C',
    title: 'Akhlak / Karakter',
    subtitle: '15 Nilai Budi Pekerti, Kalimah Thayyibah & Kepedulian',
    iconName: 'HeartHandshake',
    color: 'amber',
    badgeBg: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
    totalMateri: akhlakData.length
  },
  {
    id: 'fiqih',
    nomorSurat: 'D',
    title: 'Fiqih / Ibadah',
    subtitle: '13 Praktik Ibadah: Salat, Balig, Thaharah, Puasa & Zakat',
    iconName: 'Sparkles',
    color: 'indigo',
    badgeBg: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20',
    totalMateri: fiqihData.length
  },
  {
    id: 'spi',
    nomorSurat: 'E',
    title: 'Sejarah Peradaban Islam',
    subtitle: '12 Kisah Teladan Nabi, Sirah Nabawiyah & Khulafaur Rasyidin',
    iconName: 'Compass',
    color: 'rose',
    badgeBg: 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20',
    totalMateri: spiData.length
  },
  {
    id: 'btq',
    nomorSurat: 'F',
    title: 'BTQ & Ilmu Tajwid',
    subtitle: '10 Kaidah Baca Tulis: Nun/Mim Mati, Mad, Qalqalah & Transliterasi',
    iconName: 'Languages',
    color: 'teal',
    badgeBg: 'bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/20',
    totalMateri: btqData.length
  }
];

export const allMateri: MateriItem[] = [
  ...quranHaditsData,
  ...aqidahData,
  ...akhlakData,
  ...fiqihData,
  ...spiData,
  ...btqData
];

export function getMateriByScope(scopeId: string): MateriItem[] {
  return allMateri.filter(m => m.scopeId === scopeId);
}

export function getMateriById(id: string): MateriItem | undefined {
  return allMateri.find(m => m.id === id);
}

export {
  quranHaditsData,
  aqidahData,
  akhlakData,
  fiqihData,
  spiData,
  btqData
};
