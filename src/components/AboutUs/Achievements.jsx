import React, { useEffect, useRef, useState } from "react";
import bgImage from "../../assets/AboutUs/image 3.svg";
import bgImageMobile from "../../assets/AboutUs/achievement.png";

const achievements = [
  { number: 236, label: "PROJECTS COMPLETED" },
  { number: 500, label: "SATISFIED CUSTOMERS" },
  { number: 45, label: "TEAM MEMBERS" },
  { number: 7, label: "CITIES WE COVER" },
];

const Achievements = () => {
  const [background, setBackground] = useState(bgImage); // default to desktop
  const [counts, setCounts] = useState(achievements.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth < 768) {
        setBackground(bgImageMobile);
      } else {
        setBackground(bgImage);
      }
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);

    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const durations = [3000, 3000, 3000, 3000]; // Increased duration for slower animation
    const increments = achievements.map((item, i) =>
      Math.ceil(item.number / (durations[i] / 16))
    );

    let currentCounts = [...counts];
    let start = null;
    let animationFrame;

    function animateCountUp(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      let updated = false;
      const newCounts = currentCounts.map((count, i) => {
        if (count < achievements[i].number) {
          const next = Math.min(
            count + increments[i],
            achievements[i].number
          );
          if (next !== count) updated = true;
          return next;
        }
        return count;
      });

      currentCounts = newCounts;
      setCounts([...newCounts]);

      if (updated) {
        animationFrame = requestAnimationFrame(animateCountUp);
      }
    }

    animationFrame = requestAnimationFrame(animateCountUp);

    return () => cancelAnimationFrame(animationFrame);
    // eslint-disable-next-line
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[420px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl flex flex-wrap justify-center items-center gap-24 py-16">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="text-center text-white flex flex-col items-center"
          >
            <div className="text-5xl md:text-6xl font-bold tracking-widest mb-2 font-marcellus drop-shadow-lg">
              {counts[idx]}
              {typeof item.number === "number" && "+"}
            </div>
            <div className="text-base md:text-lg font-normal tracking-wider uppercase font-marcellus opacity-90">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;