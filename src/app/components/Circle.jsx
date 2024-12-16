"use client";
import React, { useRef, useEffect } from "react";

import "@webpunk/circular-text";

function Circle() {
  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const circle = circleRef.current;
      if (circle) {
        const { left, top, width, height } = circle.getBoundingClientRect();
        const circleCenterX = left + width / 2;
        const circleCenterY = top + height / 2;

        // Calculate the offset in the opposite direction
        const offsetX = Math.min(Math.max((circleCenterX - event.clientX) / 20, -5), 5);
        const offsetY = Math.min(Math.max((circleCenterY - event.clientY) / 20, -5), 5);

        // Apply the transform to the circle in the opposite direction
        circle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
    };

    const resetPosition = () => {
      if (circleRef.current) {
        circleRef.current.style.transform = "translate(0, 0)";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", resetPosition);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", resetPosition);
    };
  }, []);

  return (
    <div ref={circleRef} className="circle-container position-relative">
      <div className="wheel">
        <circular-text text="CELEBRATING · CELEBRATING · " radius="90"></circular-text>
      </div>
      <div className="number-circle position-absolute rounded-circle bg-dark top-50 start-50 translate-middle">
        <div className="text-white display-6">8</div>
        <div className="text-white h5">YEARS</div>
      </div>
    </div>
  );
}

export default Circle;
