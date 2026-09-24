import { cn } from "@/lib/utils";
import type { SkillLevel } from "@/data/skills";

type BadgeProps = {
  children: React.ReactNode;
  variant?: SkillLevel | "default" | "muted";
  className?: string;
};

/**
 * Small label chip. Skill-level variants mirror the Stitch design:
 * "using" (solid accent tint), "learning" (amber outline),
 * "exploring" (muted outline).
 */
const VARIANT_CLASSES: Record<BadgeProps["variant"] & string, string> = {
  using: "border border-accent/50 bg-accent-soft text-accent",
  learning: "border border-accent/35 bg-transparent text-accent/90",
  exploring: "border border-border-strong bg-transparent text-foreground-muted",
  default: "border border-border bg-card text-foreground-muted",
  muted: "border border-border bg-transparent text-foreground-muted",
};

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-mono",
        VARIANT_CLASSES[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
