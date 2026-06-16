import type { Question } from "@/lib/quiz/types";

// Quiz for the "Exchanges vs. wallets" lesson.
export const questions: Question[] = [
  {
    id: "exchanges-vs-wallets.q1",
    lessonSlug: "exchanges-vs-wallets",
    type: "single",
    difficulty: "easy",
    tags: ["crypto", "exchange"],
    prompt: "What is the main job of a crypto **exchange**?",
    choices: [
      { id: "a", text: "To be a marketplace where you buy, sell, and trade crypto" },
      { id: "b", text: "To hold your recovery phrase offline" },
      { id: "c", text: "To insure your crypto like a bank" },
      { id: "d", text: "To generate gas fees for the network" },
    ],
    correctId: "a",
    explanation:
      "An **exchange** (Coinbase, Kraken) is a **marketplace** to buy, sell, and trade crypto — the on-ramp between government currency and coins.",
  },
  {
    id: "exchanges-vs-wallets.q2",
    lessonSlug: "exchanges-vs-wallets",
    type: "single",
    difficulty: "easy",
    tags: ["crypto", "wallet"],
    prompt: "What does a crypto **wallet** actually hold?",
    choices: [
      { id: "a", text: "The physical coins themselves, like cash in a purse", feedback: "Coins live on the blockchain — the wallet holds the keys that control them." },
      { id: "b", text: "The keys that control your coins" },
      { id: "c", text: "Your bank account number" },
      { id: "d", text: "A list of every exchange you've used" },
    ],
    correctId: "b",
    explanation:
      "Coins live on the blockchain. A **wallet** holds the **keys** that authorize spending them — 'holding crypto' really means holding the keys.",
  },
  {
    id: "exchanges-vs-wallets.q3",
    lessonSlug: "exchanges-vs-wallets",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "custodial"],
    prompt: "In a **custodial** arrangement, who holds the keys to your crypto?",
    choices: [
      { id: "a", text: "You alone, on your own device" },
      { id: "b", text: "The government" },
      { id: "c", text: "The third party (usually the exchange)" },
      { id: "d", text: "Nobody — the keys are deleted" },
    ],
    correctId: "c",
    explanation:
      "**Custodial** means a **third party** — typically the exchange — holds your keys. Convenient, but you're trusting that company.",
  },
  {
    id: "exchanges-vs-wallets.q4",
    lessonSlug: "exchanges-vs-wallets",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "non-custodial"],
    prompt: "A key downside of **non-custodial** (self-custody) wallets is that…",
    choices: [
      { id: "a", text: "You can never send your coins to anyone" },
      { id: "b", text: "If you lose your keys or recovery phrase, there is no reset and the funds are gone" },
      { id: "c", text: "The exchange charges you monthly rent" },
      { id: "d", text: "Your coins are automatically taxed each day" },
    ],
    correctId: "b",
    explanation:
      "Self-custody gives **full control but full responsibility**: lose the keys or recovery phrase and there's **no password reset** — access is gone.",
  },
  {
    id: "exchanges-vs-wallets.q5",
    lessonSlug: "exchanges-vs-wallets",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "custodial", "insurance"],
    prompt: "When you buy crypto and leave it on the exchange, it is typically… ",
    choices: [
      { id: "a", text: "Self-custody, fully controlled by you" },
      { id: "b", text: "Custodial, with the exchange holding the keys" },
      { id: "c", text: "Government-insured like a bank deposit" },
      { id: "d", text: "Stored as physical coins in a vault" },
    ],
    correctId: "b",
    explanation:
      "Leaving crypto on an exchange is typically **custodial** — the exchange holds the keys, and these holdings generally aren't insured like bank deposits.",
  },
  {
    id: "exchanges-vs-wallets.q6",
    lessonSlug: "exchanges-vs-wallets",
    type: "single",
    difficulty: "hard",
    tags: ["crypto", "custody", "application"],
    prompt:
      "Devon wants the **maximum control** over his crypto and is willing to take on the responsibility that comes with it. What fits best?",
    choices: [
      { id: "a", text: "Leave everything on an exchange" },
      { id: "b", text: "Ask the exchange to email him the keys" },
      { id: "c", text: "Convert it all to a stablecoin and stop" },
      { id: "d", text: "Move it to a non-custodial wallet where he holds the keys" },
    ],
    correctId: "d",
    explanation:
      "Maximum control means **self-custody** — a **non-custodial** wallet where Devon holds the keys. The trade-off is that he's now solely responsible for them.",
  },
  {
    id: "exchanges-vs-wallets.q7",
    lessonSlug: "exchanges-vs-wallets",
    type: "single",
    difficulty: "hard",
    tags: ["crypto", "misconception", "application"],
    prompt:
      "Priya thinks: *\"My crypto sitting on the exchange is just like cash in my bank — safe and insured.\"* What's the most accurate response?",
    choices: [
      { id: "a", text: "Correct — exchanges are insured banks" },
      { id: "b", text: "With custodial holdings the company holds the keys and you hold a claim; crypto generally isn't government-insured like bank deposits" },
      { id: "c", text: "It's safer than a bank because no one can freeze it", feedback: "Custodial withdrawals can in fact be frozen or limited by the exchange." },
      { id: "d", text: "Only non-custodial wallets are insured" },
    ],
    correctId: "b",
    explanation:
      "Custodial means the **exchange holds the keys** — you hold a *claim*, not direct control — and crypto on exchanges generally **isn't** government-insured the way bank deposits are.",
  },
  {
    id: "exchanges-vs-wallets.q8",
    lessonSlug: "exchanges-vs-wallets",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "recovery-phrase"],
    prompt: "A **recovery (seed) phrase** in a self-custody wallet is best understood as…",
    choices: [
      { id: "a", text: "A username you share publicly" },
      { id: "b", text: "A receipt for taxes" },
      { id: "c", text: "The thing that can restore the wallet — whoever has it controls the funds" },
      { id: "d", text: "The exchange's customer-support PIN" },
    ],
    correctId: "c",
    explanation:
      "The **recovery phrase** can restore a self-custody wallet, so **whoever holds it controls the funds**. That's why it must never be shared.",
  },
];
