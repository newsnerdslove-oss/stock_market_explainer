import type { Question } from "@/lib/quiz/types";

// Quiz for the "Rules vs Judgment, and Two Classic Edges" lesson.
export const questions: Question[] = [
  {
    id: "systematic-vs-discretionary-edges.q1",
    lessonSlug: "systematic-vs-discretionary-edges",
    type: "single",
    difficulty: "easy",
    tags: ["styles", "systematic", "definition"],
    prompt: "A trader who follows purely predefined rules with no in-the-moment judgment is…",
    choices: [
      { id: "a", text: "Discretionary" },
      { id: "b", text: "Systematic" },
      { id: "c", text: "A mean-reversion trader by definition" },
      { id: "d", text: "A scalper by definition" },
    ],
    correctId: "b",
    explanation:
      "**Systematic** (rules-based) trading follows predefined signals — if X, then trade. It's consistent and testable, but rigid when the regime changes.",
  },
  {
    id: "systematic-vs-discretionary-edges.q2",
    lessonSlug: "systematic-vs-discretionary-edges",
    type: "single",
    difficulty: "easy",
    tags: ["styles", "discretionary", "tradeoff"],
    prompt: "The main *downside* of discretionary trading is that it…",
    choices: [
      { id: "a", text: "Can never adapt to new conditions" },
      { id: "b", text: "Is prone to bias, inconsistency, and emotion" },
      { id: "c", text: "Is impossible to do without an algorithm" },
      { id: "d", text: "Always overfits historical data" },
    ],
    correctId: "b",
    explanation:
      "Discretionary trading is flexible and context-aware, but interpreting in the moment invites **bias, inconsistency, and emotion**. Many traders blend rules with judgment.",
  },
  {
    id: "systematic-vs-discretionary-edges.q3",
    lessonSlug: "systematic-vs-discretionary-edges",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "mean-reversion", "profile"],
    prompt: "What is the typical profile of a **mean-reversion** edge?",
    choices: [
      { id: "a", text: "High win rate, with occasional large losers" },
      { id: "b", text: "Low win rate, with a few large winners" },
      { id: "c", text: "Every trade wins a tiny amount" },
      { id: "d", text: "Equal-sized wins and losses" },
    ],
    correctId: "a",
    explanation:
      "Mean reversion buys weakness and sells strength expecting a snap-back, giving a **high win rate** — but the **occasional large loser** (when price keeps running) is the catch.",
  },
  {
    id: "systematic-vs-discretionary-edges.q4",
    lessonSlug: "systematic-vs-discretionary-edges",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "trend-following", "failure-mode"],
    prompt: "In which market does **trend following** tend to fail?",
    choices: [
      { id: "a", text: "Strong, sustained trends" },
      { id: "b", text: "Choppy, range-bound markets, where it gets whipsawed" },
      { id: "c", text: "High-liquidity blue chips only" },
      { id: "d", text: "Any market with high volume" },
    ],
    correctId: "b",
    explanation:
      "Trend following needs persistence. In **choppy, range-bound** markets it gets **whipsawed** — chopped in and out for a string of small losses.",
  },
  {
    id: "systematic-vs-discretionary-edges.q5",
    lessonSlug: "systematic-vs-discretionary-edges",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "edges", "complementary"],
    prompt: "Why are trend following and mean reversion often described as **complementary**?",
    choices: [
      { id: "a", text: "They use the exact same signals" },
      { id: "b", text: "Each one fails in the regime where the other works" },
      { id: "c", text: "Both only work in trending markets" },
      { id: "d", text: "Neither can be made systematic" },
    ],
    correctId: "b",
    explanation:
      "Trend following is paid in trends and whipsawed in ranges; mean reversion is paid in ranges and run over in trends. Because **each fails where the other works**, some traders run both.",
  },
  {
    id: "systematic-vs-discretionary-edges.q6",
    lessonSlug: "systematic-vs-discretionary-edges",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "backtesting", "overfitting"],
    prompt: "**Overfitting** a backtested system means…",
    choices: [
      { id: "a", text: "Tuning it so tightly to past data that it captures noise, not signal — then fails live" },
      { id: "b", text: "Trading too many shares per signal" },
      { id: "c", text: "Using a stop-loss that's too wide" },
      { id: "d", text: "Holding positions overnight" },
    ],
    correctId: "a",
    explanation:
      "Overfitting curve-fits a system to the past so tightly it models **noise**. It looks great in backtest and **fails live** once conditions differ.",
  },
  {
    id: "systematic-vs-discretionary-edges.q7",
    lessonSlug: "systematic-vs-discretionary-edges",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "edges", "scenario"],
    prompt:
      "A stock falls 12% in 3 days to a level it has bounced from before. Two traders look at the *same* chart and place *opposite* trades. Why?",
    choices: [
      { id: "a", text: "One of them misread the price" },
      { id: "b", text: "Mean reversion sees 'oversold at support, buy the bounce'; trend following sees 'lower lows, momentum down' — each built for a different regime" },
      { id: "c", text: "Opposite trades on the same chart are never rational" },
      { id: "d", text: "One trader has insider information" },
    ],
    correctId: "b",
    explanation:
      "Same chart, opposite trades: the **mean-reversion** trader buys the expected bounce; the **trend follower** sells/shorts or stands aside on the downtrend. Which is right depends entirely on the regime that follows.",
  },
  {
    id: "systematic-vs-discretionary-edges.q8",
    lessonSlug: "systematic-vs-discretionary-edges",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "trend-following", "whipsaw", "scenario"],
    prompt:
      "A trend-following system takes **8 small losses** during a sideways market. What's the soundest interpretation?",
    choices: [
      { id: "a", text: "The system is broken and must be replaced" },
      { id: "b", text: "Whipsaw is the expected failure mode of trend following in range-bound regimes" },
      { id: "c", text: "The trader sized positions far too large" },
      { id: "d", text: "Sideways markets are impossible to trade with any edge" },
    ],
    correctId: "b",
    explanation:
      "Range-bound markets are exactly where trend following struggles. A run of small losses (**whipsaw**) is the **expected failure mode** for the regime, not proof the system is broken.",
  },
  {
    id: "systematic-vs-discretionary-edges.q9",
    lessonSlug: "systematic-vs-discretionary-edges",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "mean-reversion", "failure-mode", "scenario"],
    prompt:
      "A trader keeps 'buying the dip' in a stock that's in a sustained downtrend, then takes one big loss. What happened?",
    choices: [
      { id: "a", text: "Bad luck unrelated to strategy" },
      { id: "b", text: "They applied a mean-reversion edge in a strong trend — its classic failure mode, where the cheap thing keeps getting cheaper" },
      { id: "c", text: "They should have bought even more dips" },
      { id: "d", text: "Trend following failed them" },
    ],
    correctId: "b",
    explanation:
      "Repeatedly buying the dip is **mean reversion**. In a **strong downtrend** that's its failure mode: the cheap thing keeps getting cheaper, and the rare large loser can erase a long streak of small wins.",
  },
  {
    id: "systematic-vs-discretionary-edges.q10",
    lessonSlug: "systematic-vs-discretionary-edges",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "systematic", "misconception"],
    prompt: "Why is 'systematic/algorithmic trading is automatically safer or guaranteed to win' a misconception?",
    choices: [
      { id: "a", text: "Algorithms can't actually place trades" },
      { id: "b", text: "Rules remove emotion, not risk — a system can be wrong for the regime or overfit to the past" },
      { id: "c", text: "Systematic trading is illegal for retail traders" },
      { id: "d", text: "Discretionary trading always beats systems" },
    ],
    correctId: "b",
    explanation:
      "A system removes **emotion** from the decision, not **risk** from the market. It can be flat wrong for the current regime, or curve-fit so tightly to the past that it breaks the moment conditions change.",
  },
];
