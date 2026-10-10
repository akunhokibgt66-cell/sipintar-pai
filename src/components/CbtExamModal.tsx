import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Timer, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  HelpCircle,
  Sparkles,
  BookOpen,
  Printer,
  X
} from 'lucide-react';
import { cbtBank } from '../data/cbtBank';
import { QuizQuestion, RuangLingkupId } from '../types';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';

interface CbtExamModalProps {
  onEarnXp: (amount: number) => void;
  onClose?: () => void;
  studentName?: string;
  schoolName?: string;
  onFinishExam?: (score: number, total: number) => void;
}

export const CbtExamModal: React.FC<CbtExamModalProps> = ({ 
  onEarnXp, 
  onClose,
  studentName: propStudentName,
  schoolName: propSchoolName,
  onFinishExam 
}) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [index: number]: number }>({});
  const [doubtStatus, setDoubtStatus] = useState<{ [index: number]: boolean }>({});
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5400); // 90 menit untuk 100 soal
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [cheatWarnings, setCheatWarnings] = useState(0);
  const [cheatMessage, setCheatMessage] = useState<string | null>(null);
  const [studentName, setStudentName] = useState(propStudentName || 'Santri Berprestasi');
  const [schoolName, setSchoolName] = useState(propSchoolName || 'SD Unggulan');
  const [showCertificate, setShowCertificate] = useState(false);

  const shuffleQuestions = () => {
    // Acak urutan soal DAN urutan pilihan jawaban (anti contek)
    const shuffled = [...cbtBank].sort(() => Math.random() - 0.5).map(q => {
      const order = q.pilihan.map((_, i) => i).sort(() => Math.random() - 0.5);
      return {
        ...q,
        pilihan: order.map(i => q.pilihan[i]),
        kunciJawaban: order.indexOf(q.kunciJawaban),
      };
    });
    setQuestions(shuffled);
  };

  useEffect(() => {
    shuffleQuestions();
  }, []);

  // Anti contek: deteksi pindah tab/aplikasi & blokir copy-paste
  useEffect(() => {
    if (isFinished) return;

    const handleVisibility = () => {
      if (document.hidden) {
        setCheatWarnings(prev => {
          const next = prev + 1;
          if (next >= 3) {
            setCheatMessage('Ujian dikumpulkan otomatis karena berulang kali meninggalkan halaman ujian.');
            handleSubmitExam();
          } else {
            setCheatMessage(`Peringatan ${next}/3: Jangan meninggalkan halaman ujian!`);
          }
          return next;
        });
      }
    };

    const blockCopy = (e: Event) => e.preventDefault();
    const blockContext = (e: Event) => e.preventDefault();

    document.addEventListener('visibilitychange', handleVisibility);
    document.addEventListener('copy', blockCopy);
    document.addEventListener('cut', blockCopy);
    document.addEventListener('contextmenu', blockContext);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      document.removeEventListener('copy', blockCopy);
      document.removeEventListener('cut', blockCopy);
      document.removeEventListener('contextmenu', blockContext);
    };
  }, [isFinished, questions, answers]);

  useEffect(() => {
    if (!isTimerActive || isFinished) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isTimerActive, isFinished]);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectAnswer = (optionIdx: number) => {
    setAnswers(prev => ({ ...prev, [currentIndex]: optionIdx }));
    sounds.playClick();
  };

  const toggleDoubt = () => {
    setDoubtStatus(prev => ({ ...prev, [currentIndex]: !prev[currentIndex] }));
    sounds.playClick();
  };

  const handleSubmitExam = () => {
    setIsFinished(true);
    setIsTimerActive(false);

    // Calculate score
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.kunciJawaban) {
        correctCount += 1;
      }
    });

    const finalScore = Math.round((correctCount / questions.length) * 100);
    onEarnXp(correctCount * 10 + 50);

    if (onFinishExam) {
      onFinishExam(finalScore, questions.length);
    }

    if (finalScore >= 70) {
      sounds.playFanfare();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      sounds.playWrong();
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setDoubtStatus({});
    setCurrentIndex(0);
    setIsFinished(false);
    setTimeLeft(5400);
    setIsTimerActive(true);
    setShowCertificate(false);
    setCheatWarnings(0);
    setCheatMessage(null);
    shuffleQuestions();
    sounds.playClick();
  };

  const currentQ = questions[currentIndex];

  const totalAnswered = Object.keys(answers).length;
  let correctCount = 0;
  if (isFinished) {
    questions.forEach((q, idx) => {
      if (answers[idx] === q.kunciJawaban) correctCount += 1;
    });
  }
  const finalScore = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Top Competition Banner */}
      <div className="p-5 sm:p-7 rounded-3xl bg-linear-to-r from-emerald-800 via-teal-800 to-slate-900 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black bg-amber-400 text-slate-900 mb-2">
            <Award className="w-3.5 h-3.5 fill-current" />
            SIMULASI RESMI CBT MAPSI XXVII TAHUN 2026
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
            Ujian Simulasi PAI & BTQ
          </h1>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1">
            Standar HOTS Aspek Wiggins & McTighe • Format Komputer CBT Digital
          </p>
        </div>

        {/* Timer Box */}
        {!isFinished && (
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 self-start md:self-auto">
            <Timer className={`w-6 h-6 ${timeLeft < 180 ? 'text-rose-400 animate-pulse' : 'text-amber-300'}`} />
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-300 block">Sisa Waktu</span>
              <span className={`text-xl sm:text-2xl font-black font-mono tracking-wider ${
                timeLeft < 180 ? 'text-rose-400 animate-pulse' : 'text-white'
              }`}>
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        )}
      </div>

      {!isFinished ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Question Panel (3 cols) */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6 flex flex-col justify-between">
            {currentQ ? (
              <div className="space-y-6">
                {/* Question Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center">
                      {currentIndex + 1}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      Tingkat: {currentQ.level}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-sky-100 text-sky-800">
                      Aspek: {currentQ.wigginsFacet}
                    </span>
                  </div>

                  {/* Doubt checkbox */}
                  <label className="flex items-center gap-2 text-xs font-bold cursor-pointer text-amber-700 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200">
                    <input 
                      type="checkbox"
                      checked={!!doubtStatus[currentIndex]}
                      onChange={toggleDoubt}
                      className="rounded text-amber-600 focus:ring-amber-500"
                    />
                    Ragu-Ragu
                  </label>
                </div>

                {/* Arabic text if present */}
                {currentQ.arabicText && (
                  <div 
                    dir="rtl"
                    className="p-4 rounded-2xl bg-slate-50 text-right text-2xl sm:text-3xl font-quran text-slate-900 leading-loose"
                  >
                    {currentQ.arabicText}
                  </div>
                )}

                {/* Soal text */}
                <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                  {currentQ.soal}
                </p>

                {/* Options */}
                <div className="space-y-3 pt-2">
                  {currentQ.pilihan.map((pilihan, pIdx) => {
                    const letters = ['A', 'B', 'C', 'D'];
                    const isSelected = answers[currentIndex] === pIdx;

                    return (
                      <div
                        key={pIdx}
                        onClick={() => handleSelectAnswer(pIdx)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 select-none ${
                          isSelected
                            ? 'bg-emerald-50 border-emerald-500 shadow-xs'
                            : 'bg-white border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
                        }`}
                      >
                        <span className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {letters[pIdx]}
                        </span>
                        <span className={`text-xs sm:text-sm font-medium ${isSelected ? 'text-emerald-950 font-bold' : 'text-slate-700'}`}>
                          {pilihan}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}

            {/* Bottom Nav Controls */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-6 gap-2">
              <button
                disabled={currentIndex === 0}
                onClick={() => {
                  if (currentIndex > 0) setCurrentIndex(c => c - 1);
                  sounds.playClick();
                }}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              {currentIndex === questions.length - 1 ? (
                <button
                  onClick={handleSubmitExam}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold text-xs sm:text-sm shadow-md cursor-pointer"
                >
                  Selesaikan Ujian
                </button>
              ) : (
                <button
                  onClick={() => {
                    if (currentIndex < questions.length - 1) setCurrentIndex(c => c + 1);
                    sounds.playClick();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <span>Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Right Question Palette (1 col) */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200/80 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm">
                Nomor Soal ({totalAnswered}/{questions.length})
              </h3>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-3 gap-1 text-[11px] font-bold text-slate-600">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-xs bg-emerald-600"></span>
                <span>Dijawab</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-xs bg-amber-400"></span>
                <span>Ragu</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-xs bg-slate-200"></span>
                <span>Kosong</span>
              </div>
            </div>

            {/* Grid Palette */}
            <div className="grid grid-cols-5 gap-2 pt-2">
              {questions.map((_, idx) => {
                const isAnswered = answers[idx] !== undefined;
                const isDoubt = !!doubtStatus[idx];
                const isCurrent = currentIndex === idx;

                let color = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
                if (isDoubt) {
                  color = 'bg-amber-400 text-slate-900 font-black';
                } else if (isAnswered) {
                  color = 'bg-emerald-600 text-white font-black';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      sounds.playClick();
                    }}
                    className={`h-9 rounded-xl text-xs font-bold flex items-center justify-center transition-all cursor-pointer relative ${color} ${
                      isCurrent ? 'ring-2 ring-emerald-500 ring-offset-2' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Submit quick button */}
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={handleSubmitExam}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs cursor-pointer"
              >
                Kumpulkan Lembar Jawab
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Exam Results & Pembahasan */
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Score Summary Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-linear-to-tr from-amber-400 to-amber-500 mx-auto flex items-center justify-center text-white shadow-xl shadow-amber-500/30">
              <Award className="w-10 h-10" />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {finalScore >= 80 ? '🎉 Selamat! Hasil Sangat Memuaskan' : finalScore >= 60 ? '👍 Bagus! Terus Tingkatkan' : '📚 Terus Semangat Belajar!'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Kamu telah menyelesaikan Simulasi Ujian CBT MAPSI XXVII 2026
              </p>
            </div>

            <div className="flex items-center justify-center gap-6 sm:gap-12 py-2">
              <div>
                <span className="text-xs uppercase font-bold text-slate-400 block">Nilai Akhir</span>
                <span className="text-4xl sm:text-5xl font-black text-emerald-600">
                  {finalScore}
                </span>
              </div>
              <div className="h-12 w-px bg-slate-200"></div>
              <div>
                <span className="text-xs uppercase font-bold text-slate-400 block">Benar / Total</span>
                <span className="text-2xl sm:text-3xl font-black text-slate-800">
                  {correctCount} / {questions.length}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
              <button
                onClick={handleRestart}
                className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Ulangi Ujian
              </button>

              <button
                onClick={() => setShowCertificate(true)}
                className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-current" />
                Cetak Sertifikat Juara Digital
              </button>
            </div>
          </div>

          {/* Certificate Modal */}
          {showCertificate && (
            <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl p-6 sm:p-10 max-w-2xl w-full border-8 border-amber-300 relative shadow-2xl text-center space-y-6">
                <button
                  onClick={() => setShowCertificate(false)}
                  className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-1">
                  <span className="text-[11px] font-black tracking-widest uppercase text-amber-600 block">
                    PIAGAM PENGHARGAAN BELAJAR
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">
                    LOMBA MAPSI XXVII TAHUN 2026
                  </h3>
                  <p className="text-xs text-slate-500">Mata Pelajaran Pendidikan Agama Islam & BTQ</p>
                </div>

                <div className="py-4 space-y-3">
                  <p className="text-xs text-slate-600">Diberikan dengan bangga kepada:</p>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="text-xl sm:text-2xl font-extrabold text-emerald-800 text-center w-full border-b border-dashed border-emerald-400 focus:outline-none"
                    placeholder="Nama Lengkap Siswa"
                  />
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    className="text-xs sm:text-sm text-slate-600 font-semibold text-center w-full border-b border-dashed border-slate-300 focus:outline-none"
                    placeholder="Asal Sekolah / Kafilah"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                  <p className="text-xs text-amber-900 font-medium">
                    Telah berhasil menyelesaikan Simulasi CBT Komprehensif dengan capaian skor <strong>{finalScore}/100</strong> dan menguasai aspek pemahaman Wiggins & McTighe.
                  </p>
                </div>

                <div className="flex justify-center gap-3 pt-2">
                  <button
                    onClick={() => window.print()}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center gap-2 cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    Cetak / Simpan PDF
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Full Pembahasan List */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                Pembahasan Lengkap & Analisis Jawaban
              </h3>
            </div>

            <div className="space-y-6">
              {questions.map((q, idx) => {
                const isCorrect = answers[idx] === q.kunciJawaban;
                const userAnswer = answers[idx] !== undefined ? q.pilihan[answers[idx]] : 'Tidak dijawab';

                return (
                  <div 
                    key={idx}
                    className={`p-5 rounded-2xl border transition-all ${
                      isCorrect 
                        ? 'bg-emerald-50/50 border-emerald-200' 
                        : 'bg-rose-50/50 border-rose-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-xs text-slate-700">
                        Soal Nomor {idx + 1} • {q.level} • {q.wigginsFacet}
                      </span>
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                          <CheckCircle2 className="w-4 h-4" /> Benar (+10 XP)
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700">
                          <XCircle className="w-4 h-4" /> Belum Tepat
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-bold text-slate-900 mb-3">
                      {q.soal}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                      <div className="p-2.5 rounded-xl bg-white/80 border border-slate-200 text-slate-700">
                        <strong className="block text-slate-500">Jawaban Kamu:</strong>
                        {userAnswer}
                      </div>
                      <div className="p-2.5 rounded-xl bg-emerald-100/70 border border-emerald-300 text-emerald-950 font-bold">
                        <strong className="block text-emerald-800">Kunci Jawaban:</strong>
                        {q.pilihan[q.kunciJawaban]}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong className="text-slate-900 block mb-1">💡 Pembahasan Mendalam:</strong>
                      {q.pembahasan}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
