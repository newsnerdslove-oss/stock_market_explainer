"use client";

// Strategy Builder — pick a classic option structure and see its payoff diagram and
// the numbers that matter (net debit/credit, max profit, max loss, breakevens) with
// every leg priced by Black-Scholes. Adjust implied vol and days-to-expiry and watch
// the trade-offs move. Reference underlying is fixed at $100 so the shapes are clean.

import { useMemo, useState } from "react";
import { PayoffDiagram } from "@/components/charts/PayoffDiagram";
import { priceOption } from "@/lib/options/blackScholes";
import { strategyStats } from "@/lib/options/strategy";
import type { PayoffLeg } from "@/lib/lessons/types";

const SPOT = 100;
const RATE = 0.04;

type LegSpec =
  | { instrument: "call" | "put"; side: "long" | "short"; strike: number }
  | { instrument: "stock"; side: "long" | "short" };

interface Preset {
  name: string;
  outlook: string;
  desc: string;
  legs: LegSpec[];
}

const PRESETS: Record<string, Preset> = {
  "long-call": { name: "Long call", outlook: "Bullish", desc: "Pay a premium for unlimited upside; risk is capped at what you paid.", legs: [{ instrument: "call", side: "long", strike: 100 }] },
  "long-put": { name: "Long put", outlook: "Bearish", desc: "Pay a premium to profit as the stock falls; risk capped at the premium.", legs: [{ instrument: "put", side: "long", strike: 100 }] },
  "covered-call": { name: "Covered call", outlook: "Neutral / mildly bullish", desc: "Own 100 shares and sell a call for income — caps the upside above the strike.", legs: [{ instrument: "stock", side: "long" }, { instrument: "call", side: "short", strike: 105 }] },
  "protective-put": { name: "Protective put", outlook: "Bullish, hedged", desc: "Own shares and buy a put as insurance — a floor under your losses.", legs: [{ instrument: "stock", side: "long" }, { instrument: "put", side: "long", strike: 95 }] },
  "bull-call-spread": { name: "Bull call spread", outlook: "Bullish", desc: "Buy a call, sell a higher one — cheaper than a long call, but capped profit.", legs: [{ instrument: "call", side: "long", strike: 100 }, { instrument: "call", side: "short", strike: 110 }] },
  "bear-put-spread": { name: "Bear put spread", outlook: "Bearish", desc: "Buy a put, sell a lower one — defined risk and reward to the downside.", legs: [{ instrument: "put", side: "long", strike: 100 }, { instrument: "put", side: "short", strike: 90 }] },
  "long-straddle": { name: "Long straddle", outlook: "Big move, either way", desc: "Buy a call and a put at the same strike — profits from a large move in either direction.", legs: [{ instrument: "call", side: "long", strike: 100 }, { instrument: "put", side: "long", strike: 100 }] },
  "iron-condor": { name: "Iron condor", outlook: "Range-bound", desc: "Sell a put spread and a call spread — collect a credit if the stock stays in the range.", legs: [{ instrument: "put", side: "short", strike: 95 }, { instrument: "put", side: "long", strike: 90 }, { instrument: "call", side: "short", strike: 105 }, { instrument: "call", side: "long", strike: 110 }] },
};

const PRESET_ORDER = Object.keys(PRESETS);

const round2 = (n: number) => Math.round(n * 100) / 100;
const money = (n: number) => (n === Infinity ? "Unlimited" : n === -Infinity ? "Unlimited" : `${n < 0 ? "−" : ""}$${Math.abs(Math.round(n)).toLocaleString("en-US")}`);

export function StrategyBuilder() {
  const [presetKey, setPresetKey] = useState("bull-call-spread");
  const [days, setDays] = useState(30);
  const [ivPct, setIvPct] = useState(30);

  const preset = PRESETS[presetKey];
  const years = days / 365;
  const iv = ivPct / 100;

  const legs: PayoffLeg[] = useMemo(() => {
    return preset.legs.map((l) => {
      if (l.instrument === "stock") {
        return { instrument: "stock", side: l.side, premium: SPOT, qty: 100 };
      }
      const premium = priceOption({ type: l.instrument, spot: SPOT, strike: l.strike, years, iv, rate: RATE }).price;
      return { instrument: l.instrument, side: l.side, strike: l.strike, premium: round2(premium), qty: 1 };
    });
  }, [preset, years, iv]);

  const stats = useMemo(() => strategyStats(legs), [legs]);
  const credit = stats.netPremium >= 0;

  return (
    <section className="mt-12 rounded-lg border border-learn/30 bg-learn/5 p-5">
      <h2 className="text-sm font-medium text-ink">Strategy builder</h2>
      <p className="mt-1 text-sm text-muted">Pick a structure (priced on a ${SPOT} stock) and read the trade-offs. Adjust vol and time to see them shift.</p>

      {/* presets */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {PRESET_ORDER.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setPresetKey(k)}
            className={`rounded-full border px-3 py-1 text-xs transition ${k === presetKey ? "border-learn bg-learn/15 text-ink" : "border-strong text-muted hover:text-ink"}`}
          >
            {PRESETS[k].name}
          </button>
        ))}
      </div>

      {/* controls */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Slider label="Days to expiry" value={days} min={1} max={365} step={1} onChange={setDays} display={`${days}d`} />
        <Slider label="Implied vol" value={ivPct} min={5} max={100} step={1} onChange={setIvPct} display={`${ivPct}%`} />
      </div>

      <div className="mt-2 text-sm">
        <span className="text-xs uppercase tracking-wide text-faint">{preset.outlook}</span>
        <p className="mt-0.5 text-muted">{preset.desc}</p>
      </div>

      <div className="mt-4">
        <PayoffDiagram legs={legs} title={preset.name} />
      </div>

      {/* stats */}
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label={credit ? "Net credit" : "Net debit"} value={money(Math.abs(stats.netPremium))} color={credit ? "text-up" : "text-ink"} />
        <Stat label="Max profit" value={money(stats.maxProfit)} color="text-up" />
        <Stat label="Max loss" value={money(stats.maxLoss)} color="text-down" />
        <Stat label="Breakeven" value={stats.breakevens.length ? stats.breakevens.map((b) => `$${b}`).join(" / ") : "—"} />
      </div>
      <p className="mt-2 text-xs text-faint">Per-leg premiums are Black-Scholes model prices · P/L at expiration · option legs ×100.</p>
    </section>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="rounded-md border border-hairline bg-surface px-3 py-2">
      <div className="text-[11px] uppercase tracking-wide text-faint">{label}</div>
      <div className={`mt-0.5 font-mono text-sm ${color ?? "text-ink"}`}>{value}</div>
    </div>
  );
}

function Slider({ label, value, min, max, step, onChange, display }: { label: string; value: number; min: number; max: number; step: number; onChange: (n: number) => void; display: string }) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between">
        <span className="text-[11px] font-medium uppercase tracking-wide text-faint">{label}</span>
        <span className="font-mono text-xs text-ink">{display}</span>
      </div>
      <input type="range" value={value} min={min} max={max} step={step} onChange={(e) => onChange(Number(e.target.value))} className="mt-1 w-full accent-learn" />
    </label>
  );
}
