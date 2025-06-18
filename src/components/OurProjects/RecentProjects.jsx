import React, { useState } from "react";
import { DraggableCardBody, DraggableCardContainer } from "../ui/draggable-card";

const images = Object.values(
  import.meta.glob("../../assets/OurProjects/projects/*.{jpg,jpeg,png,svg}", { eager: true, import: "default", query: "?url" })
);

// Add your custom project names here, in the same order as the images
const projectNames = [
  "Exterior Elevation",
  "Modern Modular Kitchen",
  "Modern Luxe Kitchen",
  "Minimalist Living Room",
  "Modern Party Room",
  "Compact Kitchen Upgrade",
  "Modern Bedroom Design",
  "Elegant Dining Room",
  "Stylish Home Office",
  "Urban Seminar Hall",
  "Urban Living Space",
  "Scandinavian Interior",
  "Industrial Style Loft",
  "Coastal Living Room",
  "Rustic Cabin Retreat",
  "Elegant Office Space",
  "Modern Family Room",
  "Spacious Living Area",
  "Sophisticated Kitchen",
  "Bright and Airy Kitchen",
  "Chic Studio Apartment",
  "Urban Chic Apartment",
  "Modern Stylish Kitchen",
  "Elegant Living Room",
  "Contemporary Office",
  "Elegant Living Room",
  "Living Room with a View",
  "Sleek Kitchen Design",
  "Classic Living Room",
  "Urban Apartment Render",
  "Contemporary Kitchen",
  "Residential Exterior",
  "Residential Exterior",
  "Living Room Render",
  "Living Room Render",
  "Living Room Render",
  "Living Room Render",
  "Living Room Render",
  "Minimalist Interior",
  "Cozy Bedroom Retreat",
  "Elegant Hallway",
  "Modern Facade",
  "Artistic Living Space",
  "Urban Loft",
  "Luxury Suite",
  "Family Home Render",
  "Creative Workspace",
];

// Map names and images together
const projects = images.map((image, idx) => ({
  name: projectNames[idx] || `Project ${idx + 1}`,
  image,
}));

const PROJECTS_PER_PAGE = 9;

export default function Collage2() {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

  const handleKnowMore = () => {
    setVisibleCount((prev) => prev + PROJECTS_PER_PAGE);
  };

  return (
    <section className="w-full py-12 px-2 mt-56 md:px-0 bg-[#f7f1ea] flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-marcellus font-semibold mb-10 text-[#3c2e1f] tracking-wide">
        Recent Projects
      </h2>
      <DraggableCardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.slice(0, visibleCount).map((project, idx) => (
          <DraggableCardBody key={idx} className="p-0 bg-white/80 shadow-lg min-h-40 w-full max-w-xs">
            <div className="relative h-64 w-full overflow-hidden rounded-md">
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col items-start">
                <span className="text-lg font-marcellus text-white drop-shadow font-semibold">
                  {project.name}
                </span>
                <button className="mt-2 px-4 py-1 rounded bg-[#e3e6e8] text-[#3c2e1f] text-sm font-medium shadow hover:bg-[#d1d5db] transition">
                  See Photos
                </button>
              </div>
            </div>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
      {visibleCount < projects.length && (
        <button
          onClick={handleKnowMore}
          className="mt-8 px-6 py-2 rounded bg-[#e3e6e8] text-[#3c2e1f] text-base font-medium shadow hover:bg-[#d1d5db] transition"
        >
          Know More
        </button>
      )}
    </section>
  );
}