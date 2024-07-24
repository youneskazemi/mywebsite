"use client";
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              &copy; {currentYear} Younes Kazemi. Crafted with 
            </motion.p>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1], 
                color: ['#ef4444', '#ec4899', '#ef4444'] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity 
              }}
              className="mx-1"
            >
              <FaHeart />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              and AI
            </motion.p>
          </div>
          <div className="flex space-x-4">
            {[
              { icon: FaGithub, href: "https://github.com/yourusername", color: "#6e5494" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", color: "#0077b5" },
              { icon: FaTwitter, href: "https://twitter.com/yourusername", color: "#1da1f2" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-200"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  color: item.color
                }}
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