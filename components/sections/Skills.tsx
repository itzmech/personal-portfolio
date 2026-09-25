"use client";

import { Code2, Globe, Shield, Wrench } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import { skillCategories } from "@/data/skills";

const CATEGORY_ICONS = {
  code: Code2,
  globe: Globe,
  shield: Shield,
  wrench: Wrench,
} as const;

const LEVEL_LABELS = {
  using: "Using",
  learning: "Learning",
  exploring: "Exploring",
} as const;

export default function Skills() {
  return (
    <SectionWrapper id="skills" banded>
      <SectionHeader

        label="Skills"
        title="Things I work with"
        subtitle="Honest levels — what I use in projects, what I'm learning, and what I'm exploring through labs. No percentages, no inflated claims."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category, index) => {
          const Icon = CATEGORY_ICONS[category.icon];
          return (
            <Reveal
              key={category.id}
              delay={index * 0.06}
              className="card-surface p-5"
            >
              <div className="mb-4 flex items-center gap-2">
                <Icon size={16} className="text-accent" aria-hidden="true" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="text-sm text-foreground">{skill.name}</span>
                    <Badge variant={skill.level}>
                      {LEVEL_LABELS[skill.level]}
                      <span className="sr-only"> — {skill.name}</span>
                    </Badge>
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
