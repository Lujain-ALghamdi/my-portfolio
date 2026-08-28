/**
 * Inline line-icons for skills that have no established brand logo
 * (servo motors, PWM, embedded systems, robotics, 3D printing, …).
 * They share one visual language — 24px grid, 1.7 stroke, round joins —
 * and inherit their colour from the parent via `currentColor`, so they sit
 * naturally next to the Simple Icons brand glyphs used elsewhere.
 */
import type { ReactNode } from "react";

export type SkillIconName =
  | "cog"
  | "broadcast"
  | "chip"
  | "cpu"
  | "wave"
  | "robot"
  | "robotDog"
  | "gauge"
  | "cube"
  | "rotate3d"
  | "printer3d"
  | "network"
  | "scanEye";

const PATHS: Record<SkillIconName, ReactNode> = {
  // Gear — servo / motor
  cog: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" />
    </>
  ),
  // Concentric signal arcs — sensors
  broadcast: (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M7.8 16.2a6 6 0 0 1 0-8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.9 19.1a10 10 0 0 1 0-14.2M19.1 4.9a10 10 0 0 1 0 14.2" />
    </>
  ),
  // Microchip with dense pins — embedded systems
  chip: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="1" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </>
  ),
  // Classic CPU — microcontrollers
  cpu: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </>
  ),
  // Square-wave pulse train — PWM
  wave: <path d="M2 12h3V6h4v12h4V6h4v6h5" />,
  // Bot head — robotics
  robot: (
    <>
      <path d="M12 8V4H9" />
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <path d="M2 14h2M20 14h2M9 13v2M15 13v2" />
    </>
  ),
  // Four-legged robot — quadruped robotics
  robotDog: (
    <>
      <rect x="4" y="8" width="13" height="5" rx="1" />
      <path d="M17 9h2a1 1 0 0 1 1 1v2h-3zM4 9 2 6M6 13v4M9.5 13v4M13 13v4M15.5 13v4" />
    </>
  ),
  // Speedometer — robot motion control
  gauge: (
    <>
      <path d="M3.5 18a10 10 0 1 1 17 0" />
      <path d="m12 13 4-4" />
      <circle cx="12" cy="13" r="1" />
    </>
  ),
  // Isometric cube — CAD / Onshape
  cube: (
    <>
      <path d="M12 2 3 7v10l9 5 9-5V7z" />
      <path d="M12 22V12M12 12 3 7M12 12l9-5" />
    </>
  ),
  // Rotating 3D object — 3D design
  rotate3d: (
    <>
      <path d="M16.5 7.5C15.6 4.2 13.9 2 12 2 9.2 2 7 6.5 7 12s2.2 10 5 10c.3 0 .7-.1 1-.2" />
      <path d="m15.2 13.7 3.8 1.9-1.9 3.8" />
      <path d="M19 15.6c-1.8.9-4.3 1.4-7 1.4-5.5 0-10-2.2-10-5s4.5-5 10-5c4.8 0 8.9 1.7 9.8 4" />
    </>
  ),
  // Extruder over a print bed — 3D printing
  printer3d: (
    <>
      <path d="M5 8V4h14v4" />
      <path d="M12 8v3" />
      <path d="M9.5 11h5l-1.2 3h-2.6z" />
      <rect x="5" y="17" width="14" height="4" rx="1" />
    </>
  ),
  // Small neural network — artificial intelligence
  network: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="m6.8 7 3 3.2M6.8 17l3-3.2M17.2 7l-3 3.2M17.2 17l-3-3.2" />
    </>
  ),
  // Framed eye — computer vision
  scanEye: (
    <>
      <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="1.5" />
      <path d="M5.5 12c1.8-2.7 3.9-4 6.5-4s4.7 1.3 6.5 4c-1.8 2.7-3.9 4-6.5 4s-4.7-1.3-6.5-4Z" />
    </>
  ),
};

export function isSkillIconName(v: string | undefined): v is SkillIconName {
  return !!v && v in PATHS;
}

export default function SkillGlyph({ name, className }: { name: SkillIconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
