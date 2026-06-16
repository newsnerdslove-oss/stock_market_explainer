import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "trading-halts-and-circuit-breakers",
  title: "Trading Halts & Circuit Breakers",
  level: 2,
  moduleId: "markets-structure",
  moduleOrder: 6,
  summary: "The two systems that pause one stock — or the whole market.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "When prices fall off a cliff, the market has automatic brakes. There are **two separate systems**: one cools down a *single stock*, and one can pause *the entire market* — and confusing them leads to some very wrong assumptions.",
    },
    { type: "heading", text: "Two systems, two scopes" },
    {
      type: "list",
      items: [
        "**LULD (Limit Up-Limit Down)** protects an *individual stock* using percentage bands.",
        "**Market-Wide Circuit Breakers (MWCB)** halt the *whole market*, measured by the **S&P 500**.",
      ],
    },
    { type: "heading", text: "LULD: single-stock bands" },
    {
      type: "text",
      body:
        "LULD bands apply in **regular hours only**, for stocks above `$3`. **Tier 1** (S&P 500 / Russell 1000 / select ETPs) uses `±5%`; **Tier 2** (most other NMS stocks) uses `±10%`. The reference is a **rolling 5-minute average** price. If the price hits a band and *stays* there (a **Limit State**) for `15` seconds without coming back, a **5-minute trading pause** kicks in, and the stock then **reopens via auction**. In the last 25 minutes (`3:35–4:00pm ET`), the bands **double**.",
    },
    { type: "heading", text: "MWCB: the three levels" },
    {
      type: "text",
      body:
        "Market-wide breakers trigger on the **S&P 500** versus the prior close (recalculated daily):",
    },
    {
      type: "list",
      items: [
        "**Level 1 = `7%`** decline — 15-minute market-wide halt, *only if triggered before `3:25pm ET`*.",
        "**Level 2 = `13%`** decline — 15-minute market-wide halt, *only if triggered before `3:25pm ET`*.",
        "**Level 3 = `20%`** decline — halts trading **for the rest of the day**, at *any* time.",
      ],
    },
    {
      type: "text",
      body:
        "Each level can trigger **once per day**. At or after `3:25pm`, Levels 1 and 2 **do not** halt the market — only Level 3 still does.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "LULD (Limit Up-Limit Down)", def: "Single-stock protection using ±5% / ±10% price bands in regular hours." },
        { term: "Limit State", def: "When a stock sits at its band; if it holds 15 seconds, a 5-minute pause follows." },
        { term: "Trading pause", def: "The 5-minute LULD halt of one stock, after which it reopens via auction." },
        { term: "Market-wide circuit breaker (MWCB)", def: "An S&P 500-based halt of the entire market." },
        { term: "Level 1 / 2 / 3", def: "S&P 500 declines of 7% / 13% / 20% versus the prior close." },
        { term: "News dissemination halt", def: "A separate halt for pending material news or order imbalances." },
        { term: "Reference price", def: "The benchmark a band or level is measured against (rolling average for LULD; prior close for MWCB)." },
      ],
    },
    { type: "heading", text: "Worked example: a falling S&P" },
    {
      type: "text",
      body:
        "The S&P closed at `5,000`. So Level 1 (`−7%`) = `4,650`, Level 2 (`−13%`) = `4,350`, Level 3 (`−20%`) = `4,000`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "At `11:00am` the index hits `4,650` (`−7%`) → **Level 1** → all US equity trading halts **15 minutes**, then resumes.",
        "Selling continues to `4,350` (`−13%`) at `1:00pm` → **Level 2** → another **15-minute** halt.",
        "It reaches `4,000` (`−20%`) at any time → **Level 3** → the market **closes for the day**.",
      ],
    },
    {
      type: "text",
      body:
        "Contrast: if the *first* `−7%` hit had come at `3:30pm` (after `3:25pm`), there would be **no Level 1 halt** — only Level 3 still halts that late in the day.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "The `3:25pm` cutoff applies only to **Levels 1 and 2**. **LULD** is different: it pauses an *individual* stock and reopens it via auction (not market-wide), using `%` bands rather than S&P points. **News/volatility halts** are a third, separate mechanism.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "It's a myth that a `7%` S&P drop *closes the market for the day*. **Level 1** is only a **15-minute pause** — and only before `3:25pm`. Only **Level 3 (`20%`)** shuts the market for the rest of the day.",
    },
  ],
};
