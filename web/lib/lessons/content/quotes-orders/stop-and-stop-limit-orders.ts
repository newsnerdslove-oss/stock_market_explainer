import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "stop-and-stop-limit-orders",
  title: "Stop & Stop-Limit Orders",
  level: 1,
  moduleId: "markets-quotes-orders",
  moduleOrder: 3,
  summary: "Orders that wait in the wings — and the fine print that decides whether they actually save you.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "A stop order is a trade that **sits dormant** until the price reaches a level you set. It's how traders try to automate an exit — *if the stock falls to here, get me out.* But what happens at that moment depends entirely on which kind of stop you used.",
    },
    { type: "heading", text: "How a stop triggers" },
    {
      type: "text",
      body:
        "You set a **stop price**. Nothing happens while the market trades away from it. The instant the price hits the stop, the order **activates** — and what it turns into is the whole story.",
    },
    {
      type: "list",
      items: [
        "**Stop (stop-market)** → becomes a **market order** when triggered. Near-certain to fill, but the price can be worse than your stop in a fast market.",
        "**Stop-limit** → becomes a **limit order** at your chosen limit when triggered. Your price is protected, but it may not fill if the stock blows past your limit.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "A **stop-loss** is just a *sell* stop placed **below** your purchase price, used to cap how much you can lose. The same mechanics above apply to it.",
    },
    {
      type: "text",
      body:
        "One line to remember the difference: a **stop-market** says *\"definitely sell — price uncertain.\"* A **stop-limit** says *\"sell only at my price — fill uncertain.\"*",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Stop price", def: "The trigger level. When the market reaches it, the dormant order activates." },
        { term: "Stop (stop-market) order", def: "A stop that becomes a **market order** when triggered — near-certain fill, uncertain price." },
        { term: "Stop-limit order", def: "A stop that becomes a **limit order** when triggered — protected price, but may not fill." },
        { term: "Stop-loss", def: "A sell stop set **below** your buy price to limit losses." },
        { term: "Gap", def: "When a stock jumps to a new price without trading in between — often at the open, on news. Stops can trigger far from the stop price." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "You own a stock bought at **$100** and set a sell stop at **$90** to protect yourself. Overnight, bad news hits and the stock **gaps open at $85** — it never traded between $90 and $85.",
    },
    {
      type: "list",
      items: [
        "**Stop-market (stop $90)** → triggers at the open and sells as a market order at ~`$85`. You're out, but well below your stop.",
        "**Stop-limit (stop $90, limit $88)** → triggers, but becomes a limit to sell no lower than `$88`. Since the market is at `$85`, it **won't fill** — you still hold the stock as it falls.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "The big misconception: a stop-loss does **not** guarantee selling at your stop price. A plain stop becomes a *market* order, so a gap can fill far below your stop — and a stop-limit can leave you holding the stock entirely if it gaps past your limit.",
    },
  ],
};
