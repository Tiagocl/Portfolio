import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { div } from 'framer-motion/client';
import PurpleTag from './PurpleTag';

const Hero = () => {

  const string = 'Web Developer';
  return (
    <div className='relative z-20 flex justify-center items-center w-full h-80 transform translate-y-[35vh] xl:translate-y-[32vh]'>
      <div className="flex flex-col h-80 justify-start items-center gap-5  ">
        <PurpleTag text="Frontend Developer Portfolio" width="224" />
        <div className="w-[700px] h-[165px] text-[#e5e7eb] text-[50px] leading-13 text-center
      lg:text[50px] 
      xl:text-[57px] xl:h-[200px] xl:w-full xl:leading-15 2xl:text-[65px] 2xl:h-[350px] 2xl:w-full 2xl:leading-18"
        >
          <span className=''>Good design is more than </span>
          <br />
          <span className=''>
            just pixels, it's an
          </span>
          <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500
          to-cyan-500'>experience.</span>

        </div>
        <div className="text-[#9CA3AF] xl:text-2xl text-xl w-[90%] tracking-wide text-center">
          <span class>Hi! I'm Tiago, a Web Developer based in Portugal.</span>

        </div>
        {/* <div>
      <button 
      onClick={() => window.location.href = 'mailto:tiagocamposlourenco@gmail.com?subject=Let’s%20Work%20Together&body=Hi Tiago,'}
      className='py-2 contact-button text-center text-white cursor-pointer rounded-lg w-[200px]'>Contact me</button>
      </div> */}

      </div>

    </div>
  );
};


export default Hero;
