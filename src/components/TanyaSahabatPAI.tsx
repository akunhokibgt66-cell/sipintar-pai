import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Send, X, Square, MessageCircleQuestion } from 'lucide-react';

type Msg = { role: 'user' | 'assistant'; content: string };

const SUGGESTIONS = [
  'Apa saja rukun iman?',
  'Jelaskan hukum bacaan idgham bighunnah',
  'Bagaimana tata cara wudhu yang benar?',
];

export const TanyaSahabatPAI: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const abortRef = useRef<AbortController | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const send = async (text: string) => {
    const q = text.trim();
    if (!q || loading) return;
    setError('');
    const history: Msg[] = [...messages, { role: 'user', content: q }];
    setMessages([...history, { role: 'assistant', content: '' }]);
    setInput('');
    setLoading(true);
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
        signal: ctrl.signal,
      });
      if (!res.ok || !res.body) {
        const msg = res.status === 429
          ? 'Terlalu banyak pertanyaan, tunggu sebentar ya.'
          : res.status === 402
          ? 'Kuota AI habis. Hubungi guru/pembina.'
          : (await res.text()) || 'Gagal menjawab.';
        throw new Error(msg);
      }
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let acc = '';
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += dec.decode(value, { stream: true });
        setMessages([...history, { role: 'assistant', content: acc }]);
      }
      if (!acc.trim()) throw new Error('Sahabat PAI belum bisa menjawab pertanyaan ini.');
    } catch (e) {
      if ((e as Error).name !== 'AbortError') {
        setError((e as Error).message);
        setMessages((m) => (m[m.length - 1]?.content ? m : m.slice(0, -1)));
      }
    } finally {
      setLoading(false);
      abortRef.current = null;
    }
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-xl cursor-pointer"
        >
          <MessageCircleQuestion className="w-5 h-5" />
          Tanya Sahabat PAI
        </button>
      )}
      {open && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-5 sm:right-5 z-50 sm:w-[400px] sm:h-[600px] bg-white sm:rounded-3xl shadow-2xl border border-emerald-100 flex flex-col overflow-hidden">
          <div className="bg-linear-to-r from-emerald-700 to-teal-700 text-white p-4 flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="font-black text-sm">Tanya Sahabat PAI</p>
              <p className="text-[11px] text-emerald-100">Ustadz digital siap menjawab pertanyaanmu</p>
            </div>
            <button onClick={() => setOpen(false)} className="p-2 rounded-xl hover:bg-white/15 cursor-pointer" aria-label="Tutup">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.length === 0 && (
              <div className="space-y-3 text-center pt-6">
                <p className="text-sm text-slate-600">Assalamu'alaikum! Mau bertanya apa tentang PAI & BTQ hari ini?</p>
                <div className="flex flex-col gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button key={s} onClick={() => send(s)} className="text-xs font-semibold px-3 py-2 rounded-xl bg-white border border-emerald-200 text-emerald-800 hover:bg-emerald-50 cursor-pointer">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div
                  className={
                    m.role === 'user'
                      ? 'max-w-[85%] px-3.5 py-2 rounded-2xl rounded-br-sm bg-emerald-700 text-white text-sm whitespace-pre-wrap'
                      : 'max-w-[95%] text-sm text-slate-800 whitespace-pre-wrap leading-relaxed'
                  }
                >
                  {m.content || (loading && i === messages.length - 1 ? <span className="text-slate-400 animate-pulse">Sahabat PAI sedang berpikir...</span> : null)}
                </div>
              </div>
            ))}
            {error && <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold">{error}</div>}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-3 border-t border-slate-200 flex items-end gap-2 shrink-0 bg-white"
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              rows={1}
              placeholder="Tulis pertanyaanmu..."
              className="flex-1 resize-none max-h-28 px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600"
            />
            {loading ? (
              <button type="button" onClick={() => abortRef.current?.abort()} className="w-10 h-10 shrink-0 rounded-xl bg-slate-700 text-white flex items-center justify-center cursor-pointer" aria-label="Berhenti">
                <Square className="w-4 h-4" />
              </button>
            ) : (
              <button type="submit" disabled={!input.trim()} className="w-10 h-10 shrink-0 rounded-xl bg-emerald-700 disabled:opacity-40 text-white flex items-center justify-center cursor-pointer" aria-label="Kirim">
                <Send className="w-4 h-4" />
              </button>
            )}
          </form>
        </div>
      )}
    </>
  );
};
