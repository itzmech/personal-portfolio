"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

function ProjectPreview({ project }: { project: (typeof projects)[number] }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.imageAlt ?? `${project.title} preview`}
        fill
        sizes="(max-width: 1024px) 100vw, 280px"
        className="object-cover"
      />
    );
  }

  // Neutral placeholder block until a real screenshot is added.
  return (
    <div className="flex h-full items-center justify-center bg-background-alt">
      <span className="font-mono text-xs text-foreground-muted">
        {project.title}
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader

        label="Projects"
        title="Things I've built recently"
        action={
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-accent transition-opacity hover:opacity-80"
          >
            View all on GitHub ↗
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        }
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08}>
            <article className="card-surface h-full overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="relative min-h-[180px] sm:w-[45%] sm:min-h-full">
                  <ProjectPreview project={project} />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <Badge variant="learning">{project.status.replace("-", " ")}</Badge>
                  </div>

                  <p className="text-sm leading-relaxed text-foreground-muted">
                    {project.description}
                  </p>

                  <ul
                    className="mt-4 flex flex-wrap gap-2"
                    aria-label={`${project.title} technologies`}
                  >
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <Badge variant="muted">{tag}</Badge>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-5 pt-6">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent transition-opacity hover:opacity-80"
                    >
                      <ExternalLink size={15} aria-hidden="true" />
                      Live Site ↗
                      <span className="sr-only"> — {project.title} (opens in a new tab)</span>
                    </a>
                    <a
                      href={siteConfig.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-foreground-muted transition-colors hover:text-accent"
                    >
                      <GitHubIcon size={15} />
                      GitHub
                      <span className="sr-only"> — profile (opens in a new tab)</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
