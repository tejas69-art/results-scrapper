'use client';

import React, { useEffect } from 'react';

interface AdUnitProps {
    adSlot: string;
    adFormat?: string;
    fullWidthResponsive?: boolean;
    className?: string;
}

const AdUnit: React.FC<AdUnitProps> = ({
    adSlot,
    adFormat = 'auto',
    fullWidthResponsive = true,
    className = ''
}) => {
    const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

    useEffect(() => {
        try {
            if (typeof window !== 'undefined' && publisherId && publisherId !== 'ca-pub-0000000000000000') {
                // @ts-ignore
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (err) {
            console.error('AdSense error:', err);
        }
    }, [publisherId]);

    // Don't show ads in development or if no valid publisher ID
    if (!publisherId || publisherId === 'ca-pub-0000000000000000') {
        return (
            <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center ${className}`}>
                <p className="text-gray-500 text-sm">Ad Placeholder</p>
                <p className="text-xs text-gray-400 mt-1">Set NEXT_PUBLIC_ADSENSE_PUBLISHER_ID</p>
            </div>
        );
    }

    return (
        <div className={className}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client={publisherId}
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive={fullWidthResponsive.toString()}
            />
        </div>
    );
};

export default AdUnit;
