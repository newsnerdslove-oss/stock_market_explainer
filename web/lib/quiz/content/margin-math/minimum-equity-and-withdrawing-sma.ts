import type { Question } from "@/lib/quiz/types";

// Quiz for the "Minimum Equity & Withdrawing SMA" lesson.
export const questions: Question[] = [
  {
    id: "minimum-equity-and-withdrawing-sma.q1",
    lessonSlug: "minimum-equity-and-withdrawing-sma",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["fn:3", "margin", "minimum-equity"],
    unit: "$",
    prompt: "A customer buys `$3,000` of stock in a new margin account. Under FINRA 4210, what is the minimum deposit?",
    choices: [
      { id: "a", text: "$1,500", feedback: "That's the Reg T 50% amount, but the `$2,000` floor is higher and the trade price exceeds `$2,000`, so the floor applies." },
      { id: "b", text: "$2,000" },
      { id: "c", text: "$3,000", feedback: "That's the full purchase price. The `100%` cap only binds when the trade costs less than `$2,000`." },
      { id: "d", text: "$0", feedback: "A margin account carries a `$2,000` minimum equity floor; you can't open with nothing." },
    ],
    correctId: "b",
    explanation:
      "Required deposit = greater of {Reg T `50% = $1,500`, `$2,000` floor} = `$2,000`. The purchase ($3,000) exceeds $2,000, so the 100% cap doesn't bind.",
  },
  {
    id: "minimum-equity-and-withdrawing-sma.q2",
    lessonSlug: "minimum-equity-and-withdrawing-sma",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "margin", "minimum-equity", "lesser-of"],
    unit: "$",
    prompt: "A customer buys `$1,000` of stock in a new margin account. Under the lesser-of rule, what is the minimum deposit?",
    choices: [
      { id: "a", text: "$2,000", feedback: "Cash need not be deposited in excess of the cost of the security — you never put up more than `100%`." },
      { id: "b", text: "$500", feedback: "That's the Reg T 50% amount, but the rule requires full payment here, not half." },
      { id: "c", text: "$1,000" },
      { id: "d", text: "$1,500", feedback: "There's no $1,500 step here; the deposit is capped at the $1,000 purchase price." },
    ],
    correctId: "c",
    explanation:
      "FINRA 4210(b) caps the deposit at the cost of the security: cash need not be deposited in excess of the purchase. A `$1,000` buy needs `$1,000`, not the `$2,000` floor.",
  },
  {
    id: "minimum-equity-and-withdrawing-sma.q3",
    lessonSlug: "minimum-equity-and-withdrawing-sma",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "margin", "pdt"],
    prompt: "What was the legacy minimum equity requirement for a pattern day trader, and what is its current status?",
    choices: [
      { id: "a", text: "`$2,000`, still fully in force for all day traders" },
      { id: "b", text: "`$25,000`, being eliminated by FINRA Notice 26-10 (effective `2026-06-04`, phasing in to `2027-10-20`)" },
      { id: "c", text: "`$25,000`, permanently codified and unchanged" },
      { id: "d", text: "`$10,000`, replaced by a `$2,000` floor" },
    ],
    correctId: "b",
    explanation:
      "A pattern day trader (4+ day trades in 5 business days) had to keep `$25,000` under Rule 4210(f)(8). Notice 26-10 eliminates the PDT designation and the `$25,000` minimum, effective `2026-06-04` with phase-in to `2027-10-20`.",
  },
  {
    id: "minimum-equity-and-withdrawing-sma.q4",
    lessonSlug: "minimum-equity-and-withdrawing-sma",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "margin", "sma", "withdrawal"],
    prompt: "When a customer withdraws SMA as cash from a margined long account, what happens to the debit balance and equity?",
    choices: [
      { id: "a", text: "Both stay the same — it's just the customer's own cash leaving" },
      { id: "b", text: "Debit falls and equity rises" },
      { id: "c", text: "Debit stays the same and equity rises" },
      { id: "d", text: "Debit rises and equity falls, each by the amount withdrawn" },
    ],
    correctId: "d",
    explanation:
      "A cash withdrawal of SMA is funded by additional borrowing: the debit rises by the cash taken and equity falls by the same amount. It is an extra loan, not a transfer of the customer's own funds.",
  },
  {
    id: "minimum-equity-and-withdrawing-sma.q5",
    lessonSlug: "minimum-equity-and-withdrawing-sma",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "margin", "sma"],
    unit: "$",
    prompt: "A long account has `LMV = $20,000` and `DR = $9,000`. How much SMA does it have?",
    choices: [
      { id: "a", text: "$11,000", feedback: "That's the equity itself, not the excess above the Reg T requirement." },
      { id: "b", text: "$5,000", feedback: "That's the 25% maintenance figure. SMA is measured against the 50% Reg T requirement." },
      { id: "c", text: "$1,000" },
      { id: "d", text: "$2,000", feedback: "There's no $2,000 step here; SMA is equity minus the 50% Reg T requirement." },
    ],
    correctId: "c",
    explanation:
      "`EQ = $20,000 − $9,000 = $11,000`; Reg T requirement `= 50% × $20,000 = $10,000`; SMA = excess equity `= $11,000 − $10,000 = $1,000`.",
  },
  {
    id: "minimum-equity-and-withdrawing-sma.q6",
    lessonSlug: "minimum-equity-and-withdrawing-sma",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "margin", "sma", "withdrawal"],
    unit: "$",
    prompt: "From `LMV = $20,000`, `DR = $9,000` (`SMA = $1,000`), the customer withdraws the full `$1,000` of SMA. What is the new debit balance?",
    choices: [
      { id: "a", text: "$10,000" },
      { id: "b", text: "$8,000", feedback: "A withdrawal raises the debit, not lowers it — the cash is borrowed." },
      { id: "c", text: "$9,000", feedback: "The debit moves: withdrawing SMA adds `$1,000` of borrowing to the `$9,000` debit." },
      { id: "d", text: "$11,000", feedback: "That's the old equity, not the debit. The debit rises by the `$1,000` withdrawn, to `$10,000`." },
    ],
    correctId: "a",
    explanation:
      "The `$1,000` cash is advanced by the broker, so `DR → $9,000 + $1,000 = $10,000`. Equity falls to `$20,000 − $10,000 = $10,000` and SMA → `$0`.",
  },
  {
    id: "minimum-equity-and-withdrawing-sma.q7",
    lessonSlug: "minimum-equity-and-withdrawing-sma",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "margin", "sma", "maintenance"],
    unit: "$",
    prompt: "A long account shows `LMV = $20,000`, `DR = $14,000`, and a recorded `SMA = $8,000`. How much cash can actually be withdrawn without breaching the `25%` maintenance floor?",
    choices: [
      { id: "a", text: "$8,000", feedback: "That's the full recorded SMA, but withdrawing it all would push equity below the maintenance floor." },
      { id: "b", text: "$0", feedback: "Equity ($6,000) is above the $5,000 floor, so there is $1,000 of room to withdraw." },
      { id: "c", text: "$1,000" },
      { id: "d", text: "$5,000", feedback: "That's the maintenance requirement, not the withdrawable amount." },
    ],
    correctId: "c",
    explanation:
      "`EQ = $20,000 − $14,000 = $6,000`; maintenance floor `= 25% × $20,000 = $5,000`. Only `$6,000 − $5,000 = $1,000` can be withdrawn before hitting the floor — even though `$8,000` of SMA is recorded.",
  },
];
