import type { Question } from "@/lib/quiz/types";

// Quiz for the "Liquidity Providing & Impermanent Loss" lesson.
export const questions: Question[] = [
  {
    id: "liquidity-providing-and-impermanent-loss.q1",
    lessonSlug: "liquidity-providing-and-impermanent-loss",
    type: "single",
    difficulty: "easy",
    tags: ["amm", "impermanent-loss"],
    prompt: "What causes **impermanent loss**?",
    choices: [
      { id: "a", text: "Paying the `0.3%` trading fee on your own deposit" },
      { id: "b", text: "The pool's two-asset price ratio changing from your deposit ratio" },
      { id: "c", text: "Holding the two tokens in your wallet too long" },
      { id: "d", text: "The total value locked in the pool growing" },
    ],
    correctId: "b",
    explanation:
      "IL is the shortfall versus simply holding the two tokens, and it appears whenever the **price ratio** drifts from your deposit ratio. Arbitrageurs rebalance the pool against you — more of the loser, less of the winner.",
  },
  {
    id: "liquidity-providing-and-impermanent-loss.q2",
    lessonSlug: "liquidity-providing-and-impermanent-loss",
    type: "single",
    difficulty: "easy",
    tags: ["amm", "fees"],
    prompt: "How do liquidity providers earn money?",
    choices: [
      { id: "a", text: "They take a cut of each swap's trading fee (e.g. `0.3%`)" },
      { id: "b", text: "They receive a fixed interest rate set by the protocol" },
      { id: "c", text: "They are paid every time the price ratio diverges" },
      { id: "d", text: "They collect the bid-ask spread from an order book" },
    ],
    correctId: "a",
    explanation:
      "LPs earn a share of the **trading fee** on every swap routed through the pool. Whether that beats impermanent loss is the real question.",
  },
  {
    id: "liquidity-providing-and-impermanent-loss.q3",
    lessonSlug: "liquidity-providing-and-impermanent-loss",
    type: "single",
    difficulty: "medium",
    tags: ["amm", "impermanent-loss"],
    prompt: "Why is impermanent loss called *impermanent*?",
    choices: [
      { id: "a", text: "It only ever lasts a few minutes" },
      { id: "b", text: "It disappears once you collect enough fees" },
      { id: "c", text: "It reverses if the price ratio returns; it's only realized (permanent) when you withdraw while diverged" },
      { id: "d", text: "It applies only to stablecoin pools" },
    ],
    correctId: "c",
    explanation:
      "The loss can **reverse** if the ratio drifts back to where you deposited. It becomes **realized and permanent** only when you withdraw with the ratio still diverged.",
  },
  {
    id: "liquidity-providing-and-impermanent-loss.q4",
    lessonSlug: "liquidity-providing-and-impermanent-loss",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["amm", "impermanent-loss", "scenario", "math"],
    prompt:
      "You LP into an ETH/USDC pool, then ETH **doubles** (`2x`). Ignoring fees, your position is worth about how much, versus simply holding?",
    choices: [
      { id: "a", text: "About the same" },
      { id: "b", text: "~`5.7%` less than holding" },
      { id: "c", text: "~`5.7%` more than holding", feedback: "LPing lags a rising asset — the pool sold some ETH on the way up, so you end up below the hold value." },
      { id: "d", text: "~`20%` less than holding" },
    ],
    correctId: "b",
    explanation:
      "A `2x` ratio change produces ~`5.7%` impermanent loss. The pool rebalanced out of the riser, so you hold less ETH than if you'd simply held — about `5.7%` below the hold value before fees.",
  },
  {
    id: "liquidity-providing-and-impermanent-loss.q5",
    lessonSlug: "liquidity-providing-and-impermanent-loss",
    type: "single",
    difficulty: "medium",
    tags: ["amm", "impermanent-loss", "symmetry"],
    prompt: "Impermanent loss is **symmetric**. What does that mean?",
    choices: [
      { id: "a", text: "A `2x` move up and a `2x` move down both produce roughly the same ~`5.7%` IL" },
      { id: "b", text: "Both tokens must move by the same dollar amount" },
      { id: "c", text: "IL is always exactly offset by fees" },
      { id: "d", text: "The pool always splits gains evenly between LPs and traders" },
    ],
    correctId: "a",
    explanation:
      "IL depends only on the *size* of the ratio change, not its direction. A `2x` move either way yields ~`5.7%` IL versus holding.",
  },
  {
    id: "liquidity-providing-and-impermanent-loss.q6",
    lessonSlug: "liquidity-providing-and-impermanent-loss",
    type: "single",
    difficulty: "hard",
    tags: ["amm", "impermanent-loss", "scenario"],
    prompt: "Which pair would you expect to have the **lowest** impermanent loss?",
    choices: [
      { id: "a", text: "USDC / DAI (two stablecoins)" },
      { id: "b", text: "ETH / a new meme coin" },
      { id: "c", text: "BTC / a small-cap altcoin" },
      { id: "d", text: "ETH / BTC during a volatile week" },
    ],
    correctId: "a",
    explanation:
      "Two stablecoins barely diverge in price ratio, so their IL is tiny. Volatile or uncorrelated pairs see large ratio swings and therefore large IL.",
  },
  {
    id: "liquidity-providing-and-impermanent-loss.q7",
    lessonSlug: "liquidity-providing-and-impermanent-loss",
    type: "single",
    difficulty: "hard",
    tags: ["amm", "impermanent-loss", "risk"],
    prompt: "What is the **one-sided exit** risk for an LP?",
    choices: [
      { id: "a", text: "You can only withdraw one of the two tokens at a time" },
      { id: "b", text: "The pool freezes withdrawals during high volatility" },
      { id: "c", text: "You must pay an exit fee equal to the IL" },
      { id: "d", text: "If one token crashes toward zero, the pool leaves you holding mostly the worthless asset" },
    ],
    correctId: "d",
    explanation:
      "As one asset collapses, arbitrage drains the good asset and loads the pool with the falling one. You end up holding mostly the near-worthless token — IL approaching a near-total loss of the good asset.",
  },
  {
    id: "liquidity-providing-and-impermanent-loss.q8",
    lessonSlug: "liquidity-providing-and-impermanent-loss",
    type: "single",
    difficulty: "medium",
    tags: ["amm", "rewards", "risk"],
    prompt: "A pool advertises a very high APR. What is a common catch?",
    choices: [
      { id: "a", text: "The yield is often subsidized by a volatile reward token that can fall faster than the rewards accrue" },
      { id: "b", text: "High APR means impermanent loss is impossible" },
      { id: "c", text: "The protocol guarantees the APR for a year" },
      { id: "d", text: "Trading fees are turned off when APR is high" },
    ],
    correctId: "a",
    explanation:
      "Headline APRs are frequently paid in a **reward token** whose price is volatile. If that token drops, your real yield can be far below the advertised number — and it doesn't offset IL or smart-contract risk.",
  },
  {
    id: "liquidity-providing-and-impermanent-loss.q9",
    lessonSlug: "liquidity-providing-and-impermanent-loss",
    type: "single",
    difficulty: "easy",
    tags: ["amm", "constant-product"],
    prompt: "An AMM prices trades using which rule?",
    choices: [
      { id: "a", text: "An order book matching buyers and sellers" },
      { id: "b", text: "The constant product formula `x · y = k`" },
      { id: "c", text: "A daily price set by the protocol team" },
      { id: "d", text: "The price on a centralized exchange" },
    ],
    correctId: "b",
    explanation:
      "An AMM holds two assets and keeps the product of their balances constant (`x · y = k`). Trades move along that curve, which is exactly what creates impermanent loss when the ratio shifts.",
  },
];
