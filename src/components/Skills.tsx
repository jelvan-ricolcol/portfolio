import { motion } from 'motion/react';
import { Cpu, Terminal, Users, Layers, Award } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    id: 'cat-01',
    title: 'Development Stack',
    icon: Terminal,
    skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React 19 & Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'cat-02',
    title: 'AI & Automations',
    icon: Cpu,
    skills: ['Prompt Engineering', 'Gemini & OpenAI SDKs', 'LLM Workflow Design', 'WhatsApp Integration', 'Zapier/Make Automation', 'Intelligent Agents'],
  },
  {
    id: 'cat-03',
    title: 'Operations & HR Tech',
    icon: Users,
    skills: ['Workforce Platforms', 'Onboarding Pipelines', 'Compliance Audits', 'Email HTML Formatting', 'HR Documentation', 'Reporting Tools'],
  },
  {
    id: 'cat-04',
    title: 'Data & Deployment',
    icon: Layers,
    skills: ['MySQL & SQL Server', 'Cloudflare Workers AI', 'Cloudflare D1', 'Cloudinary Media Delivery', 'Canva Design Editing', 'CI/CD Pipelines'],
  }
];

export default function Skills() {
  return (
    <section className="relative px-6 md:px-16 lg:px-24 py-20 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 text-left">
        {/* Section Heading */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.3em] font-black">
            Capabilities // Inventory
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tighter text-white">
            TECHNICAL &amp; OPERATIONS SKILLS<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#111] border border-white/5 rounded-sm p-6 hover:border-accent/30 hover:shadow-[0_10px_30px_rgba(202,253,0,0.03)] transition-all duration-300 flex flex-col gap-5"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon size={14} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-white uppercase text-xs tracking-wider">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Items */}
                <ul className="flex flex-col gap-2 border-t border-white/5 pt-4">
                  {cat.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
