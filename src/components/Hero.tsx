import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Cpu, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-28 overflow-hidden bg-transparent">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl text-left flex flex-col gap-6">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 bg-[#121212] border border-white/5 rounded-full px-4 py-1.5 self-start"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
            Available &amp; Remote Contracts
          </span>
        </motion.div>

        {/* Hero Headlines */}
        <div className="flex flex-col gap-2">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-mono text-xs md:text-sm text-accent uppercase tracking-[0.3em] font-black"
          >
            Full-Stack Software Developer / AI &amp; HR Consultant
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black tracking-tighter uppercase leading-[0.95] text-white"
          >
            People, AI &amp; <br />
            <span className="text-white/30 font-serif font-light tracking-tight normal-case block sm:inline">Digital Transformation<span className="text-accent">.</span></span>
          </motion.h1>
        </div>

        {/* Hero Narrative Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-neutral-400 max-w-2xl text-sm md:text-base leading-relaxed"
        >
          Technology should support human capability, accountability, and fair process design. I specialize in bridging the gap between traditional operations and the future of work by combining human-centric HR strategies with modern web development, intelligent automation, and data-driven digital advertising.
        </motion.p>

        {/* Interactive Stats Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/5"
        >
          <div className="flex flex-col">
            <span className="text-3xl font-black text-white font-sans">17+</span>
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Web Apps Built</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-black text-white font-sans">02</span>
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Master's Degrees</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-black text-white font-sans">30k+</span>
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Workforce Supported</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-black text-white font-sans">100%</span>
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Automated Operations</span>
          </div>
        </motion.div>
      </div>

      {/* Polish Details */}
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex items-center gap-6 text-[9px] font-mono tracking-widest uppercase text-neutral-600">
        <span className="flex items-center gap-1.5"><Cpu size={10} /> Edge Enabled</span>
        <span className="flex items-center gap-1.5"><ShieldCheck size={10} /> CHRA Verified</span>
      </div>
    </section>
  );
}
