import {
  Zap,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-blue-500 flex items-center justify-center rounded-sm transform -skew-x-12">
                <Zap className="w-5 h-5 text-black" fill="currentColor" />
              </div>
              <div className="font-black text-2xl tracking-tighter uppercase leading-none">
                Cenla
                <br />
                <span className="text-blue-500">Signs</span>
              </div>
            </div>

            <h3 className="text-4xl font-black uppercase tracking-tighter leading-none mb-6">
              Built in Cenla.
              <br />
              <span className="text-zinc-500">Seen Everywhere.</span>
            </h3>

            <p className="text-zinc-400 max-w-sm mb-8 font-medium">
              Central Louisiana's premier custom fabrication studio. We engineer
              visibility for brands that refuse to be ignored.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full brutalist-border flex items-center justify-center text-zinc-400 hover:text-blue-500 hover:border-blue-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full brutalist-border flex items-center justify-center text-zinc-400 hover:text-blue-500 hover:border-blue-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full brutalist-border flex items-center justify-center text-zinc-400 hover:text-blue-500 hover:border-blue-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-6">
              Contact Studio
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white mb-1">
                    Fabrication HQ
                  </strong>
                  <span className="text-sm text-zinc-400">
                    3219 Masonic Dr
                    <br />
                    Alexandria, LA 71301
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-zinc-500 shrink-0" />
                <a
                  href="tel:+13184484888"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  (318) 448-4888
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-zinc-500 shrink-0" />
                <a
                  href="mailto:orders@cenlasigns.la"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  orders@cenlasigns.la
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-6">
              Capabilities
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Vehicle Wraps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Illuminated Signs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Monument Signs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Wayfinding Systems
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Custom Fabrication
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Cenla Signs. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs font-mono text-zinc-500 hover:text-white uppercase tracking-widest transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs font-mono text-zinc-500 hover:text-white uppercase tracking-widest transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
