# Enhanced Positions & Position-History Drill-Down — Feature Plan (parked)

**Status:** Parked / not started.
**Reference screenshot:** _Not yet received_ — the requested screenshot didn't
attach. The exact columns, layout, and metric set below are a best-effort from the
description and **must be reconciled against the screenshot** before Phase 2.

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

## Candidate metrics (positions view v2 — reconcile with screenshot)
Per position: quantity · average cost · last/mark · market value · day change
($ / %) · unrealized P&L ($ / %) · **total return** ($ / %) · cost basis ·
realized P&L (this symbol) · **allocation %** of portfolio · holding period /
opened date · (options: strike/expiry/Greeks/DTE). Portfolio header: equity, cash,
total unrealized, total realized, day change, # positions.

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
