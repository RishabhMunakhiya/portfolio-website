import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, LineChart, Network } from 'lucide-react';

// --- SVG Icons ---
const JSIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path fill="#000" d="M11 14.5c0 1.93-1.07 2.5-2.5 2.5-.95 0-1.74-.32-2.31-.8l.89-1.22c.45.36.96.58 1.44.58.64 0 .94-.28.94-.82v-4.24h1.54v4.03zm6.65-2.02c0 2.22-1.52 3.52-3.8 3.52-1.49 0-2.61-.43-3.26-1.02l.93-1.27c.56.47 1.39.83 2.26.83 1.25 0 1.95-.5 1.95-1.42 0-.85-.62-1.25-1.92-1.75-1.52-.56-2.5-1.39-2.5-2.8 0-1.87 1.4-3.13 3.52-3.13 1.34 0 2.37.36 3.01.88l-.87 1.28c-.53-.41-1.33-.71-2.15-.71-1.07 0-1.66.52-1.66 1.33 0 .8.61 1.15 1.99 1.69 1.62.61 2.5 1.46 2.5 2.57z"/>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" opacity=".1"/>
  </svg>
);

const ReactIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
    <circle cx="0" cy="0" r="2.05" fill={color}/>
    <g stroke={color} strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const HTMLIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M2.38 2.38h19.24L19.8 20.9 12 23l-7.8-2.1L2.38 2.38zm16.7 2.14H5.66l.5 5.66h11.4l-.2 2.25-5.36 1.45-5.36-1.45-.14-1.55H4.27l.3 3.34L12 16.4l7.43-2.06.87-9.82z"/>
  </svg>
);

const CSSIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M2.38 2.38h19.24L19.8 20.9 12 23l-7.8-2.1L2.38 2.38zm16.7 2.14H5.66l.3 3.34h11.85l-.2 2.25H6.26l.3 3.34L12 16.4l7.43-2.06.87-9.82z"/>
  </svg>
);

const NodeIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M11.96 0L1.24 6.2v11.6L11.96 24l10.8-6.2V6.2L11.96 0zm-1.8 17.5l-3.3-1.9V8l3.3-1.9L13.5 8v4h1.8V7l-5.1-3-5.1 3v10l5.1 3 3.3-1.9v-2.2l-1.8 1v.7l-1.5.9zM19 16l-5.1 3-5.1-3V9h1.8v6l3.3 1.9 3.3-1.9V9H19v7z"/>
  </svg>
);

const PythonIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12.1 2c-2.4 0-2.8 1.5-2.8 3.4 0 1.9.4 3.5 2.5 3.5h1V13c0 2.1 1.7 3.8 3.8 3.8h3.3c1.2 0 2.2-.9 2.2-2v-2.5c0-1.2-1-2.1-2.2-2.1-1.2 0-2.2-.6-3.3-.6-.6 0-1.1.1-1.6.2-2.1.4-2.1 2.1-2.1 2.1v2.1h3.7v1.6H8.7c-2.4 0-2.8-1.5-2.8-3.4 0-1.9-.4-3.5-2.5-3.5h-1V4.7c0-1.2 1-2.1 2.2-2.1 1.2 0 2.2.6 3.3.6zM9.8 3.6c.4 0 .7.3.7.7 0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7zm4.4 16.8c.4 0 .7.3.7.7 0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7z"/>
  </svg>
);

const TFIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M1.3 7.8L9.1 3.3l7.9 4.5v9l-7.9 4.5-7.9-4.5v-9zm7.8-2.6L3 8.7v6.6l6.1 3.5 6.1-3.5V8.7L9.1 5.2z"/>
    <path d="M14.6 22.1l7.8-4.5V8.6l-7.8 4.5v9zM16 11.2l4.8-2.8v5.5l-4.8 2.8v-5.5z"/>
  </svg>
);

const CppIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M8.2 16.5c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2c1.7 0 3.2 1 3.8 2.5h2.1c-.8-2.6-3.2-4.5-6-4.5-3.5 0-6.3 2.8-6.3 6.3s2.8 6.3 6.3 6.3c2.7 0 5.1-1.9 6-4.5h-2.1c-.7 1.4-2.1 2.3-3.8 2.3zm8.3-6.5h-1.5v2.5h-2.5v1.5h2.5v2.5h1.5v-2.5h2.5v-1.5h-2.5V10z"/>
  </svg>
);

const SQLIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M3 5V19C3 20.6569 7.02944 22 12 22C16.9706 22 21 20.6569 21 19V5"/>
    <path d="M3 12C3 13.6569 7.02944 15 12 15C16.9706 15 21 13.6569 21 12"/>
  </svg>
);


const skillsData = [
  { id: 'reactjs', name: 'React.js', color: '#00f3ff', glowColor: 'rgba(0, 243, 255, 0.15)', Icon: ReactIcon },
  { id: 'html', name: 'HTML5', color: '#e34f26', glowColor: 'rgba(227, 79, 38, 0.15)', Icon: HTMLIcon },
  { id: 'css', name: 'CSS3', color: '#1572b6', glowColor: 'rgba(21, 114, 182, 0.15)', Icon: CSSIcon },
  { id: 'javascript', name: 'JavaScript', color: '#f7df1e', glowColor: 'rgba(247, 223, 30, 0.15)', Icon: JSIcon },
  { id: 'nodejs', name: 'Node.js', color: '#339933', glowColor: 'rgba(51, 153, 51, 0.15)', Icon: NodeIcon },
  { id: 'python', name: 'Python', color: '#3776ab', glowColor: 'rgba(55, 118, 171, 0.15)', Icon: PythonIcon },
  { id: 'tensorflow', name: 'TensorFlow', color: '#ff6f00', glowColor: 'rgba(255, 111, 0, 0.15)', Icon: TFIcon },
  { id: 'scikitlearn', name: 'Scikit Learn', color: '#f7931e', glowColor: 'rgba(247, 147, 30, 0.15)', Icon: Network },
  { id: 'dataanalysis', name: 'Data Analysis', color: '#4caf50', glowColor: 'rgba(76, 175, 80, 0.15)', Icon: LineChart },
  { id: 'cpp', name: 'C++', color: '#00599c', glowColor: 'rgba(0, 89, 156, 0.15)', Icon: CppIcon },
  { id: 'sql', name: 'SQL', color: '#f29111', glowColor: 'rgba(242, 145, 17, 0.15)', Icon: SQLIcon }
];

const SkillsSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeSkill = skillsData[activeIdx];
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 900;

  // Responsive Layout Configuration
  const archRadius = isMobile ? 150 : 240; 
  const numIcons = skillsData.length;
  const orbSize = isMobile ? 40 : 60;
  const orbIconSize = isMobile ? 20 : 30;

  return (
    <section id="skills" className="section" style={{ 
      position: 'relative', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      transition: 'background 0.8s ease'
    }}>
      {/* Inline CSS for the continuous spin animation that pauses on hover */}
      <style>
        {`
          .spin-circle {
            animation: spin 35s linear infinite;
          }
          .spin-counter {
            animation: counter-spin 35s linear infinite;
          }
          .arch-container:hover .spin-circle,
          .arch-container:hover .spin-counter {
            animation-play-state: paused;
          }
          @keyframes spin {
            100% { transform: rotate(360deg); }
          }
          @keyframes counter-spin {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(-360deg); }
          }
        `}
      </style>

      {/* Dynamic Background Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: isMobile ? '50%' : '10%',
        width: '600px',
        height: '600px',
        background: `radial-gradient(circle, ${activeSkill.glowColor} 0%, transparent 70%)`,
        transform: isMobile ? 'translate(50%, -50%)' : 'translate(0, -50%)',
        zIndex: 0,
        transition: 'background 0.8s ease'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row', 
          justifyContent: 'space-between',
          gap: isMobile ? '80px' : '50px',
          alignItems: 'center' 
        }}>
          
          {/* Text & CTA */}
          <div style={{ maxWidth: '500px', textAlign: isMobile ? 'center' : 'left' }}>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '700', marginBottom: '20px', color: 'white' }}
            >
              My Skills
            </motion.h2>
            
            <div style={{ minHeight: isMobile ? '120px' : '150px' }}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeSkill.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '40px', fontSize: '1.1rem' }}
                >
                  Expertise in <strong style={{ color: activeSkill.color }}>{activeSkill.name}</strong>. Building robust, scalable, and highly interactive applications leveraging modern architectures and best practices to deliver outstanding user experiences.
                </motion.p>
              </AnimatePresence>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', gap: '30px' }}>
              <a href="#contact" className="btn-primary" style={{
                background: activeSkill.color,
                color: (activeSkill.id === 'javascript' || activeSkill.id === 'reactjs') ? '#000' : '#fff',
                boxShadow: `0 0 15px ${activeSkill.color}88`,
                padding: '12px 30px',
                borderRadius: '30px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}>
                contact me
              </a>
              
              <a href="#projects" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px', 
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontWeight: '500'
              }}>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowRight size={20} color="white" />
                </motion.span>
                see more
              </a>
            </div>
          </div>

          {/* Interactive Rotating Circle */}
          <div className="arch-container" style={{ position: 'relative', height: isMobile ? '350px' : '600px', width: isMobile ? '100%' : 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            
            {/* Center Active Logo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill.id}
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                style={{
                  position: 'absolute',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '15px',
                  zIndex: 30,
                  pointerEvents: 'none' // Let clicks pass through center if needed
                }}
              >
                <div style={{
                  width: isMobile ? '90px' : '120px',
                  height: isMobile ? '90px' : '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255,255,255,0.03)',
                  border: `2px solid ${activeSkill.color}55`,
                  borderRadius: '20px',
                  boxShadow: `0 0 40px ${activeSkill.glowColor}`,
                  transform: 'rotate(10deg)'
                }}>
                  <div style={{ transform: 'rotate(-10deg)' }}>
                    <activeSkill.Icon size={isMobile ? 50 : 70} color={activeSkill.color} />
                  </div>
                </div>
                {!isMobile && (
                  <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: 'white', textShadow: `0 0 10px ${activeSkill.color}55` }}>
                    {activeSkill.name}
                  </h3>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Rotating Circle Container */}
            <div 
              className="spin-circle"
              style={{
                position: 'absolute',
                width: archRadius * 2,
                height: archRadius * 2,
                borderRadius: '50%',
                border: '1px dashed rgba(255,255,255,0.1)',
                zIndex: 10
              }}
            >
              {/* Orb Icons on the Circle edge */}
              {skillsData.map((skill, idx) => {
                const angleDeg = (360 / numIcons) * idx;
                const angleRad = (angleDeg * Math.PI) / 180;
                
                // Position relative to the center of the rotating container
                const x = Math.cos(angleRad) * archRadius;
                const y = Math.sin(angleRad) * archRadius;

                const isActive = idx === activeIdx;

                return (
                  <button
                    key={skill.id}
                    className="spin-counter"
                    onClick={() => setActiveIdx(idx)}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.2)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = ''} // Relies on keyframe resetting it
                    style={{
                      position: 'absolute',
                      top: `calc(50% + ${y}px)`,
                      left: `calc(50% + ${x}px)`,
                      width: `${orbSize}px`,
                      height: `${orbSize}px`,
                      borderRadius: '50%',
                      background: isActive ? skill.color : 'rgba(10, 15, 30, 0.8)',
                      border: `1px solid ${isActive ? 'transparent' : 'rgba(255,255,255,0.2)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: isActive ? `0 0 20px ${skill.color}` : 'none',
                      transition: 'background 0.3s ease, box-shadow 0.3s ease',
                      zIndex: isActive ? 20 : 10,
                    }}
                  >
                    <skill.Icon size={orbIconSize} color={isActive ? (skill.id === 'javascript' || skill.id === 'reactjs' ? '#000' : '#fff') : skill.color} />
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
