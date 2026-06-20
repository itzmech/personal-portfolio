export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  status: "completed" | "in-progress";
  description?: string;
};

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2025",
    status: "in-progress",
    description: "Studying core security concepts, cryptography, and incident response.",
  },
  {
    id: "cert-2",
    title: "TryHackMe — Offensive Pentesting",
    issuer: "TryHackMe",
    date: "2024",
    status: "completed",
    description: "Completed learning path covering recon, exploitation, and post-exploitation.",
  },
  {
    id: "cert-3",
    title: "eJPT",
    issuer: "INE / eLearnSecurity",
    date: "2025",
    status: "in-progress",
    description: "Junior penetration tester certification — hands-on exam prep.",
  },
];
