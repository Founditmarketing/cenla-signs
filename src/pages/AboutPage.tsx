import { AboutUs } from "../components/AboutUs";

export function AboutPage() {
    return (
        <div className="pt-24 min-h-screen bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm brutalist-border bg-zinc-900/50 mb-6 transform -skew-x-6">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest transform skew-x-6">
                        Inside Cenla Signs
                    </span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
                    <span className="block text-zinc-500">Our</span>
                    <span className="block text-white">Story.</span>
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl font-medium border-l-2 border-blue-500 pl-6 mb-12">
                    Explore the history and the people behind Central Louisiana's premier custom sign studio.
                </p>
            </div>

            {/* Reusing the AboutUs component we just built */}
            <AboutUs />
        </div>
    );
}
