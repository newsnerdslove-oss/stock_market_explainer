import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "trading-authorization-and-power-of-attorney",
  title: "Trading Authorization & Power of Attorney",
  level: 4,
  moduleId: "markets-accounts",
  moduleOrder: 9,
  summary:
    "How a third party gets authority over an account — limited vs full power of attorney, the written authorization and firm approval behind discretionary trading, and how that authority ends at death or revocation.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "An account owner can grant a **third party** authority to act on the account. The two questions that matter are **how much** authority and **who** is exercising it. A power of attorney (POA) defines the scope; whether the third party is the **customer's own appointee** or the **registered rep** changes which rules apply. Get the scope wrong and you've either blocked a legitimate trade or handed someone the keys to walk off with the cash.",
    },
    { type: "heading", text: "Limited vs full power of attorney" },
    {
      type: "text",
      body:
        "A **power of attorney** is a written document by which the account owner (the **principal**) authorizes a third party (the **agent** or attorney-in-fact) to act. The dividing line is whether the agent can take **money and securities out**.",
    },
    {
      type: "list",
      items: [
        "**Limited POA (limited trading authorization):** the agent may **enter trades only** — buy and sell within the account — but **cannot withdraw** cash or securities. Distributions still go to the **owner**.",
        "**Full POA (full trading authorization):** the agent may trade **and withdraw** cash and securities, including having checks or assets sent to the agent. This is far broader and is granted far less often.",
        "Either way, the **principal still owns** the account. The agent is acting *for* the owner, not as a co-owner.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'A limited POA lets the agent pull cash out of the account.'* No — **limited** means trade-only. The power to **withdraw** cash or securities exists only under a **full** POA.",
    },
    { type: "heading", text: "Discretionary accounts: the rep's authority" },
    {
      type: "text",
      body:
        "When the **registered rep** is the one exercising authority, the account is **discretionary**, and **FINRA Rule 3260** governs. The rep may not exercise discretion until the customer gives **prior written authorization** naming the rep, **and** the firm **accepts the account in writing** through a partner, officer, or qualified manager. Both pieces are required before the first discretionary order.",
    },
    {
      type: "list",
      items: [
        "**Prior written authorization** from the customer (a trading authorization / limited POA in the rep's favor) — *before* any discretionary order.",
        "**Firm acceptance** in writing by a designated principal.",
        "**Each discretionary order** must be **approved promptly in writing** by a principal and marked as discretionary.",
        "The firm must **review the account at frequent intervals** to catch trading **excessive in size or frequency** (churning) given the account's resources and character.",
      ],
    },
    { type: "heading", text: "What counts as discretion — the 3 A's" },
    {
      type: "text",
      body:
        "Discretion means the rep decides, without contacting the customer for that order, at least one of the **three A's**: the **Asset** (which security), the **Action** (buy or sell), or the **Amount** (how many shares or dollars). Decide any one of those and you are exercising discretion that needs written authorization.",
    },
    {
      type: "text",
      body:
        "A **time or price only** instruction is **not** discretion. \"Buy 100 XYZ today whenever you think the price is best\" leaves the rep only the timing — the customer already chose the asset, action, and amount — so **no written discretionary authorization** is required for that single order. Under Rule 3260 this **time-and-price** authority **expires at the end of the business day** it's given unless the customer provides a specific written instruction, signed and dated, extending it.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'Time-and-price discretion lasts until the customer cancels it.'* Under Rule 3260 it **expires at the end of that business day** unless the customer signs and dates a contrary instruction — so it is not the same as ongoing discretion.",
    },
    { type: "heading", text: "How authority terminates" },
    {
      type: "text",
      body:
        "A trading authorization or POA is not permanent. It ends — and trading under it must **stop immediately** — when either of these happens.",
    },
    {
      type: "list",
      items: [
        "**Death:** the **death of the principal (account owner)** revokes the authorization. The account is frozen pending estate documents; the agent's authority is gone. (The death of the **agent** also ends it.)",
        "**Revocation:** the principal may **revoke** the authorization at any time, typically in writing. Once revoked, the agent can no longer trade.",
      ],
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "A customer signs a **limited trading authorization** naming her adult son so he can manage trades. Months later the son calls and asks the firm to mail him a **$10,000 check** from the account. The firm must **refuse**: a **limited** POA is **trade-only**, and any distribution goes to the **owner**, not the agent. Only a **full** POA would permit a withdrawal to the son. Separately, if the customer **dies**, the authorization ends at once — the son cannot trade or withdraw, regardless of which POA she signed.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Power of attorney (POA)", def: "A written document by which the account owner (principal) authorizes a third party (agent / attorney-in-fact) to act on the account." },
        { term: "Limited POA", def: "Trading authorization allowing the agent to buy and sell only; no withdrawal of cash or securities, and distributions go to the owner." },
        { term: "Full POA", def: "Authorization allowing the agent to trade AND withdraw cash and securities, including to the agent." },
        { term: "Discretionary account", def: "An account in which the registered rep may choose the asset, action, or amount; governed by FINRA Rule 3260." },
        { term: "FINRA Rule 3260", def: "Requires prior written customer authorization and written firm acceptance for discretion, prompt written approval of each discretionary order, and frequent review for excessive trading." },
        { term: "Three A's", def: "Asset, Action, Amount — deciding any one without contacting the customer for that order is discretion requiring written authorization." },
        { term: "Time-and-price discretion", def: "Choosing only the timing or price of a customer-specified trade; not discretion, and it expires at the end of the business day unless renewed in writing." },
        { term: "Revocation", def: "The principal's act of canceling a POA or trading authorization; ends the agent's authority. Death of the principal also terminates it." },
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
