import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurProjects from "./pages/OurProjects";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
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
        <Route path="/kitchen" element={<Redirect />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
