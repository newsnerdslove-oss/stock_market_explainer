import type { Question } from "@/lib/quiz/types";

// Quiz for the "Position Sizing: How Many Shares to Buy" lesson.
export const questions: Question[] = [
  {
    id: "position-sizing.q1",
    lessonSlug: "position-sizing",
    type: "numericChoice",
    difficulty: "easy",
    unit: "shares",
    tags: ["risk", "position-sizing", "math"],
    prompt:
      "Account `$20,000`, risk `1%`, entry `$30`, stop `$28`. How many shares?",
    choices: [
      { id: "a", text: "100" },
      { id: "b", text: "200", feedback: "That divides dollar risk by the *stop price*, not by risk per share." },
      { id: "c", text: "667" },
      { id: "d", text: "50" },
    ],
    correctId: "a",
    explanation:
      "Dollar risk = `$20,000 × 1% = $200`. Risk per share = `$30 − $28 = $2`. Shares = `$200 ÷ $2 = 100`.",
  },
  {
    id: "position-sizing.q2",
    lessonSlug: "position-sizing",
    type: "numericChoice",
    difficulty: "medium",
    unit: "shares",
    tags: ["risk", "position-sizing", "math"],
    prompt:
      "Account `$10,000`, risk `2%`, entry `$25`, stop `$24.50`. How many shares?",
    choices: [
      { id: "a", text: "8" },
      { id: "b", text: "200" },
      { id: "c", text: "400" },
      { id: "d", text: "100", feedback: "That uses a $2 risk per share — but the stop is only $0.50 away." },
    ],
    correctId: "c",
    explanation:
      "Dollar risk = `$10,000 × 2% = $200`. Risk per share = `$25 − $24.50 = $0.50`. Shares = `$200 ÷ $0.50 = 400`.",
  },
  {
    id: "position-sizing.q3",
    lessonSlug: "position-sizing",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "position-sizing", "scenario", "buying-power"],
    prompt:
      "Your `$10,000` account, risk `1%` (`$100`), gives a stop just `$0.10` away. The formula says buy `1,000` shares — a `$50,000` position. What should you do?",
    choices: [
      { id: "a", text: "Cap the size to your buying power — widen the stop or reduce shares", feedback: undefined },
      { id: "b", text: "Buy all 1,000 shares anyway; the dollar risk is still only $100" },
      { id: "c", text: "Use margin to fund the full $50,000 position", feedback: "Borrowing to chase a tight stop turns a noise wiggle into an outsized loss and ignores the buying-power check." },
      { id: "d", text: "Increase your risk % until the position fits" },
    ],
    correctId: "a",
    explanation:
      "A very tight stop can demand more shares than you can afford — `1,000 × $50 = $50,000` far exceeds a `$10,000` account. Always check `shares × entry` against buying power; either widen the stop or take fewer shares.",
  },
  {
    id: "position-sizing.q4",
    lessonSlug: "position-sizing",
    type: "single",
    difficulty: "easy",
    tags: ["risk", "position-sizing", "fixed-fractional"],
    prompt:
      "With fixed-fractional sizing, what happens to your position size after a string of losses shrinks the account?",
    choices: [
      { id: "a", text: "Position size automatically shrinks too" },
      { id: "b", text: "Position size stays fixed in dollars" },
      { id: "c", text: "Position size grows to win the money back", feedback: "That's martingale-style risk-chasing — the opposite of fixed-fractional sizing." },
      { id: "d", text: "Position size is unaffected by the account balance" },
    ],
    correctId: "a",
    explanation:
      "Fixed-fractional sizing takes a fixed *percentage* of equity, so as the account shrinks the dollar risk (`1R`) shrinks, and so does the share count. This auto-de-risking is the whole point.",
  },
  {
    id: "position-sizing.q5",
    lessonSlug: "position-sizing",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "position-sizing", "concept"],
    prompt:
      "In `Shares = (Account × Risk%) ÷ (Entry − Stop)`, what does the denominator represent?",
    choices: [
      { id: "a", text: "The share price" },
      { id: "b", text: "The risk per share" },
      { id: "c", text: "The total dollar risk" },
      { id: "d", text: "The position value" },
    ],
    correctId: "b",
    explanation:
      "`Entry − Stop` is the **risk per share** — what you lose on each share if the stop hits. Dividing total dollar risk by it gives the share count.",
  },
  {
    id: "position-sizing.q6",
    lessonSlug: "position-sizing",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["risk", "position-sizing", "math", "value-vs-risk"],
    prompt:
      "Account `$10,000`, risk `1%`, entry `$50`, stop `$48` → you buy `50` shares. What is the position *value*?",
    choices: [
      { id: "a", text: "$100" },
      { id: "b", text: "$2,500" },
      { id: "c", text: "$10,000", feedback: "The full account isn't deployed — value is shares × entry, not the account size." },
      { id: "d", text: "$96" },
    ],
    correctId: "b",
    explanation:
      "Position value = `shares × entry = 50 × $50 = $2,500`. Note this is the dollars deployed, while the *risk* is only `50 × $2 = $100`. Value and risk are different numbers.",
  },
  {
    id: "position-sizing.q7",
    lessonSlug: "position-sizing",
    type: "single",
    difficulty: "easy",
    tags: ["risk", "position-sizing", "misconception"],
    prompt:
      "Why is *\"I'll just buy `$1,000` of every stock\"* a flawed sizing rule?",
    choices: [
      { id: "a", text: "$1,000 is too small to matter" },
      { id: "b", text: "A flat dollar value ignores how far away the stop is" },
      { id: "c", text: "It buys too many shares of cheap stocks" },
      { id: "d", text: "Brokers don't allow round-dollar orders" },
    ],
    correctId: "b",
    explanation:
      "A fixed dollar **value** says nothing about risk: $1,000 with a wide stop risks far more than $1,000 with a tight stop. Size by **risk per share**, not by a flat position value.",
  },
  {
    id: "position-sizing.q8",
    lessonSlug: "position-sizing",
    type: "numericChoice",
    difficulty: "hard",
    unit: "shares",
    tags: ["risk", "position-sizing", "math", "short"],
    prompt:
      "A *short*: account `$10,000`, risk `1%`, entry `$40`, stop `$42`. How many shares?",
    choices: [
      { id: "a", text: "50" },
      { id: "b", text: "100" },
      { id: "c", text: "5" },
      { id: "d", text: "238", feedback: "That divides by the entry price; risk per share is the distance to the stop." },
    ],
    correctId: "a",
    explanation:
      "For a short, risk per share = `Stop − Entry = $42 − $40 = $2`. Dollar risk = `$10,000 × 1% = $100`. Shares = `$100 ÷ $2 = 50`.",
  },
  {
    id: "position-sizing.q9",
    lessonSlug: "position-sizing",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "position-sizing", "rounding"],
    prompt:
      "Your formula gives `45.45` shares. What do you do, and why?",
    choices: [
      { id: "a", text: "Round down to 45, to stay at or under your intended risk" },
      { id: "b", text: "Round up to 46, since it's closer to 45.45" },
      { id: "c", text: "Buy 45.45 fractional shares to hit the risk exactly" },
      { id: "d", text: "Round to 50 for a cleaner number" },
    ],
    correctId: "a",
    explanation:
      "Round **down** to `45` shares. Rounding up would push your dollar risk slightly above the 1R you set; rounding down keeps the loss at or just under your limit.",
  },
];
