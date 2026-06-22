"use client";

// No-SSR wrapper around ResearchChart. lightweight-charts touches the DOM/canvas,
// so it must never run during SSR — `ssr: false` requires a client module, hence
// this thin shim between the (server) symbol page and the chart leaf. ResearchChart
// self-fetches per timeframe, so `initialCandles` is accepted for compatibility but
// not needed.

import dynamic from "next/dynamic";
import type { Candle } from "@/lib/marketService";

const ResearchChart = dynamic(() => import("./ResearchChart"), {
  ssr: false,
  loading: () => (
    <div className="h-[480px] w-full animate-pulse rounded-lg border border-hairline bg-surface/50" aria-hidden />
  ),
});

export function SymbolChart({ symbol }: { symbol: string; initialCandles?: Candle[] }) {
  return <ResearchChart symbol={symbol} />;
}
