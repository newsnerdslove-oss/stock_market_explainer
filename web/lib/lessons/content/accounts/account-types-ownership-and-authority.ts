import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "account-types-ownership-and-authority",
  title: "Account Types, Ownership & Authority",
  level: 4,
  moduleId: "markets-accounts",
  moduleOrder: 1,
  summary:
    "Who owns the account, who can trade it, and what happens at death — from JTWROS vs tenants-in-common to UGMA/UTMA, trusts, and discretionary authority.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Before a single order is entered, three questions have to be answered: **who owns** the account, **who may trade** it, and **what happens to the assets at death**. Get these wrong and even a perfect recommendation lands in the wrong place. Start with the simplest case — an **individual account** has exactly one owner, who alone may trade and receive distributions.",
    },
    { type: "heading", text: "Joint accounts: JTWROS vs tenants in common" },
    {
      type: "text",
      body:
        "In any **joint account**, all parties own the account and **any one party may enter orders**, but distributions (checks, securities) must be made out to **all** owners. What differs is what happens at death.",
    },
    {
      type: "list",
      items: [
        "**JTWROS** (joint tenants with right of survivorship): on the death of one owner, the decedent's interest passes **automatically to the surviving owner(s)**, bypassing probate.",
        "**Tenants in common (TIC):** a deceased owner's fractional interest passes to **that owner's estate**, *not* the surviving co-owner. TIC also permits **unequal** ownership (e.g., 70/30).",
        "**TOD** (transfer on death): an individual or JTWROS registration with a **named beneficiary**; at death the assets pass to the beneficiary **outside probate**, and the owner keeps full control while living.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'In a TIC account the survivor inherits the deceased owner's share.'* Wrong — a TIC interest goes to the **decedent's estate**, never automatically to the co-owner. Only **JTWROS** passes to the survivor.",
    },
    { type: "heading", text: "Custodial accounts: UGMA / UTMA" },
    {
      type: "text",
      body:
        "A custodial account is opened for one **minor** under the **Uniform Gifts to Minors Act (UGMA)** or **Uniform Transfers to Minors Act (UTMA)**. The split of ownership versus control is the most-tested point: the **minor is the beneficial owner** (the account uses the minor's SSN and income is taxed to the minor), but the **custodian controls all trading**.",
    },
    {
      type: "list",
      items: [
        "**One custodian, one minor** per account. Gifts into the account are **irrevocable**.",
        "**Cash only** — no margin, no short selling, no uncovered (naked) options. A custodial account must be a **cash account**.",
        "**UTMA** allows broader kinds of property (e.g., real estate) and a **later transfer age** than UGMA.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'The minor controls a UGMA/UTMA account.'* No — the **custodian** controls and trades it; the minor merely **owns** it. The minor cannot direct trades.",
    },
    { type: "heading", text: "Corporate, partnership & trust accounts" },
    {
      type: "list",
      items: [
        "**Corporate accounts:** require a **corporate resolution** naming who is authorized to trade — plus a separate resolution to trade **margin** or **options**.",
        "**Partnership accounts:** require a **partnership agreement** specifying authority.",
        "**Trust / fiduciary accounts:** the **trustee** trades according to the **trust document** and is held to the **prudent-investor standard**.",
      ],
    },
    { type: "heading", text: "Discretionary authority" },
    {
      type: "text",
      body:
        "**Discretion** means the rep chooses the **Asset, Amount, or Action** (the 'three A's') without contacting the customer for each trade. It requires **prior WRITTEN authorization** (a trading authorization / limited power of attorney) **and** firm/principal approval; each discretionary order must be **marked discretionary**, and the account is **reviewed frequently**.",
    },
    {
      type: "text",
      body:
        "Choosing only **time or price** is *not* discretion. \"Buy 100 XYZ whenever you think best today\" leaves the rep only timing — the customer already chose the asset, amount, and action — so no written discretionary authorization is needed.",
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "A grandparent opens a **UTMA** for a grandchild and asks the rep to **buy on margin**. The rep must **refuse**: custodial accounts are **cash-only** — no margin, no short selling, no uncovered options. And because the gift is **irrevocable**, the grandparent cannot later pull the assets back out for themselves.",
    },
    {
      type: "list",
      items: [
        "**The block:** UTMA is a cash account; margin and short selling are prohibited.",
        "**Ownership:** the minor owns the assets (minor's SSN, taxed to the minor).",
        "**Control:** the custodian directs trades — but only within the cash-account rules.",
        "**Irrevocable:** the gift cannot be reclaimed by the donor.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "JTWROS", def: "Joint tenants with right of survivorship — a deceased owner's interest passes automatically to the survivor(s), bypassing probate." },
        { term: "Tenants in common (TIC)", def: "Joint ownership where a deceased owner's fractional interest passes to that owner's estate; permits unequal ownership shares." },
        { term: "TOD (transfer on death)", def: "An individual or JTWROS registration with a named beneficiary; assets pass to the beneficiary outside probate, owner retains control while living." },
        { term: "UGMA / UTMA", def: "Custodial accounts for a minor; the minor is the beneficial owner, the custodian controls trading, and the account must be cash-only." },
        { term: "Custodian", def: "The adult who controls and trades a UGMA/UTMA account on the minor's behalf, within cash-account rules." },
        { term: "Corporate resolution", def: "Document naming who is authorized to trade a corporate account, with a separate resolution required for margin or options." },
        { term: "Prudent-investor standard", def: "The duty of care a trustee owes when managing a trust/fiduciary account per the trust document." },
        { term: "Discretion (three A's)", def: "Authority for the rep to choose the Asset, Amount, or Action without prior contact; requires written authorization plus principal approval." },
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
