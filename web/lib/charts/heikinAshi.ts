// Heikin-Ashi transform: smooths candles so trends read more clearly. Each HA bar
// is derived from the raw OHLC and the previous HA bar, so the whole series must be
// computed in order (the chart caches the result and updates the last bar from it).

import type { Candle } from "@/lib/marketService";

export interface HACandle {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export function heikinAshi(candles: Candle[]): HACandle[] {
  const out: HACandle[] = [];
  let prevOpen = 0;
  let prevClose = 0;
  for (let i = 0; i < candles.length; i++) {
    const c = candles[i];
    const close = (c.open + c.high + c.low + c.close) / 4;
    const open = i === 0 ? (c.open + c.close) / 2 : (prevOpen + prevClose) / 2;
    const high = Math.max(c.high, open, close);
    const low = Math.min(c.low, open, close);
    out.push({ time: c.time, open, high, low, close });
    prevOpen = open;
    prevClose = close;
  }
  return out;
}
