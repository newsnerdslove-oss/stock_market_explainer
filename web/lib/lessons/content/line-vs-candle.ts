import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "line-vs-candle",
  title: "Line charts vs. candlestick charts",
  level: 1,
  moduleId: "markets-reading-price",
  moduleOrder: 2,
  summary: "Why traders reach for candles when a simple line would do.",
  estMinutes: 3,
  sections: [
    {
      type: "text",
      body:
        "A **line chart** connects one price per period — usually the close — into a single line. It's clean and great for spotting the overall trend at a glance.",
    },
    {
      type: "text",
      body:
        "A **candlestick chart** shows four prices per period instead of one. That extra detail is the whole point: you can see not just where price **ended**, but how far it **traveled** and who won the fight along the way.",
    },
    { type: "heading", text: "What the line hides" },
    {
      type: "list",
      items: [
        "**Range** — how far price swung between high and low. A line shows none of it.",
        "**Open vs. close** — whether buyers or sellers controlled the period.",
        "**Rejection** — long wicks that show price was pushed somewhere and snapped back.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Same closing prices can produce an identical line but wildly different candles. The candle tells you the *story*; the line only tells you the *ending*.",
    },
    { type: "heading", text: "When to use which" },
    {
      type: "list",
      ordered: true,
      items: [
        "**Line** — quick read of the long-term trend, or comparing several assets at once.",
        "**Candles** — making an actual trading decision, where the intra-period action matters.",
      ],
    },
  ],
};
