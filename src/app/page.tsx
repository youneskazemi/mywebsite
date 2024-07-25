"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaEnvelope, FaEye, FaGithub, FaLinkedin, FaRobot, FaBrain, FaCode } from 'react-icons/fa';
import { TypewriterText, MatrixRain, FloatingIcon } from '@/components/UIComponents';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      <MatrixRain />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-green-400">
            <TypewriterText text="Welcome to My AI Universe" />
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-300">
            <TypewriterText text="Hi, I'm Younes Kazemi." speed={50} />
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-block p-4 bg-gray-900 rounded-lg shadow-lg border border-green-500"
          >
            <TypewriterText text="AI Enthusiast | Web Developer | Problem Solver" speed={30} />
          </motion.div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link href="/portfolio" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="btn flex items-center bg-green-600 hover:bg-green-700 text-black px-6 py-3 rounded-full transition duration-300"
            >
              <FaEye className="mr-2" />
              Explore My AI Projects
            </motion.a>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="btn flex items-center bg-blue-600 hover:bg-blue-700 text-black px-6 py-3 rounded-full transition duration-300"
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
          <h2 className="text-2xl mb-4 text-green-300">Join My AI Network</h2>
          <div className="flex justify-center space-x-4">
            <motion.a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-green-400 hover:text-green-300"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={32} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-green-400 hover:text-green-300"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={32} />
            </motion.a>
          </div>
        </motion.section>
      </main>
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <FloatingIcon
            key={i}
            icon={[FaRobot, FaBrain, FaCode][i % 3]}
            delay={i * 0.5}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;