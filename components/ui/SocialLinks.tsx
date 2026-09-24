import {
  GitHubIcon,
  LinkedInIcon,
  TryHackMeIcon,
} from "@/components/ui/SocialIcons";
import { socials } from "@/data/socials";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
};

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  tryhackme: TryHackMeIcon,
} as const;

/** Renders the real social links (GitHub, LinkedIn, TryHackMe). */
export default function SocialLinks({
  className,
  iconSize = 20,
  showLabels = false,
}: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {socials.map(({ key, href, label }) => {
        const Icon = iconMap[key];
        return (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} (opens in a new tab)`}
              className="inline-flex items-center gap-2 rounded-md border border-border p-2.5 text-foreground-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon size={iconSize} aria-hidden="true" />
              {showLabels && <span className="font-mono text-sm">{label}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
