"use client"

import { motion } from "framer-motion"
import { Globe, Server, Shield } from "lucide-react"

const solutions = [
  {
    icon: Globe,
    title: "AI-Powered Enterprises",
    description: "Empowering businesses with cutting-edge AI solutions for scalability and efficiency.",
  },
  {
    icon: Server,
    title: "Smart Neural Networks",
    description: "Revolutionizing workflows with self-learning AI systems for optimized operations.",
  },
  {
    icon: Shield,
    title: "Advanced Cyber Security",
    description: "AI-driven security protocols ensuring top-tier protection for sensitive data.",
  },
]

const AISolutions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <section className="bg-gray-900 text-white py-16 px-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 animate-pulse"></div>
      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 className="text-6xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">
          AI Solutions for the Future
        </motion.h1>
        <motion.p
          className="text-2xl text-indigo-300 text-center mb-12"
        >
          Elevate your business with intelligent automation and security
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                rotateZ: 3,
                backgroundColor: "#312e81", // Dark indigo shade on hover
                color: "#fbbf24" // Golden text color on hover
              }}
              className="bg-gray-800 rounded-xl p-6 transition-all duration-300 transform-gpu border border-indigo-500 shadow-lg"
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <solution.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-semibold mb-2 text-indigo-200"
                whileHover={{ color: "#fbbf24" }}
              >
                {solution.title}
              </motion.h3>
              <motion.p 
                className="text-indigo-300"
                whileHover={{ color: "#fde68a" }}
              >
                {solution.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AISolutions