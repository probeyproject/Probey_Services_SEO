"use client";
import React, { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordion from "react-bootstrap/Accordion";
import ImageSection from "../../components/ImageSection"



const caseStudies = [
  {
    headerTitle: "CloveHR",
    data: [
      {
        title: "Challenge",
        description:
          "CloveHR, a leading human resources consultancy, faced challenges managing their expanding workforce and streamlining HR processes. Their existing systems were inadequate for their growing needs, leading to inefficiencies and difficulties in handling HR tasks.",
      },
      {
        title: "Solution",
        description:
          "Probey Services, recognized as the best web application development company in Delhi NCR, designed and implemented a custom Human Resource Management System (HRMS) tailored to CloveHR’s specific requirements. This system included payroll processing, attendance tracking, and employee management tools. We focused on making the system easy to use and added reporting features for better insights.",
      },
      {
        title: "Outcome",
        description:
          "The new HRMS from Probey Services improved HR efficiency by 40% and boosted employee satisfaction by 25%.This solution helped CloveHR offer better services to their clients. As the best web application development company in Delhi NCR, Probey Services delivered a solution that met CloveHR’s needs perfectly",
      },
    ],
    button: true,
  },
  {
    headerTitle: "Saletancy",
    data: [
      {
        title: "Challenge",
        description:
          "Salestancy, a sales consultancy based in Noida, needed a solution to manage their sales pipeline more effectively and improve client relationships. Their existing system was not meeting their needs for lead management and performance tracking.",
      },
      {
        title: "Solution",
        description:
          "Probey Services, the best web application development companies in Delhi NCR, developed a CRM system with features for lead tracking, reporting, and analytics. We ensured the CRM was user-friendly and integrated smoothly with Salestancy’s existing tools.",
      },
      {
        title: "Outcome",
        description:
          "The new CRM system from Probey Services improved sales performance by 30% and increased revenue by 20%. This solution helped Salestancy better manage their sales pipeline and achieve their business goals. As a top web application development company in Delhi NCR, Probey Services delivered a CRM solution that significantly impacted Salestancy’s operations and success.",
      },
    ],
    button: true,
  },
];

const faqData = [
    {
      id: "1",
      question: "What is E-commerce Software Solutions?",
      answer:
        "E-commerce software solutions are tailored platforms that enable businesses to sell products or services online. These solutions include features like product management, payment gateways, inventory control, and customer management to help streamline operations and provide a seamless shopping experience for customers."
    },
    {
      id: "2",
      question: "How can E-commerce solutions improve my business?",
      answer:
        "E-commerce solutions help businesses increase sales, reach new customers, and improve operational efficiency. With the right platform, you can automate processes, provide better customer service, and create an engaging user experience that keeps customers coming back."
    },
    {
      id: "3",
      question: "What are the key features of an E-commerce platform?",
      answer:
        "Key features of an e-commerce platform include secure payment processing, shopping cart functionality, product catalog management, customer accounts, order management, and integration with third-party services like shipping providers. Additionally, many platforms offer analytics and reporting features to track performance."
    },
    {
      id: "4",
      question: "Do I need custom software development for my business?",
      answer:
        "Custom software development is ideal for businesses that have unique needs or want to offer a personalized experience for customers. It allows for greater flexibility, scalability, and control over the features and functionality of your online store or internal business operations."
    },
    {
      id: "5",
      question: "How secure is an E-commerce platform?",
      answer:
        "Security is a top priority for e-commerce platforms. Reputable solutions use industry-standard encryption, secure payment gateways, and compliance with data protection regulations (like GDPR) to ensure customer data is kept safe. Additionally, ongoing security updates help protect against emerging threats."
    },
    {
      id: "6",
      question: "Can I integrate my E-commerce platform with other software?",
      answer:
        "Yes, most modern e-commerce platforms offer integration capabilities with various third-party software, such as accounting tools, CRM systems, ERP solutions, and marketing platforms. Integration can streamline your operations and enhance the overall efficiency of your business."
    }
  ];

function page() {
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
      title: "Requirement Gathering",
      description:
        "We start with a detailed consultation to understand your unique CRM needs and business requirements.",
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-7.png",
      title: "Design and Planning",
      description:
        "We create a clear plan for your CRM system, outlining the essential features and functionalities tailored to your business.",
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-8.png",
      title: "Development",
      description:
        "Our team custom-develops your CRM system, focusing on user-friendly design and seamless integration with your existing tools.",
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-9.png",
      title: "Testing",
      description:
        "We conduct thorough testing to ensure that your CRM system operates flawlessly and meets your expectations.",
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-10.png",
      title: "Deployment and Training",
      description:
        "We handle the deployment of your CRM system and provide comprehensive training to your team to ensure effective use and maximum benefit.",
    },
    // {
    //   icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-11.png",
    //   title: "Deployment",
    //   description:
    //     "We guide you through the process of launching your app on the Apple App Store and provide ongoing support to keep everything running smoothly.",
    // },
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
            Customized E-commerce and Software Solutions for Business Growth
          </p>

          {/* Title */}
          <h3
            className="mt-3"
            style={{
              color: "black",
              fontWeight: 600,
              fontSize: "40px",
              textTransform: "uppercase",
            }}
          >
            E-commerce and Software Solutions
            <br />
            <span
              style={{ color: "#9F9F9F", fontWeight: 600, fontSize: "40px" }}
            >
              Tailored for Your Business Needs and Success
            </span>
          </h3>

          {/* Description */}
          <p
            className="mt-4"
            style={{ textAlign: "center", fontSize: "15px", lineHeight: "1.7" }}
          >
            <strong>Probey Services</strong> specializes in developing custom
            e-commerce platforms and software solutions that streamline business
            operations and enhance customer experiences. We focus on building
            secure, scalable, and feature-rich platforms that drive growth,
            improve user engagement, and provide a seamless shopping
            experience—whether your customers are online or offline.
          </p>

          {/* Button */}
          <div className="text-center mt-4">
            <Link
              href="https://noviindus.com/contact-us/"
              className="btn btn-dark btn-animation rounded-0"
            >
              <span>Get a Free Quote</span>
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
                    <strong>Probey Services</strong> specializes in providing
                    expert web development solutions that are both highly
                    functional and user-friendly. We create responsive,
                    scalable, and secure websites that are designed to meet your
                    business needs. Our development process ensures seamless
                    user experiences, while integrating the latest technologies
                    to build websites that not only work well but also drive
                    engagement—whether viewed online or offline.
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
                          Custom Web Application Development
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                          <strong>Probey Services</strong> creates custom web
                          applications tailored to your specific business needs,
                          ensuring functionality, security, and scalability.
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
                          Cross-Browser Compatibility
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                          We ensure that your web applications function
                          seamlessly across all major browsers and devices,
                          providing a consistent user experience.
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
                          API Integration
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                          Probey Services integrates third-party services and
                          APIs, such as payment gateways, CRM systems, and
                          analytics, to enhance your web application’s
                          capabilities.
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
                          Secure & Scalable Architecture
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                          We build secure web applications with scalable
                          architecture that can handle growing user bases and
                          traffic without compromising performance.
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
                          Ongoing Support & Maintenance
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                          Our team offers continuous support and updates,
                          ensuring your web application remains secure,
                          efficient, and aligned with your evolving business
                          needs.
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
      <CommonCaseStudy caseStudies={caseStudies} />
      <div className="my-4"></div>
      <Awards />
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
              Explore our Help & FAQ Center for quick answers and comprehensive
              guidance on using our services. Our dedicated resources are
              designed to support you every step of the way.
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

export default page;