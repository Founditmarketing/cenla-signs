import { motion } from "motion/react";
import {
  ChevronDown,
  ArrowRight,
  Layers,
  Type,
  Zap,
  MonitorSmartphone,
  PenTool,
  Globe,
  Maximize,
  MousePointerClick,
  Smartphone,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden tech-grid pt-20 pb-10 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/80 to-zinc-950 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full brutalist-border bg-zinc-900/50 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            Design Vision & Implementation Roadmap
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
          <span className="block text-zinc-500">Project:</span>
          <span className="block text-white">Cenla Signs</span>
          <span className="block text-orange-500">Redesign</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-medium mb-12">
          Transforming a local blue-collar powerhouse into a premium,
          industry-leading custom fabrication studio.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <a
            href="#vision"
            className="inline-flex items-center justify-center w-14 h-14 rounded-full brutalist-border hover:brutalist-border-orange hover:text-orange-500 transition-colors duration-300"
          >
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
