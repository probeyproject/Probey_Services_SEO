"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Accordion from "react-bootstrap/Accordion";
import ImageSection from "../../../../components/ImageSection"


const faqData = [
  {
    id: "0",
    question: "Daily Enrichment Through Thoughtful Design",
    answer: (
      <>
        <p>
        Explores how intentional and innovative design choices can transform everyday experiences, making them more enjoyable and meaningful. By focusing on aesthetics, functionality, and user experience, thoughtful design enriches our lives in subtle yet profound ways.
        </p>
      </>
    ),
  },
  {
    id: "1",
    question: "Creative Expression Through Personal Experience in Design",
    answer: (
      <p>
      Highlights how integrating personal experiences into the design process fosters unique and authentic creations. This approach emphasizes individuality and creativity, resulting in designs that resonate deeply with both creators and users.
      </p>
    ),
  },
  {
    id: "2",
    question: "Solving Complex Problems with Human-Centered Design",
    answer: (
      <p>
Emphasizes a user-focused approach to address intricate issues by prioritizing human needs and experiences. This methodology fosters innovative solutions that are both effective and empathetic, ensuring designs that truly resonate with users.
      </p>
    ),
  },
  {
    id: "3",
    question: "Transforming Everyday Experiences Through Inspired Design",
    answer: (
      <p>
Explores how creative and innovative design can elevate ordinary moments into extraordinary ones. By infusing thoughtful aesthetics and functionality, this approach enriches daily life, fostering greater enjoyment and appreciation for the world around us.
      </p>
    ),
  },
  {
    id: "4",
    question: "Navigating the Landscape of Core Web Application Development",
    answer: (
      <p>
Offers a comprehensive exploration of tools, frameworks, and methodologies crucial for building robust web applications. This guide equips developers with insights and strategies to navigate the evolving terrain of web development effectively.
      </p>
    ),
  },

];


function Logo() {

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
      title: "Brand Analysis",
      description: "Understanding your brand values, mission, and target audience."
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-7.png",
      title: "Concept Development",
      description: "Brainstorming and developing logo concepts."
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-8.png",
      title: "Design",
      description: "Creating initial designs and refining based on feedback."
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-9.png",
      title: "Finalization",
      description: "Finalizing the logo design and preparing different formats for various uses."
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-10.png",
      title: "Delivery",
      description: "Providing the final logo files and guidelines for usage."
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
          Logo Design Company in Noida
</p>

          {/* Title */}
          <h3 className="mt-3" style={{ color: 'black', fontWeight: 600, fontSize: '40px', textDecoration: 'upperCase' }}>
          Logo Design

            <br />
            <span style={{ color: '#9F9F9F', fontWeight: 600, fontSize: '40px' }}>
            Your Brand’s Visual Signature
            </span>
          </h3>

          {/* Description */}
          <p className="mt-4" style={{ textAlign: 'center', fontSize: "15px", lineHeight: "1.7" }}>
          Probey Services specializes in creating memorable and impactful logos that represent your brand’s identity. Our design team works closely with you to understand your vision and create a logo that captures the essence of your business.
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
          <h1 className="fw-bolder">Blogs & Articles
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
                  Seamless  <br /> Steps <br />
                  </span>

                  <span className="mt-2 w-75">Probey Services offers professional logo design services in Delhi NCR, crafted to strengthen your brand’s identity and online presence. Our creative team designs unique, memorable logos that not only capture your brand’s essence but also make a lasting impression, positioning us among the top branding providers in India. We create logos that are visually compelling and strategically designed to resonate with your target audience, making it easier for potential customers to recognize and connect with your brand. More than just a visual mark, our logos help convert viewers into loyal customers, empowering sustainable brand growth. Let us elevate your brand identity and turn your logo into a powerful, measurable asset.</span>
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
                        Custom Logo Creation
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                        Probey Services creates unique and memorable logos that reflect your brand’s identity and resonate with your target audience.
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
                        Multiple Design Concepts
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >We provide several initial design concepts, allowing you to choose a direction that best represents your business.
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
                        Vector & Scalable Formats
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >Our logo designs are provided in vector formats, ensuring they can be scaled to any size without losing quality.
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
                        Brand Consistency
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >We ensure that your logo aligns with your overall brand identity, maintaining consistency across all your marketing materials.
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
                        Revision & Fine-Tuning
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                          Probey Services works closely with you, offering multiple revisions to ensure the final logo meets your vision perfectly.
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
        <hr />
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
        <hr />
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

export default Logo