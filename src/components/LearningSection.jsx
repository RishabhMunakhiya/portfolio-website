import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const LearningSection = () => {
  const topics = [
    "Data Structures",
    "Algorithms",
    "Data Science",
    "TypeScript",
    "Backend Development",
    "Software Engineering",
    "AI & Modern Tech",
    "OOPs",
    "Computer Networks",
    "Operating Systems"
  ];

  return (
    <section id="learning" className="section">
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <motion.div
          className="glass-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.8 }}
          style={{
            padding: '40px 50px',
            background: 'rgba(5, 8, 22, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            maxWidth: '900px',
            width: '100%',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Main heading inside the card as per the "remain the heading same" but following the new layout */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
            <BookOpen size={32} color="var(--cyan)" strokeWidth={2} />
            <h2 style={{ fontSize: '2rem', fontWeight: '600', color: 'white', margin: 0 }}>
              Currently Exploring
            </h2>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            {topics.map((topic, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 243, 255, 0.15)' }}
                style={{
                  padding: '10px 20px',
                  borderRadius: '30px',
                  border: '1px solid rgba(0, 243, 255, 0.2)',
                  background: 'rgba(0, 243, 255, 0.05)',
                  color: 'var(--cyan)',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'default',
                  transition: 'all 0.3s ease'
                }}
              >
                {topic}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningSection;
