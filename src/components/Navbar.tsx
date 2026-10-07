import React from 'react';
import { 
  BookOpen, 
  Award, 
  Volume2, 
  VolumeX, 
  Flame, 
  Search, 
  Sparkles, 
  BookMarked, 
  Microscope, 
  Compass, 
  Languages, 
  Headphones,
  Calculator,
  HeartHandshake,
  User,
  LogOut,
  ShieldCheck
} from 'lucide-react';
import { sounds } from '../utils/audio';
import { AppUser } from '../types';

interface NavbarProps {
  activeTab: 'materi' | 'cbt' | 'tajwid' | 'wiggins' | 'transliterasi' | 'hafalan' | 'zakat' | 'akhlak_terms';
  setActiveTab: (tab: 'materi' | 'cbt' | 'tajwid' | 'wiggins' | 'transliterasi' | 'hafalan' | 'zakat' | 'akhlak_terms') => void;
  xp: number;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  bookmarkedCount: number;
  setShowBookmarks: (show: boolean) => void;
  showBookmarks: boolean;
  user?: AppUser | null;
  onLogout?: () => void;
  onOpenAdmin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  xp,
  soundEnabled,
  setSoundEnabled,
  searchQuery,
  setSearchQuery,
  bookmarkedCount,
  setShowBookmarks,
  showBookmarks,
  user,
  onLogout,
  onOpenAdmin
}) => {
  const getLevel = (xp: number) => {
    if (xp >= 1000) return { title: 'Juara Umum MAPSI', color: 'from-amber-500 to-yellow-400', levelNum: 5 };
    if (xp >= 600) return { title: 'Kandidat Juara 1', color: 'from-purple-500 to-indigo-500', levelNum: 4 };
    if (xp >= 300) return { title: 'Santri Unggulan', color: 'from-emerald-500 to-teal-500', levelNum: 3 };
    if (xp >= 100) return { title: 'Santri Berbakat', color: 'from-blue-500 to-cyan-500', levelNum: 2 };
    return { title: 'Santri Perintis', color: 'from-slate-500 to-slate-400', levelNum: 1 };
  };

  const level = getLevel(xp);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sounds.enabled = next;
    if (next) sounds.playClick();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-2 sm:gap-4">
          
          {/* Logo & Identity */}
          <div 
            onClick={() => { setActiveTab('materi'); setShowBookmarks(false); }}
            className="flex items-center gap-3 cursor-pointer select-none group shrink-0"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-linear-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/25 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base md:text-xl tracking-tight text-slate-900">
                  Sahabat <span className="text-emerald-700">MAPSI</span>
                </span>
                <span className="hidden sm:inline-flex px-2 py-0.5 text-[11px] font-bold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  XXVII 2026
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-600 hidden md:block">
                PAI & BTQ • Blue Print Resmi Standar Wiggins & McTighe
              </p>
            </div>
          </div>

          {/* Quick Search */}
          <div className="relative flex-1 max-w-xs md:max-w-md hidden sm:block">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari materi, surah, tajwid, hadis..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs md:text-sm bg-slate-100 hover:bg-slate-200/70 focus:bg-white border border-transparent focus:border-emerald-500 focus:outline-none transition-all placeholder:text-slate-500"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-700 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Gamification & Controls */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            {/* Level & XP */}
            <div className="flex items-center gap-2 px-2.5 py-1.5 md:px-3 md:py-2 rounded-xl bg-amber-50 border border-amber-200/80">
              <div className="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                {level.levelNum}
              </div>
              <div className="hidden lg:block text-left">
                <div className="text-[10px] uppercase font-bold tracking-wider text-amber-700">
                  {level.title}
                </div>
                <div className="text-xs font-extrabold text-amber-900 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                  {xp} XP
                </div>
              </div>
              <div className="lg:hidden text-xs font-bold text-amber-900 flex items-center gap-0.5">
                <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                {xp}
              </div>
            </div>

            {/* Bookmarks Toggle */}
            <button
              onClick={() => {
                setShowBookmarks(!showBookmarks);
                sounds.playClick();
              }}
              title="Materi Tersimpan"
              className={`p-2 rounded-xl border transition-all cursor-pointer relative ${
                showBookmarks 
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm' 
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <BookMarked className="w-4 h-4 md:w-5 md:h-5" />
              {bookmarkedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-black rounded-full flex items-center justify-center">
                  {bookmarkedCount}
                </span>
              )}
            </button>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? 'Matikan Suara' : 'Nyalakan Suara'}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
              ) : (
                <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-slate-400" />
              )}
            </button>

            {/* User Profile / Admin Badge */}
            {user && (
              <div className="flex items-center gap-1.5 pl-1 border-l border-slate-200">
                {user.role === 'admin' ? (
                  <button
                    onClick={onOpenAdmin}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-xs cursor-pointer transition-transform hover:scale-102"
                    title="Buka Dashboard Pembina (Alt+Shift+A)"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span className="hidden sm:inline">Panel Pembina</span>
                  </button>
                ) : (
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-950 text-xs">
                    <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">
                      <User className="w-3 h-3" />
                    </div>
                    <div className="text-left leading-tight">
                      <span className="font-extrabold max-w-[110px] truncate block text-[11px] text-slate-900">{user.name}</span>
                      <span className="text-[10px] text-emerald-700 font-bold">{user.kelas}</span>
                    </div>
                  </div>
                )}

                {/* Logout Button */}
                {onLogout && (
                  <button
                    onClick={onLogout}
                    title="Keluar / Ganti Santri"
                    className="flex items-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-2 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 font-extrabold text-xs transition-all cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5 md:w-4 md:h-4 text-rose-600" />
                    <span>Keluar</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-2 scrollbar-none text-xs md:text-sm font-semibold select-none border-t border-slate-100 pt-2">
          <button
            onClick={() => { setActiveTab('materi'); setShowBookmarks(false); sounds.playClick(); }}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'materi' && !showBookmarks
                ? 'bg-emerald-600 text-white shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Materi 6 Ruang Lingkup</span>
          </button>

          <button
            onClick={() => { setActiveTab('cbt'); setShowBookmarks(false); sounds.playClick(); }}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'cbt'
                ? 'bg-emerald-600 text-white shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Award className="w-4 h-4 text-amber-300" />
            <span>Simulasi Ujian CBT Lomba</span>
          </button>

          <button
            onClick={() => { setActiveTab('zakat'); setShowBookmarks(false); sounds.playClick(); }}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'zakat'
                ? 'bg-emerald-600 text-white shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span>Hitung Zakat</span>
          </button>

          <button
            onClick={() => { setActiveTab('akhlak_terms'); setShowBookmarks(false); sounds.playClick(); }}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'akhlak_terms'
                ? 'bg-emerald-600 text-white shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <HeartHandshake className="w-4 h-4 text-amber-400" />
            <span>Kamus Akhlak</span>
          </button>

          <button
            onClick={() => { setActiveTab('tajwid'); setShowBookmarks(false); sounds.playClick(); }}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'tajwid'
                ? 'bg-emerald-600 text-white shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Microscope className="w-4 h-4 text-teal-400" />
            <span>Laboratorium Tajwid</span>
          </button>

          <button
            onClick={() => { setActiveTab('wiggins'); setShowBookmarks(false); sounds.playClick(); }}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'wiggins'
                ? 'bg-emerald-600 text-white shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Compass className="w-4 h-4 text-sky-400" />
            <span>Tantangan 6 Aspek Wiggins</span>
          </button>

          <button
            onClick={() => { setActiveTab('transliterasi'); setShowBookmarks(false); sounds.playClick(); }}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'transliterasi'
                ? 'bg-emerald-600 text-white shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Languages className="w-4 h-4 text-indigo-400" />
            <span>Transliterasi SKB</span>
          </button>

          <button
            onClick={() => { setActiveTab('hafalan'); setShowBookmarks(false); sounds.playClick(); }}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'hafalan'
                ? 'bg-emerald-600 text-white shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Headphones className="w-4 h-4 text-rose-400" />
            <span>Pelatih Hafalan Ayat</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
