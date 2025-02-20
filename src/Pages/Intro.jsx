import React from "react";
import StarsCanvas from "../components/Stars";

import Header from "../components/Header";
import Hero from "../components/Hero";

const Intro = () => {
  return (
    <>
      
        <Header />
       
        <Hero />



      <div className="h-screen w-screen z-[-2] relative  overflow-hidden">
        <StarsCanvas />
        <video
          autoPlay
          muted
          loop
          className="rotate-180 z-[-2] absolute top-8 w-full h-full object-cover -translate-y-[48%]"
        >
          <source src="public/blackhole.webm" type="video/webm" />
        </video>
      </div>

    </>
  );
};

export default Intro;
