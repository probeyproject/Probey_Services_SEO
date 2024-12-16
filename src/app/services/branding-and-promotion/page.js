"use client";
import React, { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordion from "react-bootstrap/Accordion";
// import CommonCaseStudy from "/app/components/CommonCaseStudy";
import { Award } from "lucide-react";
// import Awards from "/app/components/Awards";
import ImageSection from "../../components/ImageSection"



const caseStudies = [
    {
      headerTitle: "CloveHR Branding Transformation",
      data: [
        {
          title: "Challenge",
          description: "CloveHR, a leading HR consultancy, was facing challenges in standing out in a crowded market. Their branding was outdated, and their promotional efforts lacked focus, leading to low engagement with potential clients."
        },
        {
          title: "Solution",
          description: "Probey Services partnered with CloveHR to revamp their branding strategy. We created a fresh, modern logo, an eye-catching color palette, and an engaging brand voice that resonated with their target audience. We also designed promotional materials and crafted digital marketing campaigns aimed at increasing brand awareness."
        },
        {
          title: "Outcome",
          description: "After implementing the new branding strategy, CloveHR saw a 50% increase in brand visibility across social media platforms and a 30% rise in inbound client inquiries. The rebranding not only attracted new clients but also improved customer loyalty, positioning CloveHR as a trusted name in HR consultancy."
        }
      ],
      button: true
    },
    {
      headerTitle: "Saletancy Promotional Campaign",
      data: [
        {
          title: "Challenge",
          description: "Saletancy, a sales consultancy, was struggling to increase brand recognition and engagement. Their promotional efforts were not effectively reaching their target audience, and their messaging was inconsistent across channels."
        },
        {
          title: "Solution",
          description: "Probey Services developed a comprehensive branding and promotional strategy for Saletancy. We revamped their online presence by designing a new logo, creating a series of engaging advertisements, and executing a targeted social media campaign to reach potential clients in their niche. Our team also provided ongoing content marketing strategies, such as blog posts and email newsletters."
        },
        {
          title: "Outcome",
          description: "The new promotional campaigns resulted in a 40% increase in lead generation and a 25% rise in sales. The redesigned brand and marketing campaigns helped Saletancy differentiate themselves in the competitive sales consulting space, leading to more qualified leads and a broader customer base."
        }
      ],
      button: true
    },
    {
      headerTitle: "GreenTech Solutions Brand Positioning",
      data: [
        {
          title: "Challenge",
          description: "GreenTech Solutions, an eco-friendly tech startup, had difficulty establishing a strong brand identity in a market flooded with larger competitors. Their brand message was unclear, and they struggled with gaining traction in their digital marketing efforts."
        },
        {
          title: "Solution",
          description: "We worked closely with GreenTech to create a unique and memorable brand identity, focusing on sustainability and innovation. Our team redesigned their website, developed social media strategies, and launched a brand awareness campaign aimed at eco-conscious consumers. We also created compelling ad copy and visuals to promote their green technology products."
        },
        {
          title: "Outcome",
          description: "The branding and promotional efforts resulted in GreenTech Solutions achieving a 35% increase in website traffic, a 20% increase in social media followers, and a 50% improvement in lead conversion rates. Their refreshed image helped them gain credibility in the eco-tech market and attracted new investors."
        }
      ],
      button: true
    }
  ];
  
  
  const faqData = [
    {
      id: "0",
      question: "What is Branding and Why is it Important?",
      answer: (
        <>
          <p>
            Branding is the process of creating a unique identity for your business. It encompasses your company’s values, visuals, messaging, and customer experience. Effective branding helps build trust, recognition, and loyalty with your target audience.
          </p>
        </>
      ),
    },
    {
      id: "1",
      question: "How Can Branding Enhance My Business?",
      answer: (
        <>
          <p>
            Strong branding allows you to differentiate your business from competitors, establish a loyal customer base, and attract new customers. It communicates your value proposition clearly, helping you stand out in a crowded market.
          </p>
        </>
      ),
    },
    {
      id: "2",
      question: "What are the Key Elements of a Brand?",
      answer: (
        <p>
          The key elements of a brand include your company’s logo, color scheme, typography, messaging, and tone of voice. These elements should be consistent across all touchpoints to create a cohesive and recognizable brand identity.
        </p>
      ),
    },
    {
      id: "3",
      question: "What is Brand Positioning?",
      answer: (
        <>
          <p>
            Brand positioning refers to how you want your brand to be perceived in the marketplace. It’s about defining the unique value you provide to your customers and distinguishing your brand from the competition in a way that resonates with your target audience.
          </p>
        </>
      ),
    },
    {
      id: "4",
      question: "How Do I Create a Successful Brand Promotion Strategy?",
      answer: (
        <>
          <p>
            A successful brand promotion strategy involves understanding your target audience, choosing the right promotional channels (social media, ads, events, etc.), and creating engaging content. Consistent messaging and a well-planned campaign can help boost brand awareness and engagement.
          </p>
        </>
      ),
    },
    {
      id: "5",
      question: "How Does Social Media Impact Branding?",
      answer: (
        <>
          <p>
            Social media is a powerful tool for brand promotion. It allows businesses to engage directly with their audience, showcase their products or services, and create a community around their brand. Consistent, authentic content on social media helps reinforce brand identity and build relationships with customers.
          </p>
        </>
      ),
    },
    {
      id: "6",
      question: "What is the Role of a Brand Identity in Marketing?",
      answer: (
        <>
          <p>
            A brand identity is critical to marketing as it defines how a brand is perceived. It influences how customers connect with your business and shapes their experiences. A strong brand identity helps communicate your values, purpose, and what you stand for, which is essential for effective marketing.
          </p>
        </>
      ),
    },
  ];
  

function page() {
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
      title: "Brand Strategy",
      description: "We help define a strong, unique brand identity that resonates with your target audience and sets you apart from the competition.",
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-7.png",
      title: "Creative Design",
      description: "Our creative team designs visually striking logos, websites, and marketing materials that convey your brand’s essence and personality.",
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-8.png",
      title: "Digital Marketing",
      description: "We implement effective digital marketing campaigns, including SEO, social media, and email marketing, to boost your brand’s online visibility.",
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-9.png",
      title: "Brand Activation",
      description: "We bring your brand to life through interactive campaigns, promotions, and events that engage your audience and build brand loyalty.",
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-10.png",
      title: "Market Research",
      description: "We conduct in-depth market research to understand your audience, competitors, and trends, ensuring your branding strategy is informed and effective.",
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
    Build a Strong Brand Presence That Resonates
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
    Branding & Promotion
    <br />
    <span
      style={{ color: "#9F9F9F", fontWeight: 600, fontSize: "40px" }}
    >
      Strategies That Engage and Grow Your Audience
    </span>
  </h3>

  {/* Description */}
  <p
    className="mt-4"
    style={{ textAlign: "center", fontSize: "15px", lineHeight: "1.7" }}
  >
    <strong>Probey Services</strong> specializes in crafting comprehensive branding strategies and promotion techniques that make your brand stand out. We focus on building a cohesive brand identity that resonates with your target audience, fostering trust and engagement both online and offline. Our goal is to help you enhance your visibility and grow your customer base through creative and effective branding solutions.
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
          <p className="text-uppercase fw-bold text-muted title mb-2">
            Process
          </p>
          <hr />

          <span className="text-capitalize display-5">
            Seamless
            <br />
            Branding Steps
          </span>

          <span className="mt-2 w-75">
            <strong>Probey Services</strong> specializes in crafting powerful brand identities and marketing strategies that resonate with your target audience. We help businesses build memorable brands through thoughtful design, consistent messaging, and engaging promotional strategies. Our process is tailored to elevate your brand presence both online and offline, ensuring long-lasting impact and growth.
          </span>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row">
          <div className="col-md-6">
            <div className="grid-item">
              <div className="">
                <p className="text-uppercase fw-bold text-muted title mb-2">
                  1
                </p>
                <hr />

                <span className="text-capitalize text-wrap display-7 mb-4 ">
                  Brand Strategy Development
                </span>
                <p
                  className="text-wrap fw-light"
                  style={{ fontSize: "15px", lineHeight: "1.7" }}
                >
                  <strong>Probey Services</strong> works with you to develop a clear and effective brand strategy that aligns with your business values, goals, and target audience, ensuring a strong foundation for your brand's success.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="grid-item">
              <div className="">
                <p className="text-uppercase fw-bold text-muted title mb-2">
                  2
                </p>
                <hr />

                <span className="text-capitalize text-wrap display-7 mb-4 pe-3">
                  Creative Branding Design
                </span>
                <p
                  className="text-wrap fw-light"
                  style={{ fontSize: "15px", lineHeight: "1.7" }}
                >
                  We create compelling, visually engaging designs—such as logos, color schemes, and marketing materials—that reflect your brand’s identity and engage your target audience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="grid-item">
              <div className="">
                <p className="text-uppercase fw-bold text-muted title mb-2">
                  3
                </p>
                <hr />

                <span className="text-capitalize text-wrap display-7 mb-4">
                  Digital Marketing Strategy
                </span>
                <p
                  className="text-wrap fw-light"
                  style={{ fontSize: "15px", lineHeight: "1.7" }}
                >
                  <strong>Probey Services</strong> develops and implements targeted digital marketing campaigns—including SEO, social media, and email marketing—that boost your brand’s online presence and engage your audience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="grid-item">
              <div className="">
                <p className="text-uppercase fw-bold text-muted title mb-2">
                  4
                </p>
                <hr />

                <span className="text-capitalize text-wrap display-7 mb-4">
                  Brand Activation and Engagement
                </span>
                <p
                  className="text-wrap fw-light"
                  style={{ fontSize: "15px", lineHeight: "1.7" }}
                >
                  We help bring your brand to life through engaging brand activation strategies, including promotional events, collaborations, and interactive campaigns that connect with your audience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="grid-item">
              <div className="">
                <p className="text-uppercase fw-bold text-muted title mb-2">
                  5
                </p>
                <hr />

                <span className="text-capitalize text-wrap display-7 mb-4">
                  Ongoing Brand Management and Support
                </span>
                <p
                  className="text-wrap fw-light"
                  style={{ fontSize: "15px", lineHeight: "1.7" }}
                >
                  Our team offers continuous brand monitoring and support, ensuring that your brand maintains consistency, relevance, and effectiveness as your business grows and evolves.
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
      {/* <CommonCaseStudy
        caseStudies={caseStudies}
      /> */}
      <div className="my-4"></div>
      {/* <Awards/> */}
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