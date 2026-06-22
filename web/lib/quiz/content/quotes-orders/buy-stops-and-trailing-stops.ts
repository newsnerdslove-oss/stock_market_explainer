import type { Question } from "@/lib/quiz/types";

// Quiz for the "Buy-Stops & Trailing Stops" lesson.
export const questions: Question[] = [
  {
    id: "buy-stops-and-trailing-stops.q1",
    lessonSlug: "buy-stops-and-trailing-stops",
    type: "single",
    difficulty: "easy",
    tags: ["orders", "buy-stop"],
    prompt: "A **buy-stop** order is entered at a stop price…",
    choices: [
      { id: "a", text: "Below the current market price", feedback: "That's a sell-stop. A buy-stop sits **above** the market and triggers as the price rises." },
      { id: "b", text: "Above the current market price" },
      { id: "c", text: "Exactly at the current market price" },
      { id: "d", text: "At yesterday's closing price" },
    ],
    correctId: "b",
    explanation:
      "A **buy-stop** sits **above** the current market price. It does nothing until the price rises to it, then activates as a market order to buy.",
  },
  {
    id: "buy-stops-and-trailing-stops.q2",
    lessonSlug: "buy-stops-and-trailing-stops",
    type: "single",
    difficulty: "medium",
    tags: ["orders", "buy-stop", "short"],
    prompt: "You are **short** a stock and it starts climbing against you. Which order caps your loss?",
    choices: [
      { id: "a", text: "A sell-stop below the market" },
      { id: "b", text: "A buy-stop above the market" },
      { id: "c", text: "A limit order to sell more shares", feedback: "Selling more would deepen the short — it doesn't protect the existing position from a rising price." },
      { id: "d", text: "A trailing stop below the market" },
    ],
    correctId: "b",
    explanation:
      "To close a short you must **buy** the shares back. A **buy-stop above** the market triggers if the stock runs up, buying you out and limiting the loss.",
  },
  {
    id: "buy-stops-and-trailing-stops.q3",
    lessonSlug: "buy-stops-and-trailing-stops",
    type: "single",
    difficulty: "medium",
    tags: ["orders", "trailing-stop"],
    prompt: "A **trailing stop** is set as…",
    choices: [
      { id: "a", text: "A fixed dollar amount or percentage away from the market price" },
      { id: "b", text: "A single fixed price that never changes" },
      { id: "c", text: "A guaranteed sale price", feedback: "No stop guarantees a price — when triggered it becomes a market order." },
      { id: "d", text: "A percentage of your account balance" },
    ],
    correctId: "a",
    explanation:
      "A trailing stop sets a fixed **distance** — a dollar amount or a **percentage** — from the market, rather than one fixed price. That distance is what 'trails' the price.",
  },
  {
    id: "buy-stops-and-trailing-stops.q4",
    lessonSlug: "buy-stops-and-trailing-stops",
    type: "single",
    difficulty: "medium",
    tags: ["orders", "trailing-stop", "ratchet"],
    prompt: "On a **long** position, what does a trailing stop do as the price moves **against** you (falls)?",
    choices: [
      { id: "a", text: "It follows the price down, staying the same distance below" },
      { id: "b", text: "It cancels itself" },
      { id: "c", text: "It stays fixed where it last trailed to" },
      { id: "d", text: "It converts into a buy order" },
    ],
    correctId: "c",
    explanation:
      "A trailing stop only ratchets in your **favor**. When the price falls, the stop **stays put** — it never moves against you. That's what locks in gains earned on the way up.",
  },
  {
    id: "buy-stops-and-trailing-stops.q5",
    lessonSlug: "buy-stops-and-trailing-stops",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["orders", "trailing-stop", "math"],
    unit: "$",
    prompt:
      "You buy at **$50** with a **$5 trailing stop**. The stock rises to `$60`, then falls. At what price does the trailing stop trigger?",
    choices: [
      { id: "a", text: "$45" },
      { id: "b", text: "$50" },
      { id: "c", text: "$55" },
      { id: "d", text: "$60", feedback: "The stop trails $5 *below* the high, not at it — it sits at $55 once the stock peaks at $60." },
    ],
    correctId: "c",
    explanation:
      "The stop started at `$45` ($5 below $50) and trailed up to `$55` when the stock hit `$60`. As the stock falls it holds at `$55`, so it triggers there — locking in about a `$5` gain.",
  },
  {
    id: "buy-stops-and-trailing-stops.q6",
    lessonSlug: "buy-stops-and-trailing-stops",
    type: "single",
    difficulty: "medium",
    tags: ["orders", "trigger", "market-order"],
    prompt: "When a buy-stop or trailing stop is **triggered**, what does it become?",
    choices: [
      { id: "a", text: "A guaranteed fill at the stop price", feedback: "The SEC is explicit: the stop price is **not** the guaranteed execution price." },
      { id: "b", text: "A market order" },
      { id: "c", text: "A new limit order at yesterday's close" },
      { id: "d", text: "A canceled order" },
    ],
    correctId: "b",
    explanation:
      "Like any stop, it converts to a **market order** when triggered — near-certain to execute, but the fill can deviate significantly from the stop in a fast-moving market.",
  },
  {
    id: "buy-stops-and-trailing-stops.q7",
    lessonSlug: "buy-stops-and-trailing-stops",
    type: "single",
    difficulty: "hard",
    tags: ["orders", "trailing-stop", "application", "scenario"],
    prompt:
      "You hold a winning long position and want to **let it keep running while protecting your gains** without manually moving your stop. Which order?",
    choices: [
      { id: "a", text: "A buy-stop above the market" },
      { id: "b", text: "A fixed sell-stop set once and left alone" },
      { id: "c", text: "A trailing stop below the market" },
      { id: "d", text: "A limit order at your purchase price", feedback: "A limit at your cost basis caps your upside and doesn't trail the gains at all." },
    ],
    correctId: "c",
    explanation:
      "A **trailing stop** below a long position rises automatically as the stock rises, locking in gains while letting the winner run — and triggers a sale only if the price falls back by the trail amount.",
  },
];
