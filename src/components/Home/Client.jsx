import React, { useState } from "react";
import client1 from "../../assets/HomeImages/Sahil.jpeg";
import client2 from "../../assets/HomeImages/AnkurRao.jpeg";
import client3 from "../../assets/HomeImages/SharadGupta.jpeg";
import quoteBg from "../../assets/HomeImages/,.svg"; 
const testimonials = [
  {
    name: "Mr. Sahil",
    image: client1,
    text: `"My bedroom reflects exactly how I want to move through the modern world — with clarity, simplicity, and purpose. The modern design doesn’t shout; it speaks subtly. Every element feels intentional, allowing me to stay grounded while navigating the fast-paced material world."
— Mr. Sahil`,
  },
  {
    name: "Ankur Rao",
    image: client2,
    text: `The conference room designed for us strikes the perfect balance between functionality and elegance. The thoughtful use of space, modern aesthetics, and seamless integration of technology make every meeting more productive and inspiring. It truly reflects the professional environment we envisioned."
— Mr. Ankur Rao`,
  },
  {
    name: "Sharad Gupta",
    image: client3,
    text: `"The new exterior elevation design reflects a perfect blend of modern aesthetics and functional appeal. It brings a refreshing, contemporary look to the property while maintaining elegance and structural harmony,"  
  - Mr. Sharad Gupta.`,
  },
];
const Client = () => {
  return (
    <section className="py-16 bg-[#f7f3ef]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 tracking-wide text-[#2d3142]">
          CLIENT TESTIMONIALS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center relative overflow-hidden"
            >
              <img
                src={quoteBg}
                alt=""
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-30 pointer-events-none select-none object-contain
        ${idx === 1 ? "scale-y-[-1]" : ""}`}
                aria-hidden="true"
              />
              <p className="relative z-10 text-center text-[#2d3142] font-light mb-8 min-h-48">
                {testimonial.text}
              </p>
              <div className="flex flex-col items-center relative z-10 bottom-0 w-full">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <span className="font-medium text-[#2d3142] mt-2">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;
