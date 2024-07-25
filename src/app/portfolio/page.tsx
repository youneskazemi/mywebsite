"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFolder, FaFolderOpen, FaGithub, FaExternalLinkAlt, FaTerminal, FaCode, FaBrain } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Neural Network Visualizer',
    description: 'Interactive 3D visualization of neural network architectures',
    category: 'AI',
    github: 'https://github.com/yourusername/neural-network-visualizer',
    live: 'https://neural-network-viz.demo',
    techStack: ['React', 'Three.js', 'TensorFlow.js']
  },
  {
    id: 2,
    title: 'Quantum Algorithm Simulator',
    description: 'Simulation platform for quantum computing algorithms',
    category: 'Quantum Computing',
    github: 'https://github.com/yourusername/quantum-sim',
    techStack: ['Python', 'Qiskit', 'NumPy']
  },
  {
    id: 3,
    title: 'AI-Powered Code Refactorer',
    description: 'Automated code improvement using machine learning',
    category: 'AI',
    github: 'https://github.com/yourusername/ai-refactor',
    live: 'https://ai-refactor.demo',
    techStack: ['Python', 'TensorFlow', 'NLTK']
  },
  // Add more projects as needed
];

const MatrixRain = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix-rain') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      if (context) {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = '#0F0';
        context.font = fontSize + 'px monospace';

        for (let i = 0; i < rainDrops.length; i++) {
          const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
          context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

          if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
          }
          rainDrops[i]++;
        }
      }
    };

    const interval = setInterval(draw, 30);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas id="matrix-rain" className="w-full h-full"></canvas>
    </div>
  );
};

const TypewriterText = ({ text, speed = 50 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return <span>{displayText}</span>;
};

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
        <TypewriterText text={project.title} speed={30} />
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
      <TypewriterText text={project.description} speed={20} />
      <div className="mt-4">
        <p className="text-green-400">Category: {project.category}</p>
      </div>
      <div className="mt-4">
        <p className="text-green-400">Tech Stack:</p>
        <ul className="list-disc list-inside">
          {project.techStack.map((tech: string, index: number) => (
            <li key={index} className="text-green-300">
              <TypewriterText text={tech} speed={40} />
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
Name: [Your Name]
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
          <TypewriterText text="// Matrix Console: Project Showcase" speed={50} />
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl mb-4 flex items-center">
              <FaCode className="mr-2" />
              <TypewriterText text="$ ls projects/" speed={50} />
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
              <TypewriterText text="$ cat project_details.txt" speed={50} />
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