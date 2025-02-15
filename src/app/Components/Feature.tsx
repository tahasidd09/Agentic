"use client"
import { motion } from "framer-motion";
import { RiBrainLine, RiCustomerService2Line } from 'react-icons/ri';
import Image from 'next/image';

const Feature = () => {
  return (
    <motion.section 
      className="bg-[#0a0f1b] text-white py-20 relative overflow-hidden min-h-screen flex items-center"
      initial={{ backgroundColor: "#0a0f1b" }}
      animate={{ 
        backgroundColor: "#0a0f1b",
        boxShadow: "0 0 100px rgba(0, 195, 255, 0.4)"
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="text-4xl sm:text-5xl font-extrabold mb-6 text-[#00c3ff] tracking-wide"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600">
              AI Agent Features
            </span>
          </motion.h1>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.07,
                boxShadow: "0 0 25px rgba(0, 195, 255, 0.6)",
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-900/50 to-cyan-800/50 p-6 rounded-xl backdrop-blur-xl border border-cyan-500/30 cursor-pointer"
            >
              <RiBrainLine className="text-5xl bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">Cognitive Processing</h3>
              <p className="text-cyan-200">Advanced AI for intelligent decision-making and problem-solving.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.07,
                boxShadow: "0 0 25px rgba(0, 195, 255, 0.6)",
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-blue-900/50 to-cyan-800/50 p-6 rounded-xl backdrop-blur-xl border border-cyan-500/30 cursor-pointer"
            >
              <RiCustomerService2Line className="text-5xl text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">Adaptive Learning</h3>
              <p className="text-cyan-200">Continuously improves through user interactions and feedback.</p>
            </motion.div>
          </div>
        </div>
        {/* Right Images */}
        <motion.div 
          className="lg:w-1/2 mt-10 lg:mt-0 flex flex-col items-center space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image
         
         src="/robot-blue.png"
         alt="AI Robot"
         width={300}
         height={300}
         className="max-w-full drop-shadow-lg"
       />
       
          
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Feature;


