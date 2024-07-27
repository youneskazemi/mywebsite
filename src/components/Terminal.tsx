import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal } from 'react-icons/fa';
import Link from 'next/link';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<JSX.Element[]>([<span key="welcome">Welcome to AI Universe. Type "help" for available commands.</span>]);


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
              - joke: Hear an AI-related joke<br/>
              - quote: Get an inspiring tech quote<br/>
              - clear: Clear the terminal<br/>
              - exit: Close the terminal (just kidding, you can't escape)
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
              Email: younes@example.com<br/>
              LinkedIn: linkedin.com/in/youneskazemi<br/>
              GitHub: github.com/youneskazemi
            </span>
          );
          break;
        case 'joke':
          const jokes = [
            "Why did the AI cross the road? To get to the other dataset!",
            "How does an AI take its coffee? With a byte of sugar!",
            "What do you call an AI that sings? Artificial Intelligentune!",
            "Why was the computer cold? It left its Windows open!",
            "How does a computer scientist make tea? It uses algo-rhythm!"
          ];
          newOutput.push(<span key={output.length + 1}>{jokes[Math.floor(Math.random() * jokes.length)]}</span>);
          break;
        case 'quote':
          const quotes = [
            "The computer was born to solve problems that did not exist before. - Bill Gates",
            "The science of today is the technology of tomorrow. - Edward Teller",
            "Technology is best when it brings people together. - Matt Mullenweg",
            "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life. - Bill Gates",
            "The only way to predict the future is to have power to shape the future. - Eric Hoffer"
          ];
          newOutput.push(<span key={output.length + 1}>{quotes[Math.floor(Math.random() * quotes.length)]}</span>);
          break;
        case 'clear':
          newOutput.length = 0;
          break;
        case 'exit':
          newOutput.push(<span key={output.length + 1}>Nice try, but there's no escaping the AI Universe! 😉</span>);
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
      <div className="h-64 overflow-y-auto p-4 font-mono text-sm">
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