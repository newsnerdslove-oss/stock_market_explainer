import type { ReactNode } from "react";
import { A } from "./theme";
import { Icon } from "./Icon";

/** A rounded pill chip, optionally icon-led. */
export function Pill({
  icon,
  children,
  bg = A.primarySoft,
  fg = A.primaryDeep,
  size = "md",
}: {
  icon?: string;
  children?: ReactNode;
  bg?: string;
  fg?: string;
  size?: "sm" | "md";
}) {
  const p = size === "sm" ? "4px 10px" : "6px 12px";
  const fs = size === "sm" ? 12 : 13;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: bg,
        color: fg,
        padding: p,
        borderRadius: 999,
        fontSize: fs,
        fontWeight: 700,
        whiteSpace: "nowrap",
      }}
    >
      {icon && <Icon name={icon} size={fs + 2} />}
      {children}
    </span>
  );
}
