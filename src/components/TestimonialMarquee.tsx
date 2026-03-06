import { motion } from "motion/react";
import { CheckCircle2, Star } from "lucide-react";

const reviews = [
    {
        name: "Michael T.",
        role: "Local Business Owner",
        text: "Cenla Signs handles all of our vehicle wraps. They are incredibly detail-oriented and the 3M vinyl holds up perfectly in the Louisiana heat. 10/10.",
    },
    {
        name: "Sarah Jenkins",
        role: "Director of Operations",
        text: "From our exterior monument sign to our interior wayfinding, Kevin and his team delivered flawlessly. They didn't just meet our timeline, they beat it.",
    },
    {
        name: "David R.",
        role: "Franchise Owner",
        text: "The LED cabinet signs they fabricated for our three locations are the brightest on the block. The quality of fabrication is clearly industrial grade.",
    },
];

export function TestimonialMarquee() {
    return (
        <section className="py-24 bg-zinc-950 border-t border-zinc-800 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10" />

            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
                    Trusted by <span className="text-blue-500">Alexandria.</span>
                </h2>
                <div className="flex items-center justify-center gap-2 text-zinc-400 font-mono text-sm uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    18+ Years of Excellence
                </div>
            </div>

            <div className="flex gap-6 w-max animate-aurora">
                {/* Double array for infinite scroll effect */}
                {[...reviews, ...reviews, ...reviews].map((review, idx) => (
                    <div
                        key={idx}
                        className="w-[400px] bg-zinc-900 brutalist-border rounded-xl p-8 shrink-0 flex flex-col hover:border-blue-500 transition-colors"
                    >
                        <div className="flex gap-1 mb-6">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className="w-4 h-4 fill-blue-500 text-blue-500"
                                />
                            ))}
                        </div>
                        <p className="text-zinc-300 text-lg leading-relaxed mb-8 flex-1 italic">
                            "{review.text}"
                        </p>
                        <div className="pt-6 border-t border-zinc-800">
                            <div className="font-bold text-white uppercase tracking-wider">
                                {review.name}
                            </div>
                            <div className="text-sm font-mono text-blue-500 uppercase tracking-widest mt-1">
                                {review.role}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
