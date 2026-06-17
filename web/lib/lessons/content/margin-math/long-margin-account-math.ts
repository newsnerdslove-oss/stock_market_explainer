import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "long-margin-account-math",
  title: "Long Margin Account Math: Equity, Reg T, SMA & Restricted Accounts",
  level: 4,
  moduleId: "markets-margin-math",
  moduleOrder: 1,
  summary:
    "Master the long-account equation, Reg T deposits, and how rising stock prices generate SMA you can actually spend.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Every long margin question on the exam reduces to one equation. Learn it cold and the rest is bookkeeping: **Long Market Value − Debit Balance = Equity**, written `LMV − DR = EQ`.",
    },
    {
      type: "heading",
      text: "The long account equation",
    },
    {
      type: "text",
      body:
        "`LMV` is the current value of your shares, `DR` is the **debit balance** (what you borrowed from the broker), and `EQ` is your own stake. The key trap: the **debit balance does not move with the market**. You borrowed a fixed number of dollars. When the stock price changes, only `LMV` and `EQ` change — `DR` stays put.",
    },
    {
      type: "heading",
      text: "Reg T, maintenance & excess equity",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**Reg T initial requirement**: `50%` of the purchase amount on a new long buy.",
        "**FINRA minimum maintenance (long)**: equity must stay `≥ 25%` of `LMV`.",
        "**Excess equity** = `EQ − (50% × current LMV)`. Positive excess equity creates **SMA**.",
        "**Buying power** = `2 × SMA` (because Reg T only requires you to put up `50%`).",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "**SMA** (Special Memorandum Account) is a high-water-mark line of credit. Once generated it does **not** shrink when the market later falls — it only goes down when you *use* it (to buy more or withdraw cash).",
    },
    {
      type: "heading",
      text: "Worked example 1 — appreciation generates SMA",
    },
    {
      type: "text",
      body:
        "Buy 1,000 shares at `$50` = `$50,000` LMV. Reg T `50%` means you deposit `$25,000` of equity and borrow `$25,000` (the debit). Now the stock rises to `$70`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Open: `LMV = $50,000`, deposit `EQ = $25,000`, `DR = $25,000`.",
        "Stock → `$70`: `LMV = $70,000`, `DR` unchanged `= $25,000`.",
        "Equity: `EQ = $70,000 − $25,000 = $45,000`.",
        "Reg T requirement now: `50% × $70,000 = $35,000`.",
        "Excess equity = SMA: `$45,000 − $35,000 = $10,000`.",
        "Buying power: `2 × $10,000 = $20,000` of new stock.",
      ],
    },
    {
      type: "heading",
      text: "Worked example 2 — SMA is sticky, then spent",
    },
    {
      type: "text",
      body:
        "Continue from above with `SMA = $10,000`. The stock falls back to `$60`, then the customer spends the SMA.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Stock → `$60`: `LMV = $60,000`, `EQ = $60,000 − $25,000 = $35,000`.",
        "Reg T requirement: `50% × $60,000 = $30,000`; new excess = `$35,000 − $30,000 = $5,000`.",
        "But SMA **stays at its high of `$10,000`** — it does not fall with the stock.",
        "Customer uses the `$10,000` SMA to buy `$10,000` more stock: `LMV → $70,000`.",
        "Debit rises by `$10,000`: `DR → $35,000`; `SMA → $0`.",
      ],
    },
    {
      type: "heading",
      text: "Restricted accounts",
    },
    {
      type: "text",
      body:
        "A long account is **restricted** when equity is below the Reg T requirement (`50%` of LMV) but still above the `25%` maintenance floor — restricted, but not in violation. On a sale in a restricted account, the **retention requirement** holds `50%` of the proceeds against the debit and releases the other `50%` to SMA.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "LMV", def: "Long Market Value — current market value of the shares held long." },
        { term: "DR", def: "Debit balance — the dollars borrowed from the broker. Fixed; does not move with price." },
        { term: "EQ", def: "Equity — your own stake. In a long account, `LMV − DR = EQ`." },
        { term: "Reg T", def: "Federal Reserve rule setting the `50%` initial requirement on new long purchases." },
        { term: "Maintenance", def: "FINRA minimum equity floor: `25%` of LMV for a long position." },
        { term: "Excess equity", def: "`EQ − (50% × LMV)`. Positive excess equity generates SMA." },
        { term: "SMA", def: "Special Memorandum Account — a non-decreasing line of credit equal to excess equity at its high." },
        { term: "Buying power", def: "How much new stock SMA can buy: `2 × SMA` under Reg T `50%`." },
        { term: "Restricted account", def: "Equity below the `50%` Reg T requirement but above the `25%` maintenance floor." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"SMA falls when my stock falls.\"* SMA is a **non-decreasing** line of credit — it only goes down when you spend it (to buy or withdraw). A falling stock reduces your *excess equity*, but the SMA figure already recorded stays at its high. This is educational content, not financial advice.",
    },
  ],
};
