"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const PortfolioCard: React.FC<{
  title: string;
  description: string;
  image: string;
  github?: string;
  live?: string;
  index: number;
}> = ({ title, description, image, github, live, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-light-secondary dark:bg-dark-secondary rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-light-primary dark:text-dark-primary">{title}</h3>
      <p className="text-light-text dark:text-dark-text mb-4">{description}</p>
      <div className="flex space-x-4">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-light-primary dark:text-dark-primary hover:text-light-accent dark:hover:text-dark-accent">
            <FaGithub size={24} />
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="text-light-primary dark:text-dark-primary hover:text-light-accent dark:hover:text-dark-accent">
            <FaExternalLinkAlt size={24} />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'AI-Powered Chat Bot',
      description: 'A sophisticated chatbot using natural language processing.',
      image: '/images/project1.jpg',
      github: 'https://github.com/yourusername/chatbot',
      live: 'https://chatbot-demo.com',
    },
    {
      title: 'Machine Learning Dashboard',
      description: 'Interactive dashboard for visualizing ML model performance.',
      image: '/images/project2.jpg',
      github: 'https://github.com/yourusername/ml-dashboard',
    },
    {
      title: 'Neural Network Playground',
      description: 'Web-based tool for experimenting with neural networks.',
      image: '/images/project1.jpg',
      live: 'https://nn-playground.com',
    },
    {
      title: 'AI Research Paper Summarizer',
      description: 'Automatically generate summaries of AI research papers.',
      image: '/images/project2.jpg',
      github: 'https://github.com/yourusername/paper-summarizer',
      live: 'https://summarizer-demo.com',
    },
  ];

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <main className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-light-primary dark:text-dark-primary"
        >
          My AI Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;