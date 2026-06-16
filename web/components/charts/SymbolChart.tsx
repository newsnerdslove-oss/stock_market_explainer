"use client";

// No-SSR wrapper around LiveCandleChart. lightweight-charts touches the DOM/canvas,
// so it must never run during SSR — `ssr: false` requires a client module, hence
// this thin shim between the (server) symbol page and the chart leaf.

import dynamic from "next/dynamic";
import type { Candle } from "@/lib/marketService";

const LiveCandleChart = dynamic(() => import("./LiveCandleChart"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] w-full animate-pulse rounded-lg border border-hairline bg-surface/50" aria-hidden />
  ),
});

export function SymbolChart(props: { symbol: string; initialCandles: Candle[] }) {
  return <LiveCandleChart {...props} />;
}
