import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work'
import Project from '../components/Project'

function Home() {
  return (
    <div className='main-wrapper'>
      <Hero />
      <About />
      <Work />
      <Project />
    </div>
  )
}

export default Home
