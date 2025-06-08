import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../ui/DraggableCardDemo";

const Collage = ({ images }) => {
  if (!images || images.length < 3) return null;

  return (
    <div className="relative flex w-full max-w-[1200px] h-[420px] mx-auto items-center mt-20">
      {/* Text Section */}
      <div className="flex-1 pr-10 pl-2">
        <h2 className="text-3xl font-marcellus font-normal leading-tight mb-4 text-[#2d2d2d]">
          WE PRIORITIZE CREATING<br />YOUR DREAM HOME DESIGN
        </h2>
        <p className="text-base text-[#444] mb-6">
          We turn ideas into beautifully designed living spaces,<br />
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
          <DraggableCardBody className="absolute left-0 top-0 z-10 w-full h-[180px] shadow-xl pointer-events-auto">
            <img
              src={images[0].src}
              alt={images[0].title}
              className="w-full h-full object-cover rounded"
            />
          </DraggableCardBody>
          {/* Bottom left image */}
          <DraggableCardBody className="absolute left-0 top-[140px] z-20 w-[420px] h-[280px] shadow-xl pointer-events-auto">
            <img
              src={images[1].src}
              alt={images[1].title}
              className="w-full h-full object-cover rounded"
            />
          </DraggableCardBody>
          {/* Bottom right image */}
          <DraggableCardBody className="absolute right-0 top-[200px] z-30 w-[460px] h-[280px] shadow-2xl pointer-events-auto">
            <img
              src={images[2].src}
              alt={images[2].title}
              className="w-full h-full object-cover rounded"
            />
          </DraggableCardBody>
        </DraggableCardContainer>
      </div>
    </div>
  );
};

export default Collage;