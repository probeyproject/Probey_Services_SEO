import React from 'react'
import Link from 'next/link';

function ServicesHero() {
  return (
    <div className="row d-flex align-items-center justify-content-center mt-5 container-fluid">
    <div className="col-12 text-center">
        {/* Subtitle */}
        <p className="text-uppercase text-primary">BEST FLUTTER APP DEVELOPMENT COMPANY IN INDIA</p>

        {/* Title */}
        <h3 className="mt-3" style={{ color: 'black', fontWeight: 600, fontSize: '40px',textDecoration:'upperCase' }}>
        Flutter App Development–
            <br />
            <span style={{ color: '#9F9F9F', fontWeight: 600, fontSize: '40px' }}>
            YOUR APP, UNIVERSALLY PERFECT
            </span>
        </h3>

        {/* Description */}
        <p className="mt-4" style={{ textAlign: 'center',fontSize:"15px",lineHeight:"1.7" }}>
        The team of Probey Services provides cross-platform applications that possess the features of native performance with great designs. As a leading <b>Flutter app development company</b>, we use Flutter’s technology to develop applications for both iOS and Android platforms with consistency in their technical performance. With us, you can expect fast and high-quality application development for different groups of users.
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
  )
}

export default ServicesHero