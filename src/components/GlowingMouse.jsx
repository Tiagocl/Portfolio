import React from 'react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'


const GlowingMouse = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursor = (e) => {
            setPosition({ x: e.x, y: e.y });
        }

       window.addEventListener('mousemove', updateCursor);
       return () => window.removeEventListener('mousemove', updateCursor);
    }, []);

  return (
    <motion.div 
    className='fixed top-0 left-0 w-5 h-5 bg-purple-700 rounded-full blur-sm pointer-events-none '
    animate= {{
        x: position.x,
        y: position.y,
    }}
    transition= {{
        type: 'spring',
        stiffness: 700,
        damping: 20,
    }}
    >
        
    </motion.div>
  )
}

export default GlowingMouse