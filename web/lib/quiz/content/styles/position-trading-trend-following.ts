import type { Question } from "@/lib/quiz/types";

// Quiz for the "Position Trading: Riding the Longer Trend" lesson.
export const questions: Question[] = [
  {
    id: "position-trading-trend-following.q1",
    lessonSlug: "position-trading-trend-following",
    type: "single",
    difficulty: "easy",
    tags: ["styles", "position", "holding-period"],
    prompt: "Position trading typically holds for…",
    choices: [
      { id: "a", text: "Seconds to minutes" },
      { id: "b", text: "Minutes to hours" },
      { id: "c", text: "Weeks to months" },
      { id: "d", text: "Only intraday" },
    ],
    correctId: "c",
    explanation:
      "Position trading is the most patient active style, holding **weeks to months** and trading the fewest times of any active approach.",
  },
  {
    id: "position-trading-trend-following.q2",
    lessonSlug: "position-trading-trend-following",
    type: "single",
    difficulty: "easy",
    tags: ["styles", "position", "trend-following"],
    prompt: "The core premise of **trend following** is that…",
    choices: [
      { id: "a", text: "Prices always snap back to an average" },
      { id: "b", text: "An established move tends to persist, so you buy strength and sell weakness" },
      { id: "c", text: "Every trade should target a few cents" },
      { id: "d", text: "Markets are random and unbeatable" },
    ],
    correctId: "b",
    explanation:
      "Trend following bets that moves **persist**: you buy strength and sell weakness, accepting a low win rate in exchange for occasionally large winners.",
  },
  {
    id: "position-trading-trend-following.q3",
    lessonSlug: "position-trading-trend-following",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["styles", "position", "math", "sizing"],
    prompt:
      "You keep dollar risk constant but **widen the stop from $3 to $15** per share. Roughly what happens to your share count?",
    choices: [
      { id: "a", text: "It stays the same" },
      { id: "b", text: "It increases ~5×" },
      { id: "c", text: "It drops to about one-fifth" },
      { id: "d", text: "It doubles", feedback: "Risk = stop distance × shares. A 5× wider stop needs ~1/5 the shares, not 2×." },
    ],
    correctId: "c",
    explanation:
      "Dollar risk = **stop distance × shares**. The stop went 5× wider ($3 → $15), so to hold dollar risk constant you cut shares to about **one-fifth**. A wide stop simply means fewer shares.",
  },
  {
    id: "position-trading-trend-following.q4",
    lessonSlug: "position-trading-trend-following",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "position", "profile"],
    prompt: "Which win/loss profile is *normal and expected* for trend following?",
    choices: [
      { id: "a", text: "High win rate with occasional large losers" },
      { id: "b", text: "Low win rate, but a few big winners pay for many small losers" },
      { id: "c", text: "Nearly every trade wins a small amount" },
      { id: "d", text: "Equal wins and losses of equal size" },
    ],
    correctId: "b",
    explanation:
      "Trend following has a **low win rate with a large average winner**. The discipline is sitting through many small losers, because a few big winners carry the whole result.",
  },
  {
    id: "position-trading-trend-following.q5",
    lessonSlug: "position-trading-trend-following",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "position", "stops"],
    prompt: "Why does a position trader use a **wider** stop than a swing trader?",
    choices: [
      { id: "a", text: "To risk more money on each trade" },
      { id: "b", text: "So normal volatility doesn't shake them out of a months-long trend" },
      { id: "c", text: "Because brokers require it for long holds" },
      { id: "d", text: "To avoid ever taking a loss" },
    ],
    correctId: "b",
    explanation:
      "A months-long trend wobbles. A **wide stop** keeps normal volatility from shaking you out — and because you shrink the position to match, dollar risk stays controlled.",
  },
  {
    id: "position-trading-trend-following.q6",
    lessonSlug: "position-trading-trend-following",
    type: "single",
    difficulty: "easy",
    tags: ["styles", "position", "tradeoff"],
    prompt: "Among active styles, position trading generally has the…",
    choices: [
      { id: "a", text: "Highest trade count and cost drag" },
      { id: "b", text: "Fewest trades, so the lowest cost drag and time commitment" },
      { id: "c", text: "Most screen time required per day" },
      { id: "d", text: "Highest win rate of any style" },
    ],
    correctId: "b",
    explanation:
      "Holding weeks to months means the **fewest trades** of any active style, which gives the **lowest cost drag and time commitment**.",
  },
  {
    id: "position-trading-trend-following.q7",
    lessonSlug: "position-trading-trend-following",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "position", "misconception", "sizing"],
    prompt: "True or false: 'Wider stops are always riskier.' Pick the best correction.",
    choices: [
      { id: "a", text: "True — a wider stop always means a bigger loss" },
      { id: "b", text: "False — a wider stop with a correspondingly smaller position can carry the same or less dollar risk" },
      { id: "c", text: "True — risk depends only on the stop distance" },
      { id: "d", text: "False — wider stops are always safer than tight ones" },
    ],
    correctId: "b",
    explanation:
      "Risk = **stop distance × shares**. A wider stop paired with a **smaller position** can carry the same or even less dollar risk. The stop width alone tells you nothing about risk.",
  },
  {
    id: "position-trading-trend-following.q8",
    lessonSlug: "position-trading-trend-following",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "position", "drawdown", "scenario"],
    prompt:
      "A trend follower is up big, then gives back **30% of the open profit** before the trend finally breaks and they exit. What does this represent?",
    choices: [
      { id: "a", text: "A broken strategy that should be abandoned" },
      { id: "b", text: "The expected cost of trend following — you structurally give back some profit at every reversal" },
      { id: "c", text: "Proof they sized the position wrong" },
      { id: "d", text: "A sign the broker mishandled the exit" },
    ],
    correctId: "b",
    explanation:
      "Trend following **structurally gives back a chunk of profit at every reversal** — that giveback is the price of admission for catching the big move, not a defect.",
  },
  {
    id: "position-trading-trend-following.q9",
    lessonSlug: "position-trading-trend-following",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "position", "whipsaw", "scenario"],
    prompt:
      "Markets go sideways for months and a trend follower racks up a series of **small losses**. What's the disciplined response?",
    choices: [
      { id: "a", text: "Abandon the system immediately" },
      { id: "b", text: "Double position size to make it back faster" },
      { id: "c", text: "Follow the predefined rules — whipsaw is part of the cycle and often precedes the next trend" },
      { id: "d", text: "Switch to scalping until the market trends again" },
    ],
    correctId: "c",
    explanation:
      "Choppy markets cause **whipsaw** — a normal part of the trend-following cycle. The discipline is to keep following the rules; this stretch is when most people quit, often right before it starts working.",
  },
  {
    id: "position-trading-trend-following.q10",
    lessonSlug: "position-trading-trend-following",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "position", "honest-framing"],
    prompt: "Although position trading is the closest active style to investing, the honest framing is that…",
    choices: [
      { id: "a", text: "It always beats buy-and-hold because of the wider stops" },
      { id: "b", text: "For many people it is still beaten by simple buy-and-hold after costs and taxes" },
      { id: "c", text: "It carries no drawdown risk" },
      { id: "d", text: "It guarantees profit if you sit through pullbacks" },
    ],
    correctId: "b",
    explanation:
      "Position trading is close to investing, but it's still active — and for many people **simple buy-and-hold beats it after costs and taxes**. The big open drawdowns and trend reversals remain real risks.",
  },
];
