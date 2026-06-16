import type { Question } from "@/lib/quiz/types";

// Quiz for the "Gas and Network Fees" lesson.
export const questions: Question[] = [
  {
    id: "gas-and-network-fees.q1",
    lessonSlug: "gas-and-network-fees",
    type: "single",
    difficulty: "easy",
    tags: ["gas", "fees"],
    prompt: "What does gas pay for?",
    choices: [
      { id: "a", text: "The computational work to process a transaction" },
      { id: "b", text: "A subscription to the exchange" },
      { id: "c", text: "Insurance against price drops" },
      { id: "d", text: "The issuer's marketing budget" },
    ],
    correctId: "a",
    explanation:
      "**Gas** measures the **computational work** a transaction needs, and the fee compensates validators for executing and securing it — not a profit margin you negotiate.",
  },
  {
    id: "gas-and-network-fees.q2",
    lessonSlug: "gas-and-network-fees",
    type: "single",
    difficulty: "medium",
    tags: ["gas", "base-fee"],
    prompt: "On an EIP-1559-style chain, which part of the fee is set **automatically** by the protocol from recent demand?",
    choices: [
      { id: "a", text: "The priority fee (tip)" },
      { id: "b", text: "The base fee" },
      { id: "c", text: "The gas limit" },
      { id: "d", text: "The max fee", feedback: "The max fee is a ceiling *you* choose, not a protocol-set value." },
    ],
    correctId: "b",
    explanation:
      "The **base fee** is set automatically by the protocol from recent demand and adjusts with congestion. On Ethereum it is **burned**, while the **priority fee (tip)** goes to the validator.",
  },
  {
    id: "gas-and-network-fees.q3",
    lessonSlug: "gas-and-network-fees",
    type: "single",
    difficulty: "easy",
    tags: ["gas", "tip"],
    prompt: "What is the **priority fee** (tip) for?",
    choices: [
      { id: "a", text: "Paying the protocol to burn more tokens" },
      { id: "b", text: "Tipping the validator to prioritize your transaction" },
      { id: "c", text: "Refunding you if the transaction fails" },
      { id: "d", text: "Lowering the base fee automatically" },
    ],
    correctId: "b",
    explanation:
      "The **priority fee** is an optional tip paid to the **validator** to get your transaction included sooner. The base fee, by contrast, is set by the protocol.",
  },
  {
    id: "gas-and-network-fees.q4",
    lessonSlug: "gas-and-network-fees",
    type: "single",
    difficulty: "medium",
    tags: ["gas", "congestion", "scenario"],
    prompt: "The network is congested and you want your transaction included faster. What should you do?",
    choices: [
      { id: "a", text: "Lower the gas limit to almost zero" },
      { id: "b", text: "Add or raise the priority tip" },
      { id: "c", text: "Set the max fee below the base fee" },
      { id: "d", text: "Wait for the protocol to lower the base fee for you" },
    ],
    correctId: "b",
    explanation:
      "Adding or raising the **priority tip** signals validators to prioritize your transaction. Lowering the gas limit or under-pricing the max fee would make things worse.",
  },
  {
    id: "gas-and-network-fees.q5",
    lessonSlug: "gas-and-network-fees",
    type: "single",
    difficulty: "hard",
    tags: ["gas", "revert", "scenario"],
    prompt: "Your swap reverts with an \"out of gas\" error. What happens to the gas?",
    choices: [
      { id: "a", text: "It is fully refunded because the swap didn't happen" },
      { id: "b", text: "It was still consumed, even though the swap failed" },
      { id: "c", text: "It is converted into a tip for next time" },
      { id: "d", text: "It is held in escrow until you retry" },
    ],
    correctId: "b",
    explanation:
      "A **revert** still costs gas — validators already spent computation executing and reverting it. You pay even though the swap didn't go through.",
  },
  {
    id: "gas-and-network-fees.q6",
    lessonSlug: "gas-and-network-fees",
    type: "single",
    difficulty: "medium",
    tags: ["gas", "gas-limit"],
    prompt: "What does the **gas limit** control?",
    choices: [
      { id: "a", text: "The maximum amount of computational work the transaction may consume" },
      { id: "b", text: "The exchange rate between two tokens" },
      { id: "c", text: "How many confirmations are required" },
      { id: "d", text: "The validator's salary" },
    ],
    correctId: "a",
    explanation:
      "The **gas limit** is the maximum work you authorize. Set it too low and the transaction runs out of gas and **reverts** — you pay the consumed gas and get nothing.",
  },
  {
    id: "gas-and-network-fees.q7",
    lessonSlug: "gas-and-network-fees",
    type: "single",
    difficulty: "hard",
    tags: ["gas", "max-fee", "scenario"],
    prompt: "You set your **max fee** below the current base fee. What is the most likely result?",
    choices: [
      { id: "a", text: "The transaction is included instantly at a discount" },
      { id: "b", text: "The transaction sits unconfirmed until conditions change" },
      { id: "c", text: "The protocol automatically tops up the difference" },
      { id: "d", text: "The base fee is lowered to match your max fee" },
    ],
    correctId: "b",
    explanation:
      "A **max fee too low** means your transaction can't cover the base fee, so it **sits unconfirmed** until congestion eases or you resubmit with a higher ceiling.",
  },
  {
    id: "gas-and-network-fees.q8",
    lessonSlug: "gas-and-network-fees",
    type: "single",
    difficulty: "medium",
    tags: ["gas", "chains"],
    prompt: "Why do gas fees vary so much from one chain to another?",
    choices: [
      { id: "a", text: "Each chain has different capacity, demand, and fee model; layer-2s are often cheaper" },
      { id: "b", text: "Fees are identical across all chains by law" },
      { id: "c", text: "Only the token's price affects gas, nothing else" },
      { id: "d", text: "Validators set a single global fee for all chains" },
    ],
    correctId: "a",
    explanation:
      "Fees vary by chain because each has different **capacity, demand, and fee model** — **layer-2** networks are often much cheaper than the base layer.",
  },
  {
    id: "gas-and-network-fees.q9",
    lessonSlug: "gas-and-network-fees",
    type: "single",
    difficulty: "easy",
    tags: ["gas", "misconception"],
    prompt: "Which statement is correct about failed transactions?",
    choices: [
      { id: "a", text: "If my transaction fails, I don't pay anything" },
      { id: "b", text: "Gas is consumed regardless, because validators still expend computation" },
      { id: "c", text: "Only successful transactions consume gas" },
      { id: "d", text: "The tip is refunded but the base fee is doubled" },
    ],
    correctId: "b",
    explanation:
      "Validators expend computation to execute and revert a failed transaction, so **gas is consumed regardless** of whether it succeeded.",
  },
];
