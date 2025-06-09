import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurProjects from "./pages/OurProjects";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs"; 
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
