// src/components/Footer.jsx

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social links data
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/GlitchPhantomX",
      color: "#ffffff",
      hoverColor: "#915EFF",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/areesha-sattar-14b48832b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "#0A66C2",
      hoverColor: "#0A66C2",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/Areeeshaaaaa", 
      color: "#1DA1F2",
      hoverColor: "#1DA1F2",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:areesha21314@gmail.com",
      color: "#EA4335",
      hoverColor: "#EA4335",
    },
  ];

  return (
    <footer className="relative w-full bg-primary py-12 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#915EFF] rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * 200,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [null, Math.random() * 200 - 100],
              x: [null, Math.random() * 200 - 100],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Animated Logo/Name */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Areesha Sattar
            </motion.h3>
            <motion.p
              className="text-secondary text-sm mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Full Stack Developer & AI Enthusiast
            </motion.p>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                  style={{ backgroundColor: social.hoverColor }}
                />
                
                {/* Icon container */}
                <motion.div
                  className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-[#915EFF]/50 transition-all duration-300"
                  whileHover={{
                    backgroundColor: "rgba(145, 94, 255, 0.1)",
                    boxShadow: "0 0 20px rgba(145, 94, 255, 0.3)",
                  }}
                >
                  <social.icon
                    className="w-5 h-5 text-white/70 group-hover:text-[#915EFF] transition-colors duration-300"
                  />
                  
                  {/* External link indicator */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-4 h-4 bg-[#915EFF] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    <ExternalLink className="w-2.5 h-2.5 text-white" />
                  </motion.div>
                </motion.div>

                {/* Tooltip */}
                <motion.div
                  className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#915EFF] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity duration-300"
                  initial={{ y: -5 }}
                  whileHover={{ y: 0 }}
                >
                  {social.name}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#915EFF] rotate-45" />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-[#915EFF]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="w-20 h-[1px] bg-gradient-to-r from-[#915EFF] to-transparent" />
            <motion.div
              className="w-3 h-3 rounded-full border-2 border-[#915EFF]"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="w-20 h-[1px] bg-gradient-to-l from-[#915EFF] to-transparent" />
            <motion.div
              className="w-2 h-2 rounded-full bg-[#915EFF]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>

          {/* Copyright Text */}
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-secondary text-sm">
              © {currentYear} Areesha Sattar. All rights reserved.
            </p>
            <motion.p
              className="text-[#915EFF] text-xs flex items-center justify-center gap-1.5"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Crafted with 
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-3 h-3 fill-red-500 text-red-500" />
              </motion.span>
              and code
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom wave decoration */}
        <motion.div
          className="mt-8 flex justify-center items-center gap-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-[#915EFF] rounded-full"
              initial={{ height: 4 }}
              animate={{
                height: [4, 16, 4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;