import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(29, 24, 54, 0.9)",
        color: "#fff",
        border: "1px solid rgba(145, 94, 255, 0.2)",
        boxShadow: "0 0 20px rgba(145, 94, 255, 0.1)",
        backdropFilter: "blur(10px)",
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid rgba(145, 94, 255, 0.3)" 
      }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg,
        border: "3px solid #915EFF",
        boxShadow: "0 0 20px rgba(145, 94, 255, 0.5)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          {/* Top accent line */}
          <motion.div
            className="absolute -top-3 left-0 h-[2px] bg-gradient-to-r from-[#915EFF] to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ width: "100px" }}
          />

          <h3 className='text-white text-[24px] font-bold mt-2'>
            {experience.title}
          </h3>
          <p
            className='text-[#915EFF] text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <ul className='mt-5 list-none space-y-3'>
          {experience.points.map((point, idx) => (
            <motion.li
              key={`experience-point-${idx}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider flex items-start gap-3'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-[#915EFF] text-lg mt-1">▹</span>
              <span className="flex-1">{point}</span>
            </motion.li>
          ))}
        </ul>

        {/* Bottom accent */}
        <motion.div
          className="mt-4 h-[1px] bg-gradient-to-r from-transparent via-[#915EFF]/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
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

      {/* Section Header with animations */}
      <motion.div variants={textVariant()} className="relative z-10">
        <motion.p 
          className={`${styles.sectionSubText} text-center relative inline-block mx-auto`}
        >
          What I have done so far
          <motion.span
            className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[2px] bg-[#915EFF]"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.p>
        
        <h2 className={`${styles.sectionHeadText}`}>
          Work Experience.
        </h2>

        {/* Decorative elements */}
        <motion.div
          className="flex justify-start gap-2 mt-4"
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
          <div className="w-16 h-[2px] bg-gradient-to-l from-[#915EFF] to-transparent" />
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
              delay: 0.5,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Timeline */}
      <div className='mt-20 flex flex-col relative z-10'>
        <VerticalTimeline lineColor="#915EFF">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>

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

export default SectionWrapper(Experience, "work");