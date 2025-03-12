import React from "react";
import StarsCanvas from "../components/Stars";
import HeroContent from "../components/HeroContent";
import { div } from "framer-motion/client";

const Intro = () => {
  return (
    
    <div className="relative h-screen w-screen overflow-hidden">
    
      <div className="h-screen w-screen -z-10 absolute inset-0 overflow-hidden">
        <StarsCanvas />
        <video
          autoPlay
          muted
          loop
          className="rotate-180 -z-2 absolute inset-0 top-8 w-full h-full object-cover -translate-y-[49%] "
        >
          <source src="blackhole.webm" type="video/webm" />
        </video>
      </div>
      <div className="relative z-10 flex flex-col h-full ">
        <HeroContent />
      </div>
      </div>
  
  );
};

export default Intro;
