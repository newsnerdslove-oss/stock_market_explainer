import type { Question } from "@/lib/quiz/types";

// Quiz for the "Leverage & Liquidation in Crypto" lesson.
export const questions: Question[] = [
  {
    id: "leverage-and-liquidation-in-crypto.q1",
    lessonSlug: "leverage-and-liquidation-in-crypto",
    type: "single",
    difficulty: "easy",
    tags: ["leverage", "liquidation"],
    prompt: "Roughly how big an adverse move liquidates a leveraged position?",
    choices: [
      { id: "a", text: "Always exactly `50%`, regardless of leverage" },
      { id: "b", text: "About `1 ÷ leverage` (so `10x` ≈ `10%`, `100x` ≈ `1%`)" },
      { id: "c", text: "It depends only on the asset, not the leverage" },
      { id: "d", text: "Leverage has no effect on liquidation distance" },
    ],
    correctId: "b",
    explanation:
      "Before fees and maintenance, a position is roughly liquidated after a move of about `1 ÷ leverage`. Higher leverage means a *smaller* survivable move.",
  },
  {
    id: "leverage-and-liquidation-in-crypto.q2",
    lessonSlug: "leverage-and-liquidation-in-crypto",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["leverage", "liquidation", "scenario", "math"],
    prompt:
      "You long BTC at `$50,000` with `10x`. Ignoring fees, around what price are you liquidated?",
    choices: [
      { id: "a", text: "~$49,500 (−1%)" },
      { id: "b", text: "~$49,000 (−2%)" },
      { id: "c", text: "~$45,000 (−10%)" },
      { id: "d", text: "~$40,000 (−20%)", feedback: "That's a `5x` distance — at `10x` only a ~`10%` move is needed." },
    ],
    correctId: "c",
    explanation:
      "At `10x`, about a `10%` adverse move wipes the margin. `$50,000 × (1 − 0.10) = $45,000` (and slightly sooner once maintenance + fees apply).",
  },
  {
    id: "leverage-and-liquidation-in-crypto.q3",
    lessonSlug: "leverage-and-liquidation-in-crypto",
    type: "single",
    difficulty: "medium",
    tags: ["leverage", "cross-margin", "isolated-margin"],
    prompt: "What is the added danger of **cross margin** versus isolated margin?",
    choices: [
      { id: "a", text: "It caps your loss to the one position's margin" },
      { id: "b", text: "It disables liquidation entirely" },
      { id: "c", text: "A single bad trade can drain your whole account and liquidate other positions" },
      { id: "d", text: "It only works on stocks, not crypto" },
    ],
    correctId: "c",
    explanation:
      "Cross margin backs a position with your **whole balance**. It survives larger moves, but one bad trade can drain the account and take down other, otherwise-healthy positions. Isolated margin contains the damage to one trade.",
  },
  {
    id: "leverage-and-liquidation-in-crypto.q4",
    lessonSlug: "leverage-and-liquidation-in-crypto",
    type: "single",
    difficulty: "easy",
    tags: ["leverage", "cascade"],
    prompt: "What is a **cascading liquidation**?",
    choices: [
      { id: "a", text: "Forced sells push the price further, triggering still more liquidations in a spiral" },
      { id: "b", text: "A scheduled daily reset of all positions" },
      { id: "c", text: "A liquidation that the exchange reverses" },
      { id: "d", text: "When one trader voluntarily closes many positions" },
    ],
    correctId: "a",
    explanation:
      "A liquidation forces a market sell, which moves price further, which liquidates the next cluster of positions — a self-reinforcing cascade that can crash a market in minutes.",
  },
  {
    id: "leverage-and-liquidation-in-crypto.q5",
    lessonSlug: "leverage-and-liquidation-in-crypto",
    type: "single",
    difficulty: "medium",
    tags: ["leverage", "crypto-vs-stock"],
    prompt: "Why is crypto leverage generally far riskier than stock margin?",
    choices: [
      { id: "a", text: "Much higher leverage (50-125x vs ~2x), 24/7 with no circuit breakers, on more volatile assets" },
      { id: "b", text: "Crypto exchanges guarantee against losses" },
      { id: "c", text: "Stock margin has no maintenance requirement" },
      { id: "d", text: "Crypto only trades a few hours a day" },
    ],
    correctId: "a",
    explanation:
      "Stock margin is ~`2x` (Reg-T overnight), runs on a clock, and has circuit breakers. Crypto offers `50-125x`, trades `24/7` with no circuit breakers, on more volatile assets — so liquidations are faster and more brutal.",
  },
  {
    id: "leverage-and-liquidation-in-crypto.q6",
    lessonSlug: "leverage-and-liquidation-in-crypto",
    type: "single",
    difficulty: "medium",
    tags: ["leverage", "maintenance-margin"],
    prompt: "What is **maintenance margin**?",
    choices: [
      { id: "a", text: "A monthly fee for using the exchange" },
      { id: "b", text: "The maximum leverage allowed on an asset" },
      { id: "c", text: "The profit you must keep in the account" },
      { id: "d", text: "The minimum equity to keep a position open; breach it and you're force-closed plus a fee" },
    ],
    correctId: "d",
    explanation:
      "Maintenance margin is the floor of equity needed to hold a position. Drop below it and the exchange force-closes the position and charges a liquidation fee.",
  },
  {
    id: "leverage-and-liquidation-in-crypto.q7",
    lessonSlug: "leverage-and-liquidation-in-crypto",
    type: "single",
    difficulty: "hard",
    tags: ["leverage", "liquidation", "risk"],
    prompt: "Why is the liquidation price **not** a guaranteed floor on your loss?",
    choices: [
      { id: "a", text: "In a fast cascade with thin liquidity you can close worse than it, even hitting a negative balance or ADL" },
      { id: "b", text: "Because the exchange always refunds the difference" },
      { id: "c", text: "Because liquidations never actually execute" },
      { id: "d", text: "Because the floor only applies to shorts" },
    ],
    correctId: "a",
    explanation:
      "In a fast move with thin liquidity, your position can fill **worse** than the liquidation price. In extremes you can go negative or face **auto-deleveraging (ADL)**, where winners' profits are clawed back to cover bankrupt accounts.",
  },
  {
    id: "leverage-and-liquidation-in-crypto.q8",
    lessonSlug: "leverage-and-liquidation-in-crypto",
    type: "single",
    difficulty: "hard",
    tags: ["leverage", "scenario", "misconception"],
    prompt:
      "You take `100x` leverage on a coin that routinely swings `2-3%` per hour. What is the most likely outcome?",
    choices: [
      { id: "a", text: "You'll likely be liquidated quickly — a ~`1%` adverse move wipes the margin" },
      { id: "b", text: "You're safe because `100x` only amplifies gains" },
      { id: "c", text: "Your liquidation distance grows with higher leverage" },
      { id: "d", text: "The exchange pauses trading to protect you" },
    ],
    correctId: "a",
    explanation:
      "At `100x`, only a ~`1%` adverse move liquidates you — well within this coin's hourly noise. Higher leverage **shrinks** the move you can survive; it isn't a symmetric \"bigger bet.\"",
  },
  {
    id: "leverage-and-liquidation-in-crypto.q9",
    lessonSlug: "leverage-and-liquidation-in-crypto",
    type: "single",
    difficulty: "easy",
    tags: ["leverage", "isolated-margin"],
    prompt: "What does **isolated margin** do for you?",
    choices: [
      { id: "a", text: "Uses your whole balance to back the trade" },
      { id: "b", text: "Limits the damage of a blow-up to that one position's assigned margin" },
      { id: "c", text: "Removes the need for maintenance margin" },
      { id: "d", text: "Guarantees the trade can't be liquidated" },
    ],
    correctId: "b",
    explanation:
      "Isolated margin caps your risk on a trade to the margin you assigned it, so a wipeout there doesn't drain the rest of your account — the trade-off is it survives smaller moves than cross margin.",
  },
];
