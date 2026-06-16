import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "what-is-a-candle",
  title: "What is a candlestick?",
  level: 1,
  summary: "Read a single candle — the four prices it packs into one shape.",
  estMinutes: 4,
  sections: [
    {
      type: "text",
      body:
        "A **candlestick** is the most common way to draw price on a chart. Each candle covers one slice of time — a minute, an hour, a day — and squeezes **four prices** from that slice into a single shape.",
    },
    {
      type: "chart",
      kind: "candle-anatomy",
      caption: "One candle = open, high, low, and close for its time period.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Open", def: "The price at the **start** of the period." },
        { term: "Close", def: "The price at the **end** of the period." },
        { term: "High", def: "The highest price reached during the period (tip of the upper wick)." },
        { term: "Low", def: "The lowest price reached during the period (tip of the lower wick)." },
      ],
    },
    { type: "heading", text: "Body vs. wick" },
    {
      type: "text",
      body:
        "The thick **body** spans from the open to the close. The thin lines above and below — the **wicks** (or shadows) — reach out to the high and the low. A long wick means price went there but didn't stay.",
    },
    { type: "heading", text: "Green vs. red" },
    {
      type: "list",
      items: [
        "**Green** (or white): the close is **above** the open — price rose over the period.",
        "**Red** (or black): the close is **below** the open — price fell over the period.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "For a green candle the open is the **bottom** of the body and the close is the **top**. For a red candle it flips: open on top, close on the bottom.",
    },
  ],
};
