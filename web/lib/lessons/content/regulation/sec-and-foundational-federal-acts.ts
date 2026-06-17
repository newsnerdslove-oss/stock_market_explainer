import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "sec-and-foundational-federal-acts",
  title: "The SEC & the Foundational Federal Acts (1933 & 1934)",
  level: 4,
  moduleId: "markets-regulation",
  moduleOrder: 1,
  summary:
    "Two New Deal statutes built U.S. securities law — the Securities Act of 1933 polices new issues, and the Securities Exchange Act of 1934 polices the secondary market and created the SEC.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "U.S. securities regulation rests on two foundational statutes. The `Securities Act of 1933` governs the **primary market** — new issues. The `Securities Exchange Act of 1934` governs the **secondary market** (investor-to-investor trading) and **created the SEC**. The exam tests this split constantly, so anchor it: **1933 = new issues / paper; 1934 = the SEC + trading.**",
    },
    { type: "heading", text: "The Securities Act of 1933 — new issues" },
    {
      type: "text",
      body:
        "The `Securities Act of 1933` requires that non-exempt securities be **registered** with the SEC via a **registration statement** that contains a **prospectus** disclosing material facts to investors. Its nicknames — the **Truth in Securities Act**, the **Paper Act**, and the **Prospectus Act** — all point to disclosure of new issues. Importantly, the 1933 Act does **NOT** create the SEC.",
    },
    {
      type: "list",
      items: [
        "After filing, a **cooling-off period** of at least `20 days` runs before the registration can become effective.",
        "During cooling-off a **preliminary prospectus** — the **red herring** — may circulate to gauge interest, but **no sales** and **no payment** may be accepted.",
        "The **effective date** is the first day the security may actually be sold.",
      ],
    },
    { type: "heading", text: "The Securities Exchange Act of 1934 — the secondary market & the SEC" },
    {
      type: "text",
      body:
        "The `Securities Exchange Act of 1934` **created the SEC** and governs the secondary market — sometimes called the **People Act**. It gives the SEC authority over **exchanges, broker-dealers, transfer agents, and SROs**, and covers **insider trading** and **proxies**. It also set the framework under which the **Federal Reserve** sets margin requirements (**`Reg T`**).",
    },
    {
      type: "text",
      body:
        "The **SEC** is the top federal securities regulator — a **government agency**, created in **1934**.",
    },
    { type: "heading", text: "The other foundational acts" },
    {
      type: "list",
      items: [
        "`Trust Indenture Act of 1939` — corporate bonds need a **trust indenture** (a contract with a trustee protecting bondholders).",
        "`Investment Company Act of 1940` — regulates **mutual funds** and other investment companies.",
        "`Investment Advisers Act of 1940` — **paid investment advisers** must register.",
        "`Securities Investor Protection Act of 1970` — created **SIPC**, protecting brokerage customers up to `$500,000` per customer, including a `$250,000` cash sublimit. SIPC covers missing cash/securities from a **failed firm** — it does **NOT** cover market losses.",
      ],
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "A company files to IPO. During the `20`-plus-day cooling-off period, the underwriter may distribute a **red herring** but may **not** sell shares or accept payment. The `Securities Act of 1933` governs that primary offering. Once the shares begin trading investor-to-investor, the `Securities Exchange Act of 1934` takes over.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Securities Act of 1933", def: "Governs new issues / the primary market; non-exempt securities must be registered with a prospectus. Did NOT create the SEC." },
        { term: "Securities Exchange Act of 1934", def: "Governs the secondary market and created the SEC; covers exchanges, BDs, SROs, insider trading, proxies, and the Reg T margin framework." },
        { term: "SEC", def: "The top federal securities regulator — a government agency created by the 1934 Act." },
        { term: "Cooling-off period", def: "At least 20 days after a 1933 Act filing before the registration can become effective; no sales during this time." },
        { term: "Red herring", def: "A preliminary prospectus that may circulate during cooling-off to gauge interest — no sales or payment allowed." },
        { term: "Trust Indenture Act of 1939", def: "Requires a trust indenture for corporate bond issues." },
        { term: "Investment Company Act of 1940", def: "Regulates mutual funds and other investment companies." },
        { term: "Investment Advisers Act of 1940", def: "Requires paid investment advisers to register." },
        { term: "SIPC", def: "Created by the 1970 act; protects brokerage customers up to $500,000 (incl. $250,000 cash) if a firm fails — not against market losses." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'The `Securities Act of 1933` created the SEC.'* It did **NOT** — the SEC was created by the `Securities Exchange Act of 1934`. Remember: **1933 = new issues / paper (primary); 1934 = the SEC + trading (secondary).**",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
