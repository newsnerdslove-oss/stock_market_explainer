import type { Question } from "@/lib/quiz/types";

// Quiz for the "Risk Per Trade: The 1–2% Rule" lesson.
export const questions: Question[] = [
  {
    id: "risk-per-trade.q1",
    lessonSlug: "risk-per-trade",
    type: "numericChoice",
    difficulty: "easy",
    unit: "$",
    tags: ["risk", "risk-per-trade", "math"],
    prompt:
      "Account `$25,000`, risking `1.5%` per trade. How many dollars is that?",
    choices: [
      { id: "a", text: "$250" },
      { id: "b", text: "$375" },
      { id: "c", text: "$1,500", feedback: "That's 1.5% of $100,000 — recheck against the $25,000 balance." },
      { id: "d", text: "$3,750" },
    ],
    correctId: "b",
    explanation:
      "`$25,000 × 1.5% = $375`. That's your dollar risk (`1R`) for the trade.",
  },
  {
    id: "risk-per-trade.q2",
    lessonSlug: "risk-per-trade",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["risk", "risk-per-trade", "math", "streak"],
    prompt:
      "Account `$10,000`, risking `10%` each trade, with `5` losses in a row (each loss on the shrinking balance). What's left?",
    choices: [
      { id: "a", text: "$5,000", feedback: "That treats the losses as a flat 50% off the start — but each 10% is taken on a smaller balance." },
      { id: "b", text: "$5,905" },
      { id: "c", text: "$6,561" },
      { id: "d", text: "$9,044" },
    ],
    correctId: "b",
    explanation:
      "`$10,000 × 0.90^5 = $10,000 × 0.59049 ≈ $5,905`. Compounding losses on a shrinking balance, not flat subtraction.",
  },
  {
    id: "risk-per-trade.q3",
    lessonSlug: "risk-per-trade",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "risk-per-trade", "scenario", "correlation"],
    prompt:
      "You open `6` positions, each \"risking 1%,\" but all are semiconductor stocks. What's the real risk picture?",
    choices: [
      { id: "a", text: "It behaves like one ~6% bet, because the names are correlated", feedback: undefined },
      { id: "b", text: "It's six independent 1% bets, so total risk is tiny" },
      { id: "c", text: "Risk is exactly 1%, since each position is capped at 1%" },
      { id: "d", text: "Diversifying across 6 names removes the risk entirely", feedback: "Six names in one sector aren't diversified — they tend to fall together." },
    ],
    correctId: "a",
    explanation:
      "Highly correlated positions move together. Six semiconductor names each risking 1% can act like a single `~6%` bet if the sector drops — which is why you also cap *total open* risk.",
  },
  {
    id: "risk-per-trade.q4",
    lessonSlug: "risk-per-trade",
    type: "single",
    difficulty: "easy",
    tags: ["risk", "risk-per-trade", "concept"],
    prompt:
      "Why is `1%` per trade generally better than `5%` for a beginner?",
    choices: [
      { id: "a", text: "It guarantees more winning trades" },
      { id: "b", text: "Drawdowns stay small and survivable through a losing streak" },
      { id: "c", text: "It produces bigger profits per trade" },
      { id: "d", text: "It removes the need for a stop-loss" },
    ],
    correctId: "b",
    explanation:
      "Smaller risk-per-trade means a losing streak does far less damage. At 1% it takes roughly 69 straight losses to halve the account; at higher risk a streak can be ruinous.",
  },
  {
    id: "risk-per-trade.q5",
    lessonSlug: "risk-per-trade",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "risk-per-trade", "misconception"],
    prompt:
      "*\"Risking 2% means I can only lose 2% of my account in total.\"* What's wrong with this?",
    choices: [
      { id: "a", text: "Nothing — 2% per trade caps total losses at 2%" },
      { id: "b", text: "It's 2% *per trade*; consecutive losses compound far beyond 2%" },
      { id: "c", text: "2% is actually the maximum a broker allows" },
      { id: "d", text: "The rule means 2% of the position, not the account" },
    ],
    correctId: "b",
    explanation:
      "The rule caps damage from *one* trade. Across a streak the losses stack — ten 2% losses compound to roughly `−18%`, not `−2%`. It limits per-trade damage, not total drawdown.",
  },
  {
    id: "risk-per-trade.q6",
    lessonSlug: "risk-per-trade",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "risk-per-trade", "definition"],
    prompt:
      "\"Risk 1% per trade\" refers to 1% of what?",
    choices: [
      { id: "a", text: "1% of your account equity" },
      { id: "b", text: "A 1% move in the stock price" },
      { id: "c", text: "1% of the position's value" },
      { id: "d", text: "1% of the day's trading volume" },
    ],
    correctId: "a",
    explanation:
      "Risk-per-trade is a fraction of your **account equity** — on $10,000 that's $100. It is not a price move or a slice of the position value.",
  },
  {
    id: "risk-per-trade.q7",
    lessonSlug: "risk-per-trade",
    type: "single",
    difficulty: "hard",
    tags: ["risk", "risk-per-trade", "survival"],
    prompt:
      "Roughly how many *consecutive* losses does it take to halve an account at `1%` risk versus `10%` risk per trade?",
    choices: [
      { id: "a", text: "About 69 at 1% versus about 7 at 10%" },
      { id: "b", text: "About 50 at 1% versus about 5 at 10%" },
      { id: "c", text: "About 10 at 1% versus about 1 at 10%" },
      { id: "d", text: "The same number, since percentages scale equally" },
    ],
    correctId: "a",
    explanation:
      "At 1% it takes roughly 69 straight losses to fall to half (`0.99^69 ≈ 0.5`); at 10%, only about 7 (`0.90^7 ≈ 0.48`). Smaller risk buys dramatically more staying power.",
  },
  {
    id: "risk-per-trade.q8",
    lessonSlug: "risk-per-trade",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "risk-per-trade", "open-risk"],
    prompt:
      "Why cap *total open risk* (e.g. at 6%) on top of a per-trade limit?",
    choices: [
      { id: "a", text: "So many simultaneous (and possibly correlated) positions can't stack into one oversized bet" },
      { id: "b", text: "To force you to hold at least six positions at all times" },
      { id: "c", text: "Because brokers require a 6% reserve" },
      { id: "d", text: "It increases the size of each individual trade" },
    ],
    correctId: "a",
    explanation:
      "A per-trade cap doesn't limit how many trades are open at once. Capping aggregate open risk stops several positions — especially correlated ones — from adding up to a single large exposure.",
  },
  {
    id: "risk-per-trade.q9",
    lessonSlug: "risk-per-trade",
    type: "numericChoice",
    difficulty: "hard",
    unit: "$",
    tags: ["risk", "risk-per-trade", "math", "streak", "comparison"],
    prompt:
      "Account `$10,000`, `10` losses in a row at `1%` risk each (on the shrinking balance). About what's left?",
    choices: [
      { id: "a", text: "$9,044" },
      { id: "b", text: "$9,000", feedback: "That's flat subtraction of 10%; the losses actually compound on a shrinking balance." },
      { id: "c", text: "$3,487" },
      { id: "d", text: "$9,900" },
    ],
    correctId: "a",
    explanation:
      "`$10,000 × 0.99^10 ≈ $9,044`, a drawdown of about `−9.6%` — easily recoverable. The same 10 losses at 10% leaves only about `$3,487`.",
  },
];
