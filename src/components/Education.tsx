import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, FileText, X, Check, Eye, Calendar, BookOpen, Star, AlertCircle, Sparkles } from 'lucide-react';

const education = [
  {
    id: '01',
    degree: 'Master in Artificial Intelligence for Business & in Human Resource Management and Talent management',
    major: '72 ECTS , 1800 Hours, Completed 2025',
    school: 'Universidad Isabel 1',
    location: 'Spain',
    period: '2025',
    meta: '72 ECTS · 1800 Hours · Dual Masters',
    tags: ['HR Analytics', 'Talent Management', 'AI for Business', 'Process Automation', 'Data Strategy', 'People Analytics']
  },
  {
    id: '02',
    degree: 'BS in Business Administration',
    major: 'Human Resources & Development Management',
    school: 'University of Northern Philippines',
    location: 'Philippines',
    period: '2018',
    meta: '4 Years · Full Time Program · Completed',
    tags: ['Organizational Behavior', 'HR Planning', 'Labor Relations', 'Compensation & Benefits', 'Performance Management']
  }
];

const ibmCourses = [
  { title: 'Introduction to Software Engineering', hours: '6 weeks, 2–3 hrs/week', date: 'May 11, 2026' },
  { title: 'Introduction to Cloud Computing', hours: '5 weeks, ~2 hrs/week', date: 'May 12, 2026' },
  { title: 'Introduction to HTML, CSS, & JavaScript', hours: 'Not specified', date: 'May 12, 2026' },
  { title: 'Getting Started with Git and GitHub', hours: '3 weeks, 2–4 hrs/week', date: 'May 13, 2026' },
  { title: 'Full Stack Software Developer Assessment', hours: '2–4 hrs/week', date: 'May 14, 2026' },
  { title: 'Software Developer Career Guide and Interview Preparation', hours: '3 weeks, 1–2 hrs/week', date: 'May 14, 2026' },
  { title: 'Developing Front-End Apps with React', hours: '4 weeks, 3–4 hrs/week', date: 'May 16, 2026' },
  { title: 'Developing Back-End Apps with Node.js and Express', hours: '4 weeks, ~8 hours total', date: 'May 17, 2026' },
  { title: 'Python for Data Science, AI & Development', hours: '5 weeks, 3–6 hrs/week', date: 'May 17, 2026' },
  { title: 'Developing AI Applications with Python and Flask', hours: '3 weeks, 2–3 hrs/week', date: 'May 20, 2026' },
  { title: 'Django Application Development with SQL and Databases', hours: 'Not specified', date: 'May 20, 2026' },
  { title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift', hours: '5 weeks, 2–3 hrs/week', date: 'May 20, 2026' },
  { title: 'Application Development using Microservices and Serverless', hours: '4 weeks, ~8 hours total', date: 'May 20, 2026' },
  { title: 'Generative AI: Elevate your Software Development Career', hours: '5 weeks, 4–5 hrs/week', date: 'May 20, 2026' },
  { title: 'Full Stack Application Development Capstone Project', hours: 'Not specified', date: 'May 22, 2026' },
];

const certifications = [
  {
    id: 'C01',
    title: 'Full Stack Software Developer Professional Certificate',
    issuer: 'IBM',
    subtitle: '18 ACE - US Semester Credits | FIBAA - 6 credits semester hours',
    credentialId: 'CSEDIZ2E5VOL',
    issued: 'Completed',
    skills: ['Software Development', 'System Integration', 'AI Deployment'],
    hasTranscript: true
  },
  {
    id: 'C02',
    title: 'Full Stack Application Development Capstone Project V2',
    issuer: 'IBM',
    credentialId: '0OW8P6A5B69W - Final Capstone for Certification',
    issued: 'Completed',
    skills: ['Web Development', 'Web Applications', 'Architecture']
  },
  {
    id: 'C03',
    title: 'Full Stack Software Developer Assessment V2',
    issuer: 'IBM',
    credentialId: 'IBM - Assessment Certification',
    issued: 'May 2026',
    skills: ['Node.js', 'Web Applications', 'Restful APIs']
  },
  {
    id: 'C04',
    title: 'American Staffing Association Corporate Recruiting Professional Certificate',
    issuer: 'American Staffing Association',
    credentialId: '278aab418fe01a6b451793e033131aa05efe032d9a1c56171983dffbe829cce2',
    issued: 'May 2026',
    skills: ['Talent Management', 'Job Description Development', 'Recruitment Ops']
  },
  {
    id: 'C05',
    title: 'AI Applications in Marketing and Finance',
    issuer: 'University of Pennsylvania',
    credentialId: '2HGINUHEV7UA',
    issued: 'Dec 2025',
    skills: ['AI Applications', 'Quantitative Analytics']
  },
  {
    id: 'C06',
    title: 'Generative AI Primer',
    issuer: 'Vanderbilt University',
    credentialId: '9QFLVL0A53ZM',
    issued: 'Dec 2025',
    skills: ['Generative AI', 'Prompt Systems']
  },
  {
    id: 'C07',
    title: 'AI Fundamentals for Non-Data Scientists',
    issuer: 'University of Pennsylvania',
    credentialId: 'W15EVWJKINVY',
    issued: 'Dec 2025',
    skills: ['AI Strategy', 'Responsible Deployment']
  },
  {
    id: 'C08',
    title: 'AWS Artificial Intelligence Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    credentialId: '8HGV6FP72L5I',
    issued: 'Dec 2025',
    skills: ['AWS AI Services', 'ML Core Principles']
  },
  {
    id: 'C09',
    title: 'Generative AI for HR Professionals',
    issuer: 'Vanderbilt University',
    credentialId: 'ILO5QOPKKZRO',
    issued: 'Dec 2025',
    skills: ['Automation', 'HR Tech Solutions']
  },
  {
    id: 'C10',
    title: 'Human Resources: Creating an Employee Handbook',
    issuer: 'SHRM',
    credentialId: 'SHRM Compliance Course',
    issued: 'Apr 2026',
    skills: ['Regulatory Compliance', 'Policy Mapping']
  },
  {
    id: 'C11',
    title: 'Six Sigma: Black Belt',
    issuer: 'National Association of State Boards of Accountancy (NASBA)',
    credentialId: 'NASBA Structured Assessment',
    issued: 'Apr 2026',
    skills: ['Six Sigma', 'Process Optimization', 'Operation Excellence']
  },
  {
    id: 'C12',
    title: 'Program Management for IT Professionals',
    issuer: 'SHRM',
    credentialId: 'afecb02579c57c80980ed582c2d1d17550ead991b6faec7bfd4d224bd32f4dc8',
    issued: 'Apr 2026',
    skills: ['Program Management', 'IT Project & Program Management']
  },
  {
    id: 'C13',
    title: 'Getting Started as a Full-Stack Web Developer',
    issuer: 'LinkedIn',
    credentialId: 'Show credential',
    issued: 'Apr 2026',
    skills: ['Full-Stack Development', 'Introductory Software']
  },
  {
    id: 'C14',
    title: 'Responsible AI in a Global Context Professional Certificate',
    issuer: 'United Nations',
    credentialId: '621e71d738b9f40b3dd4eb0d2c36166e18d735586aae0a612947e4ec9f9a8afb',
    issued: 'Dec 2025',
    skills: ['Responsible AI', 'AI Policy, Governance, and Regulation']
  },
  {
    id: 'C15',
    title: 'Succeeding as a First-Time Tech Manager',
    issuer: 'Project Management Institute',
    credentialId: 'fe9b7eb357ef2a3e9b030f5b6f6de7a5b4b60d2ee5c0513926a311fb64d93d8d',
    issued: 'Apr 2026',
    skills: ['Management Development', 'Technical Leadership']
  },
  {
    id: 'C16',
    title: 'Innovative Customer Service Techniques',
    issuer: 'Project Management Institute',
    credentialId: '34ef7abf2e571471d8aeac5f114025e9c4c0df56f868dce620fa20e7c3e605f9',
    issued: 'Jan 2026',
    skills: ['Client Relations', 'Issue Mitigation']
  },
  {
    id: 'C17',
    title: 'Plan and Prepare to Develop AI Solutions on Azure',
    issuer: 'Microsoft',
    credentialId: 'Credential ID Azure Dev',
    issued: 'Jan 2026',
    skills: ['Azure Cloud', 'AI Model Integration']
  },
  {
    id: 'C18',
    title: 'Certificate In Teaching English To Speakers Of Other Languages',
    issuer: 'Hai English',
    credentialId: '120-hour TESOL Training',
    issued: 'Nov 2022',
    skills: ['Teaching English as a Second Language']
  },
  {
    id: 'C19',
    title: 'Certificate In Teaching English As A Foreign Language',
    issuer: 'Hai English',
    credentialId: '120-hour TEFL Training',
    issued: 'Nov 2022',
    skills: ['Teaching English as a Foreign Language']
  },
  {
    id: 'C20',
    title: 'Master Class on Leadership Excellence',
    issuer: 'World Academy for Research & Development',
    credentialId: 'WARD Corporate Training',
    issued: 'Feb 2025',
    skills: ['Strategic Leadership', 'Kaizen Principles']
  },
  {
    id: 'C21',
    title: 'Certified Lean Six Sigma White Belt',
    issuer: 'International Society of Six Sigma Professionals',
    credentialId: 'ISSSP Registered White Belt',
    issued: 'Jul 2023',
    skills: ['Six Sigma', 'White Belt']
  },
  {
    id: 'C22',
    title: 'Certified Human Resource Associate',
    issuer: 'Human Resource Educators\' Association of the Philippines, Inc.',
    credentialId: 'CHRA Licensure',
    issued: 'May 2022',
    skills: ['Human Resources (HR)', 'Labor Relations']
  },
  {
    id: 'C23',
    title: 'Strategy and Operations',
    issuer: 'International Business Management Institute (IBMI)',
    credentialId: 'IBMI Operational Strategy',
    issued: 'Nov 2021',
    skills: ['Business Strategy', 'Operations Management']
  }
];

export default function Education() {
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <section id="education" className="py-24 md:py-40 px-6 md:px-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-accent uppercase tracking-[0.5em] text-[10px] md:text-xs mb-6 block font-bold">
              Academic Background
            </span>
            <h2 className="text-[10vw] md:text-[7vw] font-sans font-bold tracking-tighter leading-[0.9]">
              Education that <br />
              <span className="text-white/40">Shapes Expertise.</span>
            </h2>
          </div>
          <p className="text-[10px] md:text-xs opacity-40 max-w-[240px] uppercase tracking-[0.3em] leading-relaxed font-bold">
            03 / Academic & Professional Credentials
          </p>
        </motion.div>

        {/* Education Degree List */}
        <div className="flex flex-col border-t border-white/10">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group border-b border-white/10 py-8 md:py-12 lg:py-16 flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 hover:bg-white/[0.02] transition-all duration-500 px-6 md:px-8 relative overflow-hidden cursor-none"
              data-cursor="hover"
              data-cursor-text="Detail"
            >
              <div className="hidden md:block md:col-span-1">
                <span className="text-xs font-mono opacity-20">{edu.id}</span>
              </div>

              <div className="md:col-span-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent mb-2 block">
                  {edu.period}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-sans font-black tracking-tighter uppercase leading-none mb-2 group-hover:text-accent transition-colors">
                  {edu.school}
                </h3>
                <span className="text-xs font-mono opacity-40 uppercase tracking-widest block mb-1">
                  {edu.location}
                </span>
                <span className="text-[9px] font-mono opacity-30 uppercase tracking-widest">
                  {edu.meta}
                </span>
              </div>

              <div className="md:col-span-7 flex flex-col justify-center">
                <p className="text-sm opacity-80 leading-relaxed mb-2 font-semibold uppercase tracking-widest text-accent/80">
                  {edu.degree}
                </p>
                <p className="text-xs font-mono opacity-40 uppercase tracking-widest mb-4">{edu.major}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {edu.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono border border-white/10 px-3 py-1 rounded-sm opacity-40 group-hover:opacity-100 transition-opacity"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="mt-20 md:mt-32"
        >
          <div className="mb-12 md:mb-16">
            <span className="text-accent uppercase tracking-[0.5em] text-[10px] md:text-xs mb-3 block font-bold">
              Professional Certifications
            </span>
            <h3 className="text-3xl md:text-5xl font-sans font-black tracking-tighter uppercase">
              Credentials &amp; Licenses
            </h3>
            <p className="text-xs opacity-40 uppercase tracking-[0.2em] mt-2 font-semibold font-mono">
              An exhaustive record of fully audited expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border-y border-white/10">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                onClick={() => {
                  if (cert.hasTranscript) {
                    setShowTranscript(true);
                  }
                }}
                className={`group relative bg-bg p-8 md:p-10 overflow-hidden transition-all duration-500 cursor-none flex flex-col justify-between ${
                  cert.hasTranscript 
                    ? 'hover:bg-accent/[0.03] border border-accent/20 hover:border-accent/50' 
                    : 'hover:bg-white/[0.02]'
                }`}
                data-cursor="hover"
                data-cursor-text={cert.hasTranscript ? "View Details" : "Cert"}
              >
                {/* Accent left border on hover */}
                <div className={`absolute left-0 top-0 h-full w-[2px] transition-transform duration-500 origin-top ${
                  cert.hasTranscript ? 'bg-accent scale-y-100' : 'bg-accent scale-y-0 group-hover:scale-y-100'
                }`} />

                {/* Faint certificate watermark */}
                <span className="absolute bottom-4 right-6 text-[4rem] md:text-[5rem] font-sans font-black text-white/[0.03] leading-none select-none pointer-events-none">
                  {cert.id.replace('C', '')}
                </span>

                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex gap-2 items-center justify-between">
                    {cert.issued ? (
                      <span className="inline-flex items-center gap-2 self-start text-[8px] font-mono uppercase tracking-[0.35em] text-bg bg-accent px-3 py-1 font-bold">
                        {cert.issued}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 self-start text-[8px] font-mono uppercase tracking-[0.35em] text-accent border border-accent/30 px-3 py-1 font-bold">
                        Certified
                      </span>
                    )}

                    {cert.hasTranscript && (
                      <span className="inline-flex items-center gap-1.5 text-[8px] font-mono uppercase tracking-widest text-accent animate-pulse font-black">
                        <Sparkles size={10} />
                        <span>Interactive Transcript</span>
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-base md:text-lg font-sans font-extrabold tracking-tight leading-snug group-hover:text-accent transition-colors duration-300 uppercase">
                      {cert.title}
                    </h4>
                    {cert.subtitle && (
                      <p className="text-[10px] font-mono text-accent/80 font-bold uppercase tracking-wide mt-1.5">{cert.subtitle}</p>
                    )}
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-2">
                    <p className="text-[9px] font-mono uppercase tracking-wider opacity-40 font-bold mb-1">Issuer: {cert.issuer}</p>
                    {cert.credentialId && (
                      <p className="text-[9px] opacity-25 font-mono truncate uppercase">ID: {cert.credentialId}</p>
                    )}
                  </div>
                </div>

                {/* Render tags/skills */}
                {cert.skills && (
                  <div className="mt-4 flex flex-wrap gap-1 relative z-10">
                    {cert.skills.map(s => (
                      <span key={s} className="text-[8px] font-mono bg-white/5 px-2 py-0.5 rounded opacity-40 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                {cert.hasTranscript && (
                  <div className="mt-4 flex items-center gap-1.5 text-[10px] text-accent/60 group-hover:text-accent font-bold transition-colors font-mono uppercase tracking-widest md:hidden">
                    <Eye size={12} />
                    <span>View Courses</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* IBM TRANSCRIPT POPUP MODAL */}
      <AnimatePresence>
        {showTranscript && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTranscript(false)}
              className="absolute inset-0 bg-bg/95 backdrop-blur-xl cursor-none"
              data-cursor="hover"
              data-cursor-text="Close"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="relative w-full max-w-4xl bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] z-10"
            >
              {/* Header block */}
              <div className="bg-[#141414] border-b border-white/10 p-6 md:p-8 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em] bg-accent/10 border border-accent/20 px-3 py-1 text-accent font-black">
                      IBM Academic Program
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-30 font-bold hidden md:inline">
                      18 ACE CREDITS
                    </span>
                  </div>
                  <h3 className="text-xl md:text-3xl font-sans font-black tracking-tight text-white uppercase leading-tight">
                    Full Stack Software Developer
                  </h3>
                  <p className="text-xs font-mono opacity-40 uppercase tracking-widest mt-1">
                    Verified Course Curriculum &amp; Completed Academic Duration
                  </p>
                </div>
                
                <button
                  onClick={() => setShowTranscript(false)}
                  data-cursor="hover"
                  className="rounded-full border border-white/10 p-2.5 text-white/50 hover:text-white hover:border-white/20 transition-all cursor-none"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Course Transcript Table component scroll */}
              <div className="overflow-y-auto flex-grow p-6 md:p-8">
                <div className="border border-white/5 rounded-xl overflow-hidden bg-black/40">
                  <table className="w-full text-left font-sans text-xs border-collapse">
                    <thead>
                      <tr className="bg-white/[0.02] border-b border-white/5 font-mono text-[9px] uppercase tracking-widest text-white/50">
                        <th className="py-4 px-6 font-bold">Course Title</th>
                        <th className="py-4 px-4 font-bold md:w-48">Study Duration / Hours</th>
                        <th className="py-4 px-4 font-bold md:w-36 text-right">Completed On</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-medium text-white/80">
                      {ibmCourses.map((c, i) => (
                        <tr key={i} className="hover:bg-white/[0.01] transition-colors">
                          <td className="py-3 px-6 flex items-center gap-3">
                            <span className="text-[9px] font-mono opacity-20 w-4 inline-block">{(i+1).toString().padStart(2, '0')}</span>
                            <span className="font-semibold text-white/90 text-xs md:text-sm uppercase tracking-wide">{c.title}</span>
                          </td>
                          <td className="py-3 px-4 text-xs font-mono opacity-50 whitespace-nowrap">{c.hours}</td>
                          <td className="py-3 px-4 text-right text-xs font-mono text-accent/80 font-bold whitespace-nowrap">{c.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Additional Info footer */}
                <div className="mt-6 flex flex-col md:flex-row justify-between items-center bg-accent/5 border border-accent/20 rounded-xl p-4 gap-4 text-left">
                  <div className="flex gap-3 items-start">
                    <FileText className="text-accent mt-0.5" size={16} />
                    <div>
                      <p className="text-[10px] font-mono text-accent font-black uppercase tracking-widest">
                        Official Recognition Framework
                      </p>
                      <p className="text-[11px] opacity-60 leading-relaxed mt-0.5">
                        This sequence is validated as standard credential CSEDIZ2E5VOL. Recommended for 18 US credits/semester hours by the American Council on Education (ACE). Accredited under FIBAA for 6 credits/semester hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Close footer bar */}
              <div className="bg-[#141414] border-t border-white/10 px-8 py-4 flex justify-between items-center">
                <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest font-bold">
                  Total Completed Pipeline: 15 Curriculum Credits
                </span>
                <button
                  onClick={() => setShowTranscript(false)}
                  data-cursor="hover"
                  className="px-6 py-2 bg-accent text-bg font-bold text-xs uppercase tracking-widest rounded transition-all hover:opacity-90 cursor-none"
                >
                  Close Transcript
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Background Decorative */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}

