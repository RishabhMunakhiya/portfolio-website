import React, { useState } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import BackgroundEffects from './components/BackgroundEffects';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import LearningSection from './components/LearningSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader onLoaded={() => setLoading(false)} />
      ) : (
        <div style={{ position: 'relative' }}>
          <CustomCursor />
          <BackgroundEffects />
          <Navbar />
          
          <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <LearningSection />
            <ContactSection />
          </main>

          <Footer />
          <ScrollToTop />
          
        </div>
      )}
    </>
  );
}

export default App;
