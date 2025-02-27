import React from 'react'
import StarsCanvas from '../components/Stars'
import GradientSpan from '../components/GradientSpan'
import PurpleTag from '../components/PurpleTag'

const Projects = () => {
  return (
    <div className='relative h-[200vh] w-screen overflow-hidden'>
        <StarsCanvas />

        <div className='h-full w-[90%] flex flex-col justify-start items-center m-auto mt-24 gap-6'>
            {/* <GradientSpan text="My Projects." /> */}
            <PurpleTag  text="Projects i worked on " width="175"/>
            <span className='text-[#E5E7EB]  text-xl tracking-wide italic'>
            "Every project is a step toward excellence"
            </span>

            <div className='w-full h-[50%] bg-red-400 flex flex-col justify-start items-center gap-6'>
                
            </div>
        </div>
    </div>
  )
}

export default Projects