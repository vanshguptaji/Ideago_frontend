import React, { useEffect } from "react";
import HeroSection from "../components/ContactUs/HeroSection";
import Info from "../components/ContactUs/Info";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <Info />
    </>
  );
}

export default ContactUs;
