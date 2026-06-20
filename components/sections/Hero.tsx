"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import TerminalTyping from "@/components/sections/TerminalTyping";
import SocialLinks from "@/components/ui/SocialLinks";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen scroll-mt-0 dot-grid scanline-overlay pt-24 pb-16 md:pt-28"
    >
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TerminalTyping />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          <div>
            <p className="mb-2 font-mono text-sm text-accent">
              {"// initialize portfolio.exe"}
            </p>
            <h1 className="font-mono text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
              Hi, I&apos;m{" "}
              <span className="text-accent neon-text-glow">{siteConfig.name}</span>
            </h1>
            <p className="mt-4 max-w-lg text-lg text-foreground-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md border border-accent bg-accent/10 px-6 py-3 font-mono text-sm text-accent transition-all hover:scale-105 hover:bg-accent/20 hover:shadow-[0_0_25px_var(--accent-dim)]"
            >
              <ArrowDown size={16} aria-hidden="true" />
              View Projects
            </a>
            <a
              href={siteConfig.resumeUrl}
              download
              className="group inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-mono text-sm text-foreground transition-all hover:scale-105 hover:border-accent hover:text-accent hover:shadow-[0_0_25px_var(--accent-dim)]"
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
}
