"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/yourusername", name: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", name: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/yourusername", name: "Twitter" },
  ];

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setOutput(prev => [...prev, `> ${command}`]);
      
      switch (command.toLowerCase()) {
        case 'help':
          setOutput(prev => [...prev, 'Available commands: about, contact, social, clear']);
          break;
        case 'about':
          setOutput(prev => [...prev, 'Younes Kazemi - AI enthusiast and web developer']);
          break;
        case 'contact':
          setOutput(prev => [...prev, 'Email: younes@example.com']);
          break;
        case 'social':
          setOutput(prev => [...prev, 'Social links:', ...socialLinks.map(link => `- ${link.name}: ${link.href}`)]);
          break;
        case 'clear':
          setOutput([]);
          break;
        default:
          setOutput(prev => [...prev, 'Command not recognized. Type "help" for available commands.']);
      }
      
      setCommand('');
    }
  };

  useEffect(() => {
    setOutput(['Welcome to the AI Universe Terminal. Type "help" for available commands.']);
  }, []);

  return (
    <footer className={`bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg text-green-400 py-8 font-mono relative overflow-hidden border-t border-green-400 border-opacity-30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mb-4 border border-green-400 border-opacity-30 rounded-lg p-4 h-40 overflow-y-auto bg-black bg-opacity-20 backdrop-filter backdrop-blur-md">
          <AnimatePresence>
            {output.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {line}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex items-center mb-4 bg-black bg-opacity-20 backdrop-filter backdrop-blur-md rounded-md px-3 py-2">
          <span className="text-green-400 mr-2">$</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyPress={handleCommand}
            className="bg-transparent border-none outline-none text-green-400 flex-grow"
            placeholder="Enter command..."
          />
        </div>
        <div className="flex justify-between items-center text-sm">
          <p className="text-green-400 text-opacity-80">© {currentYear} Younes Kazemi. Powered by AI.</p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors duration-200"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;