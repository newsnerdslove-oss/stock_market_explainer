"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { A } from "@/components/kit/theme";
import { Btn } from "@/components/kit/Btn";
import { Pill } from "@/components/kit/Pill";
import { Icon } from "@/components/kit/Icon";
import { useIsMobile } from "@/lib/useIsMobile";
import { track } from "@/lib/sie/track";

const PERKS: [string, string, string][] = [
  ["library", "1,800+ practice questions", "Every SIE content area, with a written explanation on every single answer."],
  ["file-check", "Real-format mock exams", "75 questions, 70% to pass, weighted exactly like the real SIE. Know your number before test day."],
  ["sparkles", "Learn it without the textbook", "Bite-size lessons + streaks that make studying feel like a game, not a chore."],
];

export default function SieLanding() {
  const router = useRouter();
  const mobile = useIsMobile();
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState<"" | "buy" | "save">("");
  const [saved, setSaved] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    track("landing_view");
  }, []);

  const preorder = async () => {
    setErr("");
    setBusy("buy");
    track("preorder_click");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email || undefined }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      setErr(data.error ?? "Could not start checkout.");
    } catch {
      setErr("Could not start checkout.");
    }
    setBusy("");
  };

  const save = async () => {
    setErr("");
    if (!email) {
      setErr("Enter your email first.");
      return;
    }
    setBusy("save");
    track("lead_capture");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "landing" }),
      });
      if (res.ok) setSaved(true);
      else setErr((await res.json()).error ?? "Could not save.");
    } catch {
      setErr("Could not save.");
    }
    setBusy("");
  };

  return (
    <div style={{ minHeight: "100vh", background: A.page, color: A.ink, fontFamily: A.font }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: mobile ? "24px 18px 64px" : "40px 24px 80px" }}>
        {/* brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: mobile ? 32 : 48 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: A.primary, color: "#fff", display: "grid", placeItems: "center", fontWeight: 800 }}>S</div>
          <span style={{ fontWeight: 800, fontSize: 18 }}>Stax</span>
          <Pill bg={A.primarySoft} fg={A.primaryDeep}>for the SIE</Pill>
        </div>

        {/* hero */}
        <h1 style={{ fontSize: mobile ? 34 : 46, fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1.08, margin: "0 0 16px" }}>
          Pass the SIE without the boring textbook.
        </h1>
        <p style={{ fontSize: mobile ? 16 : 18, lineHeight: 1.55, color: A.muted, fontWeight: 500, margin: "0 0 28px", maxWidth: 560 }}>
          The Securities Industry Essentials exam, turned into a game. Real practice questions, real-format mock exams, and lessons
          that actually stick. <b style={{ color: A.ink }}>No employer sponsorship required</b> — anyone can take the SIE.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 14 }}>
          <Btn kind="primary" size="lg" iconRight="arrow-right" onClick={() => { track("quiz_cta"); router.push("/sie/quiz"); }}>
            Try 50 questions free
          </Btn>
          <Btn kind="success" size="lg" icon="zap" onClick={preorder}>
            {busy === "buy" ? "Starting…" : "Pre-order the Pass Pack · $29"}
          </Btn>
        </div>
        <p style={{ fontSize: 13, color: A.faint, fontWeight: 600, margin: "0 0 40px" }}>
          Founding price (50% off the $59 launch price). Your card is charged today and is <b>fully refundable anytime before
          launch</b> — and a money-back guarantee if you don&apos;t pass. No risk.
        </p>

        {/* what you get */}
        <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr 1fr", gap: 14, marginBottom: 40 }}>
          {PERKS.map(([icon, title, body]) => (
            <div key={title} style={{ background: A.card, border: `1px solid ${A.border}`, borderRadius: 18, padding: 18, boxShadow: A.shadow }}>
              <div style={{ width: 38, height: 38, borderRadius: 11, background: A.primarySoft, color: A.primaryDeep, display: "grid", placeItems: "center", marginBottom: 12 }}>
                <Icon name={icon} size={20} />
              </div>
              <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>{title}</div>
              <div style={{ fontSize: 13.5, color: A.muted, fontWeight: 500, lineHeight: 1.5 }}>{body}</div>
            </div>
          ))}
        </div>

        {/* email capture */}
        <div style={{ background: A.card, border: `1px solid ${A.border}`, borderRadius: 22, padding: mobile ? 20 : 26, boxShadow: A.shadow }}>
          {saved ? (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Icon name="check-circle-2" size={22} color={A.green} />
              <div style={{ fontWeight: 700 }}>You&apos;re on the list — we&apos;ll email you the moment it launches.</div>
            </div>
          ) : (
            <>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Not ready? Get notified at launch.</div>
              <div style={{ fontSize: 13.5, color: A.muted, fontWeight: 500, marginBottom: 14 }}>Drop your email — we&apos;ll send the free questions and tell you when the full pack is live.</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  style={{ flex: 1, minWidth: 200, border: `1.5px solid ${A.border}`, borderRadius: 12, padding: "12px 14px", fontFamily: A.font, fontSize: 15, fontWeight: 600, color: A.ink, background: A.page, outline: "none" }}
                />
                <Btn kind="soft" size="lg" onClick={save}>
                  {busy === "save" ? "Saving…" : "Notify me"}
                </Btn>
              </div>
            </>
          )}
          {err && <div style={{ color: A.red, fontSize: 13, fontWeight: 700, marginTop: 10 }}>{err}</div>}
        </div>

        <footer style={{ marginTop: 40, fontSize: 12, color: A.faint, fontWeight: 600, lineHeight: 1.6 }}>
          Independent study aid — not affiliated with FINRA or any exam provider. The SIE is administered by FINRA (~$80 fee).
          Paper trading and lessons are educational only · not financial advice.
        </footer>
      </div>
    </div>
  );
}
