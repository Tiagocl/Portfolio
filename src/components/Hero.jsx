import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Hero = () => {
  return (
    <div className="absolute flex flex-col h-36 w-80 bg-transparent justify-start gap-10 mt-[270px] ml-16">
      <div className="flex gap-1.5 bg-amber-500 w-40 items-center">
      <i className="bi bi-stars text-xl" style={{ color: '#b49bff' }}></i>
      <span className="text-sm text-[#57557a]">Frontend Developer Portfolio</span>
      </div>
      <div className="">
        <span>Hello, I'm Tiago</span>
      </div>
      <div className="">
        <span>I'm a Frontend Developer</span>
      </div>
    </div>
  );
};


export default Hero;
