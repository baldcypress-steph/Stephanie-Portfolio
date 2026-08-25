import * as React from "react";
import { createLink, type LinkComponent } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const textLinkBase =
  "group inline-flex items-center gap-1.5 font-semibold underline-offset-4 interactive hover:text-accent";

function LinkArrow() {
  return (
    <span
      aria-hidden
      className="inline-block transition-transform duration-[var(--duration-base)] [transition-timing-function:var(--ease-out-soft)] group-hover:translate-x-0.5"
    >
      →
    </span>
  );
}

type BasicTextLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  showArrow?: boolean;
  muted?: boolean;
};

const BasicTextLink = React.forwardRef<HTMLAnchorElement, BasicTextLinkProps>(
  ({ showArrow = false, muted = false, className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          textLinkBase,
          muted ? "text-muted-foreground" : "text-foreground",
          className,
        )}
        {...props}
      >
        {children}
        {showArrow ? <LinkArrow /> : null}
      </a>
    );
  },
);
BasicTextLink.displayName = "BasicTextLink";

const CreatedTextLink = createLink(BasicTextLink);

export const TextLink: LinkComponent<typeof BasicTextLink> = (props) => {
  return <CreatedTextLink preload="intent" {...props} />;
};

export function TextAnchor({
  showArrow = false,
  muted = false,
  className,
  children,
  ...props
}: BasicTextLinkProps) {
  return (
    <BasicTextLink showArrow={showArrow} muted={muted} className={className} {...props}>
      {children}
    </BasicTextLink>
  );
}
