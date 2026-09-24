export type Project = {
  id: string;
  title: string;
  /** Short card description. */
  description: string;
  tags: string[];
  /** Real, deployed URL of the project. */
  live: string;
  /** Omit when the repo is private or not meant to be linked. */
  github?: string;
  status: "in-development" | "live";
  /**
   * Path under /public for the card preview image.
   * Add the file when available; the card renders a neutral
   * placeholder block when omitted so nothing 404s.
   */
  image?: string;
  imageAlt?: string;
};

/**
 * Real projects only. Never invent repository URLs — link the GitHub
 * profile instead when no repo URL is confirmed.
 */
export const projects: Project[] = [
  {
    id: "the-atlas",
    title: "The Atlas",
    description:
      "A travel web project focused on discovering destinations and planning trips.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    live: "https://travel-web-green-five.vercel.app",
    status: "in-development",
  },
  {
    id: "hirehub",
    title: "HireHub",
    description:
      "A job discovery platform project currently under development.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    live: "https://hire-hub-tawny.vercel.app/",
    status: "in-development",
  },
];

export type LearningTopic = {
  id: string;
  title: string;
  description: string;
};

/** Hands-on security learning areas — exploration, not expertise. */
export const learningTopics: LearningTopic[] = [
  {
    id: "web-security",
    title: "Web Security",
    description:
      "Learning about OWASP Top 10, common vulnerabilities, and secure coding practices.",
  },
  {
    id: "linux",
    title: "Linux",
    description:
      "Getting comfortable with the terminal, file systems, permissions, and administration.",
  },
  {
    id: "networking",
    title: "Networking",
    description:
      "Understanding how networks and protocols work, packet by packet.",
  },
  {
    id: "ctfs",
    title: "CTFs",
    description:
      "Solving capture-the-flag challenges on TryHackMe and Hack The Box.",
  },
  {
    id: "pentesting",
    title: "Pentesting",
    description:
      "Learning penetration testing methodology and hands-on labs.",
  },
  {
    id: "tryhackme",
    title: "TryHackMe",
    description:
      "Practicing real-world scenarios and improving step by step.",
  },
];
