import type { Question } from "@/lib/quiz/types";

// Quiz for the "Wallets in Depth: Hot vs Cold & Key Management" lesson.
export const questions: Question[] = [
  {
    id: "wallets-in-depth.q1",
    lessonSlug: "wallets-in-depth",
    type: "single",
    difficulty: "easy",
    tags: ["wallets", "keys"],
    prompt: "What does a crypto wallet actually store?",
    choices: [
      { id: "a", text: "The coins themselves, held inside the device" },
      { id: "b", text: "The private keys that control on-chain assets" },
      { id: "c", text: "A copy of the entire blockchain" },
      { id: "d", text: "Your exchange account password", feedback: "A wallet isn't an exchange login; it holds the keys that authorize on-chain moves." },
    ],
    correctId: "b",
    explanation:
      "A wallet holds the **private keys** that authorize moving on-chain assets — the coins live on the blockchain. This is the meaning of *\"your keys, your coins.\"*",
  },
  {
    id: "wallets-in-depth.q2",
    lessonSlug: "wallets-in-depth",
    type: "single",
    difficulty: "easy",
    tags: ["wallets", "hot-cold"],
    prompt: "A **hot** wallet is best described as one where the key…",
    choices: [
      { id: "a", text: "Is generated and stored entirely offline" },
      { id: "b", text: "Sits on an internet-connected device" },
      { id: "c", text: "Is split across multiple signers" },
      { id: "d", text: "Never exists in digital form" },
    ],
    correctId: "b",
    explanation:
      "A **hot wallet** keeps the key on an internet-connected device — convenient, but a larger **attack surface** for malware, phishing, and malicious approvals.",
  },
  {
    id: "wallets-in-depth.q3",
    lessonSlug: "wallets-in-depth",
    type: "single",
    difficulty: "medium",
    tags: ["wallets", "cold-storage"],
    prompt: "What's the strongest reason to use **cold storage** for a large, long-term holding?",
    choices: [
      { id: "a", text: "It makes everyday swaps faster" },
      { id: "b", text: "It keeps the key offline, away from internet-based attacks" },
      { id: "c", text: "It removes all transaction fees" },
      { id: "d", text: "It guarantees the asset's price won't fall", feedback: "Custody choices affect theft/loss risk, not market price." },
    ],
    correctId: "b",
    explanation:
      "A **cold wallet** generates and stores the key **offline** and signs without exposing it, keeping it away from internet-based attacks — the right default for large, long-term holdings.",
  },
  {
    id: "wallets-in-depth.q4",
    lessonSlug: "wallets-in-depth",
    type: "single",
    difficulty: "medium",
    tags: ["wallets", "seed-phrase"],
    prompt: "Why is a **seed phrase** more sensitive than any single password?",
    choices: [
      { id: "a", text: "It expires and must be reset monthly" },
      { id: "b", text: "It only unlocks one account at a time" },
      { id: "c", text: "Every account in the wallet is derived from it, so it controls them all" },
      { id: "d", text: "It is encrypted by the exchange" },
    ],
    correctId: "c",
    explanation:
      "All accounts are **derived** from the seed phrase, so anyone who reads it controls every derived account at once — far more sensitive than a single password.",
  },
  {
    id: "wallets-in-depth.q5",
    lessonSlug: "wallets-in-depth",
    type: "single",
    difficulty: "hard",
    tags: ["wallets", "phishing", "scenario", "security"],
    prompt: "A website pops up saying: *\"Enter your 12-word recovery phrase to validate your wallet.\"* What should you do?",
    choices: [
      { id: "a", text: "Enter it — validation is a routine security step" },
      { id: "b", text: "Enter only the first six words to be safe", feedback: "Even a partial seed is dangerous, and no legitimate site asks for any of it." },
      { id: "c", text: "Never enter it — legitimate services never ask for your seed; this is phishing" },
      { id: "d", text: "Photograph the words first, then enter them" },
    ],
    correctId: "c",
    explanation:
      "Legitimate apps **never** ask you to \"verify\" or \"validate\" your seed phrase on a website. Any such request is **phishing** — entering it hands over control of every derived account.",
  },
  {
    id: "wallets-in-depth.q6",
    lessonSlug: "wallets-in-depth",
    type: "single",
    difficulty: "medium",
    tags: ["wallets", "multisig", "scenario"],
    prompt: "A treasury wants a setup where **no single person** can move funds alone. What fits best?",
    choices: [
      { id: "a", text: "A `2-of-3` multisig" },
      { id: "b", text: "One hot wallet shared by everyone" },
      { id: "c", text: "One hardware wallet kept by the manager" },
      { id: "d", text: "A seed phrase emailed to all members" },
    ],
    correctId: "a",
    explanation:
      "A `2-of-3` **multisig** requires multiple keys to approve a transaction, removing the **single point of failure** — no one key can move funds on its own.",
  },
  {
    id: "wallets-in-depth.q7",
    lessonSlug: "wallets-in-depth",
    type: "single",
    difficulty: "hard",
    tags: ["wallets", "hardware", "misconception", "scenario"],
    prompt: "Your hardware wallet is physically destroyed. What happens to your crypto?",
    choices: [
      { id: "a", text: "It's permanently lost — the coins were inside the device" },
      { id: "b", text: "It's safe; restore from your seed phrase onto a new device" },
      { id: "c", text: "The manufacturer mails you replacement coins" },
      { id: "d", text: "The exchange reverses the transactions", feedback: "Self-custodied assets have no exchange behind them to reverse anything." },
    ],
    correctId: "b",
    explanation:
      "The coins live on the **blockchain**; the device only held the key. Restore from your **seed phrase** onto a new device and the assets are still there.",
  },
  {
    id: "wallets-in-depth.q8",
    lessonSlug: "wallets-in-depth",
    type: "single",
    difficulty: "hard",
    tags: ["wallets", "seed-phrase", "risk"],
    prompt: "Which statement about a seed phrase is correct?",
    choices: [
      { id: "a", text: "Lose it without a backup and the funds can be recovered via support" },
      { id: "b", text: "It's a bearer secret: lose it (no backup) and funds are gone; expose it and they're stolen" },
      { id: "c", text: "It can be reset like a forgotten password" },
      { id: "d", text: "Exposing it is fine as long as you act fast and call for a chargeback" },
    ],
    correctId: "b",
    explanation:
      "A seed phrase is a **bearer secret with no reset**. Lose it with no backup and the funds are *permanently gone*; expose it and they're *stolen* — there is no chargeback or support line.",
  },
  {
    id: "wallets-in-depth.q9",
    lessonSlug: "wallets-in-depth",
    type: "single",
    difficulty: "medium",
    tags: ["wallets", "cold-storage", "signing"],
    prompt: "When you send from a hardware wallet, why does the key stay safe?",
    choices: [
      { id: "a", text: "The key is uploaded to the website you connect to" },
      { id: "b", text: "The device signs internally and never exposes the key" },
      { id: "c", text: "The transaction skips the blockchain entirely" },
      { id: "d", text: "The browser encrypts the key before sending it" },
    ],
    correctId: "b",
    explanation:
      "You review the address and amount **on the device's own screen** and the device **signs internally**, returning only the signature — the key never leaves the device. But \"cold\" only protects you if the key genuinely stayed offline.",
  },
];
