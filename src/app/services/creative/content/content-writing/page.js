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
    question: "What is Content Writing and how is it beneficial for Businesses?",
    answer: (
      <>
        <p>
        Wondering about what content writing is? Here’s the answer – Content writing involves creating valuable, relevant, and consistent content that attracts and engages a target audience. It’s more than just words on a page; it’s about crafting messages that connect with your customers and drive them to take action. Effective content writing helps businesses build trust, improve search engine rankings, and ultimately increase conversions. It’s a key component of a successful digital marketing strategy.
        </p>
      </>
    ),
  },
  {
    id: "1",
    question: "How can good content writing help my business grow?",
    answer: (
      <p>
       Good content writing is essential for establishing your brand’s voice and communicating your value proposition to potential customers. Whether it’s through blogs, social media posts, or product descriptions, well-crafted content can help you reach and engage with your audience, drive traffic to your website, and boost sales. By providing valuable information that solves problems or meets needs, content writing positions your business as a leader in your industry.
      </p>
    ),
  },
  {
    id: "2",
    question: "What types of content writing services do Probey Services offer?",
    answer: (
      <p>Probey Services offers a wide range of content writing services tailored to meet the needs of your business. These include blog writing, website content creation, product descriptions, social media content, email newsletters, and more. Our team of skilled writers specializes in creating content that not only ranks well on search engines but also resonates with your audience and drives conversions.
      </p>
    ),
  },
  {
    id: "3",
    question: "Who should opt for Content Writing Services provided by top Content Writing Companies in India?",
    answer: (
      <p>
Any business that wants to establish a strong online presence, connect with its target audience, and drive more sales should consider content writing services. Whether you’re a startup looking to build brand awareness or an established company aiming to engage your customers, quality content is key. Our content writing services are ideal for businesses of all sizes and across all industries, from e-commerce and tech to health and finance.
      </p>
    ),
  },
  {
    id: "4",
    question: "Why is Probey Services named as the Best Content Writing Company in India?",
    answer: (
      <p>
Probey Services is recognized as the best content writing company in India because we deliver high-quality, customized content that meets the unique needs of our clients. Our team of experienced writers excels at creating content that not only captures the essence of your brand but also drives results. From SEO-friendly blogs to compelling product descriptions, we ensure that every piece of content we produce aligns with your business goals and helps you achieve success online.
      </p>
    ),
  },
];


function ContentWriting() {

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
      description: "We dive deep into your brand to understand your unique voice and messaging."
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-7.png",
      title: "Content Planning",
      description: "We develop a tailored content strategy to keep your message on track and effective."
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-8.png",
      title: "Writing",
      description: "We create engaging, high-quality content that resonates with your audience."
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-9.png",
      title: "SEO Optimization",
      description: "We make sure your content is search-engine friendly to help you get noticed online."
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-10.png",
      title: "Monitoring",
      description: "We keep an eye on how your content performs and tweak it to keep improving results."
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
          BEST CONTENT WRITING SERVICES IN DELHI NCR</p>

          {/* Title */}
          <h3 className="mt-3" style={{ color: 'black', fontWeight: 600, fontSize: '40px', textDecoration: 'upperCase' }}>
          Content Writing
            <br />
            <span style={{ color: '#9F9F9F', fontWeight: 600, fontSize: '40px' }}>
            CAPTIVATE AND CONVERT WITH COMPELLING CONTENT
            </span>
          </h3>

          {/* Description */}
          <p className="mt-4" style={{ textAlign: 'center', fontSize: "15px", lineHeight: "1.7" }}>
          At Probey Services, we offer the best content writing services to truly speak to your audience. Our writing is created to match your brand’s voice, engage your readers, and effectively communicate your message. Let us help you connect with your audience and drive results.
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
          <h1 className="fw-bolder">Content Writing
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
                  OUR  <br /> PROCESS <br />
                  </span>

                  <span className="mt-2 w-75">Probey Services offers professional content writing services in Delhi NCR, crafted to amplify your brand’s online presence through compelling, SEO-optimized content. Our team of skilled writers delivers high-quality, engaging, and well-researched content that not only captures readers’ attention but also improves your website’s search engine rankings. Positioned as one of India’s top content marketing providers, we ensure that your content is informative, engaging, and easy to discover on platforms like Google, making it simple for potential customers to connect with your brand. More than just driving traffic, our focus is on converting readers into loyal customers, empowering your business to grow sustainably. Let us elevate your content strategy and transform your online presence into tangible, measurable success.</span>
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
                        Custom Content for Your Audience
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                         Probey Services creates content tailored specifically to your target audience, ensuring relevance and engagement with every piece.
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
                        Clear & Concise Messaging
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >We focus on delivering your brand’s message in a clear and concise manner, enhancing understanding and trust with your audience.
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
                        Cross-Platform Content Creation
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >Whether for websites, emails, or social media, our team provides content that is optimized for each platform’s specific needs.
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
                        Tone & Style Consistency
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >Probey Services ensures that your brand’s tone and style are consistent across all written content, reinforcing your brand identity.
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
                        Proofreading & Editing
                        </span>
                        <p
                          className="text-wrap fw-light"
                          style={{ fontSize: "15px", lineHeight: "1.7" }}
                        >
                          Our content undergoes a thorough proofreading and editing process to ensure accuracy, clarity, and professionalism.
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

export default ContentWriting