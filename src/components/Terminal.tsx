import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal } from 'react-icons/fa';
import Link from 'next/link';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<JSX.Element[]>([<span key="welcome">Welcome to AI Universe. Type "help" for available commands.</span>]);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [output]);

  const scrollToBottom = () => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  };

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newOutput = [...output, <span key={output.length}>{`> ${input}`}</span>];

      switch (input.toLowerCase()) {
        case 'help':
          newOutput.push(
            <span key={output.length + 1}>
              Available commands:<br/>
              - about: Learn about Younes Kazemi<br/>
              - skills: View my technical skills<br/>
              - projects: Check out my AI projects<br/>
              - contact: Get my contact information<br/>
              - clear: Clear the terminal
            </span>
          );
          break;
        case 'about':
          newOutput.push(<span key={output.length + 1}>Younes Kazemi - AI enthusiast and web developer extraordinaire. Passionate about pushing the boundaries of artificial intelligence and creating innovative web solutions.</span>);
          break;
        case 'skills':
          newOutput.push(
            <span key={output.length + 1}>
              Skills:<br/>
              - AI & Machine Learning<br/>
              - React & Next.js<br/>
              - Node.js<br/>
              - Python<br/>
              - JavaScript/TypeScript<br/>
              - Data Analysis<br/>
              - Cloud Computing (AWS, GCP)
            </span>
          );
          break;
        case 'projects':
          newOutput.push(
            <span key={output.length + 1}>
              Exciting AI projects await! Check them out at{' '}
              <Link href="/portfolio" className="text-green-400 hover:text-green-300 underline">
                /portfolio
              </Link>
            </span>
          );
          break;
        case 'contact':
          newOutput.push(
            <span key={output.length + 1}>
              Email: youneskazemi9798@gmail.com<br/>
              LinkedIn: linkedin.com/in/younes-kazemi-9018a9b8<br/>
              GitHub: github.com/youneskazemi
            </span>
          );
          break;
        case 'clear':
          newOutput.length = 0;
          break;
        default:
          newOutput.push(<span key={output.length + 1}>{`Command not recognized: ${input}. Type 'help' for available commands.`}</span>);
      }

      setOutput(newOutput);
      setInput('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 rounded-lg shadow-lg border border-green-500 w-full max-w-md mx-auto overflow-hidden"
    >
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-green-400 flex items-center">
          <FaTerminal className="mr-2" />
          <span className="text-sm font-semibold">AI Universe Terminal</span>
        </div>
      </div>
      <div 
        ref={outputRef} 
        className="h-64 overflow-y-auto p-4 font-mono text-sm custom-scrollbar"
      >
        <AnimatePresence>
          {output.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-green-400 mb-1"
            >
              {line}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="border-t border-green-500 p-2">
        <div className="flex items-center bg-black rounded px-2">
          <span className="text-green-400 mr-2">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleCommand}
            className="bg-transparent border-none outline-none text-green-400 w-full"
            placeholder="Enter command..."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;