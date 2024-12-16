import React from 'react'
import ServicesHero from '../../components/ServicesHero'
import ImageSection from '../../components/ImageSection'
import HowWeWork from '../../components/HowWeWork'
import CommonGrid from '../../components/CommonGrid'
import ClientCarousel from '../../components/ClientCrausel'
import CommonCarousel from '../../components/CommonCarousel'
import ServicesFAQ from '../../components/ServicesFAQ'

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
function page() {
    return (
        <>
            <ServicesHero />
            <ImageSection images={images}/>
            <HowWeWork />
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

                <span className="mt-2 w-75">Probey Services provide the best SEO services in Delhi NCR to increase your businesses online presence. Our expertise in SEO and engaging website design making us the best advertising company in India and ensures you rank higher on Google, making it easier for potential customers to find you. We don’t just drive traffic; we focus on converting visitors into customers, helping you grow your business effectively. Let us increase your visibility and turn your online presence into visible results.</span>
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
                        Cross-Platform App Development
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >
                        At Probey Services, we create highly functional cross-platform apps using Flutter, allowing your app to work seamlessly on both iOS and Android devices with a single codebase.
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
                      Custom Flutter UI/UX Design
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >
                        We design custom user interfaces that are visually appealing and provide a smooth user experience across all platforms.
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
                      Fast Development & Deployment
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >
                        Probey Services ensures quicker time-to-market by leveraging Flutter’s hot-reload feature, allowing us to make real-time changes to the app during development.
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
                      Single Codebase Maintenance
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >
                        With a single codebase for iOS and Android, we reduce development costs and ensure easier app maintenance and updates.
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
                      Advanced Features Integration
                      </span>
                      <p
                        className="text-wrap fw-light"
                        style={{ fontSize: "15px", lineHeight: "1.7" }}
                      >
                        We integrate advanced features like geolocation, camera access, and push notifications to create a fully functional and feature-rich app that meets your business needs.
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
            <CommonCarousel/>
            <div className='my-4'></div>
        <div className='bg-dark text-white py-md-5 py-3 '>
        <hr/>
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
        <hr/>
    </div>
    <div className='my-4'></div>
            <ServicesFAQ/>
        </>
    )
}

export default page