"use client"

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="p-4 bg-light-background dark:bg-dark-background">
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
};

export default Header;
