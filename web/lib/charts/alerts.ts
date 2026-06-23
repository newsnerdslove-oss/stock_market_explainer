// Per-symbol price alerts for the research chart. localStorage-first, mirroring the
// drawings store: pure helpers (newAlert / crossed) are unit-tested, load/save are
// SSR-guarded. An alert fires once when the latest price crosses its level in the
// direction implied at creation (above the level if it was set above the price,
// otherwise below).

import { uid } from "@/lib/uid";

export interface Alert {
  id: string;
  price: number;
  above: boolean; // fire when price rises to/through the level (set when level >= price at creation)
  triggered: boolean;
  createdAt: number;
}

const storageKey = (symbol: string) => `chart:alerts:${symbol.toUpperCase()}`;

export function newAlert(price: number, currentPrice: number, createdAt: number): Alert {
  return { id: uid(), price, above: price >= currentPrice, triggered: false, createdAt };
}

/** Alerts that should fire as price moves from `prev` to `curr` (pure). */
export function crossed(alerts: Alert[], prev: number, curr: number): Alert[] {
  return alerts.filter((a) =>
    a.triggered
      ? false
      : a.above
        ? prev < a.price && curr >= a.price
        : prev > a.price && curr <= a.price,
  );
}

export function isAlert(a: unknown): a is Alert {
  if (!a || typeof a !== "object") return false;
  const x = a as Alert;
  return (
    typeof x.id === "string" &&
    typeof x.price === "number" &&
    typeof x.above === "boolean" &&
    typeof x.triggered === "boolean" &&
    typeof x.createdAt === "number"
  );
}

export function loadAlerts(symbol: string): Alert[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(storageKey(symbol));
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isAlert) : [];
  } catch {
    return [];
  }
}

export function saveAlerts(symbol: string, alerts: Alert[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(storageKey(symbol), JSON.stringify(alerts));
  } catch {
    /* private mode / quota — alerts simply won't persist */
  }
}
