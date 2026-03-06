import { motion } from "motion/react";
import { ArrowRight, Play, Zap } from "lucide-react";

export function SiteHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 px-6">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
          alt="Fabrication Background"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="absolute inset-0 tech-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm brutalist-border bg-zinc-900/80 backdrop-blur-md mb-8 transform -skew-x-6">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest transform skew-x-6">
              Built in Cenla. Seen Everywhere.
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter uppercase leading-[0.85] mb-8">
            <span className="block text-zinc-500">We Don't Just</span>
            <span className="block text-zinc-300">Make Signs.</span>
            <span className="block text-orange-500 mt-2">We Make You</span>
            <span className="block text-white">Unmissable.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 font-medium mb-10 max-w-xl border-l-2 border-orange-500 pl-6">
            Central Louisiana's premier custom fabrication studio. From
            high-impact vehicle wraps to architectural LED monuments, we
            engineer visibility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-orange-500 text-black font-black uppercase tracking-widest rounded-sm hover:bg-orange-600 transition-colors transform -skew-x-6 group"
            >
              <span className="transform skew-x-6 flex items-center gap-2">
                Start Your Project{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-zinc-900 text-white font-bold uppercase tracking-widest rounded-sm brutalist-border hover:bg-zinc-800 transition-colors transform -skew-x-6 group"
            >
              <span className="transform skew-x-6 flex items-center gap-2">
                <Play className="w-4 h-4 text-orange-500" /> View Showreel
              </span>
            </a>
          </div>
        </motion.div>

        {/* Hero Graphic / Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:block relative"
        >
          <div className="aspect-square rounded-full border border-zinc-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20" />
          <div
            className="aspect-square rounded-full border border-orange-500/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] opacity-40 animate-spin-slow"
            style={{ animationDuration: "30s" }}
          />

          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="bg-zinc-900/80 backdrop-blur-md p-6 brutalist-border rounded-xl transform translate-y-12 hover:-translate-y-2 transition-transform duration-500">
              <div className="text-5xl font-black text-orange-500 mb-2">
                20+
              </div>
              <div className="text-sm font-mono text-zinc-400 uppercase tracking-wider">
                Years of Precision
              </div>
            </div>
            <div className="bg-zinc-900/80 backdrop-blur-md p-6 brutalist-border rounded-xl hover:-translate-y-2 transition-transform duration-500">
              <div className="text-5xl font-black text-white mb-2">5K+</div>
              <div className="text-sm font-mono text-zinc-400 uppercase tracking-wider">
                Projects Delivered
              </div>
            </div>
            <div className="bg-zinc-900/80 backdrop-blur-md p-6 brutalist-border rounded-xl transform translate-y-8 hover:-translate-y-2 transition-transform duration-500">
              <div className="text-5xl font-black text-white mb-2">100%</div>
              <div className="text-sm font-mono text-zinc-400 uppercase tracking-wider">
                Custom Fabricated
              </div>
            </div>
            <div className="bg-orange-500/10 backdrop-blur-md p-6 brutalist-border-orange rounded-xl transform -translate-y-4 hover:-translate-y-6 transition-transform duration-500 flex flex-col justify-center items-center text-center">
              <Zap className="w-10 h-10 text-orange-500 mb-3" />
              <div className="text-sm font-bold text-orange-500 uppercase tracking-wider">
                High-Speed Turnaround
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
