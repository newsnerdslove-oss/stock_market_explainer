import type { Question } from "@/lib/quiz/types";

// Quiz for the "How a crypto transaction works" lesson.
export const questions: Question[] = [
  {
    id: "how-a-crypto-transaction-works.q1",
    lessonSlug: "how-a-crypto-transaction-works",
    type: "single",
    difficulty: "easy",
    tags: ["crypto", "address", "private-key"],
    prompt: "Which statement about a **public address** and a **private key** is correct?",
    choices: [
      { id: "a", text: "The address must be kept secret; the private key can be shared freely", feedback: "It's the reverse: the address is shareable, the private key is the secret that controls the funds." },
      { id: "b", text: "The address is shareable like an account number; the private key is the secret that controls the funds" },
      { id: "c", text: "They are the same string used two different ways" },
      { id: "d", text: "The exchange generates a new private key for every payment you receive" },
    ],
    correctId: "b",
    explanation:
      "A **public address** is the shareable destination for funds. The **private key** is the secret that authorizes spending — whoever holds it controls the funds.",
  },
  {
    id: "how-a-crypto-transaction-works.q2",
    lessonSlug: "how-a-crypto-transaction-works",
    type: "single",
    difficulty: "easy",
    tags: ["crypto", "broadcast"],
    prompt: "When you send crypto, what does it mean to **broadcast** a transaction?",
    choices: [
      { id: "a", text: "You email your private key to the recipient" },
      { id: "b", text: "You publicly post your recovery phrase so miners can verify it" },
      { id: "c", text: "Your wallet signs the transaction and sends it out to the network to be included in a block" },
      { id: "d", text: "The exchange mails a paper record to the receiving bank" },
    ],
    correctId: "c",
    explanation:
      "Your wallet **signs** the transaction with your private key, then **broadcasts** it to the network, where it waits (in the mempool) until it's included in a block. The key itself is never sent.",
  },
  {
    id: "how-a-crypto-transaction-works.q3",
    lessonSlug: "how-a-crypto-transaction-works",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "confirmations"],
    prompt: "What is a block **confirmation**?",
    choices: [
      { id: "a", text: "A text message the exchange sends to approve your withdrawal" },
      { id: "b", text: "Each new block added after the one containing your transaction" },
      { id: "c", text: "A fee paid to reverse a transaction" },
      { id: "d", text: "The moment your wallet first broadcasts the transaction" },
    ],
    correctId: "b",
    explanation:
      "Each new block added *after* the block containing your transaction is one **confirmation**. More confirmations means the transaction is buried deeper and harder to undo.",
  },
  {
    id: "how-a-crypto-transaction-works.q4",
    lessonSlug: "how-a-crypto-transaction-works",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "confirmations", "exchanges"],
    prompt: "Why do **exchanges wait for several confirmations** before crediting a crypto deposit?",
    choices: [
      { id: "a", text: "To collect extra fees while you wait" },
      { id: "b", text: "Because a freshly-broadcast transaction could still be dropped or reorganized out, so they wait until reversal is effectively impossible" },
      { id: "c", text: "Because the law requires a one-hour holding period on all crypto" },
      { id: "d", text: "Because your private key has to be re-verified by each block" },
    ],
    correctId: "b",
    explanation:
      "A brand-new transaction can still be dropped or reorganized out of the chain. Waiting for several **confirmations** lets the deposit settle until reversal is effectively impossible — it's the settlement finishing, not the exchange stalling.",
  },
  {
    id: "how-a-crypto-transaction-works.q5",
    lessonSlug: "how-a-crypto-transaction-works",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "irreversibility", "consumer-protection"],
    prompt: "How does a **confirmed** crypto transaction compare to a credit-card payment?",
    choices: [
      { id: "a", text: "Both can be disputed and charged back within 60 days" },
      { id: "b", text: "Crypto can be reversed instantly, unlike a card" },
      { id: "c", text: "A confirmed crypto transaction is final — no chargeback or dispute — whereas a card payment can be disputed" },
      { id: "d", text: "Neither one can ever be reversed under any circumstances" },
    ],
    correctId: "c",
    explanation:
      "The FTC notes crypto payments **lack the legal protections** cards have and **typically can't be reversed**. A confirmed crypto transaction is final; a card payment can be disputed and charged back.",
  },
  {
    id: "how-a-crypto-transaction-works.q6",
    lessonSlug: "how-a-crypto-transaction-works",
    type: "single",
    difficulty: "hard",
    tags: ["crypto", "wrong-address", "application"],
    prompt:
      "Riley pastes a receiving address, but clipboard malware quietly swapped in a different address, and the (confirmed) transaction lands there. What's the realistic outcome?",
    choices: [
      { id: "a", text: "The network auto-detects the malware and refunds Riley" },
      { id: "b", text: "Riley files a chargeback with the exchange and gets the funds back" },
      { id: "c", text: "If no one Riley can reach controls that address, the funds are effectively gone — there's no reversal" },
      { id: "d", text: "The funds bounce back automatically after 6 confirmations", feedback: "Confirmations make a transaction harder to undo, not easier — they don't bounce funds back." },
    ],
    correctId: "c",
    explanation:
      "Because confirmed transactions are **irreversible**, crypto sent to the wrong address is usually gone. Pasting addresses is a known malware target — which is why you verify the address before sending.",
  },
  {
    id: "how-a-crypto-transaction-works.q7",
    lessonSlug: "how-a-crypto-transaction-works",
    type: "single",
    difficulty: "hard",
    tags: ["crypto", "wrong-network", "safety", "application"],
    prompt:
      "Before sending a large amount to a new address, which habit best protects against the wrong-address and **wrong-network** traps?",
    choices: [
      { id: "a", text: "Send the full amount immediately so it confirms before any price move" },
      { id: "b", text: "Double-check the address and network, and send a small test amount first" },
      { id: "c", text: "Share your private key with the recipient so they can confirm receipt", feedback: "Never share a private key — anyone with it controls your funds. It also does nothing to verify the destination." },
      { id: "d", text: "Wait for zero confirmations, then cancel if it looks wrong" },
    ],
    correctId: "b",
    explanation:
      "Since there's no undo, the safety is in the checks *before* you send: verify the **address** and the **network** (the same address can exist on different chains), and send a **small test amount first** for large transfers.",
  },
];
