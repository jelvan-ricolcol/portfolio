import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 'proj-01',
    title: 'authenticator-app-operava',
    category: 'Secure Authentication Platform',
    tagline: 'Secure authentication and identity vault system',
    desc: 'A full-stack identity platform focused on secure authentication, protected account management, and vault-style credential workflows for modern web apps.',
    details: [
      'Includes frontend, server, and database-connected flows for account lifecycle management and protected access controls.',
      'Implements authentication-first UX patterns with route protection, secure sessions, and identity-oriented dashboard interactions.',
      'Ships with dedicated security-focused documentation and architecture notes to support safer deployment and maintenance.'
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
    category: 'Commerce Experience Showcase',
    tagline: 'Interactive bookstore showcase',
    desc: 'A storefront-inspired web experience that presents books, browsing flows, and order visibility with smooth motion and modern commerce UI structure.',
    details: [
      'Demonstrates retail-style product discovery, category navigation, and cart-friendly user journeys.',
      'Applies order-tracking interaction patterns and status-based UI updates for customer-facing shopping flows.',
      'Uses animated transitions and component-driven layouts to keep browsing responsive and visually engaging.'
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
    category: 'Education & AI Learning Platform',
    tagline: 'LMS and AI learning studio',
    desc: 'An education-focused platform combining a learning management system with AI-assisted study workflows and multi-dashboard visibility.',
    details: [
      'Provides student and instructor dashboard structures to support course progress, analytics, and classroom management.',
      'Integrates AI studio concepts for guided learning, content exploration, and adaptive educational interactions.',
      'Uses chart-driven interfaces for educational metrics, activity summaries, and progress reporting.'
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
    category: 'Retail Storefront & Customizer',
    tagline: 'Clothing customizer and storefront',
    desc: 'A fashion retail experience with interactive product customization, storefront browsing, and checkout-oriented user journeys.',
    details: [
      'Supports customization-centric product interactions for style, options, and personalized purchase selections.',
      'Implements commerce-style UI behavior for catalog browsing, product detail exploration, and action-driven conversion flows.',
      'Uses animated transitions to improve engagement during shopping and configuration workflows.'
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
    category: 'Academic Portal & LMS Structure',
    tagline: 'Academic institution portal',
    desc: 'A school-centered digital platform that combines a public campus portal with LMS-style modules for education operations and learner access.',
    details: [
      'Presents institution-facing pages for campus information, programs, announcements, and education-focused public communication.',
      'Includes LMS-oriented structures for course workflows, student interaction spaces, and academic operational dashboards.',
      'Uses data-visual components to communicate progress, performance summaries, and educational insights.'
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
    category: 'Workspace Brand Repository',
    tagline: 'Workspace / domain-level brand repo',
    desc: 'A workspace-level repository documenting the product presence and brand structure of the Bolek Workspace public and suite domains.',
    details: [
      'Covers the public-facing `suite.bolekworkspace.com` site positioning and domain-level messaging structure.',
      'Documents `suite.bolekworkspace.com` as the application workspace surface for product and service workflows.',
      'Acts as a source for workspace branding, system context, and product-facing documentation assets.'
    ],
    tech: ['Repository Documentation', 'Web Platform', 'Domain Architecture', 'Brand Systems'],
    cover: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200&h=900',
    url: 'https://github.com/jelvan-ricolcol/Saas-bolek-workspace',
    linkLabel: 'Open Repository',
    status: 'Public',
    stats: { value: '2 Domains', label: 'Workspace Coverage' }
  }
];

const HR_DOCS = [
  {
    id: 'hr-01',
    title: 'Workplace Policy for Generative AI Integration',
    category: 'AI Operational Guidelines',
    summary: 'A standard framework governing safe, ethical, and responsible employee usage of AI LLMs (Gemini, ChatGPT) to optimize business output while strictly preventing client data leakage.',
    updated: 'May 2026',
    author: 'Jelvan Ricolcol, M.S. AI for Business',
    tags: ['AI Strategy', 'Data Privacy', 'Operations Compliance'],
    sections: [
      {
        title: '1.0 Purpose & Vision',
        content: 'This policy establishes safe and highly effective operating procedures for employee interaction with Generative AI (including Large Language Models, AI Assistants, and automated workflows). This organization acknowledges AI as a key mechanism to eliminate non-value routine work, improve analytical quality, and support high performance, provided that security standards are meticulously maintained.'
      },
      {
        title: '2.0 Guiding Principles',
        bullets: [
          'Human-in-the-Loop: AI tools are strictly assistive. Real humans remain fully accountable for all finalized strategies, reports, and codebases.',
          'Ethics and Fairness: Deployed workflows must prevent discriminatory outputs, hallucinations, and bias.',
          'Information Integrity: All generative outputs must be audited and verified before client-facing deployment.'
        ]
      },
      {
        title: '3.0 Data Protection & Security Standards',
        bullets: [
          'Prohibited Inputs: Employees are strictly FORBIDDEN from pasting confidential, proprietary, or personally identifiable information (PII) of clients, candidates, or company finances into public or consumer-tier AI models.',
          'Client Approvals: Any AI-assisted drafting used in finalized legal contracts or official compliance documents must be logged and approved.',
          'Secure Enterprise Gateways: Employees must prioritize approved corporate proxy endpoints which do not use conversation history for model retraining.'
        ]
      },
      {
        title: '4.0 Audits & Compliance',
        content: 'Monthly audits of platform logs will be conducted to ensure alignment with national data privacy regulations. Violations may result in training suspension or formal disciplinary procedures.'
      }
    ]
  },
  {
    id: 'hr-02',
    title: 'Hybrid Work Governance & Agreement Framework',
    category: 'Workplace Frameworks',
    summary: 'A comprehensive operational framework defining hours, digital security expectations, core collaboration times, and hardware guidelines for global, regional, or cross-border remote setups.',
    updated: 'April 2026',
    author: 'Jelvan Ricolcol, M.S. HR & Talent Management',
    tags: ['Hybrid Teams', 'Policy Planning', 'Workforce Logistics'],
    sections: [
      {
        title: '1.0 Introduction',
        content: 'To maximize both performance and quality of remote operations, this framework structures the rules regarding communication protocols, security compliance, workspace health, and work-life balance for hybrid teammates.'
      },
      {
        title: '2.0 Digital Workplace Logistics',
        bullets: [
          'Official Communication channels: Microsoft Teams, Slack, and company email. Personal chat applications (e.g., unofficial WhatsApp) are limited to emergency triggers only.',
          'Core Collaboration Hours: Teammates must remain actively online and contactable between 10:00 AM – 3:00 PM (GMT+8) to facilitate cross-border project synchronizations.',
          'Daily Synchronous Check-ins: A mandatory 15-minute operational huddle will occur every morning to align support pipelines.'
        ]
      },
      {
        title: '3.0 Digital Security & Data Handling',
        bullets: [
          'VPN Enforcement: Accessing the employee hub or staging databases must go through secure VPN servers.',
          'Device Restriction: Shared domestic hardware is strictly barred. All corporate operations must occur on verified company devices with active firewalls.',
          'Remote Clean-Desk Principle: Screen angles should prevent viewing by unauthorized persons in public environments.'
        ]
      },
      {
        title: '4.0 Equipment & Ergonomic Allowance',
        content: 'Eligible remote team members are supported with an ergonomic hardware allowance of up to $500 for certified chairs, second monitors, and backup mobile hot-spots to ensure continuous operation.'
      }
    ]
  },
  {
    id: 'hr-03',
    title: 'Offshore Remote Onboarding Master Playbook',
    category: 'Onboarding Systems',
    summary: 'A detailed playbook outlining standard procedures to set up access, provision credentials, and integrate regional teams, heavily modeled around Teleperformance and Concentrix architectures.',
    updated: 'March 2026',
    author: 'Jelvan Ricolcol, CHRA, MHRM',
    tags: ['Onboarding Flow', 'Operations Scale', 'HR Operations'],
    sections: [
      {
        title: '1.0 Objective',
        content: 'To transition new hires from initial system provisioning into high-performing active roles within their first week, maintaining zero friction and accelerating baseline mastery.'
      },
      {
        title: '2.0 Timeline Matrix',
        bullets: [
          'T-Minus 5 Days (System Prep): IT provisions Active Directory (AD) profiles, corporate email databases, and triggers initial SSO security access keys.',
          'Day 1 Morning (Cultural Integration): Direct HR welcome, compliance signings, and contract verifications.',
          'Day 1 Afternoon (Credential Launch): Secure MFA verification, hardware setups, and portal password alignments.',
          'Days 2 to 4 (Skill Track): Structured asynchronous modules on corporate policy and service delivery platforms.',
          'Day 5 (First Operational Delivery): Buddy-assigned shadowing of active workflows and support pipelines.'
        ]
      },
      {
        title: '3.0 The "Zero Out" SLA',
        content: 'All newly onboarded associates must achieve verified, working tool credentials by 12:00 PM on Day 1 to prevent training downtime. Any escalation must be logged in the HR-IT urgent support channel immediately.'
      },
      {
        title: '4.0 Measurement of Success',
        bullets: [
          'New-Hire CSAT: Targeted at 95% satisfaction with the onboarding timeline and technical ease.',
          'Onboarding Attrition Rate: Target <2% voluntary attrition within the first 30 days of employment.'
        ]
      }
    ]
  }
];

export default function Works() {
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null);

  const toggleDoc = (id: string) => {
    setExpandedDoc(expandedDoc === id ? null : id);
  };

  return (
    <div className="relative px-6 md:px-16 lg:px-24 py-20 bg-transparent text-white font-sans">
      <div className="max-w-6xl mx-auto flex flex-col gap-24 text-left">
        
        {/* Intro Header */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.3em] font-black">
            Works // Execution &amp; Systems
          </span>
          <h2 className="text-4xl md:text-6xl font-sans font-black tracking-tighter uppercase leading-none">
            Selected Work <br />
            <span className="text-neutral-500 font-serif italic font-light tracking-tight normal-case">&amp; Blueprints.</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-400 max-w-xl leading-relaxed">
            A cohesive display of digital applications, full stack architectures, and strategic workforce compliance frameworks engineered to bridge people operations and modern technology.
          </p>
        </div>

        {/* SECTION 1: DIGITAL SYSTEMS & WORKSPACES */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 border-b border-white/5 pb-4">
            <span className="font-mono text-xs text-accent uppercase tracking-[0.25em] font-bold">
              01 // Technical Implementations
            </span>
            <h3 className="text-xl md:text-3xl font-sans font-black tracking-tight uppercase">
              Digital Systems &amp; Web Interfaces
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((proj) => (
              <article
                key={proj.id}
                className="group relative overflow-hidden bg-[#111111]/50 border border-white/5 rounded-sm hover:border-white/10 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden border-b border-white/5">
                  <img
                    src={proj.cover}
                    alt={proj.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between gap-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">
                        {proj.category}
                      </span>
                      <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-accent transition-colors duration-300 uppercase tracking-tight mt-1">
                        {proj.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/70 border border-white/10 bg-black/40 px-2.5 py-1 rounded-full">
                      {proj.status}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col p-6 md:p-8">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <p className="text-[11px] md:text-xs text-neutral-300 leading-relaxed font-semibold max-w-md">
                      {proj.tagline}
                    </p>
                    <div className="flex flex-col items-end text-right font-mono text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
                      <span className="text-white/30 text-[9px]">{proj.stats.label}</span>
                      <span className="text-accent text-xs font-black mt-0.5">{proj.stats.value}</span>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-semibold mb-4">
                    {proj.desc}
                  </p>

                  <ul className="list-disc pl-4 text-xs text-neutral-500 space-y-2 mb-6 leading-relaxed flex-grow">
                    {proj.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>

                  <div className="border-t border-white/5 pt-4 mt-auto flex items-center justify-between flex-wrap gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-mono border border-white/10 px-2 py-0.5 rounded opacity-50 group-hover:opacity-90 transition-opacity uppercase font-bold text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono font-black text-neutral-300 group-hover:text-accent transition-colors duration-300 flex items-center gap-1 uppercase tracking-widest"
                    >
                      <span>{proj.linkLabel}</span>
                      <ArrowUpRight size={12} className="text-neutral-500 group-hover:text-accent transition-colors" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* SECTION 2: OPERATIONAL BLUEPRINTS & COMPLIANCE */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 border-b border-white/5 pb-4">
            <span className="font-mono text-xs text-accent uppercase tracking-[0.25em] font-bold">
              02 // Compliance Frameworks
            </span>
            <h3 className="text-xl md:text-3xl font-sans font-black tracking-tight uppercase">
              Corporate Operations &amp; HR Blueprints
            </h3>
          </div>

          <div className="flex flex-col gap-6">
            {HR_DOCS.map((doc) => {
              const isExpanded = expandedDoc === doc.id;
              return (
                <div 
                  key={doc.id}
                  className="bg-[#111111]/40 border border-white/5 rounded-sm hover:border-white/10 transition-all duration-300 overflow-hidden"
                >
                  <div 
                    onClick={() => toggleDoc(doc.id)}
                    className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer select-none"
                  >
                    <div className="flex flex-col gap-1.5 max-w-3xl">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold bg-accent/5 px-2 py-0.5 rounded border border-accent/10">
                          {doc.category}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500 tracking-wider">
                          Updated {doc.updated}
                        </span>
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight mt-1">
                        {doc.title}
                      </h4>
                      <p className="text-xs md:text-sm text-neutral-400 leading-relaxed mt-1 font-medium">
                        {doc.summary}
                      </p>
                    </div>

                    <button 
                      className={`self-start md:self-auto p-2 bg-white/5 rounded-full border border-white/10 hover:border-accent/30 text-neutral-400 hover:text-accent transition-all duration-300 ${
                        isExpanded ? 'rotate-180 border-accent/30 text-accent bg-accent/5' : ''
                      }`}
                    >
                      <ChevronDown size={16} />
                    </button>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="border-t border-white/5 bg-black/30"
                      >
                        <div className="p-6 md:p-10 flex flex-col gap-8 text-neutral-300 max-w-4xl mx-auto">
                          
                          {/* Metadata header inside document */}
                          <div className="flex justify-between items-center flex-wrap gap-4 border-b border-white/5 pb-4 text-xs font-mono text-neutral-500">
                            <span>AUTHOR: {doc.author}</span>
                            <span>STATUS: APPROVED FOR WORKPLACE GOVERNANCE</span>
                          </div>

                          {/* Render Document Content Sections */}
                          <div className="flex flex-col gap-6 font-mono text-xs md:text-sm leading-relaxed text-neutral-300">
                            {doc.sections.map((sect, sIdx) => (
                              <div key={sIdx} className="flex flex-col gap-2">
                                <h5 className="font-sans text-xs uppercase tracking-widest text-accent font-black border-l-2 border-accent pl-2.5 mt-2">
                                  {sect.title}
                                </h5>
                                
                                {sect.content && (
                                  <p className="text-neutral-400 pl-3 leading-relaxed">
                                    {sect.content}
                                  </p>
                                )}

                                {sect.bullets && (
                                  <ul className="list-disc pl-8 text-neutral-400 space-y-2">
                                    {sect.bullets.map((b, bIdx) => (
                                      <li key={bIdx}>{b}</li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>

                          {/* Document footer marker */}
                          <div className="mt-4 border-t border-white/5 pt-4 text-center text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
                            // SECURE SYSTEM BLUEPRINT RECORD APPROVED //
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
