import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
  videoReady: boolean;
}

export default function Loader({ onComplete, videoReady }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [canEnter, setCanEnter] = useState(false);
  const onCompleteRef = useRef(onComplete);
  const videoReadyRef = useRef(videoReady);

  // Keep refs up to date
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    videoReadyRef.current = videoReady;
  }, [videoReady]);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      const increment = Math.max(1, Math.floor((100 - current) * 0.15));
      
      // If video background is not ready, hold progress at 98%
      if (current + increment >= 98 && !videoReadyRef.current) {
        if (current < 98) {
          current = 98;
          setProgress(98);
        }
        return;
      }

      current += increment;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        setCanEnter(true);
        clearInterval(interval);
      } else {
        setProgress(current);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // Watch for video ready to kick the final progress step from 98 to 100
  useEffect(() => {
    if (videoReady && progress >= 98) {
      setProgress(100);
      setCanEnter(true);
    }
  }, [videoReady, progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 bg-[#070707] z-[9999] flex flex-col justify-between p-8 md:p-16 text-white font-sans"
    >
      {/* Top section */}
      <div className="flex justify-between items-start text-xs font-mono tracking-[0.2em] text-neutral-500 uppercase">
        <span>Jelvan® / Portfolio</span>
        <span>Kuala Lumpur / Manila</span>
      </div>

      {/* Middle section with display progress */}
      <div className="flex flex-col items-start gap-4">
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-mono tracking-[0.3em] uppercase text-neutral-400"
          >
            Digital Architecture &amp; Strategy
          </motion.h2>
        </div>
        <div className="flex items-baseline min-h-[140px] md:min-h-[180px] w-full relative">
          <AnimatePresence mode="wait">
            {!canEnter ? (
              <motion.div
                key="progress"
                initial={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-baseline"
              >
                <span className="text-7xl md:text-9xl font-black tracking-tighter text-neutral-200">
                  {progress.toString().padStart(3, '0')}
                </span>
                <span className="text-lg md:text-2xl font-mono text-neutral-400 ml-2">%</span>
              </motion.div>
            ) : (
              <motion.div
                key="enter-btn"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start gap-6 w-full max-w-lg"
              >
                <p className="text-sm font-mono text-accent uppercase tracking-[0.2em] font-bold animate-pulse">
                  ● SYSTEM READY / HD FEED INTEGRATED
                </p>
                <button
                  onClick={onComplete}
                  data-cursor="hover"
                  data-cursor-text="Enter"
                  className="w-full sm:w-auto px-8 py-5 bg-white text-black font-mono font-black text-xs uppercase tracking-[0.3em] rounded-none hover:bg-accent hover:text-black transition-all duration-500 shadow-[0_10px_45px_rgba(255,255,255,0.08)] hover:shadow-[0_10px_45px_rgba(202,253,0,0.25)] hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-3 cursor-none"
                >
                  Enter Portfolio
                  <span className="text-sm font-serif italic normal-case font-light">→</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom section with loading progress bar */}
      <div className="flex flex-col gap-4">
        <div className="w-full h-[1px] bg-neutral-800 relative">
          <motion.div 
            className="absolute left-0 top-0 bottom-0 bg-neutral-200"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between items-end text-xs font-mono tracking-widest text-neutral-500 uppercase">
          <span>{progress < 95 ? "Loading assets & canvas engine" : (!videoReady ? "Buffering HD background stream..." : (canEnter ? "System ready. Click button above." : "System live. Click to proceed."))}</span>
          <span>© 2019 All rights reserved</span>
        </div>
      </div>
    </motion.div>
  );
}
