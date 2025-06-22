import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom"; // Add this import

const links = [
  { name: "Home", path: "/" },
  { name: "Our Projects", path: "/projects" },
  { name: "Kitchen", path: "/kitchen" },
  { name: "About Us", path: "/aboutus" },
  { name: "Contact Us", path: "/contactus" },
];

const Footer = () => {
  const location = useLocation(); 

  return (
    <footer className="bg-[#c7d8e3] py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-[#37475a] mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl md:text-2xl font-serif text-[#37475a]">
            Discover interiors that reflect your personality,<br className="hidden md:block" />
            purpose, and lifestyle.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="uppercase text-[#37475a] font-semibold text-sm mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3 text-[#37475a] font-medium">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className={
                      location.pathname === link.path
                        ? "font-bold underline underline-offset-2"
                        : ""
                    }
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="uppercase text-[#37475a] font-semibold text-sm mb-6 tracking-wide">
              Contact Us
            </h3>
            <div className="flex items-start mb-6">
              <span className="bg-[#37475a] text-white rounded-full p-3 mr-4">
                <FaPhoneAlt />
              </span>
              <div>
                <div className="font-medium text-[#37475a]">Phone</div>
                <div className="text-[#37475a]">+91 8707482268</div>
                <div className="text-[#37475a]">+91 9305281003</div>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-[#37475a] text-white rounded-full p-3 mr-4">
                <FaMapMarkerAlt />
              </span>
              <div>
                <div className="font-medium text-[#37475a]">Location</div>
                <div className="text-[#37475a]">
                  D65/245, Lahartara Boulia, Bazardiha,<br />
                  Manduwadih, Varanasi, Uttar Pradesh<br />
                  221002
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="uppercase text-[#37475a] font-semibold text-sm mb-6 tracking-wide">
              Enquire
            </h3>
            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-1/2 border border-[#37475a] px-4 py-3 rounded-none focus:outline-none bg-white text-[#37475a]"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-1/2 border border-[#37475a] px-4 py-3 rounded-none focus:outline-none bg-white text-[#37475a]"
                />
              </div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-[#37475a] px-4 py-3 rounded-none focus:outline-none bg-white text-[#37475a]"
              />
              <textarea
                placeholder="How can we help You?"
                rows={3}
                className="w-full border border-[#37475a] px-4 py-3 rounded-none focus:outline-none bg-white text-[#37475a]"
              />
              <button
                type="submit"
                className="w-full bg-[#37475a] text-white font-semibold py-3 text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;