import React, { useEffect, useState, useRef } from "react";
import hero1 from "../assets/HomeImages/hero.png";
import hero2 from "../assets/HomeImages/hero2.png";
import hero3 from "../assets/HomeImages/hero3.png";

const images = [hero1, hero2, hero3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [hasLooped, setHasLooped] = useState(false);
  const timeoutRef = useRef(null);

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
    if (hasLooped) return;
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
  }, [current, hasLooped]);

  const restartLoop = () => {
    setCurrent(0);
    setHasLooped(false);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden flex justify-center items-center bg-black">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`hero${idx + 1}`}
          className={`absolute top-0 left-0 w-screen h-screen object-cover transition-opacity duration-[3000ms] ease-in-out ${
            current === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default HeroSection;