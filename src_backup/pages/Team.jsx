import React from 'react';
import { motion } from 'framer-motion';
import { SpaceBackground } from '../components/sections';
import { TeamHero } from '../components/sections/TeamHero';
import { ValueProps } from '../components/sections/ValueProps';
import { Projects } from '../components/sections/Projects';
import { Services } from '../components/sections/Services';
import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/layout';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

export default function TeamPage({ onBack }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-black text-white"
    >
      <SpaceBackground />
      <main>
        <TeamHero />
        <ValueProps />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer onNavigate={onBack} />
    </motion.div>
  );
}
