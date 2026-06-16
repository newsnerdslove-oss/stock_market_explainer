import type { Question } from "@/lib/quiz/types";

// Quiz for the "Reading On-Chain Data with Block Explorers" lesson.
export const questions: Question[] = [
  {
    id: "reading-on-chain-data.q1",
    lessonSlug: "reading-on-chain-data",
    type: "single",
    difficulty: "easy",
    tags: ["on-chain", "explorer"],
    prompt: "What does a block explorer let you do?",
    choices: [
      { id: "a", text: "Publicly view addresses, transactions, and balances" },
      { id: "b", text: "Reverse a transaction you regret" },
      { id: "c", text: "See the real names behind every address" },
      { id: "d", text: "Recover a lost private key" },
    ],
    correctId: "a",
    explanation:
      "A **block explorer** is a public website for looking up addresses, transactions, blocks, and balances — no account needed. On-chain data is **public and permanent**.",
  },
  {
    id: "reading-on-chain-data.q2",
    lessonSlug: "reading-on-chain-data",
    type: "single",
    difficulty: "medium",
    tags: ["on-chain", "privacy"],
    prompt: "Public blockchains are best described as…",
    choices: [
      { id: "a", text: "Fully anonymous, untraceable to anyone" },
      { id: "b", text: "Pseudonymous — public addresses, not real names, but traceable" },
      { id: "c", text: "Completely private, visible only to the sender" },
      { id: "d", text: "Encrypted so no one can see the amounts", feedback: "Amounts and addresses are openly visible on a public chain." },
    ],
    correctId: "b",
    explanation:
      "Public chains are **pseudonymous, not anonymous**: activity ties to a public **address**, not your name, but every action under it is **linkable** and traceable.",
  },
  {
    id: "reading-on-chain-data.q3",
    lessonSlug: "reading-on-chain-data",
    type: "single",
    difficulty: "easy",
    tags: ["on-chain", "confirmations"],
    prompt: "What is a **confirmation**?",
    choices: [
      { id: "a", text: "An email receipt from the exchange" },
      { id: "b", text: "Each block added after the one holding your transaction" },
      { id: "c", text: "A signature from the recipient" },
      { id: "d", text: "A refund of the gas fee" },
    ],
    correctId: "b",
    explanation:
      "Each **later block** after the one holding your transaction is another **confirmation** — more confirmations make it harder to reverse, so more means more certainty.",
  },
  {
    id: "reading-on-chain-data.q4",
    lessonSlug: "reading-on-chain-data",
    type: "single",
    difficulty: "medium",
    tags: ["on-chain", "visibility"],
    prompt: "Which of these is **NOT** recorded on-chain?",
    choices: [
      { id: "a", text: "The sender and receiver addresses" },
      { id: "b", text: "The amount and the fee" },
      { id: "c", text: "The real-world identity and reason for the transfer" },
      { id: "d", text: "The block number and timestamp" },
    ],
    correctId: "c",
    explanation:
      "On-chain you see addresses, amounts, fees, block number, timestamp, and status — but **not** real identities, the *reason* for a transfer, internal-ledger moves, or private keys.",
  },
  {
    id: "reading-on-chain-data.q5",
    lessonSlug: "reading-on-chain-data",
    type: "single",
    difficulty: "hard",
    tags: ["on-chain", "verification", "scenario"],
    prompt: "Someone sends you a **screenshot** claiming they paid you. What's the right way to confirm it?",
    choices: [
      { id: "a", text: "Trust the screenshot — images can't be faked" },
      { id: "b", text: "Paste the transaction hash into a block explorer and check status, addresses, amount, and confirmations" },
      { id: "c", text: "Ask them to send a second screenshot" },
      { id: "d", text: "Wait and assume it cleared" },
    ],
    correctId: "b",
    explanation:
      "Don't trust a screenshot. Paste the **transaction hash (TxID)** into an explorer and verify **status = success**, correct **from/to**, the exact **amount**, and **enough confirmations**.",
  },
  {
    id: "reading-on-chain-data.q6",
    lessonSlug: "reading-on-chain-data",
    type: "single",
    difficulty: "hard",
    tags: ["on-chain", "deanonymization", "scenario"],
    prompt: "You used one address for years, then withdrew from it to a KYC'd exchange. What's the consequence?",
    choices: [
      { id: "a", text: "Nothing — past activity is permanently hidden" },
      { id: "b", text: "That address's whole past and future history can be linked to your identity" },
      { id: "c", text: "Only the single withdrawal becomes visible" },
      { id: "d", text: "The blockchain deletes the old transactions" },
    ],
    correctId: "b",
    explanation:
      "Pseudonymity is **weak**. Once an address is tied to your identity (often via **KYC**), its **entire** past and future history can be associated with you.",
  },
  {
    id: "reading-on-chain-data.q7",
    lessonSlug: "reading-on-chain-data",
    type: "single",
    difficulty: "medium",
    tags: ["on-chain", "finality", "scenario"],
    prompt: "A transaction shows as **pending** with 0 confirmations. How should you treat it?",
    choices: [
      { id: "a", text: "As final and irreversible already" },
      { id: "b", text: "As not yet final — it can still fail or be replaced; wait for enough confirmations" },
      { id: "c", text: "As permanently stuck and lost" },
      { id: "d", text: "As proof of payment, same as a confirmed one" },
    ],
    correctId: "b",
    explanation:
      "A **pending / 0-confirmation** transaction can still fail or be replaced — wait for **enough confirmations** before treating it as final.",
  },
  {
    id: "reading-on-chain-data.q8",
    lessonSlug: "reading-on-chain-data",
    type: "single",
    difficulty: "easy",
    tags: ["on-chain", "txid"],
    prompt: "What is a **transaction hash (TxID)** used for?",
    choices: [
      { id: "a", text: "Looking the transaction up on a block explorer" },
      { id: "b", text: "Signing into your wallet" },
      { id: "c", text: "Recovering a seed phrase" },
      { id: "d", text: "Setting the gas limit" },
    ],
    correctId: "a",
    explanation:
      "The **transaction hash (TxID)** is the unique id of a transaction — paste it into an explorer to look it up and verify status, addresses, amount, and confirmations.",
  },
  {
    id: "reading-on-chain-data.q9",
    lessonSlug: "reading-on-chain-data",
    type: "single",
    difficulty: "hard",
    tags: ["on-chain", "misconception"],
    prompt: "Which statement corrects the \"crypto is anonymous\" misconception?",
    choices: [
      { id: "a", text: "Transactions are encrypted, so they can't be traced to anyone" },
      { id: "b", text: "Public chains are pseudonymous: every transaction is public and permanent, and once linked to identity the whole history can be traced" },
      { id: "c", text: "Only the exchange can ever see your transactions" },
      { id: "d", text: "Addresses change automatically to hide your activity" },
    ],
    correctId: "b",
    explanation:
      "Public chains are **pseudonymous**: every transaction for an address is **public and permanent**, and once the address is linked to your identity, the whole history can be traced.",
  },
];
