import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/HomeImages/logo.png"; // Update path if needed

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#2d4661] text-white py-2 text-center font-semibold text-base tracking-wide">
        Call Us : +91 9876 543210
      </div>
      {/* Main Navbar */}
      <nav className="flex items-center justify-between bg-[#f7f6f4] px-10 min-h-16 border-b border-gray-200">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Ideago Logo" className="h-12 mr-4" />
          </Link>
        </div>
        {/* Nav Links */}
        <ul className="flex items-center space-x-8 font-medium text-[1.05rem]">
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
          {/* You can keep these as anchor links or convert to routes if you have separate pages */}
          <li>
            <a
              href="#kitchen"
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
        {/* Social Icons */}
        <div className="flex items-center space-x-4 text-[#2d4661]">
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
          <a href="#">
            <i className="fas fa-bars text-xl"></i>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;