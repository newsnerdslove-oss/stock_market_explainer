"use client";

import { A } from "./theme";

/** A pill switch. */
export function Toggle({ on = false, onClick = () => {} }: { on?: boolean; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: 46,
        height: 27,
        borderRadius: 999,
        padding: 3,
        cursor: "pointer",
        background: on ? A.green : A.barTrack,
        transition: "background .2s ease",
      }}
    >
      <div
        style={{
          width: 21,
          height: 21,
          borderRadius: "50%",
          background: "#fff",
          transform: on ? "translateX(19px)" : "translateX(0)",
          transition: "transform .2s ease",
          boxShadow: "0 1px 3px rgba(0,0,0,.2)",
        }}
      />
    </div>
  );
}
