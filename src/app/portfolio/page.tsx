"use client";

import styled from '@emotion/styled';
import Header from '@/components/Header';

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: var(--background);
  color: var(--text);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
`;

const GridItem = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: #00ff00;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: 'Fira Code', monospace;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
  &:hover {
    transform: scale(1.05);
    background: rgba(0, 0, 0, 0.9);
  }
`;

const Portfolio = () => {
  // Sample data for showcases
  const showcases = [
    { id: 1, title: 'AI Project 1' },
    { id: 2, title: 'Web Development Project 2' },
    { id: 3, title: 'AI Project 3' },
    { id: 4, title: 'Web Development Project 4' },
    // Add more showcases as needed
  ];

  return (
    <>
      <Header />
      <PortfolioContainer>
        <h1 className="text-4xl font-bold mb-6">My Portfolio Works</h1>
        <Grid>
          {showcases.map(showcase => (
            <GridItem key={showcase.id}>
              {showcase.title}
            </GridItem>
          ))}
        </Grid>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
