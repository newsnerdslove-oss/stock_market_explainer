import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "what-is-a-derivative",
  title: "What Is a Derivative?",
  level: 2,
  moduleId: "markets-derivatives",
  moduleOrder: 1,
  summary: "A contract whose value comes from something else — and why it cuts both ways.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "You can buy a share of a company and *own* a slice of it. Or you can sign a **contract** whose value rises and falls with that share — without owning a single one. That contract is a **derivative**, and it opens the door to both protection and outsized risk.",
    },
    {
      type: "text",
      body:
        "A **derivative** is a contract whose value *derives* from an **underlying** — a stock, an index, a commodity, a currency, or an interest rate. You're not trading the asset itself; you're trading a contract that tracks it.",
    },
    { type: "heading", text: "Two main types: a right vs. an obligation" },
    {
      type: "text",
      body:
        "The two most common exchange-traded derivatives split on one idea. An **option** gives you a *right* — you may act, but you never have to. A **future** is an *obligation* — both sides *must* perform (or close the position first). That **right-vs-obligation** contrast is the theme that runs through this whole module.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Derivative", def: "A contract whose value is derived from an underlying asset, not the asset itself." },
        { term: "Underlying", def: "The thing the contract tracks — a stock, index, commodity, currency, or rate." },
        { term: "Option", def: "A derivative that gives a *right* (not an obligation) to buy or sell the underlying." },
        { term: "Future", def: "A derivative that is an *obligation* to buy or sell the underlying at a set price and date." },
        { term: "Hedging", def: "Using a derivative to *reduce* an existing risk — locking in a price you already face." },
        { term: "Speculation", def: "*Taking on* risk to profit from the direction or size of a move, without owning the underlying." },
        { term: "Leverage", def: "Using a small amount of money to control a much larger notional position." },
      ],
    },
    { type: "heading", text: "Why people use them: hedge vs. speculate" },
    {
      type: "list",
      items: [
        "**Hedging** *reduces* a risk you already have. An airline that must buy jet fuel can use oil futures to lock in a price — trading away the upside of cheaper fuel to remove the downside of pricier fuel.",
        "**Speculation** *takes on* risk for profit. A trader who thinks a stock will rise can buy a call to bet on direction without putting up the full cost of the shares.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "The same contract can hedge *or* speculate — it depends on whether it offsets a real exposure you already carry. A hedge only protects if it actually offsets your existing position.",
    },
    { type: "heading", text: "Leverage: small money, large exposure" },
    {
      type: "text",
      body:
        "One key feature is **leverage**: a small amount of money controls a large **notional** position. In equity options, `1 contract = 100 shares`, so a few hundred dollars can move with $5,000+ of stock.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "list",
      ordered: true,
      items: [
        "You own `100 shares` of XYZ at `$50` → that's `100 × $50 = $5,000` of stock.",
        "Instead, one **call** controlling `100 shares` might cost a `$300` premium.",
        "XYZ rises `+10%` to `$55`. The stockholder gains `100 × $5 = $500` (`+10%` on `$5,000`).",
        "On the option, that same `$5` move is a far larger *percentage* on just `$300` — leverage magnifies the return.",
        "But if XYZ finishes at or below the strike at expiration, the option can be worth `$0` — a `−100%` loss of the `$300` — while the stockholder still owns ~`$5,000` of shares.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Risk: leverage cuts both ways.** It magnifies gains *and* losses. Options can expire worthless — a `−100%` loss of the premium — and futures losses can *exceed* the money you posted. The dollar swing is symmetric, but the percentage swing on a tiny premium is brutal. This is educational only, not financial advice.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Misconception: \"a derivative is just a cheaper way to own the stock.\"** No — you own a *contract*. It has an expiration, it can expire worthless, it usually carries no dividends or voting rights, and its payoff is nonlinear. Owning the stock and owning a derivative on it are not the same thing.",
    },
  ],
};
