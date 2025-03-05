import React from 'react'
import ProjectIcon from './ProjectIcon'

const ProjectCard = ({image,title,description,technologies}) => {
  return (
    <div className="flex flex-col gap-5 w-[105%] -translate-x-5 h-[410px] bg-[#040014] rounded-2xl p-5 shadow-2xl border border-white/[0.1]">
      <img src={image} alt={title} className='w-full h-48 object-cover rounded-md' />

      <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-2'>
      <h1 className='font-bold lg:text-2xl md:text-xl text-base tracking-[0.2px] line-clamp-1'>{title}</h1>

      <p className='text-[#9CA3AF] font-light tracking-wide w-full '>{description}</p>
      </div>
      <div className='flex items-center '>
        {technologies.map((tech,index) => (
          <div
          key={index}
          className='-ml-1 first:ml-0 rounded-full border border-white/[0.1] p-1 bg-[#0D1125] w-10 h-10 flex items-center justify-center'
          >
          <ProjectIcon technology={tech} />
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default ProjectCard