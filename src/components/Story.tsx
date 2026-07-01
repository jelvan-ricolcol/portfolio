import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="py-32 md:py-60 px-6 md:px-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            >
              <span className="text-accent uppercase tracking-[0.5em] text-[10px] md:text-xs mb-8 block font-bold">The Narrative</span>
              <h2 className="text-[12vw] md:text-[8vw] font-serif italic font-light tracking-tighter leading-[0.85] mb-12">
                History <br />
                <span className="text-white/40">and Vision.</span>
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-col gap-16 md:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex flex-col gap-8"
              >
                <h3 className="text-2xl md:text-4xl font-sans font-bold tracking-tight text-white/80">The Genesis</h3>
                <p className="text-base md:text-xl opacity-40 leading-relaxed font-sans font-medium">
                  My journey began at the intersection of human operations and digital systems. With a Bachelor's degree in Business Administration, major in Human Resources and Development Management, I built a solid foundation in people management, process coordination, and organizational behavior before stepping into the global BPO landscape.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex flex-col gap-8"
              >
                <h3 className="text-2xl md:text-4xl font-sans font-bold tracking-tight text-white/80">The Evolution</h3>
                <p className="text-base md:text-xl opacity-40 leading-relaxed font-sans font-medium">
                  From onboarding 70+ agents weekly at Teleperformance to managing the HR Helpdesk for 30,000+ employees, and now optimizing global Meta advertising campaigns at Concentrix, each role deepened my expertise across HR operations, process automation, and digital strategy. 
                </p>
                <p className="text-base md:text-xl opacity-40 leading-relaxed font-sans font-medium">
                  Driven by a genuine love for building custom apps and websites for clients during my years of freelancing, I formalized my technical competency by completing the comprehensive IBM Full Stack Software Developer curriculum—a rigorous 15-course specialized pipeline. This achievement is recognized with recommendations for 18 US Credits/semester hours by the American Council on Education (ACE) and 6 ECTS credits via FIBAA. Alongside this, I completed a Master in Human Resource Management and Talent management & Master in Artificial Intelligence for Business from Universidad Isabel 1, Spain (72 ECTS, 1800 Hours) in 2025.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col gap-8"
              >
                <h3 className="text-2xl md:text-4xl font-sans font-bold tracking-tight text-white/80">The Future</h3>
                <p className="text-base md:text-xl opacity-40 leading-relaxed font-sans font-medium">
                  Today, I partner with forward thinking individuals and organizations to deliver HR solutions, web development, automation workflows, and digital advertising that create real impact. The mission is clear, to humanize automation and amplify human potential through intelligent design, owned digital assets, and scalable AI driven strategies.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-col gap-8"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold">Challenges Became New Skills</span>
                  <h3 className="text-2xl md:text-4xl font-sans font-bold tracking-tight text-white/80">The Challenge</h3>
                </div>
                <p className="text-base md:text-xl opacity-40 leading-relaxed font-sans font-medium">
                  My journey truly began when I stepped outside my home country and started a new life in Kuala Lumpur, alone, uncertain, yet determined. Every success I earned on my own. Every challenge, every quiet struggle, every small win: experienced independently. It was in those moments, both lonely and fulfilling, that I discovered who I really am.
                </p>
                <p className="text-base md:text-xl opacity-40 leading-relaxed font-sans font-medium">
                  Living abroad taught me resilience. Days filled with doubt and nights questioning the path only deepened my discipline. Instead of giving up, I chose to grow, pursuing my master's degree and uncovering a genuine passion for web development, coding, and AI. What started as curiosity became a skillset I build on every single day.
                </p>
                <p className="text-base md:text-xl opacity-40 leading-relaxed font-sans font-medium">
                  I failed more times than I can count. But every failure became a lesson, a reminder of what to improve, what to avoid, and how to move forward smarter and stronger. I am still learning, still building, still becoming better than I was yesterday.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax Background Text */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 right-0 text-[30vw] font-bold text-white/[0.02] leading-none select-none pointer-events-none whitespace-nowrap"
      >
        HISTORY
      </motion.div>
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 text-[30vw] font-bold text-white/[0.02] leading-none select-none pointer-events-none whitespace-nowrap"
      >
        VISION
      </motion.div>
    </section>
  );
}
