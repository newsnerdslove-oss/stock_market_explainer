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
import { chartColors } from "@/lib/charts/theme";
import { currentTheme, useThemeState } from "@/lib/theme";

type Bar = CandlestickData<UTCTimestamp>;

// Candle body colours (vivid — readable on either theme). The chart "chrome"
// (canvas/grid/border/text) comes from chartColors(theme) and flips with the app.
const UP = "#2BD17E";
const DOWN = "#FF5C5C";

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
  const chartRef = useRef<IChartApi | null>(null);
  const [stale, setStale] = useState(false);
  const [theme] = useThemeState();

  // Seed via a ref so the init effect can depend on [symbol] alone — re-allocating
  // the initialCandles prop on a parent re-render must not tear down the live chart.
  const seedRef = useRef(initialCandles);
  seedRef.current = initialCandles;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const k = chartColors(currentTheme());
    const chart: IChartApi = createChart(el, {
      autoSize: true, // built-in ResizeObserver; torn down by chart.remove()
      layout: {
        background: { type: ColorType.Solid, color: k.canvas },
        textColor: k.text,
        fontFamily: "JetBrains Mono, ui-monospace, monospace",
      },
      grid: { vertLines: { color: k.grid }, horzLines: { color: k.grid } },
      crosshair: { mode: CrosshairMode.Normal },
      timeScale: { borderColor: k.border, timeVisible: true, secondsVisible: false },
      rightPriceScale: { borderColor: k.border },
    });
    chartRef.current = chart;

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
      chartRef.current = null;
    };
  }, [symbol]);

  // Re-tint the chart chrome when the app theme flips (no rebuild).
  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;
    const k = chartColors(theme);
    chart.applyOptions({
      layout: { background: { type: ColorType.Solid, color: k.canvas }, textColor: k.text },
      grid: { vertLines: { color: k.grid }, horzLines: { color: k.grid } },
      timeScale: { borderColor: k.border },
      rightPriceScale: { borderColor: k.border },
    });
  }, [theme]);

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
