import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "cash-secured-put",
  title: "Cash-Secured Put: Getting Paid to Set a Buy Price",
  level: 3,
  moduleId: "markets-options",
  moduleOrder: 4,
  summary: "Name the price you'd happily buy at, set the cash aside, and collect premium for the wait.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "There's a stock you'd love to own — but only a bit cheaper. A **cash-secured put** pays you to wait: you sell a put at the price you'd be glad to buy at, set aside the cash to honor it, and pocket the premium whether or not the stock ever falls that far.",
    },
    { type: "heading", text: "How to build it" },
    {
      type: "list",
      items: [
        "**Sell 1 put** at a strike you'd happily buy the stock at.",
        "**Set aside `strike × 100`** in cash to secure it — no margin, no naked risk.",
        "The stance is **neutral-to-bullish**: happy to own at the strike, paid to wait either way.",
      ],
    },
    {
      type: "text",
      body:
        "Versus a plain **buy limit** order — which is free but pays you nothing — a cash-secured put earns premium for the same *'buy at about `$48`'* intent. The trade-off: the put **obligates** you to buy if assigned, and it **ties up cash** the whole time.",
    },
    {
      type: "payoff",
      legs: [{ instrument: "put", side: "short", strike: 50, premium: 2.3, qty: 1 }],
      title: "Cash-secured put payoff",
      caption: "Max profit = $230 premium; effective buy price $47.70; max loss $4,770.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Cash-secured put", def: "Selling a put while holding `strike × 100` in cash to cover the obligation." },
        { term: "Assignment", def: "Being required to buy the shares at the strike — here, the intended outcome." },
        { term: "Effective purchase price", def: "`strike − premium` — what you really pay if assigned (here `$47.70`)." },
        { term: "Naked put", def: "Selling a put *without* reserving the cash — far higher, leveraged risk." },
        { term: "Annualized yield", def: "The premium scaled to a yearly rate, to compare income across trades." },
        { term: "Obligation", def: "The seller's duty to buy at the strike if the put is exercised against them." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Sell 1 put, strike `$50`, for `$2.30` (`$230`), and set aside `$5,000`. Max profit is the premium, `$230`; max loss is `(50 − 2.30) × 100 = $4,770` (stock to zero); breakeven is `strike − premium = $47.70`.",
    },
    {
      type: "list",
      items: [
        "Stock to `$55` → put expires worthless; keep `+$230`.",
        "Stock to `$50` → still expires; keep `+$230`.",
        "Stock to `$47.70` → breakeven, `$0`.",
        "Stock to `$40` → assigned, buy at `$50` (worth `$40`); offset by `$230` → `−$770`, effective entry `$47.70`.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Here assignment is the **goal** — you buy at the strike with the reserved cash plus the premium cushion. A **naked** put (not cash-secured) is a different animal: leveraged, far higher risk, and short options always carry assignment risk.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'selling puts is free income.'* You carry nearly the **full downside** from the strike to zero (minus the premium) and you tie up cash the entire time. Max-loss math assumes you can fund the assignment.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial advice.",
    },
  ],
};
