export const siteConfig = {
  name: "[Your Name]",
  title: "[Your Name] — Software Developer",
  role: "Software Developer",
  tagline: "Building secure web apps & breaking things (ethically).",
  summary:
    "Full-stack developer with a passion for cybersecurity — from React apps to penetration testing labs.",
  email: "your.email@example.com",
  resumeUrl: "/resume.pdf", // Replace with your actual resume path
  openTo: "Open to internship & full-time roles",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    tryhackme: "https://tryhackme.com/p/yourusername",
  },
  terminal: {
    interests: "Web Development, Cybersecurity, CTF Challenges, Open Source",
  },
  about: {
    bio: [
      "I'm a software developer who loves building clean, performant web applications with modern tools like React and Next.js.",
      "My interest in cybersecurity started with CTF challenges and grew into a serious focus on secure coding, threat modeling, and offensive security fundamentals.",
      "I enjoy bridging the gap between development and security — writing code that's both functional and hardened against real-world threats.",
    ],
    currentlyExploring:
      "Currently studying for CompTIA Security+ and completing TryHackMe's Offensive Pentesting path.",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certs", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
