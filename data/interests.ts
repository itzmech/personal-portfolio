/**
 * Personal interests outside programming/cybersecurity.
 * Informational only — no skill levels, achievements, or links.
 * Do not add items Ansh hasn't mentioned.
 */
export type InterestIcon =
  | "basketball"
  | "film"
  | "guitar"
  | "palette"
  | "music"
  | "compass";

export type Interest = {
  id: string;
  title: string;
  description: string;
  icon: InterestIcon;
};

export const interestsIntro =
  "Outside of code, I like keeping things creative and active.";

export const interests: Interest[] = [
  {
    id: "basketball",
    title: "Basketball",
    description: "Something I enjoy following and playing.",
    icon: "basketball",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "I enjoy putting clips together and experimenting with edits.",
    icon: "film",
  },
  {
    id: "guitar",
    title: "Guitar",
    description: "Learning and spending time with music.",
    icon: "guitar",
  },
  {
    id: "canva-design",
    title: "Canva / Design",
    description: "Playing around with visual design and creative ideas.",
    icon: "palette",
  },
  {
    id: "music",
    title: "Music",
    description: "A big part of how I spend downtime.",
    icon: "music",
  },
  {
    id: "exploring",
    title: "Exploring",
    description: "Always picking up something new just because it looks interesting.",
    icon: "compass",
  },
];
