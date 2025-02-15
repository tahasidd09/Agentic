"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code, Globe, ChevronDown, ChevronUp, ArrowRight, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Automation",
    description: "Streamlining workflows with intelligent automation",
    details:
      "Our AI automation solutions reduce manual efforts and increase efficiency with adaptive learning capabilities.",
    showcase: "Explore our AI-driven task manager for seamless automation.",
  },
  {
    icon: Cpu,
    title: "Cognitive Computing",
    description: "Enabling AI to think, learn, and reason",
    details:
      "We develop AI that mimics human cognitive functions, making decisions with deep contextual understanding.",
    showcase: "Try our AI-powered chatbot with natural language understanding.",
  },
  {
    icon: Code,
    title: "AI-Driven Insights",
    description: "Extracting valuable insights from complex data",
    details:
      "Our AI models analyze massive datasets to uncover hidden patterns and trends for better decision-making.",
    showcase: "Check out our AI-powered analytics dashboard for real-time insights.",
  },
  {
    icon: Globe,
    title: "Scalable AI Infrastructure",
    description: "Deploying AI models at a global scale",
    details:
      "Our AI infrastructure ensures seamless deployment and scaling of machine learning models across cloud environments.",
    showcase: "Discover our distributed AI computing framework in action.",
  },
];

export default function AIFeatures() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen bg-gray-900 flex items-center justify-center px-6 sm:px-12 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: ["-50%", "50%"], y: ["-30%", "30%"], rotate: [0, 360], scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-[900px] h-[900px] bg-indigo-700 opacity-15 rounded-full blur-[200px]"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold text-center text-white"
        >
          Future of AI Innovation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-center mb-14 text-lg"
        >
          Transforming industries with next-gen AI solutions
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 border border-indigo-500 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-indigo-600 hover:border-indigo-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]"
              onClick={() => toggleExpand(index)}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="bg-gradient-to-br from-indigo-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-5 shadow-lg"
                whileHover={{ scale: 1.15, rotate: 360, transition: { duration: 0.8 } }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-300">{feature.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-300 text-sm mt-2">{feature.details}</p>
                    <Button variant="link" className="mt-4 text-indigo-400 hover:text-indigo-300 transition-colors">
                      Try it out <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                {expandedIndex === index ? (
                  <ChevronUp className="w-6 h-6 mt-3 text-indigo-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 mt-3 text-indigo-400" />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
