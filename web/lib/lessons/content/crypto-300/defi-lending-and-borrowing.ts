import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "defi-lending-and-borrowing",
  title: "DeFi Lending & Borrowing: Over-Collateralized Loans",
  level: 3,
  moduleId: "crypto-300",
  moduleOrder: 1,
  summary:
    "How over-collateralized DeFi loans work — supply and borrow rates, collateral factor, and the health-factor line where liquidation begins.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Imagine borrowing money from a stranger who never asks your name, never checks your credit, and never calls to remind you a payment is late. That is roughly what a **DeFi lending pool** does. Protocols like *Aave* and *Compound* let anyone supply assets to earn interest, and anyone post collateral to borrow — with no identity, no credit score, and no loan officer. The catch is that *all* of that protection has to be replaced by something automatic.",
    },
    {
      type: "text",
      body:
        "These pools are **non-custodial** (smart contracts hold the funds, not a company) and **permissionless** (no application, no approval). Suppliers earn the *supply rate*; borrowers pay the *borrow rate*. Because there is no credit check and no legal recourse if you walk away, the loan must be **over-collateralized** — you deposit *more* value than you borrow, and that collateral is the protocol's only protection.",
    },
    { type: "heading", text: "How the rates are set" },
    {
      type: "text",
      body:
        "Nobody negotiates the interest rate. It is set algorithmically by **utilization** — the share of supplied funds currently borrowed (`borrowed ÷ supplied`). When utilization is high, the pool is running low on free liquidity, so rates rise to attract suppliers and discourage borrowing. The **borrow rate is always higher than the supply rate** — the gap is what pays suppliers and the protocol.",
    },
    { type: "heading", text: "Collateral factor and the liquidation line" },
    {
      type: "text",
      body:
        "How much you can borrow against your collateral is capped by the **collateral factor** (also called **LTV**, loan-to-value) — for example `80%` for ETH. A separate, higher **liquidation threshold** marks the point where the protocol starts forcibly closing your loan. The single number that tracks how safe you are is the **health factor**.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Over-collateralization", def: "Depositing more value than you borrow, because the collateral is the protocol's only protection — there is no credit check or recourse." },
        { term: "Collateral factor / LTV", def: "The cap on how much you can borrow against collateral, e.g. `80%` for ETH." },
        { term: "Liquidation threshold", def: "The (higher) point at which the protocol begins liquidating your collateral." },
        { term: "Health factor (HF)", def: "`(collateral value × liquidation threshold) ÷ debt value`. `HF > 1` is safe; `HF < 1` is liquidatable." },
        { term: "Utilization", def: "`borrowed ÷ supplied`. Higher utilization pushes both supply and borrow rates up." },
        { term: "Liquidation bonus / penalty", def: "The extra ~`5-10%` of your collateral a liquidator keeps as a reward — paid by you." },
        { term: "Liquidator", def: "Anyone (often a bot) who repays part of an unhealthy loan to seize the collateral plus the bonus." },
      ],
    },
    { type: "heading", text: "A worked example (illustrative numbers)" },
    {
      type: "text",
      body:
        "You deposit `10 ETH` at `$2,000` each = `$20,000` of collateral, with an `80%` liquidation threshold. You borrow `$12,000 USDC`. Your health factor is `(20,000 × 0.80) ÷ 12,000 = 1.33` — comfortably safe.",
    },
    {
      type: "list",
      items: [
        "**ETH falls to `$1,500`** → collateral `$15,000`, `HF = (15,000 × 0.80) ÷ 12,000 = 1.00` — right on the edge.",
        "**ETH falls to `$1,400`** → collateral `$14,000`, `HF = (14,000 × 0.80) ÷ 12,000 = 0.93` — below `1`, so liquidation triggers.",
        "A liquidator repays part of your `$12,000` debt, seizes your ETH, and keeps a ~`5-8%` bonus out of *your* collateral.",
      ],
    },
    {
      type: "text",
      body:
        "Notice the trigger can come from *either* side: a **falling collateral price** or a **rising borrowed-asset price** both shrink the health factor. Borrowing a volatile asset against volatile collateral stacks both risks.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Oracle and stablecoin risk.** Health factors are computed from a price **oracle**. A manipulated or laggy oracle can liquidate a healthy loan or let bad debt build. And stablecoin collateral is not risk-free — if a `$1.00` stablecoin de-pegs to `$0.92`, your collateral value drops ~`8%` and a near-the-line `HF` can collapse below `1` with no price move in the asset you were watching.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Common misconception:** *\"There's no credit check, so a DeFi loan can't be liquidated or go bad for me.\"* It is the opposite. Because there is no recourse, the protocol protects itself with over-collateralization plus **automatic, permissionless liquidation**. The moment `HF < 1`, your collateral is seized — with a penalty, by a bot, with no warning and no margin-call phone call.",
    },
  ],
};
