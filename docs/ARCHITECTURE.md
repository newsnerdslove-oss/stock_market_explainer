# Architecture & Tech Stack

**Project:** Stock Market Explainer — a daily training platform for the stock market and crypto, from basics to advanced, with a trade simulator on near-real-time quotes.
**Repo:** https://github.com/newsnerdslove-oss/stock_market_explainer
**Target outcome:** learner reaches Series 7-level knowledge + day-trader confidence through progressive lessons and tests.
**Constraints:** solo builder with some coding experience · web app first · free API tiers only.

---

## The three pillars

The product is three systems that share one account and one progress model.

1. **Learn** — a structured curriculum (basics → advanced) of lessons, articles, and visual explainers (candlesticks, line charts, P&L, P/E, options, swing vs. day trading). Content is data, not hard-coded pages, so you can add to it without redeploying.
2. **Test** — progressive quizzes gating progress. Each module has a mastery threshold; later modules unlock only when earlier ones are passed. A Series 7-style question bank with explanations drives "exam confidence."
3. **Simulate** — paper trading for stocks and crypto using near-real-time quotes, a virtual cash balance, positions, P&L, order history, and live candle/line charts.

---

## Recommended stack

The guiding principle for a solo builder: **one language for the app (TypeScript), one language for the markets/quant work (Python), and a managed database so you don't run servers.**

| Layer | Choice | Why |
|---|---|---|
| Web frontend + app backend | **Next.js (React + TypeScript)** | One framework gives you UI, routing, API routes, and auth. Huge ecosystem, great docs, deploys free to Vercel. |
| Styling / UI | **Tailwind CSS** + **shadcn/ui** | Fast, consistent UI without hand-writing CSS. |
| Charts | **TradingView Lightweight Charts** | Free, purpose-built for candlesticks and line charts; tiny and fast. |
| Market data + simulation service | **Python + FastAPI** | Python is the lingua franca of markets/quant. FastAPI gives you a clean REST + WebSocket service for data ingest and the simulator. |
| Database + Auth | **Supabase (managed Postgres)** | Free tier includes Postgres, authentication, and row-level security. No server to run. |
| Caching (later) | **Redis** | Cache quotes so you don't burn API limits. Add when traffic justifies it. |
| Hosting | **Vercel** (web) + **Render/Fly.io/Railway** (Python service) | All have free or near-free tiers. |

### Why a split (TypeScript app + Python service) instead of one language?

You *could* do everything in TypeScript. But the market-data ingest, indicator math (RSI, MACD, moving averages), and any future backtesting are dramatically easier in Python (pandas, numpy, the broker SDKs). Keeping that in a small FastAPI service means the messy market plumbing lives in one place with a clean API, and your Next.js app just calls it. It also mirrors how real fintech teams split things, which is good practice if you ever hire help.

If you'd rather start with **zero** Python, you can run the whole MVP in Next.js alone and add the Python service in Phase 2 — the scaffold is structured so that's a clean seam, not a rewrite.

---

## Data & simulation strategy (free tier)

The single most important decision: **use Alpaca as the simulation engine.**

- **Alpaca Paper Trading API** is free, global, and gives you a real-time simulated brokerage account — virtual cash, real order types, realistic fills — without building a matching engine yourself. It covers **stocks, options, and crypto**.
- **Alpaca Market Data (Basic, free)** gives real-time US equity quotes via the IEX feed plus crypto data and historical bars/candles. Good enough for an educational simulator. (Full-market real-time SIP feed is a paid upgrade later.)
- **Crypto live streams:** Coinbase Advanced Trade and Binance expose **free public WebSocket market data with no API key** for live prices, order books, and trades. Use these for the live "ticker" feel and candle building.
- **Fallback / supplement:** Finnhub (free real-time US stocks/forex/crypto, ~60 req/min) and Alpha Vantage (free, technical indicators, but only 25 calls/day — use for occasional reference data, not live).

This means v1's simulator is mostly *orchestration* of Alpaca's paper API plus a live crypto stream — not a from-scratch exchange. That's the right scope for a solo build.

> ⚠️ Free equity data is IEX-only and may be slightly delayed/thin vs. the full market. Label the simulator "educational / near-real-time" so expectations are clear. This is a feature for a *training* product, not a bug.

See `docs/TECH_GAPS.md` for the accounts/keys you need and what each costs if you outgrow free.

---

## System diagram (logical)

```
                    ┌────────────────────────────┐
   Browser  ─────▶  │   Next.js app (Vercel)     │
                    │  • Learn UI / lessons       │
                    │  • Quizzes & progress       │
                    │  • Simulator UI + charts    │
                    │  • Auth (Supabase)          │
                    └──────────┬─────────────────┘
                               │  REST / WebSocket
                               ▼
                    ┌────────────────────────────┐
                    │  Python FastAPI service     │
                    │  • Quote/candle ingest      │
                    │  • Indicator math           │
                    │  • Simulator orchestration  │
                    └───┬───────────────┬─────────┘
                        │               │
              ┌─────────▼──┐     ┌──────▼─────────┐
              │ Alpaca API │     │ Coinbase /     │
              │ (paper +   │     │ Binance WS     │
              │  data)     │     │ (crypto live)  │
              └────────────┘     └────────────────┘

   Shared state ──▶  Supabase Postgres
                     (users, progress, content,
                      portfolios, trades, quiz results)
```

---

## Data model (starting point)

- **users** — managed by Supabase Auth.
- **modules** — a curriculum unit (e.g., "Candlestick basics"). Has `level` (1–5), `order`, `prerequisites`.
- **lessons** — content within a module (markdown/MDX + optional chart config). Versioned so you can edit safely.
- **questions** — quiz items linked to a module; `type` (mcq, true/false), `explanation`, `series7_tag`.
- **progress** — per user/module: status, best score, attempts, mastery flag.
- **portfolios** — per user, per market (stock/crypto): virtual cash, created_at.
- **positions** — symbol, qty, avg_cost, portfolio_id.
- **orders** — symbol, side, qty, type, status, filled_price, timestamp (mirrors Alpaca paper orders).

---

## Security & compliance notes

- This is **educational**. Put a clear disclaimer everywhere: *not financial advice; paper trading only; no real orders.*
- Never let the app place **live** Alpaca orders — only paper. Keep live keys out of the codebase entirely.
- Store all API keys in environment variables / Supabase secrets, never in the repo. `.env` is git-ignored; use `.env.example` as the template.
- Series 7 is an actual FINRA exam. You can teach the *content*; don't imply official affiliation or that the platform certifies anyone.
