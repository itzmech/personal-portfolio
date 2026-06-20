"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SocialLinks from "@/components/ui/SocialLinks";
import Badge from "@/components/ui/Badge";
import { siteConfig } from "@/data/site";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // mailto: fallback — replace with Formspree, Resend, or your API route:
    // Example Formspree: action="https://formspree.io/f/YOUR_FORM_ID" method="POST"
    const subject = encodeURIComponent(
      `Portfolio contact from ${formState.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <SectionWrapper
      id="contact"
      title="contact.sh"
      subtitle="Have a question or opportunity? Send a message."
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <Badge variant="security">{siteConfig.openTo}</Badge>

          <p className="text-foreground-muted leading-relaxed">
            I&apos;m always interested in connecting with fellow developers,
            security enthusiasts, and teams building meaningful products. Feel
            free to reach out — I typically respond within 48 hours.
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 font-mono text-sm text-accent transition-opacity hover:opacity-80"
          >
            <Mail size={16} aria-hidden="true" />
            {siteConfig.email}
          </a>

          <SocialLinks showLabels />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="neon-border space-y-5 rounded-lg bg-card/60 p-6"
          /*
           * To connect to Formspree instead of mailto:
           * action="https://formspree.io/f/YOUR_FORM_ID"
           * method="POST"
           * Remove onSubmit handler and use native form submission
           *
           * To connect to Resend via API route:
           * Create app/api/contact/route.ts and POST to /api/contact
           */
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-mono text-sm text-foreground-muted"
            >
              name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formState.name}
              onChange={(e) =>
                setFormState((s) => ({ ...s, name: e.target.value }))
              }
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-mono text-sm text-foreground-muted"
            >
              email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formState.email}
              onChange={(e) =>
                setFormState((s) => ({ ...s, email: e.target.value }))
              }
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none"
              placeholder="jane@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-mono text-sm text-foreground-muted"
            >
              message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formState.message}
              onChange={(e) =>
                setFormState((s) => ({ ...s, message: e.target.value }))
              }
              className="w-full resize-y rounded-md border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-accent bg-accent/10 px-6 py-3 font-mono text-sm text-accent transition-all hover:scale-[1.02] hover:bg-accent/20 hover:shadow-[0_0_25px_var(--accent-dim)] sm:w-auto"
          >
            <Send size={16} aria-hidden="true" />
            Send Message
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
