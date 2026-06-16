import type { Question } from "@/lib/quiz/types";

// Quiz for the "Why crypto swings so hard" lesson.
export const questions: Question[] = [
  {
    id: "crypto-volatility.q1",
    lessonSlug: "crypto-volatility",
    type: "single",
    difficulty: "easy",
    tags: ["crypto", "volatility"],
    prompt: "**Volatility** refers to…",
    choices: [
      { id: "a", text: "How much and how fast a price moves" },
      { id: "b", text: "How many coins exist in total" },
      { id: "c", text: "The fee paid to send a transaction" },
      { id: "d", text: "Whether an exchange is custodial" },
    ],
    correctId: "a",
    explanation:
      "**Volatility** is the size and speed of price moves — bigger, faster swings mean higher volatility.",
  },
  {
    id: "crypto-volatility.q2",
    lessonSlug: "crypto-volatility",
    type: "single",
    difficulty: "easy",
    tags: ["crypto", "volatility", "stocks"],
    prompt: "Compared with stocks, crypto is generally…",
    choices: [
      { id: "a", text: "Much less volatile" },
      { id: "b", text: "About the same" },
      { id: "c", text: "Far more volatile, with 5–10%+ daily moves common" },
      { id: "d", text: "Never volatile at all" },
    ],
    correctId: "c",
    explanation:
      "Crypto is **far more volatile** than stocks — **5–10%+ daily moves are common**, and 20%+ swings happen.",
  },
  {
    id: "crypto-volatility.q3",
    lessonSlug: "crypto-volatility",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "volatility", "fundamentals"],
    prompt: "Why does a lack of **earnings or cash flows** add to crypto's volatility?",
    choices: [
      { id: "a", text: "With no fundamentals to anchor value, price rests on supply, demand, and sentiment" },
      { id: "b", text: "Earnings would make a coin illegal" },
      { id: "c", text: "It means the coin has no supply" },
      { id: "d", text: "It guarantees the price only goes up" },
    ],
    correctId: "a",
    explanation:
      "Many cryptos have **no earnings to anchor value**, so price rides on supply, demand, and **sentiment** — which can shift fast.",
  },
  {
    id: "crypto-volatility.q4",
    lessonSlug: "crypto-volatility",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "whale", "liquidity"],
    prompt: "A **whale** in crypto is…",
    choices: [
      { id: "a", text: "A type of stablecoin" },
      { id: "b", text: "A holder large enough that their trades can noticeably move the price" },
      { id: "c", text: "An exchange with low fees" },
      { id: "d", text: "A wallet with no keys" },
    ],
    correctId: "b",
    explanation:
      "A **whale** holds enough that their buying or selling can move the price — especially in thinner, less liquid markets.",
  },
  {
    id: "crypto-volatility.q5",
    lessonSlug: "crypto-volatility",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "volatility", "circuit-breaker"],
    prompt: "Which factor below contributes to crypto's high volatility?",
    choices: [
      { id: "a", text: "Government-guaranteed prices" },
      { id: "b", text: "Mandatory daily trading halts" },
      { id: "c", text: "24/7 trading with no circuit breakers to pause runaway moves" },
      { id: "d", text: "A fixed price set by exchanges" },
    ],
    correctId: "c",
    explanation:
      "Crypto trades **24/7 with no circuit breakers**, so nothing automatically pauses a runaway move — one of several drivers of its volatility.",
  },
  {
    id: "crypto-volatility.q6",
    lessonSlug: "crypto-volatility",
    type: "single",
    difficulty: "hard",
    tags: ["crypto", "volatility", "risk", "misconception"],
    prompt:
      "*\"High volatility mostly means high potential profit.\"* What's the most accurate response?",
    choices: [
      { id: "a", text: "True — volatility is basically free upside" },
      { id: "b", text: "Volatility is two-directional and is risk: the conditions for a 30% gain also allow a 30% loss" },
      { id: "c", text: "Volatility only ever pushes prices up", feedback: "Volatility describes swings in *both* directions, not just up." },
      { id: "d", text: "Profit is guaranteed whenever volatility is high" },
    ],
    correctId: "b",
    explanation:
      "Volatility **cuts both ways** — it *is* risk. The same conditions that enable a 30% gain enable a 30% loss just as easily.",
  },
  {
    id: "crypto-volatility.q7",
    lessonSlug: "crypto-volatility",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["crypto", "volatility", "math", "application"],
    unit: "$",
    prompt:
      "On a `$1,000` position, a major crypto moves **+8%** in a day while a stock index moves **+1%**. Roughly how much larger is the crypto's dollar swing? (illustrative)",
    choices: [
      { id: "a", text: "About $10 vs. $80 — the index swings more" },
      { id: "b", text: "About $80 vs. $10 — the crypto swings about 8× more" },
      { id: "c", text: "They swing the same dollar amount" },
      { id: "d", text: "About $8 vs. $1 — a 2× difference", feedback: "8% of $1,000 is $80 and 1% is $10 — an 8× gap, not 2×." },
    ],
    correctId: "b",
    explanation:
      "`8% × $1,000 = $80` for the crypto vs. `1% × $1,000 = $10` for the index — roughly an **8× larger** dollar swing on the same money.",
  },
  {
    id: "crypto-volatility.q8",
    lessonSlug: "crypto-volatility",
    type: "single",
    difficulty: "hard",
    tags: ["crypto", "risk", "application"],
    prompt:
      "A beginner says crypto's big swings make it *\"almost guaranteed big money.\"* The most risk-aware reply is…",
    choices: [
      { id: "a", text: "Agree — large swings mean reliable profits" },
      { id: "b", text: "Big swings are two-directional risk; the same volatility that enables large gains enables large, fast losses" },
      { id: "c", text: "Past gains reliably predict future gains" },
      { id: "d", text: "Volatility removes the chance of loss" },
    ],
    correctId: "b",
    explanation:
      "Nothing is guaranteed. Volatility is **two-directional risk** — the swings that produce big gains can produce big, fast losses, and past gains don't predict future ones.",
  },
];
