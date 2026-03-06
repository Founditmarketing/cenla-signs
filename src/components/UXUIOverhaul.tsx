import { motion } from "motion/react";
import {
  MousePointerClick,
  Filter,
  Zap,
  Play,
  ArrowRight,
  Layers,
} from "lucide-react";

export function UXUIOverhaul() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-800">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
          2. UX/UI Overhaul{" "}
          <span className="text-zinc-500 block text-2xl md:text-4xl mt-2">
            (The "Frictionless Conversion" Path)
          </span>
        </h2>
      </div>

      <div className="space-y-24">
        {/* Hero 2.0 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full brutalist-border bg-zinc-900/50 mb-6">
              <Play className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Hero 2.0 Concept
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-6">
              High-Speed Fabrication Loop
            </h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              A background video loop of sparks flying during metal fabrication,
              or a stunning 3-D slider of their best vehicle wraps. The
              power-statement headline dominates the screen, establishing
              immediate authority.
            </p>
            <div className="brutalist-border p-8 bg-zinc-900/30 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent pointer-events-none" />
              <div className="text-xs font-mono text-orange-500 mb-4 uppercase tracking-widest">
                Power Statement Headline
              </div>
              <h4 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
                We Don't Just Make Signs.
                <br />
                <span className="text-orange-500">We Make You Unmissable.</span>
              </h4>
            </div>
          </div>
          <div className="order-1 lg:order-2 aspect-video bg-zinc-900 brutalist-border rounded-2xl relative overflow-hidden group flex items-center justify-center">
            <div className="absolute inset-0 tech-grid opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
            <Play className="w-20 h-20 text-zinc-700 group-hover:text-orange-500 transition-colors duration-500 relative z-10" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
              <div className="text-xs font-mono text-zinc-500 uppercase">
                B-Roll: Welding & Wrapping
              </div>
              <div className="w-1/3 h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 w-1/2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Proof of Work Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-square md:aspect-video lg:aspect-square bg-zinc-900 brutalist-border rounded-2xl relative overflow-hidden p-6 flex flex-col">
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
              {["All", "Illuminated", "Vehicle Wraps", "Wayfinding"].map(
                (tag, i) => (
                  <div
                    key={tag}
                    className={`px-4 py-2 rounded-full text-xs font-mono uppercase whitespace-nowrap ${i === 1 ? "bg-orange-500 text-black font-bold" : "brutalist-border text-zinc-400"}`}
                  >
                    {tag}
                  </div>
                ),
              )}
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="bg-zinc-800 rounded-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="text-white font-bold">
                    Neon Channel Letters
                  </div>
                  <div className="text-xs font-mono text-orange-500">
                    View Specs <ArrowRight className="inline w-3 h-3" />
                  </div>
                </div>
              </div>
              <div className="bg-zinc-800 rounded-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="text-white font-bold">LED Monument</div>
                  <div className="text-xs font-mono text-orange-500">
                    View Specs <ArrowRight className="inline w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full brutalist-border bg-zinc-900/50 mb-6">
              <Filter className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Portfolio Concept
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-6">
              The "Proof of Work" Gallery
            </h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Redesigning the gallery to feel like a high-end portfolio rather
              than just a folder of photos. We introduce category filtering and
              detailed "case study" views for premium projects.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full brutalist-border flex items-center justify-center shrink-0 bg-zinc-900">
                  <Layers className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Category Filtering</h4>
                  <p className="text-zinc-400">
                    Instantly sort by "Illuminated," "Vehicle Wraps,"
                    "Wayfinding," and "Promotional."
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full brutalist-border flex items-center justify-center shrink-0 bg-zinc-900">
                  <MousePointerClick className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Technical Overlays</h4>
                  <p className="text-zinc-400">
                    Hovering over an image reveals project specs (materials
                    used, dimensions, installation time).
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Instant Quote Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full brutalist-border bg-zinc-900/50 mb-6">
              <Zap className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Lead-Gen Concept
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-6">
              The "Instant Quote" Engine
            </h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              A streamlined 3-step lead-gen tool that feels modern, interactive,
              and frictionless. Replaces the standard, boring contact form.
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Select Project Type",
                  desc: "Visual grid of options (Wrap, LED, Monument, etc.)",
                },
                {
                  step: "02",
                  title: "Upload Specs / Assets",
                  desc: "Drag-and-drop interface for logos or photos of the space.",
                },
                {
                  step: "03",
                  title: "Get Timeline & Estimate",
                  desc: "Instant automated response setting expectations.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 p-4 brutalist-border rounded-xl bg-zinc-900/30 hover:bg-zinc-900/80 transition-colors"
                >
                  <div className="text-3xl font-black text-zinc-700 font-mono">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{item.title}</div>
                    <div className="text-sm text-zinc-400">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 bg-zinc-900 brutalist-border rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />

            <div className="flex justify-between items-center mb-8 pb-4 border-b border-zinc-800">
              <div className="font-mono text-sm text-zinc-400 uppercase tracking-widest">
                Project Configurator
              </div>
              <div className="flex gap-1">
                <div className="w-8 h-1 bg-orange-500 rounded-full" />
                <div className="w-8 h-1 bg-zinc-800 rounded-full" />
                <div className="w-8 h-1 bg-zinc-800 rounded-full" />
              </div>
            </div>

            <h4 className="text-2xl font-bold mb-6">What are we building?</h4>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="brutalist-border-orange bg-orange-500/10 p-4 rounded-xl text-center cursor-pointer">
                <div className="w-12 h-12 mx-auto bg-orange-500/20 rounded-full mb-3 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-500" />
                </div>
                <div className="font-bold">LED / Illuminated</div>
              </div>
              <div className="brutalist-border bg-zinc-950 p-4 rounded-xl text-center cursor-pointer hover:border-zinc-600 transition-colors">
                <div className="w-12 h-12 mx-auto bg-zinc-800 rounded-full mb-3 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-zinc-400" />
                </div>
                <div className="font-bold text-zinc-400">Vehicle Wrap</div>
              </div>
            </div>

            <button className="w-full py-4 bg-orange-500 text-black font-bold uppercase tracking-wider rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
              Continue to Step 02 <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
