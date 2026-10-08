import { createFileRoute } from "@tanstack/react-router";
import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { createLovableAiGatewayRunIdFetch, getLovableAiGatewayRunId } from "@/lib/run-id.server";

const INSTRUCTIONS = `Kamu adalah "Sahabat PAI", guru Pendidikan Agama Islam yang ramah untuk siswa SD (kelas 4-6) yang bersiap mengikuti lomba MAPSI.
Jawab dalam Bahasa Indonesia yang sederhana, hangat, dan singkat (maksimal sekitar 150 kata), sesuai akidah Ahlussunnah wal Jama'ah.
Topik: Al-Qur'an & Hadis, Akidah, Akhlak, Fiqih, Sejarah Peradaban Islam, BTQ dan tajwid. Sertakan dalil singkat bila relevan.
Untuk masalah khilafiyah atau fatwa serius, sarankan bertanya kepada guru/ustadz. Tolak dengan sopan pertanyaan di luar topik belajar agama.`;

type Msg = { role: "user" | "assistant"; content: string };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.LOVABLE_API_KEY;
        if (!apiKey) return new Response("AI belum dikonfigurasi", { status: 500 });
        let body: { messages?: Msg[] };
        try {
          body = await request.json();
        } catch {
          return new Response("Permintaan tidak valid", { status: 400 });
        }
        const messages = (body.messages ?? [])
          .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
          .slice(-12)
          .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));
        if (!messages.length) return new Response("Pertanyaan kosong", { status: 400 });

        const runIdFetch = createLovableAiGatewayRunIdFetch(getLovableAiGatewayRunId(request));
        const provider = createOpenAI({
          baseURL: "https://ai.gateway.lovable.dev/v1",
          apiKey,
          headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
          fetch: runIdFetch.fetch,
        });
        const result = streamText({
          model: provider.responses("openai/gpt-6-astra"),
          instructions: INSTRUCTIONS,
          messages,
          abortSignal: request.signal,
          maxRetries: 0,
          providerOptions: {
            openai: {
              forceReasoning: true,
              reasoningEffort: "low",
              reasoningSummary: "auto",
              store: false,
              include: ["reasoning.encrypted_content"],
            },
          },
        });
        return result.toTextStreamResponse();
      },
    },
  },
});
