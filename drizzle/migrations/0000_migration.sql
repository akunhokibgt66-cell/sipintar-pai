CREATE TABLE public.students (
  id text PRIMARY KEY,
  name text NOT NULL,
  kelas text NOT NULL DEFAULT '',
  school text NOT NULL DEFAULT '',
  xp integer NOT NULL DEFAULT 0,
  completed_materi_count integer NOT NULL DEFAULT 0,
  total_materi_target integer NOT NULL DEFAULT 72,
  last_cbt_score integer,
  cbt_date timestamptz,
  zakat_done_count integer NOT NULL DEFAULT 0,
  akhlak_quiz_count integer NOT NULL DEFAULT 0,
  last_active timestamptz NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'Aktif',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.students TO service_role;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;