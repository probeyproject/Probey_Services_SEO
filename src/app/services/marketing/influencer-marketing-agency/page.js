"use client";
import React, { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordion from "react-bootstrap/Accordion";
import ImageSection from "../../../components/ImageSection"


const faqData = [
  {
    id: "0",
    question: "What is Influencer Marketing?",
    answer: (
      <>
        <p>
          Influencer marketing is a form of marketing in which brands market
          their products (services) by collaborating with social media
          influencers/content creators to inspire the buying decision of their
          followers; enhancing brand visibility and sales. It’s an evolution of
          celebrity endorsements, utilizing social media platforms for authentic
          content that resonates with audiences.
        </p>
        <p>
          As one of the best influencer marketing agencies, Probey Services
          excels in choosing ideal influencers according to their niche and
          category so that the subscribers/followers of the influencer have
          similar interests with respect to the brands’ target audience. We help
          in creating unique influencer campaigns and strategies for better
          sales of our clients.
        </p>
      </>
    ),
  },
  {
    id: "1",
    question: "Who are Influencer?",
    answer: (
      <>
        <p>
          Influencers are the subject matter experts and enthusiasts who have
          knowledge and zeal for a specific subject, activity or industry and
          they share and convey their knowledge through their engaging
          videos/posts and platforms which ultimately give them credibility and
          trust among their audiences.
        </p>
      </>
    ),
  },
  {
    id: "2",
    question:
      "Why is Probey Services the best influencer marketing agency in Delhi NCR?",
    answer: (
      <p>
        Probey Services is recognized as one of the best influencer marketing
        companies in Delhi NCR due to our strategic, results-oriented approach.
        We specialize in selecting influencers who match your brand’s ethos and
        audience. Our commitment to transparent, data-backed strategies ensures
        optimal campaign performance and measurable success for your business.
      </p>
    ),
  },
  {
    id: "3",
    question: "What is the cost of influencer marketing services?",
    answer: (
      <>
        <p>
          The cost of influencer marketing services varies based on your
          campaign’s scope, the influencers you choose, and the campaign
          duration. We offer customized packages designed to fit different
          budgets and marketing goals, ensuring you get effective and affordable
          influencer marketing solutions.
        </p>
      </>
    ),
  },
  {
    id: "4",
    question: "Why invest in Influencer Marketing for your business?",
    answer: (
      <>
        <p>
          Investing in influencer marketing can significantly boost your brand’s
          visibility and engagement. Unlike traditional advertising, influencer
          marketing leverages the trust and reach of social media influencers to
          connect with your target audience. This method is often more
          cost-effective and generates higher ROI by driving authentic
          interactions and conversions.
        </p>
      </>
    ),
  },
];

function ProductListing() {
  //IMAGES SECTION
  const images = [
    {
        src: "https://noviindus.com/wp-content/uploads/2024/04/Component-5-1.png",
        alt: "Component illustration",
        srcSet: [
            { width: 618, url: "https://noviindus.com/wp-content/uploads/2024/04/Component-5-1.png" },
            { width: 300, url: "https://noviindus.com/wp-content/uploads/2024/04/Component-5-1-300x300.png" },
            { width: 150, url: "https://noviindus.com/wp-content/uploads/2024/04/Component-5-1-150x150.png" },
            { width: 200, url: "https://noviindus.com/wp-content/uploads/2024/04/Component-5-1-200x200.png" },
            { width: 500, url: "https://noviindus.com/wp-content/uploads/2024/04/Component-5-1-500x500.png" }
        ],
        height:"80vh",
        marginTop:"0"
    },
    {
        src: "https://noviindus.com/wp-content/uploads/2024/04/Frame-2357.png",
        alt: "Frame illustration",
        srcSet: [
            { width: 618, url: "https://noviindus.com/wp-content/uploads/2024/04/Frame-2357.png" },
            { width: 300, url: "https://noviindus.com/wp-content/uploads/2024/04/Frame-2357-300x300.png" },
            { width: 150, url: "https://noviindus.com/wp-content/uploads/2024/04/Frame-2357-150x150.png" },
            { width: 200, url: "https://noviindus.com/wp-content/uploads/2024/04/Frame-2357-200x200.png" },
            { width: 500, url: "https://noviindus.com/wp-content/uploads/2024/04/Frame-2357-500x500.png" }
        ],
        height:"100vh",
        marginTop:"20vh"
    },
    {
        src: "https://noviindus.com/wp-content/uploads/2024/04/Frame-2351.png",
        alt: "Frame 2351 illustration",
        srcSet: [
            { width: 618, url: "https://noviindus.com/wp-content/uploads/2024/04/Frame-2351.png" },
            { width: 300, url: "https://noviindus.com/wp-content/uploads/2024/04/Frame-2351-300x300.png" },
            { width: 150, url: "https://noviindus.com/wp-content/uploads/2024/04/Frame-2351-150x150.png" },
            { width: 200, url: "https://noviindus.com/wp-content/uploads/2024/04/Frame-2351-200x200.png" },
            { width: 500, url: "https://noviindus.com/wp-content/uploads/2024/04/Frame-2351-500x500.png" }
        ],
        height:"80vh",
        marginTop:"0"
    },
    {
        src: "https://noviindus.com/wp-content/uploads/2024/04/Frame-2358.png",
        alt: "Frame 2358 illustration",
        srcSet: [
            { width: 618, url: "https://noviindus.com/wp-content/uploads/2024/04/Frame-2358.png" },
            { width: 300, url: "https://noviindus.com/wp-content/uploads/2024/04/Frame-2358-300x300.png" },
            { width: 150, url: "https://noviindus.com/wp-content/uploads/2024/04/Frame-2358-150x150.png" },
            { width: 200, url: "https://noviindus.com/wp-content/uploads/2024/04/Frame-2358-200x200.png" },
            { width: 500, url: "https://noviindus.com/wp-content/uploads/2024/04/Frame-2358-500x500.png" }
        ],
        height:"100vh",
        marginTop:"20vh"
    }
];

 

  //HOW WE WORK
  const iconBoxes = [
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-6.png",
      title: "Influencer Identification",
      description:
        "We help you find influencers who truly resonate with your brand and audience.",
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-7.png",
      title: "Campaign Planning",
      description:
        "We create a strategic plan to ensure a successful collaboration with the right influencers.",
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-8.png",
      title: "Content Creation",
      description:
        "We partner with influencers to craft engaging content that connects with your audience.",
    },

    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-11.png",
      title: "Campaign Execution",
      description:
        "We handle the details, managing every aspect of your influencer campaign to ensure it runs smoothly.",
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-11.png",
      title: "Performance Tracking",
      description:
        "We closely monitor the results, giving you clear insights into how the campaign is performing and how to improve.",
    },
  ];

  //Client Crousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 slides on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 slides on tablet screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Show 2 slides on mobile screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Show 1 slide on smaller mobile screens
        },
      },
    ],
  };

  const clientImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png", // Replace with your image URLs
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png",
  ];

  //Common Crousel

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    centerPadding: "60px",
    beforeChange: (current, next) => {
      setFadeClass("fade-out"); // Start fade out
      setTimeout(() => {
        setCurrentIndex(next);
        setFadeClass("fade-in"); // Fade in after index change
      }, 500); // Match this duration with your CSS transition duration
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  const cards = [
    {
      title: "Card Title 1",
      subtitle: "Subtitle 1",
      img: "https://www.shutterstock.com/image-photo/close-woman-hand-holding-modern-600nw-2481274347.jpg",
    },
    {
      title: "Card Title 2",
      subtitle: "Subtitle 2",
      img: "https://www.shutterstock.com/image-photo/close-woman-hand-holding-modern-600nw-2481274347.jpg",
    },
    {
      title: "Card Title 3",
      subtitle: "Subtitle 3",
      img: "https://www.shutterstock.com/image-photo/close-woman-hand-holding-modern-600nw-2481274347.jpg",
    },
    {
      title: "Card Title 4",
      subtitle: "Subtitle 4",
      img: "https://www.shutterstock.com/image-photo/close-woman-hand-holding-modern-600nw-2481274347.jpg",
    },
    {
      title: "Card Title 5",
      subtitle: "Subtitle 5",
      img: "https://www.shutterstock.com/image-photo/close-woman-hand-holding-modern-600nw-2481274347.jpg",
    },
  ];

  return (
    <>
      <div className="row d-flex align-items-center justify-content-center mt-5 container-fluid">
        <div className="col-12 text-center">
          {/* Subtitle */}
          <p className="text-uppercase text-primary">
            BEST INFLUENCER MAREKTING AGENCY IN DELHI NCR
          </p>

          {/* Title */}
          <h3
            className="mt-3"
            style={{
              color: "black",
              fontWeight: 600,
              fontSize: "40px",
              textDecoration: "upperCase",
            }}
          >
            Influencer Marketing
            <br />
            <span
              style={{ color: "#9F9F9F", fontWeight: 600, fontSize: "40px" }}
            >
              YOUR BRAND’ S VOICE AMPLIFIED
            </span>
          </h3>

          {/* Description */}
          <p
            className="mt-4"
            style={{ textAlign: "center", fontSize: "15px", lineHeight: "1.7" }}
          >
            <strong>
              Probey Services offers complete influencer marketing
            </strong>{" "}
            support, helping you connect with the right influencers to grow your
            brand and reach a wider audience.
          </p>

          {/* Button */}
          <div className="text-center mt-4 ">
            <Link
              href="https://noviindus.com/contact-us/"
              className="btn btn-dark btn-animation rounded-0"
            >
              <span>Get Free Quote</span>
              <i className="ms-2 ion-md-arrow-forward"></i>
            </Link>
          </div>
        </div>
      </div>
      <ImageSection images={images}/>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#f4f4ff" }}
      >
        <div className="text-center mb-5">
          <h3 className="mb-0"></h3>
          <h1 className="fw-bolder">How We Work</h1>
        </div>
        <div className="container">
          <div className="row g-4">
            {iconBoxes.map((box, index) => (
              <div key={index} className="col-lg-4 d-none d-lg-block">
                <div
                  className="icon-box p-5 rounded-3 bg-white h-100"
                  style={{
                    transition: "transform 0.3s ease",
                  }}
                >
                  <div className="icon-box-headline text-center">
                    <div className="icon-box-icon mb-3">
                      <img
                        src={box.icon}
                        alt={box.title}
                        style={{
                          maxWidth: "41px",
                          height: "auto",
                          margin: "0 auto",
                        }}
                      />
                    </div>
                    <h5 className="icon-box-title fw-bold mb-3">{box.title}</h5>
                  </div>
                  <p className="text-muted text-center mb-0">
                    {box.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-4">
        <div className="container">
          <div>
            <div className="row">
              <div className="col-md-6 border-right mb-3 mb-md-0">
                <div className="">
                  <p className="text-uppercase fw-bold text-muted  title mb-2">
                    Process
                  </p>
                  <hr />

                  <span className="text-capitalize display-5">
                    OUR
                    <br />
                    PROCESS
                  </span>

                  <span className="mt-2 w-75">
                    <strong>
                      Probey Services offers the best influencer marketing
                      agency services in Delhi NCR
                    </strong>{" "}
                    to enhance your business's online presence. Our expertise in
                    influencer marketing strategy and targeted campaigns makes
                    us one of the leading advertising companies in India,
                    ensuring that you reach a wider audience and connect with
                    potential customers effectively. We don’t just drive
                    engagement; we focus on converting followers into loyal
                    customers, helping you grow your business successfully. Let
                    us boost your visibility and transform your online presence
                    into tangible results.
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="grid-item">
                      <div className="">
                        <p className="text-uppercase fw-bold text-muted  title mb-2">
                          1
                        </p>
                        <hr />

                        <span className="text-capitalize text-wrap display-7 mb-4 ">
                          Influencer Identification & Outreach
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                          Probey Services identifies and partners with
                          influencers who align with your brand values and
                          target audience, ensuring authentic and impactful
                          collaborations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="grid-item">
                      <div className="">
                        <p className="text-uppercase fw-bold text-muted  title mb-2">
                          2
                        </p>
                        <hr />

                        <span className="text-capitalize text-wrap display-7 mb-4 pe-3">
                          Campaign Strategy Development
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                          We create a tailored influencer marketing strategy
                          that focuses on key platforms (Instagram, YouTube,
                          TikTok, etc.), target demographics, and measurable
                          goals.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <div className="grid-item">
                      <div className="">
                        <p className="text-uppercase fw-bold text-muted  title mb-2">
                          3
                        </p>
                        <hr />

                        <span className="text-capitalize text-wrap display-7 mb-4">
                          Content Collaboration & Approval
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                          Our team works closely with influencers to create
                          content that resonates with their followers while
                          maintaining your brand’s messaging and tone.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <div className="grid-item">
                      <div className="">
                        <p className="text-uppercase fw-bold text-muted  title mb-2">
                          4
                        </p>
                        <hr />

                        <span className="text-capitalize text-wrap display-7 mb-4">
                          Performance Tracking & Reporting
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                          Probey Services provides in-depth campaign performance
                          analysis, tracking key metrics like engagement rates,
                          follower growth, and conversions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mt-4">
                    <div className="grid-item">
                      <div className="">
                        <p className="text-uppercase fw-bold text-muted  title mb-2">
                          5
                        </p>
                        <hr />

                        <span className="text-capitalize text-wrap display-7 mb-4">
                          Long-Term Relationship Management
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                          We help foster long-term relationships with
                          influencers, enabling ongoing collaborations that
                          continue to build brand loyalty and awareness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 mb-4 pt-4">
        <div className="container mt-4">
          <h2 className=" mb-3">Proudly Associated with</h2>
          <Slider {...settings}>
            {clientImages.map((imgSrc, index) => (
              <div key={index} className="carousel-card">
                <img
                  src={imgSrc}
                  alt={`Client ${index + 1}`}
                  style={{
                    height: "100px",
                    width: "150px",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="container pt-4 mt-4">
        <div className="common-carousel">
          <h2 className="mb-4">Featured Work.</h2>
          <Slider {...settings2}>
            {cards.map((card, index) => (
              <div
                key={index}
                className="carousel-card border-0 overflow-hidden "
              >
                <div>
                  <img
                    fetchpriority="high"
                    decoding="async"
                    src={card.img}
                    alt={card.title}
                    className="img-fluid w-100 rounded-3"
                    style={{ maxHeight: "70vh" }}
                  />
                </div>
                <div className="pt-2">
                  <h5 className="card-title mb-2 mt-1 fw-bold">{card.title}</h5>
                  <p className="card-subtitle fw-bold">{card.subtitle}</p>
                </div>
              </div>
            ))}
          </Slider>

          <div
            className={`mt-2 slider-counter d-flex align-items-center fw-bold`}
          >
            <div className={` ${fadeClass}`}>{currentIndex + 1}</div>
            <div className="divider"></div>
            <div>{cards.length}</div>
          </div>
        </div>
      </div>
      <div className="my-4"></div>
      <div className="bg-dark text-white py-md-5 py-3 ">
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h3 className="display-5 mb-3">TRANSFORM YOUR BUSINESS TODAY</h3>
              <p className="custome-line-height p-font-size">
                Ready to take your business to the next level? Find new
                opportunities with the best Flutter app development company in
                India. Let us help you grow, create, and achieve greatness in
                ways you never thought possible.
              </p>
            </div>
            <div className="col-md-4  justify-content-center align-items-center d-flex">
              <div>
                <button className="btn btn-sm btn-dark btn-animation text-capitalize a">
                  Boosts My bussiness online
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="my-4"></div>
      <div className="faq-wrapper container">
        <div className="d-flex justify-content-between align-items-center inner-container">
          <div className="d-flex flex-column col-4 p-4">
            <h1 className="fw-semibold display-3">
              Help & FAQ
              <br />
              Center
            </h1>
            <p className="custome-line-height p-font-size">
              Need answers or guidance? Check out our Help & FAQ Center for
              quick solutions and thorough support. The best e-commerce
              management service is here to assist you every step of the way.
            </p>
          </div>

          <div className="col-6">
            <Accordion className="faq-accordions w-100">
              {faqData.map((faq) => (
                <Accordion.Item
                  key={faq.id}
                  eventKey={faq.id}
                  className="border-0 bg-transparent w-100"
                >
                  <Accordion.Header className="border-0 bg-transparent p-0 w-100 d-flex align-items-center">
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body
                    className="p-0 mb-3 text-muted"
                    style={{ width: "100%" }}
                  >
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductListing;
