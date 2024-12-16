import React from "react"
import "../footer.css"
import Link from 'next/link';
import { MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import canada from "../assets/footer/canada.png"
import gate from "../assets/footer/gate-of-india.png"
import char from "../assets/footer/hyderabad-charminar.png"
import india from "../assets/footer/india-gate.png"
import nature from "../assets/footer/nature.png"
import statue from "../assets/footer/statue-of-liberty.png"
import wat from "../assets/footer/wat-phra-kaew.png"


function Footer() {
    return (
        <div className="container-fluid my mt-4">
            <div className="container d-flex align-items-center">
                <div className="text-center">
                    <h1 className="my-footer-h1">We Help Brands Grow Online</h1>
                </div>
            </div>
            <div>
                <div className="mt-2">
                    <div className="container">
                    <div className="row d-flex align-items-stretch">
                            {/* Company Info Column */}
                            <div className="col-lg-3 col-6 mb-4 mb-lg-0 d-flex flex-column ps-3 special_width" >
                                <div className=" position-relative" style={{ width: '50px', height: '50px' }}>
                                    <Link href="/">
                                        <Image
                                            src="/logo/blackLogo.png"
                                            alt="Logo of Probey Services"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                            priority
                                        />
                                    </Link>
                                </div>
                                <ul className="list-unstyled flex-grow-1 mb-0" style={{ fontSize: '0.875rem' }}>
                                    <li className="mb-2 reached-li">
                                        <Link href="https://g.co/kgs/WBUqk7A" className="text-decoration-none text-dark d-flex align-items-center">
                                            <MapPin className="me-2" size={16} />
                                            <span>H - 150, Sector 63, Noida</span>
                                        </Link>
                                    </li>
                                    <li className="mb-2 reached-li ">
                                        <Link href="mailto:info@probeyservices.com" className="text-decoration-none text-dark d-flex align-items-center">
                                            <Mail className="me-2" size={16} />
                                            <span>info@probeyservices.com</span>
                                        </Link>
                                    </li>
                                    <li className="mb-2 reached-li">
                                        <Link href="tel:+911203132126" className="text-decoration-none text-dark d-flex align-items-center">
                                            <Phone className="me-2" size={16} />
                                            <span>+91 120 313 2126</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Website Services Column */}
                            <div className="col-lg-3 border-start col-6 mb-4 mb-lg-0 d-flex flex-column ps-3 special_width">
                                <h5 className="fw-bold" style={{ fontSize: '1rem' }}>WEBSITE</h5>
                                <ul className="list-unstyled flex-grow-1 mb-0" style={{ fontSize: '0.7rem' }}>
                                    {[
                                        { name: 'Wordpress Website', href: '/services/wordpress-website-development' },
                                        { name: 'Shopify Website', href: '/services/shopify' },
                                        { name: 'Business Website', href: '/services/business-website-development' },
                                        { name: 'Web Application', href: '/services/web-application' },
                                        { name: 'Website Redesigning', href: '/services/website-redesigning' }
                                    ].map((item, index) => (
                                        <li key={index} className="mb-2 reached-li">
                                            <Link href={item.href} className="text-decoration-none text-dark d-flex align-items-center hover-effect">
                                                <ChevronRight className="me-2" size={14} />
                                                <span>{item.name}</span>
                                                <span className="arrow" aria-hidden="true">→</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Marketing Column */}
                            <div className="col-lg-3 border-start col-6 mb-4 mb-lg-0 d-flex flex-column ps-3 special_width">
                                <h5 className="fw-bold" style={{ fontSize: '1rem' }}>MARKETING</h5>
                                <ul className="list-unstyled flex-grow-1 mb-0" style={{ fontSize: '0.7rem' }}>
                                    {[
                                        { name: 'On / Off Page SEO', href: '/services/on-off-page-seo' },
                                        { name: 'Google Ads Management', href: '/services/google-ads-management' },
                                        { name: 'E-commerce Management', href: '/services/e-commerce-management' },
                                        { name: 'Influencer Marketing', href: '/services/influencer-marketing-agency' },
                                        { name: 'Affiliate Marketing', href: '/services/affiliate-marketing-agency-in-noida' }
                                    ].map((item, index) => (
                                        <li key={index} className="mb-2 reached-li">
                                            <Link href={item.href} className="text-decoration-none text-dark d-flex align-items-center hover-effect">
                                                <ChevronRight className="me-2" size={14} />
                                                <span>{item.name}</span>
                                                <span className="arrow" aria-hidden="true">→</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Creative Column */}
                            <div className="col-lg-3 border-start col-6 mb-4 mb-lg-0 d-flex flex-column ps-3 special_width">
                                <h5 className="fw-bold" style={{ fontSize: '1rem' }}>CREATIVE</h5>
                                <ul className="list-unstyled flex-grow-1 mb-0" style={{ fontSize: '0.7rem' }}>
                                    {[
                                        { name: 'Brand Theme & Strategy', href: '/services/brand-theme-strategy' },
                                        { name: 'Website Copywriting', href: '/services/website-copywriting-services' },
                                        { name: 'Logo Design', href: '/services/logo-design-company' },
                                        { name: 'Flyer & Poster Designing', href: '/services/poster-designing-company' },
                                        { name: 'Blogs & Articles', href: '/services/content/blogs&article' }
                                    ].map((item, index) => (
                                        <li key={index} className="mb-2 reached-li">
                                            <Link href={item.href} className="text-decoration-none text-dark d-flex align-items-center hover-effect">
                                                <ChevronRight className="me-2" size={14} />
                                                <span>{item.name}</span>
                                                <span className="arrow" aria-hidden="true">→</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* PR & Media Column */}
                            <div className="col-lg-3 border-start col-6 mb-4 mb-lg-0 d-flex flex-column ps-3 special_width">
                                <h5 className="fw-bold" style={{ fontSize: '1rem' }}>PR & MEDIA</h5>
                                <ul className="list-unstyled flex-grow-1 mb-0" style={{ fontSize: '0.875rem' }}>
                                    {[
                                        { name: 'Digital Promotion & PR', href: '/services/pr/digital-promotion' },
                                        { name: 'Political Promotion & PR', href: '/services/pr/political-promotion' },
                                        { name: 'Content Creation', href: '/services/pr/content-creation' },
                                        { name: 'Product Videography', href: '/services/pr/product-videography' },
                                        { name: 'Product Photoshoot', href: '/services/pr/product-photoshoot' }
                                    ].map((item, index) => (
                                        <li key={index} className="mb-2 reached-li">
                                            <Link href={item.href} className="text-decoration-none text-dark d-flex align-items-center hover-effect">
                                                <ChevronRight className="me-2" size={14} />
                                                <span>{item.name}</span>
                                                <span className="arrow" aria-hidden="true">→</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-hr"></hr>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-6 d-flex justify-content-around">
                            <h4 className="text-uppercase fw-bold">
                                Reach Us Nationwide
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {/* New Delhi Section */}
                        <div className="col-md-3 d-flex flex-column justify-content-center mt-4 ps-3">
                            <h5 className="fw-bold" style={{ fontSize: '1rem' }}>New Delhi</h5>
                            <div className="d-flex align-items-center">
                                <Image
                                    width={35}
                                    height={35}
                                    src={india}
                                    alt="New Delhi Location"
                                />
                                <ul className="list-unstyled ms-3">
                                    <li className="reached-li ">2-A/3, Stirring Minds, Kundan Mansion</li>
                                    <li className="reached-li ">Asaf Ali Road, New Delhi, DL - 110002</li>
                                </ul>
                            </div>
                        </div>

                        {/* Mumbai Section */}
                        <div className="col-md-3 d-flex flex-column justify-content-center mt-4 border-start ps-3">
                            <h5 className="fw-bold" style={{ fontSize: '1rem' }}>Mumbai</h5>
                            <div className="d-flex align-items-center">
                                <Image
                                    width={35}
                                    height={35}
                                    src={gate}
                                    alt="Mumbai Location"

                                />
                                <ul className="list-unstyled ms-3">
                                    <li className="reached-li ">202, Plot No. 175, Kagalwala House</li>
                                    <li className="reached-li ">Santacruz East, Mumbai, MH - 400098</li>
                                </ul>
                            </div>
                        </div>

                        {/* Hyderabad Section */}
                        <div className="col-md-3 d-flex flex-column justify-content-center mt-4 border-start ps-3">
                            <h5 className="fw-bold" style={{ fontSize: '1rem' }}>Hyderabad</h5>
                            <div className="d-flex align-items-center">
                                <Image
                                    width={35}
                                    height={35}
                                    src={char}
                                    alt="Hyderabad Location"
                                />
                                <ul className="list-unstyled ms-3">
                                    <li className="reached-li ">18,Level 1, Midtown Building Dwarakapuri</li>
                                    <li className="reached-li ">Banjara Hills, Hyderabad, TG - 500034</li>
                                </ul>
                            </div>
                        </div>

                        {/* Gorakhpur Section */}
                        <div className="col-md-3 d-flex flex-column justify-content-center mt-4 border-start ps-3">
                            <h5 className="fw-bold" style={{ fontSize: '1rem' }}>Gorakhpur</h5>
                            <div className="d-flex align-items-center">
                                <Image
                                    width={35}
                                    height={35}
                                    src={wat}
                                    alt="Gorakhpur Location"
                                />
                                <ul className="list-unstyled ms-3">
                                    <li className="reached-li ">181, Ashirwad Complex, Basantpur</li>
                                    <li className="reached-li ">Ghantaghar, Gorakhpur, U.P - 273158</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-hr"></hr>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-6 d-flex justify-content-around">
                            <h4 className="text-uppercase fw-bold">
                                GLOBAL PRESENCE, ONE COMMITMENT
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        {/* USA */}
                        <div className="col-md-3 d-flex flex-column justify-content-center mt-4 ps-3">
                            <h5 className="fw-bold" style={{ fontSize: '1rem' }}>USA</h5>
                            <div className="d-flex align-items-center">
                                <Image
                                    width={35}
                                    height={35}
                                    src={statue}
                                    alt="digital marketing agency in noida"
                                />
                                <ul className="list-unstyled ms-3">
                                    <li className="reached-li ">200, Continental Drive</li>
                                    <li className="reached-li ">Newark, DE - 19713 &nbsp;</li>
                                </ul>
                            </div>
                        </div>

                        {/* UK */}
                        <div className="col-md-3 d-flex flex-column justify-content-center border-start mt-4 ps-3" >
                            <h5 className="fw-bold" style={{ fontSize: '1rem' }}>UK</h5>
                            <div className="d-flex align-items-center">
                                <Image
                                    width={35}
                                    height={35}
                                    src={nature}
                                    alt="digital marketing agency in india"
                                />
                                <ul className="list-unstyled ms-3">
                                    <li className="reached-li">Park House, Regus</li>
                                    <li className="reached-li">Birmingham - B45 9AH</li>
                                </ul>
                            </div>
                        </div>

                        {/* CANADA */}
                        <div className="col-md-3 d-flex flex-column justify-content-center mt-4 border-start ps-3">
                            <h5 className="fw-bold" style={{ fontSize: '1rem' }}>CANADA</h5>
                            <div className="d-flex align-items-center">
                                <Image
                                    width={35}
                                    height={35}
                                    src={canada}
                                    alt="digital marketing agency in india"
                                />
                                <ul className="list-unstyled ms-3">
                                    <li className="reached-li">895, Don Mills Road</li>
                                    <li className="reached-li">Toronto - ON M3C 1W3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-hr mb-1"></hr>
                <div className="container align-items-center container-fluid d-flex justify-content-around py-2">
                    <div className="row justify-content-center">
                        <p className="m-0 p-0 pt-1 reached-li" >© Probey Services 2024 | CIN U74999UP2019PTC124494</p>
                    </div>
                    <div className="row justify-content-center">
                        <ul className="list-inline m-0">
                            <li className="list-inline-item reached-li">
                                <a href="https://probeyservices.com/who-we-are/" className="text-decoration-none">Who We Are</a>
                            </li>
                            <li className="list-inline-item reached-li">
                                <a href="https://probeyservices.com/blog/" className="text-decoration-none">Blog</a>
                            </li>
                            <li className="list-inline-item reached-li">
                                <a href="https://probeyservices.com/careers/" className="text-decoration-none">Careers</a>
                            </li>
                            <li className="list-inline-item reached-li">
                                <a href="https://probeyservices.com/contact-us/" className="text-decoration-none">Contact Us</a>
                            </li>
                            <li className="list-inline-item reached-li">
                                <a href="https://probeyservices.com/privacy-policy/" className="text-decoration-none">Privacy Policy</a>
                            </li>
                            <li className="list-inline-item reached-li">
                                <a href="https://probeyservices.com/terms-and-conditions/" className="text-decoration-none">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div className="row justify-content-center">
                        <div className="d-inline-flex gap-1">
                            <a href="https://facebook.com/ProbeyServices" target="_blank" rel="noopener noreferrer" className="">
                                <img src="/logo/facebook.png" alt="fb" style={{objectFit:"contain"}}/>
                            </a>
                            <a href="https://instagram.com/ProbeyServices" target="_blank" rel="noopener noreferrer" className="">
                            <img src="/logo/instagram.png" alt="instagram" style={{objectFit:"contain"}}/>
                            </a>
                            <a href="https://www.linkedin.com/company/probeyservices/mycompany/" target="_blank" rel="noopener noreferrer" className="">
                            <img src="/logo/linkedin.png" alt="linkedin" style={{objectFit:"contain"}}/>
                            </a>
                            <a href="https://twitter.com/probeyservices" target="_blank" rel="noopener noreferrer" className="">
                            <img src="/logo/twitter.png" alt="fb" style={{objectFit:"contain"}}/>
                            </a>
                            <a href="https://wa.me/919773901990" target="_blank" rel="noopener noreferrer" className="">
                            <img src="/logo/whatsapp.png" alt="wa" style={{objectFit:"contain"}}/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer