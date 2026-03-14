import React from 'react';

// Import all logos from assets/logos directory
const logoFiles = import.meta.glob('../assets/logos/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const logos = Object.values(logoFiles).map(mod => mod.default);

export default function LogoMarquee() {
    // We double or triple the logos to ensure a seamless loop
    const marqueeLogos = [...logos, ...logos, ...logos];

    return (
        <div className="relative w-full bg-black border-y border-white/[0.05] py-6">
            <div className="max-w-[1440px] mx-auto relative overflow-hidden">
                <div className="flex w-fit animate-marquee">
                    {marqueeLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center px-12 shrink-0 group"
                        >
                            <img
                                src={logo}
                                alt={`Partner logo ${index}`}
                                className="h-8 md:h-10 w-auto object-contain grayscale  group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                            />
                        </div>
                    ))}
                </div>

                {/* Gradient Mask for fading effect on edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            </div>
        </div>
    );
}
