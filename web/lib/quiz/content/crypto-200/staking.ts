import type { Question } from "@/lib/quiz/types";

// Quiz for the "Staking: Securing Proof-of-Stake Networks" lesson.
export const questions: Question[] = [
  {
    id: "staking.q1",
    lessonSlug: "staking",
    type: "single",
    difficulty: "easy",
    tags: ["staking", "pos"],
    prompt: "In proof of stake, what do validators put at risk?",
    choices: [
      { id: "a", text: "Staked tokens, locked as collateral" },
      { id: "b", text: "Their computing hardware only" },
      { id: "c", text: "Nothing — staking is risk-free" },
      { id: "d", text: "A government bond" },
    ],
    correctId: "a",
    explanation:
      "In **proof of stake (PoS)**, validators lock — *stake* — the network's token as **collateral**, and are then chosen to propose and attest blocks.",
  },
  {
    id: "staking.q2",
    lessonSlug: "staking",
    type: "single",
    difficulty: "medium",
    tags: ["staking", "slashing"],
    prompt: "What is **slashing**?",
    choices: [
      { id: "a", text: "A bonus paid for long uptime" },
      { id: "b", text: "The protocol destroying part of a stake for provable misbehavior" },
      { id: "c", text: "Selling staked tokens at a discount" },
      { id: "d", text: "A reduction in network gas fees" },
    ],
    correctId: "b",
    explanation:
      "**Slashing** is the protocol **destroying** part (or in correlated mass events, all) of a validator's stake for provable misbehavior such as double-signing. Delegators are penalized too.",
  },
  {
    id: "staking.q3",
    lessonSlug: "staking",
    type: "single",
    difficulty: "easy",
    tags: ["staking", "rewards"],
    prompt: "Staking rewards are best understood as…",
    choices: [
      { id: "a", text: "Guaranteed bank-style interest" },
      { id: "b", text: "Compensation for real work and capital at risk" },
      { id: "c", text: "A government subsidy" },
      { id: "d", text: "A refund of gas fees" },
    ],
    correctId: "b",
    explanation:
      "Rewards come from issuance and/or fees and are **compensation for genuine work with capital on the line** — not risk-free interest.",
  },
  {
    id: "staking.q4",
    lessonSlug: "staking",
    type: "single",
    difficulty: "medium",
    tags: ["staking", "delegating"],
    prompt: "If you **delegate** to a validator instead of running your own, what comes with the rewards?",
    choices: [
      { id: "a", text: "Total immunity from that validator's penalties" },
      { id: "b", text: "A share of that validator's penalties as well as rewards" },
      { id: "c", text: "A guarantee that your tokens can never be slashed" },
      { id: "d", text: "The right to set the network's gas fees", feedback: "Delegating shares rewards and penalties; it doesn't grant control of fees." },
    ],
    correctId: "b",
    explanation:
      "Delegating lets you share **rewards** — but you also **share that validator's penalties**. Choosing a validator concentrates risk in their behavior and uptime.",
  },
  {
    id: "staking.q5",
    lessonSlug: "staking",
    type: "single",
    difficulty: "hard",
    tags: ["staking", "unbonding", "scenario"],
    prompt: "The token drops `30%` and you want out, but the network has a `21`-day unbonding period. What's true during that window?",
    choices: [
      { id: "a", text: "Your tokens are immediately sellable at the old price" },
      { id: "b", text: "Your tokens stay locked, earn nothing, and remain slashable" },
      { id: "c", text: "The protocol freezes the token's price for you" },
      { id: "d", text: "You earn double rewards as compensation" },
    ],
    correctId: "b",
    explanation:
      "During **unbonding**, tokens stay **locked**, **earn nothing**, and **remain slashable** — and the price keeps moving. The headline rate didn't make the position risk-free.",
  },
  {
    id: "staking.q6",
    lessonSlug: "staking",
    type: "single",
    difficulty: "medium",
    tags: ["staking", "slashing", "scenario"],
    prompt: "You delegated to a validator that **double-signs** and gets slashed. What happens to your stake?",
    choices: [
      { id: "a", text: "Nothing — only the validator's own tokens are touched" },
      { id: "b", text: "Your delegated stake is also penalized" },
      { id: "c", text: "Your stake is automatically moved to a safe validator" },
      { id: "d", text: "You receive the slashed amount as a reward" },
    ],
    correctId: "b",
    explanation:
      "Double-signing (equivocation) is provable misbehavior that triggers **slashing**, and **delegators are penalized too** — a percentage of your delegated stake is destroyed.",
  },
  {
    id: "staking.q7",
    lessonSlug: "staking",
    type: "single",
    difficulty: "hard",
    tags: ["staking", "misconception"],
    prompt: "Which statement corrects the \"free, risk-free yield\" view of staking?",
    choices: [
      { id: "a", text: "Rewards are guaranteed and principal can never be lost" },
      { id: "b", text: "Slashing can destroy principal, lockups block exits, and the token's price can fall more than rewards add" },
      { id: "c", text: "Staked tokens are insured by the network" },
      { id: "d", text: "Unbonding lets you sell instantly at any time" },
    ],
    correctId: "b",
    explanation:
      "Rewards compensate for **real risks**: **slashing** can destroy principal, **lockups** block exits, and the token's price can fall by more than rewards ever add.",
  },
  {
    id: "staking.q8",
    lessonSlug: "staking",
    type: "single",
    difficulty: "medium",
    tags: ["staking", "validator"],
    prompt: "Running your own validator (rather than delegating) generally requires…",
    choices: [
      { id: "a", text: "Setup, reliable uptime, and often a large minimum stake" },
      { id: "b", text: "Nothing more than a phone app and a single token" },
      { id: "c", text: "Permission from a central bank" },
      { id: "d", text: "Giving your keys to an exchange" },
    ],
    correctId: "a",
    explanation:
      "Running a **validator** needs setup, reliable **uptime**, and often a **large minimum stake** — which is why many people **delegate** instead.",
  },
  {
    id: "staking.q9",
    lessonSlug: "staking",
    type: "single",
    difficulty: "hard",
    tags: ["staking", "unbonding", "concentration"],
    prompt: "Which is an accurate risk of staking through a single validator?",
    choices: [
      { id: "a", text: "Choosing one validator concentrates risk — their downtime or misbehavior cuts your rewards or principal" },
      { id: "b", text: "Delegating spreads your stake across every validator automatically" },
      { id: "c", text: "Validators can never go offline" },
      { id: "d", text: "Unbonding tokens keep earning full rewards" },
    ],
    correctId: "a",
    explanation:
      "Picking a validator **concentrates risk**: their downtime cuts your rewards and their misbehavior (via slashing) can cut your **principal**. During unbonding, tokens earn nothing.",
  },
];
