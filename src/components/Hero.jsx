import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { FlipWordsDemo } from "./FlipWordsDemo";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#915EFF] rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div
        className={`absolute inset-0 top-[140px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10 pointer-events-none`}
      >
        {/* Vertical line + dot with pulse animation */}
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            className="w-5 h-5 rounded-full bg-[#915EFF] relative"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(145, 94, 255, 0.7)",
                "0 0 0 10px rgba(145, 94, 255, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <motion.div
            className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF] to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />
        </div>

        {/* Text with staggered animations */}
        <div>
          <motion.h1
            className={`${styles.heroHeadText} text-white`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi, I'm <span className="text-[#915EFF]">Areesha</span>
          </motion.h1>
          
          <motion.div
            className={`${styles.heroSubText} mt-2 text-white-100`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <p className="flex items-center gap-2 flex-wrap">
              I am a <FlipWordsDemo />
            </p>
            <p className="mt-2">crafting web & AI solutions.</p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4 mt-8 pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-[#915EFF] text-white rounded-lg font-medium text-sm sm:text-base shadow-lg shadow-[#915EFF]/50"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(145, 94, 255, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#work"
              className="px-6 py-3 bg-transparent border-2 border-[#915EFF] text-[#915EFF] rounded-lg font-medium text-sm sm:text-base"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(145, 94, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* 3D Canvas */}
      <ComputersCanvas />

      {/* Enhanced scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10 pointer-events-none">
        <a href="#about" className="flex flex-col items-center gap-2 pointer-events-auto">
          {/* Animated arrow */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-60"
            >
              <motion.path
                d="M12 5 L12 19 M12 19 L6 13 M12 19 L18 13"
                stroke="#915EFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </motion.div>

          {/* Mouse scroll indicator */}
          <div className="w-[28px] h-[48px] rounded-full border-2 border-[#915EFF] flex justify-center items-start p-2 relative shadow-lg shadow-[#915EFF]/50 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full bg-[#915EFF]"
            />
          </div>

          {/* Text hint */}
          <motion.p
            className="text-[#915EFF] text-xs mt-2 font-medium tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            SCROLL DOWN
          </motion.p>
        </a>
      </div>

      {/* Decorative grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(#915EFF 1px, transparent 1px),
                             linear-gradient(90deg, #915EFF 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;