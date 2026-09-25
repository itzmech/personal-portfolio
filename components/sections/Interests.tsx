"use client";

import {
  Volleyball,
  Film,
  Guitar,
  Palette,
  Music,
  Compass,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { interests, interestsIntro } from "@/data/interests";

const INTEREST_ICONS = {
  basketball: Volleyball,
  film: Film,
  guitar: Guitar,
  palette: Palette,
  music: Music,
  compass: Compass,
} as const;

/**
 * "Beyond the Code" — a light, personal section between the technical
 * sections and Contact. Deliberately not card-grid-heavy like Skills:
 * compact tinted icon tiles with short casual descriptions.
 */
export default function Interests() {
  return (
    <SectionWrapper id="beyond">
      <SectionHeader

        label="Beyond the Code"
        title="Things I'm into"
        subtitle={interestsIntro}
      />

      <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {interests.map((interest, index) => {
          const Icon = INTEREST_ICONS[interest.icon];
          return (
            <Reveal
              as="li"
              key={interest.id}
              delay={index * 0.05}
              className="group flex items-start gap-4 rounded-lg border border-transparent p-3 transition-colors duration-200 hover:border-border hover:bg-card"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-card-raised text-accent transition-transform duration-200 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                <Icon size={18} />
              </span>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  {interest.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground-muted">
                  {interest.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </SectionWrapper>
  );
}
