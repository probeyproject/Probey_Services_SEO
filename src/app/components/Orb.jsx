"use client"
import React,{useState,useEffect} from 'react'

function Orb() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return (
      <div
        id="Orb"
        className="custom-orb position-absolute d-none d-md-block"
        style={{ left: position.x, top: position.y }}
      ></div>
    );
}

export default Orb