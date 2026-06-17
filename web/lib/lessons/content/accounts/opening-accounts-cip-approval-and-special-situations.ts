import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "opening-accounts-cip-approval-and-special-situations",
  title: "Opening Accounts: New Account Form, CIP, Approvals & Special Situations",
  level: 4,
  moduleId: "markets-accounts",
  moduleOrder: 3,
  summary:
    "The information, identity checks, and signatures required to open any account — plus numbered accounts, employee (3210/407) accounts, and death of an account holder.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Every account starts with a **new account form**, an **identity check**, and a **principal's approval**. The most-tested detail: a customer's signature is **not** required to open a **cash account**, but **is** required for **margin and options**.",
    },
    { type: "heading", text: "The new account form" },
    {
      type: "text",
      body:
        "`SEC Rule 17a-3(a)(17)` lists the information a firm should gather. The **registered rep signs** the form and a **principal must approve** it.",
    },
    {
      type: "list",
      items: [
        "Name; **residential address** (no P.O. box); **date of birth**; **SSN / TIN**.",
        "Employment status & occupation; **annual income** and **net worth**.",
        "**Investment objectives**.",
        "Whether the customer is an **associated person** of another member firm.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'The customer must sign the new account form to open any account.'* No — for a **cash account** the **principal's approval** suffices and the customer's signature isn't required. The customer **must sign** for **margin and options** accounts.",
    },
    { type: "heading", text: "CIP — Customer Identification Program" },
    {
      type: "text",
      body:
        "The **USA PATRIOT Act §326** requires a **Customer Identification Program**. Before or when opening, the firm must **collect and verify** four minimum data points and screen the customer against government watchlists.",
    },
    {
      type: "list",
      items: [
        "**Name**, **date of birth**, **address**, and **TIN** — collected and verified.",
        "Check against **government / OFAC / terrorist** lists.",
        "Retain CIP records **`5 years` after the account is closed**.",
      ],
    },
    { type: "heading", text: "Numbered and hold-mail accounts" },
    {
      type: "list",
      items: [
        "**Numbered account:** permissible only if the customer signs a **statement attesting to ownership** of the account.",
        "**Hold-mail:** allowed for a **limited period** with **written instructions** — never indefinitely.",
      ],
    },
    { type: "heading", text: "Employee / associated-person accounts" },
    {
      type: "text",
      body:
        "`FINRA Rule 3210` (the former NYSE **Rule 407** '407 letter') governs accounts an associated person opens at *another* firm. The associated person may **not** open such an account **without the prior written consent of the employer member**, and the employer must receive **duplicate confirmations and statements**.",
    },
    {
      type: "list",
      items: [
        "**New accounts:** prior **written consent** of the employer required.",
        "**Employer receives** duplicate confirms and statements.",
        "**Pre-existing accounts:** consent within **`30 days`** of becoming associated.",
      ],
    },
    { type: "heading", text: "Death of an account holder" },
    {
      type: "text",
      body:
        "On notice that an individual account holder has died, the rep follows a fixed sequence before releasing anything.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Cancel all open / unexecuted orders** (e.g., resting GTC orders).",
        "**Freeze / mark the account 'deceased.'**",
        "**Await documents** — the **death certificate**, any **estate/inheritance tax waivers**, and **letters testamentary / of administration** — before releasing assets.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Remember from Lesson 1: **JTWROS** passes to the surviving owner, while a **TIC** portion goes to the decedent's **estate** — so registration determines who ultimately receives the assets.",
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "A rep learns a **sole-account customer died yesterday** and there is a **resting GTC order** in the account. The rep must **cancel the open order immediately**, **freeze** the account, and **release nothing** until the estate provides the **death certificate** and **letters testamentary**.",
    },
    {
      type: "list",
      items: [
        "**First:** cancel the GTC and any other open/unexecuted orders.",
        "**Then:** freeze and mark the account deceased.",
        "**Hold:** no transfers or distributions until estate documents arrive.",
        "**Documents needed:** death certificate, tax waivers (if any), letters testamentary/of administration.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "SEC Rule 17a-3(a)(17)", def: "Specifies the customer information a firm gathers on the new account form (name, address, DOB, TIN, income, net worth, objectives, etc.)." },
        { term: "CIP (Customer Identification Program)", def: "USA PATRIOT Act §326 program requiring collection and verification of name, DOB, address, and TIN, with watchlist screening." },
        { term: "CIP retention", def: "CIP records must be kept 5 years after the account is closed." },
        { term: "Cash vs margin/options signature", def: "A cash account needs only principal approval; margin and options accounts require the customer's signature." },
        { term: "Numbered account", def: "An account identified by number; permissible only if the customer signs a statement attesting to ownership." },
        { term: "FINRA Rule 3210 (Rule 407)", def: "Requires an associated person to get prior written consent of the employer to open an outside securities account; employer gets duplicate confirms/statements." },
        { term: "Letters testamentary", def: "Court document naming the executor authorized to act for a deceased person's estate; required before releasing account assets." },
        { term: "Freeze on death", def: "On notice of death: cancel open orders, freeze/mark the account deceased, and await estate documents before releasing assets." },
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
