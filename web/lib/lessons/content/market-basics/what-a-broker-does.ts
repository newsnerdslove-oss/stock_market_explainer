import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "what-a-broker-does",
  title: "What a Broker Does",
  level: 1,
  moduleId: "markets-basics",
  moduleOrder: 5,
  summary: "Your broker is the bridge to the exchange — here's what it actually does with your order.",
  estMinutes: 4,
  sections: [
    {
      type: "text",
      body:
        "You can't walk onto an exchange and trade. Individuals reach the market through a **broker** — the firm that holds your account and carries your orders to where trades actually happen.",
    },
    { type: "heading", text: "Why you need one" },
    {
      type: "text",
      body:
        "Access to an exchange is restricted to its members. A broker is a member (or works with one), so it acts as your authorized middleman. Without a broker, an individual simply has no way to place a trade.",
    },
    { type: "heading", text: "What the broker actually does" },
    {
      type: "list",
      items: [
        "Holds your **cash and securities** in a **brokerage account**.",
        "**Routes** your order to a venue — an exchange or a market maker — to be filled.",
        "Reports the **execution** back to you once the trade is matched at a price.",
      ],
    },
    { type: "heading", text: "Execution vs. settlement" },
    {
      type: "text",
      body:
        "**Execution** is the moment your order is matched and the price is locked in. But the official transfer of shares and cash — **settlement** — happens later. Since **May 28, 2024**, U.S. stock trades settle on **T+1**: one business day after the trade.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "How brokers make money: commissions and fees, interest on cash, and **payment for order flow** (getting paid to route orders to certain market makers). An execution-only broker is **not** a financial advisor.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Broker / brokerage", def: "The firm that gives you access to the market and executes your trades." },
        { term: "Brokerage account", def: "The account that holds your cash and securities." },
        { term: "Order routing", def: "Sending your order to an exchange or market maker to be filled." },
        { term: "Execution", def: "The moment your order is matched and the price is locked in." },
        { term: "Settlement (T+1)", def: "Official transfer of shares and cash, one business day after the trade." },
        { term: "Payment for order flow", def: "Compensation a broker receives for routing orders to a particular venue." },
      ],
    },
    { type: "heading", text: "A worked example" },
    {
      type: "text",
      body:
        "On **Monday** you buy `5` shares at `$50` — a `$250` order. It **executes** Monday, so the price is set immediately. But it **settles** on **Tuesday** (T+1), when the shares and cash officially change hands.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common misconception: 'executed' does **not** mean shares and cash instantly transferred. Execution only locks the price. The official transfer is **settlement**, which is T+1 — one business day later.",
    },
  ],
};
