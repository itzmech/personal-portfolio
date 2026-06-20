export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL", "Bash"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["React", "Next.js", "Node.js", "Express", "TailwindCSS", "PostgreSQL"],
  },
  {
    title: "Security",
    skills: [
      "Burp Suite",
      "Wireshark",
      "Nmap",
      "Linux",
      "Networking Fundamentals",
      "OWASP Top 10",
    ],
  },
  {
    title: "Other",
    skills: ["Git", "Docker", "CI/CD", "REST APIs", "Agile/Scrum"],
  },
];
