// Maps each exam-grade (level-4) lesson to its Series 7 function — the bridge
// from "weak function" (an exam-history signal) back to "study these lessons".
//
// A lesson's function is the dominant fn tag across its quiz questions. For the
// 400-level modules every question in a lesson shares one function, but the
// majority vote keeps this robust if that ever stops being true. Runs server-side
// (it reads the lesson + quiz banks); the result is plain data for the client.

import { getOrderedLessons } from "@/lib/lessons";
import { getQuiz } from "@/lib/quiz";
import { moduleById } from "@/lib/lessons/taxonomy";
import { questionFunction } from "@/lib/exam/blueprint";

export interface ExamLessonRef {
  slug: string;
  title: string;
  moduleId: string;
  moduleTitle: string;
  /** Dominant exam-function tag for this lesson's quiz (e.g. "fn:3"). */
  fnTag: string;
}

/** Level-4 lessons that carry a function-tagged quiz, in curriculum order. */
export function examLessonFunctions(): ExamLessonRef[] {
  const out: ExamLessonRef[] = [];
  for (const l of getOrderedLessons()) {
    if (l.level !== 4) continue;
    const counts = new Map<string, number>();
    for (const q of getQuiz(l.slug)) {
      const fn = questionFunction(q);
      if (fn) counts.set(fn, (counts.get(fn) ?? 0) + 1);
    }
    if (counts.size === 0) continue;
    let fnTag = "";
    let best = 0;
    for (const [tag, n] of counts) {
      if (n > best) {
        best = n;
        fnTag = tag;
      }
    }
    out.push({
      slug: l.slug,
      title: l.title,
      moduleId: l.moduleId,
      moduleTitle: moduleById[l.moduleId]?.title ?? l.moduleId,
      fnTag,
    });
  }
  return out;
}
