import { div } from 'framer-motion/client'
import React from 'react'
import StarsCanvas from '../components/Stars'
import PurpleTag from '../components/PurpleTag'

const Skills = () => {
  return (
    <div className='relative h-screen w-screen overflow-hidden'>
        <StarsCanvas />
        <div className='h-full w-full flex flex-col justify-start items-center mt-30'>
          <PurpleTag  text="About me" width="120"/>
        </div>
    </div>
  )
}

export default Skills