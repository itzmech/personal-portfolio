"use client";

import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlowCard from "@/components/ui/GlowCard";
import Badge from "@/components/ui/Badge";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="projects/"
      subtitle="A selection of my work — placeholder entries marked for easy replacement."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <GlowCard key={project.id} as="article" className="flex flex-col h-full">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {project.security && <Badge variant="security">security</Badge>}
              {project.placeholder && (
                <Badge variant="placeholder">placeholder</Badge>
              )}
            </div>

            <h3 className="font-mono text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-4 border-t border-border pt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-sm text-foreground-muted transition-colors hover:text-accent"
              >
                <GitHubIcon size={16} />
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-sm text-foreground-muted transition-colors hover:text-accent"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Live Demo
                </a>
              )}
            </div>
          </GlowCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
