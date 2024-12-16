"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Accordion from "react-bootstrap/Accordion";
import ClientCarousel from '@/app/components/ClientCrausel';
import CommonAwards from '@/app/components/CommonAwards';
import CommonCaseStudy from '@/app/components/CaseStudy';
import ImageSection from "../../components/ImageSection"

const faqData = [
    {
        id: "0",
        question: "Why Should I Invest in iOS Application Development services for my Business?",
        answer: (
            <>
                <p>
                    Investing in iOS application development is essential for businesses aiming to reach a vast and engaged audience using Apple devices. An iOS app improves user engagement and provides a smooth experience within the lucrative Apple ecosystem. iOS apps typically enjoy higher user spending and loyalty, making it a valuable investment for long-term business growth and competitive advantage.
                </p>
            </>
        ),
    },
    {
        id: "1",
        question: "What Does Probey Services Do During the iOS App Development Process?",
        answer: (
            <p>
                At Probey Services, the best iOS app development company, we manage every aspect of iOS app development. Our services include initial planning, UI/UX design, coding, and testing. We focus on integrating features such as real-time updates, secure payment options, and personalized recommendations, all while optimizing performance and reliability to deliver an exceptional user experience.
            </p>
        ),
    },
    {
        id: "2",
        question: "Why is Probey Services the best iOS App Development Company/ iPhone app development company in india?",
        answer: (
            <p>
                Probey Services is the best iOS App Development Company in Delhi NCR due to our dedication to quality and innovation. We use the latest technologies and design trends to create high-performance iOS apps personalized to your business needs. Our successful project portfolio and positive client testimonials underscore our expertise in delivering top-tier iOS app solutions.
            </p>
        ),
    },
    {
        id: "3",
        question: "What is the Pricing for iOS App Development Services?",
        answer: (
            <p>
                The cost of iOS app development depends depending on the app’s complexity, features, and design requirements. Basic apps are more budget-friendly, while feature-rich, custom apps come at a higher price. Probey Services provides flexible pricing packages for Flutter development services, designed to fit different budgets and project scopes. <b>Contact us</b> to get a personalized quote and find the best value for your investment.
            </p>
        ),
    },
    {
        id: "4",
        question: "Do You Offer Discounts for Long-Term iOS app development services?",
        answer: (
            <p>
                Yes, Probey Services provides discounts for long-term iOS app development services contract. We offer special pricing for extended support and maintenance or multi-phase projects, helping you manage costs effectively while ensuring continuous updates and support for your app. Reach out to us for a customized quote and to learn more about our discount options.
            </p>
        ),
    },
    {
        id: "5",
        question: " What are the reasons to invest in iOS application development services?",
        answer: (
            <p>
                Investing in iOS app development services is crucial because the Apple App Store ranks as the second-largest app marketplace in the mobile app industry. Following Android, iOS users form a significant segment actively seeking high-quality apps.

                Partnering with a top iOS app development company can help businesses tap into this user base, which is not only important but also more inclined to pay for premium app versions, making it a valuable market for developers. By making use of personalized iOS app solutions through an expert iOS app development company, businesses can improve their reach and revenue potential.
            </p>
        ),
    },
];


function Android() {

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
            title: "Understanding Client Requirements",
            description: "We start with an in-depth consultation to understand your business goals and app requirements."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-7.png",
            title: "Planning and Design",
            description: "Our design team creates a detailed blueprint of the app, focusing on user experience and interface design."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-8.png",
            title: "Development",
            description: "We use the latest technologies, like Swift and Objective-C, to build your app, making sure it’s fast, secure, and adaptable to future needs."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-9.png",
            title: "Continuous Communication",
            description: "We keep the conversation flowing to ensure your input shapes every step, keeping us aligned with your expectations."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-10.png",
            title: "Thorough Quality Assurance (Testing)",
            description: "We test your app to ensure it’s free from bugs and performs well under various conditions."
        },
        {
            icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-11.png",
            title: "Deployment",
            description: "We guide you through the process of launching your app on the Apple App Store and provide ongoing support to keep everything running smoothly."
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
                    <p className="text-uppercase text-primary">BEST Android APP DEVELOPMENT COMPANY IN INDIA</p>

                    {/* Title */}
                    <h3 className="mt-3" style={{ color: 'black', fontWeight: 600, fontSize: '40px', textDecoration: 'upperCase' }}>
                        Android App Development–
                        <br />
                        <span style={{ color: '#9F9F9F', fontWeight: 600, fontSize: '40px' }}>
                        APPS THAT ENGAGE AND CONVERT USERS
                        </span>
                    </h3>

                    {/* Description */}
                    <p className="mt-4" style={{ textAlign: 'center', fontSize: "15px", lineHeight: "1.7" }}>
                    At Probey Services, we specialize in developing <b>android application development services</b> that work across all Android devices, making us the <b>best android app development company in Noida</b>. Our expert team uses the latest tools like Java and Kotlin to create powerful, user-friendly apps that not only perform at their best but also deliver real value to your business..
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

                                    <span className="mt-2 w-75 p-hyphen">Probey Services provide the best SEO services in Delhi NCR to increase your businesses online presence. Our expertise in SEO and engaging website design making us the best advertising company in India and ensures you rank higher on Google, making it easier for potential customers to find you. We don’t just drive traffic; we focus on converting visitors into customers, helping you grow your business effectively. Let us increase your visibility and turn your online presence into visible results.</span>
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
                                                    Custom iOS App Design & Development
                                                </span>
                                                <p
                                                    className="text-wrap fw-light p-hyphen"
                                                    style={{ fontSize: "15px", lineHeight: "1.7" }}
                                                >
                                                    Probey Services will design and develop custom iOS apps that align with your brand and business needs, ensuring a smooth and intuitive user experience. Probey Services, we create highly functional cross-platform apps using Flutter, allowing your app to work seamlessly on both iOS and Android devices with a single codebase.
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
                                                    Native iOS Development
                                                </span>
                                                <p
                                                    className="text-wrap fw-light p-hyphen"
                                                    style={{ fontSize: "15px", lineHeight: "1.7" }}
                                                >We use the latest iOS SDKs and development practices to create high-performance, secure, and scalable apps for iPhones and iPads.
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
                                                    App Store Optimization (ASO)
                                                </span>
                                                <p
                                                    className="text-wrap fw-light p-hyphen"
                                                    style={{ fontSize: "15px", lineHeight: "1.7" }}
                                                >Probey Services optimizes your app for the Apple App Store with the right keywords, descriptions, and icons to improve discoverability and downloads.
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
                                                    Quality Assurance & Testing
                                                </span>
                                                <p
                                                    className="text-wrap fw-light p-hyphen"
                                                    style={{ fontSize: "15px", lineHeight: "1.7" }}
                                                >Our team performs rigorous testing to ensure your app is bug-free, performs well, and provides a seamless experience across all iOS devices.
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
                                                    className="text-wrap fw-light p-hyphen"
                                                    style={{ fontSize: "15px", lineHeight: "1.7" }}
                                                >
                                                    After launch, Probey Services offers continuous support and maintenance to keep your app up-to-date with iOS updates and user feedback.
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
            <ClientCarousel/>
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
            {/* <CommonCaseStudy/> */}
            <div className='my-4'></div>
            <CommonAwards/>
            <div className='bg-dark text-white py-md-5 py-3 '>
                <hr />
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <h3 className='display-5 mb-3' >TRANSFORM YOUR BUSINESS TODAY</h3>
                            <p className='custome-line-height p-font-size p-hyphen'>
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
                        <h1 className="fw-semibold display-4">
                            Help & FAQ
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
                                    <Accordion.Header className="border-0 bg-transparent p-0 w-100 d-flex align-items-center mt-3">
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

export default Android