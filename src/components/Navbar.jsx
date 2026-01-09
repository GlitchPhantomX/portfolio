// src/components/Navbar.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  return (
    <>
      {/* Background particles for navbar */}
      <div className="fixed top-0 left-0 right-0 h-24 pointer-events-none z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#915EFF] rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: -20,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: 100,
              opacity: 0,
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <nav
        className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-500 ${
          scrolled 
            ? "bg-primary/80 backdrop-blur-xl border-b border-[#915EFF]/20" 
            : "bg-transparent"
        }`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto relative'>
          {/* Decorative line - top */}
         
          {/* Futuristic Logo */}
          <Link
            to='/'
            className='flex items-center gap-4 group relative'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            {/* Hexagon Logo Container */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Outer rotating hexagon */}
              <svg width="60" height="60" viewBox="0 0 60 60" className="absolute inset-0">
                <motion.polygon
                  points="30,5 50,17.5 50,42.5 30,55 10,42.5 10,17.5"
                  fill="none"
                  stroke="url(#hexGradient)"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "center" }}
                />
                <defs>
                  <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#915EFF" />
                    <stop offset="100%" stopColor="#5b21b6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Inner circle with letter */}
              <motion.div
                className="relative w-[60px] h-[60px] flex items-center justify-center"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#915EFF] via-purple-600 to-[#5b21b6] opacity-90" />
                
                {/* Glowing effect */}
                <motion.div
                  className="absolute inset-2 rounded-full bg-[#915EFF]"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(145, 94, 255, 0.3)",
                      "0 0 40px rgba(145, 94, 255, 0.6)",
                      "0 0 20px rgba(145, 94, 255, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <span className="relative z-10 text-white text-2xl font-black">A</span>

                {/* Corner dots */}
                {[0, 90, 180, 270].map((rotation, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-[#915EFF] rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${rotation}deg) translateX(25px)`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Name with futuristic design */}
            <div className="flex flex-col">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className='text-white text-[22px] font-black tracking-tight cursor-pointer'>
                  AREESHA
                  <motion.span
                    className="inline-block ml-1 text-[#915EFF]"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    _
                  </motion.span>
                </h1>
                
                {/* Glitch effect line */}
               
              </motion.div>

              <motion.p
                className="text-[#915EFF] text-[11px] font-bold tracking-[0.2em] uppercase"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                {"<"}Full Stack Dev{" />"}
              </motion.p>
            </div>
          </Link>

          {/* Desktop Navigation - Futuristic Style */}
          <ul className='list-none hidden sm:flex flex-row gap-2 items-center'>
            {navLinks.map((nav, index) => (
              <motion.li
                key={nav.id}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={`#${nav.id}`}>
                  <motion.div
                    className={`px-5 py-2 rounded-lg cursor-pointer relative overflow-hidden group ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => setActive(nav.title)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background gradient on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={false}
                    />

                    {/* Border effect */}
                    <motion.div
                      className="absolute inset-0 border border-[#915EFF]/0 group-hover:border-[#915EFF]/50 rounded-lg transition-all"
                    />

                    <span className="relative z-10 text-[14px] font-semibold tracking-wide">
                      {nav.title}
                    </span>

                    {/* Active indicator */}
                    {active === nav.title && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-1 h-1 bg-[#915EFF] rounded-full"
                        layoutId="activeNav"
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{ duration: 1, repeat: Infinity }}
                        style={{ x: "-50%" }}
                      />
                    )}
                  </motion.div>
                </a>
              </motion.li>
            ))}

            {/* Futuristic CTA Button */}
            <motion.a 
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button 
                className="relative ml-4 px-6 py-2.5 rounded-lg font-bold text-[14px] text-white overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#915EFF] via-purple-600 to-[#5b21b6]"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: "200% 100%" }}
                />

                {/* Glowing border */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 rounded-lg border-2 border-[#915EFF] animate-pulse" />
                </div>

                {/* Button text */}
                <span className="relative z-10 flex items-center gap-2">
                  Let's Talk
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
              </motion.button>
            </motion.a>
          </ul>

          {/* Mobile Menu Button - Futuristic */}
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <motion.button
              className="w-12 h-12 flex items-center justify-center cursor-pointer relative rounded-lg border border-[#915EFF]/30 bg-tertiary/30 backdrop-blur-sm"
              onClick={() => setToggle(!toggle)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ borderColor: "rgba(145, 94, 255, 0.8)" }}
            >
              {/* Animated Hamburger */}
              <div className="w-6 h-5 flex flex-col justify-between relative">
                <motion.span
                  className="w-full h-0.5 bg-gradient-to-r from-[#915EFF] to-purple-400 rounded-full"
                  animate={toggle ? { rotate: 45, y: 9, scaleX: 1.2 } : { rotate: 0, y: 0, scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-gradient-to-r from-[#915EFF] to-purple-400 rounded-full"
                  animate={toggle ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-gradient-to-r from-[#915EFF] to-purple-400 rounded-full"
                  animate={toggle ? { rotate: -45, y: -9, scaleX: 1.2 } : { rotate: 0, y: 0, scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Pulse effect when closed */}
              {!toggle && (
                <motion.div
                  className="absolute inset-0 rounded-lg border border-[#915EFF]"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.button>

            {/* Mobile Menu - Futuristic Dropdown */}
            <AnimatePresence>
              {toggle && (
                <motion.div
                  className='absolute top-20 right-4 min-w-[240px] rounded-2xl bg-tertiary/95 backdrop-blur-xl border border-[#915EFF]/30 overflow-hidden shadow-2xl shadow-[#915EFF]/20'
                  initial={{ opacity: 0, scale: 0.9, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  {/* Animated gradient border */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{
                      background: "linear-gradient(90deg, #915EFF, #a855f7, #ec4899, #915EFF)",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />

                  <ul className='list-none flex flex-col gap-3 p-6'>
                    {navLinks.map((nav, index) => (
                      <motion.li
                        key={nav.id}
                        className={`font-semibold cursor-pointer text-[15px] relative group ${
                          active === nav.title ? "text-white" : "text-secondary"
                        }`}
                        onClick={() => {
                          setToggle(false);
                          setActive(nav.title);
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <a href={`#${nav.id}`} className="flex items-center gap-3 py-2 px-3 rounded-lg group-hover:bg-[#915EFF]/10 transition-all">
                          {/* Animated dot */}
                          <motion.div
                            className="w-2 h-2 rounded-full bg-[#915EFF]"
                            animate={{
                              scale: active === nav.title ? [1, 1.3, 1] : 1,
                              boxShadow: active === nav.title 
                                ? ["0 0 0 rgba(145, 94, 255, 0)", "0 0 10px rgba(145, 94, 255, 0.8)", "0 0 0 rgba(145, 94, 255, 0)"]
                                : "none",
                            }}
                            transition={{ duration: 1, repeat: active === nav.title ? Infinity : 0 }}
                          />
                          {nav.title}
                          
                          {/* Arrow on hover */}
                          <motion.span
                            className="ml-auto opacity-0 group-hover:opacity-100"
                            initial={{ x: -10 }}
                            whileHover={{ x: 0 }}
                          >
                            →
                          </motion.span>
                        </a>
                      </motion.li>
                    ))}

                    {/* Mobile CTA Button */}
                    <motion.li
                      className="mt-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <a href="#contact">
                        <motion.button 
                          className="w-full bg-gradient-to-r from-[#915EFF] via-purple-600 to-[#5b21b6] text-white px-4 py-3 rounded-lg font-bold relative overflow-hidden"
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="relative z-10">Let's Talk →</span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.button>
                      </a>
                    </motion.li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;