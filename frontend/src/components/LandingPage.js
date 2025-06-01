import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import HeroSection from './HeroSection';
import ThreatCategories from './ThreatCategories';
import DetectionTool from './DetectionTool';
import MitigationStrategies from './MitigationStrategies';
import ResearchResources from './ResearchResources';
import Footer from './Footer';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <HeroSection />
        <ThreatCategories />
        <DetectionTool />
        <MitigationStrategies />
        <ResearchResources />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;