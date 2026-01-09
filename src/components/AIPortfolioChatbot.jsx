import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIPortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: 'Hi! I\'m Areesha\'s AI assistant. Ask me anything about her skills, experience, or projects!' 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const SYSTEM_PROMPT = `You are Areesha Sattar's professional AI assistant. You help visitors learn about Areesha's skills, experience, and background.

ABOUT AREESHA:
- Full-Stack Developer transitioning into AI
- Location: Karachi, Pakistan
- Email: areesha21314@gmail.com
- Phone: 0331-2969746

EDUCATION:
- IT Certification in Full Stack Development (2024) - Governor House Tech Program, Karachi
- Intermediate in Pre-Engineering (2022) - Govt. Degree Girl College 11-i
- Matriculation in Science (2020) - Major Shabbir Sharif Girls Secondary School

TECHNICAL SKILLS:
- Frontend: JavaScript, TypeScript, React.js, Next.js
- Backend: Python, FastAPI
- Database & APIs: MongoDB, RESTful APIs
- AI Tools: OpenAI SDK, OpenAI Agents, Claude Code CLI, Gemini CLI, SpecKit Plus
- Prompt Engineering & Context Engineering
- Version Control: Git, GitHub
- Tools: Postman

KEY PROJECTS:
1. Blog Website with CMS
   - Live: https://areesha-milestone3-blog-website.vercel.app/
   - GitHub: https://github.com/Areesha-sites/milestone3-blog-website

2. ChowChamp – Food E-commerce Website
   - Live: https://3b-milestone-ecommerce-website.vercel.app/
   - GitHub: https://github.com/Areesha-sites/3b-milestone-ecommerce-website

3. Physical AI and Humanoids Robotics Website (Built with Claude Code and SpecKit Plus)
   - Live: https://3b-milestone-ecommerce-website.vercel.app/
   - GitHub: https://github.com/Areesha-sites/3b-milestone-ecommerce-website

CURRENT FOCUS:
- Agentic AI & Intelligent Agents
- Frontend & Backend Development
- SpecKit Plus
- Prompt Engineering & Context Engineering
- OpenAI Agents SDK
- Claude Code CLI & Gemini CLI
- Python and FastAPI

PERSONALITY:
- Self-driven and passionate
- Building intelligent, AI-powered solutions
- Transitioning from Full-Stack to AI Development

INSTRUCTIONS:
- Be professional, friendly, and helpful
- Provide specific details about Areesha's skills and experience
- If asked about contact, provide email and phone
- If asked about projects, share live demo and GitHub links
- Keep responses concise but informative
- Use a warm, professional tone
- If you don't know something, be honest and suggest contacting Areesha directly`;

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
      
      if (!apiKey) {
        throw new Error('API key not configured');
      }

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Areesha Portfolio Chatbot'
        },
        body: JSON.stringify({
          model: 'mistralai/devstral-2512:free',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages.slice(-6),
            { role: 'user', content: userMessage }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const assistantMessage = data.choices[0]?.message?.content || 
        'Sorry, I could not process that request.';

      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: assistantMessage 
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I\'m having trouble connecting right now. Please try again or contact Areesha directly at areesha21314@gmail.com' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="relative group"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {/* Outer glow ring - continuous pulse */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#915EFF]"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Secondary pulse */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#915EFF]"
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            {/* Main button */}
            <div className="relative bg-gradient-to-br from-[#915EFF] via-[#7c3aed] to-[#915EFF] text-white rounded-full p-5 shadow-2xl shadow-[#915EFF]/50">
              {/* Sparkle effect */}
              <motion.div
                className="absolute top-2 right-2"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sparkles className="w-3 h-3 text-yellow-300" />
              </motion.div>

              <MessageCircle className="w-7 h-7 relative z-10" />
              
              {/* AI Badge */}
              <motion.span
                className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                AI
              </motion.span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 rounded-3xl shadow-2xl w-[380px] h-[530px] flex flex-col overflow-hidden border border-[#915EFF]/30 backdrop-blur-xl"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Animated gradient background overlay */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#915EFF] via-purple-500 to-[#915EFF]"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />
            </div>

            {/* Header */}
            <motion.div
              className="relative bg-gradient-to-r from-[#915EFF] via-purple-600 to-[#915EFF] text-white p-6 flex items-center justify-between shadow-lg"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  {/* Avatar with pulse */}
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-white to-purple-100 rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(255, 255, 255, 0.7)",
                        "0 0 0 8px rgba(255, 255, 255, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  >
                    <Bot className="w-7 h-7 text-[#915EFF]" />
                  </motion.div>
                  
                  {/* Online indicator */}
                  <motion.span
                    className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white shadow-lg"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                
                <div>
                  <motion.h3
                    className="font-bold text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Areesha's AI Assistant
                  </motion.h3>
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex gap-1">
                      <motion.div
                        className="w-1 h-1 bg-green-300 rounded-full"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-1 h-1 bg-green-300 rounded-full"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-1 h-1 bg-green-300 rounded-full"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                    <p className="text-xs text-purple-100">Always here to help</p>
                  </motion.div>
                </div>
              </div>
              
              <motion.button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-2.5 transition-all duration-300 hover:rotate-90"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 relative">
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(#915EFF 1px, transparent 1px),
                      linear-gradient(90deg, #915EFF 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px',
                  }}
                />
              </div>

              <AnimatePresence mode="popLayout">
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      delay: idx * 0.05,
                    }}
                  >
                    <motion.div
                      className={`max-w-[85%] rounded-2xl px-5 py-3.5 relative ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-br from-[#915EFF] via-purple-600 to-[#915EFF] text-white shadow-lg shadow-[#915EFF]/30'
                          : 'bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-xl'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      {msg.role === 'assistant' && (
                        <motion.div
                          className="absolute -left-3 top-3 w-8 h-8 bg-gradient-to-br from-[#915EFF] to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                        >
                          <Bot className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                      
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {msg.content}
                      </p>
                      
                      {/* Message timestamp effect */}
                      <motion.div
                        className="absolute -bottom-5 right-2 text-xs text-purple-300/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isLoading && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3.5 border border-white/20 shadow-xl flex items-center gap-3">
                    <Loader2 className="w-4 h-4 text-[#915EFF] animate-spin" />
                    <div className="flex gap-1.5">
                      <motion.div
                        className="w-2 h-2 bg-[#915EFF] rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-[#915EFF] rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-[#915EFF] rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <motion.div
              className="p-5 bg-gradient-to-r from-slate-900/80 via-purple-900/20 to-slate-900/80 backdrop-blur-xl border-t border-white/10"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="flex gap-3 items-end">
                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about Areesha..."
                    className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#915EFF] focus:border-transparent text-sm text-white placeholder-purple-300/50 transition-all duration-300 shadow-lg"
                    disabled={isLoading}
                  />
                  
                  {/* Decorative glow on focus */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-[#915EFF]/20 -z-10 blur-xl"
                    initial={{ opacity: 0 }}
                    whileFocus={{ opacity: 1 }}
                  />
                </div>

                <motion.button
                  onClick={sendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-gradient-to-r from-[#915EFF] via-purple-600 to-[#915EFF] text-white rounded-2xl p-4 shadow-lg shadow-[#915EFF]/50 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  <Send className="w-5 h-5 relative z-10" />
                </motion.button>
              </div>

              {/* Quick suggestions */}
              <motion.div
                className="flex gap-2 mt-3 flex-wrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {['Skills', 'Projects', 'Contact'].map((suggestion, idx) => (
                  <motion.button
                    key={suggestion}
                    onClick={() => setInputMessage(`Tell me about Areesha's ${suggestion.toLowerCase()}`)}
                    className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-purple-200 transition-all duration-300"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(145, 94, 255, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIPortfolioChatbot;