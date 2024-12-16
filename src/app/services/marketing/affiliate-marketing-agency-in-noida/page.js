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
    question: "What is E-Commerce Management?",
    answer: (
      <>
        <p>
        E-commerce management involves running and improving your online store. It includes tasks like managing your product inventory, handling customer orders, and providing support when customers have questions or issues. The main aim is to keep your online business running smoothly, making it easy for customers to buy from you and ensuring you can handle their orders efficiently. As the best e-commerce management service provider, we ensure your store operates at peak performance.
        </p>
      </>
    ),
  },
  {
    id: "1",
    question: "Why Should I Invest in E-Commerce Management Services?",
    answer: (
      <>
        <p>
        Investing in best e-commerce management services is important because it helps make your online store work better. These services help you keep track of your inventory more easily, speed up how quickly you can process and ship orders, and provide better customer support. This means happier customers, fewer problems, and more sales. If you want your online store to succeed and grow, these best e-commerce management services can make a big difference.
        </p>
      </>
    ),
  },
  {
    id: "2",
    question: "What Does Probey Services Do for E-Commerce Management?",
    answer: (
      <p>
        At Probey Services, the best e-commerce management company, we take care of everything needed to manage your online store. We set up and maintain systems that keep track of your stock, automate the process of handling orders, and improve how you assist your customers. Our goal is to help your store run efficiently and make it easier for you to manage all aspects of your online business.
      </p>
    ),
  },
  {
    id: "3",
    question: "Why is Probey Services the Best Choice for E-Commerce Management in India?",
    answer: (
      <>
        <p>
        Probey Services is a top choice for best e-commerce management in India because we have a lot of experience and know how to get results. We use the latest tools and methods to make sure your online store operates smoothly and effectively. Our team is dedicated to improving your store’s performance and making sure your customers are satisfied with their shopping experience.
        </p>
      </>
    ),
  },
  {
    id: "4",
    question: "How Much Do E-Commerce Management Services Cost?",
    answer: (
      <>
        <p>
        The cost of e-commerce management services depends on your store’s needs and size. We offer different packages based on what you require, whether it’s basic setup or more advanced features. We can provide a solution that fits your budget and helps you get the most out of your online store.
        </p>
      </>
    ),
  },

  {
    id: "5",
    question: "Do You Offer Discounts for Long-Term E-Commerce Management Packages?",
    answer: (
      <>
        <p>
        Yes, we do offer discounts if you choose a long-term package for best e-commerce management. Paying for a longer period upfront can save you money and ensures you get continuous support and updates. Contact us to discuss your needs and learn more about the discounts we can offer.
        </p>
      </>
    ),
  },
];

function AffliateMarketing () {
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
      title: "Program Setup",
      description: "Establishing an effective affiliate program structure.",
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-7.png",
      title: "Recruitment",
      description:
        "Identifying and recruiting top-performing affiliates.",
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-8.png",
      title: "Providing affiliates with the necessary tools and resources.",
    },
    
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-11.png",
      title: "Campaign Management",
      description:
        "Managing affiliate campaigns and monitoring performance.",
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-11.png",
      title: "Reporting",
      description:
        "Providing detailed reports on affiliate performance.",
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
          Affiliate Marketing Agency in Noida
          
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
            Affiliate Marketing
            <br />
            <span
              style={{ color: "#9F9F9F", fontWeight: 600, fontSize: "40px" }}
            >
             Boost Revenue Through Effective Affiliates
            </span>
          </h3>

          {/* Description */}
          <p
            className="mt-4"
            style={{ textAlign: "center", fontSize: "15px", lineHeight: "1.7" }}
          >
          <strong>Probey Services offers expert affiliate marketing services</strong> to help you create and manage successful affiliate programs that drive sales and increase revenue.
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
                  Seamless  
                    <br />
                    Steps
                  </span>

                  <span className="mt-2 w-75">
                  <strong>Probey Services offers the best affiliate marketing agency services in Delhi NCR</strong> to enhance your business's online presence. Our expertise in affiliate marketing strategy and targeted campaigns makes us one of the leading advertising companies in India, ensuring that you reach a wider audience and connect with potential customers effectively. We don’t just drive traffic; we focus on converting referrals into loyal customers, helping you grow your business successfully. Let us boost your visibility and transform your online presence into tangible results.
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
                        Affiliate Program Setup & Management
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                          Probey Services will set up and manage a comprehensive affiliate marketing program that incentivizes partners to promote your products or services.
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
                        Affiliate Recruitment
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                         We identify and onboard high-quality affiliates who can drive traffic and sales through their networks, blogs, and social media platforms.
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
                        Commission Structure Optimization
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                         Probey Services develops a commission structure that motivates affiliates while ensuring maximum ROI for your business.

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
                        Performance Monitoring
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                         We use advanced tracking tools to monitor affiliate performance, ensuring you’re getting the most value from each partner and adjusting strategies as needed.
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
                        Affiliate Relationship Management
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                        Probey Services maintains strong communication with affiliates, providing support, promotional materials, and regular updates to keep them engaged and motivated.
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
            Need answers or guidance? Check out our Help & FAQ Center for quick solutions and thorough support. The best e-commerce management service is here to assist you every step of the way.
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

export default AffliateMarketing ;
