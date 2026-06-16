# Design System — "Explainer"

The visual + interaction foundation for the platform. Codified as tokens so every screen inherits it. Direction signed off: **hybrid personality, dark-first**, polish bar set by Robinhood/Coinbase (consumer fintech) and Stripe/Linear (premium minimal).

## Principles

1. **One calm canvas, one signature accent.** Near-black blue-tinted background, restrained neutrals, and a single brand green used sparingly (growth, CTAs, gains). Robinhood's "less is more."
2. **Numbers are monospace, always.** Every price, percentage, P&L, and quantity uses a tabular monospace face so digits align and scan — Coinbase's financial-data cue. Prose and UI labels use a clean geometric sans.
3. **Color encodes meaning, never decoration.** Green = up/gain/confirm. Red = down/loss. Violet = learning & gamification (streaks, progress, "now" steps). Amber = streak flame / caution. Nothing else gets color.
4. **Tone shifts by context, system stays one.** Learn surfaces lean warm and playful (violet accents, streaks, progress rings). Simulator surfaces lean dense and precise (monospace, tight grids, real-time states). Same tokens, two moods.
5. **Hairlines over shadows.** In dark mode, separate surfaces with 0.5px borders and elevation-by-lightness, not drop shadows or glows. No gradients, no neon.
6. **Trust is a feature.** Persistent "educational · paper only · not financial advice" footer. Clear loading, stale-data, and confirmation states on anything that shows live numbers.

## Color tokens (dark-first)

| Token | Hex | Use |
|---|---|---|
| `bg-canvas` | `#0B0E14` | App background (near-black, blue-tinted) |
| `bg-surface` | `#141922` | Cards, panels |
| `bg-surface-2` | `#1B212C` | Raised / hover surfaces |
| `border-hairline` | `#1E2530` | Default 0.5px dividers |
| `border-strong` | `#232A36` | Card borders, emphasis |
| `text-primary` | `#E8EDF4` | Primary text |
| `text-secondary` | `#8A94A6` | Labels, secondary |
| `text-tertiary` | `#5A6376` | Hints, disabled |
| `up` (primary/green) | `#2BD17E` | Gains, CTAs, confirm |
| `down` (red) | `#FF5C5C` | Losses, destructive |
| `learn` (violet) | `#8B7CF6` | Learning, progress, streak steps |
| `streak` (amber) | `#F5A623` | Streak flame, caution |

A light theme ships later by inverting the neutral ramp; semantic colors (up/down/learn) stay constant for recognition.

## Typography

- **Sans (UI + prose):** Inter (or system `-apple-system`). Weights **400 and 500 only** — heavier reads cheap against a dark canvas.
- **Mono (all numbers + tickers):** JetBrains Mono or `ui-monospace`. Always `font-variant-numeric: tabular-nums`.
- **Scale:** display 20–28 / title 17 / body 14–15 / label 12–13 / micro 11. Line-height 1.5–1.7 for prose, tight for data.
- **Sentence case** everywhere. No ALL CAPS.

## Spacing, radius, elevation

- **Spacing scale:** 4 · 8 · 12 · 16 · 24 · 32 (px). Card padding 14–16.
- **Radius:** controls/inputs 8 (`md`), cards 12 (`lg`), pills 999.
- **Elevation:** lighter surface + hairline border = "higher." No shadows except functional focus rings (`0 0 0 3px` of the accent at low alpha).
- **Borders:** 0.5px default; 1.5px for selected/active states only.

## Core components (specs)

- **Metric / number block:** muted 12px label, 20px/500 monospace value, optional colored delta (up/down) to the right.
- **Card:** `bg-surface`, 0.5px `border-strong`, radius 12, padding 14–16.
- **Primary button:** green fill, `bg-canvas` text, radius 8, weight 500. Secondary: transparent, hairline border, hover to `bg-surface-2`.
- **Candlestick chart:** green up / red down candles, thin wicks, no gridline clutter; TradingView Lightweight Charts in production.
- **Streak / progress:** violet ring or step list; amber flame for the day counter.
- **Quiz option:** full-width row, hairline border, hover lift; correct → green border + check, wrong → red border, with explanation revealed below.

## States that must exist (trading UX)

Live-data screens are judged on their edge cases. Every quote/portfolio view needs explicit: **loading** (skeleton, not spinner-only), **stale data** (dim + "delayed" tag if quote age exceeds threshold), **empty** (no positions yet → guided CTA), **error** (service unreachable → retry), and **confirmation** (order placed → instant toast with fill price). These are specified, not afterthoughts.

## Accessibility

- Contrast ≥ 4.5:1 for text (the neutrals above pass on `bg-canvas`).
- Never encode meaning by color alone — gains/losses also carry +/− signs and arrows.
- Focus rings on every interactive element. Respect `prefers-reduced-motion`.
- Hit targets ≥ 40px on touch.

## How this lives in the repo

Tokens are mirrored in `web/tailwind.config.ts` (theme extension) and `web/app/globals.css` (CSS variables), so components reference `bg-canvas`, `text-up`, `font-mono`, etc. rather than raw hex. Change a token once, the whole app follows.
