"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { ReactNode } from "react";
import { useReducedMotion } from "@/lib/hooks";

/**
 * Wraps the app once (in layout.tsx) so every Framer Motion component
 * loads the small `domAnimation` bundle and globally respects
 * the user's reduced-motion preference.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        {/* When reduced motion is preferred, disable transform animations
            entirely to avoid any residual movement. */}
        <div className={prefersReducedMotion ? "no-motion" : undefined}>
          {children}
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}
