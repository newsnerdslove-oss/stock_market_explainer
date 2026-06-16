"use client";

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { createClient, supabaseConfigured } from "@/lib/supabase/client";

// Account widget. A guest (anonymous user) can "Save account" — updateUser keeps
// the SAME user_id, so all their progress carries over and they can log in
// elsewhere. Returning users log in; the progress store re-syncs via its
// onAuthStateChange listener.
export function AuthControls() {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const [mode, setMode] = useState<"save" | "login">("save");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);

  useEffect(() => {
    if (!supabaseConfigured()) {
      setReady(true);
      return;
    }
    const sb = createClient();
    sb.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setReady(true);
    });
    const { data: sub } = sb.auth.onAuthStateChange((_e, session) => setUser(session?.user ?? null));
    return () => sub.subscription.unsubscribe();
  }, []);

  // Gate on `ready` so SSR and first client render match (both render nothing).
  if (!ready || !supabaseConfigured()) return null;

  const isGuest = !user || user.is_anonymous;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !password) return;
    setBusy(true);
    setMsg(null);
    const sb = createClient();
    if (mode === "save") {
      // Claim the anonymous account: attach email + password, same user_id.
      const { error } = await sb.auth.updateUser({ email: email.trim(), password });
      setMsg(error ? { kind: "err", text: error.message } : { kind: "ok", text: "Account saved — you can now log in on any device." });
    } else {
      const { error } = await sb.auth.signInWithPassword({ email: email.trim(), password });
      setMsg(error ? { kind: "err", text: error.message } : null);
    }
    setBusy(false);
    setPassword("");
  }

  async function logout() {
    await createClient().auth.signOut(); // useProgress re-anons + resyncs to a fresh guest
    setMsg(null);
  }

  if (!isGuest) {
    return (
      <section className="mt-8 flex items-center justify-between rounded-lg border border-strong bg-surface p-4">
        <p className="text-sm text-muted">
          Signed in as <span className="font-medium text-ink">{user?.email}</span> — progress syncs across devices.
        </p>
        <button
          type="button"
          onClick={logout}
          className="rounded-md border border-strong px-3 py-1.5 text-sm text-ink transition hover:bg-surface-2"
        >
          Log out
        </button>
      </section>
    );
  }

  return (
    <section className="mt-8 rounded-lg border border-strong bg-surface p-5">
      <h2 className="text-sm font-medium text-ink">
        {mode === "save" ? "Save your progress" : "Log in"}
      </h2>
      <p className="mt-1 text-sm text-muted">
        {mode === "save"
          ? "You're a guest — your progress lives on this device. Add an email + password to keep it and pick up on any device."
          : "Welcome back — log in to load your progress here."}
      </p>

      <form onSubmit={submit} className="mt-4 flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          className="flex-1 rounded-md border border-strong bg-canvas px-3 py-2 text-sm text-ink placeholder:text-faint focus:border-learn focus:outline-none"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          autoComplete={mode === "save" ? "new-password" : "current-password"}
          className="flex-1 rounded-md border border-strong bg-canvas px-3 py-2 text-sm text-ink placeholder:text-faint focus:border-learn focus:outline-none"
        />
        <button
          type="submit"
          disabled={busy || !email.trim() || !password}
          className="rounded-md bg-learn px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90 disabled:opacity-40"
        >
          {busy ? "…" : mode === "save" ? "Save account" : "Log in"}
        </button>
      </form>

      {msg && (
        <p className={`mt-3 text-sm ${msg.kind === "ok" ? "text-up" : "text-down"}`} role="alert">
          {msg.text}
        </p>
      )}

      <button
        type="button"
        onClick={() => {
          setMode(mode === "save" ? "login" : "save");
          setMsg(null);
        }}
        className="mt-3 text-xs text-muted underline-offset-2 transition hover:text-ink hover:underline"
      >
        {mode === "save" ? "Already have an account? Log in" : "New here? Save your progress instead"}
      </button>
    </section>
  );
}
