import { useState, useEffect, useRef } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ClickRipple from './components/ClickRipple';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Tools from './components/Tools';
import Services from './components/Services';
import Footer from './components/Footer';
import Works from './components/Works';
import Contact from './components/Contact';
import CloudinaryBackground from './components/CloudinaryBackground';
import { FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';

type Tab = 'info' | 'works' | 'contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('info');
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!loading) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [loading]);

  // When tab changes, let's scroll to the top of the viewport
  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    window.scrollTo({
      top: 0,
      behavior: 'auto' // Instant or smooth
    });
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Jelvan_Ricolcol_Resume.pdf';
    link.download = 'Jelvan_Ricolcol_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="relative min-h-screen bg-transparent overflow-x-hidden">
      <CustomCursor />
      <ClickRipple />
      {/* Global Grain Overlay */}
      <div className="fixed inset-0 z-[9998] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Background renders unconditionally to load & play in HD immediately */}
      <CloudinaryBackground onReady={() => setVideoReady(true)} />

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" videoReady={videoReady} onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <Header activeTab={activeTab} onTabChange={handleTabChange} />

            <div className="pt-24 min-h-[calc(100vh-6rem)]">
              <AnimatePresence mode="wait">
                {activeTab === 'info' && (
                  <motion.div
                    key="info"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Hero />
                    <Story />
                    <Services />
                    <Experience />
                    <Education />
                    <Skills />
                    <Gallery />
                    <Tools />
                    <Footer />
                  </motion.div>
                )}

                {activeTab === 'works' && (
                  <motion.div
                    key="works"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Works />
                    <Footer />
                  </motion.div>
                )}

                {activeTab === 'contact' && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Contact />
                    <Footer />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Glowing Floating Download Resume Pill */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={handleDownloadResume}
              data-cursor="hover"
              data-cursor-text="Download"
              className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[5000] no-print bg-[#0d0d0d]/90 hover:bg-[#141414] backdrop-blur-md border border-white/10 hover:border-accent/40 text-white/90 hover:text-accent font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.25em] pl-4 pr-5 py-3 rounded-full flex items-center gap-2.5 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.6)] cursor-none hover:shadow-[0_10px_40px_rgba(202,253,0,0.15)] hover:scale-[1.03] active:scale-[0.97]"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-2 h-2 rounded-full bg-accent animate-ping opacity-70" />
                <FileText size={14} className="relative z-10 transition-transform group-hover:scale-110" />
              </div>
              <span>Download Resume</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
