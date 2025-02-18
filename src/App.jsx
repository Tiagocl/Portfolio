import React, { useEffect, useState } from "react";
import Motivation from "./Pages/Motivation";
import StarsCanvas from "./components/Stars";
import Portfolio from "./Pages/Portfolio";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [showIntro, setShowIntro] = useState(() => {
    return sessionStorage.getItem("seenIntro") !== "true"; // Check sessionStorage
  });
  const [showMainpage, setShowMainpage] = useState(!showIntro);

  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => {
        setShowIntro(false);
        setTimeout(() => {
          setShowMainpage(true);
          sessionStorage.setItem("seenIntro", "true"); // Store in sessionStorage
        }, 500);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  return (
    <div className="background-text">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="relative z-0 w-screen h-screen flex justify-center items-center text-3xl font-Inter background-text"
            key="intro"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Motivation />
            <StarsCanvas />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMainpage && (
          <motion.div
            className="w-screen h-screen"
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
          >
            <Portfolio />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
