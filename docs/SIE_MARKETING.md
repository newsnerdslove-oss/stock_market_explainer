# SIE demand test — marketing playbook (step by step)

Goal of this exercise: **find out if anyone will pay**, cheaply, before investing in the full
SIE build. You are not launching a product — you are running a *fake-door / pre-sell smoke
test* (the validated method Buffer, Dropbox, and Zappos used). The app already serves the
funnel at **`/sie`**:

```
content (TikTok / Reddit / Google) → /sie landing → "Try 50 free questions" → pre-order $29
```

Every step logs an event (`sie_events` table) with its UTM source, so each channel is
measurable. **Refund every pre-order at the end** — this is a measurement, not a launch.

---

## 0. Before any traffic (1 hour)
1. Set the funnel live: deploy with `NEXT_PUBLIC_SUPABASE_URL/ANON_KEY` (capture), `STRIPE_SECRET_KEY` (test or live), and `NEXT_PUBLIC_SITE_URL` set. Apply the `sie_*` migration.
2. Confirm the funnel end-to-end once yourself (see `docs` / the PR's verification steps).
3. Decide your **kill/go threshold now, in writing** (see §4) — so you can't rationalize a bad result later.

## 1. Set up the channels (Day 0)
- **TikTok** account (e.g. `@passthesie`). Bio: one-line promise + "50 free SIE questions 👇" + link `https://<site>/sie?utm_source=tiktok`.
- **Instagram Reels + YouTube Shorts** — same vertical videos, reposted. Free reach multiplier. Use `utm_source=ig` / `utm_source=yt`.
- **Reddit** account with some real history (new accounts get auto-removed in many subs).
- Each channel gets its own UTM so you can compare conversion (the code reads `utm_source` into every event).

## 2. The videos — content pillars (15–30s, hook in the first 1s, captions, ONE idea each)
Film in batches. The product *is* the content — screen-record the real free quiz.
1. **"Could you pass the SIE?"** — one real question on screen, 3-2-1 countdown, reveal + the why.
2. **"SIE concept in 30 seconds"** — one testable fact: T+1 settlement, accredited investor, the cooling-off period, breakpoints, prohibited practices. Hook → explain → "test yourself, link in bio."
3. **"Most people get this wrong"** — a hard SIE question + the trap answer.
4. **"POV: studying for the SIE"** — relatable / funny, low production. The algorithm rewards these.
5. **"How I'd study for the SIE in 2 weeks"** — a plan; soft-sell the pack.

**Every video ends with the same CTA:** "50 free SIE questions — link in bio."

## 3. Cadence & distribution (Weeks 1–3)
- **TikTok/Shorts/Reels:** post **1–3×/day**. Volume matters most in a cold start. Hashtags: `#SIE #SIEexam #series7 #financecareer #seriesexam #wallstreet #studytok #finlife`.
- **Reddit (value-first):** in `r/Series7` and related securities-exam subs, post the free question set as a genuine resource ("I built 50 free SIE practice questions"). **Lead with value, follow each sub's self-promo rules** — a paywall-first post gets removed and can get you banned. Link `?utm_source=reddit`.
- **Google Search ads (~$150–300, optional but the truest signal):** exact-match high-intent keywords — `SIE practice questions`, `SIE practice test`, `SIE exam prep` → `/sie?utm_source=google`. Finance CPCs are high; cap daily spend. Search intent converts far better than social, so even a small spend triangulates whether a weak social number is the product or the channel.

## 4. Measure & decide (end of Weeks 2–3)
Query the capture tables per `utm_source`:
- `sie_events`: funnel counts — `landing_view → quiz_start → quiz_complete → preorder_click → purchase`.
- `sie_preorders`: actual paid pre-orders. `sie_leads`: email captures.

**Read it as a funnel, not one number.** TikTok = high views / low purchase; Google = low volume / high intent. The combination is the signal.

**Decision gate** (after ~500–1,000 engaged `/sie` visitors):
- ✅ **Go → build the paid SIE product (Plan Part C):** you get *real* $29 pre-orders **and** meaningful email capture (>~10–15% of quiz-completers). Demand exists.
- 🛑 **Stop → don't author more content:** ~0 pre-orders and low capture. Either re-test *once* with a different price/positioning, or pivot to the B2B2C model (sell the engine to schools/employers). The content depth is not the bottleneck — demand is.

**Then refund every pre-order from the Stripe dashboard, regardless of outcome.** It was a test, and refunding is what keeps the pre-sell honest.

## 5. Honesty guardrails (non-negotiable)
- The landing already states the card is charged today and is **fully refundable before launch** — keep that copy. A pre-sell is honest; charging for a thing that will never ship is not.
- Don't claim a pass rate or "FINRA-approved" — you have neither yet. The footer's "independent study aid, not affiliated with FINRA" must stay.
- If demand validates, the paid product still needs the **citations + validated answer keys** (Plan Part C3) before you can honestly sell exam prep or honor a pass guarantee.
