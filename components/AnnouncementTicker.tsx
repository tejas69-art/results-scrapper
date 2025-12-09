'use client';

import React from 'react';
import { Megaphone } from 'lucide-react';

const AnnouncementTicker = () => {
    return (
        <div className="bg-blue-900 text-white overflow-hidden py-2 relative border-b border-blue-800">
            <div className="container mx-auto flex items-center">
                <div className="bg-blue-900 z-10 px-4 flex items-center gap-2 border-r border-blue-800 shadow-[2px_0_10px_rgba(0,0,0,0.1)]">
                    <Megaphone className="w-4 h-4 text-yellow-400 animate-bounce" />
                    <span className="font-bold text-xs uppercase tracking-wider text-yellow-400 whitespace-nowrap">
                        Latest Updates
                    </span>
                </div>
                
                {/* Marquee Container */}
                <div className="flex-1 overflow-hidden relative">
                    <div className="animate-marquee whitespace-nowrap inline-flex items-center">
                        <span className="mx-8 text-sm font-medium">
                            📢 <span className="text-yellow-200">New:</span> June/July 2024 Exam Results Announced for 1st & 2nd Semester BE/B.Tech (2022 Scheme)
                        </span>
                        <span className="mx-8 text-sm font-medium">
                            📢 <span className="text-yellow-200">Update:</span> Revaluation Results for 3rd & 4th Sem (2021 Scheme) are Live!
                        </span>
                        <span className="mx-8 text-sm font-medium">
                            📢 <span className="text-yellow-200">Notice:</span> Server maintenance scheduled for Sunday 10 PM to 12 AM.
                        </span>
                        <span className="mx-8 text-sm font-medium">
                           👉 Best of luck to all students!
                        </span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                /* Pause on hover for better UX */
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default AnnouncementTicker;
