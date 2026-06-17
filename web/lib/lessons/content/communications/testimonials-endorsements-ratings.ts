import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "testimonials-endorsements-ratings",
  title: "Testimonials & Endorsements: FINRA Disclosures vs the SEC Marketing Rule",
  level: 4,
  moduleId: "markets-communications",
  moduleOrder: 4,
  summary:
    "Broker-dealers may use testimonials — but only with specific FINRA-required disclosures, which differ from the SEC's adviser-only Marketing Rule.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Broker-dealer testimonials are **permitted** — they are **not banned** — but they come with strings. They are governed by **FINRA `Rule 2210(d)(6)`**, which requires specific disclosures.",
    },
    { type: "heading", text: "Required disclosures for BD testimonials" },
    {
      type: "text",
      body:
        "When a testimonial concerns a **technical / investment-advice matter** or **investment performance**, the communication must **prominently disclose**:",
    },
    {
      type: "list",
      items: [
        "The testimonial **may not be representative** of other customers' experience.",
        "It is **not a guarantee** of future performance or success.",
        "If compensation paid **exceeds `$100`**, the fact that it is a **paid** testimonial.",
        "If it implies expertise/experience, the **qualifications** of the person giving it.",
      ],
    },
    { type: "heading", text: "The SEC Marketing Rule contrast" },
    {
      type: "text",
      body:
        "The **SEC Marketing Rule `206(4)-1`** (compliance date **November 4 2022**) governs **investment advisers (RIAs) only**. It permits adviser testimonials/endorsements with **clear-and-conspicuous** disclosure of client/non-client status, compensation, and material conflicts. This is the **adviser** rule — **not** the Series 7 broker-dealer answer. On the exam, BD testimonials = FINRA `2210(d)(6)`.",
    },
    { type: "heading", text: "Rankings and past performance" },
    {
      type: "list",
      items: [
        "**Rankings/ratings** are permitted only from **independent entities** using a **disclosed, consistent methodology**; **firm-created rankings** trigger **pre-filing** (Lesson 2).",
        "**Past performance** may be shown, subject to the **no-projection rule** (Lesson 3) and required disclosures.",
      ],
    },
    { type: "heading", text: "Worked scenario — a paid client video" },
    {
      type: "text",
      body:
        "A brokerage posts a client video praising a rep's stock picks and pays the client `$250`. As a performance testimonial, the retail communication must disclose: **not representative** of others; **no guarantee** of future results; that it is a **paid** testimonial (compensation `$250` exceeds `$100`). If the client claims to be a **'market expert,'** his **qualifications** must also be disclosed.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Rule 2210(d)(6)", def: "FINRA rule permitting BD testimonials with required disclosures — the Series 7 answer." },
        { term: "Not representative", def: "Disclosure that the testimonial may not reflect other customers' experience." },
        { term: "No guarantee", def: "Disclosure that the testimonial is not a guarantee of future performance/success." },
        { term: "$100 paid-testimonial threshold", def: "If compensation exceeds $100, the communication must disclose it is a paid testimonial." },
        { term: "Qualifications disclosure", def: "If a testimonial implies expertise, the person's qualifications must be disclosed." },
        { term: "SEC Marketing Rule 206(4)-1", def: "Adviser-only (RIA) testimonial rule, compliance Nov 4 2022 — not the BD/Series 7 answer." },
        { term: "Independent rankings", def: "Permitted only from independent entities using disclosed, consistent methodology." },
        { term: "Firm-created rankings", def: "Self-made performance rankings trigger pre-filing with FINRA." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'Testimonials are banned for broker-dealers'* OR *'the 2022 SEC Marketing Rule changed my brokerage's testimonial rules.'* Neither — **FINRA permits BD testimonials with disclosures**, and the **2022 Marketing Rule (`206(4)-1`) applies to investment advisers (RIAs), not broker-dealers**.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
