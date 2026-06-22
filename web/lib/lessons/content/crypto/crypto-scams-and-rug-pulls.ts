import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "crypto-scams-and-rug-pulls",
  title: "Crypto scams & rug pulls",
  level: 1,
  moduleId: "crypto-100",
  moduleOrder: 9,
  summary:
    "The common crypto scams — rug pulls, pump-and-dumps, fake giveaways, phishing, romance scams, and Ponzi 'yield' — and the red flags that give them away.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Crypto's openness is a feature: anyone can launch a token, build an app, or send you a message. That same openness means **scams travel fast and reversals don't exist** — a confirmed transaction can't be undone, and there's no fraud department to call. The good news: most scams reuse the **same handful of patterns**, and once you can name them, the **red flags** jump out.",
    },
    {
      type: "heading",
      text: "Rug pulls",
    },
    {
      type: "text",
      body:
        "A **rug pull** is when the people behind a token take the money and disappear. Often the developers control most of the supply or the **liquidity pool** (the funds that let people trade the token). They hype the price, wait for buyers to pile in, then **drain the liquidity** or dump their holdings — leaving everyone else holding a token they can no longer sell. Some are even coded so that *only* the creators can sell.",
    },
    {
      type: "heading",
      text: "Pump-and-dumps",
    },
    {
      type: "text",
      body:
        "In a **pump-and-dump**, a group quietly buys a thin, low-value coin, then **coordinates hype** — group chats, influencers, *\"this is going to 100x\"* posts — to drive the price up fast. Once outsiders rush in, the organizers **sell into that demand**, the price collapses, and the latecomers take the loss. This is an old stock-market fraud that simply moved on-chain.",
    },
    {
      type: "heading",
      text: "Fake giveaways & impersonation",
    },
    {
      type: "text",
      body:
        "A classic: *\"Send 1 ETH to this address and we'll send 2 ETH back.\"* **No legitimate giveaway ever asks you to send crypto first.** Scammers impersonate celebrities, founders, and real companies — cloned social accounts, hacked livestreams, look-alike support handles. The rule is simple: **money only flows out, never back.**",
    },
    {
      type: "heading",
      text: "Phishing sites & fake wallet apps",
    },
    {
      type: "text",
      body:
        "**Phishing** tricks you into handing over your keys yourself. A fake site mimics a real exchange or wallet and asks for your **recovery phrase**, or a fake app in an app store looks just like the real wallet. A malicious link may ask you to *\"connect\"* and approve a transaction that drains your funds. Remember: **no legitimate service ever asks for your seed phrase** — typing it into any website or app hands over everything.",
    },
    {
      type: "heading",
      text: "Romance & \"pig-butchering\" scams",
    },
    {
      type: "text",
      body:
        "The FBI describes **\"pig butchering\"** as a confidence scam: someone builds a friendship or romance over weeks — through dating apps, social media, or even a *\"wrong number\"* text — then introduces a *can't-lose* crypto investment on a slick-looking platform. Early *\"profits\"* look real, so the victim invests more. When they try to **withdraw**, they can't — the platform was fake the whole time, and the money is gone.",
    },
    {
      type: "heading",
      text: "\"Guaranteed yield\" Ponzi schemes",
    },
    {
      type: "text",
      body:
        "A **Ponzi scheme** pays old investors with new investors' money while pretending to earn returns. The SEC calls **guaranteed high returns with little or no risk** the hallmark warning sign — because **every real investment carries risk**, and higher returns normally mean *more* risk, not less. In crypto these dress up as *\"guaranteed daily yield\"* or *\"risk-free staking,\"* often paired with referral bonuses for recruiting friends. They run until new money slows, then collapse.",
    },
    {
      type: "heading",
      text: "The red flags",
    },
    {
      type: "list",
      items: [
        "**Anonymous or unverifiable team** — no real names, no track record, no way to hold anyone accountable.",
        "**Unaudited contract** or no public code — you can't see what the token actually does, including whether you'll be able to sell it.",
        "**Promises of guaranteed returns** — *\"guaranteed,\"* *\"risk-free,\"* or *\"can't lose\"* is the single biggest tell of fraud.",
        "**Urgency and pressure** — *\"act now,\"* *\"only a few spots,\"* countdown timers; rushing you is the point.",
        "**Asked to send crypto first** or to share your **recovery phrase** — both mean you lose, every time.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Rug pull", def: "When developers drain a token's liquidity or abandon the project, leaving holders with something they can't sell." },
        { term: "Liquidity pool", def: "The pooled funds that let a token be traded; draining it can make a token effectively unsellable." },
        { term: "Pump-and-dump", def: "Coordinated hype inflates a coin's price so organizers can sell into the demand before it collapses." },
        { term: "Phishing", def: "Tricking you into revealing keys or your seed phrase, often via fake sites, apps, or 'support' messages." },
        { term: "Pig butchering", def: "A confidence/romance scam that builds trust, then steers the victim into a fake crypto investment they can't withdraw from." },
        { term: "Ponzi scheme", def: "A fraud that pays earlier investors with later investors' money while promising returns that don't exist." },
        { term: "Red flag", def: "A warning sign of fraud — e.g. anonymous team, unaudited contract, guaranteed returns, or pressure to act fast." },
      ],
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "text",
      body:
        "**Theo** sees a brand-new token: anonymous team, no audited code, a Telegram chat promising **\"guaranteed 10% daily\"** and a countdown timer pushing him to buy *\"before it's too late.\"* That's at least four red flags stacked together — anonymous team, unaudited contract, guaranteed returns, and urgency. He passes. A week later the developers **drain the liquidity** and the token goes to zero. Recognizing the pattern, not predicting the price, is what protected him.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common myth: *\"if a coin is going up, the project must be legit.\"* Price says nothing about honesty — pump-and-dumps and rug pulls **look great right up until the exit.** When in doubt, slow down: real opportunities survive a few questions; scams depend on you not asking them.",
    },
  ],
};
