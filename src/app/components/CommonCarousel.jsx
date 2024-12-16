"use client";
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css'; // Import slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick theme CSS
import LeftSideText from './LeftSideText';

function CommonCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in');

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000,
        centerPadding: '60px',
        arrows:false,
        beforeChange: (current, next) => {
            setFadeClass('fade-out'); // Start fade out
            setTimeout(() => {
                setCurrentIndex(next);
                setFadeClass('fade-in'); // Fade in after index change
            }, 500); // Match this duration with your CSS transition duration
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '20px',
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '10px',
                },
            },
        ],
    };

    const cards = [
        { title: "", subtitle: "", img: "/Featured/kyari.jpg", bgImg: "/Featured/kyariweb.png" },
        { title: "", subtitle: "", img: "/Featured/hq720.jpg", bgImg: "/Featured/ptalweb.png" },
        { title: "", subtitle: "", img: "/Featured/sorich.jpg", bgImg: "/Featured/sorichweb.png" },
        { title: "", subtitle: "", img: "/Featured/Cinnamon.jpg", bgImg: "/Featured/CinnamonWeb.png" },
        { title: "", subtitle: "", img: "/Featured/maxresdefault-1.jpg", bgImg: "/Featured/Bartisans.png" },
    ];


    return (
        <div className='position-relative'>
            <LeftSideText text="PROJECT" />
            <div className="container mt-4 pt-2">
                <div className='container pt-3 mt-4'>
                    <h2 className="display-4">Proudly Delivered</h2>
                    <p className='mb-4'>Best Of Our Work, Featured In Shark Tank India, Next Can Be Your Business</p>
                </div>
                <div className="common-carousel">
                    <Slider {...settings}>
                        {cards.map((card, index) => (
                           <div key={index} className="carousel-card border-0 overflow-hidden">
                           <div
                             style={{
                               maxHeight: "50vh",
                               backgroundImage: `url(${card.bgImg})`,
                               backgroundSize: "cover",
                               backgroundPosition: "top",
                               transition: "background-position 0.5s ease",
                             }}
                             className="hover-bg-scroll"
                           >
                             <div className="hover-opacity position-relative">
                               <img
                                 fetchpriority="high"
                                 decoding="async"
                                 src={card.img}
                                 alt={card.title}
                                 className="img-fluid w-100 rounded-3 hover-opacity"
                                 style={{ maxHeight: "50vh", width: "auto" }}
                               />
                               <div className="animated-div">
                                 <img
                                   fetchpriority="high"
                                   decoding="async"
                                   src="/technologyIcons/mouse-cursor.webp"
                                   alt={card.title}
                                   className="img-fluid w-100 rounded-3 hover-opacity"
                                   style={{
                                     maxHeight: "10vh",
                                     width: "auto",
                                   }}
                                 />
                               </div>
                             </div>
                           </div>
                         
                           <div className="pt-2">
                             <h5 className="card-title mb-2 mt-1 fw-bold">{card.title}</h5>
                             <p className="card-subtitle fw-bold">{card.subtitle}</p>
                           </div>
                         </div>
                         
                        ))}
                    </Slider>

                    <div className={`mt-2 slider-counter d-flex align-items-center fw-bold`}>
                        <div className={` ${fadeClass}`}>{currentIndex + 1}</div>
                        <div className="divider"></div>
                        <div>{cards.length}</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CommonCarousel;
