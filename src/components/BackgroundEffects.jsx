import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      {/* Animated Mesh Gradient Background Base */}
      <div 
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 50% 50%, rgba(5, 8, 22, 1) 0%, rgba(0, 0, 0, 1) 100%)',
        }}
      />

      {/* Interactive Glowing Orbs */}
      <motion.div
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 2 }}
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 243, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          top: 0,
          left: 0,
        }}
      />

      <motion.div
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "tween", ease: "circOut", duration: 3 }}
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(188, 19, 254, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          top: 0,
          left: 0,
        }}
      />

      {/* Floating Particles/Static Mesh Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255, 126, 179, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0, 243, 255, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      
      {/* Grid Overlay for Tech Vibe */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
          maskImage: 'radial-gradient(ellipse at center, transparent 20%, black 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black 100%)',
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
