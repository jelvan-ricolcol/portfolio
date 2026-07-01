import { motion } from 'motion/react';
import { Laptop, Cpu, Megaphone, Workflow } from 'lucide-react';

const SERVICES = [
  {
    id: 'ser-01',
    title: 'Custom Web Development',
    desc: 'Engineering lightweight, highly interactive, mobile-responsive single-page applications and web dashboards using React, TypeScript, and Tailwind CSS.',
    icon: Laptop,
    badge: 'FRONTEND STACK'
  },
  {
    id: 'ser-02',
    title: 'AI & Chatbot Integrations',
    desc: 'Connecting systems to LLM APIs (Gemini, OpenAI) for automated chat assistants, document retrieval systems, and intelligent agent flows.',
    icon: Cpu,
    badge: 'AI ENGINEERING'
  },
  {
    id: 'ser-03',
    title: 'Meta Advertising Strategy',
    desc: 'Setting up and scaling performance-driven ad campaigns on Facebook & Instagram with precise audience definitions and creative optimization.',
    icon: Megaphone,
    badge: 'DIGITAL MARKETING'
  },
  {
    id: 'ser-04',
    title: 'Process Automations',
    desc: 'Designing automated pipelines through Zapier & Make to orchestrate CRM data, generate instant PDF reports, and eliminate manual tasks.',
    icon: Workflow,
    badge: 'ENTERPRISE FLOWS'
  }
];

export default function Services() {
  return (
    <section className="relative px-6 md:px-16 lg:px-24 py-20 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 text-left">
        {/* Section Heading */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.3em] font-black">
            Services // Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tighter text-white">
            DIGITAL EXECUTION SERVICES<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((ser, index) => {
            const Icon = ser.icon;
            return (
              <motion.div
                key={ser.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#111] border border-white/5 rounded-sm p-8 hover:border-white/15 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col gap-5 group"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full bg-accent/5 border border-accent/15 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <Icon size={16} className="text-accent group-hover:text-black transition-colors duration-300" />
                  </div>
                  <span className="font-mono text-[9px] text-accent group-hover:text-white uppercase tracking-widest font-bold bg-accent/5 border border-accent/10 px-2.5 py-1 rounded-full transition-colors duration-300">
                    {ser.badge}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-sans font-black text-white text-lg md:text-xl uppercase tracking-tight">
                    {ser.title}
                  </h3>
                  <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                    {ser.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
