"use client";

import { Hammer, Compass, GraduationCap, Circle } from "lucide-react";
import { siteConfig } from "@/data/site";

const STATUS_ICONS: Record<string, typeof Hammer> = {
  building: Hammer,
  learning: Compass,
  exploring: Circle,
};

/**
 * The structured "terminal" status panel from the Stitch design:
 * whoami, a "currently" list with per-line status icons, and education.
 * Static markup (server-rendered); no typing animation loops.
 */
export default function HeroStatusCard() {
  return (
    <div className="card-surface overflow-hidden font-mono text-sm shadow-2xl">
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <p>
          <span className="text-accent">~</span>/Ansh
        </p>
        <span
          className="inline-block h-2 w-2 rounded-full bg-success"
          aria-hidden="true"
        />
      </div>

      <div className="space-y-5 px-5 py-5">
        <div className="space-y-1.5">
          <p>
            <span className="text-accent">&gt;</span>{" "}
            <span className="text-accent">whoami</span>
          </p>
          <p className="text-foreground">
            Ansh — CS Student &amp; Developer
          </p>
        </div>

        <div className="space-y-1.5">
          <p>
            <span className="text-accent">&gt;</span>{" "}
            <span className="text-accent">currently</span>
          </p>
          <ul className="space-y-1.5">
            {siteConfig.status.map((item) => {
              const Icon = STATUS_ICONS[item.key] ?? Circle;
              return (
                <li key={item.label} className="flex items-center gap-2">
                  <Icon
                    size={13}
                    className="shrink-0 text-foreground-muted"
                    aria-hidden="true"
                  />
                  <span className="w-20 shrink-0 text-xs uppercase tracking-wide text-foreground-muted">
                    {item.key}
                  </span>
                  <span className="text-foreground">{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="space-y-1.5">
          <p className="flex items-center gap-2">
            <GraduationCap
              size={14}
              className="text-accent"
              aria-hidden="true"
            />
            <span className="text-accent">education</span>
          </p>
          <p className="leading-relaxed text-foreground">
            {siteConfig.education.degree}
            <br />
            {siteConfig.education.university}
            <br />
            Graduating in {siteConfig.education.graduationYear}
          </p>
        </div>

        <p className="border-t border-border pt-4 text-success">
          &gt; stay_curious, keep_building
        </p>
      </div>
    </div>
  );
}
