import { A } from "./theme";

/** Circular initials avatar. */
export function Avatar({
  name = "M",
  size = 36,
  bg = A.sunk,
  color = "#fff",
  ring,
}: {
  name?: string;
  size?: number;
  bg?: string;
  color?: string;
  ring?: string;
}) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: bg,
        color,
        display: "grid",
        placeItems: "center",
        fontWeight: 700,
        fontSize: size * 0.38,
        flex: "0 0 auto",
        boxShadow: ring ? `0 0 0 2px ${ring}` : "none",
      }}
    >
      {initials}
    </div>
  );
}
