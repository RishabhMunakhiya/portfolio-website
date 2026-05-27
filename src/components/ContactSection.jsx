import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const handleSend = () => {
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
    window.location.href = `mailto:rishim5503@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.h2 
          className="section-title heading-gradient"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Let's Connect
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', maxWidth: '1000px', margin: '0 auto' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Get In Touch</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '40px' }}>
              Let’s turn ambitious ideas into elegant, high-performance experiences powered by code and creativity.
            </p>
            
            <div style={{ display: 'flex', gap: '20px' }}>
              {[
                { icon: Github, link: "https://github.com/RishabhMunakhiya", color: "var(--cyan)" },
                { icon: Linkedin, link: "https://www.linkedin.com/in/rishabh-dtu27/", color: "var(--purple)" },
                { icon: Mail, link: "mailto:rishim5503@gmail.com", color: "var(--pink)" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  whileHover={{ scale: 1.2, rotate: 5, color: social.color, filter: `drop-shadow(0 0 10px ${social.color})` }}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ padding: '40px' }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '15px 20px',
                      background: 'rgba(0,0,0,0.2)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '10px',
                      color: 'white',
                      fontFamily: 'Inter, sans-serif',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--cyan)'; e.target.style.boxShadow = '0 0 10px rgba(0,243,255,0.2)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--glass-border)'; e.target.style.boxShadow = 'none'; }}
                  />
              </div>
              <div>
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '15px 20px',
                      background: 'rgba(0,0,0,0.2)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '10px',
                      color: 'white',
                      fontFamily: 'Inter, sans-serif',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--purple)'; e.target.style.boxShadow = '0 0 10px rgba(188,19,254,0.2)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--glass-border)'; e.target.style.boxShadow = 'none'; }}
                  />
              </div>
              <div>
                <textarea 
                    placeholder="Your Message" 
                    rows="5"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '15px 20px',
                      background: 'rgba(0,0,0,0.2)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '10px',
                      color: 'white',
                      fontFamily: 'Inter, sans-serif',
                      outline: 'none',
                      resize: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--pink)'; e.target.style.boxShadow = '0 0 10px rgba(255,126,179,0.2)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--glass-border)'; e.target.style.boxShadow = 'none'; }}
                  ></textarea>
              </div>
              <button 
                    type="button" 
                    className="btn-primary" 
                    onClick={handleSend}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%' }}
                  >
                    Send Message <Send size={18} />
                  </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
