import React from "react";
import HeroSection from "../components/AboutUs/HeroSection";
import OurServices from "../components/Home/OurServices";
import PerfectTeam from "../components/AboutUs/PerfectTeam";
import Achievements from "../components/AboutUs/Achievements";
import OurTeam from "../components/AboutUs/OurTeam";

function AboutUs() {
  return (
    <>
      <HeroSection />
      <PerfectTeam />
      <Achievements />
      <OurServices />
      <OurTeam />
    </>
  );
}

export default AboutUs;
