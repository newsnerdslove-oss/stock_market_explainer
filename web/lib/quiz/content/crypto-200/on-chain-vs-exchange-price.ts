import type { Question } from "@/lib/quiz/types";

// Quiz for the "On-Chain vs Exchange Price" lesson.
export const questions: Question[] = [
  {
    id: "on-chain-vs-exchange-price.q1",
    lessonSlug: "on-chain-vs-exchange-price",
    type: "single",
    difficulty: "easy",
    tags: ["price", "cex"],
    prompt: "A centralized exchange (CEX) sets its price primarily from…",
    choices: [
      { id: "a", text: "An order book of bids and asks" },
      { id: "b", text: "The ratio of assets in a liquidity pool" },
      { id: "c", text: "A government-published reference rate" },
      { id: "d", text: "The price on a rival exchange" },
    ],
    correctId: "a",
    explanation:
      "A CEX price comes from an **order book** — the best bid and ask among resting orders. Most trades settle on the exchange's **internal ledger** until you withdraw.",
  },
  {
    id: "on-chain-vs-exchange-price.q2",
    lessonSlug: "on-chain-vs-exchange-price",
    type: "single",
    difficulty: "easy",
    tags: ["price", "dex", "amm"],
    prompt: "How does an on-chain AMM compute a token's price?",
    choices: [
      { id: "a", text: "From the ratio of assets in its liquidity pool" },
      { id: "b", text: "From the exchange's internal ledger" },
      { id: "c", text: "From the best bid on an order book" },
      { id: "d", text: "From a central authority's quote" },
    ],
    correctId: "a",
    explanation:
      "An on-chain / DEX price is computed by a smart contract — often an **AMM** — from the **ratio of assets in a liquidity pool**, and it settles on-chain.",
  },
  {
    id: "on-chain-vs-exchange-price.q3",
    lessonSlug: "on-chain-vs-exchange-price",
    type: "single",
    difficulty: "medium",
    tags: ["price", "arbitrage"],
    prompt: "What mechanism brings DEX and CEX prices back together?",
    choices: [
      { id: "a", text: "Arbitrage" },
      { id: "b", text: "Slashing" },
      { id: "c", text: "A protocol-enforced fixed rate" },
      { id: "d", text: "Staking rewards", feedback: "Staking secures a network; it doesn't reconcile prices across venues." },
    ],
    correctId: "a",
    explanation:
      "**Arbitrage** narrows gaps: traders buy on the cheaper venue and sell on the dearer one, pushing the prices toward each other until the gap is smaller than the cost of the trade.",
  },
  {
    id: "on-chain-vs-exchange-price.q4",
    lessonSlug: "on-chain-vs-exchange-price",
    type: "single",
    difficulty: "medium",
    tags: ["price", "venues"],
    prompt: "Why do a CEX and a DEX show different prices for the same token?",
    choices: [
      { id: "a", text: "One of them is always reporting a bug" },
      { id: "b", text: "They have separate liquidity, order flow, fees, and no central authority forcing a match" },
      { id: "c", text: "DEX prices are always exactly double CEX prices" },
      { id: "d", text: "A regulator sets a different price for each" },
    ],
    correctId: "b",
    explanation:
      "Each venue has its own **liquidity and order flow**, plus differing fees and latency, and nothing forces a match. Price is **venue-specific**; aggregators show a blended figure.",
  },
  {
    id: "on-chain-vs-exchange-price.q5",
    lessonSlug: "on-chain-vs-exchange-price",
    type: "single",
    difficulty: "medium",
    tags: ["price", "arbitrage", "scenario"],
    prompt: "A token is `$9.80` on a CEX and `$10.20` on a DEX, but a round-trip arbitrage costs about `$0.50`. What's the likely outcome?",
    choices: [
      { id: "a", text: "Arbitrageurs instantly erase the gap to zero" },
      { id: "b", text: "The gap may persist, because it isn't profitable after costs" },
      { id: "c", text: "The DEX price will be forced down to `$9.80` by the protocol" },
      { id: "d", text: "Both prices jump to `$10.20`" },
    ],
    correctId: "b",
    explanation:
      "The `$0.40` gap is smaller than the `$0.50` round-trip cost, so there's no profit left to chase. **Gaps persist** when arbitrage is costly or slow.",
  },
  {
    id: "on-chain-vs-exchange-price.q6",
    lessonSlug: "on-chain-vs-exchange-price",
    type: "single",
    difficulty: "hard",
    tags: ["price", "custody", "scenario"],
    prompt: "You bought a token on a CEX and never withdrew it. Where does that balance actually live?",
    choices: [
      { id: "a", text: "In your self-custodied on-chain wallet" },
      { id: "b", text: "On the exchange's internal ledger, as an IOU until you withdraw" },
      { id: "c", text: "Inside the DEX liquidity pool" },
      { id: "d", text: "In a government escrow account" },
    ],
    correctId: "b",
    explanation:
      "A CEX balance you haven't withdrawn is an **IOU on the internal ledger** — not in your custody on-chain until you withdraw it.",
  },
  {
    id: "on-chain-vs-exchange-price.q7",
    lessonSlug: "on-chain-vs-exchange-price",
    type: "single",
    difficulty: "hard",
    tags: ["price", "slippage", "scenario"],
    prompt: "A thin DEX pool quotes a token at `$5.00`. You want to buy a large amount. What should you expect?",
    choices: [
      { id: "a", text: "You'll fill the whole order at exactly `$5.00`" },
      { id: "b", text: "Your large order moves the pool and fills worse than the quote (slippage)" },
      { id: "c", text: "The protocol guarantees the quoted price for any size" },
      { id: "d", text: "The price will drop below `$5.00` as you buy" },
    ],
    correctId: "b",
    explanation:
      "A thin pool's quoted price isn't the price you'll get for size — a large order shifts the pool balances and fills **worse** (slippage).",
  },
  {
    id: "on-chain-vs-exchange-price.q8",
    lessonSlug: "on-chain-vs-exchange-price",
    type: "single",
    difficulty: "medium",
    tags: ["price", "misconception"],
    prompt: "Which statement reflects the lesson's view of \"the price\"?",
    choices: [
      { id: "a", text: "An asset has one true price everywhere at once" },
      { id: "b", text: "Price is venue-specific; arbitrage narrows but doesn't perfectly erase differences" },
      { id: "c", text: "Only the CEX price is real; DEX prices are fake" },
      { id: "d", text: "Aggregator prices are the exact price on every venue" },
    ],
    correctId: "b",
    explanation:
      "Price is **per-venue**. Arbitrage narrows differences but doesn't perfectly erase them, especially when moving funds between venues is slow or costly.",
  },
  {
    id: "on-chain-vs-exchange-price.q9",
    lessonSlug: "on-chain-vs-exchange-price",
    type: "single",
    difficulty: "hard",
    tags: ["price", "arbitrage", "scenario"],
    prompt: "A token is `$10.00` on a CEX and `$10.30` on a DEX. An arbitrageur buys on the CEX and sells into the DEX pool. What happens to the two prices?",
    choices: [
      { id: "a", text: "The CEX price nudges up while selling into the pool lowers the DEX price — they converge" },
      { id: "b", text: "Both rise together to `$10.30`" },
      { id: "c", text: "Both fall together to `$10.00`" },
      { id: "d", text: "The DEX price rises further away from the CEX" },
    ],
    correctId: "a",
    explanation:
      "CEX buying nudges its price **up**, while selling into the pool **lowers** the DEX price, so the two **converge** toward a middle figure — until the gap falls below gas plus fees.",
  },
];
