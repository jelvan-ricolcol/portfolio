import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function ClickRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const handleAddRipple = (e: MouseEvent) => {
      // Avoid ripples on interactive forms or modals if click happens there
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a') || target.closest('input')) {
        // Still add subtle ripple, it looks great
      }

      const newRipple: Ripple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev, newRipple].slice(-10)); // keep max 10 ripples
    };

    window.addEventListener('click', handleAddRipple);
    return () => window.removeEventListener('click', handleAddRipple);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[10002] overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.200 }}
            animate={{ scale: 8, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute w-12 h-12 -ml-6 -mt-6 rounded-full border border-accent/60 bg-accent/5 pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
