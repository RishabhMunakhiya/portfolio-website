import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Brain, GraduationCap, BookOpen } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 120 } }
  };

  const floatingIcons = [
    { Icon: Globe, top: '20%', left: '15%', delay: 0, color: 'var(--cyan)' },
    { Icon: Brain, top: '25%', right: '15%', delay: 0.5, color: 'var(--purple)' },
    { Icon: GraduationCap, bottom: '25%', left: '20%', delay: 1, color: 'var(--pink)' },
    { Icon: BookOpen, bottom: '20%', right: '20%', delay: 1.5, color: 'var(--cyan)' },
  ];

  const [wordIndex, setWordIndex] = useState(0);
  
  // Dynamic words with eye-catching gradient colors fitting the dark theme
  const animatedWords = [
    { text: "Rishabh", color: "linear-gradient(90deg, #00f3ff, #bc13fe)" }, // Cyan to Purple
    { text: "a Developer", color: "linear-gradient(90deg, #ff7eb3, #bc13fe)" }, // Pink to Purple
    { text: "an Innovator", color: "linear-gradient(90deg, #00f3ff, #00ff87)" }, // Cyan to Neon Green
    { text: "a Problem Solver", color: "linear-gradient(90deg, #fdfb2f, #ff7eb3)" } // Yellow to Pink
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % animatedWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [animatedWords.length]);

  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '0 20px' }}>
      {/* Floating Background Icons */}
      {floatingIcons.map((item, idx) => (
        <motion.div
          key={idx}
          className="hide-on-mobile"
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            color: item.color,
            filter: `drop-shadow(0 0 15px ${item.color})`,
            opacity: 0.4,
            zIndex: 0
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          <item.Icon size={48} />
        </motion.div>
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
        >
          <motion.div variants={itemVariants} style={{ marginBottom: '20px' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '8px 16px',
              borderRadius: '20px',
              border: '1px solid var(--glass-border)',
              background: 'var(--glass-bg)',
              color: 'var(--cyan)',
              fontSize: '0.9rem',
              fontWeight: '600',
              letterSpacing: '1px',
              marginBottom: '20px'
            }}>
              WELCOME TO MY UNIVERSE
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants} 
            style={{ 
              fontSize: 'clamp(2rem, 8vw, 4.5rem)', // Scaled down lower bound to fit on small mobile screens
              lineHeight: '1.2', 
              marginBottom: '20px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center' 
            }}
          >
            <span>Hi, I'm</span>
            <div style={{ position: 'relative', height: '1.2em', display: 'flex', justifyContent: 'center', width: '100%', overflow: 'hidden' }}>
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -60, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  style={{ 
                    position: 'absolute', 
                    whiteSpace: 'nowrap',
                    background: animatedWords[wordIndex].color,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: '800'
                  }}
                >
                  {animatedWords[wordIndex].text}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.h2 variants={itemVariants} style={{ fontSize: 'clamp(1.1rem, 4vw, 2.2rem)', fontWeight: '300', color: 'rgba(255,255,255,0.95)', marginBottom: '20px' }}>
            Frontend Developer • Problem Solver • DSA Enthusiast
          </motion.h2>

          <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '40px' }}>
            <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', fontWeight: '400', color: 'var(--text-secondary)', margin: 0 }}>
              B.Tech in Software Engineering at Delhi Technological University
            </p>
            <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', fontWeight: '400', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
              Crafting immersive, high-performance digital experiences with React, JavaScript, and cutting-edge UI/UX innovation.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary" style={{ padding: '15px 35px', fontSize: '1.1rem' }}>
              View Projects
            </a>
            <a href="#" className="btn-outline" style={{ padding: '15px 35px', fontSize: '1.1rem' }}>
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
