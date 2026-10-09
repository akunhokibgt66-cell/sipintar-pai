import React, { useMemo, useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, ClipboardCheck } from 'lucide-react';
import { MateriItem } from '../types';
import { quizBank } from '../data/quizBank';
import { materiQuizBank } from '../data/materiQuizBank';
import { sounds } from '../utils/audio';

const LETTERS = ['A', 'B', 'C', 'D'];

export const LatihanMateri: React.FC<{ materi: MateriItem }> = ({ materi }) => {
  const questions = useMemo(() => {
    const own = materiQuizBank.filter((q) => q.materiId === materi.id);
    if (own.length > 0) return own;
    return quizBank.filter((q) => q.materiId === materi.id).slice(0, 5);
  }, [materi.id]);

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  if (questions.length === 0) {
    return <p className="text-sm text-slate-500">Latihan soal untuk materi ini belum tersedia.</p>;
  }

  const score = questions.filter((q) => answers[q.id] === q.kunciJawaban).length;
  const allAnswered = questions.every((q) => answers[q.id] !== undefined);

  return (
    <div className="space-y-5 animate-in fade-in duration-150">
      <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-2">
        <ClipboardCheck className="w-5 h-5 text-amber-600 shrink-0" />
        <p className="text-xs sm:text-sm">
          <strong>Evaluasi Materi:</strong> jawab {questions.length} soal berikut untuk menguji pemahamanmu tentang "{materi.judul}".
        </p>
      </div>

      {submitted && (
        <div className={`p-4 rounded-2xl border text-center font-black ${score / questions.length >= 0.7 ? 'bg-emerald-50 border-emerald-300 text-emerald-800' : 'bg-rose-50 border-rose-300 text-rose-800'}`}>
          Nilai kamu: {Math.round((score / questions.length) * 100)} ({score}/{questions.length} benar)
          <p className="text-xs font-semibold mt-1">
            {score / questions.length >= 0.7 ? 'MasyaAllah, pemahamanmu sudah bagus!' : 'Ayo baca ulang materinya lalu coba lagi.'}
          </p>
        </div>
      )}

      {questions.map((q, idx) => (
        <div key={q.id} className="p-4 rounded-2xl bg-white border border-slate-200 space-y-3">
          <p className="font-bold text-sm text-slate-900">{idx + 1}. {q.soal}</p>
          {q.arabicText && <p dir="rtl" className="font-arabic text-2xl text-right text-slate-900">{q.arabicText}</p>}
          <div className="grid gap-2">
            {q.pilihan.map((p, i) => {
              const chosen = answers[q.id] === i;
              const correct = submitted && i === q.kunciJawaban;
              const wrong = submitted && chosen && i !== q.kunciJawaban;
              return (
                <button
                  key={i}
                  disabled={submitted}
                  onClick={() => {
                    setAnswers({ ...answers, [q.id]: i });
                    sounds.playClick();
                  }}
                  className={`text-left px-3 py-2 rounded-xl border text-sm flex items-center gap-2 cursor-pointer ${
                    correct ? 'bg-emerald-50 border-emerald-400 text-emerald-900'
                    : wrong ? 'bg-rose-50 border-rose-400 text-rose-900'
                    : chosen ? 'bg-emerald-100 border-emerald-500'
                    : 'bg-slate-50 border-slate-200 hover:border-emerald-300'
                  }`}
                >
                  <span className="font-black w-5">{LETTERS[i]}.</span>
                  <span className="flex-1">{p}</span>
                  {correct && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                  {wrong && <XCircle className="w-4 h-4 text-rose-600" />}
                </button>
              );
            })}
          </div>
          {submitted && (
            <div className="p-3 rounded-xl bg-sky-50 text-sky-950 text-xs leading-relaxed">
              <strong>Pembahasan:</strong> {q.pembahasan}
            </div>
          )}
        </div>
      ))}

      {!submitted ? (
        <button
          disabled={!allAnswered}
          onClick={() => {
            setSubmitted(true);
            if (score / questions.length >= 0.7) sounds.playCorrect(); else sounds.playWrong();
          }}
          className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-bold text-sm cursor-pointer"
        >
          {allAnswered ? 'Periksa Jawaban' : 'Jawab semua soal dulu'}
        </button>
      ) : (
        <button
          onClick={() => { setAnswers({}); setSubmitted(false); }}
          className="w-full py-3 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" /> Ulangi Latihan
        </button>
      )}
    </div>
  );
};
