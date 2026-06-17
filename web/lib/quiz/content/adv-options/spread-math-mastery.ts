import type { Question } from "@/lib/quiz/types";

// Quiz for the "Spread Math: Breakeven, Max Gain, Max Loss" lesson.
export const questions: Question[] = [
  {
    id: "spread-math-mastery.q1",
    lessonSlug: "spread-math-mastery",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "spreads", "breakeven"],
    unit: "$",
    prompt:
      "Bear put debit spread: long the `60` put @ `$5`, short the `55` put @ `$2`. What is the **breakeven**?",
    choices: [
      { id: "a", text: "$57" },
      { id: "b", text: "$58", feedback: "That uses the higher strike minus the credit; this is a debit spread — subtract the $3 net debit from the higher strike: 60 − 3 = 57." },
      { id: "c", text: "$55" },
      { id: "d", text: "$62" },
    ],
    correctId: "a",
    explanation:
      "Net debit = `5 − 2 = $3`. For a put debit spread, BE = higher strike − debit = `60 − 3 = $57`.",
  },
  {
    id: "spread-math-mastery.q2",
    lessonSlug: "spread-math-mastery",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "spreads", "max-gain"],
    unit: "$",
    prompt:
      "Same bear put spread (long `60` put @ `$5`, short `55` put @ `$2`). What is the **max gain** per contract?",
    choices: [
      { id: "a", text: "$200" },
      { id: "b", text: "$300", feedback: "$300 is the max loss (the net debit) — the max gain is width minus debit, not the debit itself." },
      { id: "c", text: "$500" },
      { id: "d", text: "$700" },
    ],
    correctId: "a",
    explanation:
      "Width `$5`, debit `$3`. Max gain = `(width − debit) × 100 = (5 − 3) × 100 = $200`. (Max loss = the `$300` debit.)",
  },
  {
    id: "spread-math-mastery.q3",
    lessonSlug: "spread-math-mastery",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "spreads", "credit", "max-loss"],
    unit: "$",
    prompt:
      "Bull put credit spread: short the `50` put @ `$3`, long the `45` put @ `$1`. What is the **max loss** per contract?",
    choices: [
      { id: "a", text: "$200" },
      { id: "b", text: "$300" },
      { id: "c", text: "$500", feedback: "That's the full width — but you keep the $2 credit, so the loss is width minus credit." },
      { id: "d", text: "$700" },
    ],
    correctId: "b",
    explanation:
      "Net credit = `3 − 1 = $2`. Width `$5`. Max loss = `(width − credit) × 100 = (5 − 2) × 100 = $300`.",
  },
  {
    id: "spread-math-mastery.q4",
    lessonSlug: "spread-math-mastery",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "spreads", "breakeven", "credit"],
    unit: "$",
    prompt:
      "Same bull put spread (short `50` put @ `$3`, long `45` put @ `$1`). What is the **breakeven**?",
    choices: [
      { id: "a", text: "$48" },
      { id: "b", text: "$52", feedback: "For a bull put, subtract the credit from the higher short strike: 50 − 2 = 48, not add it." },
      { id: "c", text: "$47" },
      { id: "d", text: "$45" },
    ],
    correctId: "a",
    explanation:
      "Bull put BE = higher short strike − net credit = `50 − 2 = $48`. (Max gain = the `$200` credit.)",
  },
  {
    id: "spread-math-mastery.q5",
    lessonSlug: "spread-math-mastery",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["fn:3", "spreads", "breakeven"],
    unit: "$",
    prompt:
      "Bull call debit spread: long the `50` call @ `$4`, short the `55` call @ `$1.50`. What is the **breakeven**?",
    choices: [
      { id: "a", text: "$52.50" },
      { id: "b", text: "$53.50", feedback: "That adds the debit to the wrong strike — BE on a call debit spread is the lower strike plus the debit: 50 + 2.50." },
      { id: "c", text: "$55.00" },
      { id: "d", text: "$57.50" },
    ],
    correctId: "a",
    explanation:
      "Net debit = `4 − 1.50 = $2.50`. Call-spread BE = lower strike + debit = `50 + 2.50 = $52.50`.",
  },
  {
    id: "spread-math-mastery.q6",
    lessonSlug: "spread-math-mastery",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "spreads", "max-gain"],
    unit: "$",
    prompt:
      "Same bull call spread (long `50` @ `$4`, short `55` @ `$1.50`). What is the **max gain** per contract?",
    choices: [
      { id: "a", text: "$250" },
      { id: "b", text: "$500", feedback: "That's the full width — the max gain is width minus the $2.50 debit." },
      { id: "c", text: "$150" },
      { id: "d", text: "$400" },
    ],
    correctId: "a",
    explanation:
      "Width `$5`, debit `$2.50`. Max gain = `(5 − 2.50) × 100 = $250`, realized at or above `$55`.",
  },
  {
    id: "spread-math-mastery.q7",
    lessonSlug: "spread-math-mastery",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "spreads", "concept"],
    prompt:
      "Why does `width = max gain + max loss` for **every** vertical spread?",
    choices: [
      { id: "a", text: "The two outcomes partition the full strike-width value of the spread between the buyer and seller" },
      { id: "b", text: "Because the multiplier is always 100" },
      { id: "c", text: "Because debit spreads and credit spreads have identical premiums" },
      { id: "d", text: "Because breakeven always sits at the midpoint of the strikes" },
    ],
    correctId: "a",
    explanation:
      "At expiration the spread is worth somewhere between `$0` and the full width. The premium splits that width into what you can gain and what you can lose, so the two always sum to the width.",
  },
  {
    id: "spread-math-mastery.q8",
    lessonSlug: "spread-math-mastery",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "spreads", "valuation"],
    unit: "$",
    prompt:
      "Bull call spread long `50` @ `$4` / short `55` @ `$1.50`. The stock closes at exactly `$55`. What is the per-contract profit?",
    choices: [
      { id: "a", text: "$250" },
      { id: "b", text: "$500", feedback: "$500 is the gross spread value at $55 — you still must subtract the $250 net debit you paid." },
      { id: "c", text: "$150" },
      { id: "d", text: "$0" },
    ],
    correctId: "a",
    explanation:
      "At `$55`: long `50` call = `$5`, short `55` call = `$0` → spread `$5` (`$500`). Subtract the `$250` debit → `+$250`.",
  },
];
