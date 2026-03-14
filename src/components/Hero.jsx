import { motion } from "framer-motion";
import { DollarSign, Building2, Link as LinkIcon, Linkedin, Calendar, ArrowUpRight, ChevronUp } from "lucide-react";
import heroVideo from "../assets/herobg.mp4";
import niclasImg from "../assets/niclas.png";

export default function Hero() {
    const services = [
        {
            icon: <DollarSign size={20} className="text-white" />,
            title: "Raise capital",
            desc: "Secure the right lead and full round",
        },
        {
            icon: <Building2 size={20} className="text-white" />,
            title: "Investor relations",
            desc: "Turn meetings into lasting capital",
        },
        {
            icon: <LinkIcon size={20} className="text-white" />,
            title: "End-to-end",
            desc: "From strategy to close, covered",
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-black text-white">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover opacity-60"
            >
                <source src={heroVideo} type="video/mp4" />
            </video>



            {/* Main Content */}
            <div className="relative z-10 h-full w-full max-w-[1440px] mx-auto px-6 md:px-8 pt-32 pb-6 flex flex-col justify-between">
                <div className="flex flex-col lg:flex-row gap-8 justify-between items-start">
                    {/* Left Side: Headline & Services */}
                    <div className="max-w-4xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-[8vh] font-bold leading-[1.1] tracking-tight mb-16 hero-text-shadow font-display"
                        >
                            Capital advisory and capital raising services for growth-stage startups, enterprises, and funds
                        </motion.h1>

                        <div className="flex flex-col md:flex-row gap-12 md:gap-0">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    className={`flex-1 flex flex-col gap-4 group ${index !== services.length - 1 ? "md:border-r md:border-white/50 md:pr-12" : ""} ${index !== 0 ? "md:pl-12" : ""}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 border border-white/20 rounded-md group-hover:bg-white/10 transition-colors">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-lg font-bold tracking-tight">{service.title}</h3>
                                    </div>
                                    <p className="text-white/60 text-sm leading-relaxed max-w-[200px]">
                                        {service.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-[250px] overflow-hidden rounded-sm glass-card"
                    >
                        {/* Profile Image Area */}
                        <div className="relative aspect-[5/5] w-full overflow-hidden group">
                            <img
                                src={niclasImg}
                                alt="Niclas Schloyna"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-4 right-4 bg-black/40 p-2 backdrop-blur-md rounded-sm border border-white/10 cursor-pointer hover:bg-black/60 transition-colors">
                                <Linkedin size={18} />
                            </div>
                            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 px-3 py-1.5 backdrop-blur-md rounded-sm border border-white/10">
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <div key={i} className={`w-0.5 h-3 ${i < 5 ? 'bg-brand-yellow' : 'bg-white/30'}`}></div>
                                    ))}
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-wider">1 slot open <span className="opacity-40 ml-1">Mar'25</span></span>
                            </div>
                        </div>

                        {/* Profile Info */}
                        <div className="p-0 bg-[#0a0a0a]">
                            <h4 className="text-xl font-bold mb-1 text-center py-1 ">Niclas Schloyna</h4>
                            <p className=" text-center py-1 text-white/50 text-sm font-medium mb-1 uppercase tracking-wider">Managing Partner</p>

                            <div className="px-2 flex items-center justify-between py-2 border-y border-white/5 mb-2">
                                <p className="text-sm font-bold tracking-tight">
                                    $120M Raised <span className="text-white/40 font-normal">for Clients</span>
                                </p>
                                <ArrowUpRight size={16} className="text-white/40" />
                            </div>

                            <button className="w-full bg-white text-black py-4 flex items-center justify-between px-6 font-bold hover:bg-brand-yellow transition-colors group">
                                <span>Request Call</span>
                                <Calendar size={18} className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Bottom Left Icon - Contained within border bounds */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-[1440px] px-8 pointer-events-none z-20">
                <div className="bg-brand-yellow p-3 rounded-sm shadow-2xl cursor-pointer hover:scale-110 transition-transform w-fit pointer-events-auto">
                    <ChevronUp className="text-black stroke-[3]" size={20} />
                </div>
            </div>
            <div className="relative w-full mx-auto overflow-hidden pointer-events-none select-none">
                <h2
                    className="text-[10vw] text-center font-black leading-none tracking-tight whitespace-nowrap text-transparent"
                    style={{
                        // WebkitTextStroke: "2px rgba(255,255,255,0.15)",
                        background:
                            "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.12))",
                        WebkitBackgroundClip: "text",
                        opacity: 0.9,
                    }}
                >
                    CAPITAL ACCESS
                </h2>
            </div>
        </section>
    );
}
