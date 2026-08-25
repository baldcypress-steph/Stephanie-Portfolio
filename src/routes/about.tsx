import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { site, portrait, landscape1, landscape2, landscape3, landscape4 } from "@/lib/content";

const title = `About — ${site.name}`;
const description = site.about.paragraphs[0]?.slice(0, 155) ?? site.tagline;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

function About() {
  const { about } = site;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="pointer-events-none absolute left-[-10%] top-[-5%] -z-10 h-[35%] w-[35%] rounded-full bg-purple-50/50 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-[10%] right-[-5%] -z-10 h-[30%] w-[30%] rounded-full bg-blue-50/50 blur-[140px]" />

        <div className="w-full">
          <h1 className="font-display text-4xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-5xl">
            About me
          </h1>
          <div className="mt-8 space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-rows-2">
          {/* Main Portrait */}
          <figure className="group relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-card to-secondary/50 shadow-card col-span-2 sm:row-span-2" style={{ backdropFilter: "blur(24px) saturate(140%)" }}>
            <img
              src={portrait}
              alt={about.portraitAlt}
              className="h-full w-full object-cover transition-transform duration-[var(--duration-slow)] [transition-timing-function:var(--ease-out-soft)] group-hover:scale-105"
            />
          </figure>
          
          {/* Landscape 1 */}
          <figure 
            className="relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-card to-secondary/50 shadow-sm col-span-1 sm:col-span-2 md:col-span-1 cursor-pointer" 
            style={{ backdropFilter: "blur(24px) saturate(140%)" }}
            onClick={() => setSelectedImage(landscape1)}
          >
            <img
              src={landscape1}
              alt="Landscape photography 1"
              className="h-full w-full object-cover aspect-[4/3] sm:aspect-square transition-transform duration-[var(--duration-slow)] [transition-timing-function:var(--ease-out-soft)]"
            />
          </figure>

          {/* Landscape 2 */}
          <figure 
            className="relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-card to-secondary/50 shadow-sm col-span-1 sm:col-span-2 md:col-span-1 cursor-pointer" 
            style={{ backdropFilter: "blur(24px) saturate(140%)" }}
            onClick={() => setSelectedImage(landscape2)}
          >
            <img
              src={landscape2}
              alt="Landscape photography 2"
              className="h-full w-full object-cover aspect-[4/3] sm:aspect-square transition-transform duration-[var(--duration-slow)] [transition-timing-function:var(--ease-out-soft)]"
            />
          </figure>

          {/* Landscape 3 */}
          <figure 
            className="relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-card to-secondary/50 shadow-sm col-span-1 sm:col-span-2 md:col-span-1 cursor-pointer" 
            style={{ backdropFilter: "blur(24px) saturate(140%)" }}
            onClick={() => setSelectedImage(landscape3)}
          >
            <img
              src={landscape3}
              alt="Landscape photography 3"
              className="h-full w-full object-cover aspect-[4/3] sm:aspect-square transition-transform duration-[var(--duration-slow)] [transition-timing-function:var(--ease-out-soft)]"
            />
          </figure>

          {/* Landscape 4 */}
          <figure 
            className="relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-card to-secondary/50 shadow-sm col-span-1 sm:col-span-2 md:col-span-1 cursor-pointer" 
            style={{ backdropFilter: "blur(24px) saturate(140%)" }}
            onClick={() => setSelectedImage(landscape4)}
          >
            <img
              src={landscape4}
              alt="Landscape photography 4"
              className="h-full w-full object-cover aspect-[4/3] sm:aspect-square transition-transform duration-[var(--duration-slow)] [transition-timing-function:var(--ease-out-soft)]"
            />
          </figure>
        </div>

        <section className="mt-20 border-t border-border/60 pt-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            Experience
          </h2>
          <Accordion type="single" collapsible className="mt-6">
            {about.experience.map((e) => (
              <AccordionItem key={`${e.company}-${e.period}`} value={`${e.company}-${e.period}`}>
                <AccordionTrigger className="text-left">
                  <span className="grid gap-1 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-baseline sm:gap-8">
                    <span className="text-sm text-muted-foreground">{e.period}</span>
                    <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                      {e.role} · {e.company}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:pl-[12rem]">
                    {e.summary}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="mt-20 border-t border-border/60 pt-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            Skills & tools
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {about.skills.map((group) => (
              <div key={group.group}>
                <h3 className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {group.group}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border/60 bg-white/80 px-3 py-1 text-sm text-foreground shadow-sm backdrop-blur-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mt-20 overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-card to-secondary/50 p-8 sm:p-12 shadow-card" style={{ backdropFilter: "blur(24px) saturate(140%)" }}>
          <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[60%] w-[60%] rounded-full bg-blue-50/40 blur-[100px]" />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Want to know more?
            </h2>
            <p className="mt-3 max-w-[50ch] text-base leading-relaxed text-muted-foreground">
              Happy to share my full resume or talk through any of the work above.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="pill" size="pill">
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent("Resume request")}&body=${encodeURIComponent("Hi " + site.name + ", could you send over your resume?")}`}
                >
                  Request my resume
                </a>
              </Button>
              <Button asChild variant="glass" size="pill">
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent("Let's talk")}`}
                >
                  Get in touch
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-border/60 pt-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            Currently
          </h2>
          <ul className="mt-6 space-y-2">
            {about.currently.map((c) => (
              <li key={c} className="text-base text-muted-foreground">
                {c}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute right-4 top-4 rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/70 hover:text-gray-200 sm:right-8 sm:top-8"
            onClick={() => setSelectedImage(null)}
            aria-label="Close fullscreen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          <img 
            src={selectedImage} 
            alt="Fullscreen view" 
            className="max-h-full max-w-full rounded-md object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
}
