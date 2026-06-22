import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "institutional-and-senior-investor-protections",
  title: "Institutional Suitability & Senior-Investor Protection",
  level: 4,
  moduleId: "markets-suitability",
  moduleOrder: 9,
  summary:
    "Two special regimes: when a firm is excused from customer-specific suitability for sophisticated institutions, and the holds and trusted-contact tools that protect seniors from financial exploitation.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Suitability isn't applied identically to every account. At one end sit **sophisticated institutions** that can fend for themselves; at the other sit **seniors and vulnerable adults** who may need extra protection from exploitation. FINRA addresses both with purpose-built rules — `Rule 2111(b)` for the first, `Rule 2165` and the `Rule 4512` trusted-contact tool for the second.",
    },
    { type: "heading", text: "The institutional-customer exemption — Rule 2111(b)" },
    {
      type: "text",
      body:
        "`Rule 2111(b)` lets a firm skip the **customer-specific** suitability analysis for a recommendation to an institutional customer — but **only** when **three** conditions are all met. Note the limit: the exemption covers customer-specific suitability *only*. The firm still owes **reasonable-basis** and **quantitative** suitability.",
    },
    {
      type: "list",
      items: [
        "The account is an **institutional account as defined in `Rule 4512(c)`**.",
        "The firm has a **reasonable basis to believe** the customer is **capable of evaluating investment risks independently** — both in general and as to the particular transaction.",
        "The customer **affirmatively indicates** that it **is exercising independent judgment** in evaluating the firm's recommendations.",
      ],
    },
    {
      type: "text",
      body:
        "All three are required. A firm cannot lean on the exemption just because an account is large — the customer must *affirmatively* state it is exercising independent judgment, and the firm must *actually believe* the customer can evaluate the risk. Where the institution delegates decisions to an agent (an investment adviser or bank trust department), these tests apply to the **agent**.",
    },
    { type: "heading", text: "What counts as an institutional account — Rule 4512(c)" },
    {
      type: "list",
      items: [
        "A **bank**, savings and loan association, **insurance company**, or **registered investment company**.",
        "An **investment adviser** registered with the SEC under the Advisers Act or with a state.",
        "Any other **person or entity** (natural person, corporation, partnership, trust, or otherwise) with **total assets of at least `$50 million`**.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'the institutional exemption means no suitability at all for big clients.'* Wrong on two counts. It waives **only customer-specific** suitability, and it requires the customer's **affirmative** statement of independent judgment plus the firm's **reasonable belief** in the customer's ability. **Reasonable-basis** and **quantitative** suitability never go away.",
    },
    { type: "heading", text: "Protecting seniors — Rule 2165 temporary holds" },
    {
      type: "text",
      body:
        "`Rule 2165` lets a firm place a **temporary hold** on a **disbursement** of funds or securities — or, after the 2022 amendment, on a **securities transaction** — from the account of a **Specified Adult** when the firm reasonably believes **financial exploitation** has occurred, is occurring, has been attempted, or will be attempted. The hold is **permissive, not mandatory** — it gives the firm a safe harbor to pause and investigate.",
    },
    {
      type: "list",
      items: [
        "**Specified Adult** = a natural person **age `65` or older**, **OR** a natural person **age `18` and older** whom the firm reasonably believes has a **mental or physical impairment** that renders them unable to protect their own interests.",
        "**Initial hold:** expires no later than **`15` business days** after the firm first placed it.",
        "**First extension:** up to **`10` additional business days** if the firm's internal review supports its reasonable belief of exploitation — a maximum of **`25` business days**.",
        "**Second extension:** up to **`30` more business days** if the firm has **reported** the matter to a state regulator, agency, or court of competent jurisdiction — for a maximum of **`55` business days**.",
      ],
    },
    {
      type: "text",
      body:
        "A state regulator, agency, or **court** can also order a hold to be terminated or extended, overriding these defaults. The amendments adding the **transaction** hold and the **30-business-day** second extension became effective **March 17, 2022**.",
    },
    { type: "heading", text: "The trusted contact person — Rule 4512" },
    {
      type: "text",
      body:
        "`Rule 4512` requires a firm to make **reasonable efforts** to obtain the name and contact information of a **trusted contact person** — **age `18` or older** — when opening a **non-institutional** account. The trusted contact is someone the firm may reach out to about the customer's **health status**, possible exploitation, or to confirm contact details. Importantly, the customer's **failure** to provide one does **not** prevent the firm from opening or maintaining the account; the firm only has to *try*.",
    },
    {
      type: "text",
      body:
        "`Rule 2165` and `Rule 4512` work as a pair: the trusted contact gives the firm someone to **call** when something looks wrong, and the temporary hold gives the firm **time** to act before money leaves the account.",
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "An 80-year-old client suddenly requests a $200,000 wire to a new overseas account she can't clearly explain, after weeks of unusual phone calls. The rep suspects a romance scam.",
    },
    {
      type: "list",
      items: [
        "**Rule 2165 applies:** she is a **Specified Adult** (age 65+), and the firm reasonably suspects exploitation, so it may place a **temporary hold** on the disbursement.",
        "**The clock:** the hold can run up to **15 business days** initially, extendable to **25** on internal review, and to **55** if the firm reports to a state agency or court.",
        "**Rule 4512 in action:** the firm calls the **trusted contact** she named at account opening to check on her well-being while the hold is in place.",
        "**Not the institutional exemption:** `Rule 2111(b)` is irrelevant here — she is a retail, non-institutional customer.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Rule 2111(b) (Institutional exemption)", def: "Exempts a recommendation to an institutional customer from customer-specific suitability when three conditions are met; reasonable-basis and quantitative suitability still apply." },
        { term: "Institutional account (Rule 4512(c))", def: "A bank, S&L, insurance company, registered investment company, registered investment adviser, or any person/entity with total assets of at least $50 million." },
        { term: "Independent judgment indication", def: "The institutional customer's affirmative statement that it is exercising independent judgment in evaluating the firm's recommendations — a required condition of the 2111(b) exemption." },
        { term: "Rule 2165 (Financial Exploitation)", def: "Permits a temporary hold on a disbursement or securities transaction from a Specified Adult's account when financial exploitation is reasonably suspected." },
        { term: "Specified Adult", def: "A natural person age 65 or older, or age 18+ whom the firm reasonably believes has a mental or physical impairment preventing self-protection." },
        { term: "Temporary hold", def: "A permissive pause under Rule 2165: up to 15 business days initially, extendable to 25 on internal review and to 55 after reporting to a regulator, agency, or court." },
        { term: "Trusted contact person (Rule 4512)", def: "A person age 18+ the firm makes reasonable efforts to obtain at non-institutional account opening, contacted regarding health, exploitation, or account details." },
        { term: "Financial exploitation", def: "The wrongful or unauthorized taking, withholding, or use of a Specified Adult's funds or securities — the trigger for a Rule 2165 hold." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't confuse the two extensions. The hold starts at **15** business days, goes to **25** after **internal review**, and only reaches **55** after the firm **reports to a regulator, agency, or court**. The 30-day jump requires that outside report — internal review alone caps the hold at 25.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
