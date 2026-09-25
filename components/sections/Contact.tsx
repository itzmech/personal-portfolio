"use client";

import { Mail } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { socials } from "@/data/socials";
import {
  GitHubIcon,
  LinkedInIcon,
  TryHackMeIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site";

const SOCIAL_ICONS = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  tryhackme: TryHackMeIcon,
} as const;

/**
 * Contact section: direct channels only (email + social links).
 * The message form was removed — the API route and validation stay in
 * place (app/api/contact, lib/contact) if a form is ever wanted again.
 */
export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionHeader label="Contact" title="Let's build something, or talk security." />

      <Reveal className="max-w-xl space-y-8">
        <p className="leading-relaxed text-foreground-muted">
          Have an idea, want to collaborate, or just want to talk about tech
          and security? Reach out on any of these — I read everything.
        </p>

        <a
          href={`mailto:${siteConfig.email}`}
          className="glass-card inline-flex w-full items-center justify-between gap-3 rounded-md px-5 py-4 transition-colors hover:border-accent/60 sm:w-auto sm:min-w-[320px]"
        >
          <span className="flex items-center gap-3">
            <Mail size={18} className="text-accent" aria-hidden="true" />
            <span className="font-mono text-sm text-foreground">
              {siteConfig.email}
            </span>
          </span>
          <span className="text-sm text-foreground-muted">↗</span>
        </a>

        <ul className="grid gap-3 sm:grid-cols-3">
          {socials.map(({ key, href, label }) => {
            const Icon = SOCIAL_ICONS[key];
            return (
              <li key={key}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card group flex items-center justify-center gap-3 rounded-md px-4 py-4 transition-colors hover:border-accent/60"
                >
                  <Icon size={17} aria-hidden="true" />
                  <span className="text-sm text-foreground">{label}</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            );
          })}
        </ul>

        <p className="font-mono text-xs text-foreground-muted">
          &gt; usually replies within a day or two
        </p>
      </Reveal>
    </SectionWrapper>
  );
}
