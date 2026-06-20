"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
};

export default function GlowCard({
  children,
  className,
  as: Component = "div",
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
    >
      <Component
        className={cn(
          "neon-border rounded-lg bg-card/80 p-6 backdrop-blur-sm",
          className
        )}
      >
        {children}
      </Component>
    </motion.div>
  );
}
