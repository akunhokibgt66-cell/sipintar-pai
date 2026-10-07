import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const studentSchema = z.object({
  id: z.string().min(1).max(200),
  name: z.string().min(1).max(120),
  kelas: z.string().max(60),
  school: z.string().max(160),
  xp: z.number().int().min(0).max(10_000_000),
  completedMateriCount: z.number().int().min(0).max(1000),
  totalMateriTarget: z.number().int().min(1).max(1000),
  lastCbtScore: z.number().int().min(0).max(100).nullable(),
  cbtDate: z.string().max(40).optional().nullable(),
  zakatDoneCount: z.number().int().min(0).max(100000),
  akhlakQuizCount: z.number().int().min(0).max(100000),
  lastActive: z.string().max(40),
  status: z.enum(["Aktif", "Selesai Sesi"]),
});

export type CloudStudent = z.infer<typeof studentSchema>;

// Public: students have no accounts (name + class login), so writes are open but validated.
export const upsertStudentCloud = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => studentSchema.parse(d))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("students").upsert({
      id: data.id,
      name: data.name,
      kelas: data.kelas,
      school: data.school,
      xp: data.xp,
      completed_materi_count: data.completedMateriCount,
      total_materi_target: data.totalMateriTarget,
      last_cbt_score: data.lastCbtScore,
      cbt_date: data.cbtDate || null,
      zakat_done_count: data.zakatDoneCount,
      akhlak_quiz_count: data.akhlakQuizCount,
      last_active: data.lastActive,
      status: data.status,
    });
    if (error) {
      console.error("upsertStudentCloud", error);
      return { ok: false };
    }
    return { ok: true };
  });

// Reading the full roster requires the teacher (pembina) password.
export const listStudentsCloud = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => z.object({ password: z.string().max(100) }).parse(d))
  .handler(async ({ data }) => {
    const valid = ["adminmapsi2026", "admin2026"];
    if (!valid.includes(data.password)) return { ok: false, students: [] as CloudStudent[] };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows, error } = await supabaseAdmin
      .from("students")
      .select("*")
      .order("last_active", { ascending: false })
      .limit(2000);
    if (error) {
      console.error("listStudentsCloud", error);
      return { ok: false, students: [] as CloudStudent[] };
    }
    const students: CloudStudent[] = (rows ?? []).map((r) => ({
      id: r.id,
      name: r.name,
      kelas: r.kelas,
      school: r.school,
      xp: r.xp,
      completedMateriCount: r.completed_materi_count,
      totalMateriTarget: r.total_materi_target,
      lastCbtScore: r.last_cbt_score,
      cbtDate: r.cbt_date,
      zakatDoneCount: r.zakat_done_count,
      akhlakQuizCount: r.akhlak_quiz_count,
      lastActive: r.last_active,
      status: r.status === "Selesai Sesi" ? "Selesai Sesi" : "Aktif",
    }));
    return { ok: true, students };
  });
