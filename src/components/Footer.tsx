"use client";

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-secondary dark:bg-dark-secondary text-light-primary dark:text-dark-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Younes Kazemi. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            {[
              { icon: FaGithub, href: "https://github.com/yourusername" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername" },
              { icon: FaTwitter, href: "https://twitter.com/yourusername" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-primary dark:text-dark-primary hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <item.icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;