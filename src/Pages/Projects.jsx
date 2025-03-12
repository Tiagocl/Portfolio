import React, { memo, useRef } from 'react'
import StarsCanvas from '../components/Stars'
import PurpleTag from '../components/PurpleTag'
import ProjectCard from '../components/ProjectCard'
import { useScroll, motion, useMotionValueEvent, useSpring } from 'motion/react'
import { X } from 'lucide-react'
import { transition } from 'three/examples/jsm/tsl/display/TransitionNode.js'
import { easeIn } from 'motion'


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
    offset: ["start 60%", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
    restDelta: 0.001,

  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    console.log("Y = " + value);
  }
  );

  const slideInLeft = {
    hidden: {
      opacity: 0,
      x: -200,
    },

    visible: {
      opacity: 1,
      x:0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      }
    },
  }

  const slideInRight = {
    hidden: {
      opacity: 0,
      x: 200,
    },

    visible: {
      opacity: 1,
      x:0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      }
    },
  }


  return (
    <div ref={container} className='relative h-[250vh] 2xl:h-[160vh] w-screen overflow-hidden'>
      {/* <StarsCanvas />  */}

      <div className='h-full w-[90%] flex flex-col justify-start items-center m-auto  gap-6'>
        {/* <GradientSpan text="My Projects." /> */}
        <PurpleTag text="Projects i worked on " width="175" />
        <span className='text-[#E5E7EB]  text-xl tracking-wide italic'>
          "Every project is a step toward excellence"
        </span>

        <div className='w-full flex justify-center items-start gap-5 mt-10'>
          <div className=' w-[40%] flex flex-col gap-42'>
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={`left-${index}`}
                variants={slideInLeft}
                initial='hidden'
                whileInView='visible'
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                >
              <ProjectCard  {...project} />
              </motion.div>
            ))}
          </div>
          <motion.div
            className='h-full w-[0.5%] bg-gradient-to-b from-purple-500
          to-cyan-500 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.8),0_0_30px_rgba(34,211,238,0.8)] '
            style={{
              scaleY,
              transformOrigin: "top",
              top: 0,
              position: "sticky",
            }}
          />

          <div className=' w-[40%] flex flex-col gap-42 mt-70'>
            {projects.slice(2, 4).map((project, index) => (
              <motion.div
                key={`right-${index}`}
                variants={slideInRight}
                initial='hidden'
                whileInView='visible'
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                >
              <ProjectCard key={`right-${index}`} {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects