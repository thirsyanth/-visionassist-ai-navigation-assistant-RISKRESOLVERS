"use client";

import type { LucideIcon } from "lucide-react";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Accessibility,
  AlertTriangle,
  BarChart3,
  BatteryCharging,
  Brain,
  Camera,
  CheckCircle2,
  Cpu,
  Eye,
  Gauge,
  History,
  LayoutDashboard,
  Mail,
  MapPinned,
  Mic,
  MonitorSmartphone,
  PhoneCall,
  Radar,
  ScanSearch,
  ShieldAlert,
  Sparkles,
  SwitchCamera,
  Users,
  Video,
  Workflow,
} from "lucide-react";

import { AnimatedPipeline } from "@/components/visionassist/animated-pipeline";
import { LiveDemoCard } from "@/components/visionassist/live-demo-card";
import { SectionHeading } from "@/components/visionassist/section-heading";
import {
  architectureStages,
  contactEmail,
  dashboardMetrics,
  featureHighlights,
  heroMetrics,
  hackathonName,
  projectName,
  screenshots,
  techStack,
  teamMembers,
} from "@/lib/visionassist-content";

const featureIconMap = {
  "scan-search": ScanSearch,
  mic: Mic,
  "shield-alert": ShieldAlert,
  history: History,
  "switch-camera": SwitchCamera,
  accessibility: Accessibility,
} as const;

const workflow = [
  "Capture live webcam frames through the dashboard.",
  "Preprocess the stream with OpenCV for cleaner inference.",
  "Detect objects using YOLOv8n or a custom safety model.",
  "Analyze direction and distance from the bounding box geometry.",
  "Announce actionable voice guidance and store the detection in SQLite.",
];

const modelCapabilities = [
  {
    title: "Default model",
    value: "YOLOv8n",
    detail: "Fast, lightweight inference tuned for realtime navigation guidance.",
    icon: Sparkles,
  },
  {
    title: "Custom classes",
    value: "Stairs + Barrier",
    detail: "Prepared for future Roboflow training with accessibility-focused hazards.",
    icon: MapPinned,
  },
  {
    title: "Execution mode",
    value: "GPU / CPU fallback",
    detail: "Automatically detects hardware availability and falls back safely.",
    icon: Cpu,
  },
];

const screenshotsGrid = screenshots.map((item, index) => ({
  title: item,
  accent:
    index % 3 === 0
      ? "from-cyan-400/20 to-sky-500/5"
      : index % 3 === 1
        ? "from-fuchsia-400/20 to-purple-500/5"
        : "from-emerald-400/20 to-teal-500/5",
}));

const sectionMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function VisionAssistLanding() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.14),_transparent_22%),linear-gradient(180deg,#020617_0%,#020617_65%,#07111f_100%)] text-white">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-40 mb-8 rounded-[28px] border border-white/10 bg-slate-950/60 px-4 py-3 shadow-[0_18px_60px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                <Eye className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                  {hackathonName}
                </p>
                <h1 className="text-lg font-semibold tracking-tight text-white">{projectName}</h1>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
              {[
                ["Live Demo", "#live-demo"],
                ["Architecture", "#architecture"],
                ["Dashboard", "#dashboard"],
                ["Team", "#team"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-100"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <motion.section
          className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <motion.div variants={sectionMotion} className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Real-time AI navigation for the visually impaired
            </div>

            <div className="space-y-5">
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                See the world through intelligent guidance with <span className="text-cyan-300">VisionAssist</span>.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                A production-grade AI navigation assistant that detects obstacles, estimates distance,
                identifies direction, and speaks clear guidance in real time through a modern accessibility-first dashboard.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#live-demo"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_50px_rgba(34,211,238,0.25)] transition hover:translate-y-[-1px] hover:bg-cyan-300"
              >
                Explore Live AI Demo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#architecture"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-100"
              >
                View Architecture
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_18px_50px_rgba(15,23,42,0.18)] backdrop-blur"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/70">{metric.label}</p>
                  <p className="mt-3 text-lg font-semibold text-white">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{metric.note}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={sectionMotion} className="relative">
            <div className="absolute inset-0 -z-10 rounded-[36px] bg-cyan-400/10 blur-3xl" />
            <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_30px_100px_rgba(15,23,42,0.35)] backdrop-blur-xl">
              <div className="rounded-[28px] border border-white/10 bg-slate-950/55 p-5">
                <div className="flex items-center justify-between gap-3 text-xs text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    <BatteryCharging className="h-3.5 w-3.5 text-emerald-300" aria-hidden="true" />
                    Low-latency demo shell
                  </span>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-medium text-cyan-100">
                    Accessibility mode enabled
                  </span>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <MiniStat icon={Camera} label="Camera" value="Connected" />
                  <MiniStat icon={Brain} label="AI model" value="YOLOv8n" />
                  <MiniStat icon={Mic} label="Voice" value="Queue ready" />
                  <MiniStat icon={Gauge} label="FPS target" value="30 fps" />
                </div>
                <div className="mt-5 rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.2),_transparent_25%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,0.98))] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
                        Dashboard preview
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">Live guidance panel</h3>
                    </div>
                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                      Session active
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {dashboardMetrics.slice(0, 6).map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{metric.label}</p>
                        <p className="mt-2 text-base font-semibold text-white">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <section id="live-demo" className="mt-20 scroll-mt-28 space-y-6">
          <SectionHeading
            eyebrow="Live AI demonstration"
            title="Realtime webcam feed, bounding boxes, voice feedback, and fallback demo video."
            description="The demo surface is designed for hackathon judges and public showcases: it clearly communicates camera status, model state, detection history, and what the assistant is saying at any moment."
          />
          <LiveDemoCard />
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-xl"
          >
            <SectionHeading
              eyebrow="Problem statement"
              title="Traditional mobility aids detect contact, not context."
              description="White canes and similar tools are essential, but they cannot proactively identify objects, estimate risk, or tell users what is ahead, to the left, or to the right before contact occurs."
            />
            <div className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
              {[
                "Users need earlier awareness of obstacles, vehicles, and safe walking paths.",
                "Directional guidance must be short, precise, and accessible during movement.",
                "Voice alerts should avoid repetition and remain calm under frequent detections.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/5 bg-slate-950/55 px-4 py-3">
                  <AlertTriangle className="mt-1 h-4 w-4 text-amber-300" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[32px] border border-cyan-400/10 bg-cyan-400/5 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-xl"
          >
            <SectionHeading
              eyebrow="Solution overview"
              title="VisionAssist converts live vision into actionable spoken guidance."
              description="The assistant captures frames, detects everyday objects, infers where they are, estimates how close they are, and stores the full trail for analysis and future model improvement."
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["Realtime object detection", "Detects people, cars, buses, bikes, chairs, bottles, backpacks, laptops, and phones."],
                ["Direction + distance", "Splits the frame into left, center, and right zones and classifies nearby, medium, or far."],
                ["Voice guidance", "Speaks short alerts like ‘Person ahead’ or ‘Car on your left’ with cooldown protection."],
                ["Detection history", "Logs object, confidence, direction, distance, session ID, and timestamp for review."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-slate-950/55 p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-200" aria-hidden="true" />
                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="architecture" className="mt-20 scroll-mt-28 space-y-6">
          <SectionHeading
            eyebrow="Animated AI architecture"
            title="From camera stream to user guidance in a smooth, explainable pipeline."
            description="Every stage is represented as a distinct system layer so the judges can quickly understand how the product processes vision, makes decisions, and delivers audio feedback."
          />
          <AnimatedPipeline stages={architectureStages} />
        </section>

        <section className="mt-20 space-y-6">
          <SectionHeading
            eyebrow="Key features"
            title="Built like a startup product, not a demo sketch."
            description="The product surface is designed to communicate reliability, accessibility, and polish from the very first impression."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featureHighlights.map((feature) => {
              const Icon = featureIconMap[feature.icon as keyof typeof featureIconMap];

              return (
                <div
                  key={feature.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_60px_rgba(15,23,42,0.2)] backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="dashboard" className="mt-20 scroll-mt-28 space-y-6">
          <SectionHeading
            eyebrow="Dashboard preview"
            title="Premium analytics-style interface for live monitoring and session review."
            description="The dashboard groups the live camera, status indicators, detection history, performance counters, and model status into a clean, judge-friendly interface."
          />
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_24px_90px_rgba(15,23,42,0.26)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">Live camera + AI state</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">Command center</h3>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                  Stable session
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {dashboardMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{metric.label}</p>
                    <p className="mt-3 text-lg font-semibold text-white">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-cyan-400/10 bg-cyan-400/5 p-6 shadow-[0_24px_90px_rgba(15,23,42,0.22)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-6 w-6 text-cyan-200" aria-hidden="true" />
                <h3 className="text-2xl font-semibold text-white">Session analytics</h3>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  ["Total objects detected", "148"],
                  ["Detection history entries", "92"],
                  ["Voice alerts spoken", "41"],
                  ["Emergency alerts", "3"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/55 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-slate-300">{label}</span>
                      <span className="text-base font-semibold text-white">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 space-y-6">
          <SectionHeading
            eyebrow="AI model information"
            title="Default YOLOv8n with a clean path for custom training and model switching."
            description="The product is ready for a lightweight base model today and can evolve into stair and barrier-specific safety models when your dataset is prepared."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {modelCapabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{item.title}</p>
                      <h3 className="mt-1 text-lg font-semibold text-white">{item.value}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-20 space-y-6">
          <SectionHeading
            eyebrow="Workflow"
            title="A simple detection-to-guidance loop that users can understand at a glance."
            description="The workflow is intentionally explainable so judges, mentors, and future users can trust how the assistant behaves in real time."
          />
          <div className="grid gap-4 lg:grid-cols-5">
            {workflow.map((step, index) => (
              <div key={step} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-semibold text-cyan-100">
                    {index + 1}
                  </span>
                  <Workflow className="h-5 w-5 text-cyan-200" aria-hidden="true" />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 space-y-6">
          <SectionHeading
            eyebrow="Screenshots gallery"
            title="Professional placeholders ready for your final captures."
            description="Each card below is a dedicated slot for the landing page, dashboard, detection states, and voice alert visuals used during the final demo and GitHub documentation."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {screenshotsGrid.map((shot) => (
              <div
                key={shot.title}
                className={`min-h-48 rounded-[28px] border border-white/10 bg-gradient-to-br ${shot.accent} p-5 shadow-[0_18px_60px_rgba(15,23,42,0.2)]`}
              >
                <div className="flex h-full min-h-40 flex-col justify-between rounded-[22px] border border-white/10 bg-slate-950/70 p-5 backdrop-blur">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 text-cyan-100">
                      <LayoutDashboard className="h-5 w-5" aria-hidden="true" />
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Screenshot slot
                      </span>
                    </div>
                    <Video className="h-5 w-5 text-cyan-200" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{shot.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Replace this placeholder with a polished capture from your final product demo.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="team" className="mt-20 scroll-mt-28 space-y-6">
          <SectionHeading
            eyebrow="Team members"
            title="Built by RISKRESOLVERS for accessibility impact and hackathon excellence."
            description="The team structure is ready for your final presentation, documentation, and GitHub repository branding."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                  <Users className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-cyan-200/90">{member.role}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{member.speciality}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 space-y-6">
          <SectionHeading
            eyebrow="Technology stack"
            title="Frontend polish with a scalable AI backend and durable persistence layer."
            description="The stack follows the hackathon brief while keeping a professional roadmap toward production deployment."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {techStack.map((tech) => (
              <div key={tech.label} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                    <MonitorSmartphone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{tech.label}</h3>
                    <p className="text-sm text-slate-400">Core layer</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{tech.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <SectionHeading
              eyebrow="Future scope"
              title="A roadmap that can grow into a commercial accessibility platform."
              description="The architecture is designed to expand into custom model training, route-aware navigation, NGO deployments, and smart city accessibility programs."
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Custom stair and barrier detector training",
                "Mobile app companion for outdoor navigation",
                "Cloud sync for session analytics and model updates",
                "Hospital, NGO, and rehabilitation center deployments",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/55 p-4 text-sm leading-7 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div id="contact" className="scroll-mt-28 rounded-[32px] border border-cyan-400/10 bg-cyan-400/5 p-6 backdrop-blur-xl">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s make navigation safer and smarter."
              description="Use the project contact address for hackathon communication, demo coordination, and follow-up discussions."
            />
            <div className="mt-6 space-y-4 rounded-[28px] border border-white/10 bg-slate-950/55 p-5">
              <ContactRow icon={Mail} label="Email" value={contactEmail} />
              <ContactRow icon={PhoneCall} label="Team" value="RISKRESOLVERS" />
              <ContactRow icon={Radar} label="Project" value={projectName} />
            </div>
          </div>
        </section>

        <footer className="mt-20 rounded-[32px] border border-white/10 bg-slate-950/60 px-6 py-5 text-sm text-slate-400 backdrop-blur-xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>© 2026 VisionAssist — RISKRESOLVERS.</p>
            <p>Built for {hackathonName} with accessibility-first design.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}

function MiniStat({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{label}</p>
          <p className="mt-2 text-base font-semibold text-white">{value}</p>
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{label}</p>
        <p className="mt-1 text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}
