export type ProjectVideo = {
  id: string;
  title: string;
  primary?: boolean;
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectMedia = {
  images: ProjectImage[];
  videos: ProjectVideo[];
  docLink?: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
  category: "fullstack" | "mobile" | "iot" | "ai" | "web" | "design" | "robotics";
  media?: ProjectMedia;
  /** Optional featured image rendered inside the project card (root-relative path). */
  image?: string;
  imageAlt?: string;
  /** Optional short demo clips rendered as an in-card gallery (root-relative paths). */
  videos?: string[];
};

export const projects: Project[] = [
  {
    id: "rex-robot-dog",
    title: "Rex-Robot-Dog",
    subtitle: "Arduino Quadruped Robot",
    description:
      "A DIY quadruped robot dog built with Arduino, servo motors, and 3D-printed parts. Rex demonstrates embedded programming and robotic motion through multiple programmed behaviors and interactive movement sequences.",
    highlights: [
      "Four-legged robotic movement controlled with servo motors",
      "Programmed forward and backward leg movement",
      "Sitting behavior",
      "Handshake interaction",
      "Fist-bump gesture",
      "Custom 3D-printed mechanical body and legs",
      "Arduino-based embedded control",
    ],
    tech: ["Arduino", "Servo Motors", "3D Printing", "C++", "Robotics"],
    github: "https://github.com/Lujain-ALghamdi/Rex-Robot-Dog",
    featured: true,
    category: "robotics",
    image: "/projects/rex/rex.jpg",
    imageAlt: "Rex Arduino quadruped robot dog",
    videos: [
      "/projects/rex/IMG_0972.mp4",
      "/projects/rex/IMG_0973.mp4",
      "/projects/rex/IMG_0974.mp4",
    ],
  },
  {
    id: "trainlink",
    title: "TrainLink",
    subtitle: "University Training Management Platform",
    description:
      "A comprehensive full-stack web platform designed to manage and enhance university cooperative training programs by creating a digital connection between students, academic supervisors, training entities, and the University Training Unit.",
    highlights: [
      "Role-based dashboards for students, supervisors, training entities, and university administrators",
      "Training opportunity publishing and management",
      "Student application submission and tracking",
      "Supervisor visit scheduling",
      "Student evaluation and training progress monitoring",
      "University administration and reporting",
    ],
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Lujain-ALghamdi/TrainLink",
    live: "https://trainlink.freedev.app/",
    featured: true,
    category: "fullstack",
  },
  {
    id: "billiard-clash",
    title: "Billiard Clash",
    subtitle: "Classic 8-Ball Pool Game",
    description:
      "A full-stack, TypeScript implementation of classic 8-ball pool. Play against a friend online in real time, or challenge a computer opponent across four difficulty levels, all rendered on an HTML5 Canvas with a from-scratch 2D physics engine and WPA-based rules.",
    highlights: [
      "Player vs Player online multiplayer over Socket.IO with server-authoritative shot validation",
      "Player vs Computer with four AI difficulty levels (Easy to Insane)",
      "From-scratch 2D physics: elastic collisions, rail reflection, rolling friction, pocket detection",
      "Authentic WPA 8-ball rules with full foul handling and ball-in-hand",
    ],
    tech: ["TypeScript", "HTML5 Canvas", "Socket.IO", "CSS"],
    github: "https://github.com/Lujain-ALghamdi/billiard-clash",
    live: "https://billiard-clash.vercel.app/",
    featured: true,
    category: "fullstack",
  },
  {
    id: "smart-vehicle-anti-theft",
    title: "Smart Vehicle Anti-Theft System",
    subtitle: "ESP32 Vehicle Security & Monitoring System",
    description:
      "An ESP32-based vehicle security system that combines a physical keypad lock, tilt-based intrusion detection, and a live web dashboard for remote monitoring and control.",
    highlights: [
      "Keypad-based PIN entry to lock/unlock and arm/disarm the system",
      "Tilt-sensor intrusion detection with automatic alarm triggering",
      "Built-in web dashboard served from the ESP32 with live status and charts",
      "Automatic fallback to Wi-Fi Access Point mode when no network is available",
    ],
    tech: ["ESP32", "Arduino C++", "JavaScript", "Chart.js"],
    github: "https://github.com/Lujain-ALghamdi/smart-vehicle-anti-theft-system",
    featured: true,
    category: "iot",
  },
  {
    id: "health-assistant-app-design",
    title: "Health Assistant App",
    subtitle: "UX/UI Design Case Study",
    description:
      "A mobile app design concept for a personal health assistant, covering onboarding, medication guidance, appointment booking, and in-app chat, designed end-to-end in Figma.",
    highlights: [
      "Full user journey mapped from onboarding to daily use",
      "Medication suggestions via a guided symptom-intake flow",
      "Calendar-based appointment booking with instant confirmation",
      "Chat interface with a health assistant plus medication reminders",
    ],
    tech: ["Figma", "UX/UI Design", "Prototyping"],
    github: "https://github.com/Lujain-ALghamdi/health-assistant-app-design",
    featured: false,
    category: "design",
  },
  {
    id: "arduino-ultrasonic",
    title: "Arduino Ultrasonic Servo Control",
    subtitle: "IoT & Embedded System",
    description:
      "An embedded systems project that uses an ultrasonic sensor, servo motor, and Arduino to detect objects and control physical movement based on distance.",
    highlights: [
      "Ultrasonic distance sensing (HC-SR04)",
      "Servo motor control based on measured distance",
      "Arduino C++ firmware",
    ],
    tech: ["Arduino", "C++", "HC-SR04", "Servo Motor"],
    github: "https://github.com/Lujain-ALghamdi/Arduino-Ultrasonic-Servo-Control",
    featured: false,
    category: "iot",
  },
  {
    id: "luna-ai",
    title: "Luna AI Assistant",
    subtitle: "Voice-Based AI Assistant",
    description:
      "An interactive AI-powered web application that combines speech recognition, AI-generated responses, and text-to-speech to create a conversational voice experience.",
    highlights: [
      "Speech-to-text interaction",
      "AI-powered response workflow",
      "Text-to-speech output",
      "Interactive voice-based user experience",
    ],
    tech: ["Artificial Intelligence", "JavaScript", "Web APIs"],
    github: "https://github.com/Lujain-ALghamdi/luna-ai-assistant",
    featured: false,
    category: "ai",
  },
];

export const githubRepos = [
  { name: "TrainLink", url: "https://github.com/Lujain-ALghamdi/TrainLink", lang: "PHP" },
  { name: "billiard-clash", url: "https://github.com/Lujain-ALghamdi/billiard-clash", lang: "TypeScript" },
  {
    name: "smart-vehicle-anti-theft-system",
    url: "https://github.com/Lujain-ALghamdi/smart-vehicle-anti-theft-system",
    lang: "C++",
  },
  {
    name: "health-assistant-app-design",
    url: "https://github.com/Lujain-ALghamdi/health-assistant-app-design",
    lang: "Figma",
  },
  {
    name: "Arduino-Ultrasonic-Servo-Control",
    url: "https://github.com/Lujain-ALghamdi/Arduino-Ultrasonic-Servo-Control",
    lang: "C++",
  },
  { name: "luna-ai-assistant", url: "https://github.com/Lujain-ALghamdi/luna-ai-assistant", lang: "JavaScript" },
];
