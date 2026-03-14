import React from 'react';

const FundraisingCategories = () => {
  return (
    <section className="relative w-full border-t border-b border-white/[0.08] bg-black my-10 mt-30">
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-2">
        
        {/* Startup Block */}
        <div className="group relative h-[350px] md:h-[450px] border-b md:border-b-0 md:border-r border-white/[0.08] p-8 md:p-16 flex flex-col justify-between overflow-hidden cursor-pointer bg-black hover:bg-[#050505] transition-colors duration-500">
          
          {/* Plasma bg */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0 overflow-hidden">
             {/* Base glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_rgba(234,255,0,0.1),_transparent_50%)] blur-[50px] animate-[spin_15s_linear_infinite]" />
             
             {/* Swirl lines simulating plasma */}
             <div className="absolute top-1/4 right-0 w-[90%] h-[90%] rounded-[40%] bg-[radial-gradient(ellipse_at_center,_rgba(234,255,0,0.08),_transparent_50%)] blur-[30px] mix-blend-screen group-hover:scale-110 transition-transform duration-1000 ease-out" />
             <div className="absolute bottom-1/4 left-1/4 w-[100%] h-[100%] rounded-[30%] bg-[radial-gradient(ellipse_at_center,_rgba(234,255,0,0.06),_transparent_60%)] blur-[40px] mix-blend-screen group-hover:scale-125 transition-transform duration-1000 ease-out" />
             
             {/* Rings to add edge to the plasma */}
             <div className="absolute top-[-30%] left-[-20%] w-[120%] h-[120%] rounded-full border-[1px] border-[#eaff00]/10 opacity-60 blur-[3px] animate-[spin_20s_linear_infinite]" />
             <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] rounded-full border-[2px] border-[#eaff00]/5 opacity-40 blur-[5px] animate-[spin_15s_linear_infinite_reverse]" />
          </div>

          <div className="relative z-10 max-w-[400px]">
            <h3 className="text-white text-[20px] md:text-[22px] font-semibold mb-3 tracking-tight">You're a startup or scale-up?</h3>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-relaxed font-light">
              Explore our fundraising consultant services for startups and scale-ups.
            </p>
          </div>

          <div className="relative z-10 flex items-end mt-auto origin-left">
             <div className="w-0 overflow-hidden opacity-0 group-hover:w-[46px] group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-end mb-[6px] md:mb-[8px] justify-start">
                 <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white shrink-0">
                    <path d="M6 6V15C6 16.1046 6.89543 17 8 17H18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter"/>
                    <path d="M14 13L18 17L14 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter"/>
                 </svg>
             </div>
             <h2 className="text-white text-[42px] md:text-[54px] leading-[1.05] font-semibold tracking-tight transform group-hover:translate-x-1 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] whitespace-nowrap">
               Fundraising<br />Consulting
             </h2>
          </div>
        </div>

        {/* Fund Block */}
        <div className="group relative h-[350px] md:h-[450px] p-8 md:p-16 flex flex-col justify-between overflow-hidden cursor-pointer bg-black hover:bg-[#050505] transition-colors duration-500">
          
          {/* Plasma bg */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0 overflow-hidden">
             {/* Base glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_rgba(234,255,0,0.1),_transparent_50%)] blur-[50px] animate-[spin_15s_linear_infinite]" />
             
             {/* Swirl lines simulating plasma */}
             <div className="absolute top-1/4 right-0 w-[90%] h-[90%] rounded-[40%] bg-[radial-gradient(ellipse_at_center,_rgba(234,255,0,0.08),_transparent_50%)] blur-[30px] mix-blend-screen group-hover:scale-110 transition-transform duration-1000 ease-out" />
             <div className="absolute bottom-1/4 left-1/4 w-[100%] h-[100%] rounded-[30%] bg-[radial-gradient(ellipse_at_center,_rgba(234,255,0,0.06),_transparent_60%)] blur-[40px] mix-blend-screen group-hover:scale-125 transition-transform duration-1000 ease-out" />
             
             {/* Rings to add edge to the plasma */}
             <div className="absolute top-[-30%] left-[-20%] w-[120%] h-[120%] rounded-full border-[1px] border-[#eaff00]/10 opacity-60 blur-[3px] animate-[spin_20s_linear_infinite]" />
             <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] rounded-full border-[2px] border-[#eaff00]/5 opacity-40 blur-[5px] animate-[spin_15s_linear_infinite_reverse]" />
          </div>

          <div className="relative z-10 max-w-[400px]">
            <h3 className="text-white text-[20px] md:text-[22px] font-semibold mb-3 tracking-tight">You're a fund or private company?</h3>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-relaxed font-light">
              Learn more about our private placement agent services for funds and enterprises.
            </p>
          </div>

          <div className="relative z-10 flex items-end mt-auto origin-left">
             <div className="w-0 overflow-hidden opacity-0 group-hover:w-[46px] group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-end mb-[6px] md:mb-[8px] justify-start">
                 <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white shrink-0">
                    <path d="M6 6V15C6 16.1046 6.89543 17 8 17H18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter"/>
                    <path d="M14 13L18 17L14 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter"/>
                 </svg>
             </div>
             <h2 className="text-white text-[42px] md:text-[54px] leading-[1.05] font-semibold tracking-tight transform group-hover:translate-x-1 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] whitespace-nowrap">
               Private<br />Placements
           </h2>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FundraisingCategories;
