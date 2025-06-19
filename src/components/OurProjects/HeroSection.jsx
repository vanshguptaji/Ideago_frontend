import React from "react";
import heroBg from "../../assets/OurProjects/OurProject.png"; 

const HeroSection = () => (
  <section className="relative w-full h-[480px] md:h-[720px] flex items-start justify-center overflow-hidden p-8 mt-20">
    {/* Background Image */}
    <img
      src={heroBg}
      alt="Our Projects"
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50" />
    {/* Content */}
    <div className="relative z-10 max-w-5xl px-0 text-start flex flex-col items-start justify-center h-full">
      <h1 className="text-white font-marcellus text-4xl md:text-5xl font-normal tracking-wide mb-6">
        OUR PROJECTS
      </h1>
      <p className="text-white text-base md:text-lg font-light font-marcellus text-start leading-relaxed">
        Explore our curated portfolio of interior design projects across Varanasi. From traditional homes to modern commercial spaces, each project showcases our commitment to blending Varanasi’s rich cultural heritage with contemporary design aesthetics. Discover how we transform spaces into functional and elegant environments that reflect our clients’ visions.
      </p>
    </div>
  </section>
);

export default HeroSection;