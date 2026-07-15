import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "VisionAssist — AI Navigation Assistant",
  description:
    "VisionAssist is a production-ready AI navigation assistant for visually impaired users, featuring realtime object detection, voice guidance, and a premium accessibility dashboard.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
