import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "know-your-customer-rule-2090",
  title: "Know Your Customer: Rule 2090 and the Customer Profile",
  level: 4,
  moduleId: "markets-suitability",
  moduleOrder: 1,
  summary:
    "Before you can recommend anything, you must use reasonable diligence to know the essential facts about every customer — the floor everything else stands on.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Every recommendation rests on one thing: actually knowing who you're dealing with. FINRA `Rule 2090` — **Know Your Customer (KYC)** — requires a firm to use **reasonable diligence**, in opening *and* maintaining every account, to know the **essential facts** about every customer. This duty attaches the moment an account is opened and continues for the life of the relationship.",
    },
    {
      type: "text",
      body:
        "The key thing exam-writers test: the `Rule 2090` duty exists **even if no recommendation is ever made**. That's what separates KYC from suitability. Suitability only fires when you recommend; KYC is owed simply because you opened and service the account.",
    },
    { type: "heading", text: "What 'essential facts' means" },
    {
      type: "text",
      body:
        "'Essential facts' are the facts a firm needs to do four things. Notice every one is about *servicing the account properly* — none is about generating business.",
    },
    {
      type: "list",
      items: [
        "**Effectively service** the customer's account.",
        "Act in accordance with any **special handling instructions** for the account.",
        "Understand the **authority** of each person acting on the customer's behalf.",
        "**Comply with applicable laws**, regulations, and rules.",
      ],
    },
    { type: "heading", text: "KYC gathers the profile; suitability uses it" },
    {
      type: "text",
      body:
        "KYC is the data-gathering step. The **investment profile** it collects is the same set of factors `Rule 2111` later uses to test a recommendation. Think of it as a hand-off: `Rule 2090` fills in the profile, and the suitability rules consume it.",
    },
    {
      type: "list",
      items: [
        "**Age**",
        "Other **investments**",
        "**Financial situation and needs**",
        "**Tax status**",
        "**Investment objectives**",
        "Investment **experience**",
        "**Time horizon**",
        "**Liquidity needs**",
        "**Risk tolerance**",
        "Any other information the customer discloses.",
      ],
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "A self-directed online customer opens a brokerage account and chooses all her own trades. She never asks for advice and the firm never makes a recommendation. Does the firm owe a `Rule 2090` duty? **Yes** — KYC does not depend on a recommendation ever being made.",
    },
    {
      type: "list",
      items: [
        "**Owed (KYC applies):** verify her **identity**, know who is **authorized** to act on the account, and gather enough of her **financial situation** to service the account and comply with the law — all required even with zero advice.",
        "**Not triggered here:** a full **suitability/Reg BI** analysis of a specific recommendation, because the firm made no recommendation. The duty to *know* the customer still stands on its own.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Rule 2090 (Know Your Customer)", def: "FINRA rule requiring reasonable diligence to know the essential facts about every customer in opening and maintaining the account." },
        { term: "Reasonable diligence", def: "The good-faith effort a firm must make to learn and keep current the essential facts about a customer." },
        { term: "Essential facts", def: "The facts needed to service the account, follow special instructions, understand who has authority, and comply with the law." },
        { term: "Investment profile", def: "The customer factors in Rule 2111(a) — age, finances, tax status, objectives, experience, horizon, liquidity, risk tolerance — gathered at KYC." },
        { term: "Account opening", def: "The point at which the Rule 2090 duty attaches; it continues while the account is maintained." },
        { term: "Authority", def: "Knowing the scope of power each person (e.g., agent, trustee, custodian) has to act on the customer's behalf." },
        { term: "Special handling instructions", def: "Customer directions about how the account is to be operated, which the firm must be able to honor." },
        { term: "Self-directed account", def: "An account where the customer makes their own decisions without recommendations — still subject to Rule 2090." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'KYC only matters when I'm recommending something.'* Wrong — the `Rule 2090` duty attaches at **account opening** and continues, **independent of any recommendation**. That independence is exactly what distinguishes KYC from suitability, which only fires when you recommend.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
