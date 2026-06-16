import type { Question } from "@/lib/quiz/types";

// Quiz for the "Markets that never close" lesson.
export const questions: Question[] = [
  {
    id: "crypto-24-7-markets.q1",
    lessonSlug: "crypto-24-7-markets",
    type: "single",
    difficulty: "easy",
    tags: ["crypto", "market-hours"],
    prompt: "When does crypto trade?",
    choices: [
      { id: "a", text: "Weekdays only, 9:30am–4:00pm ET" },
      { id: "b", text: "24/7/365 — every hour of every day, all year" },
      { id: "c", text: "Only during US business hours" },
      { id: "d", text: "Weekends only" },
    ],
    correctId: "b",
    explanation:
      "Crypto trades **24/7/365** — there's no open, no close, and no weekend break.",
  },
  {
    id: "crypto-24-7-markets.q2",
    lessonSlug: "crypto-24-7-markets",
    type: "single",
    difficulty: "easy",
    tags: ["crypto", "stocks", "market-hours"],
    prompt: "Roughly when does the **US stock market** trade?",
    choices: [
      { id: "a", text: "24/7/365" },
      { id: "b", text: "Midnight to noon, every day" },
      { id: "c", text: "~9:30am–4:00pm ET on weekdays, closed weekends and holidays" },
      { id: "d", text: "Only on the first of each month" },
    ],
    correctId: "c",
    explanation:
      "US stocks trade about **9:30am–4:00pm ET on weekdays**, and are closed on weekends and holidays.",
  },
  {
    id: "crypto-24-7-markets.q3",
    lessonSlug: "crypto-24-7-markets",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "risk", "market-hours"],
    prompt: "Which is a **real risk** created by crypto's 24/7 schedule?",
    choices: [
      { id: "a", text: "Prices can move sharply overnight or over the weekend, with no close to pause them" },
      { id: "b", text: "Crypto can only be sold on weekdays" },
      { id: "c", text: "The market guarantees a daily reset" },
      { id: "d", text: "Trading fees disappear at night" },
    ],
    correctId: "a",
    explanation:
      "With no close, prices can swing hard **overnight or on weekends** while you sleep — there's no *'wait for the open'* and no built-in pause.",
  },
  {
    id: "crypto-24-7-markets.q4",
    lessonSlug: "crypto-24-7-markets",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "circuit-breaker"],
    prompt: "A **circuit breaker** is…",
    choices: [
      { id: "a", text: "A fee charged on every crypto trade" },
      { id: "b", text: "A type of crypto wallet" },
      { id: "c", text: "The opening price each morning" },
      { id: "d", text: "An automatic trading halt after extreme moves — which crypto generally lacks" },
    ],
    correctId: "d",
    explanation:
      "A **circuit breaker** is an automatic halt that pauses a market after extreme moves. Crypto generally has **none**, so panic or hype can run continuously.",
  },
  {
    id: "crypto-24-7-markets.q5",
    lessonSlug: "crypto-24-7-markets",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "behavior", "overtrading"],
    prompt: "How can always-on access affect a beginner's behavior?",
    choices: [
      { id: "a", text: "It guarantees better decisions" },
      { id: "b", text: "It can encourage overtrading and emotional, reactive decisions" },
      { id: "c", text: "It forces everyone to hold long term" },
      { id: "d", text: "It removes all risk from trading" },
    ],
    correctId: "b",
    explanation:
      "Constant access can quietly push people toward **overtrading** and emotional choices — a genuine beginner risk, not a perk.",
  },
  {
    id: "crypto-24-7-markets.q6",
    lessonSlug: "crypto-24-7-markets",
    type: "single",
    difficulty: "hard",
    tags: ["crypto", "misconception", "application"],
    prompt:
      "Someone argues: *\"24/7 markets make crypto safer because I can always sell.\"* What's the best correction?",
    choices: [
      { id: "a", text: "Correct — being able to sell anytime removes risk" },
      { id: "b", text: "Prices can crash at any hour with no close to halt the slide — availability isn't safety", },
      { id: "c", text: "It's safer only on weekends", feedback: "Weekends are exactly when there's no break — moves can run unchecked." },
      { id: "d", text: "Crypto can't fall once the market is always open" },
    ],
    correctId: "b",
    explanation:
      "Always-open is closer to the opposite of safe: prices can crash at **any hour** with no close to pause them. **Availability is not safety.**",
  },
  {
    id: "crypto-24-7-markets.q7",
    lessonSlug: "crypto-24-7-markets",
    type: "single",
    difficulty: "hard",
    tags: ["crypto", "stocks", "application"],
    prompt:
      "It's **2:00am on a Sunday** and major news hits. Comparing a crypto holder and a US-stock holder, what's true?",
    choices: [
      { id: "a", text: "Both must wait until Monday to trade" },
      { id: "b", text: "The crypto holder can trade right now; the stock holder waits until the next weekday open" },
      { id: "c", text: "The stock holder can trade now; the crypto holder must wait" },
      { id: "d", text: "Neither can ever trade on news" },
    ],
    correctId: "b",
    explanation:
      "Crypto trades **24/7**, so the crypto holder can act at 2am Sunday. US stocks are closed — the stock holder must **wait for the next weekday open** (~9:30am ET).",
  },
  {
    id: "crypto-24-7-markets.q8",
    lessonSlug: "crypto-24-7-markets",
    type: "single",
    difficulty: "easy",
    tags: ["crypto", "stocks", "gap"],
    prompt: "A price **gap** between one session's close and the next session's open is mainly a concept from…",
    choices: [
      { id: "a", text: "The crypto market, which never closes" },
      { id: "b", text: "Government insurance programs" },
      { id: "c", text: "Markets with set hours, like stocks, where there's a close and a later open" },
      { id: "d", text: "Recovery phrases" },
    ],
    correctId: "c",
    explanation:
      "A **gap** needs a *close* and a later *open* to jump between — that's a feature of markets with set hours like stocks, not a 24/7 market.",
  },
];
