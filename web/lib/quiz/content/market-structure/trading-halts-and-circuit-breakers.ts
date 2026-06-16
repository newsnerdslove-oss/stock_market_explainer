import type { Question } from "@/lib/quiz/types";

// Quiz for the "Trading Halts & Circuit Breakers" lesson.
export const questions: Question[] = [
  {
    id: "trading-halts-and-circuit-breakers.q1",
    lessonSlug: "trading-halts-and-circuit-breakers",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "mwcb"],
    prompt: "A **Level 3** market-wide circuit breaker is triggered by an S&P 500 decline of…",
    choices: [
      { id: "a", text: "7%", feedback: "That's Level 1 — a 15-minute pause (before 3:25pm), not a close." },
      { id: "b", text: "13%", feedback: "That's Level 2 — also a 15-minute pause, not a full-day close." },
      { id: "c", text: "20%" },
      { id: "d", text: "30%" },
    ],
    correctId: "c",
    explanation:
      "**Level 3** triggers at a **20%** S&P 500 decline and halts trading for the **rest of the day**, at any time. Levels 1 (7%) and 2 (13%) are 15-minute pauses.",
  },
  {
    id: "trading-halts-and-circuit-breakers.q2",
    lessonSlug: "trading-halts-and-circuit-breakers",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "luld"],
    prompt: "**LULD** is designed to protect…",
    choices: [
      { id: "a", text: "An individual stock" },
      { id: "b", text: "The entire market at once" },
      { id: "c", text: "Only ETFs" },
      { id: "d", text: "After-hours trading" },
    ],
    correctId: "a",
    explanation:
      "**LULD (Limit Up-Limit Down)** protects an *individual* stock with percentage bands. Halting the *whole* market is the job of market-wide circuit breakers, measured by the S&P 500.",
  },
  {
    id: "trading-halts-and-circuit-breakers.q3",
    lessonSlug: "trading-halts-and-circuit-breakers",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "mwcb"],
    prompt: "The market-wide circuit breakers are measured against which index?",
    choices: [
      { id: "a", text: "The Dow Jones Industrial Average" },
      { id: "b", text: "The S&P 500" },
      { id: "c", text: "The Nasdaq 100" },
      { id: "d", text: "The Russell 2000" },
    ],
    correctId: "b",
    explanation:
      "Market-wide circuit breakers are based on the **S&P 500** versus the prior close, with levels recalculated daily.",
  },
  {
    id: "trading-halts-and-circuit-breakers.q4",
    lessonSlug: "trading-halts-and-circuit-breakers",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "luld", "tiers"],
    prompt: "For a **Tier 1** stock (e.g. an S&P 500 name) above `$3`, the regular LULD band is…",
    choices: [
      { id: "a", text: "±5%" },
      { id: "b", text: "±10%" },
      { id: "c", text: "±7%" },
      { id: "d", text: "±20%" },
    ],
    correctId: "a",
    explanation:
      "**Tier 1** stocks (S&P 500 / Russell 1000 / select ETPs) use `±5%` bands; **Tier 2** (most other NMS stocks) use `±10%`. Bands double in the last 25 minutes of the session.",
  },
  {
    id: "trading-halts-and-circuit-breakers.q5",
    lessonSlug: "trading-halts-and-circuit-breakers",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "mwcb", "scenario"],
    prompt:
      "The S&P 500 falls **7%** at **10:30am**. What happens?",
    choices: [
      { id: "a", text: "The market closes for the rest of the day" },
      { id: "b", text: "A market-wide 15-minute halt, then trading resumes" },
      { id: "c", text: "Nothing — 7% is below any threshold" },
      { id: "d", text: "Only that one stock is paused" },
    ],
    correctId: "b",
    explanation:
      "A 7% S&P decline before 3:25pm trips **Level 1** — a **15-minute** market-wide halt, after which trading resumes. It does not close the market.",
  },
  {
    id: "trading-halts-and-circuit-breakers.q6",
    lessonSlug: "trading-halts-and-circuit-breakers",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "luld", "scenario"],
    prompt:
      "A single stock hits its **+5% band** and stays there for **more than 15 seconds**. What follows?",
    choices: [
      { id: "a", text: "A market-wide circuit breaker" },
      { id: "b", text: "A 5-minute LULD pause in that stock, then an auction reopen" },
      { id: "c", text: "The stock is delisted" },
      { id: "d", text: "Nothing happens during regular hours" },
    ],
    correctId: "b",
    explanation:
      "Sitting at the band 15+ seconds (a **Limit State**) triggers a **5-minute LULD trading pause** in that single stock, which then **reopens via auction** — it's not market-wide.",
  },
  {
    id: "trading-halts-and-circuit-breakers.q7",
    lessonSlug: "trading-halts-and-circuit-breakers",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "luld", "reference"],
    prompt: "The LULD band's **reference price** is based on…",
    choices: [
      { id: "a", text: "The prior day's close" },
      { id: "b", text: "A rolling 5-minute average price" },
      { id: "c", text: "The opening auction print only" },
      { id: "d", text: "The S&P 500 level" },
    ],
    correctId: "b",
    explanation:
      "LULD bands are set off a **rolling 5-minute average** price. (The MWCB levels, by contrast, use the prior close.)",
  },
  {
    id: "trading-halts-and-circuit-breakers.q8",
    lessonSlug: "trading-halts-and-circuit-breakers",
    type: "single",
    difficulty: "hard",
    tags: ["market-structure", "mwcb", "scenario"],
    prompt:
      "The S&P 500 drops **8%** for the first time at **3:40pm** (after 3:25pm). What happens market-wide?",
    choices: [
      { id: "a", text: "A Level 1 15-minute halt" },
      { id: "b", text: "No market-wide halt — Levels 1 and 2 don't halt at or after 3:25pm" },
      { id: "c", text: "The market closes for the day" },
      { id: "d", text: "A Level 2 halt" },
    ],
    correctId: "b",
    explanation:
      "At or after **3:25pm**, **Levels 1 and 2 no longer halt** the market. An 8% drop would normally be Level 1, but this late it triggers **no market-wide halt** — only Level 3 (20%) still halts that late.",
  },
  {
    id: "trading-halts-and-circuit-breakers.q9",
    lessonSlug: "trading-halts-and-circuit-breakers",
    type: "single",
    difficulty: "hard",
    tags: ["market-structure", "mwcb", "misconception"],
    prompt: "Someone says \"a 7% S&P drop closes the market for the day.\" The accurate correction is…",
    choices: [
      { id: "a", text: "True — 7% always ends the trading day" },
      { id: "b", text: "Level 1 (7%) is only a 15-minute pause (and only before 3:25pm); only Level 3 (20%) closes the market for the day" },
      { id: "c", text: "7% triggers nothing at all" },
      { id: "d", text: "Only LULD applies to the S&P 500" },
    ],
    correctId: "b",
    explanation:
      "A 7% drop is **Level 1** — a 15-minute pause, and only if it hits before 3:25pm. Closing the market for the rest of the day requires **Level 3 (20%)**.",
  },
  {
    id: "trading-halts-and-circuit-breakers.q10",
    lessonSlug: "trading-halts-and-circuit-breakers",
    type: "single",
    difficulty: "hard",
    tags: ["market-structure", "halts"],
    prompt: "A **news dissemination halt** is best described as…",
    choices: [
      { id: "a", text: "The same thing as a Level 1 circuit breaker" },
      { id: "b", text: "A separate halt for pending material news or order imbalances" },
      { id: "c", text: "An automatic 20% S&P trigger" },
      { id: "d", text: "An after-hours-only mechanism" },
    ],
    correctId: "b",
    explanation:
      "A **news/volatility halt** is a *separate* mechanism — used for pending material news or order imbalances — distinct from both LULD pauses and market-wide circuit breakers.",
  },
];
