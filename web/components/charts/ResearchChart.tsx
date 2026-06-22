"use client";

// Research chart (TradingView Lightweight Charts v5): candlesticks + a volume pane +
// toggleable EMA overlays (computed from the Phase-1 indicators) + a timeframe
// selector (Phase-2 API) + a crosshair legend. Refetches the series on symbol/
// timeframe change and refreshes on a poll. Dark theme mirrors the design tokens.

import { useEffect, useRef, useState } from "react";
import {
  createChart,
  CandlestickSeries,
  HistogramSeries,
  LineSeries,
  ColorType,
  CrosshairMode,
  type IChartApi,
  type ISeriesApi,
  type UTCTimestamp,
} from "lightweight-charts";
import { getCandlesViaApi, TIMEFRAMES, type Candle, type Timeframe } from "@/lib/marketService";
import { ema } from "@/lib/indicators";

const UP = "#2BD17E";
const DOWN = "#FF5C5C";
const CANVAS = "#0B0E14";
const GRID = "#1E2530";
const BORDER = "#232A36";
const TEXT = "#8A94A6";
const POLL_MS = 10_000;

// EMA overlays: period → colour.
const EMAS = [
  { period: 9, color: "#F5C451" },
  { period: 20, color: "#5BA8FF" },
  { period: 50, color: "#9D8CFF" },
];

const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

interface Legend {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  emas: Record<number, number | undefined>;
}

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

  const [timeframe, setTimeframe] = useState<Timeframe>("1m");
  const [shownEmas, setShownEmas] = useState<Record<number, boolean>>({ 9: true, 20: true, 50: false });
  const [legend, setLegend] = useState<Legend | null>(null);
  const [stale, setStale] = useState(false);

  // Create the chart + series once.
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

    // Crosshair legend.
    chart.subscribeCrosshairMove((param) => {
      const cs = candlesRef.current;
      if (!param.time) {
        setLegend(latestLegend(cs));
        return;
      }
      const t = param.time as number;
      const idx = cs.findIndex((c) => toSec(c.time) === t);
      if (idx < 0) return;
      setLegend(legendAt(cs, idx));
    });

    return () => {
      chart.remove();
      chartRef.current = null;
    };
  }, []);

  // Fetch + render whenever symbol or timeframe changes, then poll to refresh.
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await getCandlesViaApi(symbol, 200, timeframe);
        if (cancelled || !candleRef.current) return;
        candlesRef.current = data.candles;

        const bars = dedupeSort(data.candles.map((c) => ({ time: toSec(c.time), open: c.open, high: c.high, low: c.low, close: c.close })));
        candleRef.current.setData(bars);
        volumeRef.current?.setData(
          dedupeSort(data.candles.map((c) => ({ time: toSec(c.time), value: c.volume, color: c.close >= c.open ? "rgba(43,209,126,0.4)" : "rgba(255,92,92,0.4)" }))),
        );

        const closes = data.candles.map((c) => c.close);
        for (const e of EMAS) {
          const series = emaRefs.current[e.period];
          if (!series) continue;
          const vals = ema(closes, e.period);
          const line = data.candles.map((c, i) => ({ time: toSec(c.time), value: vals[i] })).filter((p) => p.value != null) as { time: UTCTimestamp; value: number }[];
          series.setData(dedupeSort(line));
          series.applyOptions({ visible: shownEmas[e.period] ?? false });
        }

        chartRef.current?.timeScale().fitContent();
        setLegend(latestLegend(data.candles));
        setStale(false);
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
        <div className="flex flex-wrap gap-1.5 text-xs">
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
        </div>
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
        </div>
      )}

      <div className="relative">
        <div ref={containerRef} className="h-[440px] w-full" />
        {stale && <span className="absolute right-2 top-2 rounded-md bg-streak/10 px-2 py-1 text-xs text-streak">live feed unavailable</span>}
      </div>
    </div>
  );
}

function emasAt(candles: Candle[], idx: number): Record<number, number | undefined> {
  const closes = candles.map((c) => c.close);
  const out: Record<number, number | undefined> = {};
  for (const e of EMAS) out[e.period] = ema(closes, e.period)[idx] ?? undefined;
  return out;
}

function legendAt(candles: Candle[], idx: number): Legend {
  const c = candles[idx];
  return { open: c.open, high: c.high, low: c.low, close: c.close, volume: c.volume, emas: emasAt(candles, idx) };
}

function latestLegend(candles: Candle[]): Legend | null {
  return candles.length ? legendAt(candles, candles.length - 1) : null;
}
