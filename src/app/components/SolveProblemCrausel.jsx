"use client";
import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const CustomArrow = ({ onClick, icon }) => (
    <button
        className="arrow-button btn btn-sm btn-dark btn-animation"
        onClick={onClick}
        style={{ cursor: "pointer" }}
    >
        {icon}
    </button>
);

function SolveProblemCarousel() {
    const [isMounted, setIsMounted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in');
    const sliderRef = useRef(null);

    useEffect(() => {
        setIsMounted(true); // Ensure the component is mounted before rendering
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        centerPadding: '0',
        arrows: false,
        beforeChange: (current, next) => {
            setFadeClass('fade-out');
            setTimeout(() => {
                setCurrentIndex(next);
                setFadeClass('fade-in');
            }, 500);
        },
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: '20px' } },
            { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: '10px' } },
        ],
    };

    const cards = [
        { title: "Increase The Amount Of Visitors", services: ["Get More Traffic"], link: "/solutions/traffic",icon: "/probeyImages/icons/get-more-traffic.png" },
        { title: "Achieve A Better Ranking", services: ["Go To Higher Ranking"], link: "/solutions/ranking",icon: "/probeyImages/icons/get-higher-ranking.png" },
        { title: "Gain The Followers", services: ["Get More Followers"], link: "/solutions/followers",icon: "/probeyImages/icons/get-more-followers.png" },
        { title: "Increase Naturally", services: ["Grow Organically"], link: "/solutions/organic-growth",icon: "/probeyImages/icons/grow-organically.png" },
        { title: "Require Logo & Brand Identity", services: ["Need Logo & Branding"], link: "/solution/branding",icon: "/probeyImages/icons/logo-branding.png" },
        { title: "Require Website/ App", services: ["Need Website/App"], link: "/solutions/website-app",icon: "/probeyImages/icons/need-website-app.png" },
        { title: "Enhance My Website", services: ["Upgrade My Website"], link: '/solutions/upgrade',icon: "/probeyImages/icons/website-upgrade.png" },
    ];

    if (!isMounted) return null; // Render nothing on server-side

    return (
        <div className="container pt-4 mt-4 position-relative">
            <div className="common-carousel">
                <div className="container mb-4">
                    <h2 className="display-4">Choose Your Solution</h2>
                    <p>Ensuring To Solve Your Business Challenges</p>
                </div>
                
                <div className="d-flex gap-4 position-absolute col-12 justify-content-end pe-3" style={{ width: '100%', right: '10px', top: "50px" }}>
                    <CustomArrow onClick={() => sliderRef.current.slickPrev()} icon={<FaArrowLeft className="arrow-slick" />} />
                    <CustomArrow onClick={() => sliderRef.current.slickNext()} icon={<FaArrowRight className="arrow-slick" />} />
                </div>

                <Slider ref={sliderRef} {...settings}>
                    {cards.map((card, index) => (
                        <div key={index}>
                            <Link href={card.link} className="text-decoration-none">
                                <div className="border-0 d-flex flex-column p-3 bg-dark text-white rounded-3 justify-content-between text-wrap" style={{ height: "50vh" , backgroundImage:`url(${card.icon}
                                )`,
                                backgroundPosition: "center", 
                                backgroundRepeat: "no-repeat" }}>
                                    <h5 className="mb-3 display-6">{card.title}</h5>
                                    <ul className="list-unstyled h5 fw-light d-flex flex-column">
                                        {card.services.map((service, idx) => (
                                            <li key={idx} className="mb-1 font-weight-normal">
                                                <Link href={card.link} className="text-white text-decoration-none">{service}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default SolveProblemCarousel;
