import { Link } from "@tanstack/react-router";
import { getCoverImage, type CaseStudy } from "@/lib/content";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const isComingSoon = study.comingSoon;

  const inner = (
    <>
      <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-tr from-muted via-background to-blue-50/60">
        <img
          src={getCoverImage(study.cover)}
          alt={`Cover artwork for ${study.title}`}
          loading="lazy"
          width={1200}
          height={900}
          className={`h-full w-full object-cover transition-transform duration-[var(--duration-slow)] [transition-timing-function:var(--ease-out-soft)] ${isComingSoon ? '' : 'group-hover:scale-[1.03]'}`}
        />
        {isComingSoon && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded-full border border-white/20 bg-background/90 px-4 py-2 font-normal text-foreground shadow-sm">
              Coming soon
            </span>
          </div>
        )}
      </div>
      <div className={`flex flex-1 flex-col gap-3 p-6 ${isComingSoon ? 'opacity-80' : ''}`}>
        <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
          {study.role} · {study.year}
        </p>
        <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-card-foreground">
          {study.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{study.subtitle}</p>
        <span className="group/cta mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-foreground interactive group-hover:text-accent">
          {isComingSoon ? (
            <span className="text-muted-foreground">Coming soon</span>
          ) : (
            <>
              Read case study
              <span
                aria-hidden
                className="inline-block transition-transform duration-[var(--duration-base)] [transition-timing-function:var(--ease-out-soft)] group-hover:translate-x-0.5"
              >
                →
              </span>
            </>
          )}
        </span>
      </div>
    </>
  );

  if (isComingSoon) {
    return (
      <div
        className="group flex flex-col overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-card to-secondary/50 cursor-not-allowed"
        style={{ backdropFilter: "blur(24px) saturate(140%)" }}
      >
        {inner}
      </div>
    );
  }

  return (
    <Link
      to="/work/$slug"
      params={{ slug: study.slug }}
      className="group hover-card flex flex-col overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-card to-secondary/50"
      style={{ backdropFilter: "blur(24px) saturate(140%)" }}
    >
      {inner}
    </Link>
  );
}
