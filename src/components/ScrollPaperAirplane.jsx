import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Send } from 'lucide-react';

const ScrollPaperAirplane = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll progress so the airplane flies smoothly without snapping
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // Map the scroll progress (0 to 1) to X and Y viewport positions to create a zig-zag flight path
  const x = useTransform(
    smoothProgress, 
    [0, 0.2, 0.4, 0.6, 0.8, 1], 
    ['10vw', '85vw', '10vw', '85vw', '10vw', '50vw']
  );
  
  const y = useTransform(
    smoothProgress, 
    [0, 0.2, 0.4, 0.6, 0.8, 1], 
    ['10vh', '30vh', '50vh', '70vh', '85vh', '90vh']
  );
  
  // Rotate the plane to face the direction of its trajectory
  // The default Send icon points top-right. 
  // ~75deg = pointing bottom-right
  // ~165deg = pointing bottom-left
  const rotate = useTransform(
    smoothProgress, 
    [0, 0.2, 0.4, 0.6, 0.8, 1], 
    [75, 165, 75, 165, 75, 180] 
  );

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x,
        y,
        rotate,
        zIndex: 9999, // Ensure it floats above everything
        pointerEvents: 'none' // Don't block clicks on underlying elements
      }}
    >
      <Send 
        size={36} 
        color="var(--cyan)" 
        strokeWidth={1.5}
        style={{ 
          filter: 'drop-shadow(0 0 10px rgba(0, 243, 255, 0.8))' 
        }} 
      />
    </motion.div>
  );
};

export default ScrollPaperAirplane;
