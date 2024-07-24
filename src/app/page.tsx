"use client";

import Header from '@/components/Header';
import styled from '@emotion/styled';
import Link from 'next/link';

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--background);
  color: var(--text);
  text-align: center;
`;

const CodeSnippet = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: #00ff00;
  padding: 1rem;
  margin: 2rem 0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: 'Fira Code', monospace;
  animation: glow 1.5s ease-in-out infinite alternate;
`;

const Typewriter = styled.div`
  overflow: hidden;
  border-right: .15em solid #00ff00;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
  
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #00ff00; }
  }
`;

const CoolButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #00ff00;
  color: #1e1e1e;
  font-weight: bold;
  border-radius: 8px;
  text-transform: uppercase;
  margin-top: 2rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  &:hover {
    background: #00cc00;
    transform: scale(1.05);
  }
`;

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero>
        <h1 className="text-6xl font-bold mb-6">Welcome to My Portfolio</h1>
        <p className="text-2xl mb-6">Hi, I'm Younes Kazemi. I'm a web developer and AI enthusiast.</p>
        <Typewriter>
          <p>const aiLover = true;</p>
        </Typewriter>
        <CodeSnippet>
          {`
# Python code snippet
def greet():
    return "Hello, AI world!"

print(greet())
          `}
        </CodeSnippet>
        <Link href="/portfolio" passHref>
          <CoolButton>View My Works</CoolButton>
        </Link>
      </Hero>
    </>
  );
};

export default Home;
