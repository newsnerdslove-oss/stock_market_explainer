import type { Question } from "@/lib/quiz/types";

// Quiz for the "Token Approvals & Wallet Drainers: What You're Really Signing" lesson.
export const questions: Question[] = [
  {
    id: "token-approvals-and-wallet-drainers.q1",
    lessonSlug: "token-approvals-and-wallet-drainers",
    type: "single",
    difficulty: "easy",
    tags: ["approvals", "erc-20"],
    prompt: "What does calling **`approve`** on an ERC-20 token actually do?",
    choices: [
      { id: "a", text: "Immediately transfers your tokens to the spender" },
      { id: "b", text: "Grants a spender contract permission to move up to a set amount of that token" },
      { id: "c", text: "Reveals your private key to the contract", feedback: "Approvals never expose your key — they grant a permission while the key stays put." },
      { id: "d", text: "Mints new tokens into your wallet" },
    ],
    correctId: "b",
    explanation:
      "`approve` grants a **spender** permission to move up to a set amount of one token — your **allowance**. The spender later calls **`transferFrom`** to actually pull the tokens.",
  },
  {
    id: "token-approvals-and-wallet-drainers.q2",
    lessonSlug: "token-approvals-and-wallet-drainers",
    type: "single",
    difficulty: "easy",
    tags: ["approvals", "allowance"],
    prompt: "After you approve a DEX and complete one swap, what happens to the **allowance**?",
    choices: [
      { id: "a", text: "It is automatically deleted the moment the swap settles" },
      { id: "b", text: "It persists on-chain until you change or revoke it" },
      { id: "c", text: "It moves to your hardware wallet for safekeeping" },
      { id: "d", text: "It expires after exactly 24 hours" },
    ],
    correctId: "b",
    explanation:
      "An allowance is a **standing permission**. It persists on-chain after the trade, whether or not you ever touch that contract again — which is why old approvals are a risk.",
  },
  {
    id: "token-approvals-and-wallet-drainers.q3",
    lessonSlug: "token-approvals-and-wallet-drainers",
    type: "single",
    difficulty: "medium",
    tags: ["approvals", "unlimited", "risk"],
    prompt: "Why is an **unlimited** approval riskier than an **exact** one?",
    choices: [
      { id: "a", text: "It costs far more gas to set up" },
      { id: "b", text: "It lets the spender move your entire balance of that token, now and in the future" },
      { id: "c", text: "It changes the token's market price" },
      { id: "d", text: "It only works on NFTs, not fungible tokens", feedback: "Unlimited approvals apply to fungible ERC-20 tokens; the NFT equivalent is `setApprovalForAll`." },
    ],
    correctId: "b",
    explanation:
      "An **unlimited** allowance lets that contract (or anyone who exploits it) move your *entire* balance of the token, indefinitely, until you revoke. An **exact** approval caps the exposure to one trade.",
  },
  {
    id: "token-approvals-and-wallet-drainers.q4",
    lessonSlug: "token-approvals-and-wallet-drainers",
    type: "single",
    difficulty: "medium",
    tags: ["approvals", "nft", "setApprovalForAll", "scenario"],
    prompt: "A \"free mint\" site asks you to confirm a transaction that's actually **`setApprovalForAll`** to the attacker. What does confirming it grant?",
    choices: [
      { id: "a", text: "Operator control over an entire NFT collection in your wallet" },
      { id: "b", text: "Permission to move exactly one NFT you chose" },
      { id: "c", text: "A refund of the mint's gas fee" },
      { id: "d", text: "Read-only access to your transaction history" },
    ],
    correctId: "a",
    explanation:
      "**`setApprovalForAll`** is the ERC-721/1155 grant — a single switch authorizing an operator over an *entire collection*. A drainer disguises it as a claim, then transfers out every NFT in that collection.",
  },
  {
    id: "token-approvals-and-wallet-drainers.q5",
    lessonSlug: "token-approvals-and-wallet-drainers",
    type: "single",
    difficulty: "medium",
    tags: ["signing", "blind-signing", "eip-712"],
    prompt: "What is **blind-signing**, and why is it dangerous?",
    choices: [
      { id: "a", text: "Signing with your eyes closed for extra security" },
      { id: "b", text: "Approving a request shown only as raw hex, so you can't verify what it does" },
      { id: "c", text: "Signing a transaction that contains no data at all" },
      { id: "d", text: "Letting the wallet auto-sign every prompt without asking" },
    ],
    correctId: "b",
    explanation:
      "**Blind-signing** means confirming a transaction or message your wallet shows only as raw hex — you're trusting the site's claim. **EIP-712** instead renders requests as human-readable data naming the spender, token, and amount.",
  },
  {
    id: "token-approvals-and-wallet-drainers.q6",
    lessonSlug: "token-approvals-and-wallet-drainers",
    type: "single",
    difficulty: "hard",
    tags: ["permit", "permit2", "phishing", "scenario", "misconception"],
    prompt: "A site asks you to **sign a message** (no gas, nothing leaves your wallet) granting an allowance to an unfamiliar address. Why is this still dangerous?",
    choices: [
      { id: "a", text: "It isn't — if no gas is spent and nothing moves, signing is always safe", feedback: "An off-chain signature can absolutely be an approval — a `permit` / Permit2 message grants an allowance without any gas or on-chain transaction." },
      { id: "b", text: "A `permit` / Permit2 signature is itself an approval; one malicious signature can let an attacker move your tokens later" },
      { id: "c", text: "Signing a message permanently changes your wallet address" },
      { id: "d", text: "It will drain your wallet's gas balance to zero" },
    ],
    correctId: "b",
    explanation:
      "A **`permit` / Permit2** signature *is* an off-chain approval. It feels harmless because no gas is spent, but one malicious signature can authorize an attacker to sweep your tokens in a later transaction. Reject any allowance to an address you don't recognize.",
  },
  {
    id: "token-approvals-and-wallet-drainers.q7",
    lessonSlug: "token-approvals-and-wallet-drainers",
    type: "single",
    difficulty: "hard",
    tags: ["revoke", "allowance", "scenario"],
    prompt: "You find an old **unlimited** allowance to a DEX you no longer use. What does **revoking** it involve?",
    choices: [
      { id: "a", text: "Sending an on-chain transaction (costing gas) that sets the allowance back to zero" },
      { id: "b", text: "A free off-chain action with no blockchain record" },
      { id: "c", text: "Contacting the DEX's support desk to cancel it for you" },
      { id: "d", text: "Moving the tokens to a new wallet, which auto-clears all approvals", feedback: "Moving tokens doesn't erase an allowance — the standing permission lives on the address, not the balance." },
    ],
    correctId: "a",
    explanation:
      "Because the original `approve` lived on-chain, **revoking** is an **on-chain transaction that costs gas** and sets the allowance back to **zero**. Approval-checker tools (e.g. Revoke.cash or an explorer's view) list standing allowances so you can audit and clear them.",
  },
];
