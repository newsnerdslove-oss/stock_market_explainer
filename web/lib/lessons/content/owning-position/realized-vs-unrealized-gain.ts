import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "realized-vs-unrealized-gain",
  title: "Realized vs. Unrealized Gain",
  level: 1,
  moduleId: "markets-owning-position",
  moduleOrder: 6,
  summary: "Why the gain on your screen isn't real until you sell — and isn't taxed until then either.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "Your brokerage app shows a green **+$300** next to a stock. Did you make $300? Not yet. That number is a **paper gain** — it exists only on screen. Until you actually sell, it isn't money in your pocket, and it can still vanish.",
    },
    {
      type: "text",
      body:
        "Every open position has a gain or loss measured against your **cost basis** — what you paid. The question is whether that gain is *realized* or *unrealized*. The difference decides whether you've truly profited and whether the tax form cares.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Unrealized gain/loss", def: "The paper profit or loss on a position you still hold — `current value − cost basis`. Also called *mark-to-market*." },
        { term: "Realized gain/loss", def: "The locked-in result once you **sell** — `proceeds − cost basis`. This is the number that's taxable." },
        { term: "Mark-to-market", def: "Valuing a position at its current market price to show today's unrealized gain or loss." },
        { term: "Taxable event", def: "An action — like selling — that triggers a tax consequence. Merely holding is *not* one." },
        { term: "Cost basis", def: "What you paid to acquire the position, including fees — the baseline for both kinds of gain." },
      ],
    },
    { type: "heading", text: "Paper until you sell" },
    {
      type: "text",
      body:
        "An **unrealized** gain is the difference between what your shares are worth right now and what you paid: `current value − cost basis`. It moves every second the market is open. It's real on the *screen*, but you haven't captured it — you still own the shares, and their price can swing in either direction.",
    },
    {
      type: "text",
      body:
        "The moment you **sell**, the gain becomes **realized**: `proceeds − cost basis`. Now it's locked in. The price can't take it back, because you no longer own the position. Selling is the act that turns a paper number into an actual result.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "list",
      ordered: true,
      items: [
        "You buy **100 shares @ $40** → cost basis = `$4,000`.",
        "The stock rises to **$55**. Your position is worth `$5,500`.",
        "Unrealized gain = `$5,500 − $4,000 = $1,500` — but you still hold the shares.",
        "You don't sell. The stock slips to **$42**, worth `$4,200`.",
        "Your unrealized gain is now only `$200`. The $1,500 was never yours to keep.",
        "You sell here at **$42** → realized gain = `$4,200 − $4,000 = $200`.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common trap: treating an unrealized gain as money you already have. Until you sell, it's a *snapshot* — it can grow, shrink, or flip to a loss. The only number you actually keep is the **realized** one.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Tax follows the same line. The IRS measures a capital gain or loss only **when you sell or otherwise dispose of** an asset — `the amount you realized − your adjusted basis`. Simply holding a stock that went up is **not a taxable event**; an unrealized gain isn't taxed, and an unrealized loss isn't deductible, until you sell. (Educational only — not tax advice.)",
    },
  ],
};
