import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const Counter = ({ from, to }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const [count, setCount] = useState(from);

    useEffect(() => {
        if (inView) {
            const controls = animate(from, to, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate(value) {
                    setCount(Math.floor(value));
                }
            });
            return () => controls.stop();
        }
    }, [from, to, inView]);

    return <span ref={ref}>{count}</span>;
};

// Import all logos from assets/logos directory
const logoFiles = import.meta.glob('../assets/logos/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const logos = Object.values(logoFiles).map(mod => mod.default);

const CapitalAdvisoryNetwork = () => {
    // We need 12 logos for the layout (4 top, 2 middle-left, 2 middle-right, 4 bottom)
    // We'll just slice the available logos or repeat if needed
    const displayLogos = [...logos, ...logos].slice(0, 12);

    return (
        <section className="relative w-full bg-black text-white py-24 flex flex-col justify-between overflow-hidden">
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col flex-1 h-full">
                
                {/* Full Width Screen Border */}
                <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-white/10 mb-12 md:mb-16"></div>

                {/* Header section */}
                <div className="flex flex-col md:flex-row mb-16 gap-4 md:gap-8">
                    <div className="md:w-1/4">
                        <span className="text-xs md:text-sm font-semibold text-white/50 tracking-wider">
                            &copy; 2022 - 2025
                        </span>
                    </div>
                    <div className="md:w-3/4 max-w-3xl">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-white leading-tight">
                            Our Capital Advisory Network
                        </h2>
                        <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
                            We're more than networked, <span className="font-bold text-white">we're embedded.</span><br className="hidden md:block" />
                            Our business capital raising services connect you with family offices, venture capital funds, pension funds, and institutional LPs who actually make investment decisions.
                        </p>
                    </div>
                </div>

                {/* Grid Network */}
                <div className="w-full bg-white/10 p-[1px] grid grid-cols-2 lg:grid-cols-4 gap-[1px]">
                    
                    {/* Row 1: 4 Logo cells */}
                    {[0, 1, 2, 3].map(i => (
                        <div key={`logo-r1-${i}`} className="bg-black aspect-[2/1] md:aspect-auto md:h-40 flex items-center justify-center p-8 overflow-hidden group">
                            <img src={displayLogos[i]} alt={`Network Logo ${i}`} className="max-h-10 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                        </div>
                    ))}

                    {/* Row 2: 1 Logo, Center Box (spans 2x2), 1 Logo */}
                    <div className="bg-black aspect-[2/1] md:aspect-auto md:h-40 flex items-center justify-center p-8 overflow-hidden group">
                        <img src={displayLogos[4]} alt="Network Logo 4" className="max-h-10 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>

                    <div className="bg-black col-span-2 row-span-2 relative group overflow-hidden flex flex-col items-center justify-center p-8">
                        <div className="absolute inset-0 opacity-100 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 via-black to-brand-yellow/5 z-0 mix-blend-screen" />
                            {/* Plasma blur effect */}
                            <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] animate-[spin_15s_linear_infinite] origin-center opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-yellow rounded-full blur-[120px] mix-blend-screen opacity-20" />
                                <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-brand-yellow rounded-full blur-[100px] mix-blend-screen opacity-30" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <motion.div 
                                className="w-16 h-16 md:w-20 md:h-20 bg-brand-yellow rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(226,249,11,0.3)] group-hover:shadow-[0_0_50px_rgba(226,249,11,0.5)] transition-shadow duration-500 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 15l-6-6-6 6"/>
                                </svg>
                            </motion.div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                                +<Counter from={1} to={400} /> Other VCs, LPs, Family Offices
                            </h3>
                            <button className="bg-white text-black px-6 py-3 rounded text-sm font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors">
                                You're Investor? Join now
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="rotate-45">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="bg-black aspect-[2/1] md:aspect-auto md:h-40 flex items-center justify-center p-8 overflow-hidden group">
                        <img src={displayLogos[5]} alt="Network Logo 5" className="max-h-10 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>

                    {/* Row 3: 2 Logos (fits exactly outside the center box spanning 2 rows) */}
                    <div className="bg-black aspect-[2/1] md:aspect-auto md:h-40 flex items-center justify-center p-8 overflow-hidden group">
                        <img src={displayLogos[6]} alt="Network Logo 6" className="max-h-10 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>
                    <div className="bg-black aspect-[2/1] md:aspect-auto md:h-40 flex items-center justify-center p-8 overflow-hidden group">
                        <img src={displayLogos[7]} alt="Network Logo 7" className="max-h-10 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>

                    {/* Row 4: 4 Logo cells (optional, actually 3 rows in image seems to be standard for side column, but Ontario is 4th row? 
                        Wait, in original analysis I found 4 rows. 
                        Let's verify how many logos. 12 + 1 center = 13 items. Total normal slots = 16. Center = 4 slots. Total = 12 logos + center. YES!
                    */}
                    {[8, 9, 10, 11].map(i => (
                        <div key={`logo-r4-${i}`} className="bg-black aspect-[2/1] md:aspect-auto md:h-40 flex items-center justify-center p-8 overflow-hidden group">
                            <img src={displayLogos[i]} alt={`Network Logo ${i}`} className="max-h-10 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default CapitalAdvisoryNetwork;
