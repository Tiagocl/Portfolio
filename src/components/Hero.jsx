import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { div } from 'framer-motion/client';


const Hero = () => {

  const string = 'Web Developer';
  return (
    <div className='relative z-20 flex justify-center items-center w-full h-80 transform translate-y-[35vh] xl:translate-y-[32vh]'>
      <div className="flex flex-col h-80 justify-start items-center gap-5  ">
        <div className=" shadowInset flex bg-[#040014] w-56 py-[8px] pr-[7px] pl-[10px] rounded-[32px] items-center border border-[#7042f88b] opacity-[0.9] ">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#b49bff" class="bi bi-stars mr-[10px]" viewBox="0 0 16 16">
            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
          </svg>
          <h1 className=" gradient-text text-[13px] m-0 p-0">Frontend Developer Portfolio</h1>
        </div>
        <div className="w-[700px] h-[165px] text-[#e5e7eb] text-[50px] leading-13 text-center
      lg:text[50px] 
      xl:text-[60px] xl:h-[200px] xl:w-full xl:leading-15 2xl:text-[70px] 2xl:h-[350px] 2xl:w-full 2xl:leading-20"
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
