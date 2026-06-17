import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "maintenance-margin-and-margin-calls",
  title: "Maintenance Margin & Margin Calls",
  level: 3,
  moduleId: "markets-margin",
  moduleOrder: 2,
  summary:
    "After you buy on margin, FINRA's 25% maintenance rule decides when a margin call fires — and what the broker can do if you can't meet it.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Reg T's `50%` rule applies the moment you *buy*. But what happens after, when the stock starts moving against you? That's where **maintenance margin** takes over — and it's the rule that can force you to sell at the worst possible moment.",
    },
    {
      type: "heading",
      text: "The 25% maintenance floor",
    },
    {
      type: "text",
      body:
        "**FINRA Rule 4210** requires your equity to stay at or above `25%` of the position's *current market value*. Many brokers set a stricter **house requirement** — often `30%` to `40%` or more. When more than one rule applies, the **greatest** one wins. When your equity slips below the maintenance level, the broker issues a **margin call**.",
    },
    {
      type: "heading",
      text: "Finding the trigger price",
    },
    {
      type: "text",
      body:
        "Your loan per share doesn't change as the stock falls — but the market value does. The price at which equity hits the maintenance floor is the **trigger price**:",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "`trigger price = loan per share ÷ (1 − maintenance %)`",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Maintenance margin", def: "The minimum equity you must keep — `25%` of current market value under FINRA Rule 4210." },
        { term: "House requirement", def: "A broker's own stricter maintenance level (often 30–40%+); the greatest applicable rule applies." },
        { term: "Margin call", def: "A demand to restore equity, issued when it drops below the maintenance level." },
        { term: "Trigger price", def: "The price at which equity hits the maintenance floor: `loan/share ÷ (1 − maintenance %)`." },
        { term: "Forced liquidation", def: "The broker selling your securities — possibly without notice or consent — to cover a deficit." },
        { term: "Equity %", def: "Equity divided by current market value." },
        { term: "Margin deficit", def: "The shortfall between your equity and the required maintenance equity." },
      ],
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "text",
      body:
        "You own 400 shares with a market value of `$20,000` and a `$10,000` loan, so equity is `$10,000`. Loan per share is `$10,000 ÷ 400 = $25`. With a `25%` maintenance requirement:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Trigger price: `$25 ÷ (1 − 0.25) = $33.33`",
        "Stock falls to `$30` → market value `$12,000`, equity `$12,000 − $10,000 = $2,000`",
        "Equity % = `$2,000 ÷ $12,000 = 16.7%`, which is below `25%` → margin call",
        "Required equity: `25% × $12,000 = $3,000`",
        "Margin deficit (the call): `$3,000 − $2,000 = $1,000`",
      ],
    },
    {
      type: "text",
      body:
        "You can meet that `$1,000` call three ways: deposit `$1,000` cash; deposit marginable securities worth `$1,000 ÷ (1 − 0.25) = $1,333`; or sell shares to pay down the loan.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Edge case: a house requirement above `25%` makes the call hit *sooner* — at a higher price. And in a fast, **gapping** market, the broker may liquidate immediately at a bad price with no grace period to find the cash.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"I'll always get a call and have time before they sell.\"* You won't necessarily. In a forced liquidation the broker can sell **without prior notice**, **without your consent**, can sell **more than needed** to fix the deficit, and **chooses which securities** to sell. They are not required to wait for you. This is educational content, not financial advice.",
    },
  ],
};
