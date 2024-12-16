"use client";
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { IoMdTime } from "react-icons/io";
import { RiGalleryFill } from "react-icons/ri";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa"; // Importing icons for inputs
import { FaSquareInstagram } from "react-icons/fa6";

function MainContainerContact() {
  const [activeTab, setActiveTab] = useState("business"); // State to track active tab

  return (
    <div className="p-md-4 p-2">
      <div className="my-md-2 py-md-2"></div>
      <div className="container">
        <div className="container-sm">
          <div className="row">
            <div className="col-md-6 px-md-4">
              {/* Conditionally render content based on activeTab */}
              <h3 className="display-7 mb-md-4 mb-2 text-center text-md-start">
                {activeTab === "business"
                  ? "Are You Business?"
                  : "Apply for a Career Opportunity!"}
              </h3>
              <div
                className="text-wrap text-muted mb-md-4 mb-2 text-center text-md-start"
                style={{ fontSize: "0.9rem" }}
              >
                {activeTab === "business" ? (
                  <>
                    We’d love to hear about your digital project. Please get in
                    touch with one of our Project Consultants.
                  </>
                ) : (
                  <>
                    Join our dynamic team and help build amazing digital
                    experiences!
                  </>
                )}
              </div>
              <div>
                <span className="fw-small fw-bold text-center text-md-start">
                  Any Enquiry
                </span>
                <div className="d-flex gap-2 flex-md-row flex-column">
                  <a
                    style={{
                      color: "#1a73e8",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    }}
                    href="mailto:info@noviindus.com"
                  >
                    info@probeyservices.com
                  </a>
                  <div className="d-flex gap-2 px-2 pointer">
                    <FaTwitterSquare size={18} />
                    <FaFacebookSquare size={18} />
                    <FaSquareInstagram size={18} />
                  </div>
                  &nbsp; &nbsp; &nbsp;
                  <span
                    className="d-none d-md-inline"
                    style={{ color: "#7a55c6", fontSize: "0.9rem" }}
                  >
                    |
                  </span>
                  &nbsp; &nbsp;
                  <span style={{ color: "#1a73e8", fontSize: "0.9rem" }}>
                    <a
                      style={{
                        color: "#1a73e8",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                      }}
                      href="tel:+91120 313 2126"
                    >
                      +91 120 313 2126
                    </a>
                  </span>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-6">
                  <p className="h3" style={{ fontSize: "1rem" }}>
                    <IoMdTime />
                  </p>
                  <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                    Monday – Saturday
                  </p>
                  <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                    6 am to 11 pm IST
                  </p>
                </div>
                <div className="col-6">
                  <p className="h3" style={{ fontSize: "1rem" }}>
                    <RiGalleryFill />
                  </p>
                  <p className="mb-3" style={{ fontSize: "0.9rem" }}>
                    <strong>Probey services</strong>
                  </p>
                  <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                    Office no.-1,
                  </p>
                  <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                    H-150, Sector-63, Noida
                  </p>
                  <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                    UttarPradesh 201301
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 shadow rounded-3">
                <div className="container">
                  {/* Custom Navigation using HTML <nav> tags */}
                  <nav
                    className="nav nav-pills d-flex justify-content-center"
                    role="tablist"
                    style={{ width: "50%", margin: "0 auto" }}
                  >
                    <a
                      className={`btn btn-white ${
                        activeTab === "business" ? "btn-animation btn-dark" : ""
                      }`}
                      onClick={() => setActiveTab("business")}
                      role="tab"
                      style={{ width: "50%" }}
                    >
                      Business
                    </a>
                    <a
                      className={`btn ${
                        activeTab === "career" ? "btn-animation btn-dark" : ""
                      }`}
                      onClick={() => setActiveTab("career")}
                      role="tab"
                      style={{ width: "50%" }}
                    >
                      Career
                    </a>
                  </nav>

                  {/* Tab Content */}
                  <div className="mt-4">
                    {activeTab === "business" ? (
                      <>
                        {/* Business Form */}
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">
                            <FaUser size={16} />
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="Name"
                            aria-label="Name"
                            aria-describedby="basic-addon1"
                            className="custom-input2 form-control-sm"
                          />
                        </InputGroup>

                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon2">
                            <FaEnvelope size={16} />
                          </InputGroup.Text>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon2"
                            className="custom-input2 form-control-sm"
                          />
                        </InputGroup>

                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon3">
                            <FaPhone size={16} />
                          </InputGroup.Text>
                          <Form.Control
                            type="tel"
                            placeholder="Mobile Number"
                            aria-label="Mobile Number"
                            aria-describedby="basic-addon3"
                            className="custom-input2 form-control-sm"
                          />
                        </InputGroup>

                        <Form.Group className="mb-3">
                          <Form.Label style={{ fontSize: "0.9rem" }}>
                            Tell us about your project
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Provide details..."
                            className="custom-input2 form-control-sm"
                          />
                        </Form.Group>

                        {/* File Upload for Business */}
                        <Form.Group controlId="formFile" className="mb-3">
                          <Form.Label style={{ fontSize: "0.9rem" }}>
                            Upload Project Files (Optional)
                          </Form.Label>
                          <Form.Control
                            type="file"
                            className="form-control-sm"
                          />
                        </Form.Group>

                        <div className="text-center mb-3">
                          <button className="btn btn-dark btn-animation btn-sm">
                            Submit
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Career Form */}
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">
                            <FaUser size={16} />
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="Your Name"
                            aria-label="Your Name"
                            aria-describedby="basic-addon1"
                            className="custom-input2 form-control-sm"
                          />
                        </InputGroup>

                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon2">
                            <FaEnvelope size={16} />
                          </InputGroup.Text>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon2"
                            className="custom-input2 form-control-sm"
                          />
                        </InputGroup>

                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon3">
                            <FaPhone size={16} />
                          </InputGroup.Text>
                          <Form.Control
                            type="tel"
                            placeholder="Phone Number"
                            aria-label="Phone Number"
                            aria-describedby="basic-addon3"
                            className="custom-input2 form-control-sm"
                          />
                        </InputGroup>

                        <Form.Group className="mb-3">
                          <Form.Label style={{ fontSize: "0.9rem" }}>
                            Why do you want to join us?
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Tell us why..."
                            className="custom-input2 form-control-sm"
                          />
                        </Form.Group>

                        {/* File Upload for Career */}
                        <Form.Group controlId="formFile" className="mb-3">
                          <Form.Label style={{ fontSize: "0.9rem" }}>
                            Upload Resume (Optional)
                          </Form.Label>
                          <Form.Control
                            type="file"
                            className="form-control-sm"
                          />
                        </Form.Group>

                        <div className="text-center mb-3">
                          <button className="btn btn-dark btn-animation ">
                            Submit
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContainerContact;