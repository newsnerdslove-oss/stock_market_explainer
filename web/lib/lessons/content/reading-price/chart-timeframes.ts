import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "chart-timeframes",
  title: "Chart Timeframes",
  level: 1,
  moduleId: "markets-reading-price",
  moduleOrder: 3,
  summary: "How much time each bar represents — and why that changes what you see.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "Open a stock chart and the very first choice you make is the **timeframe**. Pick `1m` and the chart twitches every minute; pick `1D` and the same stock looks calm and purposeful. Nothing about the company changed — only how much time you packed into each candle.",
    },
    { type: "heading", text: "What a timeframe is" },
    {
      type: "text",
      body:
        "A **timeframe** is how much time each bar or candle represents. On a `1m` chart, every candle is **one minute** of trading. On a `1h` chart, each candle is **one hour**. On a `1D` (daily) chart, each candle is **one full trading day** — its open, high, low, and close for that whole day. Each candle is one **period**.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "timeframe", def: "How much time each candle or bar represents — e.g. `1m`, `1h`, `1D`." },
        { term: "period", def: "One bar or candle on the chart — a single chunk of the chosen timeframe." },
        { term: "range", def: "How far back the chart shows (e.g. 6 months), separate from the timeframe." },
        { term: "intraday", def: "Within a single trading day — timeframes shorter than one day, like `1m` or `5m`." },
        { term: "daily chart", def: "A chart where each candle is one trading day. A common default for investors." },
        { term: "noise", def: "Small, random-looking wiggles that grow more prominent on shorter timeframes." },
      ],
    },
    { type: "heading", text: "Timeframe is not range" },
    {
      type: "text",
      body:
        "These two are easy to confuse. **Timeframe** is the time *per candle*. **Range** is how far back the chart stretches *in total*. You can view a 6-month range on a daily timeframe (about 125 candles) or a 6-month range on a weekly timeframe (about 26 candles) — same window, different detail.",
    },
    { type: "heading", text: "Shorter vs. longer" },
    {
      type: "list",
      items: [
        "**Shorter** timeframes (`1m`, `5m`) show more detail — and more **noise**.",
        "**Longer** timeframes (`1D`, `1W`) smooth that out and reveal the big-picture trend.",
        "For investing, lean on **daily or weekly** charts; reach for intraday only if you actively day-trade.",
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Pull up a **6-month daily** chart and you see roughly **125 candles** that flow into a fairly smooth shape — you can read the trend at a glance. Now switch just today to a **1-minute** chart: suddenly it's jagged, with sharp little spikes everywhere. The **prices are identical** — you simply zoomed in so each candle is one minute instead of one day.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "A common myth: *a 1-minute chart is more accurate than a daily one.* It isn't. Both plot the **same real prices** — the short one just zooms in. Zooming in adds **noise**, not accuracy.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Match the timeframe to your horizon. Holding for months? A **daily or weekly** chart keeps you focused on the trend instead of the minute-to-minute jitter.",
    },
  ],
};
