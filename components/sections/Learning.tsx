"use client";

import {
  Shield,
  TerminalSquare,
  Network,
  Flag,
  Crosshair,
  Cloud,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { learningTopics } from "@/data/projects";

const TOPIC_ICONS = {
  "web-security": Shield,
  linux: TerminalSquare,
  networking: Network,
  ctfs: Flag,
  pentesting: Crosshair,
  tryhackme: Cloud,
} as const;

/**
 * "Learning & Exploration" — the honest replacement for a certifications
 * section: it describes what Ansh is actively practicing without
 * claiming any completed credentials.
 */
export default function Learning() {
  return (
    <SectionWrapper id="learning" banded>
      <SectionHeader

        label="Learning & Exploration"
        title="Hands-on practice & security path"
        subtitle="I don't have certifications yet, but I'm putting in the time, solving challenges, and building real skills every day."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {learningTopics.map((topic, index) => {
          const Icon = TOPIC_ICONS[topic.id as keyof typeof TOPIC_ICONS] ?? Flag;
          return (
            <Reveal
              key={topic.id}
              delay={index * 0.05}
              className="card-surface p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card-raised text-accent">
                  <Icon size={17} aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-foreground">
                  {topic.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-foreground-muted">
                {topic.description}
              </p>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.15} className="mt-8">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-border bg-card px-4 py-3">
          <p className="font-mono text-sm text-foreground-muted">
            <span className="mr-2 text-accent">&gt;</span>
            Always learning. Always building.
          </p>
          <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
            Go · Progress Over Perfection
          </p>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
