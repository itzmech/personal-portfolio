"use client";

import { ArrowRight, Mail } from "lucide-react";
import HeroStatusCard from "@/components/sections/HeroStatusCard";
import SocialLinks from "@/components/ui/SocialLinks";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-20 overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36"
    >
      {/* Night-city skyline: heavily darkened, fading into the page bg */}
      <div className="night-city-bg" aria-hidden="true" />
      <div className="night-city-scrim" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
        <Reveal>
          <p className="mb-3 font-mono text-sm uppercase tracking-wider text-accent">
            {siteConfig.hero.greeting}
          </p>
          <h1 className="text-balance text-4xl font-bold leading-[1.1] text-[#f5f3ee] sm:text-5xl md:text-6xl">
            {siteConfig.hero.headlinePrefix}{" "}
            <span
              className="text-accent"
              style={{ textShadow: "0 0 28px rgba(245, 166, 35, 0.35)" }}
            >
              {siteConfig.hero.headlineName}
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#e8eaee]">
            Computer science student{" "}
            <span className="text-accent">building things</span>, exploring the
            web, and <span className="text-accent">learning cybersecurity</span>.
          </p>

          <div className="mt-4 max-w-lg space-y-2 text-sm leading-relaxed text-foreground-muted">
            {siteConfig.hero.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-medium text-background transition-opacity hover:opacity-90"
            >
              View Projects
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-[#3a4656] bg-[#232c3a]/60 px-5 py-3 font-medium text-[#dbe4f0] backdrop-blur-sm transition-colors hover:border-[#5a6b84] hover:text-white"
            >
              <Mail size={16} aria-hidden="true" />
              Contact Me
            </a>
          </div>

          <div className="mt-10">
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-foreground-muted">
              Find me on
            </p>
            <SocialLinks />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <HeroStatusCard />
        </Reveal>
      </div>
    </section>
  );
}
