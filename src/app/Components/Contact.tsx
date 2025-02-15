"use client"

import { motion } from "framer-motion"
import { Bot, Mail, Globe, Github, Linkedin, Twitter, Phone } from "lucide-react"

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.2,
        duration: 1,
        ease: "easeInOut"
      } 
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: "easeInOut"
      } 
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted successfully')
  }

  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-gold-300 py-20 px-6 relative overflow-hidden font-serif">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-gold-400"
          >
            Contact Us
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gold-500 text-center mb-10"
          >
            Let's innovate together with AI solutions.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div variants={itemVariants} className="backdrop-blur-sm bg-black/90 p-8 rounded-2xl shadow-lg shadow-gold-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-gold-400">Get in Touch</h3>
              <div className="space-y-4">
                <motion.p 
                  whileHover={{ x: 12, color: "#FFD700" }}
                  className="flex items-center text-lg"
                  transition={{ duration: 0.3 }}
                >
                  <Mail className="w-6 h-6 mr-3 text-gold-500" />
                  contact@agentiaworld.com
                </motion.p>
                <motion.p 
                  whileHover={{ x: 12, color: "#FFD700" }}
                  className="flex items-center text-lg"
                  transition={{ duration: 0.3 }}
                >
                  <Globe className="w-6 h-6 mr-3 text-gold-500" />
                  www.agentiaworld.com
                </motion.p>
                <motion.p 
                  whileHover={{ x: 12, color: "#FFD700" }}
                  className="flex items-center text-lg"
                  transition={{ duration: 0.3 }}
                >
                  <Phone className="w-6 h-6 mr-3 text-gold-500" />
                  +1 (234) 567-8900
                </motion.p>
                <div className="flex space-x-6 mt-8">
                  <motion.a href="#" whileHover={{ scale: 1.2, rotate: 15 }} transition={{ duration: 0.3 }}>
                    <Github className="w-7 h-7 text-gold-400 hover:text-white" />
                  </motion.a>
                  <motion.a href="#" whileHover={{ scale: 1.2, rotate: 15 }} transition={{ duration: 0.3 }}>
                    <Linkedin className="w-7 h-7 text-gold-400 hover:text-white" />
                  </motion.a>
                  <motion.a href="#" whileHover={{ scale: 1.2, rotate: 15 }} transition={{ duration: 0.3 }}>
                    <Twitter className="w-7 h-7 text-gold-400 hover:text-white" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="backdrop-blur-sm bg-black/90 p-8 rounded-2xl shadow-lg shadow-gold-500/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.input 
                  whileFocus={{ scale: 1.03, borderColor: "#FFD700" }}
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-gray-800 rounded-lg p-3 w-full border-2 border-transparent hover:border-gold-500 transition-all duration-300 focus:outline-none" 
                  required
                />
                <motion.input 
                  whileFocus={{ scale: 1.03, borderColor: "#FFD700" }}
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-gray-800 rounded-lg p-3 w-full border-2 border-transparent hover:border-gold-500 transition-all duration-300 focus:outline-none" 
                  required
                />
                <motion.textarea 
                  whileFocus={{ scale: 1.03, borderColor: "#FFD700" }}
                  placeholder="Your Message" 
                  rows={4} 
                  className="bg-gray-800 rounded-lg p-3 w-full border-2 border-transparent hover:border-gold-500 transition-all duration-300 focus:outline-none resize-none"
                  required
                ></motion.textarea>
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-600 hover:to-gold-400 transition-all duration-300 text-lg font-semibold shadow-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
