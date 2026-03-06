import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Filter, Maximize2 } from "lucide-react";

const categories = ["All", "Illuminated", "Vehicle Wraps", "Wayfinding", "Storefronts"];

const projects = [
  {
    id: 1,
    category: "Vehicle Wraps",
    title: "Hawthorne Heating & Air",
    client: "Hawthorne",
    image:
      "https://www.cenlasigns.la/wp-content/uploads/2023/10/image1-1-scaled.jpeg",
  },
  {
    id: 2,
    category: "Illuminated",
    title: "Alexandria Senior High",
    client: "ASH",
    image:
      "https://www.cenlasigns.la/wp-content/uploads/2021/03/104421186_1656654467806511_4279474051734214336_o.jpg",
  },
  {
    id: 3,
    category: "Wayfinding",
    title: "Alexandria Emergency Hospital",
    client: "Emergency Hospital",
    image:
      "https://www.cenlasigns.la/wp-content/uploads/2024/11/50EF69CB-8306-42FA-BDC9-FD21450AC258_4_5005_c.jpeg",
  },
  {
    id: 4,
    category: "Storefronts",
    title: "Cenla Signs HQ",
    client: "In-House",
    image:
      "https://www.cenlasigns.la/wp-content/uploads/2025/06/cenla_signs_about_us-scaled.jpg",
  },
  {
    id: 5,
    category: "Vehicle Wraps",
    title: "Custom Fleet Graphic",
    client: "Local Business",
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Illuminated",
    title: "Architectural Signage",
    client: "Commercial",
    image:
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=2067&auto=format&fit=crop",
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-32 px-6 md:px-12 bg-zinc-950 relative border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm brutalist-border bg-zinc-900/50 mb-6 transform -skew-x-6">
              <span className="text-xs font-mono text-blue-500 uppercase tracking-widest transform skew-x-6">
                Case Studies
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              <span className="block text-zinc-500">Proof of</span>
              <span className="block text-white">Work.</span>
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 mr-4 text-zinc-500">
              <Filter className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest">
                Filter:
              </span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-widest transition-all transform -skew-x-6 ${activeCategory === cat
                  ? "bg-blue-500 text-black font-bold"
                  : "brutalist-border text-zinc-400 hover:text-white hover:border-zinc-600"
                  }`}
              >
                <span className="block transform skew-x-6">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] bg-zinc-900 brutalist-border rounded-xl overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 font-medium mb-4">
                      Client: {project.client}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white">
                      View Specs <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Top Right Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-zinc-950/80 backdrop-blur-sm rounded-sm brutalist-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-6">
                  <Maximize2 className="w-4 h-4 text-blue-500 transform skew-x-6" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-zinc-900 text-white font-bold uppercase tracking-widest rounded-sm brutalist-border hover:bg-zinc-800 transition-colors transform -skew-x-6 group"
          >
            <span className="transform skew-x-6 flex items-center gap-2">
              View Full Archive{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
