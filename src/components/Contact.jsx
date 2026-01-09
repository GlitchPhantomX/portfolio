import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Areesha Sattar",
          from_email: form.email,
          to_email: "areesha21314@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const contactInfo = [
    { label: "Email", value: "areesha21314@gmail.com", link: "mailto:areesha21314@gmail.com" },
    { label: "Phone", value: "+92 331 2969746", link: "tel:+923312969746" },
    { label: "Location", value: "Karachi, Pakistan", link: null },
    { label: "GitHub", value: "@GlitchPhantomX", link: "https://github.com/GlitchPhantomX" },
  ];

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
          Get in touch
          <motion.span
            className="absolute -bottom-1 left-0 h-[2px] bg-[#915EFF]"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.p>
        
        <h2 className={`${styles.sectionHeadText}`}>
          Contact.
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

      {/* Main Content - Centered Layout */}
      <div className="flex flex-col items-center relative z-10 max-w-4xl mx-auto">
        {/* Contact Form - Centered */}
        <motion.div
          variants={slideIn("up", "tween", 0.2, 1)}
          className='w-full'
        >
          <div className='bg-tertiary/30 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-[#915EFF]/20 relative overflow-hidden'>
            {/* Decorative corner elements */}
            <motion.div
              className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#915EFF]/30 rounded-tr-2xl"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#915EFF]/30 rounded-bl-2xl"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            />

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='flex flex-col gap-6 relative z-10'
            >
              {/* Name & Email in Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className='text-white font-medium mb-3 block text-sm'>Your Name</label>
                  <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className='w-full bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border border-[#915EFF]/20 focus:border-[#915EFF] transition-colors'
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className='text-white font-medium mb-3 block text-sm'>Your Email</label>
                  <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className='w-full bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border border-[#915EFF]/20 focus:border-[#915EFF] transition-colors'
                    required
                  />
                </motion.div>
              </div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className='text-white font-medium mb-3 block text-sm'>Your Message</label>
                <textarea
                  rows={7}
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='Tell me about your project or just say hi!'
                  className='w-full bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border border-[#915EFF]/20 focus:border-[#915EFF] transition-colors resize-none'
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type='submit'
                className='bg-[#915EFF] py-3 px-8 rounded-lg w-full text-white font-bold transition-all relative overflow-hidden group'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="relative z-10">{loading ? "Sending..." : "Send Message"}</span>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info Cards - Below Form */}
        <motion.div
          className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.label}
              className="p-5 rounded-xl bg-tertiary/30 border border-[#915EFF]/20 backdrop-blur-sm text-center group hover:border-[#915EFF]/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <p className="text-[#915EFF] text-xs font-semibold mb-2 uppercase tracking-wider">
                {contact.label}
              </p>
              {contact.link ? (
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm hover:text-[#915EFF] transition-colors block"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-white text-sm">{contact.value}</p>
              )}
              
              <motion.div className="mt-3 mx-auto w-8 h-[2px] bg-[#915EFF]/30 group-hover:w-full group-hover:bg-[#915EFF] transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
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

export default SectionWrapper(Contact, "contact");