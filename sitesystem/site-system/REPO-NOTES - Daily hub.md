# Stax — "Today" / Daily hub — build notes

**Status:** Designed in the prototype (`site-system/Stax App Screens.html` → "Today" tab). **Not in the repo yet — needs to be built.**

The screen is marked with a `Concept · needs build` badge in the prototype so it's not mistaken for shipped UI.

## What it is
A daily-engagement hub that gives the learner one obvious thing to do each day and keeps the streak loop tight. Three parts:

1. **Chart of the day** — a featured `PatternChart` challenge (e.g. "spot the hammer") that awards bonus XP. Launches the practice trainer.
2. **Question of the day** — a single multiple-choice question with inline reveal (correct/incorrect highlight + a one-line explanation).
3. **"What do you want to test today?"** — a launcher grid (Candlestick patterns / Reading trends / Options payoffs / Market basics) that deep-links into the relevant trainer or lesson.
4. **Daily goal + streak strip** — a small ring (e.g. 1/2 tasks) plus the week dots.

## What needs to exist in the repo to make it real

### Data / backend
- **Daily content selection.** A job (or deterministic seed from the date) that picks:
  - the chart-of-the-day dataset + the correct candle index + pattern name,
  - the question-of-the-day (prompt, options, correct index, explanation).
  - Keep it the same for all users per calendar day (date-seeded) so streaks/leaderboards are fair.
- **Per-user daily state:** `dailyCompleted`, `dailyGoalProgress` (e.g. {done, target}), `lastCompletedDate`, `streakCount`. Reset/break logic for missed days (timezone-aware).
- **XP + streak mutations:** completing the daily challenge / QOTD writes XP and advances the streak. Define the bonus (prototype shows "double XP" / "+10 XP").

### Components to add (as Storybook components, then `/design-sync`)
- `DailyChallengeCard` — the gradient hero wrapping a `PatternChart` + CTA.
- `QuestionOfTheDay` — multiple-choice with reveal state (the prototype's inline version is the spec).
- `TestLauncherCard` — the icon/title/subtitle/"Start" tile used in the grid.
- These reuse existing tokens (`--up`, `--down`, `--learn`, `--streak`, surfaces) and the kit primitives (Ring, Bar, WeekDots, Pill, Badge).

### Routing
- New route `/today` (or make it the post-login landing). Prototype adds a **"Today"** nav tab (sparkles icon) as the first item.

### Open questions for product
- Is "Today" the default landing after login, or a peer of "Learn"?
- One daily challenge for everyone (date-seeded) vs. personalized to the learner's current unit?
- Streak-freeze / catch-up mechanic? (affects the streak data model)
- Does QOTD count toward the same XP/streak as a full practice session, or its own smaller reward?

## Other screens proposed (not yet built — awaiting go-ahead)
- **Search / Explore** — find a lesson, pattern, or term.
- **Settings sub-pages** — account, notifications schedule, subscription/plan.
- **Mobile** — phone-frame versions of Today, Dashboard, Lesson, Practice.

---

# Batch 2 — Lesson player, Achievements, Leaderboard — build notes

**Status:** Designed in the prototype (picker entries **Player / Badges / Leaderboard**). All three carry `Concept · needs build` and reuse existing tokens + kit primitives.

## Lesson player (`s_player.jsx` → "Player")
The focused, full-bleed step-through a learner enters from the lesson intro's **Start lesson** button (the intro in `s_lesson.jsx` is just the overview). Distinct chrome: exit (×), a single lesson progress bar, and a hearts counter — no global nav.
- **Data model:** a lesson is an ordered list of `steps`, each `kind: 'teach' | 'choice' | 'tap'`. `teach` = eyebrow/title/body + a `DSChart`. `choice` = prompt/options/correct/explain. `tap` = "spot the candle" over candle glyphs (correct index + explain). A `done` completion screen tallies XP, accuracy, hearts.
- **Mechanics:** select → **Check** → correct/incorrect feedback banner → **Continue**. Wrong answers cost a heart (prototype caps at 3). XP = 12/correct + a base bonus.
- **Components to add (repo):** `LessonPlayerFrame` (exit + progress + hearts shell), `TeachStep`, `ChoiceStep`, `TapStep`, `LessonComplete`. The candle glyphs (`CandleGlyph` / `CANDLE_SWATCHES`) are a placeholder — production should drive the tap exercise from real `PatternChart` data, not hand-built SVG specs.
- **Open questions:** Hearts model — do they gate progress / refill over time / cost gems? Can a learner retry a missed check or only review? Is the player its own route (`/lesson/:id/play`) under the intro?

## Achievements (`s_badges.jsx` → "Badges")
Full grid with category filter, a "closest to unlocking" spotlight (ring + CTA), and earned/locked tiles. The compact 4-badge strip on Profile (`s_profile.jsx`) is the summary; this is the detail view.
- **Data model:** each badge = `{ id, category, tier: bronze|silver|gold, icon, title, criteria, earned, earnedAt?, progress?, goal? }`. Earned tiles show date; locked show a `progress/goal` bar. "Closest to unlocking" = max `progress/goal` among locked.
- **Components to add:** `BadgeTile` (tier swatch, lock state, progress bar), `BadgeSpotlight`, `BadgeFilter`.
- **Open questions:** Tier taxonomy + criteria are placeholders — needs a real achievement catalog. Are badges purely cosmetic or do they grant XP/gems? Categories shown: Streaks / Mastery / Daily / Social.

## Leaderboard (`s_leaderboard.jsx` → "Leaderboard")
Weekly XP league with podium (top 3), promotion/demotion zones, a League/Friends toggle, and a reset countdown. "You" row highlighted.
- **Data model:** a `league` is a weekly cohort of ~12 users `{ name, xp, you }` sorted by XP. Top N promote, bottom N demote (prototype: top 3 / bottom 2). Friends view = same shape, no promote/demote lines. Needs `weekStart`/`resetAt`, league tier name (prototype: "Sapphire → Emerald").
- **Components to add:** `LeaguePodium`, `StandingsRow` (rank + avatar + XP + zone tag), `LeagueBand`.
- **Open questions:** Cohort assignment (skill-based? random?), tier ladder + promotion rewards, anti-cheat for XP, whether Friends needs invites/contacts. Leaderboard sits under the **Today** tab in the prototype — confirm IA.

---

# Batch 3 — Paper trading experience — build notes

**Status:** Designed in the prototype. New **Invest** tab in `AppShell`; picker entries **Invest / Stock / Orders / Clubs**. All carry `Concept · needs build`. **No real market data** — prices are a client-side random walk.

This is the biggest net-new surface. It was an "ultrathink" pass on the simulator: the old app had only a passive equity-curve card and *no way to actually trade*. We added a full, fully-interactive desk plus a deliberately **discipline-first** gamification layer (the research is clear that gamifying trade *frequency* — confetti, variable rewards, raw % leaderboards — drives overtrading and risk-taking, which is the opposite of what a learning product should teach).

## Live trading store (`trade_store.js` → `window.StaxTrade`)
The single source of truth. Plain JS, loaded before the babel screens, persisted to `localStorage` (`stax.trading.v1`). Screens subscribe via the `useTrade()` hook in `shared.jsx`; helpers `usd/signed/pct/qtyFmt` format money.
- **State:** `cash`, `deposit` ($100k start), `positions{sym:{shares,avgCost}}`, `orders[]`, `watchlist[]`, `xp`, `focus` (current symbol), `theses{orderId:text}`.
- **Universe:** 12 instruments across **stocks / ETFs / crypto** (`UNIVERSE`), each with base price, prev close, sector, color. Prices live-tick every 2.6s (a bounded random walk) and append to a per-symbol chart series; **open orders are checked for fills on every tick**.
- **Order engine (`placeOrder`)**: supports **market / limit / stop / stop-limit**, **buy + sell**, validates buying power & shares held, updates avg cost / cash / positions on fill, awards XP (+8 per trade, +12 for a journaled thesis). Market fills immediately; limit/stop rest until price crosses. Selectors: `totals()`, `holdings()`, `quote()`, `openOrders()`, `tradesToday()`.
- **For the repo:** this maps to a real positions/orders service + a market-data feed. The fill logic and P&L math are the spec; swap the random walk for live/delayed quotes.

## Trading desk (`s_trade.jsx` → "Invest")
The hub. Account header (total value, day P&L), stat tiles (buying power / invested / total P&L / positions), portfolio equity chart, **positions table** (live price, day %, value, total P&L — rows open the stock page), **watchlist**, **open orders** (with cancel), a **missions** strip, and a **tilt-protection nudge** when `tradesToday ≥ 6`.

## Stock detail + order ticket (`s_stock.jsx` → "Stock")
The core interactive piece. Symbol search to switch focus, price header + chart with timeframe tabs, your-position card, key stats + news (placeholder/illustrative — wire to real data), watchlist toggle. The **OrderTicket** is the heart: buy/sell, the four order types, qty (+Max), conditional limit/stop fields, time-in-force, a **"Why this trade?" thesis box (+12 XP)**, est cost/proceeds, **Review → Confirm → post-trade scoring** (trade-quality bar: journaled? price-controlled order? measured pace?).
- **Components to add:** `OrderTicket`, `StockHeader`, `KeyStats`, `PositionCard`, `TradeQualityCard`.

## Orders (`s_orders.jsx` → "Orders")
Order history with All / Open / Filled / Cancelled tabs; each row shows side, symbol, type, fill/limit/stop price, status, time, cancel for open orders, and the **journaled thesis** inline.

## Clubs & challenges (`s_clubs.jsx` → "Clubs")
The community + gamification hub, per the request for invite-friends groups, community leaderboards, and stock clubs (one learner → **many clubs + friend circles**). Weekly return-challenge banner (ties into the existing Leaderboard), **clubs grid** (members, your rank, top return, mini standings; a friend-circle variant), **create-a-club** + **invite-friends** stubs (invite shows a "link copied" state), **friends** list with weekly returns, full **trading missions** list, and **discipline badges** (Price Setter, The Journalist, Diversified, Diamond Hands, Cool Head, Club Champion).

## Gamification philosophy (important for the repo)
Reward **process and discipline**, not churn: XP for journaling a thesis and using price-controlled orders; missions for diversifying, holding through a dip, rebalancing; badges for restraint. Keep the **tilt / overtrading nudge** and the review-before-confirm friction. Club/league returns are paper-only and framed as "play smart, not reckless." This is a deliberate divergence from engagement-maximizing trading apps.

## Open questions for product
- **Market data:** real-time vs delayed; which asset universe; corporate actions, dividends, crypto 24/7 vs market hours.
- **Fills/realism:** model slippage / partial fills / spread? Bracket & trailing-stop orders? Extended hours?
- **Economy:** does paper XP feed the same global XP/streak as lessons, or a separate "trader level"? Do badges/clubs grant anything?
- **Social:** club creation, membership limits, moderation, friend invites/contacts, club vs global leaderboards, privacy of holdings.
- **Reset:** can a learner reset their paper account / run seasons? (`StaxTrade.reset()` stub exists.)
- **Safety:** what guardrails before a learner graduates to a real-money broker (if ever) — and the disclaimer/education path.
- **Components to graduate:** `OrderTicket`, positions/orders tables, `SymbolMark`, `TradeQualityCard`, club cards, mission/badge tiles.

---

# Batch 4 — Design-system kit + interactive chart

Two structural fixes from the system audit (the gap was never chart *functionality* — it was a *composable* design system).

## UI kit → design system (`templates/stax-ui/`)
The kit (`Btn, Card, Pill, Badge, AppShell, SectionTitle, LessonCard, Field, Toggle, Ring, Bar, Avatar, WeekDots, Icon` + theme) lived only in the prototype's `aKit.jsx`, so new screens in claude.ai/design had only the 4 SVG charts to work with. Now packaged as:
- `stax-kit.jsx` — namespaced library (`window.StaxKit.*`), light/dark via `applyTheme`, function-props default to no-ops.
- `StaxScreen.dc.html` — a **"Stax App Screen" template** (shows in the DS Templates group) composing the kit + `StocksDS.EquityCurve`. Don't load React in the DC — the runtime provides it (a 2nd copy → invalid-hook errors).
- `README.md` — component/prop reference + DC wiring + theming.
- **Next:** to make these *synced* DS components (not just a template), graduate them in the code repo with `.stories.tsx` + re-run `/design-sync`.

## Interactive chart mockup (`site-system/s_chart.jsx` → `window.ResearchChart`)
The real `ResearchChart` (in the code repo) is backend-dependent, so it can't be composed in design screens (renders empty without `/api/candles`). This is a faithful **no-backend stand-in** used on the Stock page: candles/bars/line/area/Heikin-Ashi, volume, EMA 9/20/50, Bollinger, VWAP, RSI pane, working timeframes, crosshair + OHLC legend, drawing tools (H-Line/Alert place; Demand/Supply bands), auto supply/demand zones. Data is a seeded random walk per (symbol, timeframe) — deterministic, no network.
- **Note:** indicator helpers are prefixed `rc*` (`rcEma/rcRsi/…`) — generic names like `rsi`/`ema` collided with globals from the bundled chart libs.
- **The real swap:** when `ResearchChart` gets a fixtures/demo-data mode and is synced, it drops straight into the Stock page where this mockup sits.

---

# Batch 5 — Product whitespace screens

Filled the gaps the audit flagged as "designed nowhere." All reuse the kit + trade store; all `Concept · needs build`.

- **Search / Explore** (`s_search.jsx` → "Search") — global search over symbols (live from `StaxTrade.UNIVERSE`), lessons, and glossary terms; trending chips + empty state. Reachable from the new **search icon** in `AppShell`.
- **Settings** (`s_settings.jsx` → "Settings") — left-rail sub-pages: Account, Notifications (daily-reminder time + per-type toggles), Plan & billing (Free vs Pro), Appearance (theme), Security.
- **Notifications inbox** (`s_alerts.jsx` → "Alerts") — typed feed (price/learning/social), read/unread, filter chips, mark-all-read; rows deep-link (a price alert sets focus + opens the stock). Reachable from the new **bell icon** (unread dot) in `AppShell`.
- **Options chain** (`s_options.jsx` → "Options") — expiry selector + calls/strike/puts chain (premiums from a simple intrinsic+time-value model around spot), tap-to-add legs, long/short flip, net debit/credit, and a live **`PayoffDiagram`** (the DS component). Reachable from the Stock page's **Options** button. Options aren't in the core `StaxTrade` store — this is a standalone paper concept; wiring it into positions/P&L is an open item.
