import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "blockchain-consensus-pow-vs-pos",
  title: "How blockchains reach consensus (PoW vs PoS)",
  level: 1,
  moduleId: "crypto-100",
  moduleOrder: 8,
  summary: "How a network with no boss agrees on one shared ledger — and stays hard to cheat — using Proof of Work or Proof of Stake.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "A blockchain has **no central authority** — no bank, no company, no admin deciding what's true. Yet thousands of strangers' computers somehow agree on a single shared record of who owns what. The trick that makes that agreement possible is called a **consensus mechanism**: the rules the network uses to decide which new block of transactions gets added next, so everyone ends up with the *same* ledger.",
    },
    {
      type: "text",
      body:
        "There are two dominant approaches, and you'll hear both constantly: **Proof of Work** (what Bitcoin uses) and **Proof of Stake** (what Ethereum switched to). They solve the same problem in very different ways.",
    },
    {
      type: "heading",
      text: "The problem: who gets to write the next page?",
    },
    {
      type: "text",
      body:
        "Picture a shared notebook where every page is a **block** of recent transactions, and each page references the one before it — that chain of pages is the **blockchain**. The hard question isn't *what* to write; it's *who is allowed to write the next page*, and how everyone else agrees it's legitimate. If just anyone could add pages, a cheater could rewrite history and spend the same coins twice. Consensus is the rule that picks the writer and makes cheating expensive.",
    },
    {
      type: "heading",
      text: "Proof of Work: spend energy to earn the right",
    },
    {
      type: "text",
      body:
        "In **Proof of Work (PoW)**, special computers called **miners** compete to solve a hard math puzzle. The puzzle has no shortcut — you just guess enormous numbers of times until one works, which burns real electricity and requires real hardware. The first miner to find a valid answer gets to add the next block and is rewarded with new coins plus fees. That's what **mining** actually means: spending energy and computing power to win the right to add a block.",
    },
    {
      type: "text",
      body:
        "**Bitcoin** uses PoW, and the network automatically tunes the puzzle's difficulty so that a new block is found about every **10 minutes** on average, no matter how many miners join. The work is hard to *do* but trivial for everyone else to *check* — which is why the rest of the network can instantly verify a winning block is valid.",
    },
    {
      type: "heading",
      text: "Why PoW is hard to cheat: the 51% attack",
    },
    {
      type: "text",
      body:
        "To rewrite confirmed history on a PoW chain, an attacker would need to out-mine the *entire honest network* — controlling more than half of all its computing power. That's the famous **51% attack**. For a large chain like Bitcoin, that would require a staggering amount of hardware and electricity, likely costing more than any attack could profit. So security comes from a simple economic fact: **cheating costs more than it's worth.** The deeper a transaction is buried under later blocks, the more work an attacker would have to redo, which is why more confirmations means more safety.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "A 51% attack doesn't let someone steal arbitrary coins or undo *anyone's* transactions at will — and it can't break the cryptography. It mainly lets a majority-power attacker reorder or reverse *their own recent* transactions (a double-spend). It's still extremely expensive, which is the whole point.",
    },
    {
      type: "heading",
      text: "Proof of Stake: lock up capital instead of burning energy",
    },
    {
      type: "text",
      body:
        "**Proof of Stake (PoS)** replaces electricity with **money at risk**. Instead of miners, the network has **validators** who lock up — or **stake** — their own coins as a security deposit. The protocol then picks validators to propose and check new blocks, and pays them rewards for doing it honestly. There's no puzzle to burn through, so PoS uses a tiny fraction of the energy: when **Ethereum** switched from PoW to PoS in an upgrade called **The Merge** (September 15, 2022), it cut the network's energy use by roughly **99.95%**.",
    },
    {
      type: "text",
      body:
        "On Ethereum, running a validator directly requires staking **32 ETH**. That **validating** — proposing and attesting to blocks — is the PoS equivalent of mining: it's the job that keeps the ledger moving and agreed-upon.",
    },
    {
      type: "heading",
      text: "Why PoS is hard to cheat: slashing",
    },
    {
      type: "text",
      body:
        "In PoS, the deterrent isn't wasted electricity — it's the validator's own staked capital. If a validator is caught provably cheating (for example, signing two conflicting blocks for the same slot), the protocol can **slash** them: it destroys part of their stake and forcibly removes them from the network. So an attacker can't cheat for free — they put their own money on the line, and misbehavior gets it burned. Honest behavior earns rewards; provable dishonesty gets punished automatically.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Same goal, different lever. PoW says *\"attacking costs enormous energy.\"* PoS says *\"attacking costs you the capital you staked.\"* Either way, the design makes the ledger **tamper-resistant** without anyone in charge — cheating is simply made too expensive to be worth it.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Consensus mechanism", def: "The rules a decentralized network uses to agree on which new block to add, so everyone shares the same ledger." },
        { term: "Proof of Work (PoW)", def: "Consensus where miners spend energy and computing power solving a puzzle to win the right to add a block (e.g. Bitcoin)." },
        { term: "Miner", def: "A computer that competes in PoW by burning electricity to solve the puzzle and add the next block for a reward." },
        { term: "51% attack", def: "Controlling over half a PoW network's computing power to reorder or reverse recent transactions — extremely expensive, which is the deterrent." },
        { term: "Proof of Stake (PoS)", def: "Consensus where validators lock up (stake) capital and are chosen to add blocks; cheating risks their stake (e.g. Ethereum)." },
        { term: "Validator", def: "A participant who stakes capital to propose and check blocks in PoS — the PoS counterpart to a PoW miner." },
        { term: "Staking", def: "Locking up your own coins as a security deposit to participate in PoS (32 ETH per validator on Ethereum)." },
        { term: "Slashing", def: "A PoS penalty that destroys part of a validator's stake and ejects them when provable cheating is detected." },
        { term: "The Merge", def: "Ethereum's September 15, 2022 upgrade from PoW to PoS, which cut its energy use by roughly 99.95%." },
      ],
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "text",
      body:
        "**Bitcoin (PoW):** Mia broadcasts a payment. **Miners** race to solve the puzzle; the winner packs Mia's transaction into a block about 10 minutes later. To reverse it, an attacker would need to **out-mine the whole network** — a 51% attack — so as more blocks pile on, the payment becomes effectively permanent. **Ethereum (PoS):** Sam broadcasts a payment. A **validator** who has staked **32 ETH** proposes the block; others attest. If any validator tries to cheat, they get **slashed** and lose stake. Different mechanisms, same outcome — one agreed ledger that's costly to tamper with.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Mental model: **PoW buys security with electricity; PoS buys security with capital.** Both turn cheating into a money-losing bet, which is how a network with no boss still keeps an honest, shared ledger. None of this is investment advice — it's just how the plumbing works.",
    },
  ],
};
