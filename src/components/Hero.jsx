import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import GradientSpan from './GradientSpan';
import PurpleTag from './PurpleTag';

const Hero = () => {


  return (
    <div className='relative z-20 flex justify-center items-center w-full h-screen transform translate-y-[35vh] xl:translate-y-[32vh]'>
      <div className="flex flex-col h-full justify-start items-center gap-5  ">
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
          <GradientSpan text="experience." />

        </div>
        <div className="text-[#9CA3AF] xl:text-2xl text-xl w-[90%] tracking-wide text-center">
          <span>Hi! I'm Tiago, a Web Developer based in Portugal.</span>

        </div>

      </div>

    </div>
  );
};


export default Hero;
