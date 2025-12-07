'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

const AutoAds: React.FC = () => {
    const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

    if (!publisherId || publisherId === 'ca-pub-0000000000000000') {
        return null;
    }

    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    );
};

export default AutoAds;
