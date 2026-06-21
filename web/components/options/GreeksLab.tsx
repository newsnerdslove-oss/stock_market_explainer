"use client";

// Interactive Greeks Lab — drag the underlying, days-to-expiry, and implied vol and
// watch a Black-Scholes option's price, Greeks, and value curve respond live. Makes
// the pricer (lib/options/blackScholes) teach: delta is the slope of the value
// curve, gamma its curvature, theta the gap that shrinks as expiry nears, vega the
// gap that grows with vol. Strike is fixed at 100 so the numbers stay readable.

import { useMemo, useState } from "react";
import { priceOption, type OptionType } from "@/lib/options/blackScholes";
import { optionValueCurve } from "@/lib/options/lab";

const STRIKE = 100;
const RATE = 0.04;
const FROM = 60;
const TO = 140;

// SVG palette (canvas isn't CSS-styleable; mirror the design tokens).
const VALUE = "#9D8CFF"; // learn purple
const INTRINSIC = "#8A94A6"; // muted
const MARK = "#2BD17E"; // up green
const INK = "#E8EDF4";
const FAINT = "#5A6376";

const fmt = (n: number, d = 2) => n.toFixed(d);

export function GreeksLab() {
  const [type, setType] = useState<OptionType>("call");
  const [spot, setSpot] = useState(100);
  const [days, setDays] = useState(30);
  const [ivPct, setIvPct] = useState(30);

  const years = days / 365;
  const iv = ivPct / 100;

  const quote = useMemo(
    () => priceOption({ type, spot, strike: STRIKE, years, iv, rate: RATE }),
    [type, spot, years, iv],
  );
  const curve = useMemo(
    () => optionValueCurve({ type, strike: STRIKE, years, iv, rate: RATE }, FROM, TO, 80),
    [type, years, iv],
  );

  // chart geometry
  const W = 520;
  const H = 240;
  const m = { l: 44, r: 14, t: 16, b: 28 };
  const ymax = Math.max(...curve.map((p) => p.value), spot - STRIKE, STRIKE - spot, 1) * 1.1;
  const x = (s: number) => m.l + ((s - FROM) / (TO - FROM)) * (W - m.l - m.r);
  const y = (v: number) => H - m.b - (v / ymax) * (H - m.t - m.b);
  const path = (key: "value" | "intrinsic") => curve.map((p, i) => `${i ? "L" : "M"}${x(p.spot).toFixed(1)},${y(p[key]).toFixed(1)}`).join(" ");

  const g = quote.greeks;
  const greeks = [
    { sym: "Δ", name: "Delta", val: fmt(g.delta, 3), note: "≈ $ the option moves per $1 in the stock — the slope of the curve." },
    { sym: "Γ", name: "Gamma", val: fmt(g.gamma, 4), note: "how fast delta itself changes — the curve's curvature." },
    { sym: "Θ", name: "Theta", val: fmt(g.theta, 3), note: "$ bled to time decay each day — why the curve sinks toward intrinsic." },
    { sym: "V", name: "Vega", val: fmt(g.vega, 3), note: "$ per +1 point of implied vol — the gap above intrinsic." },
    { sym: "ρ", name: "Rho", val: fmt(g.rho, 3), note: "$ per +1 point of interest rates — the smallest lever here." },
  ];

  return (
    <section className="mt-12 rounded-lg border border-learn/30 bg-learn/5 p-5">
      <h2 className="text-sm font-medium text-ink">Greeks lab</h2>
      <p className="mt-1 text-sm text-muted">
        A ${STRIKE} strike, priced with Black-Scholes. Drag the controls and watch the price, the Greeks, and the value curve respond.
      </p>

      {/* type toggle */}
      <div className="mt-4 inline-flex rounded-md border border-strong p-0.5 text-sm">
        {(["call", "put"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={`rounded px-3 py-1 capitalize transition ${type === t ? "bg-learn text-canvas" : "text-muted hover:text-ink"}`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* controls */}
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <Slider label="Underlying" value={spot} min={FROM} max={TO} step={1} onChange={setSpot} display={`$${spot}`} />
        <Slider label="Days to expiry" value={days} min={1} max={365} step={1} onChange={setDays} display={`${days}d`} />
        <Slider label="Implied vol" value={ivPct} min={5} max={100} step={1} onChange={setIvPct} display={`${ivPct}%`} />
      </div>

      {/* price */}
      <div className="mt-4 flex items-baseline gap-3">
        <span className="text-xs uppercase tracking-wide text-faint">Premium</span>
        <span className="font-mono text-2xl text-ink">${fmt(quote.price)}</span>
        <span className="text-xs text-muted">
          ({type === "call" ? (spot > STRIKE ? "ITM" : "OTM") : spot < STRIKE ? "ITM" : "OTM"} · {fmt(Math.max(quote.price - (type === "call" ? Math.max(spot - STRIKE, 0) : Math.max(STRIKE - spot, 0)), 0))} time value)
        </span>
      </div>

      {/* value curve */}
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-4 w-full" role="img" aria-label="Option value vs underlying price">
        {/* strike + current spot guides */}
        <line x1={x(STRIKE)} y1={m.t} x2={x(STRIKE)} y2={H - m.b} stroke={FAINT} strokeWidth={1} strokeDasharray="2 3" opacity={0.6} />
        <text x={x(STRIKE)} y={H - m.b + 14} fill={FAINT} fontSize={10} textAnchor="middle" fontFamily="JetBrains Mono, monospace">{STRIKE}</text>
        <line x1={x(spot)} y1={m.t} x2={x(spot)} y2={H - m.b} stroke={MARK} strokeWidth={1} opacity={0.5} />
        {/* intrinsic (expiry payoff) */}
        <path d={path("intrinsic")} fill="none" stroke={INTRINSIC} strokeWidth={1.5} strokeDasharray="4 3" />
        {/* model value today */}
        <path d={path("value")} fill="none" stroke={VALUE} strokeWidth={2} />
        {/* marker at current spot on the value curve */}
        <circle cx={x(spot)} cy={y(quote.price)} r={4} fill={MARK} />
        {/* y-axis ticks */}
        {[0, ymax / 2, ymax].map((v, i) => (
          <text key={i} x={m.l - 6} y={y(v) + 3} fill={FAINT} fontSize={9} textAnchor="end" fontFamily="JetBrains Mono, monospace">{fmt(v, 0)}</text>
        ))}
      </svg>
      <div className="-mt-1 flex gap-4 text-xs text-faint">
        <span><span style={{ color: VALUE }}>━</span> value today</span>
        <span><span style={{ color: INTRINSIC }}>┄</span> intrinsic (at expiry)</span>
        <span><span style={{ color: MARK }}>│</span> current price</span>
      </div>

      {/* greeks */}
      <div className="mt-4 grid gap-2 sm:grid-cols-5">
        {greeks.map((gk) => (
          <div key={gk.name} className="rounded-md border border-hairline bg-surface px-3 py-2">
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-faint">{gk.sym} {gk.name}</span>
            </div>
            <div className="mt-0.5 font-mono text-sm text-ink">{gk.val}</div>
            <div className="mt-1 text-[11px] leading-snug text-muted">{gk.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  display: string;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between">
        <span className="text-[11px] font-medium uppercase tracking-wide text-faint">{label}</span>
        <span className="font-mono text-xs text-ink">{display}</span>
      </div>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full accent-learn"
      />
    </label>
  );
}
