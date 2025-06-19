import React, { useState } from "react";
import { DraggableCardBody, DraggableCardContainer } from "../ui/draggable-card";
import image from "../../assets/OurProjects/projects/popUP/REN 2-8-01.jpeg"
import exterior1 from "../../assets/OurProjects/projects/popUP/render.jpg";
import exterior2 from "../../assets/OurProjects/projects/popUP/000-01.jpeg";
import exterior3 from "../../assets/OurProjects/projects/popUP/CommercialServices.png";  

import kitchen1 from "../../assets/OurProjects/projects/popUP/render 7.jpg"
import kitchen2 from "../../assets/OurProjects/projects/popUP/render C-1-01.jpeg";
import kitchen3 from "../../assets/OurProjects/projects/popUP/render c-2-01.jpeg";
import kitchen4 from "../../assets/OurProjects/projects/popUP/render1 (1).jpg";
import kitchen5 from "../../assets/OurProjects/projects/popUP/render2 (3).jpg";
import kitchen6 from "../../assets/OurProjects/projects/popUP/render3 (3).jpg";

// Import unique images for each project
// import proj1img1 from "../../assets/OurProjects/projects/proj1img1.jpg";
// import proj1img2 from "../../assets/OurProjects/projects/proj1img2.jpg";
// import proj1img3 from "../../assets/OurProjects/projects/proj1img3.jpg";
// import proj2img1 from "../../assets/OurProjects/projects/proj2img1.jpg";
// import proj2img2 from "../../assets/OurProjects/projects/proj2img2.jpg";
// import proj2img3 from "../../assets/OurProjects/projects/proj2img3.jpg";
// import proj3img1 from "../../assets/OurProjects/projects/proj3img1.jpg";
// import proj3img2 from "../../assets/OurProjects/projects/proj3img2.jpg";
// import proj3img3 from "../../assets/OurProjects/projects/proj3img3.jpg";

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
  "Elegant Hallway",
  "Modern Facade",
  "Artistic Living Space",
  "Urban Loft Design",
  "Minimalist Interior",
  "Cozy Bedroom Retreat",
  "Sleek Bathroom Design",
  "Contemporary Office Space",
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
// Each object in this array corresponds to a project and contains unique images and description
const projectDetails = [
  {
    images: [
      { src: exterior1, alt: "Exterior Elevation - Front View" },
      { src: exterior2, alt: "Exterior Elevation - Side View" },
      { src: exterior3, alt: "Exterior Elevation - Night View" },
    ],
    description: "A stunning exterior elevation project featuring modern lines and natural materials.",
  },
  {
    images: [
      { src: kitchen1, alt: "Modular Kitchen - Main" },
      { src: kitchen2, alt: "Modular Kitchen - Storage" },
      { src: kitchen3, alt: "Modular Kitchen - Lighting" },
    ],
    description: "A modern modular kitchen with smart storage and elegant lighting solutions.",
  },
  {
    images: [
      { src: kitchen4, alt: "Luxe Kitchen - Overview" },
      { src: kitchen5, alt: "Luxe Kitchen - Island" },
      { src: kitchen6, alt: "Luxe Kitchen - Appliances" },
    ],
    description: "A luxurious kitchen design with premium appliances and a spacious island.",
  },
  {
    images: [
      { src: image, alt: "Exterior Elevation - Front View" },
      { src: image, alt: "Exterior Elevation - Side View" },
      { src: image, alt: "Exterior Elevation - Night View" },
    ],
    description: "A stunning exterior elevation project featuring modern lines and natural materials.",
  },
  {
    images: [
      { src: image, alt: "Exterior Elevation - Front View" },
      { src: image, alt: "Exterior Elevation - Side View" },
      { src: image, alt: "Exterior Elevation - Night View" },
    ],
    description: "A stunning exterior elevation project featuring modern lines and natural materials.",
  },
  {
    images: [
      { src: image, alt: "Exterior Elevation - Front View" },
      { src: image, alt: "Exterior Elevation - Side View" },
      { src: image, alt: "Exterior Elevation - Night View" },
    ],
    description: "A stunning exterior elevation project featuring modern lines and natural materials.",
  },
  {
    images: [
      { src: image, alt: "Exterior Elevation - Front View" },
      { src: image, alt: "Exterior Elevation - Side View" },
      { src: image, alt: "Exterior Elevation - Night View" },
    ],
    description: "A stunning exterior elevation project featuring modern lines and natural materials.",
  },
  {
    images: [
      { src: image, alt: "Exterior Elevation - Front View" },
      { src: image, alt: "Exterior Elevation - Side View" },
      { src: image, alt: "Exterior Elevation - Night View" },
    ],
    description: "A stunning exterior elevation project featuring modern lines and natural materials.",
  },
  {
    images: [
      { src: image, alt: "Exterior Elevation - Front View" },
      { src: image, alt: "Exterior Elevation - Side View" },
      { src: image, alt: "Exterior Elevation - Night View" },
    ],
    description: "A stunning exterior elevation project featuring modern lines and natural materials.",
  },
  // ...add more objects for each project...
];

function Modal({ open, onClose, project, details }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex flex-wrap items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-10 pb-0 relative flex flex-row min-h-[400px]">
        <button
          className="absolute top-4 right-6 text-2xl font-bold text-gray-600 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button>
        {/* Images on the left, stacked as draggable cards */}
        <div className="relative w-1/2 flex items-center justify-center min-h-[550px]">
          {(details?.images || []).map((img, idx) => (
            <DraggableCardBody
              key={idx}
              className={`absolute w-92 h-2/3 transition-all duration-300 rounded-lg shadow-lg bg-white
                ${idx === 0 ? "z-30 scale-100 left-0 top-0" : ""}
                ${idx === 1 ? "z-20 scale-95 left-16 top-16 opacity-80" : ""}
                ${idx === 2 ? "z-10 scale-90 left-0 top-40 opacity-60" : ""}
              `}
              style={{
                width: "260px",
                height: "200px",
                left: `${16 + idx * 16}px`,
                top: `${16 + idx * 16}px`,
                opacity: 1 - idx * 0.2,
                padding: 0,
                overflow: "hidden",
              }}
            >
              <div className="p-2 text-white flex text-center justify-center bg-black"> Drag here </div>
              <img
                src={typeof img === "string" ? img : img.src}
                alt={typeof img === "string" ? `More of ${project.name}` : img.alt}
                className="object-cover w-full h-full"
                draggable={true}
              />
            </DraggableCardBody>
          ))}
        </div>
        {/* Details on the right */}
        <div className="w-1/2 flex flex-col justify-center pl-10">
          <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
          <p className="mb-4 text-lg">{details?.description || "No description available."}</p>
        </div>
      </div>
    </div>
  );
}

export default function Collage2() {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjectIdx, setSelectedProjectIdx] = useState(null);

  const handleKnowMore = () => {
    setVisibleCount((prev) => prev + PROJECTS_PER_PAGE);
  };

  const handleSeePhotos = (idx) => {
    setSelectedProjectIdx(idx);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProjectIdx(null);
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
                <button
                  className="mt-2 px-4 py-1 rounded bg-[#e3e6e8] text-[#3c2e1f] text-sm font-medium shadow hover:bg-[#d1d5db] transition"
                  onClick={() => handleSeePhotos(idx)}
                >
                  Know More
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
      {/* Modal */}
      {selectedProjectIdx !== null && (
        <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          project={projects[selectedProjectIdx]}
          details={projectDetails[selectedProjectIdx]}
        />
      )}
    </section>
  );
}