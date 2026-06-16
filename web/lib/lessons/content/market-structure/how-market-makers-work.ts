import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "how-market-makers-work",
  title: "How Market Makers Really Work",
  level: 2,
  moduleId: "markets-structure",
  moduleOrder: 2,
  summary: "Quoting both sides, earning the spread, and managing inventory risk.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "When you hit *buy*, someone is on the other side almost instantly. Often that someone is a **market maker** — a firm whose business is to stand ready to trade both ways, all day, and make a thin profit on the gap between.",
    },
    { type: "heading", text: "Quoting a two-sided market" },
    {
      type: "text",
      body:
        "A market maker (MM) posts a **two-sided market**: a price it will *buy* at (the bid) and a price it will *sell* at (the offer). By always being there to trade, it **provides liquidity**. Its core income is the **spread** — buying at the bid and selling at the offer, repeated across enormous volume.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Two-sided market", def: "A simultaneous bid and offer the MM stands ready to trade on either side." },
        { term: "Spread capture", def: "Earning the bid–offer gap by buying low and selling high across many trades." },
        { term: "Inventory risk", def: "The exposure from holding a long or short position while the price moves against it." },
        { term: "NBBO", def: "National Best Bid and Offer — the highest bid and lowest offer across all venues." },
        { term: "Price improvement", def: "Filling an order at a price *better* than the NBBO — common for retail flow." },
        { term: "PFOF", def: "Payment for order flow — wholesalers pay brokers to route them retail orders." },
        { term: "Best execution (FINRA 5310)", def: "A broker's duty to seek the most favorable terms reasonably available for a customer order." },
      ],
    },
    { type: "heading", text: "The NBBO and price improvement" },
    {
      type: "text",
      body:
        "The **NBBO** is the highest bid and lowest offer across every venue. Under Reg NMS, customer orders must execute **no worse than the NBBO**. In practice, wholesalers handling retail flow often do *better*: they fill **inside** the NBBO, giving the customer **price improvement**. Under **PFOF**, brokers route orders to wholesalers who pay for that flow — but the broker still owes **best execution** (FINRA 5310) and must meet the NBBO.",
    },
    { type: "heading", text: "Worked example: capturing the spread" },
    {
      type: "text",
      body:
        "An MM quotes `$20.00 / $20.02`, 1,000 shares up. A retail seller hits the bid: the MM **buys 1,000 @ `$20.00`** and is now **long 1,000**. Moments later a buyer lifts the offer: the MM **sells 1,000 @ `$20.02`**.",
    },
    {
      type: "list",
      items: [
        "Profit = `1,000 × $0.02` = **`$20`**, and the MM is back to **flat** (no position).",
        "But if instead the stock falls to `$19.90` while the MM still holds the long 1,000, that position is now **`−$100`** — pure inventory risk.",
      ],
    },
    {
      type: "text",
      body:
        "To manage that risk, the MM **skews** its quotes (e.g. lowers its bid to discourage adding more) and **hedges** the exposure. The goal is to stay roughly flat and earn the spread, not to bet on direction.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "In fast, one-sided markets MMs **widen spreads or pull quotes** to protect against *adverse selection* — being repeatedly filled by better-informed traders. And remember: *no worse than the NBBO* is a **floor**, not a promise of the best price imaginable.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "It's a myth that MMs profit by *betting against you*. The core model is **capturing the spread across volume while staying flat**. Directional inventory is a *risk* they actively minimize, not a strategy they seek.",
    },
  ],
};
