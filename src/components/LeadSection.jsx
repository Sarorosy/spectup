import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Star } from 'lucide-react';
import niclasImg from "../assets/thumbnail.png";

const words = ["lead", "innovate", "dominate"];

export default function LeadSection() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-black text-white py-10 md:py-20 overflow-hidden">

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">

        {/* Animated Heading */}
        <div className="mb-24">

          <div className="flex flex-col md:flex-row items-baseline gap-x-6 gap-y-0 mb-4">

            <h2 className="text-[8vw] md:text-[6vw] font-bold tracking-tighter leading-none font-display">
              We
            </h2>

            <div className="h-[8vw] md:h-[5vw] overflow-hidden flex items-center">

              <motion.span
                key={words[index]}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="gold-text text-[8vw] md:text-[6vw] font-bold tracking-tighter leading-none lowercase font-display"
              >
                {words[index]}
              </motion.span>

            </div>
          </div>

          <h3 className="text-[8vw] md:text-[6vw] font-bold tracking-tighter leading-[1.05] text-white/40 max-w-6xl font-display">
            Capital Raising: <br className="hidden lg:block" /> Advisory and Execution
          </h3>

        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-start">

          {/* VIDEO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative w-full overflow-hidden bg-black group rounded-sm border border-brand-yellow/40 neon-border"
          >

            {/* IMAGE */}
            <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">

              <img
                src={niclasImg}
                alt="Niclas Schloyna"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">

                <div className="relative flex items-center justify-center">

                  {/* Glow Rings */}
                  <div className="absolute w-32 h-32 rounded-full border border-brand-yellow/40 opacity-40 animate-ping" />
                  <div className="absolute w-40 h-40 rounded-full border border-brand-yellow/20 opacity-30" />

                  {/* Button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(234,255,0,0.25)]"
                  >
                    <Play className="fill-black text-black translate-x-0.5" size={28} />
                  </motion.div>

                </div>

              </div>

            </div>

            {/* BOTTOM PANEL */}
            <div className="flex items-center justify-between gap-6 px-8 py-6 bg-black border-t border-white/10">

              <div>
                <h4 className="text-2xl font-bold tracking-tight">
                  Watch our Video Now
                </h4>

                <p className="text-white/50 text-sm mt-1">
                  How we structure, run & close capital raises
                </p>
              </div>

              {/* STATUS BADGE */}
              <div className="flex items-center gap-3 bg-white/5 border border-brand-yellow/40 px-4 py-2 backdrop-blur-md rounded-sm shadow-[0_0_15px_rgba(234,255,0,0.2)]">

                <div className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse" />

                <span className="text-xs font-semibold">
                  Accepting new clients
                </span>

              </div>

            </div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-6 pt-4">

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >

              <p className="text-2xl text-white/60 leading-relaxed font-medium tracking-tight">
                Growth stalls when you can't reach the right investors. shine investo's capital raising services combine capital advisory, investor outreach, and deal support to help startups, funds, and corporates secure the capital they need.
              </p>

              <p className="text-2xl font-bold leading-snug tracking-tight">
                We simplify fundraising with focused processes and a network of{" "}
                <span className="underline hover:text-brand-yellow decoration-dotted hover:decoration-solid cursor-pointer decoration-brand-yellow/50 underline-offset-[12px]">
                  investors
                </span>{" "}
                who actually deploy capital.
              </p>

            </motion.div>

            {/* SOCIAL PROOF */}
            <div className="flex flex-col gap-5 py-3 border-t border-white/10 mt-4">

              <div className="flex flex-wrap items-center gap-10">

                <div className="flex -space-x-4">

                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-[3px] border-black bg-zinc-800 overflow-hidden shadow-xl">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 123}`}
                        alt="Partner"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}

                  <div className="w-10 h-10 rounded-full border-[3px] border-black bg-zinc-900 flex items-center justify-center text-[10px] font-black uppercase tracking-tighter shadow-xl">
                    You?
                  </div>

                </div>

                <div className="flex flex-col gap-2">

                  <div className="flex items-center gap-1.5">

                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="fill-brand-yellow text-brand-yellow" />
                    ))}

                    <span className="ml-3 font-black text-2xl tracking-tighter">
                      4.7/5
                    </span>

                  </div>

                  <p className="text-[11px] font-black uppercase tracking-[0.3em] text-white/30">
                    67+ Happy clients worldwide
                  </p>

                </div>

              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-between goldbtn px-5 py-3 rounded-sm font-semibold text-sm shadow-[0_0_15px_rgba(234,255,0,0.5)] hover:shadow-[0_0_30px_rgba(234,255,0,0.8)] hover:bg-brand-yellow/10 transition-all duration-300 w-full sm:w-fit"
              >

                <span>Submit a project</span>

                <ArrowRight size={22} className="ml-3 -rotate-45 group-hover:translate-x-1 transition-transform" />

              </motion.button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}