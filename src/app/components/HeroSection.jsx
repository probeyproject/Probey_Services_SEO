import React from "react";
import Circle from "./Circle";
import AwardSectionHero from "./AwardSectionHero";
import LeftSideText from "./LeftSideText";
import { IoLocationOutline } from "react-icons/io5";
import CustomeSubmissionButton from "./CustomSubmissionField";

function HeroSection() {
  return (
    <>
      <section className="text-dark w-100 d-flex justify-content-center position-relative">
        <LeftSideText text="PROBEY" />
        <div className="container-lg h-100 row">
          {/* Left Section */}
          <div className="col-md-7 col-12 flex-column">
            <section className="pt-0">
              <section className="row pb-3">
                <div className="col-md-3 col-6">
                  <AwardSectionHero
                    link={"https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df22453a88d0237804696b_award-dribbble.svg"}
                    title="Top Team in the world on Dribble"
                  />
                </div>
                <div className="col-md-3 col-6">
                  <AwardSectionHero
                    link={"https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df2245169d0dbda30cc38c_award-clutch.svg"}
                    title="Top 100 Global Service Provider by Clutch"
                  />
                </div>
                <div className="col-md-3 col-6">
                  <AwardSectionHero
                    link={"https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df2245d0569f8fce1a81c6_award-5stars.svg"}
                    title="5 Stars Rating on GoodFirms"
                  />
                </div>
                <div className="col-md-3 col-6">
                  <AwardSectionHero
                    link={"https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df2248b0570f11feddea87_award-upwork.svg"}
                    title="100% Job Success on Upwork"
                  />
                </div>
              </section>
            </section>

            <h3 className="display-2" style={{ fontWeight: "500" }}>
              <strong>Probey is Software</strong> <br />
              <strong>Innovation & </strong>
              <br />
              <strong>Design Company</strong>
            </h3>
            <section className="d-flex gap-4 pt-2 text-muted">
              {["Delhi", "Mumbai", "Noida", "Kolkata (Coming Soon)"].map((location, index) => (
                <section key={index} className="p-0 position-relative" style={{ fontSize: "10px" }}>
                  <IoLocationOutline /> {location}
                </section>
              ))}
            </section>
          </div>

          {/* Right Section */}
          <div className="col-md-5 col-12 d-flex flex-column justify-content-center align-items-center">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <div>
                {/* Circle Video Section */}
                <div
                  className="rounded-5 video-container"
                  style={{
                    height: "50vh",
                    width: "50vh",
                    overflow: "hidden",
                    transform: "skewY(10deg)",
                  }}
                >
                  <video
                    className="rounded-4"
                    src="/Video/video.webm"
                    autoPlay
                    muted
                    loop
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="pt-md-4 bg-transparent">
              <div className="mb-3">
                <CustomeSubmissionButton />
              </div>
            </div>
          </div>
        </div>
      </section>

  </>
  )}

  export default HeroSection