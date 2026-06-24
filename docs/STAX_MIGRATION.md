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
| `/` (home) | ✅ | ✅ | ⬜ | s_marketing | still uses PageContainer + old cards |
| `/learn` | ✅ | ✅ | ✅ | s_catalog | warm unit-cards |
| `/learn/[slug]` | ✅ | ✅ | ⬜ | s_lesson | lesson + 4 interactive widgets |
| `/exam` | ✅ | ✅ | ⬜ | s_quiz | state machine |
| `/study` | ✅ | ✅ | ✅ | — | warm chrome (no template; content on kit tokens) |
| `/progress` | ✅ | ✅ | ✅ | — | warm chrome (no template; content on kit tokens) |
| `/review` | ✅ | ✅ | ⬜ | s_quiz | spaced-repetition queue |
| `/simulator` | ✅ | ✅ | ⬜ | s_trade | charts now theme-aware |
| `/symbol/[ticker]` | ✅ | ✅ | ⬜ | s_stock | charts now theme-aware |

## Phases

- **Phase 1 — Token + shell unification (this PR):** retint tokens, single `.dark` theme,
  `AppChrome` shell app-wide, remove `NavBar`. Result: no more style "flip" between pages.
- **Phase 2 — Theme-aware charts ✅:** `web/lib/charts/theme.ts` `chartColors(theme)` chrome
  palette; `ResearchChart` + `LiveCandleChart` read it and `applyOptions` on theme flip (no
  rebuild). Candle/EMA/RSI/etc. accents stay vivid (read on either background). `SymbolChart`
  is a thin `ResearchChart` wrapper — no change.
- **Phase 3 — Prototype polish:** re-skin each old page's content with kit components, quick
  wins first (`/learn`, `/study`, `/progress` → … → `/simulator`, `/symbol`).
- **Phase 4 — Cleanup:** delete `NavBar.tsx` + `PageContainer.tsx`, remove residual `.light`
  refs, re-sync the design system.

## Known follow-ups
- Old pages still wrap content in `PageContainer` inside `StaxShell` (a harmless double
  container — extra inset). Removed as each page is polished in Phase 3.
