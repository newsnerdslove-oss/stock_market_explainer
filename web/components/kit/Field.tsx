"use client";

import type { ChangeEvent } from "react";
import { A } from "./theme";
import { Icon } from "./Icon";

/** A labeled text input with an optional leading icon. */
export function Field({
  label,
  placeholder,
  value,
  onChange = () => {},
  type = "text",
  icon,
}: {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  icon?: string;
}) {
  return (
    <label style={{ display: "block" }}>
      {label && <div style={{ fontSize: 13, fontWeight: 700, color: A.ink, marginBottom: 7 }}>{label}</div>}
      <div style={{ display: "flex", alignItems: "center", gap: 10, background: A.card, border: `1.5px solid ${A.border}`, borderRadius: 14, padding: "0 14px" }}>
        {icon && <Icon name={icon} size={18} color={A.faint} />}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{ flex: 1, border: "none", outline: "none", background: "transparent", padding: "13px 0", fontFamily: A.font, fontSize: 15, fontWeight: 600, color: A.ink }}
        />
      </div>
    </label>
  );
}
