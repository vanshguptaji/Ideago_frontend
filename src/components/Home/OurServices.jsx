import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import livingRoom from "../../assets/HomeImages/Ourservice.png";
import commercialImg from "../../assets/HomeImages/CommercialServices.png";
import modularKitchenImg from "../../assets/HomeImages/ModularKitchens.png";
import spacePlanningImg from "../../assets/HomeImages/SpacePlanning.png"; // add your image
import turnkeyImg from "../../assets/HomeImages/Turnkey.png"; // add your image

const services = [
  {
    label: "Residential Interior Design",
    image: livingRoom,
    title:
      "Transform your living spaces into luxurious homes tailored to your lifestyle.",
    desc: "We specialize in designing warm, functional, and stylish interiors that reflect your personality and enhance everyday living.",
  },
  {
    label: "Commercial Interior Design",
    image: commercialImg,
    title: "Create workspaces that inspire productivity and innovation.",
    desc: "From offices to retail outlets, we design professional environments that align with your brand identity and operational needs.",
  },
  {
    label: "Modular Kitchens",
    image: modularKitchenImg,
    title:
      "Experience the perfect blend of beauty and functionality with our modular kitchens.",
    desc: "Custom-built for efficiency and aesthetics, our kitchen designs maximize space and simplify your culinary life.",
  },
  {
    label: "Space Planning & 3D Visualisation",
    image: spacePlanningImg,
    title: "Visualize your dream space before it’s built.",
    desc: "Our expert space planning and 3D rendering services help you make informed decisions, ensuring perfect utilization and design clarity.",
  },
  {
    label: "Turnkey Projects",
    image: turnkeyImg,
    title: "End-to-end interior solutions, delivered flawlessly.",
    desc: "From concept to completion, we manage everything — ensuring a hassle-free experience and a perfectly executed vision.",
  },
];

const OurServices = () => {
  const [selected, setSelected] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("right");
  const navigate = useNavigate(); // Add this line

  // Animation handler
  const handleTabClick = (idx) => {
    if (idx === selected) return;
    setDirection(idx > selected ? "right" : "left");
    setAnimating(true);
    setTimeout(() => {
      setSelected(idx);
      setAnimating(false);
    }, 350); // match duration-350
  };

  return (
    <section className="w-full bg-[#f7f6f4] py-10 px-2 sm:py-16 sm:px-4 mt-8">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap');
          .font-marcellus { font-family: 'Marcellus SC', serif; }
        `}
      </style>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-marcellus text-[#2d4661] mb-6 sm:mb-8 tracking-wide">
          Our Services
        </h2>
        <div
          className="
        flex flex-wrap justify-center gap-2 sm:gap-3
        mb-6 sm:mb-10
    "
        >
          {services.map((service, idx) => (
            <button
              key={service.label}
              onClick={() => handleTabClick(idx)}
              className={`px-4 py-3 text-sm sm:text-base md:text-lg font-marcellus border transition whitespace-nowrap
                ${
                  selected === idx
                    ? "bg-[#2d4661] text-white border-[#2d4661] hover:bg-[#1a2b3c] hover:text-white"
                    : "bg-[#dbe6ef] text-[#2d4661] border-[#dbe6ef] hover:bg-[#b8c9db]"
                }
                `}
              style={{ letterSpacing: "0.5px" }}
            >
              {service.label}
            </button>
          ))}
        </div>
        <div className="relative min-h-[420px] sm:min-h-[500px] pb-6">
          <div
            className={`
              absolute inset-0 w-full transition-transform duration-350
              ${
                animating
                  ? direction === "right"
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
              }
              z-10
            `}
            style={{ pointerEvents: animating ? "none" : "auto" }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-10 h-auto">
              <div className="flex-1 flex flex-col justify-center h-full px-2 sm:px-0">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-marcellus text-[#2d4661] mb-2 sm:mb-4 tracking-wide text-center md:text-left">
                  {services[selected].title}
                </h3>
                <p className="text-[#444] text-sm sm:text-base md:text-lg mt-4 sm:mt-8 mb-4 sm:mb-8 font-marcellus text-center md:text-left">
                  {services[selected].desc}
                </p>
                <div className="flex justify-center md:justify-start">
                  <button
                    className="mt-2 px-6 sm:px-8 py-2 border border-[#2d4661] text-[#2d4661] font-marcellus text-base sm:text-lg uppercase tracking-wide bg-transparent hover:bg-[#2d4661] hover:text-white transition"
                    onClick={() =>
                      navigate("/contactus") // Add navigation on button click
                    }
                  >
                    Schedule Call
                  </button>
                </div>
              </div>
              <div className="flex-1/3 flex justify-center items-center w-full">
                <img
                  src={services[selected].image}
                  alt={services[selected].label}
                  className="rounded-lg shadow-lg object-cover w-full max-w-[95vw] sm:max-w-[500px] md:max-w-[813px] h-[180px] sm:h-[300px] md:h-[468px]"
                  style={{ maxHeight: "60vw", minHeight: "120px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
