import { div } from 'framer-motion/client'
import React from 'react'
import StarsCanvas
 from '../components/Stars'
const Skills = () => {
  return (
    <div className='relative h-screen w-screen overflow-hidden'>
        <StarsCanvas />
        <div className='h-full w-full flex justify-center items-center'>
            
            <h1>Skills</h1>
        </div>
    </div>
  )
}

export default Skills