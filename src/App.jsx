import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurProjects from "./pages/OurProjects";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Footer from "./components/Footer";
import hero1 from "./assets/HomeImages/hero.svg";
import hero2 from "./assets/HomeImages/hero2.svg";
import hero3 from "./assets/HomeImages/hero3.svg";
import smallScreenHero from "./assets/HomeImages/smallScreenHero.svg";
import ourProjectHero from "./assets/OurProjects/OurProject.png";
import why1 from "./assets/HomeImages/WHyChoose/Frame35.svg";
import why2 from "./assets/HomeImages/WHyChoose/Frame38.svg";
import why3 from "./assets/HomeImages/WHyChoose/Frame39.svg";
import why4 from "./assets/HomeImages/WHyChoose/Frame37.svg";
import why5 from "./assets/HomeImages/WHyChoose/Frame40.svg";
import frame12 from "./assets/HomeImages/Frame12.svg";
import frame13 from "./assets/HomeImages/Frame13.svg";
import frame14 from "./assets/HomeImages/Frame14.svg";
import ourservice from "./assets/HomeImages/Ourservice.png";
import commercial from "./assets/HomeImages/CommercialServices.png";
import modular from "./assets/HomeImages/ModularKitchens.png";
import spacePlanning from "./assets/HomeImages/SpacePlanning.png";
import turnkey from "./assets/HomeImages/Turnkey.png";
import kitchen from "./assets/HomeImages/kitchen.svg";
import client from "./assets/HomeImages/Frame169.svg";
import quote from "./assets/HomeImages/,.svg";
import r2 from "./assets/HomeImages/r2.jpg";
import r1 from "./assets/HomeImages/r1.jpg";
import { useEffect } from "react";

function preloadImages(srcArray) {
  srcArray.forEach((src) => {
    const img = new window.Image();
    img.src = src;
  });
}

function App() {
  useEffect(() => {
    preloadImages([
      hero1,
      hero2,
      hero3,
      smallScreenHero,
      ourProjectHero,
      why1,
      why2,
      why3,
      why4,
      why5,
      frame12,
      frame13,
      frame14,
      ourservice,
      commercial,
      modular,
      spacePlanning,
      turnkey,
      kitchen,
      client,
      quote,
      r2,
      r1,
    ]);
  }, []);

  const projectImages = Object.values(
    import.meta.glob("./assets/OurProjects/projects/*.{jpg,jpeg,png,svg}", {
      eager: true,
      import: "default",
      query: "?url",
    })
  );

  useEffect(() => {
    preloadImages(projectImages);
  }, []);

  const Redirect = () => {
    useEffect(() => {
      window.location.href = "https://kitchendotcom.in/";
    }, []);

    return null;
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/kitchen" element={<Redirect />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
