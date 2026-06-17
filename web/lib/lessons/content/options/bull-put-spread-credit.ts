import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "bull-put-spread-credit",
  title: "Bull Put Spread: Getting Paid for a 'Stays-Above' Bet",
  level: 3,
  moduleId: "markets-options",
  moduleOrder: 7,
  summary: "Collect a credit if the stock simply holds above a level — but the math risks more than it pays.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "What if you could get paid for a stock *not falling* — no need for it to actually rise? A **bull put spread** does exactly that: you collect a credit up front, and you keep it as long as the stock stays above your short strike. The twist is the asymmetry hiding in the payoff.",
    },
    { type: "heading", text: "How to build it" },
    {
      type: "list",
      items: [
        "**Sell a higher-strike put** (collect premium).",
        "**Buy a lower-strike put**, same expiration, for protection — a net **credit**.",
        "The stance is **neutral-to-bullish**: profit if the stock stays **above** the short strike. It doesn't have to climb.",
      ],
    },
    {
      type: "text",
      body:
        "Here's the asymmetry: a credit spread typically **risks more than it can make** — you risk `$380` to make `$120`. The appeal is a **higher probability of profit**, funded by time decay (positive theta). Versus a cash-secured put, the long put **defines and reduces** your max loss, but you give up the chance to acquire shares cheaply.",
    },
    {
      type: "payoff",
      legs: [
        { instrument: "put", side: "short", strike: 50, premium: 2, qty: 1 },
        { instrument: "put", side: "long", strike: 45, premium: 0.8, qty: 1 },
      ],
      title: "Bull put (credit) spread payoff",
      caption: "Credit $120 (max profit); max loss $380; breakeven $48.80.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Credit spread", def: "A spread opened for a net credit — you're paid to take a defined-risk position." },
        { term: "Bull put spread (put credit spread)", def: "Short a higher-strike put, long a lower-strike put, for a net credit." },
        { term: "Net credit", def: "Cash collected at open: short premium minus long premium (here `$2 − $0.80 = $1.20`)." },
        { term: "Asymmetric risk/reward", def: "Max loss exceeds max profit — you risk more than you can win." },
        { term: "Defined risk", def: "The long put caps the worst case at `(width − credit)`." },
        { term: "Probability of profit (POP)", def: "The estimated chance the trade finishes a winner — credit spreads aim high here." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Sell the `50` put @ `$2`, buy the `45` put @ `$0.80`; net credit `$1.20` (`$120`). Max profit is the credit, `$120`; max loss is `(5 − 1.20) × 100 = $380`; breakeven is `50 − 1.20 = $48.80`.",
    },
    {
      type: "list",
      items: [
        "Stock to `$55` → both puts worthless → `+$120` (keep the full credit).",
        "Stock to `$50` → also `+$120`.",
        "Stock to `$48.80` → breakeven, `$0`.",
        "Stock at or below `$45` → `−$380` (you risked `$380` to make `$120`).",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "An in-the-money short put can be **assigned** (early or at expiry), obligating you to buy at `$50`; the long `45` put caps the worst case but doesn't erase assignment hassle. Watch for *pin risk* at the short strike, and manage before expiration.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'a high win rate means low risk.'* Credit spreads win often — but each loss (`$380`) is **bigger** than each win (`$120`). Win 8 of 10 and you can still be down overall. **Position sizing** matters more than win rate.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial advice. Short options carry assignment risk.",
    },
  ],
};
