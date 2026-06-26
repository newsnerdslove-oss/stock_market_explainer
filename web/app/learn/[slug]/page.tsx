import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllLessons, getLesson, getOrderedLessons } from "@/lib/lessons";
import { moduleById, trackById } from "@/lib/lessons/taxonomy";
import { getQuiz } from "@/lib/quiz";
import { LessonRenderer } from "@/components/LessonRenderer";
import { Icon } from "@/components/kit/Icon";
import { AskTutor } from "@/components/AskTutor";
import { QuizCard } from "@/components/QuizCard";
import { PatternSpotter } from "@/components/PatternSpotter";
import { BacktestSandbox } from "@/components/BacktestSandbox";
import { GreeksLab } from "@/components/options/GreeksLab";
import { StrategyBuilder } from "@/components/options/StrategyBuilder";

// Lessons that get an interactive widget below their quiz.
const SPOTTER_LESSONS = new Set(["candlestick-patterns-reversal"]);
const BACKTEST_LESSONS = new Set(["what-backtesting-is-and-why"]);
const GREEKS_LAB_LESSONS = new Set(["options-greeks"]);
const STRATEGY_BUILDER_LESSONS = new Set(["options-strategy-matrix"]);
// Options lessons get a "practice in the simulator" tie-in.
const OPTIONS_MODULES = new Set(["markets-options", "markets-adv-options"]);

// Pre-render every lesson at build time.
export function generateStaticParams() {
  return getAllLessons().map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return {};
  return { title: `${lesson.title} — Learn`, description: lesson.summary };
}

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  const ordered = getOrderedLessons();
  const idx = ordered.findIndex((l) => l.slug === lesson.slug);
  const prev = idx > 0 ? ordered[idx - 1] : null;
  const next = idx < ordered.length - 1 ? ordered[idx + 1] : null;
  const questions = getQuiz(lesson.slug);

  const mod = moduleById[lesson.moduleId];
  const track = trackById[mod.trackId];

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <Link href="/learn/units" className="text-sm font-bold text-muted transition hover:text-ink">
          {track.title} · {mod.title}
        </Link>
        <span className="flex-1" />
        <span className="inline-flex items-center gap-1.5 rounded-full bg-learn/10 px-3 py-1 text-xs font-extrabold text-learn">
          <Icon name="zap" size={14} /> +{questions.length > 0 ? 40 : 20} XP
        </span>
      </div>

      <header>
        <p className="font-mono text-xs font-semibold uppercase tracking-wide text-faint">{lesson.estMinutes} min read</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink">{lesson.title}</h1>
        <p className="mt-3 text-lg font-medium text-muted">{lesson.summary}</p>
      </header>

      <article className="mt-8">
        <LessonRenderer sections={lesson.sections} />
      </article>

      {questions.length > 0 && (
        <QuizCard
          lessonSlug={lesson.slug}
          questions={questions}
          next={next ? { slug: next.slug, title: next.title } : null}
        />
      )}

      {SPOTTER_LESSONS.has(lesson.slug) && <PatternSpotter />}
      {BACKTEST_LESSONS.has(lesson.slug) && <BacktestSandbox />}
      {GREEKS_LAB_LESSONS.has(lesson.slug) && <GreeksLab />}
      {STRATEGY_BUILDER_LESSONS.has(lesson.slug) && <StrategyBuilder />}

      {OPTIONS_MODULES.has(lesson.moduleId) && (
        <section className="mt-12 rounded-[22px] border border-up/30 bg-up/5 p-5 shadow-sm">
          <h2 className="text-base font-extrabold text-ink">Practice in the simulator</h2>
          <p className="mt-1 font-medium text-muted">
            Trade calls and puts at live Black-Scholes prices, build the strategies you just learned, and watch the Greeks and P&amp;L
            move — paper money only.
          </p>
          <Link href="/simulator" className="mt-3 inline-flex items-center gap-2 rounded-xl bg-up px-5 py-2.5 text-sm font-extrabold text-white shadow-sm transition hover:opacity-90">
            Open the options simulator →
          </Link>
        </section>
      )}

      <AskTutor slug={lesson.slug} />

      <nav className="mt-16 flex items-stretch justify-between gap-4 border-t border-strong pt-6">
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

      <footer className="mt-12 text-xs font-semibold text-faint">
        Educational only · paper trading only · not financial advice.
      </footer>
    </div>
  );
}
