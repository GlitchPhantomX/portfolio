
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { AnimatedPinDemo } from "./AnimatedPinDemo";

const Works = () => {
  return (
    <>
      {/* Hero section wali exact same animated background particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
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

      {/* Section Header */}
      <motion.div variants={textVariant()} className="relative z-10">
        <motion.p 
          className={`${styles.sectionSubText} relative inline-block`}
        >
          My work
          <motion.span
            className="absolute -bottom-1 left-0 h-[2px] bg-[#915EFF]"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.p>
        
        <h2 className={`${styles.sectionHeadText}`}>
          Projects.
        </h2>

        {/* Decorative elements */}
        <motion.div
          className="flex items-center gap-2 mt-4"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
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
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#915EFF] to-transparent" />
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
      </motion.div>

      {/* Description */}
      <div className='w-full flex relative z-10'>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-8 relative pl-6'
        >
          <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-[#915EFF] via-purple-500 to-transparent rounded-full" />
          
          <p className='text-secondary text-[17px] max-w-3xl leading-[30px]'>
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <motion.div 
        className='mt-20 relative z-10'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <AnimatedPinDemo />
      </motion.div>

      {/* Bottom decorative element */}
      <motion.div
        className="mt-16 h-[2px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent relative z-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      />
    </>
  );
};

export default SectionWrapper(Works, "");