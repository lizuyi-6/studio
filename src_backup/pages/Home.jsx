import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import { FeatureSectionOne, FeatureSectionTwo } from '../components/sections/Features';
import TechStackSection from '../components/sections/TechStack';
import Footer from '../components/layout/Footer';
import { SystemHUD } from '../components/visuals/CyberGrid';
import CentralGyro from '../components/visuals/CentralGyro';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const Home = () => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    // Physics Update (Phase XVI): Switching to 'Sticky Stacking'.
    // Removed snap attributes. Kept overflow-y-scroll for the container.
    className="relative h-screen overflow-y-scroll"
  >
    {/* Fixed Background Elements (No Snap) */}
    <div className="fixed inset-0 pointer-events-none z-0">
      <SystemHUD />
      <CentralGyro />
    </div>

    {/* Stacking Sections (Card Deck Effect) */}
    <div className="relative z-10 text-center">
      {/* Section 1: Hero (Bottom of stack) */}
      <section
        className="sticky top-0 h-screen w-full flex flex-col justify-center relative bg-black z-10"
      >
        <Hero />
      </section>

      {/* Section 2: Slides over Hero */}
      <section
        className="sticky top-0 h-screen w-full flex flex-col justify-center relative bg-black z-20 shadow-[0_-5px_30px_rgba(0,0,0,0.8)]"
      >
        <FeatureSectionOne />
      </section>

      {/* Section 3: Slides over Section 2 */}
      <section
        className="sticky top-0 h-screen w-full flex flex-col justify-center relative bg-black z-30 shadow-[0_-5px_30px_rgba(0,0,0,0.8)]"
      >
        <FeatureSectionTwo />
      </section>

      {/* Section 4: Tech + Footer (Slides over Section 3) */}
      <div
        className="relative min-h-screen w-full flex flex-col relative bg-black z-40 shadow-[0_-5px_30px_rgba(0,0,0,0.8)]"
      >
        {/* TechStack fills at least one screen */}
        <div className="min-h-screen flex flex-col justify-center">
          <TechStackSection />
        </div>
        {/* Footer naturally follows flow */}
        <Footer />
      </div>
    </div>
  </motion.div>
);

export default Home;
