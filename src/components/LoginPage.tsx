import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Lock, 
  User, 
  GraduationCap, 
  School, 
  KeyRound, 
  Eye, 
  EyeOff, 
  ShieldAlert, 
  ShieldCheck, 
  Award, 
  CheckCircle2,
  X,
  ArrowRight
} from 'lucide-react';
import { AppUser } from '../types';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';

interface LoginPageProps {
  onLogin: (user: AppUser) => void;
  onAdminTrigger?: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onAdminTrigger }) => {
  // Siswa form state
  const [nama, setNama] = useState('');
  const [kelas, setKelas] = useState('5');
  const [sekolah, setSekolah] = useState('');
  const [password, setPassword] = useState('mapsi2026');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Hidden admin modal state
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminPassword, setShowAdminPassword] = useState(false);
  const [adminError, setAdminError] = useState('');

  // Keyboard shortcut listener: Alt + Shift + A
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.shiftKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        setShowAdminModal(true);
        sounds.playClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!nama.trim()) {
      setErrorMsg('Silakan masukkan nama lengkap siswa!');
      sounds.playWrong();
      return;
    }

    // Default password check: 'mapsi2026' or 'santri2026' or '123456'
    const validPasswords = ['mapsi2026', 'santri2026', '123456'];
    if (!validPasswords.includes(password.trim().toLowerCase())) {
      setErrorMsg('Password salah! Gunakan password default: mapsi2026');
      sounds.playWrong();
      return;
    }

    const newUser: AppUser = {
      role: 'siswa',
      name: nama.trim(),
      kelas: kelas.trim() ? `Kelas ${kelas}` : 'Kelas 5',
      school: sekolah.trim() || 'SD Negeri Unggulan',
      loginTime: new Date().toISOString()
    };

    sounds.playCorrect();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });

    onLogin(newUser);
  };

  const handleAdminSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdminError('');

    const pass = adminPassword.trim();
    let ok = false;
    try {
      const { verifyAdminCloud } = await import('@/lib/students.functions');
      ok = (await verifyAdminCloud({ data: { password: pass } })).ok;
    } catch {
      ok = false;
    }

    if (ok) {
      sessionStorage.setItem('mapsi_admin_key', pass);
      setAdminPassword('');
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

      setShowAdminModal(false);
      onLogin(adminUser);
    } else {
      setAdminError('Kata sandi pembina salah. Hubungi koordinator untuk mendapatkan akses.');
      sounds.playWrong();
    }
  };

  const handleDemoFill = () => {
    setNama('Ahmad Fauzan Pratama');
    setKelas('5');
    setSekolah('SD Negeri Kauman 01');
    setPassword('mapsi2026');
    sounds.playClick();
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-950 via-teal-900 to-slate-950 flex flex-col items-center justify-center p-4 sm:p-6 text-slate-800 relative overflow-hidden">
      {/* Decorative Islamic Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Main Login Card */}
      <div className="w-full max-w-lg bg-white/98 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 md:p-10 relative z-10 space-y-6">
        
        {/* Header Branding */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-2xl bg-linear-to-tr from-emerald-600 to-teal-500 mx-auto flex items-center justify-center text-white shadow-xl shadow-emerald-600/30">
            <BookOpen className="w-8 h-8" />
          </div>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
            <Sparkles className="w-3 h-3 text-emerald-600" />
            LOMBA MAPSI XXVII TAHUN 2026
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Portal Belajar <span className="text-emerald-700">PAI & BTQ</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
            Selamat datang, santri berprestasi! Masuk untuk mulai belajar materi dan simulasi lomba.
          </p>
        </div>

        {/* Error Notification */}
        {errorMsg && (
          <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold flex items-center gap-2 animate-in fade-in">
            <ShieldAlert className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Student Login Form */}
        <form onSubmit={handleStudentSubmit} className="space-y-4">
          {/* Field: Nama Siswa */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700">
              Nama Lengkap Siswa:
            </label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                required
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Contoh: Muhammad Ihsan"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/50"
              />
            </div>
          </div>

          {/* Field: Kelas & Asal Sekolah */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">
                Tingkat Kelas:
              </label>
              <div className="relative">
                <GraduationCap className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <select
                  value={kelas}
                  onChange={(e) => setKelas(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:border-emerald-600 bg-slate-50/50 cursor-pointer"
                >
                  <option value="4">Kelas 4 SD</option>
                  <option value="5">Kelas 5 SD</option>
                  <option value="6">Kelas 6 SD</option>
                  <option value="Lainnya">Kafilah Terbuka</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">
                Asal Sekolah / Kafilah:
              </label>
              <div className="relative">
                <School className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={sekolah}
                  onChange={(e) => setSekolah(e.target.value)}
                  placeholder="Contoh: SD Negeri 01 Batang"
                  className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:border-emerald-600 bg-slate-50/50"
                />
              </div>
            </div>
          </div>

          {/* Field: Password Siswa */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-slate-700">
                Password:
              </label>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                Default: <strong>mapsi2026</strong>
              </span>
            </div>
            <div className="relative">
              <KeyRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan mapsi2026"
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:border-emerald-600 bg-slate-50/50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer p-1"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <span>Masuk ke Ruang Belajar</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Quick Demo Helper */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
          <button
            type="button"
            onClick={handleDemoFill}
            className="text-emerald-700 hover:text-emerald-800 font-bold hover:underline cursor-pointer"
          >
            ⚡ Isi Data Contoh Otomatis
          </button>

          {/* Discreet Admin Link */}
          <button
            type="button"
            onClick={() => setShowAdminModal(true)}
            className="text-slate-500 hover:text-slate-700 text-[11px] font-medium flex items-center gap-1 cursor-pointer"
            title="Tekan Alt + Shift + A di keyboard"
          >
            <Lock className="w-3 h-3" />
            <span>Guru/Pembina (Alt+Shift+A)</span>
          </button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-6 text-center text-xs text-emerald-200/80 space-y-1 max-w-sm">
        <p>Aplikasi Media Belajar Mandiri PAI-BTQ MAPSI 2026</p>
        <p className="text-[11px] text-emerald-300/60">
          Tip Pintar: Tekan <strong>Alt + Shift + A</strong> kapan saja untuk membuka Login Pembina.
        </p>
      </div>

      {/* HIDDEN ADMIN LOGIN MODAL */}
      {showAdminModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border-4 border-amber-400 relative space-y-5">
            {/* Close Button */}
            <button
              onClick={() => {
                setShowAdminModal(false);
                setAdminError('');
              }}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center space-y-1.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-900 mx-auto flex items-center justify-center shadow-lg shadow-amber-500/30">
                <Lock className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black tracking-widest uppercase text-amber-600 block">
                AKSES KHUSUS TERSEMBUNYI
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Login Pembina / Admin MAPSI
              </h2>
              <p className="text-xs text-slate-500">
                Dibuka melalui kombinasi tombol <strong>Alt + Shift + A</strong>
              </p>
            </div>

            {/* Admin Error Alert */}
            {adminError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{adminError}</span>
              </div>
            )}

            {/* Admin Form */}
            <form onSubmit={handleAdminSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  Username Admin:
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={adminUsername}
                    onChange={(e) => setAdminUsername(e.target.value)}
                    placeholder="Username pembina"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:border-amber-500 bg-slate-50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  Password Admin:
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showAdminPassword ? 'text' : 'password'}
                    required
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:border-amber-500 bg-slate-50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowAdminPassword(!showAdminPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer p-1"
                  >
                    {showAdminPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">

                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Masuk Mode Pembina</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
