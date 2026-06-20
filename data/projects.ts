export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  security?: boolean;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "[Placeholder] Secure Auth System",
    description:
      "JWT-based authentication with rate limiting and OWASP-aligned security headers. Replace with your project.",
    tags: ["Next.js", "Node.js", "JWT", "PostgreSQL"],
    github: "https://github.com/yourusername/project-1",
    live: "https://example.com",
    security: true,
    placeholder: true,
  },
  {
    id: "project-2",
    title: "[Placeholder] E-Commerce Platform",
    description:
      "Full-stack online store with cart, checkout, and admin dashboard. Replace with your project.",
    tags: ["React", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/project-2",
    live: "https://example.com",
    placeholder: true,
  },
  {
    id: "project-3",
    title: "[Placeholder] CTF Writeup Collection",
    description:
      "Documented solutions for HackTheBox and TryHackMe machines. Replace with your writeups.",
    tags: ["Python", "Bash", "Linux", "Networking"],
    github: "https://github.com/yourusername/project-3",
    security: true,
    placeholder: true,
  },
  {
    id: "project-4",
    title: "[Placeholder] Vulnerability Scanner Script",
    description:
      "Automated recon and vulnerability scanning tool for lab environments. Replace with your tool.",
    tags: ["Python", "Nmap", "Security"],
    github: "https://github.com/yourusername/project-4",
    security: true,
    placeholder: true,
  },
  {
    id: "project-5",
    title: "[Placeholder] Task Manager API",
    description:
      "RESTful API with authentication, validation, and comprehensive test coverage. Replace with your project.",
    tags: ["Node.js", "Express", "Jest", "Docker"],
    github: "https://github.com/yourusername/project-5",
    placeholder: true,
  },
  {
    id: "project-6",
    title: "[Placeholder] Portfolio Website",
    description:
      "This site — a dark terminal-themed portfolio built with Next.js and Framer Motion.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://example.com",
    placeholder: true,
  },
];
