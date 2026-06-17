import type { Question } from "@/lib/quiz/types";

// Quiz for the "Margin Accounts & Regulation T" lesson.
export const questions: Question[] = [
  {
    id: "margin-accounts-and-regulation-t.q1",
    lessonSlug: "margin-accounts-and-regulation-t",
    type: "single",
    difficulty: "easy",
    tags: ["margin", "regulation-t"],
    prompt: "Under Regulation T, the **initial margin** requirement on a new purchase is…",
    choices: [
      { id: "a", text: "25%" },
      { id: "b", text: "50%" },
      { id: "c", text: "100%" },
      { id: "d", text: "150%" },
    ],
    correctId: "b",
    explanation:
      "Reg T sets initial margin at `50%` — the broker may lend up to half the purchase price, and you must put up at least the other half.",
  },
  {
    id: "margin-accounts-and-regulation-t.q2",
    lessonSlug: "margin-accounts-and-regulation-t",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["margin", "buying-power", "math"],
    unit: "$",
    prompt: "You deposit `$8,000` into a margin account. At Reg T's `50%`, what's the most stock you can buy?",
    choices: [
      { id: "a", text: "$4,000", feedback: "That halves your cash — but margin lets you buy *more*, not less." },
      { id: "b", text: "$8,000" },
      { id: "c", text: "$16,000" },
      { id: "d", text: "$24,000" },
    ],
    correctId: "c",
    explanation:
      "`$8,000 ÷ 0.50 = $16,000`. Your `$8,000` plus an `$8,000` loan buys `$16,000` of stock.",
  },
  {
    id: "margin-accounts-and-regulation-t.q3",
    lessonSlug: "margin-accounts-and-regulation-t",
    type: "single",
    difficulty: "easy",
    tags: ["margin", "cash-account"],
    prompt: "What's the key difference between a **cash account** and a **margin account**?",
    choices: [
      { id: "a", text: "A cash account can hold stocks; a margin account can only hold cash" },
      { id: "b", text: "A cash account pays 100% with your own money; a margin account lets you borrow part of the purchase" },
      { id: "c", text: "A margin account is tax-free" },
      { id: "d", text: "A cash account charges interest; a margin account doesn't" },
    ],
    correctId: "b",
    explanation:
      "In a cash account you fund `100%` yourself. A margin account lets you borrow from the broker, using your securities as collateral — and that loan accrues interest.",
  },
  {
    id: "margin-accounts-and-regulation-t.q4",
    lessonSlug: "margin-accounts-and-regulation-t",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["margin", "equity", "math"],
    unit: "$",
    prompt: "You buy `$20,000` of stock with `$10,000` of your own cash and a `$10,000` margin loan. What is your **equity**?",
    choices: [
      { id: "a", text: "$5,000" },
      { id: "b", text: "$10,000" },
      { id: "c", text: "$20,000", feedback: "That's the market value — equity subtracts the loan you still owe." },
      { id: "d", text: "$30,000" },
    ],
    correctId: "b",
    explanation:
      "Equity = market value − loan = `$20,000 − $10,000 = $10,000` (exactly `50%` of the position).",
  },
  {
    id: "margin-accounts-and-regulation-t.q5",
    lessonSlug: "margin-accounts-and-regulation-t",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["margin", "buying-power", "math"],
    unit: "$",
    prompt: "With `$25,000` of equity in a margin account at Reg T `50%`, what is your maximum buying power?",
    choices: [
      { id: "a", text: "$12,500" },
      { id: "b", text: "$25,000" },
      { id: "c", text: "$50,000" },
      { id: "d", text: "$75,000" },
    ],
    correctId: "c",
    explanation:
      "`$25,000 ÷ 0.50 = $50,000`. The `50%` rule gives 2:1 buying power.",
  },
  {
    id: "margin-accounts-and-regulation-t.q6",
    lessonSlug: "margin-accounts-and-regulation-t",
    type: "single",
    difficulty: "medium",
    tags: ["margin", "house-requirement"],
    prompt: "Your broker requires you to put up `60%` on a certain volatile stock, even though Reg T allows `50%`. Is that allowed?",
    choices: [
      { id: "a", text: "Yes — firms can set stricter house requirements above the Reg T floor" },
      { id: "b", text: "No — Reg T sets a fixed 50% that brokers can't change" },
      { id: "c", text: "Only with written permission from the Federal Reserve" },
      { id: "d", text: "Only for accounts under $2,000" },
    ],
    correctId: "a",
    explanation:
      "Reg T's `50%` is a *floor*. Firms can impose stricter **house requirements** and can refuse to lend against volatile or low-priced (non-marginable) stocks.",
  },
  {
    id: "margin-accounts-and-regulation-t.q7",
    lessonSlug: "margin-accounts-and-regulation-t",
    type: "single",
    difficulty: "medium",
    tags: ["margin", "minimum"],
    prompt: "What minimum equity is generally required to open margin borrowing?",
    choices: [
      { id: "a", text: "$500" },
      { id: "b", text: "$2,000" },
      { id: "c", text: "$10,000" },
      { id: "d", text: "$25,000", feedback: "That figure relates to day-trading rules, not opening basic margin." },
    ],
    correctId: "b",
    explanation:
      "You generally need at least `$2,000` in equity to borrow on margin.",
  },
  {
    id: "margin-accounts-and-regulation-t.q8",
    lessonSlug: "margin-accounts-and-regulation-t",
    type: "single",
    difficulty: "hard",
    tags: ["margin", "scenario", "risk"],
    prompt:
      "A friend says: \"I'll switch to a margin account so I can double up — it's just extra buying power, what's the harm?\" What's the soundest reply?",
    choices: [
      { id: "a", text: "None — margin is free buying power with no downside" },
      { id: "b", text: "It's borrowed money secured by your stock; if shares drop you can be forced to sell and you still owe the loan plus interest" },
      { id: "c", text: "It only matters if you trade options" },
      { id: "d", text: "The risk is identical to a cash account" },
    ],
    correctId: "b",
    explanation:
      "Margin is a **loan secured by your shares**. A decline can force a sale, and you still owe the full loan plus accrued interest. It amplifies losses and can cost more than you invested.",
  },
];
