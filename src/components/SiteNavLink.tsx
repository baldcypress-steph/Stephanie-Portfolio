import * as React from "react";
import { createLink, type LinkComponent } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export const navLinkClassName =
  "rounded-full px-3 py-1.5 text-sm font-semibold interactive hover:text-foreground hover:bg-secondary/80";

type BasicNavLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const BasicNavLink = React.forwardRef<HTMLAnchorElement, BasicNavLinkProps>(
  ({ className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(navLinkClassName, "text-foreground/70", className)}
        {...props}
      />
    );
  },
);
BasicNavLink.displayName = "BasicNavLink";

const CreatedNavLink = createLink(BasicNavLink);

export const SiteNavLink: LinkComponent<typeof BasicNavLink> = (props) => {
  return (
    <CreatedNavLink
      preload="intent"
      activeProps={{ className: "text-foreground" }}
      inactiveProps={{ className: "text-foreground/70" }}
      {...props}
    />
  );
};

export function SiteNavAnchor({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} className={cn(navLinkClassName, "text-foreground/70", className)} />;
}
