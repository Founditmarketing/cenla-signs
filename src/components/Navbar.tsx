import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Zap } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 flex items-center justify-center rounded-sm transform -skew-x-12">
            <Zap className="w-5 h-5 text-black" fill="currentColor" />
          </div>
          <div className="font-black text-2xl tracking-tighter uppercase leading-none">
            Cenla
            <br />
            <span className="text-blue-500">Signs</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm font-mono text-zinc-400 hover:text-white uppercase tracking-wider transition-colors"
          >
            Our Story
          </a>
          <a
            href="#services"
            className="text-sm font-mono text-zinc-400 hover:text-white uppercase tracking-wider transition-colors"
          >
            Capabilities
          </a>
          <a
            href="#portfolio"
            className="text-sm font-mono text-zinc-400 hover:text-white uppercase tracking-wider transition-colors"
          >
            Proof of Work
          </a>
          <a
            href="#quote"
            className="px-6 py-3 bg-blue-500 text-black font-bold uppercase tracking-wider rounded-sm hover:bg-blue-600 transition-colors transform -skew-x-6"
          >
            <span className="block transform skew-x-6">Instant Quote</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col gap-6 md:hidden shadow-2xl"
        >
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-bold text-zinc-400 hover:text-white uppercase tracking-wider"
          >
            Our Story
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-bold text-zinc-400 hover:text-white uppercase tracking-wider"
          >
            Capabilities
          </a>
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-bold text-zinc-400 hover:text-white uppercase tracking-wider"
          >
            Proof of Work
          </a>
          <a
            href="#quote"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-4 bg-blue-500 text-black text-center font-bold uppercase tracking-wider rounded-sm"
          >
            Instant Quote
          </a>
        </motion.div>
      )}
    </header>
  );
}
