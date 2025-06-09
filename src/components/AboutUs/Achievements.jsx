import React from "react";
import bgImage from "../../assets/AboutUs/image 3.svg";

const achievements = [
  { number: "236+", label: "PROJECTS COMPLETED" },
  { number: "500+", label: "SATISFIED CUSTOMERS" },
  { number: "45+", label: "TEAM MEMBERS" },
  { number: "7+", label: "CITIES WE COVER" },
];

const Achievements = () => (
  <section
    className="relative w-full min-h-[420px] flex items-center justify-center"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/60" />
    {/* Content */}
    <div className="relative z-10 w-full max-w-7xl flex justify-center items-center gap-24 py-16">
      {achievements.map((item, idx) => (
        <div key={idx} className="text-center text-white flex flex-col items-center">
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

export default Achievements;