import type { Question } from "@/lib/quiz/types";

// Quiz for the "How blockchains reach consensus (PoW vs PoS)" lesson.
export const questions: Question[] = [
  {
    id: "blockchain-consensus-pow-vs-pos.q1",
    lessonSlug: "blockchain-consensus-pow-vs-pos",
    type: "single",
    difficulty: "easy",
    tags: ["crypto", "consensus", "decentralization"],
    prompt: "What problem does a **consensus mechanism** solve for a blockchain?",
    choices: [
      { id: "a", text: "It lets a central admin approve every transaction", feedback: "Blockchains have no central authority — consensus is exactly what replaces that admin." },
      { id: "b", text: "It encrypts your private key so no one can steal it" },
      { id: "c", text: "It lets a network with no central authority agree on which new block to add, so everyone shares the same ledger" },
      { id: "d", text: "It sets the price of the coin each day" },
    ],
    correctId: "c",
    explanation:
      "A **consensus mechanism** is the set of rules a decentralized network uses to agree on the next block, so all participants end up with the same shared ledger — no bank or admin required.",
  },
  {
    id: "blockchain-consensus-pow-vs-pos.q2",
    lessonSlug: "blockchain-consensus-pow-vs-pos",
    type: "single",
    difficulty: "easy",
    tags: ["crypto", "proof-of-work", "mining"],
    prompt: "In **Proof of Work**, what does a **miner** actually do to add the next block?",
    choices: [
      { id: "a", text: "Spends energy and computing power solving a hard puzzle, racing to be first" },
      { id: "b", text: "Locks up coins as a deposit and waits to be chosen" },
      { id: "c", text: "Votes in an online poll with other coin holders" },
      { id: "d", text: "Pays a monthly subscription to the blockchain company" },
    ],
    correctId: "a",
    explanation:
      "**Mining** means burning electricity and hardware to solve a puzzle that has no shortcut. The first miner to find a valid answer wins the right to add the block and collect the reward. Bitcoin works this way.",
  },
  {
    id: "blockchain-consensus-pow-vs-pos.q3",
    lessonSlug: "blockchain-consensus-pow-vs-pos",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "proof-of-work", "51-attack", "security"],
    prompt: "What would a **51% attack** on a Proof of Work chain require, and why is it a deterrent?",
    choices: [
      { id: "a", text: "Guessing one validator's private key; it's deterred by long passwords" },
      { id: "b", text: "Controlling more than half the network's computing power; it's so expensive that cheating costs more than it's worth" },
      { id: "c", text: "Bribing the blockchain's CEO; there isn't one, so it's impossible" },
      { id: "d", text: "Owning more than half the coins; the protocol bans large holders" },
    ],
    correctId: "b",
    explanation:
      "To rewrite recent history, an attacker would have to out-mine the entire honest network — over 50% of its computing power. For a large chain that costs more than the attack could profit, so security comes from the expense.",
  },
  {
    id: "blockchain-consensus-pow-vs-pos.q4",
    lessonSlug: "blockchain-consensus-pow-vs-pos",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "proof-of-stake", "validators", "staking"],
    prompt: "In **Proof of Stake**, what puts a **validator** at risk if they cheat?",
    choices: [
      { id: "a", text: "The electricity they burned mining the block" },
      { id: "b", text: "A late fee charged by the exchange" },
      { id: "c", text: "Their own coins, which they locked up (staked) and can lose if caught cheating" },
      { id: "d", text: "Nothing — validators face no penalty for cheating", feedback: "There is a penalty: slashing destroys part of a cheating validator's stake. That risk is what keeps them honest." },
    ],
    correctId: "c",
    explanation:
      "PoS replaces burned energy with **capital at risk**. Validators lock up (stake) their own coins; if they're caught provably cheating, the protocol can destroy part of that stake — so dishonesty is a money-losing bet.",
  },
  {
    id: "blockchain-consensus-pow-vs-pos.q5",
    lessonSlug: "blockchain-consensus-pow-vs-pos",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "proof-of-stake", "slashing"],
    prompt: "What does it mean for a validator to be **slashed**?",
    choices: [
      { id: "a", text: "Their rewards are doubled as a bonus" },
      { id: "b", text: "Their transaction fees are temporarily lowered" },
      { id: "c", text: "Part of their staked coins is destroyed and they're forcibly removed from the network for provable cheating" },
      { id: "d", text: "Their mining hardware is confiscated by regulators" },
    ],
    correctId: "c",
    explanation:
      "**Slashing** is the PoS penalty: when provable misbehavior is detected (like signing two conflicting blocks for the same slot), the protocol destroys part of the validator's stake and ejects them. It's what makes PoS economically secure.",
  },
  {
    id: "blockchain-consensus-pow-vs-pos.q6",
    lessonSlug: "blockchain-consensus-pow-vs-pos",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "ethereum", "the-merge", "energy"],
    prompt: "What changed when **Ethereum** went through **The Merge** in September 2022?",
    choices: [
      { id: "a", text: "It switched from Proof of Stake to Proof of Work and used far more energy" },
      { id: "b", text: "It switched from Proof of Work to Proof of Stake, cutting energy use by roughly 99.95%" },
      { id: "c", text: "It deleted all prior transaction history and restarted the ledger" },
      { id: "d", text: "It added a central bank to approve every block" },
    ],
    correctId: "b",
    explanation:
      "The Merge (September 15, 2022) moved Ethereum from energy-intensive PoW mining to PoS validation secured by staked ETH, reducing the network's energy consumption by about **99.95%**.",
  },
  {
    id: "blockchain-consensus-pow-vs-pos.q7",
    lessonSlug: "blockchain-consensus-pow-vs-pos",
    type: "single",
    difficulty: "hard",
    tags: ["crypto", "pow-vs-pos", "tamper-resistance", "application"],
    prompt:
      "A friend says: \"PoW and PoS are totally different — only one of them actually makes the ledger hard to tamper with.\" What's the most accurate response?",
    choices: [
      { id: "a", text: "Both make tampering too expensive to be worth it — PoW with energy/hardware, PoS with staked capital at risk" },
      { id: "b", text: "Correct — only PoW is secure; PoS can be cheated for free" },
      { id: "c", text: "Correct — only PoS is secure; PoW can be cheated for free" },
      { id: "d", text: "Neither is secure; both rely on a trusted central company to police cheating", feedback: "Both are designed precisely so there's no central authority — security comes from making cheating costly, not from a company." },
    ],
    correctId: "a",
    explanation:
      "Both mechanisms reach the same goal — a tamper-resistant ledger with no central authority — by making cheating a money-losing bet. PoW raises the cost via energy and hardware (the 51% attack); PoS raises it via staked capital that can be slashed.",
  },
];
