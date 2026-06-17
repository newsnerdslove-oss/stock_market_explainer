import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "credit-risk-and-ratings",
  title: "Credit Risk & Ratings",
  level: 3,
  moduleId: "markets-fixed-income",
  moduleOrder: 5,
  summary: "Ratings and the spread over Treasuries price the risk that an issuer fails to pay.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Interest-rate risk isn't the only worry. There's also **credit risk** — the chance the issuer simply *fails to pay* what it owes. US Treasuries, backed by the federal government, are treated as the near *risk-free* benchmark; everything riskier must offer more yield to compensate.",
    },
    {
      type: "heading",
      text: "How ratings work",
    },
    {
      type: "text",
      body:
        "Rating agencies grade issuers on their ability to pay. **S&P** and **Fitch** use `AAA, AA, A, BBB, BB, B, CCC, CC, C, D`. **Moody's** uses `Aaa, Aa, A, Baa, Ba, B, Caa, Ca, C`. The crucial dividing line is **investment grade**: `BBB−/Baa3` and above. Anything at `BB+/Ba1` and below is **high-yield**, or *junk*.",
    },
    {
      type: "heading",
      text: "The credit spread",
    },
    {
      type: "text",
      body:
        "The market's real-time read on credit risk is the **credit spread**: `bond yield − same-maturity Treasury yield`. A lower rating means a wider spread. Spreads **widen** when default fears grow and **narrow** when conditions improve — a live risk gauge that often moves before the agencies act.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Credit / default risk", def: "The risk the issuer fails to make promised interest or principal payments." },
        { term: "Investment grade", def: "Bonds rated `BBB−/Baa3` and above — relatively low default risk." },
        { term: "High-yield / junk", def: "Bonds rated `BB+/Ba1` and below — higher default risk, higher yield." },
        { term: "Credit spread", def: "A bond's yield minus the same-maturity Treasury yield; widens as risk rises." },
        { term: "Downgrade / fallen angel", def: "A rating cut; a *fallen angel* is a bond downgraded from investment grade to junk." },
        { term: "Rating agency", def: "A firm (S&P, Moody's, Fitch) that publishes opinions on an issuer's creditworthiness." },
      ],
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "A `10`-year corporate bond yields `6.2%`; the `10`-year Treasury yields `4.0%`.",
        "Credit spread `= 6.2% − 4.0% = 2.2%` (`220` bps).",
        "The bond is rated `BBB` — just above the `BBB−/Baa3` line, so still **investment grade**.",
        "Now it's downgraded to `BB+`: it becomes **junk**, the spread widens and the price falls.",
        "Suppose its yield jumps to `7.5%` while the Treasury holds at `4.0%`: new spread `= 7.5% − 4.0% = 3.5%` (`350` bps).",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Ratings can **lag** the market. Because spreads reprice in real time, the market often signals trouble before an agency formally downgrades. And no rating is permanent — even a high grade can be cut.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't read \"investment grade\" as \"can't default.\" IG bonds default far *less* than junk, but default is still possible. Investment grade means *relatively low* risk (`BBB−/Baa3` and up) — not zero.",
    },
  ],
};
