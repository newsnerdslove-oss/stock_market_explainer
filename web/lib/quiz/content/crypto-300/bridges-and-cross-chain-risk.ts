import type { Question } from "@/lib/quiz/types";

// Quiz for the "Bridges & Cross-Chain Risk" lesson.
export const questions: Question[] = [
  {
    id: "bridges-and-cross-chain-risk.q1",
    lessonSlug: "bridges-and-cross-chain-risk",
    type: "single",
    difficulty: "medium",
    tags: ["bridges", "wrapped-tokens"],
    prompt: "When a bridge gives you `2 wETH` on another chain, what backs it?",
    choices: [
      { id: "a", text: "A government deposit-insurance fund" },
      { id: "b", text: "The original `2 ETH` locked in the bridge on the source chain" },
      { id: "c", text: "Newly created ETH printed on the destination chain" },
      { id: "d", text: "Nothing — it's purely a number with no backing" },
    ],
    correctId: "b",
    explanation:
      "Lock-and-mint: the bridge **locks** your ETH on the source chain and mints a `1:1` wrapped IOU on the destination. The wrapped token is only worth the underlying while that locked collateral is intact.",
  },
  {
    id: "bridges-and-cross-chain-risk.q2",
    lessonSlug: "bridges-and-cross-chain-risk",
    type: "single",
    difficulty: "easy",
    tags: ["bridges", "risk"],
    prompt: "Why are bridges an especially high-risk target?",
    choices: [
      { id: "a", text: "They pool huge value behind a small trust assumption (a multisig or validator set)" },
      { id: "b", text: "They charge no fees, so attackers use them for free" },
      { id: "c", text: "They are run directly by governments" },
      { id: "d", text: "They can only be used once per day" },
    ],
    correctId: "a",
    explanation:
      "A bridge concentrates enormous locked value behind a small trust point — often a multisig or validator/guardian set. Compromise the keys or verification logic and an attacker can drain it or mint unbacked tokens.",
  },
  {
    id: "bridges-and-cross-chain-risk.q3",
    lessonSlug: "bridges-and-cross-chain-risk",
    type: "single",
    difficulty: "medium",
    tags: ["bridges", "wormhole", "scenario", "history"],
    prompt: "The 2022 **Wormhole** hack (~$320M) happened because…",
    choices: [
      { id: "a", text: "A trader used too much leverage" },
      { id: "b", text: "The price of ETH crashed overnight" },
      { id: "c", text: "A signature-verification flaw let the attacker mint `120,000` unbacked `wETH`" },
      { id: "d", text: "Users forgot their seed phrases" },
    ],
    correctId: "c",
    explanation:
      "Wormhole's exploit was a **signature-verification flaw**: the attacker forged approval and minted `120,000` `wETH` with no ETH locked behind it, then drained real assets.",
  },
  {
    id: "bridges-and-cross-chain-risk.q4",
    lessonSlug: "bridges-and-cross-chain-risk",
    type: "single",
    difficulty: "medium",
    tags: ["bridges", "ronin", "history"],
    prompt: "The 2022 **Ronin** bridge hack (~$600M+) resulted from…",
    choices: [
      { id: "a", text: "A bug in Ethereum's base protocol" },
      { id: "b", text: "Attackers obtaining `5 of 9` validator signing keys (a validator-key compromise)" },
      { id: "c", text: "An impermanent-loss event in a liquidity pool" },
      { id: "d", text: "A funding-rate spike on perps" },
    ],
    correctId: "b",
    explanation:
      "Ronin relied on `9` validators; attackers (attributed to Lazarus Group) gained control of `5` of the signing keys — enough to authorize fraudulent withdrawals and drain the bridge.",
  },
  {
    id: "bridges-and-cross-chain-risk.q5",
    lessonSlug: "bridges-and-cross-chain-risk",
    type: "single",
    difficulty: "easy",
    tags: ["bridges", "lock-and-mint"],
    prompt: "In a **lock-and-mint** bridge, how do you get your original asset back?",
    choices: [
      { id: "a", text: "Wait for the wrapped token to expire" },
      { id: "b", text: "Sell the wrapped token to the validators" },
      { id: "c", text: "Burn the wrapped token, and the bridge releases the locked original" },
      { id: "d", text: "You can't — the original is gone forever" },
    ],
    correctId: "c",
    explanation:
      "The reverse of lock-and-mint is **burn-and-release**: you burn the wrapped IOU on the destination chain, and the bridge unlocks and releases the original asset on the source chain.",
  },
  {
    id: "bridges-and-cross-chain-risk.q6",
    lessonSlug: "bridges-and-cross-chain-risk",
    type: "single",
    difficulty: "hard",
    tags: ["bridges", "wrapped-tokens", "scenario"],
    prompt:
      "A bridge you used is exploited and its locked ETH is drained. You still hold its `wETH`. What likely happens to you?",
    choices: [
      { id: "a", text: "Nothing — your `wETH` is guaranteed `1:1` regardless" },
      { id: "b", text: "The exchange automatically replaces your tokens" },
      { id: "c", text: "Your `wETH` converts back to ETH on its own" },
      { id: "d", text: "Your `wETH` may become unbacked and de-peg sharply, even though you weren't personally hacked" },
    ],
    correctId: "d",
    explanation:
      "With the lockbox drained, the `wETH` claims now exceed the ETH behind them. Your `wETH` may no longer be fully redeemable and can crater in price — a loss you suffer even though you did nothing wrong.",
  },
  {
    id: "bridges-and-cross-chain-risk.q7",
    lessonSlug: "bridges-and-cross-chain-risk",
    type: "single",
    difficulty: "hard",
    tags: ["bridges", "de-peg"],
    prompt: "Can a wrapped token de-peg **without** an actual hack?",
    choices: [
      { id: "a", text: "Yes — if the market merely fears undercollateralization, it can de-peg on its own" },
      { id: "b", text: "No — a de-peg requires a confirmed exploit" },
      { id: "c", text: "No — wrapped tokens are legally pegged" },
      { id: "d", text: "Only if the underlying asset is delisted" },
    ],
    correctId: "a",
    explanation:
      "Markets price in fear. If traders simply *suspect* the backing is unsafe, they'll dump the wrapped token, causing a de-peg — no confirmed hack needed.",
  },
  {
    id: "bridges-and-cross-chain-risk.q8",
    lessonSlug: "bridges-and-cross-chain-risk",
    type: "single",
    difficulty: "medium",
    tags: ["bridges", "trust", "smart-contract"],
    prompt: "Compared to a \"trusted\" (multisig/validator) bridge, a \"trustless\" bridge…",
    choices: [
      { id: "a", text: "Has zero risk of any kind" },
      { id: "b", text: "Removes key-holder trust but still carries smart-contract risk" },
      { id: "c", text: "Is always slower and more expensive but perfectly safe" },
      { id: "d", text: "Requires you to hold the validators' keys yourself" },
    ],
    correctId: "b",
    explanation:
      "Trustless bridges drop the validator/multisig key risk, but the verification logic still lives in code — so **smart-contract risk** remains. Bridging always adds risk beyond holding on one chain.",
  },
  {
    id: "bridges-and-cross-chain-risk.q9",
    lessonSlug: "bridges-and-cross-chain-risk",
    type: "single",
    difficulty: "medium",
    tags: ["bridges", "history", "scale"],
    prompt: "How significant were bridge hacks in DeFi in 2022?",
    choices: [
      { id: "a", text: "A negligible share of total DeFi losses" },
      { id: "b", text: "Zero — no bridges were exploited that year" },
      { id: "c", text: "About `$2B` stolen across 13 bridge hacks — roughly `64%` of all DeFi funds stolen that year" },
      { id: "d", text: "Limited to one small bridge worth under `$1M`" },
    ],
    correctId: "c",
    explanation:
      "Per Chainalysis, ~`$2B` was stolen across **13 bridge hacks in 2022**, about `64%` of all DeFi funds stolen — which is why bridges are considered the biggest attack surface in DeFi.",
  },
];
