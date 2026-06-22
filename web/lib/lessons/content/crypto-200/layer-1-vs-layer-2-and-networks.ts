import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "layer-1-vs-layer-2-and-networks",
  title: "Layer 1 vs Layer 2 (and What a \"Network\" Is)",
  level: 2,
  moduleId: "crypto-200",
  moduleOrder: 9,
  summary:
    "What a blockchain \"network\" actually is, how a Layer 2 runs on top of a Layer 1 to cut fees — and why picking the wrong network can lose your tokens.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "When a wallet asks you to pick a **network** before sending tokens, it isn't a cosmetic setting. A network is a *separate blockchain* with its own ledger, its own fees, and its own copy of your balance. Send to the wrong one and the funds can be unreachable. To make that choice safely, you need to know what a network is and how **Layer 1** and **Layer 2** relate.",
    },
    { type: "heading", text: "What a \"network\" is" },
    {
      type: "text",
      body:
        "A **network** (or chain) is a shared ledger maintained by a set of computers that agree on its state. Bitcoin is one network; Ethereum is another; Arbitrum, Optimism, and Base are others again. Each keeps its own record of who owns what. The same token name can exist on several networks as *separate balances* — your USDC on Ethereum and your USDC on Base are tracked by **different ledgers** and do not automatically move between them.",
    },
    { type: "heading", text: "Layer 1: the base chain that settles itself" },
    {
      type: "text",
      body:
        "A **Layer 1 (L1)** is a base blockchain that **settles its own transactions** — it has its own validators or miners, its own security, and is the final word on its ledger. **Bitcoin** and **Ethereum** are the canonical examples. An L1 is secure and decentralized, but that comes at a cost: limited throughput. When demand spikes, blocks fill, fees climb, and confirmations slow down.",
    },
    { type: "heading", text: "Layer 2: built on top to scale" },
    {
      type: "text",
      body:
        "A **Layer 2 (L2)** is a separate network that runs **on top of** an L1 to process transactions cheaply and quickly, then posts data or proofs back down to the L1 for security. The L2 handles the heavy lifting off the base chain; the L1 remains the place where things ultimately **settle**. Because most of the work happens off the L1, fees are typically far lower and transactions confirm faster.",
    },
    {
      type: "text",
      body:
        "Two common flavors: **rollups** on Ethereum — such as **Arbitrum**, **Optimism**, and **Base** — batch many transactions off-chain and post their data to Ethereum, inheriting much of Ethereum's security. **Optimistic rollups** assume batches are valid unless someone submits a **fraud proof** during a challenge window. On the Bitcoin side, the **Lightning Network** opens a **payment channel** with one on-chain transaction, lets two parties exchange many instant payments off-chain, and settles the final balance back to Bitcoin only when the channel closes.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Network (chain)", def: "A shared ledger maintained by a set of computers that agree on its state; each network tracks balances separately." },
        { term: "Layer 1 (L1)", def: "A base blockchain that settles its own transactions and provides its own security, e.g. Bitcoin or Ethereum." },
        { term: "Layer 2 (L2)", def: "A network built on top of an L1 to process transactions cheaply and quickly, posting data/proofs back to the L1 for security." },
        { term: "Rollup", def: "An L2 that batches many transactions off-chain and posts their data to the L1; Arbitrum, Optimism, and Base are examples." },
        { term: "Fraud proof", def: "A challenge an optimistic rollup allows during a window to dispute an invalid batch before it finalizes on the L1." },
        { term: "Payment channel", def: "A Lightning-style construct where two parties transact off-chain and settle the net balance on the L1 when the channel closes." },
        { term: "Settlement", def: "Where a transaction becomes final — ultimately on the L1, even for activity that executed on an L2." },
      ],
    },
    { type: "heading", text: "Why L2s exist — and the tradeoffs" },
    {
      type: "text",
      body:
        "L2s exist mainly for **scaling**: more transactions, **lower fees**, faster confirmations than crowding everything onto the base chain. But the convenience has tradeoffs. An L2 adds **complexity** and its own trust assumptions — sequencers, bridges, and (for optimistic rollups) a **withdrawal delay** while the challenge window runs before funds can move back to the L1. Moving assets between an L1 and an L2, or between two L2s, usually requires a **bridge**, which is an extra step and an extra risk surface.",
    },
    { type: "heading", text: "Why \"which network\" matters when sending" },
    {
      type: "text",
      body:
        "Because each network is a separate ledger, the **network you select** must match on both ends. Sending USDC \"on Ethereum\" to an address that's only set up to receive on **Base** is a mismatch. Some platforms credit a different deposit address per network; others share an address format across chains, which makes a wrong-network send easy to do and hard to undo. A wrong-network deposit may be **stuck**, recoverable only through a slow, manual support process — if at all.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Wrong-network risk:** Always confirm the receiving side supports the **exact network** you're sending on — not just the token name. \"USDC\" on Ethereum, Base, and a dozen other chains are *different balances on different ledgers*. Matching the token but not the network can lock up funds.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "**Mental model:** the L1 is the courthouse where the record is final; an L2 is a fast clerk's office that does the day-to-day work and files the official record downstairs. The clerk is quicker and cheaper, but the L1 is still where it all settles.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Misconception:** \"My tokens live in my wallet, so the network doesn't matter.\" Your wallet just signs messages — the *balance* lives on a specific network's ledger. Choose the wrong network and you're addressing the wrong ledger entirely.",
    },
  ],
};
