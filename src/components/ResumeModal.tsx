import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Eye, Check, Sparkles, Mail, Linkedin, Globe, MapPin, Award, BookOpen, Briefcase, Cpu } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const downloadResumePDF = () => {
    const link = document.createElement('a');
    link.href = '/Jelvan_Ricolcol_Resume.pdf';
    link.download = 'Jelvan_Ricolcol_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const triggerPrint = () => {
    // Hide overlay cursor temporarily then restore
    const customCursor = document.querySelector('.fixed.pointer-events-none.mix-blend-difference') as HTMLElement;
    if (customCursor) customCursor.style.opacity = '0';
    
    // Programmatically trigger system print
    window.print();
    
    setTimeout(() => {
      if (customCursor) customCursor.style.opacity = '1';
    }, 100);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 lg:p-10">
          <style dangerouslySetInnerHTML={{ __html: `
            @media (max-width: 768px) {
              .resume-paper {
                padding: 1.5rem 1rem !important;
                gap: 1.25rem !important;
                min-height: auto !important;
              }
              .resume-watermark {
                margin: 0.5rem !important;
              }
              .resume-title {
                font-size: 1.75rem !important;
                margin-bottom: 0.35rem !important;
                text-align: center !important;
              }
              .resume-subtitle {
                font-size: 10px !important;
                letter-spacing: 0.1em !important;
                margin-bottom: 0.75rem !important;
                text-align: center !important;
              }
              .resume-contact-list {
                flex-direction: column !important;
                align-items: center !important;
                gap: 0.5rem !important;
              }
              .resume-contact-list > span {
                width: 100% !important;
                justify-content: center !important;
                font-size: 10px !important;
              }
              .resume-section-title {
                font-size: 10px !important;
                letter-spacing: 0.15em !important;
                padding-left: 0.5rem !important;
                margin-bottom: 0.5rem !important;
              }
              .resume-text-italic {
                font-size: 11px !important;
                padding-right: 0 !important;
                line-height: 1.5 !important;
              }
              .resume-grid-2col {
                grid-template-columns: 1fr !important;
                gap: 1.25rem !important;
              }
              .resume-grid-4col {
                grid-template-columns: 1fr !important;
                gap: 1rem !important;
              }
              .resume-list {
                padding-left: 1rem !important;
              }
              .resume-list > li {
                font-size: 11px !important;
                line-height: 1.5 !important;
              }
              .resume-experience-header {
                flex-direction: column !important;
                align-items: flex-start !important;
                gap: 0.15rem !important;
              }
              .resume-date-badge {
                display: inline-block !important;
                margin-top: 0.2rem !important;
                font-size: 9px !important;
              }
            }
          ` }} />
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-bg/95 backdrop-blur-xl cursor-none no-print"
            data-cursor="hover"
            data-cursor-text="Close"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[90vh] md:h-[85vh] z-10 no-print"
          >
            {/* Modal Header Panel */}
            <div className="bg-[#111111] border-b border-white/10 p-5 md:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[9px] font-mono uppercase tracking-[0.35em] bg-accent/10 border border-accent/20 px-2.5 py-0.5 text-accent font-black rounded">
                    Official Spec Document
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/30 font-bold hidden sm:inline">
                    ATS-Optimized // US Executive Format
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-sans font-black tracking-tighter text-white uppercase leading-none">
                  Curriculum Vitae Preview
                </h3>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={downloadResumePDF}
                  data-cursor="hover"
                  data-cursor-text="Download"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-bg font-bold text-xs uppercase tracking-widest rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-none"
                >
                  <Download size={14} />
                  <span>Download PDF</span>
                </button>
                <button
                  onClick={triggerPrint}
                  data-cursor="hover"
                  data-cursor-text="Print"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-xs uppercase tracking-widest rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-none"
                >
                  <Printer size={14} />
                  <span>Print Document</span>
                </button>
                <button
                  onClick={onClose}
                  data-cursor="hover"
                  data-cursor-text="Close"
                  className="p-2.5 rounded-lg border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all cursor-none"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Instruction Banner */}
            <div className="bg-accent/5 border-b border-accent/10 px-8 py-3 flex gap-2 items-center text-left relative z-10">
              <Sparkles className="text-accent flex-shrink-0 animate-pulse" size={12} />
              <p className="text-[10px] font-mono text-accent/80 font-bold uppercase tracking-widest">
                PRO-TIP: Click "Download PDF" for an instant, ATS-friendly resume file download, or "Print Document" to trigger a system print.
              </p>
            </div>

            {/* Resume Viewer Canvas container with Custom Scroll */}
            <div className="overflow-y-auto flex-grow bg-neutral-900/60 p-4 md:p-12 flex justify-center">
              {/* This is the visual mockup of a sheets of US-Letter paper */}
              <div 
                className="resume-paper w-full max-w-[800px] bg-white text-neutral-900 p-8 md:p-14 shadow-2xl rounded-sm font-sans relative flex flex-col gap-6 text-left"
                style={{ minHeight: '1050px' }}
              >
                {/* Visual grid watermark / lines for UI polish only on screen */}
                <div className="resume-watermark absolute inset-0 border border-neutral-200/50 pointer-events-none rounded-sm m-4 md:m-8" />
                
                {/* Resume Header Area */}
                <div className="relative text-center border-b border-neutral-300 pb-6 flex flex-col items-center">
                  <h1 className="resume-title text-3xl md:text-4xl font-sans font-black tracking-tight uppercase text-neutral-950 mb-1 leading-none">
                    JELVAN RICOLCOL
                  </h1>
                  <p className="resume-subtitle text-[11px] font-mono font-black uppercase text-accent tracking-[0.2em] mb-4">
                    People, AI, and Digital Transformation Specialist
                  </p>
                  
                  {/* Contact Info horizontal grid */}
                  <div className="resume-contact-list flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-1 text-xs text-neutral-600 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Mail size={12} className="text-neutral-500" />
                      <a href="mailto:hello@jelvan.pro" className="hover:underline hover:text-neutral-900 border-b border-neutral-200">hello@jelvan.pro</a>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Globe size={12} className="text-neutral-500" />
                      <a href="https://portfolio.jelvan.pro" target="_blank" rel="noreferrer" className="hover:underline hover:text-neutral-900 border-b border-neutral-200">portfolio.jelvan.pro</a>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Linkedin size={12} className="text-neutral-500" />
                      <span className="opacity-80">linkedin/jelvanricolcol</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-neutral-500" />
                      <span>Manila, Philippines (Global Remote)</span>
                    </span>
                  </div>
                </div>

                {/* Professional Statement */}
                <div className="flex flex-col gap-2">
                  <h2 className="resume-section-title text-xs font-mono font-black text-neutral-950 uppercase tracking-[0.25em] border-l-4 border-neutral-900 pl-3">
                    Professional Principle
                  </h2>
                  <p className="resume-text-italic text-xs md:text-[13px] text-neutral-700 leading-relaxed italic pr-4 font-serif">
                    "Technology should support human capability, accountability, and fair process design. I specialize in bridging the gap between traditional operations and the future of work by combining human-centric HR strategies with modern web development, intelligent automation, and data-driven digital advertising."
                  </p>
                </div>

                {/* Core Focus Split Grid */}
                <div className="resume-grid-2col grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-neutral-200 pt-5">
                  <div>
                    <h2 className="resume-section-title text-xs font-mono font-black text-neutral-950 uppercase tracking-[0.25em] border-l-4 border-neutral-900 pl-3 mb-3">
                      Core Focus Areas
                    </h2>
                    <ul className="space-y-1.5 text-xs text-neutral-700 font-bold">
                      <li className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-0.5">•</span>
                        <span>AI for Business Optimization Use Cases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-0.5">•</span>
                        <span>Digital Transformation Strategy &amp; Integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-0.5">•</span>
                        <span>HR Tech &amp; Workforce Platforms Optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-0.5">•</span>
                        <span>Multi-Channel Performance Advertising Operations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-0.5">•</span>
                        <span>Human-Centered UI/UX &amp; Code Architecture</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="resume-section-title text-xs font-mono font-black text-neutral-950 uppercase tracking-[0.25em] border-l-4 border-neutral-900 pl-3 mb-3">
                      Academic Credentials
                    </h2>
                    <div className="space-y-3">
                      <div>
                        <div className="resume-experience-header flex justify-between items-baseline">
                          <p className="text-xs font-black text-neutral-900 uppercase">
                            Universidad Isabel 1
                          </p>
                          <span className="resume-date-badge text-[10px] font-mono text-neutral-500 font-bold">SPAIN // 2025</span>
                        </div>
                        <p className="text-[11px] text-neutral-700 leading-snug mt-1 font-semibold uppercase tracking-tight text-accent">
                          Dual Masters Degree
                        </p>
                        <p className="text-[10px] text-neutral-500 mt-0.5 font-medium">
                          Master in Human Resource Management &amp; Talent Management + Master in AI for Business // 72 ECTS · 1800 Hours
                        </p>
                      </div>

                      <div>
                        <div className="resume-experience-header flex justify-between items-baseline">
                          <p className="text-xs font-black text-neutral-900 uppercase">
                            University of Northern Philippines
                          </p>
                          <span className="resume-date-badge text-[10px] font-mono text-neutral-500 font-bold">2018</span>
                        </div>
                        <p className="text-[11px] text-neutral-700 leading-snug mt-1 font-semibold uppercase tracking-tight">
                          Bachelor of Science in Business Administration
                        </p>
                        <p className="text-[10px] text-neutral-500 mt-0.5 font-medium">
                          Major in Human Resources &amp; Development Management // Completed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Experience Section */}
                <div className="border-t border-neutral-200 pt-5">
                  <h2 className="resume-section-title text-xs font-mono font-black text-neutral-950 uppercase tracking-[0.25em] border-l-4 border-neutral-900 pl-3 mb-4">
                    Professional Experience
                  </h2>

                  <div className="space-y-5">
                    {/* Role 1 */}
                    <div>
                      <div className="resume-experience-header flex justify-between items-baseline">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <p className="text-xs font-black text-neutral-950 uppercase">English Global Advisor, Digital Advertising</p>
                          <span className="text-[11px] text-neutral-400 font-medium">|</span>
                          <span className="text-xs font-black text-accent uppercase">Concentrix Malaysia</span>
                        </div>
                        <span className="resume-date-badge text-[10px] font-mono text-neutral-500 whitespace-nowrap font-bold">2024 – PRESENT</span>
                      </div>
                      <ul className="resume-list list-disc pl-4 text-xs text-neutral-600 mt-2 space-y-1 font-medium leading-relaxed">
                        <li>Optimizing Meta (Facebook &amp; Instagram) advertising campaigns for major international brands by refining audience targeting, ad creatives, and bid optimization strategies.</li>
                        <li>Troubleshooting complex ad delivery issues, policy compliance disputes, billing discrepancies, and technical integration parameters.</li>
                        <li>Consulting global enterprise clients via live chat, secure email lines, Webex dashboard, and phone orchestration.</li>
                      </ul>
                    </div>

                    {/* Role 2 */}
                    <div>
                      <div className="resume-experience-header flex justify-between items-baseline">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <p className="text-xs font-black text-neutral-950 uppercase">Independent Developer &amp; AI Consultant</p>
                          <span className="text-[11px] text-neutral-400 font-medium">|</span>
                          <span className="text-xs font-black text-neutral-700 uppercase">Freelance / Contract</span>
                        </div>
                        <span className="resume-date-badge text-[10px] font-mono text-neutral-500 whitespace-nowrap font-bold">2021 – 2024</span>
                      </div>
                      <ul className="resume-list list-disc pl-4 text-xs text-neutral-600 mt-2 space-y-1 font-medium leading-relaxed">
                        <li>Developed and deployed <strong className="text-neutral-900 font-bold">17 high-performance business applications &amp; interactive workspaces</strong> utilizing modern Tailwind UI, React frameworks, and lightweight edge proxies.</li>
                        <li>Built zero-maintenance corporate automations mapping APIs through Zapier and Make, eliminating up to 30 hours of labor waste weekly for clients.</li>
                        <li>Delivered strategic consultations on vector databases, custom chatbot fine-tuning, and structured JSON prompt designs.</li>
                      </ul>
                    </div>

                    {/* Role 3 */}
                    <div>
                      <div className="resume-experience-header flex justify-between items-baseline">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <p className="text-xs font-black text-neutral-950 uppercase">HR Operations Specialist, Shared Services</p>
                          <span className="text-[11px] text-neutral-400 font-medium">|</span>
                          <span className="text-xs font-black text-neutral-700 uppercase">Teleperformance USA</span>
                        </div>
                        <span className="resume-date-badge text-[10px] font-mono text-neutral-500 whitespace-nowrap font-bold">2019 – 2021</span>
                      </div>
                      <ul className="resume-list list-disc pl-4 text-xs text-neutral-600 mt-2 space-y-1 font-medium leading-relaxed">
                        <li>Managed high-priority corporate HR support desk resolving critical operational issues for over 30,000 on-site and remote employees.</li>
                        <li>Audited leave compliance packages, benefits administration audits, severance paperwork, and initial onboarding pipelines.</li>
                        <li>Modernized team database workflows to lower request response time of HR queries by 24% nationwide.</li>
                      </ul>
                    </div>

                    {/* Role 4 */}
                    <div>
                      <div className="resume-experience-header flex justify-between items-baseline">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <p className="text-xs font-black text-neutral-950 uppercase">Operations Onboarding Specialist</p>
                          <span className="text-[11px] text-neutral-400 font-medium">|</span>
                          <span className="text-xs font-black text-neutral-700 uppercase">Teleperformance USA</span>
                        </div>
                        <span className="resume-date-badge text-[10px] font-mono text-neutral-500 whitespace-nowrap font-bold">6 MONTHS</span>
                      </div>
                      <ul className="resume-list list-disc pl-4 text-xs text-neutral-600 mt-2 space-y-1 font-medium leading-relaxed">
                        <li>Led structured corporate workspace provisioning and access alignment for onboarding support groups of 70+ agents weekly.</li>
                        <li>Partnered with ICT and System Admins to configure, track, and complete fast onboarding deployment procedures.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Certifications Grid (Two-column) */}
                <div className="resume-grid-2col grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 border-t border-neutral-200 pt-5">
                  <div>
                    <h2 className="resume-section-title text-xs font-mono font-black text-neutral-950 uppercase tracking-[0.25em] border-l-4 border-neutral-900 pl-3 mb-3">
                      Technical Credentials
                    </h2>
                    <ul className="space-y-2 text-[11px] text-neutral-600">
                      <li>
                        <p className="font-bold text-neutral-950 uppercase leading-snug">Full Stack Software Developer</p>
                        <p className="text-[10px] text-neutral-500">IBM // CSEDIZ2E5VOL (18 ACE Credit Recommendation &amp; 6 ECTS FIBAA)</p>
                      </li>
                      <li>
                        <p className="font-bold text-neutral-950 uppercase leading-snug">AWS Certified AI Practitioner</p>
                        <p className="text-[10px] text-neutral-500">Amazon Web Services // Credential ID 8HGV6FP72L5I (Dec 2025)</p>
                      </li>
                      <li>
                        <p className="font-bold text-neutral-950 uppercase leading-snug">AI Applications in Marketing &amp; Finance</p>
                        <p className="text-[10px] text-neutral-500">University of Pennsylvania // Wharton (Dec 2025)</p>
                      </li>
                      <li>
                        <p className="font-bold text-neutral-950 uppercase leading-snug">Responsible AI in a Global Context</p>
                        <p className="text-[10px] text-neutral-500">United Nations // UNU 621e71d738b9f40b (Dec 2025)</p>
                      </li>
                      <li>
                        <p className="font-bold text-neutral-950 uppercase leading-snug">Plan &amp; Prepare Custom AI Solutions on Azure</p>
                        <p className="text-[10px] text-neutral-500">Microsoft // Azure Integration (Jan 2026)</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="resume-section-title text-xs font-mono font-black text-neutral-950 uppercase tracking-[0.25em] border-l-4 border-neutral-900 pl-3 mb-3">
                      Operations Credentials
                    </h2>
                    <ul className="space-y-2 text-[11px] text-neutral-600">
                      <li>
                        <p className="font-bold text-neutral-950 uppercase leading-snug">Certified Human Resource Associate</p>
                        <p className="text-[10px] text-neutral-500">HREAP Philippines // Licensure Registry (May 2022)</p>
                      </li>
                      <li>
                        <p className="font-bold text-neutral-950 uppercase leading-snug">Six Sigma: Black Belt Certification</p>
                        <p className="text-[10px] text-neutral-500">NASBA Quality Assurance Framework (Apr 2026)</p>
                      </li>
                      <li>
                        <p className="font-bold text-neutral-950 uppercase leading-snug">ASA Corporate Recruiting Professional</p>
                        <p className="text-[10px] text-neutral-500">American Staffing Association // Credential ID 278aab418... (May 2026)</p>
                      </li>
                      <li>
                        <p className="font-bold text-neutral-950 uppercase leading-snug">Program Management for IT Professionals</p>
                        <p className="text-[10px] text-neutral-500">SHRM Assessment Framework // afecb02579c... (Apr 2026)</p>
                      </li>
                      <li>
                        <p className="font-bold text-neutral-950 uppercase leading-snug">Innovative Customer Service Techniques</p>
                        <p className="text-[10px] text-neutral-500">Project Management Institute (PMI) (Jan 2026)</p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Technical Skills Split List */}
                <div className="border-t border-neutral-200 pt-5 mt-auto">
                  <h2 className="resume-section-title text-xs font-mono font-black text-neutral-950 uppercase tracking-[0.25em] border-l-4 border-neutral-900 pl-3 mb-3">
                    Technical Skills Inventory
                  </h2>
                  <div className="resume-grid-4col grid grid-cols-2 md:grid-cols-4 gap-4 text-[11px] text-neutral-600 font-medium">
                    <div>
                      <p className="font-black text-neutral-900 uppercase text-[10px] tracking-wide mb-1">Frontend Stack</p>
                      <p className="leading-relaxed">HTML5, CSS3, Tailwind, JavaScript ES6+, TypeScript, React 19, UI Framer API</p>
                    </div>
                    <div>
                      <p className="font-black text-neutral-900 uppercase text-[10px] tracking-wide mb-1">AI &amp; Automation</p>
                      <p className="leading-relaxed">Prompting Models, Gemini SDK, OpenAI API, Chatbot Workflow, Zapier Pipelines, Make</p>
                    </div>
                    <div>
                      <p className="font-black text-neutral-950 uppercase text-[10px] tracking-wide mb-1">Deployment / Git</p>
                      <p className="leading-relaxed">Cloudflare Pages, Workers, Git, GitHub Actions, Docker containers, npm Package scripts</p>
                    </div>
                    <div>
                      <p className="font-black text-neutral-950 uppercase text-[10px] tracking-wide mb-1">Data / Design</p>
                      <p className="leading-relaxed">MySQL, SQL Server, Elasticsearch, Figma designs, Interface systems alignment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Bottom Bar Status */}
            <div className="bg-[#111111] border-t border-white/10 px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-2 relative z-10 text-[10px] uppercase font-mono tracking-widest text-white/30 font-bold">
              <span>Jelvan Ricolcol Curriculum Vitae</span>
              <span>Validated US Executive Layout Standard</span>
            </div>
          </motion.div>
        </div>
      )}

      {/* FULL HIDDEN CONTAINER TARGETED FOR PRINTERS ONLY */}
      {/* This renders only under media print, formatted precisely at standard dpi scale */}
      {isOpen && (
        <div id="printable-resume" className="hidden print:block bg-white text-black p-10 font-sans text-xs leading-normal">
          <div className="text-center border-b border-black pb-4 mb-4">
            <h1 className="text-2xl font-bold uppercase tracking-wide text-black mb-1">
              JELVAN RICOLCOL
            </h1>
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-black">
              People, AI, and Digital Transformation Specialist
            </p>
            <div className="text-[10px] flex justify-center flex-wrap gap-x-4 gap-y-1 mt-1.5 font-bold text-neutral-800">
              <span>Email: hello@jelvan.pro</span>
              <span>•</span>
              <span>Web: portfolio.jelvan.pro</span>
              <span>•</span>
              <span>LinkedIn: linkedin/jelvanricolcol</span>
              <span>•</span>
              <span>Location: Manila, Philippines</span>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest border-b border-black pb-0.5 mb-1">
              Professional Principle
            </h2>
            <p className="text-[11px] leading-relaxed italic text-neutral-800 font-serif">
              "Technology should support human capability, accountability, and fair process design. I specialize in bridging the gap between traditional operations and the future of work by combining human-centric HR strategies with modern web development, intelligent automation, and data-driven digital advertising."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest border-b border-black pb-0.5 mb-2">
                Core Focus Areas
              </h2>
              <ul className="list-disc pl-4 text-[10px] space-y-1 text-neutral-800 font-semibold">
                <li>AI for Business Optimization Use Cases</li>
                <li>Digital Transformation Strategy &amp; Integration</li>
                <li>HR Tech &amp; Workforce Platforms Optimization</li>
                <li>Multi-Channel Performance Advertising Operations</li>
                <li>Human-Centered UI/UX &amp; Code Architecture</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest border-b border-black pb-0.5 mb-2">
                Academic Credentials
              </h2>
              <div className="space-y-1.5 text-[10px]">
                <div>
                  <div className="flex justify-between font-bold text-black">
                    <span>Universidad Isabel 1</span>
                    <span>Spain // 2025</span>
                  </div>
                  <p className="text-neutral-700 italic">Dual Masters: Human Resource Management &amp; AI for Business</p>
                  <p className="text-neutral-500">72 ECTS, 1800 Hours, Completed</p>
                </div>
                <div>
                  <div className="flex justify-between font-bold text-black">
                    <span>University of Northern Philippines</span>
                    <span>2018</span>
                  </div>
                  <p className="text-neutral-700 italic">B.S. Business Administration, major in HR Management</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest border-b border-black pb-0.5 mb-2">
              Professional Experience
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between font-bold text-black text-[10px]">
                  <span>English Global Advisor, Digital Advertising (Concentrix Malaysia)</span>
                  <span>2024 – PRESENT</span>
                </div>
                <ul className="list-disc pl-4 text-[10px] space-y-0.5 mt-1 text-neutral-800">
                  <li>Optimizing Meta (Facebook/Instagram) advertising campaigns for major international brands by refining targeting, creatives, and bids.</li>
                  <li>Troubleshooting complex ad delivery, policy compliance, and programmatic integration parameters.</li>
                  <li>Consulting global enterprise clients via live chat, secure email, Webex sessions, and phone.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold text-black text-[10px]">
                  <span>Independent Developer &amp; AI Consultant (Freelance)</span>
                  <span>2021 – 2024</span>
                </div>
                <ul className="list-disc pl-4 text-[10px] space-y-0.5 mt-1 text-neutral-800">
                  <li>Developed and deployed 17 fully functional business applications &amp; interactive workspaces utilizing Tailwind, React, and serverless.</li>
                  <li>Built reliable corporate automations mapping APIs through Zapier and Make, eliminating up to 30 hours of labor waste weekly.</li>
                  <li>Delivered strategic consultations on vector databases, custom chatbot fine-tuning, and prompt models.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold text-black text-[10px]">
                  <span>HR Operations Specialist, Shared Services (Teleperformance USA)</span>
                  <span>2019 – 2021</span>
                </div>
                <ul className="list-disc pl-4 text-[10px] space-y-0.5 mt-1 text-neutral-800">
                  <li>Managed high-priority corporate HR support desk resolving critical operational issues for over 30,000 employees.</li>
                  <li>Audited leave compliance packages, benefits administration, severance, and initial onboarding.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest border-b border-black pb-0.5 mb-2">
                Technical Credentials
              </h2>
              <ul className="space-y-1.5 text-[10px] text-neutral-850">
                <li>
                  <strong className="text-black">Full Stack Software Developer</strong> - IBM // CSEDIZ2E5VOL (18 ACE Recommended Credits, 6 ECTS FIBAA)
                </li>
                <li>
                  <strong className="text-black">AWS Certified AI Practitioner</strong> - AWS Portfolio // 8HGV6FP72L5I (Dec 2025)
                </li>
                <li>
                  <strong className="text-black">AI Applications in Marketing &amp; Finance</strong> - UPenn Wharton (Dec 2025)
                </li>
                <li>
                  <strong className="text-black">Plan &amp; Prepare Custom AI Solutions on Azure</strong> - Microsoft (Jan 2026)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest border-b border-black pb-0.5 mb-2">
                Operations &amp; HR Credentials
              </h2>
              <ul className="space-y-1.5 text-[10px] text-neutral-850">
                <li>
                  <strong className="text-black">Certified Human Resource Associate</strong> - HREAP licensure (May 2022)
                </li>
                <li>
                  <strong className="text-black">Six Sigma: Black Belt Certification</strong> - NASBA Quality Assurance (Apr 2026)
                </li>
                <li>
                  <strong className="text-black">ASA Corporate Recruiting Professional</strong> - American Staffing Association (May 2026)
                </li>
                <li>
                  <strong className="text-black">Responsible AI in a Global Context</strong> - United Nations University (Dec 2025)
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest border-b border-black pb-0.5 mb-2">
              Technical Skills Inventory
            </h2>
            <div className="grid grid-cols-4 gap-4 text-[9px] text-neutral-800 leading-normal">
              <div>
                <p className="font-bold text-black uppercase">Frontend Stack</p>
                <p>HTML5, CSS3, Tailwind, JavaScript, TypeScript, React 19</p>
              </div>
              <div>
                <p className="font-bold text-black uppercase">AI &amp; Automation</p>
                <p>Prompting, Gemini SDK, OpenAI API, Chatbots, Zapier, Make</p>
              </div>
              <div>
                <p className="font-bold text-black uppercase">Deployment / Git</p>
                <p>Cloudflare Workers, Git, GitHub Actions, Docker, NPM</p>
              </div>
              <div>
                <p className="font-bold text-black uppercase">Data &amp; Operations</p>
                <p>MySQL, SQL Server, Elasticsearch, Figma, Policy mapping</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
