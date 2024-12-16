"use client"
import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Function that handles the scroll event
  const handleScroll = () => {
    // When the user scrolls more than 300px, show the button
    if (window.scrollY > 300) {
      setVisible(true); // Show the button
    } else {
      setVisible(false); // Hide the button when scrolling back up
    }
  };

  // Function to scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
  };

  // Adding and removing scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Listen for scroll events

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // Show the button only if visible is true
    visible && (
      <button
        onClick={scrollToTop} // Trigger scrollToTop when clicked
        style={styles.button}
        title='Back To TOp'
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#555')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#333')}
      >
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      </button>
    )
  );
};

// Inline styles for the button
const styles = {
  button: {
    position: 'fixed',
    bottom: '100px',
    right: '20px',
    padding: '10px 15px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    fontSize: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    mixBlendMode: 'difference', // Add mix-blend-mode here
  },
};

export default BackToTopButton;