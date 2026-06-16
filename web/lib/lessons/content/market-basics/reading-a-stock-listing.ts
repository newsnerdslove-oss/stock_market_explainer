import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "reading-a-stock-listing",
  title: "Tickers & Reading a Stock Listing",
  level: 1,
  moduleId: "markets-basics",
  moduleOrder: 2,
  summary: "Decode a stock quote — ticker, last price, change, and percent change — at a glance.",
  estMinutes: 4,
  sections: [
    {
      type: "text",
      body:
        "Every stock quote you see is just a few numbers packed together. Once you know what each one means, you can read any listing in seconds.",
    },
    { type: "heading", text: "The ticker symbol" },
    {
      type: "text",
      body:
        "A **ticker** is a short code that stands in for a company's name — `AAPL` for Apple, `MSFT` for Microsoft, `TSLA` for Tesla. It's faster to type and unambiguous on the exchange.",
    },
    { type: "heading", text: "Last price and previous close" },
    {
      type: "text",
      body:
        "The **last price** is simply the price of the most recent trade. The **previous close** is the final price from the prior trading day. Almost everything else on a quote is measured against that previous close.",
    },
    { type: "heading", text: "Change and percent change" },
    {
      type: "list",
      items: [
        "**Change** is the dollar move versus the previous close. `+5.00` means $5 above where it closed yesterday.",
        "**Percent change** is `change ÷ previous close`. It lets you compare moves across stocks at very different prices.",
        "**Green vs. red** is just a convention: green = up versus the prior close, red = down.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Quotes update in **real time** during market hours. When the market is closed, the numbers freeze at the last trade until the next session.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Ticker symbol", def: "A short code identifying a stock, like `NVDA` or `AAPL`." },
        { term: "Last price", def: "The price of the most recent completed trade." },
        { term: "Previous close", def: "The final price from the prior trading day." },
        { term: "Change", def: "The dollar difference between the last price and the previous close." },
        { term: "Percent change", def: "Change ÷ previous close, expressed as a percentage." },
        { term: "Quote", def: "The bundle of numbers describing a stock's current price and movement." },
      ],
    },
    { type: "heading", text: "Reading one in practice" },
    {
      type: "text",
      body:
        "Take `NVDA Last 120.00 +6.00 (+5.26%)`. The most recent trade was `$120.00`. That's `$6.00` above the previous close of `$114.00`. And `6 ÷ 114 = 0.0526`, so the stock is up `5.26%` on the day.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common misconception: a higher share price does **not** mean a bigger or better company. A `$400` stock isn't 'worth more' than a `$40` one — price per share alone tells you nothing about size. Total value = price × number of shares.",
    },
  ],
};
