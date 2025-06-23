import React, { useState, useRef } from "react";
import OurVisions from "../../assets/HomeImages/r2.jpg";
import Sketch from "../../assets/HomeImages/r1.jpg";

const OurVision = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updateSlider = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    let percent = ((clientX - rect.left) / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    setSliderValue(percent);
  };

  const handleMouseDown = (e) => {
    dragging.current = true;
    updateSlider(e.clientX);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (dragging.current) {
      updateSlider(e.clientX);
    }
  };

  const handleMouseUp = () => {
    dragging.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e) => {
    dragging.current = true;
    updateSlider(e.touches[0].clientX);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
  };

  const handleTouchMove = (e) => {
    if (dragging.current) {
      updateSlider(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    dragging.current = false;
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
  };

  return (
    <section className="bg-[#f8f5f2] py-12 text-center">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap');
          .font-marcellus { font-family: 'Marcellus SC', serif; }
        `}
      </style>
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-marcellus text-[#2d4661] mb-6 sm:mb-8 tracking-wide">
        From Vision to Reality
      </h2>
      <div
        ref={containerRef}
        className="relative max-w-6xl mx-auto aspect-[2/1] rounded-lg overflow-hidden shadow-md bg-white"
      >
        <img
          src={Sketch}
          alt="Vision Sketch"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
          draggable={false}
        />
        <img
          src={OurVisions}
          alt="Reality"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          style={{ clipPath: `inset(0 0 0 ${sliderValue}%)` }}
          draggable={false}
        />
        <input
          type="range"
          min={0}
          max={100}
          value={sliderValue}
          onChange={e => setSliderValue(Number(e.target.value))}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2/3 z-20 accent-[#3b3b3b]"
        />
        <div
          className="absolute top-0 bottom-0 z-10 flex items-center cursor-ew-resize"
          style={{ left: `${sliderValue}%`, transform: "translateX(-50%)" }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="w-1 h-full bg-white shadow-md" />
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-full bg-white border border-gray-300 shadow p-1 flex items-center justify-center">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M10 8l-4 4 4 4M14 8l4 4-4 4" stroke="#3b3b3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;