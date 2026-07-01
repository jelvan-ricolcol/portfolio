import { Github, Laptop } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-transparent border-t border-white/5 py-12 px-6 md:px-16 lg:px-24 no-print">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-left">
        {/* Left branding */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-white">
            <Laptop size={16} className="text-accent" />
            <span className="font-mono text-xs font-black uppercase tracking-[0.3em]">
              Jelvan<span className="text-accent">.</span>pro
            </span>
          </div>
          <a
            href="https://github.com/jelvan-ricolcol/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View portfolio repository on GitHub (opens in new tab)"
            className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors"
          >
            <Github size={16} />
            <span className="text-[11px] font-mono">jelvan-ricolcol/portfolio</span>
          </a>
          <p className="text-[11px] text-neutral-500 font-medium max-w-sm leading-relaxed">
            Integrating human operations with modern web development, process automations, and intelligent systems.
          </p>
        </div>

        {/* Right copyright details */}
        <div className="flex flex-col md:items-end gap-2 text-[10px] font-mono text-neutral-600 uppercase tracking-widest font-bold">
          <span>DESIGN &amp; DEVELOPMENT BY JELVAN RICOLCOL</span>
          <span>© 2026 // ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
}
