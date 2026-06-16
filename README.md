# Stock Market Explainer

A daily training platform for the **stock market and crypto** — from absolute basics to advanced — with a **paper-trading simulator** on near-real-time quotes. The goal: take a learner from zero to Series 7-level knowledge and day-trader confidence through progressive lessons and tests.

> ⚠️ Educational only. Not financial advice. All trading is simulated (paper) — no real money, no real orders.

## What's here

| Path | What it is |
|---|---|
| `docs/` | Architecture, roadmap, curriculum, and the tech-gap checklist. **Start with `docs/ARCHITECTURE.md`.** |
| `web/` | The web app — Next.js (React + TypeScript). UI for lessons, quizzes, and the simulator. |
| `market-service/` | Python (FastAPI) service for market-data ingest, indicators, and simulator orchestration. Runs with mock data out of the box. |

## The three pillars
1. **Learn** — structured curriculum: candles vs. line charts, P&L, P/E, options, swing vs. day trading.
2. **Test** — progressive quizzes that gate the next module; a Series 7-style question bank.
3. **Simulate** — paper trading for stocks & crypto with live-ish quotes and candlestick charts.

## Quick start (local)

You need **Node.js (LTS)** and **Python 3.11+**. See `docs/TECH_GAPS.md` for the full setup checklist.

### 1. Market service (Python)
```bash
cd market-service
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
Visit http://localhost:8000/health and http://localhost:8000/quote/AAPL — returns mock data until you add Alpaca keys.

### 2. Web app (Next.js)
```bash
cd web
npm install
npm run dev
```
Visit http://localhost:3000.

### 3. Add real data (optional, free)
Copy `.env.example` to `.env`, create a free **Alpaca paper** account, and paste your keys. The service automatically switches from mock to live Alpaca data when keys are present.

## Roadmap
See `docs/ROADMAP.md`. You're at **Phase 0** (foundations). Phase 1 is the Learn MVP.

## Tech stack
Next.js + TypeScript + Tailwind · FastAPI (Python) · Supabase (Postgres + Auth) · Alpaca (paper trading + data) · TradingView Lightweight Charts. Rationale in `docs/ARCHITECTURE.md`.
