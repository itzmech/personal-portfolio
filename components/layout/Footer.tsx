import SocialLinks from "@/components/ui/SocialLinks";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-alt py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
        <SocialLinks iconSize={18} />
        <p className="font-mono text-sm text-foreground-muted">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
        <p className="text-xs text-foreground-muted">
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-opacity hover:opacity-80"
          >
            Next.js
          </a>
        </p>
      </div>
    </footer>
  );
}
