import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "stablecoins",
  title: "Stablecoins and the Peg",
  level: 2,
  moduleId: "crypto-200",
  moduleOrder: 3,
  summary: "The peg is a maintained target, not a guarantee — how the main stablecoin designs work and how each has broken.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "A **stablecoin** aims to track a reference value — usually `$1`. The crucial word is *aims*. The **peg** is a **target maintained by a mechanism**, not a law of nature and not a guarantee. Whether it holds depends entirely on the design behind it.",
    },
    { type: "heading", text: "Three designs" },
    {
      type: "list",
      items: [
        "**Fiat-backed** (e.g. `USDC`, `USDT`): the issuer claims reserves — cash and short-term Treasuries — and redeems roughly `1:1`. Risks: reserve quality, redemption access, and counterparty/banking exposure.",
        "**Crypto-collateralized** (e.g. `DAI`): backed by **over-collateralized** crypto locked in smart contracts (you deposit more than `$1` of crypto per `$1` minted). Risks: collateral crashes, forced liquidations, and smart-contract bugs.",
        "**Algorithmic**: holds the peg by changing supply and arbitraging with a companion token instead of holding full reserves. Historically the **most fragile** design.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Peg", def: "The target value a stablecoin tries to track, usually `$1`." },
        { term: "Depeg", def: "Trading meaningfully away from the target value." },
        { term: "Fiat-backed", def: "Backed by reserves of cash and short-term government debt, redeemable ~1:1." },
        { term: "Crypto-collateralized", def: "Backed by crypto locked in contracts, deliberately worth more than the coins minted." },
        { term: "Algorithmic", def: "Maintains the peg via supply changes and a companion token rather than full reserves." },
        { term: "Over-collateralization", def: "Locking more value than is minted, as a buffer against price drops." },
        { term: "Attestation / audit", def: "Third-party reports on what reserves exist and their composition." },
      ],
    },
    { type: "heading", text: "Depegs are real" },
    {
      type: "text",
      body:
        "Reserve transparency matters: attestations or audits, the **composition** of reserves, and clear **redemption rights**. But depegs have hit *every* type. The canonical algorithmic failure was **TerraUSD (UST)** in May 2022, which collapsed from about `$1` to cents within days as its paired token `LUNA` spiraled. And fiat-backed coins aren't immune: in March 2023 **USDC** briefly traded near `$0.87` when some of its reserves were exposed to a failed bank (Silicon Valley Bank), then recovered within days. Even reserve-backed coins carry banking and counterparty risk.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Picture three coins each targeting `$1` (illustrative). **Coin A** is fiat-backed: holders can redeem `1:1` for cash/Treasuries, and that redemption pressure pulls the price back to `$1`. **Coin B** is crypto-collateralized: it can only be minted against more than `$1` of locked crypto, and it auto-liquidates positions if the collateral falls too far. **Coin C** is algorithmic: it mints and burns a sister token to chase the peg — but if confidence breaks, that loop can spiral *away* from `$1`, exactly as UST did in 2022.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "A peg can break from causes **beyond the issuer** — a banking failure, an oracle glitch, a liquidity crunch, or a confidence-driven run. \"Backed\" is only as good as **what** backs it and **whether you can actually redeem**.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Misconception:** \"Stablecoins are pegged to the dollar, so they can never depeg.\" The peg is a *maintained target*, not a guarantee. Algorithmic (UST, 2022) **and** fiat-backed (USDC, 2023) coins have both traded below `$1`.",
    },
  ],
};
