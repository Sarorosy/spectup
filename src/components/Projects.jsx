import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Investor Relations for PopMeals",
    description: "We ran an investor outreach mandate for PopMeals that generated 87+ VC meetings, expanding their investor pipeline and accelerating their fundraising conversations.",
    client: "PopMeals",
    industry: "FoodTech",
    stat1: { value: "$18M", label: "Raised in Series B" },
    stat2: { value: "106", label: "Investor Meetings Generated" },
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Sustainable Technology Spin-outs for GORD",
    description: "Positioning three green innovations as stand-alone businesses with investor-ready strategy and materials.",
    client: "GORD",
    industry: "Climate Tech",
    stat1: { value: "$5M", label: "Raised in total through various Funding Sources" },
    stat2: { value: "6", label: "Pitch Decks & Financial Models Produced" },
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "End-to-End Fundraising for Enhanced",
    description: "Building the fundraising engine behind one of Europe’s fastest-growing cybersecurity platforms.",
    client: "enhanced.io",
    industry: "Cybersecurity",
    stat1: { value: "56+", label: "Investor Calls Generated" },
    stat2: { value: "7", label: "Key Strategic Documents" },
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full bg-[#0a0a0a] text-white min-h-screen flex flex-col pt-16 md:pt-24 border-t border-white/10 font-sans">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col flex-1 h-full border-x border-white/10">

        {/* Top Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 shrink-0 border-b border-white/10">
          <div className="md:col-span-4 lg:col-span-3 p-6 md:p-8 lg:p-12 border-b md:border-b-0 md:border-r border-white/10">
            <span className="gold-text text-sm font-bold tracking-wide block">
              [04] Projects
            </span>
          </div>

          <div className="md:col-span-8 lg:col-span-9 p-6 md:p-8 lg:p-12 relative flex flex-col lg:flex-row justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight mb-8">
                Results from recent capital advisory mandates
              </h2>
              <div className="mb-6 opacity-60 text-sm font-medium">© 2022 - 2025</div>
              <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-xl">
                Below are snapshots of recent capital raising mandates we've led. They show how we help startups, enterprises, and funds secure growth capital from VCs, family offices, and institutional LPs.
              </p>
            </div>

            <div className="lg:absolute lg:right-12 lg:top-12 flex items-start">
              <button className="gold-text flex items-center gap-2 text-sm font-bold tracking-wide hover:opacity-70 transition-opacity">
                [13] All Capital Raising Projects <ArrowUpRight className="w-4 h-4 text-[#C1FF00]" />
              </button>
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 flex-1 relative bg-black min-h-[600px]">

          {/* Left Panel */}
          <div className="flex flex-col border-r border-white/10 relative ">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                <div className="flex-1 p-6 md:p-8 lg:p-12">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 gold-text">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-12 max-w-md">
                    {projects[currentIndex].description}
                  </p>

                  <div className="flex flex-col w-full border-t border-white/10">
                    <div className="grid grid-cols-2 py-4 border-b border-white/10">
                      <div className="flex items-center gap-3 text-sm text-white/60">
                        <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                        </div>
                        Client
                      </div>
                      <div className="text-sm font-medium">{projects[currentIndex].client}</div>
                    </div>
                    <div className="grid grid-cols-2 py-4 border-b border-white/10">
                      <div className="flex items-center gap-3 text-sm text-white/60">
                        <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                        </div>
                        Industry
                      </div>
                      <div className="text-sm font-medium">{projects[currentIndex].industry}</div>
                    </div>

                    <div className="grid grid-cols-2 py-8 border-b border-white/10 gap-8">
                      <div>
                        <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 whitespace-nowrap gold-text">{projects[currentIndex].stat1.value}</div>
                        <div className="text-xs text-white/50">{projects[currentIndex].stat1.label}</div>
                      </div>
                      <div>
                        <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 whitespace-nowrap gold-text">{projects[currentIndex].stat2.value}</div>
                        <div className="text-xs text-white/50">{projects[currentIndex].stat2.label}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8">
              <button className="gold-bg cursor-pointer  text-xs font-bold tracking-wider uppercase py-3 px-8 w-full">
                VIEW CASE STUDY
              </button>
            </div>
          </div>

          {/* Right Panel (Image & Controls) */}
          <div className="relative min-h-[400px] lg:h-full w-full overflow-hidden bg-[#111]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient overlay for better text/controls visibility */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

            {/* Navigation Controls */}
            <div className="absolute top-6 right-6 flex gap-2 z-20">
              <button
                onClick={handlePrev}
                className="w-10 h-10 bg-black/50 backdrop-blur-sm flex items-center justify-center neon-button group"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 bg-black/50 backdrop-blur-sm flex items-center justify-center neon-button group"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-20 items-center">
              {projects.map((_, idx) => (
                <div
                  key={idx}
                  className={`transition-all  ${idx === currentIndex ? 'w-2 h-2 glow-dot' : 'w-1.5 h-1.5 bg-white/30'}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
