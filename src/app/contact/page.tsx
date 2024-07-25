"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaRobot } from 'react-icons/fa';
import { TypewriterText, MatrixRain, FloatingIcon } from '@/components/UIComponents';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSubmitMessage("Thank you for your message! My AI assistant will process it and I'll get back to you soon.");
    setFormState({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      <MatrixRain />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">
            <TypewriterText text="Contact With Me" />
          </h1>
          <p className="text-xl mb-8 text-green-300">
            <TypewriterText text="Ready to discuss the future of AI? Drop me a message!" speed={30} />
          </p>

          <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg shadow-lg border border-green-500">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-green-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-black text-green-400 rounded border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-green-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-black text-green-400 rounded border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-green-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-3 py-2 bg-black text-green-400 rounded border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-green-600 text-black rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>

          <AnimatePresence>
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 p-4 bg-gray-900 text-green-400 rounded-lg flex items-center justify-center border border-green-500"
              >
                <FaRobot className="mr-2 text-2xl animate-pulse" />
                <p>{submitMessage}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </main>
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <FloatingIcon
            key={i}
            icon={FaRobot}
            delay={i * 0.5}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
