'use client'
import React, { useState } from "react";
import LeftSideText from "./LeftSideText";

function CommonGrid() {
  const [showMoreMainText, setShowMoreMainText] = useState(false);
  const [showMoreCoding, setShowMoreCoding] = useState(false);
  const [showMoreCampaigns, setShowMoreCampaigns] = useState(false);
  const [showMoreDesign, setShowMoreDesign] = useState(false);
  const [showMoreAds, setShowMoreAds] = useState(false);

  const highlightDotsStyle = {
    marginLeft:"3px",
    color: "black",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div className="position-relative">
      <LeftSideText text="SERVICES"/>
    <div className="mt-4 pt-2 container">
      <div className="mt-4 pt-3">
        <div>
          <div className="row">
            <div className="col-md-6 border-right mb-3 mb-md-0">
              <div className="position-sticky top-0">
                <p className="text-uppercase fw-bold text-muted title mb-2">
                  Services We Offer
                </p>
                <hr />
                <span className="text-capitalize display-4">
                  Together <br /> We Create <br />
                </span>

                <span
                  className="mt-2 w-75 p-hyphen"
                  style={{ fontSize: "15px", lineHeight: "1.7" }}
                >
                 Probey Services boosts your online presence with expert SEO and website design, helping you rank higher on Google. We drive traffic and convert visitors into customers for business growth.
                </span>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row">
                {/* Coding Section */}
                <div className="col-md-6">
                  <div className="grid-item">
                    <div>
                      <div className="align-items-end d-flex justify-content-between">
                        <p className="text-uppercase fw-bold text-muted title mb-2">
                          CODING
                        </p>
                        <img src="/probeyImages/icons/coding.png" alt="icon" height={30} width={30} />
                      </div>
                      <hr />
                      <span className="text-capitalize text-wrap display-7 mb-4">
                        Web & App Development
                      </span>
                      <p className="text-wrap fw-light p-hyphen" style={{ fontSize: "15px", lineHeight: "1.7" }}>
                      Probey Services builds attractive, high-performing websites and user-friendly mobile apps that engage visitors and deliver top performance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Campaigns Section */}
                <div className="col-md-6">
                  <div className="grid-item">
                    <div>
                      <div className="align-items-end d-flex justify-content-between">
                        <p className="text-uppercase fw-bold text-muted title mb-2">
                          Campaigns
                        </p>
                        <img src="/probeyImages/icons/digital-campaign.png" alt="icon" height={30} width={30} />
                      </div>
                      <hr />
                      <span className="text-capitalize text-wrap display-7 mb-4">
                        SEO & Digital Marketing
                      </span>
                      <p className="text-wrap fw-light p-hyphen" style={{ fontSize: "15px", lineHeight: "1.7" }}>
                      Probey Services offers top digital marketing and SEO services in Noida to boost your website’s visibility, drive traffic, and connect with your target audience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Design Section */}
                <div className="col-md-6 mt-4">
                  <div className="grid-item">
                    <div>
                      <div className="align-items-end d-flex justify-content-between">
                        <p className="text-uppercase fw-bold text-muted title mb-2">
                          DESIGN
                        </p>
                        <img src="/probeyImages/icons/graphic-design.png" alt="icon" height={30} width={30} />
                      </div>
                      <hr />
                      <span className="text-capitalize text-wrap display-7 mb-4">
                        Logo & Graphics
                      </span>
                      <p className="text-wrap fw-light p-hyphen" style={{ fontSize: "15px", lineHeight: "1.7" }}>
                      Probey Services designs memorable logos, impactful graphics, and complete website packages to enhance your brand and create a user-friendly online presence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Digital Ads Section */}
                <div className="col-md-6 mt-4">
                  <div className="grid-item">
                    <div>
                      <div className="align-items-end d-flex justify-content-between">
                        <p className="text-uppercase fw-bold text-muted title mb-2">
                          Digital Ads
                        </p>
                        <img src="/probeyImages/icons/ppc.png" alt="icon" height={30} width={30} />
                      </div>
                      <hr />
                      <span className="text-capitalize text-wrap display-7 mb-4">
                        PPC Management
                      </span>
                      <p className="text-wrap fw-light p-hyphen" style={{ fontSize: "15px", lineHeight: "1.7" }}>Maximize your advertising budget with Probey Services. Our PPC management creates targeted, effective ad campaigns that deliver high ROI and drive results.
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
    </div>
  );
}

export default CommonGrid;
