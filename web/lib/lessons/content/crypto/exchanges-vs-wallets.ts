import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "exchanges-vs-wallets",
  title: "Exchanges vs. wallets",
  level: 1,
  moduleId: "crypto-100",
  moduleOrder: 2,
  summary: "Where you buy crypto and where it's held aren't the same place — and who holds the keys matters.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "Two words get mixed up constantly: **exchange** and **wallet**. One is the *marketplace* where you buy and sell; the other is what controls the crypto afterward. Getting the difference straight is the foundation for understanding **custody** — who actually controls your coins.",
    },
    {
      type: "heading",
      text: "The exchange",
    },
    {
      type: "text",
      body:
        "An **exchange** (such as Coinbase or Kraken) is a marketplace to **buy, sell, and trade** crypto — usually swapping government currency for coins and back. It's the on-ramp. But buying on an exchange and *leaving it there* is not the same as controlling it yourself.",
    },
    {
      type: "heading",
      text: "The wallet",
    },
    {
      type: "text",
      body:
        "A **wallet** doesn't really *store coins* like a purse holds cash. Coins live on the blockchain. A wallet holds the **keys** that control those coins — the secret codes that authorize spending. *\"Holding crypto\"* really means *holding the keys.*",
    },
    {
      type: "heading",
      text: "Custodial vs. non-custodial",
    },
    {
      type: "list",
      items: [
        "**Custodial** — a third party (usually an exchange) holds your keys for you. It's convenient, but you're trusting that company, and withdrawals can be frozen or limited.",
        "**Non-custodial (self-custody)** — *you* hold your keys. Full control, but full responsibility: there's no password reset, and losing your keys means losing access for good.",
      ],
    },
    {
      type: "text",
      body:
        "Buying crypto and leaving it on the exchange is typically **custodial**. Many people start that way, then move larger holdings into self-custody. That's a **trade-off** between convenience and control — not a recommendation to do either.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Exchange", def: "A marketplace to buy, sell, and trade crypto (e.g. Coinbase, Kraken)." },
        { term: "Wallet", def: "Software or hardware that holds the keys controlling your coins — it doesn't 'store' the coins themselves." },
        { term: "Custodial", def: "A third party (an exchange) holds your keys — convenient, but you trust them." },
        { term: "Non-custodial (self-custody)", def: "You hold your own keys — full control and full responsibility." },
        { term: "Recovery phrase (seed phrase)", def: "A list of words that can restore a self-custody wallet — whoever has it controls the funds." },
      ],
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "text",
      body:
        "Maria buys **`$200`** of BTC on an exchange and leaves it there — that's **custodial**: the exchange holds the keys. Later she withdraws it to a **non-custodial** wallet that hands her a **recovery phrase**. Now she has full control of the coins — but if she loses that phrase, the funds are gone, with no support line to restore them.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common myth: *\"my crypto is in my account on the exchange, just like cash in a bank.\"* With custodial holdings the company holds the keys — you hold a *claim* against them. And crypto on exchanges generally is **not** government-insured the way bank deposits are.",
    },
  ],
};
