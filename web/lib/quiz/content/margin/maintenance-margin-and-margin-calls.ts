import type { Question } from "@/lib/quiz/types";

// Quiz for the "Maintenance Margin & Margin Calls" lesson.
export const questions: Question[] = [
  {
    id: "maintenance-margin-and-margin-calls.q1",
    lessonSlug: "maintenance-margin-and-margin-calls",
    type: "single",
    difficulty: "easy",
    tags: ["margin", "maintenance"],
    prompt: "FINRA Rule 4210 sets the minimum **maintenance margin** at what share of current market value?",
    choices: [
      { id: "a", text: "10%" },
      { id: "b", text: "25%" },
      { id: "c", text: "50%", feedback: "That's the Reg T *initial* requirement — maintenance is lower." },
      { id: "d", text: "75%" },
    ],
    correctId: "b",
    explanation:
      "FINRA requires equity to stay at or above `25%` of current market value. Brokers can set stricter house requirements.",
  },
  {
    id: "maintenance-margin-and-margin-calls.q2",
    lessonSlug: "maintenance-margin-and-margin-calls",
    type: "single",
    difficulty: "easy",
    tags: ["margin", "margin-call"],
    prompt: "A **margin call** is triggered when…",
    choices: [
      { id: "a", text: "Your equity falls below the maintenance requirement" },
      { id: "b", text: "Your stock rises above its purchase price" },
      { id: "c", text: "You pay off the entire loan" },
      { id: "d", text: "Reg T initial margin increases" },
    ],
    correctId: "a",
    explanation:
      "A margin call fires when equity drops below the maintenance level (the greater of FINRA's `25%` or the house requirement).",
  },
  {
    id: "maintenance-margin-and-margin-calls.q3",
    lessonSlug: "maintenance-margin-and-margin-calls",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["margin", "maintenance", "math"],
    unit: "%",
    prompt: "You hold `$20,000` of stock with a `$14,000` loan. At `25%` maintenance, is there a call? Equity is what % of market value?",
    choices: [
      { id: "a", text: "20%" },
      { id: "b", text: "25%" },
      { id: "c", text: "30% — no call" },
      { id: "d", text: "70%", feedback: "That's the loan as a share of value inverted — equity here is value minus loan, divided by value." },
    ],
    correctId: "c",
    explanation:
      "Equity = `$20,000 − $14,000 = $6,000`. `$6,000 ÷ $20,000 = 30%`, which is at or above `25%` — so no call.",
  },
  {
    id: "maintenance-margin-and-margin-calls.q4",
    lessonSlug: "maintenance-margin-and-margin-calls",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["margin", "trigger-price", "math"],
    unit: "$",
    prompt: "Your loan per share is `$25` and maintenance is `25%`. At what price does a margin call trigger?",
    choices: [
      { id: "a", text: "$18.75", feedback: "That multiplies by the maintenance % — the formula divides by (1 − maintenance %)." },
      { id: "b", text: "$31.25" },
      { id: "c", text: "$33.33" },
      { id: "d", text: "$50.00" },
    ],
    correctId: "c",
    explanation:
      "`trigger = loan/share ÷ (1 − maintenance %) = $25 ÷ (1 − 0.25) = $25 ÷ 0.75 = $33.33`.",
  },
  {
    id: "maintenance-margin-and-margin-calls.q5",
    lessonSlug: "maintenance-margin-and-margin-calls",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["margin", "margin-call", "math"],
    unit: "$",
    prompt: "Market value is `$12,000`, your equity is `$2,000`, maintenance is `25%`. How much **cash** meets the call?",
    choices: [
      { id: "a", text: "$1,000" },
      { id: "b", text: "$2,000" },
      { id: "c", text: "$3,000", feedback: "That's the *required* equity total — the call is the shortfall below it." },
      { id: "d", text: "$1,333" },
    ],
    correctId: "a",
    explanation:
      "Required equity = `25% × $12,000 = $3,000`. Deficit = `$3,000 − $2,000 = $1,000` of cash. (Depositing securities instead would take `$1,000 ÷ 0.75 = $1,333`.)",
  },
  {
    id: "maintenance-margin-and-margin-calls.q6",
    lessonSlug: "maintenance-margin-and-margin-calls",
    type: "single",
    difficulty: "medium",
    tags: ["margin", "meeting-call"],
    prompt: "Which of these does **not** satisfy a margin call?",
    choices: [
      { id: "a", text: "Depositing cash" },
      { id: "b", text: "Depositing marginable securities" },
      { id: "c", text: "Selling securities to reduce the loan" },
      { id: "d", text: "Waiting for the stock to maybe recover" },
    ],
    correctId: "d",
    explanation:
      "You meet a call by adding cash, adding marginable securities, or selling to pay down the loan. Hoping for a rebound isn't a remedy — and the broker may liquidate before any recovery.",
  },
  {
    id: "maintenance-margin-and-margin-calls.q7",
    lessonSlug: "maintenance-margin-and-margin-calls",
    type: "single",
    difficulty: "medium",
    tags: ["margin", "house-requirement"],
    prompt: "Your broker's house maintenance requirement is `35%` instead of FINRA's `25%`. What's the effect?",
    choices: [
      { id: "a", text: "The margin call triggers sooner — at a higher price" },
      { id: "b", text: "The margin call triggers later — at a lower price" },
      { id: "c", text: "Maintenance no longer applies" },
      { id: "d", text: "Reg T initial margin drops to 35%" },
    ],
    correctId: "a",
    explanation:
      "A higher maintenance requirement means you must keep more equity, so the call fires at a higher price — sooner. The greatest applicable requirement governs.",
  },
  {
    id: "maintenance-margin-and-margin-calls.q8",
    lessonSlug: "maintenance-margin-and-margin-calls",
    type: "single",
    difficulty: "hard",
    tags: ["margin", "scenario", "liquidation"],
    prompt:
      "Your stock gaps down overnight on bad news. Before you wake up, your broker sells your shares at the open to cover the deficit. Were they allowed to?",
    choices: [
      { id: "a", text: "No — they must give you 3 days' notice first" },
      { id: "b", text: "Yes — the broker can sell without prior notice or consent, and chooses which securities" },
      { id: "c", text: "No — they need your written approval for each sale" },
      { id: "d", text: "Only if you previously opted in to liquidation" },
    ],
    correctId: "b",
    explanation:
      "In a forced liquidation the broker can sell **without prior notice or consent**, can sell **more than needed**, and **chooses which securities**. A gapping market gives no grace period.",
  },
];
