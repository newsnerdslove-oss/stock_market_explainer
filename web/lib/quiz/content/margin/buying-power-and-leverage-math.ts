import type { Question } from "@/lib/quiz/types";

// Quiz for the "Buying Power & Leverage Math" lesson.
export const questions: Question[] = [
  {
    id: "buying-power-and-leverage-math.q1",
    lessonSlug: "buying-power-and-leverage-math",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["margin", "buying-power", "math"],
    unit: "$",
    prompt: "With `$15,000` of equity at Reg T `50%`, what is your buying power?",
    choices: [
      { id: "a", text: "$7,500" },
      { id: "b", text: "$15,000" },
      { id: "c", text: "$22,500" },
      { id: "d", text: "$30,000" },
    ],
    correctId: "d",
    explanation:
      "`$15,000 ÷ 0.50 = $30,000`. The `50%` rule gives 2:1 buying power.",
  },
  {
    id: "buying-power-and-leverage-math.q2",
    lessonSlug: "buying-power-and-leverage-math",
    type: "single",
    difficulty: "easy",
    tags: ["margin", "leverage"],
    prompt: "The **leverage ratio** is calculated as…",
    choices: [
      { id: "a", text: "Position size ÷ equity" },
      { id: "b", text: "Equity ÷ position size", feedback: "That's flipped — leverage is how large the position is relative to your equity." },
      { id: "c", text: "Loan ÷ market price" },
      { id: "d", text: "Equity × interest rate" },
    ],
    correctId: "a",
    explanation:
      "Leverage ratio = `position size ÷ equity`. Buying `$20,000` with `$10,000` equity is `2:1`.",
  },
  {
    id: "buying-power-and-leverage-math.q3",
    lessonSlug: "buying-power-and-leverage-math",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["margin", "leverage", "math"],
    unit: "%",
    prompt: "You're at `2:1` leverage and the stock rises `8%`. Roughly what's the return on your equity?",
    choices: [
      { id: "a", text: "4%" },
      { id: "b", text: "8%" },
      { id: "c", text: "16%" },
      { id: "d", text: "32%", feedback: "That's 4× — at 2:1 the amplification factor is 2, not 4." },
    ],
    correctId: "c",
    explanation:
      "`return on equity ≈ leverage × asset return = 2 × 8% = 16%` (before interest and fees).",
  },
  {
    id: "buying-power-and-leverage-math.q4",
    lessonSlug: "buying-power-and-leverage-math",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["margin", "leverage", "loss", "math"],
    unit: "%",
    prompt: "You bought a `$20,000` position with `$10,000` equity (loan `$10,000`). The stock drops `15%`. What's your equity now, as a % change?",
    choices: [
      { id: "a", text: "−7.5%" },
      { id: "b", text: "−15%" },
      { id: "c", text: "−30%" },
      { id: "d", text: "−45%" },
    ],
    correctId: "c",
    explanation:
      "Value falls to `$17,000`; equity = `$17,000 − $10,000 = $7,000`, down from `$10,000` → `−30%`. At 2:1, a `−15%` stock move is roughly `−30%` on equity.",
  },
  {
    id: "buying-power-and-leverage-math.q5",
    lessonSlug: "buying-power-and-leverage-math",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["margin", "leverage", "math"],
    unit: "$",
    prompt: "Equity `$10,000`, position `$20,000`, loan `$10,000`. The stock falls `25%`. How much equity is left?",
    choices: [
      { id: "a", text: "$2,500" },
      { id: "b", text: "$5,000" },
      { id: "c", text: "$7,500", feedback: "That subtracts 25% from your equity directly — but the loan is fixed, so the whole 25% loss hits your equity." },
      { id: "d", text: "$10,000" },
    ],
    correctId: "b",
    explanation:
      "Value drops to `$15,000`; equity = `$15,000 − $10,000 = $5,000` — half your money gone on a `−25%` move.",
  },
  {
    id: "buying-power-and-leverage-math.q6",
    lessonSlug: "buying-power-and-leverage-math",
    type: "single",
    difficulty: "medium",
    tags: ["margin", "cushion"],
    prompt: "Why is using *all* of your buying power risky?",
    choices: [
      { id: "a", text: "It leaves zero cushion, so even a modest dip can trigger a maintenance call" },
      { id: "b", text: "It lowers the Reg T initial requirement" },
      { id: "c", text: "It makes interest stop accruing" },
      { id: "d", text: "It guarantees a margin call only if the stock rises" },
    ],
    correctId: "a",
    explanation:
      "Maxing out leaves no cushion. A small decline can push equity below maintenance and force selling — possibly before any recovery.",
  },
  {
    id: "buying-power-and-leverage-math.q7",
    lessonSlug: "buying-power-and-leverage-math",
    type: "single",
    difficulty: "medium",
    tags: ["margin", "interest"],
    prompt: "How do margin interest and fees affect the leverage math?",
    choices: [
      { id: "a", text: "They reduce real returns and make the loss side worse" },
      { id: "b", text: "They only apply when you profit" },
      { id: "c", text: "They cancel out the leverage entirely" },
      { id: "d", text: "They are refunded if the stock falls" },
    ],
    correctId: "a",
    explanation:
      "Interest and fees come out of your returns regardless of outcome, dragging down gains and deepening losses.",
  },
  {
    id: "buying-power-and-leverage-math.q8",
    lessonSlug: "buying-power-and-leverage-math",
    type: "single",
    difficulty: "hard",
    tags: ["margin", "scenario", "leverage"],
    prompt:
      "Two investors each put in `$10,000`. One buys `$10,000` of stock (no margin); the other buys `$20,000` at 2:1. The stock falls `40%`. What happens?",
    choices: [
      { id: "a", text: "Both lose 40% of their money" },
      { id: "b", text: "Unleveraged loses $4,000 (−40%); leveraged is left with $2,000 (−80%)" },
      { id: "c", text: "The leveraged investor loses less because of the loan" },
      { id: "d", text: "Both are wiped out completely" },
    ],
    correctId: "b",
    explanation:
      "Unleveraged: `$10,000 × 0.60 = $6,000`, a `−$4,000` (`−40%`) loss. Leveraged: value `$12,000 − $10,000` loan = `$2,000`, a `−80%` loss. Same stock move, double the percentage damage.",
  },
];
