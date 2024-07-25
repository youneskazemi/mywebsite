"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaJs, FaPython, FaReact, FaNodeJs, FaBrain, FaChartBar, FaRobot, FaEnvelope } from 'react-icons/fa';
import { TypewriterText, MatrixRain, FloatingIcon } from '@/components/UIComponents';

const SkillCard: React.FC<{ icon: React.ElementType; name: string; description: string }> = ({ icon: Icon, name, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-green-500"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Icon className="text-4xl mb-2 text-green-400" />
      <h3 className="text-lg font-semibold mb-2 text-green-300">
        <TypewriterText text={name} speed={50} />
      </h3>
      {isHovered && (
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-sm text-green-200"
        >
          <TypewriterText text={description} speed={20} />
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
      <main className="container mx-auto px-4 py-16 relative z-10">
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center"
          >
            <motion.div
              className="relative mb-8 md:mb-0 md:mr-8"
              whileHover={{ scale: 1.1, rotate: 2 }}
            >
              <Image
                src="/images/profile.png"
                alt="Younes Kazemi"
                width={200}
                height={200}
                className="rounded-full shadow-lg border-4 border-green-500"
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(0, 255, 0, 0.5)",
                    "0 0 20px rgba(0, 255, 0, 0.5)",
                    "0 0 10px rgba(0, 255, 0, 0.5)"
                  ]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
              />
            </motion.div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">
                <TypewriterText text="Younes Kazemi" />
              </h1>
              <p className="text-xl mb-4 text-green-300">
                <TypewriterText text="AI Enthusiast | Web Developer | Problem Solver" speed={50} />
              </p>
              <p className="max-w-lg text-green-200">
                <TypewriterText text="Welcome to my AI Universe! I'm passionate about exploring the frontiers of artificial intelligence and creating innovative solutions that push the boundaries of what's possible." speed={20} />
              </p>
            </div>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-green-400">
            <TypewriterText text="My AI Toolkit" />
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.name} icon={skill.icon} name={skill.name} description={skill.description} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-green-400">
            <TypewriterText text="Let's Connect" />
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-300">
            <TypewriterText text="I'm always excited to collaborate on innovative AI projects and explore new frontiers in technology. Whether you're a fellow enthusiast, a potential collaborator, or just curious about AI, I'd love to hear from you!" speed={30} />
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 0, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-green-600 text-black rounded-full hover:bg-green-700 transition duration-300"
          >
            <FaEnvelope className="mr-2" />
            Get in Touch
          </motion.a>
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
