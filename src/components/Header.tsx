import { motion } from 'motion/react';
import { Laptop, Info, MessageSquare, Briefcase } from 'lucide-react';

interface HeaderProps {
  activeTab: 'info' | 'works' | 'contact';
  onTabChange: (tab: 'info' | 'works' | 'contact') => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  const tabs = [
    { id: 'info' as const, label: 'Background', icon: Info },
    { id: 'works' as const, label: 'Execution', icon: Briefcase },
    { id: 'contact' as const, label: 'Inquiry', icon: MessageSquare },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[4000] no-print bg-[#0d0d0d]/70 backdrop-blur-md border-b border-white/5 px-6 py-4 md:px-12 flex justify-between items-center">
      {/* Brand Logo */}
      <div 
        onClick={() => onTabChange('info')}
        data-cursor="hover"
        data-cursor-text="Home"
        className="flex items-center gap-2 cursor-none select-none text-white hover:text-accent transition-colors duration-300"
      >
        <Laptop size={18} className="text-accent" />
        <span className="font-mono text-xs font-black uppercase tracking-[0.3em]">
          Jelvan®
        </span>
      </div>

      {/* Tabs / Navigation */}
      <nav className="flex items-center gap-1.5 bg-[#141414]/90 border border-white/5 p-1 rounded-full relative">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              data-cursor="hover"
              data-cursor-text={tab.label}
              className={`relative flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-[10px] md:text-xs font-black uppercase tracking-wider transition-colors duration-300 cursor-none select-none ${
                isActive ? 'text-black' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab-bg"
                  className="absolute inset-0 bg-accent rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <Icon size={12} className="relative z-10" />
              <span className="relative z-10 hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Action CTA */}
      <div className="hidden md:flex items-center gap-4">
        <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">
          Kuala Lumpur, MY
        </span>
      </div>
    </header>
  );
}
