"use client";

import { Code2 } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader label="About me" title={siteConfig.about.title} />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="space-y-4 leading-relaxed text-foreground-muted">
          {siteConfig.about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <p className="mt-6 inline-block rounded-md border border-border bg-card px-3 py-2 font-mono text-xs text-accent">
            echo &quot;learning, building, improving&quot;
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card-surface p-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                Currently exploring
              </p>
              <Code2 size={16} className="text-accent" aria-hidden="true" />
            </div>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {siteConfig.about.currentlyExploring.map((topic) => (
                <li
                  key={topic}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <span
                    className="inline-block h-1 w-1 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
