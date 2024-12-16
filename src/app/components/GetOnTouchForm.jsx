"use client";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppointmentButton from "./AppointmentButton";

function GetOnTouchForm() {
  const words = [
    { text: "Innovative", color: "#F15B5B" },
    { text: "Creative", color: "#7A6CF8" },
    { text: "Reliable", color: "#42B0D4" },
    { text: "Efficient", color: "#FFB21B" },
    { text: "Sustainable", color: "#3CB371" },
  ];

  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // 2 seconds for each word
    vertical: true, // Enables vertical sliding
    verticalSwiping: true,
  };

  return (
    <section className="p-0 position-relative pt-0 mt-0" style={{ height: "100vh" }}>
      <section className="bg-dark position-relative w-100 h-100 ">
        {/* Video background */}
        <div className="position-absolute top-0 left-0 w-100 h-100">
          <video
            src="https://www.bitswits.co//videos/digitalVideo.mp4"
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1,
            }}
          />
        </div>

        {/* Content Section */}
        <section
          className="position-relative z-index-2 text-center text-white d-flex justify-content-center align-items-center flex-column h-100"
        >
          <div className="row w-100 h-100 align-items-center justify-content-center">
            {/* Text Section (on left for large screens, centered for mobile/tablet) */}
            <div className="col-lg-6 col-12 text-lg-start text-center">
              <div className="d-flex gap-5 display-1 fw-bolder" style={{ fontWeight: "900", fontSize: "7rem !important" }}>
                <span className="d-block align-self-start display-5" style={{ fontWeight: "700", fontSize: "4rem !important" }}>
                  Go Beyond
                </span>
                Digital
              </div>

              {/* Slick Slider Section */}
              <div
                className="text-slider"
                style={{
                  fontSize: "4rem",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  height: "5rem",
                }}
              >
                <Slider {...settings}>
                  {words.map((word, index) => (
                    <div key={index}>
                      <span style={{ color: word.color }}>{word.text}</span>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            {/* Button Section (on right for large screens, centered for mobile/tablet) */}
            <div className="col-lg-6 col-12 text-center text-md-end mt-4 mt-lg-0 pe-md-5">
              <Link href="" className="btn btn-animation">
              <button
            className="btn btn-animation btn-dark mt-xxl-4 mt-2 home-button mend-auto">
Book a free Consultation <i className="fa-solid fa-arrow-right icon"></i>
</button>

              </Link>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default GetOnTouchForm;