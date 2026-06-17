import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "real-costs-and-risks-of-margin",
  title: "The Real Costs & Risks of Margin",
  level: 3,
  moduleId: "markets-margin",
  moduleOrder: 5,
  summary:
    "Putting it together: daily interest, amplified drawdowns, forced selling at the lows, and how margin can leave you owing more than you ever invested.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "By now you know margin is a loan that amplifies returns. This lesson follows that loan all the way to the worst case — a **wipeout** — so you can see exactly how interest, leverage, and forced selling compound into a loss far larger than the stock's own decline.",
    },
    {
      type: "heading",
      text: "The interest drag",
    },
    {
      type: "text",
      body:
        "**Margin interest** accrues *daily* on your loan at the broker's **margin rate**, and you owe it whether you win or lose. That makes it a constant drag: you have to clear the interest just to break even — a **break-even drag** that quietly worsens every loss.",
    },
    {
      type: "heading",
      text: "Amplified drawdowns and forced selling",
    },
    {
      type: "text",
      body:
        "At `2:1`, your percentage **drawdown** doubles, so a *moderate* decline can breach maintenance and trigger forced selling. And **liquidation happens at the worst time**: brokers sell into weakness, often near the lows, with no duty to wait for a recovery. That can lock in a *permanent* loss. Worse still, you can lose **more than you invested** and be left owing a **debit balance**.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Margin interest", def: "Interest charged daily on your margin loan at the broker's rate, owed regardless of outcome." },
        { term: "Margin rate", def: "The annual interest rate the broker charges on borrowed funds." },
        { term: "Drawdown", def: "A peak-to-trough drop in account value — doubled at 2:1 versus the unleveraged move." },
        { term: "Debit balance", def: "Money you owe the broker when your account value falls below the loan." },
        { term: "Liquidation at the lows", def: "Forced selling into weakness near a bottom, crystallizing losses with no chance to recover." },
        { term: "Cash cushion", def: "Spare cash or unused buying power that absorbs declines before a call." },
        { term: "Break-even drag", def: "The return you must earn just to cover accruing interest before any profit." },
      ],
    },
    {
      type: "heading",
      text: "Worked example: a wipeout",
    },
    {
      type: "text",
      body:
        "Equity `$10,000`, you buy `$20,000` (loan `$10,000`). At roughly `9%`/yr, interest is about `$900`/yr ≈ `$75`/month — owed no matter what.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Stock falls `40%` to a `$12,000` value → equity `$12,000 − $10,000 = $2,000` = `16.7%`, below `25%` → margin call",
        "You can't add cash → broker liquidates at the low, repays the `$10,000` loan (+ interest) → roughly `$2,000` left of your `$10,000` (≈ `−80%` on a `−40%` move)",
        "Now a `−50%` gap instead: value `$10,000`, after repaying loan + interest your equity is about `$0` — wiped out, with any shortfall a **debit** you still owe",
        "An unleveraged investor who bought `$10,000` and fell `50%` still has `$5,000`",
      ],
    },
    {
      type: "text",
      body:
        "Mitigation isn't magic, but it helps: use **less than full** buying power, keep a **cash cushion**, and always account for interest in your math.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Edge case: a gap-down can liquidate you *below* the textbook trigger price, deepening the loss. And brokers can **raise house requirements** during volatility — so you can get a call even when the price has barely moved.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"Worst case, I just lose what I put in.\"* With margin you can lose **more** and owe a **debit balance**. Interest accrues the entire time, and forced selling crystallizes your losses at the bottom — exactly when you'd most want to wait. This is educational content, not financial advice.",
    },
  ],
};
