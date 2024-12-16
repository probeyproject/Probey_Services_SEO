'use client'
import React, { useState } from "react";
import Slider from "react-slick";
import ClientCarousel from "./components/ClientCrausel";
import CommonCarousel from "./components/CommonCarousel";
import CommonGrid from "./components/CommonGrid";
import AllCollapseExample from "./components/Faq";
import GetOnTouchForm from "./components/GetOnTouchForm";
import HeroSection from "./components/HeroSection";
import HowWeWork from "./components/HowWeWork";
import ImageSection from "./components/ImageSection";
import ReviewCarousel from "./components/ReviewCrausel";
import ServicesHero from "./components/ServicesHero";
import SolveProblemCarousel from "./components/SolveProblemCrausel";
import VideoSection from "./components/VideoSection";
import styles from "./page.module.css";
import Image from "next/image";
import NumberGrid from "./components/NumberGrid";
import OurStacks from "./components/OurStacks";
import ServicesTabs from "./components/ToolsTab";
import GridBlock from "./components/GridBlock";
import LeftSideText from "./components/LeftSideText";
import NewsLetter from "./components/Newsletter";
import ShowcaseCarousel from "./components/ShowcaseCrousel";
import ScrollSyncDiv from "./components/ScrollSyncDiv";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000, 
    slidesToShow: 4,
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
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  const awardsData = [
    {
      title: "Website Of The Day",
      year: 2023,
      organization: "CSS Design",
      imageUrl: "/awards/award-icon1.webp"
    },
    {
      title: "Top UI/UX Agency",
      year: 2024,
      organization: "Clutch",
      imageUrl: "/awards/award-icon2.webp"
    },
    {
      title: "Website Development",
      year: 2023,
      organization: "10th Web Excellence Awards",
      imageUrl: "/awards/award-icon3.webp"
    },
    {
      title: "Best UI/UX",
      year: 2023,
      organization: "The Netty Awards",
      imageUrl: "/awards/award-icon4.webp"
    },
    {
      title: "Top Branding Company",
      year: 2022,
      organization: "Design Award",
      imageUrl: "/awards/award-icon9.webp"
    },
  ];


  return (
    <>
    <ScrollSyncDiv/>
    <HeroSection/>
    <VideoSection/>
    <CommonCarousel/>
    <ClientCarousel/>
    {/* <div className="my-md-5 my-3"></div> */}
    <CommonGrid/>
    <ReviewCarousel/>
    {/* <div className="my-md-5 my-3"></div> */}
    <div className="container mt-4 pt-2">
      <div className="mt-4 pt-3">
        <div>
          <div className="row">
            <div className="col-md-6 border-right mb-3 mb-md-0" >
              <div className="">
                <p className="text-uppercase fw-bold text-muted  title mb-2">
                  Process
                </p>
                <hr />
                
                <span className="text-capitalize display-4">
                Process <br /> We Follow 
                </span>

                <span className="mt-2 w-75">Turning Your Ideas Into a Solution Step By Step.</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <div className="grid-item">
                    <div className="">
                    <div className="align-items-end d-flex justify-content-between">
                    <p className="text-uppercase fw-bold text-muted title mb-2 me-2">
                      Discovery
                      </p><div className="align-items-end d-flex justify-content-between">
                      <img src="/probeyImages/icons/searching.png" alt="icon" height={30} width={30}/>

                      </div>
                  
                      </div>

                      <hr />

                      <span className=" text-wrap mb-4 d-flex gap-4">
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >
                        We start by understanding your goals.
                      </p>

                      </span>
                      
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="grid-item">
                    <div className="">
                      
                      <div className="align-items-end d-flex justify-content-between">
                      <p className="text-uppercase fw-bold text-muted  title mb-2 me-2">
                      Strategy
                      </p>
                      <img src="/probeyImages/icons/strategy.jpg" alt="icon" height={30} width={30}/>

                      </div>
                      <hr />

                      <span className="text-capitalize text-wrap d-flex">
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >
                       We create a custom plan customized to your needs.
                      </p>

                      </span>
                      
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-4">
                  <div className="grid-item">
                    <div className="">
                      
                      <div className="align-items-end d-flex justify-content-between">
                      <p className="text-uppercase fw-bold text-muted  title mb-2">
                      Development
                      </p>
                      <img src="/probeyImages/icons/programming.png" alt="icon" height={30} width={30}/>

                      </div>
                      <hr />

                      <span className="text-capitalize text-wrap display-7 mb-4 d-flex gap-4">
                      
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >
                        We build and code your solution.
                      </p>

                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-4">
                <div className="grid-item">
                    <div className="">
                      <div className="align-items-end d-flex justify-content-between">
                      <p className="text-uppercase fw-bold text-muted title mb-2">
                      Launch
                      </p>
                      <img src="/probeyImages/icons/launch.jpg" alt="icon" height={30} width={30}/>

                      </div>
                      
                      <hr />

                      <span className="text-capitalize text-wrap mb-4">
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >
                        We go live with the finished product.
                      </p>
                      </span>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

     {/* Awards Slider */}
     <div className="position-relative">
      <LeftSideText text="AWARDS"/>
     <div className="container mt-4 pt-2">
     <h2 className="display-4">Awards & Recognition</h2>
     <p className="mb-4">In Return Of Excellence & Expertise</p>
     </div>
        
 <div className="container">
        <Slider {...sliderSettings}>
          {awardsData.map((award, index) => (
            <div key={index} className="award-card card p-0 pb-3 mx-1 bg-dark text-white">
              <div className="d-flex justify-content-center align-items-center " style={{ height: "120px" }}>
                <img
                  src={award.imageUrl}
                  style={{ width: "70px", height: "70px", objectFit: "contain", filter: '' }}
                  alt={award.title}
                />
              </div>
              <div className="text-center">
                <div className="text-wrap mb-1 fw-bold">{award.title}</div>
                <div className="text-wrap mb-1">{award.year}</div>
                <div className="text-wrap">{award.organization}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </div>
      <ServicesTabs/>
      <GridBlock/>
    <SolveProblemCarousel/>
    <NumberGrid/>
    <GetOnTouchForm/>
  <NewsLetter/>
    <ShowcaseCarousel/>
    <AllCollapseExample/>
    </>
  );
  
}