import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-alt py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
        <p className="font-mono text-sm text-foreground">
          <span className="text-accent">~</span>/ansh{" "}
          <span className="ml-2 text-xs text-foreground-muted">
            building · learning · improving
          </span>
        </p>
        <p className="font-mono text-xs text-foreground-muted">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
