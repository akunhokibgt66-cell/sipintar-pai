import React, { useState } from 'react';
import { 
  Languages, 
  Search, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  RotateCcw, 
  Keyboard,
  BookOpen
} from 'lucide-react';
import { transliterasiTable, transliterasiPractices, TransliterasiPractice } from '../data/transliterasiTable';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';

interface TransliterasiTrainerProps {
  onEarnXp: (amount: number) => void;
}

export const TransliterasiTrainer: React.FC<TransliterasiTrainerProps> = ({ onEarnXp }) => {
  const [activeSubTab, setActiveSubTab] = useState<'tabel' | 'latihan'>('tabel');
  const [searchFilter, setSearchFilter] = useState('');
  const [practiceIdx, setPracticeIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const specialChars = ['ā', 'ī', 'ū', 'ḥ', 'ṣ', 'ḍ', 'ṭ', 'ẓ', 'ż', 'ṡ', '‘', '’'];

  const filteredTable = transliterasiTable.filter(item => 
    item.nama.toLowerCase().includes(searchFilter.toLowerCase()) ||
    item.latin.toLowerCase().includes(searchFilter.toLowerCase()) ||
    item.arab.includes(searchFilter)
  );

  const currentPractice: TransliterasiPractice = transliterasiPractices[practiceIdx]!;

  const handleInsertChar = (ch: string) => {
    setUserAnswer(prev => prev + ch);
    sounds.playClick();
  };

  const handleCheckAnswer = () => {
    if (!userAnswer.trim()) return;
    setIsAnswered(true);

    // Normalize for flexible comparison
    const normUser = userAnswer.trim().toLowerCase().replace(/\s+/g, ' ');
    const normTarget = currentPractice.correctLatin.trim().toLowerCase().replace(/\s+/g, ' ');

    if (normUser === normTarget) {
      setIsCorrect(true);
      sounds.playCorrect();
      onEarnXp(20);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 }
      });
    } else {
      setIsCorrect(false);
      sounds.playWrong();
    }
  };

  const handleNextPractice = () => {
    setUserAnswer('');
    setIsAnswered(false);
    setIsCorrect(false);
    if (practiceIdx < transliterasiPractices.length - 1) {
      setPracticeIdx(i => i + 1);
      sounds.playClick();
    } else {
      setPracticeIdx(0);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-linear-to-r from-indigo-800 via-indigo-900 to-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 mb-2">
              <Languages className="w-3.5 h-3.5" />
              STANDAR RESMI SKB MENAG & MENDIKBUD NO. 158/1987
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Panduan & Pelatih Transliterasi Arab-Latin
            </h1>
            <p className="text-indigo-100 text-xs md:text-sm mt-1 max-w-xl">
              Kuasai konversi huruf bertitik bawah (ḥ, ṣ, ḍ, ṭ, ẓ) dan vokal panjang makron (ā, ī, ū) untuk nilai sempurna di ujian tulis MAPSI!
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20">
            <button
              onClick={() => { setActiveSubTab('tabel'); sounds.playClick(); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeSubTab === 'tabel' ? 'bg-white text-indigo-950 font-black shadow-xs' : 'text-white hover:bg-white/10'
              }`}
            >
              📖 Tabel Huruf
            </button>
            <button
              onClick={() => { setActiveSubTab('latihan'); sounds.playClick(); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeSubTab === 'latihan' ? 'bg-white text-indigo-950 font-black shadow-xs' : 'text-white hover:bg-white/10'
              }`}
            >
              ✍️ Uji Praktik
            </button>
          </div>
        </div>
      </div>

      {activeSubTab === 'tabel' ? (
        /* Tabel Pedoman */
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Tabel Baku Alih Aksara 28 Huruf Hijaiah
              </h2>
              <p className="text-xs text-slate-500">
                Klik karakter khusus pada keyboard di bawah saat menuliskan jawaban esai
              </p>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Cari huruf atau latin..."
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[11px]">
                  <th className="pb-3 px-3">Arab</th>
                  <th className="pb-3 px-3">Nama Huruf</th>
                  <th className="pb-3 px-3">Transliterasi Latin</th>
                  <th className="pb-3 px-3">Contoh Kata</th>
                  <th className="pb-3 px-3">Keterangan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredTable.map((item, idx) => (
                  <tr key={idx} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="py-3 px-3 font-arabic text-xl sm:text-2xl text-slate-900">
                      {item.arab}
                    </td>
                    <td className="py-3 px-3 font-semibold text-slate-800">
                      {item.nama}
                    </td>
                    <td className="py-3 px-3 font-bold text-indigo-700 font-mono text-sm">
                      {item.latin}
                    </td>
                    <td className="py-3 px-3">
                      <span className="font-arabic text-base sm:text-lg text-slate-800 mr-2">{item.contohArab}</span>
                      <span className="text-xs text-slate-500 italic">({item.contohLatin})</span>
                    </td>
                    <td className="py-3 px-3 text-xs text-slate-500">
                      {item.keterangan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Latihan Praktik Mengetik */
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200">
              Latihan Soal #{practiceIdx + 1} dari {transliterasiPractices.length}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              Bonus: +20 XP per jawaban tepat
            </span>
          </div>

          <div className="text-center space-y-3 py-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Alihkan Tulisan Arab Berikut Ke Huruf Latin SKB:
            </span>
            <div 
              dir="rtl"
              className="text-3xl sm:text-4xl font-quran text-slate-900 leading-loose py-2 select-text"
            >
              {currentPractice.arab}
            </div>
            <p className="text-xs text-indigo-700 font-medium">
              Petunjuk: {currentPractice.hint}
            </p>
          </div>

          {/* Virtual Diacritic Keyboard */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
              <Keyboard className="w-4 h-4 text-indigo-600" />
              Keyboard Karakter Khusus (Klik untuk memasukkan ke kolom):
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {specialChars.map((ch, idx) => (
                <button
                  key={idx}
                  onClick={() => handleInsertChar(ch)}
                  className="w-9 h-9 rounded-xl bg-white border border-slate-300 hover:border-indigo-500 hover:bg-indigo-50 text-indigo-950 font-bold text-sm shadow-2xs transition-all cursor-pointer flex items-center justify-center font-mono"
                >
                  {ch}
                </button>
              ))}
              <button
                onClick={() => setUserAnswer('')}
                className="px-3 h-9 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
              >
                Hapus
              </button>
            </div>
          </div>

          {/* User Input Field */}
          <div className="space-y-3">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Ketik hasil transliterasi di sini... (contoh: Aṣ-ṣalātu...)"
              className="w-full p-4 rounded-2xl border-2 border-slate-200 focus:border-indigo-600 focus:outline-none text-sm sm:text-base font-semibold"
            />

            <div className="flex justify-end gap-2">
              {!isAnswered ? (
                <button
                  onClick={handleCheckAnswer}
                  className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-xs cursor-pointer"
                >
                  Periksa Transliterasi
                </button>
              ) : (
                <button
                  onClick={handleNextPractice}
                  className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-xs cursor-pointer"
                >
                  Lanjut Latihan Berikutnya
                </button>
              )}
            </div>
          </div>

          {/* Feedback Card */}
          {isAnswered && (
            <div className={`p-5 rounded-2xl border animate-in fade-in duration-200 space-y-2 ${
              isCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-rose-50 border-rose-300 text-rose-950'
            }`}>
              <div className="flex items-center gap-2 font-black text-sm">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Transliterasi Sempurna! (+20 XP)
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    Penulisan Belum Sesuai Baku
                  </>
                )}
              </div>

              <div className="text-xs sm:text-sm space-y-1">
                <p>
                  <strong>Kunci Transliterasi Baku:</strong>{' '}
                  <span className="font-mono text-indigo-900 font-bold bg-white px-2 py-0.5 rounded-md">
                    {currentPractice.correctLatin}
                  </span>
                </p>
                <p className="text-slate-600">
                  {currentPractice.explanation}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
