export const siteConfig = {
  name: "Ansh",
  title: "Ansh — CS Student & Developer",
  role: "CS student & developer",
  tagline:
    "Computer science student building things, exploring the web, and learning cybersecurity.",
  summary:
    "Ansh is a B.Tech Computer Science student at VIT-AP University (Class of 2029) who builds web applications with React and Next.js while learning cybersecurity through CTFs, TryHackMe, and Hack The Box.",
  email: "yansh875@gmail.com",
  openTo: "Open to internships and learning opportunities",

  hero: {
    greeting: "Hey there 👋",
    headlinePrefix: "I'm",
    headlineName: "Ansh.",
    paragraphs: [
      "I build web applications, experiment with AI-assisted coding, and love turning ideas into real projects.",
      "Currently diving deep into web security, Linux, and penetration testing.",
    ],
  },

  education: {
    degree: "B.Tech CSE",
    university: "VIT-AP University",
    graduationYear: "2029",
  },

  /**
   * Resume is intentionally not linked yet — no PDF exists.
   * When a real PDF is added: drop it in `public/resume.pdf`
   * and flip `available` to true.
   */
  resume: {
    available: false,
    url: "/resume.pdf",
  },

  social: {
    github: "https://github.com/itzmech",
    linkedin: "https://www.linkedin.com/in/ansh-yadav-17261a370/",
    tryhackme: "https://tryhackme.com/p/yansh875",
  },

  /**
   * Hero status panel. Keys are the icon names rendered in HeroStatusCard.
   * "learning" and "exploring" states intentionally do NOT claim expertise.
   */
  status: [
    { key: "building", label: "The Atlas" },
    { key: "building", label: "HireHub" },
    { key: "learning", label: "Web Security" },
    { key: "exploring", label: "Linux, Networking, CTFs" },
  ],

  about: {
    title: "Curiosity drives me.",
    paragraphs: [
      "I got into coding somewhat randomly and it quickly became something I genuinely enjoy. I like building useful things and figuring out how they work.",
      "These days I'm focused on building web applications with the help of AI tools and learning cybersecurity in the process.",
    ],
    currentlyExploring: [
      "Web Security",
      "Linux",
      "Networking",
      "CTFs",
      "Penetration Testing",
      "Red Teaming",
    ],
  },

  nav: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Learning", href: "#learning" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
