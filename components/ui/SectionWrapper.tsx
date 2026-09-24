import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id: string;
  children: ReactNode;
  className?: string;
  /** Alternate section background band for the Stitch rhythm. */
  banded?: boolean;
};

/**
 * Server Component section shell — static markup only.
 * Numbered headers and reveal animations live in SectionHeader / Reveal.
 */
export default function SectionWrapper({
  id,
  children,
  className,
  banded = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20",
        banded && "bg-background-alt",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        {children}
      </div>
    </section>
  );
}
