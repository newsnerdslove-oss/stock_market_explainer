import type { Question } from "@/lib/quiz/types";

// Quiz for the "Margin for Naked (Uncovered) Option Writing" lesson.
export const questions: Question[] = [
  {
    id: "uncovered-option-margin.q1",
    lessonSlug: "uncovered-option-margin",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "margin", "covered-vs-naked"],
    prompt: "How much **additional option margin** is required to write a **covered** call against `100` shares you already own?",
    choices: [
      { id: "a", text: "20% of the underlying value" },
      { id: "b", text: "The premium plus 10% of the strike" },
      { id: "c", text: "None — the stock is the collateral" },
      { id: "d", text: "The full strike price in cash", feedback: "That describes cash-securing a put, not a covered call. A covered call needs no extra option margin." },
    ],
    correctId: "c",
    explanation:
      "A covered call is backed by the `100` shares you own, so there is **no additional option margin**. The steep margin formula applies only to **uncovered (naked)** writing.",
  },
  {
    id: "uncovered-option-margin.q2",
    lessonSlug: "uncovered-option-margin",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "margin", "rule-4210"],
    prompt: "Under FINRA Rule 4210, the **standard** naked-option requirement is the premium plus what, before the floor is checked?",
    choices: [
      { id: "a", text: "20% of the underlying value, minus any out-of-the-money amount" },
      { id: "b", text: "10% of the underlying value, minus any in-the-money amount", feedback: "10% is the floor, not the standard number, and the subtraction is the out-of-the-money amount." },
      { id: "c", text: "50% of the underlying value (Reg T initial margin)" },
      { id: "d", text: "20% of the strike price, plus any out-of-the-money amount" },
    ],
    correctId: "a",
    explanation:
      "The standard number is **premium + 20% of the underlying market value − the OTM amount**. The requirement is the **greater** of that and the premium + 10% floor.",
  },
  {
    id: "uncovered-option-margin.q3",
    lessonSlug: "uncovered-option-margin",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "margin", "otm"],
    prompt: "The **out-of-the-money amount** in the naked-option formula reduces which figure?",
    choices: [
      { id: "a", text: "Both the 20% number and the 10% floor equally" },
      { id: "b", text: "Only the 10% minimum floor" },
      { id: "c", text: "Only the 20% standard number; the floor still applies" },
      { id: "d", text: "Neither — it is added on top", feedback: "It is subtracted, not added — but only from the 20% standard number, never from the 10% floor." },
    ],
    correctId: "c",
    explanation:
      "The OTM amount is subtracted **only from the 20% standard number**. The **premium + 10% floor** still applies, so the requirement never falls to zero.",
  },
  {
    id: "uncovered-option-margin.q4",
    lessonSlug: "uncovered-option-margin",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "margin", "calculation"],
    unit: "",
    prompt:
      "A customer writes `1` naked `XYZ` `Aug 55` call @ `$3` with `XYZ` at `$52`. What is the **standard (20%) per-share** figure (before comparing to the floor)?",
    choices: [
      { id: "a", text: "$13.40" },
      { id: "b", text: "$10.40" },
      { id: "c", text: "$8.20", feedback: "$8.20 is the 10% floor (3 + 5.20). The 20% standard number subtracts the $3 OTM: 3 + 10.40 − 3." },
      { id: "d", text: "$15.40", feedback: "That adds the OTM amount instead of subtracting it. The call is $3 OTM, so subtract: 3 + 10.40 − 3." },
    ],
    correctId: "b",
    explanation:
      "Standard = premium + 20% of underlying − OTM = `3 + (0.20 × 52) − 3` = `3 + 10.40 − 3` = **`$10.40`** per share.",
  },
  {
    id: "uncovered-option-margin.q5",
    lessonSlug: "uncovered-option-margin",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "margin", "calculation"],
    unit: "",
    prompt:
      "Same trade: `1` naked `XYZ` `Aug 55` call @ `$3`, `XYZ` at `$52`. Standard = `$10.40`, floor = `$8.20` per share. What is the **total margin required** for the one contract?",
    choices: [
      { id: "a", text: "$820" },
      { id: "b", text: "$300", feedback: "$300 is just the premium received — the requirement is the greater-of figure ×100." },
      { id: "c", text: "$1,040" },
      { id: "d", text: "$1,860", feedback: "That sums the two figures; you take the greater of them, not the sum." },
    ],
    correctId: "c",
    explanation:
      "Take the **greater** of `$10.40` and `$8.20` = `$10.40` per share, then `×100` = **`$1,040`**.",
  },
  {
    id: "uncovered-option-margin.q6",
    lessonSlug: "uncovered-option-margin",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "margin", "puts"],
    prompt: "For a naked **put**, the **10% minimum floor** is computed on what base?",
    choices: [
      { id: "a", text: "10% of the underlying stock's market value" },
      { id: "b", text: "10% of the aggregate exercise (strike) price" },
      { id: "c", text: "10% of the premium received", feedback: "The full premium is added separately; the 10% is computed on the put's aggregate exercise price." },
      { id: "d", text: "10% of the in-the-money amount" },
    ],
    correctId: "b",
    explanation:
      "For a naked put the floor is **premium + 10% of the aggregate exercise price**. For a naked call the floor uses 10% of the **underlying's** market value instead.",
  },
  {
    id: "uncovered-option-margin.q7",
    lessonSlug: "uncovered-option-margin",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "margin", "risk"],
    prompt: "Why does a naked **call** carry the heaviest concern among these short-option positions?",
    choices: [
      { id: "a", text: "Its premium is always the largest" },
      { id: "b", text: "Its loss potential is theoretically unlimited as the stock rises" },
      { id: "c", text: "It can only be written in a cash account", feedback: "Naked writing requires a margin account; the real concern is the unlimited upside risk." },
      { id: "d", text: "It must be exercised at expiration" },
    ],
    correctId: "b",
    explanation:
      "A naked call has **theoretically unlimited risk** because the underlying can rise without bound — the reason the margin requirement is steep and rises as the stock climbs.",
  },
];
