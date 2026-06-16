import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "custody-and-keys",
  title: "Custody & keys",
  level: 1,
  moduleId: "crypto-100",
  moduleOrder: 6,
  summary: "\"Not your keys, not your coins\" — what a private key really controls, and how to protect it.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "There's a phrase that gets repeated in crypto until it sounds like a slogan: **\"not your keys, not your coins.\"** It's not hype — it's the single most important security idea in the whole space. To see why, you have to understand what a **private key** actually does.",
    },
    {
      type: "heading",
      text: "What a private key controls",
    },
    {
      type: "text",
      body:
        "A **private key** is a secret code that proves ownership and authorizes spending. **Whoever controls the key controls the coins** — full stop. The coins themselves live on the blockchain; the key is what authorizes moving them, and a **wallet** is just software or hardware that manages keys.",
    },
    {
      type: "heading",
      text: "\"Not your keys, not your coins\"",
    },
    {
      type: "text",
      body:
        "If a third party holds your keys, you're trusting *them*. An exchange can freeze withdrawals, get hacked, or fail outright — and there's a real history of exchanges doing exactly that, leaving users locked out. That's what the phrase warns against: control of the keys *is* control of the coins.",
    },
    {
      type: "list",
      items: [
        "**Self-custody** — you hold the keys: full control, full responsibility. Lose the key or recovery phrase and the funds are gone, with no reset.",
        "**Exchange-held (custodial)** — convenient and often recoverable via support, but it depends on the company and generally **isn't insured** like a bank deposit.",
      ],
    },
    {
      type: "heading",
      text: "Security basics",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Never share your recovery phrase** with anyone, ever.",
        "Beware **phishing** and fake *\"support\"* messages — no legitimate service asks for your key or seed phrase.",
        "Back up your recovery phrase **offline**, not in a screenshot, email, or cloud note.",
        "Consider a **hardware wallet** for larger amounts.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Private key", def: "A secret code that proves ownership and authorizes spending — whoever holds it controls the coins." },
        { term: "Recovery phrase (seed phrase)", def: "A list of words that can restore a wallet and its keys; must be kept secret and backed up offline." },
        { term: "Self-custody", def: "You hold your own keys — full control and full responsibility." },
        { term: "Custodial (exchange-held)", def: "A third party holds your keys — convenient, but you depend on them and it's generally uninsured." },
        { term: "Hardware wallet", def: "A physical device that keeps keys offline, often used for larger holdings." },
        { term: "Phishing", def: "Scams that trick you into revealing keys or seed phrases, often by impersonating support." },
      ],
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "text",
      body:
        "**Sam** keeps everything on an exchange. One day it halts withdrawals — Sam is stuck, because the exchange holds the keys (custodial). **Lena** self-custodies with her recovery phrase backed up offline. She can always move her funds — but she's **solely responsible**: if she loses that phrase, no one can restore it. Two different trade-offs, neither one 'advice.'",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common myth: *\"crypto on an exchange is mine and as safe as money in a bank.\"* Custodial means the **company holds the keys** — you hold a *claim* — and crypto generally has **no deposit insurance**. If anyone ever asks for your seed phrase, it's a scam: refuse.",
    },
  ],
};
