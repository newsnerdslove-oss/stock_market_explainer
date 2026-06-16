import type { Question } from "@/lib/quiz/types";

// Quiz for the "Custody & keys" lesson.
export const questions: Question[] = [
  {
    id: "custody-and-keys.q1",
    lessonSlug: "custody-and-keys",
    type: "single",
    difficulty: "easy",
    tags: ["crypto", "keys"],
    prompt: "What does the phrase **\"not your keys, not your coins\"** mean?",
    choices: [
      { id: "a", text: "If a third party holds your keys, you're trusting them to keep control of your coins" },
      { id: "b", text: "You must buy new coins every year" },
      { id: "c", text: "Keys are only needed for stablecoins" },
      { id: "d", text: "Coins are stored physically inside the key" },
    ],
    correctId: "a",
    explanation:
      "Control of the keys *is* control of the coins. If someone else holds your keys, you're **trusting them** — that's the warning in the phrase.",
  },
  {
    id: "custody-and-keys.q2",
    lessonSlug: "custody-and-keys",
    type: "single",
    difficulty: "easy",
    tags: ["crypto", "private-key"],
    prompt: "A **private key** is best described as…",
    choices: [
      { id: "a", text: "A public username anyone can look up" },
      { id: "b", text: "The exchange's support phone number" },
      { id: "c", text: "A secret code that proves ownership and authorizes spending the coins" },
      { id: "d", text: "A fee charged on each trade" },
    ],
    correctId: "c",
    explanation:
      "A **private key** is a secret code that proves ownership and authorizes spending — whoever controls it controls the coins.",
  },
  {
    id: "custody-and-keys.q3",
    lessonSlug: "custody-and-keys",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "self-custody"],
    prompt: "Which statement about **self-custody** is accurate?",
    choices: [
      { id: "a", text: "It gives full control but full responsibility — lose the key or phrase and the funds are gone" },
      { id: "b", text: "It guarantees a password reset if you forget your phrase" },
      { id: "c", text: "It means the exchange protects your coins for you" },
      { id: "d", text: "It is insured like a bank account" },
    ],
    correctId: "a",
    explanation:
      "**Self-custody** = full control *and* full responsibility. There's no reset: lose the key or recovery phrase and the funds are gone.",
  },
  {
    id: "custody-and-keys.q4",
    lessonSlug: "custody-and-keys",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "security", "recovery-phrase"],
    prompt: "Where should you back up your **recovery phrase**?",
    choices: [
      { id: "a", text: "In a screenshot saved to the cloud" },
      { id: "b", text: "Offline, not in a screenshot, email, or cloud note" },
      { id: "c", text: "In a reply to a support email" },
      { id: "d", text: "Posted publicly so you never lose it" },
    ],
    correctId: "b",
    explanation:
      "Back up your recovery phrase **offline**. Screenshots, emails, and cloud notes are exactly where attackers look.",
  },
  {
    id: "custody-and-keys.q5",
    lessonSlug: "custody-and-keys",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "custodial", "insurance"],
    prompt: "Which is true of **exchange-held (custodial)** crypto?",
    choices: [
      { id: "a", text: "It is fully insured like a bank deposit" },
      { id: "b", text: "It's convenient and often recoverable via support, but depends on the company and is generally uninsured" },
      { id: "c", text: "It can never be frozen or lost" },
      { id: "d", text: "It means you alone hold the keys" },
    ],
    correctId: "b",
    explanation:
      "Custodial is **convenient** and often recoverable through support, but it **depends on the company** and generally lacks bank-style deposit insurance.",
  },
  {
    id: "custody-and-keys.q6",
    lessonSlug: "custody-and-keys",
    type: "single",
    difficulty: "hard",
    tags: ["crypto", "security", "phishing", "application"],
    prompt:
      "A message from a *\"support agent\"* asks you to share your **recovery phrase** to fix an issue. You should…",
    choices: [
      { id: "a", text: "Share it quickly so they can help" },
      { id: "b", text: "Refuse — no legitimate service asks for your seed phrase; it's a scam", },
      { id: "c", text: "Share only the first half to be safe", feedback: "Even part of a seed phrase should never be shared — and real support never asks." },
      { id: "d", text: "Post it publicly so others can verify it" },
    ],
    correctId: "b",
    explanation:
      "**No legitimate service ever asks for your seed phrase.** Anyone who does is phishing — refuse, and never share any part of it.",
  },
  {
    id: "custody-and-keys.q7",
    lessonSlug: "custody-and-keys",
    type: "single",
    difficulty: "hard",
    tags: ["crypto", "custody", "application"],
    prompt:
      "Sam keeps all crypto on an exchange that suddenly **halts withdrawals**; Lena self-custodies with an offline-backed phrase. What's the key contrast?",
    choices: [
      { id: "a", text: "Sam is stuck because the exchange holds the keys; Lena can move funds but is solely responsible for her phrase" },
      { id: "b", text: "Both are equally able to move funds right now" },
      { id: "c", text: "Lena is stuck and Sam has full control" },
      { id: "d", text: "Neither can ever access their crypto again" },
    ],
    correctId: "a",
    explanation:
      "Custodial Sam depends on the exchange and is **stuck** during the freeze. Self-custody Lena can always move funds — but is **solely responsible** for her phrase.",
  },
  {
    id: "custody-and-keys.q8",
    lessonSlug: "custody-and-keys",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "hardware-wallet", "security"],
    prompt: "A **hardware wallet** is commonly used to…",
    choices: [
      { id: "a", text: "Trade faster on an exchange" },
      { id: "b", text: "Insure crypto against loss" },
      { id: "c", text: "Keep keys offline, often for larger holdings" },
      { id: "d", text: "Generate free coins" },
    ],
    correctId: "c",
    explanation:
      "A **hardware wallet** keeps keys **offline** on a physical device — a common choice for protecting larger holdings.",
  },
];
