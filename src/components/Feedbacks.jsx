// src/components/Feedbacks.jsx

import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className='relative group'
  >
    <div className='bg-tertiary/30 backdrop-blur-sm p-8 rounded-2xl border border-[#915EFF]/20 hover:border-[#915EFF]/50 transition-all min-h-[280px] flex flex-col relative overflow-hidden'>
      {/* Decorative corner accents */}
      <motion.div
        className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#915EFF]/20 rounded-tr-2xl"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 + index * 0.1 }}
      />

      {/* Quote Icon */}
      <motion.div
        className="text-[#915EFF] text-[80px] font-black leading-none opacity-20"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.2 + index * 0.1 }}
      >
        "
      </motion.div>

      {/* Testimonial Text */}
      <div className='flex-1 -mt-12'>
        <p className='text-white tracking-wider text-[16px] leading-relaxed'>
          {testimonial}
        </p>
      </div>

      {/* Author Info */}
      <div className='mt-6 flex items-center gap-4 pt-4 border-t border-[#915EFF]/20'>
        <motion.img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-12 h-12 rounded-full object-cover border-2 border-[#915EFF]/30'
          whileHover={{ scale: 1.1, borderColor: "rgba(145, 94, 255, 0.8)" }}
        />
        
        <div className='flex-1'>
          <p className='text-white font-semibold text-[16px]'>
            {name}
          </p>
          <p className='text-secondary text-[13px]'>
            {designation} at {company}
          </p>
        </div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
      />
    </div>
  </motion.div>
);

const Feedbacks = () => {
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
      <motion.div variants={textVariant()} className="relative z-10 mb-12">
        <motion.p 
          className={`${styles.sectionSubText} relative inline-block`}
        >
          What others say
          <motion.span
            className="absolute -bottom-1 left-0 h-[2px] bg-[#915EFF]"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.p>
        
        <h2 className={`${styles.sectionHeadText}`}>
          Testimonials.
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

      {/* Testimonials Grid */}
      <motion.div 
        className='flex flex-wrap gap-7 justify-center relative z-10'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.name} className="w-full xs:w-[320px]">
            <FeedbackCard index={index} {...testimonial} />
          </div>
        ))}
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

export default SectionWrapper(Feedbacks, "");