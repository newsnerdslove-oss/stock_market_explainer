import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "perpetual-futures-and-funding-rates",
  title: "Perpetual Futures & Funding Rates",
  level: 3,
  moduleId: "crypto-300",
  moduleOrder: 3,
  summary:
    "How perpetual futures stay anchored to spot with no expiry — who pays the funding rate, to whom, and how it drags on a position over time.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "A normal futures contract has an expiry date, and at expiry its price *must* converge to spot. A **perpetual future** — a \"perp\" — has **no expiry and no settlement**. You never roll contracts. But that raises a puzzle: with no expiry to force convergence, what stops a perp's price from drifting away from the real asset forever?",
    },
    {
      type: "text",
      body:
        "The answer is the **funding rate** — a periodic cash payment exchanged **directly between longs and shorts** (the exchange usually takes no cut). It is the mechanism that keeps the perp tethered to the **spot index**.",
    },
    { type: "heading", text: "Who pays whom" },
    {
      type: "list",
      items: [
        "**Positive funding** (perp trading *above* spot) → **longs pay shorts**.",
        "**Negative funding** (perp trading *below* spot) → **shorts pay longs**.",
      ],
    },
    {
      type: "text",
      body:
        "Funding always penalizes the crowded side and nudges the perp back toward spot. It is charged on a schedule — typically **every 8 hours** (some venues use 1h or 4h). Crucially, you only pay or receive if you are holding the position **through the funding timestamp**.",
    },
    { type: "heading", text: "Funding is charged on notional, not margin" },
    {
      type: "text",
      body:
        "Funding is paid on your position's **notional** (its full size), not on the margin you posted. With high leverage, a small percentage of a large notional is a meaningful recurring drag relative to your small margin. Persistently positive funding signals **crowded longs** — a useful sentiment gauge, though not a guarantee of direction. Perps also separate the **mark price** (index-tied, used for liquidations) from the last-traded price.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Perpetual future (perp)", def: "A futures contract with no expiry or settlement — you never roll it." },
        { term: "Funding rate", def: "A periodic payment between longs and shorts that keeps the perp near spot." },
        { term: "Spot index", def: "The reference price of the underlying asset on the spot market." },
        { term: "Mark price", def: "An index-tied price used for liquidations, harder to manipulate than last-traded price." },
        { term: "Notional / position size", def: "The full value of your position; funding is charged on this, not your margin." },
        { term: "Funding interval", def: "The schedule (often every 8h) at which funding is exchanged." },
        { term: "Basis", def: "The gap between the perp's price and spot, which funding works to shrink." },
      ],
    },
    { type: "heading", text: "A worked example (illustrative numbers)" },
    {
      type: "text",
      body:
        "You hold a `$10,000` long BTC perp using `$1,000` margin at `10x`. The perp is trading above spot, so funding is `+0.01%` per `8h`.",
    },
    {
      type: "list",
      items: [
        "**Per interval:** `0.01% × $10,000 = $1.00` paid to shorts.",
        "**Per day** (3 intervals): `$3.00`.",
        "**Over 30 days:** ~`$90` — about `9%` of your `$1,000` margin, drained by funding *alone* before any price move.",
        "**If funding flipped negative:** as a long, you would *receive* it instead.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Funding can spike.** In euphoric or panicked markets, funding can jump far above `0.01%/8h`, making it expensive to hold the crowded side. Also remember liquidations use the **mark/index price** — a thin order book can still wick the last-traded price, but mark pricing limits outright manipulation of your liquidation level.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Common misconception:** *\"The funding rate is a fee the exchange charges me, like loan interest.\"* Funding is generally a **peer-to-peer transfer between traders** (longs ↔ shorts) to keep the perp near spot — the exchange usually takes none of it. Depending on which side you're on, you may **receive** funding rather than pay it.",
    },
  ],
};
