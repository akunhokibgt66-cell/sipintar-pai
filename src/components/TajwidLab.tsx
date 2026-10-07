import React, { useState } from 'react';
import { 
  Microscope, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Sparkles, 
  HelpCircle,
  Award,
  ChevronRight,
  Info
} from 'lucide-react';
import { tajwidSamples, TajwidSample } from '../data/tajwidSamples';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';

interface TajwidLabProps {
  onEarnXp: (amount: number) => void;
}

export const TajwidLab: React.FC<TajwidLabProps> = ({ onEarnXp }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [filterCategory, setFilterCategory] = useState<string>('Semua');

  const filteredSamples = filterCategory === 'Semua' 
    ? tajwidSamples 
    : tajwidSamples.filter(s => s.kategori === filterCategory);

  const currentSample: TajwidSample = filteredSamples[currentIndex] ?? filteredSamples[0]!;

  const handleSelectOption = (opt: string) => {
    if (hasAnswered) return;
    setSelectedOption(opt);
    setHasAnswered(true);

    if (opt === currentSample.hukumTajwid) {
      sounds.playCorrect();
      setScore(s => s + 1);
      onEarnXp(15);
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.6 }
      });
    } else {
      sounds.playWrong();
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setHasAnswered(false);
    if (currentIndex < filteredSamples.length - 1) {
      setCurrentIndex(i => i + 1);
      sounds.playClick();
    } else {
      // Completed all
      sounds.playFanfare();
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setScore(0);
    sounds.playClick();
  };

  const categories = ['Semua', 'Nun Sukun / Tanwin', 'Mim Sukun', 'Mad', 'Qalqalah', 'Alif Lam', 'Tafkhim/Tarqiq'];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-linear-to-r from-teal-800 via-emerald-800 to-teal-900 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black bg-teal-500/20 text-teal-200 border border-teal-400/30 mb-2">
              <Microscope className="w-3.5 h-3.5" />
              Laboratorium Diagnosa Tajwid Interaktif
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Tajwid Lab & Analisis Ayat
            </h1>
            <p className="text-teal-100 text-xs md:text-sm mt-1 max-w-xl">
              Uji ketelitianmu mengidentifikasi hukum bacaan Al-Qur'an pada potongan ayat resmi lomba MAPSI. Dapatkan +15 XP setiap jawaban tepat!
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center shrink-0">
            <span className="text-xs uppercase tracking-wider font-bold text-teal-200 block">Skor Diagnosa</span>
            <div className="text-2xl md:text-3xl font-black text-amber-300">
              {score} / {filteredSamples.length}
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-semibold">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilterCategory(cat);
              setCurrentIndex(0);
              setSelectedOption(null);
              setHasAnswered(false);
              sounds.playClick();
            }}
            className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
              filterCategory === cat
                ? 'bg-teal-700 text-white font-bold shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lab Station Card */}
      {currentSample && (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
          {/* Ayat Info */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200">
                {currentSample.surahOrAyat}
              </span>
              <span className="text-xs font-medium text-slate-500">
                Kasus #{currentIndex + 1} dari {filteredSamples.length}
              </span>
            </div>

            <span className="text-xs font-semibold text-slate-400">
              Kategori: {currentSample.kategori}
            </span>
          </div>

          {/* Big Arabic Display Card */}
          <div className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-4">
            <p className="text-xs uppercase tracking-widest font-bold text-slate-400">
              Potongan Ayat Yang Diamati
            </p>
            <div 
              dir="rtl"
              className="text-3xl sm:text-4xl md:text-5xl font-quran text-slate-900 leading-loose py-2 select-text"
            >
              {currentSample.phraseArabic}
            </div>
            <p className="text-sm font-semibold text-teal-800 italic">
              "{currentSample.phraseLatin}"
            </p>

            {/* Target highlight */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-bold">
              <Info className="w-4 h-4 text-amber-600 shrink-0" />
              Fokus pada kata: <span className="font-arabic text-base sm:text-lg">{currentSample.targetWordArabic}</span>
            </div>
          </div>

          {/* Question Prompt */}
          <div>
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-4 text-center">
              Manakah hukum tajwid yang tepat pada lafaz yang disorot di atas?
            </h3>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentSample.options.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                const isCorrect = opt === currentSample.hukumTajwid;

                let btnStyle = 'bg-white border-slate-200 hover:border-teal-500 hover:bg-teal-50/30 text-slate-800';

                if (hasAnswered) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-500 text-white border-emerald-600 shadow-md font-bold';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-rose-500 text-white border-rose-600 shadow-md';
                  } else {
                    btnStyle = 'bg-slate-100 text-slate-400 border-slate-200 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={hasAnswered}
                    onClick={() => handleSelectOption(opt)}
                    className={`p-4 rounded-2xl border text-sm font-semibold transition-all flex items-center justify-between gap-3 text-left cursor-pointer ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {hasAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 shrink-0" />}
                    {hasAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Result Explanation Card */}
          {hasAnswered && (
            <div className={`p-5 rounded-2xl border animate-in fade-in duration-200 space-y-3 ${
              selectedOption === currentSample.hukumTajwid
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : 'bg-rose-50 border-rose-200 text-rose-950'
            }`}>
              <div className="flex items-center gap-2 font-black text-sm">
                {selectedOption === currentSample.hukumTajwid ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Diagnosa Tepat! (+15 XP)</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span>Jawaban Benar adalah: {currentSample.hukumTajwid}</span>
                  </>
                )}
              </div>

              <div className="space-y-1.5 text-xs sm:text-sm">
                <p>
                  <strong>Penyebab:</strong> {currentSample.hurufPenyebab}
                </p>
                <p>
                  <strong>Kaidah Cara Baca:</strong> {currentSample.caraBaca}
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>{currentIndex < filteredSamples.length - 1 ? 'Lanjut Kasus Berikutnya' : 'Selesai'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Reset button when at end */}
          {currentIndex === filteredSamples.length - 1 && hasAnswered && (
            <div className="text-center pt-4">
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl bg-slate-800 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Ulangi Laboratorium Tajwid
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
