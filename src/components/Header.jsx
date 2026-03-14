import { useState, useEffect } from "react";
import { ChevronUp, X, ArrowUpRight, Linkedin, Youtube, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import spotifyLogo from '../assets/spotify.avif';

export default function Header() {
  const [time, setTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between text-white mix-blend-difference">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="bg-brand-yellow p-0.5 rounded-sm transition-transform group-hover:scale-110">
            <ChevronUp size={14} className="text-black stroke-[3]" />
          </div>
          <span className="font-bold text-xl tracking-tight">spectup</span>
        </div>

        {/* Center - Location & Time */}
        <div className="hidden md:flex items-center gap-2 text-[13px] font-medium opacity-80 uppercase tracking-widest">
          <span>Munich (DE)</span>
          <span className="opacity-50">|</span>
          <span>{formattedTime}</span>
        </div>

        {/* Right - Work & Menu */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-1 cursor-pointer group hover:opacity-100 transition-opacity">
            <span className="text-[14px] font-semibold">Our Work</span>
            <span className="text-[12px] opacity-60 font-medium">[13]</span>
          </div>

          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col gap-1.5 cursor-pointer group"
          >
            <div className="w-8 h-[2px] bg-white transition-all group-hover:w-6"></div>
            <div className="w-8 h-[2px] bg-white"></div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }} 
            animate={{ x: 0 }} 
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[#050505] text-white flex flex-col md:flex-row overflow-y-auto md:overflow-hidden font-sans"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white transition-colors"
            >
              <X size={28} strokeWidth={1} />
            </button>

            {/* Left Side - Podcast Card */}
            <div className="hidden md:flex flex-1 items-center justify-center p-8 lg:p-16 border-r border-white/5 relative">
              <div className="absolute inset-0 bg-[#020202]"></div>
              
              <div className="w-full max-w-lg overflow-hidden group cursor-pointer relative z-10">
                 {/* Image Container */}
                 <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
                   <img src={spotifyLogo} alt="Podcast Thumbnail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   
                   
                   
                   
                 </div>
                 
                 {/* Card Content Footer with diagonal stripes */}
                 <div className="p-5 flex items-center justify-between relative border border-white/10 border-t-0"
                      style={{
                        background: "repeating-linear-gradient(45deg, #0a0a0a, #0a0a0a 2px, #111 2px, #111 4px)"
                      }}>
                   
                   <div className="relative z-10">
                     <p className="text-[11px] text-white/50 mb-1 font-medium">Capital Raising Podcast</p>
                     <h3 className="font-semibold text-[15px] tracking-tight text-white">Listen to our Podcast on Spotify</h3>
                   </div>
                   
                   <div className="relative z-10 w-9 h-9 flex items-center justify-center bg-white text-black transition-colors self-end sm:self-auto">
                     <ArrowUpRight size={18} strokeWidth={2.5} />
                   </div>
                 </div>
              </div>
            </div>

            {/* Right Side - Navigation */}
            <div className="flex-1 flex flex-col h-full bg-[#050505]">
              <div className="px-8 lg:px-24 pt-24 lg:pt-32 pb-8 flex-1 flex flex-col justify-center overflow-y-auto">
                <p className="text-[11px] text-white/50 mb-6 font-medium">Menu</p>
                
                <nav className="flex flex-col gap-3">
                  <a href="#" className="text-2xl lg:text-[28px] font-bold tracking-tight hover:text-white/70 transition-colors w-fit">Home</a>
                  <a href="#" className="text-2xl lg:text-[28px] font-bold tracking-tight hover:text-white/70 transition-colors w-fit">About Us</a>
                  
                  <div className="flex flex-col gap-3 my-1">
                    <a href="#" className="text-2xl lg:text-[28px] font-bold tracking-tight hover:text-white/70 transition-colors w-fit">
                      Fundraising Consultant
                    </a>
                    <div className="flex flex-col gap-3 text-[14px] text-white/60 font-medium">
                      <a href="#" className="hover:text-white transition-colors w-fit">Pitch Deck Service</a>
                      <a href="#" className="hover:text-white transition-colors w-fit">Financial Modeling</a>
                      <a href="#" className="hover:text-white transition-colors w-fit">Investor Outreach</a>
                    </div>
                  </div>

                  <a href="#" className="text-2xl lg:text-[28px] font-bold tracking-tight hover:text-white/70 transition-colors w-fit">Private Placement Agent</a>
                  <a href="#" className="text-2xl lg:text-[28px] font-bold tracking-tight hover:text-white/70 transition-colors w-fit">Leads Gen Agency</a>
                  <a href="#" className="text-2xl lg:text-[28px] font-bold tracking-tight hover:text-white/70 transition-colors flex items-center gap-2 w-fit">
                    Resource Hub <span className="text-lg lg:text-xl text-white/40 font-normal ml-1">[83]</span>
                  </a>
                </nav>
              </div>

              {/* Bottom Info Section */}
              <div className="px-8 lg:px-24 py-8 lg:py-12 border-t border-white/10 flex flex-col md:flex-row gap-12 justify-between items-start md:items-end flex-shrink-0">
                <div className="w-full max-w-[280px]">
                  <p className="text-[11px] text-white/50 mb-3 tracking-wide">Let's Talk</p>
                  <a href="mailto:hi@spectup.com" className="text-xl lg:text-[26px] font-bold tracking-tight flex items-center justify-between pb-3 border-b border-white/20 group hover:border-white transition-colors">
                    <span>hi@spectup.com</span>
                    <span className="text-white/50 group-hover:text-white transition-colors font-light">+</span>
                  </a>
                  <p className="mt-5 text-[12px] font-medium tracking-wide">
                    Munich (DE) <span className="text-white/50 ml-2">{formattedTime}</span>
                  </p>
                </div>

                <div className="flex flex-col">
                   <p className="text-[11px] text-white/50 mb-3 tracking-wide md:text-left">Socials</p>
                   <div className="flex items-center gap-5">
                     <a href="#" className="text-white hover:text-white/70 transition-colors"><Linkedin size={18} strokeWidth={1.5} /></a>
                     <a href="#" className="text-white hover:text-white/70 transition-colors"><Youtube size={18} strokeWidth={1.5} /></a>
                     <a href="#" className="text-white hover:text-white/70 transition-colors flex items-center justify-center">
                       <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                       </svg>
                     </a>
                     <a href="#" className="text-white hover:text-white/70 transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
                   </div>
                </div>
              </div>

              {/* Footer Links (Very Bottom) */}
              <div className="px-8 lg:px-24 py-5 lg:py-6 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 tracking-wide font-medium">
                <div className="flex gap-6 mb-3 md:mb-0 w-full md:w-auto justify-between md:justify-start">
                  <a href="#" className="flex items-center gap-1 font-bold text-white hover:text-white/70 transition-colors">
                    Privacy Policy <ArrowUpRight size={10} strokeWidth={3} className="text-brand-yellow" />
                  </a>
                  <a href="#" className="flex items-center gap-1 font-bold text-white hover:text-white/70 transition-colors">
                    Terms of Service <ArrowUpRight size={10} strokeWidth={3} className="text-brand-yellow" />
                  </a>
                </div>
                <p className="w-full md:w-auto text-center md:text-right">© 2026 spectup® All rights reserved.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
