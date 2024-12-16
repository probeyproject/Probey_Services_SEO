import React from "react";

function OurStacks() {
  const placeholderIcon = "https://w7.pngwing.com/pngs/308/74/png-transparent-computer-icons-setting-icon-cdr-svg-setting-icon.png"; // External URL for placeholder

  return (
    <div className="container">
      <div className="container">
        <section className="">
        <h2 className="display-4">Tools to support your growth.
        </h2>
        <p>Guaranteed speed, quality, and security.</p>
        </section>

        <section>
          {/* Row 1: Technology Stack Buttons */}
          <div className="d-flex gap-4 justify-content-center flex-wrap">
            <button type="button" className="btn custom-btn mb-3">
              <img
                src={"/technologyIcons/nodejs (1).png"}
                alt="Node.js"
                style={{ width: 30, marginRight: 8 }}
              />
              Node.js
            </button>
            <button type="button" className="btn custom-btn mb-3">
              <img
                src={"/technologyIcons/atom.png"}
                alt="React"
                style={{ width: 30, marginRight: 8 }}
              />
              React
            </button>
            <button type="button" className="btn custom-btn mb-3">
              <img
                src={"/technologyIcons/java.png"}
                alt="Java"
                style={{ width: 30, marginRight: 8 }}
              />
              Java
            </button>
            <button type="button" className="btn custom-btn mb-3">
              <img
                src={"/technologyIcons/python.png"}
                alt="Python"
                style={{ width: 30, marginRight: 8 }}
              />
              Python
            </button>
          </div>

          {/* Row 2: Additional Technology Stack Buttons */}
          <div className="d-flex gap-4 justify-content-center flex-wrap">
            <button type="button" className="btn custom-btn mb-3">
              <img
                src={"/technologyIcons/angular-mountain.png"}
                alt="Angular"
                style={{ width: 30, marginRight: 8 }}
              />
              Angular
            </button>
            <button type="button" className="btn custom-btn mb-3">
              <img
                src={"/technologyIcons/wordpress.png"}
                alt="Express"
                style={{ width: 30, marginRight: 8 }}
              />
              Wordpress
            </button>
            <button type="button" className="btn custom-btn mb-3">
              <img
                src={"/technologyIcons/django (1).png"}
                alt="Django"
                style={{ width: 30, marginRight: 8 }}
              />
              Django
            </button>
            <button type="button" className="btn custom-btn mb-3">
              <img
                src={"/technologyIcons/database.png"}
                alt="MongoDB"
                style={{ width: 30, marginRight: 8 }}
              />
              MongoDB
            </button>
            <button type="button" className="btn custom-btn mb-3">
              <img
                src={"/technologyIcons/sql-server (1).png"}
                alt="SQL"
                style={{ width: 30, marginRight: 8 }}
              />
              SQL
            </button>
          </div>

          {/* Row 3: More Technologies */}
          <div className="d-flex gap-4 justify-content-center flex-wrap">
            <button type="button" className="btn custom-btn mb-3">
              <img
                src={placeholderIcon}
                alt="TypeScript"
                style={{ width: 30, marginRight: 8 }}
              />
              Google Analytic
            </button>
            <button type="button" className="btn custom-btn mb-3">
              <img
                src={placeholderIcon}
                alt="GraphQL"
                style={{ width: 30, marginRight: 8 }}
              />
              GraphQL
            </button>
            <button type="button" className="btn custom-btn mb-3">
              <img
                src={placeholderIcon}
                alt="AWS"
                style={{ width: 30, marginRight: 8 }}
              />
              AWS
            </button>
            <button type="button" className="btn custom-btn mb-3">
              <img
                src={"/technologyIcons/web.png"}
                alt="Docker"
                style={{ width: 30, marginRight: 8 }}
              />
              Docker
            </button>
          </div>

          {/* Row 4: Mobile Technology Stack Buttons */}
          <div className="d-flex gap-4 justify-content-center flex-wrap">
            <button type="button" className="btn custom-btn mb-3">
              <img
                src={placeholderIcon}
                alt="Flutter"
                style={{ width: 30, marginRight: 8 }}
              />
              Flutter
            </button>
            <button type="button" className="btn custom-btn mb-3">
              <img
                src={placeholderIcon}
                alt="Swift"
                style={{ width: 30, marginRight: 8 }}
              />
              Swift
            </button>
            <button type="button" className="btn custom-btn mb-3">
              <img
                src={placeholderIcon}
                alt="React Native"
                style={{ width: 30, marginRight: 8 }}
              />
              React Native
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OurStacks;