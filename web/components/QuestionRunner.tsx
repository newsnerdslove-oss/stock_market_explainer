"use client";

import { useState } from "react";
import { checkAnswer } from "@/lib/quiz/check";
import type { ChoiceQuestion } from "@/lib/quiz/types";
import { inline } from "@/lib/inline";
import { PatternChart } from "@/components/charts/PatternChart";
import type { OHLC } from "@/lib/charts/patterns";
import { A } from "@/components/kit/theme";
import { Bar } from "@/components/kit/Bar";
import { Btn } from "@/components/kit/Btn";
import { Icon } from "@/components/kit/Icon";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const LETTERS = ["A", "B", "C", "D", "E", "F"];

/**
 * Drives a learner through a fixed list of choice questions one at a time:
 * select → Check → green/red feedback + explanation → Next. Shared by the lesson
 * quiz (QuizCard), the daily review (DailyToday), and the exam runner. Question
 * order is the caller's; choices are shuffled here on mount.
 */
export function QuestionRunner({
  questions,
  onAnswer,
  onComplete,
}: {
  questions: ChoiceQuestion[];
  onAnswer?: (questionId: string, correct: boolean) => void;
  onComplete: (correctCount: number, total: number) => void;
}) {
  const [order] = useState<ChoiceQuestion[]>(() => questions.map((q) => ({ ...q, choices: shuffle(q.choices) })));
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const q = order[idx];
  const total = order.length;
  const isLast = idx === total - 1;
  const result = revealed && q ? checkAnswer(q, selected ?? "") : null;

  function check() {
    if (selected == null || !q || revealed) return;
    const correct = checkAnswer(q, selected).correct;
    if (correct) setCorrectCount((c) => c + 1);
    onAnswer?.(q.id, correct);
    setRevealed(true);
  }

  function advance() {
    if (isLast) {
      onComplete(correctCount, total);
    } else {
      setIdx((i) => i + 1);
      setSelected(null);
      setRevealed(false);
    }
  }

  if (!q) return null;
  const barPct = ((idx + (revealed ? 1 : 0)) / total) * 100;

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <div style={{ flex: 1 }}>
          <Bar pct={barPct} color={A.primary} track={A.barTrack} height={8} />
        </div>
        <span style={{ fontFamily: A.mono, fontSize: 13, fontWeight: 700, color: A.muted }}>
          {idx + 1} / {total}
        </span>
      </div>

      <div style={{ fontSize: 18, fontWeight: 700, color: A.ink, lineHeight: 1.4, marginBottom: 16 }}>{inline(q.prompt)}</div>

      {q.type === "chart" && Array.isArray(q.chartData) && (
        <div style={{ background: A.page, borderRadius: 16, padding: 14, border: `1px solid ${A.borderSoft}`, marginBottom: 16 }}>
          <PatternChart candles={q.chartData as OHLC[]} />
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }} role="group" aria-label="Answer choices">
        {q.choices.map((c, i) => {
          const state = choiceState(c.id, q.correctId, selected, revealed);
          return <ChoiceButton key={c.id} letter={LETTERS[i] ?? ""} label={c.text} state={state} disabled={revealed} onClick={() => setSelected(c.id)} />;
        })}
      </div>

      {result && (
        <div style={{ marginTop: 16, display: "flex", alignItems: "flex-start", gap: 14, padding: "16px 18px", borderRadius: 16, background: result.correct ? A.greenSoft : A.redSoft }} aria-live="polite">
          <div style={{ width: 40, height: 40, borderRadius: "50%", flex: "0 0 auto", display: "grid", placeItems: "center", background: result.correct ? A.green : A.red, color: "#fff" }}>
            <Icon name={result.correct ? "check" : "x"} size={22} strokeWidth={3} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 800, fontSize: 15.5, color: result.correct ? A.green : A.red }}>{result.correct ? "Correct" : "Not quite"}</div>
            {!result.correct && result.selectedFeedback && <div style={{ fontSize: 14, color: A.ink, fontWeight: 500, marginTop: 3 }}>{inline(result.selectedFeedback)}</div>}
            <div style={{ fontSize: 14, color: A.ink, fontWeight: 500, marginTop: 3 }}>{inline(result.explanation)}</div>
          </div>
        </div>
      )}

      <div style={{ marginTop: 16, display: "flex", justifyContent: "flex-end" }}>
        {!revealed ? (
          <Btn kind="primary" onClick={check} style={selected == null ? { opacity: 0.4, pointerEvents: "none" } : undefined}>
            Check
          </Btn>
        ) : (
          <Btn kind="primary" iconRight="arrow-right" onClick={advance}>
            {isLast ? "See results" : "Next question"}
          </Btn>
        )}
      </div>
    </div>
  );
}

type ChoiceVisualState = "idle" | "selected" | "correct" | "wrong" | "dimmed";

function choiceState(id: string, correctId: string, selected: string | null, revealed: boolean): ChoiceVisualState {
  if (!revealed) return selected === id ? "selected" : "idle";
  if (id === correctId) return "correct";
  if (id === selected) return "wrong";
  return "dimmed";
}

function ChoiceButton({ letter, label, state, disabled, onClick }: { letter: string; label: string; state: ChoiceVisualState; disabled: boolean; onClick: () => void }) {
  const styles: Record<ChoiceVisualState, { bg: string; border: string; fg: string }> = {
    idle: { bg: A.card, border: A.border, fg: A.ink },
    selected: { bg: A.primarySoft, border: A.primary, fg: A.ink },
    correct: { bg: A.greenSoft, border: A.green, fg: A.ink },
    wrong: { bg: A.redSoft, border: A.red, fg: A.ink },
    dimmed: { bg: A.card, border: A.border, fg: A.faint },
  };
  const s = styles[state];
  const badge = state === "correct" ? A.green : state === "wrong" ? A.red : state === "selected" ? A.primary : A.faint;
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-pressed={state === "selected"}
      style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", textAlign: "left", padding: "13px 16px", borderRadius: 13, border: `1.5px solid ${s.border}`, background: s.bg, color: s.fg, fontFamily: A.font, fontWeight: 600, fontSize: 14.5, cursor: disabled ? "default" : "pointer" }}
    >
      <span style={{ width: 26, height: 26, borderRadius: "50%", flex: "0 0 auto", display: "grid", placeItems: "center", border: `2px solid ${badge}`, color: state === "idle" || state === "dimmed" ? badge : "#fff", background: state === "idle" || state === "dimmed" ? "transparent" : badge, fontWeight: 800, fontSize: 12.5 }}>
        {state === "correct" ? <Icon name="check" size={14} strokeWidth={3} /> : state === "wrong" ? <Icon name="x" size={14} strokeWidth={3} /> : letter}
      </span>
      <span style={{ flex: 1 }}>{inline(label)}</span>
    </button>
  );
}
