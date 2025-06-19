import React, { useRef } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../ui/draggable-card";
import ImageWithLoader from "../common/ImageWithLoader.jsx"; // Import the loader

const Collage = ({ images }) => {
  if (!images || images.length < 3) return null;

  // Slider scroll handler for mobile
  const sliderRef = useRef(null);
  const scroll = (dir) => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({
        left: dir * width * 0.8,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="
        relative
        flex
        flex-col
        lg:flex-row
        w-full
        max-w-[1200px]
        h-auto
        lg:h-[420px]
        mx-auto
        items-center
        mt-10
        lg:mt-20
        px-2
        sm:px-4
      "
    >
      {/* Text Section */}
      <div
        className="
        w-full
        lg:flex-1
        pr-0 pl-0
        lg:pr-10 lg:pl-2
        mb-8
        lg:mb-0
        text-center
        md:text-left
        md:max-w-[700px]
        mx-auto
      "
      >
        <h2
          className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          font-marcellus
          font-normal
          leading-tight
          mb-3
          sm:mb-4
          text-[#2d2d2d]
        "
        >
          WE PRIORITIZE CREATING
          <br />
          YOUR DREAM HOME DESIGN
        </h2>
        <p
          className="
          text-sm
          sm:text-base
          md:text-lg
          text-[#444]
          mb-4
          sm:mb-6
        "
        >
          We turn ideas into beautifully designed living spaces,
          <br className="hidden sm:block" />
          tailored to match your lifestyle, needs, and dreams.
        </p>
        <button
          className="
          bg-[#2d3a4b]
          text-white
          px-6
          sm:px-8
          py-2
          rounded
          shadow
          hover:bg-[#1e2835]
          transition
          mx-auto
          md:mx-0
          block
        "
        >
          Schedule Call
        </button>
      </div>
      {/* Collage Section */}
      <div className="w-full lg:w-auto flex justify-center">
        {/* Desktop Collage */}
        <div className="hidden lg:block flex-shrink-0 relative w-[520px] h-[420px]">
          <DraggableCardContainer
            className="
              relative
              w-[520px] h-[420px]
              pointer-events-none
              z-10
            "
          >
            {/* Top image (full width) */}
            <DraggableCardBody className="absolute left-2 top-0 z-20 w-[500px] h-[170px] shadow-2xl border-4 border-white rounded-xl pointer-events-auto transition-transform duration-300 hover:scale-105">
              <div className="bg-black text-white flex items-center justify-center h-10">Grab here</div>
              <ImageWithLoader
                src={images[0].src}
                alt={images[0].title}
                className="w-full h-full object-cover rounded-xl"
              />
            </DraggableCardBody>
            {/* Bottom left image */}
            <DraggableCardBody className="absolute left-0 top-[150px] z-30 w-[320px] h-[240px] shadow-2xl border-4 border-white rounded-xl pointer-events-auto transition-transform duration-300 hover:scale-105">
              <div className="bg-black text-white flex items-center justify-center h-10">Grab here</div>
              <ImageWithLoader
                src={images[1].src}
                alt={images[1].title}
                className="w-full h-full object-cover rounded-xl"
              />
            </DraggableCardBody>
            {/* Bottom right image */}
            <DraggableCardBody className="absolute right-0 top-[190px] z-40 w-[260px] h-[180px] shadow-2xl border-4 border-white rounded-xl pointer-events-auto transition-transform duration-300 hover:scale-105">
              <div className="bg-black text-white flex items-center justify-center h-10">Grab here</div>
              <ImageWithLoader
                src={images[2].src}
                alt={images[2].title}
                className="w-full h-full object-cover rounded-xl"
              />
            </DraggableCardBody>
          </DraggableCardContainer>
        </div>
        {/* Mobile Slider */}
        <div className="lg:hidden w-full max-w-[500px] mx-auto relative">
          <button
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-1.5 flex items-center justify-center"
            style={{ display: images.length > 1 ? "flex" : "none" }}
            onClick={() => scroll(-1)}
            type="button"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                d="M15 19l-7-7 7-7"
                stroke="#2d2d2d"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            ref={sliderRef}
            className="flex overflow-x-auto no-scrollbar gap-4 snap-x snap-mandatory scroll-smooth"
          >
            {images.slice(0, 3).map((img, idx) => (
              <div
                key={idx}
                className="min-w-[80%] max-w-[90%] flex-shrink-0 aspect-[4/3] rounded-xl overflow-hidden shadow-lg border-2 border-white snap-center"
              >
                <ImageWithLoader
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <button
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-1.5 flex items-center justify-center"
            style={{ display: images.length > 1 ? "flex" : "none" }}
            onClick={() => scroll(1)}
            type="button"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                d="M9 5l7 7-7 7"
                stroke="#2d2d2d"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collage;
