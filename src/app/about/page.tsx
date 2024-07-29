"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaJs, FaPython, FaReact, FaNodeJs, FaBrain, FaChartBar, FaRobot, FaEnvelope } from 'react-icons/fa';
import { TypewriterText, MatrixRain, FloatingIcon } from '@/components/UIComponents';
import Link from 'next/link';

const SkillCard: React.FC<{ icon: React.ElementType; name: string; description: string }> = ({ icon: Icon, name, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-gray-900 p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-green-500 overflow-hidden"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <Icon className="text-2xl mr-2 text-green-400" />
        <h3 className="text-md font-semibold text-green-300">
          {name}
        </h3>
      </div>
      {isHovered && (
        <motion.p 
          initial={{ opacity: 0, height: 0 }} 
          animate={{ opacity: 1, height: 'auto' }} 
          exit={{ opacity: 0, height: 0 }}
          className="text-xs mt-2 text-green-200"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

const About: React.FC = () => {
  const skills = [
    { icon: FaJs, name: "JavaScript", description: "Expert in modern JavaScript, including ES6+ features." },
    { icon: FaPython, name: "Python", description: "Proficient in Python for AI and data science applications." },
    { icon: FaReact, name: "React", description: "Building responsive and dynamic user interfaces with React." },
    { icon: FaNodeJs, name: "Node.js", description: "Server-side JavaScript for scalable backend solutions." },
    { icon: FaBrain, name: "Machine Learning", description: "Implementing ML algorithms and working with popular frameworks." },
    { icon: FaChartBar, name: "Data Analysis", description: "Extracting insights from complex datasets." },
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      <MatrixRain />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3 text-center md:text-left"
          >
            <motion.div
              className="relative w-40 h-40 mx-auto md:mx-0 mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Image
                src="/images/profile.png"
                alt="Younes Kazemi"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 0 2px rgba(0, 255, 0, 0.1)",
                    "0 0 0 4px rgba(0, 255, 0, 0.2)",
                    "0 0 0 6px rgba(0, 255, 0, 0.1)",
                    "0 0 0 8px rgba(0, 255, 0, 0.05)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-green-400">
              <TypewriterText text="Younes Kazemi" />
            </h1>
            <p className="text-lg mb-4 text-green-300">
              AI Enthusiast | Web Developer | Problem Solver
            </p>
            <motion.div 
              className="p-3 bg-gray-900 rounded-lg shadow-lg border border-green-500"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="text-sm">
                Welcome to my AI Universe! I&apos;m passionate about exploring the frontiers of artificial intelligence and creating innovative solutions that push the boundaries of what&apos;s possible.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-2/3"
          >
            <h2 className="text-2xl font-bold mb-4 text-center md:text-left text-green-400">
              My AI Toolkit
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <SkillCard key={skill.name} icon={skill.icon} name={skill.name} description={skill.description} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            Let&apos;s Connect
          </h2>
          <p className="text-md mb-6 max-w-2xl mx-auto text-green-300">
            I&apos;m always excited to collaborate on innovative AI projects and explore new frontiers in technology. Whether you&apos;re a fellow enthusiast, a potential collaborator, or just curious about AI, I&apos;d love to hear from you!
          </p>
          <Link href="/contact" passHref legacyBehavior>
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 0, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-2 bg-green-600 text-black rounded-full hover:bg-green-700 transition duration-300"
          >
            <FaEnvelope className="mr-2" />
            Get in Touch
          </motion.a>
          </Link>
        </motion.section>
      </main>
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <FloatingIcon
            key={i}
            icon={[FaRobot, FaBrain, FaChartBar][i % 3]}
            delay={i * 0.5}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
