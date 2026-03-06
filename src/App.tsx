/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { Navbar } from "./components/Navbar";
import { SiteFooter } from "./components/SiteFooter";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ScrollToTop } from "./components/ScrollToTop";

import { PageTransition } from "./components/PageTransition";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error - React Router v6 Routes component does not explicitly type the key prop, but AnimatePresence requires it to detect route changes */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="film-grain" />
      <div className="min-h-screen bg-zinc-950 text-white selection:bg-blue-500 selection:text-black">
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <SiteFooter />
      </div>
    </Router>
  );
}
