type SectionHeaderProps = {
  number: string;
  label: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
};

/** Numbered Stitch-style section header: "01 / ABOUT ME" + heading. */
export default function SectionHeader({
  number,
  label,
  title,
  subtitle,
  action,
}: SectionHeaderProps) {
  return (
    <div className="mb-10 md:mb-12">
      <p className="font-mono text-xs uppercase tracking-wider text-accent">
        {number} / {label}
      </p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          {title}
        </h2>
        {action}
      </div>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}
