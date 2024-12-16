"use client";
import React, { useState, useEffect } from "react";
import "@webpunk/circular-text"; // Importing the circular text component
import { HiArrowLongDown } from "react-icons/hi2";

const ScrollSyncDiv = () => {
  const [scrollPosition, setScrollPosition] = useState(0); // Track the scroll position

  // Track the scroll position using the scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the scroll percentage based on the total document height
  const scrollPercentage = Math.min(
    scrollPosition / (document.documentElement.scrollHeight - window.innerHeight),
    1
  );

  // Rotate the text based on the scroll percentage
  const rotationDegree = scrollPercentage * 360; // 360 degrees for a full rotation

  // Set the background gradient based on scroll percentage
  const backgroundGradient = `linear-gradient(to bottom, white ${scrollPercentage * 100}%, black ${scrollPercentage * 100}%)`

  return (
    <div
    className="scroll-to-explore"
      style={{
        position: "fixed", // Keep the div fixed on the page as you scroll
        top: "130px", // Adjust top to position the div vertically
        left: "30px", // Adjust left to position it horizontally
        width: "30px", // Fixed width
        height: "30px", // Fixed height

        background: backgroundGradient, // Dynamically changing background gradient
     
        borderRadius: "50%", // Make it circular
        zIndex: 9, // Ensure it's on top of other elements
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Center content inside the circle
        transition: "background 0.2s ease, transform 0.2s ease", // Optional smooth transitions

      
      }}
    >
      {/* Container for circular text and arrow */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%", // Ensuring the text container fills the circle
          width: "100%",
          position: "relative", // So we can absolutely position the arrow
         
        }}
      >
        {/* Circular Text Component */}
        <circular-text
          text="SCROLL TO EXPLORE"
          radius="30"
          style={{
            fontSize: "7px", // Adjust font size to fit the circle
            color: "black", // Set the text color
            transform: `rotate(${rotationDegree}deg)`, // Apply rotation based on scroll percentage
            transition: "all 0.2s ease, transform 0.2s ease", 
            
          }}
        ></circular-text>

        {/* Arrow Icon centered in the circle */}
        <HiArrowLongDown
          style={{
            position: "absolute", // Position the arrow in the center
            top: "50%", // Vertically center
            left: "50%", // Horizontally center
            transform: "translate(-50%, -50%)", // Adjust for exact center alignment
            color:"white",
            mixBlendMode:"difference",
            fontSize: "20px", // Adjust the size of the arrow
          }}
        />
      </div>
    </div>
  );
};

export default ScrollSyncDiv;