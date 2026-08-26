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
  category: "fullstack" | "mobile" | "iot" | "ai" | "web" | "design";
  media?: ProjectMedia;
};

export const projects: Project[] = [
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
    featured: true,
    category: "ai",
  },
  {
    id: "color-recognition",
    title: "Real-Time Color Recognition",
    subtitle: "Computer Vision Application",
    description:
      "A real-time computer vision application that uses Python and OpenCV to recognize colors through webcam-based image processing.",
    highlights: [
      "Real-time webcam image processing",
      "Color detection and recognition",
      "Computer vision implementation using OpenCV",
    ],
    tech: ["Python", "OpenCV", "Computer Vision"],
    github: "https://github.com/Lujain-ALghamdi/Color-Recognition-OpenCV",
    featured: true,
    category: "ai",
  },
  {
    id: "user-management",
    title: "User Management System",
    subtitle: "PHP & MySQL Web Application",
    description:
      "A responsive web-based user management system for adding, displaying, managing, and updating user information and status.",
    highlights: [
      "Add, edit, and remove user records",
      "Status management and filtering",
      "Responsive PHP & MySQL data layer",
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    github: "https://github.com/Lujain-ALghamdi/User-Management-System-PHP-MySQL",
    featured: false,
    category: "web",
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
    id: "flower-keychain",
    title: "Flower-Shaped L Keychain",
    subtitle: "3D Design Project",
    description:
      "A custom flower-shaped keychain modeled in Onshape with a personalized letter L and designed for 3D printing.",
    highlights: [
      "Modeled in Onshape (CAD)",
      "Personalized letter-L design",
      "Prepared for 3D printing",
    ],
    tech: ["Onshape", "CAD", "3D Design", "3D Printing"],
    github: "https://github.com/Lujain-ALghamdi/Flower-Shaped-L-Keychain",
    featured: false,
    category: "design",
  },
];

export const githubRepos = [
  { name: "TrainLink", url: "https://github.com/Lujain-ALghamdi/TrainLink", lang: "PHP" },
  { name: "luna-ai-assistant", url: "https://github.com/Lujain-ALghamdi/luna-ai-assistant", lang: "JavaScript" },
  { name: "Color-Recognition-OpenCV", url: "https://github.com/Lujain-ALghamdi/Color-Recognition-OpenCV", lang: "Python" },
  {
    name: "User-Management-System-PHP-MySQL",
    url: "https://github.com/Lujain-ALghamdi/User-Management-System-PHP-MySQL",
    lang: "PHP",
  },
  {
    name: "Arduino-Ultrasonic-Servo-Control",
    url: "https://github.com/Lujain-ALghamdi/Arduino-Ultrasonic-Servo-Control",
    lang: "C++",
  },
  {
    name: "Flower-Shaped-L-Keychain",
    url: "https://github.com/Lujain-ALghamdi/Flower-Shaped-L-Keychain",
    lang: "CAD",
  },
];
