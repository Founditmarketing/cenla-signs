import { motion } from "motion/react";
import { ShieldCheck, Target, Users } from "lucide-react";

export function AboutUs() {
    return (
        <section id="about" className="py-32 px-6 md:px-12 bg-zinc-950 relative border-t border-zinc-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Stack */}
                    <div className="relative">
                        <div className="aspect-[4/5] bg-zinc-900 brutalist-border rounded-xl overflow-hidden relative z-10">
                            <img
                                src="https://www.cenlasigns.la/wp-content/uploads/2021/03/cropped-119776466_1739628646175759_8453419043403629989_o-270x270.jpg"
                                alt="Cenla Signs Team"
                                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-zinc-950/90 backdrop-blur-md p-6 brutalist-border rounded-lg inline-block transform -skew-x-6">
                                    <div className="transform skew-x-6">
                                        <div className="text-3xl font-black text-blue-500 mb-1">Since 2008</div>
                                        <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Rooted in Central LA</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-full h-full border-2 border-blue-500/20 rounded-xl z-0" />
                        <div className="absolute -bottom-6 -left-6 w-full h-full bg-blue-500/5 rounded-xl z-0" />
                    </div>

                    {/* Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm brutalist-border bg-zinc-900/50 mb-6 transform -skew-x-6">
                            <span className="text-xs font-mono text-blue-500 uppercase tracking-widest transform skew-x-6">
                                Our Story
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                            <span className="block text-zinc-500">Local Roots.</span>
                            <span className="block text-white">Industrial Impact.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-zinc-400 font-medium mb-12">
                            <p>
                                Cenla Signs was opened in 2008 by Ashley & Kevin Kitchen. Born and raised in Central Louisiana, they decided to put down their roots in Alexandria and build a business that serves the community they love.
                            </p>
                            <p>
                                Kevin worked for the City of Alexandria Police Department for 16 years. In 2014, he transitioned his career to join the team full-time at Cenla Signs. Ashley, a Bolton High School graduate ('99) with a Business Administration degree from LSUA ('05), manages the operational excellence of the studio.
                            </p>
                            <p className="pl-6 border-l-2 border-blue-500 text-zinc-300 italic">
                                "We don't just build signs. We build the visibility that helps other local businesses thrive and grow."
                            </p>
                        </div>

                        {/* Core Values */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-sm bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 transform -skew-x-6">
                                    <ShieldCheck className="w-6 h-6 text-blue-500 transform skew-x-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider mb-1">Law Enforcement Integrity</h4>
                                    <p className="text-sm text-zinc-500 leading-relaxed">16 years of police service translates directly to our commitment to honesty and precision.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-sm bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 transform -skew-x-6">
                                    <Target className="w-6 h-6 text-blue-500 transform skew-x-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider mb-1">Uncompromising Quality</h4>
                                    <p className="text-sm text-zinc-500 leading-relaxed">We go the extra mile on every project we are given. No shortcuts, ever.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
