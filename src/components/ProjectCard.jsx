import React from 'react'
import ProjectIcon from './ProjectIcon'
import { GoArrowUpRight } from "react-icons/go";
import { Tilt } from 'react-tilt'

const ProjectCard = ({image,title,description,technologies}) => {
  return (
    <Tilt
     options={{
        reverse: true,
        max: 25,
        scale: 1,
        speed: 0,
        
     }}>
    <div className="flex flex-col gap-5 w-full  h-[410px] bg-[#040014] rounded-2xl p-5 shadow-2xl border border-white/[0.1]">
      <img src={image} alt={title} className='w-full h-48 object-cover rounded-md' />

      <div className='flex flex-col gap-7'>
      <div className='flex flex-col gap-2'>
      <h1 className='font-bold lg:text-2xl md:text-xl text-base tracking-[0.2px] line-clamp-1'>{title}</h1>

      <p className='text-[#BEC1DD] font-light tracking-wide w-full '>{description}</p>
      </div>
      <div className='flex justify-between items-center '>
        <div className='flex'>
        {technologies.map((tech,index) => (
          <div
          key={index}
          className='-ml-1 first:ml-0 rounded-full border border-white/[0.1] p-1 bg-[#0D1125] w-10 h-10 flex items-center justify-center'
          >
          <ProjectIcon technology={tech} />
          </div>
        ))}
        </div>
        <a
        className='text-[#C7A9F5] font-medium text-[19px] tracking-wide' 
        href="https://github.com/Tiagocl/Spotify-Clone">Check Project 
        <GoArrowUpRight size={22} className='inline-block ml-1' />
        </a>
      </div>
      </div>
    </div>
    </Tilt>
  )
}

export default ProjectCard