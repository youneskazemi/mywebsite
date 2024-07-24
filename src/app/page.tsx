"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaEye, FaGithub, FaLinkedin, FaRobot, FaBrain, FaCode } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import CodeSnippet from '@/components/CodeSnippet';
import { IconType } from 'react-icons';

interface FloatingIconProps {
  icon: IconType;
  delay: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ icon: Icon, delay }) => (
  <motion.div
    className="absolute text-blue-300 opacity-50"
    animate={{
      y: ["0%", "100%"],
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      delay,
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  >
    <Icon size={24} />
  </motion.div>
);

const Home: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const fullText = "AI Enthusiast | Web Developer | Problem Solver";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setCurrentText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(intervalId);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-10"></div>
        {[...Array(10)].map((_, i) => (
          <FloatingIcon
            key={i}
            icon={[FaRobot, FaBrain, FaCode][i % 3]}
            delay={i * 0.5}
          />
        ))}
      </div>
      
      <main className="container mx-auto px-4 py-16 relative z-10">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Welcome to My AI Universe
          </h1>
          <p className="text-xl md:text-2xl mb-8">Hi, I'm Younes Kazemi.</p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-block p-4 bg-gray-800 rounded-lg shadow-lg border border-blue-500"
          >
            <code className="text-sm md:text-base text-blue-300">{currentText}</code>
          </motion.div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-16"
        >
          <CodeSnippet />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link href="/portfolio" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="btn flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition duration-300"
            >
              <FaEye className="mr-2" />
              Explore My AI Projects
            </motion.a>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(167, 139, 250, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="btn flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition duration-300"
            >
              <FaEnvelope className="mr-2" />
              Connect with Me
            </motion.a>
          </Link>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl mb-4 text-blue-300">Join My AI Network</h2>
          <div className="flex justify-center space-x-4">
            <motion.a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={32} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={32} />
            </motion.a>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Home;