import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "bridges-and-cross-chain-risk",
  title: "Bridges & Cross-Chain Risk",
  level: 3,
  moduleId: "crypto-300",
  moduleOrder: 5,
  summary:
    "How bridges and wrapped tokens move value between chains — and why bridges are the single biggest attack surface in DeFi, with real exploits to prove it.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Different blockchains can't natively talk to each other — Ethereum doesn't know what's happening on another chain. So when you want to move value across chains, you use a **bridge**. Bridges unlock a huge amount of the DeFi ecosystem, and they are also where more money has been stolen than almost anywhere else.",
    },
    {
      type: "text",
      body:
        "The most common design is **lock-and-mint**: the bridge **locks** your asset on chain A, then **mints** a **wrapped token** (e.g. `wETH` or `wBTC`) on chain B. To come back, you burn the wrapped token and the bridge **releases** the original. The crucial point: a wrapped token is an **IOU**. It's only worth the underlying as long as the bridge's locked collateral is still there and redeemable. If that lockbox is drained, the wrapped token can collapse toward zero.",
    },
    { type: "heading", text: "Why bridges are the #1 target" },
    {
      type: "text",
      body:
        "Bridges concentrate enormous value behind a **small trust assumption** — often a **multisig** or a **validator/guardian set**. Compromise the signing keys or the verification logic, and an attacker can mint *unbacked* tokens or drain the lockbox directly. The track record is stark: per Chainalysis, ~`$2B` was stolen across **13 bridge hacks in 2022**, roughly `64%` of all DeFi funds stolen that year.",
    },
    {
      type: "list",
      items: [
        "**Ronin (Mar 2022, ~$600M+):** attackers obtained `5 of 9` validator signing keys — a **validator-key compromise** (attributed to the Lazarus Group).",
        "**Wormhole (Feb 2022, ~$320M):** a **signature-verification flaw** let the attacker mint `120,000` unbacked `wETH`.",
      ],
    },
    {
      type: "text",
      body:
        "There's a risk hierarchy. \"Trusted\" bridges (multisig/validators) carry **key risk**; \"trustless\" bridges remove that but still carry **smart-contract risk**. Either way, bridging adds a layer of risk *beyond* just holding an asset on a single chain.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Bridge", def: "Infrastructure that moves value between blockchains that can't natively communicate." },
        { term: "Lock-and-mint", def: "Lock the asset on chain A, mint a wrapped version on chain B; burn-and-release to return." },
        { term: "Wrapped token", def: "An IOU (e.g. `wETH`, `wBTC`) worth the underlying only if the bridge's locked collateral is intact." },
        { term: "Validator / guardian set", def: "The group whose signatures authorize a bridge's mints and releases." },
        { term: "Multisig", def: "A wallet requiring multiple keys to approve; compromising enough keys breaks it." },
        { term: "Trustless bridge", def: "A bridge that removes key-holder trust but still carries smart-contract risk." },
        { term: "De-peg", def: "When a wrapped token's price drifts from `1:1` with its underlying." },
      ],
    },
    { type: "heading", text: "A worked walkthrough" },
    {
      type: "list",
      ordered: true,
      items: [
        "You hold `2 ETH` on Ethereum and want it on an L2.",
        "You send it to the bridge, which **locks `2 ETH`** on Ethereum.",
        "The bridge **mints `2 wETH`** on the L2 — an IOU, `1:1` with the locked ETH.",
        "You use the `2 wETH` on the L2.",
      ],
    },
    {
      type: "text",
      body:
        "**The failure mode:** an attacker exploits the bridge's signature check (Wormhole-style) and mints `wETH` with **no ETH locked**, then dumps it and drains real assets. Now the lockbox is short. Your `2 wETH` may no longer be fully redeemable, and its price can crater — *even though you did nothing wrong*.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**De-peg without a hack, and inherited risk.** A wrapped token can lose its peg purely because the market *fears* undercollateralization — no exploit required. And when you bridge, you inherit the risk of **every** chain and contract involved: a problem on either side can strand or devalue your funds.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Common misconception:** *\"Wrapped tokens like `wBTC`/`wETH` are the same as the real asset and perfectly safe.\"* A wrapped token is a **claim** backed by assets locked in a bridge — its value depends on that backing staying intact. Bridges are the most-attacked part of DeFi (Ronin ~$600M, Wormhole ~$320M in 2022), and a drained bridge leaves wrapped tokens unbacked.",
    },
  ],
};
