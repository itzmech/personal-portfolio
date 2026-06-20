"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
};

export default function SectionWrapper({
  id,
  children,
  className,
  title,
  subtitle,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28 scroll-mt-20 dot-grid scanline-overlay",
        className
      )}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="mb-12 md:mb-16"
          >
            {title && (
              <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground">
                <span className="text-accent">&gt;</span> {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 max-w-2xl text-foreground-muted">{subtitle}</p>
            )}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  );
}
