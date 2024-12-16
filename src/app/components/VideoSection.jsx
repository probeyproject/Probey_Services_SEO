"use client";
import React, { useEffect, useState } from 'react';

function VideoSection() {
    const [padding, setPadding] = useState('10rem'); // Start with 10rem padding

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newPadding = Math.max(0, padding === '10rem' ? 10 - scrollY / 50 : 5 - scrollY / 50); // Adjust padding for mobile/tablet
        setPadding(`${newPadding}rem`);
    };

    useEffect(() => {
        const handleResize = () => {
            // Set initial padding based on window width
            const isMobile = window.innerWidth < 768; // Adjust threshold as needed
            setPadding(isMobile ? '5rem' : '10rem');
        };

        handleResize(); // Set initial padding
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="video-section" style={{ padding }}>
            <video autoPlay loop muted className="video-background">
                <source src="/Video/branding.mp4" type="video/mp4" /> {/* Use public folder path */}
                Your browser does not support the video tag.
            </video>
        </section>
    );
}

export default VideoSection;
