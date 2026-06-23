"use client";

// Persisted "tracked tickers" for the home page strips — one list for stocks, one
// for coins. localStorage-first like the rest of the app (mirrors the research
// watchlist): the pure list/normalize helpers are unit-tested, load/save are
// SSR-guarded. Unlike the watchlist, an absent key seeds the supplied defaults so
// a first-time visitor sees a populated strip; once the user edits, their list
// (even empty) is respected.

import { useEffect, useState } from "react";

const MAX = 30;

/** Stock ticker: upper-case, strip anything that isn't a ticker character. */
export function normalizeStock(input: string): string {
  return input.trim().toUpperCase().replace(/[^A-Z0-9.\-]/g, "");
}

/** Any Coinbase USD pair: "doge" → "DOGE-USD", "ada/usd" → "ADA-USD", "BTC-USD" stays. */
export function normalizeCoin(input: string): string {
  const s = input.trim().toUpperCase().replace("/", "-").replace(/[^A-Z0-9-]/g, "");
  if (!s) return "";
  return s.includes("-") ? s : `${s}-USD`;
}

/** Append if absent (no dupes), capped at MAX (pure). */
export function addTo(list: string[], item: string): string[] {
  if (!item) return list;
  return list.includes(item) ? list : [...list, item].slice(0, MAX);
}

export function removeFrom(list: string[], item: string): string[] {
  return list.filter((x) => x !== item);
}

export function loadTracked(key: string, defaults: string[]): string[] {
  if (typeof window === "undefined") return defaults;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw == null) return defaults; // never edited → seed defaults
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : defaults;
  } catch {
    return defaults;
  }
}

export function saveTracked(key: string, list: string[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(list));
  } catch {
    /* ignore quota errors */
  }
}

/**
 * Hook: a persisted ticker list with add/remove. Initial state is `defaults` so
 * the SSR and first client render match (no hydration mismatch); the stored list
 * is loaded on mount. `normalize` is applied to anything added.
 */
export function useTracked(key: string, defaults: string[], normalize: (s: string) => string) {
  const [list, setList] = useState<string[]>(defaults);

  useEffect(() => {
    setList(loadTracked(key, defaults));
    // defaults is a stable module constant at every call site.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const add = (raw: string) =>
    setList((prev) => {
      const next = addTo(prev, normalize(raw));
      saveTracked(key, next);
      return next;
    });

  const remove = (item: string) =>
    setList((prev) => {
      const next = removeFrom(prev, item);
      saveTracked(key, next);
      return next;
    });

  return { list, add, remove };
}
