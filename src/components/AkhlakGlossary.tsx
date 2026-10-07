import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ShieldAlert, 
  ShieldCheck, 
  BookOpen, 
  Gamepad2,
  RotateCcw
} from 'lucide-react';
import { akhlakTermsData, AkhlakTerm } from '../data/akhlakTerms';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';

interface AkhlakGlossaryProps {
  onEarnXp: (amount: number) => void;
}

export const AkhlakGlossary: React.FC<AkhlakGlossaryProps> = ({ onEarnXp }) => {
  const [activeMode, setActiveMode] = useState<'kamus' | 'kuis'>('kamus');
  const [filterType, setFilterType] = useState<'Semua' | 'Mahmudah' | 'Mazmumah'>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Game state
  const [gameIdx, setGameIdx] = useState(0);
  const [selectedGuess, setSelectedGuess] = useState<string | null>(null);
  const [isGuessAnswered, setIsGuessAnswered] = useState(false);
  const [gameScore, setGameScore] = useState(0);

  const filteredTerms = akhlakTermsData.filter(term => {
    const matchType = filterType === 'Semua' || term.tipe === filterType;
    const matchSearch = term.namaLatin.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        term.artiSingkat.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        term.definisiLengkap.toLowerCase().includes(searchQuery.toLowerCase());
    return matchType && matchSearch;
  });

  // Setup game question
  const currentGameTerm = akhlakTermsData[gameIdx];
  // Generate 4 randomized options
  const otherTerms = akhlakTermsData.filter(t => t.id !== currentGameTerm.id);
  const shuffledOptions = React.useMemo(() => {
    const distractors = [...otherTerms].sort(() => 0.5 - Math.random()).slice(0, 3);
    return [currentGameTerm, ...distractors].sort(() => 0.5 - Math.random());
  }, [gameIdx]);

  const handleGuess = (termName: string) => {
    if (isGuessAnswered) return;
    setSelectedGuess(termName);
    setIsGuessAnswered(true);

    if (termName === currentGameTerm.namaLatin) {
      sounds.playCorrect();
      setGameScore(s => s + 1);
      onEarnXp(20);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 }
      });
    } else {
      sounds.playWrong();
    }
  };

  const handleNextGame = () => {
    setSelectedGuess(null);
    setIsGuessAnswered(false);
    if (gameIdx < akhlakTermsData.length - 1) {
      setGameIdx(i => i + 1);
      sounds.playClick();
    } else {
      sounds.playFanfare();
      setGameIdx(0);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-linear-to-r from-amber-700 via-orange-800 to-amber-950 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black bg-amber-400/20 text-amber-200 border border-amber-300/30 mb-2">
              <HeartHandshake className="w-3.5 h-3.5" />
              ENSIKLOPEDIA AKHLAK ISLAMI
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Kamus Akhlak Mahmudah & Mazmumah
            </h1>
            <p className="text-amber-100 text-xs md:text-sm mt-1 max-w-xl">
              Pahami istilah akhlak terpuji (Qana'ah, Syaja'ah, Tawadhu') dan jauhi akhlak tercela (Ananiah, Hasad, Riya', Ujub, Kibr, Namimah).
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 shrink-0">
            <button
              onClick={() => { setActiveMode('kamus'); sounds.playClick(); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeMode === 'kamus' ? 'bg-amber-400 text-slate-900 font-black shadow-xs' : 'text-white hover:bg-white/10'
              }`}
            >
              📚 Kamus Istilah
            </button>
            <button
              onClick={() => { setActiveMode('kuis'); sounds.playClick(); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeMode === 'kuis' ? 'bg-amber-400 text-slate-900 font-black shadow-xs' : 'text-white hover:bg-white/10'
              }`}
            >
              🎮 Kuis Tebak Istilah
            </button>
          </div>
        </div>
      </div>

      {activeMode === 'kamus' ? (
        /* KAMUS VIEW */
        <div className="space-y-6">
          {/* Controls Filter */}
          <div className="bg-white p-4 rounded-3xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
              {(['Semua', 'Mahmudah', 'Mazmumah'] as const).map(type => (
                <button
                  key={type}
                  onClick={() => { setFilterType(type); sounds.playClick(); }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    filterType === type 
                      ? 'bg-amber-600 text-white shadow-xs' 
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {type === 'Mahmudah' ? '✨ Terpuji (Mahmudah)' : type === 'Mazmumah' ? '⚠️ Tercela (Mazmumah)' : 'Semua Istilah'}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari Qana'ah, Hasad..."
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:border-amber-500 font-medium"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTerms.map((term) => {
              const isGood = term.tipe === 'Mahmudah';

              return (
                <div
                  key={term.id}
                  className={`p-6 rounded-3xl bg-white border transition-all space-y-4 hover:shadow-md ${
                    isGood ? 'border-emerald-200/90 hover:border-emerald-400' : 'border-rose-200/90 hover:border-rose-400'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                          isGood ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}>
                          {isGood ? 'Akhlak Mahmudah' : 'Akhlak Mazmumah'}
                        </span>
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                        <span>{term.namaLatin}</span>
                        <span className="font-arabic text-xl sm:text-2xl text-slate-600">({term.namaArab})</span>
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      isGood ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                    }`}>
                      {isGood ? <ShieldCheck className="w-5 h-5" /> : <ShieldAlert className="w-5 h-5" />}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-amber-900 bg-amber-50/80 p-2.5 rounded-xl border border-amber-200/60">
                    "{term.artiSingkat}"
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {term.definisiLengkap}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                    <p className="text-slate-500 italic">
                      <strong className="text-slate-700 not-italic">Dalil:</strong> {term.dalilAtauHadis}
                    </p>
                    <p className="text-emerald-950 font-medium">
                      <strong className="text-slate-700">Contoh Sikap:</strong> {term.contohKehidupan}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* KUIS TEBAK ISTILAH GAME VIEW */
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900">
              Tantangan #{gameIdx + 1} dari {akhlakTermsData.length}
            </span>
            <span className="text-xs font-bold text-emerald-700">
              Skor: {gameScore} Benar (+20 XP tiap benar)
            </span>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
              Perhatikan Perilaku & Definisi Berikut:
            </span>
            <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200 text-slate-900 font-bold text-sm sm:text-base leading-relaxed">
              "{currentGameTerm.definisiLengkap}"
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 text-xs text-slate-600">
              <strong>Contoh Riil:</strong> {currentGameTerm.contohKehidupan}
            </div>
          </div>

          <div>
            <h3 className="font-extrabold text-slate-900 text-sm mb-3">
              Apakah nama istilah akhlak yang tepat untuk deskripsi di atas?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {shuffledOptions.map((opt, idx) => {
                const isSelected = selectedGuess === opt.namaLatin;
                const isTarget = opt.namaLatin === currentGameTerm.namaLatin;

                let btnStyle = 'bg-white border-slate-200 hover:border-amber-500 hover:bg-slate-50 text-slate-800';

                if (isGuessAnswered) {
                  if (isTarget) {
                    btnStyle = 'bg-emerald-500 text-white border-emerald-600 shadow-md font-bold';
                  } else if (isSelected && !isTarget) {
                    btnStyle = 'bg-rose-500 text-white border-rose-600 shadow-md';
                  } else {
                    btnStyle = 'bg-slate-100 text-slate-400 border-slate-200 opacity-50';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isGuessAnswered}
                    onClick={() => handleGuess(opt.namaLatin)}
                    className={`p-4 rounded-2xl border text-sm font-bold transition-all flex items-center justify-between gap-3 text-left cursor-pointer ${btnStyle}`}
                  >
                    <span>{opt.namaLatin} ({opt.namaArab})</span>
                    {isGuessAnswered && isTarget && <CheckCircle2 className="w-5 h-5 shrink-0" />}
                    {isGuessAnswered && isSelected && !isTarget && <XCircle className="w-5 h-5 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {isGuessAnswered && (
            <div className={`p-5 rounded-2xl border animate-in fade-in duration-200 space-y-2 ${
              selectedGuess === currentGameTerm.namaLatin ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-rose-50 border-rose-200 text-rose-950'
            }`}>
              <div className="flex items-center gap-2 font-black text-sm">
                {selectedGuess === currentGameTerm.namaLatin ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Tebakanmu Tepat! (+20 XP)
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    Jawaban yang Tepat adalah: {currentGameTerm.namaLatin}
                  </>
                )}
              </div>

              <p className="text-xs sm:text-sm">
                <strong>Intisari:</strong> {currentGameTerm.artiSingkat}.
              </p>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleNextGame}
                  className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-xs cursor-pointer"
                >
                  Lanjut ke Soal Berikutnya
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
