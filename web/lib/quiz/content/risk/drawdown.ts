import type { Question } from "@/lib/quiz/types";

// Quiz for the "Drawdown and the Recovery Asymmetry" lesson.
export const questions: Question[] = [
  {
    id: "drawdown.q1",
    lessonSlug: "drawdown",
    type: "numericChoice",
    difficulty: "easy",
    unit: "%",
    tags: ["risk", "drawdown", "math"],
    prompt:
      "An account peaks at `$20,000` and falls to `$14,000`. What's the drawdown?",
    choices: [
      { id: "a", text: "30%" },
      { id: "b", text: "6%", feedback: "That's the dollar drop ($6,000) read as a percent — divide by the $20,000 peak." },
      { id: "c", text: "43%" },
      { id: "d", text: "70%" },
    ],
    correctId: "a",
    explanation:
      "`Drawdown = (Peak − Trough) ÷ Peak = ($20,000 − $14,000) ÷ $20,000 = $6,000 ÷ $20,000 = 30%`.",
  },
  {
    id: "drawdown.q2",
    lessonSlug: "drawdown",
    type: "numericChoice",
    difficulty: "medium",
    unit: "%",
    tags: ["risk", "drawdown", "recovery", "math"],
    prompt:
      "After a `−25%` drawdown, what gain is needed to get back to the peak?",
    choices: [
      { id: "a", text: "25%", feedback: "That assumes symmetry — but you're climbing from a smaller base." },
      { id: "b", text: "33.3%" },
      { id: "c", text: "40%" },
      { id: "d", text: "50%" },
    ],
    correctId: "b",
    explanation:
      "`Gain = Loss ÷ (1 − Loss) = 0.25 ÷ 0.75 = 33.3%`.",
  },
  {
    id: "drawdown.q3",
    lessonSlug: "drawdown",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "drawdown", "scenario", "maxdd"],
    prompt:
      "Strategy A returns `+30%` but had a `−60%` max drawdown. Strategy B returns `+18%` with a `−15%` max drawdown. Which is preferable for survivability?",
    choices: [
      { id: "a", text: "B — A's −60% needs +150% to recover and is fragile", feedback: undefined },
      { id: "b", text: "A — the higher headline return always wins" },
      { id: "c", text: "They're equal because both are profitable" },
      { id: "d", text: "A — a bigger drawdown means bigger rebounds" },
    ],
    correctId: "a",
    explanation:
      "A `−60%` drawdown needs `0.60 ÷ 0.40 = +150%` just to recover and risks ruin in a bad run. B's shallow `−15%` (needs only `~+17.6%` back) makes its smaller return far more durable.",
  },
  {
    id: "drawdown.q4",
    lessonSlug: "drawdown",
    type: "numericChoice",
    difficulty: "hard",
    unit: "%",
    tags: ["risk", "drawdown", "recovery", "math"],
    prompt:
      "After a `−75%` drawdown, what gain is needed to recover?",
    choices: [
      { id: "a", text: "75%" },
      { id: "b", text: "100%" },
      { id: "c", text: "300%" },
      { id: "d", text: "400%", feedback: "Close, but `0.75 ÷ 0.25 = 3.0`, i.e. +300%, not +400%." },
    ],
    correctId: "c",
    explanation:
      "`Gain = 0.75 ÷ (1 − 0.75) = 0.75 ÷ 0.25 = 3.0 = +300%`. A quarter of the money must quadruple to get back.",
  },
  {
    id: "drawdown.q5",
    lessonSlug: "drawdown",
    type: "single",
    difficulty: "easy",
    tags: ["risk", "drawdown", "definition"],
    prompt:
      "What does drawdown measure?",
    choices: [
      { id: "a", text: "The percentage decline from a peak (high-water mark) to a trough" },
      { id: "b", text: "The total return since you opened the account" },
      { id: "c", text: "The number of losing trades in a row" },
      { id: "d", text: "The dividend yield of the portfolio" },
    ],
    correctId: "a",
    explanation:
      "`Drawdown = (Peak − Trough) ÷ Peak` — how far the account has fallen from its highest point.",
  },
  {
    id: "drawdown.q6",
    lessonSlug: "drawdown",
    type: "single",
    difficulty: "hard",
    tags: ["risk", "drawdown", "misconception"],
    prompt:
      "Why is *\"a 50% loss just needs a 50% gain\"* wrong?",
    choices: [
      { id: "a", text: "It's right — losses and gains are symmetric" },
      { id: "b", text: "After −50% you hold half your money, so you must double it: +100%" },
      { id: "c", text: "You actually need +75% after a 50% loss" },
      { id: "d", text: "A 50% loss can never be recovered at all" },
    ],
    correctId: "b",
    explanation:
      "`0.50 ÷ (1 − 0.50) = 1.0 = +100%`. Recovery is computed on the reduced base, so the required gain always exceeds the loss.",
  },
  {
    id: "drawdown.q7",
    lessonSlug: "drawdown",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "drawdown", "nonlinear"],
    prompt:
      "A `−50%` drawdown needs `+100%` to recover; a `−20%` drawdown needs `+25%`. What does this illustrate?",
    choices: [
      { id: "a", text: "Recovery scales linearly with the loss" },
      { id: "b", text: "The recovery climb grows disproportionately as losses deepen" },
      { id: "c", text: "Deeper losses are easier to recover from" },
      { id: "d", text: "All drawdowns need the same gain to recover" },
    ],
    correctId: "b",
    explanation:
      "The `−50%` loss is only `2.5×` the `−20%` loss, yet needs `+100%` versus `+25%` — four times the recovery. The relationship is nonlinear, which is why shallow drawdowns matter.",
  },
  {
    id: "drawdown.q8",
    lessonSlug: "drawdown",
    type: "single",
    difficulty: "hard",
    tags: ["risk", "drawdown", "edge-case"],
    prompt:
      "A `−100%` loss requires what gain to recover?",
    choices: [
      { id: "a", text: "An infinite gain — it's mathematically unrecoverable" },
      { id: "b", text: "Exactly +100%" },
      { id: "c", text: "+200%" },
      { id: "d", text: "+1000%" },
    ],
    correctId: "a",
    explanation:
      "`0.99... ÷ (1 − 1) ` divides by zero. With nothing left, no percentage gain restores the balance — a total loss can't be recovered. It's the limiting case of the asymmetry.",
  },
  {
    id: "drawdown.q9",
    lessonSlug: "drawdown",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["risk", "drawdown", "edge-case", "math"],
    prompt:
      "Your account fell to `$5,000` after a `−50%` drawdown, then gains `+100%`. What's the balance?",
    choices: [
      { id: "a", text: "$5,000" },
      { id: "b", text: "$10,000" },
      { id: "c", text: "$15,000", feedback: "The +100% applies to the reduced $5,000 base, not the original peak." },
      { id: "d", text: "$7,500" },
    ],
    correctId: "b",
    explanation:
      "`+100%` on the reduced `$5,000` base = `$5,000 × 2 = $10,000` — exactly back to the prior peak, no further. Recovery gains apply to the shrunken balance.",
  },
];
