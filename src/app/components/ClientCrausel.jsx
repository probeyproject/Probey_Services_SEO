"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import audentia from "../assets/ClientLogo/Audentia-FV-1536x1448-1-1024x965.webp";
import client3 from "../assets/ClientLogo/client3.webp";
import grenco from "../assets/ClientLogo/grenco.png.webp";
import alt from "../assets/ClientLogo/altcologos.png";
import brand from "../assets/ClientLogo/brandLogo.png";
import grey from "../assets/ClientLogo/grey.png";
import kellogg from "../assets/ClientLogo/kellogg.webp";
import kyari from "../assets/ClientLogo/kyari.webp";
import logo from "../assets/ClientLogo/logo.webp";
import pidilite from "../assets/ClientLogo/pidilite.png";
import png from "../assets/ClientLogo/png.png";
import sony from "../assets/ClientLogo/Sony.webp"
import song from "../assets/ClientLogo/songSaa.png"
import nature from "../assets/ClientLogo/nature.webp"
import kangaroo from "../assets/ClientLogo/kangarookids.svg"
import say from "../assets/ClientLogo/iSayOrganic.png"
import int from "../assets/ClientLogo/int.svg"
import hl from "../assets/ClientLogo/hl.png"
import gem from "../assets/ClientLogo/gem.jpg"
import furniture from "../assets/ClientLogo/FURNITURE.png"



function ClientCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2500, 
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: false, 
        autoplay: true,
        autoplaySpeed: 0, 
        cssEase: "linear", 
        pauseOnHover: false,
        arrows:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 3 },
            },
        ],
    };
    const settingsSlider = {
        dots: false,
    infinite: true,
    speed: 2500, 
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: false, 
    autoplay: true,
    autoplaySpeed: 0, 
    cssEase: "linear", 
    pauseOnHover: false, 
    arrows:false, 
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 3 },
            },
        ],
    };

    // Consolidate all images into an array
    const clientImages = [
        audentia, client3, grenco, 
        alt, brand, grey,  kellogg, 
        kyari, logo, pidilite, png,sony
    ];
    const clientImagesRevers = [
        song,nature,kangaroo,int,hl,furniture
    ];

    return (
        <div className="mt-4 pt-2">
            <div className="container mt-4 pt-3">
                <h2 className="display-4">Proudly Associated with</h2>
                <p className='mb-4'>Major Client We Are Working For.</p>
                    <Slider {...settings}>
                        {clientImages.map((imgSrc, index) => (
                            <div key={index} className="carousel-card">
                                <Image 
                                    src={imgSrc} 
                                    alt={`Client ${index + 1}`} 
                                    width={100} 
                                    height={50} 
                                    style={{
                                        objectFit: 'contain',
                                        filter: 'invert(1) brightness(0)'
                                    }}
                                />
                            </div>
                        ))}
                    </Slider>
            </div>
            <div className="container mt-4">
                <Slider {...settingsSlider}>
                    {clientImagesRevers.map((imgSrc, index) => (
                        <div key={index} className="carousel-card">
                            <Image 
                                src={imgSrc} 
                                alt={`Client ${index + 1}`} 
                                width={100} 
                                height={50} 
                                style={{
                                    objectFit: 'contain',
                                    filter: 'invert(1) brightness(0)'
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ClientCarousel;
