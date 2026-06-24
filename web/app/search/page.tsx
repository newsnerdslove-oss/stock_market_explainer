"use client";

import { useMemo, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { A } from "@/components/kit/theme";
import { Icon } from "@/components/kit/Icon";
import { Card } from "@/components/kit/Card";
import { Pill } from "@/components/kit/Pill";
import { COMPANY_NAMES } from "@/lib/stocks/names";
import { getOrderedLessons } from "@/lib/lessons";

const SYMBOLS = Object.entries(COMPANY_NAMES).map(([sym, name]) => ({ sym, name }));
const TRENDING = ["NVDA", "TSLA", "SPY", "AMD", "AAPL"];
const TERMS = [
  { t: "Candlestick", s: "A price bar showing open, high, low, close" },
  { t: "Limit order", s: "Buy/sell only at a set price or better" },
  { t: "Diversification", s: "Spreading risk across many holdings" },
  { t: "Volatility", s: "How much a price swings over time" },
  { t: "EMA", s: "Exponential moving average — a trend line" },
];

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: ".04em", textTransform: "uppercase", color: A.faint, marginBottom: 8 }}>{title}</div>
      <Card pad={6}>{children}</Card>
    </div>
  );
}

function Row({ left, title, sub, right, onClick }: { left: ReactNode; title: string; sub: string; right?: ReactNode; onClick?: () => void }) {
  return (
    <div onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 13, padding: "11px 14px", borderRadius: 13, cursor: onClick ? "pointer" : "default" }}>
      {left}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 800, fontSize: 14.5, color: A.ink }}>{title}</div>
        <div style={{ fontSize: 12.5, color: A.muted, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{sub}</div>
      </div>
      {right}
    </div>
  );
}

export default function SearchPage() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const lessons = useMemo(() => getOrderedLessons(), []);

  const ql = q.trim().toLowerCase();
  const syms = ql ? SYMBOLS.filter((u) => (u.sym + " " + u.name).toLowerCase().includes(ql)).slice(0, 8) : SYMBOLS.slice(0, 4);
  const foundLessons = ql ? lessons.filter((l) => (l.title + " " + (l.summary ?? "")).toLowerCase().includes(ql)).slice(0, 6) : lessons.slice(0, 3);
  const terms = ql ? TERMS.filter((x) => (x.t + x.s).toLowerCase().includes(ql)) : [];
  const none = ql.length > 0 && !syms.length && !foundLessons.length && !terms.length;

  const goStock = (s: string) => router.push(`/symbol/${encodeURIComponent(s)}`);

  return (
    <div style={{ maxWidth: 820, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-.02em", margin: 0 }}>Search</h1>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 11, background: A.card, border: `1.5px solid ${A.primary}`, borderRadius: 15, padding: "0 16px", marginBottom: 22 }}>
        <Icon name="search" size={20} color={A.primary} />
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search stocks, lessons, terms…"
          style={{ flex: 1, border: "none", outline: "none", background: "transparent", padding: "15px 0", fontFamily: A.font, fontSize: 16, fontWeight: 600, color: A.ink }}
        />
        {q && <Icon name="x" size={18} color={A.faint} style={{ cursor: "pointer" }} />}
      </div>

      {!ql && (
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: ".04em", textTransform: "uppercase", color: A.faint, marginBottom: 10 }}>Trending</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {TRENDING.map((s) => (
              <div
                key={s}
                onClick={() => goStock(s)}
                style={{ display: "flex", alignItems: "center", gap: 7, padding: "8px 13px", borderRadius: 999, cursor: "pointer", border: `1px solid ${A.border}`, background: A.card, fontWeight: 700, fontSize: 13.5, color: A.ink }}
              >
                <Icon name="trending-up" size={14} color={A.primary} />
                {s}
              </div>
            ))}
          </div>
        </div>
      )}

      {none && (
        <div style={{ textAlign: "center", padding: "50px 20px", color: A.faint }}>
          <Icon name="search-x" size={36} color={A.faint} />
          <div style={{ fontWeight: 700, fontSize: 16, color: A.muted, marginTop: 12 }}>No results for &quot;{q}&quot;</div>
          <div style={{ fontSize: 13.5, marginTop: 4 }}>Try a ticker like AAPL, or a topic like &quot;candlestick&quot;.</div>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        {syms.length > 0 && (
          <Section title="Symbols">
            {syms.map((u) => (
              <Row
                key={u.sym}
                onClick={() => goStock(u.sym)}
                left={
                  <div style={{ width: 38, height: 38, borderRadius: 11, background: A.primarySoft, color: A.primaryDeep, display: "grid", placeItems: "center", fontWeight: 800, fontSize: 12, fontFamily: A.mono }}>
                    {u.sym.replace("-USD", "").slice(0, 4)}
                  </div>
                }
                title={u.sym}
                sub={u.name}
                right={<Icon name="chevron-right" size={18} color={A.faint} />}
              />
            ))}
          </Section>
        )}

        {foundLessons.length > 0 && (
          <Section title="Lessons">
            {foundLessons.map((l) => (
              <Row
                key={l.slug}
                onClick={() => router.push(`/learn/${l.slug}`)}
                left={
                  <div style={{ width: 38, height: 38, borderRadius: 11, background: A.primarySoft, color: A.primary, display: "grid", placeItems: "center" }}>
                    <Icon name="book-open" size={20} />
                  </div>
                }
                title={l.title}
                sub={l.summary ?? ""}
                right={<Icon name="chevron-right" size={18} color={A.faint} />}
              />
            ))}
          </Section>
        )}

        {terms.length > 0 && (
          <Section title="Terms">
            {terms.map((x) => (
              <Row
                key={x.t}
                left={
                  <div style={{ width: 38, height: 38, borderRadius: 11, background: A.sunk, color: A.muted, display: "grid", placeItems: "center" }}>
                    <Icon name="book-marked" size={19} />
                  </div>
                }
                title={x.t}
                sub={x.s}
                right={
                  <Pill bg={A.sunk} fg={A.muted} size="sm">
                    Glossary
                  </Pill>
                }
              />
            ))}
          </Section>
        )}
      </div>
    </div>
  );
}
