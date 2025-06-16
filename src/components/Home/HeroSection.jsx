import React, { useEffect, useState, useRef } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import hero1 from "../../assets/HomeImages/hero.svg";
import hero2 from "../../assets/HomeImages/hero2.svg";
import hero3 from "../../assets/HomeImages/hero3.svg";
import staticMobileImage from "../../assets/HomeImages/smallScreenHero.svg";

const images = [hero1, hero2, hero3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [hasLooped, setHasLooped] = useState(false);
  const timeoutRef = useRef(null);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const getDelay = (idx) => {
    const min = 1000;
    const max = 9500;
    const extraLastDelay = 5000;
    const t = idx / (images.length - 1);
    let delay = min + (max - min) * Math.pow(t, 2);
    if (idx === images.length - 1) {
      delay += extraLastDelay;
    }
    return delay;
  };

  useEffect(() => {
    if (isMobile || hasLooped) return;

    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => {
        const next = prev + 1;
        if (next >= images.length) {
          setHasLooped(true);
          return prev;
        }
        return next;
      });
    }, getDelay(current));

    return () => clearTimeout(timeoutRef.current);
  }, [current, hasLooped, isMobile]);

  return (
    <div className="relative w-screen h-screen overflow-hidden flex justify-center items-center bg-black">
      {isMobile ? (
        <img
          src={staticMobileImage}
          alt="Mobile Hero"
          className="w-full h-full object-cover"
        />
      ) : (
        images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`hero${idx + 1}`}
            className={`absolute top-0 left-0 w-screen h-screen object-cover transition-opacity duration-[3000ms] ease-in-out ${
              current === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))
      )}
    </div>
  );
};

export default HeroSection;
