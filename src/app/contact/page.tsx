"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaRobot } from 'react-icons/fa';

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
    setSubmitMessage('Thank you for your message! My AI assistant will process it and I\'ll get back to you soon.');
    setFormState({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-background to-light-secondary dark:from-dark-background dark:to-dark-secondary text-light-text dark:text-dark-text">
      <main className="container mx-auto px-4 py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Contact the AI Universe</h1>
          <p className="text-xl mb-8 text-light-accent dark:text-dark-accent">Ready to discuss the future of AI? Drop me a message!</p>
          
          <form onSubmit={handleSubmit} className="bg-light-secondary dark:bg-dark-secondary p-8 rounded-lg shadow-lg border border-light-accent dark:border-dark-accent">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text rounded border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary transition-all duration-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text rounded border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-3 py-2 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text rounded border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary transition-all duration-300"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-light-primary dark:bg-dark-primary text-light-background dark:text-dark-background rounded-full hover:bg-light-accent dark:hover:bg-dark-accent transition duration-300 flex items-center justify-center"
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
                className="mt-6 p-4 bg-light-accent dark:bg-dark-accent text-light-background dark:text-dark-background rounded-lg flex items-center justify-center"
              >
                <FaRobot className="mr-2 text-2xl animate-bounce" />
                <p>{submitMessage}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </main>
    </div>
  );
};

export default Contact;