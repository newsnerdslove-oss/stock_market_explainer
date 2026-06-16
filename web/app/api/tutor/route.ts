import { NextResponse } from "next/server";
import { answerQuestion } from "@/lib/tutor";

// POST /api/tutor  { question: string, slug?: string }
// Runs server-side, so the LAN model URL (and any key) never reach the browser.
export async function POST(req: Request) {
  let body: { question?: unknown; slug?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const question = typeof body.question === "string" ? body.question : "";
  const slug = typeof body.slug === "string" ? body.slug : undefined;

  if (!question.trim()) {
    return NextResponse.json({ error: "Missing 'question'." }, { status: 400 });
  }
  if (question.length > 500) {
    return NextResponse.json({ error: "Question too long." }, { status: 400 });
  }

  const result = await answerQuestion(question, slug);
  return NextResponse.json(result);
}
