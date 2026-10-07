import React, { useState, useEffect } from 'react';
import { 
  scopeCategories, 
  allMateri, 
  getMateriByScope 
} from './data/allData';
import { MateriItem, RuangLingkupId } from './types';
import { Navbar } from './components/Navbar';
import { ScopeCard } from './components/ScopeCard';
import { MateriModal } from './components/MateriModal';
import { CbtExamModal } from './components/CbtExamModal';
import { TajwidLab } from './components/TajwidLab';
import { WigginsChallenge } from './components/WigginsChallenge';
import { TransliterasiTrainer } from './components/TransliterasiTrainer';
import { HafalanTrainer } from './components/HafalanTrainer';
import { ZakatCalculator } from './components/ZakatCalculator';
import { AkhlakGlossary } from './components/AkhlakGlossary';
import { LoginPage } from './components/LoginPage';
import { AdminPanelModal } from './components/AdminPanelModal';
import { AppUser } from './types';
import { 
  getOrCreateStudentRecord, 
  updateStudentProgress, 
  getAllStudents 
} from './services/cloudSheetService';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  BookMarked, 
  Award, 
  ChevronRight,
  Flame,
  Search,
  Compass,
  ArrowRight,
  Calculator,
  HeartHandshake,
  Lock,
  X,
  ShieldAlert
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from './utils/audio';

export default function App() {
  const [activeTab, setActiveTab] = useState<'materi' | 'cbt' | 'tajwid' | 'wiggins' | 'transliterasi' | 'hafalan' | 'zakat' | 'akhlak_terms'>('materi');
  const [selectedScopeId, setSelectedScopeId] = useState<RuangLingkupId>('quran');
  const [selectedMateri, setSelectedMateri] = useState<MateriItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // LocalStorage state
  const [xp, setXp] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mapsi_xp');
      return saved ? parseInt(saved, 10) : 50; // Starter 50 XP
    }
    return 50;
  });

  const [completedIds, setCompletedIds] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mapsi_completed_ids');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mapsi_bookmarked_ids');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('mapsi_xp', xp.toString());
  }, [xp]);

  useEffect(() => {
    localStorage.setItem('mapsi_completed_ids', JSON.stringify(completedIds));
  }, [completedIds]);

  useEffect(() => {
    localStorage.setItem('mapsi_bookmarked_ids', JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  // User Authentication state
  const [currentUser, setCurrentUser] = useState<AppUser | null>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mapsi_user');
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });

  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showAdminSecretModal, setShowAdminSecretModal] = useState(false);
  const [secretUsername, setSecretUsername] = useState('');
  const [secretPassword, setSecretPassword] = useState('');
  const [secretError, setSecretError] = useState('');

  // Global Keyboard shortcut listener for Alt + Shift + A
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.shiftKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        sounds.playClick();
        if (currentUser?.role === 'admin') {
          setShowAdminPanel(true);
        } else {
          setShowAdminSecretModal(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentUser]);

  const handleLogin = (user: AppUser) => {
    setCurrentUser(user);
    localStorage.setItem('mapsi_user', JSON.stringify(user));
    if (user.role === 'siswa') {
      const record = getOrCreateStudentRecord(user.name, user.kelas, user.school || 'SD Negeri Kauman 01');
      if (record.xp && record.xp > xp) {
        setXp(record.xp);
      }
    }
  };

  const handleLogout = () => {
    if (confirm('Apakah Anda ingin keluar / mengganti akun santri?')) {
      setCurrentUser(null);
      localStorage.removeItem('mapsi_user');
      sounds.playClick();
    }
  };

  const handleSecretAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setSecretError('');
    const validUsers = ['admin', 'pembina', 'guru', 'juri'];
    const validPass = ['adminmapsi2026', 'admin2026', 'admin', 'admin123', '123456'];

    if (
      validUsers.includes(secretUsername.trim().toLowerCase()) &&
      validPass.includes(secretPassword.trim().toLowerCase())
    ) {
      sounds.playFanfare();
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.5 }
      });
      const adminUser: AppUser = {
        role: 'admin',
        name: 'Pembina / Administrator MAPSI',
        kelas: 'Official KKG PAI Batang',
        school: 'Kafilah Lomba MAPSI XXVII 2026',
        loginTime: new Date().toISOString()
      };
      handleLogin(adminUser);
      setShowAdminSecretModal(false);
      setShowAdminPanel(true);
    } else {
      setSecretError('Username atau Password Admin salah! (Gunakan: admin / adminmapsi2026)');
      sounds.playWrong();
    }
  };

  const renderSecretAdminModal = () => (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border-4 border-amber-400 relative space-y-5">
        <button
          onClick={() => {
            setShowAdminSecretModal(false);
            setSecretError('');
          }}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-1.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-900 mx-auto flex items-center justify-center shadow-lg shadow-amber-500/30">
            <Lock className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-black tracking-widest uppercase text-amber-600 block">
            AKSES KHUSUS PEMBINA (ALT + SHIFT + A)
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Login Pembina & Guru
          </h2>
          <p className="text-xs text-slate-500">
            Masuk untuk mengakses Rekapitulasi Nilai & Manajemen Pembinaan MAPSI
          </p>
        </div>

        {secretError && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{secretError}</span>
          </div>
        )}

        <form onSubmit={handleSecretAdminLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700">Username Admin:</label>
            <input
              type="text"
              required
              value={secretUsername}
              onChange={(e) => setSecretUsername(e.target.value)}
              placeholder="admin"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:border-amber-500 bg-slate-50"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="block text-xs font-bold text-slate-700">Password Admin:</label>
              <span className="text-[10px] text-slate-500 font-medium">Default: adminmapsi2026</span>
            </div>
            <input
              type="password"
              required
              value={secretPassword}
              onChange={(e) => setSecretPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:border-amber-500 bg-slate-50"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm shadow-md cursor-pointer transition-all"
          >
            Masuk ke Panel Pembina
          </button>
        </form>
      </div>
    </div>
  );

  // If user has not logged in, show student login page
  if (!currentUser) {
    return (
      <>
        <LoginPage 
          onLogin={handleLogin} 
          onAdminTrigger={() => setShowAdminSecretModal(true)} 
        />
        {showAdminSecretModal && renderSecretAdminModal()}
      </>
    );
  }

  const handleEarnXp = (amount: number) => {
    setXp(prev => {
      const next = prev + amount;
      if (currentUser && currentUser.role === 'siswa') {
        updateStudentProgress(currentUser.name, { xp: next });
      }
      return next;
    });
  };

  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      return [...prev, id];
    });
  };

  const handleCompleteMateri = (id: string) => {
    if (!completedIds.includes(id)) {
      const nextList = [...completedIds, id];
      setCompletedIds(nextList);
      handleEarnXp(20);
      if (currentUser && currentUser.role === 'siswa') {
        updateStudentProgress(currentUser.name, { 
          completedMateriCount: nextList.length 
        });
      }
    }
  };

  // Filtered materi list
  const currentScopeMateri = getMateriByScope(selectedScopeId);

  const displayedMateri = showBookmarks
    ? allMateri.filter(m => bookmarkedIds.includes(m.id))
    : searchQuery.trim() !== ''
      ? allMateri.filter(m => 
          m.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (m.subJudul && m.subJudul.toLowerCase().includes(searchQuery.toLowerCase())) ||
          m.ringkasan.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.kontenUtama.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : currentScopeMateri;

  const currentCategory = scopeCategories.find(c => c.id === selectedScopeId) || scopeCategories[0];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Global Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        xp={xp}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        bookmarkedCount={bookmarkedIds.length}
        setShowBookmarks={setShowBookmarks}
        showBookmarks={showBookmarks}
        user={currentUser}
        onLogout={handleLogout}
        onOpenAdmin={() => setShowAdminPanel(true)}
      />

      {/* Main App Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-8">
        
        {/* TAB 1: MATERI 6 RUANG LINGKUP */}
        {activeTab === 'materi' && !showBookmarks && searchQuery.trim() === '' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Hero Welcome Banner */}
            <div className="relative rounded-3xl overflow-hidden bg-linear-to-r from-emerald-900 via-teal-900 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-emerald-800/40">
              <div className="relative z-10 max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  KURIKULUM RESMI LOMBA MAPSI XXVII TAHUN 2026
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                  Kuasai 72 Materi PAI-BTQ dengan Aspek <span className="text-amber-300">Wiggins & McTighe</span>
                </h1>
                <p className="text-emerald-100 text-xs sm:text-sm md:text-base leading-relaxed">
                  Platform belajar interaktif terstruktur: Al-Qur'an Hadits, Aqidah, Akhlak, Fiqih, SPI, dan BTQ. Belajar menyenangkan dengan intisari dalil, kuis CBT, dan pendalaman pemahaman bermakna.
                </p>

                {/* Quick Shortcuts */}
                <div className="flex items-center gap-2.5 pt-2 flex-wrap">
                  <button
                    onClick={() => { setActiveTab('cbt'); sounds.playClick(); }}
                    className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md flex items-center gap-2 cursor-pointer transition-transform hover:scale-102"
                  >
                    <Award className="w-4 h-4" />
                    <span>Mulai Simulasi CBT Lomba</span>
                  </button>

                  <button
                    onClick={() => { setActiveTab('zakat'); sounds.playClick(); }}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm backdrop-blur-xs flex items-center gap-2 cursor-pointer"
                  >
                    <Calculator className="w-4 h-4 text-emerald-300" />
                    <span>Latihan Hitung Zakat</span>
                  </button>

                  <button
                    onClick={() => { setActiveTab('akhlak_terms'); sounds.playClick(); }}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm backdrop-blur-xs flex items-center gap-2 cursor-pointer"
                  >
                    <HeartHandshake className="w-4 h-4 text-amber-300" />
                    <span>Kamus Akhlak</span>
                  </button>

                  <button
                    onClick={() => { setActiveTab('tajwid'); sounds.playClick(); }}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm backdrop-blur-xs flex items-center gap-2 cursor-pointer"
                  >
                    <span>Tajwid Lab</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Decorative Accent Badges */}
              <div className="hidden lg:flex absolute right-10 bottom-8 items-center gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <span className="text-xs font-bold text-emerald-200 block uppercase">Total Materi</span>
                  <span className="text-3xl font-black text-white">72 Bab</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <span className="text-xs font-bold text-emerald-200 block uppercase">Ruang Lingkup</span>
                  <span className="text-3xl font-black text-amber-300">6 Bidang</span>
                </div>
              </div>
            </div>

            {/* Scope Category Grid (A through F) */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-emerald-600" />
                  Pilih Ruang Lingkup Materi
                </h2>
                <span className="text-xs font-bold text-slate-600">
                  Sesuai Lampiran Juknis MAPSI Batang
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {scopeCategories.map((cat) => (
                  <ScopeCard
                    key={cat.id}
                    category={cat}
                    materiList={getMateriByScope(cat.id)}
                    completedIds={completedIds}
                    isSelected={selectedScopeId === cat.id}
                    onSelect={() => {
                      setSelectedScopeId(cat.id);
                      sounds.playClick();
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Selected Scope Materi List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 flex-wrap gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    Daftar Materi: {currentCategory.title}
                  </h3>
                  <p className="text-xs text-slate-600">
                    {currentCategory.subtitle}
                  </p>
                </div>

                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  {currentScopeMateri.length} Materi Lengkap
                </span>
              </div>

              {/* Grid of Materi Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayedMateri.map((materi) => {
                  const isDone = completedIds.includes(materi.id);
                  const isBookmarked = bookmarkedIds.includes(materi.id);

                  return (
                    <div
                      key={materi.id}
                      onClick={() => {
                        setSelectedMateri(materi);
                        sounds.playClick();
                      }}
                      className="p-5 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-500/60 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-slate-100 text-slate-700 group-hover:bg-emerald-100 group-hover:text-emerald-800 transition-colors">
                            #{materi.nomor}
                          </span>

                          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                            {/* Bookmark icon button */}
                            <button
                              onClick={() => {
                                handleToggleBookmark(materi.id);
                                sounds.playClick();
                              }}
                              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                                isBookmarked ? 'text-amber-500 bg-amber-50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                              }`}
                            >
                              <BookMarked className="w-4 h-4 fill-current" />
                            </button>

                            {/* Done badge */}
                            {isDone && (
                              <span className="text-emerald-600" title="Sudah Selesai">
                                <CheckCircle2 className="w-4 h-4" />
                              </span>
                            )}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-extrabold text-base text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                            {materi.judul}
                          </h4>
                          {materi.subJudul && (
                            <p className="text-xs font-semibold text-slate-600 mt-0.5 truncate">
                              {materi.subJudul}
                            </p>
                          )}
                        </div>

                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {materi.ringkasan}
                        </p>
                      </div>

                      <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-emerald-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>Buka Pembahasan</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>

                        <span className="text-[10px] font-bold text-slate-600">
                          {materi.poinPenting.length} Poin Kunci
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* BOOKMARKS OR SEARCH RESULTS VIEW */}
        {(showBookmarks || searchQuery.trim() !== '') && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h2 className="text-xl font-black text-slate-900">
                  {showBookmarks ? '⭐ Materi yang Kamu Simpan' : `🔍 Hasil Pencarian: "${searchQuery}"`}
                </h2>
                <p className="text-xs text-slate-500">
                  Ditemukan {displayedMateri.length} materi
                </p>
              </div>

              {showBookmarks && (
                <button
                  onClick={() => setShowBookmarks(false)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                >
                  Kembali ke Semua Materi
                </button>
              )}
            </div>

            {displayedMateri.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-3">
                <Search className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="font-bold text-slate-700">Tidak ada materi yang cocok</h3>
                <p className="text-xs text-slate-400">
                  Coba kata kunci lain atau buka kembali seluruh ruang lingkup materi.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayedMateri.map((materi) => (
                  <div
                    key={materi.id}
                    onClick={() => {
                      setSelectedMateri(materi);
                      sounds.playClick();
                    }}
                    className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase text-emerald-700">
                          Ruang Lingkup {materi.scopeId.toUpperCase()} • #{materi.nomor}
                        </span>
                        {completedIds.includes(materi.id) && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        )}
                      </div>
                      <h4 className="font-extrabold text-base text-slate-900">
                        {materi.judul}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2">
                        {materi.ringkasan}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                      <span>Pelajari Sekarang</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: CBT EXAM SIMULATOR */}
        {activeTab === 'cbt' && (
          <CbtExamModal 
            onEarnXp={handleEarnXp} 
            studentName={currentUser?.name}
            schoolName={currentUser?.school}
            onFinishExam={(score) => {
              if (currentUser && currentUser.role === 'siswa') {
                updateStudentProgress(currentUser.name, { 
                  lastCbtScore: score,
                  cbtDate: new Date().toISOString()
                });
              }
            }}
          />
        )}

        {/* TAB: KALKULATOR & LATIHAN HITUNG ZAKAT */}
        {activeTab === 'zakat' && (
          <ZakatCalculator 
            onEarnXp={(amt) => {
              handleEarnXp(amt);
              if (currentUser && currentUser.role === 'siswa') {
                const cur = getAllStudents().find(s => s.name.toLowerCase() === currentUser.name.toLowerCase());
                updateStudentProgress(currentUser.name, {
                  zakatDoneCount: (cur?.zakatDoneCount || 0) + 1
                });
              }
            }} 
          />
        )}

        {/* TAB: KAMUS AKHLAK MAHMUDAH VS MAZMUMAH */}
        {activeTab === 'akhlak_terms' && (
          <AkhlakGlossary 
            onEarnXp={(amt) => {
              handleEarnXp(amt);
              if (currentUser && currentUser.role === 'siswa') {
                const cur = getAllStudents().find(s => s.name.toLowerCase() === currentUser.name.toLowerCase());
                updateStudentProgress(currentUser.name, {
                  akhlakQuizCount: (cur?.akhlakQuizCount || 0) + 1
                });
              }
            }} 
          />
        )}

        {/* TAB 3: TAJWID LAB */}
        {activeTab === 'tajwid' && (
          <TajwidLab onEarnXp={handleEarnXp} />
        )}

        {/* TAB 4: WIGGINS CHALLENGE */}
        {activeTab === 'wiggins' && (
          <WigginsChallenge onEarnXp={handleEarnXp} />
        )}

        {/* TAB 5: TRANSLITERASI SKB */}
        {activeTab === 'transliterasi' && (
          <TransliterasiTrainer onEarnXp={handleEarnXp} />
        )}

        {/* TAB 6: HAFALAN TRAINER */}
        {activeTab === 'hafalan' && (
          <HafalanTrainer onEarnXp={handleEarnXp} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-8 text-center text-xs text-slate-600 space-y-2">
        <div className="flex items-center justify-center gap-2 font-bold text-slate-800">
          <BookOpen className="w-4 h-4 text-emerald-700" />
          <span>Sahabat MAPSI • Platform Pembelajaran PAI-BTQ Mandiri & Menyenangkan</span>
        </div>
        <p className="max-w-xl mx-auto px-4 text-slate-600">
          Dirancang berdasarkan Blue Print Materi Lomba Mata Pelajaran PAI-BTQ Juknis MAPSI XXVII Tahun 2026 Kabupaten Batang dengan Aspek Pemahaman Wiggins & McTighe.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 pt-1">
          <p className="text-[11px] text-slate-500">
            © 2026 Sahabat MAPSI • Siap Berprestasi Menjadi Juara!
          </p>
          <button
            onClick={() => {
              if (currentUser?.role === 'admin') {
                setShowAdminPanel(true);
              } else {
                setShowAdminSecretModal(true);
              }
            }}
            className="text-[11px] text-slate-400 hover:text-emerald-700 transition-colors cursor-pointer flex items-center gap-1.5"
            title="Akses Pembina / Admin (Alt + Shift + A)"
          >
            <Lock className="w-3 h-3" />
            <span>Login Pembina (Alt+Shift+A)</span>
          </button>
        </div>
      </footer>

      {/* Detail Materi Modal Reader */}
      {selectedMateri && (
        <MateriModal
          materi={selectedMateri}
          onClose={() => setSelectedMateri(null)}
          isBookmarked={bookmarkedIds.includes(selectedMateri.id)}
          onToggleBookmark={handleToggleBookmark}
          isCompleted={completedIds.includes(selectedMateri.id)}
          onCompleteMateri={handleCompleteMateri}
          allScopeMateri={getMateriByScope(selectedMateri.scopeId)}
          onSelectMateri={(item) => setSelectedMateri(item)}
        />
      )}

      {/* Admin Panel Modal */}
      {showAdminPanel && currentUser && (
        <AdminPanelModal
          user={currentUser}
          isOpen={showAdminPanel}
          onClose={() => setShowAdminPanel(false)}
          xp={xp}
          onSetXp={setXp}
          completedIds={completedIds}
          onResetProgress={() => {
            setCompletedIds([]);
            localStorage.removeItem('mapsi_completed_ids');
          }}
          onLogout={() => {
            setShowAdminPanel(false);
            handleLogout();
          }}
        />
      )}

      {/* Secret Admin Login Modal when inside dashboard */}
      {showAdminSecretModal && renderSecretAdminModal()}
    </div>
  );
}
