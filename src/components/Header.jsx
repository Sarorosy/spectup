import { useState, useEffect } from "react";
import { X, ChevronDown, MoreHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#", active: true },
  { label: "How It Works", href: "#" },
  { label: "Services", href: "#" },
  { label: "Reviews", href: "#" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group z-10">
            <div className="relative w-10 h-10 flex items-center justify-center">
              {/* Hexagon shape using SVG */}
              <svg 
                viewBox="0 0 100 100" 
                className="absolute inset-0 w-full h-full drop-shadow-[0_0_8px_rgba(191,149,63,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(191,149,63,0.5)] transition-all"
              >
                <path 
                  d="M50 5 L90 27.5 V72.5 L50 95 L10 72.5 V27.5 Z" 
                  fill="none" 
                  stroke="#bf953f" 
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[#bf953f] font-bold text-lg relative z-10 pr-0.5">SI</span>
            </div>
            <span className="text-white font-bold text-xl tracking-wide">Shine Investo</span>
          </div>

          {/* Center Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`gold-link-hover text-[15px] font-medium ${
                  link.active ? "text-white `active`" : "text-white/60"
                }`}
              >
                {link.label}
                {link.active && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] shadow-[0_0_8px_rgba(191,149,63,0.5)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <MoreHorizontal size={20} />
            </button>
          </nav>

          {/* Right Section - CTA & Mobile Toggle */}
          <div className="flex items-center gap-6 z-10">
            <button className="hidden sm:block goldbtn-compact text-[14px] px-6 py-2.5 rounded-lg font-bold text-[#1a1a1a] transition-all hover:scale-105 active:scale-95">
              Book Call
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden flex flex-col gap-1.5 cursor-pointer group"
            >
              <div className="w-6 h-[2px] bg-white transition-all group-hover:w-5"></div>
              <div className="w-6 h-[2px] bg-white"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col p-8 lg:p-16"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                 <div className="relative w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                    <path d="M50 5 L90 27.5 V72.5 L50 95 L10 72.5 V27.5 Z" fill="none" stroke="#bf953f" strokeWidth="6" />
                  </svg>
                  <span className="text-[#bf953f] font-bold text-lg">SI</span>
                </div>
                <span className="text-white font-bold text-2xl tracking-tight">Shine Investo</span>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X size={32} className="text-white" />
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 lg:items-center h-full">
              <nav className="flex flex-col gap-8 lg:gap-12 flex-1">
                {NAV_LINKS.map((link, index) => (
                  <motion.a 
                    key={link.label}
                    href={link.href} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-4xl lg:text-7xl font-bold text-white/50 hover:text-white transition-all hover:pl-4 w-fit gold-link-hover h-auto inline-block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  href="#" 
                  className="text-4xl lg:text-7xl font-bold text-white/20 hover:text-white transition-all hover:pl-4 w-fit gold-link-hover"
                >
                  Contact
                </motion.a>
              </nav>

              <div className="lg:w-1/3 space-y-12">
                <div className="space-y-4">
                  <p className="text-[#bf953f] font-bold tracking-widest uppercase text-sm">Quick Links</p>
                  <div className="flex flex-col gap-4 text-xl text-white/60">
                    <a href="#" className="hover:text-white transition-colors gold-link-hover w-fit">Career</a>
                    <a href="#" className="hover:text-white transition-colors gold-link-hover w-fit">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors gold-link-hover w-fit">Terms of Service</a>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[#bf953f] font-bold tracking-widest uppercase text-sm">Contact Us</p>
                  <p className="text-2xl text-white">hi@shineinvesto.com</p>
                </div>

                <button className="w-full lg:w-fit goldbtn-compact px-12 py-5 rounded-2xl font-bold text-[#1a1a1a] text-xl transition-transform hover:scale-105">
                  Book A Call
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style dangerouslySetInnerHTML={{ __html: `
        .goldbtn-compact {
          background: linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c);
          background-size: 200% 100%;
          border: none;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
          animation: gold-shimmer 3s infinite linear;
        }
        
        @keyframes gold-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}} />
    </>
  );
}
