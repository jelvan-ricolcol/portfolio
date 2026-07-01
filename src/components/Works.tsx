import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 'proj-01',
    title: 'authenticator-app-operava',
    category: 'Secure App',
    tagline: 'Secure authentication and account protection',
    desc: 'A full-stack identity platform focused on secure sign-in, protected account management, and safe credential handling for modern web apps.',
    details: [
      'Includes the parts needed for sign-in, server support, and connected data flow for account management.',
      'Uses protected pages, secure sessions, and account dashboards to keep the experience safe and clear.',
      'Comes with security notes and setup guidance to help with safer use and upkeep.'
    ],
    tech: ['React', 'Vite', 'TypeScript', 'Express', 'Tailwind CSS v4'],
    cover: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1200&h=900',
    url: 'https://github.com/jelvan-ricolcol/authenticator-app-operava',
    linkLabel: 'Open Repository',
    status: 'Public',
    stats: { value: 'Full Stack', label: 'Application Type' }
  },
  {
    id: 'proj-02',
    title: 'onlinebookstore',
    category: 'Storefront',
    tagline: 'Interactive bookstore showcase',
    desc: 'A store-like web experience that presents books, browsing flows, and order visibility with smooth movement and a modern shop layout.',
    details: [
      'Shows product browsing, category navigation, and shopping-style user journeys.',
      'Applies order tracking and status updates for customer-facing shopping flows.',
      'Uses moving transitions and component-based layouts to keep browsing responsive and engaging.'
    ],
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS v4', 'Motion'],
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1200&h=900',
    url: 'https://github.com/jelvan-ricolcol/onlinebookstore',
    linkLabel: 'Open Repository',
    status: 'Public',
    stats: { value: 'Commerce UI', label: 'Experience Pattern' }
  },
  {
    id: 'proj-03',
    title: 'learning-management-system-aiai',
    category: 'Learning Platform',
    tagline: 'Learning system with AI support',
    desc: 'An education-focused platform combining a learning system with AI-assisted study flows and clear dashboard views.',
    details: [
      'Provides student and teacher dashboard structures for course progress, reports, and classroom management.',
      'Adds AI-assisted study ideas for guided learning, content discovery, and adaptive support.',
      'Uses charts and summary views to show learning progress and activity updates.'
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    cover: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200&h=900',
    url: 'https://github.com/jelvan-ricolcol/learning-management-system-aiai',
    linkLabel: 'Open Repository',
    status: 'Public',
    stats: { value: 'Multi Dashboard', label: 'System Design' }
  },
  {
    id: 'proj-04',
    title: 'bolekstore',
    category: 'Storefront',
    tagline: 'Clothing customizer and storefront',
    desc: 'A fashion store experience with interactive product choices, browsing, and checkout-style customer journeys.',
    details: [
      'Supports style choices, product options, and personalized purchase selections.',
      'Provides shop-like browsing, product details, and action-driven buying flows.',
      'Uses smooth transitions to improve the shopping and setup experience.'
    ],
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS v4', 'Motion'],
    cover: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200&h=900',
    url: 'https://github.com/jelvan-ricolcol/bolekstore',
    linkLabel: 'Open Repository',
    status: 'Public',
    stats: { value: 'Customizer', label: 'Core Feature' }
  },
  {
    id: 'proj-05',
    title: 'Institute-school-AI',
    category: 'School Portal',
    tagline: 'Academic institution portal',
    desc: 'A school-centered digital platform that combines a public campus portal with learning modules for school operations and student access.',
    details: [
      'Shows pages for campus information, programs, announcements, and public communication.',
      'Includes learning-related areas for course flow, student interaction, and school dashboards.',
      'Uses charts to share progress, results, and educational insights.'
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    cover: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200&h=900',
    url: 'https://github.com/jelvan-ricolcol/Institute-school-AI',
    linkLabel: 'Open Repository',
    status: 'Public',
    stats: { value: 'Campus + LMS', label: 'Platform Scope' }
  },
  {
    id: 'proj-06',
    title: 'Saas-bolek-workspace',
    category: 'Brand Repository',
    tagline: 'Workspace / domain-level brand repo',
    desc: 'A workspace-level repository documenting the product presence and brand structure of the Bolek Workspace public and suite domains.',
    details: [
      'Covers the public-facing `suite.bolekworkspace.com` site positioning and messaging.',
      'Documents `suite.bolekworkspace.com` as the workspace surface for product and service use.',
      'Acts as a source for brand materials, system context, and product documentation assets.'
    ],
    tech: ['Repository Documentation', 'Web Platform', 'Domain Architecture', 'Brand Systems'],
    cover: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200&h=900',
    url: 'https://github.com/jelvan-ricolcol/Saas-bolek-workspace',
    linkLabel: 'Open Repository',
    status: 'Public',
    stats: { value: '2 Domains', label: 'Workspace Coverage' }
  },
  {
    id: 'proj-07',
    title: 'personalized-business-html-email-formats',
    category: 'Business Email',
    tagline: 'Personalized business HTML email formats',
    desc: 'A repository focused on crafting responsive, branded, and personalized HTML email formats for business communication and outreach.',
    details: [
      'Includes reusable email templates for welcome, follow-up, announcement, and promotional business messaging.',
      'Structures responsive HTML layouts for broad email app compatibility and polished presentation across devices.',
      'Supports personalization so the message, branding, and action button can fit different audiences.'
    ],
    tech: ['HTML', 'CSS', 'Email Templates', 'Responsive Design'],
    cover: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200&h=900',
    url: 'https://github.com/jelvan-ricolcol/personalized-business-html-email-formats',
    linkLabel: 'Open Repository',
    status: 'Public',
    stats: { value: 'Email Format', label: 'Content Type' }
  },
  {
    id: 'proj-08',
    title: 'automation-serverless-workers',
    category: 'Automation',
    tagline: 'Automations, serverless, and workers',
    desc: 'A repository for task automation built around serverless functions and worker-based processing.',
    details: [
      'Covers automation for scheduled jobs, event-based tasks, and repeatable work.',
      'Shows serverless deployment for simple backend logic and scalable request handling.',
      'Includes worker-based processing for background tasks and edge-style runs.'
    ],
    tech: ['Automation', 'Serverless', 'Workers', 'Cloud Functions'],
    cover: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200&h=900',
    url: 'https://github.com/jelvan-ricolcol/automation-serverless-workers',
    linkLabel: 'Open Repository',
    status: 'Public',
    stats: { value: 'Edge Runtime', label: 'Execution Model' }
  }
];

const HR_DOCS = [
  {
    id: 'hr-01',
    title: 'Workplace Policy for Generative AI Integration',
    category: 'AI Guidelines',
    summary: 'A framework for safe, ethical, and responsible employee use of AI tools to improve business work while preventing client data leakage.',
    updated: 'May 2026',
    author: 'Jelvan Ricolcol, M.S. AI for Business',
    tags: ['AI Strategy', 'Data Privacy', 'Operations Compliance'],
    sections: [
      { title: '1.0 Purpose & Vision', content: 'This policy sets out safe and effective ways for employees to use AI tools at work.' },
      { title: '2.0 Guiding Principles', bullets: ['Human-in-the-Loop: AI tools support people, but people remain accountable for final work.', 'Ethics and Fairness: Workflows must help avoid harmful or biased results.', 'Information Integrity: All AI output must be checked before client use.'] }
    ]
  }
];

export default function Works() {
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null);
  const toggleDoc = (id: string) => setExpandedDoc(expandedDoc === id ? null : id);

  return (
    <div className="relative px-6 md:px-16 lg:px-24 py-20 bg-transparent text-white font-sans">
      <div className="max-w-6xl mx-auto flex flex-col gap-24 text-left">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.3em] font-black">
            Works // Projects &amp; Notes
          </span>
          <h2 className="text-4xl md:text-6xl font-sans font-black tracking-tighter uppercase leading-none">
            Selected Work <br />
            <span className="text-neutral-500 font-serif italic font-light tracking-tight normal-case">&amp; Simple Notes.</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-400 max-w-xl leading-relaxed">
            A clear collection of apps, websites, and work notes written in simple language.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 border-b border-white/5 pb-4">
            <span className="font-mono text-xs text-accent uppercase tracking-[0.25em] font-bold">
              01 // Projects
            </span>
            <h3 className="text-xl md:text-3xl font-sans font-black tracking-tight uppercase">
              Apps &amp; Websites
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((proj) => (
              <article key={proj.id} className="group relative overflow-hidden bg-[#111111]/50 border border-white/5 rounded-sm hover:border-white/10 transition-all duration-300">
                <div className="relative h-52 overflow-hidden border-b border-white/5">
                  <img src={proj.cover} alt={proj.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between gap-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">{proj.category}</span>
                      <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-accent transition-colors duration-300 uppercase tracking-tight mt-1">{proj.title}</h4>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/70 border border-white/10 bg-black/40 px-2.5 py-1 rounded-full">{proj.status}</span>
                  </div>
                </div>

                <div className="flex flex-col p-6 md:p-8">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <p className="text-[11px] md:text-xs text-neutral-300 leading-relaxed font-semibold max-w-md">{proj.tagline}</p>
                    <div className="flex flex-col items-end text-right font-mono text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
                      <span className="text-white/30 text-[9px]">{proj.stats.label}</span>
                      <span className="text-accent text-xs font-black mt-0.5">{proj.stats.value}</span>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-semibold mb-4">{proj.desc}</p>

                  <ul className="list-disc pl-4 text-xs text-neutral-500 space-y-2 mb-6 leading-relaxed flex-grow">
                    {proj.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
                  </ul>

                  <div className="border-t border-white/5 pt-4 mt-auto flex items-center justify-between flex-wrap gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map((t) => (
                        <span key={t} className="text-[9px] font-mono border border-white/10 px-2 py-0.5 rounded opacity-50 group-hover:opacity-90 transition-opacity uppercase font-bold text-white">{t}</span>
                      ))}
                    </div>

                    <a href={proj.url} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono font-black text-neutral-300 group-hover:text-accent transition-colors duration-300 flex items-center gap-1 uppercase tracking-widest">
                      <span>{proj.linkLabel}</span>
                      <ArrowUpRight size={12} className="text-neutral-500 group-hover:text-accent transition-colors" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 border-b border-white/5 pb-4">
            <span className="font-mono text-xs text-accent uppercase tracking-[0.25em] font-bold">
              02 // Notes
            </span>
            <h3 className="text-xl md:text-3xl font-sans font-black tracking-tight uppercase">
              Work Notes
            </h3>
          </div>

          <div className="flex flex-col gap-6">
            {HR_DOCS.map((doc) => {
              const isExpanded = expandedDoc === doc.id;
              return (
                <div key={doc.id} className="bg-[#111111]/40 border border-white/5 rounded-sm hover:border-white/10 transition-all duration-300 overflow-hidden">
                  <div onClick={() => toggleDoc(doc.id)} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer select-none">
                    <div className="flex flex-col gap-1.5 max-w-3xl">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold bg-accent/5 px-2 py-0.5 rounded border border-accent/10">{doc.category}</span>
                        <span className="text-[10px] font-mono text-neutral-500 tracking-wider">Updated {doc.updated}</span>
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight mt-1">{doc.title}</h4>
                      <p className="text-xs md:text-sm text-neutral-400 leading-relaxed mt-1 font-medium">{doc.summary}</p>
                    </div>

                    <button className={`self-start md:self-auto p-2 bg-white/5 rounded-full border border-white/10 hover:border-accent/30 text-neutral-400 hover:text-accent transition-all duration-300 ${isExpanded ? 'rotate-180 border-accent/30 text-accent bg-accent/5' : ''}`}>
                      <ChevronDown size={16} />
                    </button>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="border-t border-white/5 bg-black/30">
                        <div className="p-6 md:p-10 flex flex-col gap-8 text-neutral-300 max-w-4xl mx-auto">
                          <div className="flex justify-between items-center flex-wrap gap-4 border-b border-white/5 pb-4 text-xs font-mono text-neutral-500">
                            <span>AUTHOR: {doc.author}</span>
                            <span>STATUS: APPROVED FOR WORKPLACE USE</span>
                          </div>

                          <div className="flex flex-col gap-6 font-mono text-xs md:text-sm leading-relaxed text-neutral-300">
                            {doc.sections.map((sect, sIdx) => (
                              <div key={sIdx} className="flex flex-col gap-2">
                                <h5 className="font-sans text-xs uppercase tracking-widest text-accent font-black border-l-2 border-accent pl-2.5 mt-2">{sect.title}</h5>

                                {sect.content && <p className="text-neutral-400 pl-3 leading-relaxed">{sect.content}</p>}

                                {sect.bullets && (
                                  <ul className="list-disc pl-8 text-neutral-400 space-y-2">
                                    {sect.bullets.map((b, bIdx) => <li key={bIdx}>{b}</li>)}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>

                          <div className="mt-4 border-t border-white/5 pt-4 text-center text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
                            // SIMPLE WORK NOTES //
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
