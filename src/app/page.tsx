"use client"

import Header from '@/components/Header';
import styled from '@emotion/styled';

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

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero>
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm [Younes Kazemi]. I'm a web developer.</p>
      </Hero>
    </>
  );
};

export default Home;
