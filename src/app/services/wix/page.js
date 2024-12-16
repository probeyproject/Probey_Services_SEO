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
      question: "What is Wix website design?",
      answer: (
        <>
          <p>
          Wix website design involves creating and customizing websites using the Wix platform, known for its intuitive drag-and-drop interface and powerful design tools. Wix allows for the development of professional, user-friendly websites with features such as responsive design, SEO optimization, and easy content management.
          </p>
        </>
      ),
    },
    {
      id: "1",
      question: "Why is Probey Services the best Wix website design company in Delhi NCR?",
      answer: (
        <p>
Probey Services is the best Wix website design company in Delhi NCR, offering expert Wix web design services that create visually appealing and high-performing websites. Our team utilizes Wix’s tools to craft customized websites that enhance user experience and are optimized for search engine rankings.
        </p>
      ),
    },
    {
      id: "2",
      question: "What does the Wix website design process involve?",
      answer: (
        <p>
Our Wix website design process includes several key steps: understanding your business needs, selecting and customizing Wix templates, developing a user-friendly and responsive site, performing thorough testing for compatibility, and launching the site with comprehensive training on site management and updates.
        </p>
      ),
    },
    {
      id: "3",
      question: "What makes Wix a good choice for website design?",
      answer: (
        <p>
Wix is an excellent choice for website design because of its flexible design options, user-friendly interface, and powerful built-in SEO tools. This platform allows us to craft highly customized websites that are visually attractive, easy to navigate, and optimized for better search engine rankings.
        </p>
      ),
    },
    {
      id: "4",
      question: "How long does it take to design a Wix website with Probey Services?",
      answer: (
        <p>
The timeline for designing a Wix website can vary based on the complexity and requirements of the project. On average, it takes about 4-6 weeks from the initial consultation to the live launch of your Wix website. Our streamlined process ensures timely delivery without compromising on quality.
        </p>
      ),
    },
    
  ];
  

function Wix() {

    //IMAGES SECTION
    const images = [
        {
            src: "/probeyImages/development/websiteDevelopment/wix.jpg",
            alt: "Component illustration",
            srcSet: [
                { width: 618, url: "/probeyImages/development/websiteDevelopment/wix.jpg" },
                { width: 300, url: "/probeyImages/development/websiteDevelopment/wix.jpg" },
                { width: 150, url: "/probeyImages/development/websiteDevelopment/wix.jpg" },
                { width: 200, url: "/probeyImages/development/websiteDevelopment/wix.jpg" },
                { width: 500, url: "/probeyImages/development/websiteDevelopment/wix.jpg" }
            ],          height:"80vh",
          marginTop:"0"
        },
        {
            src: "/probeyImages/development/websiteDevelopment/wix1.jpg",
            alt: "Frame illustration",
            srcSet: [
                { width: 618, url: "/probeyImages/development/websiteDevelopment/wix1.jpg" },
                { width: 300, url: "/probeyImages/development/websiteDevelopment/wix1.jpg" },
                { width: 150, url: "/probeyImages/development/websiteDevelopment/wix1.jpg" },
                { width: 200, url: "/probeyImages/development/websiteDevelopment/wix1.jpg" },
                { width: 500, url: "/probeyImages/development/websiteDevelopment/wix1.jpg" }
            ],  height:"100vh",
          marginTop:"20vh"
        },
        {
            src: "/probeyImages/development/websiteDevelopment/wix2.jpg",
            alt: "Frame 2351 illustration",
            srcSet: [
                { width: 618, url: "/probeyImages/development/websiteDevelopment/wix2.jpg" },
                { width: 300, url: "/probeyImages/development/websiteDevelopment/wix2.jpg" },
                { width: 150, url: "/probeyImages/development/websiteDevelopment/wix2.jpg" },
                { width: 200, url: "/probeyImages/development/websiteDevelopment/wix2.jpg" },
                { width: 500, url: "/probeyImages/development/websiteDevelopment/wix2.jpg" }
            ],          height:"80vh",
          marginTop:"0"
        },
        {
            src: "/probeyImages/development/websiteDevelopment/wix3.jpg",
            alt: "Frame 2358 illustration",
            srcSet: [
                { width: 618, url: "/probeyImages/development/websiteDevelopment/wix3.jpg" },
                { width: 300, url: "/probeyImages/development/websiteDevelopment/wix3.jpg" },
                { width: 150, url: "/probeyImages/development/websiteDevelopment/wix3.jpg" },
                { width: 200, url: "/probeyImages/development/websiteDevelopment/wix3.jpg" },
                { width: 500, url: "/probeyImages/development/websiteDevelopment/wix3.jpg" }
            ],  height:"100vh",
          marginTop:"20vh"
        }
    ];

 

    //HOW WE WORK
    const iconBoxes = [
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-6.png",
            title: "Needs Assessment",
            description: "We start by understanding your business goals and what you need from your website."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-7.png",
            title: "Design and Theme Selection",
            description: "We choose the right Wix templates and customize them to match your brand’s unique look and feel."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-8.png",
            title: "Development",
            description: "We build your website on the Wix platform, ensuring it is functional, responsive, and easy for your visitors to use."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-9.png",
            title: "Continuous Communication",
            description: "We keep the conversation flowing to ensure your input shapes every step, keeping us aligned with your expectations."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-10.png",
            title: "Thorough Quality Assurance (Testing)",
            description: "We thoroughly test your website to make sure it works perfectly on all devices and browsers."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-11.png",
            title: "Launch",
            description: "We help you launch your website and provide training so you can easily manage and update it."
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
                    <p className="text-uppercase text-primary">
                    BEST WIX WEBSITE DESIGN COMPANY IN NOIDA</p>

                    {/* Title */}
                    <h3 className="mt-3" style={{ color: 'black', fontWeight: 600, fontSize: '40px', textDecoration: 'upperCase' }}>
                    Wix Website Design
                        <br />
                        <span style={{ color: '#9F9F9F', fontWeight: 600, fontSize: '40px' }}>
                        CUSTOM WIX WEBSITES THAT CAPTIVATE AND CONVERT
                        </span>
                    </h3>

                    {/* Description */}
                    <p className="mt-4" style={{ textAlign: 'center', fontSize: "15px", lineHeight: "1.7" }}>
                    Probey Services provides top Wix website design services, creating visually appealing and highly functional websites that are easy to manage. Our expert team uses Wix’s advanced tools to create customized websites that fit your business needs, increasing your online presence and boosting your visibility.
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
                    <h1 className="fw-bolder">How We Work</h1>
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

                <span className="mt-2 w-75">Probey Services provide the best SEO services in Delhi NCR to increase your businesses online presence. Our expertise in SEO and engaging website design making us the best advertising company in India and ensures you rank higher on Google, making it easier for potential customers to find you. We don’t just drive traffic; we focus on converting visitors into customers, helping you grow your business effectively. Let us increase your visibility and turn your online presence into visible results.</span>
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
                      Custom Wix Website Design
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >
                        Probey Services designs visually appealing and fully responsive websites using Wix, tailored to your brand’s unique style and needs.
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
                      Drag-and-Drop Customization

                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >We provide easy-to-use customization options, allowing you to update content and design elements with Wix’s drag-and-drop functionality.
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
                      Wix SEO Optimization
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >We optimize your Wix website to improve search engine rankings by fine-tuning meta tags, images, and content for maximum visibility.
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
                      Wix e-Commerce Integration
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >Probey Services sets up E-Commerce functionality within Wix, enabling you to sell products and services directly from your website.
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
                      Ongoing Wix Support
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >
                       Our team provides continuous support for your Wix website, assisting with updates, improvements, and technical issues.
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

export default Wix