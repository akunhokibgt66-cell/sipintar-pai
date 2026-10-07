import React, { useState } from 'react';
import { 
  Headphones, 
  Eye, 
  EyeOff, 
  Play, 
  Square, 
  CheckCircle2, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { quranHaditsData } from '../data/quranHaditsData';
import { AyatItem } from '../types';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';

interface HafalanTrainerProps {
  onEarnXp: (amount: number) => void;
}

export const HafalanTrainer: React.FC<HafalanTrainerProps> = ({ onEarnXp }) => {
  const [selectedSurahIdx, setSelectedSurahIdx] = useState(0);
  const [hideArabic, setHideArabic] = useState(false);
  const [hideTranslation, setHideTranslation] = useState(false);
  const [hideLatin, setHideLatin] = useState(false);
  const [memorizedAyat, setMemorizedAyat] = useState<{ [key: string]: boolean }>({});
  const [playingAyatIdx, setPlayingAyatIdx] = useState<number | null>(null);

  const currentSurah = quranHaditsData[selectedSurahIdx];
  const ayats: AyatItem[] = currentSurah.ayatAtauDalil || [];

  const handlePlayAudio = (idx: number, ayat: AyatItem) => {
    if (playingAyatIdx === idx) {
      sounds.stopSpeaking();
      setPlayingAyatIdx(null);
    } else {
      setPlayingAyatIdx(idx);
      sounds.speakText(ayat.translation, 'id-ID');
      setTimeout(() => setPlayingAyatIdx(null), 6000);
    }
  };

  const handleMarkMemorized = (key: string) => {
    if (!memorizedAyat[key]) {
      setMemorizedAyat(prev => ({ ...prev, [key]: true }));
      sounds.playCorrect();
      onEarnXp(10);
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.7 }
      });
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-linear-to-r from-rose-700 via-rose-800 to-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black bg-rose-500/20 text-rose-200 border border-rose-400/30 mb-2">
              <Headphones className="w-3.5 h-3.5" />
              PELATIH HAFALAN & TILAWAH AYAT PILIHAN
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Hafalan Ayat & Hadis MAPSI
            </h1>
            <p className="text-rose-100 text-xs md:text-sm mt-1 max-w-xl">
              Latih hafalan ayat per ayat dengan fitur sembunyikan teks, tes mandiri, dan penanda hafalan mutqin.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center shrink-0">
            <span className="text-xs uppercase tracking-wider font-bold text-rose-200 block">Total Dihafal</span>
            <div className="text-2xl md:text-3xl font-black text-amber-300">
              {Object.keys(memorizedAyat).length} Ayat
            </div>
          </div>
        </div>
      </div>

      {/* Surah Selector Carousel */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-bold">
        {quranHaditsData.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => {
              setSelectedSurahIdx(idx);
              sounds.playClick();
            }}
            className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
              selectedSurahIdx === idx
                ? 'bg-rose-600 text-white shadow-sm font-black'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            #{s.nomor} {s.judul}
          </button>
        ))}
      </div>

      {/* Controls Bar for Memorization Modes */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 flex items-center justify-between gap-3 flex-wrap">
        <span className="text-xs font-bold text-slate-500">
          Mode Tampilan Uji Hafalan:
        </span>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setHideArabic(!hideArabic)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all cursor-pointer ${
              hideArabic 
                ? 'bg-rose-500 text-white border-rose-600' 
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {hideArabic ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{hideArabic ? 'Teks Arab Ditutup' : 'Tutup Teks Arab'}</span>
          </button>

          <button
            onClick={() => setHideLatin(!hideLatin)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all cursor-pointer ${
              hideLatin 
                ? 'bg-rose-500 text-white border-rose-600' 
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {hideLatin ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{hideLatin ? 'Latin Ditutup' : 'Tutup Latin'}</span>
          </button>

          <button
            onClick={() => setHideTranslation(!hideTranslation)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all cursor-pointer ${
              hideTranslation 
                ? 'bg-rose-500 text-white border-rose-600' 
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {hideTranslation ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{hideTranslation ? 'Arti Ditutup' : 'Tutup Terjemah'}</span>
          </button>
        </div>
      </div>

      {/* Verses List */}
      <div className="space-y-4">
        {ayats.map((ayat, idx) => {
          const ayatKey = `${currentSurah.id}-${idx}`;
          const isDone = memorizedAyat[ayatKey];
          const isPlaying = playingAyatIdx === idx;

          return (
            <div
              key={idx}
              className={`p-6 rounded-3xl bg-white border transition-all space-y-4 ${
                isDone 
                  ? 'border-emerald-300 bg-emerald-50/20' 
                  : 'border-slate-200/80 hover:border-rose-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-slate-900 text-white text-xs font-black flex items-center justify-center">
                    {ayat.ayatNumber || idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {currentSurah.judul} {ayat.ayatNumber ? `Ayat ${ayat.ayatNumber}` : ''}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Audio */}
                  <button
                    onClick={() => handlePlayAudio(idx, ayat)}
                    className={`p-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      isPlaying 
                        ? 'bg-rose-600 text-white' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {isPlaying ? <Square className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                    <span className="hidden sm:inline">{isPlaying ? 'Hentikan' : 'Dengarkan Arti'}</span>
                  </button>

                  {/* Mark as Memorized */}
                  <button
                    onClick={() => handleMarkMemorized(ayatKey)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      isDone
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 font-black'
                        : 'bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isDone ? 'Sudah Mutqin (+10 XP)' : 'Tandai Hafal (+10 XP)'}</span>
                  </button>
                </div>
              </div>

              {/* Arabic Text */}
              {!hideArabic ? (
                <div 
                  dir="rtl"
                  className="text-right text-2xl sm:text-3xl md:text-4xl font-quran text-slate-900 leading-loose py-2 select-text"
                >
                  {ayat.arabic}
                </div>
              ) : (
                <div className="p-8 rounded-2xl bg-slate-100 text-center text-slate-400 text-xs italic font-bold">
                  [ Teks Arab disembunyikan untuk melatih ingatan hafalanmu ]
                </div>
              )}

              {/* Transliterasi */}
              {!hideLatin && (
                <div className="text-xs sm:text-sm font-semibold text-rose-900 italic pt-2 border-t border-slate-100">
                  {ayat.transliteration}
                </div>
              )}

              {/* Translation */}
              {!hideTranslation && (
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  "{ayat.translation}"
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
