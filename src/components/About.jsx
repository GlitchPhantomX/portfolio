"use client";
import { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tooltip } from "../components/ui/tooltip-card";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt 
    className='xs:w-[250px] w-full'
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    glareEnable={true}
    glareMaxOpacity={0.15}
    glareColor="#915EFF"
    glarePosition="all"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.15, 0.75)}
      className='w-full relative group'
    >
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-[#915EFF] via-purple-500 to-pink-500 opacity-50 group-hover:opacity-75 transition-opacity duration-300 blur-[1px]" />
      
      <div className='relative bg-tertiary rounded-[20px] py-8 px-12 min-h-[280px] flex justify-evenly items-center flex-col border border-[#915EFF]/20 backdrop-blur-sm overflow-hidden'>
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, #915EFF 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, #915EFF 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, #915EFF 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="relative"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={icon}
            alt={title}
            className='relative w-20 h-20 object-contain'
          />
        </motion.div>

        <h3 className='relative text-white text-[20px] font-bold text-center mt-4'>
          {title}
        </h3>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        />
      </div>
    </motion.div>
  </Tilt>
);

const TechTooltip = ({ tech, description }) => (
  <div className="p-3 max-w-xs">
    <p className="text-sm font-semibold text-white mb-1">{tech}</p>
    <p className="text-xs text-neutral-300">{description}</p>
  </div>
);

const AIToolTooltip = ({ tool, description }) => (
  <div className="p-3 max-w-xs">
    <p className="text-sm font-semibold text-purple-300 mb-1">{tool}</p>
    <p className="text-xs text-neutral-300">{description}</p>
  </div>
);

const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "expertise", label: "Technical Skills" },
    { id: "vision", label: "Vision & Goals" }
  ];

  const tabContent = {
    overview: (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
      >
        <p className='text-secondary text-[17px] max-w-3xl leading-[32px]'>
          I am a <span className="text-[#915EFF] font-semibold">self-driven Full Stack Developer</span> transitioning into{" "}
          <Tooltip
            containerClassName="text-secondary"
            content={<TechTooltip tech="Artificial Intelligence" description="Building intelligent, autonomous AI agents and systems" />}
          >
            <span className="text-white font-medium cursor-help border-b border-dotted border-white/30 hover:border-[#915EFF] transition-colors">AI</span>
          </Tooltip>
          , with hands-on experience in{" "}
          <Tooltip
            containerClassName="text-secondary"
            content={<TechTooltip tech="JavaScript & TypeScript" description="Core languages for modern web development" />}
          >
            <span className="text-white font-medium cursor-help border-b border-dotted border-white/30 hover:border-[#915EFF] transition-colors">JavaScript, TypeScript</span>
          </Tooltip>
          ,{" "}
          <Tooltip
            containerClassName="text-secondary"
            content={<TechTooltip tech="React.js & Next.js" description="Building dynamic, production-ready web applications" />}
          >
            <span className="text-white font-medium cursor-help border-b border-dotted border-white/30 hover:border-[#915EFF] transition-colors">React.js, Next.js</span>
          </Tooltip>
          ,{" "}
          <Tooltip
            containerClassName="text-secondary"
            content={<TechTooltip tech="Python & FastAPI" description="Backend development and AI integration" />}
          >
            <span className="text-white font-medium cursor-help border-b border-dotted border-white/30 hover:border-[#915EFF] transition-colors">Python, and FastAPI</span>
          </Tooltip>
          . I'm passionate about building intelligent, AI-powered solutions that solve real-world problems.
        </p>
      </motion.div>
    ),
    expertise: (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
      >
        <p className='text-secondary text-[17px] max-w-3xl leading-[32px]'>
          Skilled in{" "}
          <Tooltip
            containerClassName="text-secondary"
            content={<AIToolTooltip tool="SpecKit Plus" description="Advanced tool for building AI-powered applications" />}
          >
            <span className="text-purple-300 font-medium cursor-help border-b border-dotted border-purple-300/30 hover:border-[#915EFF] transition-colors">SpecKit Plus</span>
          </Tooltip>
          ,{" "}
          <Tooltip
            containerClassName="text-secondary"
            content={<AIToolTooltip tool="Prompt Engineering" description="Crafting effective prompts for optimal AI performance" />}
          >
            <span className="text-purple-300 font-medium cursor-help border-b border-dotted border-purple-300/30 hover:border-[#915EFF] transition-colors">Prompt Engineering</span>
          </Tooltip>
          ,{" "}
          <Tooltip
            containerClassName="text-secondary"
            content={<AIToolTooltip tool="Context Engineering" description="Managing context windows for better AI responses" />}
          >
            <span className="text-purple-300 font-medium cursor-help border-b border-dotted border-purple-300/30 hover:border-[#915EFF] transition-colors">Context Engineering</span>
          </Tooltip>
          ,{" "}
          <Tooltip
            containerClassName="text-secondary"
            content={<AIToolTooltip tool="OpenAI Agents SDK" description="Building autonomous agents with OpenAI's API" />}
          >
            <span className="text-purple-300 font-medium cursor-help border-b border-dotted border-purple-300/30 hover:border-[#915EFF] transition-colors">OpenAI Agents SDK</span>
          </Tooltip>
          ,{" "}
          <Tooltip
            containerClassName="text-secondary"
            content={<AIToolTooltip tool="Claude Code CLI" description="AI-powered coding assistant in your terminal" />}
          >
            <span className="text-purple-300 font-medium cursor-help border-b border-dotted border-purple-300/30 hover:border-[#915EFF] transition-colors">Claude Code CLI</span>
          </Tooltip>
          , and{" "}
          <Tooltip
            containerClassName="text-secondary"
            content={<AIToolTooltip tool="Gemini CLI" description="Google's AI capabilities through command line" />}
          >
            <span className="text-purple-300 font-medium cursor-help border-b border-dotted border-purple-300/30 hover:border-[#915EFF] transition-colors">Gemini CLI</span>
          </Tooltip>
          . I also work with{" "}
          <Tooltip
            containerClassName="text-secondary"
            content={<TechTooltip tech="MongoDB" description="NoSQL database for modern applications" />}
          >
            <span className="text-white font-medium cursor-help border-b border-dotted border-white/30 hover:border-[#915EFF] transition-colors">MongoDB</span>
          </Tooltip>
          ,{" "}
          <Tooltip
            containerClassName="text-secondary"
            content={<TechTooltip tech="CMS & RESTful APIs" description="Content management and API development" />}
          >
            <span className="text-white font-medium cursor-help border-b border-dotted border-white/30 hover:border-[#915EFF] transition-colors">CMS, RESTful APIs</span>
          </Tooltip>
          , and use{" "}
          <Tooltip
            containerClassName="text-secondary"
            content={<TechTooltip tech="Git & GitHub" description="Version control and collaboration" />}
          >
            <span className="text-white font-medium cursor-help border-b border-dotted border-white/30 hover:border-[#915EFF] transition-colors">Git, GitHub, and Postman</span>
          </Tooltip>
          {" "}for development workflow.
        </p>
      </motion.div>
    ),
    vision: (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
      >
        <p className='text-secondary text-[17px] max-w-3xl leading-[32px]'>
          Currently expanding into <span className="text-[#915EFF] font-semibold">Agentic AI & Intelligent Agents</span>, 
          combining frontend and backend development with cutting-edge AI technologies. 
          I'm focused on mastering{" "}
          <Tooltip
            containerClassName="text-secondary"
            content={<AIToolTooltip tool="Agentic AI" description="Building autonomous AI agents that can perform complex tasks independently" />}
          >
            <span className="text-purple-300 font-medium cursor-help border-b border-dotted border-purple-300/30 hover:border-[#915EFF] transition-colors">Agentic AI</span>
          </Tooltip>
          {" "}and creating <span className="text-white font-medium">impactful AI-powered solutions</span> that 
          push the boundaries of what's possible. My goal is to build intelligent systems that not only 
          solve real-world problems but also inspire innovation in the tech landscape.
        </p>
      </motion.div>
    )
  };

  return (
    <>
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

      <motion.div variants={textVariant()} className="relative z-10">
        <motion.p 
          className={`${styles.sectionSubText} relative inline-block`}
        >
          Who I Am
          <motion.span
            className="absolute -bottom-1 left-0 h-[2px] bg-[#915EFF]"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.p>
        
        <h2 className={`${styles.sectionHeadText}`}>
          About Me.
        </h2>
      </motion.div>

      <motion.div
        className="mt-10 flex flex-wrap gap-2 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {tabs.map((tab, index) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-3 text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "text-[#915EFF]"
                : "text-secondary hover:text-white"
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#915EFF]"
                layoutId="activeTab"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-8 relative pl-6 z-10'
      >
        <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-[#915EFF] via-purple-500 to-transparent rounded-full" />
        
        <AnimatePresence mode="wait">
          <div key={activeTab}>
            {tabContent[activeTab]}
          </div>
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {[
          { label: "Projects Completed", value: 3, suffix: "+" },
          { label: "Technologies Mastered", value: 15, suffix: "+" },
          { label: "Years Learning", value: 2, suffix: "+" },
          { label: "Code Quality", value: 100, suffix: "%" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <motion.h4 
              className="text-4xl md:text-5xl font-bold text-[#915EFF] mb-2"
              whileHover={{ scale: 1.05 }}
            >
              <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2} />
            </motion.h4>
            <p className="text-secondary text-sm">{stat.label}</p>
            
            <motion.div
              className="mt-3 mx-auto w-12 h-[2px] bg-[#915EFF]/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className='mt-20 flex flex-wrap gap-10 justify-center relative z-10'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>

      <motion.div
        className="mt-16 h-[2px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent relative z-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      />
    </>
  );
};

export default SectionWrapper(About, "about");