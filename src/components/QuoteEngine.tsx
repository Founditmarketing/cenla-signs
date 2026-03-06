import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, UploadCloud, Zap, Layers, PenTool } from "lucide-react";

export function QuoteEngine() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState<string | null>(null);

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <section
      id="quote"
      className="py-32 px-6 md:px-12 bg-zinc-950 relative border-t border-zinc-800 overflow-hidden"
    >
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm brutalist-border bg-zinc-900/50 mb-6 transform -skew-x-6">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest transform skew-x-6">
              Instant Quote Engine
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            <span className="block text-zinc-500">Start Your</span>
            <span className="block text-white">Project.</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-medium">
            Skip the back-and-forth emails. Tell us what you need, upload your
            specs, and get a timeline instantly.
          </p>
        </div>

        {/* Configurator Container */}
        <div className="bg-zinc-900 brutalist-border rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

          {/* Progress Bar */}
          <div className="flex justify-between items-center mb-12 pb-6 border-b border-zinc-800">
            <div className="font-mono text-sm text-zinc-400 uppercase tracking-widest">
              Step 0{step} / 03
            </div>
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-12 h-1 rounded-full transition-colors duration-300 ${
                    i === step
                      ? "bg-orange-500"
                      : i < step
                        ? "bg-zinc-600"
                        : "bg-zinc-800"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Steps Content */}
          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-3xl font-bold mb-8">
                    What are we building?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        id: "led",
                        icon: <Zap className="w-8 h-8" />,
                        label: "LED / Illuminated",
                      },
                      {
                        id: "wrap",
                        icon: <Layers className="w-8 h-8" />,
                        label: "Vehicle Wrap",
                      },
                      {
                        id: "custom",
                        icon: <PenTool className="w-8 h-8" />,
                        label: "Custom Fabrication",
                      },
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setProjectType(type.id)}
                        className={`p-6 rounded-xl text-center transition-all border ${
                          projectType === type.id
                            ? "bg-orange-500/10 border-orange-500 text-orange-500"
                            : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white"
                        }`}
                      >
                        <div className="flex justify-center mb-4">
                          {type.icon}
                        </div>
                        <div className="font-bold uppercase tracking-wider">
                          {type.label}
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-3xl font-bold mb-8">
                    Upload Specs & Details
                  </h3>

                  <div className="border-2 border-dashed border-zinc-700 rounded-xl p-12 text-center hover:border-orange-500 hover:bg-orange-500/5 transition-colors cursor-pointer group">
                    <UploadCloud className="w-12 h-12 text-zinc-500 mx-auto mb-4 group-hover:text-orange-500 transition-colors" />
                    <div className="font-bold text-lg mb-2">
                      Drag & Drop Files Here
                    </div>
                    <p className="text-sm text-zinc-400">
                      Logos (AI, EPS), Photos of space, or sketches.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                      Project Notes
                    </label>
                    <textarea
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all min-h-[120px]"
                      placeholder="Tell us about dimensions, timeline, or specific materials..."
                    />
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-3xl font-bold mb-8">
                    Where should we send the quote?
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-12 pt-8 border-t border-zinc-800 flex justify-between items-center">
            {step > 1 ? (
              <button
                onClick={handleBack}
                className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
              >
                Go Back
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={
                step === 3
                  ? () => alert("Quote Request Submitted!")
                  : handleNext
              }
              disabled={step === 1 && !projectType}
              className={`inline-flex items-center justify-center gap-3 px-8 py-4 font-bold uppercase tracking-widest rounded-sm transition-colors transform -skew-x-6 group ${
                step === 1 && !projectType
                  ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                  : "bg-orange-500 text-black hover:bg-orange-600"
              }`}
            >
              <span className="transform skew-x-6 flex items-center gap-2">
                {step === 3 ? "Submit Request" : "Continue"}{" "}
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
