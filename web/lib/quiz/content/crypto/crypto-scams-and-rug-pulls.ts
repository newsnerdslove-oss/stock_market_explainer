import type { Question } from "@/lib/quiz/types";

// Quiz for the "Crypto scams & rug pulls" lesson.
export const questions: Question[] = [
  {
    id: "crypto-scams-and-rug-pulls.q1",
    lessonSlug: "crypto-scams-and-rug-pulls",
    type: "single",
    difficulty: "easy",
    tags: ["crypto", "rug-pull"],
    prompt: "What is a **rug pull**?",
    choices: [
      { id: "a", text: "A fee charged every time you trade a token" },
      { id: "b", text: "When developers drain the liquidity or abandon the project, leaving holders unable to sell" },
      { id: "c", text: "A network upgrade that improves transaction speed" },
      { id: "d", text: "A type of hardware wallet" },
    ],
    correctId: "b",
    explanation:
      "A **rug pull** is when the people behind a token **drain its liquidity or walk away**, leaving everyone else holding something they can no longer sell.",
  },
  {
    id: "crypto-scams-and-rug-pulls.q2",
    lessonSlug: "crypto-scams-and-rug-pulls",
    type: "single",
    difficulty: "easy",
    tags: ["crypto", "giveaway-scam"],
    prompt:
      "A post from a *\"founder\"* says: **\"Send 1 ETH to this address and we'll send 2 ETH back.\"** What is this?",
    choices: [
      { id: "a", text: "A normal way crypto rewards work" },
      { id: "b", text: "A staking program" },
      { id: "c", text: "A fake giveaway scam — no legitimate giveaway asks you to send crypto first" },
      { id: "d", text: "A tax refund" },
    ],
    correctId: "c",
    explanation:
      "**No legitimate giveaway asks you to send crypto first.** In these scams money only flows out, never back — it's impersonation fraud.",
  },
  {
    id: "crypto-scams-and-rug-pulls.q3",
    lessonSlug: "crypto-scams-and-rug-pulls",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "pump-and-dump"],
    prompt: "In a **pump-and-dump**, how do the organizers profit?",
    choices: [
      { id: "a", text: "They coordinate hype to drive the price up, then sell into the demand before it collapses" },
      { id: "b", text: "They audit the token's code for a fee" },
      { id: "c", text: "They lock their coins away for years" },
      { id: "d", text: "They refund latecomers who lose money" },
    ],
    correctId: "a",
    explanation:
      "Organizers **inflate the price with coordinated hype**, then **sell into the demand** from latecomers. The price collapses and the latecomers take the loss.",
  },
  {
    id: "crypto-scams-and-rug-pulls.q4",
    lessonSlug: "crypto-scams-and-rug-pulls",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "phishing", "security"],
    prompt:
      "A site that looks like your wallet asks you to **enter your recovery phrase** to *\"verify your account.\"* What should you do?",
    choices: [
      { id: "a", text: "Enter it — verification is a routine step" },
      { id: "b", text: "Enter only the first few words to stay safe", feedback: "Even part of a seed phrase should never be typed anywhere — and no real service asks for it." },
      { id: "c", text: "Refuse — no legitimate service ever asks for your seed phrase; this is phishing" },
      { id: "d", text: "Email the phrase to support instead" },
    ],
    correctId: "c",
    explanation:
      "**No legitimate service ever asks for your seed phrase.** Typing it into any site or app is phishing and hands over full control of your funds.",
  },
  {
    id: "crypto-scams-and-rug-pulls.q5",
    lessonSlug: "crypto-scams-and-rug-pulls",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "pig-butchering", "romance-scam"],
    prompt: "Which best describes a **\"pig-butchering\"** scam?",
    choices: [
      { id: "a", text: "A bug that accidentally sends coins to the wrong address" },
      { id: "b", text: "Someone builds trust over time, then steers you into a fake crypto investment you can't withdraw from" },
      { id: "c", text: "A high fee charged on large transactions" },
      { id: "d", text: "A legitimate but volatile staking strategy" },
    ],
    correctId: "b",
    explanation:
      "The FBI describes **pig butchering** as a confidence/romance scam: trust is built first, then the victim is led into a **fake investment platform** where withdrawals never work.",
  },
  {
    id: "crypto-scams-and-rug-pulls.q6",
    lessonSlug: "crypto-scams-and-rug-pulls",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "ponzi", "red-flags"],
    prompt:
      "According to the SEC, what is the **hallmark warning sign** of a Ponzi-style investment scam?",
    choices: [
      { id: "a", text: "A team that publishes its members' real names" },
      { id: "b", text: "An investment registered with regulators" },
      { id: "c", text: "Returns that go up and down with the market" },
      { id: "d", text: "Guaranteed high returns with little or no risk" },
    ],
    correctId: "d",
    explanation:
      "The SEC calls **guaranteed high returns with little or no risk** the hallmark of a Ponzi scheme — because every real investment carries risk, and higher returns usually mean *more* risk, not none.",
  },
  {
    id: "crypto-scams-and-rug-pulls.q7",
    lessonSlug: "crypto-scams-and-rug-pulls",
    type: "single",
    difficulty: "hard",
    tags: ["crypto", "red-flags", "application"],
    prompt:
      "A new token has an **anonymous team**, an **unaudited contract**, a chat promising **\"guaranteed 10% daily,\"** and a **countdown timer** pushing you to buy now. How many classic red flags are present?",
    choices: [
      { id: "a", text: "Four — anonymous team, unaudited contract, guaranteed returns, and urgency" },
      { id: "b", text: "None — these are normal signs of a good project" },
      { id: "c", text: "One — only the countdown timer is a concern" },
      { id: "d", text: "Two — the rest are unrelated to fraud", feedback: "All four — anonymous team, unaudited code, guaranteed returns, and pressure to act fast — are well-known red flags." },
    ],
    correctId: "a",
    explanation:
      "All four are classic red flags: **anonymous team, unaudited contract, guaranteed returns, and urgency**. Stacked together, they're a strong sign to walk away.",
  },
];
