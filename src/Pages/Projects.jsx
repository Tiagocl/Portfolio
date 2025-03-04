import React from 'react'
import StarsCanvas from '../components/Stars'
import PurpleTag from '../components/PurpleTag'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {

  const projects = [
  {
    image: 'https://placehold.co/150',
    title: 'Spotify Clone',
    description: 'A front-end focused Spotify clone with functionalities like music streaming, search, and user authentication.',
    technologies: ['React', 'Tailwind', 'JavaScript', 'Express'],
  },
  {
    image: 'https://placehold.co/150',
    title: 'Project 2',
    description: 'This is a description of project 2.',
    technologies: ['HTML', 'CSS', 'React'],
  },
  {
    image: 'https://placehold.co/150lder.com/150',
    title: 'Project 2',
    description: 'This is a description of project 2.',
    technologies: ['HTML', 'CSS', 'React'],
  },
  {
    image: 'https://placehold.co/150',
    title: 'Project 2',
    description: 'This is a description of project 2.',
    technologies: ['HTML', 'CSS', 'React'],
  },

 
];
  return (
    <div className='relative h-[200vh] w-screen overflow-hidden'>
        <StarsCanvas />

        <div className='h-full w-[90%] flex flex-col justify-start items-center m-auto mt-24 gap-6'>
            {/* <GradientSpan text="My Projects." /> */}
            <PurpleTag  text="Projects i worked on " width="175"/>
            <span className='text-[#E5E7EB]  text-xl tracking-wide italic'>
            "Every project is a step toward excellence"
            </span>

            <div className='w-full h-[80%] bg-transparent flex  justify-center gap-6'>
                <div className='w-[40%] h-full flex flex-col gap-6'>
                  {projects.slice(0,2).map((project,index) => (
                    <ProjectCard 
                      key={index}
                      image={project.image}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                    />
                  ))}
                  
                </div>
                <div className='w-[7%] h-full bg-blue-400'>

                </div>
                <div className='w-[40%] h-full bg-green-400 flex flex-col gap-6'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects