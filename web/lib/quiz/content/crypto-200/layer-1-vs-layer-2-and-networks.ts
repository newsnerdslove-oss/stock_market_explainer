import type { Question } from "@/lib/quiz/types";

// Quiz for the "Layer 1 vs Layer 2 (and What a 'Network' Is)" lesson.
export const questions: Question[] = [
  {
    id: "layer-1-vs-layer-2-and-networks.q1",
    lessonSlug: "layer-1-vs-layer-2-and-networks",
    type: "single",
    difficulty: "easy",
    tags: ["network", "fundamentals"],
    prompt: "What is a blockchain **network** (chain)?",
    choices: [
      { id: "a", text: "A shared ledger maintained by computers that agree on its state" },
      { id: "b", text: "A single company's private database of customer balances" },
      { id: "c", text: "A wallet app installed on your phone" },
      { id: "d", text: "The Wi-Fi connection your wallet uses" },
    ],
    correctId: "a",
    explanation:
      "A **network** is a shared ledger maintained by a set of computers that agree on its state. Each network — Bitcoin, Ethereum, Base — tracks balances on its own separate ledger.",
  },
  {
    id: "layer-1-vs-layer-2-and-networks.q2",
    lessonSlug: "layer-1-vs-layer-2-and-networks",
    type: "single",
    difficulty: "easy",
    tags: ["layer-1", "settlement"],
    prompt: "Which best describes a **Layer 1**?",
    choices: [
      { id: "a", text: "A network built on top of another chain to lower fees" },
      { id: "b", text: "A base blockchain that settles its own transactions and provides its own security" },
      { id: "c", text: "A bridge that moves tokens between two chains" },
      { id: "d", text: "A wallet feature that batches transactions" },
    ],
    correctId: "b",
    explanation:
      "A **Layer 1 (L1)** is a base chain — like Bitcoin or Ethereum — that settles its own transactions with its own validators or miners. An L2, by contrast, runs *on top* of an L1.",
  },
  {
    id: "layer-1-vs-layer-2-and-networks.q3",
    lessonSlug: "layer-1-vs-layer-2-and-networks",
    type: "single",
    difficulty: "medium",
    tags: ["layer-2", "rollup"],
    prompt: "Arbitrum, Optimism, and Base are examples of what?",
    choices: [
      { id: "a", text: "Layer 1 base chains that each run their own independent security" },
      { id: "b", text: "Centralized exchanges" },
      { id: "c", text: "Layer 2 rollups that run on top of Ethereum and post data back to it" },
      { id: "d", text: "Stablecoins pegged to the dollar" },
    ],
    correctId: "c",
    explanation:
      "Arbitrum, Optimism, and Base are **Layer 2 rollups** on Ethereum. They batch transactions off-chain and post data back to Ethereum (the L1), inheriting much of its security.",
  },
  {
    id: "layer-1-vs-layer-2-and-networks.q4",
    lessonSlug: "layer-1-vs-layer-2-and-networks",
    type: "single",
    difficulty: "medium",
    tags: ["layer-2", "why", "scaling"],
    prompt: "Why do Layer 2 networks exist?",
    choices: [
      { id: "a", text: "To replace the base chain so it can be shut down" },
      { id: "b", text: "To scale transactions with lower fees and faster confirmations while settling to the L1" },
      { id: "c", text: "To remove the need for any security at all" },
      { id: "d", text: "To guarantee token prices never change" },
    ],
    correctId: "b",
    explanation:
      "L2s exist mainly for **scaling**: more transactions, **lower fees**, and faster confirmations than crowding everything onto the base chain — while still settling to the L1 for security.",
  },
  {
    id: "layer-1-vs-layer-2-and-networks.q5",
    lessonSlug: "layer-1-vs-layer-2-and-networks",
    type: "single",
    difficulty: "medium",
    tags: ["lightning", "bitcoin", "payment-channel"],
    prompt: "How does the **Lightning Network** relate to Bitcoin?",
    choices: [
      { id: "a", text: "It is a Layer 2 that opens a payment channel on Bitcoin and settles the final balance on-chain when the channel closes" },
      { id: "b", text: "It is a competing Layer 1 with no connection to Bitcoin" },
      { id: "c", text: "It is a centralized bank that custodies Bitcoin for users" },
      { id: "d", text: "It is a stablecoin issued by the Bitcoin network" },
    ],
    correctId: "a",
    explanation:
      "Lightning is a Bitcoin **Layer 2**. It opens a **payment channel** with an on-chain transaction, lets parties exchange many instant payments off-chain, and settles the net balance back to Bitcoin when the channel closes.",
  },
  {
    id: "layer-1-vs-layer-2-and-networks.q6",
    lessonSlug: "layer-1-vs-layer-2-and-networks",
    type: "single",
    difficulty: "hard",
    tags: ["wrong-network", "scenario", "risk"],
    prompt: "You send USDC **on Ethereum** to a deposit address that only supports USDC **on Base**. What is the risk?",
    choices: [
      { id: "a", text: "Nothing — USDC is USDC, so it always arrives" },
      { id: "b", text: "The network automatically converts it for a small fee" },
      { id: "c", text: "The funds may be stuck, recoverable only through a slow manual process, if at all" },
      { id: "d", text: "The transaction is rejected before it leaves your wallet, guaranteed" },
    ],
    correctId: "c",
    explanation:
      "Each network is a **separate ledger**, so the network must match on both ends. A wrong-network deposit can be **stuck** — matching the token name is not enough; the *network* must match too.",
  },
  {
    id: "layer-1-vs-layer-2-and-networks.q7",
    lessonSlug: "layer-1-vs-layer-2-and-networks",
    type: "single",
    difficulty: "hard",
    tags: ["layer-2", "tradeoffs", "withdrawal"],
    prompt: "Which is a real **tradeoff** of using a Layer 2 instead of the base chain?",
    choices: [
      { id: "a", text: "Moving funds back to the L1 can involve a bridge and, for optimistic rollups, a withdrawal delay" },
      { id: "b", text: "L2s always have higher fees than the L1" },
      { id: "c", text: "L2s remove the base chain's security entirely" },
      { id: "d", text: "L2 balances are tracked by the same ledger as the L1, so nothing ever needs to move" },
    ],
    correctId: "a",
    explanation:
      "L2s add complexity and trust assumptions. Moving assets between an L1 and an L2 usually needs a **bridge**, and optimistic rollups impose a **withdrawal delay** while the challenge window runs before funds can settle back to the L1.",
  },
];
