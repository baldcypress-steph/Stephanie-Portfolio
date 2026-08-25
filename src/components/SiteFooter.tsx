import { site } from "@/lib/content";

export function SiteFooter() {
  const linkedin = site.socials.find((s) => s.label.toLowerCase() === "linkedin");

  return (
    <footer className="border-t border-border/60 bg-white py-12">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <p className="font-display text-base font-semibold tracking-tight text-foreground">
          {site.name}
        </p>
        <ul className="flex items-center gap-5">
          {linkedin ? (
            <li>
              <a
                href={linkedin.href}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="inline-flex items-center text-foreground/60 interactive hover:text-accent"
              >
                {/* Official Bootstrap bi-linkedin */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="h-5 w-5 shrink-0 fill-current"
                  aria-hidden="true"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v4.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            </li>
          ) : null}
          <li>
            <a
              href={`mailto:${site.email}`}
              aria-label="Send Email"
              className="inline-flex items-center text-foreground/60 interactive hover:text-accent"
            >
              {/* Official Bootstrap bi-envelope-fill */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="h-5 w-5 shrink-0 fill-current"
                aria-hidden="true"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414z" />
                <path d="M0 4.697v7.104l5.803-3.558z" />
                <path d="M6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586z" />
                <path d="M15.95 4.697v7.104l-5.803-3.558z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
