import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "futures-contracts",
  title: "Futures Contracts",
  level: 2,
  moduleId: "markets-derivatives",
  moduleOrder: 4,
  summary: "An obligation marked-to-market daily — and why losses can exceed your margin.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "An option gives you a *right* you can walk away from. A **future** is different in kind: it's an **obligation**. Both sides *must* perform — and because gains and losses settle in cash *every single day*, a future can lose you more than the money you put up.",
    },
    { type: "heading", text: "What a futures contract is" },
    {
      type: "text",
      body:
        "A **futures contract** is an agreement to **buy or sell** a standardized quantity of an underlying at a set price on a set future date. It's an *obligation*, not a right — both sides must perform or close the position before expiry. Futures are standardized and exchange-traded, and a **clearinghouse** stands between the parties to guarantee both sides.",
    },
    { type: "heading", text: "Margin is a performance bond" },
    {
      type: "text",
      body:
        "**Margin** on a future is *not* a down payment — it's a **performance bond**, good-faith money that you'll honor the contract. You post **initial margin** to open the position, and you must keep the account above the **maintenance margin**, which acts as a floor.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Futures contract", def: "An obligation to buy or sell a standardized quantity at a set price on a set date." },
        { term: "Obligation (vs. right)", def: "Both sides *must* perform or close before expiry — unlike an option, which is a right." },
        { term: "Initial margin", def: "The performance bond posted to *open* a futures position." },
        { term: "Maintenance margin", def: "The minimum balance the account must stay above; a breach triggers a margin call." },
        { term: "Mark-to-market", def: "Daily settlement: each day's gain or loss is paid in cash between the parties." },
        { term: "Variation margin", def: "The cash that moves daily under mark-to-market — losers pay winners every day." },
        { term: "Notional value", def: "The full market value the contract controls; margin is only a small fraction of it." },
      ],
    },
    { type: "heading", text: "Daily mark-to-market" },
    {
      type: "text",
      body:
        "Futures are **marked-to-market** every day. The day's gain or loss is settled in cash as **variation margin** — in short, *losers pay winners every day*. If your balance drops below the maintenance margin, you get a **margin call**: deposit more or have the position liquidated. Because margin is only a small fraction of the **notional**, futures carry heavy leverage.",
    },
    { type: "heading", text: "Worked example (illustrative numbers)" },
    {
      type: "callout",
      tone: "info",
      body:
        "Margin numbers below are **illustrative only**. Real initial and maintenance margins are set by the exchange and your broker and change over time.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "You go long `1` index future where `1 point = $50`, entered at `5,000`. Initial margin `$12,000`, maintenance `$11,000`.",
        "**Day 1:** the index falls to `4,980` → `−20 points × $50 = −$1,000`. Balance drops to `$11,000` — right at maintenance.",
        "**Day 2:** it falls to `4,950` → `−30 points × $50 = −$1,500` more. Balance is now `$9,500`, which is below the `$11,000` maintenance → **margin call** (or liquidation).",
        "**Loss beyond margin:** suppose the index gaps to `4,700` → `−300 points × $50 = −$15,000`. That `$15,000` loss *exceeds* the `$12,000` initial margin — you still owe the difference.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Risk headline: futures losses can EXCEED your initial margin.** Because a future is an *obligation* settled daily, a gap or limit move can lose more than you deposited — you can owe more than you posted. That's the key difference from a *long option*, whose loss is capped at the premium. Educational only, not financial advice.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Holding a physically-settled contract to expiry can trigger actual *delivery* of the underlying, which is why most speculators close their positions before expiration.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Misconception: \"I can't lose more than the margin I put up.\"** Margin is a good-faith performance bond, not a maximum loss. Daily mark-to-market plus the obligation to perform mean a large adverse move can cost you *more* than your initial margin.",
    },
  ],
};
