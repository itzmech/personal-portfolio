import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "security" | "placeholder";
  className?: string;
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-mono",
        variant === "default" &&
          "border border-border bg-background-alt text-foreground-muted",
        variant === "security" &&
          "border border-accent/40 bg-accent/10 text-accent",
        variant === "placeholder" &&
          "border border-amber-500/40 bg-amber-500/10 text-amber-400",
        className
      )}
    >
      {children}
    </span>
  );
}
