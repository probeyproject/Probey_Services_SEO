"use client"; // Marking the component as client-side in Next.js

import React, { useState } from "react";
import { Offcanvas, Accordion } from "react-bootstrap"; // Import necessary components from React Bootstrap
import { FaBars } from "react-icons/fa"; // Import FaBars for the hamburger icon
import Link from "next/link";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa"; // Importing icons for inputs
import { FaSquareInstagram } from "react-icons/fa6";
function MobileNav() {
  const [show, setShow] = useState(false); // State to control Offcanvas visibility
  const toggleNav = () => setShow(!show); // Toggle Offcanvas visibility
  const hideNav = () => setShow(false); // Close the Offcanvas

  const [activeKey, setActiveKey] = useState(null); // State to handle which accordion is active
  const [subActiveKey, setSubActiveKey] = useState(null); // State for sub-accordion

  const handleAccordionToggle = (key) => {
    // Toggle the main accordion section when clicked
    setActiveKey(activeKey === key ? null : key);
  };

  const handleSubAccordionToggle = (key) => {
    // Toggle the sub-accordion section when clicked
    setSubActiveKey(subActiveKey === key ? null : key);
  };

  return (
    <div className="container overflow-hidden col-12">
      {/* Mobile Navbar: Flexbox layout */}
      <div className="mobile-navbar row p-2 d-md-none d-flex">
        <div className="col-6 d-flex align-items-center">
          {/* Place your logo or image here */}
          <img
            src={"/logo/blackLogo.png"}
            alt="Logo"
            style={{ height: "40px" }}
          />
        </div>
        <div className="col-6 text-end d-flex justify-content-end align-items-center">
          {/* Hamburger icon to trigger the Offcanvas */}
          <FaBars size={30} onClick={toggleNav} style={{ cursor: "pointer" }} />
        </div>
      </div>

      {/* Offcanvas for mobile navigation */}
      <Offcanvas
        show={show}
        onHide={hideNav}
        placement="start"
        scroll
        backdrop
        className=""
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          {/* Menu items */}
          <div style={{ overflowY: "auto", padding: "10px" }}>
            <div className="container pb-4">
              <div className="pb-5">
                {/* Home Section */}
                <div className="title">Home</div>
                <Accordion activeKey={activeKey}>
                  {/* Development Section */}
                  <Accordion.Item
                    eventKey="0"
                    className="border-0 bg-transparent col-12"
                  >
                    <Accordion.Header
                      className="border-0 bg-transparent p-0 mb-2"
                      onClick={() => handleAccordionToggle("0")} // Toggle main section on click
                    >
                      Development
                    </Accordion.Header>
                    <Accordion.Body className="p-0">
                      <Accordion activeKey={subActiveKey}>
                        {/* Mobile Development Sub-Accordion */}
                        <Accordion.Item eventKey="0">
                          <Accordion.Header
                            onClick={() => handleSubAccordionToggle("0")}
                            className="mb-2"
                          >
                            Mobile Development
                          </Accordion.Header>
                          <Accordion.Body className="p-0">
                            <Link
                              href="/services/ios"
                              className="dropdown-item"
                            >
                              IOS App Development
                            </Link>
                            <Link
                              href="/services/android"
                              className="dropdown-item"
                            >
                              Android App Development
                            </Link>
                            <Link
                              href="/services/flutter"
                              className="dropdown-item"
                            >
                              Flutter App Development
                            </Link>
                          </Accordion.Body>
                        </Accordion.Item>

                        {/* CMS Development Sub-Accordion */}
                        <Accordion.Item eventKey="1">
                          <Accordion.Header
                            onClick={() => handleSubAccordionToggle("1")}
                            className="mb-2"
                          >
                            CMS Development
                          </Accordion.Header>
                          <Accordion.Body className="p-0">
                            <Link
                              href="/services/wordpress-website-development"
                              className="dropdown-item"
                            >
                              WordPress
                            </Link>
                            <Link
                              href="/services/wix"
                              className="dropdown-item"
                            >
                              Wix
                            </Link>
                          </Accordion.Body>
                        </Accordion.Item>

                        {/* E-commerce Sub-Accordion */}
                        <Accordion.Item eventKey="2">
                          <Accordion.Header
                            onClick={() => handleSubAccordionToggle("2")}
                            className="mb-2"
                          >
                            E-commerce
                          </Accordion.Header>
                          <Accordion.Body className="p-0">
                            <Link
                              href="/services/shopify"
                              className="dropdown-item"
                            >
                              Shopify
                            </Link>
                            <Link
                              href="/services/magento"
                              className="dropdown-item"
                            >
                              Magento
                            </Link>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <Link
                        className="dropdown-item"
                        href="/services/business-website-development"
                      >
                        Business Website
                      </Link>
                      <Link
                        className="dropdown-item"
                        href="/services/web-application"
                      >
                        Web Application
                      </Link>
                      <Link
                        className="dropdown-item"
                        href="/services/website-redesigning"
                      >
                        Website Redesigning
                      </Link>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Marketing Section */}
                  <Accordion.Item
                    eventKey="1"
                    className="border-0 bg-transparent col-12"
                  >
                    <Accordion.Header
                      className="border-0 bg-transparent p-0 mb-2"
                      onClick={() => handleAccordionToggle("1")} // Toggle main section on click
                      
                    >
                      Marketing
                    </Accordion.Header>
                    <Accordion.Body className="p-0">
                      <Link
                        href="/services/marketing/seo"
                        className="dropdown-item"
                      >
                        Seo
                      </Link>
                      <Link
                        href="/services/marketing/social-media-marketing-company-in-india"
                        className="dropdown-item"
                      >
                        Social Media
                      </Link>
                      <Link
                        href="/services/marketing/influencer-marketing-agency"
                        className="dropdown-item"
                      >
                        Influencer Marketing
                      </Link>
                      <Link
                        href="/services/marketing/affiliate-marketing-agency-in-noida"
                        className="dropdown-item"
                      >
                        Affiliate Marketing
                      </Link>

                      <Accordion activeKey={subActiveKey}>
                        {/* Performance Marketing Sub-Accordion */}
                        <Accordion.Item eventKey="0">
                          <Accordion.Header
                            onClick={() => handleSubAccordionToggle("0")}
                            className="mb-2 mt-1"
                          >
                            Performance Marketing
                          </Accordion.Header>
                          <Accordion.Body className="p-0">
                            <Link
                              href="/services/marketing/performance-marketing/pay-per-click-advertising-india"
                              className="dropdown-item"
                            >
                              PPC - Pay Per Click
                            </Link>
                            <Link
                              href="/services/marketing/performance-marketing/google-ads-management"
                              className="dropdown-item"
                            >
                              Google Ads Management
                            </Link>
                            <Link
                              href="/services/marketing/performance-marketing/meta-ads-management"
                              className="dropdown-item"
                            >
                              Meta Ads Management
                            </Link>
                            <Link
                              href="/services/marketing/performance-marketing/search-engine-ads-management"
                              className="dropdown-item"
                            >
                              Search Engine Ads Management
                            </Link>
                          </Accordion.Body>
                        </Accordion.Item>

                        {/* Bundle Marketing Sub-Accordion */}
                        <Accordion.Item eventKey="1">
                          <Accordion.Header
                            onClick={() => handleSubAccordionToggle("1")}
                            className="mb-2"
                          >
                            Bundle Marketing
                          </Accordion.Header>
                          <Accordion.Body className="p-0">
                            <Link
                              href="/services/marketing/bundle-marketing/email-marketing-company"
                              className="dropdown-item"
                            >
                              Email Marketing
                            </Link>
                            <Link
                              href="/services/marketing/bundle-marketing/whatsapp-marketing-company"
                              className="dropdown-item"
                            >
                              WhatsApp Marketing
                            </Link>
                            <Link
                              href="/services/marketing/bundle-marketing/sms-marketing-agency"
                              className="dropdown-item"
                            >
                              SMS Marketing
                            </Link>
                          </Accordion.Body>
                        </Accordion.Item>

                        {/* Marketplace Management Sub-Accordion */}
                        <Accordion.Item eventKey="2">
                          <Accordion.Header
                            onClick={() => handleSubAccordionToggle("2")}
                            className="mb-2"
                          >
                            Marketplace Management
                          </Accordion.Header>
                          <Accordion.Body className="p-0">
                            <Link
                              href="/services/marketing/market-place-managment/e-commerce-management"
                              className="dropdown-item"
                            >
                              E-commerce Management
                            </Link>
                            <Link
                              href="/services/marketing/market-place-managment/product-listing"
                              className="dropdown-item"
                            >
                              Product Listing
                            </Link>
                            <Link
                              href="/services/marketing/market-place-managment/marketplace-seo"
                              className="dropdown-item"
                            >
                              Marketplace SEO
                            </Link>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Creative Section */}
                  <Accordion.Item
                    eventKey="2"
                    className="border-0 bg-transparent col-12"
                  >
                    <Accordion.Header
                      className="border-0 bg-transparent p-0 mb-2"
                      onClick={() => handleAccordionToggle("2")} // Toggle main section on click
                    >
                      Creative
                    </Accordion.Header>
                    <Accordion.Body className="p-0">
                      <Accordion activeKey={subActiveKey}>
                        {/* Content Sub-Accordion */}
                        <Accordion.Item eventKey="0">
                          <Accordion.Header
                            onClick={() => handleSubAccordionToggle("0")}
                          >
                            Content
                          </Accordion.Header>
                          <Accordion.Body className="p-0">
                            <Link
                              href="/services/creative/content/blogs&article"
                              className="dropdown-item"
                            >
                              Blogs & Articles
                            </Link>
                            <Link
                              href="/services/creative/content/content-writing"
                              className="dropdown-item"
                            >
                              Content Writing
                            </Link>
                            <Link
                              href="/services/creative/content/ads-copywriting"
                              className="dropdown-item"
                            >
                              Ads Copywriting
                            </Link>
                            <Link
                              href="/services/creative/content/website-copywriting"
                              className="dropdown-item"
                            >
                              Website Copywriting
                            </Link>
                          </Accordion.Body>
                        </Accordion.Item>

                        {/* Graphic Design Sub-Accordion */}
                        <Accordion.Item eventKey="1">
                          <Accordion.Header
                            onClick={() => handleSubAccordionToggle("1")}
                          >
                            Graphic Design
                          </Accordion.Header>
                          <Accordion.Body className="p-0">
                            <Link
                              href="/services/creative/graphic-design/logo-design"
                              className="dropdown-item"
                            >
                              Logo Design
                            </Link>
                            <Link
                              href="/services/creative/graphic-design/brand-theame-strategy"
                              className="dropdown-item"
                            >
                              Brand Theme Strategy
                            </Link>
                            <Link
                              href="/services/creative/graphic-design/brochure-banner-designing"
                              className="dropdown-item"
                            >
                              Brochure & Banner Designing
                            </Link>
                            <Link
                              href="/services/creative/graphic-design/poster-designing"
                              className="dropdown-item"
                            >
                              Flyer & Poster Designing
                            </Link>
                            <Link
                              href="/services/creative/graphic-design/stationery-designing"
                              className="dropdown-item"
                            >
                              Stationery Designing
                            </Link>
                            <Link
                              href="/services/creative/graphic-design/package&packaging"
                              className="dropdown-item"
                            >
                              Package/Packaging Designing
                            </Link>
                            <Link
                              href="/services/creative/graphic-design/product-box-design"
                              className="dropdown-item"
                            >
                              Product Box Design
                            </Link>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* PR & Media Section */}
                  <Accordion.Item
                    eventKey="3"
                    className="border-0 bg-transparent col-12"
                  >
                    <Accordion.Header
                      className="border-0 bg-transparent p-0"
                      onClick={() => handleAccordionToggle("3")} // Toggle main section on click
                    >
                      PR & Media
                    </Accordion.Header>
                    <Accordion.Body className="p-0">
                      <Link
                        href="/services/pr/digital-promotion"
                        className="dropdown-item"
                      >
                        Digital Promotion & PR
                      </Link>
                      <Link
                        href="/services/pr/political-promotion"
                        className="dropdown-item"
                      >
                        Political Promotion & PR
                      </Link>
                      <Link href="/services/pr/orm" className="dropdown-item">
                        ORM
                      </Link>
                      <Link
                        href="/services/pr/content-creation"
                        className="dropdown-item"
                      >
                        Content Creation
                      </Link>
                      <Link
                        href="/services/pr/product-videography"
                        className="dropdown-item"
                      >
                        Product Videography
                      </Link>
                      <Link
                        href="/services/pr/product-photoshoot"
                        className="dropdown-item"
                      >
                        Product Photoshoot
                      </Link>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <div className="mb-2">
              <Link
                  className="btn btn-animation w-100 btn-dark"
                  href="/Contact-us"
                >
                  Let's talk
                </Link>
              </div>
              <div>
              <Link
                  className="btn btn-animation w-100 btn-dark"
                  href="/Contact-us"
                >
                  Let's talk
                </Link>
              </div>
              <div className="my-4">
              <p>
                Connect with us:
              </p>
              <div className="d-flex gap-2 px-2 pointer">
                    <FaTwitterSquare size={25} />
                    <FaFacebookSquare size={25} />
                    <FaSquareInstagram size={25} />
                  </div>
              </div>
            </div>

          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default MobileNav;