"use client"
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFolder, FaFolderOpen, FaGithub, FaExternalLinkAlt, FaTerminal, FaCode, FaBrain } from 'react-icons/fa';
import { MatrixRain, TypewriterText } from '@/components/UIComponents';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Neural Network Visualizer',
    description: 'Interactive 3D visualization of neural network architectures',
    category: 'AI',
    github: 'https://github.com/yourusername/neural-network-visualizer',
    live: 'https://neural-network-viz.demo',
    techStack: ['React', 'Three.js', 'TensorFlow.js'],
    image: '/images/project1.jpg' // Add image path
  },
  {
    id: 2,
    title: 'Quantum Algorithm Simulator',
    description: 'Simulation platform for quantum computing algorithms',
    category: 'Quantum Computing',
    github: 'https://github.com/yourusername/quantum-sim',
    techStack: ['Python', 'Qiskit', 'NumPy'],
    image: '/images/project2.jpg' // Add image path
  },
  {
    id: 3,
    title: 'AI-Powered Code Refactorer',
    description: 'Automated code improvement using machine learning',
    category: 'AI',
    github: 'https://github.com/yourusername/ai-refactor',
    live: 'https://ai-refactor.demo',
    techStack: ['Python', 'TensorFlow', 'NLTK'],
    image: '/images/project1.jpg' // Add image path
  },
  // Add more projects as needed
];



const ProjectItem = ({ project, onSelect }: { project: any; onSelect: (project: any) => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      whileHover={{ scale: 1.05 }}
      className="mb-4 cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <div className="flex items-center text-green-400 hover:text-green-300">
        <FaFolder className="mr-2" />
        <TypewriterText text={project.title} speed={30} cursor={false} />
      </div>
    </motion.div>
  );
};

const ProjectDetails = ({ project, onClose }: { project: any; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-black bg-opacity-75 p-6 rounded-lg border border-green-500"
    >
      <div className="flex items-center mb-4">
        <FaFolderOpen className="text-green-400 mr-2" />
        <h2 className="text-2xl text-green-400">{project.title}</h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-4">
          <p>{project.description}</p>
          <div className="mt-4">
            <p className="text-green-400">Category: {project.category}</p>
          </div>
          <div className="mt-4">
            <p className="text-green-400">Tech Stack:</p>
            <ul className="list-disc list-inside">
              {project.techStack.map((tech: string, index: number) => (
                <li key={index} className="text-green-300">
                  <TypewriterText text={tech} speed={40} cursor={false}/>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-400 hover:text-green-300"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-400 hover:text-green-300"
              >
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="mt-6 text-green-400 hover:text-green-300"
          >
            [Close]
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const CommandPrompt = ({ onCommand }: { onCommand: (command: string) => void }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCommand(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="flex items-center">
        <span className="text-green-400 mr-2">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent border-none outline-none text-green-400 flex-grow"
          placeholder="Type a command..."
        />
      </div>
    </form>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [commandOutput, setCommandOutput] = useState('');

  const handleCommand = useCallback((command: string) => {
    switch (command.toLowerCase()) {
      case 'help':
        setCommandOutput(`
Available commands:
- help: Show this help message
- ls: List all projects
- clear: Clear the command output
- about: Show information about me
        `);
        break;
      case 'ls':
        setCommandOutput(projects.map(p => p.title).join('\n'));
        break;
      case 'clear':
        setCommandOutput('');
        break;
      case 'about':
        setCommandOutput(`
Name: Younes Kazemi
Role: AI Engineer & Full Stack Developer
Skills: Machine Learning, Web Development, Quantum Computing
        `);
        break;
      default:
        setCommandOutput(`Command not found: ${command}. Type 'help' for available commands.`);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      <MatrixRain />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl mb-8 flex items-center"
        >
          <FaTerminal className="mr-4" />
          <TypewriterText text="// Matrix Console: Project Showcase" speed={50} cursor={false} />
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl mb-4 flex items-center">
              <FaCode className="mr-2" />
              <TypewriterText text="$ ls projects/" speed={50} cursor={false}/>
            </h2>
            <AnimatePresence>
              {projects.map((project) => (
                <ProjectItem
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                />
              ))}
            </AnimatePresence>
          </div>
          <div>
            <h2 className="text-2xl mb-4 flex items-center">
              <FaBrain className="mr-2" />
              <TypewriterText text="$ cat project_details.txt" speed={50} cursor={false}/>
            </h2>
            <AnimatePresence>
              {selectedProject && (
                <ProjectDetails
                  project={selectedProject}
                  onClose={() => setSelectedProject(null)}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
        <CommandPrompt onCommand={handleCommand} />
        <pre className="mt-4 text-green-300">{commandOutput}</pre>
      </div>
    </div>
  );
};

export default Portfolio;