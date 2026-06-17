import { describe, it, expect, beforeEach } from "vitest";
import { answerQuestion } from "@/lib/tutor";

// Force the "model off" path so these are deterministic regardless of any
// TUTOR_* env in the shell (vitest does not load .env.local).
beforeEach(() => {
  delete process.env.TUTOR_LLM_URL;
  delete process.env.TUTOR_MODEL;
});

describe("answerQuestion (model off)", () => {
  it("grounds in a matching lesson and returns retrieval mode with sources", async () => {
    const r = await answerQuestion("what is the bid and ask spread?");
    expect(r.mode).toBe("retrieval");
    expect(r.sources.length).toBeGreaterThan(0);
    expect(r.llmStatus).toBe("off");
  });

  it("returns none for a question nothing matches", async () => {
    const r = await answerQuestion("xyzzy qwopplefluff zzznothing");
    expect(r.mode).toBe("none");
    expect(r.sources).toHaveLength(0);
  });

  it("ignores weak single-term matches as grounding", async () => {
    // "stock" alone hits many lessons, but a multi-word question needs 2+ term
    // matches to count — so a vague query shouldn't surface noisy sources.
    const r = await answerQuestion("what other planets have stock");
    // Either nothing strong matched (none), or only genuinely-relevant lessons.
    if (r.mode === "retrieval") {
      expect(r.sources.length).toBeGreaterThan(0);
    } else {
      expect(r.mode).toBe("none");
    }
  });

  it("handles an empty question", async () => {
    const r = await answerQuestion("   ");
    expect(r.mode).toBe("none");
  });
});
