import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { technologies } from "../constants";

const TechBall = ({ technology, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Random floating values for each ball
  const randomY = Math.random() * 20 - 10;
  const randomX = Math.random() * 15 - 7;
  const randomRotate = Math.random() * 360;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotateZ: randomRotate }}
      whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        type: "spring",
        stiffness: 120,
      }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating animation wrapper */}
      <motion.div
        animate={{
          y: [randomY, randomY + 12, randomY],
          x: [randomX, randomX + 8, randomX],
          rotateZ: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4 + Math.random() * 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Outer pulsing glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#915EFF] blur-2xl opacity-0 group-hover:opacity-50"
          animate={isHovered ? { 
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3]
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Expanding ring on hover */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#915EFF] opacity-0"
          animate={isHovered ? { 
            scale: [1, 1.6], 
            opacity: [0.8, 0] 
          } : {}}
          transition={{ duration: 1.2, repeat: Infinity }}
        />

        {/* Secondary ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-[#915EFF]/50 opacity-0"
          animate={isHovered ? { 
            scale: [1, 1.8], 
            opacity: [0.5, 0] 
          } : {}}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
        />

        {/* Main ball container */}
        <motion.div
          className="relative w-32 h-32 rounded-full flex items-center justify-center cursor-pointer overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(145, 94, 255, 0.15) 0%, rgba(145, 94, 255, 0.35) 100%)",
            backdropFilter: "blur(15px)",
            border: "1.5px solid rgba(145, 94, 255, 0.4)",
            boxShadow: "0 10px 40px rgba(145, 94, 255, 0.3)",
          }}
          whileHover={{
            scale: 1.2,
            boxShadow: "0 20px 70px rgba(145, 94, 255, 0.6)",
            border: "1.5px solid rgba(145, 94, 255, 1)",
            background: "linear-gradient(135deg, rgba(145, 94, 255, 0.25) 0%, rgba(145, 94, 255, 0.45) 100%)",
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Gradient overlay that rotates */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/40 via-transparent to-pink-500/30 opacity-0 group-hover:opacity-100"
            animate={isHovered ? { rotate: 360 } : {}}
            transition={{ duration: 4, ease: "linear", repeat: Infinity }}
          />
          
          {/* Shine effect */}
          <motion.div
            className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-white/60 to-transparent rounded-full blur-md"
            animate={isHovered ? { 
              x: [0, 50, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1]
            } : {}}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          />

          {/* Icon with 3D effect */}
          <motion.img
            src={technology.icon}
            alt={technology.name}
            className="w-16 h-16 object-contain relative z-10 drop-shadow-2xl"
            animate={isHovered ? { 
              rotateY: [0, 360],
              scale: [1, 1.1, 1]
            } : {}}
            transition={{ 
              rotateY: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 2, repeat: Infinity }
            }}
            style={{
              filter: isHovered ? "drop-shadow(0 0 20px rgba(145, 94, 255, 0.8))" : "drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3))"
            }}
          />

          {/* Orbiting particles on hover */}
          {isHovered && (
            <>
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-[#915EFF] rounded-full"
                  style={{
                    boxShadow: "0 0 10px rgba(145, 94, 255, 0.8)"
                  }}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                  }}
                  animate={{
                    x: Math.cos((i * Math.PI * 2) / 12) * 65,
                    y: Math.sin((i * Math.PI * 2) / 12) * 65,
                    opacity: [1, 0.5, 0],
                    scale: [1, 1.5, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: i * 0.1
                  }}
                />
              ))}
            </>
          )}

          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#915EFF]/20 to-transparent opacity-50" />
        </motion.div>

        {/* Technology name with animated underline */}
        <motion.div
          className="mt-5 relative"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.4 }}
        >
          <p className="text-center text-sm font-semibold text-gray-300 group-hover:text-[#915EFF] transition-all duration-300 tracking-wide">
            {technology.name}
          </p>
          
          {/* Animated bottom line */}
          <motion.div
            className="mt-2 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#915EFF] to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.08 + 0.6 }}
            animate={isHovered ? {
              boxShadow: ["0 0 0px rgba(145, 94, 255, 0)", "0 0 15px rgba(145, 94, 255, 0.8)", "0 0 0px rgba(145, 94, 255, 0)"]
            } : {}}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const AnimatedTechSection = () => {
  return (
    <>
      {/* Enhanced background particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              background: `radial-gradient(circle, rgba(145, 94, 255, ${Math.random() * 0.8 + 0.2}) 0%, transparent 70%)`,
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Animated grid with gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] z-0">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(#915EFF 1.5px, transparent 1.5px),
                             linear-gradient(90deg, #915EFF 1.5px, transparent 1.5px)`,
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-[#915EFF]/5 via-transparent to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div variants={textVariant()} className="text-center mb-20">
          <motion.p 
            className={`${styles.sectionSubText} relative inline-block`}
          >
            <motion.span
              className="relative z-10"
              animate={{
                textShadow: [
                  "0 0 20px rgba(145, 94, 255, 0.5)",
                  "0 0 30px rgba(145, 94, 255, 0.8)",
                  "0 0 20px rgba(145, 94, 255, 0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Tools & Technologies
            </motion.span>
            <motion.span
              className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.p>
          
          <motion.h2
            className={`${styles.sectionHeadText} mt-2`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tech Stack.
          </motion.h2>

          {/* Decorative pulsing dots */}
          <motion.div
            className="flex items-center justify-center gap-3 mt-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-[#915EFF]"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 1, 0.4],
                  boxShadow: [
                    "0 0 0px rgba(145, 94, 255, 0)",
                    "0 0 20px rgba(145, 94, 255, 1)",
                    "0 0 0px rgba(145, 94, 255, 0)"
                  ]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Tech balls grid with stagger effect */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-12 justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {technologies.map((technology, index) => (
            <TechBall key={technology.name} technology={technology} index={index} />
          ))}
        </motion.div>

        {/* Bottom decorative wave */}
        <motion.div
          className="mt-24 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="flex gap-3">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-[#915EFF]"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated corner accents */}
      <motion.div 
        className="absolute top-10 left-10 w-24 h-24 border-t-2 border-l-2 border-[#915EFF] opacity-40"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-24 h-24 border-b-2 border-r-2 border-[#915EFF] opacity-40"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1 }}
      />
    </>
  );
};

export default SectionWrapper(AnimatedTechSection, "");