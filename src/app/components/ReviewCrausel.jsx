"use client";
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import star from "../assets/star.png";
import Image from 'next/image';
import clutch from "../assets/clutch.webp";
import glass from "../assets/glassdoor.webp";
import group from "../assets/Group.webp";
import indeed from "../assets/Indeed_logo.webp";
import tracxn from "../assets/Tracxn.webp";

function ReviewCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in');

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: '60px',
        arrows:false,
        beforeChange: (current, next) => {
            setFadeClass('fade-out');
            setTimeout(() => {
                setCurrentIndex(next);
                setFadeClass('fade-in');
            }, 500);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '20px',
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '10px',
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0px',
                },
            },
        ],
    };

    const reviews = [
        { img: clutch, star: 3, text: "3.5" },
        { img: glass, star: 4, text: "4.5" },
        { img: group, star: 4, text: "4.0" },
        { img: indeed, star: 3, text: "4.5" },
        { img: tracxn, star: 5, text: "4.5" },
    ];

    return (
        <div className="container mt-4 pt-2">
            <div className="container pt-3 mt-4">
                <div className="common-carousel">
                    <h2 className="display-4">Reviews & Feedback</h2>
                    <p className='mb-4'>That Makes Us Better Everyday.</p>
                    <Slider {...settings}>
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="carousel-card border overflow-hidden text-center d-flex flex-column justify-content-center pt-3"
                                style={{ backgroundColor: '#f9f9f9', borderRadius: '5px' }}
                            >
                                <div
                                    className="logo-container mb-2"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image
                                        src={review.img}
                                        alt="logo"
                                        width={150}
                                        height={40}
                                        style={{
                                            filter: 'grayscale(100%) brightness(0.3)', // Blend logos to black
                                        }}
                                    />
                                </div>
                                <div className="d-flex justify-content-center mb-2">
                                    {Array(review.star).fill().map((_, starIndex) => (
                                        <Image
                                            key={starIndex}
                                            src={star}
                                            alt="star"
                                            width={20}
                                            height={20}
                                        />
                                    ))}
                                </div>
                                <p className="text-secondary">{review.text}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default ReviewCarousel;
