import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { SiteNavLink, SiteNavAnchor } from "@/components/SiteNavLink";

export function SiteHeader() {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const scrollToWork = () => {
    document
      .getElementById("selected-work")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSelectedWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === "/") {
      scrollToWork();
      return;
    }
    void navigate({ to: "/" }).then(() => {
      requestAnimationFrame(() => setTimeout(scrollToWork, 60));
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/40 bg-white/60 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-1 px-3 py-3 sm:gap-4 sm:px-8 sm:py-4">
        <Link to="/" className="shrink-0 interactive hover:opacity-80">
          <span className="block whitespace-nowrap font-display text-[16px] font-bold tracking-tighter text-foreground sm:text-xl">
            <span className="hidden sm:inline">{site.name}</span>
            <span className="inline sm:hidden">SC</span>
            <span className="text-muted-foreground/50">.</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-[13px] font-semibold sm:gap-2 sm:text-sm">
          <SiteNavAnchor href="/#selected-work" onClick={handleSelectedWork} className="whitespace-nowrap px-2 py-3 sm:px-3 sm:py-2">
            Selected work
          </SiteNavAnchor>
          <SiteNavLink to="/about" className="whitespace-nowrap px-2 py-3 sm:px-3 sm:py-2">About</SiteNavLink>
          <a
  href={`mailto:${site.email}`}
  className="btn-primary group ml-1 flex items-center justify-center whitespace-nowrap rounded-full p-2.5 text-[13px] min-[450px]:px-4 min-[450px]:py-2 sm:ml-0 sm:text-sm"
>
  <span className="hidden min-[450px]:inline min-[450px]:mr-1">Start a conversation</span>
  {/* Up-Right Diagonal Arrow SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    className="h-4 w-4 fill-current transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
    />
  </svg>
</a>
        </nav>
      </div>
    </header>
  );
}
