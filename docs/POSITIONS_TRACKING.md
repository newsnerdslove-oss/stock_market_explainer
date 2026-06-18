# Enhanced Positions & Position-History Drill-Down — Feature Plan (parked)

**Status:** Parked / not started.
**Reference screenshot:** [`docs/assets/positions-reference.png`](./assets/positions-reference.png)
— a Fidelity-style holdings table. Columns below are reconciled to it.

### Exact columns from the reference (positions view v2)
Grouped **by account** (e.g. "Individual – TOD", "Traditional IRA"), each group with
a **Cash** row and an **Account total** row:

| Column | Source |
|---|---|
| **Symbol** (+ company name subtitle) | position + a name lookup |
| **Last price** | `/api/quote` |
| **Last price change** ($) | quote vs prior close |
| **Today's gain/loss** ($) | qty × today's price change |
| **Today's gain/loss** (%) | derived |
| **Total gain/loss** ($) | market value − cost basis total |
| **Total gain/loss** (%) | derived |
| **Current value** (market value) | qty × last |
| **% of account** (allocation) | value / account equity |
| **Quantity** | position (fractional ok) |
| **Average cost basis** | derived from fills |
| **Cost basis total** | qty × avg cost |
| **52-week range** (mini range bar w/ lo–hi) | needs 52-wk high/low data |

Plus per-row "Manage dividends" affordance, an "As of …" freshness timestamp, and
account subtotals. (Multi-account grouping is brokerage-style; our sim is a single
paper account today — **decision:** keep one account, or introduce account buckets.)

## Goal / outcome
Turn the simulator's thin positions list into a rich, brokerage-grade view with
lots of **meta + tracking data**, and add a **per-position drill-down that tracks
the position over time** — so buying, selling, and re-accumulating (e.g. AAPL
across many trades) is fully reconstructable: how the position was built, average
cost over time, realized P&L per round-trip, holding period, and value history.

## Two parts
1. **Positions view v2** — a metadata-rich table (per the screenshot).
2. **Position drill-down** — click a symbol → its full lifecycle over time.

## Current state (what we're expanding)
- Ledger position = `{ symbol, qty, avgCost }`; portfolio also keeps `orders[]`
  (**capped at 50**, newest-first) and a cumulative `realized` scalar.
- Persistence is now localStorage-first with best-effort Supabase
  (`portfolios` / `positions` / `orders` tables).
- **Gap:** average-cost only (no per-fill lots), capped order history (can't
  reconstruct long lifecycles), no per-symbol realized P&L, no value-over-time.

## New data the reference columns require (beyond today's ledger)
- **Prior close** per symbol → "today's gain/loss" ($ and %). Add to the quote or
  derive from daily candles.
- **52-week high/low** per symbol → the range bar. New data: a daily-bars/stat
  fetch (Alpaca/Coinbase) — cache it; this is the main *new market-data* need.
- **Company name** per symbol → the subtitle. A small symbol→name map or an
  assets lookup (ties to the charting feature's symbol search).
- Everything else (avg cost, cost basis total, market value, total G/L, % of
  account, quantity) derives from the **fill log + live mark** below.

## Drill-down (per symbol, over time)
- **Fill timeline** — every buy/sell with date, qty, price, side, resulting position.
- **Average-cost trajectory** — how avg cost moved as you accumulated/reduced.
- **Realized P&L per close** — each sell's gain/loss vs basis (round-trip view).
- **Holding period** & current open lot age.
- **Value-over-time mini-chart** — position market value across its life.
- **Lot breakdown** — open tax-lots (basis method decision below).

## Data-model expansion (the core of this feature)
1. **Full fill/trade log** — retain every fill per symbol (uncap or move history to
   its own `trades` store; paginate). This is the source of truth the drill-down
   derives from.
2. **Derived metrics module** (pure, tested) — from fills + live mark, compute the
   position-view metrics and the drill-down series. Deterministic → unit-testable
   like the existing ledger.
3. **Cost-basis method** — average-cost (matches today) vs FIFO/specified lots
   (richer, enables true tax-lot tracking). _Decision needed._
4. **Persistence** — extend localStorage schema + add a Supabase `trades` table
   (+ migration) so history survives and syncs; keep localStorage-first.

## Phases (each = its own CI-gated PR)
- **Phase 1 — Data model & metrics (pure, tested):** trade/fill log, derived
  position metrics + drill-down series, basis method. No UI.
- **Phase 2 — Positions table v2:** the metadata-rich table (match the screenshot),
  reusing the live mark-to-market already in the simulator.
- **Phase 3 — Position drill-down:** detail view (fill timeline, avg-cost
  trajectory, realized-per-close, value-over-time chart, lots).
- **Phase 4 — Persistence & history:** localStorage schema bump + Supabase `trades`
  table + migration; backfill from existing `orders`.
- **Phase 5 — Portfolio analytics (optional):** per-symbol/portfolio performance,
  best/worst, export.

## Scope decisions to make when we pick this up
1. **Cost-basis method** — average-cost (simpler, matches today) or FIFO/lot-level
   (enables true tax-lot drill-down)?
2. **History retention** — uncap orders, or a dedicated paginated `trades` store?
3. **Stocks only first**, or include options positions (coordinate with the options
   epic — option legs need strike/expiry/Greeks columns)?
4. **Screenshot reconciliation** — exact columns + layout once the image is shared.

## Dependencies / coordination
- Overlaps the **options-simulator epic** (both touch positions/ledger). The trade
  log and metrics module should be designed to accommodate option legs so we don't
  rework them later.
- Builds on the **localStorage-first trading context** and the **live
  mark-to-market** already shipped.
