import type { Question } from "@/lib/quiz/types";

// Quiz for the "Sample Size & Statistical Significance" lesson.
export const questions: Question[] = [
  {
    id: "statistical-significance-and-sample-size.q1",
    lessonSlug: "statistical-significance-and-sample-size",
    type: "single",
    difficulty: "easy",
    tags: ["sample-size", "concept"],
    prompt: "In a backtest, the **sample size** refers to…",
    choices: [
      { id: "a", text: "The total dollar profit the strategy made" },
      { id: "b", text: "The number of independent trades or signals the backtest produced" },
      { id: "c", text: "The number of parameters the strategy uses" },
      { id: "d", text: "The length of the data file in megabytes" },
    ],
    correctId: "b",
    explanation:
      "**Sample size** is how many independent trades or signals the backtest generated — more trades make a given edge more believable.",
  },
  {
    id: "statistical-significance-and-sample-size.q2",
    lessonSlug: "statistical-significance-and-sample-size",
    type: "single",
    difficulty: "easy",
    tags: ["sample-size", "luck", "concept"],
    prompt:
      "A strategy goes `7-for-10` (a `70%` win rate) in a backtest. The most reasonable takeaway is…",
    choices: [
      { id: "a", text: "It has a strong, proven edge and is ready to trade" },
      { id: "b", text: "It must be overfit because the win rate is too high" },
      { id: "c", text: "Ten trades is far too few to tell skill from luck" },
      { id: "d", text: "The win rate guarantees future profits", feedback: "No backtest guarantees the future, and ten trades barely constrains the true win rate at all." },
    ],
    correctId: "c",
    explanation:
      "Getting `7` of `10` is well within the range of pure luck — like `7` heads in `10` coin flips. The sample is too small to conclude anything.",
  },
  {
    id: "statistical-significance-and-sample-size.q3",
    lessonSlug: "statistical-significance-and-sample-size",
    type: "single",
    difficulty: "medium",
    tags: ["sample-size", "significance", "math"],
    prompt:
      "The uncertainty in an estimated average shrinks roughly with `1 / √n`. To **halve** your error bar, you must…",
    choices: [
      { id: "a", text: "Double the number of trades" },
      { id: "b", text: "Add about ten more trades" },
      { id: "c", text: "Increase the trade count by 50%" },
      { id: "d", text: "Quadruple the number of trades" },
    ],
    correctId: "d",
    explanation:
      "Because the error scales with `1 / √n`, cutting it in half requires `4×` the sample. That's why going from `10` to `500` trades matters so much.",
  },
  {
    id: "statistical-significance-and-sample-size.q4",
    lessonSlug: "statistical-significance-and-sample-size",
    type: "single",
    difficulty: "medium",
    tags: ["outlier", "sample-size", "scenario"],
    prompt:
      "Across `12` trades, `11` roughly break even and one returns `+120%`, producing a glowing average. The best interpretation is…",
    choices: [
      { id: "a", text: "A single outlier is carrying the result — strip it out and the edge may vanish" },
      { id: "b", text: "The strategy clearly has a durable, repeatable edge" },
      { id: "c", text: "Outliers improve the reliability of small samples" },
      { id: "d", text: "Twelve trades is plenty to confirm the strategy", feedback: "Twelve trades is a tiny sample, and here a single trade — not the strategy — produced the headline number." },
    ],
    correctId: "a",
    explanation:
      "In a small sample one **outlier** can manufacture an apparent edge. Removing the single biggest winner is a fast test of whether the result is real.",
  },
  {
    id: "statistical-significance-and-sample-size.q5",
    lessonSlug: "statistical-significance-and-sample-size",
    type: "single",
    difficulty: "medium",
    tags: ["regime", "sample-size", "concept"],
    prompt:
      "A trend system is tested only over `2013-2019`, a long calm bull market, and racks up `400` trades. The key weakness is…",
    choices: [
      { id: "a", text: "Four hundred trades is too small a sample to mean anything" },
      { id: "b", text: "Trend systems can never be backtested reliably" },
      { id: "c", text: "All the trades came from a single market regime, so it was never stress-tested" },
      { id: "d", text: "A bull-market test overstates risk and understates return" },
    ],
    correctId: "c",
    explanation:
      "Many trades in **one regime** are redundant — the system never met a bear market or a volatility spike. Variety of conditions matters as much as trade count.",
  },
  {
    id: "statistical-significance-and-sample-size.q6",
    lessonSlug: "statistical-significance-and-sample-size",
    type: "single",
    difficulty: "medium",
    tags: ["law-of-large-numbers", "concept"],
    prompt: "The **law of large numbers** implies that, as the number of trades grows…",
    choices: [
      { id: "a", text: "The largest outlier grows in influence" },
      { id: "b", text: "The measured average drifts toward the strategy's true expected value" },
      { id: "c", text: "The strategy's true edge gets larger" },
      { id: "d", text: "Statistical significance becomes irrelevant" },
    ],
    correctId: "b",
    explanation:
      "As trades accumulate, the measured win rate and average return converge toward the strategy's *true* expected value — small samples sit far from that point.",
  },
  {
    id: "statistical-significance-and-sample-size.q7",
    lessonSlug: "statistical-significance-and-sample-size",
    type: "single",
    difficulty: "hard",
    tags: ["sample-size", "significance", "comparison"],
    prompt:
      "Which result is the **strongest** evidence of a genuine, durable edge?",
    choices: [
      { id: "a", text: "A `90%` win rate over `10` trades in one quiet year" },
      { id: "b", text: "A `+300%` return driven mostly by two trades" },
      { id: "c", text: "An `80%` win rate over `20` trades in a single bull market" },
      { id: "d", text: "A `55%` win rate over `600` trades spanning bull and bear markets" },
    ],
    correctId: "d",
    explanation:
      "A modest edge over a **large sample across multiple regimes** beats a flashy win rate over a handful of trades — though even this remains hypothetical, not a guarantee.",
  },
];
