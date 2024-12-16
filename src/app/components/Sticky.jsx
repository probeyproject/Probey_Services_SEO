import React from "react";
import { FaWhatsapp, FaFacebook, FaPhone, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquarePhoneFlip } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StickyPhone = () => {
  return (
    <ul className="p-0 position-fixed top-50 right-0 z-2 sticky-phone-list" style={{ width: "fit-content" }}>
      <li className="sticky-elements-phone d-flex align-items-center">
        <span className="social-icon-container">
          <a className="social-link-phone" href="tel:+911203132126" title="Phone">
            <FaSquarePhoneFlip className="social-icon" />
          </a>
        </span>
        <span className="social-text-container">
          <a className="social-link-phone" href="tel:+911203132126" title="Phone">
            Phone
          </a>
        </span>
      </li>
      
      <li className="sticky-elements-phone d-flex align-items-center">
        <span className="social-icon-container">
          <a className="social-link-phone" href="https://api.whatsapp.com/send/?phone=919773901990&text&type=phone_number&app_absent=0" title="WhatsApp">
            <FaWhatsapp className="social-icon" />
          </a>
        </span>
        <span className="social-text-container">
          <a className="social-link-phone" href="https://api.whatsapp.com/send/?phone=919773901990&text&type=phone_number&app_absent=0" title="WhatsApp">
            WhatsApp
          </a>
        </span>
      </li>
      
      <li className="sticky-elements-phone d-flex align-items-center">
        <span className="social-icon-container">
          <a className="social-link-phone" href="https://www.facebook.com/ProbeyServices" title="Facebook">
            <FaFacebook className="social-icon" />
          </a>
        </span>
        <span className="social-text-container">
          <a className="social-link-phone" href="https://www.facebook.com/ProbeyServices" title="Facebook">
            Facebook
          </a>
        </span>
      </li>
      
      <li className="sticky-elements-phone d-flex align-items-center">
        <span className="social-icon-container">
          <a className="social-link-phone" href="https://x.com/probeyservices" title="Twitter">
            <FaXTwitter className="social-icon" />
          </a>
        </span>
        <span className="social-text-container">
          <a className="social-link-phone" href="https://x.com/probeyservices" title="Twitter">
            Twitter
          </a>
        </span>
      </li>
      
      <li className="sticky-elements-phone d-flex align-items-center">
        <span className="social-icon-container">
          <a className="social-link-phone" href="https://www.instagram.com/ProbeyServices/" title="Instagram">
            <FaInstagram className="social-icon" />
          </a>
        </span>
        <span className="social-text-container">
          <a className="social-link-phone" href="https://www.instagram.com/ProbeyServices/" title="Instagram">
            Instagram
          </a>
        </span>
      </li>
      
      <li className="sticky-elements-phone d-flex align-items-center">
        <span className="social-icon-container">
          <a className="social-link-phone" href="https://www.linkedin.com/company/probeyservices" title="LinkedIn">
            <FaLinkedin className="social-icon" />
          </a>
        </span>
        <span className="social-text-container">
          <a className="social-link-phone" href="https://www.linkedin.com/company/probeyservices" title="LinkedIn">
            LinkedIn
          </a>
        </span>
      </li>
    </ul>
  );
};

export default StickyPhone;
