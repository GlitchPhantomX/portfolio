import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, Send, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ---------------------------------------------------------------------------
// Design tokens (kept in one place so the whole widget stays consistent with
// the portfolio's terminal / code-editor aesthetic: near-black panels, one
// purple accent, monospace for labels & meta text, sans for body copy).
// ---------------------------------------------------------------------------
const ACCENT = '#915EFF';
const BG_VOID = '#08080d';
const BG_PANEL = '#0d0d16';
const BORDER = 'rgba(145, 94, 255, 0.22)';
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';

const AIPortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi, I\'m Areesha\'s AI assistant. Ask about her skills, experience, or projects.'
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
- Software Engineer & AI Developer with 2+ years of experience building scalable web applications, backend systems, REST APIs, and AI-powered automation solutions
- Location: Karachi, Pakistan
- Email: areesha21314@gmail.com
- Phone: +92 331 2969746
- LinkedIn: linkedin.com/in/areesha-sattar/
- GitHub: github.com/GlitchPhantomX

CURRENT ROLE:
Software Engineer at CarbonRepro (July 2026 – Present)
- Develops scalable, high-performance backend services using Python and FastAPI
- Designs and builds secure RESTful APIs for AI-powered applications
- Collaborates with cross-functional engineering teams using Git-based workflows and agile practices
- Architects backend solutions focused on scalability, performance, security, and maintainability
- Integrates third-party APIs with secure authentication and reliable data exchange
- Debugs and resolves complex backend issues to improve stability and performance

TECHNICAL SKILLS:
- Languages: JavaScript (ES6+), TypeScript, Python, HTML5, CSS3
- Frontend: React.js, Next.js, Redux Toolkit, Tailwind CSS, Bootstrap, Responsive Web Design
- Backend: Node.js, Express.js, Python, FastAPI, REST APIs, JWT Authentication, API Integration
- Database: MongoDB, MySQL, Mongoose
- AI & Automation: OpenAI SDK, Agentic AI, Prompt Engineering, Claude Code CLI, Gemini CLI, OpenClaw
- Tools & DevOps: Git, GitHub, Docker, Kubernetes, Postman, Vercel, Huggingface

KEY PROJECTS:
1. Nexa AI – AI Voice Meeting & Video Conferencing SaaS Platform (Feb 2026 – Present)
   - Stack: Next.js 16, React 19, TypeScript, tRPC, Better-Auth, Stream Video SDK, OpenRouter, Gemini, Groq, Neon PostgreSQL, Drizzle ORM, Tailwind CSS, shadcn/ui
   - Engineered an AI-powered SaaS platform with real-time meetings and custom AI agents
   - Built a provider-agnostic LLM architecture supporting OpenRouter, Gemini, and Groq
   - Enabled seamless voice conversations using browser-based STT/TTS
   - Implemented secure multi-provider authentication with Better-Auth and OAuth
   - Integrated Stream Video SDK with automated meeting lifecycle and recording management

2. AI CRM Digital FTE – Multi-Channel Customer Support Automation (Jan 2026 – Mar 2026)
   - Stack: Python, FastAPI, OpenAI Agents SDK, PostgreSQL, Kafka, React.js, Docker, Kubernetes, REST APIs
   - Built an AI-powered Digital FTE system for automated customer support and CRM workflow management
   - Developed multi-channel support architecture integrating Gmail, WhatsApp, and Web Support Forms
   - Designed AI-driven customer interaction workflows using FastAPI, OpenAI Agents SDK, and Kafka
   - Implemented intelligent ticket handling, escalation workflows, and customer conversation management

CERTIFICATIONS & ACHIEVEMENTS:
- Full Stack Development (Governor House Tech Program)
- Agentic AI, OpenAI Agents SDK, AI Automation

EDUCATION:
- Intermediate in Pre-Engineering – Govt. Degree College Karachi (2022)
- Matriculation in Science – Major Shabbir Sharif School Karachi (2020)

PERSONALITY:
- Self-driven and passionate about building intelligent, AI-powered solutions
- Strong focus on Agentic AI, backend architecture, and modern AI automation

INSTRUCTIONS:
- Be professional, friendly, and helpful
- Provide specific details about Areesha's skills, experience, and projects
- If asked about contact, provide email, phone, LinkedIn, and GitHub
- If asked about projects, share the GitHub links mentioned above
- Keep responses concise but informative
- Use a warm, professional tone
- If you don't know something, be honest and suggest contacting Areesha directly`;

  const sendMessage = async (override) => {
    const text = (override ?? inputMessage).trim();
    if (!text || isLoading) return;

    setInputMessage('');
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_MISTRAL_API_KEY;

      if (!apiKey) {
        throw new Error('API key not configured');
      }

      const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'mistral-small-latest',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages.slice(-6),
            { role: 'user', content: text }
          ]
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error('Mistral API error:', errText);
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const assistantMessage = data.choices[0]?.message?.content ||
        'Sorry, I could not process that request.';

      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Having trouble connecting right now — try again, or reach Areesha directly at areesha21314@gmail.com'
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
    <div className="fixed bottom-6 right-6 z-50" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>

      {/* Launcher */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="relative w-14 h-14 rounded-xl flex items-center justify-center"
            style={{
              background: BG_PANEL,
              border: `1px solid ${ACCENT}`,
              boxShadow: `0 0 24px -6px ${ACCENT}`,
            }}
            aria-label="Open chat"
          >
            <motion.span
              className="absolute inset-0 rounded-xl"
              style={{ border: `1px solid ${ACCENT}` }}
              animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <Terminal className="w-6 h-6" style={{ color: ACCENT }} strokeWidth={1.75} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            className="w-[380px] h-[540px] flex flex-col overflow-hidden rounded-xl relative"
            style={{
              background: BG_VOID,
              border: `1px solid ${BORDER}`,
              boxShadow: `0 20px 60px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(145,94,255,0.05)`,
            }}
          >
            {/* faint dot-grid, matches hero background */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(${ACCENT} 1px, transparent 1px)`,
                backgroundSize: '22px 22px',
              }}
            />

            {/* Header */}
            <div
              className="relative flex items-center justify-between gap-3 pl-4 pr-3 py-3.5 shrink-0"
              style={{
                background: `linear-gradient(180deg, ${BG_PANEL} 0%, rgba(13,13,22,0.94) 100%)`,
                borderBottom: `1px solid ${BORDER}`,
              }}
            >
              <div className="flex items-center gap-3 min-w-0">
                {/* Avatar badge */}
                <div
                  className="relative w-9 h-9 shrink-0 rounded-lg flex items-center justify-center"
                  style={{
                    background: 'rgba(145,94,255,0.10)',
                    border: `1px solid ${BORDER}`,
                  }}
                >
                  <Sparkles className="w-4 h-4" style={{ color: ACCENT }} strokeWidth={1.75} />
                  <motion.span
                    className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
                    style={{ background: '#3ddc84', border: `1.5px solid ${BG_PANEL}` }}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>

                <div className="flex flex-col min-w-0 leading-tight">
                  <span
                    className="text-[13.5px] font-medium text-white/95 truncate"
                    style={{ fontFamily: MONO, letterSpacing: '-0.01em' }}
                  >
                    Areesha<span style={{ color: ACCENT }}>.assistant</span>
                  </span>
                  <span
                    className="text-[10.5px] mt-0.5 truncate"
                    style={{ color: '#8b8b9e' }}
                  >
                    AI &amp; Backend Engineer · usually replies instantly
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-white/50 hover:text-white/90 transition-colors shrink-0"
                style={{ background: 'transparent' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(145,94,255,0.12)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="relative flex-1 overflow-y-auto px-4 py-4 space-y-3">
              <AnimatePresence mode="popLayout" initial={false}>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className="max-w-[82%] rounded-lg px-3.5 py-2.5 text-[13px] leading-relaxed whitespace-pre-wrap"
                      style={
                        msg.role === 'user'
                          ? { background: ACCENT, color: '#fff' }
                          : {
                              background: BG_PANEL,
                              color: '#e6e6ef',
                              borderLeft: `2px solid ${ACCENT}`,
                            }
                      }
                    >
                      {msg.role === 'assistant' && (
                        <span
                          className="block text-[10px] mb-1"
                          style={{ color: ACCENT, fontFamily: MONO }}
                        >
                          assistant
                        </span>
                      )}
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isLoading && (
                <div className="flex justify-start">
                  <div
                    className="rounded-lg px-3.5 py-2.5 flex items-center gap-2"
                    style={{ background: BG_PANEL, borderLeft: `2px solid ${ACCENT}` }}
                  >
                    <Loader2 className="w-3.5 h-3.5 animate-spin" style={{ color: ACCENT }} />
                    <span
                      className="text-[11px]"
                      style={{ color: '#8b8b9e', fontFamily: MONO }}
                    >
                      typing…
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="shrink-0 px-4 py-3" style={{ background: BG_PANEL, borderTop: `1px solid ${BORDER}` }}>
              <div className="flex items-center gap-2">
                <div
                  className="flex-1 flex items-center gap-2 rounded-lg px-3"
                  style={{ background: BG_VOID, border: `1px solid ${BORDER}` }}
                >
                  <span style={{ color: ACCENT, fontFamily: MONO }} className="text-sm select-none">
                    &gt;
                  </span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="ask something..."
                    disabled={isLoading}
                    className="flex-1 bg-transparent py-3 text-[13px] text-white placeholder-white/30 focus:outline-none"
                    style={{ fontFamily: MONO }}
                  />
                </div>

                <button
                  onClick={() => sendMessage()}
                  disabled={isLoading || !inputMessage.trim()}
                  className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center disabled:opacity-35 transition-opacity"
                  style={{ background: ACCENT }}
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>

              <div className="flex gap-1.5 mt-2.5">
                {['skills', 'projects', 'contact'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => sendMessage(`Tell me about Areesha's ${tag}`)}
                    className="px-2.5 py-1 rounded-md text-[10.5px] transition-colors"
                    style={{
                      color: '#a9a9bd',
                      background: 'rgba(145,94,255,0.08)',
                      border: `1px solid ${BORDER}`,
                      fontFamily: MONO,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.borderColor = ACCENT;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#a9a9bd';
                      e.currentTarget.style.borderColor = BORDER;
                    }}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIPortfolioChatbot;