import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../ui/draggable-card";

const Collage = ({ images }) => {
  if (!images || images.length < 3) return null;

  return (
    <div className="relative flex w-full max-w-[1200px] h-[420px] mx-auto items-center mt-20">
      {/* Text Section */}
      <div className="flex-1 pr-10 pl-2">
        <h2 className="text-3xl font-marcellus font-normal leading-tight mb-4 text-[#2d2d2d]">
          WE PRIORITIZE CREATING
          <br />
          YOUR DREAM HOME DESIGN
        </h2>
        <p className="text-base text-[#444] mb-6">
          We turn ideas into beautifully designed living spaces,
          <br />
          tailored to match your lifestyle, needs, and dreams.
        </p>
        <button className="bg-[#2d3a4b] text-white px-8 py-2 rounded shadow hover:bg-[#1e2835] transition">
          Schedule Call
        </button>
      </div>
      {/* Collage Section */}
      <div className="flex-shrink-0 relative w-[520px] h-[420px]">
        <DraggableCardContainer
          className="
            relative
            w-[520px] h-[420px]
            pointer-events-none
            z-10
            hidden lg:block
          "
        >
          {/* Top image (full width) */}
          <DraggableCardBody className="absolute left-2 top-0 z-20 w-[500px] h-[170px] shadow-2xl border-4 border-white rounded-xl pointer-events-auto transition-trans form duration-300 hover:scale-105">
            <img
              src={images[0].src}
              alt={images[0].title}
              className="w-full h-full object-cover rounded-xl"
            />
          </DraggableCardBody>
          {/* Bottom left image */}
          <DraggableCardBody className="absolute left-0 top-[150px] z-30 w-[320px] h-[240px] shadow-2xl border-4 border-white rounded-xl pointer-events-auto transition-transform duration-300 hover:scale-105">
            <img
              src={images[1].src}
              alt={images[1].title}
              className="w-full h-full object-cover rounded-xl"
            />
          </DraggableCardBody>
          {/* Bottom right image */}
          <DraggableCardBody className="absolute right-0 top-[190px] z-40 w-[260px] h-[180px] shadow-2xl border-4 border-white rounded-xl pointer-events-auto transition-transform duration-300 hover:scale-105">
            <img
              src={images[2].src}
              alt={images[2].title}
              className="w-full h-full object-cover rounded-xl"
            />
          </DraggableCardBody>
        </DraggableCardContainer>
      </div>
      {/* Responsive fallback for mobile */}
      <div className="lg:hidden flex gap-4 mt-8 w-full justify-center">
        {images.slice(0, 3).map((img, idx) => (
          <div
            key={idx}
            className="w-1/3 aspect-[4/3] rounded-xl overflow-hidden shadow-lg border-2 border-white"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collage;
