import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "macd-moving-average-convergence-divergence",
  title: "MACD: The 12/26/9 Momentum Engine",
  level: 2,
  moduleId: "markets-technical",
  moduleOrder: 3,
  summary: "Two EMAs, a signal line, and a histogram — how MACD measures momentum and where its crossovers mislead.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "**MACD** — Moving Average Convergence Divergence — turns the gap between two EMAs into a momentum reading. It's three pieces working together: a MACD line, a signal line, and a histogram. Everything below describes *probabilistic tendencies*, not guarantees, and is educational only — not financial advice.",
    },
    { type: "heading", text: "Building the three pieces" },
    {
      type: "text",
      body:
        "The defaults are `12 / 26 / 9`. The **MACD line** = `12-period EMA − 26-period EMA`. The **signal line** = the `9-period EMA of the MACD line`. The **histogram** = `MACD line − signal line`. A positive, growing histogram says momentum is building to the upside; a positive but *shrinking* histogram says that momentum is fading even though price may still be rising.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "MACD line", def: "`12-EMA − 26-EMA`. Positive when short-term momentum leads long-term." },
        { term: "Signal line", def: "The `9-EMA` of the MACD line — a smoothed trigger." },
        { term: "Histogram", def: "`MACD − signal`. Positive = bullish, negative = bearish; shrinking = momentum fading." },
        { term: "Bullish crossover", def: "MACD line crosses **above** the signal line." },
        { term: "Zero line", def: "When MACD crosses zero, the 12-EMA has overtaken (or fallen below) the 26-EMA." },
        { term: "MACD divergence", def: "Price makes a new high but MACD makes a lower high — momentum weakening." },
        { term: "Convergence", def: "The two EMAs drifting back together, pulling MACD toward zero." },
      ],
    },
    { type: "heading", text: "Reading the signals" },
    {
      type: "list",
      items: [
        "**Bullish crossover** — MACD crosses *above* the signal line.",
        "**Bearish crossover** — MACD crosses *below* the signal line.",
        "**Zero-line cross** — the 12-EMA overtakes the 26-EMA (up) or drops below it (down).",
        "**Divergence** — price prints a higher high while MACD prints a lower high → underlying momentum is weakening.",
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Say the `12-EMA = 105` and the `26-EMA = 100`. Then `MACD = 105 − 100 = +5`. If the signal line is `+3`, the `histogram = 5 − 3 = +2` — clearly bullish.",
    },
    {
      type: "text",
      body:
        "The next day the `12-EMA = 104` and `26-EMA = 100`, so `MACD = +4`. The signal line ticks to `3.5`, giving `histogram = 4 − 3.5 = +0.5`. The histogram is still positive — but it *shrank* from `+2` to `+0.5`. That's momentum fading even while MACD stays above zero. The histogram often warns before the crossover does.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Where it fails: in a **sideways market** the MACD and signal lines hug zero and cross back and forth repeatedly, throwing off false crossovers with no follow-through. And because every piece is EMA-based, MACD is a **lagging** tool — it confirms a momentum change that has *already* started.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"MACD predicts where price is going.\"* It doesn't. It's a **lagging momentum** indicator. A crossover describes a change that already happened — it's a confirmation, not a forecast. Pair it with trend and structure, and discount its signals when price is range-bound.",
    },
  ],
};
