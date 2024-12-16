"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";

function ShowcaseCarousel() {
    const [isHovering, setIsHovering] = useState(false);

    const imageUrls = [
        {
     url:"/probeyImages/ProbeyContent/Anuka/Artboard 4.png",
    height:"400px"
    },
        {
     url: "/probeyImages/ProbeyContent/Anuka/Artboard 5.png",
    height:"350px"
    },
        {
     url:"/probeyImages/ProbeyContent/Anuka/Artboard 6.png",
    height:"450px"
    },
        {
     url:    "/probeyImages/ProbeyContent/AR coffee/Artboard 1.png",
    height:"400px"
    },
        {
     url:    "/probeyImages/ProbeyContent/AR coffee/Artboard 2.png",
    height:"450px"
    },
        {
     url:"/probeyImages/ProbeyContent/AR coffee/Artboard 3.png",
    height:"350px"
    },
        {
     url:"/probeyImages/ProbeyContent/avathi/Artboard 1.png",
    height:"400px"
    },
        {
     url: "/probeyImages/ProbeyContent/avathi/Artboard 2.png",
    height:"350px"
    },
        {
     url:"/probeyImages/ProbeyContent/tribal/Artboard 6.png",
    height:"450px"
    },
        {
     url:    "/probeyImages/ProbeyContent/tribal/Artboard 5.png",
    height:"400px"
    },
        {
     url:    "/probeyImages/ProbeyContent/nicobar/Artboard 5.png",
    height:"450px"
    },
        {
     url:"/probeyImages/ProbeyContent/nicobar/Artboard 6.png",
    height:"350px"
    },
       
    ];

    return (
        <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <Marquee
                play={isHovering}
                gradient={false} // Disable gradient effect
                speed={50} // Adjust speed for smoother scrolling
                direction="left" // Ensure scrolling direction
            >
                {imageUrls.map((img, index) => (
                    <div key={index} style={{ padding: "10px" }}>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="p-3 d-flex justify-content-center align-items-center">
                                <img
                                    src={img.url}
                                    alt={`Slide ${index + 1}`}
                                    className="img-fluid"
                                    style={{
                                        objectFit: "contain",
                                        height:img.height, // Set fixed height
                                        width: "auto", // Maintain aspect ratio
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}

export default ShowcaseCarousel;
