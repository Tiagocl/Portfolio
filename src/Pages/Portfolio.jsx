import React from 'react'
import Intro from './Intro'
import GlowingMouse from '../components/GlowingMouse'
import Skills from './Skills'
import Projects from './Projects'

const Portfolio = () => {

  return (
    
    <main className='relative z-0 background-text '>
    <GlowingMouse />
    <Intro />
    <Skills />
    <Projects />
    </main>
  )
}

export default Portfolio