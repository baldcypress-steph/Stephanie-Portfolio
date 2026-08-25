import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { TextLink } from "@/components/TextLink";
import { Button } from "@/components/ui/button";
import { site, featuredCaseStudies } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — ${site.role}` },
      { name: "description", content: site.tagline },
      { property: "og:title", content: `${site.name} — ${site.role}` },
      { property: "og:description", content: site.tagline },
    ],
  }),
  component: Home,
});

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-70">
      <div className="absolute left-[-10%] top-[-10%] h-[60%] w-[60%] rounded-full bg-blue-50 blur-[140px]" />
      <div className="absolute bottom-[10%] right-[-5%] h-[40%] w-[40%] rounded-full bg-slate-200/50 blur-[120px]" />
      <div className="absolute right-[15%] top-[20%] h-[35%] w-[35%] rounded-full bg-purple-50/60 blur-[100px]" />
      <div className="absolute left-[20%] top-[40%] h-[20%] w-[20%] rounded-full bg-white blur-[60px]" />
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/50 to-background px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-28">
          <HeroBackground />
          <div className="relative mx-auto w-full max-w-6xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-foreground shadow-[0_2px_10px_rgba(0,0,0,0.02)] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {site.availability}
            </p>
            <h1 className="mt-8 max-w-4xl font-display text-4xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {site.tagline}
            </h1>
            <p className="mt-6 max-w-[55ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
              {site.role} based in {site.location}.
            </p>

          </div>
        </section>

        <section className="border-y border-border/60 bg-white/40 py-12 backdrop-blur-md">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:grid-cols-2 sm:px-8">
            {site.capabilities.map((c) => (
              <div key={c.title}>
                <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">
                  {c.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="selected-work"
          className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24"
        >
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
            <h2 className="min-w-0 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Selected work
            </h2>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCaseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
