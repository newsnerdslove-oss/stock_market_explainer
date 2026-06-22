import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "how-a-crypto-transaction-works",
  title: "How a crypto transaction works",
  level: 1,
  moduleId: "crypto-100",
  moduleOrder: 7,
  summary: "From a public address to a confirmed, irreversible payment — what actually happens when you send crypto.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Sending crypto looks as simple as paste-and-tap, but a lot happens underneath — and a few of those steps are **permanent** in a way that card and bank payments are not. Walking through one transaction, start to finish, is the fastest way to understand both how it works and where beginners lose money.",
    },
    {
      type: "heading",
      text: "Address vs. private key",
    },
    {
      type: "text",
      body:
        "A **public address** is where funds are sent — a long string you can share freely, like an account number or an email address for money. The **private key** is the secret that *controls* whatever sits at that address. They're a pair: share the address all day, but the key authorizes spending. **Whoever holds the private key controls the funds** — so the address is public, the key never is.",
    },
    {
      type: "heading",
      text: "Broadcasting the transaction",
    },
    {
      type: "text",
      body:
        "To send crypto, your wallet builds a transaction — *\"move this amount to this address\"* — and **signs** it with your private key to prove you're authorized. It then **broadcasts** that signed transaction to the network, where it sits in a waiting area (often called the **mempool**) until the network picks it up. Signing happens inside your wallet; the key itself is never sent.",
    },
    {
      type: "heading",
      text: "Block confirmations",
    },
    {
      type: "text",
      body:
        "The network bundles transactions into a **block** and adds it to the chain. Each new block added *after* yours is one **confirmation**. More confirmations means the transaction is buried deeper and harder to undo. On Bitcoin, new blocks arrive about every **10 minutes** on average, and **6 confirmations** — roughly an hour — is a long-standing benchmark for treating a payment as final.",
    },
    {
      type: "text",
      body:
        "This is why **exchanges wait** before crediting a deposit: a freshly-broadcast transaction could still be dropped or reorganized out, so they hold it for several confirmations until reversal is effectively impossible. Waiting isn't the exchange being slow — it's the settlement actually finishing.",
    },
    {
      type: "heading",
      text: "Irreversible — no chargebacks",
    },
    {
      type: "text",
      body:
        "Here's the part that trips people up: once a crypto transaction is confirmed, it is **final**. There's no chargeback, no dispute button, no bank to reverse it. The FTC puts it plainly — cryptocurrency payments **don't come with legal protections** the way credit and debit cards do, and a crypto payment **typically can't be reversed**: you usually only get your money back if the recipient chooses to send it back.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "A card payment can be disputed; a bank transfer can sometimes be recalled. A **confirmed crypto transaction cannot.** That finality is a core design feature — and exactly why scammers prefer to be paid in crypto.",
    },
    {
      type: "heading",
      text: "The wrong-address & wrong-network trap",
    },
    {
      type: "text",
      body:
        "Because there's no reversal, **a mistake in the destination is usually permanent.** Two ways beginners lose funds for good:",
    },
    {
      type: "list",
      items: [
        "**Wrong address** — paste an address with a typo (or one a clipboard-hijacking malware swapped in) and the crypto goes there. If no one controls that address, it's simply gone.",
        "**Wrong network** — the *same* address can exist on different chains. Send a coin over a network the receiving wallet doesn't watch, and it may be **unrecoverable** even though the address \"looked right.\"",
      ],
    },
    {
      type: "text",
      body:
        "The habit that protects you: **double-check the address and the network**, and send a **small test amount first** for anything large. There's no undo, so the check has to happen *before* you hit send.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Public address", def: "The shareable destination for funds — like an account number you can hand out freely." },
        { term: "Private key", def: "The secret that controls funds at an address and authorizes spending; whoever holds it controls the funds." },
        { term: "Broadcast", def: "Sending your signed transaction out to the network so it can be picked up and included in a block." },
        { term: "Mempool", def: "The waiting area where broadcast transactions sit before they're added to a block." },
        { term: "Confirmation", def: "Each new block added after the one containing your transaction; more confirmations means harder to reverse." },
        { term: "Irreversible", def: "Once confirmed, a crypto transaction is final — no chargeback, dispute, or reversal." },
        { term: "Wrong-network error", def: "Sending crypto over a chain the receiving wallet doesn't support, often resulting in permanent loss." },
      ],
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "text",
      body:
        "**Jordan** sends crypto to a friend. The wallet signs the transaction with Jordan's private key and **broadcasts** it; it lands in the mempool, then gets included in a block. The friend's exchange waits a few **confirmations** before crediting the deposit. Days later Jordan realizes he fat-fingered the address — but it's **confirmed and irreversible**, so there's no chargeback and no support line to undo it. Had he sent a **small test amount first** and checked the **network**, he'd have caught it.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Mental model: a crypto send is more like **handing over cash** than swiping a card. Once it's confirmed it's done — so the safety lives in the *checks you do beforehand*, not in a refund afterward.",
    },
  ],
};
