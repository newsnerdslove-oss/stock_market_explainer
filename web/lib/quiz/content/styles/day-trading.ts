import type { Question } from "@/lib/quiz/types";

// Quiz for the "Day Trading: Intraday Speed, Real Costs" lesson.
export const questions: Question[] = [
  {
    id: "day-trading.q1",
    lessonSlug: "day-trading",
    type: "single",
    difficulty: "easy",
    tags: ["styles", "day-trading", "definition"],
    prompt: "What defines a **day trade**?",
    choices: [
      { id: "a", text: "Opening and closing the same position in the same security on the same day" },
      { id: "b", text: "Holding a stock overnight to catch a gap", feedback: "Holding overnight is swing trading — a day trade is closed before the session ends." },
      { id: "c", text: "Any trade placed during regular market hours" },
      { id: "d", text: "Buying a stock and holding it for at least a week" },
    ],
    correctId: "a",
    explanation:
      "A day trade is a **same-security, same-day round-trip** — open and close within one session. Day traders end every day flat, with no overnight positions.",
  },
  {
    id: "day-trading.q2",
    lessonSlug: "day-trading",
    type: "single",
    difficulty: "easy",
    tags: ["styles", "day-trading", "holding-period"],
    prompt: "A day trader's typical holding period is…",
    choices: [
      { id: "a", text: "Weeks to months" },
      { id: "b", text: "Minutes to hours, closed before the session ends" },
      { id: "c", text: "Several days, held overnight" },
      { id: "d", text: "Years" },
    ],
    correctId: "b",
    explanation:
      "Day trading runs on a **minutes-to-hours** horizon, and *all* positions are closed before the session ends — no overnight exposure.",
  },
  {
    id: "day-trading.q3",
    lessonSlug: "day-trading",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "day-trading", "what-you-trade"],
    prompt: "On an intraday horizon, a day trader is mainly profiting from…",
    choices: [
      { id: "a", text: "A company's long-term fundamental value" },
      { id: "b", text: "Dividend income collected each day" },
      { id: "c", text: "Short-term liquidity and volatility — intraday price moves" },
      { id: "d", text: "Interest earned on settled cash" },
    ],
    correctId: "c",
    explanation:
      "Over hours, fundamentals barely move. Day traders trade **liquidity and volatility** — short-term supply, demand, and momentum — not a company's value.",
  },
  {
    id: "day-trading.q4",
    lessonSlug: "day-trading",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["styles", "day-trading", "pdt", "judgment"],
    prompt:
      "In a **margin account** under the *legacy* PDT rule, a trader does round-trips across 5 business days: **1, 1, 0, 1, 1**. Are they a Pattern Day Trader?",
    choices: [
      { id: "a", text: "No — there's a zero-trade day in the middle" },
      { id: "b", text: "Yes — that's 4 day trades in 5 business days" },
      { id: "c", text: "No — you need at least 10 trades" },
      { id: "d", text: "Only if each trade was over $25,000" },
    ],
    correctId: "b",
    explanation:
      "1+1+0+1+1 = **4 day trades in 5 business days**, which triggers the legacy PDT flag (when they exceed 6% of total trades). The zero day doesn't reset the rolling 5-day count.",
  },
  {
    id: "day-trading.q5",
    lessonSlug: "day-trading",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "day-trading", "pdt", "regulation"],
    prompt: "What did the legacy Pattern Day Trader rule require of a flagged margin account?",
    choices: [
      { id: "a", text: "A minimum of $25,000 in equity to keep day trading" },
      { id: "b", text: "A flat $10,000 annual fee" },
      { id: "c", text: "That every trade be held overnight" },
      { id: "d", text: "Closing the account after 4 day trades" },
    ],
    correctId: "a",
    explanation:
      "A flagged PDT account needed at least **$25,000** in equity to continue day trading (and in return could access up to 4× intraday buying power). Fall below and the broker restricted further day trading.",
  },
  {
    id: "day-trading.q6",
    lessonSlug: "day-trading",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "day-trading", "cash-account"],
    prompt: "A **cash account** avoids the PDT framework, but is constrained by…",
    choices: [
      { id: "a", text: "A hard cap of 3 trades per year" },
      { id: "b", text: "T+1 settlement — you can't reuse proceeds until the prior sale settles" },
      { id: "c", text: "A mandatory $25,000 minimum of its own" },
      { id: "d", text: "Not being allowed to trade volatile stocks" },
    ],
    correctId: "b",
    explanation:
      "Cash accounts have no day-trade count to trip, but **T+1 settlement** limits how often you can trade — you must wait for proceeds to settle before reusing them.",
  },
  {
    id: "day-trading.q7",
    lessonSlug: "day-trading",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "day-trading", "regulation", "2026", "scenario"],
    prompt:
      "On the same day in 2026, two traders each place their **4th day trade**. One is restricted, the other isn't. What best explains this?",
    choices: [
      { id: "a", text: "One of them broke the law" },
      { id: "b", text: "Their brokers are at different stages of the 2026–2027 PDT phase-in, so different rules apply" },
      { id: "c", text: "Restrictions are assigned at random" },
      { id: "d", text: "One trader has a higher credit score" },
    ],
    correctId: "b",
    explanation:
      "FINRA's elimination of the PDT rule (effective June 4, 2026) has an **18-month phase-in through Oct 20, 2027**. Brokers migrate at different speeds, so two brokers can legitimately apply **different rules on the same day**. Always confirm what your own broker currently applies.",
  },
  {
    id: "day-trading.q8",
    lessonSlug: "day-trading",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "day-trading", "misconception", "scenario"],
    prompt:
      "A friend says: *'The $25k minimum is gone in 2026, so day trading is now a good way to make a living.'* What's the soundest response?",
    choices: [
      { id: "a", text: "Right — removing the minimum makes it much easier to profit" },
      { id: "b", text: "The capital barrier dropped, but the odds didn't — most day traders still lose money" },
      { id: "c", text: "True, because now you get unlimited buying power" },
      { id: "d", text: "It only helps if you trade a cash account" },
    ],
    correctId: "b",
    explanation:
      "Removing the $25k minimum lowers the **capital** required, not the **difficulty**. In a major Brazil study ~97% of long-term day traders lost money, and Taiwan research found <1% are reliably profitable after costs. Easier access ≠ better odds.",
  },
  {
    id: "day-trading.q9",
    lessonSlug: "day-trading",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "day-trading", "costs"],
    prompt: "Why does high trading frequency work *against* most day traders?",
    choices: [
      { id: "a", text: "Frequent trading guarantees more winners" },
      { id: "b", text: "It multiplies costs — spreads, commissions, and slippage — and amplifies behavioral mistakes" },
      { id: "c", text: "Brokers ban traders who trade too often" },
      { id: "d", text: "Each trade automatically pays a dividend penalty" },
    ],
    correctId: "b",
    explanation:
      "Every trade pays a spread, possibly a commission, and loses a bit to **slippage**. Repeat dozens of times a day and costs compound against you, while frequency also magnifies behavioral errors. Frequency raises costs, not returns.",
  },
  {
    id: "day-trading.q10",
    lessonSlug: "day-trading",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "day-trading", "definition", "edge-case"],
    prompt: "Which statement about counting day trades is correct?",
    choices: [
      { id: "a", text: "Only the first trade of the day ever counts" },
      { id: "b", text: "Partial or multiple round-trips in one security can each count, as the broker computes it" },
      { id: "c", text: "Trades only count if they're profitable" },
      { id: "d", text: "Selling and buying back never counts as a day trade" },
    ],
    correctId: "b",
    explanation:
      "A day trade is a same-security buy and sell on the same day — and **partial or multiple round-trips can each count separately**. Your broker performs the counting under whichever framework currently applies to your account.",
  },
];
