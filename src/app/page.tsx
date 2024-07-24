"use client"

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Link from 'next/link';
import { FaEnvelope, FaEye, FaPython, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Home: React.FC = () => {
  const [code, setCode] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const pythonCode = `
# Python code snippet
def greet():
    return "Hello, AI world!"

print(greet())
    `;
    let currentIndex = 0;
    const interval = setInterval(() => {
      setCode(pythonCode.substring(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === pythonCode.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const executeCode = () => {
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-background to-light-secondary dark:from-dark-background dark:to-dark-secondary text-light-text dark:text-dark-text">
      <main className="container mx-auto px-4 py-16">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent text-transparent bg-clip-text">
            Welcome to My AI Universe
          </h1>
          <p className="text-xl md:text-2xl mb-8">Hi, I'm Younes Kazemi. Web developer, AI enthusiast, and problem solver.</p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-block p-4 bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-lg"
          >
            <code className="text-sm md:text-base animate-typing">const aiLover = true;</code>
          </motion.div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-16"
        >
          <div className="bg-light-secondary dark:bg-dark-secondary p-6 rounded-lg shadow-lg">
            <pre className="text-light-primary dark:text-dark-primary overflow-x-auto">
              <code>{code}</code>
            </pre>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={executeCode}
              className="mt-4 px-4 py-2 bg-light-primary dark:bg-dark-primary text-light-background dark:text-dark-background rounded-full hover:bg-light-accent dark:hover:bg-dark-accent transition duration-300"
            >
              <FaPython className="inline-block mr-2" />
              Execute
            </motion.button>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link href="/portfolio" passHref>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn flex items-center"
            >
              <FaEye className="mr-2" />
              View My Works
            </motion.a>
          </Link>
          <Link href="/contact" passHref>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn flex items-center"
            >
              <FaEnvelope className="mr-2" />
              Contact Me
            </motion.a>
          </Link>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl mb-4">Connect with me</h2>
          <div className="flex justify-center space-x-4">
            <motion.a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light-primary dark:text-dark-primary hover:text-light-accent dark:hover:text-dark-accent"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light-primary dark:text-dark-primary hover:text-light-accent dark:hover:text-dark-accent"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
          </div>
        </motion.section>
      </main>

      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-light-secondary dark:bg-dark-secondary p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-light-primary dark:text-dark-primary">Execution Result</h2>
              <p className="text-light-text dark:text-dark-text">Hello, AI world!</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(false)}
                className="mt-4 px-4 py-2 bg-light-primary dark:bg-dark-primary text-light-background dark:text-dark-background rounded-full hover:bg-light-accent dark:hover:bg-dark-accent transition duration-300"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;