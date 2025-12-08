'use client';

import React, { useEffect, useRef } from 'react';

interface AlternativeAdProps {
    className?: string;
    /**
     * Unique identifier for this ad unit
     */
    id?: string;
}

const AlternativeAd: React.FC<AlternativeAdProps> = ({ className, id = 'ad-container' }) => {
    const adRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // PASTE YOUR AD NETWORK SCRIPT HERE
        // Example for Adsterra:
        /*
        const script1 = document.createElement('script');
        script1.type = 'text/javascript';
        script1.innerHTML = `
            atOptions = {
                'key' : 'YOUR_KEY_HERE',
                'format' : 'iframe',
                'height' : 90,
                'width' : 728,
                'params' : {}
            };
        `;
        
        const script2 = document.createElement('script');
        script2.type = 'text/javascript';
        script2.src = "//www.highperformanceformat.com/YOUR_KEY_HERE/invoke.js";
        
        if (adRef.current) {
            adRef.current.innerHTML = ''; // Clear previous
            adRef.current.appendChild(script1);
            adRef.current.appendChild(script2);
        }
        */
       
    }, []);

    return (
        <div 
            ref={adRef} 
            id={id}
            className={`min-h-[90px] w-full flex items-center justify-center bg-gray-50 border border-dashed border-gray-200 text-gray-400 text-sm ${className}`}
        >
            <div className="text-center p-4">
                <p className="font-semibold">Alternative Ad Placeholder</p>
                <p className="text-xs mt-1">Edit components/AdSense/AlternativeAd.tsx to paste your script.</p>
            </div>
        </div>
    );
};

export default AlternativeAd;
