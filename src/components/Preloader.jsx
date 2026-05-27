import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import rVideo from '../R.mp4';

const Preloader = ({ onLoaded }) => {
  useEffect(() => {
    // Show the video intro for 3 seconds before continuing
    const timer = setTimeout(() => {
      onLoaded();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          overflow: 'hidden'
        }}
      >
        <video 
          src={rVideo} 
          autoPlay 
          muted 
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0.8
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
