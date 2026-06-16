import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllLessons, getLesson } from "@/lib/lessons";
import { LessonRenderer } from "@/components/LessonRenderer";
import { AskTutor } from "@/components/AskTutor";

// Pre-render every lesson at build time.
export function generateStaticParams() {
  return getAllLessons().map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const lesson = getLesson(params.slug);
  if (!lesson) return {};
  return { title: `${lesson.title} — Learn`, description: lesson.summary };
}

export default function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = getLesson(params.slug);
  if (!lesson) notFound();

  const all = getAllLessons();
  const idx = all.findIndex((l) => l.slug === lesson.slug);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <Link href="/learn" className="text-sm text-muted transition hover:text-ink">
        ← All lessons
      </Link>

      <header className="mt-4">
        <p className="font-mono text-xs text-faint">
          Level {lesson.level} · {lesson.estMinutes} min read
        </p>
        <h1 className="mt-2 text-4xl font-medium tracking-tight">{lesson.title}</h1>
        <p className="mt-3 text-lg text-muted">{lesson.summary}</p>
      </header>

      <article className="mt-8">
        <LessonRenderer sections={lesson.sections} />
      </article>

      <AskTutor slug={lesson.slug} />

      <nav className="mt-16 flex items-stretch justify-between gap-4 border-t border-hairline pt-6">
        {prev ? (
          <Link href={`/learn/${prev.slug}`} className="group max-w-[48%] text-left">
            <span className="block text-xs text-faint">← Previous</span>
            <span className="mt-1 block text-sm text-muted transition group-hover:text-ink">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/learn/${next.slug}`} className="group max-w-[48%] text-right">
            <span className="block text-xs text-faint">Next →</span>
            <span className="mt-1 block text-sm text-muted transition group-hover:text-ink">{next.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>

      <footer className="mt-12 text-xs text-faint">
        Educational only · paper trading only · not financial advice.
      </footer>
    </main>
  );
}
