"use client";

import { ReactNode } from "react";
import { m } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to stagger by (0 = no stagger). */
  delay?: number;
  /** Slide-up distance in px. */
  y?: number;
  as?: "div" | "li" | "article";
};

/**
 * Standard subtle section-reveal used across all sections.
 * Respects prefers-reduced-motion by rendering statically.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  as = "div",
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionComponent = m[as];

  return (
    <MotionComponent
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
