import React, { useEffect, useState, useRef } from "react";
import Motivation from "./components/Motivation";
import StarsCanvas from "./components/Stars";
import Portfolio from "./components/Portfolio";
import { motion, AnimatePresence } from "framer-motion";



const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showMainpage, setShowMainpage] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      setTimeout(() => setShowMainpage(true), 500);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (

    <div className="background-text">
      <AnimatePresence >
        {showIntro && (
          <motion.div
            className=" relative z-0 w-screen h-screen flex justify-center items-center text-3xl font-Inter background-text"
            key="intro"
            exit={{
              opacity: 0,
             
            }}
            transition={{
              duration: 0.5,

            }}
          >
            <Motivation />
            <StarsCanvas />

          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMainpage && (
          <motion.div
            className="w-screen h-screen "
            key="portfolio"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 4,
            }}
          >
            <Portfolio />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default App;
