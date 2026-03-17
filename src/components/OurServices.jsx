import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PieChart, ClipboardCheck, Users, Handshake } from 'lucide-react';
import Silk from './Silk';

const services = [
    {
        id: "01",
        title: "Capital Strategy",
        description: "We act as your capital advisory, clarifying how much to raise, from whom, and on what terms so the process follows a clear plan rather than guesswork.",
        icon: <PieChart size={24} />,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop",
        color: "#10ff9c",
        shadow: "rgba(16, 255, 156, 0.3)"
    },
    {
        id: "02",
        title: "Investor Readiness",
        description: "We create the core materials for your round: pitch deck, financial model, and key documents, so investors can quickly understand and compare your deal.",
        icon: <ClipboardCheck size={24} />,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
        color: "#10ff9c",
        shadow: "rgba(16, 255, 156, 0.3)"
    },
    {
        id: "03",
        title: "Investor Outreach & Dealflow",
        description: "We run targeted investor outreach, combining our network with structured outbound so the right VCs, family offices, and LPs actually see your round.",
        icon: <Users size={24} />,
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop",
        color: "#10ff9c",
        shadow: "rgba(16, 255, 156, 0.3)"
    },
    {
        id: "04",
        title: "Closing Support",
        description: "We stay involved throughout the mandate: preparing you for investor meetings, managing follow‑ups, and supporting you in negotiations until the deal is closed.",
        icon: <Handshake size={24} />,
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=600&auto=format&fit=crop",
        color: "#10ff9c",
        shadow: "rgba(16, 255, 156, 0.3)"
    }
];

const OurServices = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="relative w-full bg-black text-white py-24 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <Silk color="#10ff9c" speed={2} />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left"
                >
                    <span className="text-[#10ff9c] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                        Our Expertise
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        What we do through our<br className="hidden md:block" /> capital raising service
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl">
                        One mandate covers both advice and execution. Shine Investo helps you define the raise, get investor-ready, and run a structured process.
                    </p>
                </motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Central Tracker Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block" />
                
                {/* Active Glowing Line */}
                <motion.div 
                    className="absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#10ff9c] to-[#10ff9c] -translate-x-1/2 z-10 hidden md:block"
                    style={{ height: lineHeight, boxShadow: "0 0 15px rgba(16, 255, 156, 0.3)" }}
                />

                <div className="space-y-24 md:space-y-0">
                    {services.map((service, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={service.id} className="relative md:flex md:items-center md:justify-between py-12">
                                {/* Timeline Node */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                                    <motion.div 
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                        viewport={{ once: true }}
                                        style={{ backgroundColor: service.color, boxShadow: `0 0 15px ${service.color}` }}
                                        className="w-5 h-5 rounded-full border-4 border-black box-content" 
                                    />
                                </div>

                                {/* Content Layout */}
                                <div className="flex flex-col md:flex-row w-full items-center">
                                    {/* Left Side: Card or Image */}
                                    <div className={`w-full md:w-[45%] ${isEven ? 'order-1' : 'md:order-3'}`}>
                                        <ServiceCard service={service} side={isEven ? 'left' : 'right'} />
                                    </div>

                                    {/* Middle Spacer for Timeline */}
                                    <div className="hidden md:block w-[10%] order-2" />

                                    {/* Right Side: Image or Card */}
                                    <div className={`w-full md:w-[45%] mt-8 md:mt-0 ${isEven ? 'md:order-3' : 'order-1'}`}>
                                        <ServiceImage src={service.image} alt={service.title} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ service, side }) => (
    <motion.div
        initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative group p-8 rounded-3xl bg-white/[0.03] border border-white/10 transition-all duration-500 overflow-hidden"
        style={{ '--hover-color': service.color }}
    >
        {/* Hover Border Effect */}
        <div 
            className="absolute inset-0 border border-transparent group-hover:border-[var(--hover-color)] transition-colors duration-500 rounded-3xl opacity-30 pointer-events-none" 
        />

        {/* Background Number */}
        <div className="absolute top-4 right-8 text-8xl font-bold text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.05] transition-colors duration-500">
            {service.id}
        </div>

        {/* Icon Box */}
        <div 
            className="inline-flex p-3 rounded-xl text-white mb-6 gold-bg"
            // style={{ 
            //     background: `linear-gradient(135deg, ${service.color}, #000)`,
            //     boxShadow: `0 8px 20px ${service.shadow}`
            // }}
        >
            {service.icon}
        </div>

        <h3 
            className="text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300"
            style={{ color: 'white' }}
        >
            <span className="gold-text transition-colors duration-300">
                {service.title}
            </span>
        </h3>
        
        <p className="text-white/60 leading-relaxed text-lg">
            {service.description}
        </p>

        {/* Subtle Bottom Accent Glow */}
        <div 
            className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
        />
    </motion.div>
);

const ServiceImage = ({ src, alt }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative aspect-[16/10] rounded-3xl overflow-hidden group shadow-2xl"
    >
        <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
    </motion.div>
);

export default OurServices;

