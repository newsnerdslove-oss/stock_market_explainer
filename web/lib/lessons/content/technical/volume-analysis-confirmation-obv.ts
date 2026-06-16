import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "volume-analysis-confirmation-obv",
  title: "Volume Analysis: Confirmation, Climax, and OBV",
  level: 2,
  moduleId: "markets-technical",
  moduleOrder: 4,
  summary: "Volume is the conviction behind a move — how to confirm breakouts, spot exhaustion, and compute OBV.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Price tells you *where* the market went; **volume** tells you how much conviction was behind the trip. A move on heavy volume carries more weight than the same move on a trickle. As always, these are *probabilistic tendencies*, not guarantees — and this is educational material, not financial advice.",
    },
    { type: "heading", text: "Volume as confirmation" },
    {
      type: "text",
      body:
        "A healthy trend is backed by **rising or above-average volume** in its direction. A breakout above resistance on strong volume is far more credible than one on thin volume — the thin breakout is a prime candidate for a **fakeout**. Volume is always *relative*: compare today's bar to something like the 20-day average, not to a fixed number.",
    },
    { type: "heading", text: "Climax and dry-up" },
    {
      type: "text",
      body:
        "Extremes cut both ways. A **climax** is a huge volume spike *after a long move* — a buying climax can mark a top (everyone who wanted in is in), a selling climax a bottom. And a **volume dry-up** during a pullback can mean sellers are exhausting themselves, hinting the trend may resume.",
    },
    { type: "heading", text: "On-Balance Volume (OBV)" },
    {
      type: "text",
      body:
        "**OBV** (Granville) is a running total that tracks where volume is flowing. The rule is simple: on an **up** close, *add* the day's volume; on a **down** close, *subtract* it; on an **unchanged** close, leave it alone. The theory holds that *volume precedes price*, so an OBV that diverges from price can warn of a coming move.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Confirmation", def: "A move backed by strong volume — more credible than the same move on thin volume." },
        { term: "Climax volume", def: "An extreme spike after a long move, often signaling exhaustion (a top or bottom)." },
        { term: "Volume dry-up", def: "Fading volume on a pullback — can signal the opposing side is exhausting." },
        { term: "OBV", def: "On-Balance Volume — cumulative: `+volume` on up closes, `−volume` on down closes, unchanged on flat." },
        { term: "Accumulation", def: "Rising OBV — net buying pressure building." },
        { term: "Distribution", def: "Falling OBV — net selling pressure building." },
        { term: "Average volume", def: "A baseline (e.g. the 20-day average) that makes today's volume meaningful." },
      ],
    },
    { type: "heading", text: "Worked example: computing OBV" },
    {
      type: "text",
      body:
        "Start OBV at `0`. Day 2 closes **up** on volume `500` → `0 + 500 = 500`. Day 3 closes **down** on volume `300` → `500 − 300 = 200`. Day 4 closes **unchanged** on volume `400` → no change, still `200`. Day 5 closes **up** on volume `800` → `200 + 800 = 1000`. The OBV finished at `1000`, well above where it started — net **accumulation** over the week.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Where it fails: volume spikes can be artifacts — index **rebalancing**, options **expiration**, or a one-off news event — that have nothing to do with conviction in the trend. And OBV is direction-only: it treats a `+0.01` close exactly like a `+5%` close, adding the full day's volume either way. It ignores *how much* price moved.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"high volume always means the move continues.\"* Not so. Huge volume at the *end* of a long trend is often a **climax** — exhaustion, not continuation. Context matters: the same big volume bar means continuation early in a move and a possible top late in one.",
    },
  ],
};
