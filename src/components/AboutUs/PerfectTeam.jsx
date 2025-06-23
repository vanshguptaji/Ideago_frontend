import React from "react";
import image from "../../assets/AboutUs/OurTeam.jpg"

const PerfectTeam = () => {
  return (
    <section className="bg-[#f7f3ef] py-16 flex flex-col items-center min-h-[600px]">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap');
          .font-marcellus { font-family: 'Marcellus SC', serif; }
        `}
      </style>
      <div className="flex flex-col md:flex-row max-w-6xl w-full justify-center items-start gap-12 px-4">
        {/* Left: Placeholder for image */}
        <div className="bg-gray-300 w-full md:w-[680px] h-[440px] rounded-lg mb-8 md:mb-0">
          <img src={image} alt="image" className="w-full h-full"/>
        </div>
        {/* Right: Text Content */}
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-marcellus text-[#2d4661] mb-6 sm:mb-8 tracking-wide text-center md:text-left">
            We Are The Perfect Team For <br />
            Home Interior Decoration
          </h2>
          <p className="text-[#444] text-sm sm:text-base md:text-lg mb-3 font-marcellus text-center md:text-left leading-relaxed">
            At Ideago Interiors, we specialize in delivering innovative and functional interior design solutions in Varanasi and beyond. Backed by a passionate and experienced team of designers, we have successfully completed a wide range of residential, commercial, and architectural interior projects.
          </p>
          <p className="text-[#444] text-sm sm:text-base md:text-lg mb-5 font-marcellus text-center md:text-left leading-relaxed">
            Our client-centric approach, attention to detail, and commitment to quality allow us to create spaces that truly reflect our clients’ lifestyles and aspirations. Whether it’s a modern apartment, a luxury villa, or a smart workspace — we design with purpose and precision.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-[#222] rounded-full mr-3 relative">
                <span className="block w-2 h-2 bg-white rounded-full"></span>
              </span>
              <span className="font-medium font-marcellus text-[#2d4661]">
                Interior Designing Packages – For Designing Only
              </span>
            </li>
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-[#222] rounded-full mr-3 relative">
                <span className="block w-2 h-2 bg-white rounded-full"></span>
              </span>
              <span className="font-medium font-marcellus text-[#2d4661]">
                Project Consultancy Packages – Consultancy Till Execution
              </span>
            </li>
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-[#222] rounded-full mr-3 relative">
                <span className="block w-2 h-2 bg-white rounded-full"></span>
              </span>
              <span className="font-medium font-marcellus text-[#2d4661]">
                Turnkey project dealing packages – end to end services
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PerfectTeam;