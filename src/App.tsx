/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { SiteHero } from "./components/SiteHero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { AboutUs } from "./components/AboutUs";
import { TestimonialMarquee } from "./components/TestimonialMarquee";
import { QuoteEngine } from "./components/QuoteEngine";
import { SiteFooter } from "./components/SiteFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-blue-500 selection:text-black">
      <Navbar />
      <SiteHero />
      <TestimonialMarquee />
      <AboutUs />
      <Services />
      <Portfolio />
      <QuoteEngine />
      <SiteFooter />
    </div>
  );
}
