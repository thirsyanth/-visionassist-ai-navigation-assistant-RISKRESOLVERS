"use client";

import type { LucideIcon } from "lucide-react";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  CameraOff,
  CheckCircle2,
  Mic2,
  Radio,
  Video,
} from "lucide-react";

import { liveDemoHighlights } from "@/lib/visionassist-content";

const badgeMotion = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export function LiveDemoCard() {
  return (
    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/70 shadow-[0_30px_90px_rgba(15,23,42,0.35)] backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
            Live AI demo
          </p>
          <h3 className="mt-1 text-xl font-semibold text-white">Webcam, detection, and voice guidance</h3>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
          <Radio className="h-3.5 w-3.5" aria-hidden="true" />
          Demo fallback ready
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-[420px] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,0.98))] p-5 sm:p-6">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(125,211,252,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.05)_1px,transparent_1px)] bg-[size:22px_22px] opacity-60" />
          <div className="relative flex h-full min-h-[390px] flex-col rounded-[28px] border border-cyan-300/10 bg-slate-950/55 p-4 shadow-inner shadow-cyan-500/10">
            <div className="flex items-center justify-between gap-4 text-xs text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <CameraOff className="h-3.5 w-3.5 text-cyan-200" aria-hidden="true" />
                Camera unavailable - showing prerecorded demo
              </span>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-medium text-cyan-100">
                FPS 29.8
              </span>
            </div>

            <div className="relative mt-4 flex flex-1 items-center justify-center overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(8,145,178,0.26),_rgba(15,23,42,0.8)_45%,_rgba(2,6,23,0.95)_100%)] p-6">
              <div className="absolute left-6 top-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs text-emerald-200 shadow-lg shadow-emerald-500/10">
                YOLOv8 model loaded
              </div>
              <div className="absolute right-6 top-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs text-cyan-200 shadow-lg shadow-cyan-500/10">
                Voice engine ready
              </div>
              <div className="absolute left-8 top-28 h-32 w-24 rounded-2xl border border-cyan-300/50 bg-cyan-400/10 shadow-[0_0_0_1px_rgba(34,211,238,0.15)]" />
              <div className="absolute left-32 top-44 h-28 w-40 rounded-2xl border border-emerald-300/60 bg-emerald-400/10 shadow-[0_0_0_1px_rgba(52,211,153,0.12)]" />
              <div className="absolute right-12 top-36 h-24 w-28 rounded-2xl border border-fuchsia-300/50 bg-fuchsia-400/10 shadow-[0_0_0_1px_rgba(232,121,249,0.12)]" />

              <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-3">
                <motion.div
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-left shadow-[0_12px_30px_rgba(15,23,42,0.25)]"
                  initial="hidden"
                  animate="visible"
                  variants={badgeMotion}
                  transition={{ delay: 0.05 }}
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Current object</p>
                  <p className="mt-1 text-sm font-semibold text-white">Person ahead</p>
                </motion.div>
                <motion.div
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-left shadow-[0_12px_30px_rgba(15,23,42,0.25)]"
                  initial="hidden"
                  animate="visible"
                  variants={badgeMotion}
                  transition={{ delay: 0.12 }}
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Direction</p>
                  <p className="mt-1 text-sm font-semibold text-white">Center / Slight left</p>
                </motion.div>
                <motion.div
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-left shadow-[0_12px_30px_rgba(15,23,42,0.25)]"
                  initial="hidden"
                  animate="visible"
                  variants={badgeMotion}
                  transition={{ delay: 0.18 }}
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Distance</p>
                  <p className="mt-1 text-sm font-semibold text-white">Near</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:border-t-0 lg:border-l">
          <div className="grid gap-3 sm:grid-cols-2">
            <StatusChip icon={CheckCircle2} title="Camera status" value="Connected" />
            <StatusChip icon={CheckCircle2} title="AI model status" value="YOLOv8n active" />
            <StatusChip icon={Mic2} title="Voice status" value="Speaking queue ready" />
            <StatusChip icon={AlertTriangle} title="Emergency mode" value="Standby" />
          </div>

          <div className="mt-6 rounded-[24px] border border-white/10 bg-slate-950/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">Why this matters</p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              {liveDemoHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 px-3 py-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-50 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
            <div className="flex items-start gap-3">
              <Video className="mt-0.5 h-5 w-5 text-cyan-200" aria-hidden="true" />
              <div>
                <p className="font-semibold">Demo Video Coming Soon</p>
                <p className="mt-1 text-sm leading-6 text-cyan-50/80">
                  Replace this placeholder with an MP4 upload or YouTube embed when the final demo is ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusChip({
  icon: Icon,
  title,
  value,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4">
      <div className="flex items-center gap-3 text-slate-300">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{title}</p>
          <p className="mt-1 text-sm font-semibold text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}
