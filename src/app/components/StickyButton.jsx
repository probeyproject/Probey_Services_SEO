"use client"
import { useState, useEffect } from 'react';
import AppointmentButton from './AppointmentButton';


function StickyBottomButton() {
  const [opacity, setOpacity] = useState(1); // Initial opacity
  const [isVisible, setIsVisible] = useState(false); // State to control visibility

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
        console.log(window.scrollY ,window.innerHeight)
      // Check if the user has scrolled more than 100vh (window.innerHeight)
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true); // Show button after scrolling more than 100vh
      } else {
        setIsVisible(false); // Hide button if scroll position is above 100vh
      }

      // When scrolling occurs, reduce opacity to 0.3
      setOpacity(0.3);

      // Clear any existing timeout to reset opacity after scrolling stops
      clearTimeout(scrollTimeout);

      // Set timeout to reset opacity after 300ms (indicating user has stopped scrolling)
      scrollTimeout = setTimeout(() => {
        setOpacity(1); // Reset opacity to 1 after scrolling stops
      }, 300);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout); // Cleanup timeout as well
    };
  }, []);

  return (
    <div
      className={` end-0 w-fit  ${isVisible ? 'd-md-inline-block' : 'd-none'}`}
      style={{
        bottom: '5%',
        opacity: opacity,
        right:'"5%"',
        position:"fixed",
        zIndex:999999999,
        transition: 'opacity 0.3s ease', // Smooth transition for opacity
      }}
    >
      <AppointmentButton/>
    </div>
  );
}

export default StickyBottomButton;