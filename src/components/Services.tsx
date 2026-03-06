import { motion } from "motion/react";
import { Layers, Zap, PenTool, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Layers className="w-8 h-8 text-orange-500" />,
    title: "Vehicle Wraps",
    subtitle: "Mobile Billboards. Maximum ROI.",
    desc: "Turn your fleet into a 24/7 marketing machine. We use premium 3M and Avery Dennison materials for flawless, high-impact wraps that command attention on every street.",
    specs: [
      "3M/Avery Vinyl",
      "Full/Partial Wraps",
      "Fleet Graphics",
      "5-Year Warranty",
    ],
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format&fit=crop",
  },
  {
    icon: <Zap className="w-8 h-8 text-orange-500" />,
    title: "LED & Illuminated",
    subtitle: "Own the Night.",
    desc: "From neon channel letters to towering LED monuments, our illuminated signage ensures your brand never sleeps. Engineered for maximum lumen output and weather resistance.",
    specs: [
      "Channel Letters",
      "Pylon Signs",
      "Neon Fabrication",
      "Energy Efficient",
    ],
    image:
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=2067&auto=format&fit=crop",
  },
  {
    icon: <PenTool className="w-8 h-8 text-orange-500" />,
    title: "Custom Fabrication",
    subtitle: "Precision Metal & Acrylic.",
    desc: "Architectural signage, wayfinding systems, and bespoke installations. If you can dream it, our fabrication studio can build it with industrial-grade precision.",
    specs: [
      "CNC Routing",
      "Metal Welding",
      "Acrylic Forming",
      "Wayfinding Systems",
    ],
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-32 px-6 md:px-12 bg-zinc-950 relative border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm brutalist-border bg-zinc-900/50 mb-6 transform -skew-x-6">
              <span className="text-xs font-mono text-orange-500 uppercase tracking-widest transform skew-x-6">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              <span className="block text-zinc-500">Industrial Grade</span>
              <span className="block text-white">Fabrication.</span>
            </h2>
          </div>
          <p className="text-xl text-zinc-400 max-w-md font-medium border-l-2 border-orange-500 pl-6">
            We don't outsource. Every project is engineered, fabricated, and
            installed by our in-house experts in Central Louisiana.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative bg-zinc-900 brutalist-border rounded-xl overflow-hidden flex flex-col"
            >
              {/* Image Header */}
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 z-20 bg-zinc-950/80 backdrop-blur-sm p-3 rounded-sm brutalist-border transform -skew-x-6">
                  <div className="transform skew-x-6">{service.icon}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">
                  {service.title}
                </h3>
                <h4 className="text-orange-500 font-bold mb-6">
                  {service.subtitle}
                </h4>
                <p className="text-zinc-400 mb-8 flex-1 leading-relaxed">
                  {service.desc}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-8 pt-6 border-t border-zinc-800">
                  {service.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-orange-500 rounded-full" />
                      <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white group-hover:text-orange-500 transition-colors"
                >
                  Request Specs{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
