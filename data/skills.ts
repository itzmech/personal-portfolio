/**
 * Skill levels are honest by design:
 *  - "using"     → used in real projects/coursework
 *  - "learning"  → currently learning (not expertise)
 *  - "exploring" → exploring through labs and practice platforms
 */
export type SkillLevel = "using" | "learning" | "exploring";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillCategory = {
  id: string;
  title: string;
  icon: "code" | "globe" | "shield" | "wrench";
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    icon: "code",
    skills: [
      { name: "Java", level: "using" },
      { name: "Python", level: "using" },
      { name: "C", level: "learning" },
      { name: "JavaScript", level: "learning" },
    ],
  },
  {
    id: "web",
    title: "Web",
    icon: "globe",
    skills: [
      { name: "React", level: "using" },
      { name: "Next.js", level: "using" },
      { name: "Tailwind CSS", level: "using" },
    ],
  },
  {
    id: "security",
    title: "Security",
    icon: "shield",
    skills: [
      { name: "Web Security", level: "exploring" },
      { name: "Linux", level: "exploring" },
      { name: "Networking", level: "exploring" },
      { name: "CTFs", level: "exploring" },
      { name: "Pentesting", level: "exploring" },
      { name: "Red Teaming", level: "exploring" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: "wrench",
    skills: [
      { name: "Git", level: "using" },
      { name: "GitHub", level: "using" },
      { name: "TryHackMe", level: "exploring" },
      { name: "Hack The Box", level: "exploring" },
      { name: "Burp Suite", level: "exploring" },
    ],
  },
];
