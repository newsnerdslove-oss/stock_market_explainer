"use client";

import { useState, type ReactNode } from "react";
import { StaxShell } from "@/components/kit/StaxShell";
import { A } from "@/components/kit/theme";
import { Icon } from "@/components/kit/Icon";
import { Card } from "@/components/kit/Card";
import { Field } from "@/components/kit/Field";
import { Btn } from "@/components/kit/Btn";
import { Toggle } from "@/components/kit/Toggle";
import { Badge } from "@/components/kit/Badge";
import { Avatar } from "@/components/kit/Avatar";
import { Pill } from "@/components/kit/Pill";
import { useThemeState } from "@/lib/theme";

type Pane = "account" | "notifications" | "plan" | "appearance" | "security";
type NotifKey = "daily" | "streak" | "price" | "club" | "product";

const NAV: [Pane, string, string][] = [
  ["account", "Account", "user"],
  ["notifications", "Notifications", "bell"],
  ["plan", "Plan & billing", "credit-card"],
  ["appearance", "Appearance", "palette"],
  ["security", "Security", "shield"],
];

function Feat({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 13.5, fontWeight: 600, color: A.ink, padding: "4px 0" }}>
      <Icon name="check" size={16} color={A.green} strokeWidth={3} />
      {children}
    </div>
  );
}

export default function SettingsPage() {
  const [pane, setPane] = useState<Pane>("account");
  const [name, setName] = useState("Maya Rivera");
  const [email, setEmail] = useState("maya@email.com");
  const [notif, setNotif] = useState<Record<NotifKey, boolean>>({ daily: true, streak: true, price: true, club: false, product: false });
  const [remindAt, setRemindAt] = useState("18:00");
  const [theme, setTheme] = useThemeState();

  return (
    <StaxShell maxWidth={980}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-.02em", margin: 0 }}>Settings</h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 28, alignItems: "start" }}>
        <div style={{ position: "sticky", top: 22, display: "flex", flexDirection: "column", gap: 4 }}>
          {NAV.map(([id, label, ic]) => (
            <div
              key={id}
              onClick={() => setPane(id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 11,
                padding: "11px 14px",
                borderRadius: 12,
                cursor: "pointer",
                fontWeight: 700,
                fontSize: 14.5,
                background: pane === id ? A.primarySoft : "transparent",
                color: pane === id ? A.primaryDeep : A.muted,
              }}
            >
              <Icon name={ic} size={18} />
              {label}
            </div>
          ))}
        </div>

        <div style={{ minWidth: 0 }}>
          {pane === "account" && (
            <Card pad={26} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                <Avatar name={name} size={70} bg={A.green} ring={A.card} />
                <Btn kind="ghost" size="sm" icon="upload">
                  Change photo
                </Btn>
              </div>
              <Field label="Full name" value={name} onChange={(e) => setName(e.target.value)} icon="user" />
              <Field label="Email" value={email} onChange={(e) => setEmail(e.target.value)} icon="mail" type="email" />
              <Field label="Username" value="@mayatrades" onChange={() => {}} icon="at-sign" />
              <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
                <Btn kind="primary">Save changes</Btn>
                <Btn kind="ghost">Cancel</Btn>
              </div>
            </Card>
          )}

          {pane === "notifications" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <Card>
                <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Daily reminder</div>
                <div style={{ fontSize: 13.5, color: A.muted, fontWeight: 600, marginBottom: 16 }}>We&apos;ll nudge you to keep your streak alive.</div>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <Icon name="alarm-clock" size={20} color={A.primary} />
                  <span style={{ fontWeight: 700, fontSize: 14.5, flex: 1 }}>Remind me at</span>
                  <input
                    type="time"
                    value={remindAt}
                    onChange={(e) => setRemindAt(e.target.value)}
                    style={{ border: `1.5px solid ${A.border}`, borderRadius: 10, padding: "9px 12px", fontFamily: A.mono, fontSize: 15, fontWeight: 700, color: A.ink, background: A.card }}
                  />
                </div>
              </Card>
              <Card pad={8}>
                {(
                  [
                    ["daily", "Daily challenge ready", "sparkles"],
                    ["streak", "Streak about to break", "flame"],
                    ["price", "Price alerts", "bell-ring"],
                    ["club", "Club & friend activity", "users"],
                    ["product", "Product updates", "megaphone"],
                  ] as [NotifKey, string, string][]
                ).map(([k, label, ic], i, arr) => (
                  <div key={k} style={{ display: "flex", alignItems: "center", gap: 13, padding: "14px", borderBottom: i < arr.length - 1 ? `1px solid ${A.borderSoft}` : "none" }}>
                    <Icon name={ic} size={19} color={A.muted} />
                    <span style={{ flex: 1, fontWeight: 700, fontSize: 14.5 }}>{label}</span>
                    <Toggle on={notif[k]} onClick={() => setNotif((s) => ({ ...s, [k]: !s[k] }))} />
                  </div>
                ))}
              </Card>
            </div>
          )}

          {pane === "plan" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <Card pad={22} style={{ border: `1.5px solid ${A.border}` }}>
                  <div style={{ fontWeight: 800, fontSize: 17 }}>Free</div>
                  <div style={{ fontSize: 13, color: A.muted, fontWeight: 600, margin: "4px 0 14px" }}>Your current plan</div>
                  {["Daily lessons & challenges", "Paper trading", "1 club"].map((f) => (
                    <Feat key={f}>{f}</Feat>
                  ))}
                  <div style={{ marginTop: 14 }}>
                    <Pill bg={A.sunk} fg={A.muted}>
                      Current plan
                    </Pill>
                  </div>
                </Card>
                <Card pad={22} style={{ border: `2px solid ${A.primary}`, position: "relative" }}>
                  <div style={{ position: "absolute", top: -11, right: 18 }}>
                    <Badge tone="primary">Recommended</Badge>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 17 }}>
                    Pro <span style={{ color: A.primary }}>$9</span>
                    <span style={{ fontSize: 13, color: A.muted, fontWeight: 600 }}>/mo</span>
                  </div>
                  <div style={{ fontSize: 13, color: A.muted, fontWeight: 600, margin: "4px 0 14px" }}>For serious learners</div>
                  {["Everything in Free", "Advanced chart tools", "Unlimited clubs", "Real-time data"].map((f) => (
                    <Feat key={f}>{f}</Feat>
                  ))}
                  <div style={{ marginTop: 16 }}>
                    <Btn kind="primary" full>
                      Upgrade to Pro
                    </Btn>
                  </div>
                </Card>
              </div>
              <Card style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <Icon name="credit-card" size={20} color={A.muted} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14.5 }}>No payment method</div>
                  <div style={{ fontSize: 12.5, color: A.muted, fontWeight: 600 }}>Add a card to upgrade</div>
                </div>
                <Btn kind="ghost" size="sm">
                  Add card
                </Btn>
              </Card>
            </div>
          )}

          {pane === "appearance" && (
            <Card pad={24} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 10 }}>Theme</div>
                <div style={{ display: "flex", gap: 12 }}>
                  {(["light", "dark"] as const).map((m) => (
                    <div
                      key={m}
                      onClick={() => setTheme(m)}
                      style={{
                        flex: 1,
                        padding: 16,
                        borderRadius: 14,
                        cursor: "pointer",
                        textAlign: "center",
                        textTransform: "capitalize",
                        border: `2px solid ${theme === m ? A.primary : A.border}`,
                        background: theme === m ? A.primarySoft : A.card,
                        fontWeight: 800,
                        color: theme === m ? A.primaryDeep : A.muted,
                      }}
                    >
                      <Icon name={m === "dark" ? "moon" : "sun"} size={22} />
                      <div style={{ marginTop: 6 }}>{m}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}

          {pane === "security" && (
            <Card pad={8}>
              {(
                [
                  ["Change password", "key-round"],
                  ["Two-factor authentication", "shield-check"],
                  ["Connected accounts", "link"],
                  ["Active sessions", "monitor"],
                  ["Delete account", "trash-2"],
                ] as [string, string][]
              ).map(([label, ic], i, arr) => {
                const danger = i === arr.length - 1;
                return (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 13, padding: "16px 14px", borderBottom: i < arr.length - 1 ? `1px solid ${A.borderSoft}` : "none", cursor: "pointer" }}>
                    <Icon name={ic} size={19} color={danger ? A.red : A.muted} />
                    <span style={{ flex: 1, fontWeight: 700, fontSize: 14.5, color: danger ? A.red : A.ink }}>{label}</span>
                    <Icon name="chevron-right" size={18} color={A.faint} />
                  </div>
                );
              })}
            </Card>
          )}
        </div>
      </div>
    </StaxShell>
  );
}
