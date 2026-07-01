import { motion } from 'motion/react';
import { Cpu, Terminal, Compass, Layout, Workflow, Code, Database, Server } from 'lucide-react';

const TOOLS = [
  { name: 'React 19', category: 'Frontend', desc: 'Modern user-centered UI layers', icon: Layout },
  { name: 'TypeScript', category: 'Language', desc: 'Secure scale-ready type systems', icon: Code },
  { name: 'Tailwind CSS', category: 'Styling', desc: 'Performant visual utility layouts', icon: Compass },
  { name: 'Cloudflare Workers', category: 'Serverless', desc: 'Global edge performance proxying', icon: Server },
  { name: 'Make & Zapier', category: 'Automation', desc: 'Intelligent business logic routing', icon: Workflow },
  { name: 'Prompt Models', category: 'AI Tools', desc: 'Constructed LLM prompt routing', icon: Cpu },
  { name: 'Git & GitHub', category: 'DevOps', desc: 'Production orchestration & CI/CD', icon: Terminal },
  { name: 'SQL Databases', category: 'Data', desc: 'Relational data query schemas', icon: Database },
];

export default function Tools() {
  return (
    <section className="relative px-6 md:px-16 lg:px-24 py-20 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 text-left">
        {/* Section Heading */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.3em] font-black">
            Stack // Toolchain
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tighter text-white">
            TOOLS &amp; INFRASTRUCTURE<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TOOLS.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="bg-[#111111]/40 border border-white/5 rounded-sm p-5 hover:border-white/10 transition-all duration-300 flex flex-col gap-3 group"
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest font-bold">
                    {tool.category}
                  </span>
                  <Icon size={14} className="text-neutral-600 group-hover:text-accent transition-colors duration-300" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-white text-sm uppercase tracking-tight">
                    {tool.name}
                  </h3>
                  <p className="text-[11px] text-neutral-500 leading-snug">
                    {tool.desc}
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
