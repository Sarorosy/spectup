import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        id: "01",
        title: "Capital Strategy",
        description: "We act as your capital advisory, clarifying how much to raise, from whom, and on what terms so the process follows a clear plan rather than guesswork.",
        link: null,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "Investor Readiness",
        description: "We create the core materials for your round: pitch deck, financial model, and key documents, so investors can quickly understand and compare your deal.",
        link: "Linked Services",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "Investor Outreach & Dealflow",
        description: "We run targeted investor outreach, combining our network with structured outbound so the right VCs, family offices, and LPs actually see your round.",
        link: "Linked Services",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "04",
        title: "Closing Support",
        description: "We stay involved throughout the mandate: preparing you for investor meetings, managing follow‑ups, and supporting you in negotiations until the deal is closed.",
        link: null,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop"
    }
];

const OurServices = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <section className="relative w-full bg-black text-white py-2 min-h-[80vh] flex flex-col justify-between overflow-hidden">
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col flex-1 h-full">
                
                {/* Full Width Screen Border */}
                <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-white/10 mb-12 md:mb-16"></div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 flex-1">
                    {/* Left Column */}
                    <div className="md:col-span-4 lg:col-span-5">
                        <span className="text-sm md:text-base font-bold text-white tracking-wide block">
                            [02] Our Services
                        </span>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-8 lg:col-span-7 flex flex-col pt-4 md:pt-0">
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl font-bold tracking-tighter leading-[0.95] font-display mb-8 text-white"
                        >
                            What we do through our<br className="hidden md:block" /> capital raising service
                        </motion.h2>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-[800px]"
                        >
                            One mandate covers both advice and execution.<br className="hidden lg:block" />
                            spectup helps you <strong className="text-white font-bold">define the raise</strong>, get <strong className="text-white font-bold">investor-ready</strong>,<br className="hidden lg:block" />
                            and run a <strong className="text-white font-bold">structured capital raising process</strong> from first<br className="hidden md:block" /> outreach to close.
                        </motion.p>
                    </div>
                </div>

                {/* Bottom Metadata row */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-32 border-b border-white/10 pb-4 text-[10px] md:text-xs font-bold text-white/50 tracking-wider">
                    <div className="md:col-span-2 hidden md:block">
                        <span>[id]</span>
                    </div>
                    <div className="md:col-span-2 lg:col-span-3 hidden md:block">
                        <span>[service]</span>
                    </div>
                    <div className="md:col-span-8 lg:col-span-7 hidden md:block">
                        <span>[What we do]</span>
                    </div>
                </div>

                {/* Services List */}
                <div className="flex flex-col w-full relative">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-16 border-b border-white/5 relative cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* ID */}
                            <div className="md:col-span-2 flex items-start">
                                <span className="text-xl md:text-2xl font-bold text-brand-yellow">
                                    {service.id}
                                </span>
                            </div>

                            {/* Title */}
                            <div className="md:col-span-2 lg:col-span-3">
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                                    {service.title}
                                </h3>
                                {service.link && (
                                    <div className="mt-8 hidden md:block">
                                        <button className="inline-flex items-center px-4 py-2 border border-white/20 rounded-full text-xs font-semibold text-white uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                                            {service.link}
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Description */}
                            <div className="md:col-span-8 lg:col-span-7 flex flex-col">
                                <p className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed max-w-[800px]">
                                    {service.description}
                                </p>
                                {service.link && (
                                    <div className="mt-6 block md:hidden">
                                        <button className="inline-flex items-center px-4 py-2 border border-white/20 rounded-full text-xs font-semibold text-white uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                                            {service.link}
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Hover Image Reveal Container */}
                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.div 
                                        className="absolute right-0 md:right-8 top-1/2 -translate-y-1/2 w-[18rem] h-[12rem] md:w-[20rem] md:h-[13rem] z-20 pointer-events-none hidden md:block"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {/* Yellow Background Slide */}
                                        <motion.div 
                                            className="absolute inset-0 bg-brand-yellow"
                                            initial={{ clipPath: "inset(0 100% 0 0)" }}
                                            animate={{ clipPath: "inset(0 30% 0 0)" }}
                                            exit={{ clipPath: "inset(0 100% 0 0)" }}
                                            transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }} 
                                        />
                                        
                                        {/* Image Container sliding over the yellow */}
                                        <motion.div
                                            className="absolute inset-0 right-3 overflow-hidden"
                                            initial={{ clipPath: "inset(0 100% 0 0)" }}
                                            animate={{ clipPath: "inset(0 0% 0 0)" }}
                                            exit={{ clipPath: "inset(0 100% 0 0)" }}
                                            transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
                                        >
                                            <motion.img 
                                                src={service.image} 
                                                alt={service.title}
                                                className="w-full h-full object-cover"
                                                initial={{ scale: 1.2 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 1.2 }}
                                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                                            />
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OurServices;
