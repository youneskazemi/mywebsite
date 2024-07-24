"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPython, FaPlay, FaRobot } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = () => {
  const [code, setCode] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [output, setOutput] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const pythonCode = `
import random

def ai_greeting():
    greetings = (
        "Hello, human! I'm your friendly neighborhood AI.",
        "Greetings, earthling! Your digital assistant is online.",
        "Salutations! I'm here to compute your wildest dreams.",
        "Beep boop! Just kidding, I don't really beep.",
        "Welcome to the future! How may I assist you today?",
        "AI at your service! No task is too complex (except maybe understanding memes).",
        "Initiating small talk protocol... How about that local sports team?",
        "Greetings! I'm like a genie, but instead of wishes, I grant knowledge.",
        "Hello! I'm your AI assistant, fluent in over 6 million forms of communication.",
        "Hi there! I'm not Skynet, I promise. How can I help?"
    )
    return random.choice(greetings)

print(ai_greeting())
    `.trim();
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      setCode(pythonCode.substring(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === pythonCode.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const executeCode = () => {
    const greetings = [
      "Hello, human! I'm your friendly neighborhood AI.",
      "Greetings, earthling! Your digital assistant is online.",
      "Salutations! I'm here to compute your wildest dreams.",
      "Beep boop! Just kidding, I don't really beep.",
      "Welcome to the future! How may I assist you today?",
      "AI at your service! No task is too complex (except maybe understanding memes).",
      "Initiating small talk protocol... How about that local sports team?",
      "Greetings! I'm like a genie, but instead of wishes, I grant knowledge.",
      "Hello! I'm your AI assistant, fluent in over 6 million forms of communication.",
      "Hi there! I'm not Skynet, I promise. How can I help?"
    ];
    setOutput(greetings[Math.floor(Math.random() * greetings.length)]);
    setShowModal(true);
  };

  return (
    <div className="max-w-3xl mx-auto my-12">
      <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border-2 border-blue-500">
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-blue-500">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm text-blue-300 font-semibold">AI Terminal: Greeting Generator</span>
          <FaRobot className="text-blue-300" size={20} />
        </div>
        <div className="p-4 relative">
          <SyntaxHighlighter 
            language="python" 
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: '1rem',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              backgroundColor: 'transparent',
            }}
          >
            {code}
          </SyntaxHighlighter>
          {isTyping && (
            <motion.div 
              className="absolute bottom-4 right-4 w-2 h-4 bg-blue-500"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          )}
        </div>
        <div className="px-4 py-3 bg-gray-800 border-t border-blue-500">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={executeCode}
            disabled={isTyping}
            className={`px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600 transition duration-300 flex items-center ${isTyping ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <FaPlay className="mr-2" />
            Run AI Greeting
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-lg shadow-xl max-w-md w-full border-2 border-blue-500"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-blue-300">AI Greeting Output</h2>
                <div className="bg-gray-800 border-l-4 border-blue-500 text-blue-100 p-4 rounded-r-md mb-4">
                  <p className="font-bold text-blue-300">AI says:</p>
                  <pre className="mt-2 whitespace-pre-wrap font-mono text-sm">
                    {output}
                  </pre>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowModal(false)}
                  className="mt-6 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CodeSnippet;