import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Learning from "@/components/sections/Learning";
import Interests from "@/components/sections/Interests";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative">
      {/* Page-level night-city backdrop: skyline, light haze, scrim.
          Layers sit behind all sections and fade down the page. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="page-city-bg" />
        <div className="city-glow" />
        <div className="page-city-scrim" />
      </div>
      <Navbar />
      <main id="main-content" className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Learning />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
