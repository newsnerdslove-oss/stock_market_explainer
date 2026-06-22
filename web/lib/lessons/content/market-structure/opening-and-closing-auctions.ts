import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "opening-and-closing-auctions",
  title: "Opening & Closing Auctions (the Cross)",
  level: 2,
  moduleId: "markets-structure",
  moduleOrder: 8,
  summary: "How exchanges open and close: one price, one print, maximum volume.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Continuous trading isn't how the day *starts* or *ends*. Both the open and the close are run as a single **auction** — the **cross** — that gathers every buy and sell order and matches them all at **one price**. It's not chaos resolving order by order; it's one big batch print.",
    },
    { type: "heading", text: "What an auction actually does" },
    {
      type: "text",
      body:
        "Instead of pairing orders one at a time, the exchange pools all the interest and finds the **single price that maximizes executable volume** — the price where the most shares can trade. Everyone who crosses that price trades at that **one print**, regardless of their individual limit. That's why the open and close show up as one large trade rather than a stream of small ones.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "The auction price isn't an average or a midpoint — it's the price where **the largest number of shares can be matched**. Among ties, exchange rules pick the price that minimizes the leftover imbalance.",
    },
    { type: "heading", text: "On-open and on-close order types" },
    {
      type: "list",
      items: [
        "**MOO (Market-on-Open)** — execute at the opening cross price, no limit.",
        "**LOO (Limit-on-Open)** — participate in the open only at your limit price or better.",
        "**MOC (Market-on-Close)** — execute at the closing cross price, no limit.",
        "**LOC (Limit-on-Close)** — join the close only at your limit or better.",
      ],
    },
    {
      type: "text",
      body:
        "These orders **only execute in the auction** — they don't sit in the continuous book. A MOC is a commitment to take whatever the closing print is; you trade the official close, but you don't get to pick the number.",
    },
    { type: "heading", text: "Timing & published imbalances" },
    {
      type: "text",
      body:
        "Ahead of each cross, the exchange **publishes the order imbalance** so the rest of the market can react and supply offsetting liquidity. On **Nasdaq**, the opening imbalance (the Order Imbalance Indicator / NOII) begins disseminating at **`9:28am ET`** before the `9:30am` open; the closing imbalance is disseminated between **`3:50` and `4:00pm ET`** before the close.",
    },
    {
      type: "list",
      items: [
        "**Nasdaq MOO** orders can be entered until **`9:28am`**; **LOO** until `9:29:30am`.",
        "**Nasdaq MOC** orders can be entered until **`3:55pm`**; **LOC** until **`3:58pm`**.",
        "On **NYSE**, MOC and LOC orders must be in by **`3:50pm ET`**, after which the exchange only accepts MOC/LOC orders that *offset* a published imbalance.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Published imbalances are a feature, not a leak: showing that the close is, say, `2,000,000` shares to **buy** invites sellers to step in, which tightens the eventual print. Exact cutoff times and feed names vary by exchange and change over time.",
    },
    { type: "heading", text: "Why the closing auction is the day's biggest price" },
    {
      type: "text",
      body:
        "The **closing cross** is typically the **highest-volume, most-watched** event of the trading day. The closing price is the official mark used everywhere downstream: **index levels and rebalances**, **mutual-fund and ETF NAVs**, **benchmark/VWAP-relative pricing**, and **derivatives settlement**. Funds that must trade *at the close* to track an index route huge MOC interest into the auction — concentrating liquidity into that one print.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Cross / auction", def: "A single batch match at the open or close that fills all crossing orders at one price." },
        { term: "Maximize executable volume", def: "The rule that sets the auction price where the most shares can trade." },
        { term: "MOO / MOC", def: "Market-on-open / market-on-close — execute at the auction price with no limit." },
        { term: "LOO / LOC", def: "Limit-on-open / limit-on-close — join the auction only at your limit or better." },
        { term: "Order imbalance", def: "The published excess of buy vs. sell interest heading into a cross." },
        { term: "NOII", def: "Nasdaq's Net Order Imbalance Indicator, disseminated before each cross." },
        { term: "Official closing price", def: "The closing-auction print used for index levels, NAVs, and benchmarks." },
      ],
    },
    { type: "heading", text: "Worked example: reading a closing imbalance" },
    {
      type: "text",
      body:
        "At `3:50pm` the feed shows a closing imbalance of `1,500,000` shares **to buy** with a reference around `$50.00`. Index funds rebalancing into the name are driving the MOC buy interest. Seeing the imbalance, sellers enter offsetting LOC orders. By `4:00pm` the cross finds the **single price that matches the most shares** — say `$50.08` — and every participating order prints there at once. That `$50.08` becomes the **official close**.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "A MOC guarantees you trade *at* the close — not at a *good* price. Into a large same-side imbalance, the auction can print well away from the `3:50pm` quote. If price matters more than hitting the exact close, a **LOC** caps where you'll participate.",
    },
  ],
};
