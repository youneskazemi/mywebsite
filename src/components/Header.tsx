import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaRobot, FaHome, FaProjectDiagram, FaUser, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: FaHome },
    { name: 'Portfolio', path: '/portfolio', icon: FaProjectDiagram },
    { name: 'About', path: '/about', icon: FaUser },
    { name: 'Contact', path: '/contact', icon: FaEnvelope },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black bg-opacity-50' : 'bg-transparent'
    } backdrop-filter backdrop-blur-lg ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaRobot className="text-2xl sm:text-3xl text-green-400" />
            </motion.div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
              AI Universe
            </span>
          </Link>

          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.path}>
                <motion.div
                  className={`relative px-3 py-2 rounded-md transition-colors duration-300 ${
                    pathname === item.path ? 'text-green-400' : 'text-gray-300 hover:text-green-400'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon />
                    <span>{item.name}</span>
                  </div>
                  {pathname === item.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400"
                      layoutId="underline"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-green-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, height: isMobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-black bg-opacity-90 backdrop-filter backdrop-blur-lg overflow-hidden"
      >
        <div className="container mx-auto px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`block py-2 px-4 ${
                pathname === item.path ? 'text-green-400' : 'text-gray-300 hover:text-green-400'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center space-x-2">
                <item.icon />
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

 
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      </div>
    </header>
  );
};

export default Header;