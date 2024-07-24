import './globals.css';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Portfolio',
  description: 'My awesome portfolio',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text transition-colors duration-300">
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
