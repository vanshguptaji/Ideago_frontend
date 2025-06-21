import React from "react";
import image from "../../assets/OurProjects/projects/bedroom 1 .jpg"

const PerfectTeam = () => {
  return (
    <section className="bg-[#f7f3ef] py-16 flex flex-col items-center min-h-[600px]">
      <div className="flex flex-col md:flex-row max-w-6xl w-full justify-center items-start gap-12 px-4">
        {/* Left: Placeholder for image */}
        <div className="bg-gray-300 w-full md:w-[480px] h-[340px] rounded-lg mb-8 md:mb-0">
          <img src={image} alt="image" className="w-full h-full"/>
        </div>
        {/* Right: Text Content */}
        <div className="max-w-xl">
          <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#222] leading-tight mb-6 tracking-wide">
            WE ARE PERFECT TEAM FOR <br />
            HOME INTERIOR DECORATION
          </h2>
          <p className="text-base text-[#444] mb-3 leading-relaxed">
            At Ideago Interiors, we specialize in delivering innovative and functional interior design solutions in Varanasi and beyond. Backed by a passionate and experienced team of designers, we have successfully completed a wide range of residential, commercial, and architectural interior projects.
          </p>
          <p className="text-base text-[#444] mb-5 leading-relaxed">
            Our client-centric approach, attention to detail, and commitment to quality allow us to create spaces that truly reflect our clients’ lifestyles and aspirations. Whether it’s a modern apartment, a luxury villa, or a smart workspace — we design with purpose and precision.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-[#222] rounded-full mr-3 relative">
                <span className="block w-2 h-2 bg-white rounded-full"></span>
              </span>
              <span className="font-medium">
                Interior Designing Packages – For Designing Only
              </span>
            </li>
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-[#222] rounded-full mr-3 relative">
                <span className="block w-2 h-2 bg-white rounded-full"></span>
              </span>
              <span className="font-medium">
                Project Consultancy Packages – Consultancy Till Execution
              </span>
            </li>
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-[#222] rounded-full mr-3 relative">
                <span className="block w-2 h-2 bg-white rounded-full"></span>
              </span>
              <span className="font-medium">
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