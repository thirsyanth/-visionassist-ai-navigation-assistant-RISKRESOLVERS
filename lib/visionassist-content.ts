export type VisionAssistMetric = {
  label: string;
  value: string;
  note: string;
};

export type VisionAssistStage = {
  key: string;
  label: string;
  description: string;
  icon: string;
};

export type VisionAssistFeature = {
  title: string;
  description: string;
  icon: string;
};

export type VisionAssistTeamMember = {
  name: string;
  role: string;
  speciality: string;
};

export type VisionAssistTech = {
  label: string;
  detail: string;
};

export const heroMetrics: VisionAssistMetric[] = [
  {
    label: "Realtime detection",
    value: "30 FPS",
    note: "Optimized for live webcam inference and low-latency guidance.",
  },
  {
    label: "Guidance modes",
    value: "Voice + Direction",
    note: "Speaks alerts and direction cues with cooldown-aware announcements.",
  },
  {
    label: "Distance tiers",
    value: "Near / Medium / Far",
    note: "Maps object scale into distance feedback for safer navigation.",
  },
  {
    label: "Accessibility",
    value: "WCAG-minded",
    note: "High contrast, keyboard-friendly, and screen-reader friendly layout.",
  },
];

export const liveDemoHighlights = [
  "Webcam-ready live AI panel",
  "YOLOv8 object labels with confidence",
  "Automatic prerecorded demo fallback",
  "Camera, AI, and voice status indicators",
];

export const architectureStages: VisionAssistStage[] = [
  {
    key: "camera",
    label: "Camera",
    description: "Captures live frames from webcam or demo video source.",
    icon: "camera",
  },
  {
    key: "opencv",
    label: "OpenCV",
    description: "Preprocesses frames for inference, overlay rendering, and motion handling.",
    icon: "scan-eye",
  },
  {
    key: "yolov8",
    label: "YOLOv8",
    description: "Detects people, vehicles, chairs, bottles, and navigation hazards.",
    icon: "sparkles",
  },
  {
    key: "analysis",
    label: "Analysis",
    description: "Calculates direction, confidence, and distance from bounding boxes.",
    icon: "route",
  },
  {
    key: "voice",
    label: "Voice Engine",
    description: "Queues spoken alerts with cooldown logic and no repeated announcements.",
    icon: "audio-waveform",
  },
  {
    key: "dashboard",
    label: "Dashboard",
    description: "Surfaces detections, logs, session metrics, and model status in real time.",
    icon: "layout-dashboard",
  },
];

export const featureHighlights: VisionAssistFeature[] = [
  {
    title: "Realtime object detection",
    description: "Detects everyday obstacles and navigation-relevant classes with visual overlays.",
    icon: "scan-search",
  },
  {
    title: "Voice guidance",
    description: "Speaks concise, context-aware alerts such as left, right, near, and ahead.",
    icon: "mic",
  },
  {
    title: "Emergency mode",
    description: "Escalates critical alerts for stairs, barriers, and sudden proximity changes.",
    icon: "shield-alert",
  },
  {
    title: "Detection history",
    description: "Stores object, confidence, direction, distance, and timestamps for review.",
    icon: "history",
  },
  {
    title: "Model switching",
    description: "Supports YOLOv8n by default with room for custom stairs and barrier models.",
    icon: "switch-camera",
  },
  {
    title: "Accessibility-first UI",
    description: "Dark, high-contrast panels with generous spacing and readable motion states.",
    icon: "accessibility",
  },
];

export const dashboardMetrics = [
  { label: "Current detection", value: "Person ahead" },
  { label: "Confidence", value: "94.8%" },
  { label: "Direction", value: "Center" },
  { label: "Distance", value: "Near" },
  { label: "FPS", value: "29.7" },
  { label: "CPU usage", value: "18%" },
  { label: "Memory usage", value: "1.1 GB" },
  { label: "Voice engine", value: "Speaking" },
];

export const techStack: VisionAssistTech[] = [
  { label: "Next.js", detail: "High-performance UI and server rendering" },
  { label: "Flask", detail: "Lightweight AI inference API layer" },
  { label: "OpenCV", detail: "Frame capture and preprocessing" },
  { label: "YOLOv8", detail: "Real-time object detection backbone" },
  { label: "SQLite", detail: "Detection logs and session history" },
  { label: "Framer Motion", detail: "Fluid startup-grade UI motion" },
];

export const teamMembers: VisionAssistTeamMember[] = [
  {
    name: "Thirsyanth",
    role: "Product & AI Systems",
    speciality: "Architecture, model flow, and demo storytelling",
  },
  {
    name: "Kishore",
    role: "Backend & API Engineering",
    speciality: "Flask services, logging, and data persistence",
  },
  {
    name: "Ramkumar",
    role: "Frontend & UX Engineering",
    speciality: "Next.js UI, accessibility, and motion design",
  },
];

export const screenshots = [
  "Landing Page",
  "Dashboard",
  "Person Detection",
  "Car Detection",
  "Chair Detection",
  "Live AI Demo",
];

export const contactEmail = "thirsyanthv@gmail.com";
export const projectName = "VisionAssist";
export const hackathonName = "HackZen 2026 Open Challenge";
