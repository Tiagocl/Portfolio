import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Motivation from "./components/Motivation";
import StarsCanvas from "./components/Stars";
import Portfolio from "./components/Portfolio";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  return (
    <>
        <div
        className=" relative z-0 w-screen h-screen flex justify-center items-center text-3xl font-Inter background-text"
        >
          <Motivation />
          <StarsCanvas />
        </div>
        <div className="w-screen h-screen">
          <Portfolio />
        </div>

        </>
  );
};

export default App;
