"use client";

import { useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import type { Provider } from "@supabase/supabase-js";
import { createClient, supabaseConfigured } from "@/lib/supabase/client";
import { useThemeState } from "@/lib/theme";
import { useIsMobile } from "@/lib/useIsMobile";
import { A } from "@/components/kit/theme";
import { Icon } from "@/components/kit/Icon";
import { Field } from "@/components/kit/Field";
import { Btn } from "@/components/kit/Btn";
import { Avatar } from "@/components/kit/Avatar";

// Recognizable, non-trademark provider marks (ported from the prototype).
function GoogleMark() {
  return (
    <span style={{ width: 20, height: 20, borderRadius: "50%", display: "grid", placeItems: "center", background: "conic-gradient(#EA4335 0 25%, #FBBC05 0 50%, #34A853 0 75%, #4285F4 0 100%)", flex: "0 0 auto" }}>
      <span style={{ width: 11, height: 11, borderRadius: "50%", background: A.card, display: "grid", placeItems: "center", fontWeight: 800, fontSize: 10, color: "#4285F4", fontFamily: "arial, sans-serif" }}>G</span>
    </span>
  );
}
function MicrosoftMark() {
  const sq = (c: string) => ({ width: 8.5, height: 8.5, background: c });
  return (
    <span style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5, flex: "0 0 auto" }}>
      <span style={sq("#F25022")} />
      <span style={sq("#7FBA00")} />
      <span style={sq("#00A4EF")} />
      <span style={sq("#FFB900")} />
    </span>
  );
}

// Supabase provider id ← brand. Microsoft is "azure" in Supabase.
const PROVIDERS: { id: Provider; label: string; mark: ReactNode }[] = [
  { id: "google", label: "Google", mark: <GoogleMark /> },
  { id: "apple", label: "Apple", mark: <Icon name="apple" size={20} color={A.ink} /> },
  { id: "azure", label: "Microsoft", mark: <MicrosoftMark /> },
  { id: "github", label: "GitHub", mark: <Icon name="github" size={20} color={A.ink} /> },
];

export default function LoginPage() {
  const router = useRouter();
  const [theme, setTheme] = useThemeState();
  const mobile = useIsMobile();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);
  const isSignup = mode === "signup";
  const configured = supabaseConfigured();

  async function emailSubmit() {
    if (!email.trim() || !pw) return;
    if (!configured) {
      setMsg({ kind: "err", text: "Auth isn't configured in this environment." });
      return;
    }
    setBusy(true);
    setMsg(null);
    const sb = createClient();
    const { error } = isSignup
      ? await sb.auth.signUp({ email: email.trim(), password: pw, options: { data: { name } } })
      : await sb.auth.signInWithPassword({ email: email.trim(), password: pw });
    setBusy(false);
    setPw("");
    if (error) {
      setMsg({ kind: "err", text: error.message });
    } else if (isSignup) {
      setMsg({ kind: "ok", text: "Account created — check your email if confirmation is required." });
    } else {
      router.push("/today");
    }
  }

  async function oauth(provider: Provider) {
    if (!configured) {
      setMsg({ kind: "err", text: "Connect this provider in your Supabase dashboard to enable it." });
      return;
    }
    const sb = createClient();
    const { error } = await sb.auth.signInWithOAuth({ provider, options: { redirectTo: `${location.origin}/today` } });
    if (error) setMsg({ kind: "err", text: error.message });
  }

  return (
    <div style={{ minHeight: "100vh", background: A.page, color: A.ink, fontFamily: A.font, display: "grid", gridTemplateColumns: mobile ? "1fr" : "1.05fr 1fr" }}>
      {/* left — brand panel (hidden on phones) */}
      <div style={{ background: `linear-gradient(150deg, ${A.primaryDeep}, ${A.primary})`, color: "#fff", padding: "46px 52px", display: mobile ? "none" : "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
        <div onClick={() => router.push("/")} style={{ display: "flex", alignItems: "center", gap: 11, cursor: "pointer", position: "relative", zIndex: 1 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(255,255,255,.18)", display: "grid", placeItems: "center", fontWeight: 800, fontSize: 21 }}>S</div>
          <span style={{ fontWeight: 800, fontSize: 21, letterSpacing: "-.02em" }}>Stax</span>
        </div>
        <div style={{ marginTop: "auto", marginBottom: "auto", position: "relative", zIndex: 1, maxWidth: 420 }}>
          <h1 style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-.025em", lineHeight: 1.12, margin: "0 0 16px" }}>The market, finally making sense.</h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, opacity: 0.92, fontWeight: 500, margin: "0 0 30px" }}>
            Five-minute lessons, real charts, and a daily streak that keeps it sticking. Pick up where you left off.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {(
              [
                ["candlestick-chart", "Read any chart with confidence"],
                ["flame", "Build a streak, learn a little daily"],
                ["trophy", "Climb the weekly leaderboard"],
              ] as [string, string][]
            ).map(([ic, t]) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15.5, fontWeight: 600 }}>
                <span style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(255,255,255,.16)", display: "grid", placeItems: "center", flex: "0 0 auto" }}>
                  <Icon name={ic} size={18} color="#fff" />
                </span>
                {t}
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 600, opacity: 0.9 }}>
          <div style={{ display: "flex" }}>
            {["Maya R", "Dev P", "Aisha K"].map((n, i) => (
              <div key={n} style={{ marginLeft: i ? -10 : 0 }}>
                <Avatar name={n} size={30} bg="rgba(255,255,255,.9)" color={A.primaryDeep} ring={A.primary} />
              </div>
            ))}
          </div>
          Joined by 40,000+ learners this year
        </div>
        <div style={{ position: "absolute", top: -80, right: -60, width: 260, height: 260, borderRadius: "50%", background: "rgba(255,255,255,.10)" }} />
        <div style={{ position: "absolute", bottom: -90, left: -50, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,.08)" }} />
      </div>

      {/* right — auth card */}
      <div style={{ display: "grid", placeItems: "center", padding: "40px 24px", position: "relative" }}>
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} title="Toggle theme" style={{ position: "absolute", top: 22, right: 24, width: 40, height: 40, borderRadius: 12, border: `1px solid ${A.border}`, cursor: "pointer", display: "grid", placeItems: "center", color: A.muted, background: A.card }}>
          <Icon name={theme === "dark" ? "sun" : "moon"} size={19} />
        </div>

        <div style={{ width: "min(400px, 100%)" }}>
          <h2 style={{ fontSize: 27, fontWeight: 800, letterSpacing: "-.02em", margin: "0 0 6px" }}>{isSignup ? "Create your account" : "Welcome back"}</h2>
          <p style={{ fontSize: 15, color: A.muted, fontWeight: 600, margin: "0 0 24px" }}>{isSignup ? "Start your first lesson in under a minute." : "Log in to keep your streak alive."}</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 18 }}>
            {PROVIDERS.map((p) => (
              <button key={p.id} onClick={() => oauth(p.id)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 9, padding: "12px", borderRadius: 13, border: `1.5px solid ${A.border}`, background: A.card, color: A.ink, fontFamily: A.font, fontWeight: 700, fontSize: 14.5, cursor: "pointer" }}>
                {p.mark}
                {p.label}
              </button>
            ))}
          </div>

          <button onClick={() => setMsg({ kind: "err", text: "Company SSO (SAML) is configured per-org in Supabase." })} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 9, padding: "12px", borderRadius: 13, border: `1.5px solid ${A.border}`, background: A.card, color: A.muted, fontFamily: A.font, fontWeight: 700, fontSize: 14, cursor: "pointer", marginBottom: 22 }}>
            <Icon name="building-2" size={18} /> Continue with company SSO (SAML)
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "0 0 22px", color: A.faint, fontSize: 13, fontWeight: 700 }}>
            <div style={{ flex: 1, height: 1, background: A.border }} />
            or with email
            <div style={{ flex: 1, height: 1, background: A.border }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {isSignup && <Field label="Name" placeholder="Maya Rivera" icon="user" value={name} onChange={(e) => setName(e.target.value)} />}
            <Field label="Email" placeholder="you@email.com" icon="mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 7 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: A.ink }}>Password</span>
                {!isSignup && <span style={{ fontSize: 13, fontWeight: 700, color: A.primary, cursor: "pointer" }}>Forgot?</span>}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, background: A.card, border: `1.5px solid ${A.border}`, borderRadius: 14, padding: "0 14px" }}>
                <Icon name="lock" size={18} color={A.faint} />
                <input
                  type={showPw ? "text" : "password"}
                  placeholder={isSignup ? "At least 8 characters" : "••••••••"}
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && emailSubmit()}
                  style={{ flex: 1, border: "none", outline: "none", background: "transparent", padding: "13px 0", fontFamily: A.font, fontSize: 15, fontWeight: 600, color: A.ink }}
                />
                <div onClick={() => setShowPw(!showPw)} style={{ cursor: "pointer", color: A.faint, display: "grid", placeItems: "center" }}>
                  <Icon name={showPw ? "eye-off" : "eye"} size={18} />
                </div>
              </div>
            </div>
            <Btn kind="primary" size="lg" full iconRight="arrow-right" onClick={emailSubmit}>
              {busy ? "…" : isSignup ? "Create account" : "Log in"}
            </Btn>
            {msg && (
              <p role="alert" style={{ margin: 0, fontSize: 13.5, fontWeight: 700, color: msg.kind === "ok" ? A.green : A.red }}>
                {msg.text}
              </p>
            )}
          </div>

          <div style={{ textAlign: "center", marginTop: 22, fontSize: 14.5, color: A.muted, fontWeight: 600 }}>
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <span onClick={() => { setMode(isSignup ? "login" : "signup"); setMsg(null); }} style={{ color: A.primary, fontWeight: 800, cursor: "pointer" }}>
              {isSignup ? "Log in" : "Sign up free"}
            </span>
          </div>

          <p style={{ textAlign: "center", marginTop: 24, fontSize: 12.5, color: A.faint, fontWeight: 600, lineHeight: 1.6 }}>
            By continuing you agree to our{" "}
            <a href="/terms" style={{ color: A.muted, textDecoration: "underline" }}>Terms</a> and{" "}
            <a href="/privacy" style={{ color: A.muted, textDecoration: "underline" }}>Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
