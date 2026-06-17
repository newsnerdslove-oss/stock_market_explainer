import { describe, it, expect } from "vitest";
import type { TutorQuery } from "@/lib/progress/schema";
import { computeTutorInsights } from "@/lib/tutor/insights";

function ask(slug: string, at: string, question = "q"): TutorQuery {
  return { id: `${slug}-${at}`, at, slug, question, mode: "llm", sourceSlugs: [] };
}

describe("computeTutorInsights", () => {
  it("is empty for an empty log", () => {
    const r = computeTutorInsights([]);
    expect(r.total).toBe(0);
    expect(r.hotspots).toHaveLength(0);
    expect(r.recent).toHaveLength(0);
  });

  it("ranks hotspots by ask count, most-asked first", () => {
    const log = [
      ask("margin", "2026-06-17T03:00:00Z"),
      ask("margin", "2026-06-17T02:00:00Z"),
      ask("margin", "2026-06-17T01:00:00Z"),
      ask("options", "2026-06-17T04:00:00Z"),
    ];
    const r = computeTutorInsights(log);
    expect(r.total).toBe(4);
    expect(r.hotspots[0].slug).toBe("margin");
    expect(r.hotspots[0].count).toBe(3);
    expect(r.hotspots[0].lastAt).toBe("2026-06-17T03:00:00Z");
    expect(r.hotspots[1].slug).toBe("options");
  });

  it("returns recent questions newest-first within the limit", () => {
    const log = [
      ask("a", "2026-06-17T01:00:00Z"),
      ask("b", "2026-06-17T05:00:00Z"),
      ask("c", "2026-06-17T03:00:00Z"),
    ];
    const r = computeTutorInsights(log, 2);
    expect(r.recent.map((q) => q.slug)).toEqual(["b", "c"]);
  });
});
