"use client";

import type { CSSProperties, ReactNode } from "react";
import { A } from "./theme";
import { Icon } from "./Icon";

export type BtnKind = "primary" | "soft" | "ghost" | "success" | "white";
export type BtnSize = "sm" | "md" | "lg";

/** The kit's primary button: filled/soft/ghost/success/white kinds, three sizes, optional leading/trailing icon. */
export function Btn({
  children,
  kind = "primary",
  size = "md",
  icon,
  iconRight,
  full = false,
  onClick = () => {},
  style,
}: {
  children?: ReactNode;
  kind?: BtnKind;
  size?: BtnSize;
  icon?: string;
  iconRight?: string;
  full?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}) {
  const pads = { sm: "8px 14px", md: "12px 20px", lg: "15px 26px" }[size];
  const fs = { sm: 14, md: 15, lg: 17 }[size];
  const kinds: Record<BtnKind, CSSProperties> = {
    primary: { background: A.primary, color: "#fff", border: "1px solid transparent", boxShadow: "0 6px 16px rgba(46,123,230,.32)" },
    soft: { background: A.primarySoft, color: A.primaryDeep, border: "1px solid transparent" },
    ghost: { background: "transparent", color: A.ink, border: `1px solid ${A.border}` },
    success: { background: A.green, color: "#fff", border: "1px solid transparent", boxShadow: "0 6px 16px rgba(31,169,104,.3)" },
    white: { background: "#fff", color: A.primaryDeep, border: "1px solid transparent", boxShadow: A.shadow },
  };
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: pads,
        borderRadius: 14,
        fontFamily: A.font,
        fontWeight: 800,
        fontSize: fs,
        cursor: "pointer",
        width: full ? "100%" : "auto",
        whiteSpace: "nowrap",
        transition: "transform .12s ease, filter .12s ease",
        ...kinds[kind],
        ...style,
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(.97)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {icon && <Icon name={icon} size={fs + 2} />}
      {children}
      {iconRight && <Icon name={iconRight} size={fs + 2} />}
    </button>
  );
}
