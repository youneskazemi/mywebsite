"use client";
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-green-400 font-mono">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col min-h-screen relative">
            <Header className="z-10" />
            <motion.main 
              className="flex-grow container mx-auto px-4 py-8 mt-16 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.main>
            <Footer className="z-10" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;