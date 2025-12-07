'use client';

import React, { useEffect } from 'react';

interface InFeedAdProps {
    adSlot: string;
    adLayout?: string;
    className?: string;
}

const InFeedAd: React.FC<InFeedAdProps> = ({
    adSlot,
    adLayout = 'in-article',
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
            <div className={`bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg p-6 text-center my-4 ${className}`}>
                <p className="text-blue-600 text-sm font-medium">In-Feed Ad Placeholder</p>
                <p className="text-xs text-blue-400 mt-1">Configure AdSense to show ads here</p>
            </div>
        );
    }

    return (
        <div className={`my-4 ${className}`}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-format="fluid"
                data-ad-layout-key={adLayout}
                data-ad-client={publisherId}
                data-ad-slot={adSlot}
            />
        </div>
    );
};

export default InFeedAd;
