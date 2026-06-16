import type { Question } from "@/lib/quiz/types";

// Quiz for the "Psychology & the Plan: Process Over Prediction" lesson.
export const questions: Question[] = [
  {
    id: "trading-psychology-and-plan.q1",
    lessonSlug: "trading-psychology-and-plan",
    type: "single",
    difficulty: "easy",
    tags: ["styles", "psychology", "journal"],
    prompt: "A **trading journal** is mainly used to…",
    choices: [
      { id: "a", text: "Record every trade and the reasoning behind it, to review and improve discipline" },
      { id: "b", text: "Predict tomorrow's prices" },
      { id: "c", text: "Calculate your broker's commissions" },
      { id: "d", text: "Share your trades publicly for tips" },
    ],
    correctId: "a",
    explanation:
      "A journal logs **every trade plus the reasoning at the time**. Reviewed honestly, it exposes recurring mistakes and shows whether you actually followed the plan.",
  },
  {
    id: "trading-psychology-and-plan.q2",
    lessonSlug: "trading-psychology-and-plan",
    type: "single",
    difficulty: "easy",
    tags: ["styles", "psychology", "process"],
    prompt: "'Process over prediction' means you should judge yourself primarily on…",
    choices: [
      { id: "a", text: "Whether any single trade won money" },
      { id: "b", text: "Whether you followed your plan, since you control decisions not outcomes" },
      { id: "c", text: "How accurately you predicted the market direction" },
      { id: "d", text: "How many trades you placed that day" },
    ],
    correctId: "b",
    explanation:
      "You control your **decisions**, not outcomes. A sound plan followed can still lose, and a reckless gamble can still win — so judge the **process**, not the single result.",
  },
  {
    id: "trading-psychology-and-plan.q3",
    lessonSlug: "trading-psychology-and-plan",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "psychology", "plan"],
    prompt: "Which of these should a complete written **trading plan** define in advance?",
    choices: [
      { id: "a", text: "Only which stocks are popular this week" },
      { id: "b", text: "Setups, entry/exit rules, position sizing, max risk per trade, and a max daily/weekly loss" },
      { id: "c", text: "Just a profit goal for the year" },
      { id: "d", text: "Nothing — plans should stay flexible and unwritten" },
    ],
    correctId: "b",
    explanation:
      "A real plan decides everything *before* emotion is on the line: which **setups**, **entry/exit** rules, **position sizing**, **max risk per trade**, and a **max daily/weekly loss**, plus what to avoid.",
  },
  {
    id: "trading-psychology-and-plan.q4",
    lessonSlug: "trading-psychology-and-plan",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "psychology", "fomo"],
    prompt: "**FOMO** in trading typically leads a trader to…",
    choices: [
      { id: "a", text: "Wait patiently for a planned setup" },
      { id: "b", text: "Chase a move that already ran, abandoning the rules — often buying the top" },
      { id: "c", text: "Cut position size after a win" },
      { id: "d", text: "Stop trading for the rest of the day" },
    ],
    correctId: "b",
    explanation:
      "Fear of missing out drives traders to **chase a move that already ran**, abandoning their rules. It usually means buying the top.",
  },
  {
    id: "trading-psychology-and-plan.q5",
    lessonSlug: "trading-psychology-and-plan",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["styles", "psychology", "math", "discipline"],
    prompt:
      "Plan: risk 1% ($200 on $20k), stop after 2 losses. Trader takes −$200, −$200, then breaks the rule and loses **$600** more. What % of the account is the actual day, vs the planned 2%?",
    choices: [
      { id: "a", text: "Actual 5% vs planned 2%" },
      { id: "b", text: "Actual 2% vs planned 2%" },
      { id: "c", text: "Actual 3% vs planned 2%", feedback: "Add all three losses: 200 + 200 + 600 = $1,000 = 5% of $20k." },
      { id: "d", text: "Actual 10% vs planned 2%" },
    ],
    correctId: "a",
    explanation:
      "Total loss = `$200 + $200 + $600 = $1,000`, which is **5%** of $20,000. The planned bad day was **2%** (`−$400`). The extra came from broken discipline, not bad analysis.",
  },
  {
    id: "trading-psychology-and-plan.q6",
    lessonSlug: "trading-psychology-and-plan",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "psychology", "revenge", "scenario"],
    prompt:
      "After two planned losses, a trader doubles their size on an unplanned setup to 'get it back fast.' This is…",
    choices: [
      { id: "a", text: "Disciplined risk management" },
      { id: "b", text: "Revenge trading — it escalates risk and turns a small loss into a large one" },
      { id: "c", text: "A smart use of the trading plan" },
      { id: "d", text: "Normal position scaling" },
    ],
    correctId: "b",
    explanation:
      "Trying to win back a loss immediately with a bigger, unplanned trade is **revenge trading**. It reliably turns a small, planned loss into a large, unplanned one.",
  },
  {
    id: "trading-psychology-and-plan.q7",
    lessonSlug: "trading-psychology-and-plan",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "psychology", "risk-control"],
    prompt: "Why is a hard **max daily loss** limit valuable?",
    choices: [
      { id: "a", text: "It guarantees a profitable day" },
      { id: "b", text: "It keeps a bad day from becoming a disaster, helping you survive losing streaks" },
      { id: "c", text: "It forces you to trade more often" },
      { id: "d", text: "It removes the need for a stop-loss" },
    ],
    correctId: "b",
    explanation:
      "Small consistent risk per trade plus a **hard daily loss limit** keeps you in the game through losing streaks. Risk control — staying alive — is the real edge.",
  },
  {
    id: "trading-psychology-and-plan.q8",
    lessonSlug: "trading-psychology-and-plan",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "psychology", "process", "scenario"],
    prompt:
      "A trader exits exactly per their plan; the stock then keeps running higher without them. Was the exit wrong?",
    choices: [
      { id: "a", text: "Yes — leaving gains on the table is always a mistake" },
      { id: "b", text: "No — it was a good, plan-following decision; one outcome's luck doesn't make it wrong" },
      { id: "c", text: "Yes — they should have ignored the plan and held" },
      { id: "d", text: "Only wrong if the stock later falls" },
    ],
    correctId: "b",
    explanation:
      "Process over prediction: a **plan-following exit is a good decision** even when the outcome would have been better otherwise. You can't judge process by one lucky tail of the result distribution.",
  },
  {
    id: "trading-psychology-and-plan.q9",
    lessonSlug: "trading-psychology-and-plan",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "psychology", "journal", "edge-case"],
    prompt: "Why is an *unjournaled* plan less effective, even if it's well written?",
    choices: [
      { id: "a", text: "Plans must be journaled to be legal" },
      { id: "b", text: "Without review you can't catch the slow patterns quietly draining the account" },
      { id: "c", text: "Journaling guarantees you'll never lose" },
      { id: "d", text: "An unjournaled plan can't include a stop-loss" },
    ],
    correctId: "b",
    explanation:
      "A plan only helps if it's **followed and reviewed**. Without a journal you can't see the recurring mistakes — like ignoring the daily stop — that slowly drain the account.",
  },
  {
    id: "trading-psychology-and-plan.q10",
    lessonSlug: "trading-psychology-and-plan",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "psychology", "honest-framing", "misconception"],
    prompt: "What is the honest framing for this whole module on trading styles?",
    choices: [
      { id: "a", text: "Picking the right style is what makes traders rich" },
      { id: "b", text: "Discipline and risk control matter more than the style chosen — and most active traders still underperform buy-and-hold" },
      { id: "c", text: "Successful trading is mostly about predicting the market correctly" },
      { id: "d", text: "The fastest style always wins over time" },
    ],
    correctId: "b",
    explanation:
      "Across every style, **discipline and risk management** explain long-term survival more than the style itself — and **most active traders still underperform simple buy-and-hold**. Even good predictions lose without sizing and discipline. This is education, not financial advice.",
  },
];
