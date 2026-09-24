import { siteConfig } from "./site";

export type SocialKey = "github" | "linkedin" | "tryhackme";

export type Social = {
  key: SocialKey;
  label: string;
  href: string;
};

export const socials: Social[] = [
  {
    key: "github",
    label: "GitHub",
    href: siteConfig.social.github,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
  },
  {
    key: "tryhackme",
    label: "TryHackMe",
    href: siteConfig.social.tryhackme,
  },
];
