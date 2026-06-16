import type { Question } from "@/lib/quiz/types";

// Quiz for the "Coins vs. tokens" lesson.
export const questions: Question[] = [
  {
    id: "coins-vs-tokens.q1",
    lessonSlug: "coins-vs-tokens",
    type: "single",
    difficulty: "easy",
    tags: ["crypto", "coins", "tokens"],
    prompt: "What is the core difference between a **coin** and a **token**?",
    choices: [
      { id: "a", text: "A coin has its own blockchain; a token is issued on an existing one" },
      { id: "b", text: "A coin is always worth more than a token" },
      { id: "c", text: "A token has its own blockchain; a coin is issued on top of one", feedback: "It's the other way around — the coin is the native asset of its own chain." },
      { id: "d", text: "There is no difference; the words are interchangeable" },
    ],
    correctId: "a",
    explanation:
      "A **coin** is the native asset of its *own* blockchain (BTC, ETH). A **token** is issued *on top of* an existing blockchain (USDC on Ethereum).",
  },
  {
    id: "coins-vs-tokens.q2",
    lessonSlug: "coins-vs-tokens",
    type: "single",
    difficulty: "easy",
    tags: ["crypto", "blockchain"],
    prompt: "A blockchain is best described as…",
    choices: [
      { id: "a", text: "A shared, tamper-resistant public ledger maintained by a network, with no central authority" },
      { id: "b", text: "A private database owned and run by one company" },
      { id: "c", text: "A bank that insures your deposits" },
      { id: "d", text: "A single computer that stores all the world's money" },
    ],
    correctId: "a",
    explanation:
      "A **blockchain** is a shared, tamper-resistant public ledger kept honest by a whole network — there's **no central authority** in charge of it.",
  },
  {
    id: "coins-vs-tokens.q3",
    lessonSlug: "coins-vs-tokens",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "coins"],
    prompt: "**ETH** is the native asset of the Ethereum network. That makes ETH a…",
    choices: [
      { id: "a", text: "Token" },
      { id: "b", text: "Stablecoin" },
      { id: "c", text: "Coin" },
      { id: "d", text: "Stock" },
    ],
    correctId: "c",
    explanation:
      "Because ETH is the **native asset of its own blockchain** (Ethereum) and pays the network's gas fees, it's a **coin**.",
  },
  {
    id: "coins-vs-tokens.q4",
    lessonSlug: "coins-vs-tokens",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "tokens", "stablecoin"],
    prompt: "**USDC** is an ERC-20 asset issued on Ethereum and designed to track ~`$1`. It is therefore a…",
    choices: [
      { id: "a", text: "Coin with its own blockchain" },
      { id: "b", text: "Network fee" },
      { id: "c", text: "Token (and specifically a stablecoin)" },
      { id: "d", text: "Government-backed currency" },
    ],
    correctId: "c",
    explanation:
      "USDC is *issued on* Ethereum, so it's a **token**, and because it's designed to hold ~`$1` it's a **stablecoin**.",
  },
  {
    id: "coins-vs-tokens.q5",
    lessonSlug: "coins-vs-tokens",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "fees", "gas"],
    prompt: "What is *gas* (a network fee) used for?",
    choices: [
      { id: "a", text: "Insuring your crypto against loss" },
      { id: "b", text: "Paying to record a transaction on the blockchain, in the chain's native coin" },
      { id: "c", text: "Converting tokens into government currency" },
      { id: "d", text: "Resetting a lost password" },
    ],
    correctId: "b",
    explanation:
      "**Gas** is the fee — paid in the chain's native **coin** — to get a transaction recorded on the network.",
  },
  {
    id: "coins-vs-tokens.q6",
    lessonSlug: "coins-vs-tokens",
    type: "single",
    difficulty: "hard",
    tags: ["crypto", "tokens", "gas", "application"],
    prompt:
      "Your wallet holds **100 USDC** and **0 ETH**. You try to send some USDC to a friend and the transfer fails. The most likely reason is…",
    choices: [
      { id: "a", text: "USDC can never be sent between wallets" },
      { id: "b", text: "You need ETH to pay the gas fee, since USDC is a token on Ethereum", },
      { id: "c", text: "Stablecoins can only be sold, not sent", feedback: "Stablecoins can be transferred — the issue here is having no coin to pay the fee." },
      { id: "d", text: "The exchange must approve every transfer" },
    ],
    correctId: "b",
    explanation:
      "USDC is a *token* on Ethereum, so moving it costs **gas paid in ETH**. With 0 ETH there's nothing to cover the fee — the token can't pay its own way.",
  },
  {
    id: "coins-vs-tokens.q7",
    lessonSlug: "coins-vs-tokens",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "tokens"],
    prompt: "Which of these can a **token** represent?",
    choices: [
      { id: "a", text: "Only a currency, nothing else" },
      { id: "b", text: "Only ownership of a physical building" },
      { id: "c", text: "A blockchain's gas fee schedule" },
      { id: "d", text: "A currency, in-app credits, voting rights, or a claim on something" },
    ],
    correctId: "d",
    explanation:
      "Tokens are flexible: they can stand for a currency, credits, **voting rights**, ownership claims, and more — all issued on top of a host blockchain.",
  },
  {
    id: "coins-vs-tokens.q8",
    lessonSlug: "coins-vs-tokens",
    type: "single",
    difficulty: "hard",
    tags: ["crypto", "misconception", "application"],
    prompt:
      "A beginner says: *\"All crypto is just Bitcoin, and a coin and a token are the same thing.\"* What's the best correction?",
    choices: [
      { id: "a", text: "They're right — every crypto is a version of Bitcoin" },
      { id: "b", text: "Bitcoin is one asset among thousands, and a coin runs its own chain while a token is issued on one" },
      { id: "c", text: "Coins and tokens are the same, but Bitcoin is unique" },
      { id: "d", text: "Tokens are older than coins, so Bitcoin doesn't count" },
    ],
    correctId: "b",
    explanation:
      "Bitcoin is just **one** of thousands of assets, and the coin/token distinction is real: a **coin** has its own blockchain, while a **token** is *issued on* an existing one.",
  },
];
