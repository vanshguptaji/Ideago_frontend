import React, { useState } from "react";
import client1 from "../../assets/HomeImages/Frame169.svg";
import client2 from "../../assets/HomeImages/Frame169.svg";
import client3 from "../../assets/HomeImages/Frame169.svg";
import quoteBg from "../../assets/HomeImages/,.svg"; 
const testimonials = [
  {
    name: "Client Name",
    image: client1,
    text: `Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus ne Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus ne`,
  },
  {
    name: "Client Name2",
    image: client2,
    text: `Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus ne Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus ne`,
  },
  {
    name: "Client Name",
    image: client3,
    text: `Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus ne Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus ne`,
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
              {/* Big quote shape as background image */}
              <img
                src={quoteBg}
                alt=""
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-30 pointer-events-none select-none object-contain
        ${idx === 1 ? "scale-y-[-1]" : ""}`}
                aria-hidden="true"
              />
              {/* Testimonial text */}
              <p className="relative z-10 text-center text-[#2d3142] font-light mb-8">
                {testimonial.text}
              </p>
              {/* Client image and name */}
              <div className="flex items-center gap-3 relative z-10 w-full">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <span className="font-medium text-[#2d3142]">
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
