import type { Question } from "@/lib/quiz/types";

// Quiz for the "Dividends" lesson.
export const questions: Question[] = [
  {
    id: "dividends.q1",
    lessonSlug: "dividends",
    type: "single",
    difficulty: "easy",
    tags: ["dividends", "definition"],
    prompt: "A **dividend** is…",
    choices: [
      { id: "a", text: "Cash a company pays shareholders out of its profits" },
      { id: "b", text: "A fee the broker charges to hold shares", feedback: "A dividend is money *paid to* you, not a fee you pay." },
      { id: "c", text: "The price increase of a stock over a year" },
      { id: "d", text: "A loan the company takes from shareholders" },
    ],
    correctId: "a",
    explanation:
      "A **dividend** is a cash payment a company makes to shareholders out of profits. Not all companies pay them — many growth firms reinvest instead.",
  },
  {
    id: "dividends.q2",
    lessonSlug: "dividends",
    type: "single",
    difficulty: "easy",
    tags: ["dividends", "yield", "formula"],
    prompt: "How is **dividend yield** calculated?",
    choices: [
      { id: "a", text: "Share price ÷ annual dividends per share" },
      { id: "b", text: "Annual dividends per share ÷ share price" },
      { id: "c", text: "Quarterly dividend × number of shares" },
      { id: "d", text: "Share price − dividends per share" },
    ],
    correctId: "b",
    explanation:
      "`dividend yield = annual DPS ÷ share price`, shown as a percent — the income rate the stock pays at today's price.",
  },
  {
    id: "dividends.q3",
    lessonSlug: "dividends",
    type: "numericChoice",
    difficulty: "medium",
    unit: "%",
    tags: ["dividends", "yield", "math"],
    prompt: "A stock pays **$0.50 per quarter** and trades at **$40**. What's its dividend yield?",
    choices: [
      { id: "a", text: "1.25%", feedback: "That uses just one quarter — annualize the dividend first." },
      { id: "b", text: "2%" },
      { id: "c", text: "5%" },
      { id: "d", text: "10%" },
    ],
    correctId: "c",
    explanation:
      "Annual DPS = `$0.50 × 4 = $2.00`. Yield = `$2.00 ÷ $40 = 5%`.",
  },
  {
    id: "dividends.q4",
    lessonSlug: "dividends",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["dividends", "payout", "math"],
    prompt: "You own **200 shares** of a stock paying **$0.50 per quarter** and held them before the ex-date. What's this quarter's payout?",
    choices: [
      { id: "a", text: "$100" },
      { id: "b", text: "$400", feedback: "$400 would be the *annual* total — the question asks for one quarter." },
      { id: "c", text: "$50" },
      { id: "d", text: "$200" },
    ],
    correctId: "a",
    explanation:
      "`payout = DPS × shares = $0.50 × 200 = $100` for the quarter.",
  },
  {
    id: "dividends.q5",
    lessonSlug: "dividends",
    type: "numericChoice",
    difficulty: "hard",
    unit: "$",
    tags: ["dividends", "payout", "math"],
    prompt:
      "A stock pays **$0.30 per quarter**. You own **500 shares**, all bought before the ex-date. How much will you collect over a full **year**?",
    choices: [
      { id: "a", text: "$150", feedback: "That's a single quarter — multiply the quarterly payout by 4 for the year." },
      { id: "b", text: "$600" },
      { id: "c", text: "$1,200" },
      { id: "d", text: "$300" },
    ],
    correctId: "b",
    explanation:
      "Quarterly payout = `$0.30 × 500 = $150`. Over four quarters: `$150 × 4 = $600`.",
  },
  {
    id: "dividends.q6",
    lessonSlug: "dividends",
    type: "single",
    difficulty: "medium",
    tags: ["dividends", "ex-date", "eligibility"],
    prompt: "To receive a dividend, you must own the shares…",
    choices: [
      { id: "a", text: "Before the ex-dividend date" },
      { id: "b", text: "On or after the ex-dividend date", feedback: "Buy on or after the ex-date and the *seller* keeps the dividend, not you." },
      { id: "c", text: "On the payment date only" },
      { id: "d", text: "On the declaration date only" },
    ],
    correctId: "a",
    explanation:
      "You must own the shares **before** the ex-dividend date. Buy on or after it and the seller gets the dividend.",
  },
  {
    id: "dividends.q7",
    lessonSlug: "dividends",
    type: "single",
    difficulty: "medium",
    tags: ["dividends", "dates", "settlement"],
    prompt: "Under today's **T+1** settlement, the **record date** falls…",
    choices: [
      { id: "a", text: "On the same day as the ex-dividend date" },
      { id: "b", text: "Two business days after the payment date" },
      { id: "c", text: "Before the declaration date" },
      { id: "d", text: "On the day the cash is paid out" },
    ],
    correctId: "a",
    explanation:
      "Under **T+1**, the **record date** falls on the **same day** as the ex-dividend date.",
  },
  {
    id: "dividends.q8",
    lessonSlug: "dividends",
    type: "single",
    difficulty: "hard",
    tags: ["dividends", "ex-date", "price-drop"],
    prompt: "On the ex-dividend date, the share price typically…",
    choices: [
      { id: "a", text: "Jumps up by the dividend amount" },
      { id: "b", text: "Drops by roughly the dividend amount" },
      { id: "c", text: "Stays exactly the same — the dividend is free money" },
      { id: "d", text: "Doubles to reflect the payout" },
    ],
    correctId: "b",
    explanation:
      "It's not free money: on the ex-date the price typically **drops by about the dividend amount**, since that cash is leaving the company.",
  },
  {
    id: "dividends.q9",
    lessonSlug: "dividends",
    type: "single",
    difficulty: "hard",
    tags: ["dividends", "misconception", "application"],
    prompt:
      "A friend plans to buy a stock the day before its **payment** date to \"grab the dividend.\" What's wrong with that plan?",
    choices: [
      { id: "a", text: "Nothing — owning before the payment date earns the dividend" },
      { id: "b", text: "Eligibility is set by the ex-dividend date, not the payment date" },
      { id: "c", text: "Dividends only go to shareholders who buy on the payment date" },
      { id: "d", text: "They'd owe the dividend back to the company" },
    ],
    correctId: "b",
    explanation:
      "Eligibility is locked by the **ex-dividend date**, not the payment date. Buying just before the payment date is far too late — own the shares before the ex-date.",
  },
  {
    id: "dividends.q10",
    lessonSlug: "dividends",
    type: "single",
    difficulty: "medium",
    tags: ["dividends", "tax", "qualified"],
    prompt: "In the U.S., **qualified** dividends are notable because they…",
    choices: [
      { id: "a", text: "Can be taxed at lower long-term rates if a holding test is met" },
      { id: "b", text: "Are always completely tax-free" },
      { id: "c", text: "Are taxed at double the ordinary income rate" },
      { id: "d", text: "Are paid only to short-sellers" },
    ],
    correctId: "a",
    explanation:
      "**Qualified** dividends can be taxed at lower long-term rates if a holding-period test is met, while ordinary dividends are taxed at regular income rates. (Educational only — not tax advice.)",
  },
];
