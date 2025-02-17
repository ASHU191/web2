import React from "react";
import { motion } from "framer-motion";

function Index() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className="w-full py-8 rounded-t-3xl bg-transparent backdrop-blur-md bg-white/5 shadow-md"
    >
      <div className="text text-[10vw] leading-none uppercase border-t-[1px] border-b-[1px] border-white/20 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-40%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="font-FoundersGroteskCondensed mb-[3vw] pr-4 text-white"
        >
          Elevate Your Brand ◦
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-40%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="font-FoundersGroteskCondensed mb-[3vw] pr-4 text-white"
        >
          Elevate 
        </motion.h1>
      </div>
    </div>
  );
}

export default Index;
