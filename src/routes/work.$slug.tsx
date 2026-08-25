import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TextLink } from "@/components/TextLink";
import {
  getCaseStudy,
  getCoverImage,
  getNextCaseStudy,
  site,
  type CaseStudy,
} from "@/lib/content";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { study } = loaderData;
    const title = `${study.title} — ${site.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: study.overview.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: study.overview.slice(0, 155) },
      ],
    };
  },
  notFoundComponent: CaseStudyNotFound,
  component: CaseStudyPage,
});

function CaseStudyNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">Case study not found</h1>
        <TextLink to="/" className="mt-6">
          ← Back to all work
        </TextLink>
      </main>
      <SiteFooter />
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-sm font-semibold text-foreground">{value}</dd>
    </div>
  );
}

function CaseStudyPage() {
  const { study } = Route.useLoaderData() as { study: CaseStudy };
  const next = getNextCaseStudy(study.slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <header className="relative mx-auto w-full max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24">
          <div className="pointer-events-none absolute left-[-10%] top-[-10%] -z-10 h-[40%] w-[40%] rounded-full bg-blue-50/50 blur-[140px]" />
          <TextLink to="/" muted className="text-sm">
            ← All work
          </TextLink>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl">
            {study.title}
          </h1>
          <p className="mt-5 max-w-[55ch] text-lg leading-relaxed text-muted-foreground">
            {study.subtitle}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border/60 pt-8 sm:grid-cols-4">
            <Meta label="Role" value={study.role} />
            <Meta label="Timeline" value={study.timeline} />
            <Meta label="Team" value={study.team} />
            <Meta label="Tools" value={study.tools.join(", ")} />
          </dl>
        </header>

        <div className="mx-auto mt-12 w-full max-w-6xl px-5 sm:px-8">
          <img
            src={getCoverImage(study.cover)}
            alt={`Cover artwork for ${study.title}`}
            width={1200}
            height={900}
            className="aspect-[16/9] w-full rounded-2xl border border-white/60 object-cover shadow-card"
          />
        </div>

        <article className="mx-auto w-full max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">Overview</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{study.overview}</p>
            {study.context ? (
              <p className="mt-4 leading-relaxed text-muted-foreground">{study.context}</p>
            ) : null}
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">The problem</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{study.problem}</p>
            {study.problemPoints?.length ? (
              <ul className="mt-6 space-y-3 border-l-2 border-accent/40 pl-5">
                {study.problemPoints.map((p) => (
                  <li key={p} className="text-sm leading-relaxed text-muted-foreground">
                    {p}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>

          {study.goals?.length ? (
            <section className="mt-14">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">Goals</h2>
              <ol className="mt-6 space-y-4">
                {study.goals.map((g, i) => (
                  <li key={g} className="flex gap-4">
                    <span className="font-display text-sm font-semibold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed text-muted-foreground">{g}</span>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {study.research ? (
            <section className="mt-14">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">Research</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{study.research.summary}</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {study.research.findings.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-xl border border-white/60 bg-gradient-to-br from-card to-secondary/50 p-5 shadow-card"
                    style={{ backdropFilter: "blur(24px) saturate(140%)" }}
                  >
                    <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-14">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">Process</h2>
            <ol className="mt-8 space-y-16">
              {study.process.map((block, i) => (
                <li key={block.heading}>
                  <p className="text-xs uppercase tracking-[0.16em] text-accent">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-foreground">
                    {block.heading}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{block.body}</p>
                  {block.bullets?.length ? (
                    <ul className="mt-4 space-y-2">
                      {block.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span aria-hidden className="text-accent">
                            —
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {block.image ? (
                    <figure className="mt-6">
                      <img
                        src={getCoverImage(block.image)}
                        alt={block.imageAlt ?? `${block.heading} — ${study.title}`}
                        loading="lazy"
                        width={1400}
                        height={900}
                        className="w-full rounded-xl border border-white/60 bg-muted object-cover shadow-card"
                      />
                      <figcaption className="mt-2 text-xs text-muted-foreground">
                        {block.imageAlt ?? block.heading}
                      </figcaption>
                    </figure>
                  ) : null}
                </li>
              ))}
            </ol>
          </section>

          {study.decisions?.length ? (
            <section className="mt-14">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                Key decisions & trade-offs
              </h2>
              <dl className="mt-8 space-y-8">
                {study.decisions.map((d) => (
                  <div key={d.title} className="border-t border-border/60 pt-5">
                    <dt className="font-display text-lg font-semibold tracking-tight text-foreground">{d.title}</dt>
                    <dd className="mt-2 leading-relaxed text-muted-foreground">{d.body}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          <section className="relative mt-14 overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-card to-secondary/50 p-8 shadow-card" style={{ backdropFilter: "blur(24px) saturate(140%)" }}>
            <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[60%] w-[60%] rounded-full bg-purple-50/40 blur-[100px]" />
            <div className="relative">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">Results</h2>
              <dl className="mt-6 grid gap-6 sm:grid-cols-3">
                {study.results.map((r) => (
                  <div key={r.label}>
                    <dt className="font-display text-3xl font-semibold text-accent">{r.metric}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{r.label}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 leading-relaxed text-muted-foreground">{study.outcome}</p>
            </div>
          </section>

          {study.testimonial ? (
            <figure className="mt-14 border-l-2 border-accent pl-6">
              <blockquote className="font-display text-xl leading-relaxed tracking-tight text-foreground">
                “{study.testimonial.quote}”
              </blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                {study.testimonial.author}
              </figcaption>
            </figure>
          ) : null}

          {study.learnings?.length ? (
            <section className="mt-14">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                What I took away
              </h2>
              <ul className="mt-6 space-y-3">
                {study.learnings.map((l) => (
                  <li key={l} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span aria-hidden className="text-accent">
                      →
                    </span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="mt-14">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">Reflection</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{study.reflection}</p>
          </section>

          {next && next.slug !== study.slug ? (
            <nav className="mt-16 border-t border-border/60 pt-8">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Next case study
              </p>
              <TextLink
                to="/work/$slug"
                params={{ slug: next.slug }}
                showArrow
                className="mt-2 font-display text-2xl font-semibold tracking-tight"
              >
                {next.title}
              </TextLink>
            </nav>
          ) : null}
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
