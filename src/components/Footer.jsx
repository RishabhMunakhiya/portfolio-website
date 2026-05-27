import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--glass-border)', 
      padding: '40px 0', 
      textAlign: 'center',
      background: 'rgba(5, 8, 22, 0.8)',
      backdropFilter: 'blur(10px)',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a href="#" style={{ fontSize: '2rem', fontWeight: '800', fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.5px', color: '#ffffff', marginBottom: '20px', display: 'inline-block' }}>
            <span>Rishabh</span>
          </a>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Built with passion, creativity, and curiosity by Rishabh 😉
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
