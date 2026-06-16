import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "reading-on-chain-data",
  title: "Reading On-Chain Data with Block Explorers",
  level: 2,
  moduleId: "crypto-200",
  moduleOrder: 7,
  summary: "How to verify a transaction yourself with a block explorer — and what on-chain data does and doesn't reveal.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "One of the most useful habits in crypto is also one of the simplest: verify things yourself instead of trusting a screenshot. The tool for that is a **block explorer**, and learning to read it tells you both what a public blockchain *reveals* and — just as important — what it *doesn't*.",
    },
    { type: "heading", text: "What an explorer shows" },
    {
      type: "text",
      body:
        "A **block explorer** is a public website for looking up addresses, transactions, blocks, and balances — no account needed. On-chain data is **public and permanent**: addresses, amounts, timestamps, and the full transfer graph are visible forever.",
    },
    {
      type: "text",
      body:
        "That permanence is why blockchains are **pseudonymous, not anonymous**. Activity is tied to a public **address**, not your name — but every action under that address is **linkable**, and once an address is tied to your identity (often through KYC at an exchange), its past and future activity can be associated with you.",
    },
    {
      type: "list",
      items: [
        "**Visible on-chain:** sender and receiver addresses, amounts, fees, block number, timestamp, and status.",
        "**Not on-chain:** real identities, the *reason* for a transfer, off-exchange or internal-ledger moves, and private keys.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Block explorer", def: "A public website to view addresses, transactions, blocks, and balances — no account needed." },
        { term: "Transaction hash (TxID)", def: "The unique id of a transaction; paste it into an explorer to look the transaction up." },
        { term: "Pseudonymous", def: "Tied to a public address rather than a name, but with all activity linkable and traceable." },
        { term: "Confirmation", def: "Each block added after the one holding your transaction; more confirmations means harder to reverse." },
        { term: "Address", def: "A public identifier funds are sent to and from; anyone can view its balance and history." },
        { term: "Finality", def: "The point at which a transaction is settled enough to be treated as irreversible." },
      ],
    },
    { type: "heading", text: "Confirmations and how to verify" },
    {
      type: "text",
      body:
        "When a transaction is included in a block, each *later* block is another **confirmation** — and more confirmations make it harder to reverse, so more means more certainty. Required counts vary by network. To verify a transaction, paste its **transaction hash (TxID)** into an explorer and check that status is **success**, the **from/to** addresses are correct, the **amount** is exact, and there are **enough confirmations**. Don't trust a screenshot.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Someone tells you a payment was sent. You copy the **transaction hash** into a block explorer and see: status **Success**, From/To addresses that match, an amount (illustrative `0.5`), the fee, and `12` confirmations. *That* on-chain record — not the screenshot — is your proof. Note also that the **receiving address is public**, so anyone who has it can see its balance and history.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "A **pending** or 0-confirmation transaction can still fail or be replaced — wait for enough confirmations before treating it as final. And pseudonymity is **weak**: reusing an address or linking it to KYC can deanonymize its *entire* history at once.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Misconception:** \"Crypto is anonymous, so my transactions can't be traced to me.\" Public chains are **pseudonymous** — every transaction for an address is public and permanent, and once the address is linked to your identity, the whole history can be traced.",
    },
  ],
};
