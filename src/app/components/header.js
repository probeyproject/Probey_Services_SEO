"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import CustomButtonAnimate from "./CustomButtonAnimate";

const ExpertButton = ({ icon, label, color = "primary", customColor }) => (
  <div className="col-3 mb-4">
    <button
      type="button"
      className="btn btn-sm w-100 d-flex align-items-center justify-content-start p-3 py-4"
      style={{ backgroundColor: customColor || `var(--bs-${color})` }} // Apply custom color or default Bootstrap color
    >
      <div className="col-3 text-white">
        {/* Icon */}
        {icon}
      </div>
      <div className="col-9 text-start fw-bold text-white">
        {label}
      </div>
    </button>
  </div>
);

function Header() {
  const [activeKey, setActiveKey] = useState(null);
  const [subActiveKey, setSubActiveKey] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Whether navbar is visible or not
  const [hasScrolledPast, setHasScrolledPast] = useState(false); // Track if the scroll has passed 300px

  const tabs = [
    {
      cardHeading: "Lyro AI Chatbot",
      cardparagraph:
        "Win up to 70% of your team’s time back. Automatically answer common questions and perform recurring tasks with AI.",
      LinkText: "Learn more about chat bot ai",
      Link: "/",
      leftSide: {
        heading: "CASE STUDIES",
        text: ["Bella Setaro", "Suitoro", "Tidio Support"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-trophy", text: "AI Chat Battles" },
          { icons: "fa-brands fa-google-scholar", text: "Tidio Academy course" },
        ],
      },
    },
    {
      cardHeading: "Live Chat",
      cardparagraph:
        "Engage your customers in real-time and increase sales. Provide real-time support and build better relationships.",
      LinkText: "Learn more about Live Chat",
      Link: "/",
      leftSide: {
        heading: "Use Cases",
        text: ["Customer Support", "Sales", "Customer Engagement"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-book", text: "Live Chat Guide" },
          { icons: "fas fa-video", text: "Live Chat Tutorial" },
        ],
      },
    },
    {
      cardHeading: "Help Desk",
      cardparagraph:
        "Streamline your support team’s operations with a powerful help desk solution.",
      LinkText: "Learn more about Help Desk",
      Link: "/",
      leftSide: {
        heading: "Features",
        text: ["Ticketing System", "Customer Support", "24/7 Availability"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-cogs", text: "Help Desk Setup Guide" },
          { icons: "fas fa-video", text: "Help Desk Webinar" },
        ],
      },
    },
    {
      cardHeading: "Flows",
      cardparagraph:
        "Automate your customer journey with intuitive flows that increase conversions.",
      LinkText: "Learn more about Flows",
      Link: "/",
      leftSide: {
        heading: "Use Cases",
        text: ["Customer Onboarding", "Lead Generation", "Survey Automation"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-sitemap", text: "Flow Builder Guide" },
          { icons: "fas fa-video", text: "Flow Tutorial" },
        ],
      },
    },
    {
      cardHeading: "Integrations",
      cardparagraph:
        "Integrate with hundreds of tools to create a seamless workflow for your team.",
      LinkText: "Learn more about Integrations",
      Link: "/",
      leftSide: {
        heading: "Popular Integrations",
        text: ["Slack", "Zapier", "HubSpot"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-plug", text: "Integrations Setup Guide" },
          { icons: "fas fa-cogs", text: "How to Use Integrations" },
        ],
      },
    },
  ];
  const tabs2 = [
    {
      cardHeading: "Lyro AI Chatbot",
      cardparagraph:
        "Win up to 70% of your team’s time back. Automatically answer common questions and perform recurring tasks with AI.",
      LinkText: "Learn more about chat bot ai",
      Link: "/",
      leftSide: {
        heading: "CASE STUDIES",
        text: ["Bella Setaro", "Suitoro", "Tidio Support"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-trophy", text: "AI Chat Battles" },
          { icons: "fa-brands fa-google-scholar", text: "Tidio Academy course" },
        ],
      },
    },
    {
      cardHeading: "Live Chat",
      cardparagraph:
        "Engage your customers in real-time and increase sales. Provide real-time support and build better relationships.",
      LinkText: "Learn more about Live Chat",
      Link: "/",
      leftSide: {
        heading: "Use Cases",
        text: ["Customer Support", "Sales", "Customer Engagement"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-book", text: "Live Chat Guide" },
          { icons: "fas fa-video", text: "Live Chat Tutorial" },
        ],
      },
    },
    {
      cardHeading: "Help Desk",
      cardparagraph:
        "Streamline your support team’s operations with a powerful help desk solution.",
      LinkText: "Learn more about Help Desk",
      Link: "/",
      leftSide: {
        heading: "Features",
        text: ["Ticketing System", "Customer Support", "24/7 Availability"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-cogs", text: "Help Desk Setup Guide" },
          { icons: "fas fa-video", text: "Help Desk Webinar" },
        ],
      },
    },
    {
      cardHeading: "Flows",
      cardparagraph:
        "Automate your customer journey with intuitive flows that increase conversions.",
      LinkText: "Learn more about Flows",
      Link: "/",
      leftSide: {
        heading: "Use Cases",
        text: ["Customer Onboarding", "Lead Generation", "Survey Automation"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-sitemap", text: "Flow Builder Guide" },
          { icons: "fas fa-video", text: "Flow Tutorial" },
        ],
      },
    },
    {
      cardHeading: "Integrations",
      cardparagraph:
        "Integrate with hundreds of tools to create a seamless workflow for your team.",
      LinkText: "Learn more about Integrations",
      Link: "/",
      leftSide: {
        heading: "Popular Integrations",
        text: ["Slack", "Zapier", "HubSpot"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-plug", text: "Integrations Setup Guide" },
          { icons: "fas fa-cogs", text: "How to Use Integrations" },
        ],
      },
    },
  ];
  const tabs3 = [
    {
      cardHeading: "Lyro AI Chatbot",
      cardparagraph:
        "Win up to 70% of your team’s time back. Automatically answer common questions and perform recurring tasks with AI.",
      LinkText: "Learn more about chat bot ai",
      Link: "/",
      leftSide: {
        heading: "CASE STUDIES",
        text: ["Bella Setaro", "Suitoro", "Tidio Support"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-trophy", text: "AI Chat Battles" },
          { icons: "fa-brands fa-google-scholar", text: "Tidio Academy course" },
        ],
      },
    },
    {
      cardHeading: "Live Chat",
      cardparagraph:
        "Engage your customers in real-time and increase sales. Provide real-time support and build better relationships.",
      LinkText: "Learn more about Live Chat",
      Link: "/",
      leftSide: {
        heading: "Use Cases",
        text: ["Customer Support", "Sales", "Customer Engagement"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-book", text: "Live Chat Guide" },
          { icons: "fas fa-video", text: "Live Chat Tutorial" },
        ],
      },
    },
    {
      cardHeading: "Help Desk",
      cardparagraph:
        "Streamline your support team’s operations with a powerful help desk solution.",
      LinkText: "Learn more about Help Desk",
      Link: "/",
      leftSide: {
        heading: "Features",
        text: ["Ticketing System", "Customer Support", "24/7 Availability"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-cogs", text: "Help Desk Setup Guide" },
          { icons: "fas fa-video", text: "Help Desk Webinar" },
        ],
      },
    },
    {
      cardHeading: "Flows",
      cardparagraph:
        "Automate your customer journey with intuitive flows that increase conversions.",
      LinkText: "Learn more about Flows",
      Link: "/",
      leftSide: {
        heading: "Use Cases",
        text: ["Customer Onboarding", "Lead Generation", "Survey Automation"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-sitemap", text: "Flow Builder Guide" },
          { icons: "fas fa-video", text: "Flow Tutorial" },
        ],
      },
    },
    {
      cardHeading: "Integrations",
      cardparagraph:
        "Integrate with hundreds of tools to create a seamless workflow for your team.",
      LinkText: "Learn more about Integrations",
      Link: "/",
      leftSide: {
        heading: "Popular Integrations",
        text: ["Slack", "Zapier", "HubSpot"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-plug", text: "Integrations Setup Guide" },
          { icons: "fas fa-cogs", text: "How to Use Integrations" },
        ],
      },
    },
  ];
  const tabs4 = [
    {
      cardHeading: "Lyro AI Chatbot",
      cardparagraph:
        "Win up to 70% of your team’s time back. Automatically answer common questions and perform recurring tasks with AI.",
      LinkText: "Learn more about chat bot ai",
      Link: "/",
      leftSide: {
        heading: "CASE STUDIES",
        text: ["Bella Setaro", "Suitoro", "Tidio Support"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-trophy", text: "AI Chat Battles" },
          { icons: "fa-brands fa-google-scholar", text: "Tidio Academy course" },
        ],
      },
    },
    {
      cardHeading: "Live Chat",
      cardparagraph:
        "Engage your customers in real-time and increase sales. Provide real-time support and build better relationships.",
      LinkText: "Learn more about Live Chat",
      Link: "/",
      leftSide: {
        heading: "Use Cases",
        text: ["Customer Support", "Sales", "Customer Engagement"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-book", text: "Live Chat Guide" },
          { icons: "fas fa-video", text: "Live Chat Tutorial" },
        ],
      },
    },
    {
      cardHeading: "Help Desk",
      cardparagraph:
        "Streamline your support team’s operations with a powerful help desk solution.",
      LinkText: "Learn more about Help Desk",
      Link: "/",
      leftSide: {
        heading: "Features",
        text: ["Ticketing System", "Customer Support", "24/7 Availability"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-cogs", text: "Help Desk Setup Guide" },
          { icons: "fas fa-video", text: "Help Desk Webinar" },
        ],
      },
    },
    {
      cardHeading: "Flows",
      cardparagraph:
        "Automate your customer journey with intuitive flows that increase conversions.",
      LinkText: "Learn more about Flows",
      Link: "/",
      leftSide: {
        heading: "Use Cases",
        text: ["Customer Onboarding", "Lead Generation", "Survey Automation"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-sitemap", text: "Flow Builder Guide" },
          { icons: "fas fa-video", text: "Flow Tutorial" },
        ],
      },
    },
    {
      cardHeading: "Integrations",
      cardparagraph:
        "Integrate with hundreds of tools to create a seamless workflow for your team.",
      LinkText: "Learn more about Integrations",
      Link: "/",
      leftSide: {
        heading: "Popular Integrations",
        text: ["Slack", "Zapier", "HubSpot"],
      },
      rightSide: {
        heading: "Resources",
        text: [
          { icons: "fas fa-plug", text: "Integrations Setup Guide" },
          { icons: "fas fa-cogs", text: "How to Use Integrations" },
        ],
      },
    },
  ];

  // Manage the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Handle tab change
  const handleTabChange = (index) => {
    setActiveTab(index);
  };


  const handleMouseEnter = (key) => {
    setActiveKey(key);
  };

  const handleMouseLeave = () => {
    setActiveKey(null);
    setSubActiveKey(null); // Close sub-accordion when mouse leaves
  };

  const handleSubMouseEnter = (key) => {
    setSubActiveKey(key);
  };

  const handleSubMouseLeave = () => {
    setSubActiveKey(null); // Close sub-accordion
  };

  // Add scroll event listener to show/hide sticky navbar and change header bg color
  useEffect(() => {
    const handleScroll = () => {
      // Check if user is scrolling up or down
      if (window.scrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsNavbarVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsNavbarVisible(true);
      }
      
      // Check if scroll position is more than 300px to change header bg color
      if (window.scrollY > 300) {
        setHasScrolledPast(true); // Apply background color after 300px
      } else {
        setHasScrolledPast(false); // Remove background color when less than 300px
      }

      setLastScrollY(window.scrollY); // Update the last scroll position
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, [lastScrollY]);

  return (
    <header
      className={`pb-0 py-1 d-none d-md-block transition-all ${
        isNavbarVisible ? "navbar-visible" : "navbar-hidden"
      } ${hasScrolledPast ? "bg-white" : "bg-transparent"}`} // Add bg-white class when scrolled past 300px
    >
<div className="container pt-2">
        <div className="row">
          <div className="col-12">
            <div className="header-nav">
              <div className="header-nav-left pb-3">
                <Link href={"/"} className="text-decoration-none text-dark">
                  <strong className="h4 fw-bold">
                    {" "}
                    <Image
                      src={"/logo/blackLogo.png"}
                      alt="Logo"
                      width={50}
                      height={50}
                    />
                  </strong>
                </Link>
              </div>
              <div className="header-nav-middle">
                <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                  <div
                    className="offcanvas offcanvas-collapse order-xl-2"
                    id="primaryMenu"
                  >
                    <div className="offcanvas-header navbar-shadow">
                      <h5>Menu</h5>
                      <button
                        className="btn-close lead"
                        type="button"
                        data-bs-dismiss="offcanvas"
                      />
                    </div>
                    <div className="offcanvas-body">
                      <ul className="navbar-nav">
                        <li className="nav-item dropdown dropdown-mega">
                          <a
                            className="nav-link mb-3 dropdown-toggle ps-xl-2 ps-0 text-black"
                            href="#"
                            data-bs-toggle="dropdown"
                          >
                            <p className="m-0">Web Application</p>
                          </a>
                          <div className="dropdown-menu dropdown-menu-2">
                            <div className="row ">
                              <div className="col-3 px-0">
                                {/* Render the tabs as buttons */}
                                <div className="tabs mx-0">
                                  {tabs.map((tab, index) => (
                                    <button
                                      key={index}
                                      onMouseEnter={() => handleTabChange(index)}
                                      className={`tab-btn ${
                                        activeTab === index ? "active" : ""
                                      }`}
                                    >
                                      {tab.cardHeading}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              <div className="col-9 ">
                                {/* Render the content based on the selected tab */}
                                <div className="row">
                                <div className="tab-content custom-background-tab col-9">
                                  <div className="tab-pane active">
                                    <div className="pt-2 mb-4">
                                      <div className="card bg-white text-black px-3 pt-3">
                                       <span className="mb-2 "> <i className="fas fa-robot"></i> {tabs[activeTab]?.cardHeading}</span>
                                        <p className="title fs-small text-muted">{tabs[activeTab]?.cardparagraph}</p>
                                        <a href={tabs[activeTab]?.Link} className="title">
                                          <i className="fas fa-long-arrow-alt-up"></i> {tabs[activeTab]?.LinkText}
                                        </a>
                                      </div>
                                    </div>
                                    <div className="p-2">
                                      <div className="row">
                                        <div className="col-6">
                                          <p className="text-muted">{tabs[activeTab]?.leftSide.heading}</p>
                                          {tabs[activeTab]?.leftSide?.text.map((item, index) => (
                                            <p key={index} className="text-dark">{item}</p>
                                          ))}
                                        </div>
                                        <div className="col-6">
                                          <p className="text-muted">{tabs[activeTab]?.rightSide.heading}</p>
                                          {tabs[activeTab]?.rightSide?.text.map((item, index) => (
                                            <p key={index} className="text-dark">
                                              {item.icons && <i className={item.icons}></i>} {item.text}
                                            </p>
                                          ))}
                                        </div>

                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-3">

                                <div className="card bg-white text-black p-2">
                                    <img src="https://www.tidio.com/_next/image/?url=%2Fimages%2Fnav%2Faside%2Fsupport-automation.png&w=488&q=75" className="img-fluid"/>

                                    <div className="card-body p-0 m-0  text-center" style={{fontSize:"12px"}}><a href="/">
                                      see more customer
                                    </a></div>

                                    <a className="btn btn-success mb-2">Watch demo</a>
                                    <a className="btn btn-primary">Contact us</a>

                                </div>
                                </div>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="nav-item dropdown dropdown-mega">
                          <a
                            className="nav-link dropdown-toggle ps-xl-2 mb-3 ps-0 text-dark"
                            href=""
                            data-bs-toggle="dropdown"
                          >
                            <p className="m-0">CRM</p>
                          </a>
                          <div className="dropdown-menu dropdown-menu-2">
                            <div className="row ">
                              <div className="col-3 px-0">
                                {/* Render the tabs as buttons */}
                                <div className="tabs mx-0">
                                  {tabs2.map((tab, index) => (
                                    <button
                                      key={index}
                                      onMouseEnter={() => handleTabChange(index)}
                                      className={`tab-btn ${
                                        activeTab === index ? "active" : ""
                                      }`}
                                    >
                                      {tab.cardHeading}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              <div className="col-9 ">
                                {/* Render the content based on the selected tab */}
                                <div className="row">
                                <div className="tab-content custom-background-tab col-9">
                                  <div className="tab-pane active">
                                    <div className="pt-2 mb-4">
                                      <div className="card bg-white text-black px-3 pt-3">
                                       <span className="mb-2 "> <i className="fas fa-robot"></i> {tabs2[activeTab]?.cardHeading}</span>
                                        <p className="title fs-small text-muted">{tabs2[activeTab]?.cardparagraph}</p>
                                        <a href={tabs2[activeTab]?.Link} className="title">
                                          <i className="fas fa-long-arrow-alt-up"></i> {tabs2[activeTab]?.LinkText}
                                        </a>
                                      </div>
                                    </div>
                                    <div className="p-2">
                                      <div className="row">
                                        <div className="col-6">
                                          <p className="text-muted">{tabs2[activeTab]?.leftSide.heading}</p>
                                          {tabs2[activeTab]?.leftSide?.text.map((item, index) => (
                                            <p key={index} className="text-dark">{item}</p>
                                          ))}
                                        </div>
                                        <div className="col-6">
                                          <p className="text-muted">{tabs2[activeTab]?.rightSide.heading}</p>
                                          {tabs2[activeTab]?.rightSide?.text.map((item, index) => (
                                            <p key={index} className="text-dark">
                                              {item.icons && <i className={item.icons}></i>} {item.text}
                                            </p>
                                          ))}
                                        </div>

                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-3">

                                <div className="card bg-white text-black p-2">
                                    <img src="https://www.tidio.com/_next/image/?url=%2Fimages%2Fnav%2Faside%2Fsupport-automation.png&w=488&q=75" className="img-fluid"/>

                                    <div className="card-body p-0 m-0  text-center" style={{fontSize:"12px"}}><a href="/">
                                      see more customer
                                    </a></div>

                                    <a className="btn btn-success mb-2">Watch demo</a>
                                    <a className="btn btn-primary">Contact us</a>

                                </div>
                                </div>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item dropdown dropdown-mega">
                          <a
                            className="nav-link dropdown-toggle ps-xl-2 mb-3 ps-0 text-dark"
                            href=""
                            data-bs-toggle="dropdown"
                          >
                            <p className="m-0">E-Commerce Website</p>
                          </a>
                          <div className="dropdown-menu dropdown-menu-2">
                            <div className="row ">
                              <div className="col-3 px-0">
                                {/* Render the tabs as buttons */}
                                <div className="tabs mx-0">
                                  {tabs3.map((tab, index) => (
                                    <button
                                      key={index}
                                      onMouseEnter={() => handleTabChange(index)}
                                      className={`tab-btn ${
                                        activeTab === index ? "active" : ""
                                      }`}
                                    >
                                      {tab.cardHeading}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              <div className="col-9 ">
                                {/* Render the content based on the selected tab */}
                                <div className="row">
                                <div className="tab-content custom-background-tab col-9">
                                  <div className="tab-pane active">
                                    <div className="pt-2 mb-4">
                                      <div className="card bg-white text-black px-3 pt-3">
                                       <span className="mb-2 "> <i className="fas fa-robot"></i> {tabs3[activeTab]?.cardHeading}</span>
                                        <p className="title fs-small text-muted">{tabs3[activeTab]?.cardparagraph}</p>
                                        <a href={tabs3[activeTab]?.Link} className="title">
                                          <i className="fas fa-long-arrow-alt-up"></i> {tabs3[activeTab]?.LinkText}
                                        </a>
                                      </div>
                                    </div>
                                    <div className="p-2">
                                      <div className="row">
                                        <div className="col-6">
                                          <p className="text-muted">{tabs3[activeTab]?.leftSide.heading}</p>
                                          {tabs3[activeTab]?.leftSide?.text.map((item, index) => (
                                            <p key={index} className="text-dark">{item}</p>
                                          ))}
                                        </div>
                                        <div className="col-6">
                                          <p className="text-muted">{tabs3[activeTab]?.rightSide.heading}</p>
                                          {tabs3[activeTab]?.rightSide?.text.map((item, index) => (
                                            <p key={index} className="text-dark">
                                              {item.icons && <i className={item.icons}></i>} {item.text}
                                            </p>
                                          ))}
                                        </div>

                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-3">

                                <div className="card bg-white text-black p-2">
                                    <img src="https://www.tidio.com/_next/image/?url=%2Fimages%2Fnav%2Faside%2Fsupport-automation.png&w=488&q=75" className="img-fluid"/>

                                    <div className="card-body p-0 m-0  text-center" style={{fontSize:"12px"}}><a href="/">
                                      see more customer
                                    </a></div>

                                    <a className="btn btn-success mb-2">Watch demo</a>
                                    <a className="btn btn-primary">Contact us</a>

                                </div>
                                </div>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item dropdown dropdown-mega">
                          <a
                            className="nav-link dropdown-toggle ps-xl-2 mb-3 ps-0 text-dark"
                            href=""
                            data-bs-toggle="dropdown"
                          >
                           <p className="m-0">Business Website</p> 
                          </a>
                          <div className="dropdown-menu dropdown-menu-2">
                            <div className="row ">
                              <div className="col-3 px-0">
                                {/* Render the tabs as buttons */}
                                <div className="tabs mx-0">
                                  {tabs4.map((tab, index) => (
                                    <button
                                      key={index}
                                      onMouseEnter={() => handleTabChange(index)}
                                      className={`tab-btn ${
                                        activeTab === index ? "active" : ""
                                      }`}
                                    >
                                      {tab.cardHeading}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              <div className="col-9 ">
                                {/* Render the content based on the selected tab */}
                                <div className="row">
                                <div className="tab-content custom-background-tab col-9">
                                  <div className="tab-pane active">
                                    <div className="pt-2 mb-4">
                                      <div className="card bg-white text-black px-3 pt-3">
                                       <span className="mb-2 "> <i className="fas fa-robot"></i> {tabs4[activeTab]?.cardHeading}</span>
                                        <p className="title fs-small text-muted">{tabs4[activeTab]?.cardparagraph}</p>
                                        <a href={tabs4[activeTab]?.Link} className="title">
                                          <i className="fas fa-long-arrow-alt-up"></i> {tabs4[activeTab]?.LinkText}
                                        </a>
                                      </div>
                                    </div>
                                    <div className="p-2">
                                      <div className="row">
                                        <div className="col-6">
                                          <p className="text-muted">{tabs4[activeTab]?.leftSide.heading}</p>
                                          {tabs4[activeTab]?.leftSide?.text.map((item, index) => (
                                            <p key={index} className="text-dark">{item}</p>
                                          ))}
                                        </div>
                                        <div className="col-6">
                                          <p className="text-muted">{tabs4[activeTab]?.rightSide.heading}</p>
                                          {tabs4[activeTab]?.rightSide?.text.map((item, index) => (
                                            <p key={index} className="text-dark">
                                              {item.icons && <i className={item.icons}></i>} {item.text}
                                            </p>
                                          ))}
                                        </div>

                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-3">

                                <div className="card bg-white text-black p-2">
                                    <img src="https://www.tidio.com/_next/image/?url=%2Fimages%2Fnav%2Faside%2Fsupport-automation.png&w=488&q=75" className="img-fluid"/>

                                    <div className="card-body p-0 m-0  text-center" style={{fontSize:"12px"}}><a href="/">
                                      see more customer
                                    </a></div>

                                    <a className="btn btn-success mb-2">Watch demo</a>
                                    <a className="btn btn-primary">Contact us</a>

                                </div>
                                </div>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </li>


                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-nav-right">
                <CustomButtonAnimate link={"/contact-us"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
