import React from 'react';
import Silk from './Silk';

const FundraisingCategories = () => {
  return (
    <section className="relative w-full border-t border-b border-white/[0.08] bg-black my-10 mt-30">
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-2">

        {/* Startup Block */}
        <div className=" group relative h-[350px] md:h-[450px] border-b md:border-b-0 md:border-r border-[#bf953f] p-8 md:p-16 flex flex-col justify-between overflow-hidden cursor-pointer bg-black hover:bg-[#050505] transition-all duration-500 hover:border-[#eaff00]/50 hover:shadow-[0_0_30px_rgba(234,255,0,0.15)] z-0 hover:z-10">

          <div className={`
                                    absolute inset-0 pointer-events-none overflow-hidden
                                    opacity-100
                                    md:opacity-0
                                    md:group-hover:opacity-100
                                    transition-opacity
                                    duration-500
                                `}>
            <Silk color='#bf953f' />
          </div>

          <div className="relative z-10 max-w-[400px]">
            <h3 className="text-white text-[20px] md:text-[22px] font-semibold mb-3 tracking-tight">You're a startup or scale-up?</h3>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-relaxed font-light">
              Explore our fundraising consultant services for startups and scale-ups.
            </p>
          </div>

          <div className="relative z-10 flex items-end mt-auto origin-left">
            <div className="w-0 overflow-hidden opacity-0 group-hover:w-[46px] group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-end mb-[6px] md:mb-[8px] justify-start">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white rounded p-1 text-white shrink-0">
                <path d="M6 6V15C6 16.1046 6.89543 17 8 17H18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />
                <path d="M14 13L18 17L14 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />
              </svg>
            </div>
            <h2 className="text-white group-hover:text-white  text-[42px] md:text-[54px] leading-[1.05] font-semibold tracking-tight transform group-hover:translate-x-1 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] whitespace-nowrap">
              Fundraising<br />Consulting
            </h2>
          </div>
        </div>

        {/* Fund Block */}
        <div className=" group relative h-[350px] md:h-[450px] border-t md:border-t-0 p-8 md:p-16 flex flex-col justify-between overflow-hidden cursor-pointer bg-black hover:bg-[#050505] transition-all duration-500 border border-transparent hover:border-[#eaff00]/50 hover:shadow-[0_0_30px_rgba(234,255,0,0.15)] z-0 hover:z-10">

          <div className={`
                                    absolute inset-0 pointer-events-none overflow-hidden
                                    opacity-100
                                    md:opacity-0
                                    md:group-hover:opacity-100
                                    transition-opacity
                                    duration-500
                                `}>
            <Silk color='#bf953f' />
          </div>

          <div className="relative z-10 max-w-[400px]">
            <h3 className="text-white text-[20px] md:text-[22px] font-semibold mb-3 tracking-tight">You're a fund or private company?</h3>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-relaxed font-light">
              Learn more about our private placement agent services for funds and enterprises.
            </p>
          </div>

          <div className="relative z-10 flex items-end mt-auto origin-left">
            <div className="w-0 overflow-hidden opacity-0 group-hover:w-[46px] group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-end mb-[6px] md:mb-[8px] justify-start">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white  rounded p-1  text-white shrink-0">
                <path d="M6 6V15C6 16.1046 6.89543 17 8 17H18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />
                <path d="M14 13L18 17L14 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />
              </svg>
            </div>
            <h2 className="text-white group-hover:text-white text-[42px] md:text-[54px] leading-[1.05] font-semibold tracking-tight transform group-hover:translate-x-1 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] whitespace-nowrap">
              Private<br />Placements
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FundraisingCategories;
