import { projects, githubRepos } from "./projects";

export type SkillMeta = {
  name: string;
  slug?: string;
  color?: string;
  /** Fallback label when no Simple Icons slug */
  monogram?: string;
};

export const skillGroups: { category: string; skills: SkillMeta[] }[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "PHP", slug: "php", color: "777BB4" },
      { name: "C++", slug: "cplusplus", color: "00599C" },
      { name: "C#", slug: "csharp", color: "68217A" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", slug: "html5", color: "E34F26" },
      { name: "CSS3", slug: "css3", color: "1572B6" },
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "Bootstrap", slug: "bootstrap", color: "7952B3" },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "PHP", slug: "php", color: "777BB4" },
      { name: "MySQL", slug: "mysql", color: "4479A1" },
    ],
  },
  {
    category: "AI & Computer Vision",
    skills: [
      { name: "Artificial Intelligence", monogram: "AI", color: "00F0FF" },
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "OpenCV", slug: "opencv", color: "5C3EE8" },
      { name: "Computer Vision", monogram: "CV", color: "FF006E" },
    ],
  },
  {
    category: "IoT & Embedded Systems",
    skills: [
      { name: "Arduino", slug: "arduino", color: "00979D" },
      { name: "C++", slug: "cplusplus", color: "00599C" },
      { name: "Sensors", monogram: "SN", color: "94A3B8" },
      { name: "Servo Control", monogram: "SV", color: "FF006E" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", slug: "git", color: "F05032" },
      { name: "GitHub", slug: "github", color: "FFFFFF" },
      { name: "Visual Studio Code", slug: "visualstudiocode", color: "007ACC" },
      { name: "Linux", slug: "linux", color: "FCC624" },
    ],
  },
  {
    category: "Design & Platforms",
    skills: [
      { name: "Figma", slug: "figma", color: "F24E1E" },
      { name: "WordPress", slug: "wordpress", color: "21759B" },
      { name: "Onshape", slug: "onshape", color: "00B4D8" },
      { name: "3D Design", monogram: "3D", color: "00F0FF" },
    ],
  },
];

/** Extra project links per skill (manual + inferred) */
const MANUAL_PROJECTS: Record<string, string[]> = {
  Onshape: ["Flower-Shaped L Keychain"],
  "3D Design": ["Flower-Shaped L Keychain"],
  "Computer Vision": ["Real-Time Color Recognition"],
  OpenCV: ["Real-Time Color Recognition"],
  "Artificial Intelligence": ["Luna AI Assistant"],
  "Servo Control": ["Arduino Ultrasonic Servo Control"],
  Sensors: ["Arduino Ultrasonic Servo Control"],
  MySQL: ["TrainLink", "User Management System"],
  Bootstrap: ["TrainLink"],
};

const TECH_ALIASES: Record<string, string[]> = {
  JavaScript: ["JavaScript", "HTML", "CSS", "Web APIs"],
  HTML5: ["HTML"],
  CSS3: ["CSS"],
  Python: ["Python", "OpenCV", "Computer Vision"],
  "Computer Vision": ["Computer Vision", "OpenCV"],
  "Artificial Intelligence": ["Artificial Intelligence", "AI"],
};

function techMatchesSkill(skillName: string, tech: string): boolean {
  const aliases = TECH_ALIASES[skillName] ?? [skillName];
  const t = tech.toLowerCase();
  return aliases.some((a) => t.includes(a.toLowerCase()) || a.toLowerCase().includes(t));
}

export function getProjectsForSkill(skillName: string): string[] {
  const found = new Set<string>();

  for (const p of projects) {
    if (p.tech.some((t) => techMatchesSkill(skillName, t))) {
      found.add(p.title);
    }
  }

  for (const r of githubRepos) {
    const lang = r.lang.toLowerCase();
    if (
      (skillName === "C++" && lang === "c++") ||
      (skillName === "Python" && lang === "python") ||
      (skillName === "PHP" && lang === "php") ||
      (skillName === "JavaScript" && lang === "javascript") ||
      (skillName === "Onshape" && lang === "cad")
    ) {
      found.add(r.name);
    }
  }

  for (const extra of MANUAL_PROJECTS[skillName] ?? []) {
    found.add(extra);
  }

  if (skillName === "Git" || skillName === "GitHub") {
    githubRepos.forEach((r) => found.add(r.name));
  }

  if (skillName === "Linux") {
    found.add("Smart Methods coursework & labs");
  }

  return [...found];
}

export function skillIconUrl(meta: SkillMeta): string | null {
  if (!meta.slug) return null;
  return `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${meta.slug}.svg`;
}

/** Flat list for CV / other uses */
export const skillNames = skillGroups.flatMap((g) => g.skills.map((s) => s.name));
