export type RuangLingkupId = 'quran' | 'aqidah' | 'akhlak' | 'fiqih' | 'spi' | 'btq';

export type WigginsFacet = 
  | 'Penjelasan' 
  | 'Interpretasi' 
  | 'Aplikasi' 
  | 'Perspektif' 
  | 'Empati' 
  | 'Refleksi';

export interface AyatItem {
  ayatNumber?: number;
  arabic: string;
  transliteration: string;
  translation: string;
}

export interface WigginsAnalysis {
  facet: WigginsFacet;
  questionPrompt: string;
  insight: string;
  practicalExample: string;
}

export interface MateriItem {
  id: string;
  nomor: number;
  scopeId: RuangLingkupId;
  judul: string;
  subJudul?: string;
  ringkasan: string;
  kontenUtama: string;
  ayatAtauDalil?: AyatItem[];
  poinPenting: string[];
  wigginsFacets: WigginsAnalysis[];
  tipsLomba: string;
}

export interface QuizQuestion {
  id: string;
  scopeId: RuangLingkupId;
  materiId: string;
  soal: string;
  arabicText?: string;
  pilihan: string[];
  kunciJawaban: number; // 0, 1, 2, 3 (A, B, C, D)
  pembahasan: string;
  wigginsFacet: WigginsFacet;
  level: 'Mudah' | 'Sedang' | 'HOTS';
}

export interface ScopeCategory {
  id: RuangLingkupId;
  nomorSurat: string;
  title: string;
  subtitle: string;
  iconName: string;
  color: string;
  badgeBg: string;
  totalMateri: number;
}

export interface AppUser {
  role: 'siswa' | 'admin';
  name: string;
  kelas: string;
  school?: string;
  loginTime: string;
}

export interface UserStats {
  xp: number;
  completedMateriIds: string[];
  bookmarkedMateriIds: string[];
  quizScores: {
    [quizSessionId: string]: {
      score: number;
      total: number;
      date: string;
      mode: string;
    };
  };
  unlockedBadges: string[];
}
