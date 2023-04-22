import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Project from '../components/Project';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


function Home() {
  return (
    <div id='home'>
      <Hero />
      <About />
      <Work />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
