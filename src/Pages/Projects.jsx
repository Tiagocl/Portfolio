import React, {memo, useRef} from 'react'
import StarsCanvas from '../components/Stars'
import PurpleTag from '../components/PurpleTag'
import ProjectCard from '../components/ProjectCard'
import { useScroll,motion,useMotionValueEvent,useSpring } from 'motion/react'


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
    image: 'https://placehold.co/150',
    title: 'Project 3',
    description: 'This is a description of project 2.',
    technologies: ['HTML', 'CSS', 'React'],
  },
  {
    image: 'https://placehold.co/150',
    title: 'Project 4',
    description: 'This is a description of project 2.',
    technologies: ['HTML', 'CSS', 'React'],
  },

 
];

const container = useRef(null);
const { scrollYProgress } = useScroll({
  target: container,
  offset: ["start end", "end, start"],
});

const scaleY = useSpring(scrollYProgress, {
  stiffness: 400,
  damping:90,
  restDelta: 0.001,
});

useMotionValueEvent(scrollYProgress,"change", (value) => {
  console.log("Y = " + value);
}
);

  return (
    <div ref={container} className='relative h-[210vh] w-screen'>
        {/* <StarsCanvas /> */}

        <div className='h-full w-[90%] flex flex-col justify-start items-center m-auto mt-24 gap-6'>
            {/* <GradientSpan text="My Projects." /> */}
            <PurpleTag  text="Projects i worked on " width="175"/>
            <span className='text-[#E5E7EB]  text-xl tracking-wide italic'>
            "Every project is a step toward excellence"
            </span>

            <div className='w-full flex justify-center items-start gap-5'>
              <div className=' w-[40%] flex flex-col gap-32'>
              {projects.slice(0, 2).map((project, index) => (
              <ProjectCard key={`left-${index}`} {...project} />
            ))}
              </div>
              <motion.div 
              className='h-full w-[1%] bg-gradient-to-b from-purple-500
          to-cyan-500 rounded-full' 
          style={{
            scaleY,
            transformOrigin: "top",
            top: 0,
            position: "sticky",
          }}
          />
              
              <div className=' w-[40%] flex flex-col gap-32 mt-40'>
              {projects.slice(2, 4).map((project, index) => (
              <ProjectCard key={`right-${index}`} {...project} />
            ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects