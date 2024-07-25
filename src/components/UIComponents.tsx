// components/UIComponents.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export const TypewriterText: React.FC<{ text: string, speed?: number }> = ({ text, speed = 50}) => {
  return (
    <Typewriter
      words={[text]}
      loop={1} // Set to 0 for infinite loop
      cursor
      cursorStyle='_'
      typeSpeed={speed}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );
};

export const MatrixRain: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix-rain') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      if (context) {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = '#0F0';
        context.font = fontSize + 'px monospace';

        for (let i = 0; i < rainDrops.length; i++) {
          const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
          context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

          if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
          }
          rainDrops[i]++;
        }
      }
    };

    const interval = setInterval(draw, 30);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas id="matrix-rain" className="fixed inset-0 z-0" />;
};

export const FloatingIcon: React.FC<{ icon: React.ElementType; delay: number }> = ({ icon: Icon, delay }) => (
  <motion.div
    className="absolute text-green-400 opacity-50"
    animate={{
      y: ["0%", "100%"],
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      delay,
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  >
    <Icon size={24} />
  </motion.div>
);