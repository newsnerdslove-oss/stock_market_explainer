"use client";

// Research entry for /symbol/[ticker]: a symbol search (free-text + autocomplete
// from the known names), a star to add/remove the current symbol from a persisted
// watchlist, and the watchlist as quick-links.

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useWatchlist } from "@/lib/research/watchlist";
import { COMPANY_NAMES } from "@/lib/stocks/names";

const SUGGESTIONS = Object.keys(COMPANY_NAMES);

export function ResearchBar({ symbol }: { symbol: string }) {
  const router = useRouter();
  const { list, toggle, has } = useWatchlist();
  const [query, setQuery] = useState("");

  function go(e: React.FormEvent) {
    e.preventDefault();
    const sym = query.trim().toUpperCase();
    if (sym) router.push(`/symbol/${encodeURIComponent(sym)}`);
  }

  const watched = has(symbol);

  return (
    <div className="mt-4 space-y-2">
      <div className="flex flex-wrap items-center gap-2">
        <form onSubmit={go} className="flex items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            list="symbol-suggestions"
            placeholder="Search a symbol…"
            aria-label="Search a symbol"
            className="w-44 rounded-md border border-strong bg-canvas px-3 py-1.5 text-sm uppercase text-ink placeholder:text-faint placeholder:normal-case focus:border-learn focus:outline-none"
          />
          <datalist id="symbol-suggestions">
            {SUGGESTIONS.map((s) => (
              <option key={s} value={s}>
                {COMPANY_NAMES[s]}
              </option>
            ))}
          </datalist>
          <button type="submit" className="rounded-md border border-strong px-3 py-1.5 text-sm text-ink transition hover:bg-surface-2">
            Go
          </button>
        </form>

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
