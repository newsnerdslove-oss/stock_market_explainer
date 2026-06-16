import type { Question } from "@/lib/quiz/types";

// Quiz for the "Risk/Reward Ratio and Breakeven Win Rate" lesson.
export const questions: Question[] = [
  {
    id: "risk-reward-ratio.q1",
    lessonSlug: "risk-reward-ratio",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["risk", "risk-reward", "math"],
    prompt:
      "Entry `$100`, stop `$95`, target `$115`. What is the risk/reward ratio?",
    choices: [
      { id: "a", text: "1:1" },
      { id: "b", text: "2:1" },
      { id: "c", text: "3:1" },
      { id: "d", text: "5:1", feedback: "That uses only the reward ($15) and forgets to divide by the $5 risk." },
    ],
    correctId: "c",
    explanation:
      "Risk = `$100 − $95 = $5`. Reward = `$115 − $100 = $15`. `R:R = $15 ÷ $5 = 3:1`.",
  },
  {
    id: "risk-reward-ratio.q2",
    lessonSlug: "risk-reward-ratio",
    type: "numericChoice",
    difficulty: "medium",
    unit: "%",
    tags: ["risk", "risk-reward", "breakeven", "math"],
    prompt:
      "What is the breakeven win rate for a `2:1` risk/reward ratio?",
    choices: [
      { id: "a", text: "25%" },
      { id: "b", text: "33.3%" },
      { id: "c", text: "50%", feedback: "50% is the breakeven for 1:1; a 2:1 ratio lets you win less often." },
      { id: "d", text: "66.7%" },
    ],
    correctId: "b",
    explanation:
      "`Breakeven win rate = 1 ÷ (1 + R:R) = 1 ÷ (1 + 2) = 1/3 ≈ 33.3%`.",
  },
  {
    id: "risk-reward-ratio.q3",
    lessonSlug: "risk-reward-ratio",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "risk-reward", "scenario", "expectancy"],
    prompt:
      "Strategy A wins `70%` at `0.5:1`. Strategy B wins `35%` at `3:1`. Which has the stronger edge?",
    choices: [
      { id: "a", text: "B — its expectancy is +0.40R versus A's +0.05R", feedback: undefined },
      { id: "b", text: "A — a 70% win rate must beat a 35% one" },
      { id: "c", text: "Neither — both lose money over time" },
      { id: "d", text: "They're identical because the products cancel out" },
    ],
    correctId: "a",
    explanation:
      "A: `(0.70 × 0.5) − (0.30 × 1) = 0.35 − 0.30 = +0.05R`. B: `(0.35 × 3) − (0.65 × 1) = 1.05 − 0.65 = +0.40R`. Both are positive, but B's edge is far stronger — a high win rate can't rescue a poor ratio.",
  },
  {
    id: "risk-reward-ratio.q4",
    lessonSlug: "risk-reward-ratio",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["risk", "risk-reward", "expectancy", "math"],
    prompt:
      "At a `40%` win rate and `3:1` reward, what is the expectancy per trade (in R)?",
    choices: [
      { id: "a", text: "+0.2R" },
      { id: "b", text: "+0.6R" },
      { id: "c", text: "+1.2R", feedback: "That's only the win side; you must subtract the loss side (0.60 × 1)." },
      { id: "d", text: "−0.2R" },
    ],
    correctId: "b",
    explanation:
      "`Expectancy = (0.40 × 3) − (0.60 × 1) = 1.2 − 0.6 = +0.6R` per trade.",
  },
  {
    id: "risk-reward-ratio.q5",
    lessonSlug: "risk-reward-ratio",
    type: "single",
    difficulty: "easy",
    tags: ["risk", "risk-reward", "concept"],
    prompt:
      "What does the risk/reward ratio compare?",
    choices: [
      { id: "a", text: "Reward per share to risk per share" },
      { id: "b", text: "Win rate to loss rate" },
      { id: "c", text: "Share price to earnings" },
      { id: "d", text: "Account size to position size" },
    ],
    correctId: "a",
    explanation:
      "`R:R = reward per share ÷ risk per share`, where reward = `|Target − Entry|` and risk = `|Entry − Stop|`.",
  },
  {
    id: "risk-reward-ratio.q6",
    lessonSlug: "risk-reward-ratio",
    type: "single",
    difficulty: "hard",
    tags: ["risk", "risk-reward", "misconception"],
    prompt:
      "Why is *\"I need to win most of my trades to make money\"* misleading?",
    choices: [
      { id: "a", text: "Win rate is irrelevant; only the ratio matters" },
      { id: "b", text: "At 3:1 you break even at just a 25% win rate — it's win rate *and* R:R together" },
      { id: "c", text: "You actually need to win every trade" },
      { id: "d", text: "A high win rate always guarantees profit" },
    ],
    correctId: "b",
    explanation:
      "With a `3:1` ratio the breakeven win rate is `25%`, so you can lose most trades and still profit. Profitability comes from win rate and R:R together, not win rate alone.",
  },
  {
    id: "risk-reward-ratio.q7",
    lessonSlug: "risk-reward-ratio",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["risk", "risk-reward", "expectancy", "math"],
    prompt:
      "Same `40%` win rate but only a `2:1` reward. What's the expectancy per trade (in R)?",
    choices: [
      { id: "a", text: "+0.6R", feedback: "That's the 3:1 figure; recompute the win side with reward = 2." },
      { id: "b", text: "+0.2R" },
      { id: "c", text: "+0.8R" },
      { id: "d", text: "0R" },
    ],
    correctId: "b",
    explanation:
      "`(0.40 × 2) − (0.60 × 1) = 0.8 − 0.6 = +0.2R`. Same win rate as the 3:1 case, but a third of the edge — the ratio drives the result.",
  },
  {
    id: "risk-reward-ratio.q8",
    lessonSlug: "risk-reward-ratio",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "risk-reward", "realism"],
    prompt:
      "Why is a `5:1` ratio not automatically a great trade?",
    choices: [
      { id: "a", text: "Ratios above 3:1 are never allowed" },
      { id: "b", text: "It's meaningless if the target sits at a price the stock won't realistically reach" },
      { id: "c", text: "Higher ratios always require a 90% win rate" },
      { id: "d", text: "A 5:1 ratio increases your risk per share" },
    ],
    correctId: "b",
    explanation:
      "A ratio is only as good as its target's realism. A 5:1 set against a price the stock won't plausibly hit produces lots of losers and few winners. Set the target from structure first, then check the ratio.",
  },
  {
    id: "risk-reward-ratio.q9",
    lessonSlug: "risk-reward-ratio",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "risk-reward", "breakeven", "table"],
    prompt:
      "Which pairing of risk/reward ratio and breakeven win rate is correct?",
    choices: [
      { id: "a", text: "1:1 → 50%" },
      { id: "b", text: "3:1 → 50%" },
      { id: "c", text: "2:1 → 25%" },
      { id: "d", text: "1.5:1 → 33.3%" },
    ],
    correctId: "a",
    explanation:
      "`Breakeven = 1 ÷ (1 + R:R)`. So 1:1 → 50%, 1.5:1 → 40%, 2:1 → 33.3%, 3:1 → 25%. Only `1:1 → 50%` matches.",
  },
];
