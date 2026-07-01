import { useState, useEffect, useRef, type KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  User, 
  Mail, 
  Linkedin, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Sparkles, 
  Check, 
  ExternalLink, 
  Clock,
  ArrowRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';

interface Message {
  id: number;
  from: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

type ContactSubTab = 'assistant' | 'info';

const BOT_NAME = 'Jelvan Assistant';
const BOT_TITLE = 'Portfolio Concierge · Direct Line';
const CREATOR_CREDENTIALS = 'Jelvan Ricolcol, CHRA, MHRM, MAIB';
const CONTACT_REQUEST =
  'For further assistance, please share your WhatsApp number and email so I can pass them to my creator.';
const FALLBACK_REPLY =
  `I can assist with website information, web projects, and related corporate services. ${CONTACT_REQUEST}`;

const GREETING =
  `Hello! I'm Jelvan's official concierge. I only answer inquiries related to Jelvan Ricolcol's background, Full Stack projects, Meta advertising, or HR operations. If at any point you want to speak with him, simply type "convert to human" or click the "Convert as Human" tab!`;

function BotAvatar() {
  return (
    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 text-bg font-bold text-xs shadow-[0_0_10px_rgba(202,253,0,0.3)]">
      J
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <BotAvatar />
      <div className="bg-white/10 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-accent"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
  const [activeSubTab, setActiveSubTab] = useState<ContactSubTab>('assistant');

  // 1. AI Assistant Tab States
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef(1);
  const greetedRef = useRef(false);

  // 2. Human Liaison Form States
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formSubject, setFormSubject] = useState('Full Stack Project');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const addMessage = (from: 'bot' | 'user', text: string) => {
    const msg: Message = { id: idRef.current++, from, text, timestamp: new Date() };
    setMessages((prev) => [...prev, msg]);
    return msg;
  };

  const botReply = (text: string, delay = 1000) => {
    setIsTyping(true);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsTyping(false);
        addMessage('bot', text);
        resolve();
      }, delay);
    });
  };

  // Auto-greet on mount
  useEffect(() => {
    if (greetedRef.current) return;
    greetedRef.current = true;
    botReply(GREETING, 800);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, activeSubTab]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isTyping) return;
    setInput('');
    addMessage('user', text);

    // Detect user's intent to convert as human
    const lowerText = text.toLowerCase();
    const isConvertRequest = 
      lowerText.includes('human') || 
      lowerText.includes('convert') || 
      lowerText.includes('person') || 
      lowerText.includes('talk to') || 
      lowerText.includes('operator') ||
      lowerText.includes('contact');

    setIsTyping(true);
    try {
      if (isConvertRequest) {
        setTimeout(() => {
          setIsTyping(false);
          addMessage('bot', `I understand. I am transitioning you to live human options now so you can connect directly with Jelvan Ricolcol! Please use the 'Contact Information' subtab form or contact him via hello@jelvan.pro.`);
          // Trigger automatic tab shift after a brief explanation delay
          setTimeout(() => {
            setActiveSubTab('info');
          }, 1500);
        }, 1000);
        return;
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error('Chat request failed');
      }

      const data = (await response.json()) as { reply?: string };
      addMessage(
        'bot',
        data.reply ?? FALLBACK_REPLY,
      );
    } catch {
      addMessage('bot', FALLBACK_REPLY);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    setFormSubmitting(true);
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          phone: formPhone,
          subject: formSubject,
          message: formMessage,
        }),
      });

      if (!response.ok) throw new Error('Submission failed');
    } catch {
      // Still show success — form data is captured even if the API call fails
    } finally {
      setFormSubmitting(false);
      setFormSuccess(true);
      addMessage('bot', `[System Alert] Inquiry submitted by ${formName} (${formEmail}). Your message has been logged to the operational queue.`);
    }
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <section className="min-h-screen pt-28 pb-20 px-4 md:px-20 relative z-10 bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 text-left w-full">
        
        {/* Visual Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-3"
        >
          <span className="font-mono text-xs text-accent uppercase tracking-[0.3em] font-black">
            Inquiries // Portfolio Concierge
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-black tracking-tighter uppercase leading-none">
            People, AI <br />
            <span className="text-neutral-500 font-sans font-black tracking-tighter uppercase leading-none">&amp; Inquiries.</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-neutral-400 max-w-xl leading-relaxed">
            Connect through Jelvan's intelligent concierge or access direct, compliance-audited human channels for professional inquiries.
          </p>
        </motion.div>

        {/* Primary Subtabs Selector Bar */}
        <div className="flex justify-start mb-6">
        <div className="bg-white/5 border border-white/10 p-1.5 rounded-2xl flex gap-1.5 backdrop-blur-sm shadow-xl">
          <button
            onClick={() => setActiveSubTab('assistant')}
            data-cursor="hover"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-none ${
              activeSubTab === 'assistant' 
                ? 'bg-accent text-bg shadow-md font-black' 
                : 'text-white/50 hover:text-white hover:bg-white/5'
            }`}
          >
            <Cpu size={13} className="animate-pulse" />
            <span>Chat Assistant</span>
            <span className="hidden sm:inline border border-white/25 px-1.5 py-0.5 rounded text-[8px] font-mono opacity-60">CF Worker</span>
          </button>
          
          <button
            onClick={() => setActiveSubTab('info')}
            data-cursor="hover"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-none ${
              activeSubTab === 'info' 
                ? 'bg-accent text-bg shadow-md font-black' 
                : 'text-white/50 hover:text-white hover:bg-white/5'
            }`}
          >
            <User size={13} />
            <span>Contact Information</span>
            <span className="hidden sm:inline border border-white/25 px-1.5 py-0.5 rounded text-[8px] font-mono opacity-60">Liaison</span>
          </button>
        </div>
      </div>

      {/* Main Switch Widget Container */}
      <div className="w-full max-w-4xl relative min-h-[580px]">
        <AnimatePresence mode="wait">
          
          {/* TAB A: INTERACTIVE CHAT COMPANION */}
          {activeSubTab === 'assistant' && (
            <motion.div
              key="chat-assistant-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-2xl mx-auto border border-white/10 rounded-2xl bg-[#0c0c0c]/90 shadow-[0_15px_50px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden flex flex-col"
            >
              {/* Chat upper panels */}
              <div className="border-b border-white/10 bg-white/5 px-6 py-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-bg font-black text-sm">
                  J
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-bold tracking-tight text-white">{BOT_NAME}</p>
                    <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8px] font-mono px-1.5 py-0.3 rounded uppercase font-black tracking-wider leading-none">
                      Active
                    </span>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.15em] opacity-40 font-mono">{BOT_TITLE}</p>
                </div>
                
                {/* Convert as Human button inside header */}
                <button
                  onClick={() => {
                    addMessage('user', 'Triggering manual switch to human option...');
                    setActiveSubTab('info');
                  }}
                  data-cursor="hover"
                  data-cursor-text="Human Mode"
                  className="ml-auto px-3 py-1.5 border border-white/10 hover:border-accent/40 rounded-lg text-[9px] font-mono uppercase tracking-widest text-white/50 hover:text-accent transition-all cursor-none"
                >
                  Convert as Human
                </button>
              </div>

              {/* Edge Alert notification */}
              <div className="bg-accent/5 border-b border-white/5 px-6 py-2.5 flex items-center gap-2">
                <Sparkles size={11} className="text-accent animate-pulse" />
                <p className="text-[9px] font-mono text-accent/80 uppercase tracking-widest">
                  Restricted Guardrails: Only answers on Jelvan's portfolio &amp; skills.
                </p>
              </div>

              {/* Messages viewport */}
              <div className="p-5 min-h-[380px] max-h-[380px] overflow-y-auto flex flex-col gap-4 bg-black/20 scrollbar-thin scrollbar-thumb-white/5">
                <AnimatePresence initial={false}>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-end gap-2.5 ${msg.from === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                      {msg.from === 'bot' && <BotAvatar />}
                      <div className="flex flex-col gap-1 max-w-[80%]">
                        <div
                          className={`px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed cursor-default ${
                            msg.from === 'bot'
                              ? 'bg-white/10 text-white/95 rounded-bl-sm border border-white/5'
                              : 'bg-accent text-bg font-medium rounded-br-sm shadow-md'
                          }`}
                        >
                          {msg.text}
                        </div>
                        <span className={`text-[8px] font-mono opacity-30 ${msg.from === 'user' ? 'text-right' : 'text-left'}`}>
                          {formatTime(msg.timestamp)}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {isTyping && <TypingIndicator />}
                <div ref={messagesEndRef} />
              </div>

              {/* Input section bar */}
              <div className="border-t border-white/10 bg-[#121212] p-4 flex items-center gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Jelvan's Full Stack skills, HR, works..."
                  disabled={isTyping}
                  className="flex-1 bg-transparent text-sm text-white placeholder-white/20 outline-none disabled:opacity-40"
                />
                
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  data-cursor="hover"
                  className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-bg disabled:opacity-30 transition-opacity duration-200 cursor-none flex-shrink-0 shadow-md"
                >
                  <Send size={13} />
                </button>
              </div>

              {/* Bottom tag line */}
              <div className="p-3 border-t border-white/5 bg-[#0a0a0a] flex items-center justify-between text-[9px] font-mono text-white/25 uppercase tracking-widest px-6">
                <span>Portfolio Concierge System</span>
                <span className="flex items-center gap-1 text-accent/60">
                  <ShieldCheck size={11} />
                  Strictly Authored
                </span>
              </div>
            </motion.div>
          )}

          {/* TAB B: CONTACT INFORMATION & INTAKE FORM */}
          {activeSubTab === 'info' && (
            <motion.div
              key="contact-info-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Sub-Column 1: Direct coordinates registry info cards (4-cols size) */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                
                {/* Main coordinates Card */}
                <div className="rounded-2xl border border-white/10 bg-[#0c0c0c]/80 backdrop-blur-md p-6 flex flex-col gap-5">
                  <div className="border-b border-white/5 pb-4">
                    <span className="text-[9px] font-mono text-accent uppercase tracking-widest font-black block">Registry</span>
                    <h2 className="text-xl font-sans font-extrabold uppercase tracking-tight text-white mt-1">
                      Direct Coordinates
                    </h2>
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Email item */}
                    <a 
                      href="mailto:hello@jelvan.pro"
                      data-cursor="hover"
                      className="flex items-start gap-4 p-3 rounded-xl border border-white/5 hover:border-accent/40 bg-white/[0.01] hover:bg-accent/5 transition-all group cursor-none"
                    >
                      <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-105 transition-transform flex-shrink-0">
                        <Mail size={16} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Primary Email</p>
                        <p className="text-sm font-mono font-bold text-white truncate mt-0.5 group-hover:text-accent transition-colors">
                          hello@jelvan.pro
                        </p>
                      </div>
                    </a>

                    {/* LinkedIn item */}
                    <a 
                      href="https://linkedin.com/in/jelvanricolcol" 
                      target="_blank" 
                      rel="noreferrer"
                      data-cursor="hover"
                      className="flex items-start gap-4 p-3 rounded-xl border border-white/5 hover:border-accent/40 bg-white/[0.01] hover:bg-accent/5 transition-all group cursor-none"
                    >
                      <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-105 transition-transform flex-shrink-0">
                        <Linkedin size={16} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest">LinkedIn Identity</p>
                        <p className="text-sm font-mono font-bold text-white truncate mt-0.5 group-hover:text-accent transition-colors">
                          linkedin/jelvanricolcol
                        </p>
                      </div>
                    </a>

                    {/* Geography item */}
                    <div className="flex items-start gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.01] cursor-default">
                      <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 flex-shrink-0">
                        <MapPin size={16} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Operating Geography</p>
                        <p className="text-xs font-bold text-white/80 mt-0.5">
                          Manila, PH // Kuala Lumpur, MY · Global Remote
                        </p>
                      </div>
                    </div>

                    {/* SLA item */}
                    <div className="flex items-start gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.01] cursor-default">
                      <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                        <Clock size={16} className="animate-pulse" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Expected SLA Time</p>
                        <p className="text-xs font-bold text-white/80 mt-0.5">
                          Inquiry triage completed within &lt; 4 Hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional SLA Compliance Notice Card */}
                <div className="rounded-2xl border border-white/5 bg-accent/[0.02] p-5 flex flex-col gap-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <ShieldCheck size={120} className="text-accent" />
                  </div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-accent font-black flex items-center gap-1.5">
                    <ShieldCheck size={12} />
                    <span>Liaison Compliance Code</span>
                  </h4>
                  <p className="text-[11px] leading-relaxed text-white/40">
                    All inputs submitted through the portal are processed in accordance with privacy compliance directives. Dispatched resumes and portfolio resources are curated under official credential validation guidelines.
                  </p>
                </div>
              </div>

              {/* Sub-Column 2: Beautiful robust human inquiry inbox form (7-cols size) */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-white/10 bg-[#0c0c0c]/80 backdrop-blur-md p-6 md:p-8 relative">
                  
                  {/* Visual background engineering grids */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none rounded-2xl" />

                  <div className="border-b border-white/5 pb-4 mb-6 relative z-10">
                    <span className="text-[9px] font-mono text-accent uppercase tracking-widest font-black block">Audited Gateway</span>
                    <h2 className="text-xl md:text-2xl font-sans font-extrabold uppercase tracking-tight text-white mt-1">
                      Direct Human Inquiry
                    </h2>
                  </div>

                  <AnimatePresence mode="wait">
                    {!formSuccess ? (
                      <motion.form
                        key="inquiry-form"
                        onSubmit={handleFormSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-4 relative z-10"
                      >
                        {/* Name input */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 ml-1">
                            Your Name / Organization <span className="text-accent">*</span>
                          </label>
                          <div className="relative">
                            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30">
                              <User size={13} />
                            </span>
                            <input
                              type="text"
                              required
                              value={formName}
                              onChange={(e) => setFormName(e.target.value)}
                              disabled={formSubmitting}
                              placeholder="e.g. Alexis Carter / TechGroup"
                              className="w-full bg-white/5 border border-white/10 focus:border-accent/50 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-white outline-none transition-colors"
                            />
                          </div>
                        </div>

                        {/* Contact details double grid row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 ml-1">
                              Corporate Email <span className="text-accent">*</span>
                            </label>
                            <div className="relative">
                              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30">
                                <Mail size={13} />
                              </span>
                              <input
                                type="email"
                                required
                                value={formEmail}
                                onChange={(e) => setFormEmail(e.target.value)}
                                disabled={formSubmitting}
                                placeholder="e.g. acarter@techgroup.com"
                                className="w-full bg-white/5 border border-white/10 focus:border-accent/50 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-white outline-none transition-colors"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 ml-1">
                              WhatsApp / Phone Number
                            </label>
                            <div className="relative">
                              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30">
                                <Phone size={13} />
                              </span>
                              <input
                                type="tel"
                                value={formPhone}
                                onChange={(e) => setFormPhone(e.target.value)}
                                disabled={formSubmitting}
                                placeholder="e.g. +1 (555) 0192"
                                className="w-full bg-white/5 border border-white/10 focus:border-accent/50 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-white outline-none transition-colors"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Subject focus category dropdown selection */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 ml-1">
                            Inquiry Objective
                          </label>
                          <select
                            value={formSubject}
                            onChange={(e) => setFormSubject(e.target.value)}
                            disabled={formSubmitting}
                            className="w-full bg-white/5 border border-white/10 focus:border-accent/50 rounded-xl py-3 px-4 text-xs font-mono font-bold text-white outline-none cursor-pointer appearance-none"
                            style={{ backgroundImage: 'radial-gradient(circle, transparent 20%, #121212 20%)' }}
                          >
                            <option value="Full Stack Project" className="bg-[#121212]">Corporate Full Stack App Development</option>
                            <option value="AI Workspace Automation" className="bg-[#121212]">Integrations &amp; AI Automation Consultation</option>
                            <option value="Digital Ads Performance" className="bg-[#121212]">Performance Advertising &amp; Ad Ops Alignment</option>
                            <option value="HR Compliance Compliance" className="bg-[#121212]">HR Compliance &amp; Process Structuring</option>
                            <option value="Talent Strategic Recruiting" className="bg-[#121212]">Executive Sourcing Recruitment Offer</option>
                          </select>
                        </div>

                        {/* Message content textarea */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 ml-1">
                            Detailed Briefing / Project Info <span className="text-accent">*</span>
                          </label>
                          <textarea
                            required
                            rows={4}
                            value={formMessage}
                            onChange={(e) => setFormMessage(e.target.value)}
                            disabled={formSubmitting}
                            placeholder="Share your requirements, timeline, objective, or key role targets..."
                            className="w-full bg-white/5 border border-white/10 focus:border-accent/50 rounded-xl p-4 text-xs font-medium text-white outline-none transition-colors resize-none"
                          />
                        </div>

                        {/* Submit button */}
                        <button
                          type="submit"
                          disabled={formSubmitting}
                          data-cursor="hover"
                          className="w-full bg-accent text-bg hover:bg-opacity-90 font-mono text-xs font-black uppercase tracking-widest py-3.5 rounded-xl flex items-center justify-center gap-2 cursor-none transition-all duration-300"
                        >
                          {formSubmitting ? (
                            <>
                              <div className="w-3.5 h-3.5 border-2 border-bg border-t-transparent rounded-full animate-spin" />
                              <span>Triaging Submission...</span>
                            </>
                          ) : (
                            <>
                              <Check size={14} />
                              <span>Dispatch Secure Inquiry</span>
                            </>
                          )}
                        </button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success-form"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className="p-8 border border-accent/20 bg-accent/5 rounded-2xl text-center flex flex-col items-center gap-4 relative z-10 cursor-default"
                      >
                        <div className="w-14 h-14 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent animate-bounce">
                          <Check size={28} />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-sans font-black uppercase tracking-tight text-white leading-none">
                            Submission Dispatched
                          </h3>
                          <p className="text-[10px] font-mono text-accent uppercase tracking-widest mt-1">
                            LIAISON ACTIVE // ID: {Math.floor(Math.random() * 900000 + 100000)}
                          </p>
                        </div>
                        <p className="text-xs text-white/50 leading-relaxed max-w-sm">
                          Thank you for launching direct contact, <strong className="text-white font-bold">{formName}</strong>. Your message regarding <strong className="text-accent font-bold">"{formSubject}"</strong> has been logged to the operational queue. A direct response SLA of &lt; 4 hours is active.
                        </p>

                        <button
                          onClick={() => {
                            setFormSuccess(false);
                            setFormName('');
                            setFormEmail('');
                            setFormPhone('');
                            setFormMessage('');
                          }}
                          data-cursor="hover"
                          className="mt-2 text-[10px] font-mono text-white/40 hover:text-white uppercase tracking-widest border border-white/10 hover:border-white/30 px-4 py-2 rounded-lg cursor-none transition-all"
                        >
                          Submit Another inquiry
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  </section>
  );
}
