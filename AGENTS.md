<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# AGENTS.md

- The app is the imported "Sahabat MAPSI" SPA: `src/App.tsx` holds all state and is rendered from `src/routes/index.tsx` inside `<ClientOnly>` because it reads localStorage in useState initializers (avoids SSR hydration mismatch).
- Student data and Google Apps Script webhook sync live in `src/services/cloudSheetService.ts` (localStorage + BroadcastChannel, no backend). `syncLoginToCloudSheet` is called from `handleLogin` in App.tsx for role `siswa` only; it must never block login (silent-fail with console.warn).
- tsconfig has `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes` disabled because the imported app code was written without them; do not re-enable without fixing the component files.
- Student records are also stored centrally in Lovable Cloud table `students` via `src/lib/students.functions.ts` (public validated upsert; roster read requires pembina password). `triggerAutoSync`/`getOrCreateStudentRecord` push to Cloud; AdminPanelModal pulls on open. localStorage stays as offline cache.
- "Tanya Sahabat PAI" chat: `src/components/TanyaSahabatPAI.tsx` streams plain text from server route `src/routes/api/chat.ts` (Lovable AI Gateway, Responses API); no chat history is stored so the feature stays simple and private.
- Per-materi evaluation quiz (`LatihanMateri.tsx`) reads `src/data/materiQuizBank.ts` (5 static questions per materi id), falling back to same-materi `quizBank` entries; static so it works offline without AI.
