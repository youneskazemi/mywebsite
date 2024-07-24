"use client"

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

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
    open: { opacity: 1, y: 0, transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { opacity: 0, y: "-100%", transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  }

  const itemVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: -20, opacity: 0 }
  };

  return (
    <header className="bg-light-secondary dark:bg-dark-secondary text-light-primary dark:text-dark-primary">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" passHref>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-3xl font-bold bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent text-transparent bg-clip-text"
          >
            YK
          </motion.a>
        </Link>

        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} passHref>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-light-background dark:bg-dark-background hover:bg-light-border dark:hover:bg-dark-border transition-colors duration-200"
          >
            {theme === 'dark' ? <FaSun className="text-dark-accent" /> : <FaMoon className="text-light-accent" />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-full bg-light-background dark:bg-dark-background hover:bg-light-border dark:hover:bg-dark-border transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            className="md:hidden bg-light-background dark:bg-dark-background absolute top-full left-0 right-0 z-20 overflow-hidden"
          >
            <motion.div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link href={item.path} passHref>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block py-2 hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
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