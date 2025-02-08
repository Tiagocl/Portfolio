import React from "react";
import StarsCanvas from "./Stars";

const Intro = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <StarsCanvas />
      <video
        autoPlay
        muted
        loop
        className="rotate-180 z-[-2] absolute top-10 w-full h-full object-cover -translate-y-1/2"
      >
        <source src="src/assets/blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Intro;
