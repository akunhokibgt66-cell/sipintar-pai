import React, { useState } from 'react';
import { 
  Compass, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight, 
  RotateCcw,
  BookOpen,
  HelpCircle,
  Lightbulb
} from 'lucide-react';
import { wigginsCases, WigginsCase } from '../data/wigginsCases';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';

interface WigginsChallengeProps {
  onEarnXp: (amount: number) => void;
}

export const WigginsChallenge: React.FC<WigginsChallengeProps> = ({ onEarnXp }) => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [chosenOptionIdx, setChosenOptionIdx] = useState<number | null>(null);
  const [answeredCases, setAnsweredCases] = useState<{ [caseId: string]: boolean }>({});

  const currentCase: WigginsCase = wigginsCases[selectedCaseIdx]!;

  const handleSelectOption = (idx: number) => {
    if (chosenOptionIdx !== null) return;
    setChosenOptionIdx(idx);

    const isBest = currentCase.options[idx]!.isBest;
    if (isBest) {
      sounds.playCorrect();
      onEarnXp(25);
      setAnsweredCases(prev => ({ ...prev, [currentCase.id]: true }));
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } else {
      sounds.playWrong();
    }
  };

  const handleNextCase = () => {
    setChosenOptionIdx(null);
    if (selectedCaseIdx < wigginsCases.length - 1) {
      setSelectedCaseIdx(i => i + 1);
      sounds.playClick();
    }
  };

  const getFacetColor = (facet: string) => {
    switch (facet) {
      case 'Penjelasan': return 'from-blue-600 to-indigo-700';
      case 'Interpretasi': return 'from-purple-600 to-fuchsia-700';
      case 'Aplikasi': return 'from-emerald-600 to-teal-700';
      case 'Perspektif': return 'from-amber-600 to-orange-700';
      case 'Empati': return 'from-rose-600 to-pink-700';
      case 'Refleksi': return 'from-cyan-600 to-teal-700';
      default: return 'from-emerald-600 to-teal-700';
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Banner */}
      <div className={`p-6 md:p-8 rounded-3xl bg-linear-to-r ${getFacetColor(currentCase.facet)} text-white shadow-xl relative overflow-hidden`}>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black bg-white/20 backdrop-blur-xs mb-2">
              <Compass className="w-3.5 h-3.5" />
              6 DIMENSI PEMAHAMAN WIGGINS & McTIGHE
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Tantangan Studi Kasus HOTS
            </h1>
            <p className="text-white/90 text-xs md:text-sm mt-1 max-w-xl">
              Aspek {currentCase.facet}: Memahami esensi agama lebih dari sekadar hafalan tekstual, melainkan kemampuan bernalar dan berempati.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center shrink-0">
            <span className="text-xs uppercase tracking-wider font-bold text-white/80 block">Progres Kasus</span>
            <div className="text-2xl font-black">
              {Object.keys(answeredCases).length} / {wigginsCases.length} Tuntas
            </div>
          </div>
        </div>
      </div>

      {/* Facet Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
        {wigginsCases.map((c, idx) => {
          const isDone = answeredCases[c.id];
          const isCurrent = selectedCaseIdx === idx;

          return (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCaseIdx(idx);
                setChosenOptionIdx(null);
                sounds.playClick();
              }}
              className={`p-3 rounded-2xl border text-center transition-all cursor-pointer relative ${
                isCurrent 
                  ? 'bg-emerald-600 text-white font-extrabold border-emerald-600 shadow-md scale-102' 
                  : isDone
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span className="text-[10px] uppercase font-bold tracking-wider block opacity-75">
                Aspek {idx + 1}
              </span>
              <span className="text-xs font-bold block truncate">
                {c.facet}
              </span>
              {isDone && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500"></span>
              )}
            </button>
          );
        })}
      </div>

      {/* Case Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800">
            Fokus: Dimensi {currentCase.facet}
          </span>
          <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            Landasan: {currentCase.theologicalPrinciple}
          </span>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
            {currentCase.title}
          </h2>

          {/* Scenario Box */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm sm:text-base leading-relaxed text-slate-700">
            <p className="font-medium">{currentCase.scenario}</p>
          </div>
        </div>

        {/* Question Prompt */}
        <div>
          <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-4">
            ❓ {currentCase.question}
          </h3>

          <div className="space-y-3">
            {currentCase.options.map((opt, optIdx) => {
              const isSelected = chosenOptionIdx === optIdx;
              const hasAnswered = chosenOptionIdx !== null;

              let style = 'bg-white border-slate-200 hover:border-emerald-400 hover:bg-slate-50 text-slate-800';

              if (hasAnswered) {
                if (opt.isBest) {
                  style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                } else if (isSelected && !opt.isBest) {
                  style = 'bg-rose-50 border-rose-400 text-rose-950';
                } else {
                  style = 'bg-slate-50 border-slate-200 opacity-50';
                }
              }

              return (
                <div
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`p-4 sm:p-5 rounded-2xl border text-sm leading-relaxed transition-all cursor-pointer flex items-start gap-3.5 ${style}`}
                >
                  <span className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 mt-0.5 ${
                    hasAnswered && opt.isBest 
                      ? 'bg-emerald-600 text-white' 
                      : hasAnswered && isSelected 
                        ? 'bg-rose-600 text-white' 
                        : 'bg-slate-100 text-slate-700'
                  }`}>
                    {optIdx + 1}
                  </span>

                  <div className="flex-1">
                    <p>{opt.text}</p>
                    {hasAnswered && (isSelected || opt.isBest) && (
                      <div className={`mt-2.5 pt-2.5 border-t text-xs font-semibold ${
                        opt.isBest ? 'border-emerald-200 text-emerald-800' : 'border-rose-200 text-rose-800'
                      }`}>
                        {opt.feedback}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Deep Insight Reveal */}
        {chosenOptionIdx !== null && (
          <div className="p-5 rounded-2xl bg-linear-to-r from-sky-50 to-indigo-50 border border-sky-200 text-sky-950 space-y-2 animate-in fade-in duration-200">
            <div className="font-extrabold text-sm flex items-center gap-2 text-sky-900">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              Refleksi Aspek Pemahaman:
            </div>
            <p className="text-xs sm:text-sm leading-relaxed font-medium">
              {currentCase.deepInsight}
            </p>

            <div className="pt-3 flex justify-end">
              {selectedCaseIdx < wigginsCases.length - 1 ? (
                <button
                  onClick={handleNextCase}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>Lanjut ke Aspek Berikutnya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 text-slate-900 font-black text-xs">
                  <Sparkles className="w-4 h-4" />
                  Semua 6 Dimensi Telah Selesai Ditelusuri!
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
