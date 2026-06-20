import {
  GitHubIcon,
  LinkedInIcon,
  TryHackMeIcon,
  TwitterIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
};

const socialItems = [
  {
    key: "github",
    href: siteConfig.social.github,
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    key: "linkedin",
    href: siteConfig.social.linkedin,
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    key: "twitter",
    href: siteConfig.social.twitter,
    label: "Twitter / X",
    icon: TwitterIcon,
  },
  {
    key: "tryhackme",
    href: siteConfig.social.tryhackme,
    label: "TryHackMe",
    icon: TryHackMeIcon,
  },
] as const;

export default function SocialLinks({
  className,
  iconSize = 20,
  showLabels = false,
}: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {socialItems.map(({ key, href, label, icon: Icon }) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group inline-flex items-center gap-2 rounded-md border border-border p-2.5 text-foreground-muted transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_15px_var(--accent-dim)]"
          >
            <Icon size={iconSize} />
            {showLabels && (
              <span className="font-mono text-sm">{label}</span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
