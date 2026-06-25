---
name: recurring-drift-patterns
description: Known drift patterns found in the 2026-06-24 audit — anti-patterns to flag on every future review
metadata:
  type: feedback
---

# Recurring Drift Patterns — Warm Campus

Discovered in the 10-PR migration audit (PRs #94–#103, audited 2026-06-24).

## Pattern 1: Tailwind `rounded-lg/md` on card surfaces (CRITICAL)

**What:** Components built or migrated without using the kit `Card` component use Tailwind's `rounded-lg` (8px) or `rounded-md` (6px) instead of the spec's 22px.

**Where found:** `components/exam/ExamSetup.tsx`, `ExamRunner.tsx`, `ExamResults.tsx`, `ReadinessDashboard.tsx`, `StudyPlanView.tsx`, `components/trading/Simulator.tsx`. Count: 109 instances of `rounded-lg/md/xl` in non-kit components.

**Why it fails:** 22px radius is the primary visual signature of the Warm Campus system. 8px reads as generic fintech. The warm shadow is also absent on these surfaces.

**How to apply:** Any PR that introduces new card-like surfaces or migrates a page — check whether `<Card>` from `web/components/kit/Card.tsx` is used. If not, flag immediately. Tailwind arbitrary `rounded-[22px]` is acceptable only for inline overrides.

## Pattern 2: Native `<select>` elements without dark-mode theming (MAJOR)

**What:** Native `<select>` elements use `bg-canvas` which resolves correctly for inputs but fails on the native option popup in dark mode — the browser renders a white popup.

**Where found:** `components/trading/Simulator.tsx` lines 323, 330.

**How to apply:** Any use of `<select>` must either use the kit `Field` component or have `appearance-none` + a custom styled wrapper + explicit dark-mode background forced via inline style. Flag all `<select>` usages in non-kit components.

## Pattern 3: Progress bar track invisible at 0% (MAJOR)

**What:** `--stax-bar-track: #f1ece3` against `--stax-page: #fbf7f0` has ~1.3:1 contrast — effectively invisible. New users see no bar structure.

**Where found:** `/progress` page. Affects `web/components/kit/Bar.tsx` and any custom bar rendered with Tailwind.

**How to apply:** Always test progress/bar components in the empty state (0%). The track must be perceptibly distinct from the page background.

## Pattern 4: Interactive rows with no affordance signals (MAJOR)

**What:** Clickable rows that function as action buttons sometimes lack any visual affordance — no chevron, no CTA pill, no cursor treatment. They look identical to static description blocks.

**Where found:** `/exam` (ExamSetup rows), `/study` (LEARN/TEST badge invisibility in dark).

**How to apply:** Every tappable row must have at minimum: `cursor-pointer`, a right-side directional signal (ChevronRight icon or action pill), and a visible hover state. Test in both light and dark.

## Pattern 5: Mobile tab label overflow without scroll (MAJOR)

**What:** Horizontal tab strips don't scroll on narrow viewports — labels get clipped.

**Where found:** `/settings` mobile — "Plan & billing" truncated to "Plan &".

**How to apply:** Any horizontal tab strip must be tested at 390px. Add `overflow-x-auto scrollbar-none` if labels may overflow, or shorten mobile labels via responsive variants.

## Non-issue confirmed: Card radius (kit components)

The kit `Card.tsx` correctly uses `A.radius = 22` (from `theme.ts`). The 22px radius **is** applied wherever the kit `Card` component is used. The radius problem is exclusively in non-kit, hand-rolled Tailwind components. Do not report the kit Card as broken.

## Non-issue confirmed: Dark mode fundamentals

Dark mode token flipping works correctly on all routes. The `.dark` class strategy via `localStorage.theme` and the `THEME_INIT` inline script in `layout.tsx` produces correct theme application with no flash. Do not flag dark mode as a systemic concern — only specific component-level dark mode failures (native select, low-contrast elements).
