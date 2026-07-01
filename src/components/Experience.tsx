import { motion } from 'motion/react';
import { Calendar, Briefcase, MapPin } from 'lucide-react';

const EXPERIENCES = [
  {
    id: 'exp-01',
    role: 'English Global Advisor, Digital Advertising',
    company: 'Concentrix Malaysia',
    period: '2024 – PRESENT',
    location: 'Kuala Lumpur, Malaysia',
    details: [
      'Optimizing Meta (Facebook & Instagram) advertising campaigns for major international brands by refining audience targeting, ad creatives, and bid optimization strategies.',
      'Troubleshooting complex ad delivery issues, policy compliance disputes, billing discrepancies, and technical integration parameters.',
      'Consulting global enterprise clients via live chat, secure email lines, Webex dashboard, and phone orchestration.',
    ]
  },
  {
    id: 'exp-02',
    role: 'Independent Developer & AI Consultant',
    company: 'Freelance / Contract',
    period: '2021 – 2024',
    location: 'Global (Remote)',
    details: [
      'Developed and deployed 17 high-performance business applications & interactive workspaces utilizing modern Tailwind UI, React frameworks, and lightweight edge proxies.',
      'Built zero-maintenance corporate automations mapping APIs through Zapier and Make, eliminating up to 30 hours of labor waste weekly for clients.',
      'Delivered strategic consultations on vector databases, custom chatbot fine-tuning, and structured JSON prompt designs.',
    ]
  },
  {
    id: 'exp-03',
    role: 'HR Operations Specialist, Shared Services',
    company: 'Teleperformance USA',
    period: '2019 – 2021',
    location: 'Offshore Hub, Philippines',
    details: [
      'Managed high-priority corporate HR support desk resolving critical operational issues for over 30,000 on-site and remote employees.',
      'Audited leave compliance packages, benefits administration audits, severance paperwork, and initial onboarding pipelines.',
      'Modernized team database workflows to lower request response time of HR queries by 24% nationwide.',
    ]
  },
  {
    id: 'exp-04',
    role: 'Operations Onboarding Specialist',
    company: 'Teleperformance USA',
    period: '6 MONTHS',
    location: 'Offshore Hub, Philippines',
    details: [
      'Led structured corporate workspace provisioning and access alignment for onboarding support groups of 70+ agents weekly.',
      'Partnered with ICT and System Admins to configure, track, and complete fast onboarding deployment procedures.',
    ]
  }
];

export default function Experience() {
  return (
    <section className="relative px-6 md:px-16 lg:px-24 py-20 bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 text-left">
        {/* Section Heading */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.3em] font-black">
            Career Path // Execution History
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tighter text-white">
            PROFESSIONAL EXPERIENCE<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/5 pl-6 md:pl-10 ml-2 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-accent bg-[#0d0d0d] group-hover:bg-accent transition-colors duration-300" />

              <div className="flex flex-col gap-3 bg-[#111111]/40 border border-white/5 rounded-sm p-6 md:p-8 hover:border-white/10 transition-all duration-300">
                {/* Role Header */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                  <div className="flex flex-col">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-accent transition-colors duration-300 uppercase tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono font-bold text-neutral-400 mt-1 uppercase tracking-wider">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 font-mono text-[10px] text-neutral-500 font-bold uppercase tracking-widest whitespace-nowrap">
                    <span className="flex items-center gap-1.5"><Calendar size={11} className="text-neutral-600" /> {exp.period}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={11} className="text-neutral-600" /> {exp.location}</span>
                  </div>
                </div>

                {/* Details list */}
                <ul className="list-disc pl-4 text-xs md:text-sm text-neutral-400 space-y-2 mt-4 leading-relaxed font-medium">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
