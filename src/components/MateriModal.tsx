import React, { useState } from 'react';
import { 
  X, 
  BookMarked, 
  Volume2, 
  CheckCircle2, 
  Lightbulb, 
  Compass, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight,
  Flame,
  Award,
  Share2,
  Sparkles
} from 'lucide-react';
import { MateriItem, WigginsFacet } from '../types';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { LatihanMateri } from './LatihanMateri';

interface MateriModalProps {
  materi: MateriItem | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  isCompleted: boolean;
  onCompleteMateri: (id: string) => void;
  allScopeMateri: MateriItem[];
  onSelectMateri: (item: MateriItem) => void;
}

export const MateriModal: React.FC<MateriModalProps> = ({
  materi,
  onClose,
  isBookmarked,
  onToggleBookmark,
  isCompleted,
  onCompleteMateri,
  allScopeMateri,
  onSelectMateri
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'konten' | 'ayat' | 'poin' | 'wiggins' | 'minikuis' | 'latihan'>('konten');
  const [selectedMiniAnswer, setSelectedMiniAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  if (!materi) return null;

  const currentIndex = allScopeMateri.findIndex(m => m.id === materi.id);
  const prevMateri = currentIndex > 0 ? allScopeMateri[currentIndex - 1] : null;
  const nextMateri = currentIndex < allScopeMateri.length - 1 ? allScopeMateri[currentIndex + 1] : null;

  const handleSpeech = () => {
    if (isSpeaking) {
      sounds.stopSpeaking();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      const textToRead = `${materi.judul}. ${materi.ringkasan}. ${materi.kontenUtama}`;
      sounds.speakText(textToRead, 'id-ID');
      setTimeout(() => setIsSpeaking(false), 8000);
    }
  };

  const handleMarkComplete = () => {
    if (!isCompleted) {
      onCompleteMateri(materi.id);
      sounds.playCorrect();
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  const getFacetBadgeColor = (facet: WigginsFacet) => {
    switch (facet) {
      case 'Penjelasan': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Interpretasi': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Aplikasi': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Perspektif': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Empati': return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'Refleksi': return 'bg-teal-100 text-teal-800 border-teal-200';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-2xl md:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="bg-linear-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white p-4 sm:p-6 relative shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-white/20 text-white backdrop-blur-xs">
                  Materi #{materi.nomor}
                </span>
                {materi.subJudul && (
                  <span className="text-xs text-emerald-100 font-medium">
                    {materi.subJudul}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
                {materi.judul}
              </h2>
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              {/* TTS Audio */}
              <button
                onClick={handleSpeech}
                title={isSpeaking ? 'Berhenti Membaca' : 'Dengarkan Audio Suara'}
                className={`p-2 rounded-xl transition-all cursor-pointer ${
                  isSpeaking ? 'bg-amber-400 text-slate-900 animate-pulse' : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <Volume2 className="w-5 h-5" />
              </button>

              {/* Bookmark */}
              <button
                onClick={() => {
                  onToggleBookmark(materi.id);
                  sounds.playClick();
                }}
                title={isBookmarked ? 'Hapus Simpanan' : 'Simpan Materi'}
                className={`p-2 rounded-xl transition-all cursor-pointer ${
                  isBookmarked ? 'bg-amber-400 text-slate-900' : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <BookMarked className="w-5 h-5 fill-current" />
              </button>

              {/* Close */}
              <button
                onClick={() => {
                  sounds.stopSpeaking();
                  onClose();
                }}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex items-center gap-1 sm:gap-2 mt-4 overflow-x-auto pb-1 scrollbar-none text-xs sm:text-sm font-semibold">
            <button
              onClick={() => setActiveSubTab('konten')}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap cursor-pointer transition-all ${
                activeSubTab === 'konten'
                  ? 'bg-white text-emerald-900 shadow-sm font-bold'
                  : 'bg-white/10 text-emerald-50 hover:bg-white/20'
              }`}
            >
              📖 Penjelasan Lengkap
            </button>

            {materi.ayatAtauDalil && materi.ayatAtauDalil.length > 0 && (
              <button
                onClick={() => setActiveSubTab('ayat')}
                className={`px-3 py-1.5 rounded-xl whitespace-nowrap cursor-pointer transition-all ${
                  activeSubTab === 'ayat'
                    ? 'bg-white text-emerald-900 shadow-sm font-bold'
                    : 'bg-white/10 text-emerald-50 hover:bg-white/20'
                }`}
              >
                📜 Teks Arab & Dalil ({materi.ayatAtauDalil.length})
              </button>
            )}

            <button
              onClick={() => setActiveSubTab('poin')}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap cursor-pointer transition-all ${
                activeSubTab === 'poin'
                  ? 'bg-white text-emerald-900 shadow-sm font-bold'
                  : 'bg-white/10 text-emerald-50 hover:bg-white/20'
              }`}
            >
              ⭐ Intisari & Tips Lomba
            </button>

            <button
              onClick={() => setActiveSubTab('wiggins')}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap cursor-pointer transition-all ${
                activeSubTab === 'wiggins'
                  ? 'bg-white text-emerald-900 shadow-sm font-bold'
                  : 'bg-white/10 text-emerald-50 hover:bg-white/20'
              }`}
            >
              💡 Aspek Wiggins & McTighe
            </button>
            <button
              onClick={() => setActiveSubTab('latihan')}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap cursor-pointer transition-all ${
                activeSubTab === 'latihan'
                  ? 'bg-white text-emerald-900 shadow-sm font-bold'
                  : 'bg-white/10 text-emerald-50 hover:bg-white/20'
              }`}
            >
              📝 Latihan Soal
            </button>
          </div>

          {/* Sub Navigation Tabs END */}
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6">
          {/* TAB 1: Konten Utama */}
          {activeSubTab === 'konten' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Ringkasan Box */}
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/70">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  Ringkasan Eksekutif
                </div>
                <p className="text-sm leading-relaxed text-emerald-950 font-medium">
                  {materi.ringkasan}
                </p>
              </div>

              {/* Konten Text */}
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4">
                {materi.kontenUtama.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tips Lomba Highlight */}
              {materi.tipsLomba && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900">
                  <div className="flex items-center gap-2 font-bold text-sm mb-1 text-amber-800">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    Kunci Sukses Lomba MAPSI 2026:
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed font-medium">
                    {materi.tipsLomba}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Dalil & Teks Arab */}
          {activeSubTab === 'ayat' && materi.ayatAtauDalil && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Kutipan ayat suci Al-Qur'an dan dalil hadis shahih yang berkaitan langsung dengan materi ini:
              </p>

              <div className="space-y-4">
                {materi.ayatAtauDalil.map((ayat, idx) => (
                  <div 
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors"
                  >
                    {ayat.ayatNumber && (
                      <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 mb-3">
                        Ayat ke-{ayat.ayatNumber}
                      </div>
                    )}
                    
                    {/* Teks Arab Indah */}
                    <div 
                      dir="rtl"
                      className="text-right text-2xl sm:text-3xl font-quran text-slate-900 leading-loose tracking-wide my-2 select-text"
                    >
                      {ayat.arabic}
                    </div>

                    {/* Transliterasi Latin Standar SKB */}
                    <div className="text-xs sm:text-sm font-semibold text-emerald-800/90 italic mt-3 pt-3 border-t border-slate-200">
                      {ayat.transliteration}
                    </div>

                    {/* Terjemahan Bahasa Indonesia */}
                    <div className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      "{ayat.translation}"
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Poin Penting */}
          {activeSubTab === 'poin' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-4 rounded-2xl bg-slate-100/70 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  Poin Kunci & Butir Hafalan Wajib
                </h3>
                <ul className="space-y-2.5">
                  {materi.poinPenting.map((poin, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed font-medium">{poin}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {materi.tipsLomba && (
                <div className="p-5 rounded-2xl bg-linear-to-r from-amber-50 to-orange-50 border border-amber-300 text-amber-950">
                  <div className="font-extrabold text-sm mb-2 flex items-center gap-2 text-amber-900">
                    <Award className="w-5 h-5 text-amber-600" />
                    Kisi-Kisi Khusus Ujian & Lomba MAPSI:
                  </div>
                  <p className="text-sm leading-relaxed">
                    {materi.tipsLomba}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: Aspek Wiggins & McTighe */}
          {activeSubTab === 'wiggins' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-sky-950">
                <div className="flex items-center gap-2 font-bold text-sm mb-1 text-sky-900">
                  <Compass className="w-4 h-4 text-sky-600" />
                  Framework Pemahaman Wiggins & McTighe
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">
                  Sesuai juknis resmi MAPSI, peserta dituntut tidak hanya menghafal, tetapi menguasai 6 dimensi pemahaman: Penjelasan, Interpretasi, Aplikasi, Perspektif, Empati, dan Refleksi.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {materi.wigginsFacets.map((facetItem, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-sky-300 transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getFacetBadgeColor(facetItem.facet)}`}>
                        Aspek: {facetItem.facet}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      {facetItem.questionPrompt}
                    </h4>

                    <div className="p-3.5 rounded-xl bg-slate-50 text-slate-700 text-xs sm:text-sm leading-relaxed">
                      <strong className="text-slate-900 block mb-1">Analisis Pemahaman:</strong>
                      {facetItem.insight}
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-50 text-emerald-950 text-xs sm:text-sm leading-relaxed">
                      <strong className="text-emerald-900 block mb-1">Aplikasi Sehari-hari / Contoh Nyata:</strong>
                      {facetItem.practicalExample}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeSubTab === 'latihan' && <LatihanMateri key={materi.id} materi={materi} />}
        </div>

        {/* Modal Footer Controls */}

        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            {prevMateri && (
              <button
                onClick={() => {
                  onSelectMateri(prevMateri);
                  sounds.playClick();
                }}
                className="px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Materi Sebelumnya</span>
              </button>
            )}
            {nextMateri && (
              <button
                onClick={() => {
                  onSelectMateri(nextMateri);
                  sounds.playClick();
                }}
                className="px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold flex items-center gap-1 cursor-pointer"
              >
                <span className="hidden sm:inline">Materi Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleMarkComplete}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs ${
                isCompleted
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-102 active:scale-98'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isCompleted ? 'Sudah Dipelajari (+20 XP)' : 'Tandai Selesai (+20 XP)'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
