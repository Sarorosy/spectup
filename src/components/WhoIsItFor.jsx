
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Silk from './Silk';

const targets = [
    {
        number: "1/3",
        title: "Startups",
        subtitle: "Growth-stage startups preparing Seed, Series A–C, or bridge rounds that need structured capital raising services, not ad-hoc outreach."
    },
    {
        number: "2/3",
        title: "Scale-Ups",
        subtitle: "Post-product-market-fit companies looking to professionalize capital raising and investor outreach so they can secure larger institutional checks."
    },
    {
        number: "3/3",
        title: "Enterprise & Funds",
        subtitle: "Enterprises and investment funds planning private placements or strategic raises that require specialist capital advisory and execution support."
    },
];

const WhoIsItFor = () => {

    const [active, setActive] = useState(null);

    const toggleCard = (idx) => {
        if (window.innerWidth < 768) {
            setActive(active === idx ? null : idx);
        }
    };

    return (
        <section className="bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden">

            <div className="max-w-[1440px] mx-auto relative z-10 px-5">

                {/* Section Header */}
                <div className="flex flex-col items-center mb-20">
                    <div className="flex items-center gap-2 mb-8 self-start">
                        <div className="w-4 h-4  flex items-center justify-center">
                            <img src="/spectup.svg" />
                        </div>
                        <span className="text-[10px] font-black tracking-[0.2em] uppercase">
                            Shine Investo
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-8xl font-bold tracking-tighter font-display text-center gold-text">
                        Who this is for
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">

                    {targets.map((target, idx) => {

                        const isActive = active === idx;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                onClick={() => toggleCard(idx)}
                                className={`relative group aspect-square p-6 md:p-10 flex flex-col overflow-hidden cursor-pointer border-white/10
                                ${idx !== 2 ? 'md:border-r' : ''}
                                border-b md:border-b-0`}
                            >

                                {/* Silk Background */}
                                <div className={`
                                    absolute inset-0 pointer-events-none overflow-hidden
                                    ${isActive ? "opacity-100" : "opacity-0"}
                                    md:opacity-0
                                    md:group-hover:opacity-100
                                    transition-opacity
                                    duration-500
                                `}>
                                    <Silk color='#bf953f' />
                                </div>

                                {/* Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent transition-opacity duration-500
                                ${isActive ? "opacity-100" : "opacity-50"}
                                md:opacity-50 md:group-hover:opacity-100`} />

                                {/* Grain */}
                                <div
                                    className={`absolute inset-0 transition-opacity duration-500 pointer-events-none
                                    ${isActive ? "opacity-[0.02]" : "opacity-0"}
                                    md:opacity-0 md:group-hover:opacity-[0.02]`}
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                                    }}
                                />

                                <div className="relative z-10 flex flex-col h-full">

                                    <span className="text-[10px] md:text-xs font-bold text-white/20 block mb-4 md:mb-6 tracking-widest ">
                                        {target.number}
                                    </span>

                                    <h3 className="text-4xl md:text-7xl font-black font-display leading-[0.9] tracking-tighter">
                                        {target.title}
                                    </h3>

                                    <div className="mt-auto flex justify-end">
                                        <Plus
                                            size={18}
                                            className="neon-text text-white/40 group-hover:text-white transition-colors"
                                        />
                                    </div>

                                </div>

                                {/* Subtitle Reveal */}
                                <div className={`
                                absolute inset-x-6 md:inset-x-10 top-1/2 -translate-y-1/2 transition-all duration-500 transform
                                ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                                md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0
                                pointer-events-none
                                `}>
                                    <p className="text-white/70 text-md md:text-base leading-relaxed max-w-[220px]">
                                        {target.subtitle}
                                    </p>
                                </div>

                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default WhoIsItFor;

