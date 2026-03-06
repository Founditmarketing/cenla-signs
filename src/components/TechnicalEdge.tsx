import { motion } from "motion/react";
import { Smartphone, Maximize, MousePointerClick, Zap } from "lucide-react";

export function TechnicalEdge() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-800">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
          4. Technical Edge{" "}
          <span className="text-zinc-500 block text-2xl md:text-4xl mt-2">
            & Micro-Interactions
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Micro-interactions */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full brutalist-border bg-zinc-900/50 mb-6">
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Modern Micro-Interactions
            </span>
          </div>
          <h3 className="text-3xl font-bold mb-6">
            Elevating the Digital Experience
          </h3>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            Subtle, high-end animations that communicate quality and precision
            before the user even reads a word.
          </p>

          <ul className="space-y-8">
            <li className="flex gap-4">
              <div className="w-12 h-12 rounded-full brutalist-border flex items-center justify-center shrink-0 bg-zinc-900">
                <MousePointerClick className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Material Texture Hovers
                </h4>
                <p className="text-zinc-400">
                  Hovering over "Matte Black Wrap" or "Brushed Aluminum" reveals
                  a subtle, high-res texture overlay, giving a tactile feel to
                  digital elements.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-12 h-12 rounded-full brutalist-border flex items-center justify-center shrink-0 bg-zinc-900">
                <Maximize className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  The "Unwrap" Scroll Animation
                </h4>
                <p className="text-zinc-400">
                  As the user scrolls down the Vehicle Wraps page, a 3D model of
                  a van slowly gets "wrapped" in a custom design, demonstrating
                  the transformation process.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-12 h-12 rounded-full brutalist-border flex items-center justify-center shrink-0 bg-zinc-900">
                <Zap className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  LED "Flicker-On" Effect
                </h4>
                <p className="text-zinc-400">
                  When navigating to the Illuminated Signs section, the headers
                  and key images "flicker on" like a neon sign powering up,
                  creating instant atmosphere.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile-First Constraint */}
        <div className="order-1 lg:order-2 bg-zinc-900 brutalist-border rounded-2xl p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
          <div className="absolute inset-0 tech-grid opacity-20" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full brutalist-border bg-zinc-950 mb-6">
              <Smartphone className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Constraint
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-4">Mobile-First Design</h3>
            <p className="text-zinc-400 max-w-sm mx-auto">
              70% of local business searches happen on the go. The experience
              must be flawless on a 6-inch screen.
            </p>
          </div>

          {/* Mock Mobile Device */}
          <div className="relative z-10 w-64 h-96 bg-zinc-950 rounded-[2rem] brutalist-border-blue p-2 shadow-2xl shadow-blue-500/20">
            <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative bg-zinc-900">
              {/* Status Bar */}
              <div className="h-6 bg-zinc-950 flex justify-center items-center">
                <div className="w-16 h-4 bg-zinc-900 rounded-full" />
              </div>
              {/* Content */}
              <div className="p-4">
                <div className="w-24 h-4 bg-zinc-800 rounded mb-6" />
                <div className="w-full h-32 bg-zinc-800 rounded-xl mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent" />
                  <div className="absolute bottom-2 left-2 w-1/2 h-4 bg-zinc-950 rounded" />
                </div>
                <div className="w-3/4 h-6 bg-zinc-800 rounded mb-2" />
                <div className="w-1/2 h-4 bg-zinc-800 rounded mb-6" />
                <div className="w-full h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <div className="w-24 h-4 bg-zinc-950 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
