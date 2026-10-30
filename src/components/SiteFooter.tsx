import { Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/content";

const iconLinkClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 interactive hover:border-accent hover:text-accent";

export function SiteFooter() {
  const linkedin = site.socials.find((s) => s.label.toLowerCase() === "linkedin");

  return (
    <footer className="border-t border-border/60 bg-white py-12">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <p className="font-display text-base font-semibold tracking-tight text-foreground">
          {site.name}
        </p>
        <ul className="flex items-center gap-3">
          {linkedin ? (
            <li>
              <a
                href={linkedin.href}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className={iconLinkClass}
              >
                <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
              </a>
            </li>
          ) : null}
          <li>
            <a href={`mailto:${site.email}`} aria-label="Send Email" className={iconLinkClass}>
              <Mail className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
