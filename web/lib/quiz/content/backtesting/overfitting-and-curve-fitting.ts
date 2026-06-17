import type { Question } from "@/lib/quiz/types";

// Quiz for the "Overfitting: When a Strategy Memorizes the Past" lesson.
export const questions: Question[] = [
  {
    id: "overfitting-and-curve-fitting.q1",
    lessonSlug: "overfitting-and-curve-fitting",
    type: "single",
    difficulty: "easy",
    tags: ["overfitting", "concept"],
    prompt: "An overfitted strategy has mostly captured…",
    choices: [
      { id: "a", text: "A durable, repeating signal" },
      { id: "b", text: "Random noise in the historical data" },
      { id: "c", text: "Transaction costs" },
      { id: "d", text: "The risk-free rate" },
    ],
    correctId: "b",
    explanation:
      "Overfitting captures **noise** — random, one-off quirks — rather than signal, which is why it fails out-of-sample.",
  },
  {
    id: "overfitting-and-curve-fitting.q2",
    lessonSlug: "overfitting-and-curve-fitting",
    type: "single",
    difficulty: "easy",
    tags: ["overfitting", "concept"],
    prompt: "Adding more parameters to a strategy generally…",
    choices: [
      { id: "a", text: "Reduces the risk of overfitting" },
      { id: "b", text: "Has no effect on generalization" },
      { id: "c", text: "Increases the ways it can bend around noise" },
      { id: "d", text: "Always raises out-of-sample returns" },
    ],
    correctId: "c",
    explanation:
      "Each extra parameter is another **degree of freedom** — another way to fit random noise. Degrees of freedom are a liability.",
  },
  {
    id: "overfitting-and-curve-fitting.q3",
    lessonSlug: "overfitting-and-curve-fitting",
    type: "single",
    difficulty: "medium",
    tags: ["overfitting", "scenario", "diagnosis"],
    prompt:
      "A system posts `+40%` CAGR in-sample but `−5%` CAGR out-of-sample. The most likely explanation is…",
    choices: [
      { id: "a", text: "Overfitting — the in-sample tuning captured noise" },
      { id: "b", text: "The strategy is robust and ready to trade" },
      { id: "c", text: "The out-of-sample data is too short to matter", feedback: "A swing from +40% to −5% is a textbook overfitting gap, not a data-length artifact." },
      { id: "d", text: "Transaction costs were too low" },
    ],
    correctId: "a",
    explanation:
      "A huge gap between strong in-sample and poor out-of-sample results is the classic **overfitting** signature.",
  },
  {
    id: "overfitting-and-curve-fitting.q4",
    lessonSlug: "overfitting-and-curve-fitting",
    type: "single",
    difficulty: "medium",
    tags: ["overfitting", "curve-fitting", "redflag"],
    prompt: "Which is the **strongest** red flag for curve-fitting?",
    choices: [
      { id: "a", text: "The strategy uses only two parameters" },
      { id: "b", text: "It works only at a 37-day lookback and collapses at 35 or 40" },
      { id: "c", text: "It has a clear economic rationale" },
      { id: "d", text: "Its win rate is around 55%" },
    ],
    correctId: "b",
    explanation:
      "A fragile **magic number** that works only at one precise value and collapses nearby signals curve-fitting. Robust edges degrade gracefully.",
  },
  {
    id: "overfitting-and-curve-fitting.q5",
    lessonSlug: "overfitting-and-curve-fitting",
    type: "single",
    difficulty: "medium",
    tags: ["overfitting", "robustness", "concept"],
    prompt: "Testing a **parameter plateau** rather than a single peak helps because…",
    choices: [
      { id: "a", text: "It guarantees higher returns" },
      { id: "b", text: "A broad range of values that all work suggests a stable, real effect" },
      { id: "c", text: "It eliminates the need for out-of-sample testing" },
      { id: "d", text: "It lowers transaction costs" },
    ],
    correctId: "b",
    explanation:
      "If neighboring parameter values all work, you've found a **plateau** — evidence of a stable effect rather than a fragile, fitted spike.",
  },
  {
    id: "overfitting-and-curve-fitting.q6",
    lessonSlug: "overfitting-and-curve-fitting",
    type: "single",
    difficulty: "medium",
    tags: ["overfitting", "definitions"],
    prompt: "What distinguishes **signal** from **noise**?",
    choices: [
      { id: "a", text: "Signal is random; noise is durable" },
      { id: "b", text: "Signal is a durable relationship that repeats; noise is random and won't recur" },
      { id: "c", text: "They are the same thing measured differently" },
      { id: "d", text: "Signal applies only to stocks; noise only to crypto" },
    ],
    correctId: "b",
    explanation:
      "**Signal** is a durable relationship that repeats; **noise** is random, one-off variation. Overfitting mistakes noise for signal.",
  },
  {
    id: "overfitting-and-curve-fitting.q7",
    lessonSlug: "overfitting-and-curve-fitting",
    type: "single",
    difficulty: "hard",
    tags: ["overfitting", "scenario", "parameters"],
    prompt:
      "Adding an 11th filter pushes in-sample CAGR from `28%` to `41%`. The best interpretation is…",
    choices: [
      { id: "a", text: "The strategy is clearly better now" },
      { id: "b", text: "More parameters likely increased overfitting — check the out-of-sample gap" },
      { id: "c", text: "The 11th filter must capture real signal" },
      { id: "d", text: "In-sample improvement guarantees live improvement", feedback: "In-sample gains from extra filters often reflect noise-fitting, not a real edge." },
    ],
    correctId: "b",
    explanation:
      "An in-sample jump from one more filter usually means more **noise-fitting**. The real test is whether the IS/OOS gap widened.",
  },
  {
    id: "overfitting-and-curve-fitting.q8",
    lessonSlug: "overfitting-and-curve-fitting",
    type: "single",
    difficulty: "hard",
    tags: ["overfitting", "scenario", "metrics"],
    prompt:
      "A backtest reports a profit factor near `9` and an implausibly high Sharpe. The most prudent reaction is…",
    choices: [
      { id: "a", text: "Suspect curve-fitting — results that good often mean the curve was fit" },
      { id: "b", text: "Increase position size immediately to exploit the edge" },
      { id: "c", text: "Conclude the strategy has no risk" },
      { id: "d", text: "Trust it because more profit is always better" },
    ],
    correctId: "a",
    explanation:
      "A profit factor far above `~4` and an implausible Sharpe usually signal **curve-fitting** rather than a genuine, durable edge.",
  },
];
