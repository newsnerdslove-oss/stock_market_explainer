"use client";

// A small persisted watchlist for the research view. localStorage-first (like the
// rest of the app); the pure toggle is unit-tested, the load/save are SSR-guarded.

import { useEffect, useState } from "react";

const KEY = "sme.watchlist.v1";
const MAX = 30;

/** Add the symbol if absent, remove it if present (pure). Normalizes to upper-case. */
export function toggleWatch(list: string[], symbol: string): string[] {
  const s = symbol.trim().toUpperCase();
  if (!s) return list;
  return list.includes(s) ? list.filter((x) => x !== s) : [s, ...list].slice(0, MAX);
}

export function loadWatchlist(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export function saveWatchlist(list: string[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* ignore quota errors */
  }
}

/** Hook: the watchlist plus toggle/has, persisted to localStorage. */
export function useWatchlist() {
  const [list, setList] = useState<string[]>([]);
  useEffect(() => setList(loadWatchlist()), []);
  const toggle = (symbol: string) =>
    setList((prev) => {
      const next = toggleWatch(prev, symbol);
      saveWatchlist(next);
      return next;
    });
  const has = (symbol: string) => list.includes(symbol.trim().toUpperCase());
  return { list, toggle, has };
}
