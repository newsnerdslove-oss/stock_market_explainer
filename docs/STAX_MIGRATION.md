# Stax design migration — tracker

Living audit of the app's migration from the original dark "trading terminal" look to the
unified **Stax "Warm Campus"** design system. Update this on every migration PR.

## How the system works now (post-unification)

- **One token set.** The semantic Tailwind tokens (`canvas/surface/ink/muted/border/up/down/
  learn/streak` in `web/app/globals.css`) resolve to the Warm Campus palette — light is the
  bare `:root` default, `.dark` flips both these channels and the `--stax-*` kit vars. Theme is
  a single `.dark` class (see `web/lib/theme.ts`).
- **One shell.** `web/components/kit/AppChrome.tsx` wraps every route in `<StaxShell>` (top tabs
  on desktop, bottom tab bar on mobile) except full-screen routes (`/login`). The old global
  `<NavBar>` is retired.
- **Feature code unchanged.** All `lib/*` libraries (trading, options, lessons, quiz, exam,
  progress, charts, marketService) are reused as-is — the migration is presentation-only.

## Per-route status

Legend: **Shell** = on the Stax `AppChrome`/`StaxShell`. **Warm** = renders in the Warm Campus
palette. **Polished** = re-skinned with kit components to match the prototype (Phase 3).

| Route | Shell | Warm | Polished | Prototype | Notes |
|---|---|---|---|---|---|
| `/today` | ✅ | ✅ | ✅ | s_daily | Daily Hub |
| `/settings` | ✅ | ✅ | ✅ | s_settings | |
| `/notifications` | ✅ | ✅ | ✅ | s_alerts | |
| `/search` | ✅ | ✅ | ✅ | s_search | |
| `/login` | n/a (full-screen) | ✅ | ✅ | s_auth | |
| `/` (home) | ✅ | ✅ | ✅ | s_marketing | warm in-app dashboard (hero + features + live markets; not the logged-out landing) |
| `/learn` | ✅ | ✅ | ✅ | s_catalog | warm unit-cards |
| `/learn/[slug]` | ✅ | ✅ | ✅ | s_lesson | focused prose column; warm header + kit-radius tie-in; quiz uses re-skinned QuestionRunner |
| `/exam` | ✅ | ✅ | ✅ | s_quiz | warm setup/runner/results; shared QuestionRunner (lessons+review) re-skinned to s_quiz cards |
| `/study` | ✅ | ✅ | ✅ | — | warm chrome (no template; content on kit tokens) |
| `/progress` | ✅ | ✅ | ✅ | — | warm chrome (no template; content on kit tokens) |
| `/review` | ✅ | ✅ | ✅ | s_quiz | warm stat tiles + state cards |
| `/simulator` | ✅ | ✅ | ✅ | s_trade | warm desk: kit-radius cards, stat tiles, order ticket |
| `/symbol/[ticker]` | ✅ | ✅ | ✅ | s_stock | warm chrome + theme-aware chart in a kit-radius card |

## Phases

- **Phase 1 — Token + shell unification (this PR):** retint tokens, single `.dark` theme,
  `AppChrome` shell app-wide, remove `NavBar`. Result: no more style "flip" between pages.
- **Phase 2 — Theme-aware charts ✅:** `web/lib/charts/theme.ts` `chartColors(theme)` chrome
  palette; `ResearchChart` + `LiveCandleChart` read it and `applyOptions` on theme flip (no
  rebuild). Candle/EMA/RSI/etc. accents stay vivid (read on either background). `SymbolChart`
  is a thin `ResearchChart` wrapper — no change.
- **Phase 3 — Prototype polish ✅:** every page re-skinned to the kit / its template
  (`/learn`, `/study`, `/progress`, `/`, `/review`, `/exam`, `/symbol`, `/simulator`,
  `/learn/[slug]`). Shared `QuestionRunner` re-skinned to the s_quiz card flow.
- **Phase 4 — Cleanup ✅:** deleted the dead `NavBar.tsx` (+ story) and `PageContainer.tsx`;
  confirmed no residual `.light` *class* refs (theme is a single `.dark` class; `"light"`/
  `"dark"` only appear as theme values); design system re-synced (AppShell update pushed).

**Migration complete** — Phases 1–4 done. The app renders entirely on the unified Stax
design system; remaining work is the parked `[UI/UX]` polish tickets (radius/shadow on the
non-kit surfaces, etc.) and feature epics, not migration.

## Known follow-ups
- **[design-sync] Plus Jakarta Sans webfont** not shipped to claude.ai/design (the pane
  substitutes system sans). Ship the woff2 via `cfg.extraFonts` — see `.design-sync/NOTES.md`.
- **Resync hygiene:** clear `web/node_modules/.cache`, `.design-sync/sb-reference`, and
  `.design-sync/.cache` before a re-sync, or the reference Storybook serves a stale render.
- The 9 parked `[UI/UX]` tickets (Asana Backlog) — the kit-vs-Tailwind radius/shadow gap is
  the high-leverage one.
