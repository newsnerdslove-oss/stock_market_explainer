import type { Question } from "@/lib/quiz/types";

// Quiz for the "DEX vs CEX: AMMs, Liquidity Pools, and Custody" lesson.
export const questions: Question[] = [
  {
    id: "dex-vs-cex.q1",
    lessonSlug: "dex-vs-cex",
    type: "single",
    difficulty: "easy",
    tags: ["dex", "custody"],
    prompt: "On a DEX, who holds your private keys while you trade?",
    choices: [
      { id: "a", text: "You do — it's self-custody throughout" },
      { id: "b", text: "The exchange operator" },
      { id: "c", text: "The validators" },
      { id: "d", text: "A government custodian" },
    ],
    correctId: "a",
    explanation:
      "A DEX is **non-custodial**: you trade directly from your own wallet via smart contracts, keeping **self-custody** the entire time.",
  },
  {
    id: "dex-vs-cex.q2",
    lessonSlug: "dex-vs-cex",
    type: "single",
    difficulty: "easy",
    tags: ["cex", "custody"],
    prompt: "A CEX is described as **custodial** because…",
    choices: [
      { id: "a", text: "It never touches your funds" },
      { id: "b", text: "You deposit funds and it holds the keys" },
      { id: "c", text: "It only works with hardware wallets" },
      { id: "d", text: "It refuses to let you trade" },
    ],
    correctId: "b",
    explanation:
      "A CEX is **custodial**: you deposit funds, the exchange holds the keys, and trades match on an **order book** off-chain on its internal ledger.",
  },
  {
    id: "dex-vs-cex.q3",
    lessonSlug: "dex-vs-cex",
    type: "single",
    difficulty: "medium",
    tags: ["dex", "amm"],
    prompt: "An AMM determines a trade's price from…",
    choices: [
      { id: "a", text: "The ratio of assets in its liquidity pool" },
      { id: "b", text: "A central order book of bids and asks" },
      { id: "c", text: "A vote among liquidity providers" },
      { id: "d", text: "The number of confirmations on the block", feedback: "Confirmations relate to finality, not to how an AMM prices a trade." },
    ],
    correctId: "a",
    explanation:
      "An **AMM** prices trades from the **ratio of assets in its liquidity pool** using a formula — the classic being constant-product, `x · y = k`.",
  },
  {
    id: "dex-vs-cex.q4",
    lessonSlug: "dex-vs-cex",
    type: "single",
    difficulty: "medium",
    tags: ["dex", "lp"],
    prompt: "What do liquidity providers (LPs) do, and why?",
    choices: [
      { id: "a", text: "Deposit asset pairs into a pool and earn a share of the trading fees" },
      { id: "b", text: "Set the order book prices manually" },
      { id: "c", text: "Hold other users' private keys for safekeeping" },
      { id: "d", text: "Burn the base fee on every trade" },
    ],
    correctId: "a",
    explanation:
      "**LPs** deposit pairs of assets into a pool and **earn a share of the fees** in return. The pool is what an AMM trades against.",
  },
  {
    id: "dex-vs-cex.q5",
    lessonSlug: "dex-vs-cex",
    type: "single",
    difficulty: "hard",
    tags: ["dex", "slippage", "scenario"],
    prompt: "A large swap in a small AMM pool fills far worse than a tiny test trade did. Why?",
    choices: [
      { id: "a", text: "Large trades move the pool's balances and price (slippage / price impact)" },
      { id: "b", text: "The protocol punishes large traders with a fine" },
      { id: "c", text: "Small trades always pay more per token" },
      { id: "d", text: "The validator changed the price mid-trade" },
    ],
    correctId: "a",
    explanation:
      "A trade **shifts the pool's balances** and therefore its price, so a large trade relative to pool size executes worse — that's **slippage / price impact**. Deeper pools give steadier prices.",
  },
  {
    id: "dex-vs-cex.q6",
    lessonSlug: "dex-vs-cex",
    type: "single",
    difficulty: "medium",
    tags: ["cex", "trade-offs", "scenario"],
    prompt: "You value being able to contact support to help recover from a mistake. Which venue fits — and what's the cost?",
    choices: [
      { id: "a", text: "A DEX, with no trade-offs" },
      { id: "b", text: "A CEX, accepting custodial / counterparty risk in exchange for support and recovery" },
      { id: "c", text: "A DEX, because it has a 24/7 support desk" },
      { id: "d", text: "Neither — no venue offers any support" },
    ],
    correctId: "b",
    explanation:
      "A **CEX** offers a support desk and recovery paths, but you accept **custodial / counterparty risk**. A DEX is self-custody and **has no support desk**.",
  },
  {
    id: "dex-vs-cex.q7",
    lessonSlug: "dex-vs-cex",
    type: "single",
    difficulty: "hard",
    tags: ["dex", "slippage-tolerance", "scenario"],
    prompt: "You set a `1%` slippage tolerance and your swap is **rejected** in a thin pool. What does that mean?",
    choices: [
      { id: "a", text: "The trade would have moved the price beyond your cap, so it was blocked to protect you" },
      { id: "b", text: "Your wallet ran out of gas" },
      { id: "c", text: "The DEX is permanently offline" },
      { id: "d", text: "The token was delisted" },
    ],
    correctId: "a",
    explanation:
      "A **slippage tolerance** caps how far the price may move; the trade exceeded `1%`, so it was **rejected** to protect you from a bad fill. You can split the order or use a deeper pool.",
  },
  {
    id: "dex-vs-cex.q8",
    lessonSlug: "dex-vs-cex",
    type: "single",
    difficulty: "medium",
    tags: ["dex", "misconception"],
    prompt: "Which statement is correct about DEX vs CEX pricing?",
    choices: [
      { id: "a", text: "A DEX always gives a better price than a CEX" },
      { id: "b", text: "AMM pricing depends on pool depth; a shallow pool plus gas can make a DEX worse" },
      { id: "c", text: "A CEX is always cheaper for every trade" },
      { id: "d", text: "Pool depth has no effect on price" },
    ],
    correctId: "b",
    explanation:
      "AMM pricing depends on **pool depth** — a shallow pool plus gas can make a DEX *worse*. Neither venue is universally cheaper.",
  },
  {
    id: "dex-vs-cex.q9",
    lessonSlug: "dex-vs-cex",
    type: "single",
    difficulty: "hard",
    tags: ["dex", "risk"],
    prompt: "Which is a real risk specific to trading on a DEX?",
    choices: [
      { id: "a", text: "Smart-contract risk, slippage, gas, and malicious-token / approval risk" },
      { id: "b", text: "Mandatory KYC before every swap" },
      { id: "c", text: "A guaranteed support desk that reverses trades" },
      { id: "d", text: "The protocol holding your private keys" },
    ],
    correctId: "a",
    explanation:
      "DEX trade-offs include **smart-contract risk, slippage, gas, and malicious-token / approval risk** — and there is **no support desk**. KYC and custody are CEX traits.",
  },
  {
    id: "dex-vs-cex.q10",
    lessonSlug: "dex-vs-cex",
    type: "single",
    difficulty: "easy",
    tags: ["cex", "trade-offs"],
    prompt: "Which is an advantage typically associated with a CEX?",
    choices: [
      { id: "a", text: "Self-custody of your keys at all times" },
      { id: "b", text: "More liquidity, fiat on-ramps, and a familiar interface" },
      { id: "c", text: "Freedom from any counterparty risk" },
      { id: "d", text: "No identity checks ever" },
    ],
    correctId: "b",
    explanation:
      "A CEX offers **more liquidity, fiat on-ramps, and a familiar UI** — but you trust a third party with custody (counterparty / insolvency risk) and must pass KYC.",
  },
];
