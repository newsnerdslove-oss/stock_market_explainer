---
name: per-route-verdicts
description: Per-route design quality scores from the 2026-06-24 post-migration audit (PRs #94–#103)
metadata:
  type: project
---

# Per-Route Audit Verdicts — 2026-06-24

Audit covered 14 routes × 4 configurations (light/dark × desktop/mobile) = 56 screenshots.

## Routes at or near the bar

| Route | Score | Status | Notes |
|---|---|---|---|
| /learn/pe-ratio | 8.5/10 | Near-pass | Best screen in the app. Typography, callout blocks, breadcrumb, dark mode — all excellent. Only gap: no sticky progress CTA at bottom on mobile. |
| /today | 8/10 | Near-pass | Chart of the Day hero card is genuinely excellent. Desktop clips "Jump back in" at fold (ticket filed). Mobile layout is clean. |
| /learn | 8/10 | Near-pass | Unit cards use full-width kit treatment correctly. Lock states are clear. Mobile grid collapses correctly. |
| /notifications | 7.5/10 | Near-pass | Unread highlight (the sunk background) works in light but is very subtle in dark. Filter pills are correct kit treatment. |
| /search | 7.5/10 | Near-pass | Clean. Symbol badge tiles, lesson rows correct. Section labels (TRENDING, SYMBOLS, LESSONS) use correct faint uppercase treatment. |
| /login | 7.5/10 | Near-pass | Two-panel layout with blue left panel is close to prototype. SSO buttons need slightly more breathing room on mobile. |
| /review | 7.5/10 | Near-pass | Empty state handled gracefully. Stats cards (streak, cards due, best streak) are clean. |
| /progress | 7/10 | Defect | Progress bar tracks nearly invisible at 0% — ticket filed. Daily streak card and Exam readiness card are solid. |
| /simulator | 7/10 | Defect | Content layout solid. Native selects broken in dark (ticket filed). Stats cards correctly use kit-like flat card treatment. |
| / (home/marketing) | 7/10 | Near-pass | Feature cards have correct radius in light. Hero headline is strong. "Today's warm-up" secondary button could be more visually distinct. |
| /settings | 6.5/10 | Defect | Mobile tab truncation (ticket filed). Desktop sidebar nav and form fields look correct. |
| /study | 6.5/10 | Defect | LEARN/TEST affordance failure in dark (ticket filed). Row cards use wrong radius (ticket filed under exam/study). |
| /exam | 6/10 | Defect | No interactive affordance on rows (ticket filed). Wrong radius on all cards (ticket filed under global). Info block feels like static text. |
| /symbol/AAPL | 6/10 | Defect | Desktop view is excellent — rich chart, controls well-organized. Mobile critically crowded (ticket filed). |

## Overall migration quality: 7.2/10 average

The migration established a consistent warm cream palette, correct dark mode, Plus Jakarta Sans headings, and the AppShell navigation shell across all routes. That foundation is solid. The gap to 10/10 is concentrated in two systemic issues (22px radius + warm shadow on non-kit card surfaces) and four route-specific defects.

## What has genuinely cleared the bar
- AppShell/StaxShell: nav tabs, active state, streak/XP counters, mobile bottom tab bar — all correct
- Typography: Plus Jakarta Sans confirmed active across all routes
- Dark mode token flipping: correct on all 14 routes
- Warm page background: visually correct on all routes
- /learn catalog: best-in-class card treatment with the kit LessonCard
- /learn/[slug] lesson reader: typography, callout blocks, dark mode — all excellent

## Tickets filed (Asana project 1215741548419232, Backlog section 1215763060319827)
1. Global card radius (22px vs rounded-lg) — Critical
2. Global warm shadow absent on non-kit cards — Critical
3. /exam no interactive affordance on rows — Major
4. /simulator native select unstyled in dark — Major
5. /settings mobile tab truncation — Major
6. /today desktop "Jump back in" clips at fold — Major
7. /symbol/AAPL mobile chart controls stack — Major
8. /progress bar tracks invisible at 0% — Major
9. /study LEARN/TEST badges invisible/no affordance in dark — Major
10. Global Next.js devtools "N" widget — verify hidden in production — Minor
