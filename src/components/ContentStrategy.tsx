import { motion } from "motion/react";
import { PenTool, MapPin, FileText, CheckCircle2 } from "lucide-react";

export function ContentStrategy() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-800">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
          3. Content Strategy{" "}
          <span className="text-zinc-500 block text-2xl md:text-4xl mt-2">
            & Tone of Voice
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* The Hook */}
        <motion.div
          whileHover={{ y: -5 }}
          className="brutalist-border bg-zinc-900/50 p-8 rounded-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <PenTool className="w-24 h-24" />
          </div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-blue-500 rounded-sm" />
            The Hook
          </h3>
          <p className="text-zinc-400 mb-8 font-medium">
            Moving away from "We make signs" to a powerful, ROI-focused
            statement.
          </p>

          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-red-900/20 border border-red-900/50 relative">
              <div className="absolute -top-3 left-4 bg-zinc-950 px-2 text-xs font-mono text-red-500 uppercase tracking-wider">
                Old Tone
              </div>
              <p className="text-zinc-500 italic">
                "We are a full-service sign company in Central Louisiana."
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-px h-8 bg-zinc-800" />
            </div>

            <div className="p-6 rounded-xl bg-blue-500/10 brutalist-border-blue relative">
              <div className="absolute -top-3 left-4 bg-zinc-950 px-2 text-xs font-mono text-blue-500 uppercase tracking-wider">
                New Tone
              </div>
              <p className="text-xl font-bold text-white leading-tight">
                "We don't just make signs. We make you unmissable."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Local Authority */}
        <motion.div
          whileHover={{ y: -5 }}
          className="brutalist-border bg-zinc-900/50 p-8 rounded-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <MapPin className="w-24 h-24" />
          </div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-blue-500 rounded-sm" />
            Local Authority
          </h3>
          <p className="text-zinc-400 mb-8 font-medium">
            Maintaining "Central Louisiana" roots while looking like a national
            player.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white">
                  "Built in Cenla. Seen Everywhere."
                </strong>
                <span className="text-sm text-zinc-400">
                  Emphasize local craftsmanship but national-grade quality.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white">
                  Community Landmarks
                </strong>
                <span className="text-sm text-zinc-400">
                  Frame local projects not just as jobs, but as contributions to
                  the city's skyline and streets.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white">The "Studio" Vibe</strong>
                <span className="text-sm text-zinc-400">
                  Refer to the shop as a "fabrication studio" rather than just a
                  "sign shop."
                </span>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Service Pages */}
        <motion.div
          whileHover={{ y: -5 }}
          className="brutalist-border bg-zinc-900/50 p-8 rounded-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <FileText className="w-24 h-24" />
          </div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-blue-500 rounded-sm" />
            Service Pages
          </h3>
          <p className="text-zinc-400 mb-8 font-medium">
            Rewriting structure to emphasize ROI, durability, and technical
            superiority.
          </p>

          <div className="space-y-6">
            <div>
              <div className="text-xs font-mono text-blue-500 uppercase tracking-wider mb-2">
                Vehicle Wraps
              </div>
              <h4 className="font-bold text-lg mb-1">
                "Mobile Billboards. Maximum ROI."
              </h4>
              <p className="text-sm text-zinc-400">
                Focus on impressions per mile, 3M/Avery Dennison material specs,
                and warranty.
              </p>
            </div>
            <div className="brutalist-border border-zinc-800 my-4" />
            <div>
              <div className="text-xs font-mono text-blue-500 uppercase tracking-wider mb-2">
                LED Signs
              </div>
              <h4 className="font-bold text-lg mb-1">"Own the Night."</h4>
              <p className="text-sm text-zinc-400">
                Highlight energy efficiency, lumen output, weather resistance,
                and 24/7 brand visibility.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
