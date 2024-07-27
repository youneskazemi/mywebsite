import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/youneskazemi", name: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/younes-kazemi-9018a9b8/", name: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/", name: "Twitter" },
  ];

  return (
    <footer className={`bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg text-green-400 py-8 font-mono relative overflow-hidden border-t border-green-400 border-opacity-30 ${className}`}>
      <div className="container mx-auto px-4">
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