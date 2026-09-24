"use client";

import { FormEvent, useState } from "react";
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
import { validateContact } from "@/lib/contact";

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-foreground-muted/60 focus:border-accent focus:outline-none";

const SOCIAL_ICONS = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  tryhackme: TryHackMeIcon,
} as const;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const isSubmitting = status === "submitting";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError(null);

    const { valid, fields } = validateContact(form);
    setFieldErrors(fields);
    if (!valid) {
      const firstInvalid = ["name", "email", "message"].find((k) => fields[k]);
      if (firstInvalid) document.getElementById(firstInvalid)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = (await res.json()) as {
        ok: boolean;
        error?: string;
        fields?: Record<string, string>;
      };

      if (res.ok && json.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setFieldErrors({});
      } else {
        if (json.fields) setFieldErrors(json.fields);
        setServerError(
          json.error ?? "Something went wrong. Please try again later."
        );
        setStatus("error");
      }
    } catch {
      setServerError(
        "Network error — please check your connection and try again."
      );
      setStatus("error");
    }
  }

  return (
    <SectionWrapper id="contact">
      <SectionHeader number="07" label="Contact" title="Let's build something, or talk security." />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="space-y-6">
          <p className="leading-relaxed text-foreground-muted">
            Have an idea, want to collaborate, or just want to talk about tech
            and security? I&apos;d love to hear from you.
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 text-sm text-accent transition-opacity hover:opacity-80"
          >
            <Mail size={16} aria-hidden="true" />
            {siteConfig.email}
          </a>

          <ul className="space-y-3">
            {socials.map(({ key, href, label }) => {
              const Icon = SOCIAL_ICONS[key];
              return (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-sm text-foreground-muted transition-colors hover:text-accent"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground-muted transition-colors group-hover:border-accent group-hover:text-accent">
                      <Icon size={16} />
                    </span>
                    {label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          {status === "success" ? (
            <div
              role="status"
              className="card-surface p-8 text-center"
            >
              <p className="font-mono text-sm text-accent">
                &gt; message sent successfully
              </p>
              <p className="mt-2 text-sm text-foreground-muted">
                Thanks for reaching out — I&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-md border border-border px-4 py-2 font-mono text-sm text-foreground-muted transition-colors hover:border-accent hover:text-accent"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="card-surface space-y-5 p-6"
              aria-describedby="contact-form-status"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-xs text-foreground-muted"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, name: e.target.value }))
                    }
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    className={inputClasses}
                    placeholder="Your name"
                  />
                  {fieldErrors.name && (
                    <p id="name-error" className="mt-1.5 text-sm text-red-400">
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-xs text-foreground-muted"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, email: e.target.value }))
                    }
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    className={inputClasses}
                    placeholder="you@example.com"
                  />
                  {fieldErrors.email && (
                    <p id="email-error" className="mt-1.5 text-sm text-red-400">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs text-foreground-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, message: e.target.value }))
                  }
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={fieldErrors.message ? "message-error" : undefined}
                  className={`${inputClasses} resize-y`}
                  placeholder="Your message..."
                />
                {fieldErrors.message && (
                  <p id="message-error" className="mt-1.5 text-sm text-red-400">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message →"}
              </button>

              <div id="contact-form-status" aria-live="polite">
                {serverError && (
                  <p className="text-center text-sm text-red-400" role="alert">
                    {serverError}
                  </p>
                )}
                <p className="mt-3 text-center text-xs text-foreground-muted">
                  I&apos;ll get back to you as soon as I can. No spam — your
                  info stays with me.
                </p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
