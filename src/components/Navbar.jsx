import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Learning', href: '#learning' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          padding: scrolled ? '15px 0' : '30px 0',
          backgroundColor: scrolled ? 'rgba(5, 8, 22, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
          zIndex: 1000,
          transition: 'padding 0.4s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.4s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ fontSize: '1.8rem', fontWeight: '800', fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.5px', color: '#ffffff' }} onClick={() => setIsMobileMenuOpen(false)}>
            <span>Rishabh</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hide-on-mobile" style={{ display: 'flex', gap: '30px', margin: 0, padding: 0 }}>
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a 
                  href={link.href}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: 'var(--text-secondary)',
                    transition: 'color 0.3s ease',
                    position: 'relative',
                    padding: '5px 0'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = 'var(--cyan)';
                    e.currentTarget.style.textShadow = '0 0 10px rgba(0, 243, 255, 0.5)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="show-on-mobile"
            onClick={() => setIsMobileMenuOpen(true)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--cyan)',
              cursor: 'pointer',
              zIndex: 1100
            }}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', stiffness: 250, damping: 30 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(5, 8, 22, 0.95)',
              backdropFilter: 'blur(20px)',
              zIndex: 2000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '25px',
                right: '24px',
                background: 'transparent',
                border: 'none',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              <X size={32} />
            </button>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'center' }}>
              {navLinks.map((link, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05, type: 'spring' }}
                >
                  <a 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: 'white',
                      fontFamily: 'Outfit, sans-serif'
                    }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
