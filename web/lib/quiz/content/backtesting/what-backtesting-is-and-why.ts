import type { Question } from "@/lib/quiz/types";

// Quiz for the "What Backtesting Is (and What It Can't Tell You)" lesson.
export const questions: Question[] = [
  {
    id: "what-backtesting-is-and-why.q1",
    lessonSlug: "what-backtesting-is-and-why",
    type: "single",
    difficulty: "easy",
    tags: ["backtesting", "concept"],
    prompt: "What is the purpose of holding out an **out-of-sample** set?",
    choices: [
      { id: "a", text: "To check the strategy on data it was never tuned on" },
      { id: "b", text: "To have more data available for tuning the strategy", feedback: "If you tune on it, it's no longer out-of-sample — that defeats the purpose." },
      { id: "c", text: "To make the equity curve look smoother" },
      { id: "d", text: "To reduce transaction costs in the backtest" },
    ],
    correctId: "a",
    explanation:
      "Out-of-sample data is held back and used **once** to see whether the strategy generalizes to data it never saw during design and tuning.",
  },
  {
    id: "what-backtesting-is-and-why.q2",
    lessonSlug: "what-backtesting-is-and-why",
    type: "single",
    difficulty: "easy",
    tags: ["backtesting", "concept"],
    prompt: "A strategy can only be honestly backtested if it is…",
    choices: [
      { id: "a", text: "Profitable in at least one prior year" },
      { id: "b", text: "Fully specified and mechanical — no discretion" },
      { id: "c", text: "Based on fundamental analysis" },
      { id: "d", text: "Run on at least 20 years of data" },
    ],
    correctId: "b",
    explanation:
      "A backtest replays **mechanical rules**. If any step depends on a hunch, you can't replay it, so the test isn't honest.",
  },
  {
    id: "what-backtesting-is-and-why.q3",
    lessonSlug: "what-backtesting-is-and-why",
    type: "single",
    difficulty: "medium",
    tags: ["backtesting", "regulation", "concept"],
    prompt: "According to regulators, backtested performance is best described as…",
    choices: [
      { id: "a", text: "A reliable forecast of next year's returns" },
      { id: "b", text: "Equivalent to audited live results" },
      { id: "c", text: "Hypothetical — it does not reflect actual performance" },
      { id: "d", text: "Guaranteed if the data is clean" },
    ],
    correctId: "c",
    explanation:
      "Backtested results are **hypothetical**: they don't reflect actual performance, and past performance can't predict the future.",
  },
  {
    id: "what-backtesting-is-and-why.q4",
    lessonSlug: "what-backtesting-is-and-why",
    type: "single",
    difficulty: "medium",
    tags: ["backtesting", "scenario", "oos"],
    prompt:
      "A trader designs a strategy on `2010-2020`, peeks at `2021-2023`, tweaks the rules, then re-checks on `2021-2023`. What is true of that `2021-2023` set now?",
    choices: [
      { id: "a", text: "It is now effectively in-sample and no longer validates the strategy" },
      { id: "b", text: "It is still a clean out-of-sample test" },
      { id: "c", text: "It proves the strategy generalizes" },
      { id: "d", text: "It only matters if the tweaks were small", feedback: "Any tuning decision based on that data contaminates it, regardless of tweak size." },
    ],
    correctId: "a",
    explanation:
      "Peeking and then tuning against the data converts it to **in-sample**. It can no longer serve as an independent check.",
  },
  {
    id: "what-backtesting-is-and-why.q5",
    lessonSlug: "what-backtesting-is-and-why",
    type: "single",
    difficulty: "medium",
    tags: ["backtesting", "concept", "purpose"],
    prompt: "Which framing of a backtest is healthiest?",
    choices: [
      { id: "a", text: "A crystal ball that predicts future returns" },
      { id: "b", text: "A falsification tool to reject bad ideas cheaply" },
      { id: "c", text: "A guarantee that a passing strategy will profit" },
      { id: "d", text: "A substitute for live trading" },
    ],
    correctId: "b",
    explanation:
      "A backtest mainly lets you **reject** bad ideas cheaply. Passing one test isn't a blessing — it just means the idea survived once.",
  },
  {
    id: "what-backtesting-is-and-why.q6",
    lessonSlug: "what-backtesting-is-and-why",
    type: "single",
    difficulty: "medium",
    tags: ["backtesting", "definitions"],
    prompt: "Which best defines **in-sample** data?",
    choices: [
      { id: "a", text: "Data held back and used once to test generalization" },
      { id: "b", text: "Data used to design and tune the strategy" },
      { id: "c", text: "Data from after the strategy went live" },
      { id: "d", text: "Data that contains only survivors" },
    ],
    correctId: "b",
    explanation:
      "In-sample data is the slice you **design and tune** on. Out-of-sample is the held-back slice used once to check generalization.",
  },
  {
    id: "what-backtesting-is-and-why.q7",
    lessonSlug: "what-backtesting-is-and-why",
    type: "single",
    difficulty: "hard",
    tags: ["backtesting", "scenario", "limits"],
    prompt:
      "A strategy shows a beautiful equity curve across its full backtest. Which question can the backtest **least** answer?",
    choices: [
      { id: "a", text: "Did a historical edge exist over the tested period?" },
      { id: "b", text: "How deep were drawdowns across the sampled conditions?" },
      { id: "c", text: "Will it perform in a future regime not present in the data?" },
      { id: "d", text: "How did it behave during the periods it was tested on?" },
    ],
    correctId: "c",
    explanation:
      "A backtest can describe what happened in the data it saw, but it **cannot** tell you how the strategy fares in an unseen future regime.",
  },
  {
    id: "what-backtesting-is-and-why.q8",
    lessonSlug: "what-backtesting-is-and-why",
    type: "single",
    difficulty: "hard",
    tags: ["backtesting", "scenario", "oos"],
    prompt:
      "A trader tunes on `2005-2018`, then runs the locked `2019-2024` set and sees performance **collapse**. The most reasonable conclusion is…",
    choices: [
      { id: "a", text: "The in-sample result was likely noise that didn't generalize" },
      { id: "b", text: "The strategy is proven for live trading" },
      { id: "c", text: "They should re-run 2019-2024 after tweaking until it passes", feedback: "Re-running the OOS set after tweaking destroys its value — it becomes in-sample." },
      { id: "d", text: "The data must be corrupted" },
    ],
    correctId: "a",
    explanation:
      "An OOS collapse suggests the in-sample edge was **noise**. Re-running OOS after tweaks would only contaminate the one independent check you had.",
  },
];
