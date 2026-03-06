import { motion } from "motion/react";
import { Palette, Type, Image as ImageIcon } from "lucide-react";

export function VisualIdentity() {
  return (
    <section id="vision" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
          1. The "Signature Brand"{" "}
          <span className="text-blue-500">Visual Identity</span>
        </h2>
        <p className="text-xl text-zinc-400 max-w-3xl font-medium">
          Moving from a "mom-and-pop" aesthetic to a high-end custom fabrication
          studio vibe.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Palette */}
        <motion.div
          whileHover={{ y: -5 }}
          className="brutalist-border bg-zinc-900/50 p-8 rounded-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Palette className="w-24 h-24" />
          </div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-blue-500 rounded-sm" />
            Palette
          </h3>
          <p className="text-zinc-400 mb-8 font-medium">
            Industrial yet sophisticated. High contrast for maximum impact.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-[#0A0A0A] brutalist-border shadow-inner" />
              <div>
                <div className="font-bold">Matte Black</div>
                <div className="text-xs font-mono text-zinc-500">#0A0A0A</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-[#27272A] brutalist-border shadow-inner" />
              <div>
                <div className="font-bold">Industrial Zinc</div>
                <div className="text-xs font-mono text-zinc-500">#27272A</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-[#FF5A00] brutalist-border shadow-inner" />
              <div>
                <div className="font-bold text-blue-500">Safety blue</div>
                <div className="text-xs font-mono text-zinc-500">#FF5A00</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Typography */}
        <motion.div
          whileHover={{ y: -5 }}
          className="brutalist-border bg-zinc-900/50 p-8 rounded-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Type className="w-24 h-24" />
          </div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-blue-500 rounded-sm" />
            Typography
          </h3>
          <p className="text-zinc-400 mb-8 font-medium">
            A high-end pairing emphasizing both bold authority and technical
            precision.
          </p>

          <div className="space-y-8">
            <div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                Primary / Display
              </div>
              <div className="text-4xl font-black tracking-tighter mb-1">
                INTER
              </div>
              <p className="text-sm text-zinc-400">
                Bold, technical sans-serif for power statements.
              </p>
            </div>
            <div className="brutalist-border border-zinc-800 my-4" />
            <div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                Secondary / Specs
              </div>
              <div className="text-2xl font-mono font-bold tracking-tight mb-1">
                JETBRAINS MONO
              </div>
              <p className="text-sm text-zinc-400">
                Refined mono font for technical specs and precision data.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Atmosphere */}
        <motion.div
          whileHover={{ y: -5 }}
          className="brutalist-border bg-zinc-900/50 p-8 rounded-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <ImageIcon className="w-24 h-24" />
          </div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-blue-500 rounded-sm" />
            Atmosphere
          </h3>
          <p className="text-zinc-400 mb-8 font-medium">
            The "Look": Industrial, Brutalist, Premium.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
              <div>
                <strong className="block text-white">Dark Mode Default</strong>
                <span className="text-sm text-zinc-400">
                  Creates a premium, studio-like environment where neon signs
                  and glossy vehicle wraps pop.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
              <div>
                <strong className="block text-white">
                  High-Contrast Photography
                </strong>
                <span className="text-sm text-zinc-400">
                  Dramatic lighting, showcasing sparks, glowing LEDs, and the
                  glossy finish of vinyl wraps.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
              <div>
                <strong className="block text-white">Brutalist Layouts</strong>
                <span className="text-sm text-zinc-400">
                  Large, uncropped images. Visible grid lines. Exposed UI
                  elements that feel like a blueprint or schematic.
                </span>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
