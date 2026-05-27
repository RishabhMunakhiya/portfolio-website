import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "ReWear – Community Clothing Exchange",
      tech: "React, Vite, CSS",
      description: "A futuristic clothing exchange platform with glassmorphism UI, responsive layouts, authentication, dashboard, and smooth transitions.",
      gradient: "linear-gradient(135deg, rgba(0, 243, 255, 0.2), rgba(188, 19, 254, 0.2))",
      githubLink: "https://github.com/RishabhMunakhiya/ReWear",
      demoLink: "https://github.com/RishabhMunakhiya/ReWear"
    },
    {
      title: "GitHub Project Explorer",
      tech: "React, GitHub API, Chart.js",
      description: "An advanced GitHub repository explorer with analytics, bookmarking, filtering, sorting, and futuristic UI.",
      gradient: "linear-gradient(135deg, rgba(188, 19, 254, 0.2), rgba(255, 126, 179, 0.2))",
      githubLink: "https://github.com/RishabhMunakhiya/Github-Project-Explorer",
      demoLink: "https://git-x.vercel.app/"
    },
    {
      title: "Book Management REST API",
      tech: "Node.js, Express.js",
      description: "A full-stack REST API for managing books with CRUD operations and robust backend architecture.",
      gradient: "linear-gradient(135deg, rgba(255, 126, 179, 0.2), rgba(0, 243, 255, 0.2))",
      githubLink: "https://github.com/RishabhMunakhiya/BookManagement",
      demoLink: "https://github.com/RishabhMunakhiya/BookManagement"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2 
          className="section-title heading-gradient"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="glass-panel"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              style={{
                position: 'relative',
                overflow: 'hidden',
                padding: '40px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '350px'
              }}
            >
              {/* Animated Gradient Overlay */}
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: project.gradient,
                  opacity: 0,
                  zIndex: 0,
                  transition: 'opacity 0.4s ease'
                }}
                whileHover={{ opacity: 1 }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '10px', fontWeight: '700' }}>{project.title}</h3>
                <span style={{ 
                  display: 'inline-block', 
                  color: 'var(--cyan)', 
                  fontSize: '0.9rem', 
                  marginBottom: '20px',
                  fontFamily: 'monospace'
                }}>
                  {project.tech}
                </span>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '30px' }}>
                  {project.description}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '15px', position: 'relative', zIndex: 1 }}>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: 'white', 
                  padding: '10px 20px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--cyan)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0,243,255,0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: 'white', 
                  padding: '10px 20px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--purple)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(188,19,254,0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
