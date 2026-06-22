import type { Question } from "@/lib/quiz/types";

// Quiz for the "MEV, Sandwich Attacks & Execution Risk" lesson.
export const questions: Question[] = [
  {
    id: "mev-sandwich-and-execution-risk.q1",
    lessonSlug: "mev-sandwich-and-execution-risk",
    type: "single",
    difficulty: "easy",
    tags: ["mev", "definition"],
    prompt: "What does **MEV** capture?",
    choices: [
      { id: "a", text: "The trading fee an AMM pays to liquidity providers" },
      { id: "b", text: "Profit from controlling the **ordering, inclusion, or exclusion** of transactions in a block" },
      { id: "c", text: "The interest rate a lending pool charges borrowers" },
      { id: "d", text: "The gas fee paid to broadcast a transaction" },
    ],
    correctId: "b",
    explanation:
      "MEV — maximal extractable value — is the profit available to whoever controls how transactions are **ordered, included, or censored** in a block. On a transparent ledger, order is power.",
  },
  {
    id: "mev-sandwich-and-execution-risk.q2",
    lessonSlug: "mev-sandwich-and-execution-risk",
    type: "single",
    difficulty: "easy",
    tags: ["mev", "mempool"],
    prompt: "Why does the public **mempool** make front-running possible?",
    choices: [
      { id: "a", text: "It sets the price of every token on the chain" },
      { id: "b", text: "It charges a fee that bots collect from your trade", feedback: "The mempool isn't a fee mechanism — it's a waiting room of pending transactions that anyone can read." },
      { id: "c", text: "Your transaction sits there **unconfirmed and visible** before it settles, so bots can react to it" },
      { id: "d", text: "It confirms transactions instantly, leaving no time to react" },
    ],
    correctId: "c",
    explanation:
      "The mempool is a public waiting room of **pending, unconfirmed** transactions. Because searchers can read your DEX swap before it executes, they can insert their own transactions around it.",
  },
  {
    id: "mev-sandwich-and-execution-risk.q3",
    lessonSlug: "mev-sandwich-and-execution-risk",
    type: "single",
    difficulty: "medium",
    tags: ["mev", "sandwich"],
    prompt: "In a **sandwich attack**, what happens in the correct order?",
    choices: [
      { id: "a", text: "The searcher sells before you, then buys after you" },
      { id: "b", text: "The searcher only buys after your trade, never before" },
      { id: "c", text: "The protocol charges you a penalty fee on both sides of the trade" },
      { id: "d", text: "The searcher **buys before** you (front-run), your trade fills at a higher price, then the searcher **sells after** you (back-run)" },
    ],
    correctId: "d",
    explanation:
      "Front-run, your trade, back-run. The searcher's buy pushes the AMM price up, your buy fills at that inflated price for fewer tokens, and the searcher sells right after into the move it created.",
  },
  {
    id: "mev-sandwich-and-execution-risk.q4",
    lessonSlug: "mev-sandwich-and-execution-risk",
    type: "single",
    difficulty: "medium",
    tags: ["mev", "sandwich", "slippage"],
    prompt: "Which trade is the **most attractive** target for a sandwich?",
    choices: [
      { id: "a", text: "A large trade with a `5%` slippage tolerance in a thin pool" },
      { id: "b", text: "A tiny trade with a `0.1%` slippage cap in a deep pool" },
      { id: "c", text: "A trade routed through a private MEV-protected RPC" },
      { id: "d", text: "A limit order resting on a centralized exchange" },
    ],
    correctId: "a",
    explanation:
      "Sandwiches need **room to move the price**. A large trade, loose `5%` tolerance, and thin liquidity together hand the searcher maximum headroom to extract — the loose cap literally states how much worse a fill you'll accept.",
  },
  {
    id: "mev-sandwich-and-execution-risk.q5",
    lessonSlug: "mev-sandwich-and-execution-risk",
    type: "single",
    difficulty: "medium",
    tags: ["mev", "front-running", "slippage"],
    prompt: "How do **slippage** and **front-running** differ?",
    choices: [
      { id: "a", text: "They are the same thing under two names" },
      { id: "b", text: "Slippage only happens on centralized exchanges; front-running only on-chain" },
      { id: "c", text: "Slippage is the gap between quote and fill (your order moves the curve); front-running is someone acting on knowledge of your **pending** transaction" },
      { id: "d", text: "Front-running lowers your price; slippage always raises it" },
    ],
    correctId: "c",
    explanation:
      "Slippage is a price gap that grows with your trade size versus pool depth — even with no attacker. Front-running is the broader category of acting on your pending transaction; a sandwich is its most common retail pattern.",
  },
  {
    id: "mev-sandwich-and-execution-risk.q6",
    lessonSlug: "mev-sandwich-and-execution-risk",
    type: "single",
    difficulty: "medium",
    tags: ["mev", "defense", "private-mempool"],
    prompt: "What does routing a trade through a **private mempool / MEV-protected RPC** (e.g. Flashbots Protect) accomplish?",
    choices: [
      { id: "a", text: "It guarantees your trade fills at exactly the quoted price" },
      { id: "b", text: "It keeps your transaction **out of the public mempool**, so searchers can't see and sandwich it" },
      { id: "c", text: "It eliminates all slippage regardless of trade size" },
      { id: "d", text: "It lets you reverse a transaction after it confirms" },
    ],
    correctId: "b",
    explanation:
      "A private/MEV-protected route hides your transaction from the public mempool. Searchers can't sandwich what they can't see — it addresses the *information* leak, while slippage settings only limit the damage once a trade is public.",
  },
  {
    id: "mev-sandwich-and-execution-risk.q7",
    lessonSlug: "mev-sandwich-and-execution-risk",
    type: "single",
    difficulty: "hard",
    tags: ["mev", "defense", "slippage", "scenario"],
    prompt: "You set an **extremely tight** slippage cap to avoid a sandwich. What is the realistic trade-off?",
    choices: [
      { id: "a", text: "Your trade is now guaranteed to fill at a better-than-quoted price" },
      { id: "b", text: "Searchers can no longer see your transaction in the mempool" },
      { id: "c", text: "Your trade becomes impossible to broadcast" },
      { id: "d", text: "The trade is more likely to **revert** — and on many chains you still pay gas on the failed transaction" },
    ],
    correctId: "d",
    explanation:
      "A very tight cap protects your *price* but raises the chance the swap **reverts** if the pool moves at all, and you may still owe gas on the failure. It limits sandwich *damage* but doesn't hide your trade — a private RPC does that.",
  },
];
