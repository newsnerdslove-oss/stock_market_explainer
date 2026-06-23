"use client";

// Research entry for /symbol/[ticker]: a symbol search (free-text + autocomplete
// from the known names), a star to add/remove the current symbol from a persisted
// watchlist, and the watchlist as quick-links.

import Link from "next/link";
import { useWatchlist } from "@/lib/research/watchlist";
import { SymbolSearch } from "@/components/research/SymbolSearch";

export function ResearchBar({ symbol }: { symbol: string }) {
  const { list, toggle, has } = useWatchlist();

  const watched = has(symbol);

  return (
    <div className="mt-4 space-y-2">
      <div className="flex flex-wrap items-center gap-2">
        <SymbolSearch />

        <button
          type="button"
          onClick={() => toggle(symbol)}
          className={`rounded-md border px-3 py-1.5 text-sm transition ${watched ? "border-streak/50 text-streak" : "border-strong text-muted hover:text-ink"}`}
          aria-pressed={watched}
        >
          {watched ? "★ Watching" : "☆ Watch"}
        </button>
      </div>

      {list.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs text-faint">Watchlist:</span>
          {list.map((s) => (
            <Link
              key={s}
              href={`/symbol/${encodeURIComponent(s)}`}
              className={`rounded-full border px-2.5 py-0.5 font-mono text-xs transition ${s === symbol.toUpperCase() ? "border-learn bg-learn/15 text-ink" : "border-strong text-muted hover:text-ink"}`}
            >
              {s}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
