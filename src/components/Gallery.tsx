import { motion } from 'motion/react';

const galleryItems = [
  {
    id: '01',
    title: 'Dual Master\'s Graduation',
    label: 'Academic Milestone',
    description: 'Completed Master in Human Resource Management and Talent management & Master in Artificial Intelligence for Business at Universidad Isabel 1, Spain (72 ECTS, 1800 Hours) in 2025.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: '02',
    title: 'Global BPO Operations',
    label: 'Professional Chapter',
    description: 'Managed the HR Helpdesk supporting over 30,000 employees at Teleperformance, streamlining workforce processes across offshore shared services.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: '03',
    title: 'Meta Advertising Excellence',
    label: 'Digital Chapter',
    description: 'Driving global Meta advertising campaigns at Concentrix Malaysia, optimizing audience targeting, ad creatives, and bidding strategies for international brands.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: '04',
    title: 'Lean Six Sigma Certified',
    label: 'Certification',
    description: 'Earned the Certified Lean Six Sigma White Belt from the International Society of Six Sigma Professionals, applying process improvement methodology to operational challenges.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: '05',
    title: 'AI & Automation Workflows',
    label: 'Innovation',
    description: 'Building intelligent automation solutions with Zapier, Make, and custom AI workflows, connecting business systems and eliminating repetitive manual processes.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: '06',
    title: 'Manila to the World',
    label: 'Global Footprint',
    description: 'From Manila, Philippines to Malaysia and Spain, a career built across continents, combining Eastern work ethics with global digital transformation.',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80&w=800&h=600'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-40 px-6 md:px-20 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-accent uppercase tracking-[0.5em] text-[10px] md:text-xs mb-6 block font-bold">
              The Journey
            </span>
            <h2 className="text-[10vw] md:text-[7vw] font-sans font-bold tracking-tighter leading-[0.9]">
              Moments that <br />
              <span className="text-white/40">Define the Path.</span>
            </h2>
          </div>
          <p className="text-[10px] md:text-xs opacity-40 max-w-[240px] uppercase tracking-[0.3em] leading-relaxed font-bold">
            05 / Hover each photo to reveal its color
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.9,
                ease: [0.76, 0, 0.24, 1]
              }}
              className="group relative h-[400px] md:h-[480px] overflow-hidden bg-bg cursor-none"
              data-cursor="hover"
              data-cursor-text="View"
            >
              {/* Photo with grayscale → color on hover */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale opacity-25 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-[1.2s] ease-[0.76,0,0.24,1]"
                  loading="lazy"
                />
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 z-[1] bg-gradient-to-t from-bg via-bg/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />

              {/* Content */}
              <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent/60 group-hover:text-accent transition-colors duration-500">
                    {item.label}
                  </span>
                  <span className="text-2xl font-sans font-black opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                    {item.id}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-sans font-black tracking-tighter uppercase leading-none mb-4 group-hover:text-accent transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-xs opacity-0 group-hover:opacity-50 transition-all duration-500 leading-relaxed font-medium max-w-xs">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative */}
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[80vw] h-96 bg-accent/3 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
