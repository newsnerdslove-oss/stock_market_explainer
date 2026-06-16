import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "staking",
  title: "Staking: Securing Proof-of-Stake Networks",
  level: 2,
  moduleId: "crypto-200",
  moduleOrder: 6,
  summary: "How proof-of-stake works, the difference between validating and delegating, and the real risks behind the headline yield.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Staking is often pitched as easy yield, which buries the real story. Staking is how a **proof-of-stake** network is secured, and the rewards exist to compensate for **real work and real capital at risk** — not as bank-style interest. The risks are specific, and they matter.",
    },
    { type: "heading", text: "How proof of stake works" },
    {
      type: "text",
      body:
        "In **proof of stake (PoS)**, validators lock — *stake* — the network's token as **collateral** and are then chosen to propose and attest to blocks. Honest, reliable work earns **rewards**; dishonest or faulty work is **penalized**. The rewards come from issuance and/or fees and are compensation for doing genuine work with capital on the line.",
    },
    {
      type: "text",
      body:
        "Running a **validator** yourself needs setup, reliable uptime, and often a large minimum stake. Many networks let you **delegate** to a validator instead and share in the rewards — but delegating also means you share that validator's **penalties**.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Proof of stake (PoS)", def: "A consensus model where validators stake tokens as collateral to propose and attest blocks." },
        { term: "Validator", def: "A participant who stakes, runs infrastructure, and proposes/attests blocks for rewards." },
        { term: "Delegating", def: "Assigning your stake to a validator to share rewards — and their penalties." },
        { term: "Slashing", def: "Protocol destruction of part (or in mass events, all) of a stake for provable misbehavior." },
        { term: "Unbonding period", def: "A cool-down after unstaking during which tokens are locked, earn nothing, and may still be slashable." },
        { term: "Staking rewards", def: "Issuance and/or fees paid for honest validation — compensation for work and risk, not guaranteed interest." },
        { term: "Lockup", def: "The condition in which staked tokens cannot be freely sold or moved." },
      ],
    },
    { type: "heading", text: "The real risks" },
    {
      type: "text",
      body:
        "**Slashing** is the protocol *destroying* part of a validator's stake — and in correlated mass events, potentially all of it — for provable misbehavior such as double-signing (equivocation). The penalty escalates when many validators are slashed at once, and **delegators are penalized too**. Separately, staked tokens are usually **locked**: unstaking triggers an **unbonding** period (days to weeks) during which the tokens earn nothing, can't be sold or moved, and **may still be slashable**.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "You delegate tokens to a validator and earn about `5%` APR (illustrative). Two things then go wrong. (1) The validator **double-signs** and is **slashed**, so a percentage of the delegated stake — including yours — is destroyed. (2) You try to exit during a price drop, but a `21`-day **unbonding** period locks your tokens while the price keeps falling. The headline rate did nothing to make the position risk-free.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "During unbonding, tokens **earn nothing**, can **still be slashed**, and **can't be sold**. Choosing a validator also **concentrates risk** — their downtime or misbehavior cuts directly into your rewards and principal.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Misconception:** \"Staking is free, risk-free yield.\" The rewards compensate for real risks: **slashing** can destroy principal, **lockups** block your exit, and the token's price can fall by more than the rewards ever add.",
    },
  ],
};
