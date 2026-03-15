import React from 'react';
import { ArrowUpRight, Zap, Globe } from 'lucide-react';
import three from '../assets/3.jpg';

const logoFiles = import.meta.glob('../assets/logos/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const logos = Object.values(logoFiles).map(mod => mod.default);

const WhyChooseUs = () => {
    // We double or triple the logos to ensure a seamless loop
    const marqueeLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

    return (
        <section className="relative w-full text-white bg-black pt-16 md:pt-24 border-t border-white/10 font-sans mt-30 z-10">
            <div className="relative w-full max-w-[1440px] mx-auto flex flex-col flex-1 h-full border-x border-white/10">

                {/* Top Header Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 shrink-0 border-b border-white/10">
                    <div className="md:col-span-4 lg:col-span-4 p-6 md:p-8 lg:p-12 border-b md:border-b-0 md:border-r border-white/10 flex items-start">
                        <span className="text-sm font-bold tracking-wide block text-white/90">
                            [03] Shine Investo's USPs
                        </span>
                    </div>

                    <div className="md:col-span-8 lg:col-span-8 p-6 md:p-8 lg:p-12">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl md:text-5xl lg:text-[56px] tracking-tight leading-[1.1] mb-6">
                                <span className="text-white/80 font-medium">Why choose Shine Investo as </span><span className="text-white font-bold">your<br />capital advisory partner?</span>
                            </h2>
                            <p className="text-sm md:text-base text-white/80 leading-relaxed font-semibold">
                                Because we're the best capital raising partner out there.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3 Main Blocks */}
                <div className="p-6 md:p-8 lg:p-12 pb-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[450px]">

                        {/* Left Block */}
                        <div className="border border-[#C1FF00]/50 shadow-[0_0_30px_rgba(193,255,0,0.15)] p-8 flex flex-col relative group bg-black hover:bg-[#050505] transition-all duration-500">
                            <div className="absolute top-6 right-6 w-8 h-8 bg-[#C1FF00] shadow-[0_0_15px_rgba(193,255,0,0.6)] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 cursor-pointer z-10 text-black">
                                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10" /></svg>
                            </div>

                            {/* Chart area */}
                            <div className="flex-1 mt-8 mb-4 border-b border-white/10 relative flex items-end gap-[4px] pb-5 min-h-[150px]">
                                {Array.from({ length: 32 }).map((_, i) => {
                                    // simple ascending trend with randomness
                                    const height = Math.min(100, Math.max(10, (i / 32) * 80 + (Math.random() * 20)));
                                    return (
                                        <div key={i} className="flex-1 bg-[#C1FF00]/50 shadow-[0_0_10px_rgba(193,255,0,0.3)] hover:bg-[#C1FF00] hover:shadow-[0_0_15px_rgba(193,255,0,0.8)] transition-all duration-300 cursor-pointer" style={{ height: `${height}%` }}></div>
                                    )
                                })}
                                <div className="absolute bottom-[-22px] left-0 right-0 flex justify-between text-[11px] text-white/40 font-semibold tracking-wider">
                                    <span>2021</span><span>2022</span><span>2023</span><span>2024</span><span>2025</span>
                                </div>
                            </div>

                            <div className="mt-8 relative z-10">
                                <div className="text-5xl md:text-[56px] font-bold tracking-tighter text-white mb-4 leading-none">$120M +</div>
                                <p className="text-[13px] text-white/60 leading-relaxed max-w-[280px]">
                                    Capital raised for clients through our fundraising consultant services
                                </p>
                            </div>
                        </div>

                        {/* Middle Block */}
                        <div className="flex flex-col gap-6 h-[500px] lg:h-auto">
                            <div className="border border-[#C1FF00]/50 shadow-[0_0_30px_rgba(193,255,0,0.15)] p-8 flex-1 flex flex-col justify-center relative overflow-hidden group bg-black hover:bg-[#050505] transition-all duration-500">
                                {/* Background arcs */}
                                <div className="absolute top-[-50%] right-[-10%] w-[150%] h-[150%] rounded-full border border-[#C1FF00]/40 shadow-[0_0_20px_rgba(193,255,0,0.2)] opacity-40 pointer-events-none group-hover:scale-110 transition-all duration-700"></div>
                                <div className="absolute top-[-40%] right-[-5%] w-[120%] h-[120%] rounded-full border border-[#C1FF00]/30 shadow-[0_0_15px_rgba(193,255,0,0.1)] opacity-40 pointer-events-none group-hover:scale-105 transition-all duration-700"></div>
                                <div className="absolute top-[-30%] right-[0%] w-[90%] h-[90%] rounded-full border border-[#C1FF00]/20 opacity-40 pointer-events-none transition-colors duration-700"></div>

                                <Zap className="absolute top-8 right-8 text-[#C1FF00] w-7 h-7 z-10 drop-shadow-[0_0_15px_rgba(193,255,0,0.8)] fill-[#C1FF00] group-hover:drop-shadow-[0_0_20px_rgba(193,255,0,1)] transition-all duration-500" />

                                <div className="relative z-10">
                                    <div className="text-[48px] font-bold tracking-tighter text-white mb-2 leading-none">3x</div>
                                    <p className="text-[13px] text-white/60 leading-relaxed max-w-[220px]">
                                        Clients who work with our capital advisory raise 3x faster
                                    </p>
                                </div>
                            </div>

                            <div className="border border-[#C1FF00]/50 shadow-[0_0_30px_rgba(193,255,0,0.15)] p-8 flex-1 flex flex-col justify-center relative overflow-hidden group bg-black hover:bg-[#050505] transition-all duration-500">
                                {/* Background arcs / Globe symbol */}
                                <div className="absolute bottom-[-60%] right-[-20%] w-[180%] h-[180%] rounded-full border border-[#C1FF00]/40 shadow-[0_0_20px_rgba(193,255,0,0.2)] opacity-40 pointer-events-none group-hover:rotate-12 transition-all duration-1000"></div>
                                <div className="absolute bottom-[-40%] right-[-10%] w-[120%] h-[120%] rounded-full border border-[#C1FF00]/30 shadow-[0_0_15px_rgba(193,255,0,0.1)] opacity-40 pointer-events-none transition-colors duration-700"></div>
                                <div className="absolute bottom-[-10%] right-[10%] w-[60%] h-[180%] border border-[#C1FF00]/30 opacity-40 pointer-events-none rounded-[100%] transition-colors duration-700"></div>
                                <div className="absolute bottom-[20%] right-[-20%] w-[180%] h-[60%] border border-[#C1FF00]/30 opacity-40 pointer-events-none rounded-[100%] transition-colors duration-700"></div>

                                <div className="relative z-10">
                                    <div className="text-[48px] font-bold tracking-tighter text-white mb-2 leading-none">400 +</div>
                                    <p className="text-[13px] text-white/60 leading-relaxed max-w-[260px]">
                                        Family Offices, Venture Capital Funds, LPs in our Global Network
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Block */}
                        <div className="min-h-[400px] border border-[#C1FF00]/50 shadow-[0_0_30px_rgba(193,255,0,0.15)] relative overflow-hidden group p-5 sm:p-6 md:p-8 flex flex-col justify-end bg-black transition-all duration-500">

                            <img
                                src={three}
                                alt="Happy Clients"
                                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>

                            {/* Top left badge */}
                            <div className="absolute top-5 left-5 sm:top-6 sm:left-6 md:top-8 md:left-8 flex items-center gap-2 z-10">
                                <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center pt-[1px] pl-[1px]">
                                    <img src='/spectup.svg' className='h-8' />
                                </div>

                                <span className="text-[#C1FF00] drop-shadow-[0_0_8px_rgba(193,255,0,0.5)] font-bold tracking-tight text-xs sm:text-sm transition-all duration-500">
                                    Shine Investo
                                </span>
                            </div>

                            {/* Top right rating */}
                            <div className="absolute top-5 right-5 sm:top-6 sm:right-6 md:top-8 md:right-8 text-right z-10 flex flex-col items-end">
                                <div className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-white mb-1 leading-none">
                                    4.7 / 5
                                </div>

                                <div className="flex gap-[2px] text-[#C1FF00]">
                                    {"★★★★★".split("").map((star, i) => (
                                        <span key={i} className="text-[9px] sm:text-[10px]">
                                            {star}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">

                                <div className="text-[36px] sm:text-[44px] md:text-[52px] font-bold tracking-tighter text-white mb-2 leading-none">
                                    92%
                                </div>

                                <p className="text-[12px] sm:text-[13px] text-white/80 leading-relaxed max-w-[220px] sm:max-w-[260px] mb-6 sm:mb-8 font-medium">
                                    Our clients are extremely happy with our capital raising services
                                </p>

                                <div className="flex flex-wrap gap-3 sm:gap-4 items-center">

                                    {/* Trustpilot */}
                                    <div className="flex items-center gap-[6px]">
                                        <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] bg-[#00b67a] flex items-center justify-center pt-[2px]">
                                            <span className="text-white text-[12px] sm:text-[14px] leading-none">★</span>
                                        </div>
                                        <span className="text-white font-bold text-[13px] sm:text-[14px] tracking-wide">
                                            Trustpilot
                                        </span>
                                    </div>

                                    {/* Clutch */}
                                    <div className="flex items-center gap-[6px]">
                                        <span className="text-white font-extrabold text-[14px] sm:text-[15px] tracking-tight">
                                            Clutch
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Marquee Block */}
                <div className="px-6 md:px-8 lg:px-12 pb-12 w-full">
                    <div className="border border-[#C1FF00]/50 shadow-[0_0_30px_rgba(193,255,0,0.15)] flex flex-col md:flex-row items-stretch w-full overflow-hidden bg-black group/marquee transition-all duration-500">
                        <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 shrink-0 z-20 flex flex-col justify-center min-w-[280px] bg-black">
                            <div className="text-[40px] font-bold text-white mb-1 tracking-tighter leading-none">80%</div>
                            <div className="text-[13px] text-white/50 leading-snug font-medium">
                                Clients landed meetings<br />with S-Tier investors
                            </div>
                        </div>

                        <div className="flex flex-1 overflow-hidden relative items-center py-6 md:py-0 min-h-[100px] w-full bg-black">
                            <div className="flex animate-marquee items-center gap-16 px-6 w-fit h-full">
                                {marqueeLogos.map((logo, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-center shrink-0 w-[100px]"
                                    >
                                        <img
                                            src={logo}
                                            alt={`Partner logo ${index}`}
                                            className="h-6 md:h-8 w-full object-contain grayscale opacity-60 group-hover/marquee:grayscale-0 group-hover/marquee:opacity-100 transition-all duration-700"
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Gradient Mask for fading effect on edges */}
                            <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-[black] to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-[black] to-transparent z-10 pointer-events-none"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
