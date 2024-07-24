"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaJs, FaPython, FaReact, FaNodeJs, FaBrain, FaChartBar, FaRobot, FaEnvelope } from 'react-icons/fa';

const SkillCard: React.FC<{ icon: React.ElementType; name: string; description: string }> = ({ icon: Icon, name, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-light-secondary dark:bg-dark-secondary p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Icon className="text-4xl mb-2 text-light-accent dark:text-dark-accent" />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      {isHovered && (
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-sm"
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
    <div className="min-h-screen bg-gradient-to-br from-light-background to-light-secondary dark:from-dark-background dark:to-dark-secondary text-light-text dark:text-dark-text">
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center"
          >
            <Image
              src="/images/profile.png"
              alt="Younes Kazemi"
              width={200}
              height={200}
              className="rounded-full shadow-lg border-4 border-light-primary dark:border-dark-primary mb-8 md:mb-0 md:mr-8"
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Younes Kazemi</h1>
              <p className="text-xl mb-4 text-light-accent dark:text-dark-accent">
                AI Enthusiast | Web Developer | Problem Solver
              </p>
              <p className="max-w-lg">
                Welcome to my AI Universe! I'm passionate about exploring the frontiers of artificial intelligence and creating innovative solutions that push the boundaries of what's possible.
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
          <h2 className="text-3xl font-bold mb-8 text-center text-light-primary dark:text-dark-primary">My AI Toolkit</h2>
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
          <h2 className="text-3xl font-bold mb-8 text-light-primary dark:text-dark-primary">Let's Connect</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative AI projects and explore new frontiers in technology. Whether you're a fellow enthusiast, a potential collaborator, or just curious about AI, I'd love to hear from you!
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-light-primary dark:bg-dark-primary text-light-background dark:text-dark-background rounded-full hover:bg-light-accent dark:hover:bg-dark-accent transition duration-300"
          >
            <FaEnvelope className="mr-2" />
            Get in Touch
          </motion.a>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <FaRobot className="inline-block text-6xl text-light-accent dark:text-dark-accent animate-bounce" />
        </motion.div>
      </main>
    </div>
  );
};

export default About;