import { describe, it, expect } from "vitest";
import { uid } from "@/lib/uid";

describe("uid", () => {
  it("returns a non-empty, unique id", () => {
    const ids = new Set(Array.from({ length: 100 }, () => uid()));
    expect(ids.size).toBe(100);
    for (const id of ids) expect(id.length).toBeGreaterThan(0);
  });
  it("produces a v4-uuid shape where Web Crypto is available", () => {
    expect(uid()).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
  });
});
