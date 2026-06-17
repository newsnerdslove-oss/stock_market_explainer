import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "covered-call",
  title: "Covered Call: Renting Out Stock You Own",
  level: 3,
  moduleId: "markets-options",
  moduleOrder: 2,
  summary: "Collect premium on shares you already hold — for the price of capping your upside.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "You own 100 shares and they've been drifting sideways. A **covered call** lets you collect cash today by promising to sell those shares at a set price — like renting out the stock for income while you wait.",
    },
    { type: "heading", text: "How to build it" },
    {
      type: "list",
      items: [
        "Own **100 shares** of the stock.",
        "**Sell 1 call** against them and collect the premium up front.",
        "The stance is **neutral-to-mildly-bullish**: you want income, or a disciplined price to sell at.",
      ],
    },
    {
      type: "text",
      body:
        "The premium does two things: it lowers your **breakeven** and cushions small drops. The catch is the trade-off versus simply holding the stock — the short call **caps your upside** at the strike. Above it, your shares get *called away* and you miss the rest of the rally.",
    },
    {
      type: "payoff",
      legs: [
        { instrument: "stock", side: "long", premium: 50, qty: 100 },
        { instrument: "call", side: "short", strike: 55, premium: 2, qty: 1 },
      ],
      title: "Covered call payoff",
      caption: "Capped at the $55 strike; breakeven $48; max profit $700.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Covered call (buy-write)", def: "Owning 100 shares and selling 1 call against them; 'buy-write' if you open both at once." },
        { term: "Called away", def: "Having your shares sold at the strike because the short call was assigned." },
        { term: "Cost basis", def: "Your effective per-share cost; the premium lowers it (here `$50 − $2 = $48`)." },
        { term: "Opportunity cost", def: "The upside you forgo above the strike — the real price of a covered call." },
        { term: "Ex-dividend date", def: "The cutoff for a dividend; ITM calls are often assigned early just before it." },
        { term: "Premium income", def: "The cash you collect today for selling the call." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Buy 100 shares @ `$50` (`$5,000`), then sell 1 call, strike `$55`, for `$2` (`$200`). Your basis is now `$48`. Max profit is `(55 − 50 + 2) × 100 = $700`; breakeven is `cost − premium = $48`; max loss is `(50 − 2) × 100 = $4,800` if the stock goes to zero.",
    },
    {
      type: "list",
      items: [
        "Stock to `$60` → called away at `$55`: gain `(55 − 50) × 100 + 200 = +$700`. You forgo the `$55 → $60` move.",
        "Stock to `$52` → call expires; keep the `$200` premium plus `$200` unrealized = `+$400`, and you still own the shares.",
        "Stock to `$48` → breakeven, `$0`.",
        "Stock to `$40` → `−$800` (the premium only modestly offset the decline).",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "An in-the-money short call can be **assigned early** — especially right before an ex-dividend date. And your max loss is large: you still own the stock, and `$2` of premium barely dents a serious drop.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'a covered call is a low-risk income trade.'* The income is **capped and small**, while your downside is nearly the full stock decline. The real cost is the upside you give up — short options also carry assignment risk, and max-loss math assumes you actually manage the position.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial advice.",
    },
  ],
};
