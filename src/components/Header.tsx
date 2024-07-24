"use client"

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaTimes, FaRobot } from 'react-icons/fa';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const variants = {
    open: { opacity: 1, height: 'auto', transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { opacity: 0, height: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  }

  const itemVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: -20, opacity: 0 }
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl font-bold flex items-center"
            >
              <FaRobot className="mr-2 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">AI Universe</span>
            </motion.a>
          </Link>

          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.path} passHref legacyBehavior>
                <motion.a
                  whileHover={{ scale: 1.1, color: '#60a5fa' }}
                  whileTap={{ scale: 0.9 }}
                  className="relative overflow-hidden group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </motion.a>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            className="md:hidden bg-gray-800 overflow-hidden"
          >
            <motion.div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link href={item.path} passHref legacyBehavior>
                    <motion.a
                      whileHover={{ scale: 1.05, x: 10, color: '#60a5fa' }}
                      whileTap={{ scale: 0.95 }}
                      className="block py-2 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;