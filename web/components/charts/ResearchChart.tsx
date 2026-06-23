"use client";

// Research chart (TradingView Lightweight Charts v5): candlesticks + a volume pane +
// toggleable EMA overlays (computed from the Phase-1 indicators) + a timeframe
// selector (Phase-2 API) + a crosshair legend + Phase-5 DRAWING TOOLS (trend lines,
// horizontal lines, Fibonacci retracements) rendered via a series primitive and
// persisted per symbol in localStorage. Refetches on symbol/timeframe change and
// refreshes on a poll. Dark theme mirrors the design tokens.

import { useEffect, useRef, useState } from "react";
import {
  createChart,
  CandlestickSeries,
  HistogramSeries,
  LineSeries,
  ColorType,
  CrosshairMode,
  LineStyle,
  type IChartApi,
  type ISeriesApi,
  type UTCTimestamp,
  type MouseEventParams,
} from "lightweight-charts";
import { getCandlesViaApi, TIMEFRAMES, type Candle, type Timeframe } from "@/lib/marketService";
import { ema, rsi, macd, bollinger, vwap } from "@/lib/indicators";
import {
  loadDrawings,
  saveDrawings,
  newDrawing,
  POINTS_FOR,
  TOOL_COLOR,
  type Drawing,
  type DrawingType,
} from "@/lib/charts/drawings";
import { DrawingsPrimitive, type Draft } from "@/components/charts/drawingsPrimitive";

const UP = "#2BD17E";
const DOWN = "#FF5C5C";
const CANVAS = "#0B0E14";
const GRID = "#1E2530";
const BORDER = "#232A36";
const TEXT = "#8A94A6";
const POLL_MS = 10_000;

// Indicator-pane colours.
const RSI_COLOR = "#00D9FF";
const MACD_LINE = "#5BA8FF";
const MACD_SIGNAL = "#F5C451";
const HIST_UP = "rgba(43,209,126,0.5)";
const HIST_DOWN = "rgba(255,92,92,0.5)";

// Price-pane overlays (Bollinger Bands + VWAP).
const BB_BAND = "rgba(138,148,166,0.55)";
const BB_MID = "rgba(138,148,166,0.9)";
const VWAP_COLOR = "#FF9500";

// EMA overlays: period → colour.
const EMAS = [
  { period: 9, color: "#F5C451" },
  { period: 20, color: "#5BA8FF" },
  { period: 50, color: "#9D8CFF" },
];

// Lower-pane indicators (toggleable, default off).
type IndId = "rsi" | "macd";
const INDICATORS: { id: IndId; label: string; color: string }[] = [
  { id: "rsi", label: "RSI", color: RSI_COLOR },
  { id: "macd", label: "MACD", color: MACD_LINE },
];

type Tool = "cursor" | DrawingType;
const TOOLS: { id: Tool; label: string; hint?: string }[] = [
  { id: "cursor", label: "Cursor" },
  { id: "trend", label: "Trend", hint: "click two points" },
  { id: "horizontal", label: "H-Line", hint: "click a price" },
  { id: "fib", label: "Fib", hint: "click two points" },
];

const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

interface Legend {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  emas: Record<number, number | undefined>;
  rsi?: number;
  macd?: number;
  macdSignal?: number;
  bbMid?: number;
  vwap?: number;
}

interface MacdCache {
  macd: (number | null)[];
  signal: (number | null)[];
  histogram: (number | null)[];
}

interface BbCache {
  upper: (number | null)[];
  middle: (number | null)[];
  lower: (number | null)[];
}

// Price-pane overlay toggles.
type OverId = "bb" | "vwap";
const OVERLAYS: { id: OverId; label: string; color: string }[] = [
  { id: "bb", label: "BB", color: BB_MID },
  { id: "vwap", label: "VWAP", color: VWAP_COLOR },
];

const toSec = (iso: string) => Math.floor(Date.parse(iso) / 1000) as UTCTimestamp;

function dedupeSort<T extends { time: UTCTimestamp }>(rows: T[]): T[] {
  const byTime = new Map<number, T>();
  for (const r of rows) byTime.set(r.time as number, r);
  return [...byTime.values()].sort((a, b) => (a.time as number) - (b.time as number));
}

export default function ResearchChart({ symbol }: { symbol: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const candleRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
  const volumeRef = useRef<ISeriesApi<"Histogram"> | null>(null);
  const emaRefs = useRef<Record<number, ISeriesApi<"Line">>>({});
  const candlesRef = useRef<Candle[]>([]);

  // Lower-pane indicator series (created lazily on toggle; null when hidden).
  const rsiRef = useRef<ISeriesApi<"Line"> | null>(null);
  const macdLineRef = useRef<ISeriesApi<"Line"> | null>(null);
  const macdSignalRef = useRef<ISeriesApi<"Line"> | null>(null);
  const macdHistRef = useRef<ISeriesApi<"Histogram"> | null>(null);

  // Price-pane overlay series (created once at chart init; toggled via `visible`).
  const bbUpperRef = useRef<ISeriesApi<"Line"> | null>(null);
  const bbMidRef = useRef<ISeriesApi<"Line"> | null>(null);
  const bbLowerRef = useRef<ISeriesApi<"Line"> | null>(null);
  const vwapRef = useRef<ISeriesApi<"Line"> | null>(null);

  // Derived caches rebuilt on each load so the crosshair legend is O(1) and never
  // recomputes indicators on mouse-move (the old per-move recompute was the lag).
  const emaCacheRef = useRef<Record<number, (number | null)[]>>({});
  const rsiCacheRef = useRef<(number | null)[]>([]);
  const macdCacheRef = useRef<MacdCache | null>(null);
  const bbCacheRef = useRef<BbCache | null>(null);
  const vwapCacheRef = useRef<(number | null)[]>([]);
  const indexByTimeRef = useRef<Map<number, number>>(new Map());
  const lastLegendIdxRef = useRef<number>(-1);
  const pendingLegendRef = useRef<Legend | null>(null);
  const rafRef = useRef<number | null>(null);

  // Drawing state lives in refs (read by the imperative primitive) mirrored into
  // React state (for the toolbar + list). Refs avoid stale closures in the
  // once-subscribed chart event handlers.
  const primitiveRef = useRef<DrawingsPrimitive | null>(null);
  const drawingsRef = useRef<Drawing[]>([]);
  const draftRef = useRef<Draft | null>(null);
  const selectedRef = useRef<string | null>(null);
  const toolRef = useRef<Tool>("cursor");
  const actionsRef = useRef<{ click: (p: MouseEventParams) => void; move: (p: MouseEventParams) => void }>({
    click: () => {},
    move: () => {},
  });

  const [timeframe, setTimeframe] = useState<Timeframe>("1m");
  const [shownEmas, setShownEmas] = useState<Record<number, boolean>>({ 9: true, 20: true, 50: false });
  const [shownInd, setShownInd] = useState<Record<IndId, boolean>>({ rsi: false, macd: false });
  const [shownOver, setShownOver] = useState<Record<OverId, boolean>>({ bb: false, vwap: false });
  const [legend, setLegend] = useState<Legend | null>(null);
  const [stale, setStale] = useState(false);
  const [tool, setTool] = useState<Tool>("cursor");
  const [drawings, setDrawings] = useState<Drawing[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Replace the drawing set (ref + state + persistence + redraw) in one place.
  function applyDrawings(next: Drawing[]) {
    drawingsRef.current = next;
    setDrawings(next);
    saveDrawings(symbol, next);
    primitiveRef.current?.requestUpdate();
  }

  // ----- derived legend helpers (read precomputed caches; no per-move recompute) -----
  function rebuildDerived(candles: Candle[]) {
    const closes = candles.map((c) => c.close);
    const cache: Record<number, (number | null)[]> = {};
    for (const e of EMAS) cache[e.period] = ema(closes, e.period);
    emaCacheRef.current = cache;
    rsiCacheRef.current = rsi(closes, 14);
    macdCacheRef.current = macd(closes);
    bbCacheRef.current = bollinger(closes, 20, 2);
    vwapCacheRef.current = vwap(candles.map((c) => ({ high: c.high, low: c.low, close: c.close, volume: c.volume })));
    const map = new Map<number, number>();
    candles.forEach((c, i) => map.set(toSec(c.time) as number, i));
    indexByTimeRef.current = map;
  }

  function legendFor(idx: number): Legend {
    const c = candlesRef.current[idx];
    const emas: Record<number, number | undefined> = {};
    for (const e of EMAS) emas[e.period] = emaCacheRef.current[e.period]?.[idx] ?? undefined;
    const m = macdCacheRef.current;
    return {
      open: c.open,
      high: c.high,
      low: c.low,
      close: c.close,
      volume: c.volume,
      emas,
      rsi: rsiCacheRef.current[idx] ?? undefined,
      macd: m?.macd[idx] ?? undefined,
      macdSignal: m?.signal[idx] ?? undefined,
      bbMid: bbCacheRef.current?.middle[idx] ?? undefined,
      vwap: vwapCacheRef.current[idx] ?? undefined,
    };
  }

  // Feed/refresh whichever lower-pane indicator series currently exist.
  function indicatorLine(candles: Candle[], arr: (number | null)[] | undefined) {
    return dedupeSort(
      candles
        .map((c, i) => ({ time: toSec(c.time), value: arr?.[i] }))
        .filter((p) => p.value != null) as { time: UTCTimestamp; value: number }[],
    );
  }

  function setIndicatorData(candles: Candle[]) {
    // price-pane overlays (always present; visibility toggled separately)
    bbUpperRef.current?.setData(indicatorLine(candles, bbCacheRef.current?.upper));
    bbMidRef.current?.setData(indicatorLine(candles, bbCacheRef.current?.middle));
    bbLowerRef.current?.setData(indicatorLine(candles, bbCacheRef.current?.lower));
    vwapRef.current?.setData(indicatorLine(candles, vwapCacheRef.current));
    // lower-pane indicators (present only when enabled)
    rsiRef.current?.setData(indicatorLine(candles, rsiCacheRef.current));
    const m = macdCacheRef.current;
    macdLineRef.current?.setData(indicatorLine(candles, m?.macd));
    macdSignalRef.current?.setData(indicatorLine(candles, m?.signal));
    macdHistRef.current?.setData(
      dedupeSort(
        candles
          .map((c, i) => ({
            time: toSec(c.time),
            value: m?.histogram[i],
            color: (m?.histogram[i] ?? 0) >= 0 ? HIST_UP : HIST_DOWN,
          }))
          .filter((p) => p.value != null) as { time: UTCTimestamp; value: number; color: string }[],
      ),
    );
  }

  function updateIndicatorLast(i: number, t: UTCTimestamp) {
    const bb = bbCacheRef.current;
    if (bb) {
      if (bb.upper[i] != null) bbUpperRef.current?.update({ time: t, value: bb.upper[i] as number });
      if (bb.middle[i] != null) bbMidRef.current?.update({ time: t, value: bb.middle[i] as number });
      if (bb.lower[i] != null) bbLowerRef.current?.update({ time: t, value: bb.lower[i] as number });
    }
    const vw = vwapCacheRef.current[i];
    if (vw != null) vwapRef.current?.update({ time: t, value: vw });
    const r = rsiCacheRef.current[i];
    if (r != null) rsiRef.current?.update({ time: t, value: r });
    const m = macdCacheRef.current;
    if (m) {
      if (m.macd[i] != null) macdLineRef.current?.update({ time: t, value: m.macd[i] as number });
      if (m.signal[i] != null) macdSignalRef.current?.update({ time: t, value: m.signal[i] as number });
      if (m.histogram[i] != null)
        macdHistRef.current?.update({ time: t, value: m.histogram[i] as number, color: (m.histogram[i] as number) >= 0 ? HIST_UP : HIST_DOWN });
    }
  }

  function latestLegendFor(): Legend | null {
    const cs = candlesRef.current;
    return cs.length ? legendFor(cs.length - 1) : null;
  }

  // Coalesce crosshair legend updates to one React commit per animation frame.
  function scheduleLegend(next: Legend | null) {
    pendingLegendRef.current = next;
    if (rafRef.current != null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      setLegend(pendingLegendRef.current);
    });
  }

  // ----- chart event handlers (rebuilt each render, dispatched via actionsRef) -----
  function pointFromEvent(param: MouseEventParams): { time: number; price: number } | null {
    if (!param.point || !candleRef.current || !chartRef.current) return null;
    const price = candleRef.current.coordinateToPrice(param.point.y);
    if (price == null) return null;
    const time = (param.time as number | undefined) ?? (chartRef.current.timeScale().coordinateToTime(param.point.x) as number | null);
    if (time == null) return null;
    return { time, price };
  }

  function handleClick(param: MouseEventParams) {
    const active = toolRef.current;
    if (active === "cursor") {
      if (param.point) setSelectedId(primitiveRef.current?.hitId(param.point.x, param.point.y) ?? null);
      return;
    }
    const pt = pointFromEvent(param);
    if (!pt) return;
    const draft = draftRef.current ?? { type: active, color: TOOL_COLOR[active], points: [], preview: null };
    const points = [...draft.points, pt];
    if (points.length >= POINTS_FOR[active]) {
      applyDrawings([...drawingsRef.current, newDrawing(active, points)]);
      draftRef.current = null;
      setTool("cursor");
    } else {
      draftRef.current = { ...draft, points, preview: null };
      primitiveRef.current?.requestUpdate();
    }
  }

  function handleMove(param: MouseEventParams) {
    // crosshair legend — O(1) index lookup, cached EMAs, one render per frame, and
    // only when the hovered candle actually changes (no re-render storm on move).
    const cs = candlesRef.current;
    const idx = !param.time ? cs.length - 1 : indexByTimeRef.current.get(param.time as number) ?? -1;
    if (idx >= 0 && idx !== lastLegendIdxRef.current) {
      lastLegendIdxRef.current = idx;
      scheduleLegend(legendFor(idx));
    }
    // live draft endpoint
    const draft = draftRef.current;
    if (draft) {
      const pt = pointFromEvent(param);
      if (pt) {
        draftRef.current = { ...draft, preview: pt };
        primitiveRef.current?.requestUpdate();
      }
    }
  }

  actionsRef.current = { click: handleClick, move: handleMove };

  // Keep simple mirrors in sync for the primitive's getters.
  useEffect(() => {
    toolRef.current = tool;
    if (tool === "cursor") return;
    // switching to a drawing tool clears any selection
    setSelectedId(null);
  }, [tool]);
  useEffect(() => {
    selectedRef.current = selectedId;
    primitiveRef.current?.requestUpdate();
  }, [selectedId]);

  // Create the chart + series + drawing primitive once.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chart = createChart(el, {
      autoSize: true,
      layout: { background: { type: ColorType.Solid, color: CANVAS }, textColor: TEXT, fontFamily: "JetBrains Mono, ui-monospace, monospace" },
      grid: { vertLines: { color: GRID }, horzLines: { color: GRID } },
      crosshair: { mode: CrosshairMode.Normal },
      timeScale: { borderColor: BORDER, timeVisible: true, secondsVisible: false },
      rightPriceScale: { borderColor: BORDER, scaleMargins: { top: 0.08, bottom: 0.26 } },
    });
    chartRef.current = chart;

    candleRef.current = chart.addSeries(CandlestickSeries, { upColor: UP, downColor: DOWN, borderVisible: false, wickUpColor: UP, wickDownColor: DOWN });

    volumeRef.current = chart.addSeries(HistogramSeries, { priceScaleId: "volume", priceFormat: { type: "volume" }, lastValueVisible: false, priceLineVisible: false });
    chart.priceScale("volume").applyOptions({ scaleMargins: { top: 0.82, bottom: 0 } });

    for (const e of EMAS) {
      emaRefs.current[e.period] = chart.addSeries(LineSeries, { color: e.color, lineWidth: 1, lastValueVisible: false, priceLineVisible: false, crosshairMarkerVisible: false });
    }

    // Price-pane overlays (hidden until toggled): Bollinger upper/lower/middle + VWAP.
    const overlayOpts = { lineWidth: 1 as const, lastValueVisible: false, priceLineVisible: false, crosshairMarkerVisible: false, visible: false };
    bbUpperRef.current = chart.addSeries(LineSeries, { ...overlayOpts, color: BB_BAND });
    bbLowerRef.current = chart.addSeries(LineSeries, { ...overlayOpts, color: BB_BAND });
    bbMidRef.current = chart.addSeries(LineSeries, { ...overlayOpts, color: BB_MID, lineStyle: LineStyle.Dashed });
    vwapRef.current = chart.addSeries(LineSeries, { ...overlayOpts, color: VWAP_COLOR });

    const primitive = new DrawingsPrimitive(
      () => drawingsRef.current,
      () => draftRef.current,
      () => selectedRef.current,
    );
    candleRef.current.attachPrimitive(primitive);
    primitiveRef.current = primitive;

    chart.subscribeClick((p) => actionsRef.current.click(p));
    chart.subscribeCrosshairMove((p) => actionsRef.current.move(p));

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      chart.remove();
      chartRef.current = null;
      primitiveRef.current = null;
    };
  }, []);

  // Keyboard: Esc cancels an in-progress draft; Delete removes the selection.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        draftRef.current = null;
        setTool("cursor");
        primitiveRef.current?.requestUpdate();
      } else if ((e.key === "Delete" || e.key === "Backspace") && selectedRef.current) {
        applyDrawings(drawingsRef.current.filter((d) => d.id !== selectedRef.current));
        setSelectedId(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // applyDrawings closes over `symbol`; re-bind when it changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbol]);

  // Load this symbol's saved drawings; reset any in-progress draft/selection.
  useEffect(() => {
    const saved = loadDrawings(symbol);
    drawingsRef.current = saved;
    draftRef.current = null;
    selectedRef.current = null;
    setDrawings(saved);
    setSelectedId(null);
    setTool("cursor");
    primitiveRef.current?.requestUpdate();
  }, [symbol]);

  // Fetch + render whenever symbol or timeframe changes, then poll to refresh.
  // First paint (and any window shift) does a full setData; a plain forming-bar
  // tick only update()s the last bar. fitContent() runs ONLY on the initial load
  // so the poll never snaps the user's zoom/pan (that was the "jumpy" feel).
  useEffect(() => {
    let cancelled = false;
    let initial = true;

    function setFullData(candles: Candle[]) {
      candleRef.current?.setData(
        dedupeSort(candles.map((c) => ({ time: toSec(c.time), open: c.open, high: c.high, low: c.low, close: c.close }))),
      );
      volumeRef.current?.setData(
        dedupeSort(candles.map((c) => ({ time: toSec(c.time), value: c.volume, color: c.close >= c.open ? "rgba(43,209,126,0.4)" : "rgba(255,92,92,0.4)" }))),
      );
      for (const e of EMAS) {
        const series = emaRefs.current[e.period];
        if (!series) continue;
        const vals = emaCacheRef.current[e.period];
        const line = candles
          .map((c, i) => ({ time: toSec(c.time), value: vals?.[i] }))
          .filter((p) => p.value != null) as { time: UTCTimestamp; value: number }[];
        series.setData(dedupeSort(line));
        series.applyOptions({ visible: shownEmas[e.period] ?? false });
      }
      setIndicatorData(candles);
    }

    function updateLastBar(candles: Candle[]) {
      const i = candles.length - 1;
      const c = candles[i];
      const t = toSec(c.time);
      candleRef.current?.update({ time: t, open: c.open, high: c.high, low: c.low, close: c.close });
      volumeRef.current?.update({ time: t, value: c.volume, color: c.close >= c.open ? "rgba(43,209,126,0.4)" : "rgba(255,92,92,0.4)" });
      for (const e of EMAS) {
        const v = emaCacheRef.current[e.period]?.[i];
        if (v != null) emaRefs.current[e.period]?.update({ time: t, value: v });
      }
      updateIndicatorLast(i, t);
    }

    async function load() {
      try {
        const data = await getCandlesViaApi(symbol, 200, timeframe);
        if (cancelled || !candleRef.current) return;
        const prev = candlesRef.current;
        const next = data.candles;
        candlesRef.current = next;
        rebuildDerived(next);

        // A pure forming-bar tick keeps the same window (same length + same first &
        // last timestamps); anything else (new bar, window slide) gets a full reset.
        const sameWindow =
          !initial &&
          prev.length === next.length &&
          next.length > 0 &&
          toSec(prev[0].time) === toSec(next[0].time) &&
          toSec(prev[prev.length - 1].time) === toSec(next[next.length - 1].time);

        if (sameWindow) {
          updateLastBar(next);
        } else {
          setFullData(next);
          if (initial) chartRef.current?.timeScale().fitContent();
        }

        lastLegendIdxRef.current = -1; // force the idle legend to refresh
        scheduleLegend(latestLegendFor());
        primitiveRef.current?.requestUpdate();
        setStale(false);
        initial = false;
      } catch {
        if (!cancelled) setStale(true);
      }
    }

    void load();
    const id = setInterval(() => void load(), POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
    // shownEmas intentionally omitted — toggling visibility is handled below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbol, timeframe]);

  // Toggle EMA visibility without refetching.
  useEffect(() => {
    for (const e of EMAS) emaRefs.current[e.period]?.applyOptions({ visible: shownEmas[e.period] ?? false });
  }, [shownEmas]);

  // Toggle Bollinger / VWAP overlay visibility without refetching.
  useEffect(() => {
    bbUpperRef.current?.applyOptions({ visible: shownOver.bb });
    bbMidRef.current?.applyOptions({ visible: shownOver.bb });
    bbLowerRef.current?.applyOptions({ visible: shownOver.bb });
    vwapRef.current?.applyOptions({ visible: shownOver.vwap });
  }, [shownOver]);

  // Create/remove the RSI & MACD panes on toggle (lazy — empty panes auto-collapse).
  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    if (shownInd.rsi && !rsiRef.current) {
      const s = chart.addSeries(
        LineSeries,
        { color: RSI_COLOR, lineWidth: 1, lastValueVisible: false, priceLineVisible: false, crosshairMarkerVisible: false },
        chart.panes().length,
      );
      s.createPriceLine({ price: 70, color: BORDER, lineWidth: 1, lineStyle: LineStyle.Dashed, axisLabelVisible: true, title: "70" });
      s.createPriceLine({ price: 30, color: BORDER, lineWidth: 1, lineStyle: LineStyle.Dashed, axisLabelVisible: true, title: "30" });
      s.getPane().setStretchFactor(1);
      rsiRef.current = s;
    } else if (!shownInd.rsi && rsiRef.current) {
      chart.removeSeries(rsiRef.current);
      rsiRef.current = null;
    }

    if (shownInd.macd && !macdLineRef.current) {
      const pane = chart.panes().length;
      macdHistRef.current = chart.addSeries(HistogramSeries, { priceLineVisible: false, lastValueVisible: false }, pane);
      macdLineRef.current = chart.addSeries(LineSeries, { color: MACD_LINE, lineWidth: 1, lastValueVisible: false, priceLineVisible: false, crosshairMarkerVisible: false }, pane);
      macdSignalRef.current = chart.addSeries(LineSeries, { color: MACD_SIGNAL, lineWidth: 1, lastValueVisible: false, priceLineVisible: false, crosshairMarkerVisible: false }, pane);
      macdLineRef.current.getPane().setStretchFactor(1);
    } else if (!shownInd.macd && macdLineRef.current) {
      if (macdLineRef.current) chart.removeSeries(macdLineRef.current);
      if (macdSignalRef.current) chart.removeSeries(macdSignalRef.current);
      if (macdHistRef.current) chart.removeSeries(macdHistRef.current);
      macdLineRef.current = null;
      macdSignalRef.current = null;
      macdHistRef.current = null;
    }

    // Feed any newly-created series and keep the price pane dominant.
    setIndicatorData(candlesRef.current);
    chart.panes()[0]?.setStretchFactor(3);
    // setIndicatorData reads refs; safe to omit from deps.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shownInd]);

  const activeTool = TOOLS.find((t) => t.id === tool);

  return (
    <div>
      {/* controls */}
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <div className="inline-flex rounded-md border border-strong p-0.5 text-xs">
          {TIMEFRAMES.map((tf) => (
            <button key={tf} type="button" onClick={() => setTimeframe(tf)} className={`rounded px-2 py-0.5 transition ${tf === timeframe ? "bg-learn text-canvas" : "text-muted hover:text-ink"}`}>
              {tf}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          {EMAS.map((e) => (
            <button
              key={e.period}
              type="button"
              onClick={() => setShownEmas((s) => ({ ...s, [e.period]: !s[e.period] }))}
              className={`rounded-full border px-2 py-0.5 transition ${shownEmas[e.period] ? "border-strong text-ink" : "border-hairline text-faint"}`}
              style={shownEmas[e.period] ? { color: e.color, borderColor: e.color } : undefined}
            >
              EMA {e.period}
            </button>
          ))}
          {OVERLAYS.map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => setShownOver((s) => ({ ...s, [o.id]: !s[o.id] }))}
              className={`rounded-full border px-2 py-0.5 transition ${shownOver[o.id] ? "border-strong text-ink" : "border-hairline text-faint"}`}
              style={shownOver[o.id] ? { color: o.color, borderColor: o.color } : undefined}
            >
              {o.label}
            </button>
          ))}
          <span className="mx-0.5 h-3 w-px bg-hairline" aria-hidden />
          {INDICATORS.map((ind) => (
            <button
              key={ind.id}
              type="button"
              onClick={() => setShownInd((s) => ({ ...s, [ind.id]: !s[ind.id] }))}
              className={`rounded-full border px-2 py-0.5 transition ${shownInd[ind.id] ? "border-strong text-ink" : "border-hairline text-faint"}`}
              style={shownInd[ind.id] ? { color: ind.color, borderColor: ind.color } : undefined}
            >
              {ind.label}
            </button>
          ))}
        </div>
      </div>

      {/* drawing toolbar */}
      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
        <div className="inline-flex rounded-md border border-strong p-0.5">
          {TOOLS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                draftRef.current = null;
                setTool(t.id);
                primitiveRef.current?.requestUpdate();
              }}
              className={`rounded px-2 py-0.5 transition ${t.id === tool ? "bg-learn text-canvas" : "text-muted hover:text-ink"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
        {activeTool?.hint && tool !== "cursor" && <span className="text-faint">{activeTool.hint} · Esc to cancel</span>}
        {drawings.length > 0 && (
          <div className="ml-auto flex flex-wrap items-center gap-1">
            {drawings.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setSelectedId((id) => (id === d.id ? null : d.id))}
                className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 transition ${d.id === selectedId ? "border-ink text-ink" : "border-hairline text-faint hover:text-muted"}`}
                style={{ borderColor: d.id === selectedId ? d.color : undefined }}
                title={d.id === selectedId ? "Selected — press Delete to remove" : "Select"}
              >
                <span className="inline-block h-2 w-2 rounded-full" style={{ background: d.color }} />
                {d.type === "horizontal" ? `H ${money(d.points[0].price)}` : d.type === "fib" ? "Fib" : "Trend"}
                <span
                  role="button"
                  tabIndex={-1}
                  aria-label="Delete drawing"
                  onClick={(e) => {
                    e.stopPropagation();
                    applyDrawings(drawingsRef.current.filter((x) => x.id !== d.id));
                    if (selectedId === d.id) setSelectedId(null);
                  }}
                  className="text-faint hover:text-down"
                >
                  ✕
                </span>
              </button>
            ))}
            <button type="button" onClick={() => applyDrawings([])} className="rounded-full border border-hairline px-2 py-0.5 text-faint transition hover:text-down">
              Clear
            </button>
          </div>
        )}
      </div>

      {/* legend */}
      {legend && (
        <div className="mb-1 flex flex-wrap gap-x-3 gap-y-0.5 font-mono text-[11px] text-muted">
          <span>O <span className="text-ink">{money(legend.open)}</span></span>
          <span>H <span className="text-ink">{money(legend.high)}</span></span>
          <span>L <span className="text-ink">{money(legend.low)}</span></span>
          <span>C <span className={legend.close >= legend.open ? "text-up" : "text-down"}>{money(legend.close)}</span></span>
          <span>Vol <span className="text-ink">{legend.volume.toLocaleString("en-US")}</span></span>
          {EMAS.filter((e) => shownEmas[e.period] && legend.emas[e.period] != null).map((e) => (
            <span key={e.period} style={{ color: e.color }}>EMA{e.period} {money(legend.emas[e.period] as number)}</span>
          ))}
          {shownOver.bb && legend.bbMid != null && (
            <span style={{ color: BB_MID }}>BB {money(legend.bbMid)}</span>
          )}
          {shownOver.vwap && legend.vwap != null && (
            <span style={{ color: VWAP_COLOR }}>VWAP {money(legend.vwap)}</span>
          )}
          {shownInd.rsi && legend.rsi != null && (
            <span style={{ color: RSI_COLOR }}>RSI {legend.rsi.toFixed(1)}</span>
          )}
          {shownInd.macd && legend.macd != null && (
            <span>
              <span style={{ color: MACD_LINE }}>MACD {legend.macd.toFixed(2)}</span>
              {legend.macdSignal != null && <span style={{ color: MACD_SIGNAL }}> · sig {legend.macdSignal.toFixed(2)}</span>}
            </span>
          )}
        </div>
      )}

      <div className="relative">
        <div ref={containerRef} className={`h-[clamp(440px,72vh,860px)] w-full ${tool === "cursor" ? "" : "cursor-crosshair"}`} />
        {stale && <span className="absolute right-2 top-2 rounded-md bg-streak/10 px-2 py-1 text-xs text-streak">live feed unavailable</span>}
      </div>
    </div>
  );
}
