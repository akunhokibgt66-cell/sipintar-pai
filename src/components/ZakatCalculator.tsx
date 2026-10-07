import React, { useState } from 'react';
import { 
  Calculator, 
  Coins, 
  Wheat, 
  Store, 
  Users, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Sparkles,
  HelpCircle,
  ArrowRight,
  Info
} from 'lucide-react';
import { zakatProblemsData, ZakatProblem } from '../data/zakatPractices';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';

interface ZakatCalculatorProps {
  onEarnXp: (amount: number) => void;
}

export const ZakatCalculator: React.FC<ZakatCalculatorProps> = ({ onEarnXp }) => {
  const [activeSubTab, setActiveSubTab] = useState<'latihan' | 'kalkulator'>('latihan');
  
  // State for Latihan
  const [currentProblemIdx, setCurrentProblemIdx] = useState(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [scoreCount, setScoreCount] = useState(0);

  // State for Kalkulator Interaktif
  const [calcType, setCalcType] = useState<'fitri' | 'emas' | 'tabungan' | 'pertanian' | 'perdagangan'>('fitri');
  
  // Kalkulator Zakat Fitri
  const [fitriJiwa, setFitriJiwa] = useState(5);
  const [fitriHargaBeras, setFitriHargaBeras] = useState(15000); // Rp per kg
  const [fitriMetode, setFitriMetode] = useState<'beras' | 'uang'>('beras');

  // Kalkulator Zakat Emas
  const [emasGram, setEmasGram] = useState(100);
  const [emasHargaPerGram, setEmasHargaPerGram] = useState(1300000);

  // Kalkulator Zakat Tabungan
  const [tabunganSaldo, setTabunganSaldo] = useState(100000000);
  
  // Kalkulator Zakat Pertanian
  const [taniPanenKg, setTaniPanenKg] = useState(1500);
  const [taniPengairan, setTaniPengairan] = useState<'biaya' | 'hujan'>('biaya');

  // Kalkulator Zakat Perdagangan
  const [dagangStok, setDagangStok] = useState(150000000);
  const [dagangKas, setDagangKas] = useState(20000000);
  const [dagangUtang, setDagangUtang] = useState(30000000);

  const currentProblem: ZakatProblem = zakatProblemsData[currentProblemIdx]!;

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOptionIdx(idx);
    setIsAnswered(true);

    const isCorrect = currentProblem.pilihanOpsi[idx]!.isCorrect;
    if (isCorrect) {
      sounds.playCorrect();
      setScoreCount(s => s + 1);
      onEarnXp(25);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } else {
      sounds.playWrong();
    }
  };

  const handleNextProblem = () => {
    setSelectedOptionIdx(null);
    setIsAnswered(false);
    if (currentProblemIdx < zakatProblemsData.length - 1) {
      setCurrentProblemIdx(i => i + 1);
      sounds.playClick();
    } else {
      sounds.playFanfare();
    }
  };

  const handleResetLatihan = () => {
    setCurrentProblemIdx(0);
    setSelectedOptionIdx(null);
    setIsAnswered(false);
    setScoreCount(0);
    sounds.playClick();
  };

  // Calculations
  const nisabEmasRupiah = 85 * emasHargaPerGram;
  
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-linear-to-r from-emerald-800 via-teal-800 to-emerald-950 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-2">
              <Calculator className="w-3.5 h-3.5" />
              FIQIH HISAB & PERHITUNGAN ZAKAT SYAR'I
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Simulasi Hitung & Kalkulator Zakat
            </h1>
            <p className="text-emerald-100 text-xs md:text-sm mt-1 max-w-xl">
              Latihan soal perhitungan Zakat Fitri, Zakat Emas, Tabungan, Pertanian, Perdagangan, dan Peternakan lengkap dengan simulasi kalkulator digital.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 shrink-0">
            <button
              onClick={() => { setActiveSubTab('latihan'); sounds.playClick(); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeSubTab === 'latihan' ? 'bg-amber-400 text-slate-900 font-black shadow-xs' : 'text-white hover:bg-white/10'
              }`}
            >
              📝 Latihan Soal Hitung
            </button>
            <button
              onClick={() => { setActiveSubTab('kalkulator'); sounds.playClick(); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeSubTab === 'kalkulator' ? 'bg-amber-400 text-slate-900 font-black shadow-xs' : 'text-white hover:bg-white/10'
              }`}
            >
              🧮 Kalkulator Digital
            </button>
          </div>
        </div>
      </div>

      {activeSubTab === 'latihan' ? (
        /* SUB-TAB 1: LATIHAN SOAL PERHITUNGAN ZAKAT */
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                {currentProblem.tipe}
              </span>
              <span className="text-xs font-medium text-slate-500">
                Kasus #{currentProblemIdx + 1} dari {zakatProblemsData.length}
              </span>
            </div>

            <div className="text-xs font-bold text-slate-700 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200">
              Skor Latihan: <span className="text-emerald-700">{scoreCount}</span> / {zakatProblemsData.length} Benar
            </div>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 mb-2">
              {currentProblem.judul}
            </h2>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm leading-relaxed text-slate-700">
              {currentProblem.kasus}
            </div>
          </div>

          {/* Data Ringkasan Kasus */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block">
              📊 Data & Ketentuan Nisab:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {currentProblem.dataAngka.map((d, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-white border border-emerald-100">
                  <span className="font-bold text-slate-700 block">{d.label}:</span>
                  <span className="text-emerald-800 font-semibold">{d.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pertanyaan & Pilihan Jawaban */}
          <div>
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-3">
              ❓ {currentProblem.pertanyaan}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentProblem.pilihanOpsi.map((opt, idx) => {
                const isSelected = selectedOptionIdx === idx;
                let btnStyle = 'bg-white border-slate-200 hover:border-emerald-500 hover:bg-slate-50 text-slate-800';

                if (isAnswered) {
                  if (opt.isCorrect) {
                    btnStyle = 'bg-emerald-500 text-white border-emerald-600 shadow-md font-bold';
                  } else if (isSelected && !opt.isCorrect) {
                    btnStyle = 'bg-rose-500 text-white border-rose-600 shadow-md';
                  } else {
                    btnStyle = 'bg-slate-100 text-slate-400 border-slate-200 opacity-50';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`p-4 rounded-2xl border text-sm font-semibold transition-all flex items-center justify-between gap-3 text-left cursor-pointer ${btnStyle}`}
                  >
                    <span>{opt.teks}</span>
                    {isAnswered && opt.isCorrect && <CheckCircle2 className="w-5 h-5 shrink-0" />}
                    {isAnswered && isSelected && !opt.isCorrect && <XCircle className="w-5 h-5 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pembahasan & Langkah Hitung */}
          {isAnswered && (
            <div className={`p-5 rounded-2xl border animate-in fade-in duration-200 space-y-3 ${
              selectedOptionIdx !== null && currentProblem.pilihanOpsi[selectedOptionIdx]!.isCorrect
                ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                : 'bg-rose-50 border-rose-300 text-rose-950'
            }`}>
              <div className="flex items-center gap-2 font-black text-sm">
                {selectedOptionIdx !== null && currentProblem.pilihanOpsi[selectedOptionIdx]!.isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Perhitunganmu Tepat! (+25 XP)</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span>Jawaban Tepat adalah: {currentProblem.pilihanOpsi.find(o => o.isCorrect)?.teks}</span>
                  </>
                )}
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm text-slate-800 space-y-2">
                <p className="font-bold text-emerald-900">
                  📐 Rumus Fiqih: {currentProblem.rumus}
                </p>
                <div className="space-y-1">
                  <strong className="block text-slate-700">Langkah-Langkah:</strong>
                  {currentProblem.langkahPerhitungan.map((step, sIdx) => (
                    <p key={sIdx} className="text-slate-600">{step}</p>
                  ))}
                </div>
                <p className="text-xs text-slate-500 italic pt-1 border-t border-slate-100">
                  💡 Kesimpulan: {currentProblem.kesimpulanHukum}
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                {currentProblemIdx < zakatProblemsData.length - 1 ? (
                  <button
                    onClick={handleNextProblem}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <span>Lanjut ke Kasus Berikutnya</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleResetLatihan}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Ulangi Latihan Zakat
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* SUB-TAB 2: KALKULATOR DIGITAL INTERAKTIF */
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
          {/* Tipe Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-bold">
            <button
              onClick={() => setCalcType('fitri')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                calcType === 'fitri' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              Zakat Fitri
            </button>
            <button
              onClick={() => setCalcType('emas')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                calcType === 'emas' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Coins className="w-3.5 h-3.5" />
              Zakat Emas
            </button>
            <button
              onClick={() => setCalcType('tabungan')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                calcType === 'tabungan' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              Zakat Tabungan
            </button>
            <button
              onClick={() => setCalcType('pertanian')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                calcType === 'pertanian' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Wheat className="w-3.5 h-3.5" />
              Zakat Pertanian
            </button>
            <button
              onClick={() => setCalcType('perdagangan')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                calcType === 'perdagangan' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              Zakat Dagang
            </button>
          </div>

          {/* Form Calculator Sesuai Tipe */}
          {calcType === 'fitri' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Jumlah Jiwa Tanggungan (orang):
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={fitriJiwa}
                    onChange={(e) => setFitriJiwa(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full p-3 rounded-xl border border-slate-300 font-bold text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Harga Beras per Kg (Rp):
                  </label>
                  <input
                    type="number"
                    step="500"
                    value={fitriHargaBeras}
                    onChange={(e) => setFitriHargaBeras(parseInt(e.target.value) || 0)}
                    className="w-full p-3 rounded-xl border border-slate-300 font-bold text-sm"
                  />
                </div>
              </div>

              {/* Hasil */}
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
                <span className="text-xs uppercase font-bold text-emerald-900 block">Hasil Kalkulasi Zakat Fitri:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-emerald-200 text-center">
                    <span className="text-xs text-slate-500 font-bold block">Jika Dibayar Beras (2,5 kg / jiwa):</span>
                    <span className="text-2xl font-black text-emerald-700">
                      {(fitriJiwa * 2.5).toFixed(1)} kg beras
                    </span>
                    <span className="text-[11px] text-slate-400 block">atau {(fitriJiwa * 3.5).toFixed(1)} liter</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-emerald-200 text-center">
                    <span className="text-xs text-slate-500 font-bold block">Jika Dikonversi Uang Tunai:</span>
                    <span className="text-2xl font-black text-emerald-700">
                      Rp {(fitriJiwa * 2.5 * fitriHargaBeras).toLocaleString('id-ID')}
                    </span>
                    <span className="text-[11px] text-slate-400 block">untuk {fitriJiwa} jiwa</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {calcType === 'emas' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Berat Emas Simpanan (gram):
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={emasGram}
                    onChange={(e) => setEmasGram(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full p-3 rounded-xl border border-slate-300 font-bold text-sm"
                  />
                  <span className="text-[11px] text-slate-500 mt-1 block">Nisab wajib: 85 gram</span>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Harga Emas Murni Saat Ini (Rp/gram):
                  </label>
                  <input
                    type="number"
                    step="50000"
                    value={emasHargaPerGram}
                    onChange={(e) => setEmasHargaPerGram(parseInt(e.target.value) || 0)}
                    className="w-full p-3 rounded-xl border border-slate-300 font-bold text-sm"
                  />
                </div>
              </div>

              {/* Status Nisab & Hasil */}
              <div className={`p-6 rounded-2xl border space-y-3 ${
                emasGram >= 85 ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-slate-700">Status Kewajiban:</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-black ${
                    emasGram >= 85 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {emasGram >= 85 ? 'Wajib Zakat (≥ 85 gr)' : 'Belum Wajib Zakat (< 85 gr)'}
                  </span>
                </div>

                {emasGram >= 85 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-white border border-emerald-200 text-center">
                      <span className="text-xs text-slate-500 font-bold block">Zakat (2,5% dari emas):</span>
                      <span className="text-2xl font-black text-emerald-700">
                        {(emasGram * 0.025).toFixed(2)} gram emas
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-emerald-200 text-center">
                      <span className="text-xs text-slate-500 font-bold block">Nominal Rupiah:</span>
                      <span className="text-2xl font-black text-emerald-700">
                        Rp {Math.round(emasGram * 0.025 * emasHargaPerGram).toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-slate-500">
                    Emas Anda belum mencapai nisab 85 gram. Anda belum wajib mengeluarkan zakat mal emas, namun disunnahkan memperbanyak sedekah sukarela.
                  </p>
                )}
              </div>
            </div>
          )}

          {calcType === 'tabungan' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Saldo Tabungan Mengendap 1 Tahun (Rp):
                </label>
                <input
                  type="number"
                  step="1000000"
                  value={tabunganSaldo}
                  onChange={(e) => setTabunganSaldo(parseInt(e.target.value) || 0)}
                  className="w-full p-3 rounded-xl border border-slate-300 font-bold text-sm"
                />
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Nisab setara 85 gr emas = Rp {nisabEmasRupiah.toLocaleString('id-ID')}
                </span>
              </div>

              <div className={`p-6 rounded-2xl border space-y-3 ${
                tabunganSaldo >= nisabEmasRupiah ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-slate-700">Status Zakat Tabungan:</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-black ${
                    tabunganSaldo >= nisabEmasRupiah ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {tabunganSaldo >= nisabEmasRupiah ? 'Wajib Zakat (Mencapai Nisab)' : 'Belum Wajib Zakat'}
                  </span>
                </div>

                {tabunganSaldo >= nisabEmasRupiah && (
                  <div className="p-4 rounded-xl bg-white border border-emerald-200 text-center">
                    <span className="text-xs text-slate-500 font-bold block">Nominal Zakat (2,5%):</span>
                    <span className="text-3xl font-black text-emerald-700">
                      Rp {Math.round(tabunganSaldo * 0.025).toLocaleString('id-ID')}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {calcType === 'pertanian' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Hasil Panen Gabah/Padi (kg):
                  </label>
                  <input
                    type="number"
                    value={taniPanenKg}
                    onChange={(e) => setTaniPanenKg(parseInt(e.target.value) || 0)}
                    className="w-full p-3 rounded-xl border border-slate-300 font-bold text-sm"
                  />
                  <span className="text-[11px] text-slate-500 mt-1 block">Nisab 5 wasaq = 653 kg gabah</span>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Sistem Pengairan:
                  </label>
                  <select
                    value={taniPengairan}
                    onChange={(e) => setTaniPengairan(e.target.value as 'biaya' | 'hujan')}
                    className="w-full p-3 rounded-xl border border-slate-300 font-bold text-sm bg-white"
                  >
                    <option value="biaya">Irigasi Berbiaya / Pompa Air (5%)</option>
                    <option value="hujan">Tadah Hujan / Alami Tanpa Biaya (10%)</option>
                  </select>
                </div>
              </div>

              <div className={`p-6 rounded-2xl border space-y-3 ${
                taniPanenKg >= 653 ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-slate-700">Status Zakat Panen:</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-black ${
                    taniPanenKg >= 653 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {taniPanenKg >= 653 ? 'Wajib Zakat Saat Panen' : 'Belum Mencapai Nisab (< 653 kg)'}
                  </span>
                </div>

                {taniPanenKg >= 653 && (
                  <div className="p-4 rounded-xl bg-white border border-emerald-200 text-center">
                    <span className="text-xs text-slate-500 font-bold block">
                      Zakat Panen ({taniPengairan === 'biaya' ? '5%' : '10%'}):
                    </span>
                    <span className="text-3xl font-black text-emerald-700">
                      {(taniPanenKg * (taniPengairan === 'biaya' ? 0.05 : 0.1)).toFixed(1)} kg gabah
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {calcType === 'perdagangan' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Nilai Stok Dagang (Rp):</label>
                  <input
                    type="number"
                    value={dagangStok}
                    onChange={(e) => setDagangStok(parseInt(e.target.value) || 0)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 font-bold text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Uang Kas & Piutang (Rp):</label>
                  <input
                    type="number"
                    value={dagangKas}
                    onChange={(e) => setDagangKas(parseInt(e.target.value) || 0)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 font-bold text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Utang Jatuh Tempo (Rp):</label>
                  <input
                    type="number"
                    value={dagangUtang}
                    onChange={(e) => setDagangUtang(parseInt(e.target.value) || 0)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 font-bold text-xs"
                  />
                </div>
              </div>

              {(() => {
                const asetBersih = dagangStok + dagangKas - dagangUtang;
                const isWajib = asetBersih >= nisabEmasRupiah;
                const zakatVal = isWajib ? asetBersih * 0.025 : 0;

                return (
                  <div className={`p-6 rounded-2xl border space-y-3 ${
                    isWajib ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span>Aset Bersih Perniagaan: Rp {asetBersih.toLocaleString('id-ID')}</span>
                      <span className={`px-2.5 py-1 rounded-full ${isWajib ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'}`}>
                        {isWajib ? 'Wajib Zakat' : 'Di Bawah Nisab'}
                      </span>
                    </div>

                    {isWajib && (
                      <div className="p-4 rounded-xl bg-white border border-emerald-200 text-center">
                        <span className="text-xs text-slate-500 font-bold block">Zakat Perniagaan (2,5%):</span>
                        <span className="text-3xl font-black text-emerald-700">
                          Rp {Math.round(zakatVal).toLocaleString('id-ID')}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
