"use client";

// Live candlestick chart (TradingView Lightweight Charts v5) for /symbol/[ticker].
// Dark theme mirrors the design tokens (docs/DESIGN_SYSTEM.md). Renders an initial
// history with setData(), then polls /api/candles every ~5s and series.update()s the
// latest bar — times are floored to the minute so the in-progress candle mutates
// within a minute and a fresh bar appends when the minute rolls over.

import { useEffect, useRef, useState } from "react";
import {
  createChart,
  CandlestickSeries,
  ColorType,
  CrosshairMode,
  type IChartApi,
  type ISeriesApi,
  type CandlestickData,
  type UTCTimestamp,
} from "lightweight-charts";
import { getCandlesViaApi, type Candle } from "@/lib/marketService";

type Bar = CandlestickData<UTCTimestamp>;

// Design tokens (see tailwind.config.ts) — the canvas isn't CSS-styleable, so the
// chart needs the raw hex.
const UP = "#2BD17E";
const DOWN = "#FF5C5C";
const CANVAS = "#0B0E14";
const GRID = "#1E2530"; // hairline
const BORDER = "#232A36"; // strong
const TEXT = "#8A94A6"; // muted

const POLL_MS = 5000;

// ISO → UNIX seconds floored to the minute (Lightweight Charts is UTC-only and
// wants strictly-ascending seconds; flooring keeps one bar per minute).
function toBar(c: Candle): Bar {
  return {
    time: (Math.floor(Date.parse(c.time) / 60000) * 60) as UTCTimestamp,
    open: c.open,
    high: c.high,
    low: c.low,
    close: c.close,
  };
}

// Sort ascending and drop duplicate minutes (keep the last seen) — setData() throws
// on unordered or duplicate times.
function toSeries(candles: Candle[]): Bar[] {
  const byTime = new Map<number, Bar>();
  for (const c of candles) {
    const bar = toBar(c);
    byTime.set(bar.time as number, bar);
  }
  return [...byTime.values()].sort((a, b) => (a.time as number) - (b.time as number));
}

export default function LiveCandleChart({
  symbol,
  initialCandles,
}: {
  symbol: string;
  initialCandles: Candle[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stale, setStale] = useState(false);

  // Seed via a ref so the init effect can depend on [symbol] alone — re-allocating
  // the initialCandles prop on a parent re-render must not tear down the live chart.
  const seedRef = useRef(initialCandles);
  seedRef.current = initialCandles;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chart: IChartApi = createChart(el, {
      autoSize: true, // built-in ResizeObserver; torn down by chart.remove()
      layout: {
        background: { type: ColorType.Solid, color: CANVAS },
        textColor: TEXT,
        fontFamily: "JetBrains Mono, ui-monospace, monospace",
      },
      grid: { vertLines: { color: GRID }, horzLines: { color: GRID } },
      crosshair: { mode: CrosshairMode.Normal },
      timeScale: { borderColor: BORDER, timeVisible: true, secondsVisible: false },
      rightPriceScale: { borderColor: BORDER },
    });

    const series: ISeriesApi<"Candlestick"> = chart.addSeries(CandlestickSeries, {
      upColor: UP,
      downColor: DOWN,
      borderVisible: false,
      wickUpColor: UP,
      wickDownColor: DOWN,
    });

    let lastTime = 0;
    const seed = toSeries(seedRef.current);
    if (seed.length) {
      series.setData(seed);
      lastTime = seed[seed.length - 1].time as number;
      chart.timeScale().fitContent();
    }

    let cancelled = false;

    // Pull the newest bar and update() it (mutates the current minute or appends a
    // new one). If we never seeded (server fetch failed), pull the full window.
    async function poll() {
      try {
        const empty = lastTime === 0;
        const data = await getCandlesViaApi(symbol, empty ? 60 : 2);
        if (cancelled) return;
        const bars = toSeries(data.candles);
        if (!bars.length) return;
        if (empty) {
          series.setData(bars);
          lastTime = bars[bars.length - 1].time as number;
          chart.timeScale().fitContent();
        } else {
          const latest = bars[bars.length - 1];
          if ((latest.time as number) >= lastTime) {
            series.update(latest);
            lastTime = latest.time as number;
          }
        }
        setStale(false);
      } catch {
        if (!cancelled) setStale(true);
      }
    }

    void poll();
    const id = setInterval(() => void poll(), POLL_MS);

    // Cleanup — runs on unmount AND between StrictMode's dev double-invoke.
    return () => {
      cancelled = true;
      clearInterval(id);
      chart.remove();
    };
  }, [symbol]);

  return (
    <div className="relative">
      <div ref={containerRef} className="h-[420px] w-full" />
      {stale && (
        <span className="absolute right-2 top-2 rounded-md bg-streak/10 px-2 py-1 text-xs text-streak">
          live feed unavailable
        </span>
      )}
    </div>
  );
}
