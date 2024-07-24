"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaJs, FaPython, FaReact, FaNodeJs, FaBrain, FaChartBar } from 'react-icons/fa';

const About: React.FC = () => {
  const skills = [
    { name: 'JavaScript', icon: FaJs },
    { name: 'Python', icon: FaPython },
    { name: 'React', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Machine Learning', icon: FaBrain },
    { name: 'Data Analysis', icon: FaChartBar },
  ];

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <main className="container mx-auto px-4 py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <Image
              src="/images/profile.png"
              alt="Younes Kazemi"
              width={200}
              height={200}
              className="rounded-full mx-auto shadow-lg border-4 border-light-primary dark:border-dark-primary"
            />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-light-primary dark:text-dark-primary">About Me</h1>
          <p className="text-xl mb-8">
            Hi, I'm Younes Kazemi. I'm a web developer and AI enthusiast. I love coding, learning new technologies, and solving complex problems. My passion for AI drives me to continuously improve my skills and stay updated with the latest advancements in the field.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-light-primary dark:text-dark-primary">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className="bg-light-secondary dark:bg-dark-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <skill.icon className="text-4xl mb-4 mx-auto text-light-accent dark:text-dark-accent" />
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-light-primary dark:text-dark-primary">Let's Connect</h2>
          <p className="text-xl mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just chat about technology!
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-light-primary dark:bg-dark-primary text-light-background dark:text-dark-background rounded-full hover:bg-light-accent dark:hover:bg-dark-accent transition duration-300"
          >
            Get in Touch
          </motion.a>
        </motion.section>
      </main>
    </div>
  );
};

export default About;