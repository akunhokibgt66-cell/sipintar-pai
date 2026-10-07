import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const SYSTEM = `Kamu adalah "Kak Sahabat", tutor Pendidikan Agama Islam (PAI) dan Baca Tulis Al-Qur'an (BTQ) untuk siswa SD yang belajar untuk lomba MAPSI.
Jawab dalam Bahasa Indonesia yang ramah, santun, dan mudah dipahami anak SD. Gunakan kalimat pendek, contoh sehari-hari, dan poin bertahap.
Topik: Al-Qur'an & Hadits, Tajwid, Aqidah, Fiqih (thaharah, shalat, puasa, zakat), Akhlak, dan Sejarah Peradaban Islam.
Bila menulis ayat atau doa, tulis teks Arab, lalu latin, lalu artinya. Jangan mengarang dalil; jika ragu, sarankan bertanya kepada guru.
Jika pertanyaan di luar pelajaran agama atau tidak pantas, arahkan kembali dengan sopan. Jawaban maksimal sekitar 200 kata.`;

const bodySchema = z.object({
  messages: z
    .array(z.object({ role: z.enum(["user", "assistant"]), content: z.string().min(1).max(2000) }))
    .min(1)
    .max(30),
});

export const Route = createFileRoute("/api/tutor")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const parsed = bodySchema.safeParse(await request.json().catch(() => null));
        if (!parsed.success) return new Response("Permintaan tidak valid", { status: 400 });
        const key = process.env["LOVABLE_API_KEY"];
        if (!key) return new Response("AI belum dikonfigurasi", { status: 500 });

        const upstream = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
          method: "POST",
          signal: request.signal,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
            "X-Lovable-AIG-SDK": "fetch",
          },
          body: JSON.stringify({
            model: "openai/gpt-6-astra",
            instructions: SYSTEM,
            input: parsed.data.messages.map((m) => ({ role: m.role, content: m.content })),
            reasoning: { effort: "low" },
            store: false,
            stream: true,
          }),
        });

        if (!upstream.ok || !upstream.body) {
          const msg =
            upstream.status === 429
              ? "Terlalu banyak pertanyaan, coba lagi sebentar."
              : upstream.status === 402
                ? "Kuota AI habis. Hubungi guru/pembina."
                : "Kak Sahabat sedang tidak bisa menjawab. Coba lagi nanti.";
          console.error("tutor upstream", upstream.status, await upstream.text().catch(() => ""));
          return new Response(msg, { status: upstream.status === 429 || upstream.status === 402 ? upstream.status : 502 });
        }

        const decoder = new TextDecoder();
        const encoder = new TextEncoder();
        let buf = "";
        const stream = upstream.body.pipeThrough(
          new TransformStream<Uint8Array, Uint8Array>({
            transform(chunk, controller) {
              buf += decoder.decode(chunk, { stream: true });
              const lines = buf.split("\n");
              buf = lines.pop() ?? "";
              for (const line of lines) {
                if (!line.startsWith("data:")) continue;
                const payload = line.slice(5).trim();
                if (!payload || payload === "[DONE]") continue;
                try {
                  const ev = JSON.parse(payload);
                  if (ev.type === "response.output_text.delta" && ev.delta) {
                    controller.enqueue(encoder.encode(ev.delta));
                  }
                } catch {
                  /* ignore partial */
                }
              }
            },
          }),
        );
        return new Response(stream, {
          headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-cache, no-transform" },
        });
      },
    },
  },
});
