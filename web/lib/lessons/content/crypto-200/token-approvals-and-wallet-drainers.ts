import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "token-approvals-and-wallet-drainers",
  title: "Token Approvals & Wallet Drainers: What You're Really Signing",
  level: 2,
  moduleId: "crypto-200",
  moduleOrder: 8,
  summary: "Most self-custody losses don't crack your key — they trick you into approving a contract to move your tokens for you.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "The previous lessons protected your **private key**: keep it cold, never type your seed into a website. But the single largest loss vector in self-custody usually doesn't touch your key at all. Instead, you **voluntarily grant a contract permission** to move your tokens — and a malicious contract uses that permission to empty the wallet. Understanding *what you sign* is now as important as protecting *how you sign*.",
    },
    { type: "heading", text: "Why approvals exist" },
    {
      type: "text",
      body:
        "An **ERC-20** token contract holds the ledger of who owns what. A smart contract — say a DEX — can't reach into your balance on its own. So the standard defines a two-step pattern: first you call **`approve`**, granting a *spender* (the DEX contract) permission to move up to some amount of one token. Later, that spender calls **`transferFrom`** to actually pull the tokens when you trade. The outstanding permission is your **allowance**, and the chain remembers it until you change it.",
    },
    {
      type: "text",
      body:
        "This is genuinely useful: it's why a swap can move your USDC the instant you confirm, without you hand-delivering tokens first. But an allowance is a **standing permission**. It persists after the trade, and it sits on-chain whether or not you ever interact with that contract again.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "ERC-20", def: "The standard interface for fungible tokens on Ethereum-style chains; it defines `approve`, `allowance`, and `transferFrom`." },
        { term: "approve", def: "A function granting a *spender* contract permission to move up to a set amount of one of your tokens." },
        { term: "allowance", def: "The outstanding amount a spender is currently permitted to move from your balance — it persists on-chain until changed." },
        { term: "transferFrom", def: "How an approved spender actually pulls tokens from your wallet, up to your allowance." },
        { term: "Unlimited approval", def: "An allowance set to the maximum value, letting a spender move your *entire* balance of that token, now and in the future." },
        { term: "setApprovalForAll", def: "The ERC-721/1155 (NFT) equivalent: a single yes/no grant over an *entire collection* in your wallet." },
        { term: "permit / Permit2", def: "An off-chain signed message that grants an allowance without a separate on-chain `approve` transaction." },
        { term: "Wallet drainer", def: "A phishing script that crafts a malicious approval or signature so one confirmation hands an attacker the ability to sweep your assets." },
      ],
    },
    { type: "heading", text: "Unlimited vs exact approvals" },
    {
      type: "text",
      body:
        "When a dApp asks for an approval, it often requests an **unlimited** allowance — the maximum possible value — so you never have to approve again. Convenient, but it means that contract (and anyone who can exploit it) may move your **entire balance** of that token, now and forever, until you revoke. An **exact** approval caps the allowance at just the amount this trade needs, so a later exploit can't reach beyond it. The trade-off is one extra approval the next time you transact.",
    },
    {
      type: "text",
      body:
        "**NFTs work the same way, only blunter.** The ERC-721/1155 grant is **`setApprovalForAll`**, a single switch that authorizes an operator over an *entire collection*. A classic drainer dangles a fake \"claim your free mint\" and the transaction you confirm is actually `setApprovalForAll` to the attacker — after which they transfer out every NFT in that collection.",
    },
    { type: "heading", text: "Blind-signing vs human-readable prompts" },
    {
      type: "text",
      body:
        "The danger compounds when you **can't read what you're confirming**. **Blind-signing** is approving a transaction or message your wallet (or hardware device) shows only as raw hex — you're trusting the site's claim about what it does. Modern wallets and standards like **EIP-712** render requests as **human-readable** structured data, so an approval names the *spender*, the *token*, and the *amount* in plain text. If a prompt is unreadable, or the named spender and amount don't match what you expected, that mismatch is the warning.",
    },
    { type: "heading", text: "permit / Permit2 signature phishing" },
    {
      type: "text",
      body:
        "Newer standards let you grant an allowance by **signing a message off-chain** instead of sending an on-chain `approve`. **EIP-2612 `permit`** adds this to a token directly; **Permit2** (a standalone Uniswap contract) extends it to tokens that lack it. Off-chain signatures cost no gas and improve UX — but they create a subtler trap. A signature *feels* harmless because nothing leaves your wallet and no gas is spent, yet a single malicious **`permit` signature** can authorize an attacker to move your tokens in a later transaction they pay for. Real `permit`/Permit2 grants are typically **short-lived** (minutes) and name a specific spender; a phishing prompt asking you to sign an allowance to an unknown address is the thing to refuse.",
    },
    { type: "heading", text: "Reviewing and revoking" },
    {
      type: "text",
      body:
        "Allowances are **public and persistent**, so you can audit them. Approval-checker tools (such as **Revoke.cash** or a block explorer's token-approval view) list every standing allowance on your address. **Revoking** sets an allowance back to **zero** — and because the original `approve` lived on-chain, the revoke is an **on-chain transaction that costs gas** too. Treat a periodic review like changing a lock: revoke approvals to contracts you no longer use, and prefer exact approvals going forward.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "You connect to a swap site and it asks to **`approve`** USDC. The prompt (rendered via **EIP-712**) names the spender contract and offers *unlimited*; you change it to the **exact** amount of your trade, so even if that contract is later exploited it can't reach the rest of your USDC. Months later you visit a \"token airdrop\" and a popup asks you to **sign a message** — no gas, looks free. You stop, read it, and see it's a **`permit`** granting a stranger's address an allowance over your balance. You **reject** it. Finally you run an approval checker, find an old unlimited allowance to a DEX you've stopped using, and **revoke** it (paying a small gas fee) to set it back to zero.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "A token approval is a **standing key to one of your balances**, not a one-time payment. It outlives the trade, so a contract that's safe today but exploited tomorrow can still drain an **unlimited** allowance you forgot about.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Misconception:** \"Signing a message is harmless because it costs no gas and moves nothing.\" A **`permit` / Permit2** signature *is* an approval — one malicious signature can authorize an attacker to sweep your tokens later. Read every signature request; reject any allowance to an address you don't recognize.",
    },
  ],
};
