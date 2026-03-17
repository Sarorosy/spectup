import { motion } from "framer-motion";
import { Smartphone, FileText, Handshake, Calendar, ChevronRight } from "lucide-react";
import heroFounder from "../assets/jugar-hero.png";
import Silk from "./Silk";

export default function Hero() {
    const services = [
        {
            icon: <Smartphone size={40} className="text-emerald-400" />,
            title: "App Development Strategy",
            desc: "Turn your ideas into a scalable MVP with our expert product roadmap.",
            gold: false
        },
        {
            icon: <FileText size={40} className="text-brand-yellow" />,
            title: "Investor Readiness",
            desc: "Turn meetings into clay that edrives, projections and investor realized.",
            gold: true
        },
        {
            icon: <Handshake size={40} className="text-brand-yellow" />,
            title: "Selective Co-Investment",
            desc: "Turn meetings into lasting capital, and investor partnering.",
            gold: true
        },
    ];

    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-[#040d0a] text-white flex flex-col">
            {/* Background Texture & Glow */}
            <div className="absolute inset-0 opacity-40">
                <Silk speed={2} scale={0.5} />
            </div>
            <div className="absolute inset-0 hero-gradient-overlay pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-20 flex flex-col gap-10">
                
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    
                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl">
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl lg:text-5xl font-bold leading-tight mb-8"
                        >
                            Turn Your App Idea <br />
                            <span className="text-white/90">Into a </span> 
                            <span className="gold-text">Fundable Startup</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/60 mb-10 max-w-xl leading-relaxed"
                        >
                            Strategy, development architecture, and investor readiness for ambitious founders.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col gap-4"
                        >
                            <button className="goldbtn w-fit">
                                Book Strategy Call
                                <Calendar size={20} />
                            </button>
                            <p className="text-sm text-white/40">
                                Limited strategy calls available each week.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 relative w-full max-w-sm lg:max-w-lg mx-auto lg:ml-auto">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="relative z-10 w-full"
                        >
                            <img 
                                src={heroFounder} 
                                alt="Startup Expert" 
                                className="w-full h-auto  object-cover rounded-2xl contrast-110 brightness-105 transition-all duration-700"
                                style={{
                                    maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                                    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
                                }}
                            />
                            
                            {/* Decorative Floating Elements can be added here if needed */}
                        </motion.div>
                        
                        {/* Background Glow for Image */}
                        <div className="absolute -inset-10 bg-emerald-500/10 blur-[100px] rounded-full" />
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px glow-line-horizontal" />

                {/* Bottom Section - Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 + (index * 0.2) }}
                            className={`glow-card glow-card-gold'}`}
                        >
                            <div className={`icon-box icon-box-gold'}`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {service.title}
                            </h3>
                            <p className="text-white/50 leading-relaxed text-sm">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Subtle Floating Label at the bottom if needed */}
            <div className="absolute  bottom-2 left-[50%] translate-x-[-50%] opacity-10 pointer-events-none">
                <h2 className="text-6xl font-black uppercase tracking-tighter">Growth</h2>
            </div>
        </section>
    );
}
