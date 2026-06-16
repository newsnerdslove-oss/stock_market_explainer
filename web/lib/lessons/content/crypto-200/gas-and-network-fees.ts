import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "gas-and-network-fees",
  title: "Gas and Network Fees",
  level: 2,
  moduleId: "crypto-200",
  moduleOrder: 4,
  summary: "What gas pays for, how the base fee and tip work, why fees swing — and why a failed transaction still costs you.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "Every on-chain transaction has a cost, and that cost confuses new users because it isn't a flat ticket price. It's a fee for **computational work**, set partly by the protocol and partly by you. Get the inputs wrong and you can pay for a transaction that does nothing.",
    },
    { type: "heading", text: "What gas is" },
    {
      type: "text",
      body:
        "**Gas** measures the computational work a transaction needs. The fee compensates the network's **validators** for executing and securing it — it isn't a profit margin you negotiate. More complex transactions need more gas.",
    },
    {
      type: "text",
      body:
        "On EIP-1559-style chains (such as Ethereum), the fee splits in two: a **base fee** set *automatically* by the protocol from recent demand, plus an optional **priority fee** (a tip) paid to the validator to get included sooner. The base fee adjusts with congestion — when blocks run above target it **rises**, and below target it **falls**. On Ethereum the base fee is **burned**, while the tip goes to the validator.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Gas", def: "A measure of the computational work a transaction requires." },
        { term: "Base fee", def: "The per-unit fee set automatically by the protocol from recent demand; on Ethereum it is burned." },
        { term: "Priority fee (tip)", def: "An optional extra paid to the validator to prioritize your transaction." },
        { term: "Gas limit", def: "The maximum amount of work (gas) you authorize a transaction to consume." },
        { term: "Max fee", def: "The ceiling on the per-unit price you're willing to pay." },
        { term: "Revert", def: "A transaction that fails and undoes its effects — but still consumes the gas already spent." },
      ],
    },
    { type: "heading", text: "Why fees vary — and the cruel part" },
    {
      type: "text",
      body:
        "You set a **max fee** (a price ceiling) and a **gas limit** (a work ceiling). Fees vary by chain because each has different capacity, demand, and fee model — layer-2 networks are often much cheaper. The cruel part: **failed transactions still cost gas**. Validators already spent computation executing and then reverting the transaction, so you pay regardless of the outcome.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "During a busy NFT mint, blocks fill up, so the **base fee climbs**. A user submitting a swap (illustrative) adds a modest **tip** to be included sooner. But they set the **gas limit too low**, so the transaction runs out of gas and **reverts** — the swap doesn't happen, yet the consumed gas is still deducted from their balance. They resubmit with a higher gas limit, and this time it succeeds.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Watch three failure modes: a **gas limit too low** causes an out-of-gas revert (you pay and get nothing); a **max fee too low** leaves the transaction sitting unconfirmed; and fee estimates are only *predictions* — congestion can change between estimate and inclusion.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Misconception:** \"If my transaction fails, I don't pay anything.\" Validators still expend computation to execute and revert it, so **gas is consumed regardless** of whether the transaction succeeded.",
    },
  ],
};
