# Tech gaps & setup checklist

What you need to learn, install, or sign up for — and where the real gaps are between "some coding experience" and shipping this.

## Accounts & API keys to create (all free)
- [ ] **GitHub** — you have the repo: `newsnerdslove-oss/stock_market_explainer`. Set up an SSH key or use the GitHub CLI (`gh`) so pushing is painless.
- [ ] **Alpaca** (alpaca.markets) — sign up, create a **Paper** account, generate API key + secret. This is your simulation engine and free stock/crypto data.
- [ ] **Supabase** (supabase.com) — free project; gives you Postgres + Auth. Save the project URL and anon/service keys.
- [ ] **Vercel** (vercel.com) — connect the GitHub repo for free web hosting.
- [ ] **Render** or **Railway** or **Fly.io** — free-ish hosting for the Python service.
- [ ] (Optional) **Finnhub** free key as a data fallback.
- Coinbase/Binance public market WebSockets need **no key**.

## Tools to install on your Mac
- [ ] **Homebrew** (you're using it ✅)
- [ ] **VS Code** (installing ✅) — add extensions: ESLint, Prettier, Python, Tailwind CSS IntelliSense.
- [ ] **Node.js** (LTS) — `brew install node`. Powers the Next.js app.
- [ ] **Python 3.11+** — `brew install python` (Macs ship one, but a brew version is cleaner).
- [ ] **Git** — `brew install git`; optionally `brew install gh` (GitHub CLI).
- [ ] (Optional) **Docker Desktop** — only if you want to run the Python service + Redis in containers later.

## Skill gaps to expect (and how to close them)
Ordered by how likely they are to slow you down.

1. **React / Next.js (App Router).** The biggest learning surface. If you know some JS, budget a few days on the Next.js "Learn" course. Components, hooks (`useState`/`useEffect`), and data fetching are the core.
2. **TypeScript.** You can start loose and tighten types over time. Don't let types block you early.
3. **Async + WebSockets.** Live quotes mean handling streams, not just request/response. You'll learn this in the simulator phase — start with polling, upgrade to WebSocket.
4. **Postgres / SQL + Supabase.** Basic table design and queries. Supabase's dashboard and auto-generated client soften this a lot.
5. **Python FastAPI.** Small surface; if you can write a function and return JSON, you can write a FastAPI endpoint. The market SDKs (alpaca-py) do the heavy lifting.
6. **Deployment / env management.** Getting two services talking in production (CORS, env vars, secrets) is fiddly. Phase 0–3 can run entirely on your laptop first.
7. **Financial domain knowledge.** Ironically the *content* (options, margin, Series 7 rules) is its own research effort — you're both the student and the author. Plan time to source/verify accurate material; consider a licensed Series 7 question bank rather than writing 1,000 questions yourself.

## Honest risk list
- **Free equity data is IEX-only** and thinner than full-market feeds. Fine for education; label it clearly.
- **Rate limits** on free tiers will bite if you poll aggressively — cache quotes, and prefer WebSocket streams over hammering REST.
- **Content accuracy** is a liability if you teach trading wrong. Cite sources; add disclaimers; have a knowledgeable person review Series 7 material.
- **Scope.** This is genuinely three products (Learn, Test, Simulate). The phased roadmap exists so you ship something usable at each step instead of stalling on the whole thing.

## What you do NOT need to build (good news)
- A matching engine / exchange — Alpaca paper handles fills.
- Your own auth system — Supabase Auth handles it.
- Real-money handling, KYC, brokerage licensing — paper trading only, by design.
