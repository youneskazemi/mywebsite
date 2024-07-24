"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRobot, FaBrain, FaCode, FaTimes } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  github?: string;
  live?: string;
  details: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Chat Bot',
    description: 'A sophisticated chatbot using natural language processing.',
    image: '/images/project1.jpg',
    category: ['AI', 'NLP'],
    github: 'https://github.com/yourusername/chatbot',
    live: 'https://chatbot-demo.com',
    details: "This chatbot utilizes advanced NLP techniques to understand and respond to user queries in a human-like manner. It's built with Python and integrates with various APIs for enhanced functionality.",
    technologies: ['Python', 'TensorFlow', 'NLTK', 'Flask']
  },
  {
    id: 2,
    title: 'Machine Learning Dashboard',
    description: 'Interactive dashboard for visualizing ML model performance.',
    image: '/images/project2.jpg',
    category: ['ML', 'Data Visualization'],
    github: 'https://github.com/yourusername/ml-dashboard',
    details: 'A comprehensive dashboard that allows data scientists to visualize and analyze the performance of various machine learning models. It provides interactive charts and real-time updates.',
    technologies: ['React', 'D3.js', 'Python', 'Flask']
  },
  {
    id: 3,
    title: 'Neural Network Playground',
    description: 'Web-based tool for experimenting with neural networks.',
    image: '/images/project3.jpg',
    category: ['AI', 'Education'],
    live: 'https://nn-playground.com',
    details: "An interactive web application that allows users to build and train simple neural networks. It's designed as an educational tool to help beginners understand the basics of neural networks.",
    technologies: ['JavaScript', 'TensorFlow.js', 'React']
  },
  {
    id: 4,
    title: 'AI Research Paper Summarizer',
    description: 'Automatically generate summaries of AI research papers.',
    image: '/images/project4.jpg',
    category: ['NLP', 'Research'],
    github: 'https://github.com/yourusername/paper-summarizer',
    live: 'https://summarizer-demo.com',
    details: 'This tool uses advanced NLP techniques to automatically generate concise summaries of academic papers in the field of AI. It helps researchers quickly grasp the key points of papers.',
    technologies: ['Python', 'BERT', 'Transformers', 'Flask']
  },
];

const ProjectCard: React.FC<{ project: Project; setSelectedProject: (project: Project | null) => void }> = ({ project, setSelectedProject }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="bg-light-secondary dark:bg-dark-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      onClick={() => setSelectedProject(project)}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-light-primary dark:text-dark-primary">{project.title}</h3>
        <p className="text-light-text dark:text-dark-text mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.category.map((cat) => (
            <span key={cat} className="px-2 py-1 bg-light-accent dark:bg-dark-accent text-light-background dark:text-dark-background rounded-full text-sm">
              {cat}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-light-background dark:bg-dark-background rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-light-primary dark:text-dark-primary">{project.title}</h2>
          <button onClick={onClose} className="text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent">
            <FaTimes size={24} />
          </button>
        </div>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-4" />
        <p className="text-light-text dark:text-dark-text mb-4">{project.details}</p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-light-primary dark:text-dark-primary">Technologies Used:</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex space-x-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-light-accent dark:text-dark-accent hover:underline">
              <FaGithub size={20} className="mr-2" /> View on GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-light-accent dark:text-dark-accent hover:underline">
              <FaExternalLinkAlt size={20} className="mr-2" /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Fixed categories creation
  const categories = ['All'];
  projects.forEach(project => {
    project.category.forEach(cat => {
      if (!categories.includes(cat)) {
        categories.push(cat);
      }
    });
  });

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-background to-light-secondary dark:from-dark-background dark:to-dark-secondary text-light-text dark:text-dark-text">
      <main className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
        >
          AI Universe Projects
        </motion.h1>

        <div className="mb-8 flex justify-center space-x-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full ${
                filter === category
                  ? 'bg-light-primary dark:bg-dark-primary text-light-background dark:text-dark-background'
                  : 'bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text'
              } transition-colors duration-300`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} setSelectedProject={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex space-x-4 text-4xl text-light-primary dark:text-dark-primary"
          >
            <FaRobot className="animate-float" />
            <FaBrain className="animate-float" style={{ animationDelay: '0.5s' }} />
            <FaCode className="animate-float" style={{ animationDelay: '1s' }} />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;