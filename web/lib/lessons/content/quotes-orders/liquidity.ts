import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "liquidity",
  title: "Liquidity",
  level: 1,
  moduleId: "markets-quotes-orders",
  moduleOrder: 6,
  summary: "Why some stocks are effortless to trade and others fight you on the way in — and out.",
  estMinutes: 4,
  sections: [
    {
      type: "text",
      body:
        "**Liquidity** is how easily you can trade a stock *quickly*, *in size*, and *near its current price*. It's the quiet force behind how fast your order fills, what price you get, and how much you slip.",
    },
    { type: "heading", text: "High vs. low liquidity" },
    {
      type: "list",
      items: [
        "**High liquidity** — high average volume, tight bid/ask spreads, a deep order book. Big, widely-held companies are usually liquid.",
        "**Low liquidity** — low volume, wide spreads, and prices that jump on even modest orders. Small- and micro-cap stocks are often thinly traded.",
      ],
    },
    {
      type: "text",
      body:
        "Liquidity drives the things you've already met: **fill speed**, **fill price**, and **slippage**. It also decides how easily you can get **out** — an easy buy in a thin stock can become a painful sell later.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "**Liquidity is not value.** An expensive stock can be highly liquid, and a cheap one can be nearly impossible to trade. They measure completely different things.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Liquidity", def: "How easily you can trade quickly, in size, and near the current price." },
        { term: "Volume", def: "How many shares trade over a period (e.g. per day). High volume usually means high liquidity." },
        { term: "Bid/ask spread", def: "The gap between the best buy and sell prices. Tight spreads signal liquidity; wide ones signal the opposite." },
        { term: "Market depth", def: "How many shares are available at and near the current price across the order book." },
        { term: "Thinly traded", def: "A stock with low volume and few resting orders — small trades can move its price." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Compare a 100-share buy in two stocks:",
    },
    {
      type: "list",
      items: [
        "**Liquid ABC** — 50M shares trade per day, spread of `$0.01`. Your 100-share order fills instantly at ~`$40.01`, barely a ripple.",
        "**Illiquid ZZZ** — 8,000 shares trade per day, spread of `$0.40`. The same 100-share order fills at ~`$5.40` or worse, and your buying nudges the price up.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: \"a low share price means a stock is easy to trade.\" Liquidity is about **volume and depth, not the price tag**. A `$3` micro-cap can be brutally illiquid, while a `$400` mega-cap trades effortlessly.",
    },
  ],
};
