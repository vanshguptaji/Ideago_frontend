import React from "react";
import kitchenImg from "../assets/HomeImages/kitchen.svg"; // Replace with your actual image path

const highlights = [
  "Custom Designs to Suit Your Space",
  "Premium Materials and Finishes",
  "Smart Storage Solutions",
  "Latest Trends in Modular Systems",
  "Complete Installation & Handover",
];

const ModularKitchens = () => (
  <section className="bg-[#f8f5f2] pb-16 font-marcellus">
    {/* Header */}
    {/* Content */}
    <p className="font-marcellus text-[#5b6477] text-lg mb-8 leading-relaxed tracking-wide text-center">
          Transform your kitchen with our custom modular designs — where style meets
          smart functionality.
          <br />
          Crafted for modern living, our kitchens blend innovation, elegance, and
          efficiency to create spaces that inspire.
        </p>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4 pt-12">
      {/* Left: Text */}
      <div className="flex-1 min-w-[320px]">
       
        <h3 className="font-marcellus text-2xl text-[#2d3441] mb-4 tracking-wide">
          Key Highlights
        </h3>
        <ul className="text-[#232b39] text-lg mb-8 text-left pl-6 leading-8 font-marcellus list-disc">
          {highlights.map((item, idx) => (
            <li key={idx} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
        <button className="bg-[#232b39] text-white font-marcellus text-lg py-4 px-12 rounded-sm tracking-wide shadow-md capitalize hover:bg-[#3b465a] transition">
          Explore More
        </button>
      </div>
      {/* Right: Image */}
      <div className="flex min-w-[340px] text-center">
        <img
          src={kitchenImg}
          alt="Modular Kitchen"
          className="w-full max-w-2xl rounded-lg shadow-2xl object-cover mx-auto"
        />
      </div>
    </div>
  </section>
);

export default ModularKitchens;
