import { createFileRoute, ClientOnly } from "@tanstack/react-router";
import App from "../App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sahabat MAPSI - Belajar PAI & BTQ Interaktif" },
      {
        name: "description",
        content:
          "Platform pembelajaran interaktif PAI dan BTQ sesuai kisi-kisi resmi lomba MAPSI: 6 ruang lingkup, 72 materi, kuis CBT, latihan tajwid, hafalan ayat, dan simulasi lomba.",
      },
      { property: "og:title", content: "Sahabat MAPSI - Belajar PAI & BTQ Interaktif" },
      {
        property: "og:description",
        content:
          "Platform pembelajaran interaktif PAI dan BTQ sesuai kisi-kisi resmi lomba MAPSI: 6 ruang lingkup, 72 materi, kuis CBT, latihan tajwid, hafalan ayat, dan simulasi lomba.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ClientOnly
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-emerald-950">
          <span className="text-emerald-200 text-sm font-bold animate-pulse">
            Memuat Sahabat MAPSI...
          </span>
        </div>
      }
    >
      <App />
    </ClientOnly>
  );
}
