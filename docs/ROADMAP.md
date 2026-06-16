# Roadmap (phased)

Each phase is a shippable milestone. Don't start a phase until the previous one runs.

## Phase 0 — Foundations (this scaffold) ✅
- Monorepo: `web/` (Next.js) + `market-service/` (FastAPI) + `docs/`.
- Runnable "hello data" path: web page → Python service → a quote (mock now, Alpaca next).
- Git initialized and pushed to GitHub.

**Definition of done:** `web` starts, `market-service` returns a quote, repo is on GitHub.

## Phase 1 — Learn MVP (week 1–2)
- Content model in Supabase: modules + lessons (MDX).
- Render a lesson page with text and one embedded chart explainer (candlestick anatomy).
- Seed 3–5 "basics" lessons: what a candle is, line vs. candle, bid/ask/spread, P&L, P/E.

**DoD:** you can read a lesson end-to-end in the browser.

## Phase 2 — Test + progression (week 2–3)
- Question bank table + quiz UI.
- Mastery gating: module N unlocks when N-1 is passed (e.g., ≥80%).
- Progress dashboard.

**DoD:** completing a quiz unlocks the next module and saves your score.

## Phase 3 — Auth + persistence (week 3–4)
- Supabase Auth (email/password or magic link).
- Per-user progress, saved across sessions/devices.

**DoD:** log in on a second device and see your progress.

## Phase 4 — Simulator: stocks (week 4–6)
- Connect Alpaca paper API: virtual account, place/cancel orders, view positions & P&L.
- Live-ish quotes + candlestick chart for a symbol.
- Order ticket UI (market/limit, qty).

**DoD:** buy and sell a stock in paper, see P&L update.

## Phase 5 — Simulator: crypto (week 6–7)
- Coinbase/Binance public WebSocket live price + candles.
- Crypto paper portfolio (via Alpaca crypto or a simple internal ledger).

**DoD:** trade BTC/ETH in paper with a live chart.

## Phase 6 — Series 7 depth + advanced modules (week 7+)
- Expand question bank toward Series 7 coverage (see CURRICULUM.md).
- Advanced lessons: options strategies, swing vs. day trading, technical indicators.
- "Exam mode": timed, scored mock exams.

**DoD:** a full timed mock exam with a score report.

## Later / optional
- Redis quote cache. Streaks & daily-goal mechanics (the "daily training" habit loop). Leaderboards. Mobile app (React Native / Expo, reusing the same API). Backtesting sandbox in Python.

---

### Suggested daily-training loop (the habit core)
Since the goal is *daily* training: each day surfaces (1) one new micro-lesson, (2) a 5-question review quiz mixing past topics (spaced repetition), and (3) one simulator "challenge" (e.g., "place a limit order 2% below market"). Track a streak. This is what turns content into a routine.
