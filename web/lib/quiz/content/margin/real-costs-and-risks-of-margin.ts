import type { Question } from "@/lib/quiz/types";

// Quiz for the "The Real Costs & Risks of Margin" lesson.
export const questions: Question[] = [
  {
    id: "real-costs-and-risks-of-margin.q1",
    lessonSlug: "real-costs-and-risks-of-margin",
    type: "single",
    difficulty: "easy",
    tags: ["margin", "interest"],
    prompt: "Margin interest accrues…",
    choices: [
      { id: "a", text: "Only when your position loses money" },
      { id: "b", text: "Daily on the loan, whether you win or lose" },
      { id: "c", text: "Once a year, only if you profit" },
      { id: "d", text: "Never — margin loans are interest-free" },
    ],
    correctId: "b",
    explanation:
      "Interest accrues daily on the loan at the broker's margin rate, owed regardless of how the trade goes.",
  },
  {
    id: "real-costs-and-risks-of-margin.q2",
    lessonSlug: "real-costs-and-risks-of-margin",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["margin", "interest", "math"],
    unit: "$",
    prompt: "You borrow `$10,000` at a `9%`/yr margin rate. Roughly how much interest is that per year?",
    choices: [
      { id: "a", text: "$90" },
      { id: "b", text: "$450" },
      { id: "c", text: "$900" },
      { id: "d", text: "$1,800", feedback: "That doubles the rate — 9% of $10,000 is $900." },
    ],
    correctId: "c",
    explanation:
      "`9% × $10,000 = $900`/yr, roughly `$75`/month — owed whether you profit or not.",
  },
  {
    id: "real-costs-and-risks-of-margin.q3",
    lessonSlug: "real-costs-and-risks-of-margin",
    type: "single",
    difficulty: "medium",
    tags: ["margin", "liquidation"],
    prompt: "Why is forced liquidation especially damaging?",
    choices: [
      { id: "a", text: "It happens at the worst time — selling into weakness near the lows, locking in losses" },
      { id: "b", text: "It always waits for the stock to recover first" },
      { id: "c", text: "It cancels the loan interest you owe" },
      { id: "d", text: "It guarantees you break even" },
    ],
    correctId: "a",
    explanation:
      "Brokers sell into weakness, often near the bottom, with no duty to wait. That crystallizes a possibly permanent loss.",
  },
  {
    id: "real-costs-and-risks-of-margin.q4",
    lessonSlug: "real-costs-and-risks-of-margin",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["margin", "wipeout", "math"],
    unit: "$",
    prompt: "Equity `$10,000`, position `$20,000`, loan `$10,000`. The stock drops `50%` and you're liquidated (ignore interest). How much of your money is left?",
    choices: [
      { id: "a", text: "$5,000", feedback: "That's what an *unleveraged* investor would keep — leverage doubles the percentage loss." },
      { id: "b", text: "$2,000" },
      { id: "c", text: "About $0" },
      { id: "d", text: "$10,000" },
    ],
    correctId: "c",
    explanation:
      "Value falls to `$10,000`; repaying the `$10,000` loan leaves about `$0`. A `−50%` stock move wipes out a 2:1 position.",
  },
  {
    id: "real-costs-and-risks-of-margin.q5",
    lessonSlug: "real-costs-and-risks-of-margin",
    type: "single",
    difficulty: "medium",
    tags: ["margin", "mitigation"],
    prompt: "Which is a sensible way to reduce margin risk?",
    choices: [
      { id: "a", text: "Always use 100% of your buying power" },
      { id: "b", text: "Keep a cash cushion and use less than full buying power" },
      { id: "c", text: "Ignore interest since it's small" },
      { id: "d", text: "Hold only the most volatile stocks" },
    ],
    correctId: "b",
    explanation:
      "Using less than full buying power and keeping a cash cushion gives room to absorb dips before a call — and you should always account for accruing interest.",
  },
  {
    id: "real-costs-and-risks-of-margin.q6",
    lessonSlug: "real-costs-and-risks-of-margin",
    type: "single",
    difficulty: "medium",
    tags: ["margin", "house-requirement"],
    prompt: "During a volatile stretch, your broker raises its house maintenance requirement. What can happen?",
    choices: [
      { id: "a", text: "You could face a margin call even if the price has barely moved" },
      { id: "b", text: "Your interest rate automatically drops" },
      { id: "c", text: "Reg T initial margin falls to 25%" },
      { id: "d", text: "Nothing changes for existing positions" },
    ],
    correctId: "a",
    explanation:
      "A higher house requirement raises the equity you must keep, so a call can hit even without much price movement.",
  },
  {
    id: "real-costs-and-risks-of-margin.q7",
    lessonSlug: "real-costs-and-risks-of-margin",
    type: "single",
    difficulty: "hard",
    tags: ["margin", "scenario", "debit"],
    prompt:
      "After a sharp gap-down and liquidation, your account value is less than the loan you owe. What is this called, and what does it mean?",
    choices: [
      { id: "a", text: "A debit balance — you lost more than you invested and still owe the broker" },
      { id: "b", text: "A margin credit — the broker now owes you" },
      { id: "c", text: "A maintenance surplus — you're fine" },
      { id: "d", text: "A locate — you must borrow more shares" },
    ],
    correctId: "a",
    explanation:
      "When account value falls below the loan, the shortfall is a **debit balance** — proof that margin can cost you more than you ever put in.",
  },
  {
    id: "real-costs-and-risks-of-margin.q8",
    lessonSlug: "real-costs-and-risks-of-margin",
    type: "single",
    difficulty: "hard",
    tags: ["margin", "scenario", "liquidation"],
    prompt:
      "Your 2:1 position breaches maintenance on a `12%` intraday gap-down. The broker liquidates near the low; the stock recovers by midday. What's the lesson?",
    choices: [
      { id: "a", text: "Forced liquidation locked in the loss and excluded you from the rebound" },
      { id: "b", text: "You automatically benefited from the recovery" },
      { id: "c", text: "The broker had to wait until midday to sell" },
      { id: "d", text: "The interest was refunded to offset the loss" },
    ],
    correctId: "a",
    explanation:
      "Because you were sold out at the low, the recovery did you no good. Leverage forced the sale at the worst time and crystallized the loss.",
  },
];
