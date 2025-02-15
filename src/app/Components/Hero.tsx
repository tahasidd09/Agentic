"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

const Hero = (): React.JSX.Element => {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 xl:px-32 2xl:px-48 text-center font-[Poppins]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%", "-100%"], y: ["50%", "-50%", "50%"], rotate: [0, 360], scale: [1, 2, 1] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-[300px] sm:w-[400px] md:w-[800px] lg:w-[1200px] xl:w-[1500px] 2xl:w-[2000px] h-[300px] sm:h-[400px] md:h-[800px] lg:h-[1200px] xl:h-[1500px] 2xl:h-[2000px] bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 opacity-60 rounded-full blur-[200px]"
        ></motion.div>
      </div>

      {/* Robot Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 mb-4 shadow-2xl rounded-full border-4 border-purple-500"
      >
        <Image src="/cartoon.png" alt="AI Robot" fill className="object-contain" />
      </motion.div>

      {/* Power Badge */}
      <motion.div 
        className="relative z-10 bg-gradient-to-r from-purple-600 via-blue-700 to-pink-600 px-6 py-3 rounded-full text-white font-bold text-lg shadow-lg uppercase tracking-wide"
        whileHover={{ scale: 1.05 }}
      >
        POWERED BY PANAVERSITY
      </motion.div>

      {/* Heading */}
      <motion.h1 
        className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mt-6 leading-tight tracking-wider"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-purple-400 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">The Future of </span>
        <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">AI Agents</span>
      </motion.h1>

      <motion.span 
        className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Intelligent. Adaptive. Limitless.
      </motion.span>

      {/* New CTA Instead of Chatbot Input */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="text-gray-200 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 max-w-[320px] sm:max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-4xl px-4 leading-relaxed"
      >
        Transform Your Business with AI-Powered Innovation.
      </motion.p>

      {/* Buttons */}
      <motion.div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-[320px] sm:max-w-none px-4 justify-center items-center">
        <motion.button
          className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-white font-bold rounded-lg shadow-xl transition-all duration-300 text-lg uppercase tracking-wider border-2 border-transparent hover:border-white"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(138, 43, 226, 0.9)" }}
          whileTap={{ scale: 0.95 }}
        >
          Deploy Your AI Agent
        </motion.button>
        <motion.button
          className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 px-8 py-4 text-white font-bold rounded-lg shadow-xl transition-all duration-300 border-2 border-gray-700 text-lg uppercase tracking-wider"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(100, 100, 100, 0.9)" }}
          whileTap={{ scale: 0.95 }}
        >
          Watch Demo
        </motion.button>
      </motion.div>    </section>
  );
};

export default Hero;