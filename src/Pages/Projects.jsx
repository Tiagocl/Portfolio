import React, { useRef } from 'react';
import StarsCanvas from '../components/Stars';
import PurpleTag from '../components/PurpleTag';
import ProjectCard from '../components/ProjectCard';
import { useScroll, motion } from 'framer-motion';

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

  // Create a ref for the 300vh div (the parent div you want to track)
  const scrollDivRef = useRef(null);

  // Use useScroll to track the scroll progress of the parent div (300vh)
  const { scrollYProgress } = useScroll({
    target: scrollDivRef,  // Target the div you want to track
  });

  return (
    <div className='relative w-screen'>

      <StarsCanvas />
      
      {/* Main scrollable container with height of 300vh */}
      <div
        ref={scrollDivRef}
        className='h-[300vh] w-full overflow-y-scroll'
      >
        <div className='h-full w-[90%] flex flex-col justify-start items-center m-auto mt-24 gap-6'>
          <PurpleTag text="Projects I worked on " width="175" />
          <span className='text-[#E5E7EB] text-xl tracking-wide italic'>
            "Every project is a step toward excellence"
          </span>

          <div className='w-full h-[80%] bg-transparent flex justify-center gap-6'>
            <div className='w-[40%] h-full flex flex-col gap-6'>
              {projects.slice(0, 2).map((project, index) => (
                <ProjectCard
                  key={index}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                />
              ))}
            </div>

            {/* This is your 2% width div that will show the scroll progress */}
            <motion.div
              className='w-[2%] h-full bg-gray-500'
              style={{
                scaleY: scrollYProgress,  // Use scrollYProgress to scale the div
                transformOrigin: 'top',   // Make the scale happen from the top
              }}
            />

            <div className='w-[40%] h-full bg-green-400 flex flex-col gap-6'>
              {/* More content can go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
