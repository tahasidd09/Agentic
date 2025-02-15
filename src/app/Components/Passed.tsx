"use client";

import { motion } from "framer-motion";
import { Brain, MessageSquare, Zap, Shield } from "lucide-react";

const featuresList = [
  {
    icon: Brain,
    title: "Autonomous Learning",
    description:
      "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning",
  },
  {
    icon: MessageSquare,
    title: "Multi-Modal Intelligence",
    description: "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding",
  },
  {
    icon: Zap,
    title: "Cognitive Integration",
    description: "Seamless integration with existing systems through advanced cognitive APIs and neural bridges",
  },
  {
    icon: Shield,
    title: "Ethical AI Framework",
    description: "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment",
  },
];

const Features = () => {
  return (
    <motion.section
      className="bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900 text-white py-20 relative overflow-hidden font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-5xl font-extrabold text-center mb-12 tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
          AI Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "#312e81", // Darker indigo on hover
                color: "#fbbf24" // Golden text color
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition-all hover:-translate-y-2 border border-indigo-500"
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-2xl font-semibold mb-2 text-indigo-300 hover:text-yellow-400 transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-indigo-300 hover:text-yellow-200 transition-all duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
