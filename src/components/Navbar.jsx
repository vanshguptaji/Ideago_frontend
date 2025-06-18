import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/HomeImages/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on navigation
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#2d4661] text-white py-2 text-center font-semibold text-base tracking-wide fixed top-0 left-0 w-full z-50 ">
        Call Us : +91 9876 543210
      </div>
      {/* Main Navbar */}
      <nav className="bg-[#f7f6f4] border-b border-gray-200 px-4 sm:px-10 fixed top-10 left-0 w-full z-50">
        <div className="flex items-center justify-between min-h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" onClick={handleNavClick}>
              <img src={logo} alt="Ideago Logo" className="h-12 mr-4" />
            </Link>
          </div>
          {/* Hamburger for mobile */}
          <button
            className="sm:hidden flex items-center text-[#2d4661] text-2xl focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Nav Links (desktop) */}
          <ul className="hidden sm:flex items-center space-x-8 font-medium text-[1.05rem]">
            <li>
              <Link
                to="/"
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
          {/* Social Icons (desktop) */}
          <div className="hidden sm:flex items-center space-x-4 text-[#2d4661]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a
              href="https://facebook.com"
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
        {/* Mobile Menu */}
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
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="https://facebook.com"
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