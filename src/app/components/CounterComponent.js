"use client";
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

function CounterComponent({ start = 0, end = 100, duration = 3,suffix }) {
  const [inView, setInView] = useState(false);
  const [hasRun, setHasRun] = useState(false);  // Flag to track if the counter has already run
  const counterRef = React.useRef(null);

  // Check if the component is in view
  const checkInView = () => {
    if (counterRef.current) {
      const rect = counterRef.current.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      if (isInView && !hasRun) {  // Only trigger if not already run
        setInView(true);
        setHasRun(true);  // Mark that the counter has been triggered
      }
    }
  };

  // Attach scroll event listener to the window
  useEffect(() => {
    // Check on initial load if the element is in view
    checkInView();

    // Add scroll event listener
    window.addEventListener('scroll', checkInView);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', checkInView);
    };
  }, [hasRun]); // Re-run effect if hasRun changes

  return (
    <div
      ref={counterRef}
      
    >
      {inView && (
        <p className="display-7">
          <CountUp 
            start={start} 
            end={end} 
            duration={duration} 
            suffix={suffix}
          />
        </p>
      )}
    </div>
  );
}

export default CounterComponent;