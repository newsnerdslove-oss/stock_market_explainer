"use client";

import { useRef, useState } from "react";

interface Source {
  slug: string;
  title: string;
}
interface TutorResponse {
  answer: string;
  sources: Source[];
  mode: "llm" | "retrieval" | "none";
  llmStatus?: "off" | "unreachable";
}

// Inline "ask a question" helper shown on each lesson. Posts to /api/tutor,
// which grounds the answer on lesson content and (when configured) routes to
// the self-hosted model. No external services.
export function AskTutor({ slug }: { slug: string }) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState<TutorResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  // Guards against races: a newer request aborts the previous fetch, and any
  // response from a superseded request (by id) is ignored.
  const reqId = useRef(0);
  const inFlight = useRef<AbortController | null>(null);

  async function ask(q: string) {
    const query = q.trim();
    if (!query) return;
    inFlight.current?.abort();
    const controller = new AbortController();
    inFlight.current = controller;
    const id = ++reqId.current;

    setLoading(true);
    setError(null);
    setRes(null);
    try {
      const r = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: query, slug }),
        signal: controller.signal,
      });
      if (id !== reqId.current) return; // superseded by a newer request
      if (!r.ok) throw new Error(`Tutor error ${r.status}`);
      setRes(await r.json());
    } catch (e) {
      if (id !== reqId.current || (e as Error)?.name === "AbortError") return;
      setError("Couldn't reach the tutor. Is the model running?");
    } finally {
      if (id === reqId.current) setLoading(false);
    }
  }

  const suggestions = ["What does this mean?", "Give me an example", "Why does it matter?"];

  return (
    <section className="mt-12 rounded-lg border border-learn/30 bg-learn/5 p-5">
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-learn/20 text-learn">?</span>
        <h2 className="text-sm font-medium text-ink">Stuck? Ask about this lesson</h2>
      </div>

      <form
        className="mt-4 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          ask(question);
        }}
      >
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g. what's the difference between a wick and a body?"
          maxLength={500}
          className="flex-1 rounded-md border border-strong bg-surface px-3 py-2 text-sm text-ink placeholder:text-faint focus:border-learn focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading || !question.trim()}
          className="rounded-md bg-learn px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90 disabled:opacity-40"
        >
          {loading ? "Thinking…" : "Ask"}
        </button>
      </form>

      <div className="mt-2 flex flex-wrap gap-2">
        {suggestions.map((s) => (
          <button
            key={s}
            type="button"
            disabled={loading}
            onClick={() => {
              setQuestion(s);
              ask(s);
            }}
            className="rounded-full border border-strong px-3 py-1 text-xs text-muted transition hover:text-ink disabled:opacity-40"
          >
            {s}
          </button>
        ))}
      </div>

      {error && (
        <p className="mt-4 text-sm text-down" role="alert">
          {error}
        </p>
      )}

      {res && (
        <div className="mt-4 rounded-md border border-hairline bg-surface p-4" aria-live="polite">
          <p className="whitespace-pre-line text-sm leading-relaxed text-muted">{res.answer}</p>
          {res.sources.length > 0 && (
            <p className="mt-3 text-xs text-faint">
              From your lessons:{" "}
              {res.sources.map((s, i) => (
                <span key={s.slug}>
                  {i > 0 && ", "}
                  <a href={`/learn/${s.slug}`} className="text-learn hover:underline">
                    {s.title}
                  </a>
                </span>
              ))}
            </p>
          )}
          {res.mode === "retrieval" && (
            <p className="mt-2 text-xs text-faint">
              {res.llmStatus === "unreachable"
                ? "The tutor model is configured but unreachable — showing lesson text instead."
                : "Showing lesson text directly — the tutor model isn't connected."}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
