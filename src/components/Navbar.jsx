import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/HomeImages/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);


  const handleNavClick = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="w-full">
      <div className="bg-[#2d4661] text-white py-2 text-center font-semibold text-base tracking-wide fixed top-0 left-0 w-full z-50 ">
        Call Us : +91 8707482268
      </div>
      <nav className="bg-[#f7f6f4] border-b border-gray-200 sm:px-10 fixed top-10 left-0 w-full z-50">
        <div className="relative flex items-center left-0 min-h-16">
          {/* Logo at extreme start */}
          <div className="flex items-center flex-shrink-0 absolute left-0 top-1/2 -translate-y-1/2">
            <Link to="/" onClick={handleNavClick}>
              <img src={logo} alt="Ideago Logo" className="h-12 mr-2" />
            </Link>
          </div>
          {/* Mobile Brand Name at center */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:hidden">
            <h2 className="text-xl font-marcellus text-[#2d4661] font-semibold tracking-wide">
              Ideago Interiors
            </h2>
          </div>
          {/* Desktop nav and social icons */}
          <div className="flex items-center ml-auto mr-12">
            <button
              className="sm:hidden flex items-center text-[#2d4661] text-2xl focus:outline-none"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars"></i>
            </button>
            <ul className="hidden sm:flex items-center space-x-8 font-medium text-[1.05rem] mr-76">
              <li>
                <Link
                  to="/"
                  onClick={handleNavClick}
                  className={`text-[#2d4661] ${
                    location.pathname === "/"
                      ? "font-bold border-b-2 border-[#2d4661] pb-0.5"
                      : "hover:font-semibold"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={handleNavClick}
                  className={`text-[#2d4661] ${
                    location.pathname === "/projects"
                      ? "font-bold border-b-2 border-[#2d4661] pb-0.5"
                      : "hover:font-semibold"
                  }`}
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <a
                  href="/kitchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2d4661] hover:font-semibold"
                >
                  Kitchen
                </a>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  onClick={handleNavClick}
                  className={`text-[#2d4661] ${
                    location.pathname === "/aboutus"
                      ? "font-bold border-b-2 border-[#2d4661] pb-0.5"
                      : "hover:font-semibold"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  onClick={handleNavClick}
                  className={`text-[#2d4661] ${
                    location.pathname === "/contactus"
                      ? "font-bold border-b-2 border-[#2d4661] pb-0.5"
                      : "hover:font-semibold"
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="hidden sm:flex items-center space-x-4 text-[#2d4661]">
              <a
                href="https://www.instagram.com/ideagointeriorsvaranasi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="https://www.facebook.com/ideagointeriors/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-x-twitter text-lg"></i>
              </a>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="sm:hidden mt-2 bg-[#f7f6f4] rounded shadow-lg z-50 absolute left-0 right-0 px-4 py-4">
            <ul className="flex flex-col space-y-4 font-medium text-[1.05rem]">
              <li>
                <Link
                  to="/"
                  onClick={handleNavClick}
                  className={`text-[#2d4661] ${
                    location.pathname === "/"
                      ? "font-bold border-b-2 border-[#2d4661] pb-0.5"
                      : "hover:font-semibold"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={handleNavClick}
                  className={`text-[#2d4661] ${
                    location.pathname === "/projects"
                      ? "font-bold border-b-2 border-[#2d4661] pb-0.5"
                      : "hover:font-semibold"
                  }`}
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <a
                  href="/kitchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  className="text-[#2d4661] hover:font-semibold"
                >
                  Kitchen
                </a>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  onClick={handleNavClick}
                  className={`text-[#2d4661] ${
                    location.pathname === "/aboutus"
                      ? "font-bold border-b-2 border-[#2d4661] pb-0.5"
                      : "hover:font-semibold"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  onClick={handleNavClick}
                  className={`text-[#2d4661] ${
                    location.pathname === "/contactus"
                      ? "font-bold border-b-2 border-[#2d4661] pb-0.5"
                      : "hover:font-semibold"
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-4 text-[#2d4661] mt-4">
              <a
                href="https://www.instagram.com/ideagointeriorsvaranasi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="https://www.facebook.com/ideagointeriors/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-x-twitter text-lg"></i>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;