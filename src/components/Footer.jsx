import React from "react";
import { ChevronUp, Plus, ArrowUpRight, Linkedin, Youtube, Instagram } from "lucide-react";
import footerBg from "../assets/footer.webp";

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[90vh] bg-black text-white pt-12 pb-6 overflow-hidden flex flex-col justify-between">

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-40 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>

      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>

      {/* Massive Background Text */}
      <div className="absolute md:bottom-6 bottom-40 left-1/2 -translate-x-1/2 w-full max-w-[1440px] z-[5] pointer-events-none select-none flex flex-col px-4 sm:px-6 md:px-8 overflow-hidden">
        <h1 className="text-[12vw] sm:text-[20vw] lg:text-[13.5vw] font-black leading-[0.75] text-[#B8B8B8]/70 tracking-tighter uppercase">
          CAPITAL
        </h1>
        <h1 className="text-[12vw] sm:text-[20vw] lg:text-[13.5vw] font-black leading-[0.75] text-[#B8B8B8]/70 tracking-tighter uppercase text-right">
          ACCESS
        </h1>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col flex-1">

        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/spectup.svg" className="h-7 sm:h-8" />
            <span className="text-[20px] sm:text-[22px] font-bold tracking-tight">
              Shine Investo
            </span>
          </div>

          {/* Location */}
          <div className="text-[12px] sm:text-[13px] text-white/70 font-medium">
            Based in <span className="text-white font-bold">Munich (DE)</span> 08:34 AM
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-2 w-full sm:w-auto">
            <span className="text-[12px] sm:text-[13px] text-white/70 font-medium">
              Subscribe to our newsletter.
            </span>

            <div className="flex w-full sm:w-auto">
              <input
                type="email"
                placeholder="Email"
                className="bg-black/40 backdrop-blur-sm border border-white/20 px-4 py-2.5 text-sm w-full sm:w-64 md:w-72 outline-none focus:border-brand-yellow transition-colors placeholder:text-white/40"
              />
              <button className="bg-black/40 backdrop-blur-sm border border-l-0 border-white/20 px-4 py-2.5 hover:bg-white/10 transition-colors flex items-center justify-center">
                <Plus size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Content */}
        <div className="flex flex-col lg:flex-row justify-between w-full mt-12 md:mt-20 gap-12 lg:gap-16">

          {/* Left */}
          <div className="max-w-xl">

            <div className="group inline-flex items-center gap-3 cursor-pointer border-b border-white/30 pb-3 mb-6 hover:border-brand-yellow transition-colors w-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tighter break-all">
                hi@shineinvesto.com
              </h2>

              <Plus
                className="text-white group-hover:text-brand-yellow transition-transform duration-300 transform group-hover:rotate-90 mt-1"
                size={26}
                strokeWidth={2.5}
              />
            </div>

            <p className="text-white/80 text-[14px] sm:text-[15px] leading-relaxed font-medium max-w-[460px]">
              <span className="text-white font-bold">Shine Investo</span> is a capital advisory
              firm that helps startups, private companies and funds design,
              structure, and execute professional equity, debt, and fundraises.
            </p>
          </div>

          {/* Right Links */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 text-[14px] sm:text-[15px] font-bold">

            <div className="flex flex-col gap-4 sm:gap-5">
              <a href="#" className="hover:text-brand-yellow transition-colors">
                Fundraising Consultant
              </a>
              <a href="#" className="hover:text-brand-yellow transition-colors">
                Private Placement Agent
              </a>
              <a href="#" className="hover:text-brand-yellow transition-colors">
                Leads Gen Agency
              </a>
            </div>

            <div className="flex flex-col gap-4 sm:gap-5">
              <a href="#" className="hover:text-brand-yellow transition-colors">
                Case Studies
              </a>
              <a href="#" className="hover:text-brand-yellow transition-colors">
                About Us
              </a>
              <a href="#" className="hover:text-brand-yellow transition-colors">
                Resource Hub
              </a>
            </div>

          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1 min-h-[120px] md:min-h-[200px]"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-auto">

          <div className="flex gap-6 sm:gap-8 text-[12px] sm:text-[13px] font-bold flex-wrap">
            <a href="#" className="flex items-center gap-[4px] hover:text-white/70 transition-colors">
              Legal Notice
              <ArrowUpRight size={14} className="text-brand-yellow" strokeWidth={3} />
            </a>

            <a href="#" className="flex items-center gap-[4px] hover:text-white/70 transition-colors">
              Privacy Policy
              <ArrowUpRight size={14} className="text-brand-yellow" strokeWidth={3} />
            </a>
          </div>

          <div className="flex gap-5">
            <a href="#" className="hover:text-brand-yellow transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-brand-yellow transition-colors"><Youtube size={20} /></a>

            <a href="#" className="hover:text-brand-yellow transition-colors flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a href="#" className="hover:text-brand-yellow transition-colors"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-[10px] text-white/40 mt-6 max-w-5xl">
          © 2026 shine investo. shine investo is not registered as a broker-dealer;
          shine investo's U.S.-related activities are conducted under SEC Rule
          15a-6 through a chaperoning arrangement with a U.S. registered
          broker-dealer that is a FINRA and SIPC member.
        </div>

      </div>
    </footer>
  );
}