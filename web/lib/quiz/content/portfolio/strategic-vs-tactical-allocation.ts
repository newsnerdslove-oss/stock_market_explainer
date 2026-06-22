import type { Question } from "@/lib/quiz/types";

// Quiz for the "Strategic vs. Tactical Allocation" lesson.
export const questions: Question[] = [
  {
    id: "strategic-vs-tactical-allocation.q1",
    lessonSlug: "strategic-vs-tactical-allocation",
    type: "single",
    difficulty: "easy",
    tags: ["portfolio", "strategic", "allocation"],
    prompt: "Strategic asset allocation is best described as…",
    choices: [
      { id: "a", text: "A short-term bet that markets will rise this quarter" },
      { id: "b", text: "The long-term target mix set from goals, risk tolerance, and horizon" },
      { id: "c", text: "Picking the single best-performing stock each year" },
      { id: "d", text: "Selling everything whenever the market drops" },
    ],
    correctId: "b",
    explanation:
      "**Strategic allocation** is the long-run target mix — e.g. `60/40` — chosen deliberately from your goals, risk tolerance, and time horizon. It's the level you keep rebalancing back to.",
  },
  {
    id: "strategic-vs-tactical-allocation.q2",
    lessonSlug: "strategic-vs-tactical-allocation",
    type: "single",
    difficulty: "easy",
    tags: ["portfolio", "tactical", "allocation"],
    prompt: "A tactical asset allocation tilt is…",
    choices: [
      { id: "a", text: "The same thing as your long-term strategic target" },
      { id: "b", text: "A permanent change that replaces your strategic mix" },
      { id: "c", text: "A deliberate, temporary shift away from the target to act on a market view" },
      { id: "d", text: "An automatic adjustment that requires no decision" },
    ],
    correctId: "c",
    explanation:
      "**Tactical allocation** is a deliberate, *temporary* tilt away from the strategic target to act on a view — for example overweighting stocks when you think they're cheap. It's bounded and meant to be unwound.",
  },
  {
    id: "strategic-vs-tactical-allocation.q3",
    lessonSlug: "strategic-vs-tactical-allocation",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "tactical", "overweight"],
    prompt:
      "Your strategic target is `60%` stocks. You become bullish and move stocks to `65%`. In allocation terms, you have…",
    choices: [
      { id: "a", text: "Underweighted stocks" },
      { id: "b", text: "Rebalanced back to target", feedback: "Rebalancing moves you *toward* the `60%` target; here you moved *away* from it to `65%`." },
      { id: "c", text: "Changed your strategic target to 65%" },
      { id: "d", text: "Overweighted stocks (and underweighted bonds)" },
    ],
    correctId: "d",
    explanation:
      "Holding *more* than the target weight is an **overweight**. Moving stocks from `60%` to `65%` overweights stocks and, since the rest is bonds, **underweights** bonds — a tactical tilt.",
  },
  {
    id: "strategic-vs-tactical-allocation.q4",
    lessonSlug: "strategic-vs-tactical-allocation",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["portfolio", "tactical", "math"],
    unit: "$",
    prompt:
      "Strategic target `60/40` on a `$200,000` portfolio. You tactically tilt to `65%` stocks / `35%` bonds. How much moves from bonds into stocks?",
    choices: [
      { id: "a", text: "$10,000" },
      { id: "b", text: "$5,000", feedback: "The 5-point tilt applies to the whole `$200,000`: `0.05 × 200,000 = $10,000`, not half that." },
      { id: "c", text: "$13,000" },
      { id: "d", text: "$130,000", feedback: "That's the *total* dollars in stocks after the tilt, not the amount you move to get there." },
    ],
    correctId: "a",
    explanation:
      "Target stocks `= 0.60 × 200,000 = $120,000`; tilt stocks `= 0.65 × 200,000 = $130,000`. The move is `$130,000 − $120,000 = $10,000` shifted from bonds into stocks.",
  },
  {
    id: "strategic-vs-tactical-allocation.q5",
    lessonSlug: "strategic-vs-tactical-allocation",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "bands", "tactical"],
    prompt:
      "Why do disciplined investors set bands (e.g. stocks may range `55–65%` around a `60%` target) for tactical tilts?",
    choices: [
      { id: "a", text: "To guarantee the tilt makes money" },
      { id: "b", text: "To eliminate the strategic target entirely" },
      { id: "c", text: "To cap how far a tactical bet can run, limiting the damage if the view is wrong" },
      { id: "d", text: "To force trading every single day" },
    ],
    correctId: "c",
    explanation:
      "**Bands** put guardrails around each target so a tactical tilt can't blow past a hard limit. They keep flexibility without abandoning the strategic plan — flexibility *inside* discipline.",
  },
  {
    id: "strategic-vs-tactical-allocation.q6",
    lessonSlug: "strategic-vs-tactical-allocation",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "core-satellite", "construction"],
    prompt: "In a core-satellite portfolio, the core is typically…",
    choices: [
      { id: "a", text: "A handful of speculative active bets" },
      { id: "b", text: "A large, low-cost, broadly diversified passive base aligned to the strategic mix" },
      { id: "c", text: "Held entirely in cash" },
      { id: "d", text: "A single concentrated stock position" },
    ],
    correctId: "b",
    explanation:
      "The **core** is the large, low-cost, passive base that delivers broad market exposure and tracks the strategic mix. The smaller **satellites** are where active or thematic tactical tilts live.",
  },
  {
    id: "strategic-vs-tactical-allocation.q7",
    lessonSlug: "strategic-vs-tactical-allocation",
    type: "single",
    difficulty: "hard",
    tags: ["portfolio", "misconception", "discipline"],
    prompt:
      "A friend says, \"Tactical allocation means I can move my whole portfolio in and out of stocks whenever I feel like it.\" The soundest correction is…",
    choices: [
      { id: "a", text: "Agreed — tactical means unlimited freedom to time the market" },
      { id: "b", text: "Tactical tilts must permanently replace your strategic target" },
      { id: "c", text: "Tactical allocation forbids ever deviating from the target" },
      { id: "d", text: "Done well, tactical tilts are bounded by pre-set bands around the strategic target — not unlimited timing" },
    ],
    correctId: "d",
    explanation:
      "Disciplined tactical allocation is **bounded** by bands around the strategic mix. Unbounded 'tactical' trading is just market timing, which tends to raise costs and risk more than returns.",
  },
];
