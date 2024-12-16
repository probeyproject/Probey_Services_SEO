"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  Accordion  from "react-bootstrap/Accordion";
import ImageSection from "../../components/ImageSection"

const faqData = [
    {
      id: "0",
      question: "What is Shopify website design?",
      answer: (
        <>
          <p>
          Shopify website design involves creating and customizing an online store using the Shopify platform. This process includes designing the layout, integrating essential e-commerce features like inventory management and payment gateways, and ensuring the site is user-friendly and optimized for performance. Shopify is a leading platform for e-commerce due to its ease of use and powerful features.
          </p>
        </>
      ),
    },
    {
      id: "1",
      question: "Why is Probey Services the best Shopify website design company in Delhi NCR?",
      answer: (
        <p>
Probey Services is considered one of the best Shopify website design companies in Delhi NCR because we offer top Shopify website design services that meet your specific business needs. Our team excels in creating high-quality, custom Shopify stores that enhance user experience and drive sales. We leverage Shopify’s full capabilities to deliver exceptional e-commerce solutions that help grow your online presence.
        </p>
      ),
    },
    {
      id: "2",
      question: "Why do I need AnWhat do your Shopify website design services include?droid app development for my business?",
      answer: (
        <p>
Our Shopify website design services include everything from initial design and development to post-launch support. We create custom designs that reflect your brand, set up essential e-commerce features, integrate secure payment systems, and ensure your site is responsive and SEO-friendly. We also provide training and ongoing support to help you manage and optimize your Shopify store effectively.
        </p>
      ),
    },
    {
      id: "3",
      question: "What do your Shopify website design services include?",
      answer: (
        <p>
  Our Shopify website design services include everything from initial design and development to post-launch support. We create custom designs that reflect your brand, set up essential e-commerce features, integrate secure payment systems, and ensure your site is responsive and SEO-friendly. We also provide training and ongoing support to help you manage and optimize your Shopify store effectively.
        </p>
      ),
    },
    {
      id: "4",
      question: "How long does it take to design a Shopify website?",
      answer: (
        <p>
The time required to design a Shopify website varies based on the project’s complexity and your specific needs. Typically, our Shopify website design process takes between 4 to 8 weeks, from initial consultation to final launch. We ensure timely delivery while maintaining high-quality standards to meet your business goals.
        </p>
      ),
    },
    {
      id: "5",
      question: "Do you offer ongoing support after the website is launched?",
      answer: (
        <p>
Yes, we offer ongoing support as part of our Shopify website design services. After launching your Shopify store, we assist with updates, troubleshooting, and any issues that may arise. Our goal is to ensure your Shopify website remains effective and continues to meet your business needs.
        </p>
      ),
    },
  ];
  

function Shopify() {

    //IMAGES SECTION
    const images = [
        {
            src: "/probeyImages/development/websiteDevelopment/shopify.jpg",
            alt: "Component illustration",
            srcSet: [
                { width: 618, url: "/probeyImages/development/websiteDevelopment/shopify.jpg" },
                { width: 300, url: "/probeyImages/development/websiteDevelopment/shopify.jpg" },
                { width: 150, url: "/probeyImages/development/websiteDevelopment/shopify.jpg" },
                { width: 200, url: "/probeyImages/development/websiteDevelopment/shopify.jpg" },
                { width: 500, url: "/probeyImages/development/websiteDevelopment/shopify.jpg" }
            ],
                      height:"80vh",
          marginTop:"0"
        },
        {
            src: "/probeyImages/development/websiteDevelopment/shopify1.jpg",
            alt: "Frame illustration",
            srcSet: [
                { width: 618, url: "/probeyImages/development/websiteDevelopment/shopify1.jpg" },
                { width: 300, url: "/probeyImages/development/websiteDevelopment/shopify1.jpg" },
                { width: 150, url: "/probeyImages/development/websiteDevelopment/shopify1.jpg" },
                { width: 200, url: "/probeyImages/development/websiteDevelopment/shopify1.jpg" },
                { width: 500, url: "/probeyImages/development/websiteDevelopment/shopify1.jpg" }
            ],  height:"100vh",
          marginTop:"20vh"
        },
        {
            src: "/probeyImages/development/websiteDevelopment/shopify2.jpg",
            alt: "Frame 2351 illustration",
            srcSet: [
                { width: 618, url: "/probeyImages/development/websiteDevelopment/shopify2.jpg" },
                { width: 300, url: "/probeyImages/development/websiteDevelopment/shopify2.jpg" },
                { width: 150, url: "/probeyImages/development/websiteDevelopment/shopify2.jpg" },
                { width: 200, url: "/probeyImages/development/websiteDevelopment/shopify2.jpg" },
                { width: 500, url: "/probeyImages/development/websiteDevelopment/shopify2.jpg" }
            ],          height:"80vh",
          marginTop:"0"
        },
        {
            src: "/probeyImages/development/websiteDevelopment/shopify3.jpg",
            alt: "Frame 2358 illustration",
            srcSet: [
                { width: 618, url: "/probeyImages/development/websiteDevelopment/shopify3.jpg" },
                { width: 300, url: "/probeyImages/development/websiteDevelopment/shopify3.jpg" },
                { width: 150, url: "/probeyImages/development/websiteDevelopment/shopify3.jpg" },
                { width: 200, url: "/probeyImages/development/websiteDevelopment/shopify3.jpg" },
                { width: 500, url: "/probeyImages/development/websiteDevelopment/shopify3.jpg" }
            ],  height:"100vh",
          marginTop:"20vh"
        }
    ];
 

    //HOW WE WORK
    const iconBoxes = [
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-6.png",
            title: "Business Analysis",
            description: "We start by understanding your business model and what you need from your Shopify store."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-7.png",
            title: "Design and Functionality Planning",
            description: "We create a user-centric design and plan out the features that will make your store effective."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-8.png",
            title: "Development",
            description: "Using Shopify, we develop the store with a focus on performance and security."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-9.png",
            title: "Continuous Communication",
            description: "We keep the conversation flowing to ensure your input shapes every step, keeping us aligned with your expectations."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-10.png",
            title: "Thorough Quality Assurance (Testing)",
            description: "We thoroughly test everything to ensure your store works well and is secure."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-11.png",
            title: "Launch and Optimization",
            description: "We help you launch the store and continue to optimize it for better performance over time."
        }
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
    const [fadeClass, setFadeClass] = useState('fade-in');

    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000,
        centerPadding: '60px',
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
        { title: "Card Title 1", subtitle: "Subtitle 1", img: "https://www.shutterstock.com/image-photo/close-woman-hand-holding-modern-600nw-2481274347.jpg" },
        { title: "Card Title 2", subtitle: "Subtitle 2", img: "https://www.shutterstock.com/image-photo/close-woman-hand-holding-modern-600nw-2481274347.jpg" },
        { title: "Card Title 3", subtitle: "Subtitle 3", img: "https://www.shutterstock.com/image-photo/close-woman-hand-holding-modern-600nw-2481274347.jpg" },
        { title: "Card Title 4", subtitle: "Subtitle 4", img: "https://www.shutterstock.com/image-photo/close-woman-hand-holding-modern-600nw-2481274347.jpg" },
        { title: "Card Title 5", subtitle: "Subtitle 5", img: "https://www.shutterstock.com/image-photo/close-woman-hand-holding-modern-600nw-2481274347.jpg" },
    ];


    return (
        <>
            <div className="row d-flex align-items-center justify-content-center mt-5 container-fluid">
                <div className="col-12 text-center">
                    {/* Subtitle */}
                    <p className="text-uppercase text-primary">BEST SHOPIFY WEBSITE DESIGN COMPANY IN NOIDA</p>

                    {/* Title */}
                    <h3 className="mt-3" style={{ color: 'black', fontWeight: 600, fontSize: '40px', textDecoration: 'upperCase' }}>
                    Shopify Website
                    Design
                        <br />
                        <span style={{ color: '#9F9F9F', fontWeight: 600, fontSize: '40px' }}>
                        DESIGN YOUR SUCCESS WITH PROFESSIONAL SHOPIFY WEBSITE SOLUTIONS
                        </span>
                    </h3>

                    {/* Description */}
                    <p className="mt-4" style={{ textAlign: 'center', fontSize: "15px", lineHeight: "1.7" }}>
                    Probey Services offers the best Shopify website design services. We create effective online stores that drive sales and improve user experience. Our team uses Shopify’s features to build customized Shopify websites that fit your business needs. Whether you need a new store or a redesign, we make sure your Shopify site is easy to use and visually appealing. With our Shopify website design services, you can boost your online presence and get better results.
                    </p>

                    {/* Button */}
                    <div className="text-center mt-4 ">
                        <Link href="/Contact-us" className="btn btn-dark btn-animation rounded-0">
                            <span>Get Free Quote</span>
                            <i className="ms-2 ion-md-arrow-forward"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <ImageSection images={images}/>
            <div className='container-fluid py-5' style={{ backgroundColor: "#f4f4ff" }}>
                <div className="text-center mb-5">
                    <h3 className="mb-0"></h3>
                    <h1 className="fw-bolder">Shopify Website Design
Strategies
</h1>
                </div>
                <div className='container'>
                    <div className="row g-4">
                        {iconBoxes.map((box, index) => (
                            <div key={index} className="col-lg-4 d-none d-lg-block">
                                <div className="icon-box p-5 rounded-3 bg-white h-100" style={{
                                    transition: 'transform 0.3s ease'
                                }}>
                                    <div className="icon-box-headline text-center">
                                        <div className="icon-box-icon mb-3">
                                            <img
                                                src={box.icon}
                                                alt={box.title}
                                                style={{
                                                    maxWidth: '41px',
                                                    height: 'auto',
                                                    margin: '0 auto'
                                                }}
                                            />
                                        </div>
                                        <h5 className="icon-box-title fw-bold mb-3">
                                            {box.title}
                                        </h5>
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
            <div className="col-md-6 border-right mb-3 mb-md-0" >
              <div className="">
                <p className="text-uppercase fw-bold text-muted  title mb-2">
                  Process
                </p>
                <hr />
                
                <span className="text-capitalize display-5">
                Our <br /> Process <br />
                </span>

                <span className="mt-2 w-75">Probey Services offers top-tier Shopify development services in Delhi NCR, focused on elevating your business’s online presence. Our expertise in Shopify development and SEO-driven design positions us as one of the best e-commerce solution providers in India. We ensure your Shopify store ranks higher on Google, making it easier for potential customers to find and engage with your brand. Beyond driving traffic, we focus on converting visitors into loyal customers, helping you grow your business seamlessly. Let us enhance your visibility and turn your online presence into tangible results.</span>
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
                      Custom Shopify Store Setup

                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >
                        Probey Services offers complete Shopify store setup and customization, ensuring your e-commerce site reflects your brand and drives sales.
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
                      Shopify App Integration
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >We integrate third-party apps and plugins to enhance your Shopify store’s functionality, offering features like abandoned cart recovery, email marketing, and more.
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
                      Responsive Shopify Themes

                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >Our team ensures that your Shopify store is mobile-friendly, providing a seamless shopping experience across devices.
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
                      Product Management & Optimization
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >We optimize product listings, images, and descriptions to boost your store’s visibility on search engines and within the Shopify ecosystem.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="grid-item">
                    <div className="">
                      <p className="text-uppercase fw-bold text-muted  title mb-2">
                        5
                      </p>
                      <hr />

                      <span className="text-capitalize text-wrap display-7 mb-4 ">
                      Ongoing Shopify Support
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >
                       Probey Services offers continuous support and maintenance for your Shopify store, ensuring smooth operations and fast resolutions to technical issues.
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
                            <img src={imgSrc} alt={`Client ${index + 1}`} style={{ height: '100px', width: '150px', objectFit: 'contain' }} />
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
                        <div key={index} className="carousel-card border-0 overflow-hidden ">
                            <div>
                                <img
                                    fetchpriority="high"
                                    decoding='async'
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

                <div className={`mt-2 slider-counter d-flex align-items-center fw-bold`}>
                    <div className={` ${fadeClass}`}>{currentIndex + 1}</div>
                    <div className="divider"></div>
                    <div>{cards.length}</div>
                </div>

            </div>
        </div>
        <div className='my-4'></div>
        <div className='bg-dark text-white py-md-5 py-3 '>
        <hr/>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <h3 className='display-5 mb-3' >TRANSFORM YOUR BUSINESS TODAY</h3>
                    <p className='custome-line-height p-font-size'>
                    Ready to take your business to the next level? Find new opportunities with the best Flutter app development company in India. Let us help you grow, create, and achieve greatness in ways you never thought possible.
                    </p>
                </div>
                <div className='col-md-4  justify-content-center align-items-center d-flex'>
                    <div><button className='btn btn-sm btn-dark btn-animation text-capitalize a'>
                        Boosts My bussiness online
                    </button></div>
                </div>
            </div>

        </div>
        <hr/>
    </div>
    <div className='my-4'></div>
        <div className="faq-wrapper container">
      <div className="d-flex justify-content-between align-items-center inner-container">
        <div className="d-flex flex-column col-4 p-4">
        <h1 className="fw-semibold display-3">
        Help & FAQ
          <br />
          Center
        </h1>
        <p className="custome-line-height p-font-size">Need answers or guidance? Check out our Help & FAQ Center for quick solutions and thorough support on the best Flutter app development services in India. We’re here to assist you every step of the way.</p>
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
    )
}

export default Shopify