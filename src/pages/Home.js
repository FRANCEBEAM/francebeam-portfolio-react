import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Project from '../components/Project';
import Contact from '../components/Contact';

function Home() {
  return (
    <div className='main-wrapper'>
      <Hero />
      <About />
      <Work />
      <Project />
      <Contact />
    </div>
  )
}

export default Home
