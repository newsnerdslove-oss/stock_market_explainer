import { A } from "./theme";
import { Icon } from "./Icon";

export interface WeekDay {
  /** one-letter label, e.g. "M" */
  l: string;
  done?: boolean;
}

/** A week strip of day dots — filled with a check when done; `today` is the index to outline. */
export function WeekDots({
  days = [],
  on = A.primary,
  off = A.barTrack,
  txt = A.muted,
  today = -1,
}: {
  days?: WeekDay[];
  on?: string;
  off?: string;
  txt?: string;
  today?: number;
}) {
  return (
    <div style={{ display: "flex", gap: 8, justifyContent: "space-between" }}>
      {days.map((d, i) => (
        <div key={i} style={{ textAlign: "center", flex: 1 }}>
          <div style={{ fontSize: 11, color: txt, marginBottom: 6, fontWeight: 600 }}>{d.l}</div>
          <div
            style={{
              width: 30,
              height: 30,
              margin: "0 auto",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              background: d.done ? on : off,
              color: d.done ? "#fff" : txt,
              outline: i === today ? `2px solid ${on}` : "none",
              outlineOffset: 2,
            }}
          >
            {d.done ? <Icon name="check" size={15} strokeWidth={3} /> : <span style={{ fontSize: 12 }}>·</span>}
          </div>
        </div>
      ))}
    </div>
  );
}
