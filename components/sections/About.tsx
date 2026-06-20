"use client";

import { motion } from "framer-motion";
import { BookOpen, Shield } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { siteConfig } from "@/data/site";

function AvatarPlaceholder() {
  const initials = siteConfig.name
    .replace(/[\[\]]/g, "")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase() || "YN";

  return (
    <div
      className="relative mx-auto flex h-48 w-48 items-center justify-center rounded-lg neon-border bg-gradient-to-br from-accent/20 via-background-alt to-background-alt md:mx-0"
      aria-label={`Profile avatar for ${siteConfig.name}`}
      role="img"
    >
      <div className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,157,0.15),transparent_60%)]" />
      <span className="relative font-mono text-4xl font-bold text-accent">
        {initials}
      </span>
      <Shield
        className="absolute bottom-3 right-3 text-accent/60"
        size={24}
        aria-hidden="true"
      />
    </div>
  );
}

export default function About() {
  return (
    <SectionWrapper
      id="about"
      title="about.md"
      subtitle="A bit about who I am and what drives me."
    >
      <div className="grid gap-12 md:grid-cols-[auto_1fr] md:items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <AvatarPlaceholder />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="space-y-4 text-foreground-muted leading-relaxed">
            {siteConfig.about.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="neon-border flex items-start gap-3 rounded-lg bg-card/60 p-4">
            <BookOpen
              className="mt-0.5 shrink-0 text-accent"
              size={20}
              aria-hidden="true"
            />
            <div>
              <p className="font-mono text-sm text-accent">
                currently_exploring:
              </p>
              <p className="mt-1 text-sm text-foreground-muted">
                {siteConfig.about.currentlyExploring}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
