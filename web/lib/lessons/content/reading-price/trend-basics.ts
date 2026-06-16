import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "trend-basics",
  title: "Trend Basics",
  level: 1,
  moduleId: "markets-reading-price",
  moduleOrder: 5,
  summary: "Up, down, or sideways — how to name what a stock is actually doing.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "Before any fancy indicator, traders ask one plain question: *which way is this going?* That general direction over time is the **trend**. Learning to name a trend — and to spot when one day's move isn't a trend at all — is one of the most useful chart-reading skills there is.",
    },
    { type: "heading", text: "The three directions" },
    {
      type: "list",
      items: [
        "**Uptrend** — a series of **higher highs** and **higher lows**; the stock keeps making new peaks and pulling back to higher floors.",
        "**Downtrend** — a series of **lower highs** and **lower lows**; each rally stalls sooner and each dip goes deeper.",
        "**Sideways / range-bound** — highs and lows stay roughly level; the stock chops back and forth without clear progress.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "trend", def: "The general direction of price over time — up, down, or sideways." },
        { term: "uptrend", def: "A pattern of higher highs and higher lows." },
        { term: "downtrend", def: "A pattern of lower highs and lower lows." },
        { term: "sideways / range-bound", def: "Highs and lows roughly level; no clear directional progress." },
        { term: "higher high", def: "A new peak that tops the previous peak." },
        { term: "higher low", def: "A pullback that bottoms out above the previous pullback." },
      ],
    },
    { type: "heading", text: "Trends live on every timeframe" },
    {
      type: "text",
      body:
        "A stock can be in a **daily uptrend** and a **5-minute downtrend** at the same moment — they're just different zoom levels. A short-term dip inside a longer climb is a **pullback**, not a reversal of the bigger trend. Always note *which* timeframe a trend describes.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Traders say *\"the trend is your friend\"* — moves tend to continue in the same direction more often than they suddenly flip. But that's a **tendency, not a guarantee**: every trend eventually ends.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Look at a weekly chart. The peaks come in at `50`, then `53`, then `57` — **higher highs**. The pullback lows come in at `46`, then `49`, then `52` — **higher lows**. Higher highs **and** higher lows together = a clean **uptrend**.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "A common mistake: *\"it went up today, so it's in an uptrend.\"* One green day isn't a trend. An uptrend needs **repeated higher highs AND higher lows** — a single day proves nothing on its own.",
    },
  ],
};
