import React, { useEffect, useState } from "react";
import bgImage from "../../assets/AboutUs/image 3.svg";
import bgImageMobile from "../../assets/AboutUs/Achievement.png";

const achievements = [
  { number: "236+", label: "PROJECTS COMPLETED" },
  { number: "500+", label: "SATISFIED CUSTOMERS" },
  { number: "45+", label: "TEAM MEMBERS" },
  { number: "7+", label: "CITIES WE COVER" },
];

const Achievements = () => {

  const [background, setBackground] = useState(bgImage); // default to desktop

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth < 768) {
        setBackground(bgImageMobile);
      } else {
        setBackground(bgImage);
      }
    };

    updateBackground(); // set initial value
    window.addEventListener("resize", updateBackground); // listen to resize

    return () => window.removeEventListener("resize", updateBackground); // cleanup
  }, []);

  return (
    <section
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
              {item.number}
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