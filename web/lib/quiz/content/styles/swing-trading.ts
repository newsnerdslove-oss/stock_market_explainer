import type { Question } from "@/lib/quiz/types";

// Quiz for the "Swing Trading: Catching the Multi-Day Move" lesson.
export const questions: Question[] = [
  {
    id: "swing-trading.q1",
    lessonSlug: "swing-trading",
    type: "single",
    difficulty: "easy",
    tags: ["styles", "swing", "holding-period"],
    prompt: "What's the typical holding period for swing trading?",
    choices: [
      { id: "a", text: "Seconds to minutes" },
      { id: "b", text: "Days to a few weeks" },
      { id: "c", text: "Closed before the session ends, never overnight" },
      { id: "d", text: "Several years" },
    ],
    correctId: "b",
    explanation:
      "Swing trading aims to capture a single multi-day move, so holds run **days to a few weeks** — and you hold overnight, which introduces gap risk.",
  },
  {
    id: "swing-trading.q2",
    lessonSlug: "swing-trading",
    type: "single",
    difficulty: "easy",
    tags: ["styles", "swing", "goal"],
    prompt: "The goal of a swing trade is to capture…",
    choices: [
      { id: "a", text: "A few ticks repeated hundreds of times a day" },
      { id: "b", text: "One 'swing' in price, like support to resistance or a breakout follow-through" },
      { id: "c", text: "A company's full multi-year growth" },
      { id: "d", text: "Daily dividend payments" },
    ],
    correctId: "b",
    explanation:
      "Swing trading targets a **single swing** — a move from support to resistance, a breakout that follows through, or a pullback that resumes the trend.",
  },
  {
    id: "swing-trading.q3",
    lessonSlug: "swing-trading",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "swing", "risk"],
    prompt: "What is the signature *main* risk of swing trading versus day trading?",
    choices: [
      { id: "a", text: "Overnight and weekend gap risk" },
      { id: "b", text: "Paying too many commissions from high frequency", feedback: "Swing traders trade far less than day traders, so cost drag is actually lower." },
      { id: "c", text: "Being forced to hold for years" },
      { id: "d", text: "Never being able to use a stop-loss" },
    ],
    correctId: "a",
    explanation:
      "Because you hold overnight, **gap risk** is the core hazard: price can open far from your stop, jumping right past it. Day traders, who close before the bell, avoid this.",
  },
  {
    id: "swing-trading.q4",
    lessonSlug: "swing-trading",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["styles", "swing", "math", "r-r"],
    prompt: "Entry **$50**, stop **$47**, target **$59**. What's the reward-to-risk (R:R)?",
    choices: [
      { id: "a", text: "1:1" },
      { id: "b", text: "2:1" },
      { id: "c", text: "3:1" },
      { id: "d", text: "9:1", feedback: "That ignores the risk side — reward $9 must be divided by risk $3." },
    ],
    correctId: "c",
    explanation:
      "Risk = `50 − 47 = $3`; reward = `59 − 50 = $9`. R:R = `9 ÷ 3 = 3:1`.",
  },
  {
    id: "swing-trading.q5",
    lessonSlug: "swing-trading",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["styles", "swing", "math", "sizing"],
    prompt:
      "Account **$20,000**, risk **1%** per trade, stop distance **$3/share**. About how many shares?",
    choices: [
      { id: "a", text: "20 shares" },
      { id: "b", text: "66 shares" },
      { id: "c", text: "200 shares" },
      { id: "d", text: "666 shares", feedback: "That risks 10% of the account, not 1% — re-check the dollar risk first." },
    ],
    correctId: "b",
    explanation:
      "1% of $20,000 = **$200** dollar risk. Shares = `$200 ÷ $3 ≈ 66`. Sizing always starts from a fixed dollar risk divided by the stop distance.",
  },
  {
    id: "swing-trading.q6",
    lessonSlug: "swing-trading",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "swing", "keyterm"],
    prompt: "A **pullback** entry means buying…",
    choices: [
      { id: "a", text: "A temporary counter-move against the prevailing trend, to join the trend at lower risk" },
      { id: "b", text: "A stock at its all-time high after a long run" },
      { id: "c", text: "Only after a company reports earnings" },
      { id: "d", text: "A stock the moment it gaps down on bad news" },
    ],
    correctId: "a",
    explanation:
      "A **pullback** is a temporary move against the trend. Buying into one is often a lower-risk way to join an existing trend, e.g. a bounce off a rising moving average.",
  },
  {
    id: "swing-trading.q7",
    lessonSlug: "swing-trading",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "swing", "misconception", "gap"],
    prompt: "Why can a stop-loss fail to cap your maximum loss on a swing trade?",
    choices: [
      { id: "a", text: "Stops are illegal on overnight positions" },
      { id: "b", text: "A stop is a trigger, not a guaranteed price — an overnight gap can fill far beyond it" },
      { id: "c", text: "Brokers cancel stops every night" },
      { id: "d", text: "Stops only work on stocks under $10" },
    ],
    correctId: "b",
    explanation:
      "A stop caps loss only in **continuous** trading. If price gaps overnight, the stop triggers at the next available price — which can be much worse — so size as if the fill could be worse than your stop.",
  },
  {
    id: "swing-trading.q8",
    lessonSlug: "swing-trading",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "swing", "earnings", "scenario"],
    prompt:
      "A swing trader plans to hold through tonight's **earnings report** 'to catch the move.' What's the disciplined read?",
    choices: [
      { id: "a", text: "Smart — earnings always move price your way" },
      { id: "b", text: "Earnings can gap straight past the stop; either size for that gap intentionally or close before the report" },
      { id: "c", text: "Fine, because a stop-loss guarantees the exit price" },
      { id: "d", text: "Only risky if the position is profitable already" },
    ],
    correctId: "b",
    explanation:
      "Earnings are a **binary event** that can gap past your stop. Holding through one is acceptable only if it's *intentional and sized for the gap*; otherwise the disciplined move is to close before the report.",
  },
  {
    id: "swing-trading.q9",
    lessonSlug: "swing-trading",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "swing", "regime", "scenario"],
    prompt:
      "A swing system has produced a string of **small losses** in a flat, sideways market. What's the most likely explanation?",
    choices: [
      { id: "a", text: "The system is broken and should be deleted" },
      { id: "b", text: "Swing setups need trends and swings; in chop they whipsaw — a known cost, not a defect" },
      { id: "c", text: "The trader's broker is sabotaging the fills" },
      { id: "d", text: "Position sizes were too small" },
    ],
    correctId: "b",
    explanation:
      "Swing trading needs a real swing to ride. **Choppy, range-bound** markets produce **whipsaw** losses — getting stopped repeatedly as price chops sideways. That's an expected condition for the style, not evidence it's broken.",
  },
  {
    id: "swing-trading.q10",
    lessonSlug: "swing-trading",
    type: "single",
    difficulty: "easy",
    tags: ["styles", "swing", "tradeoff"],
    prompt: "Compared with day trading, swing trading generally has…",
    choices: [
      { id: "a", text: "Higher cost drag and more screen time" },
      { id: "b", text: "Fewer trades, lower cost drag, and less screen time — but overnight event exposure" },
      { id: "c", text: "No risk at all once a stop is set" },
      { id: "d", text: "Guaranteed profits from holding longer" },
    ],
    correctId: "b",
    explanation:
      "Swing traders trade far less often, so they carry **lower cost drag and less screen time** than day traders — but in exchange they take on **overnight/weekend event exposure** (gap risk).",
  },
];
