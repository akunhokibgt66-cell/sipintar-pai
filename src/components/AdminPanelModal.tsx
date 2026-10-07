import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  X, 
  User, 
  Award, 
  Flame, 
  RotateCcw, 
  Printer, 
  Timer, 
  Settings, 
  CheckCircle2, 
  School, 
  GraduationCap, 
  LogOut,
  Sparkles,
  BookOpen,
  Cloud,
  RefreshCw,
  Download,
  Copy,
  ExternalLink,
  Search,
  Filter,
  Check,
  AlertCircle,
  FileSpreadsheet,
  PlusCircle,
  Trash2
} from 'lucide-react';
import { AppUser } from '../types';
import { sounds } from '../utils/audio';
import { 
  StudentRecord, 
  getAllStudents, 
  saveAllStudents,
  sendToWebhook,
  getCloudSheetConfig,
  saveCloudSheetConfig,
  CloudSheetConfig,
  exportStudentsToCsv,
  copyStudentsForSpreadsheet,
  getGoogleAppsScriptTemplate,
  seedInitialDemoStudents,
  updateStudentProgress,
  pullStudentsFromCloud
} from '../services/cloudSheetService';

interface AdminPanelModalProps {
  user: AppUser;
  isOpen: boolean;
  onClose: () => void;
  xp: number;
  onSetXp: (newXp: number) => void;
  completedIds: string[];
  onResetProgress: () => void;
  onLogout: () => void;
}

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({
  user,
  isOpen,
  onClose,
  xp,
  onSetXp,
  completedIds,
  onResetProgress,
  onLogout
}) => {
  const [activeTab, setActiveTab] = useState<'monitor' | 'kelola' | 'cetak'>('monitor');
  const [students, setStudents] = useState<StudentRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterKelas, setFilterKelas] = useState('Semua');
  const [sortBy, setSortBy] = useState<'lastActive' | 'xp' | 'cbt' | 'materi'>('lastActive');
  
  // Alert message state
  const [alertMsg, setAlertMsg] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);
  
  // CloudSheet Config state
  const [config, setConfig] = useState<CloudSheetConfig>(getCloudSheetConfig());
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [tempWebhookUrl, setTempWebhookUrl] = useState(config.webhookUrl);
  const [tempAutoSync, setTempAutoSync] = useState(config.autoSync);
  const [isSyncing, setIsSyncing] = useState(false);
  const [copiedScript, setCopiedScript] = useState(false);
  const [copiedTsv, setCopiedTsv] = useState(false);
  const [showScriptGuide, setShowScriptGuide] = useState(false);

  // Bonus XP state
  const [bonusInput, setBonusInput] = useState(100);
  const [selectedStudentForBonus, setSelectedStudentForBonus] = useState<string>('');

  const showAlert = (text: string, type: 'success' | 'error' | 'info' = 'success') => {
    setAlertMsg({ text, type });
    setTimeout(() => setAlertMsg(null), 4000);
  };

  const loadData = () => {
    seedInitialDemoStudents();
    const data = getAllStudents();
    setStudents(data);
    setConfig(getCloudSheetConfig());
    const adminKey = typeof window !== 'undefined' ? sessionStorage.getItem('mapsi_admin_key') || '' : '';
    pullStudentsFromCloud(adminKey).then(ok => {
      if (ok) setStudents(getAllStudents());
    });
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  // Listen for broadcast sync from other tabs
  useEffect(() => {
    if (typeof window === 'undefined' || !('BroadcastChannel' in window)) return;
    try {
      const channel = new BroadcastChannel('mapsi_student_sync_channel');
      channel.onmessage = () => {
        setStudents(getAllStudents());
      };
      return () => channel.close();
    } catch {
      return;
    }
  }, []);

  if (!isOpen) return null;

  // Filter and sort students
  const filteredStudents = students
    .filter(s => {
      const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            s.school.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesKelas = filterKelas === 'Semua' || s.kelas.includes(filterKelas);
      return matchesSearch && matchesKelas;
    })
    .sort((a, b) => {
      if (sortBy === 'xp') return b.xp - a.xp;
      if (sortBy === 'cbt') return (b.lastCbtScore || 0) - (a.lastCbtScore || 0);
      if (sortBy === 'materi') return b.completedMateriCount - a.completedMateriCount;
      return new Date(b.lastActive).getTime() - new Date(a.lastActive).getTime();
    });

  // Calculation stats
  const totalStudents = students.length;
  const activeStudentsCount = students.filter(s => s.status === 'Aktif').length;
  const cbtTakers = students.filter(s => s.lastCbtScore !== null);
  const avgCbtScore = cbtTakers.length > 0 
    ? Math.round(cbtTakers.reduce((acc, curr) => acc + (curr.lastCbtScore || 0), 0) / cbtTakers.length)
    : 0;
  const avgMateriCount = totalStudents > 0
    ? Math.round(students.reduce((acc, curr) => acc + curr.completedMateriCount, 0) / totalStudents)
    : 0;

  const handleManualSync = async () => {
    if (!config.webhookUrl) {
      setShowConfigModal(true);
      showAlert('Silakan masukkan URL Webhook Google Apps Script terlebih dahulu!', 'info');
      return;
    }
    setIsSyncing(true);
    sounds.playClick();
    const res = await sendToWebhook(students, config.webhookUrl);
    setIsSyncing(false);
    if (res.success) {
      sounds.playCorrect();
      showAlert(res.message, 'success');
      setConfig(getCloudSheetConfig());
    } else {
      sounds.playWrong();
      showAlert(res.message, 'error');
    }
  };

  const handleSaveConfig = () => {
    const updated: CloudSheetConfig = {
      ...config,
      webhookUrl: tempWebhookUrl.trim(),
      autoSync: tempAutoSync
    };
    saveCloudSheetConfig(updated);
    setConfig(updated);
    setShowConfigModal(false);
    sounds.playCorrect();
    showAlert('Pengaturan Google Sheets Webhook berhasil disimpan!', 'success');
  };

  const handleCopyTsv = async () => {
    const ok = await copyStudentsForSpreadsheet(students);
    if (ok) {
      setCopiedTsv(true);
      sounds.playClick();
      showAlert('Format tabel berhasil disalin! Buka Google Sheets lalu tekan Ctrl + V.', 'success');
      setTimeout(() => setCopiedTsv(false), 3000);
    }
  };

  const handleCopyScript = () => {
    navigator.clipboard.writeText(getGoogleAppsScriptTemplate());
    setCopiedScript(true);
    sounds.playClick();
    showAlert('Kode Google Apps Script berhasil disalin ke clipboard!', 'success');
    setTimeout(() => setCopiedScript(false), 3000);
  };

  const handleGiveBonusXp = (targetStudentId?: string) => {
    const targetId = targetStudentId || selectedStudentForBonus;
    if (!targetId) {
      // Apply to currently logged in student
      onSetXp(xp + bonusInput);
      updateStudentProgress(user.name, { xp: xp + bonusInput });
      sounds.playCorrect();
      showAlert(`Berhasil menambahkan +${bonusInput} XP untuk santri ${user.name}!`, 'success');
      setStudents(getAllStudents());
      return;
    }

    const st = students.find(s => s.id === targetId);
    if (st) {
      const newXp = st.xp + bonusInput;
      updateStudentProgress(st.id, { xp: newXp });
      if (st.name.toLowerCase() === user.name.toLowerCase()) {
        onSetXp(newXp);
      }
      sounds.playCorrect();
      showAlert(`Berhasil menambahkan +${bonusInput} XP untuk ${st.name}!`, 'success');
      setStudents(getAllStudents());
    }
  };

  const handleDeleteStudent = (studentId: string, studentName: string) => {
    const next = students.filter(s => s.id !== studentId);
    saveAllStudents(next);
    setStudents(next);
    sounds.playClick();
    showAlert(`Data santri ${studentName} berhasil dihapus dari rekapitulasi.`, 'info');
  };

  const handleAddSampleStudents = () => {
    seedInitialDemoStudents();
    setStudents(getAllStudents());
    sounds.playCorrect();
    showAlert('Data santri contoh telah dimuat ke dalam rekapitulasi!', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[94vh] flex flex-col shadow-2xl border-4 border-amber-400 overflow-hidden relative">
        
        {/* Top Header */}
        <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
                  DASHBOARD PEMBINA & GURU
                </span>
                <span className="text-xs text-slate-400">MAPSI XXVII 2026</span>
              </div>
              <h2 className="text-lg sm:text-2xl font-black text-white flex items-center gap-2">
                <span>Pemantau Progress Belajar & CloudSheet</span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Real-Time
                </span>
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-4 sm:px-6 bg-slate-100 border-b border-slate-200 flex items-center justify-between gap-2 overflow-x-auto">
          <div className="flex items-center gap-2 py-2">
            <button
              onClick={() => setActiveTab('monitor')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'monitor'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-white hover:text-slate-900'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Tabel Spreadsheet Siswa</span>
              <span className="px-1.5 py-0.2 bg-white/20 text-[10px] rounded-full font-black">
                {students.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('kelola')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'kelola'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-white hover:text-slate-900'
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>Kelola Bonus & Gamifikasi</span>
            </button>

            <button
              onClick={() => setActiveTab('cetak')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'cetak'
                  ? 'bg-sky-700 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-white hover:text-slate-900'
              }`}
            >
              <Printer className="w-4 h-4" />
              <span>Cetak Berita Acara Rekap</span>
            </button>
          </div>

          {/* Quick Sync Status indicator */}
          <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
            {config.webhookUrl ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold text-[11px]">
                <Cloud className="w-3.5 h-3.5 text-emerald-600" />
                CloudSheet Terhubung
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-200 text-slate-700 font-semibold text-[11px]">
                Mode Lokal (Tersimpan di Browser)
              </span>
            )}
          </div>
        </div>

        {/* Global Notification Banner */}
        {alertMsg && (
          <div className={`mx-4 sm:mx-6 mt-3 p-3 rounded-2xl text-xs font-bold flex items-center justify-between gap-2 animate-in fade-in ${
            alertMsg.type === 'success' 
              ? 'bg-emerald-50 border border-emerald-300 text-emerald-900' 
              : alertMsg.type === 'error'
                ? 'bg-rose-50 border border-rose-300 text-rose-900'
                : 'bg-amber-50 border border-amber-300 text-amber-900'
          }`}>
            <div className="flex items-center gap-2">
              {alertMsg.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              )}
              <span>{alertMsg.text}</span>
            </div>
            <button onClick={() => setAlertMsg(null)} className="text-slate-400 hover:text-slate-600">
              ✕
            </button>
          </div>
        )}

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* TAB 1: SPREADSHEET / CLOUDSHEET MONITOR */}
          {activeTab === 'monitor' && (
            <div className="space-y-6 animate-in fade-in">
              
              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200">
                  <div className="text-[10px] sm:text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    Total Santri
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-950 mt-0.5">
                    {totalStudents} <span className="text-xs font-normal text-emerald-700">Siswa</span>
                  </div>
                  <div className="text-[10px] text-emerald-700 mt-1 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                    {activeStudentsCount} Aktif Sesi Ini
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/80 border border-amber-200">
                  <div className="text-[10px] sm:text-xs font-bold text-amber-800 uppercase tracking-wider">
                    Rata-Rata Materi
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-amber-950 mt-0.5">
                    {avgMateriCount} <span className="text-xs font-normal text-amber-700">/ 72 Bab</span>
                  </div>
                  <div className="text-[10px] text-amber-700 mt-1">
                    Tingkat Tuntas: {Math.round((avgMateriCount / 72) * 100)}%
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-sky-50/80 border border-sky-200">
                  <div className="text-[10px] sm:text-xs font-bold text-sky-800 uppercase tracking-wider">
                    Rata-Rata Nilai CBT
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-sky-950 mt-0.5">
                    {avgCbtScore} <span className="text-xs font-normal text-sky-700">/ 100</span>
                  </div>
                  <div className="text-[10px] text-sky-700 mt-1">
                    {cbtTakers.length} Santri Selesai Ujian
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-purple-50/80 border border-purple-200">
                  <div className="text-[10px] sm:text-xs font-bold text-purple-800 uppercase tracking-wider">
                    Status Sinkronisasi
                  </div>
                  <div className="text-sm font-black text-purple-950 mt-1 truncate">
                    {config.webhookUrl ? '🟢 Google Sheets' : '⚪ Penyimpanan Lokal'}
                  </div>
                  <div className="text-[10px] text-purple-700 mt-1 truncate">
                    {config.lastSyncTime ? `Sync: ${new Date(config.lastSyncTime).toLocaleTimeString('id-ID')}` : 'Belum sync'}
                  </div>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {/* Sync Button */}
                  <button
                    onClick={handleManualSync}
                    disabled={isSyncing}
                    className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50 transition-all"
                    title="Kirim dan sinkronkan data siswa ke Google Spreadsheet"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                    <span>{isSyncing ? 'Menyinkronkan...' : 'Sinkronkan ke CloudSheet'}</span>
                  </button>

                  {/* Copy for Google Sheets (TSV) */}
                  <button
                    onClick={handleCopyTsv}
                    className="px-3.5 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer"
                    title="Salin tabel ke clipboard (bisa langsung paste Ctrl+V di Google Sheets)"
                  >
                    {copiedTsv ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                    <span>{copiedTsv ? 'Tersalin!' : 'Salin Format Spreadsheet'}</span>
                  </button>

                  {/* Export CSV File */}
                  <button
                    onClick={() => {
                      exportStudentsToCsv(students);
                      sounds.playClick();
                      showAlert('File CSV Rekapitulasi berhasil diunduh!', 'success');
                    }}
                    className="px-3.5 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer"
                    title="Unduh file .csv yang bisa langsung dibuka di Excel atau Google Sheets"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-500" />
                    <span>Unduh CSV / Excel</span>
                  </button>

                  {/* Webhook Configuration Button */}
                  <button
                    onClick={() => {
                      setTempWebhookUrl(config.webhookUrl);
                      setTempAutoSync(config.autoSync);
                      setShowConfigModal(true);
                      sounds.playClick();
                    }}
                    className="px-3.5 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer"
                    title="Atur URL Webhook Google Apps Script"
                  >
                    <Settings className="w-3.5 h-3.5 text-slate-500" />
                    <span>Pengaturan Webhook</span>
                  </button>

                  {/* Guide Modal Button */}
                  <button
                    onClick={() => {
                      setShowScriptGuide(true);
                      sounds.playClick();
                    }}
                    className="px-3.5 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-900 font-bold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer"
                    title="Buka kode script dan panduan integrasi Google Sheets 1 menit"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                    <span>Panduan Apps Script (1 Menit)</span>
                  </button>
                </div>

                {/* Seed button */}
                <button
                  onClick={handleAddSampleStudents}
                  className="text-xs text-emerald-700 hover:text-emerald-800 font-bold cursor-pointer flex items-center gap-1"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Muat Data Contoh</span>
                </button>
              </div>

              {/* Search, Filter, Sort Controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari nama santri atau asal sekolah..."
                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 bg-white text-xs font-semibold focus:outline-none focus:border-emerald-600"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {/* Filter Kelas */}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <Filter className="w-3.5 h-3.5 text-slate-400" />
                    <span>Kelas:</span>
                    <select
                      value={filterKelas}
                      onChange={(e) => setFilterKelas(e.target.value)}
                      className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-semibold focus:outline-none cursor-pointer"
                    >
                      <option value="Semua">Semua Kelas</option>
                      <option value="Kelas 4">Kelas 4</option>
                      <option value="Kelas 5">Kelas 5</option>
                      <option value="Kelas 6">Kelas 6</option>
                    </select>
                  </div>

                  {/* Sort By */}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <span>Urutkan:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-semibold focus:outline-none cursor-pointer"
                    >
                      <option value="lastActive">Waktu Aktif Terakhir</option>
                      <option value="xp">Total XP Tertinggi</option>
                      <option value="cbt">Skor CBT Tertinggi</option>
                      <option value="materi">Progres Materi Tuntas</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Real-Time Spreadsheet Data Table */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-extrabold uppercase text-[10px] tracking-wider">
                        <th className="py-3 px-3 w-10 text-center">No</th>
                        <th className="py-3 px-4">Nama Siswa</th>
                        <th className="py-3 px-3">Kelas</th>
                        <th className="py-3 px-3">Total XP</th>
                        <th className="py-3 px-4">Progres Materi (72)</th>
                        <th className="py-3 px-3 text-center">Skor CBT</th>
                        <th className="py-3 px-3 text-center">Zakat</th>
                        <th className="py-3 px-3 text-center">Akhlak</th>
                        <th className="py-3 px-3">Terakhir Aktif</th>
                        <th className="py-3 px-3 text-center">Status</th>
                        <th className="py-3 px-3 text-center">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {filteredStudents.length === 0 ? (
                        <tr>
                          <td colSpan={11} className="py-10 text-center text-slate-400">
                            Tidak ada data santri yang cocok dengan pencarian.
                          </td>
                        </tr>
                      ) : (
                        filteredStudents.map((st, index) => {
                          const percentMateri = Math.round((st.completedMateriCount / st.totalMateriTarget) * 100);
                          const isCurrentUser = st.name.toLowerCase() === user.name.toLowerCase();

                          return (
                            <tr 
                              key={st.id} 
                              className={`hover:bg-slate-50/80 transition-colors ${
                                isCurrentUser ? 'bg-emerald-50/40 font-bold' : ''
                              }`}
                            >
                              <td className="py-3 px-3 text-center text-slate-400 font-semibold">
                                {index + 1}
                              </td>
                              
                              {/* Nama & Asal Sekolah */}
                              <td className="py-3 px-4">
                                <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                                  <span>{st.name}</span>
                                  {isCurrentUser && (
                                    <span className="text-[9px] bg-emerald-600 text-white px-1.5 py-0.2 rounded font-black">
                                      Anda
                                    </span>
                                  )}
                                </div>
                                <div className="text-[11px] text-slate-500 font-normal">
                                  {st.school}
                                </div>
                              </td>

                              {/* Tingkat Kelas */}
                              <td className="py-3 px-3 whitespace-nowrap">
                                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-bold text-[11px]">
                                  {st.kelas}
                                </span>
                              </td>

                              {/* Total XP */}
                              <td className="py-3 px-3 whitespace-nowrap font-extrabold text-amber-700">
                                <div className="flex items-center gap-1">
                                  <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
                                  <span>{st.xp} XP</span>
                                </div>
                              </td>

                              {/* Progres Materi Bar */}
                              <td className="py-3 px-4 min-w-[140px]">
                                <div className="flex items-center justify-between text-[11px] mb-1 font-semibold text-slate-600">
                                  <span>{st.completedMateriCount} / 72 Bab</span>
                                  <span className="text-emerald-700 font-bold">{percentMateri}%</span>
                                </div>
                                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                                  <div 
                                    className="h-full bg-emerald-600 rounded-full transition-all duration-300"
                                    style={{ width: `${Math.min(100, percentMateri)}%` }}
                                  ></div>
                                </div>
                              </td>

                              {/* Skor CBT */}
                              <td className="py-3 px-3 text-center whitespace-nowrap">
                                {st.lastCbtScore !== null ? (
                                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-black ${
                                    st.lastCbtScore >= 80 
                                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                      : st.lastCbtScore >= 60
                                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                                        : 'bg-rose-100 text-rose-800 border border-rose-300'
                                  }`}>
                                    {st.lastCbtScore} / 100
                                  </span>
                                ) : (
                                  <span className="text-slate-400 text-[11px]">Belum Ujian</span>
                                )}
                              </td>

                              {/* Latihan Zakat Selesai */}
                              <td className="py-3 px-3 text-center whitespace-nowrap">
                                <span className="font-bold text-slate-700">{st.zakatDoneCount}</span>
                                <span className="text-slate-400 text-[10px]"> kss</span>
                              </td>

                              {/* Kuis Akhlak */}
                              <td className="py-3 px-3 text-center whitespace-nowrap">
                                <span className="font-bold text-slate-700">{st.akhlakQuizCount}</span>
                                <span className="text-slate-400 text-[10px]"> kuis</span>
                              </td>

                              {/* Terakhir Aktif */}
                              <td className="py-3 px-3 text-slate-500 whitespace-nowrap text-[11px]">
                                {new Date(st.lastActive).toLocaleDateString('id-ID', {
                                  day: '2-digit',
                                  month: 'short',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </td>

                              {/* Status */}
                              <td className="py-3 px-3 text-center whitespace-nowrap">
                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  st.status === 'Aktif'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : 'bg-slate-100 text-slate-600'
                                }`}>
                                  <span className={`w-1.5 h-1.5 rounded-full ${
                                    st.status === 'Aktif' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'
                                  }`}></span>
                                  {st.status}
                                </span>
                              </td>

                              {/* Aksi */}
                              <td className="py-3 px-3 text-center whitespace-nowrap">
                                <div className="flex items-center justify-center gap-1">
                                  <button
                                    onClick={() => handleGiveBonusXp(st.id)}
                                    title="Beri +100 XP"
                                    className="p-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold text-[10px] border border-amber-200 cursor-pointer"
                                  >
                                    +XP
                                  </button>
                                  <button
                                    onClick={() => handleDeleteStudent(st.id, st.name)}
                                    title="Hapus santri ini"
                                    className="p-1 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 cursor-pointer"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
                  <span>
                    Menampilkan <strong>{filteredStudents.length}</strong> dari <strong>{students.length}</strong> santri terdaftar.
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Tabel ini otomatis tersinkronisasi saat siswa mengerjakan kuis, membaca materi, atau menyelesaikan simulasi CBT.
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: KELOLA BONUS & GAMIFIKASI */}
          {activeTab === 'kelola' && (
            <div className="space-y-6 max-w-2xl mx-auto animate-in fade-in">
              <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-4">
                <h3 className="font-extrabold text-base text-amber-950 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-amber-600" />
                  Pemberian Bonus XP Pembinaan Santri
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Berikan apresiasi bonus XP kepada santri yang berprestasi, aktif bertanya, atau rajin menghafal surah untuk memacu semangat belajar.
                </p>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Pilih Santri Penerima Bonus:
                    </label>
                    <select
                      value={selectedStudentForBonus}
                      onChange={(e) => setSelectedStudentForBonus(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-semibold bg-white"
                    >
                      <option value="">-- Santri Aktif Sekarang: {user.name} ({user.kelas}) --</option>
                      {students.map(s => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.kelas}) - Saat ini: {s.xp} XP
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Jumlah Bonus XP:
                      </label>
                      <input
                        type="number"
                        step="50"
                        value={bonusInput}
                        onChange={(e) => setBonusInput(parseInt(e.target.value) || 0)}
                        className="w-32 p-2.5 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                      />
                    </div>

                    <div className="pt-5">
                      <button
                        onClick={() => handleGiveBonusXp()}
                        className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md cursor-pointer flex items-center gap-2"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Kirimkan Bonus XP</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reset Data Section */}
              <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-3">
                <h3 className="font-extrabold text-base text-rose-950 flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-rose-600" />
                  Pengaturan Ulang (Reset) Data Pembelajaran
                </h3>
                <p className="text-xs text-slate-600">
                  Gunakan tombol di bawah ini jika ingin membersihkan progres belajar santri untuk memulai gelombang pembinaan baru.
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      onResetProgress();
                      updateStudentProgress(user.name, { completedMateriCount: 0 });
                      setStudents(getAllStudents());
                      sounds.playClick();
                      showAlert('Progres materi santri telah diatur ulang menjadi 0.', 'info');
                    }}
                    className="px-4 py-2 rounded-xl bg-white border border-rose-300 text-rose-700 font-bold text-xs hover:bg-rose-100 cursor-pointer"
                  >
                    Reset Materi Santri Ini
                  </button>

                  <button
                    onClick={() => {
                      saveAllStudents([]);
                      setStudents([]);
                      sounds.playClick();
                      showAlert('Seluruh database rekapitulasi siswa telah dibersihkan.', 'info');
                    }}
                    className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs cursor-pointer"
                  >
                    Hapus Seluruh Data Siswa
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CETAK BERITA ACARA RESMI */}
          {activeTab === 'cetak' && (
            <div className="space-y-4 max-w-4xl mx-auto animate-in fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-base text-slate-900">
                    Lembar Rekapitulasi Pembinaan PAI-BTQ Resmi
                  </h3>
                  <p className="text-xs text-slate-500">
                    Format resmi untuk arsip Kafilah Sekolah dan KKG PAI Kabupaten Batang
                  </p>
                </div>

                <button
                  onClick={() => window.print()}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 text-white font-extrabold text-xs shadow-md flex items-center gap-2 cursor-pointer hover:bg-slate-800"
                >
                  <Printer className="w-4 h-4" />
                  <span>Cetak / Simpan PDF</span>
                </button>
              </div>

              {/* Printable Document Box */}
              <div className="p-6 sm:p-10 border-2 border-slate-900 rounded-2xl bg-white text-slate-900 space-y-6 font-serif">
                {/* Header Kop */}
                <div className="text-center border-b-2 border-slate-900 pb-4 space-y-1">
                  <h3 className="font-black text-lg sm:text-xl uppercase tracking-wider">
                    BERITA ACARA REKAPITULASI PEMBINAAN PAI DAN BTQ
                  </h3>
                  <h4 className="font-bold text-sm sm:text-base">
                    PERSIAPAN LOMBA MAPSI SD XXVII TAHUN 2026 KABUPATEN BATANG
                  </h4>
                  <p className="text-xs text-slate-600 font-sans">
                    Standar Kompetensi Blue Print Materi 6 Ruang Lingkup & Aspek Pemahaman Wiggins & McTighe
                  </p>
                </div>

                {/* Table in Print Format */}
                <div className="font-sans">
                  <table className="w-full text-xs border border-slate-400 border-collapse">
                    <thead>
                      <tr className="bg-slate-100 font-bold text-center">
                        <th className="border border-slate-400 p-2 w-10">No</th>
                        <th className="border border-slate-400 p-2 text-left">Nama Siswa</th>
                        <th className="border border-slate-400 p-2">Kelas</th>
                        <th className="border border-slate-400 p-2 text-left">Asal Sekolah</th>
                        <th className="border border-slate-400 p-2">Materi (72)</th>
                        <th className="border border-slate-400 p-2">Skor CBT</th>
                        <th className="border border-slate-400 p-2">Total XP</th>
                        <th className="border border-slate-400 p-2">Keterangan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((st, i) => (
                        <tr key={st.id} className="text-center">
                          <td className="border border-slate-400 p-2">{i + 1}</td>
                          <td className="border border-slate-400 p-2 text-left font-bold">{st.name}</td>
                          <td className="border border-slate-400 p-2">{st.kelas}</td>
                          <td className="border border-slate-400 p-2 text-left">{st.school}</td>
                          <td className="border border-slate-400 p-2">{st.completedMateriCount}/72</td>
                          <td className="border border-slate-400 p-2 font-bold">{st.lastCbtScore !== null ? `${st.lastCbtScore}` : '-'}</td>
                          <td className="border border-slate-400 p-2">{st.xp}</td>
                          <td className="border border-slate-400 p-2 font-bold text-emerald-800">KOMPETEN</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Tanda Tangan */}
                <div className="pt-8 grid grid-cols-2 text-xs font-sans text-center">
                  <div>
                    <p className="mb-14">Mengetahui,<br/>Kepala Sekolah</p>
                    <p className="font-bold underline text-sm">( ..................................................... )</p>
                    <p className="text-slate-500">NIP. .....................................................</p>
                  </div>
                  <div>
                    <p className="mb-14">Batang, {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}<br/>Guru Pembina PAI</p>
                    <p className="font-bold underline text-sm">( {user.name} )</p>
                    <p className="text-slate-500">NIP. .....................................................</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Pengaturan Webhook */}
        {showConfigModal && (
          <div className="fixed inset-0 z-60 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-extrabold text-slate-900 text-base">
                    Pengaturan Google Sheets / CloudSheet Webhook
                  </h4>
                </div>
                <button
                  onClick={() => setShowConfigModal(false)}
                  className="text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    URL Google Apps Script Web App (Webhook):
                  </label>
                  <input
                    type="url"
                    value={tempWebhookUrl}
                    onChange={(e) => setTempWebhookUrl(e.target.value)}
                    placeholder="https://script.google.com/macros/s/AKfycb.../exec"
                    className="w-full p-3 rounded-xl border border-slate-300 font-mono text-[11px] bg-slate-50 focus:outline-none focus:border-emerald-600"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    Masukkan URL Web App dari Google Apps Script yang terpasang di Spreadsheet Anda.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
                  <span className="font-bold block">💡 Belum memiliki URL Webhook?</span>
                  <p className="text-[11px] leading-relaxed">
                    Klik tombol <strong>"Panduan Apps Script"</strong> untuk menyalin kode siap pakai dan ikuti langkah 1 menit membuat webhook gratis langsung di Google Drive Anda.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="autoSyncCheck"
                    checked={tempAutoSync}
                    onChange={(e) => setTempAutoSync(e.target.checked)}
                    className="w-4 h-4 rounded text-emerald-600 cursor-pointer"
                  />
                  <label htmlFor="autoSyncCheck" className="font-bold text-slate-700 cursor-pointer">
                    Sinkronisasi Otomatis Setiap Santri Selesai Belajar / Kuis
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  onClick={() => setShowConfigModal(false)}
                  className="px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-bold text-xs cursor-pointer"
                >
                  Batal
                </button>
                <button
                  onClick={handleSaveConfig}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md cursor-pointer"
                >
                  Simpan Pengaturan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Panduan Apps Script */}
        {showScriptGuide && (
          <div className="fixed inset-0 z-60 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[88vh] overflow-y-auto space-y-5 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-amber-600" />
                  <h4 className="font-extrabold text-slate-900 text-base">
                    Petunjuk Pemasangan Webhook Google Sheets (1 Menit)
                  </h4>
                </div>
                <button
                  onClick={() => setShowScriptGuide(false)}
                  className="text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
                <ol className="list-decimal pl-5 space-y-2 font-medium">
                  <li>Buka <a href="https://sheets.new" target="_blank" rel="noreferrer" className="text-emerald-700 underline font-bold inline-flex items-center gap-0.5">sheets.new <ExternalLink className="w-3 h-3" /></a> di browser untuk membuat Google Spreadsheet baru.</li>
                  <li>Beri nama spreadsheet Anda, misalnya: <strong>"Rekapitulasi Santri MAPSI 2026"</strong>.</li>
                  <li>Klik menu atas: <strong>Ekstensi (Extensions) &gt; Apps Script</strong>.</li>
                  <li>Hapus semua baris kode bawaan di editor, lalu <strong>Paste (Tempel)</strong> kode di bawah ini.</li>
                  <li>Klik tombol <strong>Deploy (Terapkan) &gt; New deployment (Penerapan baru)</strong> di sudut kanan atas.</li>
                  <li>Pilih jenis <strong>Web app (Aplikasi Web)</strong>:
                    <ul className="list-disc pl-5 mt-1 space-y-0.5 text-slate-600">
                      <li>Execute as (Jalankan sebagai): <strong>Me (Saya)</strong></li>
                      <li>Who has access (Yang memiliki akses): <strong>Anyone (Siapa saja)</strong></li>
                    </ul>
                  </li>
                  <li>Klik <strong>Deploy</strong>, lalu salin URL Web App yang berakhiran <code>/exec</code> dan tempelkan ke <strong>Pengaturan Webhook</strong> di aplikasi ini!</li>
                </ol>

                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">Kode Google Apps Script Siap Pakai:</span>
                    <button
                      onClick={handleCopyScript}
                      className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                    >
                      {copiedScript ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedScript ? 'Tersalin!' : 'Salin Kode Script'}</span>
                    </button>
                  </div>
                  <pre className="p-3.5 rounded-xl bg-slate-900 text-emerald-300 font-mono text-[11px] max-h-48 overflow-y-auto leading-relaxed">
                    {getGoogleAppsScriptTemplate()}
                  </pre>
                </div>
              </div>

              <div className="flex justify-end pt-2 border-t">
                <button
                  onClick={() => setShowScriptGuide(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-extrabold text-xs cursor-pointer"
                >
                  Tutup Panduan
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
