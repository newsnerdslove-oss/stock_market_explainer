import type { Question } from "@/lib/quiz/types";

// Quiz for the "Series 7 Options Problems: Worked End-to-End" lesson.
export const questions: Question[] = [
  {
    id: "options-exam-problems.q1",
    lessonSlug: "options-exam-problems",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "spreads", "credit", "max-gain"],
    unit: "$",
    prompt:
      "Bear call credit spread: short the `70` call @ `$3`, long the `75` call @ `$1`. What is the **max gain** per contract?",
    choices: [
      { id: "a", text: "$200" },
      { id: "b", text: "$300", feedback: "$300 is the max loss (width − credit); the max gain is the net credit collected." },
      { id: "c", text: "$500" },
      { id: "d", text: "$100" },
    ],
    correctId: "a",
    explanation:
      "Net credit = `3 − 1 = $2` (`$200`). For a credit spread, max gain = the net credit = `$200`.",
  },
  {
    id: "options-exam-problems.q2",
    lessonSlug: "options-exam-problems",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "spreads", "credit", "max-loss"],
    unit: "$",
    prompt:
      "Same bear call spread (short `70` @ `$3`, long `75` @ `$1`). What is the **max loss** per contract?",
    choices: [
      { id: "a", text: "$300" },
      { id: "b", text: "$200", feedback: "$200 is the max gain (the credit) — the max loss is width minus credit." },
      { id: "c", text: "$500" },
      { id: "d", text: "$700" },
    ],
    correctId: "a",
    explanation:
      "Width `$5`, credit `$2`. Max loss = `(5 − 2) × 100 = $300`.",
  },
  {
    id: "options-exam-problems.q3",
    lessonSlug: "options-exam-problems",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "spreads", "credit", "breakeven"],
    unit: "$",
    prompt:
      "Same bear call spread (short `70` @ `$3`, long `75` @ `$1`). What is the **breakeven**?",
    choices: [
      { id: "a", text: "$72" },
      { id: "b", text: "$68", feedback: "For a bear call, add the credit to the lower short strike: 70 + 2 = 72, don't subtract it." },
      { id: "c", text: "$73" },
      { id: "d", text: "$77" },
    ],
    correctId: "a",
    explanation:
      "Bear call BE = lower short strike + net credit = `70 + 2 = $72`.",
  },
  {
    id: "options-exam-problems.q4",
    lessonSlug: "options-exam-problems",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "straddle", "breakeven"],
    unit: "$",
    prompt:
      "Long straddle: buy the `50` call @ `$3` and the `50` put @ `$2.50`. What is the **upper breakeven**?",
    choices: [
      { id: "a", text: "$55.50" },
      { id: "b", text: "$53.00", feedback: "That adds only the call premium — a straddle uses total premium ($5.50): 50 + 5.50." },
      { id: "c", text: "$52.50" },
      { id: "d", text: "$44.50" },
    ],
    correctId: "a",
    explanation:
      "Total premium = `3 + 2.50 = $5.50`. Upper BE = strike + total = `50 + 5.50 = $55.50` (lower BE = `$44.50`).",
  },
  {
    id: "options-exam-problems.q5",
    lessonSlug: "options-exam-problems",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["fn:3", "straddle", "max-loss"],
    unit: "$",
    prompt:
      "Same long straddle (`50` call @ `$3`, `50` put @ `$2.50`). What is the **max loss** per contract?",
    choices: [
      { id: "a", text: "$550" },
      { id: "b", text: "$300", feedback: "That's only the call premium — the max loss is the total premium paid for both legs." },
      { id: "c", text: "$250" },
      { id: "d", text: "$1,100" },
    ],
    correctId: "a",
    explanation:
      "A long straddle's max loss is the total premium = `(3 + 2.50) × 100 = $550`, if the stock pins the strike.",
  },
  {
    id: "options-exam-problems.q6",
    lessonSlug: "options-exam-problems",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "spreads", "valuation"],
    unit: "$",
    prompt:
      "Long call vertical, debit `$1.75`, strikes `30/35`. The stock closes at `$33.10`. What is the per-contract profit?",
    choices: [
      { id: "a", text: "$135" },
      { id: "b", text: "$310", feedback: "$310 is the long call's intrinsic value — you still subtract the $1.75 debit paid." },
      { id: "c", text: "$175" },
      { id: "d", text: "$500" },
    ],
    correctId: "a",
    explanation:
      "At `$33.10`: long `30` call = `$3.10`, short `35` call = `$0` → spread `$3.10`. Minus the `$1.75` debit = `$1.35` → `+$135`.",
  },
  {
    id: "options-exam-problems.q7",
    lessonSlug: "options-exam-problems",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "butterfly", "max-gain"],
    unit: "$",
    prompt:
      "Long call butterfly: buy `60` @ `$6`, sell two `65` @ `$3`, buy `70` @ `$1.50`. What is the **max gain** per contract?",
    choices: [
      { id: "a", text: "$350" },
      { id: "b", text: "$500", feedback: "$500 is the adjacent-strike distance — subtract the $1.50 net debit." },
      { id: "c", text: "$150" },
      { id: "d", text: "$650" },
    ],
    correctId: "a",
    explanation:
      "Net debit = `6 − 6 + 1.50 = $1.50`. Max gain = `(5 − 1.50) × 100 = $350`, at exactly `$65`.",
  },
  {
    id: "options-exam-problems.q8",
    lessonSlug: "options-exam-problems",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "collar", "valuation"],
    unit: "$",
    prompt:
      "Own `100` shares @ `$48`; long `45` put @ `$0.90`; short `52` call @ `$0.70`. The stock closes at `$44`. What is the total P/L?",
    choices: [
      { id: "a", text: "−$320" },
      { id: "b", text: "−$300", feedback: "That ignores the $0.20 net premium debit — add it to the −$3 stock loss." },
      { id: "c", text: "−$400" },
      { id: "d", text: "−$20" },
    ],
    correctId: "a",
    explanation:
      "Put exercised → sell at `45`: stock loss `45 − 48 = −$3`. Net premium `−$0.20`. Total `−$3.20 × 100 = −$320` (the collar's max loss).",
  },
];
