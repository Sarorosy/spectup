import React, { useState } from 'react';
import { motion } from 'framer-motion';
import niclasImg from '../assets/jigar.jpeg';
import {
    Calendar,
    Clock,
    Video,
    Globe,
    CheckSquare,
    ChevronLeft,
    ChevronRight,
    LayoutGrid,
    List
} from 'lucide-react';
import Silk from './Silk';


const NextRaise = () => {
    const [activeTab, setActiveTab] = useState('book');

    const calendarDays = [
        [1, 2, 3, 4, 5, 6, 7],
        [8, 9, 10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19, 20, 21],
        [22, 23, 24, 25, 26, 27, 28],
        [29, 30, 31, '', '', '', '']
    ];

    const timeSlots = [
        '14:40', '19:00', '19:20', '19:40', '20:00', '21:00', '21:20', '22:50', '23:10'
    ];

    return (
        <section className="relative w-full bg-black text-white py-24 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <Silk color="#10ff9c" speed={2} />
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12">

                {/* Full Width Screen Border */}
                <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-white/10 mb-16"></div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
                    {/* Left Column */}
                    <div className="w-full lg:w-1/3 flex flex-col">
                        <h2 className="gold-text text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-white leading-tight">
                            Ready to Structure<br />
                            Your Next Raise?
                        </h2>

                        <div className="space-y-8 flex-grow">
                            <div>
                                <span className="gold-text text-sm font-bold block mb-2">[01]</span>
                                <p className="text-white/80">Either book a call or a send message.</p>
                            </div>
                            <div>
                                <span className="gold-text text-sm font-bold block mb-2">[02]</span>
                                <p className="text-white/80">Share your project details.</p>
                            </div>
                            <div>
                                <span className="gold-text text-sm font-bold block mb-2">[03]</span>
                                <p className="text-white/80">We'll reply <span className="font-bold text-white">within 14 hours.</span></p>
                            </div>

                        </div>

                        <div className="mt-16 pt-8 max-w-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="gold-text text-4xl font-serif leading-none ">"</span>
                                <p className="text-white text-lg font-medium leading-snug">

                                    I personally review every engagement to ensure we can add real value before we start.
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src={niclasImg} alt="Jigar Patel" className="w-12 h-12 rounded-full object-cover " />
                                <div>
                                    <h4 className="gold-text font-bold text-sm">Jigar Patel</h4>
                                    <p className="text-white/50 text-xs">Managing Partner</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-2/3 flex flex-col items-start lg:items-end">

                        {/* Tabs */}
                        <div className="flex border border-white/10 rounded overflow-hidden mb-6">
                            <button
                                onClick={() => setActiveTab('book')}
                                className={`px-6 py-2 text-sm font-medium transition-colors ${activeTab === 'book' ? 'bg-white text-black' : 'bg-black text-white hover:bg-white/5'}`}
                            >
                                Book call
                            </button>
                            <button
                                onClick={() => setActiveTab('message')}
                                className={`px-6 py-2 text-sm font-medium border-l border-white/10 transition-colors ${activeTab === 'message' ? 'bg-white text-black' : 'bg-black text-white hover:bg-white/5'}`}
                            >
                                Send message
                            </button>
                        </div>

                        {/* Booking UI Mockup */}
                        <div className="w-full bg-[#111111] border border-brand-yellow/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 shadow-[0_0_20px_rgba(16,255,156,0.15)] hover:shadow-[0_0_30px_rgba(16,255,156,0.3)] transition-shadow duration-500 overflow-hidden relative">


                            {/* Calendar Left Sidebar */}
                            <div className="w-full md:w-1/3 flex flex-col relative z-10 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                                <img src={niclasImg} alt="Jigar Patel" className="w-10 h-10 rounded-full object-cover mb-4" />
                                <p className="gold-text text-sm mb-1">Jigar Patel</p>
                                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">20-Minutes Call</h3>

                                <div className="space-y-4 text-sm text-white/70">
                                    <div className="flex items-center gap-3">
                                        <CheckSquare size={16} />
                                        <span>Requires confirmation</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock size={16} />
                                        <span>20m</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Video size={16} />
                                        <span>Google Meet</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-white/90">
                                        <Globe size={16} />
                                        <span className="flex items-center gap-1 cursor-pointer hover:underline">Asia/Kolkata <ChevronRight size={14} className="rotate-90" /></span>
                                    </div>
                                </div>
                            </div>

                            {/* Calendar Right Area */}
                            <div className="w-full md:w-2/3 flex flex-col relative z-10">

                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <h4 className="font-semibold text-lg text-white">March 2026</h4>
                                        <div className="flex gap-2">
                                            <button className="text-white/40 hover:text-white transition-colors"><ChevronLeft size={20} /></button>
                                            <button className="text-white hover:text-white/70 transition-colors"><ChevronRight size={20} /></button>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex items-center gap-2">
                                        <span className="text-sm font-medium text-white/80">Overlay my calendar</span>
                                        <div className="w-9 h-5 bg-white/20 rounded-full flex items-center px-0.5 cursor-pointer">
                                            <div className="w-4 h-4 rounded-full bg-white/50"></div>
                                        </div>
                                        <div className="flex border border-white/10 rounded ml-4">
                                            <button className="p-1.5 text-white/50 hover:bg-white/10"><LayoutGrid size={16} /></button>
                                            <button className="p-1.5 text-white bg-white/10"><List size={16} /></button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col xl:flex-row gap-8">
                                    <div className="flex-1">
                                        <div className="grid grid-cols-7 mb-4">
                                            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, i) => (
                                                <div key={i} className="text-center text-[11px] font-bold text-white/40 mb-2">{day}</div>
                                            ))}
                                            {calendarDays.map((week, weekIndex) => (
                                                <React.Fragment key={weekIndex}>
                                                    {week.map((day, dayIndex) => (
                                                        <div key={`${weekIndex}-${dayIndex}`} className="flex justify-center mb-2">
                                                            {day ? (
                                                                <button
                                                                    className={`w-10 h-10 flex flex-col items-center justify-center rounded-lg text-sm transition-all
                                                                        ${day === 16 ? 'bg-brand-yellow text-black font-bold shadow-[0_0_15px_rgba(16,255,156,0.4)]' :

                                                                            [17, 18, 19, 23, 24, 25, 26, 30, 31].includes(day) ? 'bg-white/10 text-white font-medium hover:bg-white/20' :
                                                                                'text-white/40 hover:bg-white/5 hover:text-white'}`}
                                                                >
                                                                    {day}
                                                                    {day === 14 && <div className="w-1 h-1 bg-white/50 rounded-full mt-0.5" />}
                                                                </button>
                                                            ) : (
                                                                <div className="w-10 h-10"></div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Time Slots */}
                                    <div className="w-full xl:w-48 xl:border-l border-white/5 xl:pl-6 flex flex-col">
                                        <div className="flex justify-between items-center mb-6 pl-1">
                                            <h4 className="font-semibold text-white">Mon 16</h4>
                                            <div className="text-white/50 text-sm">12h&nbsp;&nbsp;&nbsp;24h</div>
                                        </div>
                                        <div className="flex flex-col gap-2 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
                                            {timeSlots.map(time => (
                                                <button key={time} className="w-full border border-white/20 rounded-md py-2.5 text-center text-sm font-medium hover:border-brand-yellow/80 hover:bg-brand-yellow/10 hover:text-brand-yellow hover:shadow-[0_0_15px_rgba(16,255,156,0.3)] transition-all text-white/80">
                                                    {time}
                                                </button>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* CSS for custom scrollbar hidden in normal but applies style if needed */}
            <style jsx="true">{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </section>
    );
};

export default NextRaise;
