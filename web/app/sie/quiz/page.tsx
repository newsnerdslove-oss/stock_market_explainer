"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { A } from "@/components/kit/theme";
import { Btn } from "@/components/kit/Btn";
import { Icon } from "@/components/kit/Icon";
import { QuestionRunner } from "@/components/QuestionRunner";
import { getSieSampler } from "@/lib/quiz/sie";
import type { ChoiceQuestion } from "@/lib/quiz/types";
import { track } from "@/lib/sie/track";

export default function SieQuiz() {
  const router = useRouter();
  const [questions, setQuestions] = useState<ChoiceQuestion[]>([]);
  const [done, setDone] = useState<{ correct: number; total: number } | null>(null);

  // Generate client-side (Math.random) to avoid an SSR hydration mismatch.
  useEffect(() => {
    setQuestions(getSieSampler(50));
    track("quiz_start");
  }, []);

  const shell = (inner: React.ReactNode) => (
    <div style={{ minHeight: "100vh", background: A.page, color: A.ink, fontFamily: A.font }}>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 18px 64px" }}>{inner}</div>
    </div>
  );

  if (done) {
    const pct = Math.round((done.correct / Math.max(1, done.total)) * 100);
    const passing = pct >= 70;
    return shell(
      <div style={{ textAlign: "center", paddingTop: 24 }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", margin: "0 auto 16px", display: "grid", placeItems: "center", background: passing ? A.greenSoft : A.primarySoft, color: passing ? A.green : A.primaryDeep }}>
          <Icon name={passing ? "trophy" : "target"} size={34} />
        </div>
        <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-.02em" }}>
          {done.correct}/{done.total} · {pct}%
        </div>
        <p style={{ fontSize: 15.5, color: A.muted, fontWeight: 500, margin: "8px auto 24px", maxWidth: 420, lineHeight: 1.5 }}>
          {passing
            ? "Strong start — that's a passing pace. The full pack has 1,800+ questions and real-format mock exams to lock it in."
            : "Good — now you know where the gaps are. The full pack drills every weak area until you're consistently above 70%."}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          <Btn kind="success" size="lg" icon="zap" onClick={() => router.push("/sie")}>
            Unlock the full bank · $29
          </Btn>
          <Btn kind="ghost" size="lg" onClick={() => { setDone(null); setQuestions(getSieSampler(50)); }}>
            Try 50 more
          </Btn>
        </div>
      </div>,
    );
  }

  return shell(
    <>
      <button
        type="button"
        onClick={() => router.push("/sie")}
        style={{ border: "none", background: "transparent", color: A.muted, fontWeight: 700, fontSize: 14, cursor: "pointer", padding: 0, marginBottom: 16 }}
      >
        ← Back
      </button>
      <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-.02em", margin: "0 0 6px" }}>Free SIE practice</h1>
      <p style={{ fontSize: 14, color: A.muted, fontWeight: 600, margin: "0 0 20px" }}>50 real questions across all four SIE areas. Instant explanations.</p>
      {questions.length > 0 ? (
        <QuestionRunner
          questions={questions}
          onComplete={(correct, total) => {
            setDone({ correct, total });
            track("quiz_complete");
          }}
        />
      ) : (
        <div style={{ height: 200, borderRadius: 18, border: `1px solid ${A.border}`, background: A.card, display: "grid", placeItems: "center", color: A.faint, fontWeight: 600 }}>
          Loading questions…
        </div>
      )}
    </>,
  );
}
