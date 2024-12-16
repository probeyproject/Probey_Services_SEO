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
      question: "Why should I choose WordPress for my website?",
      answer: (
        <>
          <p>
          WordPress is a powerful platform that’s easy to use and flexible. It’s great for creating a wide range of websites, from simple blogs to complex business sites. With its user-friendly interface and a vast library of themes and plugins, WordPress is one of the best choices for building a website that’s both functional and attractive.
          </p>
        </>
      ),
    },
    {
      id: "1",
      question: "Why is Probey Services the best WordPress website design company in India?",
      answer: (
        <p>
Probey Services stands out as the best WordPress website design company in India due to our expertise in creating custom, high-quality WordPress sites tailored to your needs.
We combine great design with effective functionality, ensuring that your site is user-friendly, visually appealing, and optimized for search engines. Our team is dedicated to delivering results that drive traffic and engagement, making us a top choice for businesses looking for exceptional WordPress website design services.   
        </p>
      ),
    },
    {
      id: "2",
      question: "What does the WordPress website design process involve?",
      answer: (
        <p>
Our process includes several key steps: first, we assess your needs and goals. Then, we design a visually appealing layout and select the best WordPress themes for your brand. We develop the site with a focus on user experience and SEO. Finally, we conduct thorough testing to ensure everything works perfectly before launching the site.
        </p>
      ),
    },
    {
      id: "3",
      question: "Will my WordPress website be optimized for search engines?",
      answer: (
        <p>
 Yes, our WordPress website design services include SEO optimization. We ensure that your website is built with SEO best practices in mind, such as using clean code, optimizing images, and implementing keyword strategies. This helps improve your site’s visibility and ranking in search engine results.   
        </p>
      ),
    },
    {
      id: "4",
      question: "What does the WordPress website design process involve?",
      answer: (
        <p>
Our process includes several key steps: first, we assess your needs and goals. Then, we design a visually appealing layout and select the best WordPress themes for your brand. We develop the site with a focus on user experience and SEO. Finally, we conduct thorough testing to ensure everything works perfectly before launching the site.
        </p>
      ),
    },
    {
      id: "5",
      question: " Can I update and manage my WordPress website myself?",
      answer: (
        <p>
Absolutely! One of the benefits of WordPress is its ease of use. We provide training and support to help you manage and update your site. You’ll be able to add content, make changes, and handle basic maintenance tasks without needing advanced technical skills.
        </p>
      ),
    },
    {
      id: "6",
      question: "How much do your WordPress website design services cost?",
      answer: (
        <p>
The cost of our WordPress website design services depends on the scope and complexity of the project. We provide customized quotes based on your specific needs and budget. Contact us for a detailed proposal and to discuss how we can create the perfect website for you.
        </p>
      ),
    },
  ];
  

function WordpressWebsite() {

    //IMAGES SECTION
    const images = [
        {
            src: "/probeyImages/development/websiteDevelopment/wordpress.jpg",
            alt: "Component illustration",
            srcSet: [
                { width: 618, url: "/probeyImages/development/websiteDevelopment/wordpress.jpg" },
                { width: 300, url: "/probeyImages/development/websiteDevelopment/wordpress.jpg" },
                { width: 150, url: "/probeyImages/development/websiteDevelopment/wordpress.jpg" },
                { width: 200, url: "/probeyImages/development/websiteDevelopment/wordpress.jpg" },
                { width: 500, url: "/probeyImages/development/websiteDevelopment/wordpress.jpg" }
            ],          height:"80vh",
          marginTop:"0"
        },
        {
            src: "/probeyImages/development/websiteDevelopment/wordpress1.jpg",
            alt: "Frame illustration",
            srcSet: [
                { width: 618, url: "/probeyImages/development/websiteDevelopment/wordpress1.jpg" },
                { width: 300, url: "/probeyImages/development/websiteDevelopment/wordpress1.jpg" },
                { width: 150, url: "/probeyImages/development/websiteDevelopment/wordpress1.jpg" },
                { width: 200, url: "/probeyImages/development/websiteDevelopment/wordpress1.jpg" },
                { width: 500, url: "/probeyImages/development/websiteDevelopment/wordpress1.jpg" }
            ],height:"100vh",
          marginTop:"20vh"
        },
        {
            src: "/probeyImages/development/websiteDevelopment/wordpress2.jpg",
            alt: "Frame 2351 illustration",
            srcSet: [
                { width: 618, url: "/probeyImages/development/websiteDevelopment/wordpress2.jpg" },
                { width: 300, url: "/probeyImages/development/websiteDevelopment/wordpress2.jpg" },
                { width: 150, url: "/probeyImages/development/websiteDevelopment/wordpress2.jpg" },
                { width: 200, url: "/probeyImages/development/websiteDevelopment/wordpress2.jpg" },
                { width: 500, url: "/probeyImages/development/websiteDevelopment/wordpress2.jpg" }
            ],          height:"80vh",
          marginTop:"0"
        },
        {
            src: "/probeyImages/development/websiteDevelopment/wordpress3.jpg",
            alt: "Frame 2358 illustration",
            srcSet: [
                { width: 618, url: "/probeyImages/development/websiteDevelopment/wordpress3.jpg" },
                { width: 300, url: "/probeyImages/development/websiteDevelopment/wordpress3.jpg" },
                { width: 150, url: "/probeyImages/development/websiteDevelopment/wordpress3.jpg" },
                { width: 200, url: "/probeyImages/development/websiteDevelopment/wordpress3.jpg" },
                { width: 500, url: "/probeyImages/development/websiteDevelopment/wordpress3.jpg" }
            ],height:"100vh",
          marginTop:"20vh"
        } 
    ];

 

    //HOW WE WORK
    const iconBoxes = [
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-6.png",
            title: "Needs Assessment",
            description: "We start by deeply understanding your business goals and website requirements to create a solution that fits perfectly."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-7.png",
            title: "Design and Theme Selection",
            description: "Our expert designers create a visually appealing layout and carefully select WordPress themes that match with your brand identity."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-8.png",
            title: "Development",
            description: "Using WordPress, we create a user-friendly website that’s easy to navigate and optimized for search engines."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-9.png",
            title: "Continuous Communication",
            description: "We keep the conversation flowing to ensure your input shapes every step, keeping us aligned with your expectations."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-10.png",
            title: "Thorough Quality Assurance (Testing)",
            description: "We test the site to make sure everything works well and looks right on all devices."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-11.png",
            title: "Launch",
            description: "We help you launch the site and show you how to manage and update it on your own."
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
                    BEST WORDPRESS WEBSITE DESIGN COMPANY IN NOIDA</p>

                    {/* Title */}
                    <h3 className="mt-3" style={{ color: 'black', fontWeight: 600, fontSize: '40px', textDecoration: 'upperCase' }}>
                    WordPress Website
                    Design
                        <br />
                        <span style={{ color: '#9F9F9F', fontWeight: 600, fontSize: '40px' }}>
                        STAND OUT AND SELL MORE WITH CUSTOM DESIGNS
                        </span>
                    </h3>

                    {/* Description */}
                    <p className="mt-4" style={{ textAlign: 'center', fontSize: "15px", lineHeight: "1.7" }}>
                    Probey Services offers expert WordPress website design services, creating powerful, easy-to-manage websites that boost your online presence. Our skilled team specializes in WordPress, delivering visually appealing, highly functional, and SEO-optimized websites that drive traffic and improve user experience.
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
                    <h1 className="fw-bolder">WordPress Design
                    Strategies</h1>
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
                      Custom iOS App Design & Development
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >
                   Probey Services creates custom WordPress themes and plugins tailored to your business needs, ensuring a unique and functional website.
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
                      SEO-Friendly WordPress Sites

                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >We optimize your WordPress site for search engines, implementing best practices for on-page SEO, speed, and performance.
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
                      Responsive Design

                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >Every WordPress site we build is fully responsive, ensuring it looks and functions perfectly on all devices.
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
                      Ongoing Maintenance & Updates
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >We offer long-term support and maintenance, keeping your WordPress site updated, secure, and running smoothly.
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
                      WordPress Security Enhancements
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >
                      Probey Services applies the latest security measures, including SSL certificates and regular backups, to protect your website from threats.
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

export default WordpressWebsite