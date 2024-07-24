"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import styled from '@emotion/styled';
import Link from 'next/link';

const ToggleSwitch = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.2rem;
  background: #1e1e1e;
  border-radius: 1.5rem;
  border: 2px solid #4caf50;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  width: 3.5rem;
  height: 2rem;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    background: #000;
    border-radius: 50%;
    transition: transform 0.3s ease, background 0.3s ease;
    color: #4caf50;
  }

  .moon {
    transform: translateX(0);
  }

  .sun {
    transform: translateX(1.5rem);
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--background);
  color: var(--text);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const IconContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #1e1e1e, #000);
  border-radius: 50%;
  color: #00ff00;
  font-size: 1.75rem;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.8);
  }
`;

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <HeaderContainer>
      <Link href="/" passHref>
        <IconContainer>P</IconContainer>
      </Link>
      <ToggleSwitch onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        <div className="icon" style={{ transform: theme === 'light' ? 'translateX(0)' : 'translateX(1.5rem)' }}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </div>
      </ToggleSwitch>
    </HeaderContainer>
  );
};

export default Header;
