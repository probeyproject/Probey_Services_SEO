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
      question: " What is website redesigning?",
      answer: (
        <>
          <p>
          Website redesigning involves updating and improving an existing website’s design, layout, and functionality to improve its appearance, user experience, and performance. Website redesign services can include changes to the site’s structure, content, navigation, and overall look and feel, ensuring it meets modern standards and aligns with evolving business goals.
          </p>
        </>
      ),
    },
    {
      id: "1",
      question: "Why should I consider a website revamp?",
      answer: (
        <p>
A website revamp can help improve user experience, increase engagement and conversions. If your site looks outdated, is difficult to navigate, or isn’t performing well on search engines, a website redesign can address these issues and help your business grow online.
        </p>
      ),
    },
    {
      id: "2",
      question: "Why Probey Services provides the best website redesign services in Delhi NCR?",
      answer: (
        <p>
Probey Services is known for providing effective website redesign services customized to your business needs. We focus on creating user-friendly, SEO-optimized websites that not only look good but also perform well, making us the best website redesign company in Delhi NCR.
        </p>
      ),
    },
    {
      id: "3",
      question: "How long does it for a website revamp?",
      answer: (
        <p>
The time required for a website revamp depends on the complexity of the project. Typically, it can take anywhere from a few weeks to a couple of months. Probey Services will provide a detailed timeline after understanding your specific requirements.
        </p>
      ),
    },
    {
      id: "4",
      question: " Will a website revamp affect my SEO rankings?",
      answer: (
        <p>
A well-done website redesign by Probey Services will not only maintain your current SEO rankings but can improve them. We make sure that all SEO elements are carefully managed during the redesign process to improve your site’s visibility on search engines.
        </p>
      ),
    },
    {
      id: "5",
      question: "  How can I get started with a website redesign services from Probey Services?",
      answer: (
        <p>
To get started, you can <b>contact us</b> through our website or give us a call. We will set up an initial consultation with you to discuss your needs and goals, and from there, we’ll create a customized plan for your website redesign.
        </p>
      ),
    },
  ];
  

function WebsiteRedesigning() {

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
            title: "Website Analysis",
            description: "We start by reviewing your existing website to pinpoint areas that need improvement."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-7.png",
            title: "Design and Planning",
            description: "We create a fresh design that matches your brand and addresses the identified challenges, making sure the website revamp aligns with your goals."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-8.png",
            title: "Development",
            description: "We redesign your website using the latest technologies to improve performance and usability, as part of our 360 website redesign services."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-9.png",
            title: "Continuous Communication",
            description: "We keep the conversation flowing to ensure your input shapes every step, keeping us aligned with your expectations."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-10.png",
            title: "Thorough Quality Assurance (Testing)",
            description: "We perform detailed testing to make sure the new site is bug-free and runs smoothly."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-11.png",
            title: "Launch and Optimization",
            description: "Finally, we launch the redesigned site as part of the website revamp and provide continuous support to keep it optimized."
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
                    <p className="text-uppercase text-primary">BEST WEBSITE REDESIGN SERVICES IN INDIA</p>

                    {/* Title */}
                    <h3 className="mt-3" style={{ color: 'black', fontWeight: 600, fontSize: '40px', textDecoration: 'upperCase' }}>
                    Website Redesigning
                        <br />
                        <span style={{ color: '#9F9F9F', fontWeight: 600, fontSize: '40px' }}>
                        Custom Designs that bring Engagement
                        </span>
                    </h3>

                    {/* Description */}
                    <p className="mt-4" style={{ textAlign: 'center', fontSize: "15px", lineHeight: "1.7" }}>
                    Probey Services provides professional <b>website redesign services</b> to redesign your existing website, improving its design, functionality, and performance. Our <b>website revamp</b> services aim to improve user experience, increase engagement, and drive conversions.
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
                    <h1 className="fw-bolder">Website Redesigning
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
                      Comprehensive Website Audit

                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >
                      Probey Services conducts a detailed audit of your current website to identify areas for improvement in terms of design, performance, and user experience.
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
                      Modern & Responsive Redesign
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >We provide a complete overhaul of your website with a modern, responsive design that looks great on all devices and improves overall usability.
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
                      SEO & Content Optimization
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >Our redesign services include optimizing your content for SEO, ensuring that your redesigned website maintains or improves its search engine rankings.
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
                      Improved Navigation & User Experience
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >Probey Services focuses on enhancing your website’s navigation and user interface to make it more intuitive and engaging for visitors.

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
                      Faster Load Times
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >
                  We optimize your website’s performance, reducing page load times and improving the overall user experience, which also positively impacts your search rankings.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="grid-item">
                    <div className="">
                      <p className="text-uppercase fw-bold text-muted  title mb-2">
                        6
                      </p>
                      <hr />

                      <span className="text-capitalize text-wrap display-7 mb-4 ">
                      Ongoing Maintenance & Updates
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >
                  After the redesign, we provide continuous support and updates to ensure your site stays up-to-date with the latest design trends and technological advancements.

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

export default WebsiteRedesigning