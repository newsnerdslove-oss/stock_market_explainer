// Auto-detect supply/demand zones from candles. The heuristic is the common
// retail "base + impulse" pattern: a small-range consolidation (the base) followed
// by an out-sized candle that leaves it. A bullish departure marks a DEMAND zone
// (support); a bearish departure marks a SUPPLY zone (resistance). The zone is the
// base candles' high→low band. Zones whose level has since been broken by a close
// through it are dropped, so the overlay shows only still-valid levels. Pure +
// tested; the chart recomputes it live and renders it read-only.

import type { Candle } from "@/lib/marketService";
import type { ZoneKind } from "@/lib/charts/drawings";

export interface DetectedZone {
  kind: ZoneKind;
  t1: number; // base start (epoch seconds)
  t2: number; // impulse bar (epoch seconds)
  hi: number;
  lo: number;
}

export interface ZoneOpts {
  /** impulse range must be ≥ this × average range */
  impulseMult?: number;
  /** impulse body must be ≥ this fraction of its range */
  bodyFrac?: number;
  /** max base candles to absorb before the impulse */
  baseMax?: number;
  /** cap on returned zones (most recent kept) */
  maxZones?: number;
}

const toSec = (iso: string) => Math.floor(Date.parse(iso) / 1000);

export function detectZones(candles: Candle[], opts: ZoneOpts = {}): DetectedZone[] {
  const { impulseMult = 1.4, bodyFrac = 0.45, baseMax = 4, maxZones = 12 } = opts;
  const n = candles.length;
  if (n < 5) return [];

  const ranges = candles.map((c) => c.high - c.low);
  const avg = ranges.reduce((a, b) => a + b, 0) / n;
  if (avg <= 0) return [];
  // Thin base candles (e.g. on 1m) make razor-thin bands; floor the thickness to
  // half an average candle so the zone is legible without distorting the level.
  const minThick = 0.5 * avg;

  const found: DetectedZone[] = [];
  for (let i = 1; i < n; i++) {
    const c = candles[i];
    const range = c.high - c.low;
    if (range <= 0 || range < impulseMult * avg) continue; // not an impulse
    if (Math.abs(c.close - c.open) < bodyFrac * range) continue; // not a strong body

    // Walk back over small (< avg range) base candles.
    let start = i - 1;
    let count = 0;
    while (start >= 0 && count < baseMax && candles[start].high - candles[start].low < avg) {
      start -= 1;
      count += 1;
    }
    const baseStart = start + 1;
    const baseEnd = i - 1;
    if (baseStart > baseEnd) continue; // no base directly before the impulse

    let hi = -Infinity;
    let lo = Infinity;
    for (let j = baseStart; j <= baseEnd; j++) {
      hi = Math.max(hi, candles[j].high);
      lo = Math.min(lo, candles[j].low);
    }
    if (hi - lo < minThick) {
      const mid = (hi + lo) / 2;
      hi = mid + minThick / 2;
      lo = mid - minThick / 2;
    }

    const kind: ZoneKind = c.close > c.open ? "demand" : "supply";

    // Freshness: drop if a later candle has closed through the level.
    let broken = false;
    for (let j = i + 1; j < n; j++) {
      if (kind === "demand" ? candles[j].close < lo : candles[j].close > hi) {
        broken = true;
        break;
      }
    }
    if (broken) continue;

    found.push({ kind, t1: toSec(candles[baseStart].time), t2: toSec(c.time), hi, lo });
  }

  // Keep the most recent zones, skipping ones that overlap an already-kept zone
  // of the same kind (avoids stacks of near-duplicate bands).
  const kept: DetectedZone[] = [];
  for (let k = found.length - 1; k >= 0 && kept.length < maxZones; k--) {
    const z = found[k];
    if (kept.some((f) => f.kind === z.kind && z.hi >= f.lo && z.lo <= f.hi)) continue;
    kept.push(z);
  }
  return kept.reverse();
}
