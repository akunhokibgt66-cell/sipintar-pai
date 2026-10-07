import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { MessageCircleQuestion, Send, X, RotateCcw, BookHeart } from 'lucide-react';

type Msg = { role: 'user' | 'assistant'; content: string };
const STORAGE = 'mapsi_tutor_chat';

const QUICK = [
  'Jelaskan hukum bacaan Ikhfa',
  'Apa beda zakat fitrah dan zakat mal?',
  'Sebutkan 10 malaikat dan tugasnya',
  'Bagaimana urutan wudhu yang benar?',
];

export const TutorChat: React.FC<{ studentName?: string }> = ({ studentName }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE);
      if (saved) setMessages(JSON.parse(saved));
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    if (!loading) localStorage.setItem(STORAGE, JSON.stringify(messages.slice(-30)));
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (open && !loading) inputRef.current?.focus();
  }, [open, loading]);

  const send = async (text: string) => {
    const q = text.trim();
    if (!q || loading) return;
    setError('');
    const history: Msg[] = [...messages, { role: 'user', content: q }];
    setMessages([...history, { role: 'assistant', content: '' }]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history.slice(-20).filter(m => m.content) }),
      });
      if (!res.ok || !res.body) throw new Error(await res.text());
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let acc = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += dec.decode(value, { stream: true });
        setMessages([...history, { role: 'assistant', content: acc }]);
      }
      if (!acc) throw new Error('Kak Sahabat belum bisa menjawab. Coba tanyakan lagi.');
    } catch (e) {
      setMessages(history);
      setError(e instanceof Error && e.message ? e.message : 'Gagal terhubung.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-xl cursor-pointer"
        >
          <MessageCircleQuestion className="w-5 h-5" />
          <span>Tanya Kak Sahabat</span>
        </button>
      )}

      {open && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-5 sm:right-5 z-50 sm:w-[400px] sm:h-[600px] bg-white sm:rounded-3xl shadow-2xl border border-emerald-200 flex flex-col overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 bg-emerald-700 text-white">
            <div className="w-9 h-9 rounded-full bg-amber-400 text-emerald-900 flex items-center justify-center">
              <BookHeart className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="font-black text-sm">Kak Sahabat</div>
              <div className="text-[11px] text-emerald-100">Tutor PAI & BTQ — tanya apa saja</div>
            </div>
            <button
              title="Mulai percakapan baru"
              onClick={() => { setMessages([]); localStorage.removeItem(STORAGE); }}
              className="p-2 rounded-full hover:bg-emerald-600 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-emerald-600 cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-emerald-50/40">
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="text-sm text-slate-700">
                  Assalamu'alaikum{studentName ? `, ${studentName}` : ''}! Ada materi yang masih membingungkan? Tanyakan saja ke Kak Sahabat.
                </p>
                <div className="flex flex-wrap gap-2">
                  {QUICK.map(q => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="text-xs font-bold px-3 py-2 rounded-xl bg-white border border-emerald-200 text-emerald-800 hover:bg-emerald-100 cursor-pointer text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m, i) =>
              m.role === 'user' ? (
                <div key={i} className="flex justify-end">
                  <div className="max-w-[85%] px-3.5 py-2 rounded-2xl rounded-br-sm bg-emerald-600 text-white text-sm whitespace-pre-wrap">
                    {m.content}
                  </div>
                </div>
              ) : (
                <div key={i} className="text-sm text-slate-800 leading-relaxed [&_p]:my-1.5 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_strong]:font-bold">
                  {m.content ? (
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  ) : (
                    <span className="text-slate-500 animate-pulse">Kak Sahabat sedang mengetik...</span>
                  )}
                </div>
              )
            )}
            {error && (
              <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold">{error}</div>
            )}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="p-3 border-t border-emerald-100 flex items-end gap-2 bg-white"
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input); }
              }}
              rows={1}
              maxLength={2000}
              placeholder="Tulis pertanyaanmu..."
              className="flex-1 resize-none px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 max-h-32"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-10 h-10 shrink-0 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white flex items-center justify-center cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
