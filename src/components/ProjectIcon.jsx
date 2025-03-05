import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp } from 'react-icons/fa';
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

const TechnologyIcon = ({ technology }) => {

    const getIcon = (tech) => {
        switch (tech) {
            case 'JavaScript':
                return <FaJs size={21} color='#f0db4f' />
            case 'React':
                return <FaReact size={21} color='#61dbfb' />
            case 'Tailwind':
                return <RiTailwindCssFill size={21} color='#06B6D4' />
            case 'Express': 
                return <SiExpress size={21} color='#FFF' />
            case 'MySQL':
                return <GrMysql size={21} color='' />
            case 'PHP':
                return <FaPhp size={21} color='#4F5B93' />
        }

    }
    return (
        <div className='rounded-full flex justify-center items-center bg-[#0B0F25]  border border-white/[0.1]'>
            {getIcon(technology)}
        </div>
  )
}

export default TechnologyIcon