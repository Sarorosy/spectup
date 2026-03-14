import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import one from '../assets/1.webp';
import two from '../assets/2.png';
import three from '../assets/3.jpg';


const testimonials = [
  {
    quote: "The collaboration with spectup on our Series D was seamless. Niclas's team listened closely, sharpened our story, and delivered materials that set us apart in the market, contributing to a $40M raise and positioning us well for the next round.",
    author: "Tim Sovay",
    role: "Chief BD & Partnerships Officer",
    company: "CreatorIQ",
    image: one,
    stats: [
      {
        logo: (
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M16.5 16.5L20 20"/>
            </svg>
            <span className="font-bold text-base tracking-tight text-white/90">CreatorIQ</span>
          </div>
        ),
        value: "$40M",
        label: "Raised in their Series D"
      },
      {
        logo: (
          <div className="mb-6 flex items-center h-6">
            <span className="font-black text-sm uppercase tracking-tighter text-white/50 leading-tight block">VOTE<br/><span className="text-white/30">CLASH</span></span>
          </div>
        ),
        value: "$2.5M",
        label: "Seed Round"
      },
      {
        logo: (
          <div className="mb-6 flex items-center h-6">
            <span className="font-serif italic text-2xl text-white/50 leading-none">Pop</span>
          </div>
        ),
        value: "87+",
        label: "VC Meetings Generated"
      }
    ]
  },
  {
    quote: "With spectup’s support, we clarified our narrative, built investor‑ready materials, and accessed top‑tier, highly selective funds. One of those investors led our $2.5M seed round.",
    author: "Founder",
    role: "CEO",
    company: "VOTECLASH",
    image: two,
    stats: [
      {
        logo: (
          <div className="mb-6 flex items-center h-6">
            <span className="font-black text-sm uppercase tracking-tighter text-white/90 leading-tight block">VOTE<br/><span className="text-white/70">CLASH</span></span>
          </div>
        ),
        value: "$2.5M",
        label: "Seed Round"
      },
      {
        logo: (
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-6 h-6 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M16.5 16.5L20 20"/>
            </svg>
            <span className="font-bold text-base tracking-tight text-white/50">CreatorIQ</span>
          </div>
        ),
        value: "$40M",
        label: "Raised in their Series D"
      },
      {
        logo: (
          <div className="mb-6 flex items-center h-6">
            <span className="font-serif italic text-2xl text-white/50 leading-none">Pop</span>
          </div>
        ),
        value: "87+",
        label: "VC Meetings Generated"
      }
    ]
  },
  {
    quote: "Spectup made our fundraising process far more efficient and connected us with investors we would never have reached alone. The outreach generated 87+ VC meetings and saved me countless hours of unqualified calls.",
    author: "Leadership Team",
    role: "Founders",
    company: "Pop",
    image: three,
    stats: [
      {
        logo: (
          <div className="mb-6 flex items-center h-6">
            <span className="font-serif italic text-2xl text-white/90 leading-none">Pop</span>
          </div>
        ),
        value: "87+",
        label: "VC Meetings Generated"
      },
      {
        logo: (
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-6 h-6 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M16.5 16.5L20 20"/>
            </svg>
            <span className="font-bold text-base tracking-tight text-white/50">CreatorIQ</span>
          </div>
        ),
        value: "$40M",
        label: "Raised in their Series D"
      },
      {
        logo: (
          <div className="mb-6 flex items-center h-6">
            <span className="font-black text-sm uppercase tracking-tighter text-white/50 leading-tight block">VOTE<br/><span className="text-white/30">CLASH</span></span>
          </div>
        ),
        value: "$2.5M",
        label: "Seed Round"
      }
    ]
  }
];

const extraCardsData = [
  {
    logo: (
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22h20L12 2zm0 3.8l6.2 12.2H5.8L12 5.8z"/>
        </svg>
        <span className="font-bold text-white tracking-tight">enhanced.io</span>
      </div>
    ),
    quote: "spectup has been a genuine asset to our fundraising journey. Their support generated 56+ investor calls and 7 warm intros, and I'd recommend their capital advisory to any founder or leadership team looking for expert guidance.",
    stats: [
      { value: "56+", label: "Investor Calls Generated" },
      { value: "7", label: "Warm Intros Provided" }
    ],
    author: "Kristian Wright",
    role: "Chief Executive Officer",
    company: "enhanced.io",
    image: one
  },
  {
    logo: (
      <div className="flex items-center gap-2">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <span className="font-bold tracking-wider text-white">LANE HEALTH</span>
      </div>
    ),
    quote: "I was very pleased with both the quantity and quality of meetings you set up. With 30 investor meetings and 13 warm introductions, I'm confident that if our situation had been stronger, we would have completed a successful raise.",
    stats: [
      { value: "30", label: "Investor Meetings Scheduled" },
      { value: "13", label: "Warm Introductions Provided" }
    ],
    author: "Brad Gambill",
    role: "CEO",
    company: "LaneHealth",
    image: two
  },
  {
    logo: (
      <div className="flex flex-col">
        <span className="font-black text-xl italic tracking-tighter text-white leading-none">EVENCO</span>
        <span className="text-[0.5rem] tracking-[0.2em] text-white/80 uppercase ml-1">International</span>
      </div>
    ),
    quote: "Niclas and his team built our funding deck alongside us, making sure the platform was represented clearly and concisely. They delivered 19 high-quality slides backed by 31+ hours of market research. Quick, efficient, and on point.",
    stats: [
      { value: "19", label: "High-Quality Slides Created" },
      { value: "31+", label: "Hours Spend on Market Research" }
    ],
    author: "Alvaro Salazar",
    role: "Senior Product Manager",
    company: "Evenco",
    image: three
  }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
    <section className="relative w-full text-white min-h-screen flex flex-col pt-16 md:pt-24 border-t border-white/10 font-sans">
      <div className="relative  w-full max-w-[1440px] mx-auto flex flex-col flex-1 h-full border-x border-white/10">

        {/* Top Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 shrink-0 border-b border-white/10">
          <div className="md:col-span-4 lg:col-span-4 p-6 md:p-8 lg:p-12 border-b md:border-b-0 md:border-r border-white/10">
            <span className="text-sm font-bold tracking-wide block">
              [05] Testimonials
            </span>
          </div>

          <div className="md:col-span-8 lg:col-span-8 p-6 md:p-8 lg:p-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight mb-6">
                What founders and leaders say about working with spectup
              </h2>
              <p className="text-sm md:text-base text-[#C1FF00]/70 leading-relaxed max-w-lg">
                <span className="text-white/50">These people worked with spectup on their capital raising projects. Their words and results show what our approach can deliver.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col"
              >
                  {/* Image & Quote Row */}
                  <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10 flex-1">
                      {/* Left Panel - Image */}
                      <div className="md:col-span-4 lg:col-span-4 p-6 md:p-8 lg:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-end">
                         <div className="w-64 h-64 md:w-[300px] md:h-[300px] bg-white/5 mb-6 overflow-hidden shrink-0 mx-auto md:mx-0">
                             <img 
                                src={testimonials[currentIndex].image} 
                                alt={testimonials[currentIndex].author} 
                                className="w-full h-full object-cover transition-all duration-500" 
                             />
                         </div>
                         <div>
                            <div className="text-base font-bold text-white mb-1">{testimonials[currentIndex].author}</div>
                            <div className="text-xs text-white/50">
                                {testimonials[currentIndex].role} <span className="text-white font-semibold">{testimonials[currentIndex].company}</span>
                            </div>
                         </div>
                      </div>

                      {/* Right Panel - Quote */}
                      <div className="md:col-span-8 lg:col-span-8 p-6 md:p-8 lg:p-12 flex flex-col justify-center relative">
                         <div className="text-[#C1FF00] text-6xl font-serif mb-4 leading-none font-bold">"</div>
                         <p className="text-2xl md:text-3xl lg:text-[2rem] font-medium leading-[1.3] tracking-tight mb-12 max-w-3xl text-white/90">
                           {testimonials[currentIndex].quote}
                         </p>
                         
                         {/* Navigation Arrows */}
                         <div className="flex gap-4 mt-6">
                           <button 
                             onClick={handlePrev}
                             className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                           >
                             <ArrowLeft className="w-4 h-4" />
                           </button>
                           <button 
                             onClick={handleNext}
                             className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                           >
                             <ArrowRight className="w-4 h-4" />
                           </button>
                         </div>
                      </div>
                  </div>
              </motion.div>
            </AnimatePresence>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              {[
                testimonials[currentIndex].stats.find(s => s.label === "Raised in their Series D"),
                testimonials[currentIndex].stats.find(s => s.label === "Seed Round"),
                testimonials[currentIndex].stats.find(s => s.label === "VC Meetings Generated")
              ].map((stat, idx) => {
                const isCurrent = idx === currentIndex;
                return (
                  <div key={idx} className={`p-6 md:p-8 lg:p-12 border-b md:border-b-0 ${idx < 2 ? '' : ''} border-white/10 flex flex-col justify-center`}>
                     {stat.logo}
                     <div className={`text-4xl md:text-5xl font-bold tracking-tighter mb-2 transition-colors duration-300 ${isCurrent ? 'text-white' : 'text-white/60'}`}>
                        {stat.value}
                     </div>
                     <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                );
              })}
            </div>
        </div>

        {/* 3 Extra Cards Below */}
        <div className="m-5 grid grid-cols-1 md:grid-cols-3 border border-white/10 ">
        
          {extraCardsData.map((card, idx) => (
            <div key={idx} className={`p-8 lg:p-10 border-b md:border-b-0 ${idx < 2 ? 'md:border-r' : ''} border-white/10 flex flex-col`}>
              <div className="h-10 mb-6 flex items-center">
                {card.logo}
              </div>
              
              <div className="flex gap-4 mb-6 relative flex-1">
                <div className="text-[#C1FF00] font-serif text-3xl font-bold mt-1 leading-none">"</div>
                <p className="text-white/80 text-base md:text-sm lg:text-base leading-relaxed tracking-wide">
                  {card.quote}
                </p>
              </div>
              
              <div className="flex justify-end mb-8 mt-auto pt-4">
                <a href="#" className="text-white text-[13px] font-semibold flex items-center gap-2 hover:text-white/80 transition-colors">
                  Read case study <ArrowUpRight className="w-4 h-4 text-[#C1FF00]" />
                </a>
              </div>
              
              <div className="grid grid-cols-2 border-t border-white/10 pt-6 pb-6 mt-auto">
                <div className="border-r border-white/10 pr-4">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{card.stats[0].value}</div>
                  <div className="text-[11px] lg:text-xs text-white/50 font-medium">{card.stats[0].label}</div>
                </div>
                <div className="pl-4">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{card.stats[1].value}</div>
                  <div className="text-[11px] lg:text-xs text-white/50 font-medium">{card.stats[1].label}</div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 flex items-center gap-4">
                <img src={card.image} alt={card.author} className="w-10 h-10 object-cover bg-white/5" />
                <div>
                  <div className="text-sm font-bold text-white leading-tight">{card.author}</div>
                  <div className="text-xs text-white/50 mt-1">{card.role} <span className="text-white font-medium">{card.company}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
