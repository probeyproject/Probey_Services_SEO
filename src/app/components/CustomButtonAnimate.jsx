"use client"
import React, { useEffect, useState } from 'react';
import '../btn.css'
// Ensure the correct import based on the version of lottie-react you're using.
import  Lottie  from 'lottie-react'; // For lottie-react v2.x and above
// or import Lottie from 'lottie-react'; // For older versions (below v2)

import animationData from '../lottie/contact.json'; // Ensure the path is correct
import Link from 'next/link';

function CustomButtonAnimate({link,name="Let's Talk"}) {
  return (


    <Link href={link} className="btn-animate rounded-pill">
    {/* Text Elements */}
    <span className="first-text">{name}</span>
    <span className="second-text">{name}</span>
    
    {/* Font Awesome Icon */}
    <div className='icons rounded-pill'>
    <Lottie
              animationData={animationData}  // Ensure the animation data is correct
              loop={true}                    // Set to true if you want it to loop
              autoplay={true}                // Play animation automatically
              style={{ width: 25, height: 25 }} // Customize the size of the icon
            />
    </div>
  </Link>
   

  );
}

export default CustomButtonAnimate;