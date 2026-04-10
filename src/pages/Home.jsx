import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Statistics from '../components/Statistics';

const Home = () => {
  return (
    <>
      <Hero />
      {/* We can show a preview or just the original structure on home */}
      <About />
    </>
  );
};

export default Home;
