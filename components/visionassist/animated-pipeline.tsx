"use client";

import { motion } from "framer-motion";
import {
  AudioWaveform,
  Camera,
  LayoutDashboard,
  Route,
  ScanEye,
  Sparkles,
} from "lucide-react";

import type { VisionAssistStage } from "@/lib/visionassist-content";

const iconMap = {
  camera: Camera,
  "scan-eye": ScanEye,
  sparkles: Sparkles,
  route: Route,
  "audio-waveform": AudioWaveform,
  "layout-dashboard": LayoutDashboard,
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function AnimatedPipeline({ stages }: { stages: VisionAssistStage[] }) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_100px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
            System architecture
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Animated AI pipeline</h3>
        </div>
        <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-200">
          Live-ready blueprint
        </div>
      </div>

      <motion.div
        className="grid gap-4 lg:grid-cols-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {stages.map((stage, index) => {
          const Icon = iconMap[stage.icon as keyof typeof iconMap];

          return (
            <motion.div
              key={stage.key}
              variants={itemVariants}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-4 text-center shadow-[0_18px_50px_rgba(15,23,42,0.25)] backdrop-blur-md"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h4 className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                {stage.label}
              </h4>
              <p className="mt-2 text-xs leading-6 text-slate-300">{stage.description}</p>

              {index < stages.length - 1 ? (
                <div className="pointer-events-none absolute right-[-18px] top-1/2 hidden h-px w-9 -translate-y-1/2 bg-gradient-to-r from-cyan-400/80 to-transparent lg:block" />
              ) : null}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
