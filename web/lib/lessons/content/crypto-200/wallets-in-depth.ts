import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "wallets-in-depth",
  title: "Wallets in Depth: Hot vs Cold & Key Management",
  level: 2,
  moduleId: "crypto-200",
  moduleOrder: 1,
  summary: "A wallet holds your keys, not your coins — and how you store those keys is your whole security model.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "The word *wallet* is misleading. A crypto wallet does **not** hold your coins — your assets live on the blockchain. What a wallet actually stores is the **private key** that authorizes moving those assets. This is the meaning behind the phrase *\"your keys, your coins\"*: whoever controls the key controls the funds.",
    },
    {
      type: "text",
      body:
        "Because the key *is* the control, the central question of this lesson is not \"which app is prettiest\" but **where the key lives and who can reach it**. That single choice — online or offline, one key or several — defines your real exposure to theft and loss.",
    },
    { type: "heading", text: "Hot vs cold" },
    {
      type: "text",
      body:
        "A **hot wallet** keeps the key on an internet-connected device — a phone or browser extension. It's convenient for everyday swaps, but the connection is also a larger **attack surface**: malware, phishing sites, and malicious token approvals can all reach a key that sits on a live machine.",
    },
    {
      type: "text",
      body:
        "A **cold wallet** generates and stores the key **offline** — a hardware device or an air-gapped setup. When you transact, the device **signs** the request internally and only hands back the signature, so the key never touches the internet-connected computer. This makes cold storage the right default for large or long-term holdings.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Private key", def: "The secret that authorizes moving on-chain assets. Control the key, control the funds." },
        { term: "Seed phrase (recovery phrase)", def: "A `12`–`24` word human-readable backup of the master key, from which every account is derived." },
        { term: "Hot wallet", def: "A wallet whose key sits on an internet-connected device — convenient, larger attack surface." },
        { term: "Cold wallet", def: "A wallet whose key is generated and stored offline; it signs without exposing the key." },
        { term: "Hardware wallet", def: "A dedicated offline device that holds the key and signs transactions on its own screen." },
        { term: "Multisig", def: "A setup (e.g. `2-of-3`) that requires multiple keys to approve a transaction." },
        { term: "Self-custody", def: "Holding your own keys rather than trusting a third party to hold them for you." },
      ],
    },
    { type: "heading", text: "The seed phrase" },
    {
      type: "text",
      body:
        "A **seed phrase** is a list of `12`–`24` words that backs up your master key. Every account in the wallet is *derived* from it, so it is **more sensitive than any password**: anyone who reads it controls all derived accounts, immediately and completely.",
    },
    {
      type: "list",
      items: [
        "Write it down **offline** — never type it into a website and never photograph it.",
        "Keep **redundant copies** in separate secure places, so one fire or flood can't erase it.",
        "Consider a **metal backup** that survives heat and water better than paper.",
        "Remember that legitimate apps **never** ask you to \"verify\" or \"validate\" your seed on a website — that request is always a scam.",
      ],
    },
    { type: "heading", text: "Removing the single point of failure" },
    {
      type: "text",
      body:
        "**Multisig** requires several keys to approve a transaction — a `2-of-3` setup needs any two of three keys. That removes the single point of failure: one lost or stolen key can't move funds on its own. Cold storage and multisig reduce theft and loss, but neither removes your duty to **verify what you sign**.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Suppose you keep a small balance in a **hot mobile wallet** for everyday swaps, and the bulk of your holdings on a **hardware (cold) wallet**. To send from cold storage, you connect the device, then review the destination address and amount **on the device's own screen** before confirming. The key never leaves the device. Separately, a family fund uses a `2-of-3` multisig so that no single lost key can drain it — two family members must approve any movement.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "A seed phrase is a **bearer secret with no reset**. Lose it with no backup and the funds are *permanently* gone. Expose it and they're *stolen* — there is no chargeback and no support line. And \"cold\" only protects you if the key genuinely stayed offline the entire time.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Misconception:** \"A hardware wallet stores my coins, so if it breaks my crypto is gone.\" The coins live on the **blockchain**; the device only stores the key. If it breaks, you restore from your **seed phrase** onto a new device and your assets are still there.",
    },
  ],
};
