# Stock Research & Advanced Charting — Feature Plan (parked)

**Status:** Phases 1–5 shipped. (Phase 5 — drawing tools: trend lines, horizontal
lines, and Fibonacci retracements via a lightweight-charts series primitive,
persisted per symbol in localStorage, with select/delete + keyboard. See
`lib/charts/drawings.ts` + `components/charts/drawingsPrimitive.ts`.) Remaining:
optional Phase 6 (lower RSI/MACD panes, price alerts, compare overlays).
**Reference:** A Webull-style mobile chart card (SPCX) — candlesticks with **EMA
overlays** (EMA 5/10/20 lines tracking the price), a **volume** pane, a horizontal
**current-price tracking line** (201.89 / 202.23 markers), a right-hand price axis,
and a **quote header** (last, % change, after-hours, Bid/Ask). The ask: from the
simulator, **look up / research any stock and see candles + trend lines (moving
averages) + tracking lines** like this, then trade it.

## Goal / outcome
A research-grade charting view inside the simulator: search a symbol → see a
candlestick chart with indicator overlays, volume, crosshair readouts, multiple
timeframes, and price/trend tracking lines — then place an order from the same
screen. Outcome: users can actually *analyze* before they trade, reinforcing the
technical-analysis curriculum (the 200-level `markets-technical` module).

## What we already have (and the gap)
- `components/charts/LiveCandleChart.tsx` — **lightweight-charts v5** candlestick
  chart, dark-themed to the design tokens, polls `/api/candles` every ~5s and
  `series.update()`s the latest bar. Lives on `/symbol/[ticker]`.
- `/api/quote` (last/bid/ask) and `/api/candles` (OHLC**V** — volume already
  present) via Alpaca IEX (stocks) / Coinbase (crypto) / mock fallback.
- **Gaps:** no indicator overlays, no volume pane, no tracking/trend lines, no
  quote header, **timeframe is hardcoded** (`1Min` / `granularity=60`), and there's
  no research entry point (symbol search/watchlist) from the simulator.

## Technical research findings (lightweight-charts v5)
- **Supported out of the box** (reuse): additional **line series** for MAs (EMA/SMA
  overlays), a **histogram series** for volume, **`createPriceLine`** for horizontal
  tracking lines (current price, support/resistance), crosshair + per-series legend,
  series markers.
- **NOT built in — the hard part:** freehand **trend-line / drawing tools**.
  lightweight-charts has no drawing UI; it requires **v5 series "primitives"
  (custom canvas drawing)** or a third-party plugin, or a bespoke overlay layer.
  This is the main feasibility risk → isolated to its own late phase.
- **Indicators are pure derivations** from candles (no new data feed) — EMA, SMA,
  VWAP, RSI, MACD, Bollinger are all computed client-side from OHLCV.

## Data-model requirements
1. **Indicators module** (`lib/indicators/`, pure + tested) — EMA, SMA, VWAP, RSI,
   MACD, Bollinger Bands from a candle series. No new data source; deterministic →
   unit-testable against known values.
2. **Multi-timeframe candle API** — extend `/api/candles` + the three fetchers to
   accept a `timeframe`/granularity param and map it:
   - Alpaca: `1Min|5Min|15Min|1Hour|1Day` (currently hardcoded `1Min`).
   - Coinbase: `granularity` ∈ `60|300|900|3600|21600|86400`.
   - market-service mock: add timeframe support.
   Daily/weekly views also need a longer history window than today's intraday limit.
3. **Quote header data** — last/bid/ask exist; **% change** needs the prior close
   (derive from candles or add to the quote). **Extended/after-hours** (the
   screenshot shows after-hours): likely **unavailable on free Alpaca IEX** —
   flagged as a known limitation, not a blocker.
4. **Symbol search / research universe** — no search today. Options: Alpaca
   `/v2/assets` for a tradable-symbol list (cache it), or a curated starter list.
   Mind rate limits.
5. **User chart state (persisted)** — selected indicators, timeframe, and any
   **drawings** (trend/horizontal lines), per user and per symbol. localStorage-
   first (matches the rest of the app) + optional Supabase (`chart_prefs` /
   `drawings` tables) later. **Watchlist** is a natural sibling.

## UI elements
- **Research entry** — a symbol search box + recent/watchlist, surfaced in the
  simulator (a "Research" tab/panel beside the order ticket, or a richer
  `/symbol/[ticker]`).
- **Quote header** — last price, $ and % change (color-coded up/down), Bid×size /
  Ask×size, day range, volume.
- **Chart** — candlesticks (have) + **indicator overlays** with toggles
  (EMA/SMA/VWAP/Bollinger), a **volume histogram** pane, **price/tracking lines**
  (current price, user horizontal lines, optional auto S/R), crosshair **legend**
  showing OHLCV + indicator values at the cursor.
- **Timeframe selector** — 1D / 5D / 1M / 3M / 1Y / intraday granularities.
- **Lower indicator panes (optional)** — RSI, MACD.
- **Drawing toolbar (advanced)** — trend lines / horizontal lines (the risky phase).
- **Trade from chart** — a buy/sell affordance that pre-fills the order ticket.

## Phases (each = its own CI-gated PR)
1. **Indicators core (pure, tested)** — `lib/indicators/` (EMA/SMA/VWAP/RSI/MACD/
   Bollinger) with unit tests vs known values. No UI.
2. **Multi-timeframe candle API** — timeframe param through `/api/candles` + all
   three fetchers; tested mappers; longer history for daily views.
3. **Chart v2** — overlays (MA line series) + volume pane + current-price line +
   crosshair legend + timeframe/indicator toggles + quote header. Extends
   `LiveCandleChart`.
4. **Research entry & trade-from-chart** — symbol search + watchlist; wire into the
   simulator; "trade" pre-fills the order ticket. Persist chart prefs/watchlist
   (localStorage-first).
5. **Drawing tools + persistence (advanced/risky)** — trend & horizontal lines via
   lightweight-charts primitives or a custom overlay; persist per user/symbol.
   Optional auto support/resistance.
6. **Indicator depth (done)** — ✅ lower RSI/MACD panes (own v5 panes, toggleable);
   ✅ Bollinger Bands + VWAP price-pane overlays; ✅ chart types (candles/bars/line/area/
   Heikin-Ashi, persisted); ✅ price alerts (click-a-price → dashed 🔔 line, toast on
   crossing, per-symbol persist); ✅ compare overlay (percent-rebased second symbol).

## Scope decisions to make when we pick this up
1. **Indicator set for v1** — EMAs + volume + VWAP first (matches the screenshot),
   defer RSI/MACD panes?
2. **Timeframes for v1** — intraday only, or add daily/weekly (needs more history)?
3. **Drawing tools** — in scope now, or ship analysis-first and add drawing later
   (recommended, given the feasibility risk)?
4. **Surface** — enhance the existing `/symbol/[ticker]` page, or build an in-
   simulator research panel (or both)?
5. **Persistence** — localStorage-only for chart prefs/watchlist first, Supabase
   sync later?

## Dependencies / coordination
- Reinforces the **200-level technical-analysis** curriculum (could cross-link
  lessons ↔ live indicators).
- Reuses the live mark-to-market data plumbing; the timeframe work also benefits the
  `/symbol/[ticker]` page broadly.
- Independent of the options epic, but both touch the simulator surface — sequence
  to avoid UI churn.
