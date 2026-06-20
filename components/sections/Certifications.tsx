"use client";

import { motion } from "framer-motion";
import { Award, Clock } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { certifications } from "@/data/certifications";

/**
 * Certifications / Learning Timeline
 * Delete this component import from app/page.tsx if you don't need this section.
 */
export default function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      title="certifications.log"
      subtitle="Courses and certifications — completed and in progress."
      className="bg-background-alt/50"
    >
      <div className="relative">
        <div
          className="absolute left-4 top-0 hidden h-full w-px bg-border md:block"
          aria-hidden="true"
        />

        <ul className="space-y-8">
          {certifications.map((cert, index) => (
            <motion.li
              key={cert.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative md:pl-12"
            >
              <div
                className="absolute left-2.5 top-2 hidden h-3 w-3 rounded-full border-2 border-accent bg-background md:block"
                aria-hidden="true"
              />

              <div className="neon-border rounded-lg bg-card/60 p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    {cert.status === "completed" ? (
                      <Award
                        className="mt-1 shrink-0 text-accent"
                        size={20}
                        aria-hidden="true"
                      />
                    ) : (
                      <Clock
                        className="mt-1 shrink-0 text-amber-400"
                        size={20}
                        aria-hidden="true"
                      />
                    )}
                    <div>
                      <h3 className="font-mono text-lg font-semibold text-foreground">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-foreground-muted">
                        {cert.issuer} &middot; {cert.date}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      cert.status === "completed" ? "security" : "placeholder"
                    }
                  >
                    {cert.status === "completed" ? "completed" : "in progress"}
                  </Badge>
                </div>
                {cert.description && (
                  <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                    {cert.description}
                  </p>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
