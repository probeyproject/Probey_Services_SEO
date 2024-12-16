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
    question: "What is SEO? How does it work?",
    answer: (
      <>
        <p>
          SEO or Search Engine Optimization is the practice of optimizing a
          website to improve its rankings in Google search results. Since most
          of the customers use Google to find services and products, SEO is the
          right tool for every brand to reach a potential audience. While
          building an SEO campaign, the idea is to optimize different elements
          of a website such as its content, loading speed, page layout, etc. so
          that it becomes more engaging. In addition to this, SEO also involves
          off-page optimization that mainly deals with the elements that aren’t
          present on the website.
        </p>
        <p>
          This involves link building, citation building, sitemap layout, etc.
          Off-page optimization will improve your website’s domain authority
          (DA) and it’ll become easier for Google to crawl and rank your web
          pages for the target search queries. Contact us to get the best SEO
          services in India.
        </p>
      </>
    ),
  },
  {
    id: "1",
    question: "Why should I need Search Engine Optimization for my website?",
    answer: (
      <>
        <p>
          In Google, there are two ways to show the website on page 1 to drive
          the relevant traffic to your website. The first method is through paid
          ads. In this method, you must pay Google on a per-click basis which is
          known as PPC. This is a budget-oriented thing. For example, if you
          have a budget of Rs 1000 per day and the keyword cost is 10 Rs per
          click then you can get almost 100 clicks. But the click cost depends
          on the business and Keywords which you select.
        </p>
        <p>
          The second method is Search engine optimization. It is a free
          advertising thing which means you do not have to pay for the click.
          But it is a long-term process, and the results also last for a long
          time. So, if you want business branding for the long term then you
          must go for Probey providing the best SEO services in India.
        </p>
      </>
    ),
  },
  {
    id: "2",
    question: "What do the SEO Companies do on my website?",
    answer: (
      <p>
        Well SEO Companies use search engine optimization techniques in Like ON
        Page Search engine optimization, OFF-Page search engine optimization &
        technical search engine optimization. With the application of these
        things, you can see your website on Page 1 in Google on top keywords. If
        you’re looking for long-term success, the best SEO services in India
        will provide sustainable organic traffic.
      </p>
    ),
  },
  {
    id: "3",
    question:
      "Why Probey Services is the Best SEO service provider in Delhi NCR?",
    answer: (
      <p>
        Probey Services provide the best SEO services in India because we are
        dedicated to your success. From transparent communication and ethical
        practices to delivering results that drive growth, you can check our SEO
        results. We work on ethical white-hat organic search engine optimization
        techniques to get high rankings on Google searches.
      </p>
    ),
  },
  {
    id: "4",
    question: "What is the pricing for the best SEO services in India?",
    answer: (
      <p>
        The pricing totally depends on the business niche. For example, if you
        want to target a local market then the package is different. If you want
        to target the whole country, then the search engine optimization package
        cost is different. Whether it’s local or global, the best SEO services
        in India are customized to your needs.
      </p>
    ),
  },
  {
    id: "5",
    question: "What Tools Are You Using in SEO?",
    answer: (
      <p>
        We are using the following tools in SEO. SEMRush <br /> ahrefs <br />{" "}
        Google Keyword Planner <br /> Siteliner <br /> Google Search Console{" "}
        <br /> Google Analytics GA 4
      </p>
    ),
  },
];

function Seo() {
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
      title: "Keyword Research",
      description:
        "Keyword Researche find the best keywords that will help your business stand out and attract the right audience.",
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-7.png",
      title: "On-Page Optimization",
      description:
        "We improve your website’s content, meta tags, and internal links to make sure it’s easily found and loved by search engines.",
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-8.png",
      title: "Off-Page Optimization",
      description:
        "Off-Page OptimizationWe make quality backlinks and work on increasing your online presence to increase your site's authority and reach.",
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-9.png",
      title: "Content Creation",
      description:
        "We create attractive, SEO-friendly content that not only speaks to your audience but also helps improve your search rankings, ensuring you're working with the best SEO service provider.",
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-10.png",
      title: "Monitoring and Reporting",
      description:
        "We keep a close eye on your website’s performance and provide you with clear, detailed reports to keep you informed.",
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
            BEST SEO SERVICES IN INDIA
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
            Search Engine
            Optimization
            <br />
            <span
              style={{ color: "#9F9F9F", fontWeight: 600, fontSize: "40px" }}
            >
              BOOST YOUR VISIBILITY, ATTRACT MORE LEADS
            </span>
          </h3>

          {/* Description */}
          <p
            className="mt-4"
            style={{ textAlign: "center", fontSize: "15px", lineHeight: "1.7" }}
          >
           At Probey Services, we’re dedicated to making sure your business gets noticed online. As one of the <strong>best SEO services in India</strong>, our experts create personalized strategies that improve your search rankings and result in more organic traffic to your site, as the <strong>seo company in noida</strong> we ensure your business grows by bringing in more leads and growing your online presence.
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
                    Our <br /> Process <br />
                  </span>

                  <span className="mt-2 w-75">
                   <strong> Probey Services</strong> provide <strong>the best SEO services in Delhi NCR </strong>
                     to increase your businesses online presence. Our expertise
                    in SEO and engaging website design making us the best
                    advertising company in India and ensures you rank higher on
                    Google, making it easier for potential customers to find
                    you. We don’t just drive traffic; we focus on converting
                    visitors into customers, helping you grow your business
                    effectively. Let us increase your visibility and turn your
                    online presence into visible results.
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
                        Keyword Research and Analysis
                        </span>
                        {/* <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                          Probey Services will design and develop custom iOS
                          apps that align with your brand and business needs,
                          ensuring a smooth and intuitive user experience.
                          Probey Services, we create highly functional
                          cross-platform apps using Flutter, allowing your app
                          to work seamlessly on both iOS and Android devices
                          with a single codebase.
                        </p> */}
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
                        On-Page SEO Optimization
                        </span>
                        {/* <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                          We use the latest iOS SDKs and development practices
                          to create high-performance, secure, and scalable apps
                          for iPhones and iPads.
                        </p> */}
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
                        Off-Page SEO Activities
                        </span>
                        {/* <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                          Probey Services optimizes your app for the Apple App
                          Store with the right keywords, descriptions, and icons
                          to improve discoverability and downloads.
                        </p> */}
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
                        Content Creation and Optimization
                        </span>
                        {/* <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                          Our team performs rigorous testing to ensure your app
                          is bug-free, performs well, and provides a seamless
                          experience across all iOS devices.
                        </p> */}
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
                        Performance Monitoring and Reporting
                        </span>
                        {/* <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                          After launch, Probey Services offers continuous
                          support and maintenance to keep your app up-to-date
                          with iOS updates and user feedback.
                        </p> */}
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
            Need answers or guidance about the best SEO services in India? Check out our Help & FAQ Center for quick solutions and thorough support. We’re here to assist you every step of the way.
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

export default Seo;
