---
name: design-system-tokens
description: Warm Campus design token locations, card spec, font stack, and color palette — the authoritative 10/10 bar reference
metadata:
  type: reference
---

# Warm Campus Design System — Token Reference

## Token files
- CSS custom properties: `web/app/globals.css` (`:root` and `.dark` blocks)
- JS token map for kit components: `web/components/kit/theme.ts` (the `A` object)
- Kit components: `web/components/kit/` — Card, Btn, Pill, Badge, Ring, Bar, Avatar, WeekDots, LessonCard, Field, Toggle, SectionTitle, Icon, AppShell, StaxShell, AppChrome

## Card spec (the 10/10 bar)
- Border radius: `--stax-radius: 22px` / `A.radius = 22` — non-negotiable for all card surfaces
- Shadow light: `--stax-shadow: 0 6px 22px rgba(80, 60, 30, 0.07)`
- Shadow dark: `--stax-shadow: 0 6px 22px rgba(0, 0, 0, 0.4)`
- Shadow large (hover lift): `--stax-shadow-lg: 0 16px 44px rgba(80,60,30,0.12)`
- Card background: `--stax-card: #ffffff` light / `#1c1f26` dark
- Card hover: translateY(-3px) + shadowLg — already wired in `Card.tsx`
- Border: `--stax-border: #efe7da` light / `#2b3039` dark

## Page background
- Light: `--stax-page: #fbf7f0` (warm cream)
- Dark: `--stax-page: #13151a` (near-black)

## Typography
- Headings/UI: Plus Jakarta Sans via `--stax-font: var(--font-jakarta)`
- Monospace/numbers: JetBrains Mono via `--stax-mono: var(--font-jetbrains-mono)`
- Body/prose: Inter (non-kit pages) or Jakarta Sans (kit pages)
- Font variables set in `web/app/layout.tsx` via `next/font/google`

## Color palette (key tokens)
- Primary blue: `--stax-primary: #2e7be6` light / `#5b9bf0` dark
- Green (up/success): `--stax-green: #1fa968` / `#34c27d`
- Amber (streak/warning): `--stax-amber: #f5a623` / `#f5b53d`
- Red (down/error): `--stax-red: #f0594c` / `#f47065`
- Ink (primary text): `--stax-ink: #232026` / `#f4f2ee`
- Muted text: `--stax-muted: #837c88` / `#9ca0a8`
- Faint text: `--stax-faint: #aba4b0` / `#6b707a`

## Shell architecture
- `AppChrome.tsx`: top-level wrapper, excludes /login from shell
- `StaxShell.tsx`: routing/theme/streak wiring around AppShell
- `AppShell.tsx`: the actual top nav + bottom tab bar rendering
- Login is fullscreen — no shell applied
- Bottom tab bar: only on mobile (via AppShell's fixed bottom strip)

## What makes a 10/10 card surface
Every surface that functions as a "card" (selectable row, result panel, stats tile, modal) must:
1. Use `border-radius: 22px` (the kit `A.radius` token or `rounded-[22px]` Tailwind arbitrary)
2. Use `box-shadow: var(--stax-shadow)` (NOT Tailwind's `shadow-lg` — wrong color)
3. Background: `var(--stax-card)` 
4. Border: `1px solid var(--stax-border)` (optional but recommended for light mode)
5. Hover lift: `translateY(-3px)` + `--stax-shadow-lg` (when interactive)

The kit `<Card>` component does all of this automatically.
