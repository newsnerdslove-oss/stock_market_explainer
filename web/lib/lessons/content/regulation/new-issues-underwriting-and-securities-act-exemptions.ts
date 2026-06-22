import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "new-issues-underwriting-and-securities-act-exemptions",
  title: "New Issues: Underwriting & Securities Act Exemptions",
  level: 4,
  moduleId: "markets-regulation",
  moduleOrder: 9,
  summary:
    "How the Securities Act of 1933 runs a new issue — registration, the cooling-off period, the red herring, and the final prospectus — plus underwriting commitments and the exempt securities and transactions that skip registration.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "The `Securities Act of 1933` governs the **primary market** — the sale of **new issues** from an issuer to the public. Its core demand is **disclosure**: a non-exempt issuer must **register** with the SEC and deliver a **prospectus** of material facts to buyers. This lesson walks the registration timeline, the two main **underwriting commitments**, and the **exemptions** that let some securities and some transactions skip registration entirely.",
    },
    { type: "heading", text: "The registration timeline" },
    {
      type: "text",
      body:
        "An issuer files a **registration statement** with the SEC; the **prospectus** is the part delivered to investors. Filing starts a **cooling-off period** of **at least `20 days`** before the registration can become **effective**. The SEC does **not** approve or endorse the offering — it only checks for **full disclosure**. Saying the SEC 'approved' a new issue is a classic exam trap.",
    },
    {
      type: "list",
      items: [
        "During cooling-off, the underwriter may circulate a **preliminary prospectus** — the **red herring** — to gather **indications of interest**.",
        "A red herring shows a **price range**, not a final price, and carries a **red-ink legend** stating it is not an offer to sell.",
        "During cooling-off there may be **no sales**, **no payment accepted**, and **no advertising** of the issue.",
        "On the **effective date**, the **final prospectus** (with the final price) is required, and sales may begin.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "An **indication of interest** gathered with a red herring is **non-binding** on both sides — neither the customer nor the firm is committed until the offering is effective and a final prospectus is delivered.",
    },
    { type: "heading", text: "Underwriting commitments" },
    {
      type: "text",
      body:
        "An **underwriter** (investment bank) helps the issuer bring the deal to market. The commitment defines **who carries the risk** of unsold shares.",
    },
    {
      type: "list",
      items: [
        "**Firm commitment** — the underwriter **buys the entire issue** from the issuer and resells it, taking on the risk of any **unsold shares**. The issuer is guaranteed its proceeds.",
        "**Best efforts** — the underwriter acts as an **agent** and sells only what it can; **unsold shares return to the issuer**, who bears the risk.",
        "**All-or-none (AON)** — a best-efforts variant: the deal is **cancelled** unless the **entire** issue is sold.",
      ],
    },
    { type: "heading", text: "Exempt securities — the paper is exempt" },
    {
      type: "text",
      body:
        "Some securities are **exempt from registration** under the 1933 Act because of **what they are**. The big ones to know: **U.S. government** (Treasury) securities, **municipal** securities, and **securities issued by banks**. Because the security itself is exempt, the issuer does not file a 1933 Act registration to bring it to market.",
    },
    {
      type: "list",
      items: [
        "**U.S. government / Treasury** securities.",
        "**Municipal** securities (state and local government issues).",
        "**Securities issued by banks** (note: bank-*holding-company* stock is **not** automatically exempt).",
        "Other exempt issuers include **non-profit / charitable** organizations and certain **short-term commercial paper**.",
      ],
    },
    { type: "heading", text: "Exempt transactions — the deal is exempt" },
    {
      type: "text",
      body:
        "A non-exempt security can still avoid full registration if it is sold in an **exempt transaction** — exempt because of **how** it is sold. The three the exam loves: **Reg D**, **Rule 144**, and **Reg A**.",
    },
    {
      type: "list",
      items: [
        "**Reg D — private placement.** Under **Rule 506(b)**, an issuer may raise an **unlimited** amount from an **unlimited number of accredited investors** plus up to **`35` non-accredited (but sophisticated) investors**, with **no general solicitation or advertising**. The issuer files a **Form D** notice — not a full registration. An **accredited investor** is an individual with income of at least **`$200,000`** (or **`$300,000`** with a spouse) in the two most recent years, **or** a net worth over **`$1 million`** excluding the primary residence.",
        "**Rule 144 — restricted & control stock.** Governs **resale** of **restricted** securities (acquired privately, e.g., in a private placement) and **control** securities (held by an affiliate/insider). Restricted stock carries a holding period of **`6 months`** for a **reporting** company (**`1 year`** for a non-reporting company). **Affiliates** are also capped by a **volume limit**: in any **`90`-day** period they may sell up to the **greater of `1%`** of outstanding shares or the **average weekly trading volume**.",
        "**Reg A — 'mini-registration.'** A scaled offering: **Tier 1** allows up to **`$20 million`** and **Tier 2** up to **`$75 million`** in a **12-month period**. Issuers file an **offering circular**, lighter than a full prospectus.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Cooling-off period", def: "At least 20 days after a 1933 Act registration is filed before it can become effective; no sales, payment, or advertising of the issue during this time." },
        { term: "Red herring (preliminary prospectus)", def: "Circulated during cooling-off to gather non-binding indications of interest; shows a price range, not a final price, and carries a red-ink legend." },
        { term: "Final prospectus", def: "The completed prospectus, with the final price, required at the effective date when sales begin." },
        { term: "Firm commitment", def: "Underwriter buys the whole issue and bears the risk of unsold shares; issuer's proceeds are guaranteed." },
        { term: "Best efforts", def: "Underwriter acts as agent, selling only what it can; unsold shares return to the issuer." },
        { term: "Exempt security", def: "Exempt from 1933 Act registration because of what it is — U.S. government, municipal, and bank-issued securities." },
        { term: "Reg D (Rule 506(b))", def: "Private placement: unlimited accredited investors plus up to 35 non-accredited sophisticated investors, no general solicitation; issuer files Form D." },
        { term: "Accredited investor", def: "Income ≥ $200,000 ($300,000 joint) in the two most recent years, or net worth > $1 million excluding the primary residence." },
        { term: "Rule 144", def: "Governs resale of restricted (6-month/1-year holding period) and control securities; affiliates face a volume limit of the greater of 1% of shares outstanding or average weekly volume per 90 days." },
        { term: "Reg A", def: "Mini-registration via an offering circular: Tier 1 up to $20M, Tier 2 up to $75M, per 12-month period." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'A red herring lets the firm take orders during cooling-off.'* It does **not** — it only collects **non-binding indications of interest**. **No sales, no payment, and no advertising** of the issue are allowed until the **effective date** and **final prospectus**.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
