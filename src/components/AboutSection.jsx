import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, TrendingUp, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  const cards = [
    {
      title: "Frontend Development",
      description: "Building responsive, pixel-perfect, and highly interactive user interfaces using modern frameworks like React and Vite.",
      icon: Code2,
      color: "var(--cyan)"
    },
    {
      title: "Problem Solving",
      description: "Tackling complex architectural challenges and optimizing algorithms to ensure high performance and scalability.",
      icon: Lightbulb,
      color: "var(--purple)"
    },
    {
      title: "DSA Journey",
      description: "Passionate about Data Structures and Algorithms, constantly honing my logic by solving problems and participating in coding contests.",
      icon: TrendingUp,
      color: "var(--pink)"
    },
    {
      title: "Software Engineering",
      description: "Pursuing B.Tech at Delhi Technological University (DTU), building a strong foundation in computer science and software design.",
      icon: GraduationCap,
      color: "var(--cyan)"
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2 
          className="section-title heading-gradient"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <style>
          {`
            .about-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 30px;
            }
            @media (min-width: 768px) {
              .about-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
          `}
        </style>
        <div className="about-grid">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="glass-panel"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, type: 'spring', damping: 20 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5, 
                rotateX: -5,
                boxShadow: `0 10px 30px ${card.color.replace(')', ', 0.2)').replace('var(', '').replace(')', '')}` // simplified fallback shadow
              }}
              style={{
                padding: '40px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                gap: '20px',
                height: '100%',
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <div style={{ marginBottom: '10px' }}>
                <card.icon size={45} color={card.color} strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '700', color: 'white' }}>{card.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
