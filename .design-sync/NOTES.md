# design-sync notes — Stock Market Explainer DS

Scope: 18 components — the 4 standalone SVG chart components (`CandleAnatomy`,
`EquityCurve`, `PayoffDiagram`, `PatternChart`) + the 14 **Stax UI kit** components
(`Icon, Ring, Bar, Avatar, WeekDots, Btn, Pill, Badge, Card, SectionTitle, LessonCard,
Field, Toggle, AppShell` — `components/kit/*`, group `kit`) + the token layer.
NavBar/HomeStocks/Toast and the live charts (ResearchChart/LiveCandleChart) are
intentionally excluded (Next/data-coupled or live-canvas — they live in Storybook only;
`titleMap` nulls them).

## Stax kit (added Wave 1)
- Kit components are self-contained (inline styles reading `var(--stax-*)` + lucide-
  react) → they bundle cleanly. The "Warm Campus" tokens ship in the synced CSS: the
  `--stax-*` :root(light)/.dark blocks were added to `.ds-sync-tokens-input.css`, and
  the post-process now ALSO tags every hex-valued `--stax-*` with `/* @kind color */`
  (regex `--stax-[a-z-]+:\s*#…`) on top of the channel-based chart tokens. Expect
  `@kind color` count ≈ 54 now (was 12).
- `cfg.overrides.AppShell = {cardMode:"column"}` — the full-width shell overflows a grid
  card otherwise ([GRID_OVERFLOW]).
- **[FONT_MISSING] follow-up:** Plus Jakarta Sans (`--stax-font`) isn't shipped as a
  webfont, so the DS pane substitutes system sans. To ship it, add the woff2 + @font-face
  via `cfg.extraFonts` (next/font self-hosts the files under `web/.next`). Non-blocking.

## This repo is a Next.js app, not a packaged library — two build shims make it work
- `web/.ds-sync-entry.tsx` — the synth bundle entry (re-exports the 4 components),
  passed via `--entry`. PKG_DIR = dirname(entry), so it MUST live in `web/`.
- `web/index.d.ts` — export-scan shim. The converter's `exportedNames` defaults to
  reading `<pkg>/index.d.ts`; without it the storybook titles can't match any export
  and everything drops as `[TITLE_UNMAPPED]`. Re-exports the 4 components' types.
- **Both are currently gitignored** — a fresh clone must recreate them before a
  re-sync (or un-gitignore + commit them). Contents are tiny; see this file's history.

## Clean token stylesheet (cfg.cssEntry — avoids the Tailwind-internals check warning)
The default `[CSS_FROM_STORYBOOK]` scrape ships Tailwind's preflight + `--tw-*` vars,
which claude.ai/design's token check flags. Instead we ship a preflight-free token
sheet via `cfg.cssEntry = ".ds-sync-tokens.css"`. Rebuild it (from `web/`, gitignored
shims `.ds-sync-tokens-input.css` + `.ds-sync-tailwind.config.ts`) whenever tokens or
the synced components' classes change:
```
cd web && npx tailwindcss -c .ds-sync-tailwind.config.ts -i .ds-sync-tokens-input.css -o .ds-sync-tokens.css
node -e 'const fs=require("fs");let c=fs.readFileSync(".ds-sync-tokens.css","utf8");c=c.replace(/var\(--tw-[a-z-]*opacity\)/g,"1").split("\n").filter(l=>!/--tw-/.test(l)).join("\n").replace(/[^{}@]*\{\s*\}\n?/g,"");c=c.replace(/(\s*--(?:up|down|learn|streak|border-hairline|border-strong):[^;]*;)(?!\s*\/\* @kind)/g,"$1 /* @kind color */");fs.writeFileSync(".ds-sync-tokens.css",c)'
```
The config has `corePlugins.preflight=false` and content scoped to the 4 components +
`.storybook/preview.tsx`. The node step (a) strips the residual `--tw-*`
(opacity/filter internals) and (b) tags the six semantically-named color tokens with
`/* @kind color */` so claude.ai/design's token classifier reads them as colors (it
can't infer "color" from names like `--up`/`--streak`/`--border-strong`). Verify
`grep -c -- '--tw-'` is 0 and `grep -c '@kind color'` is 12 before rebuilding.

## Build / re-sync commands (run from repo root)
- Reference storybook (rebuild when components/tokens change):
  `cd web && npx storybook build -c .storybook -o "$(git rev-parse --show-toplevel)/.design-sync/sb-reference"`
- Build: `node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules web/node_modules --entry web/.ds-sync-entry.tsx --out ./ds-bundle`
- Driver (closing receipt / re-sync): `node .ds-sync/resync.mjs --config ... --entry web/.ds-sync-entry.tsx --out ./ds-bundle` (omit `--remote` only on a first sync).

## Gotchas learned
- `storybookConfigDir` must be `web/.storybook` (repo-root-relative), not `.storybook`
  — otherwise story sources + decorators resolve against the repo root and 0 stories pair.
- CSS is `[CSS_FROM_STORYBOOK]` — scraped from `.design-sync/sb-reference`. No `cfg.cssEntry` needed.
- `web/.storybook/preview.tsx` guards `initialize()` (MSW) in try/catch — the bundled
  preview decorator has a stub worker (no Service Worker) and the init throw would
  otherwise break the canvas decorator (`worker.start(...).then is not a function`).

## Re-sync risks (what can silently go stale)
- The two build shims (gitignored) — if missing on a fresh clone, build fails at
  `[NO_DIST]` / `[TITLE_UNMAPPED]`. Recreate or commit them.
- `tokens: 3 missing CSS custom properties (below threshold)` — non-blocking; if a
  component starts using a token not in the scraped CSS, it may go unstyled.
- Grades are image-judged `match` on all 4 components (every story). If a component's
  source changes, its grade clears and must be re-graded from a fresh compare sheet.
